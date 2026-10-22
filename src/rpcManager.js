//* Renders presence snapshots sent by the game ("brclient:presence" events, payload v1)

const MODES = { solo: "Solo", duos: "Duos", squads: "Squads", snowball: "Snowball" };
const STATES = ["menu", "lobby", "game", "spectating"];
const STORM_PHASES = ["safe", "shrinking"];
const MAX_LOBBY_WAIT = 10 * 60 * 1000; //* Dev servers report countdowns hours away, don't show those
const MAX_CLOCK_DRIFT = 24 * 60 * 60 * 1000;

const count = (n, max) => Number.isInteger(n) && n >= 0 && n <= max ? n : null;
const timestamp = (t) => Number.isFinite(t) && Math.abs(t - Date.now()) < MAX_CLOCK_DRIFT ? t : null;

module.exports = class rpcManager {
    constructor(client) {
        this.client = client;
    }

    //* Validates the JSON string from the page, returns a clean snapshot or null
    static parse(json) {
        if (typeof json !== "string" || json.length > 2000) return null;
        let data;
        try {
            data = JSON.parse(json);
        } catch {
            return null;
        }
        if (!data || data.v !== 1 || !STATES.includes(data.state)) return null;

        const partyMax = count(data.partyMax, 16);
        return {
            state: data.state,
            mode: MODES[data.mode] ?? null,
            partySize: partyMax ? Math.min(count(data.partySize, 16) ?? 0, partyMax) : 0,
            partyMax,
            playersLeft: count(data.playersLeft, 1000),
            kills: count(data.kills, 1000),
            lobbyStartsAt: timestamp(data.lobbyStartsAt),
            matchStartedAt: timestamp(data.matchStartedAt),
            stormPhase: STORM_PHASES.includes(data.stormPhase) ? data.stormPhase : null,
            spectating: typeof data.spectating === "string" ? data.spectating.trim().slice(0, 32) || null : null
        };
    }

    //* null = no snapshot yet (page loading, or an old game build that doesn't send any)
    //* env = environment label shown as "[Tournament]", null on the default environment
    render(snapshot, env = null) {
        const tag = env ? ` [${env}]` : "";
        const activity = {
            details: `Playing BuildRoyale.io${tag}`,
            largeImageKey: "br",
            largeImageText: "BuildRoyale.io",
            instance: false
        };
        if (snapshot) Object.assign(activity, this.describe(snapshot, tag));
        this.client.setActivity(activity).catch(() => {}); //* Discord closed, nothing to do
    }

    describe(s, tag = "") {
        const mode = s.mode ?? "Battle Royale";
        const players = s.playersLeft !== null ? `${s.playersLeft} Left` : null;
        //* Discord shows "(2 of 4)" after the state line, so only send it with a state line
        const party = s.partySize > 0 && s.partyMax > 1 ? { partySize: s.partySize, partyMax: s.partyMax } : {};

        switch (s.state) {
            case "menu":
                return {
                    details: party.partySize ? "In Menu" : `In Menu${tag}`,
                    ...(party.partySize ? { state: `${mode} Party${tag}`, ...party } : {})
                };
            case "lobby": {
                const countdown = s.lobbyStartsAt && s.lobbyStartsAt > Date.now() && s.lobbyStartsAt - Date.now() < MAX_LOBBY_WAIT;
                return {
                    details: countdown && s.playersLeft !== null ? `Match starting | ${s.playersLeft} Players` : "Waiting for players...",
                    state: `In ${mode} Lobby${tag}`,
                    endTimestamp: countdown ? s.lobbyStartsAt : undefined,
                    smallImageKey: "timer",
                    smallImageText: countdown ? "Match starting" : "Waiting for players",
                    ...party
                };
            }
            case "game": {
                const kills = s.kills !== null ? `${s.kills} ${s.kills === 1 ? "Kill" : "Kills"}` : null;
                return {
                    details: [kills, players].filter(Boolean).join(" | ") || "In Match",
                    state: `Playing ${mode}${tag}`,
                    startTimestamp: s.matchStartedAt ?? undefined,
                    smallImageKey: s.stormPhase === "shrinking" ? "storm" : s.stormPhase === "safe" ? "timer" : "killsicon",
                    smallImageText: s.stormPhase === "shrinking" ? "Storm is shrinking" : s.stormPhase === "safe" ? "Storm is holding" : "In Match",
                    ...party
                };
            }
            case "spectating":
                return {
                    details: s.spectating ? `Spectating ${s.spectating}` : "Spectating",
                    state: [mode + tag, players].filter(Boolean).join(" | "),
                    startTimestamp: s.matchStartedAt ?? undefined,
                    smallImageKey: "spectate",
                    smallImageText: "Spectating",
                    ...party
                };
        }
    }
}
