module.exports = class rpcManager {
    constructor(client) {
        this.client = client;
        this.gameInfo = {
            state: "default",
            time: "0:00",
            players: "0",
            elims: "0",
            mode: "default",
            partysize: 0,
            stormstate: "default",
            getMaxPartySize: () => {
                switch (this.gameInfo.mode) {
                    case "prod":
                        return 1;
                    case "duos":
                        return 2;
                    case "squads":
                        return 4;
                    default:
                        return 1;
                }
            },
            getCurrentModeDisplay: () => {
                switch (this.gameInfo.mode) {
                    case "prod":
                        return "Solo";
                    case "duos":
                        return "Duos";
                    case "squads":
                        return "Squads";
                    case "close":
                        return "Close Encounters";
                    default:
                        return "Solo";
                }
            }
        }
        this.Activity = {
            details: `In menu`,
            state: undefined,
            partySize: undefined,
            partyMax: undefined,
            startTimestamp: undefined,
            largeImageKey: `brlogo`,
            largeImageText: undefined,
            smallImageKey: undefined,
            smallImageText: undefined,
            instance: false
        }
        this.states = {
            spec: {
                setDefault: () => {
                    this.Activity = {
                        details: `Spectating`,
                        state: "Loading State",
                        partySize: undefined,
                        partyMax: undefined,
                        startTimestamp: Date.now(),
                        largeImageKey: `brlogo`,
                        largeImageText: "BuildRoyale.io",
                        smallImageKey: "delta",
                        smallImageText: "Delta Client",
                        instance: false
                    }
                    this.updateActivity();
                },
                updateState: () => {
                    this.Activity["details"] = `Spectating ${this.gameInfo.getCurrentModeDisplay()}`;
                    if (this.gameInfo.partysize > 0) {
                        this.Activity["state"] = "In Party";
                        this.Activity["partySize"] = parseInt(this.gameInfo.partysize);
                        this.Activity["partyMax"] = this.gameInfo.getMaxPartySize();
                    } else {
                        this.Activity["state"] = undefined;
                        this.Activity["partySize"] = undefined;
                        this.Activity["partyMax"] = undefined;
                    }
                    this.updateActivity();
                }
            },
            menu: {
                setDefault: () => {
                    this.Activity = {
                        details: `In Menu`,
                        state: undefined,
                        partySize: undefined,
                        partyMax: undefined,
                        startTimestamp: undefined,
                        largeImageKey: `brlogo`,
                        largeImageText: "BuildRoyale.io",
                        smallImageKey: "delta",
                        smallImageText: "Delta Client",
                        instance: false
                    }
                    this.updateActivity();
                },
                updateState: () => {
                    if (this.gameInfo.partysize > 0) {
                        this.Activity["state"] = "In Party";
                        this.Activity["partySize"] = parseInt(this.gameInfo.partysize);
                        this.Activity["partyMax"] = this.gameInfo.getMaxPartySize();
                    } else {
                        this.Activity["state"] = undefined;
                        this.Activity["partySize"] = undefined;
                        this.Activity["partyMax"] = undefined;
                    }
                    this.updateActivity();
                }
            },
            lobby: {
                setDefault: () => {
                    this.Activity = {
                        details: "Loading Lobby Details", //waiting
                        state: "Loading Lobby State", //in lobby
                        startTimestamp: undefined,
                        largeImageKey: `brlogo`,
                        largeImageText: "BuildRoyale.io",
                        smallImageKey: "delta",
                        smallImageText: "Delta Client",
                        instance: false
                    }
                    this.updateActivity();
                },
                updateState: () => {
                    if (parseInt(this.gameInfo.players) <= this.gameInfo.getMaxPartySize()) {
                        this.Activity["details"] = `Waiting for players...`;
                    } else {
                        this.Activity["details"] = `Match in ${this.gameInfo.time} | ${this.gameInfo.players} Players`;
                    }
                    this.Activity["state"] = `In ${this.gameInfo.getCurrentModeDisplay()} Lobby`;
                    if (this.gameInfo.partysize > 0) {
                        this.Activity["partySize"] = parseInt(this.gameInfo.partysize);
                        this.Activity["partyMax"] = this.gameInfo.getMaxPartySize();
                    } else {
                        this.Activity["partySize"] = undefined;
                        this.Activity["partyMax"] = undefined;
                    }
                    this.updateActivity();
                }
            },
            game: {
                setDefault: () => {
                    this.Activity = {
                        details: "Loading Game Details", //0 kills | 0 players
                        state: "Loading Game State", // playing solo
                        partySize: 0,
                        partyMax: 0,
                        startTimestamp: Date.now(),
                        largeImageKey: `brlogo`,
                        largeImageText: "Delta Client",
                        smallImageKey: undefined,
                        smallImageText: undefined,
                        instance: false
                    }
                    this.updateActivity();
                },
                updateState: () => {
                    this.Activity["details"] = `${this.gameInfo.elims} Kills | ${this.gameInfo.players} Players`;
                    this.Activity["state"] = `Playing ${this.gameInfo.getCurrentModeDisplay()}`;
                    if (this.gameInfo.partysize > 0) {
                        this.Activity["partySize"] = parseInt(this.gameInfo.partysize);
                        this.Activity["partyMax"] = this.gameInfo.getMaxPartySize();
                    } else {
                        this.Activity["partySize"] = undefined;
                        this.Activity["partyMax"] = undefined;
                    }
                    this.Activity["smallImageKey"] = this.gameInfo.stormstate;
                    this.Activity["smallImageText"] = this.gameInfo.time;
                    this.updateActivity();
                }
            }
        }
    }

    updateActivity = () => {
        this.client.setActivity(this.Activity);
    }

    setActivityField = (key, value) => {
        this.Activity[key] = value;
    }

    /*
    inGame = () => {
        this.Activity = {
            details: `In game`,
            state: `0 kills | 0 players`,
            startTimestamp: Date.now(),
            largeImageKey: `brlogo`,
            largeImageText: "Delta Client",
            smallImageKey: undefined,
            smallImageText: undefined,
            instance: false
        }
        this.updateActivity();
    }
    */
}

/*
ipcMain.handle("updateTime", async (bullshit, value) => {
    ActivityManager.gameInfo.time = value;
    if (ActivityManager.gameInfo.state !== 'menu')
        ActivityManager.updateActivityField("state", `Waiting for players ${ActivityManager.gameInfo.time} | ${ActivityManager.gameInfo.players} players`);
})

ipcMain.handle("updatePlayers", async (bullshit, value) => {
    ActivityManager.gameInfo.players = value;
    ActivityManager.updateActivityField("state", `Waiting for players ${ActivityManager.gameInfo.time} | ${ActivityManager.gameInfo.players} players`);
})
*/