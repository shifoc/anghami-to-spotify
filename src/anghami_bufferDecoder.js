
var c, u, m, t = require('protobufjs/minimal'), r = t.Reader, a = t.Writer, d = t.util, p = t.roots.default || (t.roots.default = {});
p.src = ((m = {}).Language = (c = {},
    (u = Object.create(c))[c[0] = "en"] = 0,
    u[c[1] = "ar"] = 1,
    u[c[2] = "fr"] = 2,
    u),
    m.SongBatchRequest = function () {
        function c(u) {
            if (this.SongID = [],
                u)
                for (var e = Object.keys(u), n = 0; n < e.length; ++n)
                    null != u[e[n]] && (this[e[n]] = u[e[n]])
        }
        return c.prototype.SongID = d.emptyArray,
            c.prototype.ArabicLetters = !1,
            c.prototype.UserLanguage = 0,
            c.prototype.HideExplicit = !1,
            c.prototype.RemoveAds = !1,
            c.prototype.V2Mode = !1,
            c.create = function (e) {
                return new c(e)
            }
            ,
            c.encode = function (e, n) {
                if (n || (n = a.create()),
                    null != e.SongID && e.SongID.length)
                    for (var s = 0; s < e.SongID.length; ++s)
                        n.uint32(10).string(e.SongID[s]);
                return null != e.ArabicLetters && Object.hasOwnProperty.call(e, "ArabicLetters") && n.uint32(16).bool(e.ArabicLetters),
                    null != e.UserLanguage && Object.hasOwnProperty.call(e, "UserLanguage") && n.uint32(24).int32(e.UserLanguage),
                    null != e.HideExplicit && Object.hasOwnProperty.call(e, "HideExplicit") && n.uint32(32).bool(e.HideExplicit),
                    null != e.RemoveAds && Object.hasOwnProperty.call(e, "RemoveAds") && n.uint32(40).bool(e.RemoveAds),
                    null != e.V2Mode && Object.hasOwnProperty.call(e, "V2Mode") && n.uint32(48).bool(e.V2Mode),
                    n
            }
            ,
            c.encodeDelimited = function (e, n) {
                return this.encode(e, n).ldelim()
            }
            ,
            c.decode = function (e, n) {
                e instanceof r || (e = r.create(e));
                for (var s = void 0 === n ? e.len : e.pos + n, l = new p.src.SongBatchRequest; e.pos < s;) {
                    var k = e.uint32();
                    switch (k >>> 3) {
                        case 1:
                            l.SongID && l.SongID.length || (l.SongID = []),
                                l.SongID.push(e.string());
                            break;
                        case 2:
                            l.ArabicLetters = e.bool();
                            break;
                        case 3:
                            l.UserLanguage = e.int32();
                            break;
                        case 4:
                            l.HideExplicit = e.bool();
                            break;
                        case 5:
                            l.RemoveAds = e.bool();
                            break;
                        case 6:
                            l.V2Mode = e.bool();
                            break;
                        default:
                            e.skipType(7 & k)
                    }
                }
                return l
            }
            ,
            c.decodeDelimited = function (e) {
                return e instanceof r || (e = new r(e)),
                    this.decode(e, e.uint32())
            }
            ,
            c.verify = function (e) {
                if ("object" != typeof e || null === e)
                    return "object expected";
                if (null != e.SongID && e.hasOwnProperty("SongID")) {
                    if (!Array.isArray(e.SongID))
                        return "SongID: array expected";
                    for (var n = 0; n < e.SongID.length; ++n)
                        if (!d.isString(e.SongID[n]))
                            return "SongID: string[] expected"
                }
                if (null != e.ArabicLetters && e.hasOwnProperty("ArabicLetters") && "boolean" != typeof e.ArabicLetters)
                    return "ArabicLetters: boolean expected";
                if (null != e.UserLanguage && e.hasOwnProperty("UserLanguage"))
                    switch (e.UserLanguage) {
                        default:
                            return "UserLanguage: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                    }
                return null != e.HideExplicit && e.hasOwnProperty("HideExplicit") && "boolean" != typeof e.HideExplicit ? "HideExplicit: boolean expected" : null != e.RemoveAds && e.hasOwnProperty("RemoveAds") && "boolean" != typeof e.RemoveAds ? "RemoveAds: boolean expected" : null != e.V2Mode && e.hasOwnProperty("V2Mode") && "boolean" != typeof e.V2Mode ? "V2Mode: boolean expected" : null
            }
            ,
            c.fromObject = function (e) {
                if (e instanceof p.src.SongBatchRequest)
                    return e;
                var n = new p.src.SongBatchRequest;
                if (e.SongID) {
                    if (!Array.isArray(e.SongID))
                        throw TypeError(".src.SongBatchRequest.SongID: array expected");
                    n.SongID = [];
                    for (var s = 0; s < e.SongID.length; ++s)
                        n.SongID[s] = String(e.SongID[s])
                }
                switch (null != e.ArabicLetters && (n.ArabicLetters = Boolean(e.ArabicLetters)),
                e.UserLanguage) {
                    case "en":
                    case 0:
                        n.UserLanguage = 0;
                        break;
                    case "ar":
                    case 1:
                        n.UserLanguage = 1;
                        break;
                    case "fr":
                    case 2:
                        n.UserLanguage = 2
                }
                return null != e.HideExplicit && (n.HideExplicit = Boolean(e.HideExplicit)),
                    null != e.RemoveAds && (n.RemoveAds = Boolean(e.RemoveAds)),
                    null != e.V2Mode && (n.V2Mode = Boolean(e.V2Mode)),
                    n
            }
            ,
            c.toObject = function (e, n) {
                n || (n = {});
                var s = {};
                if ((n.arrays || n.defaults) && (s.SongID = []),
                    n.defaults && (s.ArabicLetters = !1,
                        s.UserLanguage = n.enums === String ? "en" : 0,
                        s.HideExplicit = !1,
                        s.RemoveAds = !1,
                        s.V2Mode = !1),
                    e.SongID && e.SongID.length) {
                    s.SongID = [];
                    for (var l = 0; l < e.SongID.length; ++l)
                        s.SongID[l] = e.SongID[l]
                }
                return null != e.ArabicLetters && e.hasOwnProperty("ArabicLetters") && (s.ArabicLetters = e.ArabicLetters),
                    null != e.UserLanguage && e.hasOwnProperty("UserLanguage") && (s.UserLanguage = n.enums === String ? p.src.Language[e.UserLanguage] : e.UserLanguage),
                    null != e.HideExplicit && e.hasOwnProperty("HideExplicit") && (s.HideExplicit = e.HideExplicit),
                    null != e.RemoveAds && e.hasOwnProperty("RemoveAds") && (s.RemoveAds = e.RemoveAds),
                    null != e.V2Mode && e.hasOwnProperty("V2Mode") && (s.V2Mode = e.V2Mode),
                    s
            }
            ,
            c.prototype.toJSON = function () {
                return this.constructor.toObject(this, t.util.toJSONOptions)
            }
            ,
            c
    }(),
    m.SongBatchResponse = function () {
        function c(u) {
            if (this.response = {},
                this.takendownSongIds = [],
                this.missingSongIds = [],
                u)
                for (var e = Object.keys(u), n = 0; n < e.length; ++n)
                    null != u[e[n]] && (this[e[n]] = u[e[n]])
        }
        return c.prototype.commonFields = null,
            c.prototype.response = d.emptyObject,
            c.prototype.takendownSongIds = d.emptyArray,
            c.prototype.missingSongIds = d.emptyArray,
            c.create = function (e) {
                return new c(e)
            }
            ,
            c.encode = function (e, n) {
                if (n || (n = a.create()),
                    null != e.commonFields && Object.hasOwnProperty.call(e, "commonFields") && p.src.ResponseCommonFields.encode(e.commonFields, n.uint32(10).fork()).ldelim(),
                    null != e.response && Object.hasOwnProperty.call(e, "response"))
                    for (var s = Object.keys(e.response), l = 0; l < s.length; ++l)
                        n.uint32(18).fork().uint32(10).string(s[l]),
                            p.src.Song.encode(e.response[s[l]], n.uint32(18).fork()).ldelim().ldelim();
                if (null != e.takendownSongIds && e.takendownSongIds.length)
                    for (l = 0; l < e.takendownSongIds.length; ++l)
                        n.uint32(34).string(e.takendownSongIds[l]);
                if (null != e.missingSongIds && e.missingSongIds.length)
                    for (l = 0; l < e.missingSongIds.length; ++l)
                        n.uint32(42).string(e.missingSongIds[l]);
                return n
            }
            ,
            c.encodeDelimited = function (e, n) {
                return this.encode(e, n).ldelim()
            }
            ,
            c.decode = function (e, n) {
                e instanceof r || (e = r.create(e));
                for (var k, b, s = void 0 === n ? e.len : e.pos + n, l = new p.src.SongBatchResponse; e.pos < s;) {
                    var P = e.uint32();
                    switch (P >>> 3) {
                        case 1:
                            l.commonFields = p.src.ResponseCommonFields.decode(e, e.uint32());
                            break;
                        case 2:
                            l.response === d.emptyObject && (l.response = {});
                            var v = e.uint32() + e.pos;
                            for (k = "",
                                b = null; e.pos < v;) {
                                var L = e.uint32();
                                switch (L >>> 3) {
                                    case 1:
                                        k = e.string();
                                        break;
                                    case 2:
                                        b = p.src.Song.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & L)
                                }
                            }
                            l.response[k] = b;
                            break;
                        case 4:
                            l.takendownSongIds && l.takendownSongIds.length || (l.takendownSongIds = []),
                                l.takendownSongIds.push(e.string());
                            break;
                        case 5:
                            l.missingSongIds && l.missingSongIds.length || (l.missingSongIds = []),
                                l.missingSongIds.push(e.string());
                            break;
                        default:
                            e.skipType(7 & P)
                    }
                }
                return l
            }
            ,
            c.decodeDelimited = function (e) {
                return e instanceof r || (e = new r(e)),
                    this.decode(e, e.uint32())
            }
            ,
            c.verify = function (e) {
                if ("object" != typeof e || null === e)
                    return "object expected";
                if (null != e.commonFields && e.hasOwnProperty("commonFields") && (n = p.src.ResponseCommonFields.verify(e.commonFields)))
                    return "commonFields." + n;
                if (null != e.response && e.hasOwnProperty("response")) {
                    if (!d.isObject(e.response))
                        return "response: object expected";
                    for (var s = Object.keys(e.response), l = 0; l < s.length; ++l) {
                        var n;
                        if (n = p.src.Song.verify(e.response[s[l]]))
                            return "response." + n
                    }
                }
                if (null != e.takendownSongIds && e.hasOwnProperty("takendownSongIds")) {
                    if (!Array.isArray(e.takendownSongIds))
                        return "takendownSongIds: array expected";
                    for (l = 0; l < e.takendownSongIds.length; ++l)
                        if (!d.isString(e.takendownSongIds[l]))
                            return "takendownSongIds: string[] expected"
                }
                if (null != e.missingSongIds && e.hasOwnProperty("missingSongIds")) {
                    if (!Array.isArray(e.missingSongIds))
                        return "missingSongIds: array expected";
                    for (l = 0; l < e.missingSongIds.length; ++l)
                        if (!d.isString(e.missingSongIds[l]))
                            return "missingSongIds: string[] expected"
                }
                return null
            }
            ,
            c.fromObject = function (e) {
                if (e instanceof p.src.SongBatchResponse)
                    return e;
                var n = new p.src.SongBatchResponse;
                if (null != e.commonFields) {
                    if ("object" != typeof e.commonFields)
                        throw TypeError(".src.SongBatchResponse.commonFields: object expected");
                    n.commonFields = p.src.ResponseCommonFields.fromObject(e.commonFields)
                }
                if (e.response) {
                    if ("object" != typeof e.response)
                        throw TypeError(".src.SongBatchResponse.response: object expected");
                    n.response = {};
                    for (var s = Object.keys(e.response), l = 0; l < s.length; ++l) {
                        if ("object" != typeof e.response[s[l]])
                            throw TypeError(".src.SongBatchResponse.response: object expected");
                        n.response[s[l]] = p.src.Song.fromObject(e.response[s[l]])
                    }
                }
                if (e.takendownSongIds) {
                    if (!Array.isArray(e.takendownSongIds))
                        throw TypeError(".src.SongBatchResponse.takendownSongIds: array expected");
                    for (n.takendownSongIds = [],
                        l = 0; l < e.takendownSongIds.length; ++l)
                        n.takendownSongIds[l] = String(e.takendownSongIds[l])
                }
                if (e.missingSongIds) {
                    if (!Array.isArray(e.missingSongIds))
                        throw TypeError(".src.SongBatchResponse.missingSongIds: array expected");
                    for (n.missingSongIds = [],
                        l = 0; l < e.missingSongIds.length; ++l)
                        n.missingSongIds[l] = String(e.missingSongIds[l])
                }
                return n
            }
            ,
            c.toObject = function (e, n) {
                n || (n = {});
                var l, s = {};
                if ((n.arrays || n.defaults) && (s.takendownSongIds = [],
                    s.missingSongIds = []),
                    (n.objects || n.defaults) && (s.response = {}),
                    n.defaults && (s.commonFields = null),
                    null != e.commonFields && e.hasOwnProperty("commonFields") && (s.commonFields = p.src.ResponseCommonFields.toObject(e.commonFields, n)),
                    e.response && (l = Object.keys(e.response)).length) {
                    s.response = {};
                    for (var k = 0; k < l.length; ++k)
                        s.response[l[k]] = p.src.Song.toObject(e.response[l[k]], n)
                }
                if (e.takendownSongIds && e.takendownSongIds.length)
                    for (s.takendownSongIds = [],
                        k = 0; k < e.takendownSongIds.length; ++k)
                        s.takendownSongIds[k] = e.takendownSongIds[k];
                if (e.missingSongIds && e.missingSongIds.length)
                    for (s.missingSongIds = [],
                        k = 0; k < e.missingSongIds.length; ++k)
                        s.missingSongIds[k] = e.missingSongIds[k];
                return s
            }
            ,
            c.prototype.toJSON = function () {
                return this.constructor.toObject(this, t.util.toJSONOptions)
            }
            ,
            c
    }(),
    m.SingleSongResponse = function () {
        function c(u) {
            if (u)
                for (var e = Object.keys(u), n = 0; n < e.length; ++n)
                    null != u[e[n]] && (this[e[n]] = u[e[n]])
        }
        return c.prototype.commonFields = null,
            c.prototype.song = null,
            c.create = function (e) {
                return new c(e)
            }
            ,
            c.encode = function (e, n) {
                return n || (n = a.create()),
                    null != e.commonFields && Object.hasOwnProperty.call(e, "commonFields") && p.src.ResponseCommonFields.encode(e.commonFields, n.uint32(10).fork()).ldelim(),
                    null != e.song && Object.hasOwnProperty.call(e, "song") && p.src.Song.encode(e.song, n.uint32(18).fork()).ldelim(),
                    n
            }
            ,
            c.encodeDelimited = function (e, n) {
                return this.encode(e, n).ldelim()
            }
            ,
            c.decode = function (e, n) {
                e instanceof r || (e = r.create(e));
                for (var s = void 0 === n ? e.len : e.pos + n, l = new p.src.SingleSongResponse; e.pos < s;) {
                    var k = e.uint32();
                    switch (k >>> 3) {
                        case 1:
                            l.commonFields = p.src.ResponseCommonFields.decode(e, e.uint32());
                            break;
                        case 2:
                            l.song = p.src.Song.decode(e, e.uint32());
                            break;
                        default:
                            e.skipType(7 & k)
                    }
                }
                return l
            }
            ,
            c.decodeDelimited = function (e) {
                return e instanceof r || (e = new r(e)),
                    this.decode(e, e.uint32())
            }
            ,
            c.verify = function (e) {
                return "object" != typeof e || null === e ? "object expected" : null != e.commonFields && e.hasOwnProperty("commonFields") && (n = p.src.ResponseCommonFields.verify(e.commonFields)) ? "commonFields." + n : null != e.song && e.hasOwnProperty("song") && (n = p.src.Song.verify(e.song)) ? "song." + n : null;
                var n
            }
            ,
            c.fromObject = function (e) {
                if (e instanceof p.src.SingleSongResponse)
                    return e;
                var n = new p.src.SingleSongResponse;
                if (null != e.commonFields) {
                    if ("object" != typeof e.commonFields)
                        throw TypeError(".src.SingleSongResponse.commonFields: object expected");
                    n.commonFields = p.src.ResponseCommonFields.fromObject(e.commonFields)
                }
                if (null != e.song) {
                    if ("object" != typeof e.song)
                        throw TypeError(".src.SingleSongResponse.song: object expected");
                    n.song = p.src.Song.fromObject(e.song)
                }
                return n
            }
            ,
            c.toObject = function (e, n) {
                n || (n = {});
                var s = {};
                return n.defaults && (s.commonFields = null,
                    s.song = null),
                    null != e.commonFields && e.hasOwnProperty("commonFields") && (s.commonFields = p.src.ResponseCommonFields.toObject(e.commonFields, n)),
                    null != e.song && e.hasOwnProperty("song") && (s.song = p.src.Song.toObject(e.song, n)),
                    s
            }
            ,
            c.prototype.toJSON = function () {
                return this.constructor.toObject(this, t.util.toJSONOptions)
            }
            ,
            c
    }(),
    m.SongResolver = function () {
        function c(u, e, n) {
            t.rpc.Service.call(this, u, e, n)
        }
        return (c.prototype = Object.create(t.rpc.Service.prototype)).constructor = c,
            c.create = function (e, n, s) {
                return new this(e, n, s)
            }
            ,
            Object.defineProperty(c.prototype.batch = function u(e, n) {
                return this.rpcCall(u, p.src.SongBatchRequest, p.src.SongBatchResponse, e, n)
            }
                , "name", {
                value: "Batch"
            }),
            c
    }(),
    m.ArtistType = function () {
        var c = {}
            , u = Object.create(c);
        return u[c[0] = "INDIVIDUAL"] = 0,
            u[c[1] = "BAND"] = 1,
            u[c[2] = "COLLAB"] = 2,
            u[c[3] = "BRAND"] = 3,
            u
    }(),
    m.ArtistGender = function () {
        var c = {}
            , u = Object.create(c);
        return u[c[0] = "OTHER"] = 0,
            u[c[1] = "MALE"] = 1,
            u[c[2] = "FEMALE"] = 2,
            u
    }(),
    m.Song = function () {
        function c(u) {
            if (this.keywords = [],
                this.vibes = [],
                this.lockedContentPartnerIds = [],
                u)
                for (var e = Object.keys(u), n = 0; n < e.length; ++n)
                    null != u[e[n]] && (this[e[n]] = u[e[n]])
        }
        return c.prototype.id = "",
            c.prototype.title = "",
            c.prototype.album = "",
            c.prototype.albumID = "",
            c.prototype.artist = "",
            c.prototype.artistID = "",
            c.prototype.track = 0,
            c.prototype.year = "",
            c.prototype.duration = 0,
            c.prototype.coverArt = "",
            c.prototype.allowoffline = !1,
            c.prototype.genre = "",
            c.prototype.AlbumArt = "",
            c.prototype.keywords = d.emptyArray,
            c.prototype.languageid = 0,
            c.prototype.bitrates = "",
            c.prototype.description = "",
            c.prototype.disablePlayerRestrictions = !1,
            c.prototype.discardArtist = !1,
            c.prototype.dropimage = "",
            c.prototype.hexcolor = "",
            c.prototype.videoonly = !1,
            c.prototype.allowaudiodownload = 0,
            c.prototype.disabled = !1,
            c.prototype.disabledurl = "",
            c.prototype.playervideohslurl = "",
            c.prototype.hasplayervideo = !1,
            c.prototype.playervideo = "",
            c.prototype.playerloop = !1,
            c.prototype.playermutesound = !1,
            c.prototype.playertext = "",
            c.prototype.playerdeeplink = "",
            c.prototype.playervideoposition = "",
            c.prototype.nouservideo = !1,
            c.prototype.verified = !1,
            c.prototype.cleardetails = !1,
            c.prototype.showuservideo = !1,
            c.prototype.bitrate = 0,
            c.prototype.size = 0,
            c.prototype.religious = !1,
            c.prototype.nodldmsg = "",
            c.prototype.exclusivevid = !1,
            c.prototype.explicit = !1,
            c.prototype.rbtcode = "",
            c.prototype.videoid = "",
            c.prototype.thumbnailid = "",
            c.prototype.videoreleasedate = "",
            c.prototype.adtimer = 0,
            c.prototype.forcead = "",
            c.prototype.videotag = "",
            c.prototype.audiotag = "",
            c.prototype.single = !1,
            c.prototype.isexclusivesong = !1,
            c.prototype.exclusive = !1,
            c.prototype.albumexclusive = !1,
            c.prototype.arabictext = !1,
            c.prototype.videoduration = 0,
            c.prototype.saveprogress = !1,
            c.prototype.isPodcast = !1,
            c.prototype.ArtistArt = "",
            c.prototype.sponsored = !1,
            c.prototype.youtubeonly = !1,
            c.prototype.youtubeurl = "",
            c.prototype.local = !1,
            c.prototype.isPremiumVideo = !1,
            c.prototype.disableVideoScrub = !1,
            c.prototype.vibes = d.emptyArray,
            c.prototype.disableMoreLikeThis = !1,
            c.prototype.disableStories = !1,
            c.prototype.restrictedAccess = !1,
            c.prototype.restrictedAccessDialog = "",
            c.prototype.hasLyrics = !1,
            c.prototype.lyricsupdatedon = "",
            c.prototype.isAudiobook = !1,
            c.prototype.lockedContentPartnerIds = d.emptyArray,
            c.prototype.artistType = 0,
            c.prototype.artistGender = 0,
            c.prototype.localSongHash = "",
            c.create = function (e) {
                return new c(e)
            }
            ,
            c.encode = function (e, n) {
                if (n || (n = a.create()),
                    null != e.id && Object.hasOwnProperty.call(e, "id") && n.uint32(10).string(e.id),
                    null != e.title && Object.hasOwnProperty.call(e, "title") && n.uint32(18).string(e.title),
                    null != e.album && Object.hasOwnProperty.call(e, "album") && n.uint32(26).string(e.album),
                    null != e.albumID && Object.hasOwnProperty.call(e, "albumID") && n.uint32(34).string(e.albumID),
                    null != e.artist && Object.hasOwnProperty.call(e, "artist") && n.uint32(42).string(e.artist),
                    null != e.artistID && Object.hasOwnProperty.call(e, "artistID") && n.uint32(50).string(e.artistID),
                    null != e.track && Object.hasOwnProperty.call(e, "track") && n.uint32(56).int32(e.track),
                    null != e.year && Object.hasOwnProperty.call(e, "year") && n.uint32(66).string(e.year),
                    null != e.duration && Object.hasOwnProperty.call(e, "duration") && n.uint32(77).float(e.duration),
                    null != e.coverArt && Object.hasOwnProperty.call(e, "coverArt") && n.uint32(82).string(e.coverArt),
                    null != e.allowoffline && Object.hasOwnProperty.call(e, "allowoffline") && n.uint32(88).bool(e.allowoffline),
                    null != e.genre && Object.hasOwnProperty.call(e, "genre") && n.uint32(98).string(e.genre),
                    null != e.AlbumArt && Object.hasOwnProperty.call(e, "AlbumArt") && n.uint32(106).string(e.AlbumArt),
                    null != e.keywords && e.keywords.length)
                    for (var s = 0; s < e.keywords.length; ++s)
                        n.uint32(114).string(e.keywords[s]);
                if (null != e.languageid && Object.hasOwnProperty.call(e, "languageid") && n.uint32(120).int32(e.languageid),
                    null != e.bitrates && Object.hasOwnProperty.call(e, "bitrates") && n.uint32(130).string(e.bitrates),
                    null != e.description && Object.hasOwnProperty.call(e, "description") && n.uint32(138).string(e.description),
                    null != e.disablePlayerRestrictions && Object.hasOwnProperty.call(e, "disablePlayerRestrictions") && n.uint32(144).bool(e.disablePlayerRestrictions),
                    null != e.discardArtist && Object.hasOwnProperty.call(e, "discardArtist") && n.uint32(152).bool(e.discardArtist),
                    null != e.dropimage && Object.hasOwnProperty.call(e, "dropimage") && n.uint32(162).string(e.dropimage),
                    null != e.hexcolor && Object.hasOwnProperty.call(e, "hexcolor") && n.uint32(170).string(e.hexcolor),
                    null != e.videoonly && Object.hasOwnProperty.call(e, "videoonly") && n.uint32(176).bool(e.videoonly),
                    null != e.allowaudiodownload && Object.hasOwnProperty.call(e, "allowaudiodownload") && n.uint32(184).int32(e.allowaudiodownload),
                    null != e.disabled && Object.hasOwnProperty.call(e, "disabled") && n.uint32(192).bool(e.disabled),
                    null != e.disabledurl && Object.hasOwnProperty.call(e, "disabledurl") && n.uint32(202).string(e.disabledurl),
                    null != e.playervideohslurl && Object.hasOwnProperty.call(e, "playervideohslurl") && n.uint32(210).string(e.playervideohslurl),
                    null != e.hasplayervideo && Object.hasOwnProperty.call(e, "hasplayervideo") && n.uint32(216).bool(e.hasplayervideo),
                    null != e.playervideo && Object.hasOwnProperty.call(e, "playervideo") && n.uint32(226).string(e.playervideo),
                    null != e.playerloop && Object.hasOwnProperty.call(e, "playerloop") && n.uint32(232).bool(e.playerloop),
                    null != e.playermutesound && Object.hasOwnProperty.call(e, "playermutesound") && n.uint32(240).bool(e.playermutesound),
                    null != e.playertext && Object.hasOwnProperty.call(e, "playertext") && n.uint32(250).string(e.playertext),
                    null != e.playerdeeplink && Object.hasOwnProperty.call(e, "playerdeeplink") && n.uint32(258).string(e.playerdeeplink),
                    null != e.playervideoposition && Object.hasOwnProperty.call(e, "playervideoposition") && n.uint32(266).string(e.playervideoposition),
                    null != e.nouservideo && Object.hasOwnProperty.call(e, "nouservideo") && n.uint32(272).bool(e.nouservideo),
                    null != e.verified && Object.hasOwnProperty.call(e, "verified") && n.uint32(280).bool(e.verified),
                    null != e.cleardetails && Object.hasOwnProperty.call(e, "cleardetails") && n.uint32(288).bool(e.cleardetails),
                    null != e.showuservideo && Object.hasOwnProperty.call(e, "showuservideo") && n.uint32(304).bool(e.showuservideo),
                    null != e.bitrate && Object.hasOwnProperty.call(e, "bitrate") && n.uint32(312).int32(e.bitrate),
                    null != e.size && Object.hasOwnProperty.call(e, "size") && n.uint32(320).int32(e.size),
                    null != e.religious && Object.hasOwnProperty.call(e, "religious") && n.uint32(328).bool(e.religious),
                    null != e.nodldmsg && Object.hasOwnProperty.call(e, "nodldmsg") && n.uint32(338).string(e.nodldmsg),
                    null != e.exclusivevid && Object.hasOwnProperty.call(e, "exclusivevid") && n.uint32(344).bool(e.exclusivevid),
                    null != e.explicit && Object.hasOwnProperty.call(e, "explicit") && n.uint32(352).bool(e.explicit),
                    null != e.rbtcode && Object.hasOwnProperty.call(e, "rbtcode") && n.uint32(362).string(e.rbtcode),
                    null != e.videoid && Object.hasOwnProperty.call(e, "videoid") && n.uint32(370).string(e.videoid),
                    null != e.thumbnailid && Object.hasOwnProperty.call(e, "thumbnailid") && n.uint32(378).string(e.thumbnailid),
                    null != e.videoreleasedate && Object.hasOwnProperty.call(e, "videoreleasedate") && n.uint32(386).string(e.videoreleasedate),
                    null != e.adtimer && Object.hasOwnProperty.call(e, "adtimer") && n.uint32(392).int32(e.adtimer),
                    null != e.forcead && Object.hasOwnProperty.call(e, "forcead") && n.uint32(402).string(e.forcead),
                    null != e.videotag && Object.hasOwnProperty.call(e, "videotag") && n.uint32(410).string(e.videotag),
                    null != e.audiotag && Object.hasOwnProperty.call(e, "audiotag") && n.uint32(418).string(e.audiotag),
                    null != e.single && Object.hasOwnProperty.call(e, "single") && n.uint32(424).bool(e.single),
                    null != e.isexclusivesong && Object.hasOwnProperty.call(e, "isexclusivesong") && n.uint32(432).bool(e.isexclusivesong),
                    null != e.exclusive && Object.hasOwnProperty.call(e, "exclusive") && n.uint32(440).bool(e.exclusive),
                    null != e.albumexclusive && Object.hasOwnProperty.call(e, "albumexclusive") && n.uint32(448).bool(e.albumexclusive),
                    null != e.arabictext && Object.hasOwnProperty.call(e, "arabictext") && n.uint32(456).bool(e.arabictext),
                    null != e.videoduration && Object.hasOwnProperty.call(e, "videoduration") && n.uint32(469).float(e.videoduration),
                    null != e.saveprogress && Object.hasOwnProperty.call(e, "saveprogress") && n.uint32(472).bool(e.saveprogress),
                    null != e.isPodcast && Object.hasOwnProperty.call(e, "isPodcast") && n.uint32(480).bool(e.isPodcast),
                    null != e.ArtistArt && Object.hasOwnProperty.call(e, "ArtistArt") && n.uint32(490).string(e.ArtistArt),
                    null != e.sponsored && Object.hasOwnProperty.call(e, "sponsored") && n.uint32(496).bool(e.sponsored),
                    null != e.youtubeonly && Object.hasOwnProperty.call(e, "youtubeonly") && n.uint32(504).bool(e.youtubeonly),
                    null != e.youtubeurl && Object.hasOwnProperty.call(e, "youtubeurl") && n.uint32(514).string(e.youtubeurl),
                    null != e.local && Object.hasOwnProperty.call(e, "local") && n.uint32(520).bool(e.local),
                    null != e.isPremiumVideo && Object.hasOwnProperty.call(e, "isPremiumVideo") && n.uint32(528).bool(e.isPremiumVideo),
                    null != e.disableVideoScrub && Object.hasOwnProperty.call(e, "disableVideoScrub") && n.uint32(536).bool(e.disableVideoScrub),
                    null != e.vibes && e.vibes.length)
                    for (s = 0; s < e.vibes.length; ++s)
                        n.uint32(546).string(e.vibes[s]);
                if (null != e.disableMoreLikeThis && Object.hasOwnProperty.call(e, "disableMoreLikeThis") && n.uint32(552).bool(e.disableMoreLikeThis),
                    null != e.disableStories && Object.hasOwnProperty.call(e, "disableStories") && n.uint32(560).bool(e.disableStories),
                    null != e.restrictedAccess && Object.hasOwnProperty.call(e, "restrictedAccess") && n.uint32(568).bool(e.restrictedAccess),
                    null != e.restrictedAccessDialog && Object.hasOwnProperty.call(e, "restrictedAccessDialog") && n.uint32(578).string(e.restrictedAccessDialog),
                    null != e.hasLyrics && Object.hasOwnProperty.call(e, "hasLyrics") && n.uint32(584).bool(e.hasLyrics),
                    null != e.lyricsupdatedon && Object.hasOwnProperty.call(e, "lyricsupdatedon") && n.uint32(594).string(e.lyricsupdatedon),
                    null != e.isAudiobook && Object.hasOwnProperty.call(e, "isAudiobook") && n.uint32(600).bool(e.isAudiobook),
                    null != e.lockedContentPartnerIds && e.lockedContentPartnerIds.length) {
                    for (n.uint32(610).fork(),
                        s = 0; s < e.lockedContentPartnerIds.length; ++s)
                        n.int32(e.lockedContentPartnerIds[s]);
                    n.ldelim()
                }
                return null != e.artistType && Object.hasOwnProperty.call(e, "artistType") && n.uint32(616).int32(e.artistType),
                    null != e.artistGender && Object.hasOwnProperty.call(e, "artistGender") && n.uint32(624).int32(e.artistGender),
                    null != e.localSongHash && Object.hasOwnProperty.call(e, "localSongHash") && n.uint32(634).string(e.localSongHash),
                    n
            }
            ,
            c.encodeDelimited = function (e, n) {
                return this.encode(e, n).ldelim()
            }
            ,
            c.decode = function (e, n) {
                e instanceof r || (e = r.create(e));
                for (var s = void 0 === n ? e.len : e.pos + n, l = new p.src.Song; e.pos < s;) {
                    var k = e.uint32();
                    switch (k >>> 3) {
                        case 1:
                            l.id = e.string();
                            break;
                        case 2:
                            l.title = e.string();
                            break;
                        case 3:
                            l.album = e.string();
                            break;
                        case 4:
                            l.albumID = e.string();
                            break;
                        case 5:
                            l.artist = e.string();
                            break;
                        case 6:
                            l.artistID = e.string();
                            break;
                        case 7:
                            l.track = e.int32();
                            break;
                        case 8:
                            l.year = e.string();
                            break;
                        case 9:
                            l.duration = e.float();
                            break;
                        case 10:
                            l.coverArt = e.string();
                            break;
                        case 11:
                            l.allowoffline = e.bool();
                            break;
                        case 12:
                            l.genre = e.string();
                            break;
                        case 13:
                            l.AlbumArt = e.string();
                            break;
                        case 14:
                            l.keywords && l.keywords.length || (l.keywords = []),
                                l.keywords.push(e.string());
                            break;
                        case 15:
                            l.languageid = e.int32();
                            break;
                        case 16:
                            l.bitrates = e.string();
                            break;
                        case 17:
                            l.description = e.string();
                            break;
                        case 18:
                            l.disablePlayerRestrictions = e.bool();
                            break;
                        case 19:
                            l.discardArtist = e.bool();
                            break;
                        case 20:
                            l.dropimage = e.string();
                            break;
                        case 21:
                            l.hexcolor = e.string();
                            break;
                        case 22:
                            l.videoonly = e.bool();
                            break;
                        case 23:
                            l.allowaudiodownload = e.int32();
                            break;
                        case 24:
                            l.disabled = e.bool();
                            break;
                        case 25:
                            l.disabledurl = e.string();
                            break;
                        case 26:
                            l.playervideohslurl = e.string();
                            break;
                        case 27:
                            l.hasplayervideo = e.bool();
                            break;
                        case 28:
                            l.playervideo = e.string();
                            break;
                        case 29:
                            l.playerloop = e.bool();
                            break;
                        case 30:
                            l.playermutesound = e.bool();
                            break;
                        case 31:
                            l.playertext = e.string();
                            break;
                        case 32:
                            l.playerdeeplink = e.string();
                            break;
                        case 33:
                            l.playervideoposition = e.string();
                            break;
                        case 34:
                            l.nouservideo = e.bool();
                            break;
                        case 35:
                            l.verified = e.bool();
                            break;
                        case 36:
                            l.cleardetails = e.bool();
                            break;
                        case 38:
                            l.showuservideo = e.bool();
                            break;
                        case 39:
                            l.bitrate = e.int32();
                            break;
                        case 40:
                            l.size = e.int32();
                            break;
                        case 41:
                            l.religious = e.bool();
                            break;
                        case 42:
                            l.nodldmsg = e.string();
                            break;
                        case 43:
                            l.exclusivevid = e.bool();
                            break;
                        case 44:
                            l.explicit = e.bool();
                            break;
                        case 45:
                            l.rbtcode = e.string();
                            break;
                        case 46:
                            l.videoid = e.string();
                            break;
                        case 47:
                            l.thumbnailid = e.string();
                            break;
                        case 48:
                            l.videoreleasedate = e.string();
                            break;
                        case 49:
                            l.adtimer = e.int32();
                            break;
                        case 50:
                            l.forcead = e.string();
                            break;
                        case 51:
                            l.videotag = e.string();
                            break;
                        case 52:
                            l.audiotag = e.string();
                            break;
                        case 53:
                            l.single = e.bool();
                            break;
                        case 54:
                            l.isexclusivesong = e.bool();
                            break;
                        case 55:
                            l.exclusive = e.bool();
                            break;
                        case 56:
                            l.albumexclusive = e.bool();
                            break;
                        case 57:
                            l.arabictext = e.bool();
                            break;
                        case 58:
                            l.videoduration = e.float();
                            break;
                        case 59:
                            l.saveprogress = e.bool();
                            break;
                        case 60:
                            l.isPodcast = e.bool();
                            break;
                        case 61:
                            l.ArtistArt = e.string();
                            break;
                        case 62:
                            l.sponsored = e.bool();
                            break;
                        case 63:
                            l.youtubeonly = e.bool();
                            break;
                        case 64:
                            l.youtubeurl = e.string();
                            break;
                        case 65:
                            l.local = e.bool();
                            break;
                        case 66:
                            l.isPremiumVideo = e.bool();
                            break;
                        case 67:
                            l.disableVideoScrub = e.bool();
                            break;
                        case 68:
                            l.vibes && l.vibes.length || (l.vibes = []),
                                l.vibes.push(e.string());
                            break;
                        case 69:
                            l.disableMoreLikeThis = e.bool();
                            break;
                        case 70:
                            l.disableStories = e.bool();
                            break;
                        case 71:
                            l.restrictedAccess = e.bool();
                            break;
                        case 72:
                            l.restrictedAccessDialog = e.string();
                            break;
                        case 73:
                            l.hasLyrics = e.bool();
                            break;
                        case 74:
                            l.lyricsupdatedon = e.string();
                            break;
                        case 75:
                            l.isAudiobook = e.bool();
                            break;
                        case 76:
                            if (l.lockedContentPartnerIds && l.lockedContentPartnerIds.length || (l.lockedContentPartnerIds = []),
                                2 == (7 & k))
                                for (var b = e.uint32() + e.pos; e.pos < b;)
                                    l.lockedContentPartnerIds.push(e.int32());
                            else
                                l.lockedContentPartnerIds.push(e.int32());
                            break;
                        case 77:
                            l.artistType = e.int32();
                            break;
                        case 78:
                            l.artistGender = e.int32();
                            break;
                        case 79:
                            l.localSongHash = e.string();
                            break;
                        default:
                            e.skipType(7 & k)
                    }
                }
                return l
            }
            ,
            c.decodeDelimited = function (e) {
                return e instanceof r || (e = new r(e)),
                    this.decode(e, e.uint32())
            }
            ,
            c.verify = function (e) {
                if ("object" != typeof e || null === e)
                    return "object expected";
                if (null != e.id && e.hasOwnProperty("id") && !d.isString(e.id))
                    return "id: string expected";
                if (null != e.title && e.hasOwnProperty("title") && !d.isString(e.title))
                    return "title: string expected";
                if (null != e.album && e.hasOwnProperty("album") && !d.isString(e.album))
                    return "album: string expected";
                if (null != e.albumID && e.hasOwnProperty("albumID") && !d.isString(e.albumID))
                    return "albumID: string expected";
                if (null != e.artist && e.hasOwnProperty("artist") && !d.isString(e.artist))
                    return "artist: string expected";
                if (null != e.artistID && e.hasOwnProperty("artistID") && !d.isString(e.artistID))
                    return "artistID: string expected";
                if (null != e.track && e.hasOwnProperty("track") && !d.isInteger(e.track))
                    return "track: integer expected";
                if (null != e.year && e.hasOwnProperty("year") && !d.isString(e.year))
                    return "year: string expected";
                if (null != e.duration && e.hasOwnProperty("duration") && "number" != typeof e.duration)
                    return "duration: number expected";
                if (null != e.coverArt && e.hasOwnProperty("coverArt") && !d.isString(e.coverArt))
                    return "coverArt: string expected";
                if (null != e.allowoffline && e.hasOwnProperty("allowoffline") && "boolean" != typeof e.allowoffline)
                    return "allowoffline: boolean expected";
                if (null != e.genre && e.hasOwnProperty("genre") && !d.isString(e.genre))
                    return "genre: string expected";
                if (null != e.AlbumArt && e.hasOwnProperty("AlbumArt") && !d.isString(e.AlbumArt))
                    return "AlbumArt: string expected";
                if (null != e.keywords && e.hasOwnProperty("keywords")) {
                    if (!Array.isArray(e.keywords))
                        return "keywords: array expected";
                    for (var n = 0; n < e.keywords.length; ++n)
                        if (!d.isString(e.keywords[n]))
                            return "keywords: string[] expected"
                }
                if (null != e.languageid && e.hasOwnProperty("languageid") && !d.isInteger(e.languageid))
                    return "languageid: integer expected";
                if (null != e.bitrates && e.hasOwnProperty("bitrates") && !d.isString(e.bitrates))
                    return "bitrates: string expected";
                if (null != e.description && e.hasOwnProperty("description") && !d.isString(e.description))
                    return "description: string expected";
                if (null != e.disablePlayerRestrictions && e.hasOwnProperty("disablePlayerRestrictions") && "boolean" != typeof e.disablePlayerRestrictions)
                    return "disablePlayerRestrictions: boolean expected";
                if (null != e.discardArtist && e.hasOwnProperty("discardArtist") && "boolean" != typeof e.discardArtist)
                    return "discardArtist: boolean expected";
                if (null != e.dropimage && e.hasOwnProperty("dropimage") && !d.isString(e.dropimage))
                    return "dropimage: string expected";
                if (null != e.hexcolor && e.hasOwnProperty("hexcolor") && !d.isString(e.hexcolor))
                    return "hexcolor: string expected";
                if (null != e.videoonly && e.hasOwnProperty("videoonly") && "boolean" != typeof e.videoonly)
                    return "videoonly: boolean expected";
                if (null != e.allowaudiodownload && e.hasOwnProperty("allowaudiodownload") && !d.isInteger(e.allowaudiodownload))
                    return "allowaudiodownload: integer expected";
                if (null != e.disabled && e.hasOwnProperty("disabled") && "boolean" != typeof e.disabled)
                    return "disabled: boolean expected";
                if (null != e.disabledurl && e.hasOwnProperty("disabledurl") && !d.isString(e.disabledurl))
                    return "disabledurl: string expected";
                if (null != e.playervideohslurl && e.hasOwnProperty("playervideohslurl") && !d.isString(e.playervideohslurl))
                    return "playervideohslurl: string expected";
                if (null != e.hasplayervideo && e.hasOwnProperty("hasplayervideo") && "boolean" != typeof e.hasplayervideo)
                    return "hasplayervideo: boolean expected";
                if (null != e.playervideo && e.hasOwnProperty("playervideo") && !d.isString(e.playervideo))
                    return "playervideo: string expected";
                if (null != e.playerloop && e.hasOwnProperty("playerloop") && "boolean" != typeof e.playerloop)
                    return "playerloop: boolean expected";
                if (null != e.playermutesound && e.hasOwnProperty("playermutesound") && "boolean" != typeof e.playermutesound)
                    return "playermutesound: boolean expected";
                if (null != e.playertext && e.hasOwnProperty("playertext") && !d.isString(e.playertext))
                    return "playertext: string expected";
                if (null != e.playerdeeplink && e.hasOwnProperty("playerdeeplink") && !d.isString(e.playerdeeplink))
                    return "playerdeeplink: string expected";
                if (null != e.playervideoposition && e.hasOwnProperty("playervideoposition") && !d.isString(e.playervideoposition))
                    return "playervideoposition: string expected";
                if (null != e.nouservideo && e.hasOwnProperty("nouservideo") && "boolean" != typeof e.nouservideo)
                    return "nouservideo: boolean expected";
                if (null != e.verified && e.hasOwnProperty("verified") && "boolean" != typeof e.verified)
                    return "verified: boolean expected";
                if (null != e.cleardetails && e.hasOwnProperty("cleardetails") && "boolean" != typeof e.cleardetails)
                    return "cleardetails: boolean expected";
                if (null != e.showuservideo && e.hasOwnProperty("showuservideo") && "boolean" != typeof e.showuservideo)
                    return "showuservideo: boolean expected";
                if (null != e.bitrate && e.hasOwnProperty("bitrate") && !d.isInteger(e.bitrate))
                    return "bitrate: integer expected";
                if (null != e.size && e.hasOwnProperty("size") && !d.isInteger(e.size))
                    return "size: integer expected";
                if (null != e.religious && e.hasOwnProperty("religious") && "boolean" != typeof e.religious)
                    return "religious: boolean expected";
                if (null != e.nodldmsg && e.hasOwnProperty("nodldmsg") && !d.isString(e.nodldmsg))
                    return "nodldmsg: string expected";
                if (null != e.exclusivevid && e.hasOwnProperty("exclusivevid") && "boolean" != typeof e.exclusivevid)
                    return "exclusivevid: boolean expected";
                if (null != e.explicit && e.hasOwnProperty("explicit") && "boolean" != typeof e.explicit)
                    return "explicit: boolean expected";
                if (null != e.rbtcode && e.hasOwnProperty("rbtcode") && !d.isString(e.rbtcode))
                    return "rbtcode: string expected";
                if (null != e.videoid && e.hasOwnProperty("videoid") && !d.isString(e.videoid))
                    return "videoid: string expected";
                if (null != e.thumbnailid && e.hasOwnProperty("thumbnailid") && !d.isString(e.thumbnailid))
                    return "thumbnailid: string expected";
                if (null != e.videoreleasedate && e.hasOwnProperty("videoreleasedate") && !d.isString(e.videoreleasedate))
                    return "videoreleasedate: string expected";
                if (null != e.adtimer && e.hasOwnProperty("adtimer") && !d.isInteger(e.adtimer))
                    return "adtimer: integer expected";
                if (null != e.forcead && e.hasOwnProperty("forcead") && !d.isString(e.forcead))
                    return "forcead: string expected";
                if (null != e.videotag && e.hasOwnProperty("videotag") && !d.isString(e.videotag))
                    return "videotag: string expected";
                if (null != e.audiotag && e.hasOwnProperty("audiotag") && !d.isString(e.audiotag))
                    return "audiotag: string expected";
                if (null != e.single && e.hasOwnProperty("single") && "boolean" != typeof e.single)
                    return "single: boolean expected";
                if (null != e.isexclusivesong && e.hasOwnProperty("isexclusivesong") && "boolean" != typeof e.isexclusivesong)
                    return "isexclusivesong: boolean expected";
                if (null != e.exclusive && e.hasOwnProperty("exclusive") && "boolean" != typeof e.exclusive)
                    return "exclusive: boolean expected";
                if (null != e.albumexclusive && e.hasOwnProperty("albumexclusive") && "boolean" != typeof e.albumexclusive)
                    return "albumexclusive: boolean expected";
                if (null != e.arabictext && e.hasOwnProperty("arabictext") && "boolean" != typeof e.arabictext)
                    return "arabictext: boolean expected";
                if (null != e.videoduration && e.hasOwnProperty("videoduration") && "number" != typeof e.videoduration)
                    return "videoduration: number expected";
                if (null != e.saveprogress && e.hasOwnProperty("saveprogress") && "boolean" != typeof e.saveprogress)
                    return "saveprogress: boolean expected";
                if (null != e.isPodcast && e.hasOwnProperty("isPodcast") && "boolean" != typeof e.isPodcast)
                    return "isPodcast: boolean expected";
                if (null != e.ArtistArt && e.hasOwnProperty("ArtistArt") && !d.isString(e.ArtistArt))
                    return "ArtistArt: string expected";
                if (null != e.sponsored && e.hasOwnProperty("sponsored") && "boolean" != typeof e.sponsored)
                    return "sponsored: boolean expected";
                if (null != e.youtubeonly && e.hasOwnProperty("youtubeonly") && "boolean" != typeof e.youtubeonly)
                    return "youtubeonly: boolean expected";
                if (null != e.youtubeurl && e.hasOwnProperty("youtubeurl") && !d.isString(e.youtubeurl))
                    return "youtubeurl: string expected";
                if (null != e.local && e.hasOwnProperty("local") && "boolean" != typeof e.local)
                    return "local: boolean expected";
                if (null != e.isPremiumVideo && e.hasOwnProperty("isPremiumVideo") && "boolean" != typeof e.isPremiumVideo)
                    return "isPremiumVideo: boolean expected";
                if (null != e.disableVideoScrub && e.hasOwnProperty("disableVideoScrub") && "boolean" != typeof e.disableVideoScrub)
                    return "disableVideoScrub: boolean expected";
                if (null != e.vibes && e.hasOwnProperty("vibes")) {
                    if (!Array.isArray(e.vibes))
                        return "vibes: array expected";
                    for (n = 0; n < e.vibes.length; ++n)
                        if (!d.isString(e.vibes[n]))
                            return "vibes: string[] expected"
                }
                if (null != e.disableMoreLikeThis && e.hasOwnProperty("disableMoreLikeThis") && "boolean" != typeof e.disableMoreLikeThis)
                    return "disableMoreLikeThis: boolean expected";
                if (null != e.disableStories && e.hasOwnProperty("disableStories") && "boolean" != typeof e.disableStories)
                    return "disableStories: boolean expected";
                if (null != e.restrictedAccess && e.hasOwnProperty("restrictedAccess") && "boolean" != typeof e.restrictedAccess)
                    return "restrictedAccess: boolean expected";
                if (null != e.restrictedAccessDialog && e.hasOwnProperty("restrictedAccessDialog") && !d.isString(e.restrictedAccessDialog))
                    return "restrictedAccessDialog: string expected";
                if (null != e.hasLyrics && e.hasOwnProperty("hasLyrics") && "boolean" != typeof e.hasLyrics)
                    return "hasLyrics: boolean expected";
                if (null != e.lyricsupdatedon && e.hasOwnProperty("lyricsupdatedon") && !d.isString(e.lyricsupdatedon))
                    return "lyricsupdatedon: string expected";
                if (null != e.isAudiobook && e.hasOwnProperty("isAudiobook") && "boolean" != typeof e.isAudiobook)
                    return "isAudiobook: boolean expected";
                if (null != e.lockedContentPartnerIds && e.hasOwnProperty("lockedContentPartnerIds")) {
                    if (!Array.isArray(e.lockedContentPartnerIds))
                        return "lockedContentPartnerIds: array expected";
                    for (n = 0; n < e.lockedContentPartnerIds.length; ++n)
                        if (!d.isInteger(e.lockedContentPartnerIds[n]))
                            return "lockedContentPartnerIds: integer[] expected"
                }
                if (null != e.artistType && e.hasOwnProperty("artistType"))
                    switch (e.artistType) {
                        default:
                            return "artistType: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                    }
                if (null != e.artistGender && e.hasOwnProperty("artistGender"))
                    switch (e.artistGender) {
                        default:
                            return "artistGender: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                    }
                return null != e.localSongHash && e.hasOwnProperty("localSongHash") && !d.isString(e.localSongHash) ? "localSongHash: string expected" : null
            }
            ,
            c.fromObject = function (e) {
                if (e instanceof p.src.Song)
                    return e;
                var n = new p.src.Song;
                if (null != e.id && (n.id = String(e.id)),
                    null != e.title && (n.title = String(e.title)),
                    null != e.album && (n.album = String(e.album)),
                    null != e.albumID && (n.albumID = String(e.albumID)),
                    null != e.artist && (n.artist = String(e.artist)),
                    null != e.artistID && (n.artistID = String(e.artistID)),
                    null != e.track && (n.track = 0 | e.track),
                    null != e.year && (n.year = String(e.year)),
                    null != e.duration && (n.duration = Number(e.duration)),
                    null != e.coverArt && (n.coverArt = String(e.coverArt)),
                    null != e.allowoffline && (n.allowoffline = Boolean(e.allowoffline)),
                    null != e.genre && (n.genre = String(e.genre)),
                    null != e.AlbumArt && (n.AlbumArt = String(e.AlbumArt)),
                    e.keywords) {
                    if (!Array.isArray(e.keywords))
                        throw TypeError(".src.Song.keywords: array expected");
                    n.keywords = [];
                    for (var s = 0; s < e.keywords.length; ++s)
                        n.keywords[s] = String(e.keywords[s])
                }
                if (null != e.languageid && (n.languageid = 0 | e.languageid),
                    null != e.bitrates && (n.bitrates = String(e.bitrates)),
                    null != e.description && (n.description = String(e.description)),
                    null != e.disablePlayerRestrictions && (n.disablePlayerRestrictions = Boolean(e.disablePlayerRestrictions)),
                    null != e.discardArtist && (n.discardArtist = Boolean(e.discardArtist)),
                    null != e.dropimage && (n.dropimage = String(e.dropimage)),
                    null != e.hexcolor && (n.hexcolor = String(e.hexcolor)),
                    null != e.videoonly && (n.videoonly = Boolean(e.videoonly)),
                    null != e.allowaudiodownload && (n.allowaudiodownload = 0 | e.allowaudiodownload),
                    null != e.disabled && (n.disabled = Boolean(e.disabled)),
                    null != e.disabledurl && (n.disabledurl = String(e.disabledurl)),
                    null != e.playervideohslurl && (n.playervideohslurl = String(e.playervideohslurl)),
                    null != e.hasplayervideo && (n.hasplayervideo = Boolean(e.hasplayervideo)),
                    null != e.playervideo && (n.playervideo = String(e.playervideo)),
                    null != e.playerloop && (n.playerloop = Boolean(e.playerloop)),
                    null != e.playermutesound && (n.playermutesound = Boolean(e.playermutesound)),
                    null != e.playertext && (n.playertext = String(e.playertext)),
                    null != e.playerdeeplink && (n.playerdeeplink = String(e.playerdeeplink)),
                    null != e.playervideoposition && (n.playervideoposition = String(e.playervideoposition)),
                    null != e.nouservideo && (n.nouservideo = Boolean(e.nouservideo)),
                    null != e.verified && (n.verified = Boolean(e.verified)),
                    null != e.cleardetails && (n.cleardetails = Boolean(e.cleardetails)),
                    null != e.showuservideo && (n.showuservideo = Boolean(e.showuservideo)),
                    null != e.bitrate && (n.bitrate = 0 | e.bitrate),
                    null != e.size && (n.size = 0 | e.size),
                    null != e.religious && (n.religious = Boolean(e.religious)),
                    null != e.nodldmsg && (n.nodldmsg = String(e.nodldmsg)),
                    null != e.exclusivevid && (n.exclusivevid = Boolean(e.exclusivevid)),
                    null != e.explicit && (n.explicit = Boolean(e.explicit)),
                    null != e.rbtcode && (n.rbtcode = String(e.rbtcode)),
                    null != e.videoid && (n.videoid = String(e.videoid)),
                    null != e.thumbnailid && (n.thumbnailid = String(e.thumbnailid)),
                    null != e.videoreleasedate && (n.videoreleasedate = String(e.videoreleasedate)),
                    null != e.adtimer && (n.adtimer = 0 | e.adtimer),
                    null != e.forcead && (n.forcead = String(e.forcead)),
                    null != e.videotag && (n.videotag = String(e.videotag)),
                    null != e.audiotag && (n.audiotag = String(e.audiotag)),
                    null != e.single && (n.single = Boolean(e.single)),
                    null != e.isexclusivesong && (n.isexclusivesong = Boolean(e.isexclusivesong)),
                    null != e.exclusive && (n.exclusive = Boolean(e.exclusive)),
                    null != e.albumexclusive && (n.albumexclusive = Boolean(e.albumexclusive)),
                    null != e.arabictext && (n.arabictext = Boolean(e.arabictext)),
                    null != e.videoduration && (n.videoduration = Number(e.videoduration)),
                    null != e.saveprogress && (n.saveprogress = Boolean(e.saveprogress)),
                    null != e.isPodcast && (n.isPodcast = Boolean(e.isPodcast)),
                    null != e.ArtistArt && (n.ArtistArt = String(e.ArtistArt)),
                    null != e.sponsored && (n.sponsored = Boolean(e.sponsored)),
                    null != e.youtubeonly && (n.youtubeonly = Boolean(e.youtubeonly)),
                    null != e.youtubeurl && (n.youtubeurl = String(e.youtubeurl)),
                    null != e.local && (n.local = Boolean(e.local)),
                    null != e.isPremiumVideo && (n.isPremiumVideo = Boolean(e.isPremiumVideo)),
                    null != e.disableVideoScrub && (n.disableVideoScrub = Boolean(e.disableVideoScrub)),
                    e.vibes) {
                    if (!Array.isArray(e.vibes))
                        throw TypeError(".src.Song.vibes: array expected");
                    for (n.vibes = [],
                        s = 0; s < e.vibes.length; ++s)
                        n.vibes[s] = String(e.vibes[s])
                }
                if (null != e.disableMoreLikeThis && (n.disableMoreLikeThis = Boolean(e.disableMoreLikeThis)),
                    null != e.disableStories && (n.disableStories = Boolean(e.disableStories)),
                    null != e.restrictedAccess && (n.restrictedAccess = Boolean(e.restrictedAccess)),
                    null != e.restrictedAccessDialog && (n.restrictedAccessDialog = String(e.restrictedAccessDialog)),
                    null != e.hasLyrics && (n.hasLyrics = Boolean(e.hasLyrics)),
                    null != e.lyricsupdatedon && (n.lyricsupdatedon = String(e.lyricsupdatedon)),
                    null != e.isAudiobook && (n.isAudiobook = Boolean(e.isAudiobook)),
                    e.lockedContentPartnerIds) {
                    if (!Array.isArray(e.lockedContentPartnerIds))
                        throw TypeError(".src.Song.lockedContentPartnerIds: array expected");
                    for (n.lockedContentPartnerIds = [],
                        s = 0; s < e.lockedContentPartnerIds.length; ++s)
                        n.lockedContentPartnerIds[s] = 0 | e.lockedContentPartnerIds[s]
                }
                switch (e.artistType) {
                    case "INDIVIDUAL":
                    case 0:
                        n.artistType = 0;
                        break;
                    case "BAND":
                    case 1:
                        n.artistType = 1;
                        break;
                    case "COLLAB":
                    case 2:
                        n.artistType = 2;
                        break;
                    case "BRAND":
                    case 3:
                        n.artistType = 3
                }
                switch (e.artistGender) {
                    case "OTHER":
                    case 0:
                        n.artistGender = 0;
                        break;
                    case "MALE":
                    case 1:
                        n.artistGender = 1;
                        break;
                    case "FEMALE":
                    case 2:
                        n.artistGender = 2
                }
                return null != e.localSongHash && (n.localSongHash = String(e.localSongHash)),
                    n
            }
            ,
            c.toObject = function (e, n) {
                n || (n = {});
                var s = {};
                if ((n.arrays || n.defaults) && (s.keywords = [],
                    s.vibes = [],
                    s.lockedContentPartnerIds = []),
                    n.defaults && (s.id = "",
                        s.title = "",
                        s.album = "",
                        s.albumID = "",
                        s.artist = "",
                        s.artistID = "",
                        s.track = 0,
                        s.year = "",
                        s.duration = 0,
                        s.coverArt = "",
                        s.allowoffline = !1,
                        s.genre = "",
                        s.AlbumArt = "",
                        s.languageid = 0,
                        s.bitrates = "",
                        s.description = "",
                        s.disablePlayerRestrictions = !1,
                        s.discardArtist = !1,
                        s.dropimage = "",
                        s.hexcolor = "",
                        s.videoonly = !1,
                        s.allowaudiodownload = 0,
                        s.disabled = !1,
                        s.disabledurl = "",
                        s.playervideohslurl = "",
                        s.hasplayervideo = !1,
                        s.playervideo = "",
                        s.playerloop = !1,
                        s.playermutesound = !1,
                        s.playertext = "",
                        s.playerdeeplink = "",
                        s.playervideoposition = "",
                        s.nouservideo = !1,
                        s.verified = !1,
                        s.cleardetails = !1,
                        s.showuservideo = !1,
                        s.bitrate = 0,
                        s.size = 0,
                        s.religious = !1,
                        s.nodldmsg = "",
                        s.exclusivevid = !1,
                        s.explicit = !1,
                        s.rbtcode = "",
                        s.videoid = "",
                        s.thumbnailid = "",
                        s.videoreleasedate = "",
                        s.adtimer = 0,
                        s.forcead = "",
                        s.videotag = "",
                        s.audiotag = "",
                        s.single = !1,
                        s.isexclusivesong = !1,
                        s.exclusive = !1,
                        s.albumexclusive = !1,
                        s.arabictext = !1,
                        s.videoduration = 0,
                        s.saveprogress = !1,
                        s.isPodcast = !1,
                        s.ArtistArt = "",
                        s.sponsored = !1,
                        s.youtubeonly = !1,
                        s.youtubeurl = "",
                        s.local = !1,
                        s.isPremiumVideo = !1,
                        s.disableVideoScrub = !1,
                        s.disableMoreLikeThis = !1,
                        s.disableStories = !1,
                        s.restrictedAccess = !1,
                        s.restrictedAccessDialog = "",
                        s.hasLyrics = !1,
                        s.lyricsupdatedon = "",
                        s.isAudiobook = !1,
                        s.artistType = n.enums === String ? "INDIVIDUAL" : 0,
                        s.artistGender = n.enums === String ? "OTHER" : 0,
                        s.localSongHash = ""),
                    null != e.id && e.hasOwnProperty("id") && (s.id = e.id),
                    null != e.title && e.hasOwnProperty("title") && (s.title = e.title),
                    null != e.album && e.hasOwnProperty("album") && (s.album = e.album),
                    null != e.albumID && e.hasOwnProperty("albumID") && (s.albumID = e.albumID),
                    null != e.artist && e.hasOwnProperty("artist") && (s.artist = e.artist),
                    null != e.artistID && e.hasOwnProperty("artistID") && (s.artistID = e.artistID),
                    null != e.track && e.hasOwnProperty("track") && (s.track = e.track),
                    null != e.year && e.hasOwnProperty("year") && (s.year = e.year),
                    null != e.duration && e.hasOwnProperty("duration") && (s.duration = n.json && !isFinite(e.duration) ? String(e.duration) : e.duration),
                    null != e.coverArt && e.hasOwnProperty("coverArt") && (s.coverArt = e.coverArt),
                    null != e.allowoffline && e.hasOwnProperty("allowoffline") && (s.allowoffline = e.allowoffline),
                    null != e.genre && e.hasOwnProperty("genre") && (s.genre = e.genre),
                    null != e.AlbumArt && e.hasOwnProperty("AlbumArt") && (s.AlbumArt = e.AlbumArt),
                    e.keywords && e.keywords.length) {
                    s.keywords = [];
                    for (var l = 0; l < e.keywords.length; ++l)
                        s.keywords[l] = e.keywords[l]
                }
                if (null != e.languageid && e.hasOwnProperty("languageid") && (s.languageid = e.languageid),
                    null != e.bitrates && e.hasOwnProperty("bitrates") && (s.bitrates = e.bitrates),
                    null != e.description && e.hasOwnProperty("description") && (s.description = e.description),
                    null != e.disablePlayerRestrictions && e.hasOwnProperty("disablePlayerRestrictions") && (s.disablePlayerRestrictions = e.disablePlayerRestrictions),
                    null != e.discardArtist && e.hasOwnProperty("discardArtist") && (s.discardArtist = e.discardArtist),
                    null != e.dropimage && e.hasOwnProperty("dropimage") && (s.dropimage = e.dropimage),
                    null != e.hexcolor && e.hasOwnProperty("hexcolor") && (s.hexcolor = e.hexcolor),
                    null != e.videoonly && e.hasOwnProperty("videoonly") && (s.videoonly = e.videoonly),
                    null != e.allowaudiodownload && e.hasOwnProperty("allowaudiodownload") && (s.allowaudiodownload = e.allowaudiodownload),
                    null != e.disabled && e.hasOwnProperty("disabled") && (s.disabled = e.disabled),
                    null != e.disabledurl && e.hasOwnProperty("disabledurl") && (s.disabledurl = e.disabledurl),
                    null != e.playervideohslurl && e.hasOwnProperty("playervideohslurl") && (s.playervideohslurl = e.playervideohslurl),
                    null != e.hasplayervideo && e.hasOwnProperty("hasplayervideo") && (s.hasplayervideo = e.hasplayervideo),
                    null != e.playervideo && e.hasOwnProperty("playervideo") && (s.playervideo = e.playervideo),
                    null != e.playerloop && e.hasOwnProperty("playerloop") && (s.playerloop = e.playerloop),
                    null != e.playermutesound && e.hasOwnProperty("playermutesound") && (s.playermutesound = e.playermutesound),
                    null != e.playertext && e.hasOwnProperty("playertext") && (s.playertext = e.playertext),
                    null != e.playerdeeplink && e.hasOwnProperty("playerdeeplink") && (s.playerdeeplink = e.playerdeeplink),
                    null != e.playervideoposition && e.hasOwnProperty("playervideoposition") && (s.playervideoposition = e.playervideoposition),
                    null != e.nouservideo && e.hasOwnProperty("nouservideo") && (s.nouservideo = e.nouservideo),
                    null != e.verified && e.hasOwnProperty("verified") && (s.verified = e.verified),
                    null != e.cleardetails && e.hasOwnProperty("cleardetails") && (s.cleardetails = e.cleardetails),
                    null != e.showuservideo && e.hasOwnProperty("showuservideo") && (s.showuservideo = e.showuservideo),
                    null != e.bitrate && e.hasOwnProperty("bitrate") && (s.bitrate = e.bitrate),
                    null != e.size && e.hasOwnProperty("size") && (s.size = e.size),
                    null != e.religious && e.hasOwnProperty("religious") && (s.religious = e.religious),
                    null != e.nodldmsg && e.hasOwnProperty("nodldmsg") && (s.nodldmsg = e.nodldmsg),
                    null != e.exclusivevid && e.hasOwnProperty("exclusivevid") && (s.exclusivevid = e.exclusivevid),
                    null != e.explicit && e.hasOwnProperty("explicit") && (s.explicit = e.explicit),
                    null != e.rbtcode && e.hasOwnProperty("rbtcode") && (s.rbtcode = e.rbtcode),
                    null != e.videoid && e.hasOwnProperty("videoid") && (s.videoid = e.videoid),
                    null != e.thumbnailid && e.hasOwnProperty("thumbnailid") && (s.thumbnailid = e.thumbnailid),
                    null != e.videoreleasedate && e.hasOwnProperty("videoreleasedate") && (s.videoreleasedate = e.videoreleasedate),
                    null != e.adtimer && e.hasOwnProperty("adtimer") && (s.adtimer = e.adtimer),
                    null != e.forcead && e.hasOwnProperty("forcead") && (s.forcead = e.forcead),
                    null != e.videotag && e.hasOwnProperty("videotag") && (s.videotag = e.videotag),
                    null != e.audiotag && e.hasOwnProperty("audiotag") && (s.audiotag = e.audiotag),
                    null != e.single && e.hasOwnProperty("single") && (s.single = e.single),
                    null != e.isexclusivesong && e.hasOwnProperty("isexclusivesong") && (s.isexclusivesong = e.isexclusivesong),
                    null != e.exclusive && e.hasOwnProperty("exclusive") && (s.exclusive = e.exclusive),
                    null != e.albumexclusive && e.hasOwnProperty("albumexclusive") && (s.albumexclusive = e.albumexclusive),
                    null != e.arabictext && e.hasOwnProperty("arabictext") && (s.arabictext = e.arabictext),
                    null != e.videoduration && e.hasOwnProperty("videoduration") && (s.videoduration = n.json && !isFinite(e.videoduration) ? String(e.videoduration) : e.videoduration),
                    null != e.saveprogress && e.hasOwnProperty("saveprogress") && (s.saveprogress = e.saveprogress),
                    null != e.isPodcast && e.hasOwnProperty("isPodcast") && (s.isPodcast = e.isPodcast),
                    null != e.ArtistArt && e.hasOwnProperty("ArtistArt") && (s.ArtistArt = e.ArtistArt),
                    null != e.sponsored && e.hasOwnProperty("sponsored") && (s.sponsored = e.sponsored),
                    null != e.youtubeonly && e.hasOwnProperty("youtubeonly") && (s.youtubeonly = e.youtubeonly),
                    null != e.youtubeurl && e.hasOwnProperty("youtubeurl") && (s.youtubeurl = e.youtubeurl),
                    null != e.local && e.hasOwnProperty("local") && (s.local = e.local),
                    null != e.isPremiumVideo && e.hasOwnProperty("isPremiumVideo") && (s.isPremiumVideo = e.isPremiumVideo),
                    null != e.disableVideoScrub && e.hasOwnProperty("disableVideoScrub") && (s.disableVideoScrub = e.disableVideoScrub),
                    e.vibes && e.vibes.length)
                    for (s.vibes = [],
                        l = 0; l < e.vibes.length; ++l)
                        s.vibes[l] = e.vibes[l];
                if (null != e.disableMoreLikeThis && e.hasOwnProperty("disableMoreLikeThis") && (s.disableMoreLikeThis = e.disableMoreLikeThis),
                    null != e.disableStories && e.hasOwnProperty("disableStories") && (s.disableStories = e.disableStories),
                    null != e.restrictedAccess && e.hasOwnProperty("restrictedAccess") && (s.restrictedAccess = e.restrictedAccess),
                    null != e.restrictedAccessDialog && e.hasOwnProperty("restrictedAccessDialog") && (s.restrictedAccessDialog = e.restrictedAccessDialog),
                    null != e.hasLyrics && e.hasOwnProperty("hasLyrics") && (s.hasLyrics = e.hasLyrics),
                    null != e.lyricsupdatedon && e.hasOwnProperty("lyricsupdatedon") && (s.lyricsupdatedon = e.lyricsupdatedon),
                    null != e.isAudiobook && e.hasOwnProperty("isAudiobook") && (s.isAudiobook = e.isAudiobook),
                    e.lockedContentPartnerIds && e.lockedContentPartnerIds.length)
                    for (s.lockedContentPartnerIds = [],
                        l = 0; l < e.lockedContentPartnerIds.length; ++l)
                        s.lockedContentPartnerIds[l] = e.lockedContentPartnerIds[l];
                return null != e.artistType && e.hasOwnProperty("artistType") && (s.artistType = n.enums === String ? p.src.ArtistType[e.artistType] : e.artistType),
                    null != e.artistGender && e.hasOwnProperty("artistGender") && (s.artistGender = n.enums === String ? p.src.ArtistGender[e.artistGender] : e.artistGender),
                    null != e.localSongHash && e.hasOwnProperty("localSongHash") && (s.localSongHash = e.localSongHash),
                    s
            }
            ,
            c.prototype.toJSON = function () {
                return this.constructor.toObject(this, t.util.toJSONOptions)
            }
            ,
            c
    }(),
    m.Artist = function () {
        function c(u) {
            if (u)
                for (var e = Object.keys(u), n = 0; n < e.length; ++n)
                    null != u[e[n]] && (this[e[n]] = u[e[n]])
        }
        return c.prototype.id = "",
            c.prototype.name = "",
            c.prototype.coverArtId = "",
            c.prototype.artistType = 0,
            c.prototype.artistGender = 0,
            c.create = function (e) {
                return new c(e)
            }
            ,
            c.encode = function (e, n) {
                return n || (n = a.create()),
                    null != e.id && Object.hasOwnProperty.call(e, "id") && n.uint32(10).string(e.id),
                    null != e.name && Object.hasOwnProperty.call(e, "name") && n.uint32(18).string(e.name),
                    null != e.coverArtId && Object.hasOwnProperty.call(e, "coverArtId") && n.uint32(26).string(e.coverArtId),
                    null != e.artistType && Object.hasOwnProperty.call(e, "artistType") && n.uint32(32).int32(e.artistType),
                    null != e.artistGender && Object.hasOwnProperty.call(e, "artistGender") && n.uint32(40).int32(e.artistGender),
                    n
            }
            ,
            c.encodeDelimited = function (e, n) {
                return this.encode(e, n).ldelim()
            }
            ,
            c.decode = function (e, n) {
                e instanceof r || (e = r.create(e));
                for (var s = void 0 === n ? e.len : e.pos + n, l = new p.src.Artist; e.pos < s;) {
                    var k = e.uint32();
                    switch (k >>> 3) {
                        case 1:
                            l.id = e.string();
                            break;
                        case 2:
                            l.name = e.string();
                            break;
                        case 3:
                            l.coverArtId = e.string();
                            break;
                        case 4:
                            l.artistType = e.int32();
                            break;
                        case 5:
                            l.artistGender = e.int32();
                            break;
                        default:
                            e.skipType(7 & k)
                    }
                }
                return l
            }
            ,
            c.decodeDelimited = function (e) {
                return e instanceof r || (e = new r(e)),
                    this.decode(e, e.uint32())
            }
            ,
            c.verify = function (e) {
                if ("object" != typeof e || null === e)
                    return "object expected";
                if (null != e.id && e.hasOwnProperty("id") && !d.isString(e.id))
                    return "id: string expected";
                if (null != e.name && e.hasOwnProperty("name") && !d.isString(e.name))
                    return "name: string expected";
                if (null != e.coverArtId && e.hasOwnProperty("coverArtId") && !d.isString(e.coverArtId))
                    return "coverArtId: string expected";
                if (null != e.artistType && e.hasOwnProperty("artistType"))
                    switch (e.artistType) {
                        default:
                            return "artistType: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                    }
                if (null != e.artistGender && e.hasOwnProperty("artistGender"))
                    switch (e.artistGender) {
                        default:
                            return "artistGender: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                    }
                return null
            }
            ,
            c.fromObject = function (e) {
                if (e instanceof p.src.Artist)
                    return e;
                var n = new p.src.Artist;
                switch (null != e.id && (n.id = String(e.id)),
                null != e.name && (n.name = String(e.name)),
                null != e.coverArtId && (n.coverArtId = String(e.coverArtId)),
                e.artistType) {
                    case "INDIVIDUAL":
                    case 0:
                        n.artistType = 0;
                        break;
                    case "BAND":
                    case 1:
                        n.artistType = 1;
                        break;
                    case "COLLAB":
                    case 2:
                        n.artistType = 2;
                        break;
                    case "BRAND":
                    case 3:
                        n.artistType = 3
                }
                switch (e.artistGender) {
                    case "OTHER":
                    case 0:
                        n.artistGender = 0;
                        break;
                    case "MALE":
                    case 1:
                        n.artistGender = 1;
                        break;
                    case "FEMALE":
                    case 2:
                        n.artistGender = 2
                }
                return n
            }
            ,
            c.toObject = function (e, n) {
                n || (n = {});
                var s = {};
                return n.defaults && (s.id = "",
                    s.name = "",
                    s.coverArtId = "",
                    s.artistType = n.enums === String ? "INDIVIDUAL" : 0,
                    s.artistGender = n.enums === String ? "OTHER" : 0),
                    null != e.id && e.hasOwnProperty("id") && (s.id = e.id),
                    null != e.name && e.hasOwnProperty("name") && (s.name = e.name),
                    null != e.coverArtId && e.hasOwnProperty("coverArtId") && (s.coverArtId = e.coverArtId),
                    null != e.artistType && e.hasOwnProperty("artistType") && (s.artistType = n.enums === String ? p.src.ArtistType[e.artistType] : e.artistType),
                    null != e.artistGender && e.hasOwnProperty("artistGender") && (s.artistGender = n.enums === String ? p.src.ArtistGender[e.artistGender] : e.artistGender),
                    s
            }
            ,
            c.prototype.toJSON = function () {
                return this.constructor.toObject(this, t.util.toJSONOptions)
            }
            ,
            c
    }(),
    m.Album = function () {
        function c(u) {
            if (this.keywords = [],
                this.songOrder = [],
                u)
                for (var e = Object.keys(u), n = 0; n < e.length; ++n)
                    null != u[e[n]] && (this[e[n]] = u[e[n]])
        }
        return c.prototype.albumId = "",
            c.prototype.artistId = "",
            c.prototype.albumName = "",
            c.prototype.songCount = 0,
            c.prototype.isExclusive = !1,
            c.prototype.isPodcast = !1,
            c.prototype.releaseDate = "",
            c.prototype.isExplicit = !1,
            c.prototype.coverArtId = "",
            c.prototype.artistName = "",
            c.prototype.albumPlays = 0,
            c.prototype.artistPlays = 0,
            c.prototype.keywords = d.emptyArray,
            c.prototype.discardArtist = !1,
            c.prototype.description = "",
            c.prototype.isAudiobook = !1,
            c.prototype.disableMoreLikeThis = !1,
            c.prototype.isAtmos = !1,
            c.prototype.songOrder = d.emptyArray,
            c.prototype.isReligious = !1,
            c.prototype.artistType = 0,
            c.prototype.artistGender = 0,
            c.create = function (e) {
                return new c(e)
            }
            ,
            c.encode = function (e, n) {
                if (n || (n = a.create()),
                    null != e.albumId && Object.hasOwnProperty.call(e, "albumId") && n.uint32(10).string(e.albumId),
                    null != e.artistId && Object.hasOwnProperty.call(e, "artistId") && n.uint32(18).string(e.artistId),
                    null != e.albumName && Object.hasOwnProperty.call(e, "albumName") && n.uint32(26).string(e.albumName),
                    null != e.songCount && Object.hasOwnProperty.call(e, "songCount") && n.uint32(32).int32(e.songCount),
                    null != e.isExclusive && Object.hasOwnProperty.call(e, "isExclusive") && n.uint32(40).bool(e.isExclusive),
                    null != e.isPodcast && Object.hasOwnProperty.call(e, "isPodcast") && n.uint32(48).bool(e.isPodcast),
                    null != e.releaseDate && Object.hasOwnProperty.call(e, "releaseDate") && n.uint32(58).string(e.releaseDate),
                    null != e.isExplicit && Object.hasOwnProperty.call(e, "isExplicit") && n.uint32(64).bool(e.isExplicit),
                    null != e.coverArtId && Object.hasOwnProperty.call(e, "coverArtId") && n.uint32(74).string(e.coverArtId),
                    null != e.artistName && Object.hasOwnProperty.call(e, "artistName") && n.uint32(82).string(e.artistName),
                    null != e.albumPlays && Object.hasOwnProperty.call(e, "albumPlays") && n.uint32(88).uint32(e.albumPlays),
                    null != e.artistPlays && Object.hasOwnProperty.call(e, "artistPlays") && n.uint32(96).uint32(e.artistPlays),
                    null != e.keywords && e.keywords.length)
                    for (var s = 0; s < e.keywords.length; ++s)
                        n.uint32(106).string(e.keywords[s]);
                if (null != e.discardArtist && Object.hasOwnProperty.call(e, "discardArtist") && n.uint32(112).bool(e.discardArtist),
                    null != e.description && Object.hasOwnProperty.call(e, "description") && n.uint32(122).string(e.description),
                    null != e.isAudiobook && Object.hasOwnProperty.call(e, "isAudiobook") && n.uint32(128).bool(e.isAudiobook),
                    null != e.disableMoreLikeThis && Object.hasOwnProperty.call(e, "disableMoreLikeThis") && n.uint32(136).bool(e.disableMoreLikeThis),
                    null != e.isAtmos && Object.hasOwnProperty.call(e, "isAtmos") && n.uint32(144).bool(e.isAtmos),
                    null != e.songOrder && e.songOrder.length)
                    for (s = 0; s < e.songOrder.length; ++s)
                        n.uint32(154).string(e.songOrder[s]);
                return null != e.isReligious && Object.hasOwnProperty.call(e, "isReligious") && n.uint32(168).bool(e.isReligious),
                    null != e.artistType && Object.hasOwnProperty.call(e, "artistType") && n.uint32(176).int32(e.artistType),
                    null != e.artistGender && Object.hasOwnProperty.call(e, "artistGender") && n.uint32(184).int32(e.artistGender),
                    n
            }
            ,
            c.encodeDelimited = function (e, n) {
                return this.encode(e, n).ldelim()
            }
            ,
            c.decode = function (e, n) {
                e instanceof r || (e = r.create(e));
                for (var s = void 0 === n ? e.len : e.pos + n, l = new p.src.Album; e.pos < s;) {
                    var k = e.uint32();
                    switch (k >>> 3) {
                        case 1:
                            l.albumId = e.string();
                            break;
                        case 2:
                            l.artistId = e.string();
                            break;
                        case 3:
                            l.albumName = e.string();
                            break;
                        case 4:
                            l.songCount = e.int32();
                            break;
                        case 5:
                            l.isExclusive = e.bool();
                            break;
                        case 6:
                            l.isPodcast = e.bool();
                            break;
                        case 7:
                            l.releaseDate = e.string();
                            break;
                        case 8:
                            l.isExplicit = e.bool();
                            break;
                        case 9:
                            l.coverArtId = e.string();
                            break;
                        case 10:
                            l.artistName = e.string();
                            break;
                        case 11:
                            l.albumPlays = e.uint32();
                            break;
                        case 12:
                            l.artistPlays = e.uint32();
                            break;
                        case 13:
                            l.keywords && l.keywords.length || (l.keywords = []),
                                l.keywords.push(e.string());
                            break;
                        case 14:
                            l.discardArtist = e.bool();
                            break;
                        case 15:
                            l.description = e.string();
                            break;
                        case 16:
                            l.isAudiobook = e.bool();
                            break;
                        case 17:
                            l.disableMoreLikeThis = e.bool();
                            break;
                        case 18:
                            l.isAtmos = e.bool();
                            break;
                        case 19:
                            l.songOrder && l.songOrder.length || (l.songOrder = []),
                                l.songOrder.push(e.string());
                            break;
                        case 21:
                            l.isReligious = e.bool();
                            break;
                        case 22:
                            l.artistType = e.int32();
                            break;
                        case 23:
                            l.artistGender = e.int32();
                            break;
                        default:
                            e.skipType(7 & k)
                    }
                }
                return l
            }
            ,
            c.decodeDelimited = function (e) {
                return e instanceof r || (e = new r(e)),
                    this.decode(e, e.uint32())
            }
            ,
            c.verify = function (e) {
                if ("object" != typeof e || null === e)
                    return "object expected";
                if (null != e.albumId && e.hasOwnProperty("albumId") && !d.isString(e.albumId))
                    return "albumId: string expected";
                if (null != e.artistId && e.hasOwnProperty("artistId") && !d.isString(e.artistId))
                    return "artistId: string expected";
                if (null != e.albumName && e.hasOwnProperty("albumName") && !d.isString(e.albumName))
                    return "albumName: string expected";
                if (null != e.songCount && e.hasOwnProperty("songCount") && !d.isInteger(e.songCount))
                    return "songCount: integer expected";
                if (null != e.isExclusive && e.hasOwnProperty("isExclusive") && "boolean" != typeof e.isExclusive)
                    return "isExclusive: boolean expected";
                if (null != e.isPodcast && e.hasOwnProperty("isPodcast") && "boolean" != typeof e.isPodcast)
                    return "isPodcast: boolean expected";
                if (null != e.releaseDate && e.hasOwnProperty("releaseDate") && !d.isString(e.releaseDate))
                    return "releaseDate: string expected";
                if (null != e.isExplicit && e.hasOwnProperty("isExplicit") && "boolean" != typeof e.isExplicit)
                    return "isExplicit: boolean expected";
                if (null != e.coverArtId && e.hasOwnProperty("coverArtId") && !d.isString(e.coverArtId))
                    return "coverArtId: string expected";
                if (null != e.artistName && e.hasOwnProperty("artistName") && !d.isString(e.artistName))
                    return "artistName: string expected";
                if (null != e.albumPlays && e.hasOwnProperty("albumPlays") && !d.isInteger(e.albumPlays))
                    return "albumPlays: integer expected";
                if (null != e.artistPlays && e.hasOwnProperty("artistPlays") && !d.isInteger(e.artistPlays))
                    return "artistPlays: integer expected";
                if (null != e.keywords && e.hasOwnProperty("keywords")) {
                    if (!Array.isArray(e.keywords))
                        return "keywords: array expected";
                    for (var n = 0; n < e.keywords.length; ++n)
                        if (!d.isString(e.keywords[n]))
                            return "keywords: string[] expected"
                }
                if (null != e.discardArtist && e.hasOwnProperty("discardArtist") && "boolean" != typeof e.discardArtist)
                    return "discardArtist: boolean expected";
                if (null != e.description && e.hasOwnProperty("description") && !d.isString(e.description))
                    return "description: string expected";
                if (null != e.isAudiobook && e.hasOwnProperty("isAudiobook") && "boolean" != typeof e.isAudiobook)
                    return "isAudiobook: boolean expected";
                if (null != e.disableMoreLikeThis && e.hasOwnProperty("disableMoreLikeThis") && "boolean" != typeof e.disableMoreLikeThis)
                    return "disableMoreLikeThis: boolean expected";
                if (null != e.isAtmos && e.hasOwnProperty("isAtmos") && "boolean" != typeof e.isAtmos)
                    return "isAtmos: boolean expected";
                if (null != e.songOrder && e.hasOwnProperty("songOrder")) {
                    if (!Array.isArray(e.songOrder))
                        return "songOrder: array expected";
                    for (n = 0; n < e.songOrder.length; ++n)
                        if (!d.isString(e.songOrder[n]))
                            return "songOrder: string[] expected"
                }
                if (null != e.isReligious && e.hasOwnProperty("isReligious") && "boolean" != typeof e.isReligious)
                    return "isReligious: boolean expected";
                if (null != e.artistType && e.hasOwnProperty("artistType"))
                    switch (e.artistType) {
                        default:
                            return "artistType: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                    }
                if (null != e.artistGender && e.hasOwnProperty("artistGender"))
                    switch (e.artistGender) {
                        default:
                            return "artistGender: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                    }
                return null
            }
            ,
            c.fromObject = function (e) {
                if (e instanceof p.src.Album)
                    return e;
                var n = new p.src.Album;
                if (null != e.albumId && (n.albumId = String(e.albumId)),
                    null != e.artistId && (n.artistId = String(e.artistId)),
                    null != e.albumName && (n.albumName = String(e.albumName)),
                    null != e.songCount && (n.songCount = 0 | e.songCount),
                    null != e.isExclusive && (n.isExclusive = Boolean(e.isExclusive)),
                    null != e.isPodcast && (n.isPodcast = Boolean(e.isPodcast)),
                    null != e.releaseDate && (n.releaseDate = String(e.releaseDate)),
                    null != e.isExplicit && (n.isExplicit = Boolean(e.isExplicit)),
                    null != e.coverArtId && (n.coverArtId = String(e.coverArtId)),
                    null != e.artistName && (n.artistName = String(e.artistName)),
                    null != e.albumPlays && (n.albumPlays = e.albumPlays >>> 0),
                    null != e.artistPlays && (n.artistPlays = e.artistPlays >>> 0),
                    e.keywords) {
                    if (!Array.isArray(e.keywords))
                        throw TypeError(".src.Album.keywords: array expected");
                    n.keywords = [];
                    for (var s = 0; s < e.keywords.length; ++s)
                        n.keywords[s] = String(e.keywords[s])
                }
                if (null != e.discardArtist && (n.discardArtist = Boolean(e.discardArtist)),
                    null != e.description && (n.description = String(e.description)),
                    null != e.isAudiobook && (n.isAudiobook = Boolean(e.isAudiobook)),
                    null != e.disableMoreLikeThis && (n.disableMoreLikeThis = Boolean(e.disableMoreLikeThis)),
                    null != e.isAtmos && (n.isAtmos = Boolean(e.isAtmos)),
                    e.songOrder) {
                    if (!Array.isArray(e.songOrder))
                        throw TypeError(".src.Album.songOrder: array expected");
                    for (n.songOrder = [],
                        s = 0; s < e.songOrder.length; ++s)
                        n.songOrder[s] = String(e.songOrder[s])
                }
                switch (null != e.isReligious && (n.isReligious = Boolean(e.isReligious)),
                e.artistType) {
                    case "INDIVIDUAL":
                    case 0:
                        n.artistType = 0;
                        break;
                    case "BAND":
                    case 1:
                        n.artistType = 1;
                        break;
                    case "COLLAB":
                    case 2:
                        n.artistType = 2;
                        break;
                    case "BRAND":
                    case 3:
                        n.artistType = 3
                }
                switch (e.artistGender) {
                    case "OTHER":
                    case 0:
                        n.artistGender = 0;
                        break;
                    case "MALE":
                    case 1:
                        n.artistGender = 1;
                        break;
                    case "FEMALE":
                    case 2:
                        n.artistGender = 2
                }
                return n
            }
            ,
            c.toObject = function (e, n) {
                n || (n = {});
                var s = {};
                if ((n.arrays || n.defaults) && (s.keywords = [],
                    s.songOrder = []),
                    n.defaults && (s.albumId = "",
                        s.artistId = "",
                        s.albumName = "",
                        s.songCount = 0,
                        s.isExclusive = !1,
                        s.isPodcast = !1,
                        s.releaseDate = "",
                        s.isExplicit = !1,
                        s.coverArtId = "",
                        s.artistName = "",
                        s.albumPlays = 0,
                        s.artistPlays = 0,
                        s.discardArtist = !1,
                        s.description = "",
                        s.isAudiobook = !1,
                        s.disableMoreLikeThis = !1,
                        s.isAtmos = !1,
                        s.isReligious = !1,
                        s.artistType = n.enums === String ? "INDIVIDUAL" : 0,
                        s.artistGender = n.enums === String ? "OTHER" : 0),
                    null != e.albumId && e.hasOwnProperty("albumId") && (s.albumId = e.albumId),
                    null != e.artistId && e.hasOwnProperty("artistId") && (s.artistId = e.artistId),
                    null != e.albumName && e.hasOwnProperty("albumName") && (s.albumName = e.albumName),
                    null != e.songCount && e.hasOwnProperty("songCount") && (s.songCount = e.songCount),
                    null != e.isExclusive && e.hasOwnProperty("isExclusive") && (s.isExclusive = e.isExclusive),
                    null != e.isPodcast && e.hasOwnProperty("isPodcast") && (s.isPodcast = e.isPodcast),
                    null != e.releaseDate && e.hasOwnProperty("releaseDate") && (s.releaseDate = e.releaseDate),
                    null != e.isExplicit && e.hasOwnProperty("isExplicit") && (s.isExplicit = e.isExplicit),
                    null != e.coverArtId && e.hasOwnProperty("coverArtId") && (s.coverArtId = e.coverArtId),
                    null != e.artistName && e.hasOwnProperty("artistName") && (s.artistName = e.artistName),
                    null != e.albumPlays && e.hasOwnProperty("albumPlays") && (s.albumPlays = e.albumPlays),
                    null != e.artistPlays && e.hasOwnProperty("artistPlays") && (s.artistPlays = e.artistPlays),
                    e.keywords && e.keywords.length) {
                    s.keywords = [];
                    for (var l = 0; l < e.keywords.length; ++l)
                        s.keywords[l] = e.keywords[l]
                }
                if (null != e.discardArtist && e.hasOwnProperty("discardArtist") && (s.discardArtist = e.discardArtist),
                    null != e.description && e.hasOwnProperty("description") && (s.description = e.description),
                    null != e.isAudiobook && e.hasOwnProperty("isAudiobook") && (s.isAudiobook = e.isAudiobook),
                    null != e.disableMoreLikeThis && e.hasOwnProperty("disableMoreLikeThis") && (s.disableMoreLikeThis = e.disableMoreLikeThis),
                    null != e.isAtmos && e.hasOwnProperty("isAtmos") && (s.isAtmos = e.isAtmos),
                    e.songOrder && e.songOrder.length)
                    for (s.songOrder = [],
                        l = 0; l < e.songOrder.length; ++l)
                        s.songOrder[l] = e.songOrder[l];
                return null != e.isReligious && e.hasOwnProperty("isReligious") && (s.isReligious = e.isReligious),
                    null != e.artistType && e.hasOwnProperty("artistType") && (s.artistType = n.enums === String ? p.src.ArtistType[e.artistType] : e.artistType),
                    null != e.artistGender && e.hasOwnProperty("artistGender") && (s.artistGender = n.enums === String ? p.src.ArtistGender[e.artistGender] : e.artistGender),
                    s
            }
            ,
            c.prototype.toJSON = function () {
                return this.constructor.toObject(this, t.util.toJSONOptions)
            }
            ,
            c
    }(),
    m.ResponseCommonFields = function () {
        function c(u) {
            if (u)
                for (var e = Object.keys(u), n = 0; n < e.length; ++n)
                    null != u[e[n]] && (this[e[n]] = u[e[n]])
        }
        return c.prototype.error = null,
            c.create = function (e) {
                return new c(e)
            }
            ,
            c.encode = function (e, n) {
                return n || (n = a.create()),
                    null != e.error && Object.hasOwnProperty.call(e, "error") && p.src.ResponseCommonFields.Error.encode(e.error, n.uint32(10).fork()).ldelim(),
                    n
            }
            ,
            c.encodeDelimited = function (e, n) {
                return this.encode(e, n).ldelim()
            }
            ,
            c.decode = function (e, n) {
                e instanceof r || (e = r.create(e));
                for (var s = void 0 === n ? e.len : e.pos + n, l = new p.src.ResponseCommonFields; e.pos < s;) {
                    var k = e.uint32();
                    k >>> 3 == 1 ? l.error = p.src.ResponseCommonFields.Error.decode(e, e.uint32()) : e.skipType(7 & k)
                }
                return l
            }
            ,
            c.decodeDelimited = function (e) {
                return e instanceof r || (e = new r(e)),
                    this.decode(e, e.uint32())
            }
            ,
            c.verify = function (e) {
                if ("object" != typeof e || null === e)
                    return "object expected";
                if (null != e.error && e.hasOwnProperty("error")) {
                    var n = p.src.ResponseCommonFields.Error.verify(e.error);
                    if (n)
                        return "error." + n
                }
                return null
            }
            ,
            c.fromObject = function (e) {
                if (e instanceof p.src.ResponseCommonFields)
                    return e;
                var n = new p.src.ResponseCommonFields;
                if (null != e.error) {
                    if ("object" != typeof e.error)
                        throw TypeError(".src.ResponseCommonFields.error: object expected");
                    n.error = p.src.ResponseCommonFields.Error.fromObject(e.error)
                }
                return n
            }
            ,
            c.toObject = function (e, n) {
                n || (n = {});
                var s = {};
                return n.defaults && (s.error = null),
                    null != e.error && e.hasOwnProperty("error") && (s.error = p.src.ResponseCommonFields.Error.toObject(e.error, n)),
                    s
            }
            ,
            c.prototype.toJSON = function () {
                return this.constructor.toObject(this, t.util.toJSONOptions)
            }
            ,
            c.Error = function () {
                function u(e) {
                    if (e)
                        for (var n = Object.keys(e), s = 0; s < n.length; ++s)
                            null != e[n[s]] && (this[n[s]] = e[n[s]])
                }
                return u.prototype.message = "",
                    u.prototype.code = 0,
                    u.create = function (n) {
                        return new u(n)
                    }
                    ,
                    u.encode = function (n, s) {
                        return s || (s = a.create()),
                            null != n.message && Object.hasOwnProperty.call(n, "message") && s.uint32(10).string(n.message),
                            null != n.code && Object.hasOwnProperty.call(n, "code") && s.uint32(16).int32(n.code),
                            s
                    }
                    ,
                    u.encodeDelimited = function (n, s) {
                        return this.encode(n, s).ldelim()
                    }
                    ,
                    u.decode = function (n, s) {
                        n instanceof r || (n = r.create(n));
                        for (var l = void 0 === s ? n.len : n.pos + s, k = new p.src.ResponseCommonFields.Error; n.pos < l;) {
                            var b = n.uint32();
                            switch (b >>> 3) {
                                case 1:
                                    k.message = n.string();
                                    break;
                                case 2:
                                    k.code = n.int32();
                                    break;
                                default:
                                    n.skipType(7 & b)
                            }
                        }
                        return k
                    }
                    ,
                    u.decodeDelimited = function (n) {
                        return n instanceof r || (n = new r(n)),
                            this.decode(n, n.uint32())
                    }
                    ,
                    u.verify = function (n) {
                        return "object" != typeof n || null === n ? "object expected" : null != n.message && n.hasOwnProperty("message") && !d.isString(n.message) ? "message: string expected" : null != n.code && n.hasOwnProperty("code") && !d.isInteger(n.code) ? "code: integer expected" : null
                    }
                    ,
                    u.fromObject = function (n) {
                        if (n instanceof p.src.ResponseCommonFields.Error)
                            return n;
                        var s = new p.src.ResponseCommonFields.Error;
                        return null != n.message && (s.message = String(n.message)),
                            null != n.code && (s.code = 0 | n.code),
                            s
                    }
                    ,
                    u.toObject = function (n, s) {
                        s || (s = {});
                        var l = {};
                        return s.defaults && (l.message = "",
                            l.code = 0),
                            null != n.message && n.hasOwnProperty("message") && (l.message = n.message),
                            null != n.code && n.hasOwnProperty("code") && (l.code = n.code),
                            l
                    }
                    ,
                    u.prototype.toJSON = function () {
                        return this.constructor.toObject(this, t.util.toJSONOptions)
                    }
                    ,
                    u
            }(),
            c
    }(),
    m)

    module.exports = p