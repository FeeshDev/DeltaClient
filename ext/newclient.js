console.log("injected")
window.killFeed = [];
window.killFeedText = () => {
    let text = killFeed.join("\n");
    return text;
}

window.getMaxModePlayers = (mode) => {
    switch (mode) {
        case "prod":
            return 1;
        case "duos":
            return 2;
        case "squads":
            return 4;
        default:
            return 1;
    }
}

localStorage.deltaPartySize = "0";

webpackJsonp([0x0], {
    1: function (_0x353a2d, _0xb3629, _0x538654) {
        var _0x3667d8 = window['VULTR_SCHEME'];
        if (_0x3667d8 == 'build_redirect') {
            window['location']['href'] = 'https://build_redirect.buildroyale.io/redirect.html';
        }
        try {
            var _0x66cf55 = ['buildroyale-io.com', 'buildroyale.online', 'buildroyale.org', 'buildroyal.io', 'buildroyaleio.com', 'build-royale.com', 'red-ball4.com'];
            for (var _0x1c06f3 = 0x0; _0x1c06f3 < _0x66cf55['length']; _0x1c06f3++) {
                for (var _0x45271b = 0x0; _0x45271b < window['location']['ancestorOrigins']['length']; _0x45271b++) {
                    if (window['location']['ancestorOrigins'][_0x45271b]['includes'](_0x66cf55[_0x1c06f3])) {
                        window['location']['href'] = 'https://build_redirect.buildroyale.io/redirect.html';
                    }
                }
            }
        } catch (_0x4f45a8) { }
        window['_requestAnimationFrame'] = window['requestAnimationFrame'];
        window['requestAnimationFrame'] = function (_0x260584) {
            setTimeout(function () {
                window['_requestAnimationFrame'](_0x260584);
            }, 0x0);
        };
        var _0x35cfe3 = ['prod', 'duos', 'squads'];
        var _0x4af76c = [0x1, 0x2, 0x4];
        var _0x15fc48 = window['location']['hostname'] + ':8081';
        var _0x3fcd9a = ['dj'];
        if (_0x3667d8 == 'build_notbeta') {
            _0x3fcd9a = ['dj'];
        }
        if (_0x3667d8 == 'build_prod') {
            _0x3fcd9a = ['be', 'sd', 'vz', 'ea'];
        }
        function _0x174cce() {
            return _0x3fcd9a[Math['floor'](Math['random']() * _0x3fcd9a['length'])];
        }
        function _0x4cc7b5(_0x23cbbc, _0x2ba66e) {
            if (!_0x2ba66e)
                _0x2ba66e = window['location']['href'];
            _0x23cbbc = _0x23cbbc['replace'](/[\[\]]/g, '\\$&');
            var _0x103c9c = new RegExp('[?&]' + _0x23cbbc + '(=([^&#]*)|&|#|$)'),
                _0x573b61 = _0x103c9c['exec'](_0x2ba66e);
            if (!_0x573b61)
                return null;
            if (!_0x573b61[0x2])
                return '';
            return decodeURIComponent(_0x573b61[0x2]['replace'](/\+/g, ' '));
        }
        window['enableChristmas'] = ![];
        var _0x5f37fb = window['enableChristmas'];
        var _0x591bd5 = -0x1;
        function _0x4718e9() {
            var _0x1c5ef9 = new XMLHttpRequest();
            var _0x1259f7 = _0x174cce();
            var _0x2822a9 = 'https://build_matchmaking_' + _0x1259f7 + '.buildroyale.io/RESTservers';
            _0x1c5ef9['open']('GET', _0x2822a9, !![]);
            _0x1c5ef9['send']();
            _0x1c5ef9['onreadystatechange'] = function (_0x7164df) {
                if (_0x1c5ef9['readyState'] != 0x4 || _0x1c5ef9['status'] != 0xc8 && _0x1c5ef9['status'] != 0x130) {
                    return;
                }
                var _0x183645 = _0x1c5ef9['responseText'];
                var _0x4ddbd2 = JSON['parse'](_0x183645)['servers'];
                var _0x2427ff = [];
                var _0x32c150 = [];
                var _0x150ea9 = [];
                for (var _0x552945 = 0x0; _0x552945 < _0x4ddbd2['length']; _0x552945++) {
                    var _0x960db6 = _0x4ddbd2[_0x552945];
                    var _0x333270 = ![];
                    for (var _0x1fcb2a = 0x0; _0x1fcb2a < _0x150ea9['length']; _0x1fcb2a++) {
                        if (_0x150ea9[_0x1fcb2a]['region'] == _0x960db6['region']) {
                            var _0x5dfb70 = _0x150ea9[_0x1fcb2a];
                            if (_0x960db6['playerCount'] - _0x960db6['index'] < _0x5dfb70['playerCount'] - _0x5dfb70['index'] && _0x960db6['index'] < 0xa) {
                                _0x150ea9[_0x1fcb2a] = _0x960db6;
                            }
                            _0x333270 = !![];
                        }
                    }
                    if (!_0x333270) {
                        _0x150ea9['push'](_0x960db6);
                    }
                }
                for (var _0x552945 = 0x0; _0x552945 < _0x150ea9['length']; _0x552945++) {
                    var _0x960db6 = _0x150ea9[_0x552945];
                    if (_0x32c150['indexOf'](_0x960db6['region']) !== -0x1)
                        continue;
                    (function (_0x168588) {
                        var _0x15a49f = new XMLHttpRequest();
                        _0x15a49f['onreadystatechange'] = function (_0x20638c) {
                            var _0x110f70 = _0x20638c['target'];
                            if (_0x110f70['readyState'] != 0x4)
                                return;
                            if (_0x110f70['status'] == 0xc8) {
                                for (var _0x5963d1 = 0x0; _0x5963d1 < _0x2427ff['length']; _0x5963d1++) {
                                    _0x2427ff[_0x5963d1]['abort']();
                                }
                                _0x591bd5 = _0x168588['region'];
                                onRegionGet(_0x591bd5);
                            } else { }
                        };
                        var _0x3e6ba2 = 'https://' + _0x4d9cb2(_0x168588['ip']) + ':' + _0x362f21(_0x168588) + '/ping';
                        _0x15a49f['open']('GET', _0x3e6ba2, !![]);
                        _0x15a49f['send'](null);
                        _0x2427ff['push'](_0x15a49f);
                    }(_0x960db6));
                }
                function _0x4d9cb2(_0x46e192) {
                    if (_0x46e192 == '127.0.0.1' || _0x46e192 == '7f000001' || _0x46e192 == '903d62ef5d1c2fecdcaeb5e7dd485eff') {
                        return window['location']['hostname'];
                    } else {
                        return 'ip_' + _0x46e192 + '.buildroyale.io';
                    }
                }
                function _0x362f21(_0x5cc0d6) {
                    if (_0x5cc0d6['region'] == 0x0) {
                        return 0x1f90;
                    }
                    return 0x1bb;
                }
            };
        }
        _0x4718e9();
        function _0xbd15d3() {
            if (gameWrapper['enabled'] && gameWrapper['isStoreLoaded']) {
                var _0x3f83d3 = gameWrapper['allProducts']['find'](_0x72cd8a => _0x72cd8a['productId'] == 'io.buildroyale.app.remove_ads');
                return _0x3f83d3['metadata'] != null ? _0x3f83d3 : null;
            } else {
                return null;
            }
        }
        function _0x44e500() {
            var _0x22ca0e = _0xbd15d3();
            var _0x386af6 = false;
            document['getElementById']('disableAdsButton')['style']['display'] = _0x386af6 ? '' : 'none';
        }
        window['onload'] = function () {

            setTimeout(() => {
                if (typeof (io) == "undefined" || !io) window.api.reload();
                window.socket = io("http://localhost:3344");
                socket.emit("gameState", "menu");
                socket.emit("gameInfo", "mode", "prod");
            }, 300);

            try {
                for (var _0x3192cf = 0x0; _0x3192cf < window['location']['ancestorOrigins']['length']; _0x3192cf++) {
                    if (window['location']['ancestorOrigins'][_0x3192cf]['includes']('crazygames.com')) {
                        document['getElementById']('more')['style']['visibility'] = 'hidden';
                    }
                }
            } catch (_0x2ad4fb) { }
            if (_0x28dea0() && !localStorage['ytskin']) { }
            function _0x1882d4(_0x564a83) {
                var _0x8e45fe = document['getElementById'](_0x564a83)['style'];
                _0x8e45fe['visibility'] = 'hidden';
                _0x8e45fe['display'] = 'none';
            }
            function _0x306f97(_0x1b8883) {
                var _0x189310 = document['getElementById'](_0x1b8883)['style'];
                _0x189310['visibility'] = 'visible';
                _0x189310['display'] = 'initial';
            }
            if (_0x5f37fb) {
                window['groundColor'] = '#CCC';
                console['log']('CHANGED TO CHRISTMAS COLOR');
            }
            gameWrapper['onStoreLoad'] = function () {
                _0x44e500();
            };
            gameWrapper['onPurchaseSuccess'] = function () {
                _0x44e500();
            };

            document['getElementById']('disableAdsButton')['addEventListener']('click', function () {
                gameWrapper['makePurchase']('io.buildroyale.app.remove_ads');
            });
            var _0x34d204 = document['createElement']('script');
            document['head']['appendChild'](_0x34d204);
            var _0x42f450 = document['createElement']('script');
            _0x42f450['src'] = 'https://www.googletagservices.com/tag/js/gpt.js';
            document['head']['appendChild'](_0x42f450);
            (function (_0x1bf663, _0x54edd5, _0x4ce19c, _0x1b090c, _0x2f3155, _0x3a9533, _0x3e8cb3) {
                _0x1bf663['GoogleAnalyticsObject'] = _0x2f3155;
                _0x1bf663[_0x2f3155] = _0x1bf663[_0x2f3155] || function () {
                    (_0x1bf663[_0x2f3155]['q'] = _0x1bf663[_0x2f3155]['q'] || [])['push'](arguments);
                },
                    _0x1bf663[_0x2f3155]['l'] = 0x1 * new Date();
                _0x3a9533 = _0x54edd5['createElement'](_0x4ce19c),
                    _0x3e8cb3 = _0x54edd5['getElementsByTagName'](_0x4ce19c)[0x0];
                _0x3a9533['async'] = 0x1;
                _0x3a9533['src'] = _0x1b090c;
                _0x3e8cb3['parentNode']['insertBefore'](_0x3a9533, _0x3e8cb3);
            }(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga'));
            setTimeout(function () {
                if (ga !== undefined) {
                    ga('create', 'UA-87346685-5', 'auto');
                    ga('send', 'pageview');
                }
            }, 0x1388);
            var _0x39633f = [];
            var _0xfbc309 = [];
            function _0x3a4184(_0xe9c080) {
                if (_0x39633f['indexOf'](_0xe9c080) != -0x1) {
                    return _0xfbc309[_0x39633f['indexOf'](_0xe9c080)];
                }
                var _0x38c580 = null;
                _0x38c580 = document['getElementById'](_0xe9c080);
                _0x39633f['push'](_0xe9c080);
                _0xfbc309['push'](_0x38c580);
                return _0x38c580;
            }
            try { } catch (_0x2af62c) { }
            if (_0x3dc783 && !gameWrapper['enabled']) {
                aiptag['cmd']['display']['push'](function () {
                    aipDisplayTag['display']('buildroyale-io_300x250');
                });
                aiptag['cmd']['display']['push'](function () {
                    aipDisplayTag['display']('buildroyale-io_300x250_2');
                });
                aiptag['cmd']['display']['push'](function () {
                    aipDisplayTag['display']('buildroyale-io_728x90');
                });
                aiptag['cmd']['display']['push'](function () {
                    aipDisplayTag['display']('buildroyale-io_300x600');
                });
            }
            var _0x124337 = '';
            for (var _0x3192cf = 0x0; _0x3192cf < _0x35cfe3['length']; _0x3192cf++) {
                var _0x175dad = 'https://' + _0x35cfe3[_0x3192cf] + '.buildroyale.io';
                if (_0x35cfe3[_0x3192cf] == 'prod') {
                    _0x175dad = 'https://buildroyale.io/';
                }
                var _0x100d2f = 0x0;
                if (_0x3192cf > 0x0) {
                    _0x100d2f = -0x12;
                }
                _0x124337 += '<div><a class=\"a\"  style=\"margin-top: ' + _0x100d2f + 'px; margin-right: 0; display: block; width: fit-content; height: fit-content;\"><img id=\"playlist' + _0x3192cf + '\" class=\"queue\" draggable=\"false\" src=\"buildart/build_' + _0x35cfe3[_0x3192cf] + '.png\"></a></div>';
            }
            _0x124337 += '<div id=\"partyleader\" align=\"center\" style=\"position: fixed; margin-top: 0px; top:' + (_0x35cfe3['length'] * 0x55 - 0x14) + 'px; right: 0px; width: 255px;\">Only the party leader<br>can select a playlist</div>';
            document['getElementById']('reftopright')['innerHTML'] = _0x124337;
            _0x1882d4('partyleader');
            window['vultr'] = {
                'servers': []
            };
            var _0x108734 = _0x538654(0x2);
            var _0x4609fc;
            var _0x3dc783 = window['location']['hostname']['indexOf']('buildroyale.io') != -0x1 || window['location']['hostname']['indexOf']('buildroyale.net') != -0x1;
            if (!_0x3dc783 && location['protocol'] === 'https:') {
                alert('Please use HTTP in development, since the SSL certificates are not valid for the c9users.io domain.');
            }
            if (_0x3dc783) {
                _0x4609fc = new _0x108734('buildroyale.io', 0x1f90, 0x64, 0x2, ![]);
            } else {
                _0x4609fc = new _0x108734(_0x15fc48, 0x50, 0x64, 0x2, ![]);
            }
            _0x4609fc['debugLog'] = ![];
            var _0x4c7f3b = _0x538654(0xe);
            var _0x3122b3 = _0x538654(0xf);
            var _0x193f4e = new _0x3122b3();
            var _0x42a2d6 = 0x3e80;
            var _0x1db9a8 = 0x0;
            var _0x5ca4d6 = 0x0;
            var _0x312f16 = -0x1;
            var _0x4c7288 = ![];
            window['grassTypes'] = 0x3;
            window['grassWidth'] = 0x3c;
            window['grass'] = [];
            for (var _0x3192cf = 0x0; _0x3192cf < window['grassTypes']; _0x3192cf++) {
                window['grassCanvas' + _0x3192cf] = document['createElement']('canvas');
                window['grassCanvas' + _0x3192cf]['width'] = window['grassWidth'];
                window['grassCanvas' + _0x3192cf]['height'] = window['grassWidth'];
                window['grassCtx' + _0x3192cf] = window['grassCanvas' + _0x3192cf]['getContext']('2d');
                window['grassCtx' + _0x3192cf]['translate'](window['grassCanvas' + _0x3192cf]['width'] / 0x2, window['grassCanvas' + _0x3192cf]['height'] / 0x2);
                var _0x4d42df = new _0x193f4e['object']();
                _0x4d42df['position']['y'] = 0x1e;
                _0x4d42df['rotational'] = new _0x193f4e['object']();
                _0x4d42df['img'] = new _0x193f4e['image'](_0x3a4184('grass' + _0x3192cf), 0x0, -0x1e, 0x46, 0x46, 0.3);
                _0x4d42df['rotational']['add'](_0x4d42df['img']);
                _0x4d42df['add'](_0x4d42df['rotational']);
                window['grass' + _0x3192cf] = _0x4d42df;
            }
            function _0x43d4e2() {
                for (var _0x2970bb = 0x0; _0x2970bb < window['grassTypes']; _0x2970bb++) {
                    var _0x4f0a38 = window['grassCanvas' + _0x2970bb]['width'];
                    window['grassCtx' + _0x2970bb]['clearRect'](-_0x4f0a38 / 0x2, -_0x4f0a38 / 0x2, _0x4f0a38, _0x4f0a38);
                    window['grass' + _0x2970bb]['render'](window['grassCtx' + _0x2970bb], 0x1, 0x1);
                    window['grassCtx' + _0x2970bb]['clearRect'](-_0x4f0a38 / 0x2, 0x17, _0x4f0a38, 0x1e);
                }
            }
            window['mobilecheck'] = function () {
                var _0x45e7f7 = ![];
                (function (_0xd75bf1) {
                    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i['test'](_0xd75bf1) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i['test'](_0xd75bf1['substr'](0x0, 0x4)))
                        _0x45e7f7 = !![];
                }(navigator['userAgent'] || navigator['vendor'] || window['opera']));
                return _0x45e7f7;
            };
            var _0x486e59 = window['mobilecheck']();
            window['addEventListener']('resize', function (_0x49a1a1) {
                _0x486e59 = window['mobilecheck']();
            });
            if (_0x486e59) {
                _0x3a4184('buildroyale-io_300x250')['style']['display'] = 'none';
                _0x3a4184('buildroyale-io_300x250')['style']['visibility'] = 'hidden';
                _0x3a4184('buildroyale-io_300x250_2')['style']['display'] = 'none';
                _0x3a4184('buildroyale-io_300x250_2')['style']['visibility'] = 'hidden';
                _0x3a4184('buildroyale-io_728x90')['style']['display'] = 'none';
                _0x3a4184('buildroyale-io_728x90')['style']['visibility'] = 'hidden';
                _0x3a4184('buildroyale-io_300x600')['style']['display'] = 'none';
                _0x3a4184('buildroyale-io_300x600')['style']['visibility'] = 'hidden';
            }
            function _0x28dea0() {
                var _0x2270d8 = 'test';
                try {
                    localStorage['setItem'](_0x2270d8, _0x2270d8);
                    localStorage['removeItem'](_0x2270d8);
                    return !![];
                } catch (_0x457733) {
                    return ![];
                }
            }
            function _0x3a33ce() {
                return {
                    'array': [],
                    'length': 0x0,
                    'push': function (_0x2692ba) {
                        this['array'][this['length']++] = _0x2692ba;
                    },
                    'pushIfNotIn': function (_0x5c7fae) {
                        if (!this['contains'](_0x5c7fae)) {
                            this['push'](_0x5c7fae);
                        }
                    },
                    'sort': function (_0x2e649f) {
                        this['array']['sort'](_0x2e649f);
                    },
                    'removeIfIn': function (_0x28dbb2) {
                        while (this['indexOf'](_0x28dbb2) != -0x1) {
                            this['remove'](this['indexOf'](_0x28dbb2));
                        }
                    },
                    'remove': function (_0x24ee2e) {
                        if (_0x24ee2e >= this['length'] || _0x24ee2e < 0x0) {
                            return;
                        }
                        for (var _0x5f4dfd = _0x24ee2e; _0x5f4dfd < this['length'] - 0x1; _0x5f4dfd++) {
                            this['array'][_0x5f4dfd] = this['array'][_0x5f4dfd + 0x1];
                        }
                        this['length']--;
                    },
                    'splice': function (_0x218491, _0x3b3ee9) {
                        for (var _0x460d65 = 0x0; _0x460d65 < _0x3b3ee9 && _0x218491 < this['length']; _0x460d65++) {
                            this['remove'](_0x218491);
                        }
                    },
                    'forEach': function (_0x44feaf) {
                        for (var _0x1861e7 = 0x0; _0x1861e7 < this['length']; _0x1861e7++) {
                            if (_0x44feaf(this['array'][_0x1861e7])) {
                                this['remove'](_0x1861e7);
                                _0x1861e7--;
                            }
                        }
                    },
                    'indexOf': function (_0x4fc5ba) {
                        for (var _0x4aeae8 = 0x0; _0x4aeae8 < this['length']; _0x4aeae8++) {
                            if (this['array'][_0x4aeae8] == _0x4fc5ba) {
                                return _0x4aeae8;
                            }
                        }
                        return -0x1;
                    },
                    'contains': function (_0xe3c877) {
                        return this['indexOf'](_0xe3c877) != -0x1;
                    },
                    'makeDebugArray': function () {
                        var _0x580212 = [];
                        for (var _0x52f9cc = 0x0; _0x52f9cc < this['length']; _0x52f9cc++) {
                            _0x580212['push'](this['array'][_0x52f9cc]);
                        }
                        return _0x580212;
                    }
                };
            }
            var _0x2ba128 = {
                'linear': function (_0x219e61) {
                    return _0x219e61;
                },
                'easeOutElastic': function (_0x41a0d5) {
                    var _0x2e69c0 = 0x2 * Math['PI'] / 0x3;
                    return _0x41a0d5 === 0x0 ? 0x0 : _0x41a0d5 === 0x1 ? 0x1 : Math['pow'](0x2, -0xa * _0x41a0d5) * Math['sin']((_0x41a0d5 * 0xa - 0.75) * _0x2e69c0) + 0x1;
                },
                'easeInQuad': function (_0x1d3b62) {
                    return _0x1d3b62 * _0x1d3b62;
                },
                'easeOutQuad': function (_0x23b612) {
                    return 0x1 - (0x1 - _0x23b612) * (0x1 - _0x23b612);
                },
                'easeInExpo': function (_0x31c688) {
                    return _0x31c688 === 0x0 ? 0x0 : Math['pow'](0x2, 0xa * _0x31c688 - 0xa);
                },
                'easeOutExpo': function (_0xce668) {
                    return _0xce668 === 0x1 ? 0x1 : 0x1 - Math['pow'](0x2, -0xa * _0xce668);
                },
                'easeOutCubic': function (_0x42c241) {
                    return 0x1 - (0x1 - _0x42c241) * (0x1 - _0x42c241) * (0x1 - _0x42c241);
                },
                'easeInCubic': function (_0x5c1da5) {
                    return _0x5c1da5 * _0x5c1da5 * _0x5c1da5;
                },
                'easeInQuart': function (_0x54875c) {
                    return _0x54875c * _0x54875c * _0x54875c * _0x54875c;
                }
            };
            function _0x487276(_0x493bac, _0x105146, _0x22ce26, _0x26ff55, _0x54bb95, _0x16987c, _0x3020ad, _0x22a8ab) {
                return {
                    'obj': _0x493bac,
                    'param': _0x105146,
                    'old': _0x22ce26,
                    'newp': _0x26ff55,
                    'time': _0x54bb95,
                    'delay': _0x16987c || 0x0,
                    'currentTime': 0x0,
                    'ef': _0x3020ad,
                    'cb': _0x22a8ab
                };
            }
            var _0x563de5 = new _0x3a33ce();
            function _0x211d43(_0x11dee0, _0x5c68da) {
                for (var _0x2cc289 = 0x0; _0x2cc289 < _0x563de5['length']; _0x2cc289++) {
                    if (_0x563de5['array'][_0x2cc289]['obj'] == _0x11dee0 && _0x563de5['array'][_0x2cc289]['param'] == _0x5c68da) {
                        _0x563de5['splice'](_0x2cc289, 0x1);
                        _0x2cc289--;
                    }
                }
            }
            function _0x4dbb25(_0x5e77d4, _0x17ca16, _0x5affcd, _0x432082, _0x49e78a, _0x3f5746, _0x3a3a44, _0x30e961) {
                _0x211d43(_0x5e77d4, _0x17ca16);
                _0x563de5['push'](new _0x487276(_0x5e77d4, _0x17ca16, _0x5affcd, _0x432082, _0x49e78a, _0x3f5746, _0x3a3a44 || _0x2ba128['easeOutExpo'], _0x30e961));
            }
            function _0x45ff4f(_0x26f35a) {
                for (var _0x205f27 = 0x0; _0x205f27 < _0x563de5['length']; _0x205f27++) {
                    var _0x49ceaa = _0x563de5['array'][_0x205f27];
                    _0x49ceaa['currentTime'] += _0x26f35a;
                    if (_0x49ceaa['currentTime'] < _0x49ceaa['delay']) {
                        continue;
                    }
                    if (_0x49ceaa['currentTime'] > _0x49ceaa['delay'] + _0x49ceaa['time']) {
                        _0x49ceaa['obj'][_0x49ceaa['param']] = _0x49ceaa['newp'];
                        if (_0x49ceaa['cb'] !== undefined) {
                            _0x49ceaa['cb'](_0x49ceaa['obj']);
                        }
                        _0x563de5['splice'](_0x205f27, 0x1);
                        _0x205f27--;
                        continue;
                    }
                    var _0x31fb92 = (_0x49ceaa['currentTime'] - _0x49ceaa['delay']) / _0x49ceaa['time'];
                    _0x49ceaa['obj'][_0x49ceaa['param']] = _0x193f4e['normalLerp'](_0x49ceaa['old'], _0x49ceaa['newp'], _0x49ceaa['ef'](_0x31fb92));
                }
            }
            var _0x2d9387 = !![];
            var _0x4c23bf = null;
            var _0x1b0d09 = [];
            var _0x14a64b = null;
            var _0x9ff2f = 0x0;
            var _0x113210 = ![];
            var _0x2c4843 = '';
            var _0x28e5b7 = '';
            var _0x317e9a = !![];
            var _0x4559a1 = ![];
            var _0x349dc2 = Date['now']();
            var _0x1a3ba7 = 'build_' + _0x35cfe3[0x0];
            localStorage.deltaMode = _0x35cfe3[0];
            var _0x279793 = [];
            for (var _0x3192cf = 0x0; _0x3192cf < _0x35cfe3['length']; _0x3192cf++) {
                if (_0x3192cf == 0x0) {
                    try {
                        document['getElementById']('playlist' + _0x3192cf)['style']['filter'] = 'drop-shadow(0px 0px 3px #ccc)';
                        if (parseInt(localStorage.deltaPartySize) <= getMaxModePlayers(_0x35cfe3[_0x3192cf])) socket.emit("gameInfo", "mode", _0x35cfe3[_0x3192cf]);
                        localStorage.deltaMode = _0x35cfe3[_0x3192cf];
                    } catch (_0x212064) {
                        console['log']('STYLE 1');
                    }
                }
                try {
                    document['getElementById']('playlist' + _0x3192cf)['onclick'] = function (_0x57511a) {
                        if (_0x317e9a) {
                            var _0x256948 = _0x57511a['target']['id']['substr'](0x8);
                            for (var _0x5a0226 = 0x0; _0x5a0226 < _0x35cfe3['length']; _0x5a0226++) {
                                document['getElementById']('playlist' + _0x5a0226)['style']['filter'] = 'drop-shadow(0px 0px 0px #222)';
                            }
                            _0x57511a['target']['style']['filter'] = 'drop-shadow(0px 0px 3px #ccc)';
                            _0x1a3ba7 = 'build_' + _0x35cfe3[_0x256948];
                            if (parseInt(localStorage.deltaPartySize) <= getMaxModePlayers(_0x35cfe3[_0x3192cf])) socket.emit("gameInfo", "mode", _0x35cfe3[_0x256948]);
                            localStorage.deltaMode = _0x35cfe3[_0x256948];
                            if (_0x4c23bf != null) {
                                _0x279793['push']({
                                    'type': 'setqueue',
                                    'queue': 'build_' + _0x35cfe3[_0x256948]
                                });
                            }
                        }
                    };
                } catch (_0x599e9b) {
                    console['log']('STYLE 2');
                }
            }
            var _0x41927a = {
                'join': function (_0x266bb6) {
                    _0x4559a1 = !![];
                    var _0x4c3117 = _0x3dc783 ? 'wss:' : 'ws:';
                    if (_0x193f4e['ws']['readyState'] != 0x1) {
                        _0x224d34();
                        hideAllModals();
                        if (_0x3dc783) {
                            _0x193f4e['createSocket'](_0x4c3117 + '//ip_' + _0x266bb6['ip'] + '.buildroyale.io/ws');
                        } else {
                            _0x193f4e['createSocket'](_0x4c3117 + '//' + _0x15fc48 + '/ws');
                        }
                        var _0x294b02 = '';
                        if (_0x28dea0() && localStorage['p'] !== undefined) {
                            _0x294b02 = localStorage['p'];
                        }
                        var _0x418797 = '';
                        if (_0x28dea0() && localStorage['weaponSkin'] !== undefined) {
                            _0x418797 = localStorage['weaponSkin'];
                        }
                        var _0x24e14c = {
                            'type': 'start',
                            'name': _0x3a4184('nameBox')['value'],
                            'party': _0x28e5b7,
                            'p': _0x294b02,
                            'ws': _0x418797
                        };
                        if (window['token']) {
                            _0x24e14c['token'] = window['token'];
                        }
                        _0x193f4e['currentPackets']['push'](_0x24e14c);
                    }
                },
                'error': function (_0x4739ea) {
                    if (_0x4739ea['message'] === undefined) {
                        return;
                    }
                    alert(_0x4739ea['message']);
                    if (_0x4739ea['message'] == "Error: Party does not exist") {
                        localStorage.deltaPartySize = 0;
                        socket.emit("gameInfo", "partysize", 0);
                        socket.emit("gameState", "menu");
                    }
                    if (_0x4c23bf != null) {
                        console['log']('Closing Error');
                        _0x4c23bf['close']();
                        _0x4c23bf = null;
                    }
                },
                'pu': function (_0x54f464) {
                    if (_0x54f464['m'] === undefined) {
                        return;
                    }
                    if (localStorage.deltaPartySize != _0x54f464.m.length) socket.emit("gameInfo", "partysize", _0x54f464.m.length)
                    localStorage.deltaPartySize = _0x54f464.m.length;
                    for (var _0x43e176 = 0x0; _0x43e176 < 0x4; _0x43e176++) {
                        document['getElementById']('partyname' + _0x43e176)['innerHTML'] = '';
                    }
                    for (var _0x43e176 = 0x0; _0x43e176 < 0x4; _0x43e176++) {
                        document['getElementById']('partynamediv' + _0x43e176)['style']['opacity'] = '0.5';
                        document['getElementById']('partynamediv' + _0x43e176)['style']['borderColor'] = 'rgba(255,255,255,0.5)';
                        document['getElementById']('partynamediv' + _0x43e176)['style']['background'] = 'rgba(0,0,0,0.3)';
                    }
                    for (var _0x43e176 = 0x0; _0x43e176 < _0x54f464['m']['length'] && _0x43e176 < 0x4; _0x43e176++) {
                        var _0x26b950 = _0x54f464['m'][_0x43e176][0x0];
                        var _0x21e228 = _0x54f464['m'][_0x43e176][0x1];
                        document['getElementById']('partynamediv' + _0x43e176)['style']['opacity'] = '1';
                        document['getElementById']('partyname' + _0x43e176)['style']['opacity'] = '1';
                        if (_0x26b950 == '') {
                            _0x26b950 = '<unnamed>';
                            document['getElementById']('partyname' + _0x43e176)['style']['opacity'] = '0.5';
                        }
                        if (_0x21e228 == !![]) {
                            document['getElementById']('partyname' + _0x43e176)['style']['opacity'] = '1';
                            document['getElementById']('partynamediv' + _0x43e176)['style']['borderColor'] = 'rgba(0,187,0,0.5)';
                            document['getElementById']('partynamediv' + _0x43e176)['style']['background'] = 'rgba(0,187,0,0.25)';
                        }
                        document['getElementById']('partyname' + _0x43e176)['textContent'] = _0x26b950;
                    }
                    _0x28e5b7 = _0x54f464['id'];
                    if (document['getElementById']('partyid')['innerHTML'] != 'Party ID: ' + _0x54f464['id']) {
                        document['getElementById']('partyid')['innerHTML'] = 'Party ID: ' + _0x54f464['id'];
                        window['history']['replaceState'](null, '', '/?p=' + _0x54f464['id']);
                    }
                    for (var _0x3cecb1 = 0x0; _0x3cecb1 < _0x35cfe3['length']; _0x3cecb1++) {
                        document['getElementById']('playlist' + _0x3cecb1)['style']['filter'] = 'drop-shadow(0px 0px 0px #222)';
                    }
                    var _0x330b00 = Math['max'](_0x35cfe3['indexOf'](_0x54f464['q']['substr'](0x6)), 0x0);
                    document['getElementById']('playlist' + _0x330b00)['style']['filter'] = 'drop-shadow(0px 0px 3px #ccc)';
                    if (localStorage.deltaGameState == "menu") {
                        if (parseInt(localStorage.deltaPartySize) <= getMaxModePlayers(_0x35cfe3[_0x330b00])) socket.emit("gameInfo", "mode", _0x35cfe3[_0x330b00]);
                    }
                    localStorage.deltaMode = _0x35cfe3[_0x330b00];
                    if (_0x54f464['u'] != 0x0) {
                        _0x306f97('partyleader');
                        _0x317e9a = ![];
                    } else {
                        _0x1882d4('partyleader');
                        _0x317e9a = !![];
                    }
                    for (var _0x43e176 = 0x0; _0x43e176 < _0x4af76c['length']; _0x43e176++) {
                        try {
                            if (_0x4af76c[_0x43e176] < _0x54f464['m']['length']) {
                                document['getElementById']('playlist' + _0x43e176)['style']['opacity'] = 0.3;
                            } else {
                                document['getElementById']('playlist' + _0x43e176)['style']['opacity'] = 0x1;
                            }
                        } catch (_0x110dcf) { }
                    }
                    _0x1882d4('scene0');
                    _0x1882d4('scene1');
                    _0x306f97('scene2');
                }
            };
            var _0x38d362 = function (_0x336dab) {
                if (msgpack !== undefined) {
                    var _0x40ae70 = msgpack['decode'](new Uint8Array(_0x336dab['data']));
                    for (var _0xec5929 = 0x0; _0xec5929 < _0x40ae70['length']; _0xec5929++) {
                        var _0x3c27d3 = _0x40ae70[_0xec5929];
                        if (_0x41927a[_0x3c27d3['t']] !== undefined)
                            _0x41927a[_0x3c27d3['t']](_0x3c27d3);
                        else {
                            console['log']('Encountered issue: unknown packet type');
                            console['log'](_0x40ae70);
                        }
                    }
                }
            };
            function _0x48a29d() {
                if (_0x4c23bf == null || msgpack === undefined) {
                    return;
                }
                if (!_0x193f4e['spectating']) {
                    _0x113210 = ![];
                }
                if (_0x4c23bf['readyState'] == 0x1 && _0x279793['length'] > 0x0) {
                    _0x4c23bf['send'](msgpack['encode'](_0x279793));
                    _0x279793 = [];
                }
            }
            var _0x5722c8 = 0x0;
            var _0x38227d = 0xa;
            function _0x1e02dd() { }
            function _0x54cb3a() {
                if (_0x4c23bf == null) {
                    return;
                }
                if (window['spawnText']['text'] == 'Unready') {
                    _0x4b41bb();
                    return;
                }
                _0x279793['push']({
                    'type': 'ready'
                });
                window['spawnButton']['color'] = '#D00';
                window['spawnButton']['strokeStyle'] = '#B00';
                window['spawnText']['belowObjects'][0x0]['strokeStyle'] = '#B00';
                window['spawnText']['belowObjects'][0x0]['text'] = 'Unready';
                window['spawnText']['text'] = 'Unready';
            }
            function _0x4b41bb() {
                _0x279793['push']({
                    'type': 'unready'
                });
                window['spawnButton']['color'] = '#0D0';
                window['spawnButton']['strokeStyle'] = '#0B0';
                window['spawnText']['belowObjects'][0x0]['strokeStyle'] = '#0B0';
                window['spawnText']['belowObjects'][0x0]['text'] = 'Ready';
                window['spawnText']['text'] = 'Ready';
            }
            function _0x513980(_0x685925) {
                if (_0x685925 === undefined) {
                    var _0x5084e4 = Math['floor'](Math['random']() * _0x3fcd9a['length']);
                    _0x685925 = _0x3fcd9a[_0x5084e4];
                }
                _0x4c23bf = new _0x193f4e['socket']('wss://build_matchmaking_' + _0x685925 + '.buildroyale.io/ws', _0x38d362, function () { }, function () {
                    if (_0x4c23bf != null) {
                        _0x4c23bf['close']();
                        _0x4c23bf = null;
                        window['history']['replaceState'](null, '', '/');
                    }
                    _0x1882d4('partyleader');
                    _0x306f97('scene0');
                    _0x1882d4('scene1');
                    _0x1882d4('scene2');
                    document['getElementById']('partyid')['innerHTML'] = 'Party ID: xxxxxx';
                    _0x317e9a = !![];
                    window['spawnButton']['color'] = '#0D0';
                    window['spawnButton']['strokeStyle'] = '#0B0';
                    window['spawnText']['belowObjects'][0x0]['strokeStyle'] = '#0B0';
                    window['spawnText']['belowObjects'][0x0]['text'] = 'Ready';
                    window['spawnText']['text'] = 'Ready';
                    for (var _0x1fa07f = 0x0; _0x1fa07f < _0x4af76c['length']; _0x1fa07f++) {
                        document['getElementById']('playlist' + _0x1fa07f)['style']['opacity'] = 0x1;
                    }
                });
            }
            document['getElementById']('nameBox')['onkeydown'] = function () {
                setTimeout(function () {
                    _0x29d998['nametag']['text'] = document['getElementById']('nameBox')['value'];
                    _0x29d998['nametagstroke']['text'] = document['getElementById']('nameBox')['value'];
                }, 0xa);
                if (_0x4c23bf == null) {
                    return;
                }
                setTimeout(function () {
                    _0x279793['push']({
                        'type': 'changename',
                        'name': document['getElementById']('nameBox')['value']
                    });
                }, 0xa);
            };
            function _0x2772aa() {
                var _0x4a5f30 = new XMLHttpRequest();
                var _0x4c0d02 = 'https://build_matchmaking_' + _0x174cce() + '.buildroyale.io/getplayercount';
                _0x4a5f30['open']('GET', _0x4c0d02, !![]);
                _0x4a5f30['send']();
                _0x4a5f30['onreadystatechange'] = function (_0x5e0685) {
                    if (_0x4a5f30['readyState'] != 0x4 || _0x4a5f30['status'] != 0xc8 && _0x4a5f30['status'] != 0x130) {
                        return;
                    }
                    var _0x2cd487 = _0x4a5f30['responseText'];
                    var _0x3ca552 = '<p style=\'margin-bottom: 14px;\'>';
                    _0x3ca552 += _0x2cd487 + ' Builders Playing';
                    if (_0x3667d8 == 'build_prod') { } else if (_0x3667d8 == 'build_snipers') {
                        _0x3ca552 += ' Sniper Showdown';
                    } else if (_0x3667d8 == 'build_gold') {
                        _0x3ca552 += ' Solid Gold';
                    } else if (_0x3667d8 == 'build_shotguns') {
                        _0x3ca552 += ' Shotgun Skirmish';
                    } else if (_0x3667d8 == 'build_close') {
                        _0x3ca552 += ' Close Encounters';
                    }
                    _0x3ca552 += '</p>';
                    document['getElementById']('playercount')['innerHTML'] = _0x3ca552;
                };
            }
            _0x2772aa();
            function _0x468108() {
                var _0x57c68c = '';
                _0x57c68c += '<div id=\'scene0\'><div id=\'createparty\' class=\'createbutton noselect\'><p class=\'emptyatag\'>Create Party</p></div><div id=\'joinparty\' class=\'joinbutton noselect\'><p class=\'emptyatag\'>Join Party</p></div></div>';
                _0x57c68c += '<div id=\'scene1\'><div class=\'partyborder\'><input placeholder=\'Enter Party ID\' maxlength=\'6\' autocomplete=\'off\' autocorrect=\'off\' autocapitalize=\'off\' spellcheck=\'false\' type=\'text\' class=\'partyinput\' id=\'partyinput\'></div><div id=\'actuallyjoinparty\' class=\'joinbutton noselect\'><p class=\'emptyatag\'>Join Party</p></div><div id=\'back\' class=\'backbutton noselect\'><p class=\'emptyatag\'>Go Back</p></div></div>';
                _0x57c68c += '<div id=\'scene2\'><div id=\'partyid\' style=\'text-align: center; margin-top: 20px; margin-bottom: 12px\'>Party ID: xxxxxx</div><div id=\'partynamediv0\' class=\'round noselect\'><p id=\'partyname0\' class=\'emptytag\'></p></div><div id=\'partynamediv1\' style=\'opacity: 0.5;\' class=\'round noselect\'><p id=\'partyname1\' class=\'emptytag\'></p></div><div id=\'partynamediv2\' style=\'opacity: 0.5;\' class=\'round noselect\'><p id=\'partyname2\' class=\'emptytag\'></p></div><div id=\'partynamediv3\' style=\'opacity: 0.5;\' class=\'round noselect\'><p id=\'partyname3\' class=\'emptytag\'></p></div><div id=\'leaveparty\' class=\'leavebutton noselect\'><p class=\'emptyatag\'>Leave Party</p></div>' + (gameWrapper['enabled'] ? '<div id=\'shareparty\' class=\'sharebutton noselect\'><p class=\'emptyatag\'>Share Party</p></div>' : '') + '</div>';
                _0x57c68c += '<div id=\'settingbutton\' class=\'backbutton noselect\' style=\'margin-top: 25px;\'><p class=\'emptyatag\'>Settings</p></div>';
                document['getElementById']('partystuff')['innerHTML'] = _0x57c68c;
                _0x1882d4('scene1');
                _0x1882d4('scene2');
                document['getElementById']('createparty')['onclick'] = function () {
                    _0x1882d4('scene0');
                    _0x1882d4('scene1');
                    _0x306f97('scene2');
                    _0x513980();
                    if (window['cachedRegion'] !== undefined && window['cachedRegion'] != 0x0) {
                        _0x591bd5 = window['cachedRegion'];
                    }
                    _0x279793['push']({
                        'type': 'create',
                        'region': _0x591bd5
                    });
                    _0x279793['push']({
                        'type': 'changename',
                        'name': document['getElementById']('nameBox')['value']
                    });
                };
                document['getElementById']('joinparty')['onclick'] = function () {
                    _0x1882d4('scene0');
                    _0x306f97('scene1');
                    _0x1882d4('scene2');
                    document['getElementById']('partyinput')['focus']();
                };
                document['getElementById']('actuallyjoinparty')['onclick'] = function () {
                    _0x2c4843 = document['getElementById']('partyinput')['value'];
                    _0x2c4843 = _0x2c4843['toLowerCase']();
                    if (_0x2c4843['length'] < 0x6) {
                        alert('ID Not Valid - Should be 6 characters long');
                        return;
                    }
                    var _0x5569df = _0x2c4843['charAt'](0x0) + _0x2c4843['charAt'](0x1);
                    if (_0x3fcd9a['indexOf'](_0x5569df) == -0x1) {
                        alert('ID Not Valid - Please check again');
                        return;
                    }
                    if (_0x4c23bf == null) {
                        _0x513980(_0x5569df);
                        _0x279793['push']({
                            'type': 'join',
                            'id': _0x2c4843
                        });
                        _0x279793['push']({
                            'type': 'changename',
                            'name': document['getElementById']('nameBox')['value']
                        });
                    }
                };
                document['getElementById']('leaveparty')['onclick'] = function () {
                    if (_0x4c23bf != null) {
                        _0x4c23bf['close']();
                        _0x4c23bf = null;
                        window['history']['replaceState'](null, '', '/');
                    }
                    localStorage.deltaPartySize = 0;
                    socket.emit("gameInfo", "partysize", 0);
                    _0x1882d4('partyleader');
                    _0x306f97('scene0');
                    _0x1882d4('scene1');
                    _0x1882d4('scene2');
                    document['getElementById']('partyid')['innerHTML'] = 'Party ID: xxxxxx';
                    _0x317e9a = !![];
                    window['spawnButton']['color'] = '#0D0';
                    window['spawnButton']['strokeStyle'] = '#0B0';
                    window['spawnText']['belowObjects'][0x0]['strokeStyle'] = '#0B0';
                    window['spawnText']['belowObjects'][0x0]['text'] = 'Ready';
                    window['spawnText']['text'] = 'Ready';
                    for (var _0x9bb84a = 0x0; _0x9bb84a < _0x4af76c['length']; _0x9bb84a++) {
                        document['getElementById']('playlist' + _0x9bb84a)['style']['opacity'] = 0x1;
                    }
                };
                var _0x2a7803 = document['getElementById']('shareparty');
                if (_0x2a7803) {
                    _0x2a7803['onclick'] = function () {
                        gameWrapper['shareContent']({
                            'text': 'Join my Build Royale party! Click \"Join Party\" and enter this party ID: ' + _0x28e5b7 + '\x0a\x0ahttps://buildroyale.io/'
                        });
                    };
                }
                document['getElementById']('back')['onclick'] = function () {
                    _0x306f97('scene0');
                    _0x1882d4('scene1');
                    _0x1882d4('scene2');
                };
                document['getElementById']('settingbutton')['onclick'] = function () {
                    _0x3326ca();
                };
                document['getElementById']('partynamediv1')['onclick'] = function () {
                    _0x279793['push']({
                        'type': 'kick',
                        'player': 0x1
                    });
                };
                document['getElementById']('partynamediv2')['onclick'] = function () {
                    _0x279793['push']({
                        'type': 'kick',
                        'player': 0x2
                    });
                };
                document['getElementById']('partynamediv3')['onclick'] = function () {
                    _0x279793['push']({
                        'type': 'kick',
                        'player': 0x3
                    });
                };
            }
            _0x468108();
            var _0x3c8000 = {};
            var _0xaa319b = window['location']['href']['replace'](/[?&]+([^=&]+)=([^&]*)/gi, function (_0x42551e, _0x5dce13, _0x5b4e14) {
                _0x3c8000[_0x5dce13] = _0x5b4e14;
            });
            if (_0x3c8000['p'] !== undefined) {
                _0x2c4843 = _0x3c8000['p'];
                _0x2c4843 = _0x2c4843['toLowerCase']();
                if (_0x2c4843['length'] < 0x6) {
                    return;
                }
                var _0x27565f = _0x2c4843['charAt'](0x0) + _0x2c4843['charAt'](0x1);
                if (_0x3fcd9a['indexOf'](_0x27565f) == -0x1) {
                    return;
                }
                if (_0x4c23bf == null) {
                    _0x513980(_0x27565f);
                    _0x279793['push']({
                        'type': 'join',
                        'id': _0x2c4843
                    });
                    setTimeout(function () {
                        _0x279793['push']({
                            'type': 'changename',
                            'name': document['getElementById']('nameBox')['value']
                        });
                    }, 0x32);
                }
            }
            _0x4609fc['start'](function (_0x47fe5c, _0x2e014c) {
                var _0x44d878 = _0x3dc783 ? 'wss:' : 'ws:';
                if (_0x3dc783) { } else { }
            });
            function _0x2a1802(_0x3fccdf) {
                var _0x2a0876 = [];
                for (var _0x5cc0f4 in _0x3fccdf) {
                    _0x2a0876['push'](_0x5cc0f4);
                }
                return _0x2a0876;
            }
            var _0x2704f9 = {
                'Timur Tripp': 'https://www.youtube.com/user/TimurTripp2',
                'Dragon Grinberg': 'https://www.youtube.com/channel/UClrQ-4XYaHYbgq5S26uz1aQ',
                'Gellzone': 'https://www.youtube.com/channel/UCrVzmr53P8FOHspx0d8v4ig'
            };
            var _0x2a61cb = ![];
            var _0x11569b = _0x2a1802(_0x2704f9);
            var _0x27a06b = _0x11569b[Math['floor'](Math['random']() * _0x11569b['length'])];
            document['getElementById']('YouTuberDiv')['innerHTML'] += '<a style=\'width:unset;float:right;margin:unset;font-size:25;color:#79e;text-decoration:none;\' target=\'_blank\' href=\'' + _0x2704f9[_0x27a06b] + '\'>' + _0x27a06b + '</a>';
            function _0x238205(_0x4e743e) {
                _0x4e743e = _0x4e743e['replace'](/[\[]/, '\\[')['replace'](/[\]]/, '\\]');
                var _0x5df4a4 = new RegExp('[\\?&]' + _0x4e743e + '=([^&#]*)');
                var _0x2b5185 = _0x5df4a4['exec'](location['search']);
                return _0x2b5185 === null ? '' : decodeURIComponent(_0x2b5185[0x1]['replace'](/\+/g, ' '));
            }
            var _0xe830df = window['location']['host']['split']('.')[0x0];
            if (_0xe830df != 'GameDistribution') {
                _0xe830df = 'GameDistribution';
            }
            var _0x50201b = 0x0;
            var _0x4bf0a5 = ![];
            var _0x4d4973 = ![];
            var _0x429f0c = -0x1;
            var _0x19860d = 0x0;
            var _0x2f5f54 = 0x0;
            var _0x31a704 = {
                'gameId': 'a8df29ec79604c758&c637459ec9203',
                'userId': '6F381FEC-FDB4-41A2-9F3C-147A4121B75B-s1',
                'pauseGame': function () { },
                'resumeGame': function () {
                    if (_0x2a61cb)
                        window['globalFinish']();
                },
                'onInit': function (_0x18a083) { },
                'onError': function (_0x1dd5ff) { }
            };
            var _0x52598f = {
                'GameDistribution': function () {
                    gdApi['showBanner']();
                },
                'AdInPlay': function () {
                    adplayer['startPreRoll']();
                },
                'none': function () {
                    window['globalFinish']();
                }
            };
            function _0x274dd5(_0x2e6209) {
                _0x4609fc['switchServer'](_0x2e6209);
            }
            window['switchServer'] = _0x274dd5;
            function _0x2dd78c() {
                if (!_0x3dc783) {
                    var _0xac9ba2 = _0x3dc783 ? 'wss:' : 'ws:';
                    if (_0x193f4e['ws']['readyState'] != 0x1) {
                        _0x9ff2f++;
                        _0x224d34();
                        hideAllModals();
                        _0x193f4e['createSocket'](_0xac9ba2 + '//' + _0x15fc48 + '/ws');
                        clearInterval(_0x14a64b);
                        _0x14a64b = null;
                        var _0x1d0230 = '';
                        if (_0x28dea0() && localStorage['p'] !== undefined) {
                            _0x1d0230 = localStorage['p'];
                        }
                        var _0x380209 = '';
                        if (_0x28dea0() && localStorage['weaponSkin'] !== undefined) {
                            _0x380209 = localStorage['weaponSkin'];
                        }
                        var _0x3e8e90 = {
                            'type': 'start',
                            'name': _0x3a4184('nameBox')['value'],
                            'party': _0x28e5b7,
                            'p': _0x1d0230,
                            'ws': _0x380209
                        };
                        if (window['token']) {
                            _0x3e8e90['token'] = window['token'];
                        }
                        _0x193f4e['currentPackets']['push'](_0x3e8e90);
                    }
                    return;
                }
                var _0x4525cc = new XMLHttpRequest();
                var _0x4092a5 = _0x174cce();
                var _0xd03f8d = 'https://build_matchmaking_' + _0x4092a5 + '.buildroyale.io/RESTservers';
                if (_0x3667d8 == 'build_notbeta') {
                    _0xd03f8d = 'https://build_matchmaking_be.buildroyale.io/RESTservers';
                }
                _0xd03f8d += '?queue=' + _0x1a3ba7;
                _0x4525cc['open']('GET', _0xd03f8d, !![]);
                _0x4525cc['send']();
                _0x4525cc['onreadystatechange'] = function (_0x4339a0) {
                    if (_0x4525cc['readyState'] != 0x4 || _0x4525cc['status'] != 0xc8 && _0x4525cc['status'] != 0x130) {
                        return;
                    }
                    if (_0x193f4e['ws']['readyState'] == 0x0 || _0x193f4e['ws']['readyState'] == 0x1) {
                        if (_0x14a64b != null) {
                            clearInterval(_0x14a64b);
                            _0x14a64b = null;
                        }
                        return;
                    }
                    var _0xabb49e = _0x4525cc['responseText'];
                    var _0x3f72db = JSON['parse'](_0xabb49e)['servers'];
                    var _0x284a52 = [{
                        'region': 0x7,
                        'index': 0x0
                    }, {
                        'region': 0x3,
                        'index': 0x2
                    }, {
                        'region': 0x3,
                        'index': 0x1
                    }];
                    var _0x46062a = [];
                    for (var _0x1848ae = 0x0; _0x1848ae < _0x3f72db['length']; _0x1848ae++) {
                        var _0x2b1db8 = null;
                        for (var _0x4f7765 = 0x0; _0x4f7765 < _0x3f72db['length']; _0x4f7765++) {
                            if (_0x4f7765 != _0x1848ae && _0x3f72db[_0x1848ae]['region'] == _0x3f72db[_0x4f7765]['region'] && _0x3f72db[_0x1848ae]['index'] == _0x3f72db[_0x4f7765]['index']) {
                                _0x2b1db8 = _0x3f72db[_0x4f7765];
                            }
                        }
                        if (window['cachedRegion'] !== undefined && window['cachedRegion'] != 0x0) {
                            _0x591bd5 = window['cachedRegion'];
                        }
                        var _0x398e17 = ![];
                        for (var _0x4f7765 = 0x0; _0x4f7765 < _0x284a52['length']; _0x4f7765++) {
                            if (_0x3f72db[_0x1848ae]['region'] == _0x284a52[_0x4f7765]['region'] && _0x3f72db[_0x1848ae]['index'] == _0x284a52[_0x4f7765]['index']) {
                                _0x398e17 = !![];
                                break;
                            }
                        }
                        if (_0x35cfe3['length'] == 0x1 && _0x35cfe3[0x0] == 'ranked') {
                            _0x591bd5 = 0x3;
                        }
                        if (!_0x398e17 && _0x3f72db[_0x1848ae]['region'] == _0x591bd5 && _0x3f72db[_0x1848ae]['playerCount'] < 0x5f && _0x3f72db[_0x1848ae]['state'] == 'lobby' && (_0x3f72db[_0x1848ae]['time'] > 0xa || _0x3f72db[_0x1848ae]['time'] < 0x0) && (_0x2b1db8 == null || _0x2b1db8['state'] == 'lobby' || _0x2b1db8['playerCount'] < 0x32 && _0x2b1db8['state'] != 'lobby')) {
                            _0x46062a['push'](_0x3f72db[_0x1848ae]);
                        }
                    }
                    _0x46062a['sort'](function (_0x781bd2, _0x4e7c78) {
                        var _0x431fe2 = 0x0;
                        var _0x35e60b = 0x0;
                        if (_0x781bd2['port'] == 0x1f92) {
                            _0x431fe2 = 0x64;
                        }
                        if (_0x4e7c78['port'] == 0x1f92) {
                            _0x35e60b = 0x64;
                        }
                        return _0x781bd2['index'] + _0x431fe2 - (_0x4e7c78['index'] + _0x35e60b);
                    });
                    if (_0x3dc783 && _0x46062a['length'] < 0x1) {
                        console['log']('No servers found');
                        return;
                    }
                    var _0x4182ae = _0x46062a[0x0];
                    for (var _0x1848ae = 0x1; _0x1848ae < _0x46062a['length']; _0x1848ae++) {
                        if (_0x46062a[_0x1848ae]['playerCount'] > _0x4182ae['playerCount']) {
                            _0x4182ae = _0x46062a[_0x1848ae];
                        }
                    }
                    for (var _0x1848ae = 0x0; _0x1848ae < _0x46062a['length']; _0x1848ae++) {
                        if (_0x46062a[_0x1848ae]['time'] != -0x1) {
                            if (_0x4182ae['time'] == -0x1 || _0x46062a[_0x1848ae]['time'] < _0x4182ae['time']) {
                                _0x4182ae = _0x46062a[_0x1848ae];
                            }
                        }
                    }
                    var _0x23b13d = _0x3dc783 ? 'wss:' : 'ws:';
                    if (_0x193f4e['ws']['readyState'] != 0x1) {
                        _0x9ff2f++;
                        _0x224d34();
                        hideAllModals();
                        if (_0x3dc783) {
                            _0x193f4e['createSocket'](_0x23b13d + '//ip_' + _0x4182ae['ip'] + '.buildroyale.io/ws');
                        } else {
                            _0x193f4e['createSocket'](_0x23b13d + '//' + _0x15fc48 + '/ws');
                        }
                    }
                    clearInterval(_0x14a64b);
                    _0x14a64b = null;
                    var _0x876f3a = '';
                    if (_0x28dea0() && localStorage['p'] !== undefined) {
                        _0x876f3a = localStorage['p'];
                    }
                    var _0x57cfbc = '';
                    if (_0x28dea0() && localStorage['weaponSkin'] !== undefined) {
                        _0x57cfbc = localStorage['weaponSkin'];
                    }
                    var _0x31ad94 = {
                        'type': 'start',
                        'name': _0x3a4184('nameBox')['value'],
                        'party': _0x28e5b7,
                        'p': _0x876f3a,
                        'ws': _0x57cfbc
                    };
                    if (window['token']) {
                        _0x31ad94['token'] = window['token'];
                    }
                    _0x193f4e['currentPackets']['push'](_0x31ad94);
                };
            }
            var _0x2f42fc = !![];
            var _0x158040 = 0x2;
            window['playingAd'] = ![];
            function _0x42842a(_0x5d9d91, _0x4a0aa4, _0x1c15a8) {
                var _0xce837f = new Date();
                _0xce837f['setTime'](_0xce837f['getTime']() + _0x1c15a8 * 0x18 * 0x3c * 0x3c * 0x3e8);
                var _0x4e79e5 = 'expires=' + _0xce837f['toUTCString']();
                document['cookie'] = _0x5d9d91 + '=' + _0x4a0aa4 + ';' + _0x4e79e5 + ';path=/';
            }
            function _0x599612(_0xc8e4c9) {
                var _0x38a06e = _0xc8e4c9 + '=';
                var _0x329c81 = decodeURIComponent(document['cookie']);
                var _0x28165e = _0x329c81['split'](';');
                for (var _0x57d6e1 = 0x0; _0x57d6e1 < _0x28165e['length']; _0x57d6e1++) {
                    var _0x5b9b2e = _0x28165e[_0x57d6e1];
                    while (_0x5b9b2e['charAt'](0x0) == ' ') {
                        _0x5b9b2e = _0x5b9b2e['substring'](0x1);
                    }
                    if (_0x5b9b2e['indexOf'](_0x38a06e) == 0x0) {
                        return _0x5b9b2e['substring'](_0x38a06e['length'], _0x5b9b2e['length']);
                    }
                }
                return '';
            }
            window['globalFinish'] = function () {
                _0x42842a('name', _0x3a4184('nameBox')['value'], 0x16d);
                _0x42842a('skipped', 'false', 0x16d);
                if (_0x14a64b == null) {
                    _0x14a64b = setInterval(function () {
                        if (_0x2d9387) {
                            _0x2dd78c();
                        } else {
                            _0x1e02dd();
                        }
                    }, 0x3e8);
                    _0x2dd78c();
                }
                window['playingAd'] = ![];
            };
            function _0x24ef51() {
                window['globalFinish']();
            }
            try {
                _0x3a4184('nameBox')['value'] = _0x599612('name');
            } catch (_0xf8997f) { }
            function _0x2cc970() {
                var _0x586379 = 0x0;
                for (var _0x3881e0 in _0x4609fc['servers']) {
                    var _0x2554c6 = _0x4609fc['servers'][_0x3881e0];
                    var _0x4b3164 = 0x0;
                    for (var _0x11686a = 0x0; _0x11686a < _0x2554c6['length']; _0x11686a++) {
                        _0x4b3164 += _0x2554c6[_0x11686a]['playerCount'];
                    }
                    _0x586379 += _0x4b3164;
                    var _0x462863 = _0x4609fc['regionInfo'][_0x3881e0]['name'];
                    var _0x3c5d33 = document['createElement']('option');
                    _0x3c5d33['text'] = _0x462863 + ' - ' + _0x4b3164 + ' players';
                    _0x3c5d33['disabled'] = !![];
                    document['getElementById']('serverSelect')['add'](_0x3c5d33);
                    for (var _0x11686a = 0x0; _0x11686a < _0x2554c6['length']; _0x11686a++) {
                        var _0x291b3d = _0x2554c6[_0x11686a];
                        var _0x3d1e53 = _0x4609fc['server'] && _0x4609fc['server']['region'] == _0x291b3d['region'] && _0x4609fc['server']['index'] == _0x291b3d['index'];
                        var _0x307e09 = _0x291b3d['region'] + ':' + _0x291b3d['index'];
                        var _0x46c9f2 = _0x462863 + ' ' + (_0x291b3d['index'] + 0x1) + ' - ' + _0x291b3d['playerCount'] + ' players';
                        var _0x188437 = _0x3d1e53 ? 'selectedMenuSelector' : 'subMenuSelector';
                        var _0xdc1e09 = _0x3d1e53 ? '&#x25B6; ' : '';
                        var _0x3c5d33 = document['createElement']('option');
                        _0x3c5d33['text'] = _0x462863 + ' ' + (_0x291b3d['index'] + 0x1) + ' - ' + _0x291b3d['playerCount'] + ' players';
                        _0x3c5d33['value'] = _0x307e09;
                        _0x3d1e53 ? _0x3c5d33['selected'] = !![] : ![];
                        document['getElementById']('serverSelect')['add'](_0x3c5d33);
                    }
                    var _0x3c5d33 = document['createElement']('option');
                    _0x3c5d33['text'] = '';
                    _0x3c5d33['disabled'] = !![];
                    document['getElementById']('serverSelect')['add'](_0x3c5d33);
                }
                var _0x3c5d33 = document['createElement']('option');
                _0x3c5d33['text'] = _0x586379 + ' total players';
                _0x3c5d33['disabled'] = !![];
                document['getElementById']('serverSelect')['add'](_0x3c5d33);
                document['getElementById']('totalPlayers')['innerHTML'] = _0x586379 + ' Players Online';
            }
            _0x2cc970();
            var _0x2ca822 = 0x0;
            var _0x548331 = 0x0;
            var _0x58e1a9 = -0x1;
            var _0x589425 = 0x0;
            var _0x56ed1d = ![];
            var _0x545239 = 0x0;
            var _0x8baf8f = 0x0;
            var _0x13da85 = [];
            var _0x71cb56 = ['nameBox', 'ref1', 'ref2', 'reftopleft', 'reftopright', 'reftop'];
            for (var _0x3192cf = 0x0; _0x3192cf < modals['length']; _0x3192cf++) {
                _0x71cb56['push'](modals[_0x3192cf]);
            }
            _0x71cb56['push']('about');
            var _0x49d1fc = [];
            for (var _0x3192cf = 0x0; _0x3192cf < _0x71cb56['length']; _0x3192cf++) {
                try {
                    var _0x20f526 = document['getElementById'](_0x71cb56[_0x3192cf])['style'];
                } catch (_0x27dc10) {
                    console['log']('Style 3');
                }
                if (_0x71cb56[_0x3192cf] == 'nameBox') {
                    _0x49d1fc['push']({});
                    continue;
                }
                var _0x3f4049 = {};
                if (_0x20f526['top'] != '') {
                    _0x3f4049['top'] = parseInt(_0x20f526['top']);
                }
                if (_0x20f526['right'] != '') {
                    _0x3f4049['right'] = parseInt(_0x20f526['right']);
                }
                if (_0x20f526['left'] != '') {
                    _0x3f4049['left'] = parseInt(_0x20f526['left']);
                }
                if (_0x20f526['bottom'] != '') {
                    _0x3f4049['bottom'] = parseInt(_0x20f526['bottom']);
                }
                _0x49d1fc['push'](_0x3f4049);
            }
            var _0x5785e8 = [{
                'name': 'Common',
                'color': '#EEE'
            }, {
                'name': 'Uncommon',
                'color': '#12ff00'
            }, {
                'name': 'Rare',
                'color': _0x769813('#0084ff', 0x8)
            }, {
                'name': 'Epic',
                'color': _0x3db2c8('#e32aff', 0xa)
            }, {
                'name': 'Legendary',
                'color': '#fcff00'
            }, {
                'name': 'Mythic',
                'color': '#fc0000'
            }];
            var _0x12db58 = ['mini', 'pot', 'medkit', 'bandages'];
            var _0x4b5af4 = ['wood', 'brick', 'metal'];
            var _0x39ace1 = {
                'scar': 0x64,
                'famas': 0x64,
                'tommy gun': 0x50,
                'ar-15': 0x5a,
                'scoped ar': 0x96,
                'bolt': 0xbe,
                'rifle': 0xaa,
                'deagle': 0x78,
                'lmg': 0x78,
                'shotgun': 0x0,
                'heavy': 0x32,
                'drum': 0x0,
                'musket': 0x82,
                'heavy sniper': 0xd2,
                'ak47': 0x64,
                'combat': 0x46,
                'silencedpistol': 0x46,
                'aug': 0x82,
                'mini': 0x0,
                'smg': 0x32,
                'ump': 0x32,
                'rpg': 0x64,
                'pot': 0x0,
                'bandages': 0x0,
                'medkit': 0x0,
                'snowball': 0x32
            };
            var _0x1aafd2 = {
                'scar': 0x0,
                'famas': 0x0,
                'tommy gun': 0x0,
                'ar-15': 0x0,
                'scoped ar': 0x96,
                'bolt': 0xbe,
                'rifle': 0xaa,
                'deagle': 0x0,
                'lmg': 0x0,
                'shotgun': 0x0,
                'heavy': 0x32,
                'drum': 0x0,
                'musket': 0x82,
                'heavy sniper': 0xd2,
                'ak47': 0x0,
                'combat': 0x0,
                'silencedpistol': 0x0,
                'aug': 0x0,
                'mini': 0x0,
                'smg': 0x0,
                'ump': 0x0,
                'rpg': 0x0,
                'pot': 0x0,
                'bandages': 0x0,
                'medkit': 0x0,
                'snowball': 0x0
            };
            var _0x151229 = {
                'lmg': 0x1,
                'scar': 0x1,
                'famas': 0x1,
                'tommy gun': 0x1,
                'ar-15': 0x1,
                'scoped ar': 0x1,
                'ak47': 0x1,
                'bolt': 0x2,
                'rifle': 0x2,
                'deagle': 0x2,
                'shotgun': 0x3,
                'heavy': 0x3,
                'drum': 0x3,
                'musket': 0x3,
                'combat': 0x3,
                'heavy sniper': 0x2,
                'aug': 0x1,
                'mini': 0x4,
                'smg': 0x0,
                'ump': 0x0,
                'silencedpistol': 0x0,
                'rpg': 0x2,
                'pot': 0x4,
                'bandages': 0x4,
                'medkit': 0x4,
                'snowball': 0x4
            };
            var _0x498387 = [];
            var _0x5094b9 = '#fcff00';
            var _0x20ff46 = /^((?!chrome|android).)*safari/i['test'](navigator['userAgent']);
            function _0x2a1802(_0x3d7a5d) {
                var _0x29217a = [];
                for (var _0x23e499 in _0x3d7a5d) {
                    _0x29217a['push'](_0x23e499);
                }
                return _0x29217a;
            }
            var _0x21ed5b = {
                8: 'Backspace',
                9: 'Tab',
                13: 'Enter',
                16: 'Shift',
                17: 'Ctrl',
                18: 'Alt',
                19: 'Pause/Break',
                20: 'Capslock',
                27: 'Escape',
                32: 'Space',
                33: 'Page Up',
                34: 'Page Down',
                35: 'End',
                36: 'Home',
                37: 'Left',
                38: 'Up',
                39: 'Right',
                40: 'Down',
                43: '+',
                44: 'Print Screen',
                45: 'Insert',
                46: 'Delete',
                48: '0',
                49: '1',
                50: '2',
                51: '3',
                52: '4',
                53: '5',
                54: '6',
                55: '7',
                56: '8',
                57: '9',
                59: ';',
                61: '=',
                65: 'A',
                66: 'B',
                67: 'C',
                68: 'D',
                69: 'E',
                70: 'F',
                71: 'G',
                72: 'H',
                73: 'I',
                74: 'J',
                75: 'K',
                76: 'L',
                77: 'M',
                78: 'N',
                79: 'O',
                80: 'P',
                81: 'Q',
                82: 'R',
                83: 'S',
                84: 'T',
                85: 'U',
                86: 'V',
                87: 'W',
                88: 'X',
                89: 'Y',
                90: 'Z',
                106: '*',
                107: '+',
                109: '-',
                110: '.',
                111: '/',
                112: 'F1',
                113: 'F2',
                114: 'F3',
                115: 'F4',
                116: 'F5',
                117: 'F6',
                118: 'F7',
                119: 'F8',
                120: 'F9',
                121: 'F10',
                122: 'F11',
                123: 'F12',
                144: 'Num Lock',
                145: 'Scroll Lock',
                186: ';',
                187: '=',
                188: ',',
                189: '-',
                190: '.',
                191: '/',
                192: '`',
                219: '[',
                220: '\\',
                221: ']',
                222: '\''
            };
            var _0x57deed = ['Pickup 1', 'Pickup 2', 'Jump', 'Build', 'Reload', 'Inventory', 'Map', 'Ask For Ammo', 'ADS', 'Fire', 'Weapon Slot 1', 'Weapon Slot 2', 'Weapon Slot 3', 'Weapon Slot 4', 'Weapon Slot 5', 'Weapon Slot 6', 'Move Up', 'Move Down', 'Move Left', 'Move Right', 'Sprint', 'Reload Page'];
            var _0x375d03 = _0x2a1802(_0x21ed5b);
            var _0x1726b3 = {};
            for (var _0x3192cf = 0x0; _0x3192cf < _0x375d03['length']; _0x3192cf++) {
                _0x1726b3[_0x21ed5b[_0x375d03[_0x3192cf]]] = _0x375d03[_0x3192cf];
            }
            var _0x371234 = ['E', 'F', 'Space', 'Q', 'R', 'Tab', 'M', 'B', 'C', 'V', '1', '2', '3', '4', '5', '6', 'W', 'S', 'A', 'D', 'Shift', 'F5'];
            for (var _0x3192cf = 0x0; _0x3192cf < _0x371234['length']; _0x3192cf++) {
                _0x371234[_0x3192cf] = _0x1726b3[_0x371234[_0x3192cf]['toString']()];
            }
            var _0xf01486 = _0x371234;
            function _0x1eb506(_0x4505a6) {
                if (_0x57deed['indexOf'](_0x4505a6) == -0x1) {
                    console['log']('Didn\'t find keybind');
                    return -0x1;
                }
                return _0xf01486[_0x57deed['indexOf'](_0x4505a6)];
            }
            function _0x1c63f8(_0x21518c) {
                if (_0x57deed['indexOf'](_0x21518c) == -0x1) {
                    console['log']('Didn\'t find keybind');
                    return '';
                }
                return _0x21ed5b[_0xf01486[_0x57deed['indexOf'](_0x21518c)]];
            }
            var _0x1318c8 = '';
            var _0x338928 = '';
            if (!_0x20ff46) { }
            _0x338928 += '<div style=\'margin-bottom: 20px;\'></div>';
            _0x1318c8 += '<div style=\'height: 60px;\'><p style=\'font-family: sans-serif; font-weight: bold; margin: 20px; padding: 15px;\'>Mouse Lock</p></div>';
            _0x338928 += '<div style=\'height: 60px;\'><select id=\'mouseLockSetting\' class=\'bind keybindbutton\' style=\'font-family: sans-serif; font-weight: bold; margin-left: auto; margin-right: auto; padding: 7px; border: solid 3px #000; width: 220px; height: 47px; font-size: 20px; text-align-last: center;\'><option value=\'-2\'>On</option><option selected value=\'-1\'>Off</option></select></div>';
            _0x1318c8 += '<div style=\'height: 60px;\'><p style=\'font-family: sans-serif; font-weight: bold; margin: 20px; padding: 15px;\'>Region</p></div>';
            _0x338928 += '<div style=\'height: 80px;\'><select id=\'regionSetting\' class=\'bind keybindbutton\' style=\'font-family: sans-serif; margin-top: 22px; font-weight: bold; margin-left: auto; margin-right: auto; padding: 7px; border: solid 3px #000; width: 220px; font-size: 20px; text-align-last: center;\'><option selected value=\'0\'>Auto</option><option value=\'2\'>North America</option><option value=\'9\'>Europe</option></select></div>';
            _0x1318c8 += '<div style=\'height: 60px;\'><p style=\'font-family: sans-serif; font-weight: bold; margin: 20px; padding: 15px;\'>Controller</p></div>';
            _0x338928 += '<div style=\'height: 85px;\'><select id=\'controlSetting\' class=\'bind keybindbutton\' style=\'font-family: sans-serif; margin-top: 22px; font-weight: bold; margin-left: auto; margin-right: auto; padding: 7px; border: solid 3px #000; width: 220px; font-size: 20px; text-align-last: center;\'><option selected value=\'0\'>KB/Controller</option><option value=\'1\'>Keyboard Only</option></select></div>';
            for (var _0x3192cf = 0x0; _0x3192cf < _0x57deed['length']; _0x3192cf++) {
                _0x1318c8 += '<div style=\'height: 60px;\'><p style=\'font-family: sans-serif; font-weight: bold; margin: 20px; padding: 15px;\'>' + _0x57deed[_0x3192cf] + '</p></div>';
                _0x338928 += '<div style=\'height: 60px;\'><p id=\'key' + _0x3192cf + '\' class=\'bind keybindbutton\' style=\'font-family: sans-serif; font-weight: bold; margin-top: 20px; margin-left: auto; margin-right: auto; padding: 7px; border: solid 3px #000; width: 200px;\'>' + _0x21ed5b[_0xf01486[_0x3192cf]] + '</p></div>';
            }
            document['getElementById']('firstkeybind')['innerHTML'] = _0x1318c8;
            document['getElementById']('secondkeybind')['innerHTML'] = _0x338928;
            var _0x3459a2 = document['createElement']('canvas');
            _0x3459a2['width'] = 0x15e;
            _0x3459a2['height'] = 0xc3;
            var _0x54b300 = _0x3459a2['getContext']('2d');
            function _0xbf721f(_0x52c1a1, _0x11ee5b, _0x3db4eb, _0x4b5006, _0x5ec1ad) {
                var _0x2c2633 = document['createElement']('canvas');
                _0x2c2633['width'] = 0x15e;
                _0x2c2633['height'] = 0x15e;
                var _0x1533a2 = _0x2c2633['getContext']('2d');
                _0x1533a2['drawImage'](_0x3a4184(_0x52c1a1), 0x0, 0x0, 0x15e, 0x15e);
                var _0x4af2b0 = _0x4b5006['indexOf'](_0x52c1a1);
                _0x54b300['globalCompositeOperation'] = 'source-over';
                _0x54b300['clearRect'](0x0, 0x0, _0x3459a2['width'], _0x3459a2['height']);
                _0x54b300['drawImage'](_0x11ee5b, _0x4af2b0 % 0x6 * 0x15e, Math['floor'](_0x4af2b0 / 0x6) * 0xc3, 0x15e, 0xc3, 0x0, 0x0, 0x15e, 0xc3);
                _0x54b300['globalCompositeOperation'] = 'source-in';
                _0x54b300['drawImage'](_0x3a4184('red' + _0x5ec1ad), 0x0, 0xc3 / 0x2 - 0x15e / 0x2, 0x15e, 0x15e);
                _0x1533a2['drawImage'](_0x3459a2, 0x0, 0x15e / 0x2 - 0xc3 / 0x2);
                _0x54b300['globalCompositeOperation'] = 'source-over';
                _0x54b300['clearRect'](0x0, 0x0, _0x3459a2['width'], _0x3459a2['height']);
                _0x54b300['drawImage'](_0x3db4eb, _0x4af2b0 % 0x6 * 0x15e, Math['floor'](_0x4af2b0 / 0x6) * 0xc3, 0x15e, 0xc3, 0x0, 0x0, 0x15e, 0xc3);
                _0x54b300['globalCompositeOperation'] = 'source-in';
                _0x54b300['drawImage'](_0x3a4184('green' + _0x5ec1ad), 0x0, 0xc3 / 0x2 - 0x15e / 0x2, 0x15e, 0x15e);
                _0x1533a2['drawImage'](_0x3459a2, 0x0, 0x15e / 0x2 - 0xc3 / 0x2);
                return _0x2c2633;
            }
            var _0x2e7f56 = {};
            var _0x1885ea = ['empty', 'pewds', 'hawaii', 'lines', 'rainbow', 'retro', 'yt'];
            var _0x403277 = ['empty', 'pewds', 'retro', 'yt'];
            for (var _0x3192cf = 0x0; _0x3192cf < _0x1885ea['length']; _0x3192cf++) {
                _0x2e7f56[_0x1885ea[_0x3192cf]] = {};
            }
            function _0x36020f(_0x31603d, _0x1e005d) {
                if (_0x31603d == 'empty') {
                    return _0x3a4184(_0x1e005d);
                }
                if (_0x2e7f56[_0x31603d][_0x1e005d] !== undefined) {
                    return _0x2e7f56[_0x31603d][_0x1e005d];
                }
                var _0x4ae8df = _0xbf721f(_0x1e005d, _0x3a4184('redsheet'), _0x3a4184('greensheet'), _0x10c4b5, _0x31603d);
                _0x2e7f56[_0x31603d][_0x1e005d] = _0x4ae8df;
                return _0x4ae8df;
            }
            var _0x10c4b5 = ['scar', 'shotgun', 'bolt', 'deagle', 'drum', 'musket', 'heavy sniper', 'rifle', 'famas', 'smg', 'ump', 'scoped ar', 'tommy gun', 'rpg', 'ak47'];
            var _0x2b706a = _0x10c4b5['length'];
            for (var _0x3192cf = 0x0; _0x3192cf < _0x2b706a; _0x3192cf++) {
                _0x10c4b5['push']('top' + _0x10c4b5[_0x3192cf]);
            }
            window['updateSkins'] = function () {
                _0x403277 = ['empty'];
                if (_0x28dea0() && localStorage['ytskin']) {
                    _0x403277['push']('yt');
                }
                if (window['skins'] !== undefined) {
                    for (var _0x8af153 = 0x0; _0x8af153 < window['skins']['length']; _0x8af153++) {
                        _0x403277['push'](window['skins'][_0x8af153]);
                    }
                }
                var _0x3b3ba1 = _0x3a4184('lockerdata');
                var _0x2a8e7a = document['getElementById']('weaponskins');
                while (_0x2a8e7a != null && _0x2a8e7a['firstChild']) {
                    _0x2a8e7a['firstChild']['id'] = 'garbage';
                    _0x2a8e7a['removeChild'](_0x2a8e7a['firstChild']);
                }
                _0x3b3ba1['innerHTML'] = '';
                _0x3b3ba1['innerHTML'] = '<div id=\'weaponskins\' align=\'center\' style=\'text-align: center; padding: 20px\'></div>';
                var _0x414274 = document['getElementById']('weaponskins');
                var _0x4506fd = 0x87;
                var _0x7d1530 = _0x4506fd;
                _0x414274['innerHTML'] = '';
                for (var _0x8af153 = 0x0; _0x8af153 < _0x403277['length']; _0x8af153++) {
                    _0x414274['innerHTML'] += '<div class=\'wskin\' id=\'wskin' + _0x403277[_0x8af153] + '\' style=\'display: inline-block; width: ' + _0x4506fd + 'px; height: ' + _0x7d1530 + 'px; overflow: hidden; padding: -5px; margin: 5px; cursor: pointer;\'></div>';
                }
                for (var _0x8af153 = 0x0; _0x8af153 < _0x403277['length']; _0x8af153++) {
                    var _0x29b054 = document['getElementById']('wskin' + _0x403277[_0x8af153]);
                    var _0x5dc547 = _0x36020f(_0x403277[_0x8af153], 'scar');
                    try {
                        _0x5dc547['style']['width'] = _0x4506fd;
                        _0x5dc547['style']['height'] = _0x7d1530;
                        _0x5dc547['style']['transform'] = 'rotate(30deg)';
                        _0x5dc547['style']['visibility'] = 'visible';
                        _0x5dc547['style']['display'] = 'initial';
                    } catch (_0x48b8d4) {
                        console['log']('Skin problem');
                    }
                    _0x29b054['onclick'] = function (_0x186427) {
                        if (_0x186427['target']['nodeName'] == 'CANVAS' || _0x186427['target']['nodeName'] == 'IMG') {
                            _0x9b3832(_0x186427['target']['parentElement']['id']);
                        } else {
                            _0x9b3832(_0x186427['target']['id']);
                        }
                    };
                    _0x29b054['appendChild'](_0x5dc547);
                }
            };
            window['updateSkins']();
            window['updateSkins']();
            function _0x9b3832(_0x18f8f6) {
                try {
                    for (var _0x3e4e81 = 0x0; _0x3e4e81 < _0x403277['length']; _0x3e4e81++) {
                        var _0x51035e = _0x3a4184('wskin' + _0x403277[_0x3e4e81]);
                        _0x51035e['style']['backgroundColor'] = null;
                    }
                    _0x3a4184(_0x18f8f6)['style']['backgroundColor'] = 'rgba(0,0,0,0.4)';
                    hideModal('locker');
                    if (_0x18f8f6['indexOf']('wskin') != -0x1) {
                        _0x18f8f6 = _0x18f8f6['substr'](0x5);
                    }
                    if (_0x28dea0()) {
                        localStorage['weaponSkin'] = _0x18f8f6;
                    }
                    _0x29d998['weapon']['image'] = _0x36020f(_0x18f8f6, 'scar');
                } catch (_0x56310b) { }
            }
            function _0x5b8a9a() {
                if (_0x5f37fb) {
                    return;
                }
                for (var _0x28189e = 0x0; _0x28189e < 0x5dc; _0x28189e++) {
                    var _0xcd71b4 = Math['random']() - 0.5;
                    var _0x4d90f6 = Math['random']() - 0.5;
                    _0xcd71b4 *= _0x42a2d6;
                    _0x4d90f6 *= _0x42a2d6;
                    _0x4d90f6 += 0x1e;
                    var _0x476f13 = Math['floor'](Math['random']() * window['grassTypes']);
                    var _0x14c087 = new _0x193f4e['image'](window['grassCanvas' + _0x476f13], _0xcd71b4, _0x4d90f6, window['grassWidth'], window['grassWidth']);
                    _0x421d47['add'](_0x14c087);
                    window['grass']['push'](_0x14c087);
                }
            }
            function _0x23f5ef() {
                if (_0x1db9a8 == 0x0) {
                    _0x3a8b2a['qualitySize'] = 0x1;
                    _0x3a8b2a['smoothingEnabled'] = !![];
                    _0x193f4e['resize'](!![]);
                    if (window['grass']['length'] == 0x0) {
                        _0x5b8a9a();
                    }
                } else {
                    _0x3a8b2a['qualitySize'] = 0x1;
                    _0x3a8b2a['smoothingEnabled'] = !![];
                    _0x193f4e['resize'](!![]);
                    for (var _0x24f605 = 0x0; _0x24f605 < window['grass']['length']; _0x24f605++) {
                        window['grass'][_0x24f605]['parent']['remove'](window['grass'][_0x24f605]);
                    }
                    window['grass'] = [];
                }
                if (!_0x20ff46) { }
                if (_0x28dea0()) {
                    localStorage['graphics'] = _0x1db9a8;
                }
            }
            function _0x2515c6() {
                document['getElementById']('controlSetting')['selectedIndex'] = _0x5ca4d6;
                if (_0x28dea0()) {
                    localStorage['controlChoice'] = _0x5ca4d6;
                }
            }
            function _0xe3a756() {
                console['log']('Updating mouse');
                if (_0x312f16 == -0x1) {
                    document['exitPointerLock']();
                }
                document['getElementById']('mouseLockSetting')['selectedIndex'] = Number(_0x312f16) + 0x2;
                console['log'](Number(_0x312f16) + 0x2);
                if (_0x28dea0()) {
                    localStorage['mouse'] = _0x312f16;
                }
            }
            function _0x58b810() {
                console['log']('Updating region');
                var _0x1d5ae8 = 0x0;
                if (window['cachedRegion'] == 0x2 || window['cachedRegion'] == 0x3) {
                    _0x1d5ae8 = 0x1;
                } else if (window['cachedRegion'] == 0x7 || window['cachedRegion'] == 0x9) {
                    _0x1d5ae8 = 0x2;
                }
                document['getElementById']('regionSetting')['selectedIndex'] = _0x1d5ae8;
                if (_0x28dea0()) {
                    localStorage['region'] = window['cachedRegion'];
                }
            }
            if (!_0x20ff46) { }
            document['getElementById']('mouseLockSetting')['onchange'] = function () {
                _0x312f16 = document['getElementById']('mouseLockSetting')['value'];
                _0xe3a756();
            };
            document['getElementById']('regionSetting')['onchange'] = function () {
                window['cachedRegion'] = document['getElementById']('regionSetting')['value'];
                _0x58b810();
            };
            document['getElementById']('controlSetting')['onchange'] = function () {
                _0x5ca4d6 = document['getElementById']('controlSetting')['value'];
                _0x2515c6();
            };
            var _0x4c3a32 = -0x1;
            function _0x40d524() {
                for (var _0x281ace = 0x0; _0x281ace < _0xf01486['length']; _0x281ace++) {
                    document['getElementById']('key' + _0x281ace)['style']['backgroundColor'] = null;
                    document['getElementById']('key' + _0x281ace)['innerHTML'] = _0x21ed5b[_0xf01486[_0x281ace]];
                }
            }
            for (var _0x3192cf = 0x0; _0x3192cf < _0x57deed['length']; _0x3192cf++) {
                document['getElementById']('key' + _0x3192cf)['onclick'] = function (_0x5ee0c8) {
                    _0x40d524();
                    var _0x44d9da = _0x5ee0c8['target']['id']['substring'](0x3);
                    _0x5ee0c8['target']['style']['backgroundColor'] = 'rgba(0,0,0,0.25)';
                    _0x5ee0c8['target']['innerHTML'] = 'Press any button...';
                    _0x4c3a32 = _0x44d9da;
                };
            }
            function _0x224d34() {
                _0x4c3a32 = -0x1;
                _0x40d524();
                document['getElementById']('settings')['style']['visibility'] = 'hidden';
                document['getElementById']('settings')['style']['display'] = 'none';
            }
            function _0x3326ca() {
                hideAllModals();
                document['getElementById']('settings')['style']['visibility'] = 'visible';
                document['getElementById']('settings')['style']['display'] = 'initial';
            }
            function _0x3cb799() {
                if (_0x28dea0()) {
                    localStorage['binds'] = JSON['stringify'](_0xf01486);
                }
            }
            function _0x29a3f8() {
                if (_0x20ff46) {
                    _0x23f5ef();
                }
                if (_0x28dea0()) {
                    if (localStorage['graphics'] !== undefined && (localStorage['graphics'] == 0x0 || localStorage['graphics'] == 0x1)) {
                        _0x1db9a8 = localStorage['graphics'];
                        if (_0x20ff46) { }
                    }
                    if (localStorage['controlChoice'] !== undefined) {
                        _0x5ca4d6 = localStorage['controlChoice'];
                        _0x2515c6();
                    }
                    if (localStorage['mouse'] !== undefined && (localStorage['mouse'] == -0x2 || localStorage['mouse'] == -0x1)) {
                        _0x312f16 = localStorage['mouse'];
                        _0xe3a756();
                    }
                    if (localStorage['region'] !== undefined && (localStorage['region'] == 0x2 || localStorage['region'] == 0x3 || localStorage['region'] == 0x7 || localStorage['region'] == 0x9)) {
                        if (localStorage['region'] == 0x9) {
                            localStorage['region'] = 0x7;
                        }
                        if (localStorage['region'] == 0x2) {
                            localStorage['region'] = 0x3;
                        }
                        window['cachedRegion'] = localStorage['region'];
                        _0x58b810();
                    }
                    if (localStorage['binds'] !== undefined) {
                        var _0x1ab956 = [];
                        try {
                            _0x1ab956 = JSON['parse'](localStorage['binds']);
                        } catch (_0x42ea8f) { }
                        for (var _0x431c7b = 0x0; _0x431c7b < _0x1ab956['length']; _0x431c7b++) {
                            if (_0x375d03['indexOf'](_0x1ab956[_0x431c7b]['toString']()) != -0x1) {
                                _0xf01486[_0x431c7b] = Number(_0x1ab956[_0x431c7b]);
                            }
                        }
                        _0x40d524();
                    }
                }
            }
            document['getElementById']('savebindsbutton')['onclick'] = function () {
                _0x224d34();
            };
            document['getElementById']('exitsettingsbutton')['onclick'] = function () {
                _0x224d34();
            };
            var _0x2b610b = 0x514;
            var _0x331f57 = _0x2b610b * _0x2b610b;
            var _0x2ccebd = 0x3e8;
            var _0x5e8155 = _0x2ccebd * _0x2ccebd;
            var _0x37e260 = {};
            function _0x171b7b(_0x5ec678, _0x1a27a8) {
                var _0x312b85 = _0x441428(_0x5ec678, _0x1a27a8);
                if (_0x312b85 > _0x331f57) {
                    return 0x0;
                }
                _0x312b85 = 0x1 - _0x312b85 / _0x331f57;
                var _0x3a3c9d = _0x1a27a8['y'] - _0x5ec678['y'];
                if (_0x312b85 > 0x64 && _0x3a3c9d > 0x64) {
                    return 0x64;
                }
                _0x3a3c9d *= _0x3a3c9d;
                _0x3a3c9d = 0x1 - _0x3a3c9d / _0x5e8155;
                _0x312b85 = Math['min'](_0x312b85, _0x3a3c9d);
                if (_0x312b85 < 0x0) {
                    return 0x0;
                }
                _0x312b85 *= _0x312b85;
                _0x312b85 *= 0.5;
                _0x312b85 = Math['min'](_0x312b85, 0x64);
                return _0x312b85;
            }
            function _0x35c7e2(_0xbbcb5a, _0x285a29, _0x44307d, _0x4e9e1e) {
                var _0x72a8b = _0x171b7b(_0x285a29, _0x44307d);
                if (_0x72a8b <= 0x0 && !_0x4e9e1e) {
                    return null;
                }
                if (_0x37e260[_0xbbcb5a] === undefined && !_0x4e9e1e) {
                    return null;
                }
                if (gameWrapper['needsNativeAudio']) {
                    var _0xbbcb5a = _0x37e260[_0xbbcb5a][0x0];
                    gameWrapper['playAudio'](_0xbbcb5a['src'], _0x72a8b);
                    return _0xbbcb5a;
                }
                for (var _0x16a92d = 0x0; _0x16a92d < _0x37e260[_0xbbcb5a]['length']; _0x16a92d++) {
                    if (_0x37e260[_0xbbcb5a][_0x16a92d]['paused']) {
                        _0x37e260[_0xbbcb5a][_0x16a92d]['currentTime'] = 0x0;
                        _0x37e260[_0xbbcb5a][_0x16a92d]['volume'] = _0x72a8b;
                        _0x37e260[_0xbbcb5a][_0x16a92d]['play']();
                        return _0x37e260[_0xbbcb5a][_0x16a92d];
                    }
                }
                var _0xa02d60 = _0x37e260[_0xbbcb5a][0x0]['cloneNode']();
                _0x37e260[_0xbbcb5a]['push'](_0xa02d60);
                _0xa02d60['volume'] = _0x72a8b;
                _0xa02d60['play']();
                return _0xa02d60;
            }
            function _0x37222d(_0x42970d) {
                var _0x28aa55 = document['createElement']('audio');
                _0x28aa55['src'] = 'audio/' + _0x42970d + '.mp3';
                _0x37e260[_0x42970d] = [_0x28aa55];
                if (gameWrapper['needsNativeAudio'])
                    gameWrapper['loadAudio'](_0x28aa55['src']);
            }
            function _0xfa7ed2(_0x1e4035) {
                var _0x4df561 = document['createElement']('audio');
                var _0x21756a = _0x1e4035;
                if (_0x1e4035 == 'ump') {
                    _0x1e4035 = 'smg';
                }
                _0x4df561['src'] = 'audio/gun/' + _0x1e4035 + '.mp3';
                if (_0x37e260[_0x21756a] === undefined) {
                    _0x37e260[_0x21756a] = [_0x4df561];
                } else {
                    _0x37e260[_0x21756a]['push'](_0x4df561);
                }
                if (gameWrapper['needsNativeAudio'])
                    gameWrapper['loadAudio'](_0x4df561['src']);
            }
            var _0x19af16 = ![];
            if (_0x19af16) {
                window['AudioContext'] = window['AudioContext'] || window['webkitAudioContex'];
                var _0x373509 = new window['AudioContext']();
                if (!_0x373509['createGain'])
                    _0x373509['createGain'] = _0x373509['createGainNode'];
                if (!_0x373509['createDelay'])
                    _0x373509['createDelay'] = _0x373509['createDelayNode'];
                if (!_0x373509['createScriptProcessor'])
                    _0x373509['createScriptProcessor'] = _0x373509['createJavaScriptNode'];
                var _0x584d3b = {
                    'sounds': {},
                    'gainNodes': [],
                    'context': _0x373509,
                    'loadSample': function (_0x5ca41a) {
                        return fetch(_0x5ca41a)['then'](function (_0x1a0357) {
                            return _0x1a0357['arrayBuffer']();
                        })['then'](function (_0x109c9d) {
                            return _0x584d3b['context']['decodeAudioData'](_0x109c9d);
                        });
                    },
                    'playSample': function (_0x56cde6, _0x2a1bad) {
                        if (_0x56cde6 == undefined || _0x2a1bad == undefined) {
                            return;
                        }
                        var _0x81c59f = _0x584d3b['context']['createBufferSource']();
                        _0x81c59f['buffer'] = _0x56cde6;
                        _0x81c59f['connect'](_0x2a1bad);
                        _0x81c59f['start'](0x0);
                    },
                    'load': function (_0x473e03, _0x1f6d7e) {
                        if (_0x584d3b['sounds'][_0x473e03] != undefined) {
                            return;
                        }
                        _0x584d3b['sounds'][_0x473e03] = 0x1;
                        _0x584d3b['loadSample'](_0x1f6d7e)['then'](function (_0x13a9d0) {
                            _0x584d3b['sounds'][_0x473e03] = _0x13a9d0;
                        });
                    }
                };
                _0x35c7e2 = function (_0x1967dd, _0x92bd77, _0x23041f) {
                    var _0x4f56d4 = _0x171b7b(_0x92bd77, _0x23041f);
                    if (_0x4f56d4 <= 0x0 || _0x584d3b['sounds'][_0x1967dd] == undefined || _0x584d3b['sounds'][_0x1967dd] == 0x1) {
                        return;
                    }
                    _0x4f56d4 = Math['floor'](_0x4f56d4 * 0xa);
                    var _0x795af7 = _0x584d3b['gainNodes'][_0x4f56d4];
                    _0x584d3b['playSample'](_0x584d3b['sounds'][_0x1967dd], _0x795af7);
                };
                _0x37222d = function (_0x16643a) {
                    _0x584d3b['load'](_0x16643a, 'audio/' + _0x16643a + '.mp3');
                };
                _0xfa7ed2 = function (_0x431112) {
                    var _0x434edf = _0x431112;
                    if (_0x431112 == 'ump') {
                        _0x431112 = 'smg';
                    }
                    _0x584d3b['load'](_0x434edf, 'audio/gun/' + _0x431112 + '.mp3');
                };
                for (var _0x3192cf = 0x0; _0x3192cf <= 0xa; _0x3192cf++) {
                    var _0x5753b9 = _0x373509['createGain']();
                    _0x5753b9['gain']['setValueAtTime'](_0x3192cf / 0xa, 0x0);
                    _0x5753b9['connect'](_0x584d3b['context']['destination']);
                    _0x584d3b['gainNodes']['push'](_0x5753b9);
                }
                window['addEventListener']('touchstart', function () {
                    _0x584d3b['playSample'](_0x584d3b['sounds']['smg'], _0x584d3b['gainNodes'][0x9]);
                });
            }
            var _0x30910d = 0x6;
            var _0x349bd6 = 0x1;
            var _0x5e61c4 = 0x6;
            var _0x52872f = 0x3;
            for (var _0x3192cf = 0x0; _0x3192cf < _0x30910d; _0x3192cf++) {
                _0x37222d('wood' + _0x3192cf);
            }
            for (var _0x3192cf = 0x0; _0x3192cf < _0x349bd6; _0x3192cf++) {
                _0x37222d('rock' + _0x3192cf);
            }
            for (var _0x3192cf = 0x0; _0x3192cf < _0x5e61c4; _0x3192cf++) {
                _0x37222d('metal' + _0x3192cf);
            }
            for (var _0x3192cf = 0x0; _0x3192cf < _0x52872f; _0x3192cf++) {
                _0x37222d('christmasstep' + _0x3192cf);
            }
            for (var _0x3192cf = 0x0; _0x3192cf < _0x52872f; _0x3192cf++) {
                _0x37222d('step' + _0x3192cf);
            }
            _0x37222d('explosion0');
            _0x37222d('explosion1');
            _0x37222d('grapple');
            _0x37222d('baller');
            _0x37222d('bounce');
            _0x37222d('reload');
            _0xfa7ed2('ar');
            var _0x212f1f = ['bolt', 'deagle', 'rifle', 'scar', 'famas', 'scoped-ar', 'shotgun', 'smg', 'ump', 'tommy gun', 'drum', 'musket', 'heavy sniper', 'ak47', 'combat', 'snowball', 'silencedpistol', 'aug'];
            for (var _0x3192cf = 0x0; _0x3192cf < _0x212f1f['length']; _0x3192cf++) {
                _0xfa7ed2(_0x212f1f[_0x3192cf]);
            }
            for (var _0x3192cf = 0x0; _0x3192cf < 0x13; _0x3192cf++) {
                setTimeout(function () {
                    _0xfa7ed2('ump');
                }, 0x64 * _0x3192cf);
            }
            for (var _0x3192cf = 0x0; _0x3192cf < 0x5; _0x3192cf++) {
                setTimeout(function () {
                    _0xfa7ed2('famas');
                }, 0xc8 * _0x3192cf);
            }
            for (var _0x3192cf = 0x0; _0x3192cf < 0xf; _0x3192cf++) {
                setTimeout(function () {
                    _0xfa7ed2('tommy gun');
                }, 0xc8 * _0x3192cf);
            }
            var _0x401a87 = 0x0;
            var _0x549484 = 0x0;
            function _0x245f69(_0x3d1b9a) {
                _0x35c7e2('wood' + Math['floor'](Math['random']() * _0x30910d), _0x193f4e['me']['visual']['position'], _0x3d1b9a['visual']['position']);
            }
            function _0x56587a(_0x3020af) {
                _0x35c7e2('rock' + Math['floor'](Math['random']() * _0x349bd6), _0x193f4e['me']['visual']['position'], _0x3020af['visual']['position']);
            }
            function _0x3a85d0(_0x722a80) {
                _0x35c7e2('metal' + Math['floor'](Math['random']() * _0x5e61c4), _0x193f4e['me']['visual']['position'], _0x722a80['visual']['position']);
            }
            _0x4c7f3b['showName'](_0x193f4e, _0x71cb56);
            function _0x5eb004(_0x4c9673) {
                while (_0x4c9673 < 0x0) {
                    _0x4c9673 += Math['PI'] * 0x2;
                }
                while (_0x4c9673 > Math['PI'] * 0x2) {
                    _0x4c9673 -= Math['PI'] * 0x2;
                }
                return _0x4c9673;
            }
            function _0x1be276(_0x51db9d, _0x39ac67, _0x514606) {
                return (_0x39ac67 - _0x51db9d) * _0x514606 + _0x51db9d;
            }
            var _0x583648 = function (_0x459964) {
                return {
                    'scene': _0x459964,
                    'position': new _0x193f4e['Vector2'](0x0, 0x0),
                    'velocity': new _0x193f4e['Vector2'](0x0, 0x0),
                    'elasticity': 0.01,
                    'drag': 0.2,
                    'shake': function (_0xeefd5a, _0x2f9f4d) {
                        _0xeefd5a = _0xeefd5a || 0x1;
                        _0x2f9f4d = _0x2f9f4d || Math['random']() * Math['PI'] * 0x2;
                        this['velocity']['x'] = Math['cos'](_0x2f9f4d) * _0xeefd5a;
                        this['velocity']['y'] = Math['sin'](_0x2f9f4d) * _0xeefd5a;
                    },
                    'update': function () {
                        this['velocity']['x'] -= this['velocity']['x'] * this['drag'] * _0x193f4e['clientDetails']['dt'];
                        this['velocity']['y'] -= this['velocity']['y'] * this['drag'] * _0x193f4e['clientDetails']['dt'];
                        this['velocity']['x'] -= this['position']['x'] * this['elasticity'] * _0x193f4e['clientDetails']['dt'];
                        this['velocity']['y'] -= this['position']['y'] * this['elasticity'] * _0x193f4e['clientDetails']['dt'];
                        this['position']['x'] += this['velocity']['x'] * _0x193f4e['clientDetails']['dt'];
                        this['position']['y'] += this['velocity']['y'] * _0x193f4e['clientDetails']['dt'];
                        this['scene']['camera']['position']['x'] += this['position']['x'];
                        this['scene']['camera']['position']['y'] += this['position']['y'];
                    }
                };
            };
            function _0x31e706(_0x4344df) {
                var _0x543d3b = _0x4344df['toString'](0x10);
                return _0x543d3b['length'] == 0x1 ? '0' + _0x543d3b : _0x543d3b;
            }
            function _0x3a5420(_0x6cd96c, _0x52ac84, _0x4ebbe2) {
                return '#' + _0x31e706(_0x6cd96c) + _0x31e706(_0x52ac84) + _0x31e706(_0x4ebbe2);
            }
            var _0x6ead98 = [];
            function _0x35daa0(_0xf426d5, _0x1d2eb1) {
                var _0x5243cc, _0x4181ff = _0xf426d5 / 0x3;
                if (_0x1d2eb1 === undefined) {
                    _0x1d2eb1 = 0.001;
                }
                do {
                    _0x5243cc = _0x4181ff;
                    _0x4181ff = (_0xf426d5 / _0x4181ff + _0x4181ff) / 0x2;
                } while (Math['abs'](_0x5243cc - _0x4181ff) > _0x1d2eb1);
                if (isNaN(_0x4181ff)) {
                    return 0x0;
                }
                return _0x4181ff;
            }
            for (var _0x3192cf = 0x0; _0x3192cf <= 0x3e8; _0x3192cf++) {
                _0x6ead98[_0x3192cf] = Math['sqrt'](_0x3192cf);
            }
            function _0x551fc6(_0x13b9e6) {
                if (_0x13b9e6 < 0x0) {
                    return 0x0;
                }
                if (Math['floor'](_0x13b9e6) == _0x13b9e6 && _0x13b9e6 < _0x6ead98['length']) {
                    return _0x6ead98[_0x13b9e6];
                }
                return _0x3608cd(_0x13b9e6, 0x1);
            }
            function _0x3608cd(_0xb6bafb, _0xc5795b) {
                if (_0xb6bafb <= 0x0) {
                    return 0x0;
                }
                var _0x3c4701, _0x59ca01 = 0x0;
                var _0x2fc91d = 0x1;
                if (_0xc5795b === undefined) {
                    _0xc5795b = 0.1;
                }
                var _0x120b0c = 0x1;
                var _0x4bf9ee;
                do {
                    _0x3c4701 = _0x59ca01;
                    _0x59ca01 += _0x120b0c;
                    _0x4bf9ee = _0x59ca01 * _0x59ca01;
                    if (_0x4bf9ee - _0xb6bafb > _0xc5795b) {
                        _0x120b0c /= 0xa;
                        _0x59ca01 = _0x3c4701;
                    }
                } while (Math['abs'](_0x4bf9ee - _0xb6bafb) > _0xc5795b);
                return _0x59ca01;
            }
            function _0x441428(_0x5b442e, _0x170386) {
                return (_0x170386['x'] - _0x5b442e['x']) * (_0x170386['x'] - _0x5b442e['x']) + (_0x170386['y'] - _0x5b442e['y']) * (_0x170386['y'] - _0x5b442e['y']);
            }
            function _0x3f3ac9(_0x4c2090, _0x3f9c60) {
                return _0x551fc6((_0x3f9c60['x'] - _0x4c2090['x']) * (_0x3f9c60['x'] - _0x4c2090['x']) + (_0x3f9c60['y'] - _0x4c2090['y']) * (_0x3f9c60['y'] - _0x4c2090['y']));
            }
            function _0x44594e(_0x3e4c16, _0x54d0cf) {
                return Math['sqrt']((_0x54d0cf['x'] - _0x3e4c16['x']) * (_0x54d0cf['x'] - _0x3e4c16['x']) + (_0x54d0cf['y'] - _0x3e4c16['y']) * (_0x54d0cf['y'] - _0x3e4c16['y']));
            }
            var _0x3a8b2a = new _0x193f4e['renderer']();
            _0x3a8b2a['clearScreen'] = ![];
            _0x3a8b2a['ctx']['imageSmoothingEnabled'] = !![];
            _0x3a8b2a['c']['style']['backgroundColor'] = window['groundColor'];
            _0x3a8b2a['c']['requestPointerLock'] = _0x3a8b2a['c']['requestPointerLock'] || _0x3a8b2a['c']['mozRequestPointerLock'] || function () { };
            document['exitPointerLock'] = document['exitPointerLock'] || document['mozExitPointerLock'] || function () { };
            _0x3a8b2a['c']['addEventListener']('click', function (_0x1cbead) {
                if (!_0x193f4e['spectating'] && !_0x5cab44['locked']) {
                    if (_0x312f16 == -0x2 && !_0x4d4973) {
                        console['log'](_0x312f16);
                        _0x3a8b2a['c']['requestPointerLock']();
                    }
                }
            });
            var _0x5cab44 = new _0x193f4e['mouse'](_0x3a8b2a);
            var _0x5ed3ee = new _0x193f4e['touches'](_0x3a8b2a, _0x5cab44);
            var _0x5628fe = 0x0;
            _0x193f4e['keyboard'] = function (_0x330259) {
                _0x330259 = _0x330259 || new _0x193f4e['controls']();
                _0x330259['changedKeys'] = [];
                function _0x3c944f(_0x48cc54) {
                    var _0x1c308d = ![];
                    if (_0x48cc54['keyCode'] == _0x1eb506('Move Left')) {
                        if (!_0x330259['left']) {
                            _0x1c308d = !![];
                            _0x330259['left'] = !![];
                            _0x330259['changedKeys']['push']('left');
                        }
                    } else if (_0x48cc54['keyCode'] == _0x1eb506('Move Up')) {
                        if (!_0x330259['up']) {
                            _0x1c308d = !![];
                            _0x330259['up'] = !![];
                            _0x330259['changedKeys']['push']('up');
                        }
                    } else if (_0x48cc54['keyCode'] == _0x1eb506('Move Right')) {
                        if (!_0x330259['right']) {
                            _0x1c308d = !![];
                            _0x330259['right'] = !![];
                            _0x330259['changedKeys']['push']('right');
                        }
                    } else if (_0x48cc54['keyCode'] == _0x1eb506('Move Down')) {
                        if (!_0x330259['down']) {
                            _0x1c308d = !![];
                            _0x330259['down'] = !![];
                            _0x330259['changedKeys']['push']('down');
                        }
                    } else if (_0x48cc54['keyCode'] == _0x1eb506('Jump')) {
                        if (!_0x330259['space']) {
                            _0x1c308d = !![];
                            _0x330259['space'] = !![];
                            _0x330259['changedKeys']['push']('space');
                        }
                    } else if (_0x48cc54['keyCode'] == _0x1eb506('Sprint')) {
                        if (!_0x330259['shift']) {
                            _0x1c308d = !![];
                            _0x330259['shift'] = !![];
                            _0x330259['changedKeys']['push']('shift');
                        }
                    }
                    _0x330259['changed'] = _0x1c308d;
                }
                window['addEventListener']('keydown', _0x3c944f, ![]);
                function _0x2095a5(_0x1b8fae) {
                    if (_0x1b8fae['keyCode'] == _0x1eb506('Move Left')) {
                        _0x330259['left'] = ![];
                        _0x330259['changedKeys']['push']('left');
                    } else if (_0x1b8fae['keyCode'] == _0x1eb506('Move Up')) {
                        _0x330259['up'] = ![];
                        _0x330259['changedKeys']['push']('up');
                    } else if (_0x1b8fae['keyCode'] == _0x1eb506('Move Right')) {
                        _0x330259['right'] = ![];
                        _0x330259['changedKeys']['push']('right');
                    } else if (_0x1b8fae['keyCode'] == _0x1eb506('Move Down')) {
                        _0x330259['down'] = ![];
                        _0x330259['changedKeys']['push']('down');
                    } else if (_0x1b8fae['keyCode'] == _0x1eb506('Jump')) {
                        _0x330259['space'] = ![];
                        _0x330259['changedKeys']['push']('space');
                    } else if (_0x1b8fae['keyCode'] == _0x1eb506('Sprint')) {
                        _0x330259['shift'] = ![];
                        _0x330259['changedKeys']['push']('shift');
                    }
                    _0x330259['changed'] = !![];
                }
                window['addEventListener']('keyup', _0x2095a5, ![]);
                return _0x330259;
            };
            var _0x1109c2 = new _0x193f4e['keyboard']();
            if ('onpointerlockchange' in document) {
                document['addEventListener']('pointerlockchange', _0x2213c4, ![]);
            } else if ('onmozpointerlockchange' in document) {
                document['addEventListener']('mozpointerlockchange', _0x2213c4, ![]);
            }
            function _0x2213c4() {
                if (document['pointerLockElement'] === _0x3a8b2a['c'] || document['mozPointerLockElement'] === _0x3a8b2a['c']) {
                    _0x5cab44['locked'] = !![];
                } else {
                    _0x5cab44['locked'] = ![];
                }
            }
            var _0x5b0d5d = 0x12c;
            var _0x7e6865 = 0.8;
            var _0x227276 = new _0x193f4e['scene']();
            _0x227276['mouseCamera'] = new _0x193f4e['Vector2'](0x0, 0x0);
            _0x227276['camera']['ratio'] = 0x1;
            _0x227276['camera']['newRatio'] = 0x1;
            _0x227276['camera']['borderRatio'] = 0x1;
            _0x227276['name'] = 'scene';
            var _0x529676 = new _0x193f4e['scene']();
            _0x529676['camera'] = _0x227276['camera'];
            _0x529676['name'] = 'middle';
            var _0x4ff890 = new _0x193f4e['scene']();
            _0x4ff890['camera'] = _0x227276['camera'];
            _0x4ff890['name'] = 'background';
            var _0x343783 = new _0x193f4e['scene']();
            _0x343783['camera'] = _0x227276['camera'];
            _0x343783['name'] = 'bridgeScene';
            var _0x421d47 = new _0x193f4e['scene']();
            _0x421d47['camera'] = _0x227276['camera'];
            _0x421d47['name'] = 'gridBackground';
            var _0x559922 = new _0x193f4e['scene']();
            _0x559922['camera'] = _0x227276['camera'];
            _0x559922['name'] = 'middleScene';
            var _0x4d0080 = new _0x193f4e['scene']();
            _0x4d0080['camera'] = _0x227276['camera'];
            _0x4d0080['name'] = 'top';
            var _0x7b0032 = new _0x193f4e['scene']();
            _0x7b0032['camera'] = _0x227276['camera'];
            _0x7b0032['name'] = 'borderScene';
            var _0x4f8769 = new _0x193f4e['scene']();
            _0x4f8769['name'] = 'mapScene';
            var _0x1ed680 = new _0x193f4e['scene']();
            var _0xd7c504 = [_0x421d47, _0x4ff890, _0x343783, _0x227276, _0x529676, _0x4d0080, _0x559922];
            var _0x416678 = [new _0x193f4e['scene'](), new _0x193f4e['scene'](), new _0x193f4e['scene'](), new _0x193f4e['scene'](), new _0x193f4e['scene'](), new _0x193f4e['scene'](), new _0x193f4e['scene']()];
            var _0x3ad5a2 = new _0x193f4e['scene']();
            _0x4c7f3b['createUI'](_0x193f4e, _0x3ad5a2);
            _0x4c7f3b['createMap'](_0x193f4e, _0x421d47, _0x529676, _0x42a2d6);
            var _0x2c04b3 = '\'Arial Black\', Gadget, sans-serif';
            _0x2c04b3 = '\'Arial Black\'';
            var _0x2c4b61 = new _0x193f4e['text']('', 0x0, -0xbe / 0x2 + 0x19, '#FFF', _0x2c04b3, 0x96 / 0x5, '');
            _0x2c4b61['addBelow'](new _0x193f4e['text']('', 0x0, 0x5, '#FFF', _0x2c04b3, 0x96 / 0x5, '', 0.4));
            _0x3ad5a2['add'](_0x2c4b61);
            var _0x54d195 = new _0x193f4e['scene']();
            _0x54d195['camera'] = _0x227276['camera'];
            _0x54d195['name'] = 'leafScene';
            var _0x48c8c6 = new _0x193f4e['object']();
            _0x54d195['add'](_0x48c8c6);
            var _0x1b82e5 = document['getElementById']('nameBox');
            _0x1b82e5['addEventListener']('focus', function () {
                _0x2126ed(_0x5cab44['emulatedFromTouch']);
            });
            _0x1b82e5['addEventListener']('blur', function () {
                _0x2126ed(![]);
            });
            function _0x2126ed(_0x2660f7) {
                window['menuLogo']['visible'] = !_0x2660f7;
                _0x3a4184('name')['classList']['toggle']('mobileInput', _0x2660f7);
            }
            _0x2126ed(![]);
            _0x29a3f8();
            var _0x357743 = [_0x3a4184('leaf0'), _0x3a4184('leaf1')];
            var _0x4a2b67 = {
                'leaf': {
                    'new': function (_0x88b970) {
                        var _0x154280 = new _0x193f4e['image'](_0x357743[0x0]);
                        _0x529676['add'](_0x154280);
                        return _0x154280;
                    },
                    'update': function (_0x406c1c, _0x14ff3e) {
                        if (_0x14ff3e['envType'] == 'jungletree') {
                            _0x406c1c['img'] = _0x357743[0x0];
                        } else {
                            _0x406c1c['image'] = _0x357743[_0x14ff3e['envType']['substring'](0x4)];
                        }
                        _0x406c1c['position']['x'] = _0x14ff3e['visual']['position']['x'] + Math['random']() * 0x1e - 0xf;
                        _0x406c1c['position']['y'] = _0x14ff3e['visual']['position']['y'] + Math['random']() * 0x1e - 0xf;
                        _0x406c1c['width'] = 0x32 + Math['random']() * 0x14;
                        _0x406c1c['height'] = 0x32 + Math['random']() * 0x14;
                        _0x406c1c['opacity'] = 0x1;
                    }
                },
                'smoke': {
                    'new': function (_0x4d39f6) {
                        var _0x2511b6 = new _0x193f4e['image'](_0x3a4184('smoke' + Math['floor'](Math['random']() * 0x2)));
                        _0x529676['add'](_0x2511b6);
                        return _0x2511b6;
                    },
                    'update': function (_0x2b11fe, _0x1ccc76) {
                        var _0x506e9b = 0.4;
                        if (_0x1ccc76['sprinting']) {
                            _0x506e9b = 0x1;
                        }
                        var _0x326e23 = 0x32 + Math['random']() * 0x14;
                        _0x2b11fe['position']['x'] = _0x1ccc76['visual']['position']['x'] + Math['random']() * 0x1e - 0xf;
                        _0x2b11fe['position']['y'] = _0x1ccc76['visual']['position']['y'] + Math['random']() * 0x1e - 0xf;
                        _0x2b11fe['width'] = _0x2b11fe['height'] = _0x326e23;
                        _0x2b11fe['opacity'] = _0x506e9b;
                    }
                },
                'pebble': {
                    'new': function (_0x486281) {
                        var _0x17b086 = new _0x193f4e['image'](_0x3a4184('pebble'));
                        _0x529676['add'](_0x17b086);
                        return _0x17b086;
                    },
                    'update': function (_0x17912f, _0x45bc73) {
                        _0x17912f['position']['x'] = _0x45bc73['visual']['position']['x'] + Math['random']() * 0x1e - 0xf;
                        _0x17912f['position']['y'] = _0x45bc73['visual']['position']['y'] + Math['random']() * 0x1e - 0xf;
                        _0x17912f['width'] = 0x32 + Math['random']() * 0x14;
                        _0x17912f['height'] = 0x32 + Math['random']() * 0x14;
                        _0x17912f['opacity'] = 0x1;
                    }
                },
                'scrap': {
                    'new': function (_0x5c54b7) {
                        var _0x4190e6 = new _0x193f4e['image'](_0x3a4184('scrap' + Math['floor'](Math['random']() * 0x2)));
                        _0x529676['add'](_0x4190e6);
                        return _0x4190e6;
                    },
                    'update': function (_0x520b38, _0x441f80) {
                        _0x520b38['position']['x'] = _0x441f80['visual']['position']['x'] + Math['random']() * 0x1e - 0xf;
                        _0x520b38['position']['y'] = _0x441f80['visual']['position']['y'] + Math['random']() * 0x1e - 0xf;
                        _0x520b38['width'] = 0x32 + Math['random']() * 0x14;
                        _0x520b38['height'] = 0x32 + Math['random']() * 0x14;
                        _0x520b38['opacity'] = 0x1;
                    }
                }
            };
            var _0x23b884 = _0x2a1802(_0x4a2b67);
            for (var _0x3192cf = 0x0; _0x3192cf < _0x23b884['length']; _0x3192cf++) {
                _0x4a2b67[_0x23b884[_0x3192cf]]['list'] = [];
                _0x4a2b67[_0x23b884[_0x3192cf]]['actualNew'] = function () {
                    var _0x17a3c5 = this['new']();
                    _0x193f4e['customParticle'](_0x17a3c5);
                    _0x17a3c5['using'] = ![];
                    _0x17a3c5['visible'] = ![];
                    _0x17a3c5['parentRemove'] = ![];
                    if (_0x17a3c5['oldUpdate'] == undefined) {
                        _0x17a3c5['oldUpdate'] = _0x17a3c5['update'];
                        _0x17a3c5['update'] = function (_0x132f1a) {
                            if (!this['using']) {
                                return;
                            }
                            if (!this['oldUpdate'](_0x132f1a)) {
                                this['using'] = ![];
                                this['visible'] = ![];
                            }
                        };
                        _0x17a3c5['oldRender'] = _0x17a3c5['render'];
                        _0x17a3c5['render'] = function (_0x4970dd, _0x4d77a4, _0x367a35) {
                            if (this['using']) {
                                this['oldRender'](_0x4970dd, _0x4d77a4, _0x367a35);
                            }
                        };
                    }
                    return _0x17a3c5;
                };
                for (var _0x33691a = 0x0; _0x33691a < 0x28; _0x33691a++) {
                    _0x4a2b67[_0x23b884[_0x3192cf]]['list']['push'](_0x4a2b67[_0x23b884[_0x3192cf]]['actualNew']());
                }
            }
            _0x193f4e['customCustomParticle'] = function (_0x5530d4, _0x43e86b, _0x34212d, _0x34f4fb, _0x38cb40, _0x31328e, _0x4228c1, _0x3a186b) {
                var _0x2eba47 = _0x4a2b67[_0x5530d4]['list'];
                for (var _0x4beb36 = 0x0; _0x4beb36 <= _0x2eba47['length']; _0x4beb36++) {
                    if (_0x4beb36 == _0x2eba47['length']) {
                        _0x2eba47[_0x4beb36] = _0x4a2b67[_0x5530d4]['actualNew']();
                    }
                    if (!_0x2eba47[_0x4beb36]['using']) {
                        _0x2eba47[_0x4beb36]['using'] = !![];
                        _0x4a2b67[_0x5530d4]['update'](_0x2eba47[_0x4beb36], _0x43e86b);
                        _0x193f4e['customParticle'](_0x2eba47[_0x4beb36], _0x34212d, _0x34f4fb, _0x38cb40, _0x31328e, _0x4228c1, _0x3a186b);
                        _0x2eba47[_0x4beb36]['parent'] = null;
                        _0x2eba47[_0x4beb36]['visible'] = !![];
                        if (_0x2eba47[_0x4beb36] == undefined) {
                            console['log']('Gave undefined');
                        }
                        return _0x2eba47[_0x4beb36];
                    }
                }
            };
            var _0xa4384a = document['createElement']('canvas');
            _0xa4384a['width'] = _0xa4384a['height'] = 0x708;
            var _0x5e7f93 = _0xa4384a['getContext']('2d');
            var _0x94eaf6 = new _0x193f4e['image'](_0xa4384a, 0x0, 0x0, 0x384, 0x384);
            _0x4f8769['add'](new _0x193f4e['rectangle'](0x0, 0x0, 0x782, 0x43a, '#000', 0.3));
            _0x4f8769['add'](_0x94eaf6);
            var _0x550b11 = new _0x193f4e['object']();
            _0x550b11['add'](new _0x193f4e['rectangle'](0x0, 0x0, 0x782, 0x43a, '#000', 0.5));
            var _0x31222a = [];
            function _0x276dbd(_0x1ab4f8) {
                var _0x218984 = new _0x193f4e['strokeText'](_0x1ab4f8['text'], 0x0, 0x0, '#000', 'Arial Black', _0x1ab4f8['fontSize'], '', 0x1, _0x1ab4f8['align']);
                _0x218984['lineWidth'] = 0x6;
                _0x1ab4f8['addBelow'](_0x218984);
                _0x31222a['push'](_0x1ab4f8);
            }
            function _0x51d34c() {
                for (var _0x4a8e9d = 0x0; _0x4a8e9d < _0x31222a['length']; _0x4a8e9d++) {
                    _0x31222a[_0x4a8e9d]['belowObjects'][0x0]['text'] = _0x31222a[_0x4a8e9d]['text'];
                }
            }
            var _0x576960 = 'menu';
            localStorage.deltaGameState = 'menu';

            var _0x310d1e = -0x1;
            var _0xef1c8d = {
                'position': [0x0, 0x0],
                'radius': _0x42a2d6 / 0x2 + 0x258 + 0x15e
            };
            var _0x3a189e = {
                'position': [0x0, 0x0],
                'radius': _0x42a2d6 / 0x2 + 0x258 + 0x15e
            };
            var _0x247dad = ![];
            var _0x5e2096 = 0x3e8;
            var _0x3e8941 = 0x3e8;
            var _0x516dbf = 0x14;
            var _0x97b68 = new _0x193f4e['rectangle'](0x0, 0x0, 0x1, 0x1, '#F00');
            _0x7b0032['add'](_0x97b68);
            var _0x4ddb93 = new _0x193f4e['rectangle'](0x0, 0x0, 0x1, 0x1, '#F00');
            _0x7b0032['add'](_0x4ddb93);
            var _0x511a7d = new _0x193f4e['rectangle'](0x0, 0x0, 0x1, 0x1, '#F00');
            _0x7b0032['add'](_0x511a7d);
            var _0x3468f7 = new _0x193f4e['rectangle'](0x0, 0x0, 0x1, 0x1, '#F00');
            _0x7b0032['add'](_0x3468f7);
            var _0x30121e = new _0x193f4e['scene']();
            var _0x2e681a = new _0x193f4e['rectangle'](0x0, 0x0, 0x1, 0x1, '#F00');
            _0x30121e['add'](_0x2e681a);
            var _0x360873 = new _0x193f4e['rectangle'](0x0, 0x0, 0x1, 0x1, '#F00');
            _0x30121e['add'](_0x360873);
            var _0x4da1ae = new _0x193f4e['rectangle'](0x0, 0x0, 0x1, 0x1, '#F00');
            _0x30121e['add'](_0x4da1ae);
            var _0x18d5b8 = new _0x193f4e['rectangle'](0x0, 0x0, 0x1, 0x1, '#F00');
            _0x30121e['add'](_0x18d5b8);
            var _0x3e7621 = new _0x193f4e['strokeRectangle'](0x0, 0x0, 0x0, 0x0, '#FFF', 0x32, 0.4);
            if (_0x5f37fb) {
                _0x3e7621['color'] = '#000';
            }
            _0x30121e['add'](_0x3e7621);
            var _0x31f4ae = document['createElement']('canvas');
            _0x31f4ae['width'] = _0x31f4ae['height'] = 0x708;
            var _0x3c5bc6 = _0x31f4ae['getContext']('2d');
            _0x3c5bc6['translate'](0x384, 0x384);
            _0x4f8769['add'](new _0x193f4e['image'](_0x31f4ae, 0x0, 0x0, 0x384, 0x384));
            var _0x5c3d7f = new _0x193f4e['circle'](0x0, 0x0, 0x32, '#FFF', 0x1);
            _0x5c3d7f['addBelow'](new _0x193f4e['circle'](0x0, 0x0, 0x78, '#FFF', 0.4));
            _0x5c3d7f['addBelow'](new _0x193f4e['circle'](0x0, 0x0, 0xc8, '#FFF', 0.2));
            _0x30121e['add'](_0x5c3d7f);
            var _0x4b0ece = [];
            var _0x23cc48 = '#00BFFF';
            for (var _0x3192cf = 0x0; _0x3192cf < 0x4; _0x3192cf++) {
                var _0x44c5a3 = new _0x193f4e['circle'](0x0, 0x0, 0x32, _0x23cc48, 0x1);
                _0x44c5a3['addBelow'](new _0x193f4e['circle'](0x0, 0x0, 0x78, _0x23cc48, 0.4));
                _0x44c5a3['addBelow'](new _0x193f4e['circle'](0x0, 0x0, 0xc8, _0x23cc48, 0.2));
                _0x30121e['add'](_0x44c5a3);
                _0x4b0ece['push'](_0x44c5a3);
            }
            var _0x5ca89f = 0x12c;
            var _0x2d55d7 = 0.45;
            function _0x19184a(_0x43f4d9) {
                return _0x43f4d9['toString']()['replace'](/\B(?=(\d{3})+(?!\d))/g, ',');
            }
            function _0x10e3d9(_0x2de6dd) {
                _0x2de6dd['width'] = 0x0;
                _0x2de6dd['height'] = 0x0;
                _0x2de6dd['opacity'] = 0x0;
            }
            function _0x2ebcc2() {
                _0x5e2096 = _0x193f4e['lerp'](_0xef1c8d['radius'], _0x3a189e['radius']);
                _0x5e2096 = Math['max'](_0x5e2096, 0x0);
                var _0x274b59 = new _0x193f4e['Vector2'](_0x193f4e['lerp'](_0xef1c8d['position'][0x0], _0x3a189e['position'][0x0]), _0x193f4e['lerp'](_0xef1c8d['position'][0x1], _0x3a189e['position'][0x1]));
                var _0x40ee81 = _0x274b59['x'] - _0x5e2096;
                var _0x5c7468 = _0x274b59['y'] - _0x5e2096;
                var _0x280652 = _0x274b59['y'] + _0x5e2096;
                var _0x7088bc = _0x274b59['x'] + _0x5e2096;
                var _0x366be3 = _0x193f4e['me']['visual']['position']['x'] - 0x780 / 0x2 - _0x5ca89f;
                var _0x40dc03 = _0x193f4e['me']['visual']['position']['y'] - 0x438 / 0x2 - _0x5ca89f;
                var _0x20b6b3 = _0x193f4e['me']['visual']['position']['y'] + 0x438 / 0x2 + _0x5ca89f;
                var _0x3143e3 = _0x193f4e['me']['visual']['position']['x'] + 0x780 / 0x2 + _0x5ca89f;
                var _0x2a3296 = 0x0;
                var _0x9cf576 = 0x0;
                if (_0x5c7468 < _0x40dc03) {
                    _0x10e3d9(_0x511a7d);
                    _0x2a3296 = _0x40dc03;
                } else {
                    _0x511a7d['position']['x'] = _0x193f4e['me']['visual']['position']['x'];
                    _0x511a7d['position']['y'] = (_0x5c7468 + _0x40dc03) / 0x2;
                    _0x511a7d['height'] = _0x5c7468 - _0x40dc03;
                    _0x511a7d['width'] = 0x780 + _0x5ca89f * 0x2;
                    _0x2a3296 = _0x5c7468;
                    _0x511a7d['opacity'] = _0x2d55d7;
                }
                if (_0x280652 > _0x20b6b3) {
                    _0x10e3d9(_0x3468f7);
                    _0x9cf576 = _0x20b6b3;
                } else {
                    _0x3468f7['position']['x'] = _0x193f4e['me']['visual']['position']['x'];
                    _0x3468f7['position']['y'] = (_0x280652 + _0x20b6b3) / 0x2;
                    _0x3468f7['height'] = _0x280652 - _0x20b6b3;
                    _0x3468f7['width'] = 0x780 + _0x5ca89f * 0x2;
                    _0x9cf576 = _0x280652;
                    _0x3468f7['opacity'] = _0x2d55d7;
                }
                if (_0x40ee81 < _0x366be3) {
                    _0x10e3d9(_0x97b68);
                } else {
                    _0x97b68['opacity'] = _0x2d55d7;
                    _0x97b68['position']['x'] = (_0x40ee81 + _0x366be3) / 0x2;
                    _0x97b68['position']['y'] = (_0x2a3296 + _0x9cf576) / 0x2;
                    _0x97b68['height'] = _0x9cf576 - _0x2a3296;
                    _0x97b68['width'] = _0x40ee81 - _0x366be3;
                }
                if (_0x7088bc > _0x3143e3) {
                    _0x10e3d9(_0x4ddb93);
                } else {
                    _0x4ddb93['opacity'] = _0x2d55d7;
                    _0x4ddb93['position']['x'] = (_0x7088bc + _0x3143e3) / 0x2;
                    _0x4ddb93['position']['y'] = (_0x2a3296 + _0x9cf576) / 0x2;
                    _0x4ddb93['height'] = _0x9cf576 - _0x2a3296;
                    _0x4ddb93['width'] = _0x3143e3 - _0x7088bc;
                }
                _0x1036a1();
            }
            function _0x1036a1() {
                _0x5e2096 = _0x193f4e['lerp'](_0xef1c8d['radius'], _0x3a189e['radius']);
                var _0x42b99 = new _0x193f4e['Vector2'](_0x193f4e['lerp'](_0xef1c8d['position'][0x0], _0x3a189e['position'][0x0]), _0x193f4e['lerp'](_0xef1c8d['position'][0x1], _0x3a189e['position'][0x1]));
                var _0x56a3bd = _0x42b99['x'] - _0x5e2096;
                var _0x517f27 = _0x42b99['y'] - _0x5e2096;
                var _0x4028a4 = _0x42b99['y'] + _0x5e2096;
                var _0x5d8b1b = _0x42b99['x'] + _0x5e2096;
                var _0x34567f = -_0x42a2d6 / 0x2;
                var _0x472fd8 = -_0x42a2d6 / 0x2;
                var _0x365bff = _0x42a2d6 / 0x2;
                var _0xd99b20 = _0x42a2d6 / 0x2;
                var _0x5a6369 = 0x0;
                var _0x409b55 = 0x0;
                if (_0x517f27 < _0x472fd8) {
                    _0x10e3d9(_0x4da1ae);
                    _0x5a6369 = _0x472fd8;
                } else {
                    _0x4da1ae['position']['x'] = 0x0;
                    _0x4da1ae['position']['y'] = (_0x517f27 + _0x472fd8) / 0x2;
                    _0x4da1ae['height'] = _0x517f27 - _0x472fd8;
                    _0x4da1ae['width'] = _0x42a2d6;
                    _0x5a6369 = _0x517f27;
                    _0x4da1ae['opacity'] = _0x2d55d7;
                }
                if (_0x4028a4 > _0x365bff) {
                    _0x10e3d9(_0x18d5b8);
                    _0x409b55 = _0x365bff;
                } else {
                    _0x18d5b8['position']['x'] = 0x0;
                    _0x18d5b8['position']['y'] = (_0x4028a4 + _0x365bff) / 0x2;
                    _0x18d5b8['height'] = _0x4028a4 - _0x365bff;
                    _0x18d5b8['width'] = _0x42a2d6;
                    _0x409b55 = _0x4028a4;
                    _0x18d5b8['opacity'] = _0x2d55d7;
                }
                if (_0x56a3bd < _0x34567f) {
                    _0x10e3d9(_0x2e681a);
                } else {
                    _0x2e681a['opacity'] = _0x2d55d7;
                    _0x2e681a['position']['x'] = (_0x56a3bd + _0x34567f) / 0x2;
                    _0x2e681a['position']['y'] = (_0x5a6369 + _0x409b55) / 0x2;
                    _0x2e681a['height'] = _0x409b55 - _0x5a6369;
                    _0x2e681a['width'] = _0x56a3bd - _0x34567f;
                }
                if (_0x5d8b1b > _0xd99b20) {
                    _0x10e3d9(_0x360873);
                } else {
                    _0x360873['opacity'] = _0x2d55d7;
                    _0x360873['position']['x'] = (_0x5d8b1b + _0xd99b20) / 0x2;
                    _0x360873['position']['y'] = (_0x5a6369 + _0x409b55) / 0x2;
                    _0x360873['height'] = _0x409b55 - _0x5a6369;
                    _0x360873['width'] = _0xd99b20 - _0x5d8b1b;
                }
                _0x3c5bc6['clearRect'](-0x384, -0x384, 0x708, 0x708);
                _0x30121e['render'](_0x3c5bc6, _0x42a2d6 / 0x708, 0x1);
                _0x5c3d7f['position'] = _0x193f4e['me']['visual']['position']['clone']();
            }
            var _0x39ee6c = new _0x193f4e['object']();
            _0x39ee6c['size'] = 0.9;
            _0x39ee6c['opacity'] = 0x0;
            var _0x4224c8 = 0x1e;
            var _0x32dd28 = 0x13;
            var _0x592a0b = 0x23;
            var _0x5ba45b = 0x0;
            var _0x1cb025 = new _0x193f4e['arc'](0x0, 0x0, _0x32dd28, '#FFF', Math['PI'] * 0.7, 0x0, 0x9);
            _0x1cb025['addBelow'](new _0x193f4e['arc'](0x0, 0x0, _0x32dd28, '#FFF', Math['PI'] * 0x2, 0x0, 0x9));
            _0x1cb025['belowObjects'][0x0]['opacity'] = 0.35;
            var _0x4a3e2f = new _0x193f4e['text']('Matchmaking...', 0x0, 0x0, '#FFF', 'Arial Black', _0x4224c8);
            _0x39ee6c['position']['y'] = 0xfa;
            _0x39ee6c['add'](_0x1cb025);
            _0x39ee6c['add'](_0x4a3e2f);
            _0x3ad5a2['add'](_0x39ee6c);
            function _0x5f08af() {
                _0x1cb025['rotation'] += _0x193f4e['clientDetails']['dt'] / 0x5;
                _0x5ba45b = _0x4a3e2f['width'] + _0x592a0b + _0x32dd28 * 0x2;
                _0x1cb025['position']['x'] = -_0x5ba45b / 0x2 + _0x32dd28;
                _0x4a3e2f['position']['x'] = _0x5ba45b / 0x2 - _0x4a3e2f['width'] / 0x2;
                _0x39ee6c['position']['y'] = Math['round'](_0x3a8b2a['topOfScreen']) + 0x73;
            }
            var _0x5f3187 = new _0x583648(_0x227276);
            var _0xc74037 = new _0x193f4e['object']();
            var _0x36735d = 0x28;
            var _0x2167f6 = 0x14;
            var _0x48b792 = 0x4;
            var _0x4bcc02 = 0.6;
            _0xc74037['add'](new _0x193f4e['rectangle'](0x0, _0x36735d, _0x48b792, _0x2167f6, '#FFF', _0x4bcc02));
            _0xc74037['add'](new _0x193f4e['rectangle'](0x0, -_0x36735d, _0x48b792, _0x2167f6, '#FFF', _0x4bcc02));
            _0xc74037['add'](new _0x193f4e['rectangle'](_0x36735d, 0x0, _0x2167f6, _0x48b792, '#FFF', _0x4bcc02));
            _0xc74037['add'](new _0x193f4e['rectangle'](-_0x36735d, 0x0, _0x2167f6, _0x48b792, '#FFF', _0x4bcc02));
            _0xc74037['add'](new _0x193f4e['rectangle'](0x0, 0x0, _0x48b792, _0x48b792, '#FFF', _0x4bcc02));
            var _0x3f5a80 = new _0x193f4e['object']();
            _0x3f5a80['add'](new _0x193f4e['rectangle'](0x0, _0x36735d, _0x48b792, _0x2167f6, '#F00', _0x4bcc02));
            _0x3f5a80['add'](new _0x193f4e['rectangle'](0x0, -_0x36735d, _0x48b792, _0x2167f6, '#F00', _0x4bcc02));
            _0x3f5a80['add'](new _0x193f4e['rectangle'](_0x36735d, 0x0, _0x2167f6, _0x48b792, '#F00', _0x4bcc02));
            _0x3f5a80['add'](new _0x193f4e['rectangle'](-_0x36735d, 0x0, _0x2167f6, _0x48b792, '#F00', _0x4bcc02));
            _0x3f5a80['rotation'] = Math['PI'] / 0x4;
            _0x3f5a80['size'] = 0.7;
            _0x3f5a80['opacity'] = 0x0;
            _0x1ed680['add'](_0xc74037);
            _0xc74037['add'](_0x3f5a80);
            var _0x1f5170 = new _0x193f4e['scene']();
            var _0x163403 = new _0x193f4e['object']();
            _0x163403['add'](new _0x193f4e['rectangle'](0x0, 0x6, 0x0, 0x19, '#A00'));
            _0x163403['add'](new _0x193f4e['rectangle'](0x0, 0x0, 0x0, 0x19, '#F00'));
            _0x163403['position']['y'] = 0x438;
            function _0x4fed42(_0x4492e0, _0x5954f7) {
                var _0x29083b = [];
                for (var _0x41b268 = 0x0; _0x41b268 < _0x4492e0['length']; _0x41b268++) {
                    if (_0x5954f7[_0x41b268] == undefined || _0x4492e0[_0x41b268] == undefined) {
                        continue;
                    }
                    if (_0x5954f7[_0x41b268]['pressed'] && !_0x4492e0[_0x41b268]) {
                        _0x29083b[_0x41b268] = !![];
                    } else {
                        _0x29083b[_0x41b268] = ![];
                    }
                }
                return _0x29083b;
            }
            var _0x39fdc9 = ![];
            var _0x2221ce;
            _0x2221ce = [];
            for (var _0x3192cf = 0x0; _0x3192cf < 0x10; _0x3192cf++) {
                _0x2221ce[_0x3192cf] = ![];
            }
            function _0x5d8d2d() {
                var _0x25d882;
                try {
                    _0x25d882 = navigator['getGamepads']();
                } catch (_0x59b7a0) {
                    return;
                }
                for (var _0x45ecdc = 0x0; _0x45ecdc < _0x25d882['length']; _0x45ecdc++) {
                    var _0x5bac27 = _0x25d882[_0x45ecdc];
                    if (_0x5bac27 == null || _0x5bac27['id']['indexOf']('Unknown') != -0x1) {
                        continue;
                    }
                    var _0x4a4472 = _0x5bac27['buttons'];
                    var _0x23625a = _0x5bac27['axes'];
                    var _0x27458c = 0.35;
                    var _0x3c78ed = ![];
                    if (_0x4a4472 == undefined || _0x4a4472['length'] < 0xb) {
                        return;
                    }
                    if (_0x23625a[0x0] < -_0x27458c) {
                        _0x3c78ed = !![];
                        if (!_0x1109c2['left']) {
                            _0x1109c2['left'] = !![];
                            _0x1109c2['changedKeys']['push']('left');
                            _0x1109c2['changed'] = !![];
                        }
                    } else if (_0x1109c2['left']) {
                        _0x1109c2['left'] = ![];
                        _0x1109c2['changedKeys']['push']('left');
                        _0x1109c2['changed'] = !![];
                    }
                    if (_0x23625a[0x0] > _0x27458c) {
                        _0x3c78ed = !![];
                        if (!_0x1109c2['right']) {
                            _0x1109c2['right'] = !![];
                            _0x1109c2['changedKeys']['push']('right');
                            _0x1109c2['changed'] = !![];
                        }
                    } else if (_0x1109c2['right']) {
                        _0x1109c2['right'] = ![];
                        _0x1109c2['changedKeys']['push']('right');
                        _0x1109c2['changed'] = !![];
                    }
                    if (_0x23625a[0x1] < -_0x27458c) {
                        _0x3c78ed = !![];
                        if (!_0x1109c2['up']) {
                            _0x1109c2['up'] = !![];
                            _0x1109c2['changedKeys']['push']('up');
                            _0x1109c2['changed'] = !![];
                        }
                    } else if (_0x1109c2['up']) {
                        _0x1109c2['up'] = ![];
                        _0x1109c2['changedKeys']['push']('up');
                        _0x1109c2['changed'] = ![];
                    }
                    if (_0x23625a[0x1] > _0x27458c) {
                        _0x3c78ed = !![];
                        if (!_0x1109c2['down']) {
                            _0x1109c2['down'] = !![];
                            _0x1109c2['changedKeys']['push']('down');
                            _0x1109c2['changed'] = !![];
                        }
                    } else if (_0x1109c2['down']) {
                        _0x1109c2['down'] = ![];
                        _0x1109c2['changedKeys']['push']('down');
                        _0x1109c2['changed'] = !![];
                    }
                    if (_0x4a4472[0xa]['pressed']) {
                        if (!_0x1109c2['shift']) {
                            _0x1109c2['shift'] = !![];
                            _0x1109c2['changedKeys']['push']('shift');
                            _0x1109c2['changed'] = !![];
                        }
                    } else if (_0x1109c2['shift']) {
                        _0x1109c2['shift'] = ![];
                        _0x1109c2['changedKeys']['push']('shift');
                        _0x1109c2['changed'] = !![];
                    }
                    if (_0x4a4472[0x6]['pressed']) {
                        if (!_0x5cab44['rightClicking']) {
                            _0x5cab44['rightClicking'] = !![];
                            _0x5cab44['rightChanged'] = !![];
                        }
                    } else if (_0x5cab44['rightClicking']) {
                        _0x5cab44['rightClicking'] = ![];
                        _0x5cab44['rightChanged'] = !![];
                        console['log']('Set Right Click False');
                    }
                    if (_0x4a4472[0x7]['pressed']) {
                        if (!_0x5cab44['clicking']) {
                            _0x5cab44['clicking'] = !![];
                            _0x5cab44['changed'] = !![];
                        }
                    } else if (_0x5cab44['clicking']) {
                        _0x5cab44['clicking'] = ![];
                        _0x5cab44['changed'] = !![];
                    }
                    if (_0x4a4472[0x0]['pressed'] && !_0x4d4973) {
                        if (!_0x1109c2['space']) {
                            _0x1109c2['space'] = !![];
                            _0x1109c2['changedKeys']['push']('space');
                            _0x1109c2['changed'] = !![];
                        }
                    } else if (_0x1109c2['space']) {
                        _0x1109c2['space'] = ![];
                        _0x1109c2['changedKeys']['push']('space');
                        _0x1109c2['changed'] = !![];
                    }
                    if (_0x2221ce !== undefined) {
                        var _0x2ae21f = _0x4fed42(_0x2221ce, _0x4a4472);
                        if (_0x2ae21f === undefined) {
                            continue;
                        }
                        if (_0x2ae21f[0x1]) {
                            _0x193f4e['currentPackets']['push']({
                                'type': 'build'
                            });
                        }
                        if (_0x2ae21f[0x3]) {
                            _0x193f4e['currentPackets']['push']({
                                'type': 'reload'
                            });
                        }
                        if (_0x2ae21f[0x2]) {
                            _0x193f4e['currentPackets']['push']({
                                'type': 'pickup'
                            });
                        }
                        if (_0x2ae21f[0x8]) {
                            _0x474aae();
                        }
                        if (_0x193f4e['spectating'] && _0x2ae21f[0x9] && _0x3ad5a2['opacity'] == 0x1) {
                            if (document['activeElement']['id'] == 'partyinput') {
                                _0x2c4843 = document['getElementById']('partyinput')['value'];
                                _0x2c4843 = _0x2c4843['toLowerCase']();
                                if (_0x2c4843['length'] < 0x6) {
                                    alert('ID Not Valid - Should be 6 characters long');
                                }
                                var _0x429ee6 = _0x2c4843['charAt'](0x0) + _0x2c4843['charAt'](0x1);
                                if (_0x3fcd9a['indexOf'](_0x429ee6) == -0x1) {
                                    alert('ID Not Valid - Please check again');
                                }
                                if (_0x4c23bf == null) {
                                    _0x513980(_0x429ee6);
                                    _0x279793['push']({
                                        'type': 'join',
                                        'id': _0x2c4843
                                    });
                                    _0x279793['push']({
                                        'type': 'changename',
                                        'name': document['getElementById']('nameBox')['value']
                                    });
                                    _0x42842a('name', _0x3a4184('nameBox')['value'], 0x16d);
                                }
                            } else {
                                _0x310d1e = -0x1;
                                _0xef1c8d = {
                                    'position': [0x0, 0x0],
                                    'radius': _0x42a2d6 / 0x2 + 0x258 + 0x15e
                                };
                                _0x3a189e = {
                                    'position': [0x0, 0x0],
                                    'radius': _0x42a2d6 / 0x2 + 0x258 + 0x15e
                                };
                                _0x3e7621['width'] = _0x42a2d6 + 0x3e8;
                                _0x3e7621['height'] = _0x3e7621['width'];
                                _0x3e7621['position']['x'] = 0x0;
                                _0x3e7621['position']['y'] = 0x0;
                                _0x9eb2fe['opacity'] = 0x0;
                                _0x2a61cb = !![];
                                if (_0x4c23bf != null) {
                                    _0x54cb3a();
                                } else {
                                    _0x24ef51();
                                }
                                if (_0x312f16 == -0x2) { }
                            }
                        }
                        if (_0x2ae21f[0x4]) {
                            _0x1ccf84 -= 0x1;
                            if (_0x1ccf84 < 0x0) {
                                _0x1ccf84 = 0x5;
                            }
                            while (_0x193f4e['me']['weaponSlots'][_0x1ccf84]['type'] == 'empty') {
                                _0x1ccf84--;
                            }
                            _0x193f4e['currentPackets']['push']({
                                'type': 'selectChange',
                                'weapon': _0x1ccf84
                            });
                        }
                        if (_0x2ae21f[0x5]) {
                            _0x1ccf84 += 0x1;
                            if (_0x1ccf84 > 0x5) {
                                _0x1ccf84 = 0x0;
                            }
                            while (_0x193f4e['me']['weaponSlots'][_0x1ccf84]['type'] == 'empty') {
                                _0x1ccf84++;
                                if (_0x1ccf84 > 0x5) {
                                    _0x1ccf84 = 0x0;
                                }
                            }
                            _0x193f4e['currentPackets']['push']({
                                'type': 'selectChange',
                                'weapon': _0x1ccf84
                            });
                        }
                        for (var _0x45ecdc = 0x0; _0x45ecdc < _0x4a4472['length']; _0x45ecdc++) {
                            _0x2221ce[_0x45ecdc] = _0x4a4472[_0x45ecdc]['pressed'];
                        }
                    }
                    var _0x3d196a = 0x3;
                    if (_0x23625a[0x3] == 0x0) { }
                    if (Math['abs'](_0x23625a[0x2]) > _0x27458c || Math['abs'](_0x23625a[_0x3d196a]) > _0x27458c) {
                        _0x5cab44['x'] = _0x23625a[0x2] * 0x12c;
                        _0x5cab44['y'] = _0x23625a[_0x3d196a] * 0x12c;
                        if (_0x5cab44['rightClicking']) {
                            var _0x254430 = Math['atan2'](_0x23625a[_0x3d196a], _0x23625a[0x2]);
                            var _0x1f8c2f = 0x96;
                            var _0x197fae = _0x35daa0(_0x23625a[0x2] * _0x23625a[0x2] + _0x23625a[_0x3d196a] * _0x23625a[_0x3d196a]);
                            _0x197fae *= 0x96;
                            _0x1f8c2f += _0x197fae;
                            _0x5cab44['x'] = Math['cos'](_0x254430) * _0x1f8c2f;
                            _0x5cab44['y'] = Math['sin'](_0x254430) * _0x1f8c2f;
                        }
                        _0x39fdc9 = !![];
                    }
                }
            }
            var _0x20ca6 = new _0x193f4e['text']('+5', 0x0, 0x28, '#FFF', 'Arial Black', 0x19, 'bold', 0x1, 'center');
            _0x20ca6['redraw']();
            _0x20ca6 = _0x20ca6['canvas'];
            var _0x4db7d5 = new _0x193f4e['text'](0x64, 0x0, 0x0, '#FFF', 'Arial', 0xa, 'bold', 0.9, 'left');
            _0x4db7d5['redraw']();
            _0x4db7d5 = _0x4db7d5['canvas'];
            var _0x4dd6b8 = new _0x193f4e['text']('/', 0x0, 0x0, '#FFF', 'Arial', 0xa, 'bold', 0.5, 'center');
            _0x4dd6b8['redraw']();
            _0x4dd6b8 = _0x4dd6b8['canvas'];
            var _0x1bf2f2 = [];
            var _0x162643 = 0xf;
            var _0x5d6343 = 0xc;
            var _0x416a1a = new _0x193f4e['object']();
            _0x416a1a['size'] = 0.8;
            var _0x582bbe = 0x28;
            var _0x59512a = 0x1a;
            var _0x2f3fb1 = 0x0;
            var _0x1256a9 = 0x40;
            var _0x545e87 = '#ffcc00';
            _0x1f5170['add'](_0x416a1a);
            function _0x5cb3d5(_0x10342c, _0x3cd98d, _0x2c6b05) {
                if (_0x2c6b05 === undefined) {
                    _0x2c6b05 = ![];
                }
                var _0x4074f0 = {};
                _0x4074f0['parent'] = new _0x193f4e['object']();
                _0x4074f0['rectangle'] = new _0x193f4e['rectangle'](0x0, 0x0, 0x1, 0x1, '#000', 0.3);
                _0x4074f0['parent']['add'](_0x4074f0['rectangle']);
                _0x4074f0['name1'] = new _0x193f4e['text'](_0x10342c, 0x0, 0x0, '#DDD', 'Arial Black', _0x59512a, '', 0x1, 'left');
                _0x4074f0['elim'] = new _0x193f4e['text']('Eliminated', 0x0, 0x0, '#F00', 'Arial Black', _0x59512a, '', 0x1, 'left');
                if (_0x2c6b05) {
                    _0x4074f0['elim']['text'] = 'Knocked';
                    _0x4074f0['elim']['fillStyle'] = _0x545e87;
                }
                _0x4074f0['name2'] = new _0x193f4e['text'](_0x3cd98d, 0x0, 0x0, '#DDD', 'Arial Black', _0x59512a, '', 0x1, 'left');
                _0x4074f0['parent']['add'](_0x4074f0['name1']);
                _0x4074f0['parent']['add'](_0x4074f0['elim']);
                _0x4074f0['parent']['add'](_0x4074f0['name2']);
                _0x4074f0['parent']['opacity'] = 0x0;
                _0x4074f0['timeLeft'] = 0x6;
                _0x1bf2f2['push'](_0x4074f0);
                _0x416a1a['add'](_0x4074f0['parent']);
                return _0x4074f0;
            }
            function _0x4660c3() {
                var _0x3e3b56 = 0x0;
                _0x2f3fb1 = 0x0;
                for (var _0x327cbc = 0x0; _0x327cbc < _0x1bf2f2['length']; _0x327cbc++) {
                    var _0x266944 = _0x1bf2f2[_0x327cbc];
                    var _0x107bd8 = _0x266944['name1']['width'] + _0x162643 + _0x266944['elim']['width'] + _0x162643 + _0x266944['name2']['width'];
                    _0x266944['rectangle']['width'] = _0x107bd8 + _0x5d6343 * 0x2;
                    _0x266944['rectangle']['height'] = _0x59512a + _0x5d6343 * 0x2;
                    _0x266944['name1']['position']['x'] = 0x0;
                    _0x266944['elim']['position']['x'] = _0x266944['name1']['width'] + _0x162643;
                    _0x266944['name2']['position']['x'] = _0x266944['elim']['position']['x'] + _0x266944['elim']['width'] + _0x162643;
                    _0x266944['rectangle']['position']['x'] = _0x107bd8 / 0x2;
                    _0x266944['parent']['position']['x'] = 0x0;
                    _0x266944['parent']['position']['y'] = _0x59512a / 0x2 + _0x327cbc * _0x1256a9;
                    _0x266944['parent']['position']['x'] += _0x582bbe;
                    _0x266944['parent']['position']['y'] += _0x582bbe;
                    _0x266944['timeLeft'] -= _0x193f4e['clientDetails']['dt'] / 0x32;
                    if (_0x266944['timeLeft'] < 0x0) {
                        _0x266944['parent']['position']['y'] += _0x2f3fb1 * _0x1256a9;
                        if (_0x2f3fb1 != 0x0) {
                            _0x266944['parent']['position']['y'] -= _0x3e3b56 * _0x1256a9;
                        }
                        _0x266944['parent']['opacity'] = _0x266944['timeLeft'] + 0x1;
                        _0x2f3fb1 += _0x266944['parent']['opacity'];
                        if (_0x266944['timeLeft'] <= -0x1) {
                            if (_0x266944['parent']['parent'] != null)
                                _0x266944['parent']['parent']['remove'](_0x266944['parent']);
                            var _0x1741c2 = _0x266944['parent'];
                            _0x1741c2['remove'](_0x266944['name1']);
                            _0x1741c2['remove'](_0x266944['elim']);
                            _0x1741c2['remove'](_0x266944['name2']);
                            _0x1741c2['remove'](_0x266944['rectangle']);
                            _0x266944['name1']['unlink']();
                            _0x266944['elim']['unlink']();
                            _0x266944['name2']['unlink']();
                            _0x1bf2f2['splice'](_0x327cbc, 0x1);
                            _0x327cbc--;
                            _0x2f3fb1 = 0x0;
                            _0x3e3b56 -= 0x1;
                        }
                    } else if (_0x266944['parent']['opacity'] < 0x1) {
                        _0x266944['parent']['opacity'] = Math['min'](0x1, _0x266944['parent']['opacity'] + _0x193f4e['clientDetails']['dt'] / 0x32);
                    }
                    if (_0x266944['timeLeft'] >= 0x0) {
                        _0x266944['parent']['position']['y'] += _0x2f3fb1 * _0x1256a9;
                        if (_0x2f3fb1 != 0x0) {
                            _0x266944['parent']['position']['y'] -= _0x3e3b56 * _0x1256a9;
                        }
                    }
                    if (_0x266944['timeLeft'] < 0x0) {
                        _0x3e3b56++;
                    }
                }
            }
            var _0x575c99 = new _0x193f4e['scene']();
            _0x575c99['opacity'] = 0x0;
            _0x575c99['add'](new _0x193f4e['rectangle'](0x0, 0x0, 0x782, 0x43a, '#000', 0.3));
            var _0x13ecc5 = new _0x193f4e['text']('You placed #100', 0x0, -0x438 / 0x4 - 0x32, '#FFF', 'Arial Black', 0x32, '', 0x1);
            _0x276dbd(_0x13ecc5);
            _0x13ecc5['belowObjects'][0x0]['lineWidth'] = 0x8;
            var _0x2977f4 = new _0x193f4e['image'](_0x3a4184('victory'), _0x13ecc5['position']['x'], _0x13ecc5['position']['y'], 0x258, 0xc8, 0x0);
            _0x2977f4['size'] = 0.9;
            _0x575c99['add'](_0x13ecc5);
            _0x575c99['add'](_0x2977f4);
            var _0x43fb14 = new _0x193f4e['text']('Eliminated', 0x0, -0x438 / 0x4 + 0x46, '#F00', 'Arial Black', 0x1e, '', 0x0, 'left');
            var _0x42f245 = new _0x193f4e['text']('Slug', 0x0, -0x438 / 0x4 + 0x46, '#FFF', 'Arial Black', 0x1e, '', 0x0, 'left');
            var _0x2a3622 = 0x1e;
            var _0x3c483d = new _0x193f4e['rectangle'](0x0, -0x438 / 0x4 + 0x46, 0x1, 0x1e + _0x2a3622, '#000', 0.3);
            _0x43fb14['opacity'] = 0x0;
            _0x42f245['opacity'] = 0x0;
            _0x3c483d['opacity'] = 0x0;
            _0x575c99['add'](_0x3c483d);
            _0x575c99['add'](_0x43fb14);
            _0x575c99['add'](_0x42f245);
            function _0xd3dadd() {
                var _0x4218ab = 0x14;
                var _0x304366 = _0x43fb14['width'] + _0x42f245['width'] + _0x4218ab;
                _0x43fb14['position']['x'] = -_0x304366 / 0x2;
                _0x42f245['position']['x'] = _0x43fb14['position']['x'] + _0x43fb14['width'] + _0x4218ab;
                _0x3c483d['width'] = _0x304366 + _0x2a3622;
            }
            var _0x2ebeb3 = new _0x193f4e['roundRectangle'](0x0, 0x438 / 0x4, 0x1f4 - 0x6, 0x46, 0x46 / 0x2, '#4169E1', 0.4);
            _0x2ebeb3['strokeStyle'] = '#5179F1';
            _0x2ebeb3['lineWidth'] = 0x6;
            var _0x42fd3d = new _0x193f4e['text']('Return to Lobby', _0x2ebeb3['position']['x'], _0x2ebeb3['position']['y'], '#FFF', _0x2c04b3, 0x1e, '');
            window['lobbyText'] = _0x42fd3d;
            var _0x487c10 = new _0x193f4e['strokeText']('Return to Lobby', 0x0, -0x2, '#5179F1', _0x2c04b3, 0x1e, '');
            _0x487c10['lineWidth'] = 0x9;
            _0x42fd3d['addBelow'](_0x487c10);
            _0x575c99['add'](_0x2ebeb3);
            _0x575c99['add'](_0x42fd3d);
            var _0xe47c57 = new _0x193f4e['object']();
            var _0x303d54 = 0xaa;
            var _0x265a57 = 0x5a;
            var _0x24d7e1 = 0x1e;
            var _0x4122cc = 0x3e;
            var _0x41925f = '#999';
            var _0x2bb096 = '#AAA';
            _0x2bb096 = '#CCC';
            var _0x481200 = new _0x193f4e['text']('Place', -_0x303d54, -_0x265a57, _0x41925f, 'Arial Black', _0x24d7e1, '', 0x1);
            _0x276dbd(_0x481200);
            _0xe47c57['add'](_0x481200);
            var _0xf390b9 = new _0x193f4e['text']('Eliminations', _0x303d54, -_0x265a57, _0x41925f, 'Arial Black', _0x24d7e1, '', 0x1);
            _0x276dbd(_0xf390b9);
            _0xe47c57['add'](_0xf390b9);
            var _0x396d33 = new _0x193f4e['text']('Damage to', -_0x303d54, _0x265a57 - 0xe, _0x41925f, 'Arial Black', 0x16, '', 0x1);
            _0x276dbd(_0x396d33);
            _0xe47c57['add'](_0x396d33);
            var _0x338e0e = new _0x193f4e['text']('Enemies', -_0x303d54, _0x265a57 + 0xe, _0x41925f, 'Arial Black', 0x16, '', 0x1);
            _0x276dbd(_0x338e0e);
            _0xe47c57['add'](_0x338e0e);
            var _0x588852 = new _0x193f4e['text']('Walls Built', _0x303d54, _0x265a57, _0x41925f, 'Arial Black', _0x24d7e1, '', 0x1);
            _0x276dbd(_0x588852);
            _0xe47c57['add'](_0x588852);
            var _0x928892 = new _0x193f4e['text']('#100', -_0x303d54, -_0x265a57 + _0x4122cc, _0x2bb096, 'Arial Black', _0x24d7e1 + 0xf, '', 0x1);
            _0x276dbd(_0x928892);
            _0xe47c57['add'](_0x928892);
            var _0x5f0d11 = new _0x193f4e['text']('0', _0x303d54, -_0x265a57 + _0x4122cc, _0x2bb096, 'Arial Black', _0x24d7e1 + 0xf, '', 0x1);
            _0x276dbd(_0x5f0d11);
            _0xe47c57['add'](_0x5f0d11);
            var _0x390a9b = new _0x193f4e['text']('0', -_0x303d54, _0x265a57 + _0x4122cc, _0x2bb096, 'Arial Black', _0x24d7e1 + 0xf, '', 0x1);
            _0x276dbd(_0x390a9b);
            _0xe47c57['add'](_0x390a9b);
            var _0x3422ba = new _0x193f4e['text']('0', _0x303d54, _0x265a57 + _0x4122cc, _0x2bb096, 'Arial Black', _0x24d7e1 + 0xf, '', 0x1);
            _0x276dbd(_0x3422ba);
            _0xe47c57['add'](_0x3422ba);
            _0xe47c57['addBelow'](new _0x193f4e['rectangle'](0x0, _0x4122cc * 0.6, 3.6 * _0x303d54, 3.8 * _0x265a57, '#000', 0.4));
            _0xe47c57['position']['y'] = -0x14;
            _0xe47c57['size'] = 0.9;
            _0x575c99['add'](_0xe47c57);
            var _0x514072 = 0x1;
            var _0x5acd79 = new _0x193f4e['object']();
            _0x5acd79['opacity'] = 0x1;
            var _0x3171ee = 0x0;
            var _0x2c4a1b = 0x14;
            var _0x55c8e6 = 0x23;
            var _0x4506cc = new _0x193f4e['text']('Eliminated', 0x0, 0x0, '#C11', 'Arial Black', _0x55c8e6, '', 0x1, 'center');
            var _0x4b4655 = new _0x193f4e['strokeText']('Eliminated', 0x0, 0x0, '#000', 'Arial Black', _0x55c8e6, '', 0x1, 'center');
            _0x4b4655['lineWidth'] = 0x5;
            _0x4506cc['addBelow'](_0x4b4655);
            var _0x490c36 = new _0x193f4e['text']('GS25', 0x0, 0x0, '#FFF', 'Arial Black', _0x55c8e6, '', 0x1, 'center');
            _0x4b4655 = new _0x193f4e['strokeText']('GS25', 0x0, 0x0, '#000', 'Arial Black', _0x55c8e6, '', 0x1, 'center');
            _0x4b4655['lineWidth'] = 0x5;
            _0x490c36['addBelow'](_0x4b4655);
            var _0x4b8682 = document['createElement']('canvas');
            var _0x4606d5 = new _0x193f4e['image'](_0x4b8682, 0x0, -0x438 / 0x4, 0x0, _0x55c8e6 + 0xf, 0x0);
            var _0x5182d8 = new _0x193f4e['rectangle'](0x0, 0x0, 0x0, 0x0, '#000');
            _0x5182d8['opacity'] = 0.3;
            _0x5acd79['addBelow'](_0x5182d8);
            function _0x3d4798() {
                var _0x48e2ed = _0x4506cc['width'] + _0x490c36['width'] + _0x2c4a1b;
                _0x4506cc['position']['x'] = -_0x48e2ed / 0x2 + _0x4506cc['width'] / 0x2;
                _0x490c36['position']['x'] = _0x48e2ed / 0x2 - _0x490c36['width'] / 0x2;
                _0x490c36['belowObjects'][0x0]['text'] = _0x490c36['text'];
                _0x4b8682['width'] = _0x48e2ed + 0x19;
                _0x4b8682['height'] = _0x55c8e6 + 0x19;
                _0x5182d8['width'] = _0x4b8682['width'];
                _0x5182d8['height'] = _0x4b8682['height'];
                var _0x428572 = _0x4b8682['getContext']('2d');
                _0x428572['globalAlpha'] = 0x1;
                _0x428572['setTransform'](0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
                _0x428572['translate'](_0x4b8682['width'] / 0x2, _0x4b8682['height'] / 0x2);
                _0x5acd79['render'](_0x428572, 0x1, 0x1);
                _0x5acd79['size'] = 0x1;
                _0x4606d5['width'] = _0x4b8682['width'];
                _0x4606d5['height'] = _0x4b8682['height'];
            }
            _0x5acd79['add'](_0x4506cc);
            _0x5acd79['add'](_0x490c36);
            var _0x20a4e4 = '#00BFFF';
            var _0x28fd19 = new _0x193f4e['object']();
            var _0xeffedc = new _0x193f4e['text']('Waiting for players...', 0x0, -0x438 / 0x4, _0x20a4e4, 'Arial Black', _0x55c8e6, '', 0x1, 'center');
            _0x276dbd(_0xeffedc);
            _0xeffedc['opacity'] = 0x0;
            _0x28fd19['add'](_0xeffedc);
            var _0x4f973 = new _0x193f4e['rectangle'](0x0, 0x0, 0x1, 0x1, '#000');
            _0x4f973['opacity'] = 0.3;
            _0x28fd19['addBelow'](_0x4f973);
            _0x1f5170['add'](_0x28fd19);
            var _0x16f07a = 0x2bc;
            var _0x16f7a1 = document['createElement']('canvas');
            _0x16f7a1['width'] = _0x16f07a;
            _0x16f7a1['height'] = 0x1;
            var _0x578342 = _0x16f7a1['getContext']('2d');
            var _0x3d5f3a = _0x3a8b2a['ctx']['createLinearGradient'](0x0, 0x0, _0x16f07a, 0x0);
            _0x3d5f3a['addColorStop'](0x0, 'rgba(255, 255, 255, 0)');
            _0x3d5f3a['addColorStop'](0.5, 'rgba(255, 255, 255, 1)');
            _0x3d5f3a['addColorStop'](0x1, 'rgba(255, 255, 255, 0)');
            _0x578342['fillStyle'] = _0x3d5f3a;
            _0x578342['fillRect'](0x0, 0x0, _0x16f7a1['width'], _0x16f7a1['height']);
            var _0x508836 = new _0x193f4e['image'](_0x16f7a1, 0x0, 0x0, _0x16f07a, 0xa, 0.25);
            var _0x529454 = new _0x193f4e['object']();
            var _0x35bfad = new _0x193f4e['text']('100', 0x1e, -0x28, '#DDD', 'Arial Black', 0x1a, '', 0x1, 'left');
            var _0x225b70 = new _0x193f4e['strokeText']('100', 0x0, 0x0, '#000', 'Arial Black', 0x1a, 'bold', 0x1, 'left');
            _0x225b70['lineWidth'] = 0x4;
            _0x35bfad['addBelow'](_0x225b70);
            _0x529454['add'](new _0x193f4e['image'](_0x3a4184('health'), 0x66, -0x28, 0x1c, 0x1c));
            _0x529454['add'](new _0x193f4e['rectangle'](0x113, -0x28, 0x12c, 0x14, '#000', 0.3));
            var _0x8c95b9 = new _0x193f4e['rectangle'](0x113, -0x28, 0x12c, 0x14, '#0C0', 0.95);
            _0x529454['add'](_0x8c95b9);
            _0x529454['add'](new _0x193f4e['strokeRectangle'](0x113, -0x28, 0x12c, 0x14, '#000', 0x2, 0x1));
            _0x529454['add'](_0x35bfad);
            var _0xfa4779 = 0x23;
            var _0x3f6e4c = new _0x193f4e['text']('0', 0x1e, -0x28 - _0xfa4779, '#DDD', 'Arial Black', 0x1a, '', 0x1, 'left');
            var _0x1c9560 = new _0x193f4e['strokeText']('100', 0x0, 0x0, '#000', 'Arial Black', 0x1a, 'bold', 0x1, 'left');
            _0x1c9560['lineWidth'] = 0x4;
            _0x3f6e4c['addBelow'](_0x1c9560);
            _0x529454['add'](new _0x193f4e['image'](_0x3a4184('shield'), 0x66, -0x28 - _0xfa4779, 0x1c, 0x1c));
            _0x529454['add'](new _0x193f4e['rectangle'](0x113, -0x28 - _0xfa4779, 0x12c, 0x14, '#000', 0.3));
            var _0x42f1a4 = new _0x193f4e['rectangle'](0x113, -0x28 - _0xfa4779, 0x12c, 0x14, _0x20a4e4, 0.95);
            _0x42f1a4['width'] = 0x0;
            _0x529454['add'](_0x42f1a4);
            _0x529454['add'](new _0x193f4e['strokeRectangle'](0x113, -0x28 - _0xfa4779, 0x12c, 0x14, '#000', 0x2, 0x1));
            _0x529454['add'](_0x3f6e4c);
            var _0x1eeaae = new _0x193f4e['text']('', 0x7d, -0x28 - _0xfa4779 * 0x2, '#FFF', 'Arial Black', 0x1a, '', 0x1, 'left');
            var _0x44d88c = new _0x193f4e['strokeText']('', 0x0, 0x0, '#000', 'Arial Black', 0x1a, 'bold', 0x1, 'left');
            _0x44d88c['lineWidth'] = 0x4;
            _0x1eeaae['addBelow'](_0x44d88c);
            _0x529454['add'](_0x1eeaae);
            var _0x11fa75 = _0x529454;
            var _0x4c9d24 = [];
            for (var _0x3192cf = 0x0; _0x3192cf < 0x3; _0x3192cf++) {
                var _0x529454 = new _0x193f4e['object']();
                _0x529454['add'](new _0x193f4e['rectangle'](0x113, -0x28, 0x12c, 0x14, '#000', 0.3));
                var _0xd9147b = new _0x193f4e['rectangle'](0x113, -0x28, 0x12c, 0x14, '#0C0', 0.95);
                _0x529454['add'](_0xd9147b);
                _0x529454['add'](new _0x193f4e['strokeRectangle'](0x113, -0x28, 0x12c, 0x14, '#000', 0x2, 0x1));
                _0x529454['health'] = _0xd9147b;
                var _0xfa4779 = 0x23;
                _0x529454['add'](new _0x193f4e['rectangle'](0x113, -0x28 - _0xfa4779, 0x12c, 0x14, '#000', 0.3));
                var _0x118a19 = new _0x193f4e['rectangle'](0x113, -0x28 - _0xfa4779, 0x12c, 0x14, _0x20a4e4, 0.95);
                _0x42f1a4['width'] = 0x0;
                _0x529454['add'](_0x118a19);
                _0x529454['add'](new _0x193f4e['strokeRectangle'](0x113, -0x28 - _0xfa4779, 0x12c, 0x14, '#000', 0x2, 0x1));
                _0x529454['shield'] = _0x118a19;
                var _0x929526 = new _0x193f4e['text']('GS25', 0x7d, -0x28 - _0xfa4779 * 0x2, '#FFF', 'Arial Black', 0x1a, '', 0x1, 'left');
                _0x529454['add'](_0x929526);
                _0x529454['nametag'] = _0x929526;
                _0x529454['position']['y'] = -_0x3192cf * 0x4d - 0x78;
                _0x529454['position']['x'] = -0x37;
                _0x529454['size'] = 0.7;
                _0x529454['opacity'] = 0x0;
                _0x4c9d24['push'](_0x529454);
                _0x11fa75['add'](_0x529454);
            }
            _0x529454 = _0x11fa75;
            var _0x18fcd5 = ![];
            var _0x7955e9 = 0x113;
            var _0x1594c6 = -0x78 - _0xfa4779;
            var _0x5e6410 = 0x20;
            var _0x548f87 = new _0x193f4e['image'](_0x3a4184('empty'), _0x7955e9, _0x1594c6, 0x28, 0x28, 0x1);
            _0x529454['add'](_0x548f87);
            var _0x4bc094 = new _0x193f4e['text']('0', _0x7955e9 - 0x1b, _0x1594c6, '#DDD', 'Arial Black', _0x5e6410, '', 0x1, 'right');
            var _0x1c05ef = new _0x193f4e['strokeText']('0', 0x2, 0x0, '#000', 'Arial Black', _0x5e6410, '', 0x1, 'right');
            _0x1c05ef['lineWidth'] = 0x4;
            _0x4bc094['addBelow'](_0x1c05ef);
            _0x529454['add'](_0x4bc094);
            var _0x13fb96 = new _0x193f4e['text']('0', _0x7955e9 + 0x1b, _0x1594c6, '#DDD', 'Arial Black', _0x5e6410, '', 0x1, 'left');
            var _0x42c2cc = new _0x193f4e['strokeText']('0', 0x0, 0x0, '#000', 'Arial Black', _0x5e6410, '', 0x1, 'left');
            _0x42c2cc['lineWidth'] = 0x4;
            _0x13fb96['addBelow'](_0x42c2cc);
            _0x529454['add'](_0x13fb96);
            function _0x2baa65() {
                _0x7955e9 = 0x113;
                _0x1594c6 = -0x78 - _0xfa4779;
                if (_0x193f4e['me']['team'] !== undefined && _0x193f4e['me']['team']['length'] > 0x0) {
                    _0x7955e9 = 0x15e;
                    _0x1594c6 = -0x6e - _0xfa4779;
                }
                _0x548f87['position']['x'] = _0x7955e9;
                _0x4bc094['position']['x'] = _0x7955e9 - 0x1b;
                _0x13fb96['position']['x'] = _0x7955e9 + 0x1b;
                _0x548f87['position']['y'] = _0x1594c6;
                _0x4bc094['position']['y'] = _0x1594c6;
                _0x13fb96['position']['y'] = _0x1594c6;
            }
            var _0x10f849 = new _0x193f4e['object']();
            var _0x2744a5 = 0xfa;
            var _0xb69fff = new _0x193f4e['image'](_0x3a4184('empty'), -0x96, 0x96, _0x2744a5, _0x2744a5);
            var _0x2554ce = new _0x193f4e['rectangle'](0x0, 0x0, _0x2744a5, _0x2744a5, '#000', 0.5);
            _0xb69fff['addBelow'](_0x2554ce);
            _0xb69fff['addBelow'](new _0x193f4e['strokeRectangle'](0x0, 0x0, _0x2744a5 + 0x2, _0x2744a5 + 0x2, '#000', 0x4, 0.5));
            _0x10f849['add'](_0xb69fff);
            var _0x53c496 = '#FFF';
            if (_0x5f37fb) {
                _0x53c496 = '#222';
            }
            var _0xb25534 = 0x20;
            var _0x9eb2fe = new _0x193f4e['object']();
            _0x9eb2fe['position'] = new _0x193f4e['Vector2'](-0x140, 0x32);
            _0x9eb2fe['add'](new _0x193f4e['image'](_0x3a4184('spectate'), 0x0, 0x0, 0x2d, 0x2d));
            var _0x223561 = new _0x193f4e['text']('0', -0x1e, 0x0, _0x53c496, 'Arial Black', _0xb25534 - 0x6);
            _0x223561['align'] = 'right';
            _0x9eb2fe['add'](_0x223561);
            _0x10f849['add'](_0x9eb2fe);
            _0x9eb2fe['opacity'] = 0x0;
            var _0x3806c4 = new _0x193f4e['image'](_0x3a4184('waitingIcon'), -_0x2744a5 / 0x2 + _0xb25534 / 0x2 - 0x96, _0x2744a5 / 0x2 + _0xb25534 / 0x2 + 0x96 + 0xa, _0xb25534, _0xb25534);
            _0x10f849['add'](_0x3806c4);
            var _0x407ffc = new _0x193f4e['text']('0:00', _0xb25534 / 0x2 + 0x5, 0x0, _0x53c496, 'Arial Black', _0xb25534 - 0x6);
            _0x407ffc['align'] = 'left';
            _0x3806c4['add'](_0x407ffc);
            var _0x8a69db = new _0x193f4e['image'](_0x3a4184('playersIcon'), -_0x2744a5 / 0x2 + _0xb25534 / 0x2 + 0x6b - 0x96, _0x2744a5 / 0x2 + _0xb25534 / 0x2 + 0x96 + 0xa, _0xb25534, _0xb25534);
            _0x10f849['add'](_0x8a69db);
            var _0x25f73a = new _0x193f4e['text']('50', _0xb25534 / 0x2 + 0x5, 0x0, _0x53c496, 'Arial Black', _0xb25534 - 0x6);
            _0x25f73a['align'] = 'left';
            _0x8a69db['add'](_0x25f73a);
            var _0x11bef4 = new _0x193f4e['text']('50', _0xb25534 / 0x2 + 0x5, 0x19, '#EEEE00', 'Arial Black', _0xb25534 - 0x6);
            _0x11bef4['align'] = 'left';
            _0x11bef4['opacity'] = 0x0;
            _0x8a69db['add'](_0x11bef4);
            var _0x3cf00e = new _0x193f4e['image'](_0x3a4184('killsIcon'), -_0x2744a5 / 0x2 + _0xb25534 / 0x2 + 0xbe - 0x96, _0x2744a5 / 0x2 + _0xb25534 / 0x2 + 0x96 + 0xa, _0xb25534, _0xb25534);
            _0x10f849['add'](_0x3cf00e);
            var _0x436a3f = new _0x193f4e['text']('0', _0xb25534 / 0x2 + 0x5, 0x0, _0x53c496, 'Arial Black', _0xb25534 - 0x6);
            _0x436a3f['align'] = 'left';
            _0x3cf00e['add'](_0x436a3f);
            var _0x35b0e1 = document['createElement']('canvas');
            var _0x2a740a = _0x35b0e1['getContext']('2d');
            _0x35b0e1['width'] = _0x35b0e1['height'] = 0x1f4;
            function _0x11283c() {
                var _0x317b37 = 0x1f4;
                var _0x5538a1 = _0x2a740a;
                _0x5538a1['setTransform'](0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
                var _0x862adc = -(_0x193f4e['me']['visual']['position']['x'] * 0x708 / _0x42a2d6 + 0x384) + _0x317b37 / 0x2;
                var _0x16c627 = -(_0x193f4e['me']['visual']['position']['y'] * 0x708 / _0x42a2d6 + 0x384) + _0x317b37 / 0x2;
                _0x862adc = Math['min'](_0x862adc, 0x0);
                _0x16c627 = Math['min'](_0x16c627, 0x0);
                _0x862adc = Math['max'](_0x862adc, -0x708 + _0x317b37);
                _0x16c627 = Math['max'](_0x16c627, -0x708 + _0x317b37);
                _0x5538a1['drawImage'](_0xa4384a, _0x862adc, _0x16c627);
                _0x5538a1['drawImage'](_0x31f4ae, _0x862adc, _0x16c627);
            }
            _0xb69fff['renderSpecific'] = function (_0x34fc26, _0x1c4365) {
                var _0x1a28cd = 0x1f4;
                _0x34fc26['drawImage'](_0xa4384a, Math['min'](Math['max'](_0x193f4e['me']['visual']['position']['x'] * 0x708 / _0x42a2d6 + 0x384 - _0x1a28cd / 0x2, 0x0), 0x708 - _0x1a28cd), Math['min'](Math['max'](_0x193f4e['me']['visual']['position']['y'] * 0x708 / _0x42a2d6 + 0x384 - _0x1a28cd / 0x2, 0x0), 0x708 - _0x1a28cd), _0x1a28cd, _0x1a28cd, -this['width'] / 0x2 / _0x1c4365, -this['height'] / 0x2 / _0x1c4365, this['width'] / _0x1c4365, this['height'] / _0x1c4365);
                _0x34fc26['drawImage'](_0x31f4ae, Math['min'](Math['max'](_0x193f4e['me']['visual']['position']['x'] * 0x708 / _0x42a2d6 + 0x384 - _0x1a28cd / 0x2, 0x0), 0x708 - _0x1a28cd), Math['min'](Math['max'](_0x193f4e['me']['visual']['position']['y'] * 0x708 / _0x42a2d6 + 0x384 - _0x1a28cd / 0x2, 0x0), 0x708 - _0x1a28cd), _0x1a28cd, _0x1a28cd, -this['width'] / 0x2 / _0x1c4365, -this['height'] / 0x2 / _0x1c4365, this['width'] / _0x1c4365, this['height'] / _0x1c4365);
            };
            _0xb69fff['renderSpecific'] = function (_0x1a428c, _0x8c4f24) {
                var _0x23208d = 0x1 / _0x8c4f24;
                try {
                    if (this['image']['tagName'] == 'IMG' && this['image']['src']['indexOf']('.png') == -0x1) {
                        throw 'no';
                    }
                    _0x11283c();
                    this['width'] = this['height'] = 0x1f4 / 0x2;
                    _0x1a428c['drawImage'](_0x35b0e1, -this['width'] * 0.5 * _0x23208d, -this['height'] * 0.5 * _0x23208d, this['width'] * _0x23208d, this['height'] * _0x23208d);
                } catch (_0x4c33d6) {
                    _0x1a428c['fillStyle'] = '#000';
                    _0x1a428c['globalAlpha'] = 0x1;
                    _0x1a428c['fillRect'](-this['width'] * 0.5 * _0x23208d, -this['height'] * 0.5 * _0x23208d, this['width'] * _0x23208d, this['height'] * _0x23208d);
                }
            };
            var _0x115cd5 = new _0x193f4e['object']();
            function _0x2b1fe6(_0x2eb259, _0x3cc3f8, _0xe3cc20) {
                var _0x81a042 = 0x78;
                var _0x53f31e = _0x81a042 - 0x12;
                var _0x552a89 = 0x32;
                if (_0x2eb259 !== undefined) {
                    _0x81a042 = _0x2eb259;
                }
                if (_0x3cc3f8 !== undefined) {
                    _0x53f31e = _0x81a042 - _0x3cc3f8;
                }
                if (window['innerWidth'] > 0x3e8) {
                    var _0xe3a552 = 0.65;
                    _0x81a042 *= _0xe3a552;
                    _0x552a89 *= _0xe3a552;
                    _0x53f31e *= _0xe3a552;
                }
                var _0x23ec1f = new _0x193f4e['object']();
                var _0x1d3c60 = new _0x193f4e['circle'](0x0, 0x0, _0x81a042, '#ffffff', 0.3);
                var _0x4cff3a = _0x193f4e['prerender'](_0x1d3c60, _0x81a042 * 0x2, _0x81a042 * 0x2, 0x0, 0x2);
                _0x1d3c60['color'] = '#ff0707';
                _0x1d3c60['opacity'] = 0.4;
                var _0x3e8d0d = _0x193f4e['prerender'](_0x1d3c60, _0x81a042 * 0x2, _0x81a042 * 0x2, 0x0, 0x2);
                _0x1d3c60 = new _0x193f4e['object']();
                _0x1d3c60['add'](_0x4cff3a);
                _0x1d3c60['add'](_0x3e8d0d);
                _0x3e8d0d['opacity'] = 0x0;
                _0x1d3c60['offbg'] = _0x4cff3a;
                _0x1d3c60['onbg'] = _0x3e8d0d;
                _0x23ec1f['add'](_0x1d3c60);
                var _0x46c2f1 = new _0x193f4e['circle'](0x0, 0x0, _0x53f31e, '#ffffff', 0.25);
                _0x46c2f1 = _0x193f4e['prerender'](_0x46c2f1, _0x53f31e * 0x2, _0x53f31e * 0x2, 0x0);
                _0x23ec1f['add'](_0x46c2f1);
                var _0x15cfe3 = new _0x193f4e['circle'](0x0, 0x0, _0x552a89, '#ffffff');
                _0x46c2f1 = _0x193f4e['prerender'](_0x46c2f1, _0x552a89 * 0x2, _0x552a89 * 0x2, 0x0);
                _0x23ec1f['add'](_0x15cfe3);
                _0x23ec1f['opacity'] = 0.5;
                if (_0xe3cc20 !== undefined) {
                    _0x23ec1f['position']['x'] = _0xe3cc20['x'];
                    _0x23ec1f['position']['y'] = _0xe3cc20['y'];
                }
                return {
                    'isActive': ![],
                    'angle': 0x0,
                    'isTriggering': ![],
                    'wasTriggering': ![],
                    'radius': _0x81a042,
                    'triggerRadius': _0x53f31e,
                    'objects': {
                        'root': _0x23ec1f,
                        'bg': _0x1d3c60,
                        'fg': _0x46c2f1,
                        'thumb': _0x15cfe3
                    },
                    'fading': !![]
                };
            }
            function _0x4533f8(_0x5d9320, _0x55d198) {
                if (_0x55d198 == null) {
                    _0x5d9320['isActive'] = ![];
                    _0x5d9320['hasMoved'] = ![];
                    _0x5d9320['isTriggering'] = ![];
                    if (!_0x5d9320['fading']) {
                        var _0x2b39ac = _0x5d9320['objects']['root'];
                        _0x4dbb25(_0x2b39ac, 'opacity', _0x2b39ac['opacity'], 0x0, 0x190, 0x0, _0x2ba128['easeOutExpo']);
                        _0x5d9320['fading'] = !![];
                    }
                    return;
                }
                var _0x5e2916 = _0x55d198['tX'] - _0x55d198['tStartX'];
                var _0xdad264 = _0x55d198['tY'] - _0x55d198['tStartY'];
                var _0x2dd4fc = _0x5d9320['angle'];
                var _0x3403c3 = _0x5e2916 * _0x5e2916 + _0xdad264 * _0xdad264;
                var _0x1b935b = _0x3403c3 > 0x4;
                if (_0x1b935b) {
                    _0x2dd4fc = Math['atan2'](_0xdad264, _0x5e2916);
                }
                if (_0x3403c3 > _0x5d9320['radius'] * _0x5d9320['radius']) {
                    _0x3403c3 = _0x5d9320['radius'] * _0x5d9320['radius'];
                    _0x5d9320['objects']['thumb']['position']['x'] = Math['cos'](_0x2dd4fc) * _0x5d9320['radius'];
                    _0x5d9320['objects']['thumb']['position']['y'] = Math['sin'](_0x2dd4fc) * _0x5d9320['radius'];
                } else {
                    _0x5d9320['objects']['thumb']['position']['x'] = _0x5e2916;
                    _0x5d9320['objects']['thumb']['position']['y'] = _0xdad264;
                }
                _0x3403c3 = Math['min'](_0x3403c3, _0x5d9320['radius'] * _0x5d9320['radius']);
                var _0x1300ef = _0x3403c3 > _0x5d9320['triggerRadius'] * _0x5d9320['triggerRadius'];
                if (_0x5d9320['fading']) {
                    var _0x2b39ac = _0x5d9320['objects']['root'];
                    _0x4dbb25(_0x2b39ac, 'opacity', _0x2b39ac['opacity'], 0x1, 0x12c, 0x0, _0x2ba128['easeOutExpo']);
                    _0x211d43(_0x5d9320['objects']['bg']['onbg'], 'opacity');
                    _0x5d9320['objects']['bg']['onbg']['opacity'] = 0x0;
                    _0x211d43(_0x5d9320['objects']['bg']['offbg'], 'opacity');
                    _0x5d9320['objects']['bg']['offbg']['opacity'] = 0x1;
                    _0x5d9320['fading'] = ![];
                }
                _0x5d9320['objects']['root']['position']['x'] = _0x55d198['tStartX'];
                _0x5d9320['objects']['root']['position']['y'] = _0x55d198['tStartY'];
                if (_0x5d9320['isTriggering'] != _0x1300ef) {
                    var _0x2b39ac = _0x5d9320['objects']['bg']['onbg'];
                    _0x4dbb25(_0x2b39ac, 'opacity', _0x2b39ac['opacity'], _0x1300ef, 0xc8, 0x0, _0x2ba128['easeOutExpo']);
                    _0x2b39ac = _0x5d9320['objects']['bg']['offbg'];
                    _0x4dbb25(_0x2b39ac, 'opacity', _0x2b39ac['opacity'], !_0x1300ef, 0xc8, 0x0, _0x2ba128['easeOutExpo']);
                }
                _0x5d9320['isActive'] = !![];
                _0x5d9320['hasMoved'] = _0x1b935b;
                _0x5d9320['angle'] = _0x2dd4fc;
                _0x5d9320['isTriggering'] = _0x1300ef;
            }
            var _0x164498 = _0x2b1fe6(0x78, 0x12, new _0x193f4e['Vector2'](-0x1f4, 0x78));
            _0x115cd5['add'](_0x164498['objects']['root']);
            var _0x3c206d = _0x2b1fe6(0x8c, 0x17, new _0x193f4e['Vector2'](0x244, 0x78));
            _0x115cd5['add'](_0x3c206d['objects']['root']);
            var _0x4576c4 = [];
            function _0x52d5e4(_0x1f6429, _0x5bd1dc, _0x1ed86b, _0x731d80, _0x55859c) {
                var _0x584223 = 'rgba(0, 0, 0, 0.3)';
                var _0x39388a = new _0x193f4e['circle'](0x0, 0x0, _0x1ed86b, _0x584223);
                if (window['innerWidth'] > 0x3e8) {
                    _0x39388a['radius'] *= 0.85;
                }
                var _0x30c0af = _0x193f4e['prerender'](_0x39388a, _0x1ed86b * 0x2, _0x1ed86b * 0x2, 0x0);
                _0x39388a['color'] = '#77F';
                _0x39388a['opacity'] = 0.65;
                var _0x47a643 = _0x193f4e['prerender'](_0x39388a, _0x1ed86b * 0x2, _0x1ed86b * 0x2, 0x0);
                _0x47a643['opacity'] = 0x0;
                _0x39388a = new _0x193f4e['object']();
                _0x39388a['add'](_0x30c0af);
                _0x39388a['add'](_0x47a643);
                _0x39388a['touchActive'] = ![];
                _0x1ed86b *= 1.5;
                _0x39388a['enabled'] = !![];
                if (_0x731d80 == undefined) {
                    var _0x5d8287 = new _0x193f4e['text'](_0x1f6429, 0x0, 0x0, '#FFF', 'Arial Black', 0x19, 'bold', 0x1, 'center');
                    if (window['innerWidth'] > 0x3e8) {
                        _0x5d8287['size'] *= 0.85;
                    }
                    _0x39388a['add'](_0x5d8287);
                } else {
                    _0x39388a['add'](new _0x193f4e['image'](_0x731d80, 0x0, 0x0, _0x55859c || 0x55, _0x55859c || 0x55, 0.93));
                    if (window['innerWidth'] > 0x3e8) {
                        _0x39388a['objects'][_0x39388a['objects']['length'] - 0x1]['size'] = 0.85;
                    }
                }
                _0x39388a['checkTouch'] = function () {
                    if (_0x39388a['visible'] && _0x39388a['enabled']) {
                        var _0x45a202 = new _0x193f4e['Vector2']();
                        for (var _0x1bb7a9 of _0x5ed3ee['touches']) {
                            var _0x5a74a6 = _0x39388a['absolutePosition'](_0x45a202);
                            var _0x602403 = _0x1bb7a9['tStartX'] - _0x5a74a6['x'];
                            var _0x2213be = _0x1bb7a9['tStartY'] - _0x5a74a6['y'];
                            var _0x227bdd = _0x602403 * _0x602403 + _0x2213be * _0x2213be;
                            var _0x15cce1 = ![];
                            for (var _0x4cd1ea = 0x0; _0x4cd1ea < _0x4576c4['length']; _0x4cd1ea++) {
                                if (_0x4576c4[_0x4cd1ea] == _0x39388a) {
                                    continue;
                                }
                                _0x5a74a6 = _0x4576c4[_0x4cd1ea]['absolutePosition'](_0x45a202);
                                _0x602403 = _0x1bb7a9['tStartX'] - _0x5a74a6['x'];
                                _0x2213be = _0x1bb7a9['tStartY'] - _0x5a74a6['y'];
                                if (_0x602403 * _0x602403 + _0x2213be * _0x2213be < _0x227bdd) {
                                    _0x15cce1 = !![];
                                    break;
                                }
                            }
                            if (_0x227bdd <= _0x1ed86b * _0x1ed86b && !_0x15cce1) {
                                if (!_0x39388a['touchActive']) {
                                    if (gameWrapper['enabled'])
                                        gameWrapper['hapticFeedback']('light');
                                    _0x5bd1dc();
                                    _0x39388a['touchActive'] = !![];
                                    if (_0x39388a['opacity'] == 0x1) {
                                        _0x47a643['opacityf'] = 0x1;
                                        _0x30c0af['opacityf'] = 0x0;
                                        _0x4dbb25(_0x47a643, 'opacity', _0x47a643['opacity'], 0x1, 0x50, 0x0, _0x2ba128['easeOutExpo']);
                                        _0x4dbb25(_0x30c0af, 'opacity', _0x30c0af['opacity'], 0x0, 0x50, 0x0, _0x2ba128['easeOutExpo']);
                                        _0x4dbb25(_0x39388a, 'size', _0x39388a['size'], 0.85, 0x50, 0x0, _0x2ba128['easeOutExpo']);
                                    } else {
                                        _0x47a643['opacityf'] = 0x0;
                                        _0x30c0af['opacityf'] = 0x1;
                                        _0x4dbb25(_0x47a643, 'opacity', _0x47a643['opacity'], 0x0, 0x190, 0x0, _0x2ba128['easeOutExpo']);
                                        _0x4dbb25(_0x30c0af, 'opacity', _0x30c0af['opacity'], 0x1, 0x190, 0x0, _0x2ba128['easeOutExpo']);
                                        _0x4dbb25(_0x39388a, 'size', _0x39388a['size'], 0x1, 0x50, 0x0, _0x2ba128['easeOutExpo']);
                                    }
                                }
                                return !![];
                            }
                        }
                    }
                    _0x39388a['touchActive'] = ![];
                    if (_0x30c0af['opacityf'] != 0x1) {
                        _0x47a643['opacityf'] = 0x0;
                        _0x30c0af['opacityf'] = 0x1;
                        _0x4dbb25(_0x47a643, 'opacity', _0x47a643['opacity'], 0x0, 0x190, 0x0, _0x2ba128['easeOutExpo']);
                        _0x4dbb25(_0x30c0af, 'opacity', _0x30c0af['opacity'], 0x1, 0x190, 0x0, _0x2ba128['easeOutExpo']);
                        _0x4dbb25(_0x39388a, 'size', _0x39388a['size'], 0x1, 0x50, 0x0, _0x2ba128['easeOutExpo']);
                    }
                    if (_0x39388a == _0xc29510) {
                        if (_0x1109c2['space']) {
                            _0x1109c2['space'] = ![];
                            _0x1109c2['changedKeys']['push']('space');
                            _0x1109c2['changed'] = !![];
                        }
                    }
                    return ![];
                };
                _0x4576c4['push'](_0x39388a);
                return _0x39388a;
            }
            var _0x431ff9 = 0x50;
            var _0x586c12 = _0x431ff9 * 2.4;
            var _0x28ff14 = new _0x193f4e['object']();
            var _0x191a7f = _0x52d5e4('R', function () {
                _0x193f4e['currentPackets']['push']({
                    'type': 'reload'
                });
            }, _0x431ff9, _0x3a4184('mobilereload'));
            var _0x338c6f = _0x52d5e4('P', function () {
                _0x193f4e['currentPackets']['push']({
                    'type': 'pickup'
                });
            }, _0x431ff9, _0x3a4184('mobilepickup'));
            var _0xc29510 = _0x52d5e4('J', function () {
                if (_0x1109c2['space']) {
                    return;
                }
                _0x1109c2['space'] = !![];
                _0x1109c2['changedKeys']['push']('space');
                _0x1109c2['changed'] = !![];
            }, _0x431ff9, _0x3a4184('mobilejump'), 0x5f);
            var _0xad8345 = 0x1a;
            var _0x24a4c0 = 0x50;
            var _0x28e628 = new _0x193f4e['rectangle'](0x0, 0x0, _0xad8345, _0x24a4c0, '#FFFFFF');
            _0x28e628['add'](new _0x193f4e['rectangle'](0x0, 0x0, _0x24a4c0, _0xad8345, '#FFFFFF'));
            _0x28e628 = _0x193f4e['prerender'](_0x28e628, 0x80, 0x80)['image'];
            var _0x25b560 = _0x52d5e4('H', function () { }, _0x431ff9 * 0.85, _0x28e628, 0x5f * 0.89);
            _0x25b560['enabled'] = ![];
            _0x25b560['opacity'] = 0x0;
            _0x25b560['position']['x'] = -_0x431ff9 * 5.7 - 0x1e;
            _0x25b560['position']['y'] += 0x3c;
            _0x191a7f['position']['x'] = _0xc29510['position']['x'] = _0x338c6f['position']['x'] = -_0x431ff9 - 0x1e;
            _0xc29510['position']['x'] -= _0x586c12 / 0x2;
            _0x338c6f['position']['x'] -= _0x586c12;
            _0xc29510['position']['y'] = -_0x431ff9 * 1.9;
            var _0x42a5a2 = -0x78;
            _0xc29510['position']['y'] += _0x42a5a2;
            _0x191a7f['position']['y'] += _0x42a5a2;
            _0x338c6f['position']['y'] += _0x42a5a2;
            _0x25b560['position']['y'] += _0x42a5a2;
            [_0x191a7f, _0x338c6f, _0xc29510, _0x25b560]['map'](_0x444ff4 => _0x28ff14['add'](_0x444ff4));
            var _0x3042a4 = new _0x193f4e['object']();
            var _0x36754c = [];
            var _0x320870 = 0x64;
            var _0x1ccf84 = 0x0;
            var _0x28c9ac = new _0x193f4e['strokeRectangle'](-0x5 * (_0x320870 + 0xa) - _0x320870, -_0x320870, _0x320870 + 0x5, _0x320870 + 0x5, '#FFF', 0x5, 0.6);
            var _0x48b917 = {
                'x': 0x0,
                'y': 0x0
            };
            var _0x5edc8f = -0x1;
            function _0x206ca0(_0x22a7be = ![], _0x1b4ea7 = ![]) {
                for (var _0x2bfdcc = _0x22a7be ? 0x0 : 0x1; _0x2bfdcc < _0x36754c['length']; _0x2bfdcc++) {
                    var _0x44ba15 = new _0x193f4e['rectangle'](_0x3042a4['position']['x'] + _0x36754c[_0x2bfdcc]['parent']['position']['x'] * _0x3042a4['size'], _0x3042a4['position']['y'] + _0x36754c[_0x2bfdcc]['parent']['position']['y'] * _0x3042a4['size'], (_0x320870 + 0xa) * _0x3042a4['size'], (_0x320870 + 0xa) * _0x3042a4['size']);
                    if (_0x5cab44['isCollidingWithRectangle'](_0x44ba15, _0x1b4ea7)) {
                        return _0x2bfdcc;
                    }
                }
                return -0x1;
            }
            function _0x5179fe() {
                for (var _0x3ba25f = 0x0; _0x3ba25f < _0x5005a6['length']; _0x3ba25f++) {
                    var _0x450bb7 = new _0x193f4e['rectangle'](_0x3042a4['position']['x'] + _0x5005a6[_0x3ba25f]['position']['x'] * _0x3042a4['size'], _0x3042a4['position']['y'] + _0x5005a6[_0x3ba25f]['position']['y'] * _0x3042a4['size'], _0x5005a6[_0x3ba25f]['width'] * _0x3042a4['size'], _0x5005a6[_0x3ba25f]['height'] * _0x3042a4['size']);
                    if (_0x5cab44['isCollidingWithRectangle'](_0x450bb7)) {
                        _0x5005a6[_0x3ba25f]['color'] = '#77F';
                        return _0x3ba25f;
                    }
                }
                return -0x1;
            }
            function _0x437fb2() {
                for (var _0x53a0ee = 0x0; _0x53a0ee < _0x254dc0['length']; _0x53a0ee++) {
                    _0x254dc0[_0x53a0ee]['color'] = '#000';
                    _0x254dc0[_0x53a0ee]['opacity'] = 0.3;
                }
                for (var _0x53a0ee = 0x0; _0x53a0ee < _0x254dc0['length']; _0x53a0ee++) {
                    var _0x24d807 = new _0x193f4e['rectangle'](_0x3042a4['position']['x'] + _0x254dc0[_0x53a0ee]['position']['x'] * _0x3042a4['size'], _0x3042a4['position']['y'] + _0x254dc0[_0x53a0ee]['position']['y'] * _0x3042a4['size'], _0x254dc0[_0x53a0ee]['width'] * _0x3042a4['size'], _0x254dc0[_0x53a0ee]['height'] * _0x3042a4['size']);
                    if (_0x5cab44['isCollidingWithRectangle'](_0x24d807)) {
                        _0x254dc0[_0x53a0ee]['color'] = '#77F';
                        return _0x53a0ee;
                    }
                }
                return -0x1;
            }
            function _0x784867() {
                _0x48b917 = {
                    'x': 0x0,
                    'y': 0x0
                };
                _0x5edc8f = -0x1;
                for (var _0x4bd6b6 = 0x0; _0x4bd6b6 < _0x36754c['length']; _0x4bd6b6++) {
                    _0x36754c[_0x4bd6b6]['position']['x'] = 0x0;
                    _0x36754c[_0x4bd6b6]['position']['y'] = 0x0;
                }
                if (!_0x4d4973) {
                    _0x36754c[_0x1ccf84]['position']['y'] = -0xa;
                    _0x28c9ac['position']['y'] = -_0x320870 - 0xa;
                }
            }
            for (var _0x3192cf = 0x5; _0x3192cf >= 0x0; _0x3192cf--) {
                var _0x893e18 = new _0x193f4e['object']();
                _0x893e18['position']['x'] = -_0x3192cf * (_0x320870 + 0xa) - _0x320870;
                _0x893e18['position']['y'] = -_0x320870;
                var _0x3c456c = new _0x193f4e['rectangle'](0x0, 0x0, _0x320870, _0x320870, '#000', 0.2);
                _0x893e18['add'](_0x3c456c);
                _0x36754c['push'](_0x3c456c);
                _0x3042a4['add'](_0x893e18);
            }
            var _0x49a7fe = new _0x193f4e['image'](_0x3a4184('switch'), 0x0, 0x0, _0x320870, _0x320870, 0x0);
            _0x3042a4['add'](_0x49a7fe);
            function _0x40021b() {
                if (_0x429f0c == -0x1) {
                    _0x49a7fe['opacity'] = 0x0;
                    return;
                }
                _0x49a7fe['opacity'] = 0.5;
                var _0x38bd1d = 0x5 - _0x429f0c;
                _0x49a7fe['position']['y'] = -_0x320870;
                _0x49a7fe['position']['x'] = -_0x38bd1d * (_0x320870 + 0xa) - _0x320870;
                _0x3042a4['remove'](_0x49a7fe);
                _0x3042a4['add'](_0x49a7fe);
            }
            var _0x2ccdcc = 0x15;
            var _0x453f12 = 0x13;
            var _0x43e503 = new _0x193f4e['text']('Press Q to Build', -0x5 * (_0x320870 + 0xa) - _0x320870 * 1.5, -_0x320870 * 2.3, '#FFF', 'Arial Black', _0x2ccdcc, 'bold', 0x1, 'left');
            var _0x484e3b = new _0x193f4e['strokeText']('Press Q to Build', 0x0, 0x0, '#000', 'Arial Black', _0x2ccdcc, 'bold', 0x1, 'left');
            _0x484e3b['lineWidth'] = 0x4;
            _0x43e503['addBelow'](_0x484e3b);
            _0x3042a4['add'](_0x43e503);
            var _0x3eec82 = new _0x193f4e['text']('Press Tab to Manage Inventory', -0x5 * (_0x320870 + 0xa) - _0x320870 * 1.5, -_0x320870 * 0x2, '#FFF', 'Arial Black', _0x2ccdcc, 'bold', 0x1, 'left');
            var _0x2e30d4 = new _0x193f4e['strokeText']('Press Tab to Manage Inventory', 0x0, 0x0, '#000', 'Arial Black', _0x2ccdcc, 'bold', 0x1, 'left');
            _0x2e30d4['lineWidth'] = 0x4;
            _0x3eec82['addBelow'](_0x2e30d4);
            _0x3042a4['add'](_0x3eec82);
            var _0x5005a6 = [];
            var _0x2391d7 = 0x50;
            var _0x1e1a0e = [];
            for (var _0x3192cf = 0x0; _0x3192cf < _0x4b5af4['length']; _0x3192cf++) {
                var _0x5af2c7 = new _0x193f4e['rectangle'](-_0x3192cf * _0x320870 * 0.9 - _0x320870 + (_0x320870 - _0x2391d7) / 0x2, -_0x320870 * 0x2 - 0x6e / 0x2 + _0x2ccdcc / 0x2, _0x2391d7, 0x6e, '#000', 0.3);
                _0x5af2c7['add'](new _0x193f4e['image'](_0x3a4184(_0x4b5af4[0x2 - _0x3192cf]), 0x0, -0x14, 0x41, 0x41, 0x1 / 0.4));
                _0x5af2c7['text'] = new _0x193f4e['text']('0', 0x0, 0x19, '#FFF', 'Arial Black', 0x19, 'bold', 0x1, 'center');
                _0x5af2c7['text']['opacity'] = 0x1 / 0.3;
                _0x5af2c7['add'](_0x5af2c7['text']);
                var _0x492b81 = new _0x193f4e['object']();
                _0x492b81['add'](_0x5af2c7);
                _0x5005a6['push'](_0x5af2c7);
                _0x3042a4['add'](_0x492b81);
                _0x1e1a0e['push'](_0x492b81);
            }
            var _0x383acd = _0x52d5e4('B', function () {
                _0x193f4e['currentPackets']['push']({
                    'type': 'build'
                });
            }, 0x32, _0x3a4184('mobilebuild'), 0x46);
            _0x383acd['position']['x'] = -0x2bc;
            _0x383acd['position']['y'] = -_0x320870 * 0x2 - 0x6e / 0x2 + _0x2ccdcc / 0x2;
            _0x3042a4['add'](_0x383acd);
            var _0x4e1f86 = _0x52d5e4('I', function () {
                _0x474aae();
            }, 0x32, _0x3a4184('mobilebackpack'), 0x46);
            _0x4e1f86['position']['x'] = -0x2bc - 0x55;
            _0x4e1f86['position']['y'] = -0x6c;
            _0x3042a4['add'](_0x4e1f86);
            var _0x254dc0 = [];
            for (var _0x3192cf = 0x0; _0x3192cf < 0x4; _0x3192cf++) {
                var _0x38917b = -_0x320870 * 3.3 - 0x6e / 0x2 + _0x2ccdcc / 0x2;
                var _0x5af2c7 = new _0x193f4e['rectangle'](-_0x3192cf * _0x320870 * 0.9 - _0x320870 + (_0x320870 - _0x2391d7) / 0x2, _0x38917b, _0x2391d7, 0x6e, '#000', 0.3);
                _0x5af2c7['add'](new _0x193f4e['image'](_0x3a4184('stack' + (0x3 - _0x3192cf)), 0x0, -0x14, 0x41, 0x41, 0x1 / 0.4));
                _0x5af2c7['text'] = new _0x193f4e['text']('0', 0x0, 0x19, '#FFF', 'Arial Black', 0x19, 'bold', 0x1, 'center');
                _0x5af2c7['text']['opacity'] = 0x1 / 0.3;
                _0x5af2c7['add'](_0x5af2c7['text']);
                _0x254dc0['push'](_0x5af2c7);
                _0x3042a4['add'](_0x5af2c7);
            }
            var _0x2b7d44 = new _0x193f4e['object']();
            _0x2b7d44['veryInitialSize'] = 0.8;
            _0x2b7d44['position']['y'] = 0x438 / 0xa;
            _0x2b7d44['opacity'] = 0x1;
            var _0x5d7880 = 0x1e0;
            var _0x1755ae = 0x78;
            var _0x4d7c3d = -0x1e;
            _0x2b7d44['weapon'] = new _0x193f4e['image'](_0x3a4184('empty'));
            _0x2b7d44['stroke'] = new _0x193f4e['strokeRectangle'](0x0, 0x0, _0x5d7880, _0x1755ae, '#000', 0x8, 0x1);
            _0x2b7d44['fill'] = new _0x193f4e['rectangle'](0x0, 0x0, _0x5d7880, _0x1755ae, '#000', 0.4);
            _0x2b7d44['weaponName'] = new _0x193f4e['text']('', -0x28 + _0x4d7c3d, -0x14, '#FFF', 'Arial Black', 0x24, 'bold', 0x1, 'left');
            _0x2b7d44['weaponNameStroke'] = new _0x193f4e['strokeText']('', -0x28 + _0x4d7c3d, -0x14, '#000', 'Arial Black', 0x24, 'bold', 0x1, 'left');
            _0x2b7d44['weaponNameStroke']['lineWidth'] = 0x7;
            _0x2b7d44['weaponNameStroke']['opacity'] = 0.6;
            _0x2b7d44['add'](_0x2b7d44['stroke']);
            _0x2b7d44['add'](_0x2b7d44['fill']);
            _0x2b7d44['weapon']['rotation'] = Math['PI'] / 0x7;
            _0x2b7d44['weapon']['size'] = 1.4;
            _0x2b7d44['largestOpacity'] = 0.7;
            _0x2b7d44['weapon']['opacity'] = 0x1 / _0x2b7d44['largestOpacity'];
            _0x2b7d44['weapon']['position']['x'] = -0x78;
            _0x2b7d44['weapon']['position']['x'] += _0x4d7c3d;
            var _0x5de09f = new _0x193f4e['strokeText']('Press E/F to pick up', -0x28 + _0x4d7c3d, 0x14, '#000', 'Arial Black', 0x14, '', 0x1, 'left');
            _0x5de09f['lineWidth'] = 0x6;
            _0x5de09f['opacity'] = 0.6;
            _0x2b7d44['add'](_0x5de09f);
            var _0x14bc2d = new _0x193f4e['text']('Press E/F to pick up', -0x28 + _0x4d7c3d, 0x14, '#FFF', 'Arial Black', 0x14, '', 0x1, 'left');
            _0x2b7d44['add'](_0x14bc2d);
            _0x2b7d44['add'](_0x2b7d44['weaponNameStroke']);
            _0x2b7d44['add'](_0x2b7d44['weaponName']);
            _0x2b7d44['add'](_0x2b7d44['weapon']);
            _0x2b7d44['add'](new _0x193f4e['strokeRectangle'](0x0, 0x0, _0x5d7880 + 0x8, _0x1755ae + 0x8, '#000', 0x2, 0x1));
            _0x2b7d44['size'] = 0x1;
            var _0x49ba09 = 0x0;
            var _0x56ecac = document['createElement']('canvas');
            var _0x2ae1f0 = new _0x193f4e['image'](_0x56ecac, 0x0, 0x0, _0x5d7880, _0x1755ae, 0x0);
            _0x2ae1f0['opacity'] = 0x0;
            _0x56ecac['width'] = _0x5d7880 * 0x2 + 0x8;
            _0x56ecac['height'] = _0x1755ae * 0x2 + 0x8;
            function _0x58397f() {
                _0x2b7d44['position']['x'] = 0x0;
                _0x2b7d44['position']['y'] = 0x0;
                _0x56ecac['width'] = _0x5d7880 + 0x8;
                _0x56ecac['height'] = _0x1755ae + 0x8;
                var _0x909f63 = _0x56ecac['getContext']('2d');
                _0x909f63['globalAlpha'] = 0x1;
                _0x909f63['setTransform'](0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
                _0x909f63['translate'](_0x5d7880 / 0x2 + 0x4, _0x1755ae / 0x2 + 0x4);
                _0x2b7d44['render'](_0x909f63, 0x1, 0x1);
                _0x2b7d44['size'] = 0x1;
                if (_0x2ae1f0['parent'] != null) {
                    _0x2ae1f0['parent']['remove'](_0x2ae1f0);
                }
                _0x2ae1f0['parent'] = null;
                _0x4d0080['add'](_0x2ae1f0);
            }
            _0x58397f();
            function _0x1e0601(_0x3b7037, _0x2d4968, _0x34ba1d) {
                var _0x4b8f71 = document['createElement']('canvas');
                var _0x3da37e = _0x4b8f71['getContext']('2d');
                var _0x161c21 = new _0x193f4e['object']();
                _0x161c21['add'](new _0x193f4e['image'](_0x3a4184('blanksmoke0'), 0x0, 0x0, _0x2d4968, _0x2d4968, 0.6));
                _0x161c21['add'](new _0x193f4e['image'](_0x3a4184(_0x3b7037), 0x0, 0x0, _0x2d4968, _0x2d4968, _0x34ba1d));
                _0x4b8f71['width'] = _0x2d4968;
                _0x4b8f71['height'] = _0x2d4968;
                _0x3da37e['setTransform'](0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
                _0x3da37e['translate'](_0x2d4968 / 0x2, _0x2d4968 / 0x2);
                _0x161c21['render'](_0x3da37e, 0x1, 0x1);
                return _0x4b8f71;
            }
            var _0x4c3718 = _0x1e0601('yellowsmoke0', 0xa0, 0.8);
            var _0xba1780 = _0x1e0601('orangesmoke0', 0x82, 0.8);
            var _0x17b697 = _0x1e0601('redsmoke0', 0x64, 0.8);
            var _0x22bb5b = _0x1e0601('blacksmoke0', 0x64, 0.2);
            var _0x58f352 = new _0x193f4e['object']();
            var _0x4c0ab0 = new _0x193f4e['arc'](0x0, 0x0, 0x21, '#FFF', Math['PI'] * 0x2, 0x0, 0x6);
            _0x58f352['add'](_0x4c0ab0);
            var _0x2203fe = new _0x193f4e['text']('0', 0x0, 0x0, '#FFF', 'Arial Black', 0x16, 'bold', 0x1, 'center');
            _0x58f352['add'](_0x2203fe);
            _0x58f352['addBelow'](new _0x193f4e['circle'](0x0, 0x0, 0x28, '#000', 0.4));
            _0x58f352['opacity'] = 0x0;
            _0x58f352['size'] = 0x1;
            _0x1f5170['add'](_0x58f352);
            window['addEventListener']('keyup', function (_0x4504af) {
                if (_0x4504af['keyCode'] == _0x1eb506('ADS')) {
                    if (_0x5cab44['rightClicking']) {
                        _0x5cab44['rightClicking'] = ![];
                        _0x5cab44['rightChanged'] = !![];
                    }
                }
                if (_0x4504af['keyCode'] == _0x1eb506('Fire')) {
                    if (_0x5cab44['clicking']) {
                        _0x5cab44['clicking'] = ![];
                        _0x5cab44['changed'] = !![];
                    }
                }
            });
            function _0x474aae() {
                if (!_0x4bf0a5) {
                    _0x4d4973 = !_0x4d4973;
                    if (_0x4d4973) {
                        document['exitPointerLock']();
                    } else if (_0x312f16 == -0x2) {
                        _0x3a8b2a['c']['requestPointerLock']();
                    }
                    _0x5cab44['clicking'] = ![];
                    _0x5cab44['changed'] = !![];
                    if (_0x193f4e['me'] !== undefined && _0x193f4e['me']['updateWeaponSlots'] !== undefined) {
                        _0x193f4e['me']['updateWeaponSlots'] = !![];
                    }
                }
                if (!_0x4d4973) {
                    _0x429f0c = -0x1;
                }
            }
            window['addEventListener']('keydown', function (_0x2d849b) {
                if (_0x2d849b['keyCode'] == 0x1b) {
                    window['parent']['postMessage']('escape', 'file://');
                }
                if (_0x2d849b['keyCode'] == 0x7b) {
                    window['parent']['postMessage']('devtools', 'file://');
                }
                if (_0x4c3a32 != -0x1) {
                    _0x2d849b['preventDefault']();
                    if (_0x375d03['indexOf'](_0x2d849b['keyCode']['toString']()) != -0x1) {
                        _0xf01486[_0x4c3a32] = _0x2d849b['keyCode'];
                        _0x40d524();
                        _0x3cb799();
                    }
                    return;
                }
                if (!_0x193f4e['spectating']) {
                    if (_0xf01486['indexOf'](_0x2d849b['keyCode']) != -0x1 || _0xf01486['indexOf'](_0x2d849b['keyCode']['toString']()) != -0x1) {
                        if (_0x3dc783) {
                            _0x2d849b['preventDefault']();
                        }
                    }
                    if (_0x2d849b['keyCode'] == _0x1eb506('Inventory')) {
                        _0x2d849b['preventDefault']();
                        _0x474aae();
                    }
                    if (_0x2d849b['keyCode'] == _0x1eb506('ADS')) {
                        if (!_0x5cab44['rightClicking']) {
                            _0x5cab44['rightClicking'] = !![];
                            _0x5cab44['rightChanged'] = !![];
                        }
                    }
                    if (_0x2d849b['keyCode'] == _0x1eb506('Fire')) {
                        if (!_0x5cab44['clicking']) {
                            _0x5cab44['clicking'] = !![];
                            _0x5cab44['changed'] = !![];
                        }
                    }
                    if (_0x2d849b['keyCode'] == _0x1eb506('Build')) {
                        _0x193f4e['currentPackets']['push']({
                            'type': 'build'
                        });
                    }
                    if (_0x2d849b['keyCode'] == _0x1eb506('Reload')) {
                        _0x193f4e['currentPackets']['push']({
                            'type': 'reload'
                        });
                    }
                    if (_0x2d849b['keyCode'] == _0x1eb506('Pickup 1') || _0x2d849b['keyCode'] == _0x1eb506('Pickup 2')) {
                        _0x193f4e['currentPackets']['push']({
                            'type': 'pickup'
                        });
                    }
                    if (_0x2d849b['keyCode'] == _0x1eb506('Map')) {
                        if (!_0x4d4973)
                            _0x4bf0a5 = !_0x4bf0a5;
                    }
                    if (_0x2d849b['keyCode'] == _0x1eb506('Ask For Ammo')) {
                        _0x193f4e['currentPackets']['push']({
                            'type': 'needammo'
                        });
                    }
                    if (_0x193f4e['me']['weaponSlots'] !== undefined) {
                        var _0x41204c = ![];
                        var _0x297dd0 = _0x2d849b['keyCode'];
                        for (var _0x256620 = 0x1; _0x256620 <= 0x6; _0x256620++) {
                            if (_0x2d849b['keyCode']['toString']() == _0x1eb506('Weapon Slot ' + _0x256620)['toString']()) {
                                _0x41204c = !![];
                                _0x297dd0 = 0x30 + _0x256620;
                                _0x256620 = 0x7;
                            }
                        }
                        if (_0x41204c && _0x297dd0 <= 0x36 && _0x297dd0 >= 0x31) {
                            if (_0x4d4973) {
                                if (_0x297dd0 > 0x31) {
                                    if (_0x429f0c != -0x1) {
                                        _0x193f4e['currentPackets']['push']({
                                            'type': 'switch',
                                            'slot1': _0x429f0c,
                                            'slot2': _0x297dd0 - 0x31
                                        });
                                        if (_0x429f0c == _0x1ccf84) {
                                            _0x1ccf84 = _0x297dd0 - 0x31;
                                        } else if (_0x297dd0 - 0x31 == _0x1ccf84) {
                                            _0x1ccf84 = _0x429f0c;
                                        }
                                        if (_0x429f0c == _0x297dd0 - 0x31 && _0x429f0c == _0x1ccf84) {
                                            for (var _0x256620 = Math['max'](_0x1ccf84 - 0x1, 0x0); _0x193f4e['me']['weaponSlots'][Math['max'](_0x256620, 0x0)]['type'] != 'empty' && _0x256620 >= 0x0; _0x256620--) { }
                                            _0x1ccf84 = Math['max'](_0x256620, 0x0);
                                            _0x193f4e['currentPackets']['push']({
                                                'type': 'selectChange',
                                                'weapon': _0x1ccf84
                                            });
                                        }
                                        _0x429f0c = -0x1;
                                    } else {
                                        _0x429f0c = _0x297dd0 - 0x31;
                                    }
                                }
                            } else if (_0x193f4e['me']['weaponSlots'][_0x297dd0 - 0x31]['type'] != 'empty' && _0x1ccf84 != _0x297dd0 - 0x31) {
                                _0x1ccf84 = _0x297dd0 - 0x31;
                                _0x193f4e['currentPackets']['push']({
                                    'type': 'selectChange',
                                    'weapon': _0x1ccf84
                                });
                            }
                        }
                    }
                } else {
                    _0x4bf0a5 = ![];
                }
            }, ![]);
            function _0x3db2c8(_0x239efd, _0x462ef2) {
                var _0x116e6e = ![];
                if (_0x239efd[0x0] == '#') {
                    _0x239efd = _0x239efd['slice'](0x1);
                    _0x116e6e = !![];
                }
                var _0x5c257b = parseInt(_0x239efd, 0x10);
                var _0x42d180 = (_0x5c257b >> 0x10) + _0x462ef2;
                if (_0x42d180 > 0xff)
                    _0x42d180 = 0xff;
                else if (_0x42d180 < 0x0)
                    _0x42d180 = 0x0;
                var _0x3f3734 = (_0x5c257b >> 0x8 & 0xff) + _0x462ef2;
                if (_0x3f3734 > 0xff)
                    _0x3f3734 = 0xff;
                else if (_0x3f3734 < 0x0)
                    _0x3f3734 = 0x0;
                var _0x1163a7 = (_0x5c257b & 0xff) + _0x462ef2;
                if (_0x1163a7 > 0xff)
                    _0x1163a7 = 0xff;
                else if (_0x1163a7 < 0x0)
                    _0x1163a7 = 0x0;
                return (_0x116e6e ? '#' : '') + (_0x1163a7 | _0x3f3734 << 0x8 | _0x42d180 << 0x10)['toString'](0x10);
            }
            function _0x769813(_0x16464c, _0x2a8ea9) {
                var _0x3bcfec = parseInt(_0x16464c['slice'](0x1), 0x10),
                    _0x495301 = Math['round'](2.55 * _0x2a8ea9),
                    _0x386735 = (_0x3bcfec >> 0x10) + _0x495301,
                    _0x15d4ba = (_0x3bcfec >> 0x8 & 0xff) + _0x495301,
                    _0x18740f = (_0x3bcfec & 0xff) + _0x495301;
                return '#' + (0x1000000 + (_0x386735 < 0xff ? _0x386735 < 0x1 ? 0x0 : _0x386735 : 0xff) * 0x10000 + (_0x15d4ba < 0xff ? _0x15d4ba < 0x1 ? 0x0 : _0x15d4ba : 0xff) * 0x100 + (_0x18740f < 0xff ? _0x18740f < 0x1 ? 0x0 : _0x18740f : 0xff))['toString'](0x10)['slice'](0x1);
            }
            _0x3042a4['size'] = 0.9;
            _0x3042a4['add'](_0x28c9ac);
            _0x1f5170['add'](_0x529454);
            _0x1f5170['add'](_0x4606d5);
            _0x1f5170['add'](_0x10f849);
            _0x1f5170['add'](_0x550b11);
            _0x1f5170['add'](_0x28ff14);
            _0x1f5170['add'](_0x3042a4);
            _0x1f5170['add'](_0x115cd5);
            var _0x4eded6 = new _0x193f4e['text']('Press Space to Pick Up', 0x0, 97.5, '#FFF', _0x2c04b3, 0x1e, '');
            _0x4eded6['addBelow'](new _0x193f4e['text']('Press Space to Pick Up', 0x0, 0x4, '#FFF', _0x2c04b3, 0x1e, ''));
            _0x4eded6['belowObjects'][0x0]['opacity'] = 0.3;
            _0x4eded6['newOpacity'] = 0x0;
            var _0x3040e2 = 0x16;
            var _0x36d398 = 0x19;
            var _0x1236c2 = _0x193f4e['prerender'](new _0x193f4e['circle'](_0x3040e2, _0x36d398, 0xa, '#B38638', 0x1), 0x14)['image'];
            var _0x5bdf8f = _0x193f4e['prerender'](new _0x193f4e['circle'](0x0, 0x0, 0xc, '#000', 0x1), 0x18)['image'];
            _0x193f4e['addType']('player', function (_0x3fbe92, _0x53c3eb) {
                _0x3fbe92['visual'] = new _0x193f4e['object']();
                _0x3fbe92['firstPacket'] = !![];
                _0x3fbe92['actualRotation'] = 0x0;
                _0x3fbe92['oldJump'] = 0x0;
                _0x3fbe92['currentJump'] = 0x0;
                _0x3fbe92['newJump'] = 0x0;
                _0x3fbe92['elims'] = 0x0;
                _0x3fbe92['spectators'] = 0x0;
                _0x3fbe92['sprite'] = new _0x193f4e['object']();
                _0x3fbe92['playerImage'] = new _0x193f4e['image'](_0x3a4184('player' + (_0x5f37fb ? _0x53c3eb['hair'] : '')), 0x0, 0x0, 0x64, 0x64);
                _0x3fbe92['sprite']['add'](_0x3fbe92['playerImage']);
                _0x3fbe92['weaponSkin'] = '';
                if (_0x53c3eb['ws'] !== undefined) {
                    _0x3fbe92['weaponSkin'] = _0x53c3eb['ws'];
                }
                _0x3fbe92['picaxeSkin'] = _0x53c3eb['picaxeSkin'];
                _0x3fbe92['hairStyle'] = 'hair' + _0x53c3eb['hair'];
                _0x3fbe92['hair'] = _0x53c3eb['hair'];
                _0x3fbe92['infected'] = -0x1;
                if (_0x53c3eb['hair'] > 0x3) {
                    _0x3fbe92['hairStyle'] = 'customhair' + (_0x53c3eb['hair'] - 0x4);
                    _0x3fbe92['playerImage']['image'] = _0x3a4184('customplayer' + (_0x53c3eb['hair'] - 0x4));
                    _0x3fbe92['playerImage']['addBelow'](new _0x193f4e['image'](_0x3a4184('backpack' + (_0x53c3eb['hair'] - 0x4)), 0x0, 0x2, 0x64, 0x64));
                }
                if (_0x53c3eb['infected'] !== undefined) {
                    if (_0x53c3eb['infected']) {
                        _0x3fbe92['hairStyle'] = 'hazmathair';
                        _0x3fbe92['playerImage']['image'] = _0x3a4184('hazmatbody');
                        _0x3fbe92['playerImage']['belowObjects'] = [];
                    } else {
                        _0x3fbe92['hairStyle'] = 'infected' + Math['floor'](Math['random']() * 0x2);
                        _0x3fbe92['playerImage']['image'] = _0x3a4184('player');
                        _0x3fbe92['playerImage']['belowObjects'] = [];
                    }
                    _0x3fbe92['infected'] = _0x53c3eb['infected'];
                }
                if (_0x53c3eb['zombie'] !== undefined) {
                    if (_0x53c3eb['zombie'] && _0x3fbe92['hairStyle'] != 'zombiehair') {
                        _0x3fbe92['hairStyle'] = 'zombiehair';
                        _0x3fbe92['playerImage']['image'] = _0x3a4184('zombiebody');
                        _0x3fbe92['playerImage']['belowObjects'] = [];
                    }
                    _0x3fbe92['infected'] = _0x53c3eb['infected'];
                }
                if (typeof _0x53c3eb['hair'] == 'string') {
                    _0x3fbe92['playerImage']['image'] = _0x3a4184(_0x53c3eb['hair'] + 'body');
                    _0x3fbe92['hairStyle'] = _0x53c3eb['hair'] + 'head';
                    _0x3fbe92['playerImage']['belowObjects'] = [];
                }
                _0x3fbe92['head'] = new _0x193f4e['image'](_0x3a4184(_0x3fbe92['hairStyle']), 0x0, 0x0, 0x78, 0x78);
                if (_0x53c3eb['knocked']) {
                    _0x3fbe92['head']['image'] = _0x3a4184('revive');
                }
                _0x3fbe92['knocked'] = ![];
                if (_0x53c3eb['knocked'] !== undefined) {
                    _0x3fbe92['knocked'] = _0x53c3eb['knocked'];
                }
                _0x3fbe92['head']['rotation'] = Math['PI'] / 0x2;
                _0x3fbe92['sprite']['add'](_0x3fbe92['head']);
                _0x3fbe92['handXOffset'] = _0x3040e2;
                _0x3fbe92['handYOffset'] = _0x36d398;
                _0x3fbe92['oldSpread'] = 0x4;
                _0x3fbe92['currentSpread'] = 0x4;
                _0x3fbe92['spread'] = 0x4;
                _0x3fbe92['hands'] = new _0x193f4e['object']();
                _0x3fbe92['hand1'] = new _0x193f4e['image'](_0x1236c2, _0x3fbe92['handXOffset'], _0x3fbe92['handYOffset'], 0x14, 0x14);
                _0x3fbe92['hand1']['addBelow'](new _0x193f4e['image'](_0x5bdf8f, 0x0, 0x0, 0x18, 0x18));
                _0x3fbe92['hands']['add'](_0x3fbe92['hand1']);
                _0x3fbe92['hand2'] = new _0x193f4e['image'](_0x1236c2, _0x3fbe92['handXOffset'] - 0x5, -_0x3fbe92['handYOffset'], 0x14, 0x14);
                _0x3fbe92['hand2']['addBelow'](new _0x193f4e['image'](_0x5bdf8f, 0x0, 0x0, 0x18, 0x18));
                _0x3fbe92['arm'] = new _0x193f4e['object']();
                _0x3fbe92['arm']['add'](new _0x193f4e['rectangle'](0x0, -0xf, 0xf, 0x1e, '#000'));
                _0x3fbe92['arm']['add'](new _0x193f4e['rectangle'](0x0, -0xf, 0xb, 0x1e, '#836628'));
                _0x3fbe92['arm']['rotation'] = 2.555 + Math['PI'] / 0x2;
                _0x3fbe92['hand2']['addBelow'](_0x3fbe92['arm']);
                _0x3fbe92['arm2'] = new _0x193f4e['object']();
                _0x3fbe92['arm2']['add'](new _0x193f4e['rectangle'](0x2, 0xf, 0xf, 0x1e, '#000'));
                _0x3fbe92['arm2']['add'](new _0x193f4e['rectangle'](0x2, 0xf, 0xb, 0x1e, '#836628'));
                _0x3fbe92['arm2']['rotation'] = 0.09 + Math['PI'] / 0x2;
                _0x3fbe92['hand1']['addBelow'](_0x3fbe92['arm2']);
                _0x3fbe92['handOffset'] = 0x0;
                _0x3fbe92['handIncreasing'] = ![];
                _0x3fbe92['handDecreasing'] = ![];
                _0x3fbe92['weapon'] = new _0x193f4e['image'](_0x3a4184(_0x3fbe92['picaxeSkin']), 0x18, 0xa, 0x6e, 0x6e);
                _0x3fbe92['flash'] = new _0x193f4e['image'](_0x3a4184('flash1'), -0x6e / 0x2 - 0x7, 0x0, 0x28, 0x28);
                _0x3fbe92['flash']['rotation'] = -Math['PI'] / 0x2;
                _0x3fbe92['flash']['opacity'] = 0x0;
                _0x3fbe92['weapon']['addBelow'](_0x3fbe92['flash']);
                _0x3fbe92['weapon']['rotation'] = Math['PI'] / 0x2 + 0.01;
                _0x3fbe92['hands']['add'](_0x3fbe92['weapon']);
                _0x3fbe92['hands']['add'](_0x3fbe92['hand2']);
                _0x3fbe92['sprite']['addBelow'](_0x3fbe92['hands']);
                var _0x50345a = _0x3fbe92['handYOffset'] - 0xa;
                _0x3fbe92['foot1'] = new _0x193f4e['circle'](0x0, _0x50345a, 0xf, '#000', 0x1);
                _0x3fbe92['foot2'] = new _0x193f4e['circle'](0x0, -_0x50345a, 0xf, '#000', 0x1);
                _0x3fbe92['foot1']['add'](new _0x193f4e['circle'](0x0, 0x0, 0xd, '#8b4513', 0.5));
                _0x3fbe92['foot2']['add'](new _0x193f4e['circle'](0x0, 0x0, 0xd, '#8b4513', 0.5));
                _0x3fbe92['feet'] = new _0x193f4e['object']();
                _0x3fbe92['feet']['addBelow'](_0x3fbe92['foot1']);
                _0x3fbe92['feet']['addBelow'](_0x3fbe92['foot2']);
                _0x3fbe92['feet']['rotation'] = 0x0;
                _0x3fbe92['sprite']['addBelow'](_0x3fbe92['feet']);
                _0x3fbe92['shadow'] = new _0x193f4e['circle'](0x0, 0x0, 0x2a, '#000', 0.1);
                _0x3fbe92['sprite']['addBelow'](_0x3fbe92['shadow']);
                _0x3fbe92['rarecolor'] = new _0x193f4e['image'](_0x3a4184('beachballshadow'), 0x0, 0x0, 0x43, 0x43, 0.35);
                _0x3fbe92['visual']['add'](_0x3fbe92['sprite']);
                _0x3fbe92['ui'] = new _0x193f4e['object']();
                _0x3fbe92['visual']['addBelow'](_0x3fbe92['ui']);
                _0x3fbe92['health'] = _0x53c3eb['health'];
                _0x3fbe92['shield'] = _0x53c3eb['shield'];
                _0x3fbe92['selectedWeapon'] = _0x53c3eb['selectedWeapon'];
                _0x3fbe92['healthbar'] = new _0x193f4e['rectangle'](0x0, 0x32, _0x3fbe92['health'], 0xe, '#0D0');
                _0x3fbe92['healthbar']['width'] = 0x0;
                _0x3fbe92['underHealthbar'] = new _0x193f4e['rectangle'](0x0, 0x4, _0x3fbe92['health'], 0xe, '#0A0');
                _0x3fbe92['healthbar']['addBelow'](_0x3fbe92['underHealthbar']);
                _0x3fbe92['shieldbar'] = new _0x193f4e['rectangle'](0x0, 0x2b + 0x7 / 0x2, _0x3fbe92['shield'], 0x7, '#48F');
                _0x3fbe92['shieldbar']['width'] = 0x0;
                _0x3fbe92['hasGroundItem'] = ![];
                _0x3fbe92['name'] = _0x53c3eb['name'];
                var _0x442c49 = '#CCC';
                _0x3fbe92['nametag'] = new _0x193f4e['text'](_0x3fbe92['name'], 0x0, -0x41, _0x442c49, _0x2c04b3, 0x19, '');
                _0x3fbe92['nametagstroke'] = new _0x193f4e['strokeText'](_0x3fbe92['name'], 0x0, 0x0, '#000', _0x2c04b3, 0x19, '');
                _0x3fbe92['nametagstroke']['lineWidth'] = 0x4;
                _0x3fbe92['nametag']['addBelow'](_0x3fbe92['nametagstroke']);
                _0x3fbe92['nametag']['opacity'] = 0x0;
                _0x3fbe92['ui']['add'](_0x3fbe92['nametag']);
                _0x3fbe92['speech'] = new _0x193f4e['object']();
                _0x3fbe92['speech']['position'] = new _0x193f4e['Vector2'](0x0, -0x64);
                var _0x3943b2 = 0x50;
                var _0x1c9809 = 0x3c;
                var _0x37c5d1 = 0x14;
                var _0x582303 = [new _0x193f4e['Vector2'](-_0x3943b2 / 0x2, _0x1c9809 / 0x2), new _0x193f4e['Vector2'](-_0x3943b2 / 0x2, -_0x1c9809 / 0x2), new _0x193f4e['Vector2'](_0x3943b2 / 0x2, -_0x1c9809 / 0x2), new _0x193f4e['Vector2'](_0x3943b2 / 0x2, _0x1c9809 / 0x2), new _0x193f4e['Vector2'](_0x37c5d1 / 0x2, _0x1c9809 / 0x2), new _0x193f4e['Vector2'](0x0, _0x1c9809 / 0x2 + Math['sin'](Math['PI'] / 0x3) * _0x37c5d1), new _0x193f4e['Vector2'](-_0x37c5d1 / 0x2, _0x1c9809 / 0x2)];
                _0x3fbe92['speechPolygon'] = new _0x193f4e['polygon'](0x0, 0x0, _0x582303, '#FFF');
                _0x3fbe92['speechPolygon']['shouldStroke'] = !![];
                _0x3fbe92['speechPolygon']['lineWidth'] = 0x6;
                _0x3fbe92['strokeColor'] = '#000';
                _0x3fbe92['speechAmmo'] = new _0x193f4e['image'](_0x3a4184('stack1'), 0x0, 0x0, 0x37, 0x37);
                _0x3fbe92['speechAmmo']['position'] = _0x3fbe92['speechPolygon']['position'];
                _0x3fbe92['speechPolygon']['opacity'] = 0.8;
                _0x3fbe92['speech']['add'](_0x3fbe92['speechPolygon']);
                _0x3fbe92['speech']['add'](_0x3fbe92['speechAmmo']);
                _0x3fbe92['ui']['add'](_0x3fbe92['speech']);
                _0x3fbe92['speech']['opacity'] = 0x0;
                _0x3fbe92['speechTimer'] = 0x0;
                _0x3fbe92['wall'] = new _0x193f4e['image'](_0x3a4184('wall'), 0x78, 0x0, 0x35, 0x9);
                _0x3fbe92['wall']['rotation'] = Math['PI'] / 0x2;
                _0x3fbe92['wall']['size'] = 0x5;
                _0x3fbe92['wall']['opacity'] = 0x0;
                _0x3fbe92['wAmmo'] = _0x53c3eb['wAmmo'];
                _0x3fbe92['ammo'] = _0x53c3eb['ammo'];
                _0x3fbe92['house'] = _0x53c3eb['house'];
                _0x3fbe92['wallTime'] = 0x0;
                _0x3fbe92['visual']['add'](_0x3fbe92['wall']);
                _0x3fbe92['staminaVal'] = 0x64;
                _0x3fbe92['stamina'] = new _0x193f4e['arc'](-0x37, -0x14, 0xc, '#FF0', Math['PI'] * 0x2, 0x0, 0x8);
                _0x3fbe92['stamina']['addBelow'](new _0x193f4e['arc'](0x0, 0x0, 0xc, '#000', Math['PI'] * 0x2, 0x0, 0x8));
                _0x3fbe92['stamina']['belowObjects'][0x0]['opacity'] = 0.3;
                _0x3fbe92['stamina']['opacity'] = 0x0;
                _0x3fbe92['timeUntilSound'] = 0x1;
                _0x3fbe92['inCar'] = ![];
                _0x3fbe92['resetOldJump'] = ![];
                _0x3fbe92['weaponSlots'] = _0x53c3eb['weaponSlots'];
                _0x3fbe92['updateWeaponSlots'] = !![];
                _0x3fbe92['dollas'] = [];
                _0x3fbe92['currentWeaponPosition'] = new _0x193f4e['Vector2'](0x0, 0x0);
                _0x3fbe92['newWeaponPosition'] = new _0x193f4e['Vector2'](0x0, 0x0);
                _0x3fbe92['steadying'] = _0x53c3eb['steadying'];
                _0x3fbe92['unsetSteadying'] = ![];
                _0x3fbe92['finishedSteadying'] = !![];
                _0x3fbe92['spawnTrail'] = 0x0;
                _0x3fbe92['extraRotationTicks'] = 0x0;
                _0x3fbe92['ui']['add'](_0x3fbe92['stamina']);
                _0x3fbe92['switchOpacity'] = 0.42;
                _0x3fbe92['gun'] = new _0x193f4e['image'](document['getElementById']('empty'), 0x32, 0x14, 0x1e, 0x3c);
                _0x3fbe92['gun']['rotation'] = Math['PI'] / 0x2;
                _0x3fbe92['gun']['opacity'] = 0x0;
                _0x3fbe92['dead'] = ![];
                _0x3fbe92['damages'] = [];
                _0x3fbe92['textRotate'] = 0x0;
                _0x3fbe92['reloadTime'] = 0x0;
                _0x3fbe92['oldReloadTime'] = 0x0;
                _0x3fbe92['newReloadTime'] = 0x0;
                _0x3fbe92['fullReload'] = _0x53c3eb['frt'];
                _0x3fbe92['healRotations'] = 0x5;
                _0x3fbe92['resetSelectedWeapon'] = ![];
                _0x3fbe92['sprinting'] = _0x53c3eb['sprinting'];
                _0x3fbe92['jumpTicks'] = 0x10;
                _0x3fbe92['building'] = _0x53c3eb['building'];
                _0x3fbe92['canBuild'] = _0x53c3eb['canBuild'];
                _0x3fbe92['material'] = _0x4b5af4[_0x53c3eb['mat']];
                _0x3fbe92['mat'] = _0x53c3eb['mat'];
                _0x3fbe92['materials'] = _0x53c3eb['mats'];
                _0x3fbe92['oldMats'] = [_0x53c3eb['mats'][0x0], _0x53c3eb['mats'][0x1], _0x53c3eb['mats'][0x2]];
                _0x3fbe92['team'] = [];
                _0x3fbe92['inVehicle'] = _0x53c3eb['v'];
                _0x3fbe92['lastClose'] = -0x1;
                _0x3fbe92['lastCloseR'] = -0x1;
                _0x3fbe92['healing'] = ![];
                _0x3fbe92['healSin'] = 0x0;
                _0x3fbe92['damageIndicator'] = new _0x193f4e['object']();
                _0x3fbe92['damageIcon'] = new _0x193f4e['image'](_0x3a4184('redarrow'), 0x0, 0x50, 0x64, 0x64);
                _0x3fbe92['damageIcon']['rotation'] = Math['PI'];
                _0x3fbe92['damageIndicator']['add'](_0x3fbe92['damageIcon']);
                _0x3fbe92['damageIndicator']['opacity'] = 0x0;
                _0x3fbe92['ui']['add'](_0x3fbe92['damageIndicator']);
                _0x3fbe92['sprite']['objects'][0x0]['rotation'] = Math['sin'](_0x3fbe92['extraRotationTicks']) / 0x10 + Math['PI'] / 0x2 - _0x3fbe92['handOffset'] / 0x5;
                _0x227276['add'](_0x3fbe92['visual']);
                if (_0x3fbe92['canBuild']) {
                    _0x3fbe92['buildingPreview'] = new _0x193f4e['image'](_0x3a4184('blue' + _0x3fbe92['material']), 0x0, 0x0, _0x5b0d5d * _0x7e6865 / 0x2, _0x5b0d5d);
                } else {
                    _0x3fbe92['buildingPreview'] = new _0x193f4e['image'](_0x3a4184('red' + _0x3fbe92['material']), 0x0, 0x0, _0x5b0d5d * _0x7e6865 / 0x2, _0x5b0d5d);
                }
                _0x3fbe92['buildingPreview']['opacity'] = 0x0;
                _0x227276['add'](_0x3fbe92['buildingPreview']);
                if (_0x3fbe92['steadying']) {
                    _0x3fbe92['hands']['rotation'] = Math['PI'] / 0x2 - 0.23;
                    _0x3fbe92['hands']['position']['x'] = 0xf;
                    _0x3fbe92['hands']['position']['y'] = -0xc;
                    var _0x3d7122 = 0x0;
                    _0x3fbe92['sprite']['objects'][0x0]['rotation'] = _0x3d7122 / 0x10 + Math['PI'] / 0x2 - _0x3fbe92['handOffset'] / 0x5 + Math['PI'] / 0x3 - 0.15;
                }
                if (_0x3fbe92['isPreview'] != undefined) {
                    var _0x3d7122 = -0.6;
                    if (_0x53c3eb['footSin'] !== undefined) {
                        _0x3d7122 = _0x53c3eb['footSin'];
                    }
                    _0x3fbe92['foot1']['position']['x'] = -_0x3d7122 * 0xf + 0x2;
                    _0x3fbe92['foot2']['position']['x'] = _0x3d7122 * 0xf + 0x2;
                    if (_0x3fbe92['steadying'] && _0x3fbe92['flare'] !== undefined && _0x3fbe92['flare'] == !![]) {
                        _0x3fbe92['flash']['opacity'] = 0.4;
                        _0x3fbe92['flash']['image'] = _0x3a4184('flash2');
                    }
                }
            }, function (_0xcbe8d0) {
                if (_0xcbe8d0 == _0x193f4e['me']) {
                    if (_0x508836['parent'] != _0xcbe8d0['ui']) {
                        if (_0x508836['parent'] != null) {
                            _0x508836['parent']['remove'](_0x508836);
                        }
                        _0xcbe8d0['ui']['add'](_0x508836);
                    }
                    for (var _0x44dcc6 = 0x0; _0x44dcc6 < _0x13da85['length']; _0x44dcc6++) {
                        _0x13da85[_0x44dcc6]['under'] = ![];
                    }
                    if (_0xcbe8d0['house'] >= 0x0) {
                        _0x13da85[_0xcbe8d0['house']]['under'] = !![];
                    }
                    for (var _0x44dcc6 = 0x0; _0x44dcc6 < _0x4c9d24['length']; _0x44dcc6++) {
                        _0x4c9d24[_0x44dcc6]['opacity'] = 0x0;
                    }
                    for (var _0x44dcc6 = 0x0; _0x44dcc6 < _0xcbe8d0['team']['length'] && _0x44dcc6 < _0x4c9d24['length']; _0x44dcc6++) {
                        if (_0xcbe8d0['team'][_0x44dcc6]['nametag'] === undefined) {
                            continue;
                        }
                        _0xcbe8d0['team'][_0x44dcc6]['nametag']['opacity'] = 0x1;
                        _0x4c9d24[_0x44dcc6]['opacity'] = 0x1;
                        _0x4c9d24[_0x44dcc6]['health']['width'] = _0xcbe8d0['team'][_0x44dcc6]['health'] * 0x3;
                        _0x4c9d24[_0x44dcc6]['shield']['width'] = _0xcbe8d0['team'][_0x44dcc6]['shield'] * 0x3;
                        if (_0xcbe8d0['team'][_0x44dcc6]['knocked']) {
                            _0x4c9d24[_0x44dcc6]['health']['color'] = '#C00';
                            _0x4c9d24[_0x44dcc6]['health']['width'] /= 0x2;
                        } else {
                            _0x4c9d24[_0x44dcc6]['health']['color'] = '#0C0';
                        }
                        _0x4c9d24[_0x44dcc6]['nametag']['text'] = _0xcbe8d0['team'][_0x44dcc6]['name'];
                        if (_0xcbe8d0['team'][_0x44dcc6]['name'] == '') {
                            _0xcbe8d0['team'][_0x44dcc6]['nametag']['text'] = 'teammate';
                            _0xcbe8d0['team'][_0x44dcc6]['nametagstroke']['text'] = 'teammate';
                            _0xcbe8d0['team'][_0x44dcc6]['nametag']['opacity'] = 0.3;
                        }
                        _0x4c9d24[_0x44dcc6]['health']['position']['x'] = 0x7d + _0x4c9d24[_0x44dcc6]['health']['width'] / 0x2;
                        _0x4c9d24[_0x44dcc6]['shield']['position']['x'] = 0x7d + _0x4c9d24[_0x44dcc6]['shield']['width'] / 0x2;
                    }
                    for (var _0x44dcc6 = 0x0; _0x44dcc6 < _0x4b0ece['length']; _0x44dcc6++) {
                        _0x4b0ece[_0x44dcc6]['opacity'] = 0x0;
                    }
                    for (var _0x44dcc6 = 0x0; _0x44dcc6 < _0xcbe8d0['team']['length'] && _0x44dcc6 < _0x4b0ece['length']; _0x44dcc6++) {
                        _0x4b0ece[_0x44dcc6]['opacity'] = 0x1;
                        _0x4b0ece[_0x44dcc6]['position']['x'] = _0xcbe8d0['team'][_0x44dcc6]['visual']['position']['x'];
                        _0x4b0ece[_0x44dcc6]['position']['y'] = _0xcbe8d0['team'][_0x44dcc6]['visual']['position']['y'];
                    }
                    _0x3f5a80['opacity'] -= _0x193f4e['clientDetails']['dt'] / 0x28;
                    _0x3f5a80['opacity'] = Math['max'](_0x3f5a80['opacity'], 0x0);
                    if (_0xcbe8d0['hasGroundItem']) {
                        _0x338c6f['opacity'] = 0x1;
                        _0x2ae1f0['opacity'] = Math['min'](_0x2ae1f0['opacity'] + _0x193f4e['clientDetails']['dt'] / 0x14, 0x1);
                        _0x2b7d44['initialSize'] = _0x2b7d44['veryInitialSize'];
                    } else {
                        _0x338c6f['opacity'] = 0.2;
                        _0x2ae1f0['opacity'] = Math['max'](_0x2ae1f0['opacity'] - _0x193f4e['clientDetails']['dt'] / 0x14, 0x0);
                        _0x2b7d44['initialSize'] += _0x193f4e['clientDetails']['dt'] / 0x28;
                    }
                    _0x49ba09 += _0x193f4e['clientDetails']['dt'] / 0x1e;
                    _0x2ae1f0['size'] = _0x2b7d44['initialSize'] + Math['sin'](_0x49ba09) / 0x1e;
                    _0x2ae1f0['position']['x'] = _0xcbe8d0['visual']['position']['x'];
                    _0x2ae1f0['position']['y'] = _0xcbe8d0['visual']['position']['y'] + 0x438 / 0x7;
                    _0xcbe8d0['textRotate'] += 0.1 * _0x193f4e['clientDetails']['dt'];
                    if (_0xcbe8d0['textRotate'] > Math['PI'] * 0x2) {
                        _0xcbe8d0['textRotate'] -= Math['PI'] * 0x2;
                    }
                    _0x4eded6['rotation'] = Math['sin'](_0xcbe8d0['textRotate']) / 0x8;
                    _0x4eded6['opacity'] += (_0x4eded6['newOpacity'] - _0x4eded6['opacity']) * 0.1 * _0x193f4e['clientDetails']['dt'];
                    _0xcbe8d0['currentSpread'] = _0x193f4e['lerp'](_0xcbe8d0['oldSpread'], _0xcbe8d0['spread']);
                    var _0x4fa639 = 0xa;
                    _0xc74037['objects'][0x0]['position']['y'] = _0xcbe8d0['currentSpread'] * _0x4fa639;
                    _0xc74037['objects'][0x1]['position']['y'] = -_0xcbe8d0['currentSpread'] * _0x4fa639;
                    _0xc74037['objects'][0x2]['position']['x'] = _0xcbe8d0['currentSpread'] * _0x4fa639;
                    _0xc74037['objects'][0x3]['position']['x'] = -_0xcbe8d0['currentSpread'] * _0x4fa639;
                    for (var _0x44dcc6 = 0x0; _0x44dcc6 < _0x5005a6['length']; _0x44dcc6++) {
                        _0x5005a6[_0x44dcc6]['color'] = '#000';
                    }
                    if (_0xcbe8d0['building'])
                        _0x5005a6[0x2 - _0xcbe8d0['mat']]['color'] = '#77F';
                    for (var _0x44dcc6 = 0x0; _0x44dcc6 < _0xcbe8d0['materials']['length']; _0x44dcc6++) {
                        _0xcbe8d0['oldMats'][_0x44dcc6] += (_0xcbe8d0['materials'][_0x44dcc6] - _0xcbe8d0['oldMats'][_0x44dcc6]) * 0.07;
                        _0x5005a6[0x2 - _0x44dcc6]['text']['text'] = Math['round'](_0xcbe8d0['oldMats'][_0x44dcc6])['toString']();
                    }
                }
                _0xcbe8d0['reloadTime'] = _0x193f4e['lerp'](_0xcbe8d0['oldReloadTime'], _0xcbe8d0['newReloadTime']);
                if (_0xcbe8d0['done']) {
                    _0xcbe8d0['ticksAsleep'] = 0x0;
                    _0xcbe8d0['visual']['opacity'] -= 0.02 * _0x193f4e['clientDetails']['dt'];
                    if (_0xcbe8d0['visual']['opacity'] <= 0x0) {
                        for (var _0x44dcc6 = 0x0; _0x44dcc6 < _0xcbe8d0['damages']['length']; _0x44dcc6++) {
                            if (_0xcbe8d0['damages'][_0x44dcc6]['parent'] != null) {
                                _0xcbe8d0['damages'][_0x44dcc6]['parent']['remove'](_0xcbe8d0['damages'][_0x44dcc6]);
                            }
                        }
                        for (var _0x44dcc6 = 0x0; _0x44dcc6 < _0x193f4e['objects']['length']; _0x44dcc6++) {
                            var _0x2ea30b = _0x193f4e['objects'][_0x44dcc6];
                            if (_0x2ea30b['id'] == _0xcbe8d0['id']) {
                                if (_0x2ea30b['visual']['parent'] != null)
                                    _0x2ea30b['visual']['parent']['remove'](_0x2ea30b['visual']);
                                _0x193f4e['objects']['splice'](_0x44dcc6, 0x1);
                            }
                        }
                        if (_0xcbe8d0['oldPlayerCanvas'] !== undefined && _0xcbe8d0['oldPlayerCanvas'] != null) {
                            _0x1b0d09['push'](_0xcbe8d0['oldPlayerCanvas']);
                            _0xcbe8d0['oldPlayerCanvas']['width'] = 0x0;
                            _0xcbe8d0['oldPlayerCanvas']['height'] = 0x0;
                            _0xcbe8d0['oldPlayerCanvas'] = null;
                        }
                        _0xcbe8d0['nametag']['unlink']();
                        _0xcbe8d0['nametagstroke']['unlink']();
                    }
                }
                _0xcbe8d0['damageIndicator']['opacity'] -= _0x193f4e['clientDetails']['dt'] / 0x46;
                _0xcbe8d0['damageIndicator']['opacity'] = Math['max'](_0xcbe8d0['damageIndicator']['opacity'], 0x0);
                var _0x57cdcd = _0x3f3ac9(_0xcbe8d0['actualNew']['position'], _0xcbe8d0['actualOld']['position']);
                _0xcbe8d0['spawnTrail'] = Math['min'](_0xcbe8d0['spawnTrail'] + _0x193f4e['clientDetails']['dt'], 0x64);
                var _0x44ea3a = 0x2;
                if (_0x1db9a8 == 0x1) {
                    _0x44ea3a = 0x3;
                }
                if (_0x57cdcd > 0x5 && (_0xcbe8d0['sprinting'] && _0xcbe8d0['spawnTrail'] > 0x3 * _0x44ea3a || !_0xcbe8d0['sprinting'] && _0xcbe8d0['spawnTrail'] > 0x6 * _0x44ea3a)) {
                    var _0xb0ce9d = Math['floor'](Math['random']() * 0x2);
                    var _0x155fdb = 0.4;
                    if (_0xcbe8d0['sprinting']) {
                        _0x155fdb = 0x1;
                    }
                    var _0x4b36be = 0x32 + Math['random']() * 0x14;
                    if (_0xcbe8d0['isPreview'] == undefined) {
                        _0x193f4e['customCustomParticle']('smoke', _0xcbe8d0, (Math['floor'](Math['random']() * 0x2) - 0.5) * 0.07, 0x1 - _0x155fdb, 0x0, 0x0);
                        _0xcbe8d0['spawnTrail'] = 0x0;
                    } else if (_0x365310 != undefined && _0xcbe8d0['spawnTrail'] > 0x4 * _0x44ea3a) {
                        _0x365310['addBelow'](new _0x193f4e['customParticle'](new _0x193f4e['image'](_0x3a4184('smoke' + _0xb0ce9d), _0xcbe8d0['visual']['position']['x'], _0xcbe8d0['visual']['position']['y'] + Math['random']() * 0x22 - 0x11, _0x4b36be * 1.2, _0x4b36be * 1.2, _0x155fdb), (Math['floor'](Math['random']() * 0x2) - 0.5) * 0.07, 0x1 - _0x155fdb, 0x0, 0x0));
                        _0xcbe8d0['spawnTrail'] = 0x0;
                    }
                }
                var _0x3be4ca = 0x6;
                if (_0xcbe8d0['handIncreasing']) {
                    _0xcbe8d0['handDecreasing'] = ![];
                    if (_0xcbe8d0['handOffset'] >= 0x0) {
                        _0xcbe8d0['handOffset'] += _0x193f4e['clientDetails']['dt'] * 2.5 / _0x3be4ca;
                        if (_0xcbe8d0['handOffset'] >= Math['PI'] / 0x3) {
                            _0xcbe8d0['handIncreasing'] = ![];
                            _0xcbe8d0['handOffset'] = Math['PI'] / 0x3;
                        }
                    } else {
                        _0xcbe8d0['handOffset'] += _0x193f4e['clientDetails']['dt'] * 0.6 / _0x3be4ca;
                        if (_0xcbe8d0['handOffset'] >= 0x0) {
                            _0xcbe8d0['handIncreasing'] = ![];
                            _0xcbe8d0['handOffset'] = 0x0;
                        }
                    }
                } else if (_0xcbe8d0['handDecreasing']) {
                    _0xcbe8d0['handOffset'] -= _0x193f4e['clientDetails']['dt'] * 0.3 / _0x3be4ca;
                    if (_0xcbe8d0['handOffset'] <= -Math['PI'] / 0x6) {
                        _0xcbe8d0['handOffset'] = -Math['PI'] / 0x6;
                    }
                } else {
                    _0xcbe8d0['handOffset'] -= _0x193f4e['clientDetails']['dt'] / _0x3be4ca * 0.29;
                    _0xcbe8d0['handOffset'] = Math['max'](0x0, _0xcbe8d0['handOffset']);
                }
                _0xcbe8d0['extraRotationTicks'] += _0x57cdcd * _0x193f4e['clientDetails']['dt'] / 0xdc;
                var _0x2626e7 = Math['sin'](_0xcbe8d0['extraRotationTicks']);
                _0xcbe8d0['foot1']['position']['x'] = -_0x2626e7 * 0xf + 0x2;
                _0xcbe8d0['foot2']['position']['x'] = _0x2626e7 * 0xf + 0x2;
                _0xcbe8d0['flash']['opacity'] = Math['max'](_0xcbe8d0['flash']['opacity'] - _0x193f4e['clientDetails']['dt'] / 0xa, 0x0);
                _0xcbe8d0['ui']['rotation'] = -_0xcbe8d0['visual']['rotation'];
                _0xcbe8d0['healthbar']['width'] += (_0xcbe8d0['health'] - _0xcbe8d0['healthbar']['width']) * 0.1 * _0x193f4e['clientDetails']['dt'];
                _0xcbe8d0['shieldbar']['width'] += (_0xcbe8d0['shield'] - _0xcbe8d0['shieldbar']['width']) * 0.1 * _0x193f4e['clientDetails']['dt'];
                _0xcbe8d0['underHealthbar']['width'] = _0xcbe8d0['healthbar']['width'] = Math['min'](Math['max'](_0xcbe8d0['healthbar']['width'], 0x0), 0x64);
                _0xcbe8d0['healthbar']['position']['x'] = (_0xcbe8d0['healthbar']['width'] - 0x64) / 0x2;
                _0xcbe8d0['shieldbar']['position']['x'] = (_0xcbe8d0['shieldbar']['width'] - 0x64) / 0x2;
                _0xcbe8d0['stamina']['angle'] += (_0xcbe8d0['staminaVal'] * 1.8 * 0x2 * Math['PI'] / 0xb4 - _0xcbe8d0['stamina']['angle']) * 0.1 * _0x193f4e['clientDetails']['dt'];
                _0xcbe8d0['stamina']['rotation'] = -_0xcbe8d0['stamina']['angle'] - Math['PI'] / 0x2;
                for (var _0x44dcc6 = 0x0; _0x44dcc6 < _0xcbe8d0['dollas']['length']; _0x44dcc6++) {
                    _0xcbe8d0['dollas'][_0x44dcc6]['position']['y'] -= _0x193f4e['clientDetails']['dt'] * 0.65;
                    _0xcbe8d0['dollas'][_0x44dcc6]['specialOpacity'] -= 0.02 * _0x193f4e['clientDetails']['dt'];
                    _0xcbe8d0['dollas'][_0x44dcc6]['opacity'] = _0xcbe8d0['dollas'][_0x44dcc6]['specialOpacity'];
                    if (_0xcbe8d0['dollas'][_0x44dcc6]['opacity'] <= 0x0) {
                        if (_0xcbe8d0['dollas']['parent'] != null) {
                            _0xcbe8d0['dollas'][_0x44dcc6]['parent']['remove'](_0xcbe8d0['dollas'][_0x44dcc6]);
                        }
                        _0xcbe8d0['dollas']['splice'](_0x44dcc6, 0x1);
                        _0x44dcc6--;
                    }
                }
                if (_0xcbe8d0['staminaVal'] == 0x64) {
                    _0xcbe8d0['stamina']['opacity'] -= 0.03 * _0x193f4e['clientDetails']['dt'];
                } else {
                    _0xcbe8d0['stamina']['opacity'] += 0.03 * _0x193f4e['clientDetails']['dt'];
                }
                if (_0xcbe8d0['weapon']['opacity'] < 0x1) {
                    _0xcbe8d0['weapon']['opacity'] = Math['min'](_0xcbe8d0['weapon']['opacity'] + _0x193f4e['clientDetails']['dt'] / 0x19, 0x1);
                }
                if (_0xcbe8d0['building']) {
                    _0xcbe8d0['buildingPreview']['opacity'] = 0.7 * _0xcbe8d0['weapon']['opacity'];
                } else {
                    _0xcbe8d0['buildingPreview']['opacity'] = Math['max'](_0xcbe8d0['buildingPreview']['opacity'] - _0x193f4e['clientDetails']['dt'] / 0xa, 0x0);
                }
                _0xcbe8d0['finishedSteadying'] = ![];
                if (_0xcbe8d0['steadying']) {
                    if (_0xcbe8d0['weaponSlots'][_0xcbe8d0['selectedWeapon']]['type'] == 'snowball') {
                        _0xcbe8d0['hands']['rotation'] = _0x193f4e['lerp'](_0xcbe8d0['hands']['rotation'], Math['PI'] / 0x4 - 0.03);
                        _0xcbe8d0['hands']['position']['x'] = Math['max'](_0x193f4e['lerp'](_0xcbe8d0['hands']['position']['x'], 0x7), 0x1);
                        _0xcbe8d0['hands']['position']['y'] = _0x193f4e['lerp'](_0xcbe8d0['hands']['position']['y'], -0xc);
                        _0xcbe8d0['sprite']['objects'][0x0]['rotation'] = _0x193f4e['lerp'](_0xcbe8d0['sprite']['objects'][0x0]['rotation'], _0x2626e7 / 0x10 + Math['PI'] / 0x2 - _0xcbe8d0['handOffset'] / 0x5 + (Math['PI'] / 0x3 - 0.15) / 0x2);
                    } else {
                        _0xcbe8d0['hands']['rotation'] = _0x193f4e['lerp'](_0xcbe8d0['hands']['rotation'], Math['PI'] / 0x2 - 0.23);
                        _0xcbe8d0['hands']['position']['x'] = Math['max'](_0x193f4e['lerp'](_0xcbe8d0['hands']['position']['x'], 0xf), 0x1);
                        _0xcbe8d0['hands']['position']['y'] = _0x193f4e['lerp'](_0xcbe8d0['hands']['position']['y'], -0xc);
                        _0xcbe8d0['sprite']['objects'][0x0]['rotation'] = _0x193f4e['lerp'](_0xcbe8d0['sprite']['objects'][0x0]['rotation'], _0x2626e7 / 0x10 + Math['PI'] / 0x2 - _0xcbe8d0['handOffset'] / 0x5 + Math['PI'] / 0x3 - 0.15);
                    }
                } else {
                    if (_0xcbe8d0['sprinting'] && !_0xcbe8d0['building']) {
                        _0xcbe8d0['hands']['rotation'] = _0x193f4e['lerp'](_0xcbe8d0['hands']['rotation'], -_0x2626e7 / 0x8 - _0xcbe8d0['handOffset']);
                        if (_0xcbe8d0['isPreview']) {
                            _0xcbe8d0['hands']['rotation'] = -_0x2626e7 / 0x8 - _0xcbe8d0['handOffset'];
                        }
                    } else {
                        _0xcbe8d0['hands']['rotation'] = _0x193f4e['lerp'](_0xcbe8d0['hands']['rotation'], -_0x2626e7 / 0x18 - _0xcbe8d0['handOffset']);
                    }
                    _0xcbe8d0['hands']['position']['x'] = _0x193f4e['lerp'](_0xcbe8d0['hands']['position']['x'], 0x0);
                    _0xcbe8d0['hands']['position']['y'] = _0x193f4e['lerp'](_0xcbe8d0['hands']['position']['y'], 0x0);
                    if (_0xcbe8d0['hands']['position']['x'] < 0x1) {
                        _0xcbe8d0['finishedSteadying'] = !![];
                    }
                    if (!_0xcbe8d0['isPreview']) {
                        _0xcbe8d0['sprite']['objects'][0x0]['rotation'] = _0x193f4e['lerp'](_0xcbe8d0['sprite']['objects'][0x0]['rotation'], _0x2626e7 / 0x10 + Math['PI'] / 0x2 - _0xcbe8d0['handOffset'] / 0x5);
                    } else {
                        _0xcbe8d0['sprite']['objects'][0x0]['rotation'] = _0x2626e7 / 0x10 + Math['PI'] / 0x2 - _0xcbe8d0['handOffset'] / 0x5;
                    }
                    _0xcbe8d0['head']['rotation'] = (_0x2626e7 / 0x10 - _0xcbe8d0['handOffset'] / 0x5) * 0.5 + Math['PI'] / 0x2;
                }
                if (_0xcbe8d0['reloadTime'] > 0x0 && _0x12db58['indexOf'](_0xcbe8d0['weaponSlots'][_0xcbe8d0['selectedWeapon']]['type']) == -0x1 && !_0xcbe8d0['steadying'] && _0xcbe8d0['finishedSteadying']) {
                    _0xcbe8d0['handDecreasing'] = !![];
                } else if (_0xcbe8d0['reloadTime'] <= 0x0 && _0xcbe8d0['handOffset'] < 0x0) {
                    _0xcbe8d0['handIncreasing'] = !![];
                }
                if (_0xcbe8d0['newWeaponPosition']['y'] > 0x0) {
                    _0xcbe8d0['newWeaponPosition']['y'] -= 0.2;
                    _0xcbe8d0['hands']['position']['x'] = -_0xcbe8d0['newWeaponPosition']['y'] + 0xf;
                    _0xcbe8d0['newWeaponPosition']['x'] -= 0x1 / 0x19;
                    _0xcbe8d0['hands']['position']['y'] = -0xc;
                }
                _0xcbe8d0['feet']['rotation'] = _0xcbe8d0['sprite']['objects'][0x0]['rotation'] - Math['PI'] / 0x2;
                if (_0xcbe8d0 == _0x193f4e['me']) {
                    _0x28c9ac['position']['x'] = (_0x1ccf84 - 0x5) * (_0x320870 + 0xa) - _0x320870;
                    for (var _0x44dcc6 = 0x0; _0x44dcc6 < _0x36754c['length']; _0x44dcc6++) {
                        _0x36754c[_0x44dcc6]['position']['y'] = 0x0;
                    }
                    if (!_0x4d4973) {
                        _0x36754c[_0x1ccf84]['position']['y'] = -0xa;
                        _0x28c9ac['position']['y'] = -_0x320870 - 0xa;
                    } else {
                        _0x28c9ac['position']['y'] = -_0x320870;
                    }
                    if (_0xcbe8d0['weaponSlots'][_0xcbe8d0['selectedWeapon']]['type'] == 'medkit' || _0xcbe8d0['weaponSlots'][_0xcbe8d0['selectedWeapon']]['type'] == 'mini' || _0xcbe8d0['weaponSlots'][_0xcbe8d0['selectedWeapon']]['type'] == 'pot' || _0xcbe8d0['weaponSlots'][_0xcbe8d0['selectedWeapon']]['type'] == 'bandages') {
                        if (!_0x25b560['enabled']) {
                            _0x4dbb25(_0x25b560, 'opacity', _0x25b560['opacity'], 0x1, 0x190, 0x0, _0x2ba128['easeOutExpo']);
                        }
                        _0x25b560['enabled'] = !![];
                    } else {
                        if (_0x25b560['enabled']) {
                            _0x4dbb25(_0x25b560, 'opacity', _0x25b560['opacity'], 0x0, 0x190, 0x0, _0x2ba128['easeOutExpo']);
                        }
                        _0x25b560['enabled'] = ![];
                    }
                }
                _0xcbe8d0['currentJump'] = _0x193f4e['lerp'](_0xcbe8d0['oldJump'], _0xcbe8d0['newJump']);
                if (_0xcbe8d0['resetOldJump']) {
                    _0xcbe8d0['oldJump'] = _0xcbe8d0['newJump'] = 0x0;
                    _0xcbe8d0['resetOldJump'] = ![];
                }
                var _0x51629a = Math['max'](-Math['pow'](_0xcbe8d0['currentJump'] / _0xcbe8d0['jumpTicks'], 0x2) + _0xcbe8d0['currentJump'] / _0xcbe8d0['jumpTicks'], 0x0);
                _0xcbe8d0['visual']['size'] = 0x1 + _0x51629a * 1.3;
                _0xcbe8d0['shadow']['size'] = 0x1;
                if (_0xcbe8d0['visual']['size'] != 0x1) {
                    _0xcbe8d0['shadow']['size'] = 0x1 / _0x3608cd(_0xcbe8d0['visual']['size'], 0.01);
                }
                for (var _0x44dcc6 = 0x0; _0x44dcc6 < _0xcbe8d0['damages']['length']; _0x44dcc6++) {
                    _0xcbe8d0['damages'][_0x44dcc6]['t'] -= _0x193f4e['clientDetails']['dt'] / 0x37;
                    _0xcbe8d0['damages'][_0x44dcc6]['position']['y'] = _0xcbe8d0['damages'][_0x44dcc6]['original']['y'] - Math['max'](-Math['pow'](_0xcbe8d0['damages'][_0x44dcc6]['t'] / 0x2 + 0.5, 0x2) + _0xcbe8d0['damages'][_0x44dcc6]['t'] / 0x2 + 0.5, 0x0) * 0x96 + _0xcbe8d0['visual']['position']['y'];
                    _0xcbe8d0['damages'][_0x44dcc6]['position']['x'] = _0xcbe8d0['damages'][_0x44dcc6]['original']['x'] + _0xcbe8d0['visual']['position']['x'];
                    _0xcbe8d0['damages'][_0x44dcc6]['opacity'] = _0xcbe8d0['damages'][_0x44dcc6]['t'];
                    if (_0xcbe8d0['damages'][_0x44dcc6]['t'] <= 0x0) {
                        _0xcbe8d0['damages']['opacity'] = 0x0;
                        if (_0xcbe8d0['damages'][_0x44dcc6]['parent'] != null) {
                            _0xcbe8d0['damages'][_0x44dcc6]['parent']['remove'](_0xcbe8d0['damages'][_0x44dcc6]);
                        }
                        _0xcbe8d0['damages'][_0x44dcc6]['unlink']();
                        _0xcbe8d0['damages']['splice'](_0x44dcc6, 0x1);
                        _0x44dcc6--;
                    }
                }
                if (_0xcbe8d0['healing']) {
                    _0xcbe8d0['healSin'] = (_0xcbe8d0['fullReload'] - _0xcbe8d0['reloadTime'] / 0xa) * _0xcbe8d0['healRotations'] * Math['PI'] / _0xcbe8d0['fullReload'];
                    var _0x400b0e = Math['sin'](_0xcbe8d0['healSin']) * 0x5;
                    _0xcbe8d0['hand1']['position']['x'] = _0xcbe8d0['handXOffset'] - 0x3 + _0x400b0e;
                    _0xcbe8d0['hand2']['position']['x'] = _0xcbe8d0['handXOffset'] - 0x3 + _0x400b0e;
                    _0xcbe8d0['weapon']['position']['x'] = _0xcbe8d0['originalWeaponX'] + _0x400b0e;
                    var _0x5ae6da = ![];
                    if (_0x12db58['indexOf'](_0xcbe8d0['weaponSlots'][_0xcbe8d0['selectedWeapon']]['type']) != -0x1) {
                        if (_0xcbe8d0['reloadTime'] > 0x0) {
                            if (!_0xcbe8d0['healing']) {
                                _0xcbe8d0['healSin'] = 0x0;
                            }
                            _0x5ae6da = !![];
                        }
                    }
                    if (_0xcbe8d0['healing'] != _0x5ae6da) {
                        _0xcbe8d0['resetSelectedWeapon'] = !![];
                    }
                    _0xcbe8d0['healing'] = _0x5ae6da;
                }
                if (_0xcbe8d0['reloadTime'] <= 0x0) {
                    _0xcbe8d0['healSin'] = 0x0;
                }
                if (_0xcbe8d0['speechTimer'] > 0x0) {
                    _0xcbe8d0['speechTimer'] -= _0x193f4e['clientDetails']['dt'] / 0xa;
                    _0xcbe8d0['speech']['opacity'] += _0x193f4e['clientDetails']['dt'] / 0xa;
                    _0xcbe8d0['speech']['opacity'] = Math['min'](_0xcbe8d0['speech']['opacity'], 0x1);
                } else {
                    _0xcbe8d0['speech']['opacity'] -= _0x193f4e['clientDetails']['dt'] / 0xa;
                    _0xcbe8d0['speech']['opacity'] = Math['max'](0x0, _0xcbe8d0['speech']['opacity']);
                }
            }, function (_0x3784be, _0x8dbbf7) {
                if (_0x3784be['firstPacket']) {
                    if (_0x8dbbf7['selectedWeapon'] === undefined) {
                        _0x8dbbf7['selectedWeapon'] = _0x3784be['selectedWeapon'];
                    }
                    if (_0x8dbbf7['building'] === undefined) {
                        _0x8dbbf7['building'] = _0x3784be['building'];
                    }
                    _0x3784be['firstPacket'] = ![];
                }
                if (_0x8dbbf7['gh'] !== undefined && _0x3784be == _0x193f4e['me']) {
                    _0x3f5a80['opacity'] = 0.7;
                }
                if (_0x8dbbf7['house'] !== undefined) {
                    _0x3784be['house'] = _0x8dbbf7['house'];
                }
                if (_0x8dbbf7['elims'] !== undefined) {
                    _0x3784be['elims'] = _0x8dbbf7['elims'];
                    if (_0x3784be == _0x193f4e['me']) {
                        _0x436a3f['text'] = _0x3784be['elims'];
                        if (localStorage.deltaElims != _0x3784be['elims']) socket.emit("gameInfo", "elims", _0x3784be['elims']);
                        localStorage.deltaElims = _0x3784be['elims'];
                    }
                }
                if (_0x3784be['unsetSteadying']) {
                    if (_0x8dbbf7['steadying'] === undefined) {
                        _0x8dbbf7['steadying'] = ![];
                    }
                    _0x3784be['unsetSteadying'] = ![];
                }
                if (_0x8dbbf7['infected'] !== undefined) {
                    if (_0x8dbbf7['infected'] && _0x3784be['hairStyle'] != 'hazmathair') {
                        _0x3784be['hairStyle'] = 'hazmathair';
                        _0x3784be['playerImage']['image'] = _0x3a4184('hazmatbody');
                        _0x3784be['playerImage']['belowObjects'] = [];
                        _0x3784be['head']['image'] = _0x3a4184(_0x3784be['hairStyle']);
                    } else if (!_0x8dbbf7['infected'] && _0x3784be['hairStyle'] != 'infected0' && _0x3784be['hairStyle'] != 'infected1') {
                        _0x3784be['hairStyle'] = 'infected' + Math['floor'](Math['random']() * 0x2);
                        _0x3784be['playerImage']['image'] = _0x3a4184('player');
                        _0x3784be['playerImage']['belowObjects'] = [];
                        _0x3784be['head']['image'] = _0x3a4184(_0x3784be['hairStyle']);
                    }
                    _0x3784be['infected'] = _0x8dbbf7['infected'];
                }
                if (_0x8dbbf7['zombie'] !== undefined) {
                    if (_0x8dbbf7['zombie'] && _0x3784be['hairStyle'] != 'zombiehair') {
                        _0x3784be['hairStyle'] = 'zombiehair';
                        _0x3784be['playerImage']['image'] = _0x3a4184('zombiebody');
                        _0x3784be['playerImage']['belowObjects'] = [];
                        _0x3784be['head']['image'] = _0x3a4184(_0x3784be['hairStyle']);
                    }
                    _0x3784be['infected'] = _0x8dbbf7['infected'];
                }
                if (_0x8dbbf7['shot'] !== undefined && _0x3784be['weaponSlots'][_0x3784be['selectedWeapon']]['type'] == 'picaxe') {
                    _0x3784be['handIncreasing'] = !![];
                }
                if (_0x8dbbf7['shot'] !== undefined && _0x3784be['weaponSlots'][_0x3784be['selectedWeapon']]['type'] != 'picaxe' && _0x3784be['weaponSlots'][_0x3784be['selectedWeapon']]['type'] != 'snowball') {
                    _0x3784be['newWeaponPosition']['y'] = 0x5;
                    _0x3784be['newWeaponPosition']['x'] = 0x1;
                    _0x3784be['flash']['image'] = _0x3a4184('flash' + Math['floor'](Math['random']() * 0x3));
                    _0x3784be['flash']['opacity'] = 0.8;
                    if (!_0x3784be['steadying'] && (_0x8dbbf7['steadying'] === undefined || !_0x8dbbf7['steadying'])) {
                        _0x3784be['unsetSteadying'] = !![];
                        _0x8dbbf7['steadying'] = !![];
                    }
                    if (_0x3784be == _0x193f4e['me']) {
                        _0x2ca822 = 0x65;
                    }
                }
                if (_0x8dbbf7['team'] !== undefined) {
                    _0x3784be['team'] = [];
                    if (_0x3784be == _0x193f4e['me']) {
                        for (var _0x36715f = 0x0; _0x36715f < _0x8dbbf7['team']['length']; _0x36715f++) {
                            if (_0x8dbbf7['team'][_0x36715f] != _0x193f4e['me']['id']) {
                                for (var _0x4526d5 = 0x0; _0x4526d5 < _0x193f4e['objects']['length']; _0x4526d5++) {
                                    if (_0x193f4e['objects'][_0x4526d5]['id'] == _0x8dbbf7['team'][_0x36715f]) {
                                        _0x3784be['team']['push'](_0x193f4e['objects'][_0x4526d5]);
                                    }
                                }
                            }
                        }
                    }
                }
                if (_0x8dbbf7['sprinting'] !== undefined) {
                    _0x3784be['sprinting'] = _0x8dbbf7['sprinting'];
                }
                if (_0x8dbbf7['teleported'] !== undefined) {
                    _0x3784be['old']['position'] = _0x3784be['actualNew']['position']['clone']();
                    _0x3784be['old']['rotation'] = _0x3784be['new']['rotation'];
                    _0x3784be['actualOld']['position'] = _0x3784be['actualNew']['position']['clone']();
                    _0x3784be['new']['position'] = _0x3784be['actualNew']['position']['clone']();
                    _0x3784be['visual']['position'] = _0x3784be['actualNew']['position']['clone']();
                    _0x3784be['visual']['rotation'] = _0x3784be['new']['rotation'];
                    if (_0x3784be == _0x193f4e['me']) {
                        _0x2ca822 = 0x98967f;
                        _0x548331 = 0x3e7;
                        _0x227276['camera']['position'] = new _0x193f4e['Vector2'](_0x193f4e['me']['visual']['position']['x'], _0x193f4e['me']['visual']['position']['y']);
                    }
                }
                if (_0x3784be == _0x193f4e['me']) {
                    if (!_0x247dad) {
                        _0xef1c8d['radius'] = _0x3a189e['radius'];
                        _0xef1c8d['position'] = _0x3a189e['position'];
                    }
                    if (_0x8dbbf7['specs'] !== undefined) {
                        _0x3784be['spectators'] = _0x8dbbf7['specs'];
                        if (_0x3784be['spectators'] == 0x0) {
                            _0x9eb2fe['opacity'] = 0x0;
                        } else {
                            _0x9eb2fe['opacity'] = 0x1;
                            _0x223561['text'] = _0x3784be['spectators']['toString']();
                        }
                    }
                    _0x247dad = ![];
                    if (_0x8dbbf7['health'] !== undefined) {
                        _0x35bfad['text'] = _0x8dbbf7['health']['toString']();
                        _0x8c95b9['width'] = _0x8dbbf7['health'] * 0x3;
                        if (_0x3784be['knocked']) {
                            _0x8c95b9['color'] = '#C00';
                            _0x8c95b9['width'] /= 0x2;
                        } else {
                            _0x8c95b9['color'] = '#0C0';
                        }
                    }
                    if (_0x8dbbf7['shield'] !== undefined) {
                        _0x3f6e4c['text'] = _0x8dbbf7['shield']['toString']();
                        _0x42f1a4['width'] = _0x8dbbf7['shield'] * 0x3;
                    }
                    if (_0x193f4e['spectating'] && _0x8dbbf7['selectedWeapon'] !== undefined) {
                        _0x1ccf84 = _0x8dbbf7['selectedWeapon'];
                    }
                }
                if (_0x8dbbf7['knocked'] !== undefined) {
                    if (_0x8dbbf7['knocked']) {
                        _0x3784be['head']['image'] = _0x3a4184('revive');
                    } else {
                        _0x3784be['head']['image'] = _0x3a4184(_0x3784be['hairStyle']);
                    }
                    _0x3784be['knocked'] = _0x8dbbf7['knocked'];
                }
                if (_0x8dbbf7['health'] !== undefined) {
                    _0x3784be['health'] = _0x8dbbf7['health'];
                }
                if (_0x8dbbf7['shield'] !== undefined) {
                    _0x3784be['shield'] = _0x8dbbf7['shield'];
                }
                if (_0x8dbbf7['hLost'] !== undefined) {
                    var _0x7db265 = new _0x193f4e['object']();
                    _0x7db265['position']['x'] = (Math['random']() * 0x2 - 0x1) * 0x1e;
                    _0x7db265['position']['y'] = (Math['random']() * 0x2 - 0x1) * 0xf - 0x3c;
                    _0x7db265['original'] = {
                        'x': _0x7db265['position']['x'],
                        'y': _0x7db265['position']['y']
                    };
                    _0x7db265['t'] = 0x1;
                    var _0xc2833f = new _0x193f4e['strokeText'](_0x8dbbf7['hLost'], 0x0, 0x0, '#333', 'Arial Black', 0x19, 'bold', 0x1, 'center');
                    _0xc2833f['lineWidth'] = 0x6;
                    _0x7db265['add'](_0xc2833f);
                    _0x7db265['add'](new _0x193f4e['text'](_0x8dbbf7['hLost'], 0x0, 0x0, '#FFF', 'Arial Black', 0x19, 'bold', 0x1, 'center'));
                    _0x3784be['damages']['push'](_0x7db265);
                    _0x4d0080['add'](_0x7db265);
                }
                if (_0x8dbbf7['sLost'] !== undefined) {
                    var _0x7db265 = new _0x193f4e['object']();
                    _0x7db265['position']['x'] = (Math['random']() * 0x2 - 0x1) * 0x1e;
                    _0x7db265['position']['y'] = (Math['random']() * 0x2 - 0x1) * 0xf - 0x3c;
                    _0x7db265['original'] = {
                        'x': _0x7db265['position']['x'],
                        'y': _0x7db265['position']['y']
                    };
                    _0x7db265['t'] = 0x1;
                    var _0xc2833f = new _0x193f4e['strokeText'](_0x8dbbf7['sLost'], 0x0, 0x0, '#333', 'Arial Black', 0x19, 'bold', 0x1, 'center');
                    _0xc2833f['lineWidth'] = 0x6;
                    _0x7db265['add'](_0xc2833f);
                    _0x7db265['add'](new _0x193f4e['text'](_0x8dbbf7['sLost'], 0x0, 0x0, _0x20a4e4, 'Arial Black', 0x19, 'bold', 0x1, 'center'));
                    _0x3784be['damages']['push'](_0x7db265);
                    _0x4d0080['add'](_0x7db265);
                }
                _0x3784be['oldJump'] = _0x3784be['currentJump'];
                if (_0x8dbbf7['jump'] !== undefined) {
                    _0x3784be['newJump'] = _0x8dbbf7['jump'];
                    if (_0x8dbbf7['jump'] == 0x8 - 0x6) {
                        if (_0x3784be['visual']['parent'] != null) {
                            _0x3784be['visual']['parent']['remove'](_0x3784be['visual']);
                        }
                        _0x3784be['visual']['parent'] = null;
                        _0x559922['add'](_0x3784be['visual']);
                    } else if (_0x8dbbf7['jump'] == 0x8 + 0x6) {
                        if (_0x3784be['visual']['parent'] != null) {
                            _0x3784be['visual']['parent']['remove'](_0x3784be['visual']);
                        }
                        _0x3784be['visual']['parent'] = null;
                        _0x227276['add'](_0x3784be['visual']);
                    }
                    if (_0x3784be['newJump'] < _0x3784be['jumpTicks'] / 0x2 && _0x3784be['oldJump'] > _0x3784be['jumpTicks'] / 0x2) {
                        _0x3784be['oldJump'] = _0x3784be['jumpTicks'] - _0x3784be['oldJump'];
                    }
                } else {
                    _0x3784be['newJump'] = 0x0;
                    _0x3784be['currentJump'] = 0x0;
                    if (_0x3784be['oldJump'] > _0x3784be['jumpTicks'] / 0x2) {
                        _0x3784be['oldJump'] = _0x3784be['jumpTicks'] - _0x3784be['oldJump'];
                        _0x3784be['resetOldJump'] = !![];
                        var _0x34dad6 = 0.5;
                        for (var _0x36715f = 0x0; _0x36715f < 0x8 && _0x1db9a8 == 0x0; _0x36715f++) {
                            var _0x3ce1cc = Math['floor'](Math['random']() * 0x2);
                            _0x529676['add'](new _0x193f4e['customParticle'](new _0x193f4e['image'](_0x3a4184('smoke' + _0x3ce1cc), _0x3784be['visual']['position']['x'] + Math['random']() * 0x1e - 0xf, _0x3784be['visual']['position']['y'] + Math['random']() * 0x1e - 0xf, 0x32 + Math['random']() * 0x14, 0x32 + Math['random']() * 0x14, _0x34dad6), (Math['floor'](Math['random']() * 0x2) - 0.5) * 0.07, 0x1 - _0x34dad6, Math['random']() * 0x2 - 0x1, Math['random']() * 0x2 - 0x1));
                        }
                    }
                }
                if (_0x8dbbf7['la'] !== undefined) {
                    _0x3784be['damageIndicator']['rotation'] = _0x8dbbf7['la'] / 0x64 + Math['PI'] / 0x2;
                    _0x3784be['damageIndicator']['opacity'] = 0.5;
                }
                if (_0x8dbbf7['steadying'] !== undefined) {
                    _0x3784be['steadying'] = _0x8dbbf7['steadying'];
                    if (!_0x3784be['steadying']) {
                        _0x3784be['newWeaponPosition']['y'] = 0x0;
                        _0x3784be['newWeaponPosition']['x'] = 0x0;
                    }
                    if (_0x8dbbf7['selectedWeapon'] === undefined) {
                        _0x8dbbf7['selectedWeapon'] = _0x3784be['selectedWeapon'];
                    }
                }
                if (_0x8dbbf7['building'] !== undefined && _0x8dbbf7['building'] != _0x3784be['building']) {
                    _0x3784be['weapon']['opacity'] = _0x3784be['switchOpacity'];
                    _0x3784be['building'] = _0x8dbbf7['building'];
                    if (_0x8dbbf7['selectedWeapon'] === undefined) {
                        _0x8dbbf7['selectedWeapon'] = _0x3784be['selectedWeapon'];
                    }
                }
                if (_0x8dbbf7['mat'] !== undefined) {
                    _0x3784be['mat'] = _0x8dbbf7['mat'];
                    if (_0x3784be == _0x193f4e['me']) {
                        _0x3784be['material'] = _0x4b5af4[_0x8dbbf7['mat']];
                        for (var _0x36715f = 0x0; _0x36715f < _0x5005a6['length']; _0x36715f++) {
                            _0x5005a6[_0x36715f]['color'] = '#000';
                        }
                        _0x5005a6[0x2 - _0x8dbbf7['mat']]['color'] = '#77F';
                    }
                    if (_0x3784be['canBuild']) {
                        _0x3784be['buildingPreview']['image'] = _0x3a4184('blue' + _0x3784be['material']);
                    } else {
                        _0x3784be['buildingPreview']['image'] = _0x3a4184('red' + _0x3784be['material']);
                    }
                }
                if (_0x8dbbf7['mats'] !== undefined) {
                    if (_0x3784be == _0x193f4e['me']) {
                        for (var _0x36715f = 0x0; _0x36715f < _0x8dbbf7['mats']['length']; _0x36715f++) {
                            if (_0x3784be['materials'][_0x36715f] < _0x8dbbf7['mats'][_0x36715f]) {
                                var _0x159deb = new _0x193f4e['image'](_0x3a4184(_0x4b5af4[_0x36715f]), -(0x2 - _0x36715f) * _0x320870 * 0.9 - _0x320870 + (_0x320870 - _0x2391d7) / 0x2, -_0x320870 * 2.5 - 0x6e, 0x32, 0x32);
                                _0x159deb['add'](new _0x193f4e['text']('+' + (_0x8dbbf7['mats'][_0x36715f] - _0x3784be['materials'][_0x36715f]), 0x0, 0x28, '#FFF', 'Arial Black', 0x19, 'bold', 0x1, 'center'));
                                if (_0x8dbbf7['mats'][_0x36715f] - _0x3784be['materials'][_0x36715f] == 0x5) {
                                    _0x159deb['objects'][_0x159deb['objects']['length'] - 0x1]['canvas'] = _0x20ca6;
                                }
                                var _0x32c5b3 = new _0x193f4e['customParticle'](_0x159deb, 0x0, 0.7, 0x0, -0.6);
                                _0x32c5b3['turn'] = 0x0;
                                _0x32c5b3['widthFade'] = 0x0;
                                _0x32c5b3['heightFade'] = 0x0;
                                _0x3042a4['add'](_0x32c5b3);
                                _0x159deb['rotation'] = 0x0;
                            }
                        }
                    }
                    _0x3784be['materials'] = _0x8dbbf7['mats'];
                }
                if (_0x8dbbf7['canBuild'] !== undefined) {
                    _0x3784be['canBuild'] = _0x8dbbf7['canBuild'];
                    if (_0x3784be['canBuild']) {
                        _0x3784be['buildingPreview']['image'] = _0x3a4184('blue' + _0x3784be['material']);
                    } else {
                        _0x3784be['buildingPreview']['image'] = _0x3a4184('red' + _0x3784be['material']);
                    }
                }
                if (_0x8dbbf7['rs'] !== undefined) {
                    _0x35c7e2('reload', _0x193f4e['me']['visual']['position'], _0x3784be['visual']['position']);
                }
                if (_0x8dbbf7['frt'] !== undefined) {
                    _0x3784be['fullReload'] = _0x8dbbf7['frt'];
                }
                if (_0x8dbbf7['rt'] !== undefined) {
                    _0x3784be['oldReloadTime'] = _0x3784be['reloadTime'];
                    _0x3784be['newReloadTime'] = _0x8dbbf7['rt'];
                    if (_0x3784be['newReloadTime'] > _0x3784be['oldReloadTime']) {
                        _0x3784be['oldReloadTime'] = _0x3784be['newReloadTime'];
                    }
                    if (_0x3784be['reloadTime'] == 0x0) {
                        _0x3784be['oldReloadTime'] = _0x8dbbf7['rt'];
                    }
                    if (_0x12db58['indexOf'](_0x3784be['weaponSlots'][_0x3784be['selectedWeapon']]['type']) != -0x1) {
                        if (_0x8dbbf7['rt'] > 0x0) {
                            if (!_0x3784be['healing']) {
                                _0x3784be['healSin'] = 0x0;
                            }
                            _0x3784be['healing'] = !![];
                        }
                    }
                    if (_0x8dbbf7['rt'] == -0xa) {
                        _0x3784be['reloadTime'] = _0x3784be['oldReloadTime'] = _0x3784be['newReloadTime'] = 0x0;
                        _0x58f352['opacity'] = 0x0;
                    }
                } else {
                    if (_0x3784be['newReloadTime'] == 0x0) {
                        _0x3784be['oldReloadTime'] = 0x0;
                    }
                }
                if (_0x8dbbf7['v'] !== undefined) {
                    _0x3784be['inVehicle'] = _0x8dbbf7['v'];
                }
                if (_0x8dbbf7['weaponSlots'] !== undefined) {
                    _0x3784be['weaponSlots'] = _0x8dbbf7['weaponSlots'];
                    _0x3784be['updateWeaponSlots'] = !![];
                    _0x3784be['resetSelectedWeapon'] = !![];
                }
                if (_0x8dbbf7['picaxeSkin'] !== undefined) {
                    _0x3784be['picaxeSkin'] = _0x8dbbf7['picaxeSkin'];
                }
                if (_0x8dbbf7['wAmmo'] !== undefined) {
                    _0x3784be['wAmmo'] = _0x8dbbf7['wAmmo'];
                    _0x3784be['updateWeaponSlots'] = !![];
                }
                if (_0x8dbbf7['ammo'] !== undefined) {
                    _0x3784be['ammo'] = _0x8dbbf7['ammo'];
                    _0x3784be['updateWeaponSlots'] = !![];
                    if (_0x3784be == _0x193f4e['me']) {
                        for (var _0x36715f = 0x0; _0x36715f < _0x254dc0['length']; _0x36715f++) {
                            _0x254dc0[0x3 - _0x36715f]['text']['text'] = _0x3784be['ammo'][_0x36715f]['toString']();
                        }
                    }
                }
                if (_0x3784be == _0x193f4e['me'] && _0x3784be['updateWeaponSlots']) {
                    _0x8dbbf7['weaponSlots'] = _0x3784be['weaponSlots'];
                    _0x8dbbf7['wAmmo'] = _0x3784be['wAmmo'];
                    if (_0x3784be == _0x193f4e['me'] && !_0x193f4e['spectating'] && _0x3784be['weaponSlots'][_0x1ccf84]['type'] == 'empty') {
                        for (var _0x36715f = _0x1ccf84; _0x36715f >= 0x0; _0x36715f--) {
                            if (_0x3784be['weaponSlots'][_0x36715f]['type'] != 'empty') {
                                _0x1ccf84 = _0x36715f;
                                _0x193f4e['currentPackets']['push']({
                                    'type': 'select',
                                    'weapon': _0x1ccf84
                                });
                                break;
                            }
                        }
                    }
                    var _0x21a47a = 0x1e;
                    for (var _0x36715f = 0x0; _0x36715f < _0x8dbbf7['weaponSlots']['length'] && _0x36715f < _0x36754c['length']; _0x36715f++) {
                        var _0x5ea8a5 = _0x8dbbf7['weaponSlots'][_0x36715f];
                        var _0x2cb1ad = new _0x193f4e['image'](_0x3a4184('inv' + _0x5ea8a5['rarity']), 0x0, 0x0, _0x320870, _0x320870);
                        var _0x42bea8 = new _0x193f4e['text'](_0x1c63f8('Weapon Slot ' + (_0x36715f + 0x1))['toString'](), 0x0, _0x320870 * 0.75, '#FFF', 'Arial Black', _0x21a47a - 0x7, '', 0x1, 'center');
                        var _0x500980 = 0x20;
                        _0x42bea8['add'](new _0x193f4e['strokeRectangle'](0x0, 0x0, _0x500980, _0x500980, '#FFF', 0x3));
                        _0x2cb1ad['add'](_0x42bea8);
                        _0x42bea8['size'] = 0.8;
                        if (_0x5ea8a5['type'] == 'empty') {
                            _0x2cb1ad['remove'](_0x42bea8);
                            _0x2cb1ad = new _0x193f4e['rectangle'](0x0, 0x0, _0x320870, _0x320870, '#000', 0.2);
                            _0x2cb1ad['add'](_0x42bea8);
                        } else if (_0x5ea8a5['type'] == 'picaxe') {
                            var _0x10105f = new _0x193f4e['object']();
                            _0x10105f['position'] = new _0x193f4e['Vector2'](0x2, 0x5);
                            var _0x1d3160 = new _0x193f4e['image'](_0x3a4184(_0x3784be['picaxeSkin']), 0x0, 0x0, _0x320870 * 0.9, _0x320870 * 0.9);
                            _0x10105f['add'](_0x1d3160);
                            _0x1d3160['rotation'] = -Math['PI'] * 0xb / 0x10;
                            _0x2cb1ad['add'](_0x10105f);
                        } else if (_0x5ea8a5['type'] == 'scar' || _0x5ea8a5['type'] == 'bolt' || _0x5ea8a5['type'] == 'lmg' || _0x5ea8a5['type'] == 'shotgun' || _0x5ea8a5['type'] == 'heavy' || _0x5ea8a5['type'] == 'smg' || _0x5ea8a5['type'] == 'ump' || _0x5ea8a5['type'] == 'rifle' || _0x5ea8a5['type'] == 'ar-15' || _0x5ea8a5['type'] == 'scoped ar' || _0x5ea8a5['type'] == 'deagle' || _0x5ea8a5['type'] == 'rpg' || _0x5ea8a5['type'] == 'famas' || _0x5ea8a5['type'] == 'tommy gun' || _0x5ea8a5['type'] == 'drum' || _0x5ea8a5['type'] == 'musket' || _0x5ea8a5['type'] == 'heavy sniper' || _0x5ea8a5['type'] == 'ak47' || _0x5ea8a5['type'] == 'combat' || _0x5ea8a5['type'] == 'silencedpistol' || _0x5ea8a5['type'] == 'aug') {
                            var _0x5e7970 = new _0x193f4e['object']();
                            _0x5e7970['position'] = new _0x193f4e['Vector2'](-0x2, 0x0);
                            var _0x1fb8a6 = new _0x193f4e['image'](_0x3a4184(_0x5ea8a5['type']), 0x0, 0x0, _0x320870 * 1.04, _0x320870 * 1.04);
                            _0x5e7970['add'](_0x1fb8a6);
                            _0x1fb8a6['rotation'] = -Math['PI'] * 0xc / 0x10 + Math['PI'];
                            if (_0x5ea8a5['type'] == 'deagle') {
                                _0x1fb8a6['size'] = 0.8;
                            }
                            _0x2cb1ad['add'](_0x5e7970);
                            if (_0x8dbbf7['wAmmo'][_0x36715f - 0x1] >= 0x0) {
                                var _0x2d0aeb = new _0x193f4e['strokeText']((_0x3784be['ammo'][_0x151229[_0x5ea8a5['type']]] + _0x8dbbf7['wAmmo'][_0x36715f - 0x1])['toString'](), -_0x320870 / 0x2 + _0x21a47a / 0x3, _0x320870 / 0x2 - _0x21a47a / 0x2, '#000', 'Arial Black', _0x21a47a - 0x7, '', 0x1, 'left');
                                _0x2d0aeb['lineWidth'] = 0x4;
                                _0x2d0aeb['add'](new _0x193f4e['text']((_0x3784be['ammo'][_0x151229[_0x5ea8a5['type']]] + _0x8dbbf7['wAmmo'][_0x36715f - 0x1])['toString'](), 0x0, 0x0, '#FFF', 'Arial Black', _0x21a47a - 0x7, '', 0x1, 'left'));
                                _0x2cb1ad['add'](_0x2d0aeb);
                                var _0x2ff28d = new _0x193f4e['image'](_0x3a4184('inventoryammo' + _0x151229[_0x5ea8a5['type']]), _0x320870 / 0x2 - _0x21a47a / 0x2 - 0x5, -_0x320870 / 0x2 + _0x21a47a / 0x2 + 0x5, _0x21a47a, _0x21a47a);
                                _0x2ff28d['rotation'] = Math['PI'] / 0x5;
                                _0x2cb1ad['add'](_0x2ff28d);
                            }
                        } else if (_0x5ea8a5['type'] == 'mini' || _0x5ea8a5['type'] == 'pot' || _0x5ea8a5['type'] == 'bandages' || _0x5ea8a5['type'] == 'medkit' || _0x5ea8a5['type'] == 'snowball') {
                            var _0x5e7970 = new _0x193f4e['object']();
                            _0x5e7970['position'] = new _0x193f4e['Vector2'](-0x2, 0x0);
                            var _0x1fb8a6 = new _0x193f4e['image'](_0x3a4184(_0x5ea8a5['type']), 0x0, 0x0, _0x320870 * 0.7, _0x320870 * 0.7);
                            if (_0x5ea8a5['type'] == 'bandages') {
                                _0x1fb8a6['position']['x'] += 0x5;
                            }
                            _0x5e7970['add'](_0x1fb8a6);
                            _0x1fb8a6['rotation'] = 0x0;
                            _0x2cb1ad['add'](_0x5e7970);
                            if (_0x8dbbf7['wAmmo'][_0x36715f - 0x1] >= 0x0) {
                                var _0x2d0aeb = new _0x193f4e['strokeText'](_0x8dbbf7['wAmmo'][_0x36715f - 0x1]['toString'](), -_0x320870 / 0x2 + _0x21a47a / 0x3, _0x320870 / 0x2 - _0x21a47a / 0x2, '#000', 'Arial Black', _0x21a47a - 0x7, '', 0x1, 'left');
                                _0x2d0aeb['lineWidth'] = 0x4;
                                _0x2d0aeb['add'](new _0x193f4e['text'](_0x8dbbf7['wAmmo'][_0x36715f - 0x1]['toString'](), 0x0, 0x0, '#FFF', 'Arial Black', _0x21a47a - 0x7, '', 0x1, 'left'));
                                _0x2cb1ad['add'](_0x2d0aeb);
                            }
                        }
                        if (_0x36715f == _0x1ccf84) {
                            if (!_0x4d4973)
                                _0x2cb1ad['position']['y'] -= 0xa;
                            _0x28c9ac['position']['y'] = _0x2cb1ad['position']['y'] - _0x320870;
                        }
                        _0x36754c[_0x36715f]['parent']['add'](_0x2cb1ad);
                        _0x36754c[_0x36715f]['parent']['remove'](_0x36754c[_0x36715f]);
                        _0x36754c[_0x36715f]['unlink']();
                        _0x36754c[_0x36715f] = _0x2cb1ad;
                    }
                    _0x3784be['updateWeaponSlots'] = ![];
                }
                if (_0x3784be['resetSelectedWeapon']) {
                    if (_0x8dbbf7['selectedWeapon'] === undefined) {
                        _0x8dbbf7['selectedWeapon'] = _0x3784be['selectedWeapon'];
                    }
                }
                if (_0x8dbbf7['selectedWeapon'] !== undefined) {
                    if (_0x8dbbf7['selectedWeapon'] != _0x3784be['selectedWeapon'] && !_0x3784be['building']) {
                        _0x3784be['weapon']['opacity'] = _0x3784be['switchOpacity'];
                    }
                    _0x3784be['selectedWeapon'] = _0x8dbbf7['selectedWeapon'];
                    if (_0x3784be == _0x193f4e['me'] && _0x3784be['selectedWeapon'] != _0x1ccf84 && !_0x3784be['knocked']) {
                        _0x193f4e['currentPackets']['push']({
                            'type': 'select',
                            'weapon': _0x1ccf84
                        });
                    }
                    if (_0x3784be == _0x193f4e['me']) {
                        _0x18fcd5 = !![];
                    }
                    if (_0x3a4184(_0x3784be['weaponSlots'][_0x3784be['selectedWeapon']]['type']) != null) {
                        _0x3784be['hands']['remove'](_0x3784be['weapon']);
                        _0x3784be['hands']['remove'](_0x3784be['hand2']);
                        _0x3784be['hands']['remove'](_0x3784be['hand1']);
                        if (_0x3784be['weaponSkin'] != '' && _0x10c4b5['indexOf'](_0x3784be['weaponSlots'][_0x3784be['selectedWeapon']]['type']) >= 0x0) {
                            _0x3784be['weapon']['image'] = _0x36020f(_0x3784be['weaponSkin'], _0x3784be['weaponSlots'][_0x3784be['selectedWeapon']]['type']);
                        } else {
                            _0x3784be['weapon']['image'] = _0x3a4184(_0x3784be['weaponSlots'][_0x3784be['selectedWeapon']]['type']);
                        }
                        if (_0x3784be['weaponSlots'][_0x3784be['selectedWeapon']]['type'] == 'picaxe' && !_0x3784be['building']) {
                            if (_0x3784be['hair'] == 0x4 || _0x3784be['hair'] == 0x7) {
                                _0x3784be['weapon']['image'] = _0x3a4184('custompic' + (_0x3784be['hair'] - 0x4));
                            } else {
                                _0x3784be['weapon']['image'] = _0x3a4184(_0x3784be['picaxeSkin']);
                            }
                            _0x3784be['hands']['add'](_0x3784be['hand1']);
                            _0x3784be['hands']['add'](_0x3784be['weapon']);
                            _0x3784be['hands']['add'](_0x3784be['hand2']);
                            _0x3784be['weapon']['position']['x'] = 0x18;
                            _0x3784be['weapon']['position']['y'] = 0xa;
                            _0x3784be['weapon']['rotation'] = Math['PI'] / 0x2 + 0.01;
                            _0x3784be['hand1']['position']['x'] = _0x3784be['handXOffset'];
                            _0x3784be['hand2']['position']['x'] = _0x3784be['handXOffset'] - 0x5;
                            _0x3784be['weapon']['size'] = 0x1;
                            if (_0x3784be['knocked']) {
                                _0x3784be['weapon']['size'] = 0x0;
                                _0x3784be['hand1']['position']['x'] = _0x3784be['handXOffset'];
                                _0x3784be['hand2']['position']['x'] = _0x3784be['handXOffset'];
                            }
                            if (_0x3784be == _0x193f4e['me']) {
                                _0x18fcd5 = ![];
                            }
                        } else {
                            if (!_0x3784be['healing']) {
                                _0x3784be['hand1']['position']['x'] = _0x3784be['handXOffset'];
                                _0x3784be['hand2']['position']['x'] = _0x3784be['handXOffset'] + 0x4;
                            }
                            _0x3784be['hand1']['position']['y'] = _0x3784be['handYOffset'];
                            if (_0x3784be['steadying'] && !_0x3784be['building']) {
                                _0x3784be['hands']['add'](_0x3784be['hand1']);
                                _0x3784be['hands']['add'](_0x3784be['hand2']);
                                _0x3784be['hands']['add'](_0x3784be['weapon']);
                                _0x3784be['hand1']['position']['x'] = _0x3784be['handXOffset'] + 0x6;
                                _0x3784be['hand1']['position']['y'] = _0x3784be['handYOffset'] - 0x5;
                                if (_0x3a4184('top' + _0x3784be['weaponSlots'][_0x3784be['selectedWeapon']]['type']) != null) {
                                    if (_0x3784be['weaponSkin'] != '' && _0x10c4b5['indexOf'](_0x3784be['weaponSlots'][_0x3784be['selectedWeapon']]['type']) >= 0x0) {
                                        _0x3784be['weapon']['image'] = _0x36020f(_0x3784be['weaponSkin'], 'top' + _0x3784be['weaponSlots'][_0x3784be['selectedWeapon']]['type']);
                                    } else {
                                        _0x3784be['weapon']['image'] = _0x3a4184('top' + _0x3784be['weaponSlots'][_0x3784be['selectedWeapon']]['type']);
                                    }
                                }
                            } else if (!_0x3784be['building']) {
                                _0x3784be['hands']['add'](_0x3784be['hand1']);
                                _0x3784be['hands']['add'](_0x3784be['weapon']);
                                _0x3784be['hands']['add'](_0x3784be['hand2']);
                                if (_0x3784be['weaponSkin'] != '' && _0x10c4b5['indexOf'](_0x3784be['weaponSlots'][_0x3784be['selectedWeapon']]['type']) >= 0x0) {
                                    _0x3784be['weapon']['image'] = _0x36020f(_0x3784be['weaponSkin'], _0x3784be['weaponSlots'][_0x3784be['selectedWeapon']]['type']);
                                } else {
                                    _0x3784be['weapon']['image'] = _0x3a4184(_0x3784be['weaponSlots'][_0x3784be['selectedWeapon']]['type']);
                                }
                            }
                            if (_0x3784be['building']) {
                                _0x3784be['hands']['add'](_0x3784be['hand1']);
                                _0x3784be['hands']['add'](_0x3784be['hand2']);
                                _0x3784be['hands']['add'](_0x3784be['weapon']);
                                _0x3784be['weapon']['image'] = _0x3a4184('blueprint');
                                _0x3784be['hand2']['position']['x'] = _0x3784be['handXOffset'] - 0x5;
                                _0x3784be['hand1']['position']['x'] = _0x3784be['handXOffset'] - 0x5;
                                _0x3784be['weapon']['position']['x'] = 0x1e;
                                _0x3784be['weapon']['position']['y'] = 0x0;
                                _0x3784be['weapon']['size'] = 0.56;
                                _0x3784be['weapon']['rotation'] = Math['PI'] / 0x2;
                                if (_0x3784be == _0x193f4e['me']) {
                                    _0x18fcd5 = ![];
                                }
                            } else {
                                if (!_0x3784be['healing']) {
                                    _0x3784be['weapon']['position']['x'] = 0x18;
                                    _0x3784be['weapon']['position']['y'] = -0xd;
                                }
                                _0x3784be['weapon']['rotation'] = Math['PI'] / 0x2 + 0.2;
                                _0x3784be['weapon']['size'] = 0x1;
                                _0x3784be['originalWeaponX'] = 0x1c;
                                var _0x5ea8a5 = _0x3784be['weaponSlots'][_0x3784be['selectedWeapon']];
                                if (_0x3784be == _0x193f4e['me']) {
                                    _0x13fb96['text'] = _0x3784be['ammo'][_0x151229[_0x5ea8a5['type']]];
                                    _0x4bc094['text'] = _0x3784be['wAmmo'][_0x3784be['selectedWeapon'] - 0x1];
                                    _0x548f87['image'] = _0x3a4184('inventoryammo' + _0x151229[_0x5ea8a5['type']]);
                                }
                                if (_0x3784be['weaponSlots'][_0x3784be['selectedWeapon']]['type'] == 'bolt') {
                                    if (!_0x3784be['steadying'])
                                        _0x3784be['weapon']['position']['x'] = 0x1e;
                                    else {
                                        _0x3784be['weapon']['position']['y'] = -0x16;
                                        _0x3784be['weapon']['position']['x'] = 0x1a;
                                    }
                                } else if (_0x3784be['weaponSlots'][_0x3784be['selectedWeapon']]['type'] == 'lmg') {
                                    if (!_0x3784be['steadying']) {
                                        _0x3784be['weapon']['position']['x'] = 0x1c;
                                        _0x3784be['weapon']['position']['y'] = -0x9;
                                        _0x3784be['weapon']['rotation'] = Math['PI'] / 0x2 + 0.3;
                                        _0x3784be['weapon']['size'] = 1.1;
                                    }
                                } else if (_0x3784be['weaponSlots'][_0x3784be['selectedWeapon']]['type'] == 'shotgun' || _0x3784be['weaponSlots'][_0x3784be['selectedWeapon']]['type'] == 'heavy' || _0x3784be['weaponSlots'][_0x3784be['selectedWeapon']]['type'] == 'drum') {
                                    if (!_0x3784be['steadying']) {
                                        _0x3784be['weapon']['position']['x'] = 0x1c;
                                        _0x3784be['weapon']['position']['y'] = -0x9;
                                        _0x3784be['weapon']['rotation'] = Math['PI'] / 0x2 + 0.2;
                                        _0x3784be['weapon']['size'] = 1.05;
                                    }
                                } else if (_0x3784be['weaponSlots'][_0x3784be['selectedWeapon']]['type'] == 'smg' || _0x3784be['weaponSlots'][_0x3784be['selectedWeapon']]['type'] == 'ump') {
                                    if (!_0x3784be['steadying']) {
                                        _0x3784be['weapon']['position']['x'] = 0x1c;
                                        _0x3784be['weapon']['position']['y'] = -0x9;
                                        _0x3784be['weapon']['rotation'] = Math['PI'] / 0x2 + 0.2;
                                        _0x3784be['weapon']['size'] = 1.05;
                                    }
                                } else if (_0x3784be['weaponSlots'][_0x3784be['selectedWeapon']]['type'] == 'rpg') {
                                    if (!_0x3784be['steadying']) {
                                        _0x3784be['weapon']['position']['x'] = 0x1c;
                                        _0x3784be['weapon']['size'] = 1.1;
                                        _0x3784be['weapon']['rotation'] = Math['PI'] / 0x2 + 0.3;
                                    }
                                } else if (_0x3784be['weaponSlots'][_0x3784be['selectedWeapon']]['type'] == 'deagle') {
                                    if (!_0x3784be['steadying']) {
                                        _0x3784be['weapon']['position']['x'] = 0x1c;
                                        _0x3784be['weapon']['position']['y'] = 0x0;
                                        _0x3784be['weapon']['rotation'] = Math['PI'] / 0x2 + 0.2;
                                        _0x3784be['weapon']['size'] = 0.7;
                                    }
                                } else if (_0x3784be['weaponSlots'][_0x3784be['selectedWeapon']]['type'] == 'tommy gun') {
                                    if (!_0x3784be['steadying']) {
                                        _0x3784be['weapon']['position']['x'] = 0x1e;
                                        _0x3784be['weapon']['size'] = 1.15;
                                    }
                                } else if (_0x3784be['weaponSlots'][_0x3784be['selectedWeapon']]['type'] == 'heavy sniper') {
                                    if (!_0x3784be['steadying']) {
                                        _0x3784be['weapon']['position']['x'] = 0x1c;
                                        _0x3784be['weapon']['size'] = 1.05;
                                    }
                                } else if (_0x3784be['weaponSlots'][_0x3784be['selectedWeapon']]['type'] == 'mini') {
                                    _0x3784be['hands']['remove'](_0x3784be['weapon']);
                                    _0x3784be['hands']['remove'](_0x3784be['hand2']);
                                    _0x3784be['hands']['remove'](_0x3784be['hand1']);
                                    _0x3784be['hands']['add'](_0x3784be['hand1']);
                                    _0x3784be['hands']['add'](_0x3784be['hand2']);
                                    _0x3784be['hands']['add'](_0x3784be['weapon']);
                                    if (!_0x3784be['healing']) {
                                        _0x3784be['hand1']['position']['x'] = _0x3784be['handXOffset'] - 0x3;
                                        _0x3784be['hand2']['position']['x'] = _0x3784be['handXOffset'] - 0x3;
                                        _0x3784be['weapon']['position']['x'] = 0x1c;
                                    }
                                    _0x3784be['weapon']['position']['y'] = 0x5;
                                    _0x3784be['weapon']['size'] = 0.5;
                                    _0x3784be['weapon']['rotation'] = Math['PI'] / 0x2 - 0.1;
                                    _0x3784be['healRotations'] = 0x2;
                                    if (_0x3784be == _0x193f4e['me'])
                                        _0x18fcd5 = ![];
                                } else if (_0x3784be['weaponSlots'][_0x3784be['selectedWeapon']]['type'] == 'pot') {
                                    _0x3784be['hands']['remove'](_0x3784be['weapon']);
                                    _0x3784be['hands']['remove'](_0x3784be['hand2']);
                                    _0x3784be['hands']['remove'](_0x3784be['hand1']);
                                    _0x3784be['hands']['add'](_0x3784be['hand1']);
                                    _0x3784be['hands']['add'](_0x3784be['hand2']);
                                    _0x3784be['hands']['add'](_0x3784be['weapon']);
                                    if (!_0x3784be['healing']) {
                                        _0x3784be['hand1']['position']['x'] = _0x3784be['handXOffset'] - 0x3;
                                        _0x3784be['hand2']['position']['x'] = _0x3784be['handXOffset'] - 0x3;
                                        _0x3784be['weapon']['position']['x'] = 0x1c;
                                    }
                                    _0x3784be['weapon']['position']['y'] = 0x2;
                                    _0x3784be['weapon']['size'] = 0.5;
                                    _0x3784be['weapon']['rotation'] = Math['PI'] / 0x2 - 0.1;
                                    _0x3784be['healRotations'] = 0x5;
                                    if (_0x3784be == _0x193f4e['me'])
                                        _0x18fcd5 = ![];
                                } else if (_0x3784be['weaponSlots'][_0x3784be['selectedWeapon']]['type'] == 'bandages') {
                                    _0x3784be['hands']['remove'](_0x3784be['weapon']);
                                    _0x3784be['hands']['remove'](_0x3784be['hand2']);
                                    _0x3784be['hands']['remove'](_0x3784be['hand1']);
                                    _0x3784be['hands']['add'](_0x3784be['hand1']);
                                    _0x3784be['hands']['add'](_0x3784be['hand2']);
                                    _0x3784be['hands']['add'](_0x3784be['weapon']);
                                    if (!_0x3784be['healing']) {
                                        _0x3784be['hand1']['position']['x'] = _0x3784be['handXOffset'] - 0x3;
                                        _0x3784be['hand2']['position']['x'] = _0x3784be['handXOffset'] - 0x3;
                                        _0x3784be['weapon']['position']['x'] = 0xf;
                                    }
                                    _0x3784be['originalWeaponX'] = 0xf;
                                    _0x3784be['weapon']['position']['y'] = 0x0;
                                    _0x3784be['weapon']['size'] = 0.5;
                                    _0x3784be['weapon']['rotation'] = Math['PI'] * 0x3 / 0x2 + 0.05;
                                    _0x3784be['healRotations'] = 0x3;
                                    if (_0x3784be == _0x193f4e['me'])
                                        _0x18fcd5 = ![];
                                } else if (_0x3784be['weaponSlots'][_0x3784be['selectedWeapon']]['type'] == 'medkit') {
                                    _0x3784be['hands']['remove'](_0x3784be['weapon']);
                                    _0x3784be['hands']['remove'](_0x3784be['hand2']);
                                    _0x3784be['hands']['remove'](_0x3784be['hand1']);
                                    _0x3784be['hands']['add'](_0x3784be['hand1']);
                                    _0x3784be['hands']['add'](_0x3784be['hand2']);
                                    _0x3784be['hands']['add'](_0x3784be['weapon']);
                                    if (!_0x3784be['healing']) {
                                        _0x3784be['hand1']['position']['x'] = _0x3784be['handXOffset'] - 0x3;
                                        _0x3784be['hand2']['position']['x'] = _0x3784be['handXOffset'] - 0x3;
                                        _0x3784be['weapon']['position']['x'] = 0x1c;
                                    }
                                    _0x3784be['weapon']['position']['y'] = 0x2;
                                    _0x3784be['weapon']['size'] = 0.5;
                                    _0x3784be['weapon']['rotation'] = Math['PI'] / 0x2 - 0.1;
                                    _0x3784be['healRotations'] = 0x5;
                                    if (_0x3784be == _0x193f4e['me'])
                                        _0x18fcd5 = ![];
                                } else if (_0x3784be['weaponSlots'][_0x3784be['selectedWeapon']]['type'] == 'snowball') {
                                    _0x3784be['hands']['remove'](_0x3784be['weapon']);
                                    _0x3784be['hands']['remove'](_0x3784be['hand2']);
                                    _0x3784be['hands']['remove'](_0x3784be['hand1']);
                                    _0x3784be['hands']['add'](_0x3784be['hand1']);
                                    _0x3784be['hands']['add'](_0x3784be['hand2']);
                                    _0x3784be['hands']['add'](_0x3784be['weapon']);
                                    if (!_0x3784be['healing']) {
                                        _0x3784be['hand1']['position']['x'] = _0x3784be['handXOffset'] - 0x3;
                                        _0x3784be['hand2']['position']['x'] = _0x3784be['handXOffset'] - 0x3;
                                        _0x3784be['weapon']['position']['x'] = 0x1b;
                                        _0x3784be['weapon']['position']['y'] = 0x14;
                                    }
                                    _0x3784be['weapon']['size'] = 0.5;
                                    _0x3784be['weapon']['rotation'] = Math['PI'] / 0x2 - 0.1;
                                    _0x3784be['healRotations'] = 0x5;
                                    if (_0x3784be == _0x193f4e['me'])
                                        _0x18fcd5 = ![];
                                }
                            }
                        }
                    }
                }
                _0x3784be['currentWeaponPosition'] = _0x3784be['weapon']['position']['clone']();
                if (_0x3784be['building']) {
                    var _0x29c741 = _0x5eb004(_0x3784be['visual']['rotation']);
                    var _0x1da3ca = 0x6;
                    _0x5b0d5d /= _0x1da3ca;
                    var _0x4e68a4 = _0x5b0d5d;
                    var _0xa9083 = ![];
                    var _0x3229cd = ![];
                    if (_0x29c741 < Math['PI'] / 0x4 || _0x29c741 > Math['PI'] * 0x7 / 0x4) {
                        _0x3784be['buildingPreview']['rotation'] = 0x0;
                        _0x3784be['buildingPreview']['position']['x'] = (Math['round'](_0x3784be['new']['position']['x'] / _0x4e68a4) + 2.5) * _0x5b0d5d;
                        _0x3784be['buildingPreview']['position']['y'] = Math['round'](_0x3784be['new']['position']['y'] / _0x4e68a4) * _0x5b0d5d;
                        _0x3229cd = !![];
                    } else if (_0x29c741 < Math['PI'] * 0x3 / 0x4) {
                        _0x3784be['buildingPreview']['rotation'] = Math['PI'] / 0x2;
                        _0x3784be['buildingPreview']['position']['x'] = Math['round'](_0x3784be['new']['position']['x'] / _0x4e68a4) * _0x5b0d5d;
                        _0x3784be['buildingPreview']['position']['y'] = (Math['round'](_0x3784be['new']['position']['y'] / _0x4e68a4) + 2.5) * _0x5b0d5d;
                        _0xa9083 = !![];
                    } else if (_0x29c741 < Math['PI'] * 0x5 / 0x4) {
                        _0x3784be['buildingPreview']['rotation'] = 0x0;
                        _0x3784be['buildingPreview']['position']['x'] = (Math['round'](_0x3784be['new']['position']['x'] / _0x4e68a4) - 2.5) * _0x5b0d5d;
                        _0x3784be['buildingPreview']['position']['y'] = Math['round'](_0x3784be['new']['position']['y'] / _0x4e68a4) * _0x5b0d5d;
                        _0x3229cd = !![];
                    } else {
                        _0x3784be['buildingPreview']['rotation'] = Math['PI'] / 0x2;
                        _0x3784be['buildingPreview']['position']['x'] = Math['round'](_0x3784be['new']['position']['x'] / _0x4e68a4) * _0x5b0d5d;
                        _0x3784be['buildingPreview']['position']['y'] = (Math['round'](_0x3784be['new']['position']['y'] / _0x4e68a4) - 2.5) * _0x5b0d5d;
                        _0xa9083 = !![];
                    }
                    if (_0xa9083) {
                        _0x3784be['buildingPreview']['position']['x'] += Math['round'](Math['cos'](_0x29c741) * 0x2) * _0x5b0d5d;
                    }
                    if (_0x3229cd) {
                        _0x3784be['buildingPreview']['position']['y'] += Math['round'](Math['sin'](_0x29c741) * 0x2) * _0x5b0d5d;
                    }
                    _0x5b0d5d *= _0x1da3ca;
                }
                if (_0x8dbbf7['stamina'] !== undefined) {
                    _0x3784be['staminaVal'] = _0x8dbbf7['stamina'];
                } else {
                    _0x3784be['staminaVal'] = 0x64;
                }
                if (_0x3784be == _0x193f4e['me']) {
                    _0x3784be['oldSpread'] = _0x3784be['currentSpread'];
                    if (_0x8dbbf7['spread'] !== undefined) {
                        _0x3784be['spread'] = _0x8dbbf7['spread'] / 0x64;
                    }
                    _0x1eeaae['text'] = _0x3784be['name'];
                    _0x44d88c['text'] = _0x3784be['name'];
                }
                if (_0x193f4e['spectating']) { }
                if (_0x3784be == _0x193f4e['me'] && _0x8dbbf7['close'] !== undefined) {
                    if (_0x8dbbf7['closeR'] === undefined) {
                        _0x3784be['hasGroundItem'] = ![];
                    } else if (_0x8dbbf7['close'] != _0x3784be['lastClose'] || _0x8dbbf7['closeR'] != _0x3784be['lastCloseR']) {
                        _0x2b7d44['weaponName']['text'] = _0x8dbbf7['close']['toUpperCase']();
                        _0x2b7d44['weapon']['image'] = _0x3a4184(_0x8dbbf7['close']);
                        _0x2b7d44['weapon']['size'] = 1.4;
                        _0x2b7d44['weapon']['width'] = _0x2b7d44['weapon']['height'] = 0x64;
                        _0x2b7d44['weapon']['rotation'] = Math['PI'] / 0x7;
                        var _0x2e8d2f = 'Press ' + _0x1c63f8('Pickup 1') + '/' + _0x1c63f8('Pickup 2') + ' to ';
                        _0x5de09f['text'] = _0x2e8d2f + 'pick up';
                        if (_0x8dbbf7['close'] == 'mini') {
                            _0x2b7d44['weapon']['size'] = 0x1;
                            _0x2b7d44['weapon']['rotation'] = 0x0;
                            _0x2b7d44['weaponName']['text'] = 'Mini Potion';
                        } else if (_0x8dbbf7['close'] == 'pot') {
                            _0x2b7d44['weapon']['size'] = 0x1;
                            _0x2b7d44['weapon']['rotation'] = 0x0;
                            _0x2b7d44['weaponName']['text'] = 'Potion';
                        } else if (_0x8dbbf7['close'] == 'bandages' || _0x8dbbf7['close'] == 'medkit') {
                            _0x2b7d44['weapon']['size'] = 0x1;
                            _0x2b7d44['weapon']['rotation'] = 0x0;
                        } else if (_0x8dbbf7['close'] == 'chest') {
                            _0x2b7d44['weapon']['size'] = 0.7;
                            _0x2b7d44['weapon']['width'] = 0x96;
                            _0x2b7d44['weapon']['rotation'] = 0x0;
                            _0x5de09f['text'] = _0x2e8d2f + 'open';
                        } else if (_0x8dbbf7['close'] == 'revive') {
                            _0x5de09f['text'] = _0x2e8d2f + 'revive';
                            _0x2b7d44['weapon']['rotation'] = 0x0;
                            _0x2b7d44['weapon']['width'] = _0x2b7d44['weapon']['height'] = 0x78;
                            _0x2b7d44['weapon']['width'] -= 0x4;
                        } else if (_0x8dbbf7['close'] == 'baller') {
                            _0x2b7d44['weapon']['size'] = 1.2;
                            _0x2b7d44['weapon']['rotation'] = 0x0;
                            _0x2b7d44['weapon']['width'] = _0x2b7d44['weapon']['height'] = 0x78;
                            _0x2b7d44['weapon']['width'] -= 0x4;
                            _0x5de09f['text'] = _0x2e8d2f + 'ride';
                        }
                        _0x14bc2d['text'] = _0x5de09f['text'];
                        _0x2b7d44['stroke']['color'] = _0x5785e8[_0x8dbbf7['closeR']]['color'];
                        _0x2ae1f0['opacity'] = 0x0;
                        _0x2b7d44['fill']['color'] = _0x5785e8[_0x8dbbf7['closeR']]['color'];
                        _0x3784be['hasGroundItem'] = !![];
                        _0x3784be['lastClose'] = _0x8dbbf7['close'];
                        _0x3784be['lastCloseR'] = _0x8dbbf7['closeR'];
                        _0x2b7d44['weaponNameStroke']['text'] = _0x2b7d44['weaponName']['text'];
                        _0x58397f();
                    } else {
                        _0x3784be['hasGroundItem'] = !![];
                    }
                }
                var _0x50f568 = _0x3f3ac9(_0x3784be['actualNew']['position'], _0x3784be['actualOld']['position']);
                if (_0x3784be['newJump'] <= 0x0) {
                    _0x3784be['timeUntilSound'] -= _0x50f568;
                } else {
                    _0x3784be['timeUntilSound'] = 0x1;
                }
                if (_0x3784be['timeUntilSound'] <= 0x0 && _0x3784be['isPreview'] === undefined && !_0x3784be['inVehicle']) {
                    if (_0x3784be['house'] < 0x0 && _0x5f37fb) {
                        _0x35c7e2('christmasstep' + Math['floor'](Math['random']() * _0x52872f), _0x193f4e['me']['visual']['position'], _0x3784be['visual']['position']);
                        _0x3784be['timeUntilSound'] = 0x96;
                    } else {
                        _0x35c7e2('step' + Math['floor'](Math['random']() * _0x52872f), _0x193f4e['me']['visual']['position'], _0x3784be['visual']['position']);
                        _0x3784be['timeUntilSound'] = 0x64;
                    }
                }
                if (_0x8dbbf7['needAmmo'] !== undefined && _0x8dbbf7['needAmmo'] && _0x193f4e['me']['team'] !== undefined) {
                    if (_0x193f4e['me']['team']['length'] > 0x0 && _0x3784be['selectedWeapon'] != 0x0 && (_0x3784be == _0x193f4e['me'] || _0x193f4e['me']['team']['indexOf'](_0x3784be) != -0x1) && _0x151229[_0x3784be['weaponSlots'][_0x3784be['selectedWeapon']]['type']] <= 0x3) {
                        _0x3784be['speechTimer'] = 0xf;
                        _0x3784be['speechAmmo']['image'] = _0x3a4184('stack' + _0x151229[_0x3784be['weaponSlots'][_0x3784be['selectedWeapon']]['type']]);
                    }
                }
                if (_0x8dbbf7['needAmmo'] !== undefined && _0x8dbbf7['needAmmo'] && _0x3784be['selectedWeapon'] != 0x0 && _0x193f4e['me']['infected'] != -0x1 && _0x193f4e['me']['infected'] == _0x3784be['infected'] && _0x151229[_0x3784be['weaponSlots'][_0x3784be['selectedWeapon']]['type']] <= 0x3) {
                    _0x3784be['speechTimer'] = 0xf;
                    _0x3784be['speechAmmo']['image'] = _0x3a4184('stack' + _0x151229[_0x3784be['weaponSlots'][_0x3784be['selectedWeapon']]['type']]);
                }
            }, function (_0x3d6b0e, _0x514e41) {
                if (!_0x3d6b0e['dead']) {
                    if (_0x1b0d09['length'] == 0x0) {
                        _0x3d6b0e['oldPlayerCanvas'] = document['createElement']('canvas');
                    } else {
                        _0x3d6b0e['oldPlayerCanvas'] = _0x1b0d09[0x0];
                        _0x1b0d09['splice'](0x0, 0x1);
                        _0x3d6b0e['oldPlayerCanvas']['getContext']('2d')['setTransform'](0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
                        var _0x4ba967 = _0x3d6b0e['oldPlayerCanvas']['width'];
                        _0x3d6b0e['oldPlayerCanvas']['getContext']('2d')['clearRect'](-0x1, -0x1, _0x4ba967, _0x4ba967);
                    }
                    var _0x2bd36b = 0x12c;
                    var _0x148ede = new _0x193f4e['image'](_0x3d6b0e['oldPlayerCanvas'], 0x0, 0x0, _0x2bd36b, _0x2bd36b, 0x0);
                    _0x3d6b0e['oldPlayerCanvas']['width'] = _0x2bd36b;
                    _0x3d6b0e['oldPlayerCanvas']['height'] = _0x2bd36b;
                    var _0x49b5fb = _0x3d6b0e['oldPlayerCanvas']['getContext']('2d');
                    _0x49b5fb['globalAlpha'] = 0x1;
                    _0x49b5fb['setTransform'](0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
                    _0x49b5fb['translate'](_0x2bd36b / 0x2, _0x2bd36b / 0x2);
                    _0x3d6b0e['sprite']['render'](_0x49b5fb, 0x1, 0x1);
                    _0x3d6b0e['sprite']['belowObjects'] = [];
                    _0x3d6b0e['sprite']['objects'] = [new _0x193f4e['object']()];
                    _0x3d6b0e['sprite']['add'](_0x148ede);
                    if (_0x3d6b0e['buildingPreview']['parent'] != null) {
                        _0x3d6b0e['buildingPreview']['parent']['remove'](_0x3d6b0e['buildingPreview']);
                        _0x3d6b0e['done'] = !![];
                    }
                    if (_0x514e41['hLost'] !== undefined) {
                        var _0x201eca = new _0x193f4e['object']();
                        _0x201eca['position']['x'] = (Math['random']() * 0x2 - 0x1) * 0x1e;
                        _0x201eca['position']['y'] = (Math['random']() * 0x2 - 0x1) * 0xf - 0x3c;
                        _0x201eca['original'] = {
                            'x': _0x201eca['position']['x'],
                            'y': _0x201eca['position']['y']
                        };
                        _0x201eca['t'] = 0x1;
                        var _0x493d8c = new _0x193f4e['strokeText'](_0x514e41['hLost'], 0x0, 0x0, '#444', 'Arial Black', 0x19, 'bold', 0x1, 'center');
                        _0x493d8c['lineWidth'] = 0x4;
                        _0x201eca['add'](_0x493d8c);
                        _0x201eca['add'](new _0x193f4e['text'](_0x514e41['hLost'], 0x0, 0x0, '#FFF', 'Arial Black', 0x19, 'bold', 0x1, 'center'));
                        _0x3d6b0e['damages']['push'](_0x201eca);
                        _0x4d0080['add'](_0x201eca);
                    }
                    _0x3d6b0e['dead'] = !![];
                }
                return !![];
            });
            var _0x559785 = [];
            function _0x5624d6(_0x840711) {
                for (var _0x5157c2 = 0x0; _0x5157c2 <= _0x559785['length']; _0x5157c2++) {
                    if (_0x5157c2 == _0x559785['length']) {
                        _0x559785[_0x5157c2] = new _0x193f4e['polygon'](0x0, 0x0, [new _0x193f4e['Vector2'](0x0, _0x840711), new _0x193f4e['Vector2'](-0x96, 0x0), new _0x193f4e['Vector2'](0x0, -_0x840711)], '#FFF');
                        _0x559785[_0x5157c2]['using'] = ![];
                    }
                    if (!_0x559785[_0x5157c2]['using']) {
                        var _0x16e559 = _0x559785[_0x5157c2];
                        _0x16e559['points'][0x0]['y'] = _0x840711;
                        _0x16e559['points'][0x2]['y'] = -_0x840711;
                        _0x16e559['points'][0x1]['x'] = -0x96;
                        _0x16e559['using'] = !![];
                        return _0x16e559;
                    }
                }
            }
            var _0x348c6d = [];
            function _0x2bfe44() {
                for (var _0x13a122 = 0x0; _0x13a122 <= _0x348c6d['length']; _0x13a122++) {
                    if (_0x13a122 == _0x348c6d['length']) {
                        _0x348c6d[_0x13a122] = new _0x193f4e['image'](_0x3a4184('bullet'), 0x0, 0x0, 0xa, 0x28);
                        _0x348c6d[_0x13a122]['using'] = ![];
                    }
                    if (!_0x348c6d[_0x13a122]['using']) {
                        var _0x35d6db = _0x348c6d[_0x13a122];
                        _0x35d6db['using'] = !![];
                        _0x35d6db['parent'] = null;
                        return _0x35d6db;
                    }
                }
            }
            _0x193f4e['addType']('bullet', function (_0x6f9b60, _0x126490) {
                _0x6f9b60['bulletType'] = _0x126490['bulletType'];
                _0x6f9b60['visual'] = new _0x193f4e['object']();
                _0x6f9b60['trail'] = new _0x193f4e['object']();
                _0x6f9b60['done'] = ![];
                _0x6f9b60['tlength'] = 0x32;
                var _0x35ebff;
                var _0x177fee = 0x5;
                switch (_0x6f9b60['bulletType']) {
                    case 'shotgun':
                    case 'heavy':
                    case 'drum':
                    case 'combat':
                        _0x35ebff = new _0x193f4e['image'](_0x3a4184('shotgunbullet'), 0x0, 0x0, 0xa, 0xa);
                        _0x177fee = 0x5;
                        if (_0x6f9b60['bulletType'] == 'shotgun') {
                            if (_0x401a87 > 0x0 && _0x6f9b60['isPreview'] === undefined) {
                                _0x35c7e2(_0x6f9b60['bulletType'], _0x193f4e['me']['visual']['position'], new _0x193f4e['Vector2'](_0x126490['x'], _0x126490['y']));
                                _0x401a87 = 0x0;
                            }
                        } else {
                            if (_0x549484 > 0x0 && _0x6f9b60['isPreview'] === undefined) {
                                _0x35c7e2(_0x6f9b60['bulletType'], _0x193f4e['me']['visual']['position'], new _0x193f4e['Vector2'](_0x126490['x'], _0x126490['y']));
                                _0x549484 = 0x0;
                            }
                        }
                        _0x35ebff['rotation'] = Math['PI'] / 0x2;
                        break;
                    case 'snowball':
                        _0x35ebff = new _0x193f4e['image'](_0x3a4184('snowball'), 0x0, 0x0, 0x3c, 0x3c);
                        _0x177fee = 0x4;
                        var _0xbc895 = _0x6f9b60['bulletType'];
                        if (_0x212f1f['indexOf'](_0xbc895) < 0x0) {
                            _0xbc895 = 'ar';
                        }
                        if (_0x6f9b60['isPreview'] === undefined) {
                            _0x35c7e2(_0xbc895, _0x193f4e['me']['visual']['position'], new _0x193f4e['Vector2'](_0x126490['x'], _0x126490['y']));
                        }
                        _0x35ebff['rotation'] = Math['PI'] / 0x2;
                        _0x6f9b60['ticksAlive'] = 0x0;
                        break;
                        break;
                    case 'rpg':
                        _0x35ebff = new _0x193f4e['image'](_0x3a4184('rocket'), 0x0, 0x0, 0xa0, 0xa0);
                        _0x177fee = 0x5;
                        if (_0x6f9b60['isPreview'] === undefined) {
                            _0x35c7e2('explosion0', _0x193f4e['me']['visual']['position'], new _0x193f4e['Vector2'](_0x126490['x'], _0x126490['y']));
                        }
                        _0x35ebff['rotation'] = Math['PI'];
                        _0x6f9b60['ticksAlive'] = 0x0;
                        _0x6f9b60['t'] = 0x0;
                        _0x6f9b60['explosion'] = new _0x193f4e['object']();
                        _0x6f9b60['ring'] = new _0x193f4e['arc'](0x0, 0x0, 0x64, '#AAA', Math['PI'] * 0x2, 0x0, 0x50);
                        _0x6f9b60['explosion']['add'](_0x6f9b60['ring']);
                        _0x6f9b60['particles'] = 0x3;
                        _0x6f9b60['particleArray'] = [];
                        _0x6f9b60['particleContainer'] = new _0x193f4e['object']();
                        _0x6f9b60['explosion']['add'](_0x6f9b60['particleContainer']);
                        var _0x5444a7 = 0xa0;
                        var _0x17c0e6 = new _0x193f4e['image'](_0x4c3718, 0x0, 0x0, _0x5444a7, _0x5444a7, 0.6);
                        _0x6f9b60['particleArray']['push'](_0x17c0e6);
                        for (var _0x3141e7 = 0x0; _0x3141e7 < _0x6f9b60['particles']; _0x3141e7++) {
                            var _0x1c2b09 = new _0x193f4e['object']();
                            _0x17c0e6['parent'] = null;
                            _0x1c2b09['add'](_0x17c0e6);
                            _0x1c2b09['rotation'] = Math['PI'] * 0x2 / _0x6f9b60['particles'] * _0x3141e7 + Math['random']() * Math['PI'] * 0x2 / _0x6f9b60['particles'] * 0.5;
                            _0x1c2b09['size'] = Math['random']() * 0.2 + 0x1;
                            _0x6f9b60['particleContainer']['addBelow'](_0x1c2b09);
                        }
                        _0x17c0e6['rotation'] = Math['random']() * Math['PI'] * 0x2;
                        _0x6f9b60['particles'] = 0x5;
                        _0x5444a7 = 0x82;
                        _0x17c0e6 = new _0x193f4e['image'](_0xba1780, 0x0, 0x0, _0x5444a7, _0x5444a7, 0.6);
                        _0x6f9b60['particleArray']['push'](_0x17c0e6);
                        for (var _0x3141e7 = 0x0; _0x3141e7 < _0x6f9b60['particles']; _0x3141e7++) {
                            var _0x1c2b09 = new _0x193f4e['object']();
                            _0x17c0e6['parent'] = null;
                            _0x1c2b09['add'](_0x17c0e6);
                            _0x1c2b09['rotation'] = Math['PI'] * 0x2 / _0x6f9b60['particles'] * _0x3141e7 + Math['PI'] / _0x6f9b60['particles'] + Math['random']() * Math['PI'] * 0x2 / _0x6f9b60['particles'] * 0.5;
                            _0x1c2b09['size'] = Math['random']() * 0.2 + 0x1;
                            _0x6f9b60['particleContainer']['addBelow'](_0x1c2b09);
                        }
                        _0x17c0e6['rotation'] = Math['random']() * Math['PI'] * 0x2;
                        _0x6f9b60['particles'] = 0x8;
                        _0x5444a7 = 0x64;
                        _0x17c0e6 = new _0x193f4e['image'](_0x17b697, 0x0, 0x0, _0x5444a7, _0x5444a7, 0.6);
                        _0x6f9b60['particleArray']['push'](_0x17c0e6);
                        for (var _0x3141e7 = 0x0; _0x3141e7 < _0x6f9b60['particles']; _0x3141e7++) {
                            var _0x1c2b09 = new _0x193f4e['object']();
                            _0x17c0e6['parent'] = null;
                            _0x1c2b09['add'](_0x17c0e6);
                            _0x1c2b09['rotation'] = Math['PI'] * 0x2 / _0x6f9b60['particles'] * _0x3141e7 + Math['random']() * Math['PI'] * 0x2 / _0x6f9b60['particles'] * 0.5;
                            _0x1c2b09['size'] = Math['random']() * 0.2 + 0x1;
                            _0x6f9b60['particleContainer']['addBelow'](_0x1c2b09);
                        }
                        _0x17c0e6['rotation'] = Math['random']() * Math['PI'] * 0x2;
                        _0x5444a7 = 0x64;
                        _0x6f9b60['particles'] = 0xa;
                        _0x17c0e6 = new _0x193f4e['image'](_0x22bb5b, 0x0, 0x0, _0x5444a7, _0x5444a7, 0.6);
                        _0x6f9b60['particleArray']['push'](_0x17c0e6);
                        for (var _0x3141e7 = 0x0; _0x3141e7 < _0x6f9b60['particles']; _0x3141e7++) {
                            var _0x1c2b09 = new _0x193f4e['object']();
                            _0x17c0e6['parent'] = null;
                            _0x1c2b09['add'](_0x17c0e6);
                            _0x1c2b09['rotation'] = Math['PI'] * 0x2 / _0x6f9b60['particles'] * _0x3141e7 + Math['PI'] / _0x6f9b60['particles'] + Math['random']() * Math['PI'] * 0x2 / _0x6f9b60['particles'] * 0.5;
                            _0x1c2b09['size'] = Math['random']() * 0.3 + 0.9;
                            _0x6f9b60['particleContainer']['addBelow'](_0x1c2b09);
                        }
                        _0x17c0e6['rotation'] = Math['random']() * Math['PI'] * 0x2;
                        _0x6f9b60['line'] = new _0x193f4e['rectangle'](0x0, 0x64, 0x8, 0x8c, '#FFF', 0.4);
                        _0x6f9b60['lines'] = 0xa;
                        for (var _0x3141e7 = 0x0; _0x3141e7 < _0x6f9b60['lines']; _0x3141e7++) {
                            var _0x106ff5 = new _0x193f4e['object']();
                            _0x6f9b60['line']['parent'] = null;
                            _0x106ff5['add'](_0x6f9b60['line']);
                            _0x106ff5['rotation'] = 0x2 * Math['PI'] / _0x6f9b60['lines'] * _0x3141e7 + Math['random']() * Math['PI'] * 0x2 / _0x6f9b60['lines'] * 0.3;
                            _0x106ff5['size'] = 0x1 - Math['random']() * 0.2;
                            _0x6f9b60['explosion']['add'](_0x106ff5);
                        }
                        _0x6f9b60['visual']['add'](_0x6f9b60['explosion']);
                        _0x6f9b60['explosion']['opacity'] = 0x0;
                        _0x6f9b60['explosion']['size'] = 0.8;
                        _0x6f9b60['exploded'] = ![];
                        break;
                        break;
                    default:
                        _0x35ebff = _0x2bfe44();
                        _0x177fee = 0x4;
                        var _0xbc895 = _0x6f9b60['bulletType'];
                        if (_0xbc895 == 'scoped ar') {
                            _0xbc895 = 'scoped-ar';
                        }
                        if (_0x212f1f['indexOf'](_0xbc895) < 0x0) {
                            _0xbc895 = 'ar';
                        }
                        if (_0x6f9b60['isPreview'] === undefined) {
                            _0x35c7e2(_0xbc895, _0x193f4e['me']['visual']['position'], new _0x193f4e['Vector2'](_0x126490['x'], _0x126490['y']));
                        }
                        _0x35ebff['rotation'] = Math['PI'] / 0x2;
                        break;
                }
                _0x6f9b60['visual']['add'](_0x35ebff);
                _0x6f9b60['trail'] = _0x5624d6(_0x177fee);
                _0x6f9b60['trail']['opacity'] = 0x0;
                _0x6f9b60['bullet'] = _0x35ebff;
                _0x6f9b60['visual']['addBelow'](_0x6f9b60['trail']);
                _0x227276['addBelow'](_0x6f9b60['visual']);
                if (_0x6f9b60['bulletType'] == 'snowball') {
                    _0x227276['remove'](_0x6f9b60['visual']);
                    _0x227276['add'](_0x6f9b60['visual']);
                }
                if (_0x126490['pi'] == _0x193f4e['me']['id'] && !_0x193f4e['spectating'] && (_0x6f9b60['bulletType'] == 'sniper' || _0x6f9b60['bulletType'] == 'shotgun' || _0x6f9b60['bulletType'] == 'heavy' || _0x6f9b60['bulletType'] == 'drum')) {
                    _0x5f3187['shake'](0xf, _0x193f4e['me']['actualRotation'] + Math['PI']);
                }
            }, function (_0x3cdd7c) {
                if (_0x3cdd7c['bulletType'] == 'rpg') {
                    _0x3cdd7c['trail']['opacity'] = 0x0;
                    _0x3cdd7c['ticksAlive']++;
                    if (!_0x3cdd7c['done'] && _0x3cdd7c['ticksAlive'] % 0x2 == 0x0) {
                        var _0x4cc0be = 0.8;
                        var _0x54331c = Math['floor'](Math['random']() * 0x2);
                        var _0x18e290 = 0xf;
                        _0x18e290 = 0x0;
                        var _0x3cc47a = _0x18e290 / 0x2;
                        var _0x483ebe = 0x9;
                        var _0x60a3b4 = 0x0;
                        var _0x3b7b33 = _0x483ebe + Math['random']() * _0x60a3b4;
                        _0x529676['add'](new _0x193f4e['customParticle'](new _0x193f4e['image'](_0x3a4184('smoke' + _0x54331c), _0x3cdd7c['visual']['position']['x'] + Math['random']() * _0x18e290 - _0x3cc47a, _0x3cdd7c['visual']['position']['y'] + Math['random']() * _0x18e290 - _0x3cc47a, _0x3b7b33, _0x3b7b33, _0x4cc0be), (Math['floor'](Math['random']() * 0x2) - 0.5) * 0.07, 1.2, 0x0, 0x0, -0x7, -0x7));
                    }
                } else if (_0x3cdd7c['bulletType'] == 'snowball') {
                    _0x3cdd7c['trail']['opacity'] = 0x0;
                    var _0x23dfb1 = _0x193f4e['lerp'](_0x3cdd7c['ticksAlive'] - 0x1, _0x3cdd7c['ticksAlive']);
                    var _0x187a07 = 0xc / 0x2;
                    var _0x4f953d = 0x0;
                    _0x4f953d = -(_0x23dfb1 - _0x187a07) * (_0x23dfb1 - _0x187a07);
                    _0x4f953d /= _0x187a07;
                    _0x4f953d += _0x187a07;
                    _0x4f953d /= _0x187a07;
                    _0x4f953d += 0x1;
                    _0x3cdd7c['bullet']['size'] = _0x4f953d;
                } else {
                    if (_0x3cdd7c['trail']['opacity'] < 0.3) {
                        _0x3cdd7c['trail']['opacity'] += _0x193f4e['clientDetails']['dt'] / 0x32;
                    } else {
                        _0x3cdd7c['trail']['opacity'] = 0.3;
                    }
                    if (_0x3cdd7c['tlength'] < 0x96) {
                        _0x3cdd7c['tlength'] += _0x193f4e['clientDetails']['dt'] * 0xa;
                    } else {
                        _0x3cdd7c['tlength'] = 0x96;
                    }
                    _0x3cdd7c['trail']['points'][0x1]['x'] = -_0x3cdd7c['tlength'];
                }
                if (_0x3cdd7c['done']) {
                    if (_0x3cdd7c['bulletType'] == 'rpg' && _0x3cdd7c['exploded']) {
                        _0x3cdd7c['new']['position']['x'] = _0x3cdd7c['visual']['position']['x'];
                        _0x3cdd7c['new']['position']['y'] = _0x3cdd7c['visual']['position']['y'];
                        _0x3cdd7c['explosion']['opacity'] = 0x1;
                        _0x3cdd7c['t'] += 0.03 * _0x193f4e['clientDetails']['dt'];
                        var _0x49d3ec = _0x3cdd7c['t'];
                        var _0x2d7faa = Math['sqrt'](_0x49d3ec * 0x4);
                        _0x3cdd7c['bullet']['opacity'] -= 0.17 * _0x193f4e['clientDetails']['dt'];
                        _0x3cdd7c['ring']['radius'] = 0x50 + 0x82 * _0x49d3ec;
                        _0x3cdd7c['ring']['lineWidth'] = 0x3c + 0x1e * _0x49d3ec;
                        _0x3cdd7c['ring']['opacity'] = Math['max'](0.4 * (0x1 - _0x49d3ec) - 0.14, 0x0);
                        _0x3cdd7c['line']['position']['y'] = _0x3cdd7c['line']['height'] / 0x2 + 0xc8 * _0x49d3ec;
                        _0x3cdd7c['line']['opacity'] = 0.4 * (0x1 - _0x49d3ec);
                        for (var _0x465a39 = 0x0; _0x465a39 < _0x3cdd7c['particleArray']['length']; _0x465a39++) {
                            _0x3cdd7c['particleArray'][_0x465a39]['position']['y'] = 0x1e * _0x465a39 + 0x22 * _0x2d7faa / 0x2 * (_0x465a39 + 0x2);
                            _0x3cdd7c['particleArray'][_0x465a39]['opacity'] = (0x1 - _0x2d7faa / 0x2) * Math['max']((_0x3cdd7c['particleArray']['length'] - 0x1) / 0x2 + 0.5, 0x1);
                            if (_0x465a39 == 0x0) {
                                _0x3cdd7c['particleArray'][_0x465a39]['opacity'] *= 0.6;
                            }
                        }
                        if (_0x3cdd7c['t'] >= 0x1) {
                            for (var _0x465a39 = 0x0; _0x465a39 < _0x193f4e['objects']['length']; _0x465a39++) {
                                if (_0x193f4e['objects'][_0x465a39]['id'] == _0x3cdd7c['id']) {
                                    if (_0x193f4e['objects'][_0x465a39]['visual']['parent'] != null)
                                        _0x193f4e['objects'][_0x465a39]['visual']['parent']['remove'](_0x193f4e['objects'][_0x465a39]['visual']);
                                    _0x193f4e['objects']['splice'](_0x465a39, 0x1);
                                }
                            }
                        }
                    } else {
                        _0x3cdd7c['visual']['opacity'] -= 0.17 * _0x193f4e['clientDetails']['dt'];
                        if (_0x3cdd7c['visual']['opacity'] <= 0x0) {
                            _0x3cdd7c['trail']['parent'] = null;
                            _0x3cdd7c['trail']['using'] = ![];
                            _0x3cdd7c['bullet']['using'] = ![];
                            for (var _0x465a39 = 0x0; _0x465a39 < _0x193f4e['objects']['length']; _0x465a39++) {
                                if (_0x193f4e['objects'][_0x465a39]['id'] == _0x3cdd7c['id']) {
                                    if (_0x193f4e['objects'][_0x465a39]['visual']['parent'] != null)
                                        _0x193f4e['objects'][_0x465a39]['visual']['parent']['remove'](_0x193f4e['objects'][_0x465a39]['visual']);
                                    _0x193f4e['objects']['splice'](_0x465a39, 0x1);
                                }
                            }
                        }
                    }
                }
            }, function (_0x25f0aa) {
                if (_0x25f0aa['bulletType'] == 'snowball') {
                    _0x25f0aa['ticksAlive']++;
                }
            }, function (_0x52f260, _0x4450f7) {
                _0x52f260['old']['position'] = _0x52f260['visual']['position']['clone']();
                _0x52f260['old']['rotation'] = _0x52f260['visual']['rotation'];
                _0x52f260['actualOld']['position'] = _0x52f260['visual']['position']['clone']();
                _0x52f260['actualOld']['rotation'] = _0x52f260['visual']['rotation'];
                if (_0x4450f7['p'] !== undefined) {
                    _0x52f260['new']['position'] = new _0x193f4e['Vector2'](_0x4450f7['p'][0x0], _0x4450f7['p'][0x1]);
                }
                if (_0x52f260['bulletType'] == 'rpg' && !_0x52f260['done'] && _0x4450f7['exploded'] !== undefined && _0x4450f7['exploded'] == !![]) {
                    _0x52f260['exploded'] = !![];
                    _0x35c7e2('explosion1', _0x193f4e['me']['visual']['position'], new _0x193f4e['Vector2'](_0x52f260['visual']['position']['x'], _0x52f260['visual']['position']['y']));
                }
                _0x52f260['done'] = !![];
                return !![];
            });
            var _0x1f452c = [];
            for (var _0x3192cf = 0x0; _0x3192cf < _0x5785e8['length']; _0x3192cf++) {
                var _0x38bea8 = {};
                _0x38bea8['visual'] = new _0x193f4e['object']();
                _0x38bea8['shine'] = new _0x193f4e['image'](_0x3a4184('gridshine'), 0x0, 0x0, 0xaa, 0xaa, 0.55);
                _0x38bea8['shine']['width'] = _0x38bea8['shine']['height'] = 0x7e;
                _0x38bea8['visual']['addBelow'](_0x38bea8['shine']);
                _0x38bea8['done'] = ![];
                _0x38bea8['bg'] = new _0x193f4e['object']();
                _0x38bea8['bg']['add'](new _0x193f4e['circle'](0x0, 0x0, 0x4b / 0x2 + 0x3, _0x5785e8[_0x3192cf]['color'], 0.3));
                var _0x11430e = new _0x193f4e['arc'](0x0, 0x0, 0x4b / 0x2, _0x5785e8[_0x3192cf]['color'], 0x2 * Math['PI'], 0x0, 0x6);
                _0x11430e['opacity'] = 0.5;
                _0x11430e['add'](new _0x193f4e['arc'](0x0, 0x0, 0x4b / 0x2 + 0x4, '#000', 0x2 * Math['PI'], 0x0, 0x1));
                _0x38bea8['bg']['add'](_0x11430e);
                _0x38bea8['visual']['addBelow'](_0x38bea8['bg']);
                var _0x2b6f88 = 0xc8;
                var _0x40d819 = document['createElement']('canvas');
                _0x40d819['width'] = _0x40d819['height'] = _0x2b6f88;
                var _0x2d2b85 = _0x40d819['getContext']('2d');
                _0x2d2b85['translate'](_0x2b6f88 / 0x2, _0x2b6f88 / 0x2);
                _0x38bea8['visual']['render'](_0x2d2b85, 0x64 / _0x2b6f88, 0x1);
                _0x1f452c['push'](_0x40d819);
                _0x40d819['color'] = _0x5785e8[_0x3192cf]['color'];
            }
            var _0x3e5cc1 = 0x0;
            var _0x390098 = 0x0;
            _0x193f4e['addType']('gun', function (_0x52eedf, _0x22d798) {
                _0x52eedf['extraRotationTicks'] = 0x0;
                _0x52eedf['visual'] = new _0x193f4e['object']();
                _0x52eedf['visual']['opacity'] = 0x0;
                _0x52eedf['rarity'] = _0x22d798['rarity'];
                _0x52eedf['oldRarity'] = _0x22d798['rarity'];
                _0x52eedf['particleAngle'] = 0x0;
                _0x52eedf['gun'] = new _0x193f4e['image'](_0x3a4184(_0x22d798['gunType']), -0x3, 0x5, 0x6e, 0x6e);
                _0x52eedf['gun']['rotation'] = Math['PI'] / 0x7;
                if (_0x22d798['gunType'] == 'mini' || _0x22d798['gunType'] == 'pot' || _0x22d798['gunType'] == 'bandages' || _0x22d798['gunType'] == 'medkit') {
                    _0x52eedf['gun']['size'] = 0.4;
                    _0x52eedf['gun']['rotation'] = 0x0;
                    if (_0x22d798['gunType'] == 'mini' || _0x22d798['gunType'] == 'pot') {
                        _0x52eedf['gun']['position']['y'] = -0x2;
                        _0x52eedf['gun']['position']['x'] = 0.6;
                    } else {
                        _0x52eedf['gun']['position']['x'] = 0x0;
                        _0x52eedf['gun']['position']['y'] = 0x0;
                        _0x52eedf['gun']['size'] = 0.5;
                    }
                }
                if (_0x22d798['gunType'] == 'snowball') {
                    _0x52eedf['gun']['size'] = 0.65;
                    _0x52eedf['gun']['position']['y'] = -0.5;
                    _0x52eedf['gun']['position']['x'] = 0x1;
                }
                if (_0x22d798['gunType'] == 'deagle') {
                    _0x52eedf['gun']['size'] = 0.6;
                }
                _0x52eedf['visual']['add'](_0x52eedf['gun']);
                _0x52eedf['bg'] = new _0x193f4e['image'](_0x1f452c[_0x22d798['rarity']], 0x0, 0x0, 0x64, 0x64);
                _0x52eedf['visual']['addBelow'](_0x52eedf['bg']);
                _0x52eedf['ticksSinceParticles'] = 0x0;
                _0x52eedf['particleSpawnTick'] = 0xa;
                if (_0x52eedf['rarity'] == 0x4) {
                    _0x52eedf['particleSpawnTick'] = 0x6;
                }
                _0x529676['add'](_0x52eedf['visual']);
            }, function (_0x308062) {
                _0x308062['extraRotationTicks'] += _0x193f4e['clientDetails']['dt'] / 0xf;
                var _0x2450a9 = _0x390098;
                _0x308062['gun']['width'] = _0x308062['gun']['height'] = -_0x2450a9 * 0x6 + 0x6e;
                _0x308062['bg']['size'] = _0x2450a9 * 0.02 + 0.8;
                if (_0x308062['done']) {
                    _0x308062['visual']['opacity'] -= 0.07 * _0x193f4e['clientDetails']['dt'];
                    if (_0x308062['visual']['opacity'] <= 0x0) {
                        for (var _0xc236f2 = 0x0; _0xc236f2 < _0x193f4e['objects']['length']; _0xc236f2++) {
                            if (_0x193f4e['objects'][_0xc236f2]['id'] == _0x308062['id']) {
                                if (_0x193f4e['objects'][_0xc236f2]['visual']['parent'] != null)
                                    _0x193f4e['objects'][_0xc236f2]['visual']['parent']['remove'](_0x193f4e['objects'][_0xc236f2]['visual']);
                                _0x193f4e['objects']['splice'](_0xc236f2, 0x1);
                            }
                        }
                    }
                } else if (_0x308062['visual']['opacity'] < 0x1) {
                    _0x308062['visual']['opacity'] += 0.07 * _0x193f4e['clientDetails']['dt'];
                    _0x308062['visual']['opacity'] = Math['min'](_0x308062['visual']['opacity'], 0x1);
                }
                _0x308062['ticksSinceParticles'] += _0x193f4e['clientDetails']['dt'];
                if (_0x308062['ticksSinceParticles'] > _0x308062['particleSpawnTick']) {
                    var _0x40b0c2 = new _0x193f4e['polygon'](0x0, 0x0, [new _0x193f4e['Vector2'](-0x32, 0x28), new _0x193f4e['Vector2'](0x0, -0x28), new _0x193f4e['Vector2'](0x32, 0x28)], _0x3db2c8(_0x5785e8[_0x308062['rarity']]['color'], 0x6));
                    if (_0x40b0c2['color']['length'] != 0x7) {
                        _0x40b0c2['color'] = _0x5785e8[_0x308062['rarity']]['color'];
                    }
                    _0x40b0c2['size'] = 0.4;
                    _0x40b0c2['opacity'] = 0.7;
                    _0x40b0c2['shouldStroke'] = !![];
                    _0x40b0c2['strokeColor'] = _0x3db2c8(_0x5785e8[_0x308062['rarity']]['color'], 0x2);
                    if (_0x40b0c2['strokeColor']['length'] != 0x7) {
                        _0x40b0c2['strokeColor'] = _0x40b0c2['color'];
                    }
                    _0x40b0c2['lineWidth'] = 0xd;
                    _0x308062['particleAngle'] += 1.8;
                    var _0x2bbe94 = 0.6 * 0xa / _0x308062['particleSpawnTick'];
                    var _0x395d6a = new _0x193f4e['customParticle'](_0x40b0c2, (Math['floor'](Math['random']() * 0x2) - 0.5) * 0.04, 0.35, Math['cos'](_0x308062['particleAngle']) * _0x2bbe94, Math['sin'](_0x308062['particleAngle']) * _0x2bbe94);
                    if (_0x308062['rarity'] == 0x3) {
                        _0x395d6a['opacityThreshold'] = 0.1;
                    }
                    _0x308062['bg']['add'](_0x395d6a);
                    _0x308062['ticksSinceParticles'] = 0x0;
                }
            }, function (_0x4a2f4e, _0x3501ab) { }, function (_0x38eac9) {
                _0x38eac9['done'] = !![];
                return !![];
            });
            var _0xf143c3;
            for (var _0x3192cf = 0x0; _0x3192cf < 0x1; _0x3192cf++) {
                var _0x38bea8 = {};
                _0x38bea8['visual'] = new _0x193f4e['object']();
                _0x38bea8['shine'] = new _0x193f4e['image'](_0x3a4184('gridshine'), 0x0, 0x0, 0xaa, 0xaa, 0.55);
                _0x38bea8['shine']['width'] = _0x38bea8['shine']['height'] = 0x7e;
                _0x38bea8['visual']['addBelow'](_0x38bea8['shine']);
                _0x38bea8['done'] = ![];
                _0x38bea8['bg'] = new _0x193f4e['object']();
                _0x38bea8['bg']['add'](new _0x193f4e['circle'](0x0, 0x0, 0x46 / 0x2 + 0x3, _0x5785e8[_0x3192cf]['color'], 0.3));
                var _0x11430e = new _0x193f4e['arc'](0x0, 0x0, 0x46 / 0x2, _0x5785e8[_0x3192cf]['color'], 0x2 * Math['PI'], 0x0, 0x6);
                _0x11430e['opacity'] = 0.5;
                _0x11430e['add'](new _0x193f4e['arc'](0x0, 0x0, 0x46 / 0x2 + 0x4, '#000', 0x2 * Math['PI'], 0x0, 0x1));
                _0x38bea8['bg']['add'](_0x11430e);
                _0x38bea8['visual']['addBelow'](_0x38bea8['bg']);
                _0x38bea8['bg']['opacity'] = 0.5;
                var _0x2b6f88 = 0xc8;
                var _0x40d819 = document['createElement']('canvas');
                _0x40d819['width'] = _0x40d819['height'] = _0x2b6f88;
                var _0x2d2b85 = _0x40d819['getContext']('2d');
                _0x2d2b85['translate'](_0x2b6f88 / 0x2, _0x2b6f88 / 0x2);
                _0x38bea8['visual']['render'](_0x2d2b85, 0x64 / _0x2b6f88, 0x1);
                _0xf143c3 = _0x40d819;
            }
            _0x193f4e['addType']('ammo', function (_0x3e183d, _0x2a03f3) {
                _0x3e183d['extraRotationTicks'] = 0x0;
                _0x3e183d['visual'] = new _0x193f4e['object']();
                _0x3e183d['visual']['opacity'] = 0x0;
                _0x2a03f3['rarity'] = 0x0;
                var _0x4d0c98 = 'empty';
                if (_0x2a03f3['mat'] !== undefined) {
                    switch (_0x2a03f3['mat']) {
                        case 0x0:
                            _0x4d0c98 = 'wood';
                            break;
                        case 0x1:
                            _0x4d0c98 = 'brick';
                            break;
                        case 0x2:
                            _0x4d0c98 = 'metal';
                    }
                } else if (_0x2a03f3['ammo'] !== undefined) {
                    _0x4d0c98 = 'stack' + _0x2a03f3['ammo'];
                }
                _0x3e183d['gun'] = new _0x193f4e['image'](_0x3a4184(_0x4d0c98), 0x0, 0x0, 0x6e, 0x6e);
                _0x3e183d['gun']['rotation'] = 0x0;
                _0x3e183d['gun']['size'] = 0.45;
                _0x3e183d['visual']['add'](_0x3e183d['gun']);
                _0x3e183d['done'] = ![];
                _0x3e183d['bg'] = new _0x193f4e['image'](_0xf143c3, 0x0, 0x0, 0x64, 0x64);
                _0x3e183d['visual']['addBelow'](_0x3e183d['bg']);
                var _0x52b8e1 = 0.5;
                _0x3e183d['bg']['opacity'] *= _0x52b8e1;
                _0x529676['add'](_0x3e183d['visual']);
            }, function (_0x233fcd) {
                _0x233fcd['extraRotationTicks'] += _0x193f4e['clientDetails']['dt'] / 0xf;
                _0x233fcd['gun']['width'] = _0x233fcd['gun']['height'] = -_0x390098 * 0x6 + 0x6e;
                _0x233fcd['bg']['size'] = _0x390098 * 0.02 + 0.8;
                if (_0x233fcd['done']) {
                    _0x233fcd['visual']['opacity'] -= 0.07 * _0x193f4e['clientDetails']['dt'];
                    if (_0x233fcd['visual']['opacity'] <= 0x0) {
                        for (var _0x268a62 = 0x0; _0x268a62 < _0x193f4e['objects']['length']; _0x268a62++) {
                            if (_0x193f4e['objects'][_0x268a62]['id'] == _0x233fcd['id']) {
                                if (_0x193f4e['objects'][_0x268a62]['visual']['parent'] != null)
                                    _0x193f4e['objects'][_0x268a62]['visual']['parent']['remove'](_0x193f4e['objects'][_0x268a62]['visual']);
                                _0x193f4e['objects']['splice'](_0x268a62, 0x1);
                            }
                        }
                    }
                } else if (_0x233fcd['visual']['opacity'] < 0x1) {
                    _0x233fcd['visual']['opacity'] += 0.07 * _0x193f4e['clientDetails']['dt'];
                    _0x233fcd['visual']['opacity'] = Math['min'](_0x233fcd['visual']['opacity'], 0x1);
                }
                _0x233fcd['ticksSinceParticles'] += _0x193f4e['clientDetails']['dt'];
            }, function (_0x3b7eb3, _0x95e3cd) { }, function (_0x4307a3) {
                _0x4307a3['done'] = !![];
                return !![];
            });
            _0x193f4e['addType']('chest', function (_0x56f32a, _0x346246) {
                _0x56f32a['visual'] = new _0x193f4e['image'](_0x3a4184('chest'), 0x0, 0x0, 0x96, 0x64);
                _0x56f32a['visual']['size'] = 0.8;
                _0x56f32a['chestUnder'] = new _0x193f4e['image'](_0x3a4184('chestunder'), 0x0, 0x0, 0x96, 0x64);
                _0x56f32a['visual']['addBelow'](_0x56f32a['chestUnder']);
                _0x227276['addBelow'](_0x56f32a['visual']);
                _0x56f32a['done'] = ![];
                _0x56f32a['sinTicks'] = 0x0;
                _0x56f32a['sin'] = 0x0;
            }, function (_0x51afd3) {
                _0x51afd3['sinTicks'] += _0x193f4e['clientDetails']['dt'] / 0x28;
                _0x51afd3['sin'] = Math['sin'](_0x51afd3['sinTicks']);
                _0x51afd3['chestUnder']['opacity'] = 0.32 + _0x51afd3['sin'] / 0x9;
                _0x51afd3['chestUnder']['size'] = 1.3 + _0x51afd3['sin'] / 0xd;
                if (_0x51afd3['done']) {
                    _0x51afd3['visual']['opacity'] -= 0.04 * _0x193f4e['clientDetails']['dt'];
                    if (_0x51afd3['visual']['opacity'] <= 0x0) {
                        for (var _0x52359e = 0x0; _0x52359e < _0x193f4e['objects']['length']; _0x52359e++) {
                            if (_0x193f4e['objects'][_0x52359e]['id'] == _0x51afd3['id']) {
                                if (_0x193f4e['objects'][_0x52359e]['visual']['parent'] != null)
                                    _0x193f4e['objects'][_0x52359e]['visual']['parent']['remove'](_0x193f4e['objects'][_0x52359e]['visual']);
                                _0x193f4e['objects']['splice'](_0x52359e, 0x1);
                            }
                        }
                    }
                }
            }, function (_0x215c60, _0x2330ba) { }, function (_0x4c3b79) {
                _0x4c3b79['done'] = !![];
                return !![];
            });
            _0x193f4e['addType']('house', function (_0x1d1345, _0x2a5beb) {
                _0x1d1345['visual'] = new _0x193f4e['object']();
            }, function (_0x494d95) { }, function (_0x53c436, _0x350776) { }, function (_0x472abf) { });
            _0x193f4e['addType']('ball', function (_0x40a7f1, _0x517f3d) {
                _0x40a7f1['visual'] = new _0x193f4e['image'](_0x3a4184(_0x517f3d['name']), 0x0, 0x0, 0x46, 0x46);
                _0x227276['addBelow'](_0x40a7f1['visual']);
            }, function (_0xa498ed) { }, function (_0x45b871, _0x1b5562) { }, function (_0x5c6fe8) { });
            _0x193f4e['addType']('baller', function (_0x36df01, _0xb156bc) {
                _0x36df01['visual'] = new _0x193f4e['image'](_0x3a4184('baller0'), 0x0, 0x0, 0xfa, 0xfa);
                _0x36df01['grapple'] = new _0x193f4e['image'](_0x3a4184('grapple'), 0x0, 0x0, 0x28, 0x28);
                _0x36df01['rope'] = new _0x193f4e['image'](_0x3a4184('rope'), 0x0, 0x0, 0xa, 0x0);
                _0x227276['add'](_0x36df01['rope']);
                _0x36df01['newGrapple'] = null;
                _0x36df01['isNull'] = !![];
                _0x36df01['actualGrappleDist'] = 0x64;
                _0x36df01['grappleDist'] = _0x36df01['actualGrappleDist'];
                _0x36df01['grappleDifference'] = 0xf;
                _0x227276['add'](_0x36df01['grapple']);
                _0x227276['add'](_0x36df01['visual']);
                _0x36df01['timeSinceSoundUpdate'] = 0x0;
                _0x36df01['volumeDifference'] = 0x0;
                _0x36df01['grapple']['oldPosition'] = new _0x193f4e['Vector2']();
                if (_0xb156bc['isPreview']) {
                    _0x36df01['isPreview'] = !![];
                }
                _0x36df01['fullHealth'] = _0xb156bc['h'];
                _0x36df01['health'] = _0xb156bc['ch'];
                _0x36df01['currentVisual'] = 'baller';
            }, function (_0x1afc96) {
                if (_0x1afc96['newGrapple'] == null) {
                    _0x1afc96['grapple']['position']['x'] = _0x1afc96['visual']['position']['x'] + Math['cos'](_0x1afc96['visual']['rotation']) * _0x1afc96['grappleDist'];
                    _0x1afc96['grapple']['position']['y'] = _0x1afc96['visual']['position']['y'] + Math['sin'](_0x1afc96['visual']['rotation']) * _0x1afc96['grappleDist'];
                    _0x1afc96['grapple']['rotation'] = _0x1afc96['visual']['rotation'] + Math['PI'] / 0x2;
                    _0x1afc96['rope']['height'] = 0x0;
                } else {
                    _0x1afc96['grapple']['position']['x'] = _0x193f4e['lerp'](_0x1afc96['grapple']['oldPosition']['x'], _0x1afc96['newGrapple']['x']);
                    _0x1afc96['grapple']['position']['y'] = _0x193f4e['lerp'](_0x1afc96['grapple']['oldPosition']['y'], _0x1afc96['newGrapple']['y']);
                    _0x1afc96['grappleDist'] -= _0x1afc96['grappleDifference'];
                    _0x1afc96['rope']['position']['x'] = (_0x1afc96['visual']['position']['x'] + Math['cos'](_0x1afc96['visual']['rotation']) * _0x1afc96['grappleDist'] + _0x1afc96['grapple']['position']['x']) / 0x2;
                    _0x1afc96['rope']['position']['y'] = (_0x1afc96['visual']['position']['y'] + Math['sin'](_0x1afc96['visual']['rotation']) * _0x1afc96['grappleDist'] + _0x1afc96['grapple']['position']['y']) / 0x2;
                    var _0x2940ee = _0x1afc96['grapple']['position']['x'] - (_0x1afc96['visual']['position']['x'] + Math['cos'](_0x1afc96['visual']['rotation']) * _0x1afc96['grappleDist']);
                    var _0x586245 = _0x1afc96['grapple']['position']['y'] - (_0x1afc96['visual']['position']['y'] + Math['sin'](_0x1afc96['visual']['rotation']) * _0x1afc96['grappleDist']);
                    _0x1afc96['rope']['height'] = Math['sqrt'](_0x2940ee * _0x2940ee + _0x586245 * _0x586245);
                    _0x1afc96['rope']['rotation'] = Math['atan2'](_0x586245, _0x2940ee) + Math['PI'] / 0x2;
                    _0x1afc96['grappleDist'] = _0x1afc96['actualGrappleDist'];
                    if (_0x1afc96['isNull']) {
                        _0x1afc96['grapple']['rotation'] = _0x1afc96['visual']['rotation'] + Math['PI'] / 0x2;
                    }
                }
                if (!_0x1afc96['isPreview']) {
                    _0x1afc96['grapple']['parent']['remove'](_0x1afc96['grapple']);
                    _0x1afc96['visual']['parent']['remove'](_0x1afc96['visual']);
                    _0x227276['add'](_0x1afc96['grapple']);
                    _0x227276['add'](_0x1afc96['visual']);
                }
                var _0x4db4f8 = Math['max'](Math['min'](0x4 - Math['ceil'](_0x1afc96['health'] / _0x1afc96['fullHealth'] * 0x4), 0x3), 0x0);
                if ('baller' + _0x4db4f8 != _0x1afc96['currentVisual']) {
                    _0x1afc96['visual']['image'] = _0x3a4184('baller' + _0x4db4f8);
                }
                _0x1afc96['currentVisual'] = 'baller' + _0x4db4f8;
                if (_0x1afc96['done']) {
                    _0x1afc96['visual']['opacity'] -= 0.07 * _0x193f4e['clientDetails']['dt'];
                    _0x1afc96['grapple']['opacity'] = _0x1afc96['visual']['opacity'];
                    _0x1afc96['rope']['opacity'] = _0x1afc96['visual']['opacity'];
                    if (_0x1afc96['visual']['opacity'] <= 0x0) {
                        _0x1afc96['grapple']['parent']['remove'](_0x1afc96['grapple']);
                        _0x1afc96['rope']['parent']['remove'](_0x1afc96['rope']);
                        for (var _0x2d97cd = 0x0; _0x2d97cd < _0x193f4e['objects']['length']; _0x2d97cd++) {
                            if (_0x193f4e['objects'][_0x2d97cd]['id'] == _0x1afc96['id']) {
                                if (_0x193f4e['objects'][_0x2d97cd]['visual']['parent'] != null)
                                    _0x193f4e['objects'][_0x2d97cd]['visual']['parent']['remove'](_0x193f4e['objects'][_0x2d97cd]['visual']);
                                _0x193f4e['objects']['splice'](_0x2d97cd, 0x1);
                            }
                        }
                    }
                }
            }, function (_0x4f4a9e, _0x50f525) {
                if (isNaN(_0x4f4a9e['new']['position']['x'])) {
                    console['log']('NaN baller');
                    console['log'](_0x4f4a9e);
                }
                if (_0x4f4a9e['newGrapple'] != null) {
                    _0x4f4a9e['grapple']['oldPosition']['x'] = _0x4f4a9e['grapple']['position']['x'];
                    _0x4f4a9e['grapple']['oldPosition']['y'] = _0x4f4a9e['grapple']['position']['y'];
                }
                if (_0x4f4a9e['isNull']) {
                    _0x4f4a9e['newGrapple'] = null;
                    _0x4f4a9e['isNull'] = ![];
                }
                if (_0x50f525['grapple'] !== undefined) {
                    if (_0x50f525['grapple'] == ![]) {
                        _0x4f4a9e['isNull'] = !![];
                        _0x4f4a9e['newGrapple'] = new _0x193f4e['Vector2']();
                        _0x4f4a9e['newGrapple']['x'] = _0x4f4a9e['visual']['position']['x'] + Math['cos'](_0x4f4a9e['visual']['rotation']) * _0x4f4a9e['grappleDist'];
                        _0x4f4a9e['newGrapple']['y'] = _0x4f4a9e['visual']['position']['y'] + Math['sin'](_0x4f4a9e['visual']['rotation']) * _0x4f4a9e['grappleDist'];
                    } else {
                        _0x35c7e2('grapple', _0x193f4e['me']['visual']['position'], _0x4f4a9e['visual']['position'], !![])['volume'] /= 0x4;
                        _0x4f4a9e['newGrapple'] = new _0x193f4e['Vector2'](_0x50f525['grapple'][0x0], _0x50f525['grapple'][0x1]);
                        _0x4f4a9e['grapple']['oldPosition'] = new _0x193f4e['Vector2']();
                        _0x4f4a9e['grapple']['oldPosition']['x'] = _0x4f4a9e['visual']['position']['x'] + Math['cos'](_0x4f4a9e['visual']['rotation']) * _0x4f4a9e['grappleDist'];
                        _0x4f4a9e['grapple']['oldPosition']['y'] = _0x4f4a9e['visual']['position']['y'] + Math['sin'](_0x4f4a9e['visual']['rotation']) * _0x4f4a9e['grappleDist'];
                    }
                }
                if (_0x50f525['h'] !== undefined) {
                    _0x4f4a9e['health'] = _0x50f525['h'];
                    if (_0x4f4a9e['health'] < 0x0) {
                        _0x4f4a9e['health'] = 0x0;
                    }
                }
                if (_0x50f525['bounced']) {
                    var _0x16b5e6 = _0x35c7e2('bounce', _0x193f4e['me']['visual']['position'], _0x4f4a9e['visual']['position']);
                    if (_0x16b5e6 != null) {
                        _0x16b5e6['volume'] *= 0.6;
                    }
                }
            }, function (_0x1d3ce2) {
                _0x1d3ce2['done'] = !![];
                return !![];
            });
            _0x193f4e['addType']('object', function (_0x4fc2d6, _0x2669b1) {
                _0x4fc2d6['envType'] = _0x2669b1['type'];
                _0x4fc2d6['visual'] = new _0x193f4e['object']();
                _0x4fc2d6['sprite'] = new _0x193f4e['object']();
                if (_0x2669b1['type'] == 'pumpkin' && Math['random']() > 0.5) {
                    _0x2669b1['type'] = 'pumpkin1';
                }
                if (_0x2669b1['type'] != 'wall')
                    _0x4fc2d6['sprite'] = new _0x193f4e['image'](_0x3a4184(_0x2669b1['type']), 0x0, 0x0, _0x2669b1['width'], _0x2669b1['height']);
                if (_0x2669b1['width'] == 0x0 || _0x2669b1['height'] == 0x0) {
                    _0x4fc2d6['sprite']['width'] = 0x0;
                    _0x4fc2d6['sprite']['height'] = 0x0;
                }
                _0x4fc2d6['visual']['add'](_0x4fc2d6['sprite']);
                _0x4fc2d6['ui'] = new _0x193f4e['object']();
                _0x4fc2d6['shake'] = 0x0;
                _0x4fc2d6['done'] = ![];
                _0x4fc2d6['health'] = _0x2669b1['health'];
                _0x4fc2d6['fullHealth'] = _0x2669b1['fullHealth'];
                _0x4fc2d6['ticksSinceHealthChange'] = 0x1f4;
                var _0xa9b627 = 0x32;
                _0x4fc2d6['healthbar'] = new _0x193f4e['rectangle'](0x0, _0xa9b627, _0x4fc2d6['health'], 0xe, '#0D0');
                _0x4fc2d6['healthbar']['width'] = 0x0;
                _0x4fc2d6['healthBackground'] = new _0x193f4e['rectangle'](0x0, _0xa9b627, 0x64, 0xe, '#000', 0.3);
                _0x4fc2d6['ui']['add'](_0x4fc2d6['healthBackground']);
                _0x4fc2d6['ui']['add'](_0x4fc2d6['healthbar']);
                var _0x4ba6bf = 0xa;
                var _0x545ea7 = -0x19;
                var _0x13b83d = 'bold';
                _0x4fc2d6['totalHealth'] = new _0x193f4e['text'](_0x4fc2d6['fullHealth'], _0x545ea7 + 0x3, _0xa9b627, '#FFF', 'Arial', _0x4ba6bf, _0x13b83d, 0.9, 'left');
                if (_0x4fc2d6['fullHealth'] == 0x64) {
                    _0x4fc2d6['totalHealth']['canvas'] = _0x4db7d5;
                }
                _0x4fc2d6['ui']['add'](_0x4fc2d6['totalHealth']);
                _0x4fc2d6['middleHealth'] = new _0x193f4e['text']('/', _0x545ea7 + 0x1, _0xa9b627, '#FFF', 'Arial', _0x4ba6bf, _0x13b83d, 0.5, 'center');
                _0x4fc2d6['middleHealth']['canvas'] = _0x4dd6b8;
                _0x4fc2d6['ui']['add'](_0x4fc2d6['middleHealth']);
                _0x4fc2d6['currentHealth'] = new _0x193f4e['text']('100', _0x545ea7 - 0x3, _0xa9b627, '#FFF', 'Arial', _0x4ba6bf, _0x13b83d, 0x1, 'right');
                _0x4fc2d6['ui']['add'](_0x4fc2d6['currentHealth']);
                _0x4fc2d6['ui']['opacity'] = 0x0;
                _0x4fc2d6['visual']['add'](_0x4fc2d6['ui']);
                _0x4fc2d6['shakePosition'] = new _0x193f4e['Vector2'](0x0, 0x0);
                _0x4fc2d6['sprite']['position'] = _0x4fc2d6['shakePosition'];
                _0x4fc2d6['velocity'] = new _0x193f4e['Vector2'](0x0, 0x0);
                _0x4fc2d6['elasticity'] = 0.01;
                _0x4fc2d6['drag'] = 0.5;
                _0x4fc2d6['playSound'] = _0x245f69;
                if (_0x4fc2d6['envType'] == 'wall') {
                    if (_0x4b5af4[_0x2669b1['mat']] == 'brick') {
                        _0x4fc2d6['playSound'] = _0x56587a;
                    } else if (_0x4b5af4[_0x2669b1['mat']] == 'metal') {
                        _0x4fc2d6['playSound'] = _0x3a85d0;
                    }
                } else if (_0x4fc2d6['envType'] == 'rock') {
                    _0x4fc2d6['playSound'] = _0x56587a;
                } else if (_0x4fc2d6['envType'] == 'trash' || _0x4fc2d6['envType'] == 'silo') {
                    _0x4fc2d6['playSound'] = _0x3a85d0;
                }
                if (_0x2669b1['type'] == 'trash') {
                    _0x4fc2d6['sprite']['size'] = 1.34;
                }
                if (_0x2669b1['type'] == 'hay') {
                    _0x4fc2d6['sprite']['size'] = 0x1;
                }
                if (_0x2669b1['type'] == 'basketballnet') {
                    _0x4fc2d6['sprite']['width'] = 0x12c;
                    _0x4fc2d6['sprite']['height'] = 0xc8;
                    _0x4fc2d6['playSound'] = _0x3a85d0;
                }
                if (_0x2669b1['type'] == 'bench') {
                    _0x4fc2d6['sprite']['width'] = 0x1c2;
                    _0x4fc2d6['sprite']['height'] = 0x96;
                    _0x4fc2d6['playSound'] = _0x3a85d0;
                }
                if (_0x2669b1['type'] == 'metalbench') {
                    _0x4fc2d6['sprite']['width'] = 0xc8;
                    _0x4fc2d6['sprite']['height'] = 0xc8;
                    _0x4fc2d6['playSound'] = _0x3a85d0;
                }
                if (_0x2669b1['type'] == 'counter') {
                    _0x4fc2d6['sprite']['width'] = 0x190;
                    _0x4fc2d6['sprite']['height'] = 0x64;
                    _0x4fc2d6['playSound'] = _0x3a85d0;
                }
                if (_0x2669b1['type'] == 'corn') {
                    _0x4fc2d6['sprite']['size'] = 1.9;
                }
                if (_0x2669b1['type'] == 'pumpkin' || _0x2669b1['type'] == 'pumpkin1') {
                    _0x4fc2d6['sprite']['size'] = 1.2;
                }
                if (_0x2669b1['type'] == 'table') {
                    _0x4fc2d6['sprite']['width'] = 0xaf;
                    _0x4fc2d6['sprite']['height'] = 0x7d;
                }
                if (_0x2669b1['type'] == 'chair') {
                    _0x4fc2d6['sprite']['width'] = 0x55;
                    _0x4fc2d6['sprite']['height'] = 0x55;
                }
                if (_0x2669b1['type'] == 'couch' || _0x2669b1['type'] == 'junglecouch') {
                    _0x4fc2d6['sprite']['size'] = 1.3;
                }
                if (_0x2669b1['type'] == 'desk') {
                    _0x4fc2d6['sprite']['size'] = 1.2;
                }
                if (_0x2669b1['type'] == 'wall') {
                    _0x4fc2d6['material'] = _0x4b5af4[_0x2669b1['mat']];
                    _0x227276['objects']['unshift'](_0x4fc2d6['visual']);
                    _0x4fc2d6['visual']['parent'] = _0x227276;
                    _0x4fc2d6['sprite']['opacity'] = 0.9;
                    _0x4fc2d6['sprite']['addBelow'](new _0x193f4e['image'](_0x3a4184('blue' + _0x4fc2d6['material']), 0x0, 0x0, _0x5b0d5d * _0x7e6865 / 0x2, _0x5b0d5d, 0.7));
                    _0x4fc2d6['wall0'] = new _0x193f4e['image'](_0x3a4184(_0x4fc2d6['material'] + 'wall0'), 0x0, 0x0, _0x5b0d5d * _0x7e6865, _0x5b0d5d * 0x2);
                    _0x4fc2d6['wall1'] = new _0x193f4e['image'](_0x3a4184(_0x4fc2d6['material'] + 'wall1'), 0x0, 0x0, _0x5b0d5d * _0x7e6865, _0x5b0d5d * 0x2);
                    _0x4fc2d6['wall2'] = new _0x193f4e['image'](_0x3a4184(_0x4fc2d6['material'] + 'wall2'), 0x0, 0x0, _0x5b0d5d * _0x7e6865, _0x5b0d5d * 0x2);
                    _0x4fc2d6['rising'] = [];
                    _0x4fc2d6['lowering'] = [_0x4fc2d6['wall0']];
                    _0x4fc2d6['sprite']['add'](_0x4fc2d6['wall0']);
                    _0x4fc2d6['sprite']['add'](_0x4fc2d6['wall1']);
                    _0x4fc2d6['sprite']['add'](_0x4fc2d6['wall2']);
                    _0x4fc2d6['wall0']['opacity'] = 0x0;
                    _0x4fc2d6['wall1']['opacity'] = 0x0;
                    _0x4fc2d6['wall2']['opacity'] = 0x0;
                    if (_0x2669b1['health'] / _0x4fc2d6['fullHealth'] > 0.8 && _0x4fc2d6['wall2']['opacity'] < 0x1 && _0x4fc2d6['lowering']['indexOf'](_0x4fc2d6['wall2']) < 0x0 && _0x4fc2d6['rising']['indexOf'](_0x4fc2d6['wall2']) < 0x0) {
                        _0x4fc2d6['lowering']['push'](_0x4fc2d6['wall2']);
                    }
                    if (_0x2669b1['health'] / _0x4fc2d6['fullHealth'] >= 0.4 && _0x4fc2d6['wall1']['opacity'] < 0x1 && _0x4fc2d6['lowering']['indexOf'](_0x4fc2d6['wall1']) < 0x0 && _0x4fc2d6['rising']['indexOf'](_0x4fc2d6['wall1']) < 0x0) {
                        _0x4fc2d6['lowering']['push'](_0x4fc2d6['wall1']);
                    }
                } else if (_0x2669b1['type']['substring'](0x0, 0x4) == 'tree' || _0x2669b1['type'] == 'rock' || _0x2669b1['type'] == 'jungletree' || _0x2669b1['type'] == 'cherryblossom') {
                    _0x4fc2d6['sprite']['width'] = _0x4fc2d6['sprite']['height'] = _0x4fc2d6['sprite']['width'] * 0x2;
                    _0x4fc2d6['visual']['rotation'] = Math['random']() * 0x2 * Math['PI'];
                    if (_0x2669b1['type'] == 'rock') {
                        _0x227276['addBelow'](_0x4fc2d6['visual']);
                    } else {
                        _0x559922['addBelow'](_0x4fc2d6['visual']);
                    }
                    if (_0x5f37fb) {
                        if (_0x2669b1['type']['substring'](0x0, 0x4) == 'tree') {
                            _0x4fc2d6['sprite']['image'] = _0x3a4184('christmastree' + (_0x2669b1['type']['substring'](0x4, 0x5) * 0x2 + Math['floor'](Math['random']() * 0x2)));
                        }
                    }
                } else if (_0x2669b1['type'] == 'trash' || _0x2669b1['type'] == 'chair' || _0x2669b1['type'] == 'table' || _0x2669b1['type'] == 'couch' || _0x2669b1['type'] == 'bench' || _0x2669b1['type'] == 'metalbench' || _0x2669b1['type'] == 'counter') {
                    _0x227276['addBelow'](_0x4fc2d6['visual']);
                } else if (_0x2669b1['type'] == 'basketballnet') {
                    _0x559922['addBelow'](_0x4fc2d6['visual']);
                } else {
                    _0x227276['add'](_0x4fc2d6['visual']);
                }
            }, function (_0x2e6131) {
                _0x2e6131['ui']['rotation'] = -_0x2e6131['visual']['rotation'];
                _0x2e6131['healthbar']['width'] += (_0x2e6131['health'] / _0x2e6131['fullHealth'] * 0x64 - _0x2e6131['healthbar']['width']) * 0.1 * _0x193f4e['clientDetails']['dt'];
                _0x2e6131['healthbar']['width'] = Math['min'](Math['max'](_0x2e6131['healthbar']['width'], 0x0), 0x64);
                _0x2e6131['healthbar']['position']['x'] = (_0x2e6131['healthbar']['width'] - 0x64) / 0x2;
                var _0x2d8ff4 = Math['random']() * Math['PI'] * 0x2;
                var _0x1a4829 = 0.5;
                _0x2e6131['sprite']['position']['x'] = Math['cos'](_0x2d8ff4) * _0x2e6131['shake'] * _0x1a4829;
                _0x2e6131['sprite']['position']['y'] = Math['sin'](_0x2d8ff4) * _0x2e6131['shake'] * _0x1a4829;
                _0x2e6131['shake'] -= _0x193f4e['clientDetails']['dt'];
                _0x2e6131['shake'] = Math['max'](_0x2e6131['shake'], 0x0);
                _0x2e6131['velocity']['x'] -= _0x2e6131['velocity']['x'] * _0x2e6131['drag'] * _0x193f4e['clientDetails']['dt'];
                _0x2e6131['velocity']['y'] -= _0x2e6131['velocity']['y'] * _0x2e6131['drag'] * _0x193f4e['clientDetails']['dt'];
                _0x2e6131['velocity']['x'] -= _0x2e6131['shakePosition']['x'] * _0x2e6131['elasticity'] * _0x193f4e['clientDetails']['dt'];
                _0x2e6131['velocity']['y'] -= _0x2e6131['shakePosition']['y'] * _0x2e6131['elasticity'] * _0x193f4e['clientDetails']['dt'];
                _0x2e6131['shakePosition']['x'] += _0x2e6131['velocity']['x'] * _0x193f4e['clientDetails']['dt'];
                _0x2e6131['shakePosition']['y'] += _0x2e6131['velocity']['y'] * _0x193f4e['clientDetails']['dt'];
                if (_0x2e6131['shadow'] !== undefined && _0x193f4e['me']['visual'] !== undefined) {
                    _0x2e6131['shadow']['width'] = _0x2e6131['sprite']['width'];
                    _0x2e6131['shadow']['height'] = _0x2e6131['sprite']['height'];
                    _0x2e6131['shadowContainer']['rotation'] = -_0x2e6131['visual']['rotation'];
                    _0x2e6131['shadow']['rotation'] = _0x2e6131['visual']['rotation'];
                    _0x2e6131['shadow']['position']['x'] = _0x2e6131['visual']['position']['x'] - _0x193f4e['me']['visual']['position']['x'];
                    _0x2e6131['shadow']['position']['y'] = _0x2e6131['visual']['position']['y'] - _0x193f4e['me']['visual']['position']['y'];
                    var _0x8d5f58 = 0.1;
                    _0x2e6131['shadow']['position']['x'] *= _0x8d5f58;
                    _0x2e6131['shadow']['position']['y'] *= _0x8d5f58;
                    _0x2e6131['shadow']['position']['x'] += _0x2e6131['sprite']['position']['x'];
                    _0x2e6131['shadow']['position']['y'] += _0x2e6131['sprite']['position']['y'];
                    _0x2e6131['shadow']['opacity'] = Math['max'](0.2 - (Math['abs'](_0x2e6131['shadow']['position']['x']) + Math['abs'](_0x2e6131['shadow']['position']['y'])) / 0x190, 0x0);
                    _0x2e6131['shadow']['size'] = 1.1 + (Math['abs'](_0x2e6131['shadow']['position']['x']) + Math['abs'](_0x2e6131['shadow']['position']['y'])) / 0x190;
                }
                _0x2e6131['ticksSinceHealthChange'] += _0x193f4e['clientDetails']['dt'];
                if (_0x2e6131['ticksSinceHealthChange'] >= 0x1f4) {
                    _0x2e6131['ticksSinceHealthChange'] = 0x1f4;
                    _0x2e6131['ui']['opacity'] -= _0x193f4e['clientDetails']['dt'] / 0x32;
                    _0x2e6131['ui']['opacity'] = Math['max'](_0x2e6131['ui']['opacity'], 0x0);
                } else {
                    _0x2e6131['ui']['opacity'] += _0x193f4e['clientDetails']['dt'] / 0x14;
                    _0x2e6131['ui']['opacity'] = Math['min'](_0x2e6131['ui']['opacity'], 0x1);
                }
                if (_0x2e6131['envType'] == 'wall') {
                    for (var _0x1269b0 = 0x0; _0x1269b0 < _0x2e6131['lowering']['length']; _0x1269b0++) {
                        _0x2e6131['lowering'][_0x1269b0]['opacity'] += _0x193f4e['clientDetails']['dt'] / 0x14;
                        _0x2e6131['lowering'][_0x1269b0]['width'] = _0x1be276(_0x5b0d5d * _0x7e6865, _0x5b0d5d * _0x7e6865 / 0x2, _0x2e6131['lowering'][_0x1269b0]['opacity']);
                        _0x2e6131['lowering'][_0x1269b0]['height'] = _0x1be276(_0x5b0d5d * 0x2, _0x5b0d5d, _0x2e6131['lowering'][_0x1269b0]['opacity']);
                        if (_0x2e6131['lowering'][_0x1269b0]['opacity'] >= 0x1) {
                            _0x2e6131['lowering'][_0x1269b0]['opacity'] = 0x1;
                            _0x2e6131['lowering'][_0x1269b0]['width'] = _0x1be276(_0x5b0d5d * _0x7e6865, _0x5b0d5d * _0x7e6865 / 0x2, _0x2e6131['lowering'][_0x1269b0]['opacity']);
                            _0x2e6131['lowering'][_0x1269b0]['height'] = _0x1be276(_0x5b0d5d * 0x2, _0x5b0d5d, _0x2e6131['lowering'][_0x1269b0]['opacity']);
                            _0x2e6131['lowering']['splice'](_0x1269b0, 0x1);
                            _0x1269b0--;
                        }
                    }
                    for (var _0x1269b0 = 0x0; _0x1269b0 < _0x2e6131['rising']['length']; _0x1269b0++) {
                        _0x2e6131['rising'][_0x1269b0]['opacity'] -= _0x193f4e['clientDetails']['dt'] / 0x14;
                        _0x2e6131['rising'][_0x1269b0]['width'] = _0x1be276(_0x5b0d5d * _0x7e6865, _0x5b0d5d * _0x7e6865 / 0x2, _0x2e6131['rising'][_0x1269b0]['opacity']);
                        _0x2e6131['rising'][_0x1269b0]['height'] = _0x1be276(_0x5b0d5d * 0x2, _0x5b0d5d, _0x2e6131['rising'][_0x1269b0]['opacity']);
                        if (_0x2e6131['rising'][_0x1269b0]['opacity'] <= 0x0) {
                            _0x2e6131['rising'][_0x1269b0]['opacity'] = 0x0;
                            _0x2e6131['rising']['splice'](_0x1269b0, 0x1);
                            _0x1269b0--;
                        }
                    }
                }
                if (_0x2e6131['done']) {
                    _0x2e6131['visual']['opacity'] -= 0.07 * _0x193f4e['clientDetails']['dt'];
                    if (_0x2e6131['visual']['opacity'] <= 0x0) {
                        _0x2e6131['ui']['remove'](_0x2e6131['totalHealth']);
                        _0x2e6131['ui']['remove'](_0x2e6131['middleHealth']);
                        _0x2e6131['ui']['remove'](_0x2e6131['currentHealth']);
                        if (_0x2e6131['totalHealth']['canvas'] != _0x4db7d5) {
                            _0x2e6131['totalHealth']['unlink']();
                        }
                        _0x2e6131['currentHealth']['unlink']();
                        _0x2e6131['totalHealth'] = null;
                        _0x2e6131['middleHealth'] = null;
                        _0x2e6131['currentHealth'] = null;
                        for (var _0x1269b0 = 0x0; _0x1269b0 < _0x193f4e['objects']['length']; _0x1269b0++) {
                            if (_0x193f4e['objects'][_0x1269b0]['id'] == _0x2e6131['id']) {
                                if (_0x193f4e['objects'][_0x1269b0]['visual']['parent'] != null)
                                    _0x193f4e['objects'][_0x1269b0]['visual']['parent']['remove'](_0x193f4e['objects'][_0x1269b0]['visual']);
                                _0x193f4e['objects']['splice'](_0x1269b0, 0x1);
                            }
                        }
                    }
                }
            }, function (_0x5bb314, _0x373bf6) {
                if (_0x373bf6['health'] !== undefined) {
                    if (_0x373bf6['health'] < _0x5bb314['health']) {
                        _0x5bb314['shake'] = _0x5bb314['health'] - _0x373bf6['health'];
                        _0x5bb314['playSound'](_0x5bb314);
                        _0x5bb314['shake'] = Math['min'](_0x5bb314['shake'], 0x1e);
                    }
                    if (_0x5bb314['envType'] == 'wall') {
                        if (_0x373bf6['health'] < _0x5bb314['health']) {
                            if (_0x373bf6['health'] / _0x5bb314['fullHealth'] <= 0.7 && _0x5bb314['wall2']['opacity'] > 0x0 && _0x5bb314['rising']['indexOf'](_0x5bb314['wall2']) < 0x0) {
                                _0x5bb314['rising']['push'](_0x5bb314['wall2']);
                                if (_0x5bb314['lowering']['indexOf'](_0x5bb314['wall2']) >= 0x0) {
                                    _0x5bb314['lowering']['splice'](_0x5bb314['lowering']['indexOf'](_0x5bb314['wall2']), 0x1);
                                }
                            }
                            if (_0x373bf6['health'] / _0x5bb314['fullHealth'] <= 0.3 && _0x5bb314['wall1']['opacity'] > 0x0 && _0x5bb314['rising']['indexOf'](_0x5bb314['wall1']) < 0x0) {
                                _0x5bb314['rising']['push'](_0x5bb314['wall1']);
                                if (_0x5bb314['lowering']['indexOf'](_0x5bb314['wall1']) >= 0x0) {
                                    _0x5bb314['lowering']['splice'](_0x5bb314['lowering']['indexOf'](_0x5bb314['wall2']), 0x1);
                                }
                            }
                        } else {
                            if (_0x373bf6['health'] / _0x5bb314['fullHealth'] > 0.8 && _0x5bb314['wall2']['opacity'] < 0x1 && _0x5bb314['lowering']['indexOf'](_0x5bb314['wall2']) < 0x0 && _0x5bb314['rising']['indexOf'](_0x5bb314['wall2']) < 0x0) {
                                _0x5bb314['lowering']['push'](_0x5bb314['wall2']);
                            }
                            if (_0x373bf6['health'] / _0x5bb314['fullHealth'] >= 0.4 && _0x5bb314['wall1']['opacity'] < 0x1 && _0x5bb314['lowering']['indexOf'](_0x5bb314['wall1']) < 0x0 && _0x5bb314['rising']['indexOf'](_0x5bb314['wall1']) < 0x0) {
                                _0x5bb314['lowering']['push'](_0x5bb314['wall1']);
                            }
                        }
                    }
                    if (_0x5bb314['health'] != _0x373bf6['health']) {
                        _0x5bb314['ticksSinceHealthChange'] = 0x0;
                        if (_0x5bb314['envType'] == 'wall' && _0x373bf6['health'] == _0x5bb314['fullHealth']) {
                            _0x5bb314['shake'] = 0xf;
                        }
                    }
                    if (_0x373bf6['health'] == _0x5bb314['fullHealth']) {
                        _0x5bb314['ticksSinceHealthChange'] = 0x1f4;
                    }
                    _0x5bb314['currentHealth']['text'] = _0x373bf6['health'];
                    _0x5bb314['health'] = _0x373bf6['health'];
                }
            }, function (_0x1d49c0, _0x4a74f1) {
                if (_0x1d49c0['done']) {
                    return !![];
                }
                if (_0x4a74f1['health'] !== undefined) {
                    if (_0x4a74f1['health'] < _0x1d49c0['health'] && _0x1d49c0['health'] != 0x0) {
                        _0x1d49c0['shake'] = 0x6;
                        _0x1d49c0['ticksSinceHealthChange'] = 0x0;
                        _0x1d49c0['playSound'](_0x1d49c0);
                    }
                    _0x4a74f1['health'] = Math['max'](_0x4a74f1['health'], 0x0);
                    _0x1d49c0['currentHealth']['text'] = _0x4a74f1['health'];
                    _0x1d49c0['health'] = _0x4a74f1['health'];
                }
                if (_0x1d49c0['envType']['substring'](0x0, 0x4) == 'tree' || _0x1d49c0['envType'] == 'jungletree') {
                    var _0x598430 = _0x1db9a8 == 0x0 ? 0xc : 0x6;
                    for (var _0x5a2889 = 0x0; _0x5a2889 < _0x598430; _0x5a2889++) {
                        var _0xb41bb2 = (Math['random']() - 0.5) * 0x4;
                        var _0x59b7fb = (Math['random']() - 0.5) * 0x4;
                        if (_0x5f37fb) { }
                        var _0x5ba786 = _0x193f4e['customCustomParticle']('leaf', _0x1d49c0, (Math['floor'](Math['random']() * 0x2) - 0.5) * 0.07, 0x1, _0xb41bb2, _0x59b7fb);
                        if (_0x5ba786 === undefined) {
                            console['log']('SOMEHOW GOT UNDEFINED');
                        }
                    }
                    _0x1d49c0['done'] = !![];
                    return !![];
                } else if (_0x1d49c0['envType'] == 'rock') {
                    var _0x598430 = _0x1db9a8 == 0x0 ? 0x8 : 0x4;
                    for (var _0x5a2889 = 0x0; _0x5a2889 < _0x598430; _0x5a2889++) {
                        var _0xb41bb2 = (Math['random']() - 0.5) * 0x4;
                        var _0x59b7fb = (Math['random']() - 0.5) * 0x4;
                        _0x193f4e['customCustomParticle']('pebble', _0x1d49c0, (Math['floor'](Math['random']() * 0x2) - 0.5) * 0.07, 1.2, _0xb41bb2, _0x59b7fb);
                    }
                    _0x1d49c0['done'] = !![];
                    return !![];
                } else if (_0x1d49c0['envType'] == 'trash') {
                    var _0x598430 = _0x1db9a8 == 0x0 ? 0x8 : 0x4;
                    for (var _0x5a2889 = 0x0; _0x5a2889 < _0x598430; _0x5a2889++) {
                        var _0xb41bb2 = (Math['random']() - 0.5) * 0x4;
                        var _0x59b7fb = (Math['random']() - 0.5) * 0x4;
                        _0x193f4e['customCustomParticle']('scrap', _0x1d49c0, (Math['floor'](Math['random']() * 0x2) - 0.5) * 0.07, 1.2, _0xb41bb2, _0x59b7fb);
                    }
                    _0x1d49c0['done'] = !![];
                    return !![];
                } else if (_0x1d49c0['envType'] == 'wall') {
                    _0x1d49c0['rising']['push'](_0x1d49c0['wall0']);
                    _0x1d49c0['done'] = !![];
                    return !![];
                } else if (_0x1d49c0['envType'] == 'corn' || _0x1d49c0['envType'] == 'table' || _0x1d49c0['envType'] == 'junglecouch' || _0x1d49c0['envType'] == 'desk' || _0x1d49c0['envType'] == 'chair' || _0x1d49c0['envType'] == 'silo' || _0x1d49c0['envType'] == 'couch' || _0x1d49c0['envType'] == 'hay' || _0x1d49c0['envType'] == 'bench' || _0x1d49c0['envType'] == 'basketballnet' || _0x1d49c0['envType'] == 'metalbench' || _0x1d49c0['envType'] == 'counter' || _0x1d49c0['envType'] == 'pumpkin' || _0x1d49c0['envType'] == 'present' || _0x1d49c0['envType'] == 'cherryblossom') {
                    _0x1d49c0['done'] = !![];
                    return !![];
                }
            });
            function _0x4983e7(_0x3e5dce) {
                return _0x3e5dce > 0x3e7 ? (_0x3e5dce / 0x3e8)['toFixed'](0x1) + 'k' : _0x3e5dce;
            }
            var _0x314d46 = 0x0;
            _0x193f4e['timers'] = [];
            _0x193f4e['time'] = function (_0x1ff6f1) {
                _0x193f4e['timers']['push']({
                    'name': _0x1ff6f1,
                    'time': performance['now']()
                });
            };
            _0x193f4e['timeEnd'] = function (_0x12a013) {
                for (var _0x5e926a = 0x0; _0x5e926a < _0x193f4e['timers']['length']; _0x5e926a++) {
                    if (_0x193f4e['timers'][_0x5e926a]['name'] == _0x12a013) {
                        var _0x36df04 = _0x193f4e['timers']['splice'](_0x5e926a, 0x1)[0x0];
                        _0x5e926a--;
                    }
                }
            };
            var _0x3ad123 = -0x1;
            function _0x2631fc() {
                _0x3122b3['requestFrame'](_0x2631fc);
                _0x333453();
                if (gameWrapper['showingInterstitialAd']) {
                    return;
                }
                _0x193f4e['time']('1');
                _0x3a8b2a['clear']();
                var _0x1d0c7d = 'initial';
                if (_0x193f4e['spectating'] && _0x5cab44['isCollidingWithRectangle'](window['spawnButton'])) {
                    window['spawnButton']['size'] = 0x1;
                    window['spawnButton']['strokeOpacity'] = 0x1;
                    window['spawnButton']['opacity'] = 0.8;
                    window['spawnText']['opacity'] = 0x1;
                    _0x1d0c7d = 'pointer';
                } else if (!_0x193f4e['spectating']) {
                    _0x1d0c7d = 'none';
                } else {
                    window['spawnButton']['size'] = 0x1;
                    window['spawnButton']['strokeOpacity'] = 0.4;
                    window['spawnText']['fontSize'] = 0x1e;
                    window['spawnButton']['opacity'] = 0.6;
                }
                if (_0x193f4e['spectating'] && _0x3ad5a2['opacity'] != 0x1 && _0x5cab44['isCollidingWithRectangle'](_0x2ebeb3)) {
                    _0x2ebeb3['strokeOpacity'] = 0x1;
                    _0x2ebeb3['opacity'] = 0.8;
                    _0x2ebeb3['opacity'] = 0x1;
                    _0x1d0c7d = 'pointer';
                } else {
                    _0x2ebeb3['size'] = 0x1;
                    _0x2ebeb3['strokeOpacity'] = 0.4;
                    _0x2ebeb3['opacity'] = 0.6;
                    _0x42fd3d['fontSize'] = 0x1e;
                }
                _0x3a8b2a['c']['style']['cursor'] = _0x1d0c7d;
                if (_0x3ad5a2['opacity'] != 0x1) {
                    _0x3c93e6['position']['x'] = -_0x227276['camera']['position']['x'] % 0x32 + _0x227276['camera']['position']['x'];
                    _0x3c93e6['position']['y'] = -_0x227276['camera']['position']['y'] % 0x32 + _0x227276['camera']['position']['y'];
                    _0x3a8b2a['render'](_0x421d47);
                    _0x3a8b2a['render'](_0x4ff890);
                    _0x3a8b2a['render'](_0x343783);
                    _0x3a8b2a['render'](_0x529676);
                    _0x3a8b2a['render'](_0x227276);
                    _0x3a8b2a['render'](_0x559922);
                    _0x3a8b2a['render'](_0x4d0080);
                    _0x3a8b2a['render'](_0x7b0032);
                    var _0x1d0c7d = 'none';
                    _0x383acd['visible'] = _0x4e1f86['visible'] = _0x5cab44['emulatedFromTouch'] && !_0x193f4e['spectating'] && !_0x4d4973;
                    _0x115cd5['visible'] = _0x5cab44['emulatedFromTouch'];
                    if (_0x4d4973) {
                        _0x43e503['visible'] = _0x3eec82['visible'] = !![];
                        _0x1d0c7d = 'initial';
                        _0x550b11['opacity'] = 0x1;
                        _0x3042a4['size'] = 1.2;
                        _0x43e503['text'] = 'Click and Drag to Swap Items';
                        _0x3eec82['text'] = 'Drag to the Middle to Drop';
                        _0x43e503['fontSize'] = _0x453f12;
                        _0x3eec82['fontSize'] = _0x453f12;
                        if (_0x5edc8f != -0x1) {
                            _0x36754c[_0x5edc8f]['position']['x'] = (_0x5cab44['x'] - _0x48b917['x']) / _0x3042a4['size'];
                            _0x36754c[_0x5edc8f]['position']['y'] = (_0x5cab44['y'] - _0x48b917['y']) / _0x3042a4['size'];
                            _0x1d0c7d = 'pointer';
                        }
                        for (var _0x4846a6 = 0x0; _0x4846a6 < _0x5005a6['length']; _0x4846a6++) {
                            _0x5005a6[_0x4846a6]['color'] = '#000';
                        }
                        if (_0x206ca0() != -0x1) {
                            _0x1d0c7d = 'pointer';
                        }
                        if (_0x5179fe() != -0x1) {
                            _0x1d0c7d = 'pointer';
                        }
                        if (_0x437fb2() != -0x1) {
                            _0x1d0c7d = 'pointer';
                        }
                    } else {
                        _0x43e503['visible'] = _0x3eec82['visible'] = !_0x5cab44['emulatedFromTouch'];
                        _0x784867();
                        _0x550b11['opacity'] = 0x0;
                        _0x3042a4['size'] = 0x1;
                        _0x43e503['text'] = 'Press ' + _0x1c63f8('Build') + ' to Build';
                        _0x3eec82['text'] = 'Press ' + _0x1c63f8('Inventory') + ' to Manage Inventory';
                        _0x43e503['fontSize'] = _0x2ccdcc;
                        _0x3eec82['fontSize'] = _0x2ccdcc;
                        for (var _0x4846a6 = 0x0; _0x4846a6 < _0x254dc0['length']; _0x4846a6++) {
                            _0x254dc0[_0x4846a6]['opacity'] = 0x0;
                        }
                    }
                    if (!_0x193f4e['spectating']) {
                        _0x3a8b2a['c']['style']['cursor'] = _0x1d0c7d;
                    }
                    _0x484e3b['text'] = _0x43e503['text'];
                    _0x2e30d4['text'] = _0x3eec82['text'];
                    _0x484e3b['fontSize'] = _0x43e503['fontSize'];
                    _0x2e30d4['fontSize'] = _0x43e503['fontSize'];
                    _0x40021b();
                }
                _0x193f4e['timeEnd']('1');
                _0x193f4e['time']('2');
                _0x19860d += _0x193f4e['clientDetails']['dt'] / 0x32;
                if (_0x19860d > Math['PI'] * 0x2) {
                    _0x19860d -= Math['PI'] * 0x2;
                }
                var _0xec09d6 = Math['sin'](_0x19860d) * 0.13;
                if (_0x1db9a8 == 0x0) {
                    for (var _0x4846a6 = 0x0; _0x4846a6 < window['grassTypes']; _0x4846a6++) {
                        window['grass' + _0x4846a6]['rotational']['rotation'] = _0xec09d6;
                    }
                    _0x43d4e2();
                }
                if (_0x3ad5a2['opacity'] != 0x1) {
                    _0x3a8b2a['render'](_0x1f5170);
                }
                if (!_0x193f4e['spectating'] && _0x5f37fb) { }
                if (_0x4bf0a5) {
                    _0x3a8b2a['render'](_0x4f8769);
                }
                if (_0x193f4e['spectating'] && !_0x4c7288) {
                    _0xd3dadd();
                    if (_0x2977f4['opacity'] == 0x1) {
                        _0x575c99['opacity'] += _0x193f4e['clientDetails']['dt'] / 0x190;
                    } else {
                        _0x575c99['opacity'] += _0x193f4e['clientDetails']['dt'] / 0x32;
                    }
                    _0x575c99['opacity'] = Math['min'](_0x575c99['opacity'], 0x1);
                    if (_0x3ad5a2['opacity'] != 0x1) {
                        if (gameWrapper['enabled'] && _0x193f4e['now'] - _0x2f5f54 > 0x4 * 0x3c * 0x3e8) {
                            _0x2f5f54 = _0x193f4e['now'];
                            var _0x4e92a0 = _0xbd15d3();
                            if (_0x4e92a0 == null || !_0x4e92a0['isOwned']) {
                                setTimeout(function () {
                                    gameWrapper['showInterstitialAd']();
                                }, 0x3e8);
                            }
                        }
                        var _0x407ac6 = document['getElementById']('deathscreentopleft')['style']['visibility'];
                        _0x306f97('deathscreentopleft');
                        if (!_0x407ac6) { }
                        if (_0x5cab44['locked']) {
                            document['exitPointerLock']();
                        }
                    } else {
                        _0x1882d4('deathscreentopleft');
                    }
                    _0x3a8b2a['render'](_0x575c99);
                } else {
                    _0x1882d4('deathscreentopleft');
                    _0x575c99['opacity'] = 0x0;
                }
                if (_0x193f4e['spectating'] && _0x3ad5a2['opacity'] == 0x1) {
                    _0x4c7f3b['showName'](_0x193f4e, _0x71cb56);
                    _0x50201b -= _0x193f4e['clientDetails']['dt'];
                    try {
                        var _0x163d7d = 0x1 / (_0x3a8b2a['ratio'] / _0x3a8b2a['qualitySize']);
                        if (window['innerWidth'] >= 0x556 && window['innerWidth'] < 0x780) {
                            _0x163d7d = 0.9 * _0x193f4e['devicePixelRatio'];
                        }
                        for (var _0x4846a6 = 0x0; _0x4846a6 < _0x71cb56['length']; _0x4846a6++) {
                            _0x3ad123 = _0x163d7d;
                            var _0x46e613 = 0x1 / (_0x3a8b2a['ratio'] / _0x3a8b2a['qualitySize']);
                            if (window['innerWidth'] >= 0x556 && window['innerWidth'] < 0x780 && _0x71cb56[_0x4846a6] != 'nameBox') { }
                            _0x46e613 /= _0x193f4e['devicePixelRatio'];
                            if (window['innerWidth'] < 0x3e8 || _0x486e59) {
                                if (_0x71cb56[_0x4846a6] == 'nameBox') { } else {
                                    _0x46e613 *= 1.5;
                                }
                            }
                            document['getElementById'](_0x71cb56[_0x4846a6])['style']['transform'] = 'scale(' + _0x46e613 + ')';
                            var _0x490002 = document['getElementById'](_0x71cb56[_0x4846a6])['getBoundingClientRect']()['width'];
                            _0x490002 = _0x490002 / _0x46e613 - _0x490002;
                            _0x490002 /= 0x2;
                            if (isNaN(_0x490002)) {
                                continue;
                            }
                            var _0x99d07d = document['getElementById'](_0x71cb56[_0x4846a6])['getBoundingClientRect']()['height'];
                            _0x99d07d = _0x99d07d / _0x46e613 - _0x99d07d;
                            _0x99d07d /= 0x2;
                            if (isNaN(_0x99d07d)) {
                                continue;
                            }
                            if (_0x49d1fc[_0x4846a6]['left'] !== undefined) {
                                document['getElementById'](_0x71cb56[_0x4846a6])['style']['left'] = _0x49d1fc[_0x4846a6]['left'] * _0x46e613 - _0x490002 + _0x3a8b2a['inset']['left'] / _0x193f4e['devicePixelRatio'];
                            }
                            if (_0x49d1fc[_0x4846a6]['top'] !== undefined) {
                                document['getElementById'](_0x71cb56[_0x4846a6])['style']['top'] = _0x49d1fc[_0x4846a6]['top'] * _0x46e613 - _0x99d07d + _0x3a8b2a['inset']['top'] / _0x193f4e['devicePixelRatio'];
                            }
                            if (_0x49d1fc[_0x4846a6]['bottom'] !== undefined) {
                                document['getElementById'](_0x71cb56[_0x4846a6])['style']['bottom'] = _0x49d1fc[_0x4846a6]['bottom'] * _0x46e613 - _0x99d07d + _0x3a8b2a['inset']['bottom'] / _0x193f4e['devicePixelRatio'];
                            }
                            if (_0x49d1fc[_0x4846a6]['right'] !== undefined) {
                                document['getElementById'](_0x71cb56[_0x4846a6])['style']['right'] = _0x49d1fc[_0x4846a6]['right'] * _0x46e613 - _0x490002 + _0x3a8b2a['inset']['right'] / _0x193f4e['devicePixelRatio'];
                            }
                        }
                    } catch (_0x558c2d) {
                        console['log']('Render issue');
                    }
                    _0x2f73b9();
                    _0x3a8b2a['render'](_0x3ad5a2);
                } else {
                    _0x4c7f3b['hideName'](_0x193f4e, _0x71cb56);
                }
                if (!_0x193f4e['spectating']) {
                    if (!_0x4d4973) {
                        _0x3a8b2a['render'](_0x1ed680);
                    }
                    _0x3ad5a2['opacity'] = 0x0;
                    if (_0x14a64b != null) {
                        clearInterval(_0x14a64b);
                        _0x14a64b = null;
                    }
                }
                _0x193f4e['timeEnd']('2');
            }
            function _0x333453() {
                _0x193f4e['flushMessageQueue']();
                if (_0x5ca4d6 == 0x0) {
                    _0x5d8d2d();
                }
                _0x45ff4f(_0x193f4e['clientDetails']['actualDt']);
                _0x1109c2['changedKeys']['forEach'](function (_0x528efc) {
                    _0x193f4e['currentPackets']['push']({
                        'type': 'updateControls',
                        'object': {
                            'key': _0x528efc,
                            'state': _0x1109c2[_0x528efc]
                        }
                    });
                });
                _0x1109c2['changedKeys'] = [];
                if (_0x5cab44['moved']) {
                    if (_0x5cab44['renderer'] !== undefined && !_0x39fdc9) {
                        _0x5cab44['x'] = Math['max'](Math['min']((_0x5cab44['newx'] - _0x5cab44['renderer']['c']['width'] / _0x193f4e['devicePixelRatio'] * _0x5cab44['renderer']['qualitySize'] / 0x2 - _0x5cab44['renderer']['left']) * _0x5cab44['renderer']['ratio'] / _0x5cab44['renderer']['qualitySize'] * _0x193f4e['devicePixelRatio'], 0x780 / 0x2), -0x780 / 0x2);
                        _0x5cab44['y'] = Math['max'](Math['min']((_0x5cab44['newy'] - _0x5cab44['renderer']['c']['height'] / _0x193f4e['devicePixelRatio'] * _0x5cab44['renderer']['qualitySize'] / 0x2 - _0x5cab44['renderer']['top']) * _0x5cab44['renderer']['ratio'] / _0x5cab44['renderer']['qualitySize'] * _0x193f4e['devicePixelRatio'], 0x438 / 0x2), -0x438 / 0x2);
                    }
                    _0x5cab44['moved'] = ![];
                }
                if (_0x39fdc9) {
                    _0x39fdc9 = ![];
                }
                _0x5cab44['x'] = Math['max'](Math['min'](_0x5cab44['x'], 0x780 / 0x2), -0x780 / 0x2);
                _0x5cab44['y'] = Math['max'](Math['min'](_0x5cab44['y'], 0x438 / 0x2), -0x438 / 0x2);
                _0xc74037['visible'] = !_0x5cab44['emulatedFromTouch'];
                var _0x5b075d = ![];
                _0x28ff14['visible'] = !_0x4d4973;
                for (var _0x8bd164 of _0x4576c4) {
                    _0x8bd164['visible'] = _0x5cab44['emulatedFromTouch'] && !_0x193f4e['spectating'];
                    _0x5b075d = _0x5b075d || _0x8bd164['touchActive'];
                }
                var _0x5d4780 = null;
                var _0x3fb7a9 = null;
                if (_0x193f4e['spectating']) {
                    while (_0x5ed3ee['touches']['length'] > 0x0) {
                        _0x5ed3ee['touches']['splice'](0x0, 0x1);
                    }
                }
                if (!_0x193f4e['spectating'] && !_0x4d4973 && !_0x4bf0a5) {
                    for (var _0xc57c42 of _0x5ed3ee['touches']) {
                        if (_0x5d4780 == null && _0xc57c42['tStartX'] < 0x0) {
                            _0x5d4780 = _0xc57c42;
                        } else if (_0x3fb7a9 == null && _0xc57c42['tStartX'] > 0x0 && !_0x5b075d) {
                            _0x3fb7a9 = _0xc57c42;
                        }
                    }
                }
                _0x4533f8(_0x164498, _0x5d4780);
                _0x4533f8(_0x3c206d, _0x3fb7a9);
                if (_0x5cab44['emulatedFromTouch']) {
                    if (_0x3c206d['isTriggering'] || _0x25b560['touchActive']) {
                        if (!_0x5cab44['clicking']) {
                            _0x5cab44['clicking'] = !![];
                            _0x5cab44['changed'] = !![];
                        }
                    } else {
                        if (_0x5cab44['clicking']) {
                            _0x5cab44['clicking'] = ![];
                            _0x5cab44['changed'] = !![];
                        }
                    }
                    if (_0x193f4e['me'] && !_0x193f4e['me']['building']) {
                        if (_0x3c206d['hasMoved']) {
                            if (!_0x5cab44['rightClicking']) {
                                _0x5cab44['rightClicking'] = !![];
                                _0x5cab44['rightChanged'] = !![];
                            }
                        } else {
                            if (_0x5cab44['rightClicking']) {
                                _0x5cab44['rightClicking'] = ![];
                                _0x5cab44['rightChanged'] = !![];
                            }
                        }
                    }
                } else {
                    if (_0x508836['shouldbevisible'] != ![]) {
                        _0x4dbb25(_0x508836, 'opacity', _0x508836['opacity'], 0x0, 0x190, 0x0, _0x2ba128['easeOutExpo']);
                    }
                    _0x508836['shouldbevisible'] = ![];
                }
                if (_0x508836['shouldbevisible'] != _0x3c206d['hasMoved']) {
                    if (_0x3c206d['hasMoved']) {
                        _0x4dbb25(_0x508836, 'opacity', _0x508836['opacity'], 0.25, 0x1f4, 0x0, _0x2ba128['easeOutExpo']);
                    } else {
                        _0x4dbb25(_0x508836, 'opacity', _0x508836['opacity'], 0x0, 0x190, 0x0, _0x2ba128['easeOutExpo']);
                    }
                }
                _0x508836['shouldbevisible'] = _0x3c206d['hasMoved'];
                if (_0x3c206d['hasMoved']) {
                    var _0x2aedb4 = _0x16f07a / 0x2 + 0x50;
                    _0x508836['position']['x'] = Math['cos'](_0x3c206d['angle']) * _0x2aedb4;
                    _0x508836['position']['y'] = Math['sin'](_0x3c206d['angle']) * _0x2aedb4;
                    _0x508836['rotation'] = _0x3c206d['angle'];
                }
                if (_0x5cab44['emulatedFromTouch']) {
                    var _0x51473c = ![];
                    var _0x409fd8 = ![];
                    var _0x37675c = ![];
                    var _0xfc7b23 = ![];
                    var _0x1d5b5b = !![];
                    if (_0x1109c2['useTouch'] != !![]) {
                        _0x1109c2['changedKeys']['push']('useTouch');
                        _0x1109c2['changed'] = !![];
                    }
                    _0x1109c2['useTouch'] = !![];
                    if (_0x164498['isActive'] && _0x164498['hasMoved']) {
                        var _0x2705e0 = Math['cos'](_0x164498['angle']);
                        var _0x22e246 = Math['sin'](_0x164498['angle']);
                        var _0x575252 = Math['sin'](Math['PI'] / 0x8);
                        _0x51473c = _0x2705e0 > _0x575252;
                        _0x409fd8 = _0x2705e0 < -_0x575252;
                        _0xfc7b23 = _0x22e246 > _0x575252;
                        _0x37675c = _0x22e246 < -_0x575252;
                        _0x1d5b5b = !_0x164498['isTriggering'];
                        if (_0x1109c2['touchDirection'] != _0x164498['angle']) {
                            _0x1109c2['changedKeys']['push']('useTouch');
                            _0x1109c2['changedKeys']['push']('touchDirection');
                        }
                        _0x1109c2['touchDirection'] = _0x164498['angle'];
                    }
                    if (!_0x164498['isActive']) {
                        if (_0x1109c2['touchDirection'] != -0x1) {
                            _0x1109c2['changedKeys']['push']('useTouch');
                            _0x1109c2['changedKeys']['push']('touchDirection');
                        }
                        _0x1109c2['touchDirection'] = -0x1;
                    }
                    if (_0x51473c != _0x1109c2['right']) {
                        _0x1109c2['right'] = _0x51473c;
                        _0x1109c2['changedKeys']['push']('right');
                        _0x1109c2['changed'] = !![];
                    }
                    if (_0x409fd8 != _0x1109c2['left']) {
                        _0x1109c2['left'] = _0x409fd8;
                        _0x1109c2['changedKeys']['push']('left');
                        _0x1109c2['changed'] = !![];
                    }
                    if (_0x37675c != _0x1109c2['up']) {
                        _0x1109c2['up'] = _0x37675c;
                        _0x1109c2['changedKeys']['push']('up');
                        _0x1109c2['changed'] = !![];
                    }
                    if (_0xfc7b23 != _0x1109c2['down']) {
                        _0x1109c2['down'] = _0xfc7b23;
                        _0x1109c2['changedKeys']['push']('down');
                        _0x1109c2['changed'] = !![];
                    }
                    if (_0x1d5b5b != _0x1109c2['shift']) {
                        _0x1109c2['shift'] = _0x1d5b5b;
                        _0x1109c2['changedKeys']['push']('shift');
                        _0x1109c2['changed'] = !![];
                    }
                } else {
                    if (_0x1109c2['useTouch'] != ![]) {
                        _0x1109c2['changedKeys']['push']('useTouch');
                        _0x1109c2['changed'] = !![];
                    }
                    _0x1109c2['useTouch'] = ![];
                }
                if (_0x193f4e['me']['ui'] !== undefined) {
                    if (!_0x193f4e['spectating'] && !_0x193f4e['me']['inCar']) {
                        var _0x39eb71;
                        if (!_0x5cab44['emulatedFromTouch']) {
                            _0x39eb71 = -Math['atan2'](_0x5cab44['x'] + (_0x227276['camera']['position']['x'] - _0x193f4e['me']['visual']['position']['x']) / _0x227276['camera']['ratio'], _0x5cab44['y'] + (_0x227276['camera']['position']['y'] - _0x193f4e['me']['visual']['position']['y']) / _0x227276['camera']['ratio']) + Math['PI'] / 0x2;
                        } else {
                            if (_0x164498['isActive'] && !_0x3c206d['isActive']) {
                                _0x39eb71 = _0x3c206d['angle'];
                            } else if (_0x3c206d['isActive']) {
                                _0x39eb71 = _0x3c206d['angle'];
                            }
                            _0x39eb71 = _0x3c206d['angle'];
                        }
                        if (_0x39eb71 !== undefined) {
                            _0x193f4e['me']['actualRotation'] = _0x193f4e['me']['visual']['rotation'] = _0x39eb71;
                        }
                    }
                    _0x193f4e['me']['ui']['rotation'] = -_0x193f4e['me']['visual']['rotation'];
                }
                _0x314d46 += _0x193f4e['clientDetails']['dt'];
                if (!_0x193f4e['spectating'] && _0x5628fe != Math['round'](_0x193f4e['me']['actualRotation'] * 0x32) && _0x193f4e['me']['ui'] !== undefined) {
                    if (_0x314d46 > 2.8 || _0x314d46 > 0.8 && _0x5cab44['clicking']) {
                        _0x193f4e['currentPackets']['push']({
                            'type': 's',
                            'a': Math['round'](_0x193f4e['me']['actualRotation'] * 0x3e8) / 0x3e8
                        });
                        _0x5628fe = Math['round'](_0x193f4e['me']['actualRotation'] * 0x32);
                        _0x314d46 = 0x0;
                    }
                }
                if (!_0x193f4e['spectating']) {
                    _0x3ad5a2['opacity'] = 0x0;
                    if (_0x14a64b != null) {
                        clearInterval(_0x14a64b);
                        _0x14a64b = null;
                    }
                }
                if (_0x56ed1d) {
                    _0x5cab44['clicking'] = ![];
                    _0x56ed1d = ![];
                }
                if (_0x5cab44['changed']) {
                    if (_0x4d4973) {
                        _0x5cab44['clicking'] = ![];
                    }
                    _0x193f4e['currentPackets']['push']({
                        'type': 'mouse',
                        'clicking': _0x5cab44['clicking']
                    });
                    _0x5cab44['changed'] = ![];
                }
                if (_0x5cab44['rightChanged']) {
                    _0x193f4e['currentPackets']['push']({
                        'type': 'mouse2',
                        'clicking': _0x5cab44['rightClicking']
                    });
                    _0x5cab44['rightChanged'] = ![];
                }
                if (!_0x193f4e['spectating']) { }
                _0x3c93e6['position']['x'] = -_0x227276['camera']['position']['x'] % 0x32 + _0x227276['camera']['position']['x'];
                _0x3c93e6['position']['y'] = -_0x227276['camera']['position']['y'] % 0x32 + _0x227276['camera']['position']['y'];
                if (_0x2ca822 > 0x64 && _0x193f4e['me']['steadying'] !== undefined) {
                    _0x548331++;
                    var _0x42cfb4 = 0x1;
                    if (_0x548331 >= 0x4) {
                        _0x42cfb4 = 0x0;
                        _0x548331 = 0x0;
                    }
                    for (let _0x4c9933 = _0x42cfb4; _0x4c9933 < _0xd7c504['length']; _0x4c9933++) {
                        for (let _0x3a25c8 = _0xd7c504[_0x4c9933]['objects']['length'] - 0x1; _0x3a25c8 >= 0x0; _0x3a25c8--) {
                            let _0x5dccff = _0xd7c504[_0x4c9933]['objects'][_0x3a25c8];
                            if (_0x4cd4de(_0x5dccff)) {
                                _0x5dccff['visible'] = !![];
                            } else {
                                _0x5dccff['visible'] = ![];
                            }
                        };
                        for (let _0x18eb55 = 0x0; _0x18eb55 < _0xd7c504[_0x4c9933]['belowObjects']['length']; _0x18eb55++) {
                            let _0x3e66b5 = _0xd7c504[_0x4c9933]['belowObjects'][_0x18eb55];
                            if (_0x4cd4de(_0x3e66b5)) {
                                _0x3e66b5['visible'] = !![];
                            } else {
                                _0x3e66b5['visible'] = ![];
                            }
                        }
                    }
                    if (_0x193f4e['me']['steadying']) {
                        _0x2ca822 = 0x32;
                    } else {
                        _0x2ca822 = 0x0;
                    }
                }
                _0x2ca822 += _0x193f4e['clientDetails']['dt'] * 16.67;
                _0x589425 += _0x193f4e['clientDetails']['dt'] / 0x96;
                if (_0x589425 > 0x1) {
                    _0x589425 -= 0x1;
                }
                if (_0x498387['length'] > 0x0 && Math['abs'](_0x498387[0x0]['position']['x'] - _0x193f4e['me']['visual']['position']['x']) < 0x9c4) {
                    var _0x22f5d6 = ![];
                    for (var _0x37b30f = 0x0; _0x37b30f < _0x498387['length']; _0x37b30f++) {
                        if (Math['abs'](_0x498387[_0x37b30f]['position']['y'] - _0x193f4e['me']['visual']['position']['y']) > 0x7d0) {
                            if (_0x22f5d6) {
                                break;
                            }
                            continue;
                        }
                        var _0xbfbbcf = _0x37b30f - _0x498387['length'] / 0x2;
                        _0x498387[_0x37b30f]['position']['y'] = 0x1f4 / 0x3 * _0xbfbbcf + _0x589425 * 0x1f4 / 0x3;
                        _0x498387[_0x37b30f]['opacity'] = (Math['sin'](_0x498387[_0x37b30f]['position']['y'] / 0x64 - _0x589425 * Math['PI'] * 0x2) + 0x1) / 0x8 + 0.07;
                        _0x22f5d6 = !![];
                    }
                }
                _0x5806f9 += _0x193f4e['clientDetails']['dt'] / 0x4;
                if (!_0x2f42fc && _0x193f4e['spectating']) {
                    _0x50201b = 0x50;
                }
                _0x2f42fc = _0x193f4e['spectating'];
                _0x193f4e['update']();
                _0x227276['camera']['position'] = new _0x193f4e['Vector2'](_0x193f4e['me']['visual']['position']['x'], _0x193f4e['me']['visual']['position']['y']);
                _0x5f3187['update']();
                if (_0x193f4e['me']['steadying'] !== undefined && _0x193f4e['me']['steadying'] && _0x193f4e['me']['reloadTime'] <= 0x0 && _0x5cab44['rightClicking'] && !_0x193f4e['spectating']) {
                    var _0x569343 = _0x39ace1[_0x193f4e['me']['weaponSlots'][_0x193f4e['me']['selectedWeapon']]['type']];
                    if (_0x5cab44['emulatedFromTouch']) {
                        _0x569343 = _0x1aafd2[_0x193f4e['me']['weaponSlots'][_0x193f4e['me']['selectedWeapon']]['type']];
                    }
                    var _0x46d228 = _0x569343;
                    var _0x437513 = _0x44594e(_0x5cab44, new _0x193f4e['Vector2'](0x0, 0x0));
                    if (isNaN(_0x437513)) {
                        console['log']('Mouse Distance is NaN');
                        _0x437513 = 0x0;
                    }
                    if (_0x437513 < _0x569343) {
                        _0x46d228 = _0x437513;
                    }
                    if (_0x193f4e['me']['currentJump'] != 0x0) {
                        _0x46d228 = 0x0;
                    }
                    _0x545239 += (_0x46d228 - _0x545239) * 0.1;
                } else {
                    _0x545239 += -_0x545239 * 0.1;
                }
                if (isNaN(_0x545239)) {
                    console['log']('Camera Distance is NaN');
                    _0x545239 = 0x0;
                }
                if (_0x193f4e['me']['steadying'] !== undefined && _0x193f4e['me']['steadying'] && _0x193f4e['me']['reloadTime'] <= 0x0 && !_0x193f4e['spectating']) {
                    _0x514072 -= _0x193f4e['clientDetails']['dt'] / 0x23;
                    _0x514072 = Math['max'](_0x514072, 0.25);
                } else {
                    _0x514072 += _0x193f4e['clientDetails']['dt'] / 0x1e;
                    _0x514072 = Math['min'](_0x514072, 0x1);
                }
                if (_0x193f4e['me']['sprite'] !== undefined) {
                    if (Math['abs'](_0x8baf8f - _0x193f4e['me']['actualRotation']) > Math['PI']) {
                        if (_0x8baf8f > _0x193f4e['me']['actualRotation'])
                            _0x8baf8f -= Math['PI'] * 0x2;
                        else
                            _0x8baf8f += Math['PI'] * 0x2;
                    }
                    if (!isNaN(_0x193f4e['me']['actualRotation'])) {
                        _0x8baf8f += (_0x193f4e['me']['actualRotation'] - _0x8baf8f) * 0.1;
                        _0x8baf8f = _0x193f4e['me']['actualRotation'];
                    } else {
                        _0x8baf8f = 0x0;
                    }
                    if (!isNaN(_0x8baf8f)) {
                        _0x227276['camera']['position']['x'] += Math['cos'](_0x8baf8f) * _0x545239;
                        _0x227276['camera']['position']['y'] += Math['sin'](_0x8baf8f) * _0x545239;
                    } else {
                        console['log']('Issue with rotation: ' + _0x8baf8f);
                    }
                }
                _0x5cab44['x'] = Math['max'](Math['min'](_0x5cab44['x'], 0x780 / 0x2), -0x780 / 0x2);
                _0x5cab44['y'] = Math['max'](Math['min'](_0x5cab44['y'], 0x438 / 0x2), -0x438 / 0x2);
                for (var _0xfcd844 = 0x0; _0xfcd844 < _0x13da85['length']; _0xfcd844++) {
                    if (_0x13da85[_0xfcd844]['hasRoof']) {
                        _0x13da85[_0xfcd844]['roof']['opacity'] = Math['min'](_0x13da85[_0xfcd844]['roof']['opacity'], 0.999);
                        if (_0x13da85[_0xfcd844]['under']) {
                            _0x13da85[_0xfcd844]['roof']['opacity'] -= _0x193f4e['clientDetails']['dt'] / 0xf;
                            _0x13da85[_0xfcd844]['roof']['opacity'] = Math['max'](_0x13da85[_0xfcd844]['roof']['opacity'], _0x13da85[_0xfcd844]['roofOpacity']);
                        } else {
                            _0x13da85[_0xfcd844]['roof']['opacity'] += _0x193f4e['clientDetails']['dt'] / 0xf;
                            _0x13da85[_0xfcd844]['roof']['opacity'] = Math['min'](_0x13da85[_0xfcd844]['roof']['opacity'], 0.999);
                        }
                    }
                }
                if (_0x5cab44['x'] !== undefined && _0x5cab44['y'] !== undefined) {
                    _0xc74037['position']['x'] = _0x5cab44['x'];
                    _0xc74037['position']['y'] = _0x5cab44['y'];
                }
                if (_0x58e1a9 != _0x193f4e['me']['id']) {
                    _0x2ca822 = 0x32;
                    _0x548331 = 0x2;
                    _0x58e1a9 = _0x193f4e['me']['id'];
                }
                if (_0x193f4e['spectating'])
                    _0x193f4e['me']['wallTime'] = 0x0;
                if (!_0x193f4e['spectating'] && !document['hidden']) {
                    if (_0x193f4e['me']['inCar']) {
                        _0x227276['mouseCamera']['x'] += (Math['cos'](_0x193f4e['me']['visual']['rotation']) * 0x1f4 / 0x7 - _0x227276['mouseCamera']['x']) * 0.1 * Math['min'](_0x193f4e['clientDetails']['dt'], 0x2);
                        _0x227276['mouseCamera']['y'] += (Math['sin'](_0x193f4e['me']['visual']['rotation']) * 0x1f4 / 0x7 - _0x227276['mouseCamera']['y']) * 0.1 * Math['min'](_0x193f4e['clientDetails']['dt'], 0x2);
                    } else {
                        _0x227276['mouseCamera']['x'] += (_0x5cab44['x'] / 0x7 - _0x227276['mouseCamera']['x']) * 0.1 * Math['min'](_0x193f4e['clientDetails']['dt'], 0x2);
                        _0x227276['mouseCamera']['y'] += (_0x5cab44['y'] / 0x7 - _0x227276['mouseCamera']['y']) * 0.1 * Math['min'](_0x193f4e['clientDetails']['dt'], 0x2);
                    }
                    if (_0x193f4e['me']['reloadTime'] !== undefined && _0x193f4e['me']['reloadTime'] > 0x0) {
                        _0x4c0ab0['angle'] = Math['PI'] * 0x2 * _0x193f4e['me']['reloadTime'] / 0xa / _0x193f4e['me']['fullReload'];
                        _0x4c0ab0['rotation'] = -_0x4c0ab0['angle'] - Math['PI'] / 0x2;
                        _0x2203fe['text'] = _0x193f4e['me']['newReloadTime'] / 0xa;
                        if (_0x193f4e['me']['newReloadTime'] % 0xa == 0x0) {
                            _0x2203fe['text'] += '.0';
                        }
                        _0x58f352['opacity'] = 0x1;
                        _0x58f352['position']['y'] = _0x3a8b2a['bottomOfScreen'] - 0x96;
                    } else {
                        _0x58f352['opacity'] = Math['max'](_0x58f352['opacity'] - _0x193f4e['clientDetails']['dt'] / 0x14, 0x0);
                        _0x2203fe['text'] = '0.0';
                    }
                } else {
                    _0x227276['mouseCamera']['x'] *= 0.1 / Math['min'](_0x193f4e['clientDetails']['dt'], 0x2);
                    _0x227276['mouseCamera']['y'] *= 0.1 / Math['min'](_0x193f4e['clientDetails']['dt'], 0x2);
                }
                if (_0x227276['camera']['borderRatio'] > _0x227276['camera']['newRatio']) {
                    _0x227276['camera']['ratio'] += (_0x227276['camera']['newRatio'] - _0x227276['camera']['ratio']) * 0.05;
                } else {
                    _0x227276['camera']['ratio'] += (_0x227276['camera']['borderRatio'] - _0x227276['camera']['ratio']) * 0.05;
                }
                if (_0x193f4e['me']['ui'] !== undefined) {
                    if (!_0x193f4e['spectating'] && !_0x193f4e['me']['inCar']) {
                        if (_0x5cab44['emulatedFromTouch']) {
                            if (_0x164498['isActive'] && !_0x3c206d['isActive']) {
                                _0x193f4e['me']['actualRotation'] = _0x193f4e['me']['visual']['rotation'] = _0x3c206d['angle'];
                            } else if (_0x3c206d['isActive']) {
                                _0x193f4e['me']['actualRotation'] = _0x193f4e['me']['visual']['rotation'] = _0x3c206d['angle'];
                            }
                            _0x193f4e['me']['actualRotation'] = _0x193f4e['me']['visual']['rotation'] = _0x3c206d['angle'];
                        } else {
                            _0x193f4e['me']['actualRotation'] = _0x193f4e['me']['visual']['rotation'] = -Math['atan2'](_0x5cab44['x'] + (_0x227276['camera']['position']['x'] - _0x193f4e['me']['visual']['position']['x']) / _0x227276['camera']['ratio'], _0x5cab44['y'] + (_0x227276['camera']['position']['y'] - _0x193f4e['me']['visual']['position']['y']) / _0x227276['camera']['ratio']) + Math['PI'] / 0x2;
                        }
                    }
                    _0x193f4e['me']['ui']['rotation'] = -_0x193f4e['me']['visual']['rotation'];
                }
                _0x2ebcc2();
                _0x28ff14['position']['x'] = _0x3a8b2a['rightOfScreen'] - _0x3a8b2a['inset']['right'] * _0x3a8b2a['scaleFactor'];
                _0x28ff14['position']['y'] = 0x0;
                _0x3042a4['position']['x'] = _0x3a8b2a['rightOfScreen'] - _0x3a8b2a['inset']['right'] * _0x3a8b2a['scaleFactor'];
                _0x3042a4['position']['y'] = _0x3a8b2a['bottomOfScreen'] - _0x3a8b2a['inset']['bottom'] * _0x3a8b2a['scaleFactor'];
                _0x529454['position']['x'] = _0x3a8b2a['leftOfScreen'] + _0x3a8b2a['inset']['left'] * _0x3a8b2a['scaleFactor'];
                _0x529454['position']['y'] = _0x3a8b2a['bottomOfScreen'] - _0x3a8b2a['inset']['bottom'] * _0x3a8b2a['scaleFactor'];
                if (_0x5cab44['emulatedFromTouch']) {
                    _0x10f849['position']['x'] = _0x3a8b2a['leftOfScreen'] + 0x12c + _0x3a8b2a['inset']['left'] * _0x3a8b2a['scaleFactor'];
                    _0x10f849['position']['y'] = _0x3a8b2a['topOfScreen'] + _0x3a8b2a['inset']['top'] * _0x3a8b2a['scaleFactor'];
                } else {
                    _0x10f849['position']['x'] = _0x3a8b2a['rightOfScreen'] - _0x3a8b2a['inset']['right'] * _0x3a8b2a['scaleFactor'];
                    _0x10f849['position']['y'] = _0x3a8b2a['topOfScreen'] + _0x3a8b2a['inset']['top'] * _0x3a8b2a['scaleFactor'];
                }
                if (_0x5cab44['emulatedFromTouch']) {
                    if (_0x193f4e['me']['building'] || _0x4d4973) {
                        for (var _0xfcd844 = 0x0; _0xfcd844 < _0x1e1a0e['length']; _0xfcd844++) {
                            _0x1e1a0e[_0xfcd844]['opacity'] = 0x1;
                        }
                    } else {
                        for (var _0xfcd844 = 0x0; _0xfcd844 < _0x1e1a0e['length']; _0xfcd844++) {
                            _0x1e1a0e[_0xfcd844]['opacity'] = 0x0;
                        }
                    }
                } else {
                    for (var _0xfcd844 = 0x0; _0xfcd844 < _0x1e1a0e['length']; _0xfcd844++) {
                        _0x1e1a0e[_0xfcd844]['opacity'] = 0x1;
                    }
                }
                _0x416a1a['position']['x'] = _0x3a8b2a['leftOfScreen'] + _0x3a8b2a['inset']['left'] * _0x3a8b2a['scaleFactor'];
                _0x416a1a['position']['y'] = _0x3a8b2a['topOfScreen'] - _0x3a8b2a['inset']['top'] * _0x3a8b2a['scaleFactor'];
                _0x4660c3();
                _0x225b70['text'] = _0x35bfad['text'];
                _0x1c9560['text'] = _0x3f6e4c['text'];
                _0x8c95b9['position']['x'] = 0x7d + _0x8c95b9['width'] / 0x2;
                _0x42f1a4['position']['x'] = 0x7d + _0x42f1a4['width'] / 0x2;
                if (_0x18fcd5) {
                    _0x4bc094['opacity'] = 0x5;
                    _0x13fb96['opacity'] = 0x1;
                    _0x548f87['opacity'] = 0x1;
                } else {
                    _0x4bc094['opacity'] = 0x0;
                    _0x13fb96['opacity'] = 0x0;
                    _0x548f87['opacity'] = 0x0;
                }
                _0x1c05ef['text'] = _0x4bc094['text'];
                _0x42c2cc['text'] = _0x13fb96['text'];
                _0x2baa65();
                _0x5f08af();
                if (_0x14a64b != null || _0x4559a1 || _0x193f4e['spectating'] && _0x39ee6c['opacity'] != 0x0) {
                    _0x39ee6c['opacity'] += _0x193f4e['clientDetails']['dt'] / 0x1e;
                    _0x4559a1 = ![];
                } else {
                    _0x39ee6c['opacity'] = 0x0;
                    if (!_0x193f4e['spectating']) {
                        if (window['spawnText']['text'] != 'Ready') {
                            window['spawnButton']['color'] = '#0D0';
                            window['spawnButton']['strokeStyle'] = '#0B0';
                            window['spawnText']['belowObjects'][0x0]['strokeStyle'] = '#0B0';
                            window['spawnText']['belowObjects'][0x0]['text'] = 'Ready';
                            window['spawnText']['text'] = 'Ready';
                        }
                    }
                }
                _0x39ee6c['opacity'] = Math['min'](_0x39ee6c['opacity'], 0x1);
                if (_0x401a87 < 0xa) {
                    _0x401a87++;
                }
                if (_0x549484 < 0xa) {
                    _0x549484++;
                }
                if (_0x193f4e['spectating']) {
                    _0x3171ee = 0x0;
                }
                if (_0x3171ee > 0x0 && _0x4606d5['opacity'] < 0x1) {
                    _0x4606d5['opacity'] += _0x193f4e['clientDetails']['dt'] / 0x1e;
                    _0x4606d5['opacity'] = Math['min'](_0x4606d5['opacity'], 0x1);
                } else if (_0x3171ee <= 0x0 && _0x4606d5['opacity'] > 0x0) {
                    _0x4606d5['opacity'] -= _0x193f4e['clientDetails']['dt'] / 0x1e;
                    _0x4606d5['opacity'] = Math['max'](_0x4606d5['opacity'], 0x0);
                }
                if (_0x3171ee > 0x0) {
                    _0x3171ee -= _0x193f4e['clientDetails']['dt'] / 0x28;
                    _0x3d4798();
                }
                var _0x215e39 = ![];
                if (_0x576960 == 'waiting') {
                    if (localStorage.deltaGameState !== 'game') socket.emit("gameState", "game")
                    localStorage.deltaGameState = 'game'
                    _0xeffedc['text'] = 'Storm is closing in ' + _0x310d1e + ' seconds!';
                    if (_0x310d1e <= 0xa && _0x310d1e > 0x5) {
                        _0x215e39 = !![];
                    }
                    if (_0x3171ee > 0x0 || _0x193f4e['spectating']) {
                        _0x215e39 = ![];
                    }
                }
                if (_0x576960 == 'lobby') {
                    if (localStorage.deltaGameState !== 'lobby') socket.emit("gameState", "lobby")
                    localStorage.deltaGameState = 'lobby'
                    _0x215e39 = !![];
                    if (_0x310d1e < 0x0) {
                        _0xeffedc['text'] = 'Waiting for players...';
                        _0xeffedc['opacity'] = 0x1;
                    } else {
                        _0xeffedc['text'] = 'Match starting in ' + _0x310d1e + ' seconds';
                    }
                }
                _0x51d34c();
                if (_0x215e39) {
                    _0xeffedc['opacity'] += _0x193f4e['clientDetails']['dt'] / 0x1e;
                    _0xeffedc['opacity'] = Math['min'](_0xeffedc['opacity'], 0x1);
                } else {
                    _0xeffedc['opacity'] -= _0x193f4e['clientDetails']['dt'] / 0x1e;
                    _0xeffedc['opacity'] = Math['max'](_0xeffedc['opacity'], 0x0);
                }
                _0x4f973['opacity'] = _0xeffedc['opacity'] * 0.3;
                _0x4f973['height'] = _0xeffedc['fontSize'] + 0x28;
                _0x4f973['width'] = _0xeffedc['width'] + 0x28;
                _0x4f973['position']['y'] = _0xeffedc['position']['y'];
                _0x5722c8--;
                if (_0x5722c8 <= 0x0) {
                    _0x48a29d();
                    _0x5722c8 = _0x38227d;
                }
                _0x3e5cc1 += _0x193f4e['clientDetails']['dt'] / 0xf;
                if (_0x3e5cc1 > Math['PI'] * 0x2) {
                    _0x3e5cc1 -= Math['PI'] * 0x2;
                }
                _0x390098 = Math['sin'](_0x3e5cc1);
                _0x3042a4['opacity'] = _0x514072;
                _0x529454['opacity'] = _0x514072;
                _0x10f849['opacity'] = _0x514072 * 0.8;
                _0x28fd19['opacity'] = _0x514072;
                _0x416a1a['opacity'] = _0x514072;
            }
            var _0x5d3358 = [];
            for (var _0x3192cf = 0x0; _0x3192cf < _0x421d47['belowObjects']['length']; _0x3192cf++) { }
            var _0x2fd03f = document['createElement']('canvas');
            var _0x506898 = _0x2fd03f['getContext']('2d');
            var _0x3626d6 = 0x780 + 0x64;
            var _0xd14b09 = 0x438 + 0x64;
            _0x2fd03f['width'] = _0x3626d6;
            _0x2fd03f['height'] = _0xd14b09;
            _0x506898['globalAlpha'] = 0x1;
            _0x506898['setTransform'](0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
            _0x506898['translate'](_0x3626d6 / 0x2, _0xd14b09 / 0x2);
            var _0x5674fd = new _0x193f4e['object']();
            _0x5674fd['objects'] = _0x421d47['belowObjects'];
            _0x5674fd['render'](_0x506898, 0x1, 0x1);
            var _0x3c93e6 = new _0x193f4e['image'](_0x2fd03f, 0x0, 0x0, _0x3626d6, _0xd14b09);
            _0x421d47['belowObjects'] = [_0x3c93e6];
            function _0x42de57() {
                var _0x3b97bf = -0x1;
                for (var _0x362f07 = 0x0; _0x362f07 < _0x5d3358['length']; _0x362f07 += 0x5) {
                    if (_0x2e39c9(_0x5d3358[_0x362f07])) {
                        _0x3b97bf = _0x362f07;
                        break;
                    }
                }
                if (_0x3b97bf == -0x1) {
                    return;
                }
                var _0x4388b9 = new Array(0x50);
                var _0x1e39d7 = 0x0;
                for (var _0x362f07 = _0x3b97bf; _0x362f07 > 0x0 && Math['abs'](_0x227276['camera']['position']['y'] - _0x5d3358[_0x362f07]['position']['y']) < 0x3ac; _0x362f07--) {
                    if (_0x2e39c9(_0x5d3358[_0x362f07])) {
                        _0x4388b9[_0x1e39d7] = _0x5d3358[_0x362f07];
                        _0x1e39d7++;
                    }
                }
                for (var _0x362f07 = _0x3b97bf; _0x362f07 < _0x5d3358['length'] && Math['abs'](_0x227276['camera']['position']['x'] - _0x5d3358[_0x362f07]['position']['x']) < 0x550; _0x362f07++) {
                    if (_0x2e39c9(_0x5d3358[_0x362f07])) {
                        _0x4388b9[_0x1e39d7] = _0x5d3358[_0x362f07];
                        _0x1e39d7++;
                    }
                }
                _0x421d47['belowObjects'] = _0x4388b9;
            }
            function _0x2e39c9(_0x2e877a) {
                if (Math['abs'](_0x227276['camera']['position']['x'] - _0x2e877a['position']['x']) > 0x488)
                    return ![];
                if (Math['abs'](_0x227276['camera']['position']['y'] - _0x2e877a['position']['y']) > 0x2e4)
                    return ![];
                return !![];
            }
            _0x2631fc();
            var _0x38bb24 = ![];
            _0x193f4e['onGetEnvs'] = function (_0x1866d9) {
                var _0x58e0a0 = _0x1866d9['riverWidth'] - 0x2;
                var _0x1df91f = 0x1f4;
                var _0x45ce20 = 0x4b;
                var _0x454160 = _0x1866d9['river'];
                var _0x4aaf19 = new _0x193f4e['scene']();
                _0x4aaf19['addBelow'](new _0x193f4e['rectangle'](0x0, 0x0, _0x42a2d6, _0x42a2d6, window['groundColor']));
                var _0xfeb125 = 0x1f4;
                var _0x33dcb5 = 0x32;
                var _0x1bae16 = _0x3a4184('grid');
                for (var _0xeb60f3 = -_0x33dcb5; _0xeb60f3 <= _0x33dcb5; _0xeb60f3++) {
                    for (var _0x52f640 = -_0x33dcb5; _0x52f640 <= _0x33dcb5; _0x52f640++) {
                        var _0x3bb267 = new _0x193f4e['image'](_0x1bae16, _0xeb60f3 * _0xfeb125, _0x52f640 * _0xfeb125, _0xfeb125, _0xfeb125, 0.14);
                        _0x4aaf19['add'](_0x3bb267);
                    }
                }
                var _0x4ee2f6 = _0x3a4184('wave');
                for (var _0x45130d = -0x13; _0x45130d <= 0x13; _0x45130d++) {
                    var _0x52f640 = _0x45130d * _0x1df91f;
                    var _0x31a737 = new _0x193f4e['rectangle'](_0x454160 + _0x58e0a0 / 0x2 + _0x45ce20 / 0x2, _0x52f640, _0x45ce20, _0x1df91f, '#d2c290', 0.3);
                    _0x31a737['background'] = !![];
                    _0x4aaf19['add'](_0x31a737);
                    _0x31a737['parent'] = null;
                    _0x4ff890['add'](_0x31a737);
                    var _0x3b8f1f = new _0x193f4e['rectangle'](_0x454160 - _0x58e0a0 / 0x2 - _0x45ce20 / 0x2, _0x52f640, _0x45ce20, _0x1df91f, '#d2c290', 0.3);
                    _0x3b8f1f['background'] = !![];
                    _0x4aaf19['add'](_0x3b8f1f);
                    _0x3b8f1f['parent'] = null;
                    _0x4ff890['add'](_0x3b8f1f);
                    var _0x1050e6 = new _0x193f4e['rectangle'](_0x454160, _0x52f640, _0x58e0a0, _0x1df91f, 'blue', 0.4);
                    _0x1050e6['background'] = !![];
                    _0x4aaf19['add'](_0x1050e6);
                    _0x1050e6['parent'] = null;
                    _0x4ff890['add'](_0x1050e6);
                    for (var _0x3899d4 = 0x0; _0x3899d4 < 0x3; _0x3899d4++) {
                        var _0x3eac76 = new _0x193f4e['image'](_0x4ee2f6, _0x454160, _0x52f640 - _0x1df91f / 0x2 + _0x3899d4 * 0x1f4 / 0x3, 0x64, 0x15e);
                        _0x3eac76['rotation'] = -Math['PI'] / 0x2;
                        _0x3eac76['size'] = 1.4;
                        _0x3eac76['background'] = !![];
                        _0x3eac76['opacity'] = 0.35;
                        if (_0x3899d4 == 0x2) {
                            _0x4aaf19['add'](_0x3eac76);
                            _0x3eac76['parent'] = null;
                        }
                        _0x343783['addBelow'](_0x3eac76);
                        _0x498387['push'](_0x3eac76);
                    }
                }
                var _0x2eeaba = ['rock', 'tree0', 'tree1', 'jungletree'];
                var _0x3d55b4 = _0x193f4e['envs']['resourceNames'];
                for (var _0x57bebe = 0x0; _0x57bebe < _0x2eeaba['length']; _0x57bebe++) {
                    var _0x4b9932 = _0x2eeaba[_0x57bebe];
                    for (var _0x45130d = 0x0; _0x45130d < _0x193f4e['envs']['resources']['length']; _0x45130d++) {
                        if (_0x3d55b4[_0x193f4e['envs']['resources'][_0x45130d][0x0]] != _0x4b9932) {
                            continue;
                        }
                        var _0x38c6b8 = _0x193f4e['envs']['resources'][_0x45130d];
                        var _0x80bb0b = {};
                        _0x80bb0b['type'] = _0x3d55b4[_0x38c6b8[0x0]];
                        _0x80bb0b['x'] = _0x38c6b8[0x1];
                        _0x80bb0b['y'] = _0x38c6b8[0x2];
                        _0x80bb0b['angle'] = _0x38c6b8[0x3];
                        _0x80bb0b['radius'] = _0x38c6b8[0x4];
                        if (_0x80bb0b['type'] != _0x4b9932) {
                            continue;
                        }
                        var _0x191a8c = _0x80bb0b['radius'] * 0x4;
                        var _0x476338 = 0x1;
                        if (_0x5f37fb) {
                            if (_0x80bb0b['type']['substring'](0x0, 0x4) == 'tree') {
                                _0x80bb0b['type'] = 'christmastree' + _0x80bb0b['type']['substring'](0x4, 0x5) * 0x2;
                            }
                            _0x476338 = 0.8;
                        }
                        var _0xbd464c = new _0x193f4e['image'](_0x3a4184(_0x80bb0b['type']), _0x80bb0b['x'], _0x80bb0b['y'], _0x191a8c, _0x191a8c, _0x476338);
                        _0xbd464c['rotation'] = _0x80bb0b['angle'];
                        _0x4aaf19['add'](_0xbd464c);
                    }
                }
                var _0x4f2dcf = ['dirt', 'dirtcurve', 'road', 'roadcurve'];
                var _0x47b6d8 = ['dirtbridge', 'roadbridge', 'stonebridge'];
                for (var _0x45130d = 0x0; _0x45130d < _0x1866d9['houses']['length']; _0x45130d++) {
                    if (_0x1866d9['houses'][_0x45130d]['image'] !== undefined) {
                        _0x1866d9['houses'][_0x45130d]['type'] = _0x1866d9['houses'][_0x45130d]['image'];
                    }
                    var _0x2888d7 = new _0x193f4e['image'](_0x3a4184(_0x1866d9['houses'][_0x45130d]['type']), _0x1866d9['houses'][_0x45130d]['position'][0x0], _0x1866d9['houses'][_0x45130d]['position'][0x1], _0x1866d9['houses'][_0x45130d]['width'], _0x1866d9['houses'][_0x45130d]['height']);
                    _0x2888d7['house'] = !![];
                    if (_0x1866d9['houses'][_0x45130d]['width'] == 0x0) {
                        _0x2888d7['size'] = 0x0;
                    }
                    _0x2888d7['rotation'] = _0x1866d9['houses'][_0x45130d]['rotation'] * Math['PI'] / 0x2;
                    if (_0x1866d9['houses'][_0x45130d]['type'] == 'pool') {
                        _0x2888d7['opacity'] = 0.75;
                    }
                    if (_0x1866d9['houses'][_0x45130d]['type'] == 'soccerfield') {
                        _0x2888d7['opacity'] = 0.65;
                    }
                    if (_0x5f37fb) {
                        if (_0x1866d9['houses'][_0x45130d]['type'] == 'field' || _0x1866d9['houses'][_0x45130d]['type'] == 'lot') {
                            _0x2888d7['opacity'] = 0.65;
                        }
                    }
                    var _0x5879b6 = _0x2888d7;
                    if (document['getElementById']('small' + _0x1866d9['houses'][_0x45130d]['type']) != null) {
                        _0x5879b6 = new _0x193f4e['image'](_0x3a4184('small' + _0x1866d9['houses'][_0x45130d]['type']), _0x1866d9['houses'][_0x45130d]['position'][0x0], _0x1866d9['houses'][_0x45130d]['position'][0x1], _0x1866d9['houses'][_0x45130d]['width'], _0x1866d9['houses'][_0x45130d]['height']);
                        _0x5879b6['rotation'] = _0x2888d7['rotation'];
                        _0x5879b6['opacity'] = _0x2888d7['opacity'];
                        if (_0x5f37fb) {
                            if (_0x4f2dcf['indexOf'](_0x1866d9['houses'][_0x45130d]['type']) != -0x1) {
                                _0x5879b6['opacity'] = 0.65;
                            }
                        }
                    }
                    if (_0x1866d9['houses'][_0x45130d]['type'] == 'cherryblossoms') {
                        _0x5879b6 = new _0x193f4e['object']();
                        _0x5879b6['position'] = _0x2888d7['position'];
                        var _0x46a90d = 0x12c;
                        _0x5879b6['add'](new _0x193f4e['image'](_0x3a4184('cherryblossom'), 0x0, -0x2 * 0x32, _0x46a90d, _0x46a90d));
                        _0x5879b6['add'](new _0x193f4e['image'](_0x3a4184('cherryblossom'), 0x4 * 0x32, 0x2 * 0x32, _0x46a90d, _0x46a90d));
                        _0x5879b6['add'](new _0x193f4e['image'](_0x3a4184('cherryblossom'), -0x4 * 0x32, 0x2 * 0x32, _0x46a90d, _0x46a90d));
                        _0x5879b6['rotation'] = _0x2888d7['rotation'];
                    }
                    _0x4aaf19['add'](_0x5879b6);
                    _0x2888d7['parent'] = null;
                    if (_0x1866d9['houses'][_0x45130d]['hasRoof']) {
                        _0x2888d7['under'] = ![];
                        _0x2888d7['roofOpacity'] = 0.075;
                        if (_0x1866d9['houses'][_0x45130d]['type'] == 'pavilion') {
                            _0x2888d7['roofOpacity'] = 0.4;
                        }
                        _0x2888d7['roof'] = new _0x193f4e['image'](_0x3a4184(_0x1866d9['houses'][_0x45130d]['type'] + 'roof'), _0x1866d9['houses'][_0x45130d]['position'][0x0], _0x1866d9['houses'][_0x45130d]['position'][0x1], _0x1866d9['houses'][_0x45130d]['width'], _0x1866d9['houses'][_0x45130d]['height']);
                        if (_0x3a4184(_0x1866d9['houses'][_0x45130d]['type'])['width'] != _0x3a4184(_0x1866d9['houses'][_0x45130d]['type'] + 'roof')['width'] || _0x3a4184(_0x1866d9['houses'][_0x45130d]['type'])['height'] != _0x3a4184(_0x1866d9['houses'][_0x45130d]['type'] + 'roof')['height']) {
                            if (_0x1866d9['houses'][_0x45130d]['type'] != 'soccergoal') {
                                _0x2888d7['roof']['image'] = null;
                            }
                        }
                        _0x2888d7['roof']['rotation'] = _0x1866d9['houses'][_0x45130d]['rotation'] * Math['PI'] / 0x2;
                        _0x2888d7['roof']['house'] = !![];
                        _0x4aaf19['add'](_0x2888d7['roof']);
                        _0x2888d7['roof']['parent'] = null;
                        _0x4d0080['add'](_0x2888d7['roof']);
                    }
                    _0x2888d7['hasRoof'] = _0x1866d9['houses'][_0x45130d]['hasRoof'];
                    _0x13da85['push'](_0x2888d7);
                    if (_0x47b6d8['indexOf'](_0x1866d9['houses'][_0x45130d]['type']) >= 0x0) {
                        _0x343783['add'](_0x2888d7);
                        if (_0x5f37fb) {
                            _0x2888d7['opacity'] = 0.65;
                        }
                    } else if (_0x4f2dcf['indexOf'](_0x1866d9['houses'][_0x45130d]['type']) == -0x1) {
                        _0x4ff890['add'](_0x2888d7);
                    } else {
                        _0x2888d7['opacity'] = 0x1;
                        if (_0x5f37fb) {
                            _0x2888d7['opacity'] = 0.65;
                        }
                        _0x4ff890['addBelow'](_0x2888d7);
                    }
                }
                if (!_0x5f37fb) {
                    _0x2eeaba = ['corn', 'pumpkin'];
                    for (var _0x57bebe = 0x0; _0x57bebe < _0x2eeaba['length']; _0x57bebe++) {
                        var _0x4b9932 = _0x2eeaba[_0x57bebe];
                        for (var _0x45130d = 0x0; _0x45130d < _0x193f4e['envs']['resources']['length']; _0x45130d++) {
                            var _0x38c6b8 = _0x193f4e['envs']['resources'][_0x45130d];
                            var _0x80bb0b = {};
                            _0x80bb0b['type'] = _0x3d55b4[_0x38c6b8[0x0]];
                            _0x80bb0b['x'] = _0x38c6b8[0x1];
                            _0x80bb0b['y'] = _0x38c6b8[0x2];
                            _0x80bb0b['angle'] = _0x38c6b8[0x3];
                            _0x80bb0b['radius'] = _0x38c6b8[0x4];
                            if (_0x80bb0b['type'] != _0x4b9932) {
                                continue;
                            }
                            var _0x191a8c = _0x80bb0b['radius'] * 0x4;
                            var _0x476338 = 0x1;
                            if (_0x5f37fb) {
                                if (_0x80bb0b['type']['substring'](0x0, 0x4) == 'tree') {
                                    console['log'](_0x80bb0b['type']['substring'](0x4, 0x1));
                                    _0x80bb0b['type'] = 'christmastree' + _0x80bb0b['type']['substring'](0x4, 0x1) * 0x2;
                                }
                                _0x476338 = 0.8;
                            }
                            var _0xbd464c = new _0x193f4e['image'](_0x3a4184(_0x80bb0b['type']), _0x80bb0b['x'], _0x80bb0b['y'], _0x191a8c, _0x191a8c, _0x476338);
                            _0xbd464c['rotation'] = _0x80bb0b['angle'];
                            _0x4aaf19['add'](_0xbd464c);
                        }
                    }
                }
                var _0x3a3a4d = 0xfa;
                var _0x38804c = _0x1866d9['locations'];
                for (var _0x45130d = 0x0; _0x45130d < _0x38804c['length']; _0x45130d++) {
                    var _0x33a5e1 = new _0x193f4e['text'](_0x38804c[_0x45130d]['name'], _0x38804c[_0x45130d]['x'] * 0x32, _0x38804c[_0x45130d]['y'] * 0x32, '#FFF', 'Arial Black', _0x3a3a4d, '', 0x1, 'center');
                    var _0x3d4eb1 = new _0x193f4e['strokeText'](_0x38804c[_0x45130d]['name'], 0x0, 0x0, '#000', 'Arial Black', _0x3a3a4d, '', 0x1, 'center');
                    _0x3d4eb1['lineWidth'] = 0x46;
                    _0x33a5e1['addBelow'](_0x3d4eb1);
                    _0x4aaf19['add'](_0x33a5e1);
                }
                _0x5e7f93['translate'](_0xa4384a['width'] / 0x2, _0xa4384a['height'] / 0x2);
                _0x4aaf19['render'](_0x5e7f93, _0x42a2d6 / 0x708, 0x1);
                _0x193f4e['envs'] = {};
            };
            _0x193f4e['normalLerp'] = function (_0x296fa2, _0x1b8791, _0x49f09f) {
                return (_0x1b8791 - _0x296fa2) * _0x49f09f + _0x296fa2;
            };
            var _0x365310 = new _0x193f4e['scene']();
            var _0x29d998;
            var _0x38ef5d = [];
            var _0x3e0feb = [{
                'opacity': 0.8,
                'x': -0x23,
                'y': -0x6,
                'width': 0x3c
            }, {
                'opacity': 0.6,
                'x': -0x41,
                'y': 0xf,
                'width': 0x2d
            }, {
                'opacity': 0.35,
                'x': -0x57,
                'y': -0x5,
                'width': 0x23
            }, {
                'opacity': 0.15,
                'x': -0x73,
                'y': 0xa,
                'width': 0x1c
            }];
            var _0x3688a0 = [{
                'hair': 0x0,
                'weaponSlots': [{
                    'type': 'famas',
                    'rarity': 0x0,
                    'ammo': 0x0
                }],
                'flare': !![],
                'steadying': !![],
                'rotation': Math['PI'] / 0x2 + 0.2,
                'start': new _0x193f4e['Vector2'](-0x18b, -0x156),
                'end': new _0x193f4e['Vector2'](-0x181, -0x152),
                'startRotation': Math['PI'] / 0x2 + 0.25,
                'endRotation': Math['PI'] / 0x2 + 0.4,
                'smokes': [{
                    'opacity': 0.56,
                    'x': -0x23,
                    'y': -0x6,
                    'width': 0x3c
                }, {
                    'opacity': 0.3,
                    'x': -0x46,
                    'y': 0xf,
                    'width': 0x2d
                }, {
                    'opacity': 0.15,
                    'x': -0x57,
                    'y': -0xf,
                    'width': 0x23
                }]
            }, {
                'hair': 0x1,
                'footSin': 0x1,
                'weaponSlots': [{
                    'type': 'heavy sniper',
                    'rarity': 0x0,
                    'ammo': 0x0
                }],
                'steadying': ![],
                'rotation': Math['PI'] + 0.1,
                'start': new _0x193f4e['Vector2'](-0x1fe, 0x104),
                'end': new _0x193f4e['Vector2'](-0x21c, 0x104),
                'smokes': _0x3e0feb
            }, {
                'hair': 0x2,
                'footSin': 0x1,
                'weaponSlots': [{
                    'type': 'silencedpistol',
                    'rarity': 0x0,
                    'ammo': 0x0
                }],
                'steadying': ![],
                'rotation': Math['PI'] * 0x5 / 0x4,
                'start': new _0x193f4e['Vector2'](0x186, 0xd2),
                'end': new _0x193f4e['Vector2'](0x195, 0xe1),
                'smokes': [],
                'baller': ![]
            }, {
                'hair': 0x3,
                'footSin': 0x1,
                'weaponSlots': [{
                    'type': 'picaxe',
                    'rarity': 0x0,
                    'ammo': 0x0
                }],
                'steadying': ![],
                'rotation': Math['PI'] * 0x7 / 0x4,
                'startRotation': Math['PI'] * 0x7 / 0x4 - 0.25,
                'endRotation': Math['PI'] * 0x7 / 0x4 + 0.25,
                'building': !![],
                'start': new _0x193f4e['Vector2'](0x154, -0x8c),
                'end': new _0x193f4e['Vector2'](0x154, -0x8c),
                'smokes': [{
                    'opacity': 0.56,
                    'x': -0x23,
                    'y': -0x6,
                    'width': 0x3c
                }, {
                    'opacity': 0.3,
                    'x': -0x46,
                    'y': 0xf,
                    'width': 0x2d
                }, {
                    'opacity': 0.15,
                    'x': -0x57,
                    'y': -0xf,
                    'width': 0x23
                }]
            }];
            var _0xfa177d = [];
            var _0x31bf59 = [{
                'start': new _0x193f4e['Vector2'](-0x19f, -0x122),
                'rotation': Math['PI'] / 0x2 + 0.2,
                'startDistance': 0xe6,
                'endDistance': 0x140
            }, {
                'start': new _0x193f4e['Vector2'](-0x19f, -0x122),
                'rotation': Math['PI'] / 0x2 + 0.4,
                'startDistance': 0x12c,
                'endDistance': 0x186
            }, {
                'start': new _0x193f4e['Vector2'](-0x19f, -0x122),
                'rotation': Math['PI'] / 0x2 + 0.3,
                'startDistance': 0x172,
                'endDistance': 0x1cc
            }, {
                'start': new _0x193f4e['Vector2'](0x316, -0x172),
                'rotation': Math['PI'] * 0x5 / 0x6,
                'startDistance': 0xc8,
                'endDistance': 0xe6,
                'bulletType': 'rpg'
            }, {
                'start': new _0x193f4e['Vector2'](0x34d, 0x118),
                'rotation': Math['PI'] + 0.2,
                'startDistance': 0xf0,
                'endDistance': 0x6e
            }];
            var _0x4e96b2 = [];
            var _0x397bb3 = [{
                'rotation': Math['PI'] / 0x2,
                'position': new _0x193f4e['Vector2'](0x14a, -0x109),
                'reverse': !![]
            }, {
                'health': 0x5a,
                'rotation': 0x0,
                'position': new _0x193f4e['Vector2'](0x154 + 0x7d, -0x109 + 0x87)
            }];
            var _0x592f4e = 0x0;
            var _0x2abe6a = 0x0;
            function _0x48c01d(_0x251220, _0x5449d7) {
                var _0x4ddddd = {
                    'new': {
                        'position': new _0x193f4e['Vector2'](0xa, 0x0),
                        'rotation': 0.001
                    },
                    'actualNew': {
                        'position': new _0x193f4e['Vector2'](0xa, 0x0),
                        'rotation': 0.001
                    },
                    'old': {
                        'position': new _0x193f4e['Vector2'](0xa, 0x0),
                        'rotation': 0.001
                    },
                    'actualOld': {
                        'position': new _0x193f4e['Vector2'](0x1e, 0x0),
                        'rotation': 0.001
                    },
                    'isPreview': !![],
                    'flare': ![],
                    'ticksAsleep': 0x0,
                    'type': 'player'
                };
                var _0x407678 = {
                    'hair': 0x0,
                    'knocked': ![],
                    'health': 0x64,
                    'shield': 0x64,
                    'selectedWeapon': 0x0,
                    'name': document['getElementById']('nameBox')['value'],
                    'wAmmo': [0x0, 0x0, 0x0, 0x0, 0x0],
                    'ammo': [0x0, 0x0, 0x0, 0x0, 0x0],
                    'house': -0x1,
                    'weaponSlots': [{
                        'type': 'picaxe',
                        'rarity': 0x0,
                        'ammo': 0x0
                    }],
                    'steadying': ![],
                    'frt': 0x0,
                    'sprinting': !![],
                    'building': ![],
                    'canBuild': ![],
                    'mat': 0x0,
                    'mats': [0x0, 0x0, 0x0]
                };
                var _0x305b8f = Object['keys'](_0x251220);
                for (var _0x2a6c2c = 0x0; _0x2a6c2c < _0x305b8f['length']; _0x2a6c2c++) {
                    _0x407678[_0x305b8f[_0x2a6c2c]] = _0x251220[_0x305b8f[_0x2a6c2c]];
                }
                if (_0x251220['flare'] !== undefined) {
                    _0x4ddddd['flare'] = _0x251220['flare'];
                }
                if (_0x251220['baller']) {
                    _0x4ddddd['baller'] = {
                        'new': {
                            'position': new _0x193f4e['Vector2'](0xa, 0x0),
                            'rotation': 0.001
                        },
                        'actualNew': {
                            'position': new _0x193f4e['Vector2'](0xa, 0x0),
                            'rotation': 0.001
                        },
                        'old': {
                            'position': new _0x193f4e['Vector2'](0xa, 0x0),
                            'rotation': 0.001
                        },
                        'actualOld': {
                            'position': new _0x193f4e['Vector2'](0x1e, 0x0),
                            'rotation': 0.001
                        },
                        'isPreview': !![],
                        'flare': ![],
                        'ticksAsleep': 0x0,
                        'type': 'baller'
                    };
                    _0x193f4e['types']['baller']['create'](_0x4ddddd['baller'], {
                        'isPreview': !![],
                        'h': 0x64,
                        'ch': 0x5a
                    });
                    _0x227276['remove'](_0x4ddddd['baller']['grapple']);
                    _0x227276['remove'](_0x4ddddd['baller']['rope']);
                    _0x227276['remove'](_0x4ddddd['baller']['visual']);
                }
                _0x193f4e['types']['player']['create'](_0x4ddddd, _0x407678);
                _0x4ddddd['visual']['size'] = 1.1;
                if (_0x251220['rotation'] !== undefined) {
                    _0x4ddddd['visual']['rotation'] = _0x251220['rotation'];
                }
                _0x193f4e['types']['player']['updatePacket'](_0x4ddddd, {
                    'selectedWeapon': _0x4ddddd['selectedWeapon']
                });
                _0x227276['remove'](_0x4ddddd['buildingPreview']);
                _0x227276['remove'](_0x4ddddd['visual']);
                _0x5449d7['add'](_0x4ddddd['visual']);
                if (_0x251220['baller']) {
                    _0x5449d7['add'](_0x4ddddd['baller']['grapple']);
                    _0x5449d7['add'](_0x4ddddd['baller']['visual']);
                }
                return _0x4ddddd;
            }
            function _0x1d2f53(_0x175f97, _0x222de1) {
                var _0x364e9a = {
                    'new': {
                        'position': new _0x193f4e['Vector2'](0xa, 0x0),
                        'rotation': 0.001
                    },
                    'old': {
                        'position': new _0x193f4e['Vector2'](0xa, 0x0),
                        'rotation': 0.001
                    },
                    'actualOld': {
                        'position': new _0x193f4e['Vector2'](0x1e, 0x0),
                        'rotation': 0.001
                    },
                    'isPreview': !![],
                    'ticksAsleep': 0x0,
                    'type': 'bullet'
                };
                var _0x4d471 = {
                    'bulletType': 'scar'
                };
                var _0x58c8db = Object['keys'](_0x175f97);
                for (var _0x5b1b38 = 0x0; _0x5b1b38 < _0x58c8db['length']; _0x5b1b38++) {
                    _0x4d471[_0x58c8db[_0x5b1b38]] = _0x175f97[_0x58c8db[_0x5b1b38]];
                }
                _0x193f4e['types']['bullet']['create'](_0x364e9a, _0x4d471);
                _0x364e9a['visual']['size'] = 1.1;
                if (_0x175f97['rotation'] !== undefined) {
                    _0x364e9a['visual']['rotation'] = _0x175f97['rotation'];
                }
                if (_0x4d471['bulletType'] != 'rpg') {
                    _0x364e9a['trail']['opacity'] = 0.3;
                    _0x364e9a['trail']['points'][0x1]['x'] = -0x96;
                } else {
                    for (var _0x5b1b38 = 0x0; _0x5b1b38 < 0xc; _0x5b1b38++) {
                        var _0xc072f7 = new _0x193f4e['image'](_0x3a4184('smoke0'));
                        _0xc072f7['position']['x'] = -(_0x5b1b38 + 0x2) * 0x14 - _0x5b1b38 * _0x5b1b38;
                        _0xc072f7['position']['y'] = Math['cos'](Math['PI'] * _0x5b1b38) * (_0x5b1b38 + 0xa) * 0.2;
                        _0xc072f7['width'] = _0xc072f7['height'] = 0x14 + 0x5 * _0x5b1b38;
                        _0xc072f7['rotation'] = Math['random']() * Math['PI'] * 0x2;
                        _0xc072f7['opacity'] = Math['max'](0x1 - _0x5b1b38 / 0xa, 0.03);
                        if (_0x5b1b38 == 0xa) {
                            _0xc072f7['opacity'] = 0.04;
                        } else if (_0x5b1b38 == 0xb) {
                            _0xc072f7['opacity'] = 0.02;
                        }
                        _0x364e9a['visual']['addBelow'](_0xc072f7);
                    }
                }
                _0x227276['remove'](_0x364e9a['visual']);
                _0x222de1['add'](_0x364e9a['visual']);
                return _0x364e9a;
            }
            function _0x2e33da(_0x227166, _0x2e2e1c) {
                var _0x8ea1ce = {
                    'new': {
                        'position': new _0x193f4e['Vector2'](0xa, 0x0),
                        'rotation': 0.001
                    },
                    'old': {
                        'position': new _0x193f4e['Vector2'](0xa, 0x0),
                        'rotation': 0.001
                    },
                    'actualOld': {
                        'position': new _0x193f4e['Vector2'](0x1e, 0x0),
                        'rotation': 0.001
                    },
                    'isPreview': !![],
                    'ticksAsleep': 0x0,
                    'reverse': ![],
                    'type': 'object'
                };
                var _0x1bb279 = {
                    'type': 'wall',
                    'health': 0x32,
                    'fullHealth': 0x64,
                    'width': 0xc8 / 0x4 - 0.6,
                    'height': (0xc8 / 0x4 - 0.6) * 0x5,
                    'mat': 0x1
                };
                var _0x113310 = Object['keys'](_0x227166);
                for (var _0x369a2e = 0x0; _0x369a2e < _0x113310['length']; _0x369a2e++) {
                    _0x1bb279[_0x113310[_0x369a2e]] = _0x227166[_0x113310[_0x369a2e]];
                }
                _0x193f4e['types']['object']['create'](_0x8ea1ce, _0x1bb279);
                _0x8ea1ce['visual']['size'] = 1.05;
                if (_0x227166['rotation'] !== undefined) {
                    _0x8ea1ce['visual']['rotation'] = _0x227166['rotation'] + Math['PI'];
                }
                if (_0x227166['reverse'] !== undefined) {
                    _0x8ea1ce['reverse'] = _0x227166['reverse'];
                }
                _0x8ea1ce['visual']['position'] = _0x227166['position'];
                for (var _0x369a2e = 0x0; _0x369a2e < _0x8ea1ce['lowering']['length'] - 0x1; _0x369a2e++) {
                    _0x8ea1ce['lowering'][_0x369a2e]['width'] = _0x5b0d5d * _0x7e6865 / 0x2;
                    _0x8ea1ce['lowering'][_0x369a2e]['height'] = _0x5b0d5d;
                    _0x8ea1ce['lowering'][_0x369a2e]['opacity'] = 0x1;
                }
                _0x227276['remove'](_0x8ea1ce['visual']);
                _0x2e2e1c['add'](_0x8ea1ce['visual']);
                return _0x8ea1ce;
            }
            for (var _0x3192cf = 0x0; _0x3192cf < _0x3688a0['length']; _0x3192cf++) {
                var _0x14b696 = _0x48c01d(_0x3688a0[_0x3192cf], _0x3ad5a2['animatedLayer']);
                _0x14b696['start'] = _0x3688a0[_0x3192cf]['start'];
                _0x14b696['end'] = _0x3688a0[_0x3192cf]['end'];
                _0x14b696['startRotation'] = _0x3688a0[_0x3192cf]['startRotation'];
                _0x14b696['endRotation'] = _0x3688a0[_0x3192cf]['endRotation'];
                if (_0x3688a0[_0x3192cf]['smokes'] !== undefined) {
                    for (var _0x33691a = 0x0; _0x33691a < _0x3688a0[_0x3192cf]['smokes']['length']; _0x33691a++) {
                        var _0xfedfc4 = _0x3688a0[_0x3192cf]['smokes'][_0x33691a];
                        var _0x4c199b = 'smoke' + Math['floor'](Math['random']() * 0x2);
                        _0x4c199b = 'smoke0';
                        var _0x3221c7 = new _0x193f4e['image'](_0x3a4184(_0x4c199b), _0xfedfc4['x'], _0xfedfc4['y'], _0xfedfc4['width'], _0xfedfc4['width'], _0xfedfc4['opacity']);
                        _0x3221c7['rotation'] = Math['random']() * Math['PI'] * 0x2;
                        _0x14b696['visual']['addBelow'](_0x3221c7);
                    }
                }
                _0x38ef5d['push'](_0x14b696);
            }
            for (var _0x3192cf = 0x0; _0x3192cf < _0x31bf59['length']; _0x3192cf++) {
                var _0x14b696 = _0x1d2f53(_0x31bf59[_0x3192cf], _0x3ad5a2['animatedLayer']);
                _0x14b696['start'] = _0x31bf59[_0x3192cf]['start'];
                _0x14b696['startDistance'] = _0x31bf59[_0x3192cf]['startDistance'];
                _0x14b696['endDistance'] = _0x31bf59[_0x3192cf]['endDistance'];
                _0x14b696['rotation'] = _0x31bf59[_0x3192cf]['rotation'];
                _0xfa177d['push'](_0x14b696);
            }
            for (var _0x3192cf = 0x0; _0x3192cf < _0x397bb3['length']; _0x3192cf++) {
                var _0x14b696 = _0x2e33da(_0x397bb3[_0x3192cf], _0x3ad5a2['animatedLayer']);
                _0x14b696['start'] = _0x31bf59[_0x3192cf]['start'];
                _0x14b696['rotation'] = _0x31bf59[_0x3192cf]['rotation'];
                _0x4e96b2['push'](_0x14b696);
            }
            function _0x5b1526() {
                _0x365310['objects'] = [];
                var _0x5c3220 = _0x48c01d({
                    'weaponSlots': [{
                        'type': 'scar',
                        'rarity': 0x0,
                        'ammo': 0x0
                    }]
                }, _0x365310);
                _0x29d998 = _0x5c3220;
                _0x5c3220['visual']['position']['x'] = 0x5a;
                _0x5c3220['visual']['position']['y'] = 0x136;
                _0x5c3220['nametag']['opacity'] = 0x1;
                _0x5c3220['nametag']['size'] = 0.85;
            }
            _0x5b1526();
            _0x3ad5a2['add'](_0x365310);
            if (_0x28dea0() && localStorage['weaponSkin'] !== undefined) {
                _0x9b3832(localStorage['weaponSkin']);
            }
            var _0x18a556 = [];
            var _0x5c024f = 0x780 + 0xc8;
            var _0x547e6c = 0x438 + 0xc8;
            for (var _0x3192cf = 0x0; _0x3192cf < 0x14; _0x3192cf++) {
                var _0x578db5 = 0x32;
                _0x578db5 = 0x3c;
                var _0x556a54 = new _0x193f4e['image'](_0x3a4184('leaf0'), Math['random']() * _0x5c024f - _0x5c024f / 0x2, Math['random']() * _0x547e6c - _0x547e6c / 0x2, _0x578db5, _0x578db5);
                _0x556a54['opacity'] = 0.7;
                _0x556a54['speed'] = 0.8 + Math['random']() * 1.2;
                _0x556a54['rotation'] = Math['random']() * Math['PI'] * 0x2;
                _0x48c8c6['add'](_0x556a54);
                _0x18a556['push'](_0x556a54);
            }
            _0x48c8c6['parent'] = null;
            _0x3ad5a2['animatedLayer']['add'](_0x48c8c6);
            _0x48c8c6['parent'] = _0x54d195;
            function _0x363d63() {
                var _0x217b44 = _0x5c024f / 0x2;
                var _0x465911 = _0x547e6c / 0x2;
                var _0x5a9e15 = -_0x217b44;
                var _0x20baf1 = -_0x465911;
                if (!_0x193f4e['spectating']) {
                    _0x217b44 += _0x54d195['camera']['position']['x'];
                    _0x5a9e15 += _0x54d195['camera']['position']['x'];
                    _0x465911 += _0x54d195['camera']['position']['y'];
                    _0x20baf1 += _0x54d195['camera']['position']['y'];
                }
                var _0x46680e = Math['min'](_0x193f4e['clientDetails']['dt'], 0x2);
                for (var _0x599e80 = 0x0; _0x599e80 < _0x18a556['length']; _0x599e80++) {
                    var _0x2f71b1 = _0x18a556[_0x599e80];
                    _0x2f71b1['rotation'] += _0x46680e / 0x14 * _0x2f71b1['speed'] / 0x4;
                    var _0x1a0005 = _0x2f71b1['speed'];
                    var _0x25d3dc = _0x1a0005 * 1.65;
                    _0x2f71b1['position']['x'] += _0x46680e * _0x1a0005;
                    _0x2f71b1['position']['y'] += _0x46680e * _0x25d3dc;
                    while (_0x2f71b1['position']['x'] > _0x217b44) {
                        _0x2f71b1['position']['x'] -= _0x5c024f;
                    }
                    while (_0x2f71b1['position']['y'] > _0x465911) {
                        _0x2f71b1['position']['y'] -= _0x547e6c;
                    }
                    while (_0x2f71b1['position']['x'] < _0x5a9e15) {
                        _0x2f71b1['position']['x'] += _0x5c024f;
                    }
                    while (_0x2f71b1['position']['y'] < _0x20baf1) {
                        _0x2f71b1['position']['y'] += _0x547e6c;
                    }
                }
            }
            function _0x2f73b9() {
                if (_0x29d998 == undefined) {
                    return;
                }
                _0x363d63();
                _0x193f4e['types']['player']['tickUpdate'](_0x29d998);
                _0x29d998['visual']['size'] = 1.18;
                _0x365310['belowObjects']['forEach'](function (_0x2615e9) {
                    _0x2615e9['position']['x'] -= _0x193f4e['clientDetails']['dt'] * 0x6;
                });
                _0x592f4e += _0x193f4e['clientDetails']['dt'] / 0x1e;
                _0x2abe6a = Math['sin'](_0x592f4e);
                if (_0x592f4e > Math['PI'] * 0x2) {
                    _0x592f4e -= Math['PI'] * 0x2;
                }
                for (var _0x4ae549 = 0x0; _0x4ae549 < _0x38ef5d['length']; _0x4ae549++) {
                    var _0x4ffa49 = _0x38ef5d[_0x4ae549];
                    _0x4ffa49['visual']['position']['x'] = _0x193f4e['normalLerp'](_0x4ffa49['start']['x'], _0x4ffa49['end']['x'], _0x2abe6a / 0x2 + 0.5);
                    _0x4ffa49['visual']['position']['y'] = _0x193f4e['normalLerp'](_0x4ffa49['start']['y'], _0x4ffa49['end']['y'], _0x2abe6a / 0x2 + 0.5);
                    if (_0x4ffa49['startRotation'] !== undefined) {
                        _0x4ffa49['visual']['rotation'] = _0x193f4e['normalLerp'](_0x4ffa49['startRotation'], _0x4ffa49['endRotation'], _0x2abe6a / 0x2 + 0.5);
                    }
                    if (_0x4ffa49['flare']) {
                        _0x4ffa49['flash']['opacity'] = _0x2abe6a / 0x7 + 0.2;
                    }
                    if (_0x4ffa49['baller'] !== undefined) {
                        _0x4ffa49['baller']['visual']['position']['x'] = _0x4ffa49['visual']['position']['x'];
                        _0x4ffa49['baller']['visual']['position']['y'] = _0x4ffa49['visual']['position']['y'];
                        _0x4ffa49['baller']['visual']['rotation'] = _0x4ffa49['visual']['rotation'];
                        _0x193f4e['types']['baller']['tickUpdate'](_0x4ffa49['baller']);
                    }
                }
                for (var _0x4ae549 = 0x0; _0x4ae549 < _0xfa177d['length']; _0x4ae549++) {
                    var _0x4ffa49 = _0xfa177d[_0x4ae549];
                    var _0xaa9644 = Math['sin'](_0x4ffa49['rotation']);
                    var _0x601997 = Math['cos'](_0x4ffa49['rotation']);
                    _0x4ffa49['visual']['position']['x'] = _0x193f4e['normalLerp'](_0x4ffa49['start']['x'] + _0x601997 * _0x4ffa49['startDistance'], _0x4ffa49['start']['x'] + _0x601997 * _0x4ffa49['endDistance'], _0x2abe6a / 0x2 + 0.5);
                    _0x4ffa49['visual']['position']['y'] = _0x193f4e['normalLerp'](_0x4ffa49['start']['y'] + _0xaa9644 * _0x4ffa49['startDistance'], _0x4ffa49['start']['y'] + _0xaa9644 * _0x4ffa49['endDistance'], _0x2abe6a / 0x2 + 0.5);
                    if (_0x4ffa49['startRotation'] !== undefined) {
                        _0x4ffa49['visual']['rotation'] = _0x193f4e['normalLerp'](_0x4ffa49['startRotation'], _0x4ffa49['endRotation'], _0x2abe6a / 0x2 + 0.5);
                    }
                }
                for (var _0x4ae549 = 0x0; _0x4ae549 < _0x4e96b2['length']; _0x4ae549++) {
                    var _0x599ce1 = _0x4e96b2[_0x4ae549];
                    var _0x3f1e63 = _0x599ce1['lowering']['length'] - 0x1;
                    var _0x30e945 = (0x1 / 0x3 + 0x1 / 0x4) / 0x2;
                    var _0x488263 = _0x30e945;
                    _0x599ce1['lowering'][_0x3f1e63]['opacity'] = _0x2abe6a * _0x30e945 + _0x488263;
                    if (_0x599ce1['reverse']) {
                        _0x599ce1['lowering'][_0x3f1e63]['opacity'] = _0x488263 - _0x2abe6a * _0x30e945;
                    }
                    _0x599ce1['lowering'][_0x3f1e63]['width'] = _0x1be276(_0x5b0d5d * _0x7e6865, _0x5b0d5d * _0x7e6865 / 0x2, _0x599ce1['lowering'][_0x3f1e63]['opacity']);
                    _0x599ce1['lowering'][_0x3f1e63]['height'] = _0x1be276(_0x5b0d5d * 0x2, _0x5b0d5d, _0x599ce1['lowering'][_0x3f1e63]['opacity']);
                }
            }
            window['addEventListener']('keydown', function (_0xc2c2ba) {
                if (_0x4c3a32 != -0x1) {
                    return;
                }
                if (_0x193f4e['spectating'] && _0xc2c2ba['keyCode'] == 0xd && _0x3ad5a2['opacity'] == 0x1) {
                    if (document['activeElement']['id'] == 'partyinput') {
                        _0x2c4843 = document['getElementById']('partyinput')['value'];
                        _0x2c4843 = _0x2c4843['toLowerCase']();
                        if (_0x2c4843['length'] < 0x6) {
                            alert('ID Not Valid - Should be 6 characters long');
                        }
                        var _0x845af1 = _0x2c4843['charAt'](0x0) + _0x2c4843['charAt'](0x1);
                        if (_0x3fcd9a['indexOf'](_0x845af1) == -0x1) {
                            alert('ID Not Valid - Please check again');
                        }
                        if (_0x4c23bf == null) {
                            _0x513980(_0x845af1);
                            _0x279793['push']({
                                'type': 'join',
                                'id': _0x2c4843
                            });
                            _0x279793['push']({
                                'type': 'changename',
                                'name': document['getElementById']('nameBox')['value']
                            });
                            _0x42842a('name', _0x3a4184('nameBox')['value'], 0x16d);
                        }
                        return;
                    }
                    _0x310d1e = -0x1;
                    _0xef1c8d = {
                        'position': [0x0, 0x0],
                        'radius': _0x42a2d6 / 0x2 + 0x258 + 0x15e
                    };
                    _0x3a189e = {
                        'position': [0x0, 0x0],
                        'radius': _0x42a2d6 / 0x2 + 0x258 + 0x15e
                    };
                    _0x3e7621['width'] = _0x42a2d6 + 0x3e8;
                    _0x3e7621['height'] = _0x3e7621['width'];
                    _0x3e7621['position']['x'] = 0x0;
                    _0x3e7621['position']['y'] = 0x0;
                    _0x9eb2fe['opacity'] = 0x0;
                    _0x2a61cb = !![];
                    if (_0x4c23bf != null) {
                        _0x54cb3a();
                        return;
                    }
                    _0x24ef51();
                    if (_0x312f16 == -0x2) {
                        _0x3a8b2a['c']['requestPointerLock']();
                    }
                }
            });
            var _0x366326 = 0x488;
            var _0x4e6b3e = 0x2e4;
            function _0x4cd4de(_0x55c366) {
                if (_0x55c366['background']) {
                    _0x366326 = 0x550;
                    _0x4e6b3e = 0x3ac;
                } else if (_0x55c366['house']) {
                    _0x366326 = 0x76c;
                    _0x4e6b3e = 0x514;
                }
                if (Math['abs'](_0x227276['camera']['position']['x'] - _0x55c366['position']['x']) > _0x366326)
                    return ![];
                if (Math['abs'](_0x227276['camera']['position']['y'] - _0x55c366['position']['y']) > _0x4e6b3e)
                    return ![];
                return !![];
            }
            function _0x5d17f7() {
                if (_0x5cab44['moved']) {
                    if (_0x5cab44['renderer'] !== undefined) {
                        _0x5cab44['x'] = Math['max'](Math['min']((_0x5cab44['newx'] - _0x5cab44['renderer']['c']['width'] / _0x193f4e['devicePixelRatio'] * _0x5cab44['renderer']['qualitySize'] / 0x2 - _0x5cab44['renderer']['left']) * _0x5cab44['renderer']['ratio'] / _0x5cab44['renderer']['qualitySize'] * _0x193f4e['devicePixelRatio'], 0x780 / 0x2), -0x780 / 0x2);
                        _0x5cab44['y'] = Math['max'](Math['min']((_0x5cab44['newy'] - _0x5cab44['renderer']['c']['height'] / _0x193f4e['devicePixelRatio'] * _0x5cab44['renderer']['qualitySize'] / 0x2 - _0x5cab44['renderer']['top']) * _0x5cab44['renderer']['ratio'] / _0x5cab44['renderer']['qualitySize'] * _0x193f4e['devicePixelRatio'], 0x438 / 0x2), -0x438 / 0x2);
                    }
                    _0x5cab44['moved'] = ![];
                }
                for (var _0x26190c of _0x4576c4) {
                    _0x26190c['checkTouch']();
                }
                var _0x34fa33 = _0x206ca0(![], !![]);
                if (_0x5edc8f != -0x1) {
                    if (_0x34fa33 == -0x1) {
                        _0x193f4e['currentPackets']['push']({
                            'type': 'switch',
                            'slot1': _0x5edc8f,
                            'slot2': _0x5edc8f
                        });
                        if (_0x5edc8f == _0x1ccf84) {
                            for (var _0x37c5c5 = Math['max'](_0x1ccf84 - 0x1, 0x0); _0x193f4e['me']['weaponSlots'][Math['max'](_0x37c5c5, 0x0)]['type'] != 'empty' && _0x37c5c5 >= 0x0; _0x37c5c5--) { }
                            _0x1ccf84 = Math['max'](_0x37c5c5, 0x0);
                            _0x193f4e['currentPackets']['push']({
                                'type': 'selectChange',
                                'weapon': _0x1ccf84
                            });
                        }
                    } else {
                        _0x193f4e['currentPackets']['push']({
                            'type': 'switch',
                            'slot1': _0x5edc8f,
                            'slot2': _0x34fa33
                        });
                        if (_0x1ccf84 == _0x5edc8f) {
                            _0x1ccf84 = _0x34fa33;
                            _0x193f4e['currentPackets']['push']({
                                'type': 'selectChange',
                                'weapon': _0x1ccf84
                            });
                        } else if (_0x1ccf84 == _0x34fa33) {
                            _0x1ccf84 = _0x5edc8f;
                            _0x193f4e['currentPackets']['push']({
                                'type': 'selectChange',
                                'weapon': _0x1ccf84
                            });
                        }
                        var _0x413c5f = _0x36754c[_0x5edc8f]['image'];
                        _0x36754c[_0x5edc8f]['image'] = _0x36754c[_0x34fa33]['image'];
                        _0x36754c[_0x34fa33]['image'] = _0x413c5f;
                    }
                }
                _0x784867();
            }
            window['addEventListener']('mouseup', _0x5d17f7);
            window['addEventListener']('touchend', _0x5d17f7, {
                'passive': ![]
            });
            function _0x32e6de(_0x11e9d9) {
                if (_0x5cab44['moved']) {
                    if (_0x5cab44['renderer'] !== undefined) {
                        _0x5cab44['x'] = Math['max'](Math['min']((_0x5cab44['newx'] - _0x5cab44['renderer']['c']['width'] / _0x193f4e['devicePixelRatio'] * _0x5cab44['renderer']['qualitySize'] / 0x2 - _0x5cab44['renderer']['left']) * _0x5cab44['renderer']['ratio'] / _0x5cab44['renderer']['qualitySize'] * _0x193f4e['devicePixelRatio'], 0x780 / 0x2), -0x780 / 0x2);
                        _0x5cab44['y'] = Math['max'](Math['min']((_0x5cab44['newy'] - _0x5cab44['renderer']['c']['height'] / _0x193f4e['devicePixelRatio'] * _0x5cab44['renderer']['qualitySize'] / 0x2 - _0x5cab44['renderer']['top']) * _0x5cab44['renderer']['ratio'] / _0x5cab44['renderer']['qualitySize'] * _0x193f4e['devicePixelRatio'], 0x438 / 0x2), -0x438 / 0x2);
                    }
                    _0x5cab44['moved'] = ![];
                }
                var _0x51920f = _0x206ca0();
                if (_0x4d4973 && _0x51920f != -0x1) {
                    _0x5edc8f = _0x51920f;
                    var _0x2d5314 = _0x36754c[_0x5edc8f]['parent']['parent'];
                    _0x2d5314['remove'](_0x36754c[_0x5edc8f]['parent']);
                    _0x2d5314['add'](_0x36754c[_0x5edc8f]['parent']);
                    _0x48b917['x'] = _0x5cab44['x'];
                    _0x48b917['y'] = _0x5cab44['y'];
                }
                var _0x51920f = _0x206ca0();
                var _0x3c5ff2 = _0x5179fe();
                var _0x1588c9 = _0x437fb2();
                if (_0x4d4973 && _0x3c5ff2 != -0x1) {
                    _0x193f4e['currentPackets']['push']({
                        'type': 'splitmat',
                        'mat': 0x2 - _0x3c5ff2
                    });
                    if (_0x5cab44['emulatedFromTouch'] && gameWrapper['enabled'])
                        gameWrapper['hapticFeedback']('light');
                }
                if (_0x4d4973 && _0x1588c9 != -0x1) {
                    _0x193f4e['currentPackets']['push']({
                        'type': 'splitammo',
                        'mat': 0x3 - _0x1588c9
                    });
                    if (_0x5cab44['emulatedFromTouch'] && gameWrapper['enabled'])
                        gameWrapper['hapticFeedback']('light');
                }
                if (_0x4d4973 && _0x51920f == -0x1 && _0x3c5ff2 == -0x1 && _0x1588c9 == -0x1) {
                    _0x474aae();
                }
                if (!_0x4d4973 && _0x5cab44['emulatedFromTouch']) {
                    var _0x908b57 = _0x206ca0(!![]);
                    if (_0x908b57 != -0x1) {
                        if (_0x193f4e['me'] && _0x193f4e['me']['weaponSlots'][_0x908b57]['type'] != 'empty') {
                            _0x1ccf84 = _0x908b57;
                            _0x193f4e['currentPackets']['push']({
                                'type': 'selectChange',
                                'weapon': _0x908b57
                            });
                            if (gameWrapper['enabled'])
                                gameWrapper['hapticFeedback']('light');
                        }
                    }
                    if (_0x3c5ff2 != -0x1 && _0x193f4e['me']['building']) {
                        _0x193f4e['currentPackets']['push']({
                            'type': 'selectMatChange',
                            'mat': 0x2 - _0x3c5ff2
                        });
                        if (gameWrapper['enabled'])
                            gameWrapper['hapticFeedback']('light');
                    }
                }
                if (_0x5cab44['emulatedFromTouch']) {
                    if (!_0x4d4973) {
                        if (_0x4bf0a5) {
                            if (_0x5cab44['clicking']) {
                                _0x4bf0a5 = ![];
                            }
                        } else {
                            var _0xa65437 = 0x12c;
                            var _0x418640 = new _0x193f4e['rectangle'](_0x3a8b2a['leftOfScreen'] + _0xa65437 / 0x2, _0x3a8b2a['topOfScreen'] + _0xa65437 / 0x2, _0xa65437, _0xa65437);
                            if (_0x5cab44['emulatedFromTouch'] && _0x5cab44['isCollidingWithRectangle'](_0x418640)) {
                                if (!_0x4d4973 && !_0x4bf0a5)
                                    _0x4bf0a5 = !![];
                            }
                        }
                    }
                }
                for (var _0x308d92 of _0x4576c4) {
                    _0x308d92['checkTouch']();
                }
                if (_0x5cab44['isCollidingWithRectangle'](window['spawnButton']) && _0x193f4e['spectating'] && _0x3ad5a2['opacity'] == 0x1 && (_0x11e9d9 == _0x3a8b2a['c'] || _0x11e9d9['id'] !== undefined && _0x11e9d9['id']['indexOf']('ref') != -0x1)) {
                    if (gameWrapper['enabled'])
                        gameWrapper['hapticFeedback']('light');
                    _0x310d1e = -0x1;
                    _0xef1c8d = {
                        'position': [0x0, 0x0],
                        'radius': _0x42a2d6 / 0x2 + 0x258 + 0x15e
                    };
                    _0x3a189e = {
                        'position': [0x0, 0x0],
                        'radius': _0x42a2d6 / 0x2 + 0x258 + 0x15e
                    };
                    _0x9eb2fe['opacity'] = 0x0;
                    _0x3e7621['width'] = _0x42a2d6 + 0x3e8;
                    _0x3e7621['height'] = _0x3e7621['width'];
                    _0x3e7621['position']['x'] = 0x0;
                    _0x3e7621['position']['y'] = 0x0;
                    _0x2a61cb = !![];
                    _0x5cab44['changed'] = ![];
                    _0x5cab44['clicking'] = ![];
                    _0x56ed1d = !![];
                    if (_0x4c23bf != null) {
                        _0x54cb3a();
                        return;
                    }
                    _0x24ef51();
                    if (_0x312f16 == -0x2) {
                        _0x3a8b2a['c']['requestPointerLock']();
                    }
                }
                if (_0x193f4e['spectating'] && !_0x4c7288 && _0x5cab44['isCollidingWithRectangle'](_0x2ebeb3) && Date['now']() - _0x349dc2 > 0x5dc) {
                    _0x193f4e['ws']['close']();
                    _0x4718e9();
                    _0x2772aa();
                    localStorage.deltaGameState = 'menu';
                    if (typeof(socket) != "undefined") socket.emit("gameState", "menu")
                    if (_0x3dc783 && !gameWrapper['enabled']) {
                        try {
                            aiptag['cmd']['display']['push'](function () {
                                aipDisplayTag['display']('buildroyale-io_300x250');
                            });
                            aiptag['cmd']['display']['push'](function () {
                                aipDisplayTag['display']('buildroyale-io_300x250_2');
                            });
                            aiptag['cmd']['display']['push'](function () {
                                aipDisplayTag['display']('buildroyale-io_728x90');
                            });
                            aiptag['cmd']['display']['push'](function () {
                                aipDisplayTag['display']('buildroyale-io_300x600');
                            });
                        } catch (_0x129490) {
                            console['log']('Ad Error');
                        }
                    }
                    _0x3ad5a2['opacity'] = 0x1;
                    _0x575c99['opacity'] = 0x0;
                    for (var _0x22fb46 = _0x193f4e['objects']['length'] - 0x1; _0x22fb46 >= 0x0; _0x22fb46--) {
                        if (_0x193f4e['types'][_0x193f4e['objects'][_0x22fb46]['type']] !== undefined) {
                            if (_0x193f4e['types'][_0x193f4e['objects'][_0x22fb46]['type']]['remove'](_0x193f4e['objects'][_0x22fb46], {}))
                                continue;
                            if (_0x193f4e['objects'][_0x22fb46]['visual']['parent'] != null)
                                _0x193f4e['objects'][_0x22fb46]['visual']['parent']['remove'](_0x193f4e['objects'][_0x22fb46]['visual']);
                            _0x193f4e['objects']['splice'](_0x22fb46, 0x1);
                        }
                    }
                }
            }
            window['addEventListener']('mousedown', function (_0x58602c) {
                _0x32e6de(_0x58602c['target']);
            });
            window['addEventListener']('touchstart', function (_0x43d608) {
                _0x32e6de(_0x43d608['target']);
            }, {
                'passive': ![]
            });
            document['addEventListener']('visibilitychange', function () {
                if (document['hidden']) { } else {
                    _0x1109c2['shift'] = ![];
                    _0x1109c2['changedKeys']['push']('shift');
                }
            });
            _0x193f4e['addPacketType']('email', function (_0x52fc7c) { });
            _0x193f4e['addPacketType']('players', function (_0x3cecc2) {
                if (_0x3cecc2['players'] !== undefined) {
                    _0x25f73a['text'] = _0x3cecc2['players'];
                    if (localStorage.deltaPlayers != _0x3cecc2['players']) socket.emit("gameInfo", "players", _0x3cecc2['players']);
                    localStorage.deltaPlayers = _0x3cecc2['players'];
                }
                if (_0x3cecc2['infect'] !== undefined) {
                    _0x11bef4['text'] = _0x3cecc2['infect'];
                    _0x11bef4['opacity'] = 0x1;
                } else {
                    _0x11bef4['opacity'] = 0x0;
                }
            });
            _0x193f4e['addPacketType']('feed', function (_0x54c166) {
                if (_0x54c166['n1'] == '') {
                    _0x54c166['n1'] = '<unnamed>';
                }
                if (_0x54c166['n2'] == '') {
                    _0x54c166['n2'] = '<unnamed>';
                }
                if (_0x54c166['knock'] === undefined) {
                    _0x54c166['knock'] = ![];
                }
                _0x5cb3d5(_0x54c166['n1'], _0x54c166['n2'], _0x54c166['knock']);
                window.killFeed.push((!_0x54c166['knock']) ? `${_0x54c166['n1']} Eliminated ${_0x54c166['n2']}` : `${_0x54c166['n1']} Knocked ${_0x54c166['n2']}`)
            });
            _0x193f4e['addPacketType']('elim', function (_0x126b21) {
                _0x490c36['text'] = _0x126b21['name'];
                _0x3171ee = 0x4;
                if (_0x126b21['knock'] !== undefined && _0x126b21['knock']) {
                    _0x4506cc['text'] = 'Knocked';
                    _0x4506cc['belowObjects'][0x0]['text'] = 'Knocked';
                    _0x4506cc['fillStyle'] = _0x545e87;
                } else {
                    _0x4506cc['text'] = 'Eliminated';
                    _0x4506cc['belowObjects'][0x0]['text'] = 'Eliminated';
                    _0x4506cc['fillStyle'] = '#C11';
                }
            });
            _0x193f4e['addPacketType']('death', function (_0x1d4595) {

                socket.emit("gameState", "spec");

                if (_0x3dc783 && !gameWrapper['enabled']) {
                    try {
                        aiptag['cmd']['display']['push'](function () {
                            aipDisplayTag['display']('buildroyale-io_300x250');
                        });
                        aiptag['cmd']['display']['push'](function () {
                            aipDisplayTag['display']('buildroyale-io_300x250_2');
                        });
                        aiptag['cmd']['display']['push'](function () {
                            aipDisplayTag['display']('buildroyale-io_728x90');
                        });
                        aiptag['cmd']['display']['push'](function () {
                            aipDisplayTag['display']('buildroyale-io_300x600');
                        });
                    } catch (_0xe83346) {
                        console['log']('Ad Error');
                    }
                }
                if (ga !== undefined) {
                    ga('send', 'event', 'Game', 'play');
                } else { }
                _0x193f4e['spectating'] = !![];
                _0x349dc2 = Date['now']();
                _0x4bf0a5 = ![];
                _0x4d4973 = ![];
                _0x429f0c = -0x1;
                if (_0x1d4595['place'] == 0x1) {
                    _0x2977f4['opacity'] = 0x1;
                    _0x13ecc5['opacity'] = 0x0;
                } else {
                    _0x2977f4['opacity'] = 0x0;
                    _0x13ecc5['opacity'] = 0x1;
                }
                _0x928892['text'] = '#' + _0x1d4595['place'];
                _0x5f0d11['text'] = _0x1d4595['eliminations'];
                _0x390a9b['text'] = _0x19184a(_0x1d4595['damageToEnemies']);
                _0x3422ba['text'] = _0x1d4595['wallsBuilt'];
                _0x13ecc5['text'] = 'You placed #' + _0x1d4595['place'];
                _0x43fb14['opacity'] = 0x0;
                _0x42f245['opacity'] = 0x0;
                _0x3c483d['opacity'] = 0x0;
                if (_0x1d4595['place'] == 0x1) {
                    _0x43fb14['text'] = 'Eliminated:';
                }
                if (_0x1d4595['name'] !== undefined) {
                    var _0x1bc9ae = _0x1d4595['name'];
                    if (_0x1bc9ae == '') {
                        _0x1bc9ae = '<unnamed>';
                    }
                    if (_0x1d4595['place'] == 0x1) {
                        _0x43fb14['text'] = 'Eliminated:';
                    } else {
                        _0x43fb14['text'] = 'Eliminated By:';
                    }
                    _0x42f245['text'] = _0x1bc9ae;
                    _0x43fb14['opacity'] = 0x1;
                    _0x42f245['opacity'] = 0x1;
                    _0x3c483d['opacity'] = 0.3;
                }
                if (_0x1d4595['place'] == 0x1 && _0x3171ee > 0x3) {
                    _0x42f245['text'] = _0x490c36['text'];
                    _0x43fb14['opacity'] = 0x1;
                    _0x42f245['opacity'] = 0x1;
                    _0x3c483d['opacity'] = 0.3;
                }
            });
            _0x193f4e['addPacketType']('circle', function (_0x207a7d) {
                _0x247dad = !![];
                if (_0x207a7d['state'] !== undefined) {
                    _0x576960 = _0x207a7d['state'];
                    if (_0x576960 == 'waiting' || _0x576960 == 'lobby') {
                        _0x3806c4['image'] = _0x3a4184('waitingIcon');
                        socket.emit("gameInfo", "stormstate", "waiting")
                        localStorage.deltaStormState = 'waiting';
                    } else if (_0x576960 == 'moving') {
                        _0x3806c4['image'] = _0x3a4184('movingIcon');
                        socket.emit("gameInfo", "stormstate", "moving")
                        localStorage.deltaStormState = 'moving';
                    }
                }
                if (_0x207a7d['time'] !== undefined) {
                    _0x310d1e = _0x207a7d['time'];
                    var _0x561f4d = '0:';
                    if (_0x310d1e < 0xa)
                        _0x561f4d += '0';
                    _0x561f4d += Math['max'](_0x310d1e, 0x0);
                    _0x407ffc['text'] = _0x561f4d;
                    if (localStorage.deltaStormTime != _0x561f4d) socket.emit("gameInfo", "time", _0x561f4d);
                    localStorage.deltaStormTime = _0x561f4d;
                }
                if (_0x207a7d['circle'] !== undefined) {
                    if (_0x576960 == 'moving') {
                        _0x3a189e['position'][0x0] = _0x193f4e['lerp'](_0x3a189e['position'][0x0], _0x207a7d['circle']['position'][0x0]);
                        _0x3a189e['position'][0x1] = _0x193f4e['lerp'](_0x3a189e['position'][0x1], _0x207a7d['circle']['position'][0x1]);
                        _0xef1c8d = _0x3a189e;
                        _0x3a189e = _0x207a7d['circle'];
                        _0xef1c8d['radius'] = _0x5e2096;
                        _0x3a189e['width'] = Math['min'](_0x3a189e['width'], 0x0);
                    } else {
                        _0x3e7621['width'] = _0x3e7621['height'] = _0x207a7d['circle']['radius'] * 0x2;
                        _0x3e7621['position'] = new _0x193f4e['Vector2'](_0x207a7d['circle']['position'][0x0], _0x207a7d['circle']['position'][0x1]);
                    }
                }
            });
            _0x193f4e['addPacketType']('forceSpectate', function (_0x40f697) {
                console['log']('Forcing spectate');
                socket.emit("gameState", "spec");
                _0x4c7288 = !![];
                _0x3ad5a2['opacity'] = 0x0;
            });
            var _0x832b10 = 0x0;
            var _0x2c179f = 0.1;
            var _0x5806f9 = 0x0;
            document['addEventListener']('wheel', function (_0x5276b5) {
                if (_0x193f4e['spectating']) {
                    return;
                }
                if (_0x5806f9 < 0x1) {
                    return;
                }
                _0x5806f9 = 0x0;
                if (_0x5276b5['wheelDelta']) {
                    _0x832b10 += _0x5276b5['wheelDelta'];
                } else {
                    _0x832b10 -= _0x5276b5['deltaY'];
                }
                if (Math['abs'](_0x832b10) < _0x2c179f) {
                    return;
                }
                if (_0x193f4e['me']['weaponSlots'] === undefined) {
                    return;
                }
                if (_0x832b10 <= -_0x2c179f) {
                    _0x1ccf84 += 0x1;
                    if (_0x1ccf84 > 0x5) {
                        _0x1ccf84 = 0x0;
                    }
                    while (_0x193f4e['me']['weaponSlots'][_0x1ccf84]['type'] == 'empty') {
                        _0x1ccf84++;
                        if (_0x1ccf84 > 0x5) {
                            _0x1ccf84 = 0x0;
                        }
                    }
                } else if (_0x832b10 >= _0x2c179f) {
                    _0x1ccf84 -= 0x1;
                    if (_0x1ccf84 < 0x0) {
                        _0x1ccf84 = 0x5;
                    }
                    while (_0x193f4e['me']['weaponSlots'][_0x1ccf84]['type'] == 'empty') {
                        _0x1ccf84--;
                    }
                }
                _0x832b10 = 0x0;
                _0x193f4e['currentPackets']['push']({
                    'type': 'selectChange',
                    'weapon': _0x1ccf84
                });
            });
            function _0x3026c2() {
                for (var _0x351a5c = 0x0; _0x351a5c < 0x5; _0x351a5c++) {
                    var _0x41d24e = _0xc74037['objects'][_0x351a5c];
                    var _0x2329ec = Math['floor'](Math['random']() * 0x2);
                    if (_0x2329ec == 0x0) {
                        _0x41d24e['color'] = '#F00';
                    } else {
                        _0x41d24e['color'] = '#0F0';
                    }
                    _0x41d24e['opacity'] = 0x1;
                }
                for (var _0x351a5c = 0x0; _0x351a5c < _0x193f4e['objects']['length']; _0x351a5c++) {
                    if (_0x193f4e['objects'][_0x351a5c]['type'] == 'object') {
                        if (_0x193f4e['objects'][_0x351a5c]['sprite']['image'] !== undefined && _0x193f4e['objects'][_0x351a5c]['sprite']['image']['id'] !== undefined) {
                            if (_0x193f4e['objects'][_0x351a5c]['sprite']['image']['id'] == 'christmastree0') {
                                _0x193f4e['objects'][_0x351a5c]['sprite']['image'] = _0x3a4184('christmastree1');
                            } else if (_0x193f4e['objects'][_0x351a5c]['sprite']['image']['id'] == 'christmastree1') {
                                _0x193f4e['objects'][_0x351a5c]['sprite']['image'] = _0x3a4184('christmastree0');
                            } else if (_0x193f4e['objects'][_0x351a5c]['sprite']['image']['id'] == 'christmastree2') {
                                _0x193f4e['objects'][_0x351a5c]['sprite']['image'] = _0x3a4184('christmastree3');
                            } else if (_0x193f4e['objects'][_0x351a5c]['sprite']['image']['id'] == 'christmastree3') {
                                _0x193f4e['objects'][_0x351a5c]['sprite']['image'] = _0x3a4184('christmastree2');
                            }
                        }
                    }
                }
                setTimeout(_0x3026c2, 0x2bc);
            }
            if (_0x5f37fb) {
                _0x3026c2();
            }
            function _0x3e3414(_0x4dff4e) {
                if (_0x4dff4e['type'] == 'text') {
                    _0x4dff4e['oldText'] = '';
                }
                for (var _0x12663b = 0x0; _0x12663b < _0x4dff4e['objects']['length']; _0x12663b++) {
                    _0x3e3414(_0x4dff4e['objects'][_0x12663b]);
                }
                for (var _0x12663b = 0x0; _0x12663b < _0x4dff4e['belowObjects']['length']; _0x12663b++) {
                    _0x3e3414(_0x4dff4e['belowObjects'][_0x12663b]);
                }
            }
            function _0x19eeb9() {
                clearInterval(_0x1d44f8);
                window['spawnText']['oldText'] = '';
                window['lobbyText']['oldText'] = '';
                for (var _0x176040 = 0x0; _0x176040 < _0xd7c504['length']; _0x176040++) {
                    _0x3e3414(_0xd7c504[_0x176040]);
                }
                _0x3e3414(_0x365310);
                _0x3e3414(_0x575c99);
                document['getElementById']('loadingDesktop')['style']['visibility'] = 'hidden';
                document['getElementById']('loadingDesktop')['style']['display'] = 'none';
                document['getElementById']('loadingDesktop')['style']['opacity'] = 0x0;
            }
            var _0x1d44f8 = setInterval(function () {
                if (!document['fonts']['check']('12px Arial Black'))
                    return;
                var _0x2d8e64 = document['getElementsByTagName']('img');
                var _0x59668d = !![];
                for (var _0x4b9c23 of _0x2d8e64) {
                    if (!_0x4b9c23['complete']) {
                        _0x59668d = ![];
                        return;
                    }
                }
                if (gameWrapper['enabled']) {
                    setTimeout(function () {
                        _0x19eeb9();
                    }, 0x64);
                } else {
                    _0x19eeb9();
                }
            }, 0x64);
            setTimeout(_0x19eeb9, 0x1388);
        };
    },
    14: function (_0x1e85a9, _0x51fe3c) {
        _0x1e85a9['exports']['createUI'] = function (_0x130c9f, _0x5aaca4) {
            var _0xd3a49f = '\'Arial Black\', Gadget, sans-serif';
            _0xd3a49f = '\'Arial Black\'';
            var _0x165677 = new _0x130c9f['image'](document['getElementById']('logo'), 0x0, -0xc8, 0x2ee, 0x1f4);
            window['menuLogo'] = _0x165677;
            _0x165677['size'] = 0.9;
            _0x5aaca4['add'](_0x165677);
            var _0x1dd3f6 = 0x78;
            window['spawnButton'] = new _0x130c9f['roundRectangle'](0x0, _0x1dd3f6, 0x1f4 - 0x6, 0x46, 0x46 / 0x2, '#0D0', 0.4);
            window['spawnButton']['strokeStyle'] = '#0B0';
            window['spawnButton']['lineWidth'] = 0x6;
            _0x5aaca4['add'](window['spawnButton']);
            window['spawnText'] = new _0x130c9f['text']('Ready', 0x0, _0x1dd3f6, '#FFF', _0xd3a49f, 0x1e, '');
            var _0x512106 = new _0x130c9f['strokeText']('Ready', 0x0, -0x2, '#0B0', _0xd3a49f, 0x1e, '');
            _0x512106['lineWidth'] = 0x9;
            window['spawnText']['addBelow'](_0x512106);
            _0x5aaca4['add'](window['spawnText']);
            _0x5aaca4['addBelow'](new _0x130c9f['rectangle'](0x0, 0x0, 0x781, 0x439, '#000', 0.5));
            _0x5aaca4['animatedLayer'] = new _0x130c9f['object']();
            _0x5aaca4['addBelow'](_0x5aaca4['animatedLayer']);
            _0x5aaca4['addBelow'](new _0x130c9f['image'](document['getElementById']('background'), 0x0, 0x0, 0x780, 0x438));
        };
        _0x1e85a9['exports']['showName'] = function (_0x11598b, _0x193d22) {
            _0x193d22['forEach'](function (_0x4d6a64) {
                if (modals['indexOf'](_0x4d6a64) != -0x1) {
                    return;
                }
                document['getElementById'](_0x4d6a64)['style']['visibility'] = 'visible';
                document['getElementById'](_0x4d6a64)['style']['display'] = 'initial';
            });
        };
        _0x1e85a9['exports']['hideName'] = function (_0x127970, _0x19983c) {
            _0x19983c['forEach'](function (_0x5a154f) {
                if (_0x5a154f == 'settings') {
                    return;
                }
                document['getElementById'](_0x5a154f)['style']['visibility'] = 'hidden';
                document['getElementById'](_0x5a154f)['style']['display'] = 'none';
            });
        };
        _0x1e85a9['exports']['createMap'] = function (_0x4dd45e, _0x3c7a59, _0x38fa13, _0x552690) {
            var _0x37160c = 0x32;
            var _0x519440 = 0xc8;
            var _0x45449d = _0x552690 / 0x190;
            var _0x357f45 = document['getElementById']('grid');
            for (var _0x436c95 = -_0x37160c; _0x436c95 <= _0x37160c; _0x436c95++) {
                for (var _0x53488f = -_0x37160c; _0x53488f <= _0x37160c; _0x53488f++) {
                    var _0x586143 = new _0x4dd45e['image'](_0x357f45, _0x436c95 * _0x519440 - 1.25, _0x53488f * _0x519440 - 1.25, _0x519440, _0x519440, 0.14);
                    _0x586143['background'] = !![];
                    _0x3c7a59['addBelow'](_0x586143);
                }
            }
            for (var _0x436c95 = -_0x37160c + 0x5; _0x436c95 < _0x37160c - 0x5; _0x436c95++) {
                for (var _0x53488f = -_0x45449d - 0x4; _0x53488f < -_0x45449d; _0x53488f++) {
                    var _0x1a5fc7 = new _0x4dd45e['rectangle']((_0x436c95 + 0.5) * _0x519440, (_0x53488f + 0.5) * _0x519440, _0x519440, _0x519440, '#000', 0.3);
                    _0x1a5fc7['background'] = !![];
                    _0x38fa13['add'](_0x1a5fc7);
                }
                for (var _0x53488f = _0x45449d + 0x4; _0x53488f > _0x45449d; _0x53488f--) {
                    var _0x1a5fc7 = new _0x4dd45e['rectangle']((_0x436c95 + 0.5) * _0x519440, (_0x53488f - 0.5) * _0x519440, _0x519440, _0x519440, '#000', 0.3);
                    _0x1a5fc7['background'] = !![];
                    _0x38fa13['add'](_0x1a5fc7);
                }
            }
            var _0x1853f0 = document['getElementById']('grass');
            if (!window['enableChristmas']) {
                for (var _0x96c1f3 = 0x0; _0x96c1f3 < 0x5dc; _0x96c1f3++) {
                    var _0x436c95 = Math['random']() - 0.5;
                    var _0x53488f = Math['random']() - 0.5;
                    _0x436c95 *= _0x552690;
                    _0x53488f *= _0x552690;
                    _0x53488f += 0x1e;
                    var _0x7e7cce = Math['floor'](Math['random']() * window['grassTypes']);
                    var _0x11da78 = new _0x4dd45e['image'](window['grassCanvas' + _0x7e7cce], _0x436c95, _0x53488f, window['grassWidth'], window['grassWidth']);
                    _0x3c7a59['add'](_0x11da78);
                    window['grass']['push'](_0x11da78);
                }
            }
            for (var _0x53488f = -_0x37160c + 0xa; _0x53488f < _0x37160c - 0xa; _0x53488f++) {
                for (var _0x436c95 = -_0x45449d - 0x6; _0x436c95 < -_0x45449d; _0x436c95++) {
                    var _0x1a5fc7 = new _0x4dd45e['rectangle']((_0x436c95 + 0.5) * _0x519440, (_0x53488f + 0.5) * _0x519440, _0x519440, _0x519440, '#000', 0.3);
                    _0x1a5fc7['background'] = !![];
                    _0x38fa13['add'](_0x1a5fc7);
                }
                for (var _0x436c95 = _0x45449d + 0x6; _0x436c95 > _0x45449d; _0x436c95--) {
                    var _0x1a5fc7 = new _0x4dd45e['rectangle']((_0x436c95 - 0.5) * _0x519440, (_0x53488f + 0.5) * _0x519440, _0x519440, _0x519440, '#000', 0.3);
                    _0x1a5fc7['background'] = !![];
                    _0x38fa13['add'](_0x1a5fc7);
                }
            }
        };
    },
    15: function (_0x5585d6, _0x5337fe) {
        var _0x58469e = {
            'startTime': 0x0,
            'frameNumber': 0x0,
            'getFPS': function () {
                this['frameNumber']++;
                var _0x2cf284 = new Date()['getTime'](),
                    _0x24e7cd = (_0x2cf284 - this['startTime']) / 0x3e8,
                    _0x525db3 = Math['floor'](this['frameNumber'] / _0x24e7cd);
                if (_0x24e7cd > 0x1) {
                    this['startTime'] = new Date()['getTime']();
                    this['frameNumber'] = 0x0;
                }
                return _0x525db3;
            }
        };
        var _0x2fff53 = ['canvas', 'globalAlpha', 'globalCompositeOperation', 'filter', 'imageSmoothingEnabled', 'imageSmoothingQuality', 'strokeStyle', 'fillStyle', 'shadowOffsetX', 'shadowOffsetY', 'shadowBlur', 'shadowColor', 'lineWidth', 'lineCap', 'lineJoin', 'miterLimit', 'lineDashOffset', 'font', 'textAlign', 'textBaseline', 'direction', 'arc', 'arcTo', 'beginPath', 'bezierCurveTo', 'clearRect', 'clip', 'closePath', 'createImageData', 'createLinearGradient', 'createPattern', 'createRadialGradient', 'drawFocusIfNeeded', 'drawImage', 'ellipse', 'fill', 'fillRect', 'fillText', 'getContextAttributes', 'getImageData', 'getLineDash', 'getTransform', 'isPointInPath', 'isPointInStroke', 'lineTo', 'measureText', 'moveTo', 'putImageData', 'quadraticCurveTo', 'rect', 'resetTransform', 'restore', 'rotate', 'save', 'scale', 'setLineDash', 'setTransform', 'stroke', 'strokeRect', 'strokeText', 'transform', 'translate'];
        var _0x2dd9c4 = HTMLCanvasElement['prototype']['getContext'];
        HTMLCanvasElement['prototype']['getContext'] = function (_0x23aafc) {
            var _0x41567f = _0x2dd9c4['apply'](this, [_0x23aafc]);
            if (_0x41567f == null) {
                console['warn']('Failed to initialize ctx, creating stub ctx');
                _0x41567f = {};
                for (var _0x2df0be of _0x2fff53) {
                    _0x41567f[_0x2df0be] = function () { };
                }
                _0x41567f['measureText'] = function () {
                    return {
                        'width': 0x1,
                        'height': 0x1
                    };
                };
                _0x41567f['miterLimit'] = 0x1;
            }
            return _0x41567f;
        };
        _0x5585d6['exports'] = function gameIO() {
            var _0x411a00 = {
                'renderers': [],
                'scenes': [],
                'particles': [],
                'envs': {},
                'devicePixelRatio': window['devicePixelRatio'],
                'pixelResize': 0.5,
                'lastPixelCheck': Date['now']()
            };
            _0x411a00['gamepad'] = function () {
                var _0x5ae8cb = [];
                if (navigator['getGamepads'] !== undefined)
                    _0x5ae8cb = navigator['getGamepads']();
                for (var _0x3a685c = 0x0; _0x3a685c < _0x5ae8cb['length']; _0x3a685c++) {
                    if (_0x5ae8cb[_0x3a685c] !== undefined)
                        return _0x5ae8cb[_0x3a685c];
                }
                return null;
            };
            _0x411a00['gamepadControl'] = function () {
                var _0x51a900 = {
                    'buttons': [],
                    'axes': []
                };
                for (var _0x2dc797 = 0x0; _0x2dc797 < 0x10; _0x2dc797++)
                    _0x51a900['buttons']['push']({
                        'pressed': ![]
                    });
                return _0x51a900;
            };
            _0x411a00['recycledCanvases'] = [];
            for (var _0x4a53f3 = 0x0; _0x4a53f3 < 0x1e; _0x4a53f3++) {
                _0x411a00['recycledCanvases']['push'](document['createElement']('canvas'));
                _0x411a00['recycledCanvases'][_0x4a53f3]['width'] = 0x0;
                _0x411a00['recycledCanvases'][_0x4a53f3]['height'] = 0x0;
            }
            _0x411a00['usingCanvases'] = [];
            _0x411a00['getCanvas'] = function () {
                while (_0x411a00['recycledCanvases']['length'] > 0x0) {
                    var _0x1a7dcc = _0x411a00['recycledCanvases']['splice'](0x0, 0x1)[0x0];
                    if (_0x411a00['usingCanvases']['indexOf'](_0x1a7dcc) != -0x1) {
                        continue;
                    }
                    _0x411a00['usingCanvases']['push'](_0x1a7dcc);
                    return _0x1a7dcc;
                }
                return document['createElement']('canvas');
            };
            _0x411a00['mouse'] = function (_0x34b9c3) {
                var _0x580bc9 = new _0x411a00['Vector2'](0x0, 0x0);
                _0x580bc9['renderer'] = _0x34b9c3 || undefined;
                _0x580bc9['clicking'] = ![];
                _0x580bc9['rightClicking'] = ![];
                _0x580bc9['changed'] = ![];
                _0x580bc9['rightChanged'] = !![];
                _0x580bc9['moved'] = ![];
                _0x580bc9['locked'] = ![];
                _0x580bc9['emulatedFromTouch'] = ![];
                _0x580bc9['client'] = new _0x411a00['Vector2'](0x0, 0x0);
                window['addEventListener']('mousemove', function (_0xb09df) {
                    _0x580bc9['emulatedFromTouch'] = ![];
                    if (_0x580bc9['locked']) {
                        _0x580bc9['client']['x'] += _0xb09df['movementX'];
                        _0x580bc9['client']['y'] += _0xb09df['movementY'];
                        _0x580bc9['client']['x'] = Math['max'](Math['min'](_0x580bc9['client']['x'], window['innerWidth']), 0x0);
                        _0x580bc9['client']['y'] = Math['max'](Math['min'](_0x580bc9['client']['y'], window['innerHeight']), 0x0);
                        _0x580bc9['newx'] = _0x580bc9['client']['x'];
                        _0x580bc9['newy'] = _0x580bc9['client']['y'];
                    } else {
                        _0x580bc9['newx'] = _0xb09df['clientX'];
                        _0x580bc9['newy'] = _0xb09df['clientY'];
                        _0x580bc9['client']['x'] = _0x580bc9['x'];
                        _0x580bc9['client']['y'] = _0x580bc9['y'];
                    }
                    _0x580bc9['moved'] = !![];
                });
                window['addEventListener']('mousedown', function (_0x393172) {
                    var _0x37831c = _0x393172['target'];
                    while (_0x37831c && _0x37831c['classList']) {
                        _0x37831c['classList']['add']('pressed');
                        _0x37831c = _0x37831c['parentNode'];
                    }
                    window['addEventListener']('mouseup', function () {
                        var _0x1117a8 = _0x393172['target'];
                        while (_0x1117a8 && _0x1117a8['classList']) {
                            _0x1117a8['classList']['remove']('pressed');
                            _0x1117a8 = _0x1117a8['parentNode'];
                        }
                    }, {
                        'once': !![]
                    });
                    _0x580bc9['emulatedFromTouch'] = ![];
                    if (_0x393172['button'] === 0x0) {
                        _0x580bc9['clicking'] = !![];
                        _0x580bc9['changed'] = !![];
                    } else if (_0x393172['button'] == 0x2) {
                        _0x580bc9['rightClicking'] = !![];
                        _0x580bc9['rightChanged'] = !![];
                    } else if (_0x393172['button'] > 0x2) {
                        _0x393172['preventDefault']();
                    }
                });
                window['addEventListener']('click', function (_0x483db0) {
                    if (_0x483db0['button'] > 0x2) {
                        _0x483db0['preventDefault']();
                    }
                });
                window['addEventListener']('contextmenu', function (_0x9fe2c8) {
                    _0x9fe2c8['preventDefault']();
                    if (_0x9fe2c8['stopPropagation'] != undefined)
                        _0x9fe2c8['stopPropagation']();
                });
                window['addEventListener']('mouseup', function (_0x2bfd7d) {
                    _0x580bc9['emulatedFromTouch'] = ![];
                    if (_0x2bfd7d['button'] === 0x0) {
                        _0x580bc9['clicking'] = ![];
                        _0x580bc9['changed'] = !![];
                    } else if (_0x2bfd7d['button'] == 0x2) {
                        _0x580bc9['rightClicking'] = ![];
                        _0x580bc9['rightChanged'] = !![];
                    } else if (_0x2bfd7d['button'] > 0x2) {
                        _0x2bfd7d['preventDefault']();
                    }
                });
                _0x580bc9['fromRenderer'] = function (_0x2a83d3) {
                    this['x'] = (this['x'] - _0x2a83d3['c']['width'] / 0x2 - _0x2a83d3['left']) * _0x2a83d3['ratio'] / 0x2;
                    this['y'] = (this['y'] - _0x2a83d3['c']['height'] / 0x2 - _0x2a83d3['top']) * _0x2a83d3['ratio'] / 0x2;
                };
                _0x580bc9['isCollidingWithRectangle'] = function (_0x2d44c7, _0x1357da = ![]) {
                    if (!_0x1357da && this['emulatedFromTouch'] && !this['clicking'] && !this['rightClicking'])
                        return ![];
                    if (_0x34b9c3 === undefined)
                        return ![];
                    if (this['x'] < _0x2d44c7['position']['x'] + _0x2d44c7['width'] / 0x2 && this['x'] > _0x2d44c7['position']['x'] - _0x2d44c7['width'] / 0x2 && this['y'] < _0x2d44c7['position']['y'] + _0x2d44c7['height'] / 0x2 && this['y'] > _0x2d44c7['position']['y'] - _0x2d44c7['height'] / 0x2)
                        return !![];
                    return ![];
                };
                return _0x580bc9;
            };
            _0x411a00['touches'] = function (_0x560ba1, _0x146d0b) {
                var _0x2bbb8f = [];
                var _0x3a2b29 = null;
                function _0x141b6b(_0xd8e5b8) {
                    _0xd8e5b8['tX'] = Math['max'](Math['min']((_0xd8e5b8['x'] - _0x560ba1['c']['width'] / _0x411a00['devicePixelRatio'] * _0x560ba1['qualitySize'] / 0x2 - _0x560ba1['left']) * _0x560ba1['ratio'] / _0x560ba1['qualitySize'] * _0x411a00['devicePixelRatio'], 0x780 / 0x2), -0x780 / 0x2);
                    _0xd8e5b8['tY'] = Math['max'](Math['min']((_0xd8e5b8['y'] - _0x560ba1['c']['height'] / _0x411a00['devicePixelRatio'] * _0x560ba1['qualitySize'] / 0x2 - _0x560ba1['top']) * _0x560ba1['ratio'] / _0x560ba1['qualitySize'] * _0x411a00['devicePixelRatio'], 0x438 / 0x2), -0x438 / 0x2);
                    _0xd8e5b8['tStartX'] = Math['max'](Math['min']((_0xd8e5b8['startX'] - _0x560ba1['c']['width'] / _0x411a00['devicePixelRatio'] * _0x560ba1['qualitySize'] / 0x2 - _0x560ba1['left']) * _0x560ba1['ratio'] / _0x560ba1['qualitySize'] * _0x411a00['devicePixelRatio'], 0x780 / 0x2), -0x780 / 0x2);
                    _0xd8e5b8['tStartY'] = Math['max'](Math['min']((_0xd8e5b8['startY'] - _0x560ba1['c']['height'] / _0x411a00['devicePixelRatio'] * _0x560ba1['qualitySize'] / 0x2 - _0x560ba1['top']) * _0x560ba1['ratio'] / _0x560ba1['qualitySize'] * _0x411a00['devicePixelRatio'], 0x438 / 0x2), -0x438 / 0x2);
                }
                window['addEventListener']('touchstart', function (_0x158d71) {
                    var _0x329536 = _0x158d71['target'];
                    while (_0x329536 && _0x329536['classList']) {
                        _0x329536['classList']['add']('pressed');
                        _0x329536 = _0x329536['parentNode'];
                    }
                    _0x146d0b['emulatedFromTouch'] = !![];
                    for (var _0x24b7ac of _0x158d71['changedTouches']) {
                        _0x3a2b29 = _0x24b7ac['identifier'];
                        if (_0x146d0b) {
                            _0x146d0b['clicking'] = !![];
                            _0x146d0b['changed'] = !![];
                            _0x146d0b['newx'] = _0x24b7ac['clientX'];
                            _0x146d0b['newy'] = _0x24b7ac['clientY'];
                            _0x146d0b['client']['x'] = _0x146d0b['x'];
                            _0x146d0b['client']['y'] = _0x146d0b['y'];
                            _0x146d0b['moved'] = !![];
                        }
                        var _0x24b7ac = {
                            'id': _0x24b7ac['identifier'],
                            'x': _0x24b7ac['clientX'],
                            'y': _0x24b7ac['clientY'],
                            'startX': _0x24b7ac['clientX'],
                            'startY': _0x24b7ac['clientY'],
                            'moved': !![]
                        };
                        _0x141b6b(_0x24b7ac);
                        _0x2bbb8f['push'](_0x24b7ac);
                    }
                    _0x158d71['preventDefault']();
                }, {
                    'passive': ![]
                });
                window['addEventListener']('touchmove', function (_0xc6c3de) {
                    for (var _0x5deca2 of _0xc6c3de['changedTouches']) {
                        if (_0x3a2b29 == _0x5deca2['identifier']) {
                            _0x146d0b['emulatedFromTouch'] = !![];
                            _0x146d0b['newx'] = _0x5deca2['clientX'];
                            _0x146d0b['newy'] = _0x5deca2['clientY'];
                            _0x146d0b['client']['x'] = _0x146d0b['x'];
                            _0x146d0b['client']['y'] = _0x146d0b['y'];
                            _0x146d0b['moved'] = !![];
                        }
                        var _0x413ad8 = _0x2bbb8f['find'](_0x384997 => _0x384997['id'] == _0x5deca2['identifier']);
                        if (_0x413ad8 == null)
                            continue;
                        _0x413ad8['x'] = _0x5deca2['clientX'];
                        _0x413ad8['y'] = _0x5deca2['clientY'];
                        _0x413ad8['moved'] = !![];
                        _0x141b6b(_0x413ad8);
                    }
                    _0xc6c3de['preventDefault']();
                }, {
                    'passive': ![]
                });
                var _0xf314fe = function (_0x2ccf4c) {
                    var _0x3e1948 = _0x2ccf4c['target'];
                    while (_0x3e1948 && _0x3e1948['classList']) {
                        _0x3e1948['classList']['remove']('pressed');
                        _0x3e1948 = _0x3e1948['parentNode'];
                    }
                    for (var _0x5c4559 of _0x2ccf4c['changedTouches']) {
                        var _0x31f782 = _0x5c4559['target'];
                        while (_0x31f782 != null) {
                            if (_0x31f782['tagName'] == 'INPUT') {
                                _0x31f782['focus']();
                                _0x2ccf4c['preventDefault']();
                                return;
                            }
                            if (_0x31f782['tagName'] == 'A') {
                                _0x31f782['target'] = '';
                                _0x31f782['click']();
                                _0x2ccf4c['preventDefault']();
                                return;
                            }
                            if (_0x31f782['onclick']) {
                                _0x31f782['onclick'](_0x5c4559);
                                _0x2ccf4c['preventDefault']();
                                return;
                            }
                            _0x31f782 = _0x31f782['parentElement'];
                        }
                        if (_0x2ccf4c['target'])
                            _0x5c4559['target']['click']();
                        if (_0x3a2b29 == _0x5c4559['identifier']) {
                            _0x3a2b29 = null;
                            if (_0x146d0b) {
                                _0x146d0b['emulatedFromTouch'] = !![];
                                _0x146d0b['clicking'] = ![];
                                _0x146d0b['changed'] = !![];
                                _0x146d0b['newx'] = _0x5c4559['clientX'];
                                _0x146d0b['newy'] = _0x5c4559['clientY'];
                                _0x146d0b['client']['x'] = _0x146d0b['x'];
                                _0x146d0b['client']['y'] = _0x146d0b['y'];
                                _0x146d0b['moved'] = !![];
                            }
                        }
                        var _0x5f2afa = _0x2bbb8f['findIndex'](_0x63eb67 => _0x63eb67['id'] == _0x5c4559['identifier']);
                        if (_0x5f2afa == -0x1)
                            continue;
                        _0x2bbb8f['splice'](_0x5f2afa, 0x1);
                    }
                    _0x2ccf4c['preventDefault']();
                };
                window['addEventListener']('touchend', _0xf314fe, {
                    'passive': ![]
                });
                window['addEventListener']('touchcancel', _0xf314fe, {
                    'passive': ![]
                });
                return {
                    'renderer': _0x560ba1,
                    'touches': _0x2bbb8f,
                    'getTouch'(_0x40b966) {
                        return this['touches']['find'](_0xa71baa => _0xa71baa['id'] == _0x40b966);
                    }
                };
            };
            _0x411a00['renderer'] = function (_0x598162) {
                if (_0x598162 === undefined) {
                    _0x598162 = document['createElement']('canvas');
                    _0x598162['style']['position'] = 'absolute';
                    document['body']['appendChild'](_0x598162);
                }
                _0x411a00['renderers']['push']({
                    'ctx': _0x598162['getContext']('2d'),
                    'c': _0x598162,
                    'clearScreen': !![],
                    'top': 0x0,
                    'left': 0x0,
                    'leftOfScreen': 0x0,
                    'rightOfScreen': 0x0,
                    'topOfScreen': 0x0,
                    'bottomOfScreen': 0x0,
                    'position': new _0x411a00['Vector2'](0x0, 0x0),
                    'ratio': 0x1,
                    'qualitySize': 0x1,
                    'scaleFactor': 0x1,
                    'smoothingEnabled': !![],
                    'inset': {
                        'top': 0x0,
                        'bottom': 0x0,
                        'left': 0x0,
                        'right': 0x0
                    },
                    'lastResize': {
                        'lastCheck': 0x0,
                        'screenWidth': null,
                        'screenHeight': null,
                        'renderSize': null,
                        'pixelResize': 0.5,
                        'inset': {
                            'top': 0x0,
                            'bottom': 0x0,
                            'left': 0x0,
                            'right': 0x0
                        }
                    },
                    'resizeIfNeeded': function (_0x2b3ca4) {
                        var _0x387840 = _0x411a00['now'];
                        if (_0x387840 - this['lastResize']['lastCheck'] > 0xfa || _0x2b3ca4) {
                            if (!_0x2b3ca4)
                                this['lastResize']['lastCheck'] = _0x387840;
                        } else {
                            return;
                        }
                        _0x411a00['devicePixelRatio'] = (window['devicePixelRatio'] + 0x1) / 0x2;
                        _0x411a00['devicePixelRatio'] = _0x411a00['normalLerp'](0x1, window['devicePixelRatio'], _0x411a00['pixelResize']);
                        if (window['innerWidth'] >= 0x3e8) {
                            _0x411a00['devicePixelRatio'] = 0x1;
                            _0x411a00['pixelResize'] = 0x0;
                        }
                        this['inset']['top'] = _0x533f62('sat') * _0x411a00['devicePixelRatio'];
                        this['inset']['bottom'] = _0x533f62('sab') * _0x411a00['devicePixelRatio'];
                        this['inset']['left'] = _0x533f62('sal') * _0x411a00['devicePixelRatio'];
                        this['inset']['right'] = _0x533f62('sar') * _0x411a00['devicePixelRatio'];
                        var _0x34a9c9 = window['innerWidth'];
                        var _0x1fac2e = window['innerHeight'];
                        var _0x146f21 = this['qualitySize'];
                        if (_0x34a9c9 != this['lastResize']['screenWidth'] || _0x1fac2e != this['lastResize']['screenHeight'] || _0x146f21 != this['lastResize']['renderSize'] || _0x411a00['pixelResize'] != this['lastResize']['pixelResize'] || this['inset']['top'] != this['lastResize']['inset']['top'] || this['inset']['bottom'] != this['lastResize']['inset']['bottom'] || this['inset']['left'] != this['lastResize']['inset']['left'] || this['inset']['right'] != this['lastResize']['inset']['right']) {
                            this['lastResize']['screenWidth'] = _0x34a9c9;
                            this['lastResize']['screenHeight'] = _0x1fac2e;
                            this['lastResize']['renderSize'] = _0x146f21;
                            this['lastResize']['pixelResize'] = _0x411a00['pixelResize'];
                            Object['assign'](this['lastResize']['inset'], this['inset']);
                        } else {
                            return;
                        }
                        var _0x25d048 = this;
                        if (_0x34a9c9 / _0x25d048['c']['width'] <= _0x1fac2e / _0x25d048['c']['height']) {
                            _0x25d048['c']['height'] = _0x1fac2e * _0x411a00['devicePixelRatio'];
                            _0x25d048['c']['width'] = _0x25d048['c']['height'] * 0x10 / 0x9;
                            _0x25d048['ratio'] = 0x438 / _0x25d048['c']['height'];
                            _0x25d048['c']['style']['height'] = '100vh';
                            _0x25d048['c']['style']['width'] = _0x1fac2e / _0x25d048['c']['height'] * _0x25d048['c']['width'] + 0x2;
                            _0x25d048['c']['style']['top'] = '0';
                            _0x25d048['top'] = 0x0;
                            _0x25d048['c']['style']['left'] = _0x34a9c9 / 0x2 - _0x1fac2e / _0x25d048['c']['height'] * _0x25d048['c']['width'] / 0x2 - 0x1 + 'px';
                            _0x25d048['left'] = _0x34a9c9 / 0x2 - _0x1fac2e / _0x25d048['c']['height'] * _0x25d048['c']['width'] / 0x2 - 0x1;
                        } else {
                            _0x25d048['c']['width'] = _0x34a9c9 * _0x411a00['devicePixelRatio'];
                            _0x25d048['c']['height'] = _0x25d048['c']['width'] * 0x9 / 0x10;
                            _0x25d048['ratio'] = 0x780 / _0x25d048['c']['width'];
                            _0x25d048['c']['style']['width'] = '100vw';
                            _0x25d048['c']['style']['height'] = _0x34a9c9 / _0x25d048['c']['width'] * _0x25d048['c']['height'];
                            _0x25d048['c']['style']['left'] = '0';
                            _0x25d048['left'] = 0x0;
                            _0x25d048['c']['style']['top'] = _0x1fac2e / 0x2 - _0x34a9c9 / _0x25d048['c']['width'] * _0x25d048['c']['height'] / 0x2 + 'px';
                            _0x25d048['top'] = _0x1fac2e / 0x2 - _0x34a9c9 / _0x25d048['c']['width'] * _0x25d048['c']['height'] / 0x2;
                        }
                        _0x25d048['leftOfScreen'] = -0x780 / 0x2 - (_0x34a9c9 * _0x411a00['devicePixelRatio'] - _0x25d048['c']['width']) / 0x2 * _0x25d048['ratio'];
                        _0x25d048['topOfScreen'] = -0x438 / 0x2 - (_0x1fac2e * _0x411a00['devicePixelRatio'] - _0x25d048['c']['height']) / 0x2 * _0x25d048['ratio'];
                        _0x25d048['rightOfScreen'] = -_0x25d048['leftOfScreen'];
                        _0x25d048['bottomOfScreen'] = -_0x25d048['topOfScreen'];
                        _0x25d048['c']['width'] /= _0x146f21;
                        _0x25d048['c']['height'] /= _0x146f21;
                        _0x25d048['ratio'] *= _0x146f21;
                        _0x25d048['scaleFactor'] = _0x25d048['ratio'] / _0x25d048['qualitySize'] / 0x2;
                        _0x25d048['ctx']['imageSmoothingEnabled'] = _0x25d048['smoothingEnabled'];
                    },
                    'render': function (_0x2f1a29) {
                        this['resizeIfNeeded'](![]);
                        this['ctx']['setTransform'](0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
                        if (this['clearScreen'])
                            this['clear']();
                        this['ctx']['translate'](-this['position']['x'] / this['ratio'] + this['c']['width'] / 0x2, -this['position']['y'] / this['ratio'] + this['c']['height'] / 0x2);
                        _0x2f1a29['render'](this['ctx'], this['ratio'] * _0x2f1a29['camera']['ratio'], 0x1);
                    },
                    'clear': function () {
                        this['ctx']['setTransform'](0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
                        this['ctx']['clearRect'](0x0, 0x0, this['c']['width'], this['c']['height']);
                    },
                    'drawBackground': function () {
                        this['ctx']['setTransform'](0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
                        this['ctx']['fillStyle'] = '#000';
                        this['ctx']['globalAlpha'] = 0x1;
                        this['ctx']['fillRect'](0x0, 0x0, this['c']['width'], this['c']['height']);
                    }
                });
                _0x411a00['renderers'][_0x411a00['renderers']['length'] - 0x1]['ctx']['imageSmoothingEnabled'] = !![];
                _0x411a00['resize'](!![]);
                _0x411a00['oldresize']();
                _0x411a00['resize'](!![]);
                return _0x411a00['renderers'][_0x411a00['renderers']['length'] - 0x1];
            };
            _0x411a00['socket'] = function (_0x67a178, _0x45aa22, _0x42ba53, _0x3ddf52, _0x3f8e3d) {
                if (_0x67a178 === undefined)
                    return null;
                var _0x27810a = new WebSocket(_0x67a178);
                _0x27810a['binaryType'] = 'arraybuffer';
                _0x27810a['onmessage'] = _0x45aa22 || function () { };
                _0x27810a['onopen'] = _0x42ba53 || function () { };
                _0x27810a['onclose'] = _0x3ddf52 || function () { };
                _0x27810a['onerror'] = _0x3f8e3d || function () { };
                return _0x27810a;
            };
            _0x411a00['resize'] = function (_0x4c427f) {
                _0x411a00['renderers']['forEach'](function (_0x4f5592) {
                    _0x4f5592['resizeIfNeeded'](_0x4c427f);
                });
            };
            _0x411a00['oldresize'] = function () {
                var _0x39b196 = 0x1;
                _0x411a00['renderers']['forEach'](function (_0x1b766a) {
                    _0x39b196 = _0x1b766a['qualitySize'];
                    if (document['body']['clientWidth'] / _0x1b766a['c']['width'] <= document['body']['clientHeight'] / _0x1b766a['c']['height']) {
                        _0x1b766a['c']['height'] = document['body']['clientHeight'] * _0x411a00['devicePixelRatio'];
                        _0x1b766a['c']['width'] = _0x1b766a['c']['height'] * 0x10 / 0x9;
                        _0x1b766a['ratio'] = 0x438 / _0x1b766a['c']['height'];
                        _0x1b766a['c']['style']['height'] = '100%';
                        _0x1b766a['c']['style']['width'] = document['body']['clientHeight'] / _0x1b766a['c']['height'] * _0x1b766a['c']['width'] + 0x2;
                        _0x1b766a['c']['style']['top'] = '0';
                        _0x1b766a['top'] = 0x0;
                        _0x1b766a['c']['style']['left'] = document['body']['clientWidth'] / 0x2 - document['body']['clientHeight'] / _0x1b766a['c']['height'] * _0x1b766a['c']['width'] / 0x2 - 0x1 + 'px';
                        _0x1b766a['left'] = document['body']['clientWidth'] / 0x2 - document['body']['clientHeight'] / _0x1b766a['c']['height'] * _0x1b766a['c']['width'] / 0x2 - 0x1;
                    } else {
                        _0x1b766a['c']['width'] = document['body']['clientWidth'] * _0x411a00['devicePixelRatio'];
                        _0x1b766a['c']['height'] = _0x1b766a['c']['width'] * 0x9 / 0x10;
                        _0x1b766a['ratio'] = 0x780 / _0x1b766a['c']['width'];
                        _0x1b766a['c']['style']['width'] = '100%';
                        _0x1b766a['c']['style']['height'] = document['body']['clientWidth'] / _0x1b766a['c']['width'] * _0x1b766a['c']['height'];
                        _0x1b766a['c']['style']['left'] = '0';
                        _0x1b766a['left'] = 0x0;
                        _0x1b766a['c']['style']['top'] = document['body']['clientHeight'] / 0x2 - document['body']['clientWidth'] / _0x1b766a['c']['width'] * _0x1b766a['c']['height'] / 0x2 + 'px';
                        _0x1b766a['top'] = document['body']['clientHeight'] / 0x2 - document['body']['clientWidth'] / _0x1b766a['c']['width'] * _0x1b766a['c']['height'] / 0x2;
                    }
                    _0x1b766a['leftOfScreen'] = -0x780 / 0x2 - (document['body']['clientWidth'] * _0x411a00['devicePixelRatio'] - _0x1b766a['c']['width']) / 0x2 * _0x1b766a['ratio'];
                    _0x1b766a['topOfScreen'] = -0x438 / 0x2 - (document['body']['clientHeight'] * _0x411a00['devicePixelRatio'] - _0x1b766a['c']['height']) / 0x2 * _0x1b766a['ratio'];
                    _0x1b766a['rightOfScreen'] = -_0x1b766a['leftOfScreen'];
                    _0x1b766a['bottomOfScreen'] = -_0x1b766a['topOfScreen'];
                    _0x1b766a['c']['width'] /= _0x39b196;
                    _0x1b766a['c']['height'] /= _0x39b196;
                    _0x1b766a['ratio'] *= _0x39b196;
                    _0x1b766a['ctx']['imageSmoothingEnabled'] = _0x1b766a['smoothingEnabled'];
                });
            };
            window['addEventListener']('resize', _0x411a00['resize'], ![]);
            _0x411a00['object'] = function () {
                return {
                    'position': new _0x411a00['Vector2'](0x0, 0x0),
                    'size': 0x1,
                    'opacity': 0x1,
                    'rotation': 0x0,
                    'type': 'object',
                    'background': ![],
                    'visible': !![],
                    'parent': null,
                    'objects': [],
                    'belowObjects': [],
                    'add': function (_0x1cb399) {
                        if (_0x1cb399['parent'] != null) {
                            console['log']('You can only have 1 parent per object');
                            return;
                        }
                        _0x1cb399['parent'] = this;
                        this['objects']['push'](_0x1cb399);
                    },
                    'addBelow': function (_0x4cf95a) {
                        if (_0x4cf95a['parent'] != null) {
                            console['log']('You can only have 1 parent per object');
                            return;
                        }
                        _0x4cf95a['parent'] = this;
                        this['belowObjects']['unshift'](_0x4cf95a);
                    },
                    'remove': function (_0x54efdd) {
                        if (_0x54efdd['type'] == 'text' && _0x54efdd['canvas'] !== undefined) { }
                        while (this['objects']['indexOf'](_0x54efdd) != -0x1) {
                            this['objects']['splice'](this['objects']['indexOf'](_0x54efdd), 0x1);
                            _0x54efdd['parent'] = null;
                        }
                        while (this['belowObjects']['indexOf'](_0x54efdd) != -0x1) {
                            this['belowObjects']['splice'](this['belowObjects']['indexOf'](_0x54efdd), 0x1);
                            _0x54efdd['parent'] = null;
                        }
                    },
                    'unlink': function () {
                        if (this['parent'] != null) {
                            this['parent']['remove'](this);
                            this['parent'] = null;
                        }
                        if (this['type'] == 'text' && this['canvas'] != _0x411a00['blankCanvas'] && this['canvas'] != null) {
                            if (_0x411a00['recycledCanvases']['indexOf'](this['canvas']) == -0x1) {
                                _0x411a00['recycledCanvases']['push'](this['canvas']);
                                while (_0x411a00['usingCanvases']['indexOf'](this['canvas']) != -0x1) {
                                    _0x411a00['usingCanvases']['splice'](_0x411a00['usingCanvases']['indexOf'](this['canvas']), 0x1);
                                }
                                this['canvas']['width'] = this['canvas']['height'] = 0x0;
                                this['canvas'] = null;
                            }
                        }
                        while (this['objects']['length'] > 0x0) {
                            var _0x57a04a = this['objects'][0x0];
                            _0x57a04a['unlink']();
                            if (this['objects'][0x0] == _0x57a04a) {
                                this['objects']['splice'](0x0, 0x1);
                            }
                        }
                        while (this['belowObjects']['length'] > 0x0) {
                            var _0x57a04a = this['belowObjects'][0x0];
                            _0x57a04a['unlink']();
                            if (this['belowObjects'][0x0] == _0x57a04a) {
                                this['belowObjects']['splice'](0x0, 0x1);
                            }
                        }
                    },
                    'render': function (_0x5b3558, _0x3b0b2f, _0x35915d) {
                        if (!this['visible'] || _0x35915d <= 0x0 || this['opacity'] <= 0x0) {
                            return;
                        }
                        _0x35915d = Math['min'](Math['max'](0x0, _0x35915d), 0x1);
                        var _0x3f8ab5 = this['size'];
                        _0x35915d = Math['min'](this['opacity'] * _0x35915d, 0x1);
                        var _0x2278c4 = this['position']['x'] / _0x3b0b2f;
                        var _0x2da384 = this['position']['y'] / _0x3b0b2f;
                        _0x5b3558['translate'](_0x2278c4, _0x2da384);
                        _0x5b3558['rotate'](this['rotation']);
                        var _0xd46dd3 = _0x3b0b2f / this['size'];
                        this['belowObjects']['forEach'](function (_0x3b70dd) {
                            _0x3b70dd['render'](_0x5b3558, _0xd46dd3, _0x35915d);
                        });
                        _0x5b3558['globalAlpha'] = _0x35915d;
                        this['renderSpecific'](_0x5b3558, _0xd46dd3);
                        this['objects']['forEach'](function (_0x274353) {
                            _0x274353['render'](_0x5b3558, _0xd46dd3, _0x35915d);
                        });
                        _0x5b3558['rotate'](-this['rotation']);
                        _0x5b3558['translate'](-_0x2278c4, -_0x2da384);
                    },
                    'renderSpecific': function (_0x373475, _0x1db7f2) {
                        return;
                    },
                    'absolutePosition': function (_0x2ff865) {
                        _0x2ff865['x'] = this['position']['x'];
                        _0x2ff865['y'] = this['position']['y'];
                        var _0x293a7e = this['parent'];
                        while (_0x293a7e != null) {
                            _0x2ff865['x'] += _0x293a7e['position']['x'];
                            _0x2ff865['y'] += _0x293a7e['position']['y'];
                            _0x293a7e = _0x293a7e['parent'];
                        }
                        return _0x2ff865;
                    }
                };
            };
            _0x411a00['image'] = function (_0x419b7d, _0x2c7c49, _0x10a570, _0x46f6dd, _0x5130dc, _0x470a01) {
                var _0x1ef28c = new _0x411a00['object']();
                _0x1ef28c['image'] = _0x419b7d || null;
                if (_0x1ef28c['image'] == null || _0x1ef28c === undefined) { }
                _0x1ef28c['position'] = new _0x411a00['Vector2'](_0x2c7c49 || 0x0, _0x10a570 || 0x0);
                _0x1ef28c['width'] = _0x46f6dd || 0x64;
                _0x1ef28c['height'] = _0x5130dc || 0x64;
                _0x1ef28c['opacity'] = _0x470a01 || 0x1;
                _0x1ef28c['type'] = 'image';
                _0x1ef28c['renderSpecific'] = function (_0x23dac1, _0x954a3a) {
                    var _0x5ed4d4 = 0x1 / _0x954a3a;
                    try {
                        _0x23dac1['drawImage'](this['image'], -this['width'] * 0.5 * _0x5ed4d4, -this['height'] * 0.5 * _0x5ed4d4, this['width'] * _0x5ed4d4, this['height'] * _0x5ed4d4);
                    } catch (_0x1db288) {
                        _0x23dac1['fillStyle'] = '#000';
                        _0x23dac1['globalAlpha'] = 0x1;
                        _0x23dac1['fillRect'](-this['width'] * 0.5 * _0x5ed4d4, -this['height'] * 0.5 * _0x5ed4d4, this['width'] * _0x5ed4d4, this['height'] * _0x5ed4d4);
                    }
                };
                return _0x1ef28c;
            };
            _0x411a00['prerender'] = function (_0x27b7d6, _0xc34d6, _0x5783ae, _0xbda0cc) {
                var _0x12c3a4 = _0x411a00['getCanvas']();
                var _0x5b84ce = _0x12c3a4['getContext']('2d');
                if (_0x5783ae === undefined) {
                    _0x5783ae = _0xc34d6;
                }
                _0xbda0cc = _0xbda0cc || 0x1;
                _0x12c3a4['width'] = Math['max'](_0xc34d6 * 0x2 * _0xbda0cc, 0x1);
                _0x12c3a4['height'] = Math['max'](_0x5783ae * 0x2 * _0xbda0cc, 0x1);
                _0x5b84ce['translate'](_0x12c3a4['width'] / 0x2, _0x12c3a4['height'] / 0x2);
                var _0x498ed4 = _0x27b7d6['position']['x'];
                var _0x5cc7cc = _0x27b7d6['position']['y'];
                _0x27b7d6['position'] = new _0x411a00['Vector2']();
                _0x27b7d6['render'](_0x5b84ce, 0.5, 0x1);
                return new _0x411a00['image'](_0x12c3a4, _0x498ed4, _0x5cc7cc, _0xc34d6, _0x5783ae, _0x27b7d6['opacity']);
            };
            _0x411a00['textImage'] = function (_0x5b71c6, _0x280770, _0x47d0b7, _0x4a62e9, _0x3ac6cb, _0x1d5eb4, _0x3f6667, _0x4a57d7, _0x3a48ed) {
                var _0x41b66d;
                if (_0x5b71c6 == null || _0x5b71c6 === undefined) {
                    _0x41b66d = _0x411a00['getCanvas']();
                } else {
                    _0x41b66d = _0x5b71c6;
                }
                var _0x46961e = _0x41b66d['getContext']('2d');
                _0x3ac6cb *= 0x2;
                _0x46961e['font'] = _0x1d5eb4 + ' ' + _0x3ac6cb + 'px ' + _0x4a62e9;
                _0x46961e['fillStyle'] = _0x47d0b7;
                _0x46961e['strokeStyle'] = _0x47d0b7;
                if (_0x3f6667) {
                    _0x46961e['lineWidth'] = _0x4a57d7 * 0x2;
                }
                var _0xc082e9 = _0x46961e['measureText'](_0x280770)['width'];
                var _0xff0d94 = _0x3ac6cb;
                if (_0x3f6667) {
                    _0xc082e9 += _0x4a57d7 * 0x2;
                    _0xff0d94 += _0x4a57d7 * 0x2;
                }
                if (!_0x3a48ed) {
                    _0x41b66d['width'] = Math['max'](_0xc082e9, 0x1);
                    _0x41b66d['height'] = Math['max'](_0xff0d94, 0x1);
                }
                _0x46961e['fillStyle'] = '#000';
                _0x46961e['font'] = _0x1d5eb4 + ' ' + _0x3ac6cb + 'px ' + _0x4a62e9;
                _0x46961e['fillStyle'] = _0x47d0b7;
                _0x46961e['strokeStyle'] = _0x47d0b7;
                _0x46961e['imageSmoothingEnabled'] = ![];
                if (_0x3f6667) {
                    _0x46961e['lineWidth'] = _0x4a57d7 * 0x2;
                    _0x46961e['miterLimit'] = 0.1;
                    _0x46961e['strokeText'](_0x280770, _0x4a57d7, _0x3ac6cb / 0x4 + _0xff0d94 / 0x2 + _0x4a57d7 / 0x2);
                } else {
                    _0x46961e['fillText'](_0x280770, -(_0xc082e9 - _0x41b66d['width']) / 0x2, _0x3ac6cb / 0x4 + _0xff0d94 / 0x2 - (_0xff0d94 - _0x41b66d['height']) / 0x2);
                }
                return _0x41b66d;
            };
            _0x411a00['flushTextRenderQueue'] = function () {
                while (_0x411a00['textRenderQueue']['length'] > 0x0) {
                    var _0x6f57b9 = _0x411a00['textRenderQueue']['splice'](0x0, 0x1)[0x0];
                    _0x6f57b9['redraw']();
                }
            };
            _0x411a00['blankCanvas'] = document['createElement']('canvas');
            _0x411a00['textRenderQueue'] = [];
            _0x411a00['savedTexts'] = [];
            _0x411a00['savedStrokes'] = [];
            _0x411a00['findText'] = function (_0x2b26b4, _0x5eae1f) {
                for (var _0x2dbcd2 = 0x0; _0x2dbcd2 < _0x2b26b4['length']; _0x2dbcd2++) {
                    var _0x348a88 = _0x2b26b4[_0x2dbcd2];
                    if (_0x348a88['text'] == _0x5eae1f['text'] && _0x348a88['fontSize'] == _0x5eae1f['fontSize'] && _0x348a88['textSize'] == _0x5eae1f['fontSize']) {
                        return _0x348a88;
                    }
                }
                return null;
            };
            _0x411a00['text'] = function (_0xeee485, _0x4c47b2, _0x27e20f, _0x52fc13, _0x16c79d, _0x415ba4, _0x602c0b, _0x54fcfa, _0x1d2e80) {
                var _0x165548 = new _0x411a00['object']();
                _0x165548['text'] = _0xeee485 || '';
                _0x165548['position'] = new _0x411a00['Vector2'](_0x4c47b2 || 0x0, _0x27e20f || 0x0);
                _0x165548['fillStyle'] = _0x52fc13 || '#000';
                _0x165548['font'] = _0x16c79d || 'Arial';
                _0x165548['fontSize'] = _0x415ba4 || 0x1e;
                _0x165548['otherParams'] = _0x602c0b || '';
                _0x165548['opacity'] = _0x54fcfa || 0x1;
                _0x165548['type'] = 'text';
                _0x165548['width'] = 0x0;
                _0x165548['align'] = _0x1d2e80 || 'center';
                _0x165548['ticksAlive'] = Math['floor'](Math['random']() * 0xc7);
                _0x165548['oldText'] = '';
                _0x165548['oldFont'] = _0x165548['font'];
                _0x165548['oldFontSize'] = _0x165548['fontSize'];
                _0x165548['fontLoaded'] = ![];
                if (document['fonts'] !== undefined) {
                    _0x165548['fontLoaded'] = document['fonts']['check'](_0x165548['otherParams'] + ' ' + _0x415ba4 + 'px ' + _0x16c79d);
                }
                _0x165548['canvas'] = _0x411a00['blankCanvas'];
                _0x165548['save'] = function () {
                    if (found == null) {
                        _0x411a00['savedTexts']['push'](_0x165548);
                    }
                };
                _0x165548['redraw'] = function () {
                    var _0xeee485 = this;
                    if (_0xeee485['canvas'] == _0x411a00['blankCanvas']) {
                        _0xeee485['canvas'] = _0x411a00['getCanvas']();
                    }
                    _0xeee485['canvas'] = _0x411a00['textImage'](_0xeee485['canvas'], _0xeee485['text'], _0xeee485['fillStyle'], _0xeee485['font'], _0xeee485['fontSize'], _0xeee485['otherParams']);
                    _0xeee485['oldText'] = _0xeee485['text'];
                    _0xeee485['oldFont'] = _0xeee485['font'];
                    _0xeee485['oldFontSize'] = _0xeee485['fontSize'];
                    _0xeee485['width'] = _0xeee485['canvas']['width'] / 0x2;
                    if (document['fonts'] == undefined) {
                        return;
                    }
                    _0xeee485['fontLoaded'] = document['fonts']['check'](_0xeee485['otherParams'] + ' ' + _0xeee485['fontSize'] + 'px ' + _0xeee485['font']);
                };
                _0x165548['renderSpecific'] = function (_0x3b6d9f, _0x1280d7) {
                    this['ticksAlive']++;
                    if (document['fonts'] == undefined) {
                        this['fontLoaded'] = !![];
                        this['redraw']();
                    }
                    if (!this['fontLoaded'] || this['canvas'] === _0x411a00['blankCanvas'] || this['oldText'] != this['text'] || this['oldFont'] != this['font'] || this['oldFontSize'] != this['fontSize']) {
                        this['redraw']();
                    }
                    if (this['ticksAlive'] > 0x3e8) {
                        this['ticksAlive'] = 0xa;
                    }
                    _0x1280d7 *= 0x2;
                    try {
                        switch (_0x165548['align']) {
                            case 'right':
                                _0x3b6d9f['drawImage'](this['canvas'], -this['canvas']['width'] / _0x1280d7, -this['canvas']['height'] / 0x2 / _0x1280d7, this['canvas']['width'] / _0x1280d7, this['canvas']['height'] / _0x1280d7);
                                break;
                            case 'left':
                                _0x3b6d9f['drawImage'](this['canvas'], 0x0, -this['canvas']['height'] / 0x2 / _0x1280d7, this['canvas']['width'] / _0x1280d7, this['canvas']['height'] / _0x1280d7);
                                break;
                            default:
                                _0x3b6d9f['drawImage'](this['canvas'], -this['canvas']['width'] / 0x2 / _0x1280d7, -this['canvas']['height'] / 0x2 / _0x1280d7, this['canvas']['width'] / _0x1280d7, this['canvas']['height'] / _0x1280d7);
                                break;
                        }
                    } catch (_0x285424) { }
                };
                return _0x165548;
            };
            _0x411a00['strokeText'] = function (_0x4fec04, _0x28a346, _0x257d3a, _0x3b9e69, _0x4ebc19, _0x36f6b8, _0x3cf5dc, _0x53c0ac, _0x9a38ba) {
                var _0x28c491 = new _0x411a00['object']();
                _0x28c491['text'] = _0x4fec04 || '';
                _0x28c491['position'] = new _0x411a00['Vector2'](_0x28a346 || 0x0, _0x257d3a || 0x0);
                _0x28c491['strokeStyle'] = _0x3b9e69 || '#000';
                _0x28c491['font'] = _0x4ebc19 || 'Arial';
                _0x28c491['fontSize'] = _0x36f6b8 || 0x1e;
                _0x28c491['otherParams'] = _0x3cf5dc || '';
                _0x28c491['opacity'] = _0x53c0ac || 0x1;
                _0x28c491['type'] = 'text';
                _0x28c491['width'] = 0x0;
                _0x28c491['align'] = _0x9a38ba || 'center';
                _0x28c491['lineWidth'] = 0x2;
                _0x28c491['ticksAlive'] = Math['floor'](Math['random']() * 0xc7);
                _0x28c491['oldText'] = _0x28c491['text'];
                _0x28c491['oldFont'] = _0x28c491['font'];
                _0x28c491['oldFontSize'] = _0x28c491['fontSize'];
                _0x28c491['oldLineWidth'] = _0x28c491['lineWidth'];
                _0x28c491['canvas'] = _0x411a00['blankCanvas'];
                _0x28c491['fontLoaded'] = ![];
                if (document['fonts'] !== undefined) {
                    _0x28c491['fontLoaded'] = document['fonts']['check'](_0x28c491['otherParams'] + ' ' + _0x36f6b8 + 'px ' + _0x4ebc19);
                }
                _0x28c491['save'] = function () {
                    if (found == null) {
                        _0x411a00['savedStrokes']['push'](_0x28c491);
                    }
                };
                _0x28c491['redraw'] = function () {
                    if (this['canvas'] == _0x411a00['blankCanvas']) {
                        this['canvas'] = _0x411a00['getCanvas']();
                    }
                    this['canvas'] = _0x411a00['textImage'](this['canvas'], this['text'], this['strokeStyle'], this['font'], this['fontSize'], this['otherParams'], !![], this['lineWidth']);
                    this['canvas'] = _0x411a00['textImage'](this['canvas'], this['text'], this['strokeStyle'], this['font'], this['fontSize'], this['otherParams'], ![], this['lineWidth'], !![]);
                    this['oldText'] = this['text'];
                    this['oldFont'] = this['font'];
                    this['oldFontSize'] = this['fontSize'];
                    this['oldLineWidth'] = this['lineWidth'];
                    this['width'] = this['canvas']['width'] / 0x2;
                    if (document['fonts'] == undefined) {
                        return;
                    }
                    this['fontLoaded'] = document['fonts']['check'](this['otherParams'] + ' ' + this['fontSize'] + 'px ' + this['font']);
                };
                _0x28c491['renderSpecific'] = function (_0x4ca721, _0x36919c) {
                    _0x36919c *= 0x2;
                    this['ticksAlive']++;
                    if (document['fonts'] == undefined) {
                        this['fontLoaded'] = !![];
                        this['redraw']();
                    }
                    if (!this['fontLoaded'] || this['canvas'] === undefined || this['oldText'] != this['text'] || this['oldFont'] != this['font'] || this['oldFontSize'] != this['fontSize'] || this['oldLineWidth'] != this['lineWidth']) {
                        this['redraw']();
                    }
                    if (this['ticksAlive'] > 0x3e8) {
                        this['ticksAlive'] = 0xa;
                    }
                    try {
                        switch (_0x28c491['align']) {
                            case 'right':
                                _0x4ca721['drawImage'](this['canvas'], -this['canvas']['width'] / _0x36919c, -this['canvas']['height'] / 0x2 / _0x36919c, this['canvas']['width'] / _0x36919c, this['canvas']['height'] / _0x36919c);
                                break;
                            case 'left':
                                _0x4ca721['drawImage'](this['canvas'], -this['lineWidth'] / _0x36919c, -this['canvas']['height'] / 0x2 / _0x36919c, this['canvas']['width'] / _0x36919c, this['canvas']['height'] / _0x36919c);
                                break;
                            default:
                                _0x4ca721['drawImage'](this['canvas'], -this['canvas']['width'] / 0x2 / _0x36919c, -this['canvas']['height'] / 0x2 / _0x36919c, this['canvas']['width'] / _0x36919c, this['canvas']['height'] / _0x36919c);
                                break;
                        }
                    } catch (_0x62bf62) { }
                };
                return _0x28c491;
            };
            _0x411a00['Vector2'] = function (_0xad07d5, _0x145435) {
                return {
                    'x': _0xad07d5 || 0x0,
                    'y': _0x145435 || 0x0,
                    'clone': function () {
                        return new _0x411a00['Vector2'](this['x'], this['y']);
                    }
                };
            };
            _0x411a00['Vector3'] = function (_0x394d9d, _0x1b5b4a, _0x154210) {
                return {
                    'x': _0x394d9d || 0x0,
                    'y': _0x1b5b4a || 0x0,
                    'z': _0x154210 || 0x0,
                    'clone': function () {
                        return new _0x411a00['Vector3'](this['x'], this['y'], this['z']);
                    }
                };
            };
            _0x411a00['Vector4'] = function (_0x50ee3d, _0x1e6411, _0x8f41e0, _0x57164a) {
                return {
                    'x': _0x50ee3d || 0x0,
                    'y': _0x1e6411 || 0x0,
                    'z': _0x8f41e0 || 0x0,
                    'w': _0x57164a || 0x0,
                    'clone': function () {
                        return new _0x411a00['Vector4'](this['x'], this['y'], this['z'], this['w']);
                    }
                };
            };
            _0x411a00['controls'] = function () {
                return {
                    'up': ![],
                    'down': ![],
                    'left': ![],
                    'right': ![],
                    'space': ![],
                    'shift': ![],
                    'changed': ![],
                    'clone': function () {
                        var _0x43265c = new _0x411a00['controls']();
                        _0x43265c['up'] = this['up'];
                        _0x43265c['down'] = this['down'];
                        _0x43265c['left'] = this['left'];
                        _0x43265c['right'] = this['right'];
                        _0x43265c['space'] = this['space'];
                        _0x43265c['shift'] = this['shift'];
                        return _0x43265c;
                    }
                };
            };
            _0x411a00['multiplayerControls'] = function () {
                return {
                    'key_up': ![],
                    'key_down': ![],
                    'key_left': ![],
                    'key_right': ![],
                    'key_w': ![],
                    'key_s': ![],
                    'key_a': ![],
                    'key_d': ![],
                    'space': ![],
                    'shift': ![],
                    'changed': ![]
                };
            };
            _0x411a00['keyboard'] = function (_0x1578f7) {
                _0x1578f7 = _0x1578f7 || new _0x411a00['controls']();
                _0x1578f7['changedKeys'] = [];
                function _0x576347(_0x547451) {
                    var _0x557688 = ![];
                    if (_0x547451['keyCode'] == 0x25 || _0x547451['keyCode'] == 0x41) {
                        if (!_0x1578f7['left']) {
                            _0x557688 = !![];
                            _0x1578f7['left'] = !![];
                            _0x1578f7['changedKeys']['push']('left');
                        }
                    } else if (_0x547451['keyCode'] == 0x26 || _0x547451['keyCode'] == 0x57) {
                        if (!_0x1578f7['up']) {
                            _0x557688 = !![];
                            _0x1578f7['up'] = !![];
                            _0x1578f7['changedKeys']['push']('up');
                        }
                    } else if (_0x547451['keyCode'] == 0x27 || _0x547451['keyCode'] == 0x44) {
                        if (!_0x1578f7['right']) {
                            _0x557688 = !![];
                            _0x1578f7['right'] = !![];
                            _0x1578f7['changedKeys']['push']('right');
                        }
                    } else if (_0x547451['keyCode'] == 0x28 || _0x547451['keyCode'] == 0x53) {
                        if (!_0x1578f7['down']) {
                            _0x557688 = !![];
                            _0x1578f7['down'] = !![];
                            _0x1578f7['changedKeys']['push']('down');
                        }
                    } else if (_0x547451['keyCode'] == 0x20) {
                        if (!_0x1578f7['space']) {
                            _0x557688 = !![];
                            _0x1578f7['space'] = !![];
                            _0x1578f7['changedKeys']['push']('space');
                        }
                    } else if (_0x547451['keyCode'] == 0x10) {
                        if (!_0x1578f7['shift']) {
                            _0x557688 = !![];
                            _0x1578f7['shift'] = !![];
                            _0x1578f7['changedKeys']['push']('shift');
                        }
                    }
                    _0x1578f7['changed'] = _0x557688;
                }
                window['addEventListener']('keydown', _0x576347, ![]);
                function _0x658ff8(_0x42fc48) {
                    if (_0x42fc48['keyCode'] == 0x25 || _0x42fc48['keyCode'] == 0x41) {
                        _0x1578f7['left'] = ![];
                        _0x1578f7['changedKeys']['push']('left');
                    } else if (_0x42fc48['keyCode'] == 0x26 || _0x42fc48['keyCode'] == 0x57) {
                        _0x1578f7['up'] = ![];
                        _0x1578f7['changedKeys']['push']('up');
                    } else if (_0x42fc48['keyCode'] == 0x27 || _0x42fc48['keyCode'] == 0x44) {
                        _0x1578f7['right'] = ![];
                        _0x1578f7['changedKeys']['push']('right');
                    } else if (_0x42fc48['keyCode'] == 0x28 || _0x42fc48['keyCode'] == 0x53) {
                        _0x1578f7['down'] = ![];
                        _0x1578f7['changedKeys']['push']('down');
                    } else if (_0x42fc48['keyCode'] == 0x20) {
                        _0x1578f7['space'] = ![];
                        _0x1578f7['changedKeys']['push']('space');
                    } else if (_0x42fc48['keyCode'] == 0x10) {
                        _0x1578f7['shift'] = ![];
                        _0x1578f7['changedKeys']['push']('shift');
                    }
                    _0x1578f7['changed'] = !![];
                }
                window['addEventListener']('keyup', _0x658ff8, ![]);
                return _0x1578f7;
            };
            _0x411a00['multiplayerKeyboard'] = function (_0x1d504d) {
                _0x1d504d = _0x1d504d || new _0x411a00['controls']();
                function _0x4e9897(_0x54c3ee) {
                    var _0x1fb9b9 = ![];
                    if (_0x54c3ee['keyCode'] == 0x41) {
                        if (!_0x1d504d['key_a']) {
                            _0x1fb9b9 = !![];
                            _0x1d504d['key_a'] = !![];
                        }
                    } else if (_0x54c3ee['keyCode'] == 0x25) {
                        if (!_0x1d504d['key_left']) {
                            _0x1fb9b9 = !![];
                            _0x1d504d['key_left'] = !![];
                        }
                    } else if (_0x54c3ee['keyCode'] == 0x57) {
                        if (!_0x1d504d['key_w']) {
                            _0x1fb9b9 = !![];
                            _0x1d504d['key_w'] = !![];
                        }
                    } else if (_0x54c3ee['keyCode'] == 0x26) {
                        if (!_0x1d504d['key_up']) {
                            _0x1fb9b9 = !![];
                            _0x1d504d['key_up'] = !![];
                        }
                    } else if (_0x54c3ee['keyCode'] == 0x44) {
                        if (!_0x1d504d['key_d']) {
                            _0x1fb9b9 = !![];
                            _0x1d504d['key_d'] = !![];
                        }
                    } else if (_0x54c3ee['keyCode'] == 0x27) {
                        if (!_0x1d504d['key_right']) {
                            _0x1fb9b9 = !![];
                            _0x1d504d['key_right'] = !![];
                        }
                    } else if (_0x54c3ee['keyCode'] == 0x53) {
                        if (!_0x1d504d['key_s']) {
                            _0x1fb9b9 = !![];
                            _0x1d504d['key_s'] = !![];
                        }
                    } else if (_0x54c3ee['keyCode'] == 0x28) {
                        if (!_0x1d504d['key_down']) {
                            _0x1fb9b9 = !![];
                            _0x1d504d['key_down'] = !![];
                        }
                    } else if (_0x54c3ee['keyCode'] == 0x20) {
                        if (!_0x1d504d['space']) {
                            _0x1fb9b9 = !![];
                            _0x1d504d['space'] = !![];
                        }
                    } else if (_0x54c3ee['keyCode'] == 0x10) {
                        if (!_0x1d504d['shift']) {
                            _0x1fb9b9 = !![];
                            _0x1d504d['shift'] = !![];
                        }
                    }
                    _0x1d504d['changed'] = _0x1fb9b9;
                }
                window['addEventListener']('keydown', _0x4e9897, ![]);
                function _0x30e0cb(_0x1fb8ff) {
                    if (_0x1fb8ff['keyCode'] == 0x25)
                        _0x1d504d['key_left'] = ![];
                    else if (_0x1fb8ff['keyCode'] == 0x41)
                        _0x1d504d['key_a'] = ![];
                    else if (_0x1fb8ff['keyCode'] == 0x26)
                        _0x1d504d['key_up'] = ![];
                    else if (_0x1fb8ff['keyCode'] == 0x57)
                        _0x1d504d['key_w'] = ![];
                    else if (_0x1fb8ff['keyCode'] == 0x27)
                        _0x1d504d['key_right'] = ![];
                    else if (_0x1fb8ff['keyCode'] == 0x44)
                        _0x1d504d['key_d'] = ![];
                    else if (_0x1fb8ff['keyCode'] == 0x28)
                        _0x1d504d['key_down'] = ![];
                    else if (_0x1fb8ff['keyCode'] == 0x53)
                        _0x1d504d['key_s'] = ![];
                    else if (_0x1fb8ff['keyCode'] == 0x20)
                        _0x1d504d['space'] = ![];
                    else if (_0x1fb8ff['keyCode'] == 0x10)
                        _0x1d504d['shift'] = ![];
                    _0x1d504d['changed'] = !![];
                }
                window['addEventListener']('keyup', _0x30e0cb, ![]);
                return _0x1d504d;
            };
            _0x411a00['rectangle'] = function (_0x583ef2, _0x2853b3, _0x5cb37a, _0x353aae, _0xf752ed, _0x328fe5) {
                var _0x353551 = new _0x411a00['object']();
                _0x353551['position'] = new _0x411a00['Vector2'](_0x583ef2 || 0x0, _0x2853b3 || 0x0);
                _0x353551['width'] = _0x5cb37a || 0x64;
                _0x353551['height'] = _0x353aae || 0x64;
                _0x353551['color'] = _0xf752ed || '#000000';
                _0x353551['opacity'] = _0x328fe5 || 0x1;
                _0x353551['type'] = 'rectangle';
                _0x353551['renderSpecific'] = function (_0xae4df9, _0xd77f00) {
                    _0xae4df9['fillStyle'] = this['color'];
                    _0xae4df9['fillRect'](-this['width'] * this['size'] / 0x2 / _0xd77f00, -this['height'] * this['size'] / 0x2 / _0xd77f00, this['width'] * this['size'] / _0xd77f00, this['height'] * this['size'] / _0xd77f00);
                };
                return _0x353551;
            };
            _0x411a00['strokeRectangle'] = function (_0x26ec4a, _0x16569e, _0x251809, _0x34254f, _0x26b3a1, _0x3cac00, _0x5da433) {
                var _0x1ac13e = new _0x411a00['object']();
                _0x1ac13e['position'] = new _0x411a00['Vector2'](_0x26ec4a || 0x0, _0x16569e || 0x0);
                _0x1ac13e['width'] = _0x251809 || 0x64;
                _0x1ac13e['height'] = _0x34254f || 0x64;
                _0x1ac13e['color'] = _0x26b3a1 || '#000000';
                _0x1ac13e['opacity'] = _0x5da433 || 0x1;
                _0x1ac13e['lineWidth'] = _0x3cac00 || 0x5;
                _0x1ac13e['type'] = 'rectangle';
                _0x1ac13e['renderSpecific'] = function (_0x1c1196, _0xd43fb6) {
                    _0x1c1196['strokeStyle'] = this['color'];
                    _0x1c1196['lineWidth'] = this['lineWidth'] * this['size'] / _0xd43fb6;
                    _0x1c1196['strokeRect'](-this['width'] * this['size'] / 0x2 / _0xd43fb6, -this['height'] * this['size'] / 0x2 / _0xd43fb6, this['width'] * this['size'] / _0xd43fb6, this['height'] * this['size'] / _0xd43fb6);
                };
                return _0x1ac13e;
            };
            _0x411a00['roundRectangle'] = function (_0x67f8c7, _0x500cc1, _0x3ae580, _0x2c1da2, _0x5ad886, _0x1ff9a6) {
                var _0x3d5d97 = new _0x411a00['object']();
                _0x3d5d97['position'] = new _0x411a00['Vector2'](_0x67f8c7 || 0x0, _0x500cc1 || 0x0);
                _0x3d5d97['width'] = _0x3ae580 || 0x64;
                _0x3d5d97['height'] = _0x2c1da2 || 0x64;
                _0x3d5d97['color'] = _0x1ff9a6 || '#000000';
                _0x3d5d97['radius'] = _0x5ad886 || 0x0;
                _0x3d5d97['type'] = 'roundRectangle';
                _0x3d5d97['strokeStyle'] = -0x1;
                _0x3d5d97['lineWidth'] = 0x4;
                _0x3d5d97['renderSpecific'] = function (_0x2f2d89, _0x365561) {
                    _0x2f2d89['fillStyle'] = this['color'];
                    _0x2f2d89['beginPath']();
                    _0x2f2d89['moveTo']((-this['width'] / 0x2 + this['radius']) * this['size'] / _0x365561, -this['height'] * this['size'] / 0x2 / _0x365561);
                    _0x2f2d89['lineTo']((this['width'] / 0x2 - this['radius']) * this['size'] / _0x365561, -this['height'] * this['size'] / 0x2 / _0x365561);
                    _0x2f2d89['arc']((this['width'] / 0x2 - this['radius']) * this['size'] / _0x365561, (-this['height'] / 0x2 + this['radius']) * this['size'] / _0x365561, this['radius'] * this['size'] / _0x365561, Math['PI'] * 0x3 / 0x2, Math['PI'] * 0x2);
                    _0x2f2d89['lineTo'](this['width'] * this['size'] / 0x2 / _0x365561, (this['height'] / 0x2 - this['radius']) * this['size'] / _0x365561);
                    _0x2f2d89['arc']((this['width'] / 0x2 - this['radius']) * this['size'] / _0x365561, (this['height'] / 0x2 - this['radius']) * this['size'] / _0x365561, this['radius'] * this['size'] / _0x365561, 0x0, Math['PI'] / 0x2);
                    _0x2f2d89['lineTo']((-this['width'] / 0x2 + this['radius']) * this['size'] / _0x365561, this['height'] * this['size'] / 0x2 / _0x365561);
                    _0x2f2d89['arc']((-this['width'] / 0x2 + this['radius']) * this['size'] / _0x365561, (this['height'] / 0x2 - this['radius']) * this['size'] / _0x365561, this['radius'] * this['size'] / _0x365561, Math['PI'] / 0x2, Math['PI']);
                    _0x2f2d89['lineTo'](-this['width'] * this['size'] / 0x2 / _0x365561, (-this['height'] / 0x2 + this['radius']) * this['size'] / _0x365561);
                    _0x2f2d89['arc']((-this['width'] / 0x2 + this['radius']) * this['size'] / _0x365561, (-this['height'] / 0x2 + this['radius']) * this['size'] / _0x365561, this['radius'] * this['size'] / _0x365561, Math['PI'], Math['PI'] * 0x3 / 0x2);
                    _0x2f2d89['fill']();
                    if (this['strokeStyle'] != -0x1) {
                        _0x2f2d89['strokeStyle'] = this['strokeStyle'];
                        _0x2f2d89['lineWidth'] = this['lineWidth'] * this['size'] / _0x365561;
                        var _0x210967 = this['width'];
                        var _0x4ad107 = this['height'];
                        this['width'] -= this['lineWidth'] / 0x2;
                        this['height'] -= this['lineWidth'] / 0x2;
                        _0x2f2d89['beginPath']();
                        _0x2f2d89['moveTo']((-this['width'] / 0x2 + this['radius']) * this['size'] / _0x365561, -this['height'] * this['size'] / 0x2 / _0x365561);
                        _0x2f2d89['lineTo']((this['width'] / 0x2 - this['radius']) * this['size'] / _0x365561, -this['height'] * this['size'] / 0x2 / _0x365561);
                        _0x2f2d89['arc']((this['width'] / 0x2 - this['radius']) * this['size'] / _0x365561, (-this['height'] / 0x2 + this['radius']) * this['size'] / _0x365561, this['radius'] * this['size'] / _0x365561, Math['PI'] * 0x3 / 0x2, Math['PI'] * 0x2);
                        _0x2f2d89['lineTo'](this['width'] * this['size'] / 0x2 / _0x365561, (this['height'] / 0x2 - this['radius']) * this['size'] / _0x365561);
                        _0x2f2d89['arc']((this['width'] / 0x2 - this['radius']) * this['size'] / _0x365561, (this['height'] / 0x2 - this['radius']) * this['size'] / _0x365561, this['radius'] * this['size'] / _0x365561, 0x0, Math['PI'] / 0x2);
                        _0x2f2d89['lineTo']((-this['width'] / 0x2 + this['radius']) * this['size'] / _0x365561, this['height'] * this['size'] / 0x2 / _0x365561);
                        _0x2f2d89['arc']((-this['width'] / 0x2 + this['radius']) * this['size'] / _0x365561, (this['height'] / 0x2 - this['radius']) * this['size'] / _0x365561, this['radius'] * this['size'] / _0x365561, Math['PI'] / 0x2, Math['PI']);
                        _0x2f2d89['lineTo'](-this['width'] * this['size'] / 0x2 / _0x365561, (-this['height'] / 0x2 + this['radius']) * this['size'] / _0x365561);
                        _0x2f2d89['arc']((-this['width'] / 0x2 + this['radius']) * this['size'] / _0x365561, (-this['height'] / 0x2 + this['radius']) * this['size'] / _0x365561, this['radius'] * this['size'] / _0x365561, Math['PI'], Math['PI'] * 0x3 / 0x2);
                        _0x2f2d89['stroke']();
                        this['width'] = _0x210967;
                        this['height'] = _0x4ad107;
                    }
                };
                return _0x3d5d97;
            };
            _0x411a00['blurredRectangle'] = function (_0x5c1ae3, _0x14b90a, _0x3d0cd0, _0x576860, _0x4081f4, _0x3d9714, _0x520d74) {
                _0x5c1ae3 = _0x5c1ae3 || 0x0;
                _0x14b90a = _0x14b90a || 0x0;
                _0x3d0cd0 = _0x3d0cd0 || 0x64;
                _0x576860 = _0x576860 || 0x64;
                _0x4081f4 = _0x4081f4 || '#000000';
                _0x3d9714 = _0x3d9714 || 0x3;
                _0x520d74 = _0x520d74 || 0x1;
                var _0x428886 = document['createElement']('canvas');
                _0x428886['width'] = _0x3d0cd0 + _0x3d9714 * 0x4;
                _0x428886['height'] = _0x576860 + _0x3d9714 * 0x4;
                var _0xd109a1 = _0x428886['getContext']('2d');
                _0xd109a1['fillStyle'] = _0x4081f4;
                _0xd109a1['filter'] = 'blur( ' + _0x3d9714 + 'px )';
                _0xd109a1['globalAlpha'] = _0x520d74;
                _0xd109a1['fillRect'](_0x3d9714 * 0x2, _0x3d9714 * 0x2, _0x3d0cd0, _0x576860);
                return new _0x411a00['image'](_0x428886, _0x5c1ae3, _0x14b90a, _0x3d0cd0, _0x576860);
            };
            _0x411a00['polygon'] = function (_0x521c0b, _0x2fe09e, _0xc5ef4, _0x29f2b3) {
                var _0x30b5ca = new _0x411a00['object']();
                _0x30b5ca['position'] = new _0x411a00['Vector2'](_0x521c0b || 0x0, _0x2fe09e || 0x0);
                _0x30b5ca['points'] = _0xc5ef4 || [new _0x411a00['Vector2'](-0x32, 0x28), new _0x411a00['Vector2'](0x0, -0x28), new _0x411a00['Vector2'](0x32, 0x28)];
                _0x30b5ca['color'] = _0x29f2b3 || '#000000';
                _0x30b5ca['shouldStroke'] = ![];
                _0x30b5ca['strokeColor'] = '#000000';
                _0x30b5ca['lineWidth'] = 0x3;
                _0x30b5ca['type'] = 'polygon';
                _0x30b5ca['renderSpecific'] = function (_0x5021db, _0x462d68) {
                    var _0x40683c = _0x5021db['miterLimit'];
                    _0x5021db['miterLimit'] = 0xa;
                    _0x5021db['fillStyle'] = this['color'];
                    _0x5021db['lineWidth'] = this['lineWidth'] * this['size'] / _0x462d68;
                    _0x5021db['beginPath']();
                    _0x5021db['moveTo'](this['points'][0x0]['x'] * this['size'] / _0x462d68, this['points'][0x0]['y'] * this['size'] / _0x462d68);
                    for (var _0x98138d = 0x1; _0x98138d < this['points']['length']; _0x98138d++) {
                        _0x5021db['lineTo'](this['points'][_0x98138d]['x'] * this['size'] / _0x462d68, this['points'][_0x98138d]['y'] * this['size'] / _0x462d68);
                    }
                    _0x5021db['closePath']();
                    if (this['shouldStroke']) {
                        _0x5021db['strokeStyle'] = this['strokeColor'];
                        _0x5021db['stroke']();
                    }
                    _0x5021db['fill']();
                    _0x5021db['miterLimit'] = _0x40683c;
                };
                return _0x30b5ca;
            };
            _0x411a00['circle'] = function (_0x4694e1, _0x1a142b, _0x2ddc6b, _0x84b0a5, _0x5ea8ca) {
                var _0x4d2753 = new _0x411a00['object']();
                _0x4d2753['position'] = new _0x411a00['Vector2'](_0x4694e1 || 0x0, _0x1a142b || 0x0);
                _0x4d2753['radius'] = _0x2ddc6b || 0x64;
                _0x4d2753['color'] = _0x84b0a5 || '#000000';
                _0x4d2753['opacity'] = _0x5ea8ca || 0x1;
                _0x4d2753['type'] = 'circle';
                _0x4d2753['renderSpecific'] = function (_0x584b61, _0x39603c) {
                    _0x584b61['fillStyle'] = this['color'];
                    _0x584b61['beginPath']();
                    _0x584b61['arc'](0x0, 0x0, this['radius'] * this['size'] / _0x39603c, 0x0, 0x2 * Math['PI']);
                    _0x584b61['closePath']();
                    _0x584b61['fill']();
                };
                return _0x4d2753;
            };
            _0x411a00['arc'] = function (_0xc86348, _0x4bd600, _0x181dd2, _0x5e4a43, _0xc7444f, _0x4ee281, _0x3bd680) {
                var _0x417623 = new _0x411a00['object']();
                _0x417623['position'] = new _0x411a00['Vector2'](_0xc86348 || 0x0, _0x4bd600 || 0x0);
                _0x417623['radius'] = _0x181dd2 || 0x64;
                _0x417623['color'] = _0x5e4a43 || '#000000';
                _0x417623['angle'] = _0xc7444f || Math['PI'];
                _0x417623['rotation'] = _0x4ee281 || 0x0;
                _0x417623['lineWidth'] = _0x3bd680 || 0x5;
                _0x417623['type'] = 'arc';
                _0x417623['renderSpecific'] = function (_0xc2d621, _0x3e9f0e) {
                    _0xc2d621['strokeStyle'] = this['color'];
                    _0xc2d621['lineWidth'] = this['lineWidth'] * this['size'] / _0x3e9f0e;
                    _0xc2d621['beginPath']();
                    _0xc2d621['arc'](0x0, 0x0, this['radius'] * this['size'] / _0x3e9f0e, 0x0, this['angle']);
                    _0xc2d621['stroke']();
                };
                return _0x417623;
            };
            _0x411a00['blurredCircle'] = function (_0x5d2a3f, _0x414591, _0x38b34c, _0x7d6d33, _0x4b455c) {
                _0x5d2a3f = _0x5d2a3f || 0x0;
                _0x414591 = _0x414591 || 0x0;
                _0x38b34c = _0x38b34c || 0x64;
                _0x7d6d33 = _0x7d6d33 || '#000000';
                _0x4b455c = _0x4b455c || 0x3;
                var _0x31064c = document['createElement']('canvas');
                _0x31064c['width'] = _0x38b34c * 0x2 + _0x4b455c * 0x4;
                _0x31064c['height'] = _0x38b34c * 0x2 + _0x4b455c * 0x4;
                var _0x338fc6 = _0x31064c['getContext']('2d');
                _0x338fc6['fillStyle'] = _0x7d6d33;
                _0x338fc6['filter'] = 'blur( ' + _0x4b455c + 'px )';
                _0x338fc6['beginPath']();
                _0x338fc6['arc'](_0x38b34c + _0x4b455c * 0x2, _0x38b34c + _0x4b455c * 0x2, _0x38b34c, 0x0, 0x2 * Math['PI']);
                _0x338fc6['closePath']();
                _0x338fc6['fill']();
                return new _0x411a00['image'](_0x31064c, _0x5d2a3f, _0x414591, _0x38b34c * 0x2, _0x38b34c * 2.3);
            };
            _0x411a00['particle'] = function (_0x1dc766, _0x3d5017, _0x385330, _0x141f4a, _0x571540, _0x15cfb9, _0x3f7cb3, _0x558488, _0x277d85, _0x4eed8c) {
                var _0x2b59f2 = new _0x411a00['rectangle'](_0x1dc766, _0x3d5017, _0x385330, _0x385330, _0x141f4a, 0.7);
                _0x2b59f2['turn'] = _0x571540 || (Math['floor'](Math['random']() * 0x2) - 0.5) * 0.2;
                _0x2b59f2['opacityFade'] = _0x15cfb9 || 0x1;
                _0x2b59f2['rotation'] = Math['random']() * Math['PI'] * 0x2;
                _0x2b59f2['velocity'] = new _0x411a00['Vector2'](_0x3f7cb3 || 0x0, _0x558488 || 0x0);
                _0x2b59f2['velocityFade'] = 0x1;
                if (_0x4eed8c !== undefined)
                    _0x2b59f2['velocityFade'] = _0x4eed8c;
                _0x2b59f2['opacity'] = _0x277d85 || 0x1;
                _0x2b59f2['type'] = 'particle';
                _0x2b59f2['update'] = function (_0x10b850) {
                    _0x2b59f2['rotation'] += _0x2b59f2['turn'] * _0x10b850;
                    _0x2b59f2['width'] -= 0.2 * _0x10b850;
                    _0x2b59f2['height'] -= 0.2 * _0x10b850;
                    _0x2b59f2['opacity'] -= 0.02 * _0x10b850 * _0x2b59f2['opacityFade'];
                    _0x2b59f2['velocity']['x'] *= _0x2b59f2['velocityFade'];
                    _0x2b59f2['velocity']['y'] *= _0x2b59f2['velocityFade'];
                    _0x2b59f2['position']['x'] += _0x2b59f2['velocity']['x'] * _0x10b850;
                    _0x2b59f2['position']['y'] += _0x2b59f2['velocity']['y'] * _0x10b850;
                    if (_0x2b59f2['opacity'] <= 0x0 && _0x411a00['particles']['indexOf'](_0x2b59f2) != -0x1) {
                        _0x411a00['particles']['splice'](_0x411a00['particles']['indexOf'](_0x2b59f2), 0x1);
                        if (_0x2b59f2['parent'] != null)
                            _0x2b59f2['parent']['remove'](_0x2b59f2);
                    }
                };
                _0x411a00['particles']['push'](_0x2b59f2);
                return _0x2b59f2;
            };
            _0x411a00['customParticle'] = function (_0x56cc11, _0x4e6dc0, _0x225a39, _0xf14feb, _0x4bfab2, _0x385137, _0x3ddf21) {
                _0x56cc11['turn'] = _0x4e6dc0 || (Math['floor'](Math['random']() * 0x2) - 0.5) * 0.2;
                _0x56cc11['opacityFade'] = _0x225a39 || 0x1;
                _0x56cc11['rotation'] = Math['random']() * Math['PI'] * 0x2;
                _0x56cc11['velocity'] = new _0x411a00['Vector2'](_0xf14feb || 0x0, _0x4bfab2 || 0x0);
                _0x56cc11['widthFade'] = _0x385137 || 0x1;
                _0x56cc11['heightFade'] = _0x3ddf21 || 0x1;
                _0x56cc11['type'] = 'particle';
                _0x56cc11['opacityThreshold'] = 0x0;
                if (_0x56cc11['update'] == undefined) {
                    _0x56cc11['update'] = function (_0x307286) {
                        _0x56cc11['rotation'] += _0x56cc11['turn'] * _0x307286;
                        _0x56cc11['width'] -= 0.4 * _0x307286 * _0x56cc11['widthFade'];
                        _0x56cc11['height'] -= 0.4 * _0x307286 * _0x56cc11['heightFade'];
                        _0x56cc11['opacity'] -= 0.02 * _0x307286 * _0x56cc11['opacityFade'];
                        _0x56cc11['position']['x'] += _0x56cc11['velocity']['x'] * _0x307286;
                        _0x56cc11['position']['y'] += _0x56cc11['velocity']['y'] * _0x307286;
                        if (_0x56cc11['opacity'] <= _0x56cc11['opacityThreshold'] && _0x411a00['particles']['indexOf'](_0x56cc11) != -0x1) {
                            _0x56cc11['opacity'] = 0x0;
                            if (_0x56cc11['parentRemove'] === undefined)
                                _0x411a00['particles']['splice'](_0x411a00['particles']['indexOf'](_0x56cc11), 0x1);
                            if (_0x56cc11['parent'] != null && _0x56cc11['parentRemove'] === undefined)
                                _0x56cc11['parent']['remove'](_0x56cc11);
                            return 0x0;
                        }
                        return 0x1;
                    };
                }
                if (_0x56cc11['parentRemove'] === undefined) {
                    _0x411a00['particles']['push'](_0x56cc11);
                }
                return _0x56cc11;
            };
            _0x411a00['scene'] = function () {
                var _0x5d6133 = new _0x411a00['object']();
                _0x5d6133['type'] = 'scene';
                _0x5d6133['camera'] = {
                    'position': new _0x411a00['Vector2'](0x0, 0x0),
                    'ratio': 0x1,
                    'rotation': 0x0
                };
                _0x5d6133['render'] = function (_0x52ecc0, _0xe74136, _0x4d933d) {
                    _0xe74136 /= this['size'];
                    this['opacity'] = Math['min'](Math['max'](0x0, this['opacity']), 0x1);
                    _0x52ecc0['globalAlpha'] = this['opacity'] * _0x4d933d;
                    _0x52ecc0['translate'](-this['camera']['position']['x'] / _0xe74136, -this['camera']['position']['y'] / _0xe74136);
                    _0x52ecc0['rotate'](-this['camera']['rotation']);
                    this['belowObjects']['forEach'](function (_0x1b2ab7) {
                        _0x1b2ab7['render'](_0x52ecc0, _0xe74136, _0x4d933d);
                    });
                    this['objects']['forEach'](function (_0x519746) {
                        _0x519746['render'](_0x52ecc0, _0xe74136, _0x4d933d);
                    });
                    _0x52ecc0['rotate'](this['camera']['rotation']);
                    _0x52ecc0['translate'](this['camera']['position']['x'] / _0xe74136, this['camera']['position']['y'] / _0xe74136);
                };
                _0x411a00['scenes']['push'](_0x5d6133);
                return _0x5d6133;
            };
            _0x411a00['me'] = {
                'id': -0x1,
                'score': 0x0,
                'visual': {
                    'position': new _0x411a00['Vector2'](0x0, 0x0)
                },
                'new': {
                    'position': new _0x411a00['Vector2'](0x0, 0x0)
                },
                'actualNew': {
                    'position': new _0x411a00['Vector2'](0x0, 0x0)
                },
                'old': {
                    'position': new _0x411a00['Vector2'](0x0, 0x0)
                }
            };
            _0x411a00['ws'] = {
                'readyState': -0x1,
                'send': function () { },
                'close': function () { }
            };
            _0x411a00['connecting'] = ![];
            _0x411a00['spectating'] = !![];
            _0x411a00['currentPackets'] = [];
            _0x411a00['createSocket'] = function (_0x5d635b) {
                if (_0x411a00['connecting'])
                    return;
                _0x411a00['connecting'] = !![];
                console['log']('Closing old socket');
                _0x411a00['ws']['close']();
                function _0x5366d1() {
                    _0x411a00['connecting'] = ![];
                }
                _0x411a00['ws'] = new _0x411a00['socket'](_0x5d635b, _0x411a00['messageEvent'], _0x5366d1);
                _0x411a00['ws']['binaryType'] = 'arraybuffer';
            };
            _0x411a00['hasEnvs'] = ![];
            _0x411a00['serverDetails'] = {
                'lastFrame': Date['now'](),
                'thisFrame': Date['now'](),
                'dt': 0x1,
                'dtArray': [5.2, 5.2, 5.2, 5.2, 5.2, 5.2, 5.2, 5.2, 5.2, 5.2, 5.2],
                'fpsArray': [0x3c, 0x3c, 0x3c, 0x3c, 0x3c, 0x3c, 0x3c, 0x3c, 0x3c, 0x3c],
                'ticksSincePacket': 0x0
            };
            _0x411a00['clientDetails'] = {
                'lastFrame': Date['now'](),
                'thisFrame': Date['now'](),
                'dt': 0x1,
                'actualDt': 0x1
            };
            _0x411a00['toBuffer'] = function (_0x4a105d) {
                var _0x58e24b = new ArrayBuffer(_0x4a105d['length']);
                var _0x1e222b = new Uint8Array(_0x58e24b);
                for (var _0x2f9e84 = 0x0, _0xfaff04 = _0x4a105d['length']; _0x2f9e84 < _0xfaff04; _0x2f9e84++) {
                    _0x1e222b[_0x2f9e84] = _0x4a105d['charCodeAt'](_0x2f9e84);
                }
                return _0x58e24b;
            };
            _0x411a00['fromBuffer'] = function (_0x5483bd) {
                try {
                    return String['fromCharCode']['apply'](null, new Uint8Array(_0x5483bd));
                } catch (_0x2b67d5) { }
            };
            _0x411a00['selfExists'] = function () {
                if (!_0x411a00['hasEnvs']) {
                    _0x411a00['currentPackets']['push']({
                        'type': 'getEnvs'
                    });
                }
                for (var _0x2f3e2b = 0x0; _0x2f3e2b < _0x411a00['objects']['length']; _0x2f3e2b++) {
                    if (_0x411a00['objects'][_0x2f3e2b]['id'] == _0x411a00['me']['id']) {
                        return !![];
                    }
                }
                if (_0x411a00['ws']['readyState'] == 0x1) {
                    _0x411a00['currentPackets']['push']({
                        'type': 'getID'
                    });
                }
            };
            _0x411a00['notUpdatedIsClose'] = function (_0x3cf109) {
                if (Math['abs'](_0x411a00['me']['new']['position']['x'] - _0x3cf109['new']['position']['x']) < 0x780 / 0x2 + 0x640 && Math['abs'](_0x411a00['me']['new']['position']['y'] - _0x3cf109['new']['position']['y']) < 0x438 / 0x2 + 0x640)
                    return !![];
            };
            _0x411a00['visualIsClose'] = function (_0x3adf10) {
                if (Math['abs'](_0x411a00['me']['new']['position']['x'] - _0x3adf10['position']['x']) < 0x780 / 0x2 + 0x640 && Math['abs'](_0x411a00['me']['new']['position']['y'] - _0x3adf10['position']['y']) < 0x438 / 0x2 + 0x640)
                    return !![];
            };
            _0x411a00['lerp'] = function (_0x3a9e43, _0x3e4ccc) {
                if (_0x411a00['serverDetails']['ticksSincePacket'] > _0x411a00['serverDetails']['dt'] + 0x5) {
                    return (_0x3e4ccc - _0x3a9e43) / _0x411a00['serverDetails']['dt'] * (_0x411a00['serverDetails']['dt'] + 0x5) + _0x3a9e43;
                }
                return (_0x3e4ccc - _0x3a9e43) / _0x411a00['serverDetails']['dt'] * _0x411a00['serverDetails']['ticksSincePacket'] + _0x3a9e43;
            };
            _0x411a00['normalLerp'] = function (_0x2e9d0e, _0x2ef478, _0x3f50e6) {
                return (_0x2ef478 - _0x2e9d0e) * _0x3f50e6 + _0x2e9d0e;
            };
            _0x411a00['getObj'] = function (_0xc2a38) {
                for (var _0x3fc5a1 = 0x0; _0x3fc5a1 < _0x411a00['objects']['length']; _0x3fc5a1++) {
                    if (_0x411a00['objects'][_0x3fc5a1]['id'] == _0xc2a38) {
                        return _0x411a00['objects'][_0x3fc5a1];
                    }
                }
                return null;
            };
            _0x411a00['askForObj'] = function (_0x350716) {
                _0x411a00['currentPackets']['push']({
                    'type': 'getObject',
                    'object': {
                        'id': _0x350716
                    }
                });
            };
            _0x411a00['onGetEnvs'] = function (_0x4ec12a) { };
            _0x411a00['customSign'] = function (_0x456419) {
                return Math['sign'](_0x456419);
                return Math['sign'](Math['round'](_0x456419 / 0xa));
            };
            _0x411a00['positions'] = [];
            _0x411a00['average'] = function (_0x5a2b7a) {
                var _0x309d77 = 0x0;
                for (var _0x4762e5 = 0x0; _0x4762e5 < _0x5a2b7a['length']; _0x4762e5++) {
                    _0x309d77 += _0x5a2b7a[_0x4762e5];
                }
                return _0x309d77 / _0x5a2b7a['length'];
            };
            _0x411a00['packetFunctions'] = {
                'setID': function (_0x5a5032) {
                    _0x411a00['spectating'] = _0x5a5032['s'];
                    for (var _0x588afc = 0x0; _0x588afc < _0x411a00['objects']['length']; _0x588afc++) {
                        if (_0x411a00['objects'][_0x588afc]['id'] == _0x5a5032['id']) {
                            _0x411a00['me'] = _0x411a00['objects'][_0x588afc];
                        }
                    }
                },
                'x': function (_0x524a64) {
                    var _0xc26de1 = ['i', 'b', 'x', 'y', 'a', 'n'];
                    for (var _0xe19902 = 0x0; _0xe19902 < _0xc26de1['length']; _0xe19902++) {
                        _0x524a64[_0xc26de1[_0xe19902]] = _0x524a64['p'][_0xe19902];
                    }
                    if (_0x411a00['getObj'](_0x524a64['i']) != null) {
                        return null;
                    }
                    var _0x4b726c = {
                        'new': {
                            'position': new _0x411a00['Vector2'](_0x524a64['x'], _0x524a64['y']),
                            'rotation': _0x524a64['a'] / 0x64
                        },
                        'actualNew': {
                            'position': new _0x411a00['Vector2'](_0x524a64['x'], _0x524a64['y']),
                            'rotation': _0x524a64['a'] / 0x64
                        },
                        'old': {
                            'position': new _0x411a00['Vector2'](_0x524a64['x'], _0x524a64['y']),
                            'rotation': _0x524a64['a'] / 0x64
                        },
                        'actualOld': {
                            'position': new _0x411a00['Vector2'](_0x524a64['x'], _0x524a64['y']),
                            'rotation': _0x524a64['a'] / 0x64
                        },
                        'id': _0x524a64['i'],
                        'ticksAsleep': 0x0,
                        'visual': new _0x411a00['object'](),
                        'type': _0x524a64['b'],
                        'needsUpdate': _0x524a64['n']
                    };
                    if (_0x411a00['types'][_0x524a64['b']] === undefined) {
                        console['log'](_0x524a64['b']);
                    }
                    _0x411a00['types'][_0x524a64['b']]['create'](_0x4b726c, _0x524a64);
                    _0x4b726c['visual']['position']['x'] = _0x4b726c['new']['position']['x'];
                    _0x4b726c['visual']['position']['y'] = _0x4b726c['new']['position']['y'];
                    _0x4b726c['visual']['rotation'] = _0x4b726c['new']['rotation'];
                    _0x411a00['objects']['push'](_0x4b726c);
                    return;
                },
                'y': function (_0x57ead0) {
                    if (_0x411a00['getObj'](_0x57ead0['a'][0x0]) == null) {
                        _0x411a00['askForObj'](_0x57ead0['a'][0x0]);
                        return;
                    }
                    var _0x58fed7 = _0x411a00['getObj'](_0x57ead0['a'][0x0]);
                    if (_0x411a00['usedIDs']['indexOf'](_0x58fed7['id']) != -0x1) {
                        return;
                    }
                    var _0x53af95 = _0x58fed7['actualNew']['position']['x'] - _0x58fed7['actualOld']['position']['x'];
                    var _0x344288 = _0x58fed7['actualNew']['position']['y'] - _0x58fed7['actualOld']['position']['y'];
                    var _0x5f29b7 = 1.35;
                    var _0x1772ff = 0.7;
                    _0x5f29b7 = 1.5;
                    _0x1772ff = _0x5f29b7;
                    var _0xa34065 = _0x5f29b7;
                    if (_0x411a00['customSign'](_0x58fed7['actualNew']['position']['x'] - _0x58fed7['actualOld']['position']['x']) == -_0x411a00['customSign'](_0x57ead0['a'][0x1] - _0x58fed7['actualNew']['position']['x'])) {
                        _0xa34065 = _0x1772ff;
                    }
                    var _0x6d4946 = _0x5f29b7;
                    if (_0x411a00['customSign'](_0x58fed7['actualNew']['position']['y'] - _0x58fed7['actualOld']['position']['y']) == -_0x411a00['customSign'](_0x57ead0['a'][0x2] - _0x58fed7['actualNew']['position']['y'])) {
                        _0x6d4946 = _0x1772ff;
                    }
                    var _0x4ab0d6 = 0.2;
                    var _0x3c1b77 = 0.6;
                    var _0x5d75d0 = _0x4ab0d6;
                    var _0xd93da7 = _0x4ab0d6;
                    var _0xf25c5a = 0xa;
                    if (Math['abs'](_0x58fed7['actualNew']['position']['x'] - _0x58fed7['actualOld']['position']['x']) < _0xf25c5a) {
                        _0x5d75d0 = _0x411a00['normalLerp'](_0x4ab0d6, _0x3c1b77, (_0xf25c5a - Math['abs'](_0x58fed7['actualNew']['position']['x'] - _0x58fed7['actualOld']['position']['x'])) / _0xf25c5a);
                    }
                    if (Math['abs'](_0x58fed7['actualNew']['position']['y'] - _0x58fed7['actualOld']['position']['y']) < _0xf25c5a) {
                        _0xd93da7 = _0x411a00['normalLerp'](_0x4ab0d6, _0x3c1b77, (_0xf25c5a - Math['abs'](_0x58fed7['actualNew']['position']['y'] - _0x58fed7['actualOld']['position']['y'])) / _0xf25c5a);
                    }
                    _0x58fed7['ticksAsleep'] = 0x0;
                    _0x58fed7['old']['position'] = _0x58fed7['visual']['position']['clone']();
                    _0x58fed7['old']['rotation'] = _0x58fed7['visual']['rotation'];
                    _0x58fed7['actualOld']['position'] = _0x58fed7['actualNew']['position']['clone']();
                    _0x58fed7['actualOld']['rotation'] = _0x58fed7['actualNew']['rotation'];
                    _0x58fed7['new']['position'] = new _0x411a00['Vector2'](_0x57ead0['a'][0x1], _0x57ead0['a'][0x2]);
                    _0x58fed7['actualNew']['position'] = _0x58fed7['new']['position']['clone']();
                    _0x58fed7['actualNew']['rotation'] = _0x58fed7['new']['rotation'];
                    _0x58fed7['new']['position']['x'] = _0x411a00['normalLerp'](_0x58fed7['old']['position']['x'] + (_0x58fed7['new']['position']['x'] - _0x58fed7['actualOld']['position']['x']) * _0xa34065, _0x58fed7['new']['position']['x'], _0x5d75d0);
                    _0x58fed7['new']['position']['y'] = _0x411a00['normalLerp'](_0x58fed7['old']['position']['y'] + (_0x58fed7['new']['position']['y'] - _0x58fed7['actualOld']['position']['y']) * _0x6d4946, _0x58fed7['new']['position']['y'], _0xd93da7);
                    if (_0x58fed7 == _0x411a00['me']) { }
                    if (isNaN(_0x58fed7['old']['position']['x'])) {
                        _0x58fed7['old']['position']['x'] = _0x58fed7['new']['position']['x'];
                        _0x58fed7['actualOld']['position']['x'] = _0x58fed7['new']['position']['x'];
                        console['log']('NaN X Value');
                    }
                    if (isNaN(_0x58fed7['old']['position']['y'])) {
                        _0x58fed7['old']['position']['y'] = _0x58fed7['new']['position']['y'];
                        _0x58fed7['actualOld']['position']['y'] = _0x58fed7['new']['position']['y'];
                        console['log']('NaN Y Value');
                    }
                    if (Math['abs'](_0x58fed7['visual']['position']['x'] - _0x58fed7['new']['position']['x']) < 0.3) {
                        _0x58fed7['old']['position']['x'] = _0x58fed7['new']['position']['x'];
                    }
                    if (Math['abs'](_0x58fed7['visual']['position']['y'] - _0x58fed7['new']['position']['y']) < 0.3) {
                        _0x58fed7['old']['position']['y'] = _0x58fed7['new']['position']['y'];
                    }
                    _0x58fed7['new']['rotation'] = _0x57ead0['a'][0x3] / 0x64;
                    if (Math['abs'](_0x58fed7['old']['rotation'] - _0x58fed7['new']['rotation']) > Math['PI']) {
                        if (_0x58fed7['old']['rotation'] > _0x58fed7['new']['rotation'])
                            _0x58fed7['old']['rotation'] -= Math['PI'] * 0x2;
                        else
                            _0x58fed7['old']['rotation'] += Math['PI'] * 0x2;
                    }
                    _0x411a00['usedIDs']['push'](_0x58fed7['id']);
                    _0x411a00['types'][_0x58fed7['type']]['updatePacket'](_0x58fed7, _0x57ead0);
                },
                'z': function (_0x3dfad7) {
                    for (var _0x269279 = 0x0; _0x269279 < _0x411a00['objects']['length']; _0x269279++) {
                        if (_0x411a00['objects'][_0x269279]['id'] == _0x3dfad7['i']) {
                            if (_0x411a00['types'][_0x411a00['objects'][_0x269279]['type']]['remove'](_0x411a00['objects'][_0x269279], _0x3dfad7))
                                return;
                            if (_0x411a00['objects'][_0x269279]['visual']['parent'] != null)
                                _0x411a00['objects'][_0x269279]['visual']['parent']['remove'](_0x411a00['objects'][_0x269279]['visual']);
                            _0x411a00['objects']['splice'](_0x269279, 0x1);
                            break;
                        }
                    }
                },
                'e': function (_0x1b0d0c) {
                    if (!_0x411a00['hasEnvs']) {
                        _0x411a00['hasEnvs'] = !![];
                        _0x411a00['envs'] = _0x1b0d0c['envs'];
                        _0x411a00['onGetEnvs'](_0x411a00['envs']);
                    }
                }
            };
            _0x411a00['addPacketType'] = function (_0xade6b, _0x5890ca) {
                _0x411a00['packetFunctions'][_0xade6b] = _0x5890ca;
            };
            _0x411a00['types'] = [];
            _0x411a00['objects'] = [];
            _0x411a00['usedIDs'] = [];
            _0x411a00['lerpSpeed'] = 0x1;
            var _0x10ae9d = 0x3c;
            _0x411a00['messageQueue'] = [];
            _0x411a00['messageEvent'] = function (_0x56d76f) {
                _0x411a00['messageQueue']['push'](_0x56d76f);
            };
            _0x411a00['flushMessageQueue'] = function () {
                while (_0x411a00['messageQueue']['length'] > 0x0) {
                    _0x411a00['actualMessageEvent'](_0x411a00['messageQueue']['splice'](0x0, 0x1)[0x0]);
                }
            };
            _0x411a00['actualMessageEvent'] = function (_0x127444) {
                _0x411a00['serverDetails']['thisFrame'] = Date['now']();
                _0x411a00['lerpSpeed'] = 0x3 / _0x411a00['serverDetails']['ticksSincePacket'];
                if (isNaN(_0x411a00['lerpSpeed'])) {
                    _0x411a00['lerpSpeed'] = 0x1;
                }
                _0x411a00['lerpSpeed'] = Math['min'](Math['max'](_0x411a00['lerpSpeed'], 0.1), 0x2);
                _0x411a00['serverDetails']['dt'] = 5.3;
                _0x411a00['serverDetails']['lastFrame'] = _0x411a00['serverDetails']['thisFrame'];
                if (msgpack !== undefined) {
                    var _0x179e1a = msgpack['decode'](new Uint8Array(_0x127444['data']));
                    for (var _0x52ef90 = 0x0; _0x52ef90 < _0x179e1a['length']; _0x52ef90++) {
                        var _0x11de20 = _0x179e1a[_0x52ef90];
                        if (_0x411a00['packetFunctions'][_0x11de20['t']] !== undefined)
                            _0x411a00['packetFunctions'][_0x11de20['t']](_0x11de20);
                        else {
                            console['log']('Encountered issue: unknown packet type');
                            console['log'](_0x179e1a);
                            _0x11de20 = msgpack['decode'](_0x11de20);
                            if (_0x411a00['packetFunctions'][_0x11de20['t']] !== undefined) {
                                try {
                                    _0x411a00['packetFunctions'][_0x11de20['t']](_0x11de20);
                                } catch (_0x3761ed) {
                                    console['log']('Packet function error');
                                    console['log'](_0x3761ed);
                                }
                            }
                        }
                    }
                }
                for (var _0x52ef90 = 0x0; _0x52ef90 < _0x411a00['objects']['length']; _0x52ef90++) {
                    _0x411a00['objects'][_0x52ef90]['ticksAsleep']++;
                    if (_0x411a00['objects'][_0x52ef90]['ticksAsleep'] > 0x1) {
                        _0x411a00['objects'][_0x52ef90]['new']['position']['x'] = _0x411a00['normalLerp'](_0x411a00['objects'][_0x52ef90]['new']['position']['x'], _0x411a00['objects'][_0x52ef90]['actualNew']['position']['x'], 0.2);
                        _0x411a00['objects'][_0x52ef90]['new']['position']['y'] = _0x411a00['normalLerp'](_0x411a00['objects'][_0x52ef90]['new']['position']['y'], _0x411a00['objects'][_0x52ef90]['actualNew']['position']['y'], 0.2);
                    }
                    if (_0x411a00['usedIDs']['indexOf'](_0x411a00['objects'][_0x52ef90]['id']) == -0x1) {
                        _0x411a00['objects'][_0x52ef90]['old']['position']['x'] = _0x411a00['objects'][_0x52ef90]['visual']['position']['x'];
                        _0x411a00['objects'][_0x52ef90]['old']['position']['y'] = _0x411a00['objects'][_0x52ef90]['visual']['position']['y'];
                        _0x411a00['objects'][_0x52ef90]['old']['rotation'] = _0x411a00['objects'][_0x52ef90]['visual']['rotation'];
                    }
                    if ((_0x411a00['objects'][_0x52ef90]['needsUpdate'] && (_0x411a00['objects'][_0x52ef90]['ticksAsleep'] > 0xc9 && (_0x411a00['objects'][_0x52ef90]['old']['position']['x'] == _0x411a00['objects'][_0x52ef90]['new']['position']['x'] && _0x411a00['objects'][_0x52ef90]['old']['position']['y'] == _0x411a00['objects'][_0x52ef90]['new']['position']['y'] && _0x411a00['objects'][_0x52ef90]['old']['rotation'] == _0x411a00['objects'][_0x52ef90]['new']['rotation'])) || !_0x411a00['objects'][_0x52ef90]['needsUpdate'] && _0x411a00['objects'][_0x52ef90]['ticksAsleep'] >= 0x78 && !_0x411a00['notUpdatedIsClose'](_0x411a00['objects'][_0x52ef90])) && _0x411a00['usedIDs']['indexOf'](_0x411a00['objects'][_0x52ef90]['id']) == -0x1) {
                        if (_0x411a00['types'][_0x411a00['objects'][_0x52ef90]['type']]['remove'](_0x411a00['objects'][_0x52ef90], {}))
                            continue;
                        if (_0x411a00['objects'][_0x52ef90]['visual']['parent'] != null)
                            _0x411a00['objects'][_0x52ef90]['visual']['parent']['remove'](_0x411a00['objects'][_0x52ef90]['visual']);
                        _0x411a00['objects']['splice'](_0x52ef90, 0x1);
                    }
                }
                _0x411a00['usedIDs'] = [];
                _0x411a00['selfExists']();
                _0x411a00['serverDetails']['ticksSincePacket'] = 0x0;
            };
            _0x411a00['update'] = function () {
                _0x411a00['now'] = Date['now']();
                var _0x12593e = Math['max'](_0x58469e['getFPS'](), 0x1e);
                _0x411a00['serverDetails']['fpsArray']['push'](_0x12593e);
                _0x411a00['serverDetails']['fpsArray']['splice'](0x0, 0x1);
                _0x10ae9d = 0x0;
                for (var _0x5b56cc = 0x0; _0x5b56cc < _0x411a00['serverDetails']['fpsArray']['length']; _0x5b56cc++) {
                    _0x10ae9d += _0x411a00['serverDetails']['fpsArray'][_0x5b56cc];
                }
                _0x10ae9d /= _0x411a00['serverDetails']['fpsArray']['length'];
                _0x411a00['serverDetails']['ticksSincePacket'] += 0x1 / (_0x10ae9d / 0x3c);
                if (_0x411a00['now'] - _0x411a00['lastPixelCheck'] >= 0x9c4 && window['innerWidth'] < 0x3e8) {
                    if (_0x10ae9d < 0x37) {
                        _0x411a00['pixelResize'] -= 0.1;
                    } else if (_0x10ae9d >= 0x3b) {
                        _0x411a00['pixelResize'] += 0.05;
                    }
                    _0x411a00['pixelResize'] = Math['max'](Math['min'](_0x411a00['pixelResize'], 0x1), 0x0);
                    _0x411a00['lastPixelCheck'] = _0x411a00['now'];
                }
                _0x411a00['flushTextRenderQueue']();
                for (var _0x5b56cc = 0x0; _0x5b56cc < _0x411a00['objects']['length']; _0x5b56cc++) {
                    var _0x297279 = _0x411a00['objects'][_0x5b56cc];
                    _0x297279['visual']['rotation'] = _0x411a00['lerp'](_0x297279['old']['rotation'], _0x297279['new']['rotation']);
                    _0x297279['visual']['position']['x'] = _0x411a00['normalLerp'](_0x297279['visual']['position']['x'], _0x411a00['lerp'](_0x297279['old']['position']['x'], _0x297279['new']['position']['x']), 0.8);
                    _0x297279['visual']['position']['y'] = _0x411a00['normalLerp'](_0x297279['visual']['position']['y'], _0x411a00['lerp'](_0x297279['old']['position']['y'], _0x297279['new']['position']['y']), 0.8);
                    _0x411a00['types'][_0x297279['type']]['tickUpdate'](_0x297279);
                }
                _0x411a00['clientDetails']['thisFrame'] = _0x411a00['now'];
                _0x411a00['clientDetails']['dt'] = Math['min'](0x3c / _0x12593e, 0x2);
                _0x411a00['clientDetails']['actualDt'] = Math['min'](0x3e8 / _0x12593e, 0x22);
                _0x411a00['clientDetails']['lastFrame'] = _0x411a00['clientDetails']['thisFrame'];
                _0x411a00['particles']['forEach'](function (_0x113b47) {
                    _0x113b47['update'](_0x411a00['clientDetails']['dt'] * 1.2);
                });
                if (_0x411a00['ws']['readyState'] == 0x1 && _0x411a00['currentPackets']['length'] > 0x0) {
                    for (var _0x5b56cc = 0x0; _0x5b56cc < _0x411a00['currentPackets']['length']; _0x5b56cc++) {
                        if (_0x411a00['currentPackets'][_0x5b56cc]['type'] !== undefined) {
                            _0x411a00['currentPackets'][_0x5b56cc]['t'] = _0x411a00['currentPackets'][_0x5b56cc]['type'];
                            delete _0x411a00['currentPackets'][_0x5b56cc]['type'];
                        }
                    }
                    _0x411a00['ws']['send'](msgpack['encode'](_0x411a00['currentPackets']));
                    if (window['logPackets']) {
                        console['log'](_0x411a00['currentPackets']);
                    }
                    _0x411a00['currentPackets'] = [];
                }
            };
            _0x411a00['addType'] = function (_0xff29ec, _0xab85c2, _0x117f5d, _0x31701f, _0x5d8c6d) {
                _0x411a00['types'][_0xff29ec] = {
                    'create': _0xab85c2,
                    'tickUpdate': _0x117f5d || function (_0x1bf0e8) { },
                    'updatePacket': _0x31701f || function (_0x1e3285, _0x500cd7) { },
                    'remove': _0x5d8c6d || function (_0x50ed18) { }
                };
            };
            _0x411a00['addType']('spectator', function (_0x5b88d9, _0x15d956) {
                _0x5b88d9['visual'] = new _0x411a00['object']();
            }, function () { }, function () { });
            return _0x411a00;
        };
        _0x5585d6['exports']['requestFrame'] = function (_0x2f799d) {
            (window['requestAnimationFrame'] || window['webkitRequestAnimationFrame'] || window['mozRequestAnimationFrame'] || window['oRequestAnimationFrame'] || window['msRequestAnimationFrame'] || function (_0x33ad55) {
                setTimeout(_0x33ad55, 0x3e8 / 0x3c);
            })(_0x2f799d);
        };
        function _0x533f62(_0x30f43a) {
            let _0x3873cd = getComputedStyle(document['documentElement'])['getPropertyValue']('--' + _0x30f43a);
            _0x3873cd = parseInt(_0x3873cd);
            if (isFinite(_0x3873cd)) {
                return _0x3873cd;
            } else {
                return 0x0;
            }
        }
    },
    2: function (_0x19b7ec, _0x686044, _0x2f879e) {
        var _0x5df441 = _0x2f879e(0x3);
        var _0x24596e = _0x2f879e(0xb);
        function _0x30acfe(_0x28fd38, _0x205ef8, _0x39d143, _0x33ae46, _0x2bb2e6) {
            if (location['hostname'] == 'localhost') {
                window['location']['hostname'] = '127.0.0.1';
            }
            this['debugLog'] = ![];
            this['baseUrl'] = _0x28fd38;
            this['lobbySize'] = _0x39d143;
            this['devPort'] = _0x205ef8;
            this['lobbySpread'] = _0x33ae46;
            this['rawIPs'] = !!_0x2bb2e6;
            this['region'] = 0x0;
            this['callback'] = undefined;
            this['servers'] = this['processServers']();
        }
        _0x30acfe['prototype']['regionInfo'] = {
            0: {
                'name': 'local',
                'latitude': 0x0,
                'longitude': 0x0
            },
            1: {
                'name': 'New Jersey',
                'latitude': 40.1393329,
                'longitude': -75.8521818
            },
            2: {
                'name': 'Chicago',
                'latitude': 41.8339037,
                'longitude': -87.872238
            },
            3: {
                'name': 'Dallas',
                'latitude': 32.8208751,
                'longitude': -96.8714229
            },
            4: {
                'name': 'Seattle',
                'latitude': 47.6149942,
                'longitude': -122.4759879
            },
            5: {
                'name': 'Los Angeles',
                'latitude': 34.0207504,
                'longitude': -118.691914
            },
            6: {
                'name': 'Atlanta',
                'latitude': 33.7676334,
                'longitude': -84.5610332
            },
            7: {
                'name': 'Amsterdam',
                'latitude': 52.3745287,
                'longitude': 4.7581878
            },
            8: {
                'name': 'London',
                'latitude': 51.5283063,
                'longitude': -0.382486
            },
            9: {
                'name': 'Frankfurt',
                'latitude': 50.1211273,
                'longitude': 8.496137
            },
            12: {
                'name': 'Silicon Valley',
                'latitude': 37.4024714,
                'longitude': -122.3219752
            },
            19: {
                'name': 'Sydney',
                'latitude': -33.8479715,
                'longitude': 150.651084
            },
            24: {
                'name': 'Paris',
                'latitude': 48.8588376,
                'longitude': 2.2773454
            },
            25: {
                'name': 'Tokyo',
                'latitude': 35.6732615,
                'longitude': 139.569959
            },
            39: {
                'name': 'Miami',
                'latitude': 25.7823071,
                'longitude': -80.3012156
            },
            40: {
                'name': 'Singapore',
                'latitude': 1.3147268,
                'longitude': 103.7065876
            }
        };
        _0x30acfe['prototype']['start'] = function (_0x40d9a6) {
            this['callback'] = _0x40d9a6;
            var _0x4baf98 = this['parseServerQuery']();
            if (_0x4baf98) {
                this['log']('Found server in query.');
                this['connect'](_0x4baf98);
            } else {
                this['log']('Pinging servers...');
                this['pingServers']();
            }
        };
        _0x30acfe['prototype']['parseServerQuery'] = function () {
            var _0x2eeb02 = _0x5df441['parse'](location['href'], !![]);
            var _0x3dfe07 = 0x0;
            if (_0x2eeb02['query']['region'] !== undefined) {
                _0x3dfe07 = _0x2eeb02['query']['region'];
            }
            this['region'] = _0x3dfe07;
            if (typeof _0x3dfe07 != 'string') {
                return;
            }
            var _0x17fbac = this['servers'][_0x3dfe07];
            if (!Array['isArray'](_0x17fbac)) {
                console['warn']('No server list for region', _0x3dfe07);
                return;
            }
            return;
        };
        _0x30acfe['prototype']['pingServers'] = function () {
            var _0x557395 = this;
            var _0x608825 = [];
            for (var _0x11d3b3 in this['servers']) {
                var _0x56202b = this['servers'][_0x11d3b3];
                var _0x4c3a29 = _0x56202b[Math['floor'](Math['random']() * _0x56202b['length'])];
                (function (_0x3c8ba2, _0x4b5cd9) {
                    var _0x12858a = new XMLHttpRequest();
                    _0x12858a['onreadystatechange'] = function (_0x5abf98) {
                        var _0x4a0f41 = _0x5abf98['target'];
                        if (_0x4a0f41['readyState'] != 0x4)
                            return;
                        if (_0x4a0f41['status'] == 0xc8) {
                            for (var _0x49b559 = 0x0; _0x49b559 < _0x608825['length']; _0x49b559++) {
                                _0x608825[_0x49b559]['abort']();
                            }
                            _0x557395['log']('Connecting to region', _0x4b5cd9['region']);
                            _0x557395['seekServer'](_0x4b5cd9['region']);
                            if (onRegionGet !== undefined) {
                                onRegionGet(_0x4b5cd9['region']);
                            }
                        } else { }
                    };
                    var _0x297d0c = 'https://' + _0x557395['serverAddress'](_0x4b5cd9['ip'], !![]) + ':' + _0x557395['serverPort'](_0x4b5cd9) + '/ping';
                    _0x12858a['open']('GET', _0x297d0c, !![]);
                    _0x12858a['send'](null);
                    _0x557395['log']('Pinging', _0x297d0c);
                    _0x608825['push'](_0x12858a);
                }(_0x56202b, _0x4c3a29));
            }
        };
        _0x30acfe['prototype']['seekServer'] = function (_0x11a028, _0x102c7f, _0x139df7) {
            if (_0x102c7f == undefined) {
                _0x102c7f = 'random';
            }
            if (_0x139df7 == undefined) {
                _0x139df7 = ![];
            }
            const _0x119c4a = ['random'];
            var _0x544822 = this['lobbySize'];
            var _0x1c356d = this['lobbySpread'];
            var _0x21129b = this['servers'][_0x11a028]['filter'](function (_0x5b83e7) {
                if (_0x102c7f == 'random') {
                    return !![];
                } else {
                    return _0x119c4a[_0x5b83e7['index'] % _0x119c4a['length']]['key'] == _0x102c7f;
                }
            })['sort'](function (_0x42f5df, _0x5cee97) {
                return _0x5cee97['playerCount'] - _0x42f5df['playerCount'];
            });
            if (_0x21129b['filter'](function (_0x372b9a) {
                return _0x372b9a['playerCount'] < _0x544822;
            })['length'] > 0x0) {
                _0x21129b = _0x21129b['filter'](function (_0x5addf8) {
                    return _0x5addf8['playerCount'] < _0x544822;
                });
            }
            var _0x8e0505 = Math['min'](_0x1c356d, _0x21129b['length']);
            var _0x24a7c8 = Math['floor'](Math['random']() * _0x8e0505);
            _0x24a7c8 = Math['min'](_0x24a7c8, _0x21129b['length'] - 0x1);
            var _0x282621 = _0x21129b[_0x24a7c8];
            this['log']('Found server.');
            if (_0x139df7) {
                this['log']('Redirecting...');
                this['switchServer'](_0x282621['region'] + ':' + _0x282621['index']);
            } else {
                this['log']('Connecting...');
                this['connect'](_0x282621);
            }
        };
        _0x30acfe['prototype']['connect'] = function (_0xcc3440) {
            if (this['connected']) {
                return;
            }
            this['log']('Connecting to server:', _0xcc3440);
            this['region'] = _0xcc3440['region'];
            this['server'] = _0xcc3440;
            this['log']('Calling callback with address', this['serverAddress'](_0xcc3440['ip']), 'on port', this['serverPort'](_0xcc3440));
            this['callback'](this['serverAddress'](_0xcc3440['ip']), this['serverPort'](_0xcc3440));
        };
        _0x30acfe['prototype']['switchServer'] = function (_0x260939) {
            this['switchingServers'] = !![];
            window['location']['href'] = '/?server=' + _0x260939;
        };
        _0x30acfe['prototype']['serverAddress'] = function (_0x389a94, _0xf8ae88) {
            if (_0x389a94 == '127.0.0.1' || _0x389a94 == '7f000001' || _0x389a94 == '903d62ef5d1c2fecdcaeb5e7dd485eff') {
                return window['location']['hostname'];
            } else if (this['rawIPs']) {
                if (_0xf8ae88) {
                    return 'ip_' + this['hashIP'](_0x389a94) + '.' + this['baseUrl'];
                } else {
                    return _0x389a94;
                }
            } else {
                return 'ip_' + _0x389a94 + '.' + this['baseUrl'];
            }
        };
        _0x30acfe['prototype']['serverPort'] = function (_0x514b36) {
            if (_0x514b36['region'] == 0x0) {
                return this['devPort'];
            }
            return location['protocol']['startsWith']('https') ? 0x1bb : 0x50;
        };
        _0x30acfe['prototype']['processServers'] = function () {
            var _0x141299 = {};
            var _0x1439c2 = vultr['servers'];
            for (var _0x3aae98 = 0x0; _0x3aae98 < _0x1439c2['length']; _0x3aae98++) {
                var _0x4d1b5a = _0x1439c2[_0x3aae98];
                var _0x4f9e54 = _0x141299[_0x4d1b5a['region']];
                if (_0x4f9e54 == undefined) {
                    _0x4f9e54 = [];
                    _0x141299[_0x4d1b5a['region']] = _0x4f9e54;
                }
                _0x4f9e54['push'](_0x4d1b5a);
            }
            for (var _0x30aa6d in _0x141299) {
                _0x141299[_0x30aa6d] = _0x141299[_0x30aa6d]['sort'](function (_0x20f9f6, _0x195566) {
                    return _0x20f9f6['index'] - _0x195566['index'];
                });
            }
            return _0x141299;
        };
        _0x30acfe['prototype']['ipToHex'] = function (_0x4beaeb) {
            const _0x42200c = _0x4beaeb['split']('.')['map'](function (_0x2db440) {
                ('00' + parseInt(_0x2db440)['toString'](0x10))['substr'](-0x2);
            })['join']('')['toLowerCase']();
            return _0x42200c;
        };
        _0x30acfe['prototype']['hashIP'] = function (_0x408605) {
            return _0x24596e(this['ipToHex'](_0x408605));
        };
        _0x30acfe['prototype']['log'] = function () {
            if (this['debugLog']) {
                return;
            } else if (console['verbose']) {
                return;
            }
        };
        _0x19b7ec['exports'] = _0x30acfe;
    }
}, [0x1]);