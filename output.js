//Tue Aug 27 2024 14:17:41 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const $ = new Env("联想智选签到");
const {
  log
} = console;
const cryptojs = require("crypto-js");
const Notify = 1;
let scriptVersion = "1.1.0";
const _0x206e53 = function () {
  let _0xcedcff = true;
  return function (_0x3c89b7, _0x1697af) {
    const _0x320ca6 = _0xcedcff ? function () {
      if (_0x1697af) {
        const _0x79dba9 = _0x1697af.apply(_0x3c89b7, arguments);
        _0x1697af = null;
        return _0x79dba9;
      }
    } : function () {};
    _0xcedcff = false;
    return _0x320ca6;
  };
}();
const _0x4ee203 = _0x206e53(this, function () {
  const _0x4cf874 = function () {};
  let _0x338a26;
  try {
    const _0x43d8ee = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x338a26 = _0x43d8ee();
  } catch (_0x49e009) {
    _0x338a26 = window;
  }
  if (!_0x338a26.console) {
    _0x338a26.console = function (_0x29fffa) {
      const _0x1bb666 = {
        log: _0x29fffa,
        warn: _0x29fffa,
        debug: _0x29fffa,
        info: _0x29fffa,
        error: _0x29fffa,
        exception: _0x29fffa,
        table: _0x29fffa,
        trace: _0x29fffa
      };
      return _0x1bb666;
    }(_0x4cf874);
  } else {
    _0x338a26.console.log = _0x4cf874;
    _0x338a26.console.warn = _0x4cf874;
    _0x338a26.console.debug = _0x4cf874;
    _0x338a26.console.info = _0x4cf874;
    _0x338a26.console.error = _0x4cf874;
    _0x338a26.console.exception = _0x4cf874;
    _0x338a26.console.table = _0x4cf874;
    _0x338a26.console.trace = _0x4cf874;
  }
});
_0x4ee203();
let scriptVersionLatest = "";
let lxzxApp = process.env.lxzxApp;
let lxzxAppArr = [];
let lxzxBaseinfo = process.env.lxzxBaseinfo;
let lxzxBaseinfoArr = [];
let data = "";
let msg = "";
let baseInfo = "eyJpbWVpIjoiMTY1NDA1MDY3NTI4Mjc5ODciLCJwaG9uZWJyYW5kIjoiWGlhb21pIiwicGhvbmVNb2RlbCI6Ik1JIDgiLCJwIjoiMiIsIm9haWQiOiI4MzA4NWYzZDljODlkZWE4IiwiYXBwVmVyc2lvbiI6IlY1LjMuNyIsInBob25laW5jcmVtZW50YWwiOiIyMC45LjQiLCJzbURldmljZUlkIjoiQm5MRFdZN2VKOGwraWx2SjZPbEpYV0NsR3dvcHhjNlBlS1Rqd040ejh3Rk1XOElOTGtqbUxCOXZzbldJbUJUY1gyUjlSWTVVV2NDWWppSGN5MmVEd0N3PT0iLCJwaG9uZWRpc3BsYXkiOiJRS1ExLjE5MDgyOC4wMDIgdGVzdC1rZXlzIiwicGhvbmVNYW51ZmFjdHVyZXIiOiJYaWFvbWkiLCJsZW5vdm9DbHViQ2hhbm5lbCI6Im9mZmljaWFsIiwibG9naW5OYW1lIjoiMTUyODU0NDI4MTEiLCJwaG9uZXByb2R1Y3QiOiJkaXBwZXIiLCJzeXN0ZW1WZXJzaW9uIjoiMTAiLCJhbmRyb2lkc2RrdmVyc2lvbiI6IjI5In0=";
let baseInfoArr = "";
let infos = "";
let imei = "";
let lpsutgt = "";
let lpsutgt2 = "";
let lenovoid = "";
let sessionid = "";
let token = "";
let name = "";
let ledou = 0;
let refreshBack = 0;
let loginBack = 0;
!(async () => {
  if (!(await Envs())) {
    return;
  } else {
    log("\n\n=============================================    \n脚本执行 - 北京时间(UTC+8)：" + new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 28800000).toLocaleString() + " \n=============================================\n");
    log("作者：临渊");
    log("库地址：https://github.com/LinYuanovo/scripts.git");
    await getVersion();
    log("\n============ 当前版本：" + scriptVersion + "，最新版本：" + scriptVersionLatest + " ============");
    log("\n=================== 共找到 " + lxzxAppArr.length + " 个账号 ===================");
    for (let _0x2e869d = 0; _0x2e869d < lxzxAppArr.length; _0x2e869d++) {
      let _0x443ca1 = _0x2e869d + 1;
      log("\n========= 开始【第 " + _0x443ca1 + " 个账号】=========\n");
      data = lxzxAppArr[_0x2e869d].split("&");
      lxzxBaseinfo = lxzxBaseinfoArr[_0x2e869d];
      msg += "\n第" + _0x443ca1 + "个账号运行结果：";
      if (lxzxBaseinfo) {
        baseInfo = lxzxBaseinfo;
      }
      baseInfoArr = cryptojs.enc.Base64.parse(baseInfo);
      infos = JSON.parse(baseInfoArr.toString(cryptojs.enc.Utf8));
      imei = infos.imei;
      await login();
      await $.wait(2000);
      if (loginBack) {
        await refreshLpsutgt(lpsutgt);
        await $.wait(2000);
        if (refreshBack) {
          await getInfo(lpsutgt2);
          await $.wait(2000);
          await getUserInfo(sessionid, token, lenovoid);
          await $.wait(2000);
          await doSign(sessionid, token, lenovoid);
          await $.wait(2000);
          await getUserInfo(sessionid, token, lenovoid);
          await $.wait(2000);
          msg += "\n账号[" + name + "]乐豆余额为：" + ledou;
        }
      }
    }
    await SendMsg(msg);
  }
})().catch(_0xa3d898 => log(_0xa3d898)).finally(() => $.done());
function login(_0x53f9f0 = 3000) {
  return new Promise(_0x4571c8 => {
    const _0x2d538f = {
      url: "https://uss.lenovomm.com/authen/1.2/tgt/user/get?msisdn=" + data[0] + "&lang=zh-CN-%23Hans&source=android%3Acom.lenovo.club.app-V5.3.7&deviceidtype=mac&deviceid=" + imei + "&devicecategory=unknown&devicevendor=" + infos.phoneManufacturer + "&devicefamily=unknown&devicemodel=" + infos.phoneModel + "&osversion=" + infos.systemVersion + "&osname=Android&password=" + data[1],
      headers: {},
      body: ""
    };
    _0x2d538f.headers.Authorization = "";
    _0x2d538f.headers.BaseInfo = "" + baseInfo;
    _0x2d538f.headers.unique = "" + imei;
    _0x2d538f.headers.token = "";
    _0x2d538f.headers["Content-Type"] = "text/json";
    _0x2d538f.headers.Host = "api.club.lenovo.cn";
    _0x2d538f.headers["User-Agent"] = "Apache-HttpClient/UNAVAILABLE (java 1.5)";
    $.post(_0x2d538f, async (_0x29ee30, _0x20ceec, _0x144c50) => {
      try {
        lpsutgt = _0x144c50.match(/<Value>(.+?)<\/Value>/)[1];
        if (lpsutgt) {
          loginBack = 1;
        } else {
          loginBack = 0;
        }
      } catch (_0x17cecb) {
        log(_0x17cecb);
      } finally {
        _0x4571c8();
      }
    }, _0x53f9f0);
  });
}
function refreshLpsutgt(_0x5ea1bb) {
  return new Promise(_0x561948 => {
    const _0x75e83b = {
      Authorization: "",
      BaseInfo: "" + baseInfo,
      token: "",
      "User-Agent": "Apache-HttpClient/UNAVAILABLE (java 1.5)"
    };
    const _0x45477f = {
      url: "https://uss.lenovomm.com/authen/1.2/st/getbycredential?source=android%3Acom.lenovo.club.app-V5.3.7&lang=zh-CN&lpsutgt=" + _0x5ea1bb + "&realm=club.lenovo.com.cn&packagename=com.lenovo.club.app&packagesign=64906dcc16473198&appname=%E8%81%94%E6%83%B3%E6%99%BA%E9%80%89",
      headers: _0x75e83b
    };
    $.get(_0x45477f, async (_0x4ec011, _0x30ed5c, _0x25cb8f) => {
      try {
        lpsutgt2 = _0x25cb8f.match(/<Value>(.+?)<\/Value>/)[1];
        if (lpsutgt2) {
          refreshBack = 1;
        } else {
          log("刷新lpsutgt失败，退出");
          refreshBack = 0;
        }
      } catch (_0x3df143) {
        log(_0x3df143);
      } finally {
        _0x561948();
      }
    });
  });
}
function getInfo(_0x38afb9) {
  return new Promise(_0x50c234 => {
    let _0x2bf8b5 = "{\"sessionid\":\"Lenovosso " + _0x38afb9 + "\",\"time\":\"" + timestampMs() + "\"}";
    let _0x30bf7f = aesEncrypto(_0x2bf8b5);
    const _0x21c192 = {
      Host: "api.club.lenovo.cn",
      Authorization: "Lenovosso " + _0x38afb9,
      itemid: "1",
      sversion: "0",
      membertype: "0",
      "Accept-Encoding": "gzip,deflate",
      "X-Lenovo-APPID": "1",
      Connection: "Keep-Alive",
      versionCode: "1000082",
      BaseInfo: "" + baseInfo,
      unique: "" + imei,
      token: "" + _0x38afb9,
      "User-Agent": "Apache-HttpClient/UNAVAILABLE (java 1.5)"
    };
    const _0x4d7a77 = {
      headers: _0x21c192,
      url: "https://api.club.lenovo.cn/users/getSessionID?s=" + _0x30bf7f
    };
    $.get(_0x4d7a77, async (_0x1a06de, _0x2eb0c8, _0x227051) => {
      try {
        let _0x17cc69 = JSON.parse(_0x227051);
        if (_0x17cc69.status == 0) {
          token = _0x17cc69.res.token;
          sessionid = _0x17cc69.res.sessionid;
          lenovoid = _0x17cc69.res.lenovoid;
        } else {
          log("获取关键信息失败");
        }
      } catch (_0x4b851f) {
        log(_0x4b851f);
      } finally {
        _0x50c234();
      }
    });
  });
}
function getUserInfo(_0x3be316, _0x114b19, _0x4a1b19) {
  return new Promise(_0x3e9298 => {
    let _0x3ef33a = "{\"uid\":\"" + _0x4a1b19 + "\",\"show_type\":\"0\",\"sessionid\":\"Lenovo " + _0x3be316 + "\",\"time\":\"" + timestampMs() + "\"}";
    let _0x46c9a1 = aesEncrypto(_0x3ef33a);
    const _0x2df370 = {
      Authorization: "Lenovo " + _0x3be316,
      itemid: "1",
      sversion: "0",
      "X-Lenovo-APPID": "1",
      Connection: "Keep-Alive",
      versionCode: "1000082",
      BaseInfo: "" + baseInfo,
      unique: "" + imei,
      token: "" + _0x114b19,
      "User-Agent": "Apache-HttpClient/UNAVAILABLE (java 1.5)"
    };
    const _0x5082d3 = {
      url: "https://api.club.lenovo.cn/users/show?s=" + _0x46c9a1,
      headers: _0x2df370
    };
    $.get(_0x5082d3, async (_0x5753d1, _0x58ce89, _0x5dbbb7) => {
      try {
        let _0x549c70 = JSON.parse(_0x5dbbb7);
        if (_0x549c70.status == 0) {
          name = _0x549c70.res.nickname;
          ledou = _0x549c70.res.ledou_user_amount;
        } else {
          log("获取个人信息失败");
        }
      } catch (_0x40f5f3) {
        log(_0x40f5f3);
      } finally {
        _0x3e9298();
      }
    });
  });
}
function doSign(_0x5be007, _0x55c587, _0x1219b0) {
  return new Promise(_0x3047fb => {
    let _0xb0a983 = "{\"uid\":\"" + _0x1219b0 + "\",\"imei\":\"" + imei + "\",\"source\":\"0\",\"sessionid\":\"Lenovo " + _0x5be007 + "\",\"time\":\"" + timestampMs() + "\"}";
    let _0x32c51f = aesEncrypto(_0xb0a983);
    const _0x2ebd5d = {
      Authorization: "Lenovo " + _0x5be007,
      itemid: "1",
      sversion: "0",
      "X-Lenovo-APPID": "1",
      Connection: "Keep-Alive",
      "Content-Type": "text/json",
      versionCode: "1000082",
      BaseInfo: "" + baseInfo,
      unique: "" + imei,
      token: "" + _0x55c587,
      "User-Agent": "Apache-HttpClient/UNAVAILABLE (java 1.5)"
    };
    const _0x214d38 = {
      url: "https://api.club.lenovo.cn/signin/v2/add",
      headers: _0x2ebd5d,
      body: "" + _0x32c51f
    };
    $.post(_0x214d38, async (_0x27a91c, _0x2c9978, _0x1c4152) => {
      try {
        let _0x19b128 = JSON.parse(_0x1c4152);
        if (_0x19b128.status == 0 && _0x19b128.res.success == true) {
          log("账号[" + name + "]签到成功，连续签到：" + _0x19b128.res.continueCount + "天，获得：" + _0x19b128.res.rewardTips);
          msg += "\n账号[" + name + "]签到成功，连续签到：" + _0x19b128.res.continueCount + "天，获得：" + _0x19b128.res.rewardTips;
        } else {
          if (_0x19b128.status == 0 && _0x19b128.res.success == false) {
            log("账号[" + name + "]签到失败，今日已签到");
            msg += "\n账号[" + name + "]签到失败，今日已签到";
          } else {
            log("签到失败");
          }
        }
      } catch (_0x490138) {
        log(_0x490138);
      } finally {
        _0x3047fb();
      }
    });
  });
}
async function Envs() {
  if (lxzxBaseinfo) {
    if (lxzxBaseinfo.indexOf("@") != -1) {
      lxzxBaseinfo.split("@").forEach(_0x5722f1 => {
        lxzxBaseinfoArr.push(_0x5722f1);
      });
    } else {
      if (lxzxBaseinfo.indexOf("\n") != -1) {
        lxzxBaseinfo.split("\n").forEach(_0x4107f0 => {
          lxzxBaseinfoArr.push(_0x4107f0);
        });
      } else {
        lxzxBaseinfoArr.push(lxzxBaseinfo);
      }
    }
  }
  if (lxzxApp) {
    if (lxzxApp.indexOf("@") != -1) {
      lxzxApp.split("@").forEach(_0x538742 => {
        lxzxAppArr.push(_0x538742);
      });
    } else {
      if (lxzxApp.indexOf("\n") != -1) {
        lxzxApp.split("\n").forEach(_0xf66b27 => {
          lxzxAppArr.push(_0xf66b27);
        });
      } else {
        lxzxAppArr.push(lxzxApp);
      }
    }
  } else {
    log("\n 【" + $.name + "】：未填写变量 lxzxApp");
    return;
  }
  return true;
}
async function SendMsg(_0xaa5391) {
  if (!_0xaa5391) {
    return;
  }
  if ($.isNode()) {
    var _0x265911 = require("./sendNotify");
    await _0x265911.sendNotify($.name, _0xaa5391);
  } else {
    $.msg(_0xaa5391);
  }
}
function randomString(_0x2eb7fc) {
  _0x2eb7fc = _0x2eb7fc || 32;
  var _0x14af3d = "abcdef1234567890",
    _0x4aae89 = _0x14af3d.length,
    _0x4c8f38 = "";
  for (i = 0; i < _0x2eb7fc; i++) {
    _0x4c8f38 += _0x14af3d.charAt(Math.floor(Math.random() * _0x4aae89));
  }
  return _0x4c8f38;
}
function randomInt(_0x4c9c0e, _0x34b7f6) {
  return Math.round(Math.random() * (_0x34b7f6 - _0x4c9c0e) + _0x4c9c0e);
}
function timestampMs() {
  return new Date().getTime();
}
function timestampS() {
  return Date.parse(new Date()) / 1000;
}
function poem(_0x3f585e = 3000) {
  return new Promise(_0x1dfbe1 => {
    const _0x3a92b3 = {
      url: "https://v1.jinrishici.com/all.json"
    };
    $.get(_0x3a92b3, async (_0x9df1d9, _0x5b2bd3, _0x4612af) => {
      try {
        _0x4612af = JSON.parse(_0x4612af);
        log(_0x4612af.content + "  \n————《" + _0x4612af.origin + "》" + _0x4612af.author);
      } catch (_0xc746d2) {
        log(_0xc746d2, _0x5b2bd3);
      } finally {
        _0x1dfbe1();
      }
    }, _0x3f585e);
  });
}
function modify() {
  fs.readFile("/ql/data/config/config.sh", "utf8", function (_0xf0ce66, _0x2d68c1) {
    if (_0xf0ce66) {
      return log("读取文件失败！" + _0xf0ce66);
    } else {
      var _0x1f2fb4 = _0x2d68c1.replace(/regular/g, string);
      fs.writeFile("/ql/data/config/config.sh", _0x1f2fb4, "utf8", function (_0x3731eb) {
        if (_0x3731eb) {
          return log(_0x3731eb);
        }
      });
    }
  });
}
function getVersion(_0x14a38a = 3000) {
  return new Promise(_0x164331 => {
    const _0xf83bed = {
      url: "https://raw.gh.fakev.cn/LinYuanovo/scripts/main/lxzx.js"
    };
    $.get(_0xf83bed, async (_0x431d29, _0x48fc5b, _0x693927) => {
      try {
        scriptVersionLatest = _0x693927.match(/scriptVersion = "([\d\.]+)"/)[1];
      } catch (_0x3cf03e) {
        $.logErr(_0x3cf03e, _0x48fc5b);
      } finally {
        _0x164331();
      }
    }, _0x14a38a);
  });
}
function aesEncrypto(_0x53898b) {
  let _0x27cd16 = cryptojs.enc.Utf8.parse("nihao_liu#zh*9@7");
  let _0x2f11eb = cryptojs.enc.Utf8.parse("A*8@Stii_jin)*%6");
  var _0x5390a2 = cryptojs.AES.encrypt(_0x53898b, _0x27cd16, {
    iv: _0x2f11eb,
    mode: cryptojs.mode.CBC,
    padding: cryptojs.pad.Pkcs7
  });
  return _0x5390a2.ciphertext.toString();
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = "POST";
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            this.initGotEnv(t);
            const {
              url: s,
              ...i
            } = t;
            this.got.post(s, i).then(t => {
              const {
                statusCode: s,
                statusCode: i,
                headers: r,
                body: o
              } = t;
              e(null, {
                status: s,
                statusCode: i,
                headers: r,
                body: o
              }, o);
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}