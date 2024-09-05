//Thu Sep 05 2024 02:27:46 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("霸王茶姬"),
  axios = require("axios"),
  {
    sendNotify
  } = require("./sendNotify"),
  SyncRequest = require("sync-request"),
  CryptoJS = require("crypto-js");
let notifyStr = "",
  appid = atob("d3hhZmVjNmY4NDIyY2IzNTdi");
(async () => {
  checkVersion("bwcj.js", "4769175bcc799465528b186fa05988a5");
  const _0x3241f0 = process.env.bwcj_ck;
  if (!_0x3241f0) {
    logAndNotify("bwcj_ck");
    return;
  }
  let _0x3ce007 = _0x3241f0.replaceAll("&", "\n").split("\n");
  for (let _0x54acab = 0; _0x54acab < _0x3ce007.length; _0x54acab++) {
    if (_0x3ce007[_0x54acab].indexOf("#") === -1) {
      logAndNotify("账号【" + (_0x54acab + 1) + "】 ck格式有变化，新版本需要有userId");
      continue;
    }
    const _0x412ca0 = _0x3ce007[_0x54acab].split("#")[0],
      _0x23ba63 = _0x3ce007[_0x54acab].split("#")[1];
    logAndNotify("🧐" + _0x23ba63 + "🧐");
    const _0x2c021f = await sendGetRequest("https://webapi2.qmai.cn/web/catering2-apiserver/crm/customer-center?appid=" + appid, _0x412ca0);
    if (!_0x2c021f.data.status) {
      logAndNotify("账号【" + (_0x54acab + 1) + "】 登录失败☹");
      continue;
    }
    const _0x173324 = new Date().getTime(),
      _0x5d7da5 = await sendPostRequest("https://webapi2.qmai.cn/web/cmk-center/sign/takePartInSign", _0x412ca0, {
        activityId: "947079313798000641",
        appid: appid,
        storeId: 49006,
        timestamp: _0x173324,
        signature: sgin(_0x173324, _0x23ba63),
        store_id: 49006
      });
    !_0x5d7da5.data.status && logAndNotify("账号【" + (_0x54acab + 1) + "】 签到失败：【" + _0x5d7da5.data.message + "】");
    const _0x5aecb4 = await sendPostRequest("https://webapi2.qmai.cn/web/cmk-center/sign/userSignStatistics", _0x412ca0, {
      activityId: "947079313798000641",
      appid: appid
    });
    _0x5aecb4.data.status && (logAndNotify("账号【" + (_0x54acab + 1) + "】 连续签到" + _0x5aecb4.data.data.signDays + "天"), _0x5aecb4.data.data.signStatus != 1 && logAndNotify("账号【" + (_0x54acab + 1) + "】 签到状态异常"));
    const _0x204761 = await sendGetRequest("https://webapi2.qmai.cn/web/catering2-apiserver/crm/customer-center?appid=" + appid, _0x412ca0);
    _0x204761.data.status && logAndNotify("账号【" + (_0x54acab + 1) + "】 积分：【" + _0x204761.data.data.customerAssertInfo.integral + "】");
    const _0x130228 = await sendPostRequest("https://webapi2.qmai.cn/web/cmk-center/sign/userReward", _0x412ca0, {
      activityId: "947079313798000641",
      appid: appid,
      pageNo: 1,
      pageSize: 30
    });
    if (_0x130228.data.status) {
      const _0x588bb4 = _0x130228.data.data.list;
      for (let _0x88cfbb = 0; _0x88cfbb < _0x588bb4.length; _0x88cfbb++) {
        _0x588bb4[_0x88cfbb].rewardType === 1 && logAndNotify("账号【" + (_0x54acab + 1) + "】 奖品领取时间【" + _0x588bb4[_0x88cfbb].date + "】【" + _0x588bb4[_0x88cfbb].rewardName + "】");
      }
    }
  }
})().catch(_0xc40b92 => {
  logAndNotify(_0xc40b92);
}).finally(() => {
  sendNotify("霸王茶姬", notifyStr);
  $.done();
});
function sendPostRequest(_0x3b002a, _0x6f1b93, _0x3d3467) {
  const _0x252980 = {
      scene: 1027,
      "Qm-From": "wechat",
      "store-id": 49006,
      "Qm-From-Type": "catering",
      Referer: "https://servicewechat.com/wxafec6f8422cb357b/175/page-frame.html"
    },
    _0x312e77 = {
      ..._0x252980,
      ...{
        "Qm-User-Token": _0x6f1b93
      }
    },
    _0x474813 = axios.create({
      headers: _0x312e77
    });
  return _0x474813.post(_0x3b002a, _0x3d3467);
}
function sendGetRequest(_0x13fa6f, _0x34dc9f) {
  const _0x59cd06 = {
      scene: 1027,
      "Qm-From": "wechat",
      "store-id": 49006,
      "Qm-From-Type": "catering",
      Referer: "https://servicewechat.com/wxafec6f8422cb357b/175/page-frame.html"
    },
    _0x134c45 = {
      ..._0x59cd06,
      ...{
        "Qm-User-Token": _0x34dc9f
      }
    },
    _0x5a7d1a = axios.create({
      headers: _0x134c45
    });
  return _0x5a7d1a.get(_0x13fa6f);
}
function logAndNotify(_0x415326) {
  1;
  $.log(_0x415326);
  notifyStr += _0x415326;
  notifyStr += "\n";
}
function sgin(_0x49b36b, _0x4c5e4b) {
  var _0x20cbb1 = "947079313798000641",
    _0x359690 = 49006,
    _0x3bd00f = _0x359690 ? _0x359690.toString() : undefined,
    _0x23d664 = {
      activityId: _0x20cbb1,
      sellerId: _0x3bd00f,
      timestamp: _0x49b36b,
      userId: _0x4c5e4b
    },
    _0x39b6ba = Object.keys(_0x23d664).sort(),
    _0x28ba7c = _0x39b6ba.reduce(function (_0x5557b6, _0x1ee6ab) {
      _0x5557b6[_0x1ee6ab] = _0x23d664[_0x1ee6ab];
      return _0x5557b6;
    }, {}),
    _0x5f57ca = Object.entries(_0x28ba7c).map(function (_0x180d02) {
      var [_0x4a2cc5, _0x4c787b] = _0x180d02;
      return _0x4a2cc5 + "=" + _0x4c787b;
    }).join("&") + "&key=" + _0x20cbb1.split("").reverse().join(""),
    _0x39b118 = CryptoJS.MD5(_0x5f57ca).toString(CryptoJS.enc.Hex).toUpperCase();
  return _0x39b118;
}
function Env(_0x1a9089, _0x1a33dd) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x1df87f {
    constructor(_0x4f6ccb) {
      this.env = _0x4f6ccb;
    }
    send(_0x41505c, _0x13a9c2 = "GET") {
      _0x41505c = "string" == typeof _0x41505c ? {
        url: _0x41505c
      } : _0x41505c;
      let _0x393825 = this.get;
      "POST" === _0x13a9c2 && (_0x393825 = this.post);
      return new Promise((_0x42e202, _0x1f4c57) => {
        _0x393825.call(this, _0x41505c, (_0x508d9d, _0x32a2a2, _0x416471) => {
          _0x508d9d ? _0x1f4c57(_0x508d9d) : _0x42e202(_0x32a2a2);
        });
      });
    }
    get(_0x318308) {
      return this.send.call(this.env, _0x318308);
    }
    post(_0x38675c) {
      return this.send.call(this.env, _0x38675c, "POST");
    }
  }
  return new class {
    constructor(_0x5987fb, _0xa599f) {
      this.name = _0x5987fb;
      this.http = new _0x1df87f(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0xa599f);
      this.log("", "🔔" + this.name + ", 开始!");
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
    toObj(_0x3b150d, _0x4e6113 = null) {
      try {
        return JSON.parse(_0x3b150d);
      } catch {
        return _0x4e6113;
      }
    }
    toStr(_0x349b53, _0x5d4d5e = null) {
      try {
        return JSON.stringify(_0x349b53);
      } catch {
        return _0x5d4d5e;
      }
    }
    getjson(_0xcceefa, _0x59f1af) {
      let _0x5cfef8 = _0x59f1af;
      const _0x24d761 = this.getdata(_0xcceefa);
      if (_0x24d761) {
        try {
          _0x5cfef8 = JSON.parse(this.getdata(_0xcceefa));
        } catch {}
      }
      return _0x5cfef8;
    }
    setjson(_0x17b651, _0x7f18bb) {
      try {
        return this.setdata(JSON.stringify(_0x17b651), _0x7f18bb);
      } catch {
        return !1;
      }
    }
    getScript(_0x2d1a49) {
      return new Promise(_0x25d037 => {
        this.get({
          url: _0x2d1a49
        }, (_0x4c39fa, _0x3c2bd9, _0x531db2) => _0x25d037(_0x531db2));
      });
    }
    runScript(_0x3ea8c2, _0xbc89e9) {
      return new Promise(_0x5c2781 => {
        let _0x495311 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x495311 = _0x495311 ? _0x495311.replace(/\n/g, "").trim() : _0x495311;
        let _0x31ad66 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x31ad66 = _0x31ad66 ? 1 * _0x31ad66 : 20;
        _0x31ad66 = _0xbc89e9 && _0xbc89e9.timeout ? _0xbc89e9.timeout : _0x31ad66;
        const [_0x28c3fc, _0x25e2b4] = _0x495311.split("@"),
          _0x27b181 = {
            url: "http://" + _0x25e2b4 + "/v1/scripting/evaluate",
            body: {
              script_text: _0x3ea8c2,
              mock_type: "cron",
              timeout: _0x31ad66
            },
            headers: {
              "X-Key": _0x28c3fc,
              Accept: "*/*"
            }
          };
        this.post(_0x27b181, (_0x59078a, _0xeea1b0, _0x1b5bb2) => _0x5c2781(_0x1b5bb2));
      }).catch(_0x1015d4 => this.logErr(_0x1015d4));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x103076 = this.path.resolve(this.dataFile),
          _0x2cd42c = this.path.resolve(process.cwd(), this.dataFile),
          _0x3a3239 = this.fs.existsSync(_0x103076),
          _0x24cbed = !_0x3a3239 && this.fs.existsSync(_0x2cd42c);
        if (!_0x3a3239 && !_0x24cbed) {
          return {};
        }
        {
          const _0x1e833f = _0x3a3239 ? _0x103076 : _0x2cd42c;
          try {
            return JSON.parse(this.fs.readFileSync(_0x1e833f));
          } catch (_0x395ea5) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x1d6a6f = this.path.resolve(this.dataFile),
          _0x51d688 = this.path.resolve(process.cwd(), this.dataFile),
          _0x14b314 = this.fs.existsSync(_0x1d6a6f),
          _0x75b541 = !_0x14b314 && this.fs.existsSync(_0x51d688),
          _0x4523e8 = JSON.stringify(this.data);
        _0x14b314 ? this.fs.writeFileSync(_0x1d6a6f, _0x4523e8) : _0x75b541 ? this.fs.writeFileSync(_0x51d688, _0x4523e8) : this.fs.writeFileSync(_0x1d6a6f, _0x4523e8);
      }
    }
    lodash_get(_0x59dc87, _0x2be60a, _0x267c11) {
      const _0x2644f3 = _0x2be60a.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x3d1d10 = _0x59dc87;
      for (const _0x49b93e of _0x2644f3) if (_0x3d1d10 = Object(_0x3d1d10)[_0x49b93e], void 0 === _0x3d1d10) {
        return _0x267c11;
      }
      return _0x3d1d10;
    }
    lodash_set(_0x4486d6, _0x299a7c, _0x2e1c09) {
      return Object(_0x4486d6) !== _0x4486d6 ? _0x4486d6 : (Array.isArray(_0x299a7c) || (_0x299a7c = _0x299a7c.toString().match(/[^.[\]]+/g) || []), _0x299a7c.slice(0, -1).reduce((_0x5c1ded, _0x549feb, _0x1b9938) => Object(_0x5c1ded[_0x549feb]) === _0x5c1ded[_0x549feb] ? _0x5c1ded[_0x549feb] : _0x5c1ded[_0x549feb] = Math.abs(_0x299a7c[_0x1b9938 + 1]) >> 0 == +_0x299a7c[_0x1b9938 + 1] ? [] : {}, _0x4486d6)[_0x299a7c[_0x299a7c.length - 1]] = _0x2e1c09, _0x4486d6);
    }
    getdata(_0x4cb845) {
      let _0x11debc = this.getval(_0x4cb845);
      if (/^@/.test(_0x4cb845)) {
        const [, _0x163bfd, _0x4a0ba6] = /^@(.*?)\.(.*?)$/.exec(_0x4cb845),
          _0x6bdda0 = _0x163bfd ? this.getval(_0x163bfd) : "";
        if (_0x6bdda0) {
          try {
            const _0x449004 = JSON.parse(_0x6bdda0);
            _0x11debc = _0x449004 ? this.lodash_get(_0x449004, _0x4a0ba6, "") : _0x11debc;
          } catch (_0x10cbd6) {
            _0x11debc = "";
          }
        }
      }
      return _0x11debc;
    }
    setdata(_0x3a904a, _0x4a1ae7) {
      let _0x1e9130 = !1;
      if (/^@/.test(_0x4a1ae7)) {
        const [, _0x40f17c, _0x4a200f] = /^@(.*?)\.(.*?)$/.exec(_0x4a1ae7),
          _0x54eed4 = this.getval(_0x40f17c),
          _0x443684 = _0x40f17c ? "null" === _0x54eed4 ? null : _0x54eed4 || "{}" : "{}";
        try {
          const _0x5d2dee = JSON.parse(_0x443684);
          this.lodash_set(_0x5d2dee, _0x4a200f, _0x3a904a);
          _0x1e9130 = this.setval(JSON.stringify(_0x5d2dee), _0x40f17c);
        } catch (_0xe8412f) {
          const _0xd15469 = {};
          this.lodash_set(_0xd15469, _0x4a200f, _0x3a904a);
          _0x1e9130 = this.setval(JSON.stringify(_0xd15469), _0x40f17c);
        }
      } else {
        _0x1e9130 = this.setval(_0x3a904a, _0x4a1ae7);
      }
      return _0x1e9130;
    }
    getval(_0x4dbccc) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x4dbccc) : this.isQuanX() ? $prefs.valueForKey(_0x4dbccc) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x4dbccc]) : this.data && this.data[_0x4dbccc] || null;
    }
    setval(_0x30d344, _0x19652a) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x30d344, _0x19652a) : this.isQuanX() ? $prefs.setValueForKey(_0x30d344, _0x19652a) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x19652a] = _0x30d344, this.writedata(), !0) : this.data && this.data[_0x19652a] || null;
    }
    initGotEnv(_0x24c773) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x24c773 && (_0x24c773.headers = _0x24c773.headers ? _0x24c773.headers : {}, void 0 === _0x24c773.headers.Cookie && void 0 === _0x24c773.cookieJar && (_0x24c773.cookieJar = this.ckjar));
    }
    get(_0x2ca43d, _0x453e62 = () => {}) {
      _0x2ca43d.headers && (delete _0x2ca43d.headers["Content-Type"], delete _0x2ca43d.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x2ca43d.headers = _0x2ca43d.headers || {}, Object.assign(_0x2ca43d.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x2ca43d, (_0x52fc50, _0x5fe1af, _0x494323) => {
        !_0x52fc50 && _0x5fe1af && (_0x5fe1af.body = _0x494323, _0x5fe1af.statusCode = _0x5fe1af.status);
        _0x453e62(_0x52fc50, _0x5fe1af, _0x494323);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x2ca43d.opts = _0x2ca43d.opts || {}, Object.assign(_0x2ca43d.opts, {
        hints: !1
      })), $task.fetch(_0x2ca43d).then(_0x2ecf2f => {
        const {
          statusCode: _0x4375c1,
          statusCode: _0x510717,
          headers: _0x214004,
          body: _0x41be1a
        } = _0x2ecf2f;
        _0x453e62(null, {
          status: _0x4375c1,
          statusCode: _0x510717,
          headers: _0x214004,
          body: _0x41be1a
        }, _0x41be1a);
      }, _0x5b17e8 => _0x453e62(_0x5b17e8))) : this.isNode() && (this.initGotEnv(_0x2ca43d), this.got(_0x2ca43d).on("redirect", (_0x2071bc, _0x528a9e) => {
        try {
          if (_0x2071bc.headers["set-cookie"]) {
            const _0x2a1b1f = _0x2071bc.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x2a1b1f && this.ckjar.setCookieSync(_0x2a1b1f, null);
            _0x528a9e.cookieJar = this.ckjar;
          }
        } catch (_0x3c23c7) {
          this.logErr(_0x3c23c7);
        }
      }).then(_0x19dcdb => {
        const {
          statusCode: _0x4b30e3,
          statusCode: _0x463e11,
          headers: _0x43ea39,
          body: _0x2a283e
        } = _0x19dcdb;
        _0x453e62(null, {
          status: _0x4b30e3,
          statusCode: _0x463e11,
          headers: _0x43ea39,
          body: _0x2a283e
        }, _0x2a283e);
      }, _0x50398f => {
        const {
          message: _0x544810,
          response: _0x32662f
        } = _0x50398f;
        _0x453e62(_0x544810, _0x32662f, _0x32662f && _0x32662f.body);
      }));
    }
    post(_0x1c02e7, _0x307c33 = () => {}) {
      if (_0x1c02e7.body && _0x1c02e7.headers && !_0x1c02e7.headers["Content-Type"] && (_0x1c02e7.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x1c02e7.headers && delete _0x1c02e7.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x1c02e7.headers = _0x1c02e7.headers || {}, Object.assign(_0x1c02e7.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(_0x1c02e7, (_0x19fc57, _0x17da02, _0x4ef9e7) => {
          !_0x19fc57 && _0x17da02 && (_0x17da02.body = _0x4ef9e7, _0x17da02.statusCode = _0x17da02.status);
          _0x307c33(_0x19fc57, _0x17da02, _0x4ef9e7);
        });
      } else {
        if (this.isQuanX()) {
          _0x1c02e7.method = "POST";
          this.isNeedRewrite && (_0x1c02e7.opts = _0x1c02e7.opts || {}, Object.assign(_0x1c02e7.opts, {
            hints: !1
          }));
          $task.fetch(_0x1c02e7).then(_0x538619 => {
            const {
              statusCode: _0x11df2f,
              statusCode: _0x55104c,
              headers: _0x16af1e,
              body: _0x2e318
            } = _0x538619;
            _0x307c33(null, {
              status: _0x11df2f,
              statusCode: _0x55104c,
              headers: _0x16af1e,
              body: _0x2e318
            }, _0x2e318);
          }, _0x564316 => _0x307c33(_0x564316));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x1c02e7);
            const {
              url: _0x3bb069,
              ..._0x1babac
            } = _0x1c02e7;
            this.got.post(_0x3bb069, _0x1babac).then(_0x496588 => {
              const {
                statusCode: _0x26123e,
                statusCode: _0x274e7c,
                headers: _0x157b32,
                body: _0x1b095c
              } = _0x496588;
              _0x307c33(null, {
                status: _0x26123e,
                statusCode: _0x274e7c,
                headers: _0x157b32,
                body: _0x1b095c
              }, _0x1b095c);
            }, _0x25410e => {
              const {
                message: _0x353f82,
                response: _0x4fce66
              } = _0x25410e;
              _0x307c33(_0x353f82, _0x4fce66, _0x4fce66 && _0x4fce66.body);
            });
          }
        }
      }
    }
    time(_0x40b916, _0x50fc14 = null) {
      const _0x2df0f8 = _0x50fc14 ? new Date(_0x50fc14) : new Date();
      let _0x1481bd = {
        "M+": _0x2df0f8.getMonth() + 1,
        "d+": _0x2df0f8.getDate(),
        "H+": _0x2df0f8.getHours(),
        "m+": _0x2df0f8.getMinutes(),
        "s+": _0x2df0f8.getSeconds(),
        "q+": Math.floor((_0x2df0f8.getMonth() + 3) / 3),
        S: _0x2df0f8.getMilliseconds()
      };
      /(y+)/.test(_0x40b916) && (_0x40b916 = _0x40b916.replace(RegExp.$1, (_0x2df0f8.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x25794d in _0x1481bd) new RegExp("(" + _0x25794d + ")").test(_0x40b916) && (_0x40b916 = _0x40b916.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x1481bd[_0x25794d] : ("00" + _0x1481bd[_0x25794d]).substr(("" + _0x1481bd[_0x25794d]).length)));
      return _0x40b916;
    }
    msg(_0x73b1a8 = _0x1a9089, _0x5bce6d = "", _0x53b34f = "", _0x6e1904) {
      const _0x3563bb = _0x34a4fa => {
        if (!_0x34a4fa) {
          return _0x34a4fa;
        }
        if ("string" == typeof _0x34a4fa) {
          return this.isLoon() ? _0x34a4fa : this.isQuanX() ? {
            "open-url": _0x34a4fa
          } : this.isSurge() ? {
            url: _0x34a4fa
          } : void 0;
        }
        if ("object" == typeof _0x34a4fa) {
          if (this.isLoon()) {
            let _0x143998 = _0x34a4fa.openUrl || _0x34a4fa.url || _0x34a4fa["open-url"],
              _0x3c0197 = _0x34a4fa.mediaUrl || _0x34a4fa["media-url"];
            return {
              openUrl: _0x143998,
              mediaUrl: _0x3c0197
            };
          }
          if (this.isQuanX()) {
            let _0x47b8e4 = _0x34a4fa["open-url"] || _0x34a4fa.url || _0x34a4fa.openUrl,
              _0x390376 = _0x34a4fa["media-url"] || _0x34a4fa.mediaUrl;
            return {
              "open-url": _0x47b8e4,
              "media-url": _0x390376
            };
          }
          if (this.isSurge()) {
            let _0x57e99a = _0x34a4fa.url || _0x34a4fa.openUrl || _0x34a4fa["open-url"];
            return {
              url: _0x57e99a
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x73b1a8, _0x5bce6d, _0x53b34f, _0x3563bb(_0x6e1904)) : this.isQuanX() && $notify(_0x73b1a8, _0x5bce6d, _0x53b34f, _0x3563bb(_0x6e1904))), !this.isMuteLog) {
        let _0x227b29 = ["", "==============📣系统通知📣=============="];
        _0x227b29.push(_0x73b1a8);
        _0x5bce6d && _0x227b29.push(_0x5bce6d);
        _0x53b34f && _0x227b29.push(_0x53b34f);
        console.log(_0x227b29.join("\n"));
        this.logs = this.logs.concat(_0x227b29);
      }
    }
    log(..._0x13c24f) {
      _0x13c24f.length > 0 && (this.logs = [...this.logs, ..._0x13c24f]);
      console.log(_0x13c24f.join(this.logSeparator));
    }
    logErr(_0x5e1747, _0x454e05) {
      const _0x58e50d = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x58e50d ? this.log("", "❗️" + this.name + ", 错误!", _0x5e1747.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x5e1747);
    }
    wait(_0x456867) {
      return new Promise(_0x3694ad => setTimeout(_0x3694ad, _0x456867));
    }
    done(_0x5d81b9 = {}) {
      const _0x2e0b54 = new Date().getTime(),
        _0x568108 = (_0x2e0b54 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x568108 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x5d81b9);
    }
  }(_0x1a9089, _0x1a33dd);
}
function checkVersion(_0x5d19ec, _0x2d0228) {
  try {
    logAndNotify("文件md5：" + _0x2d0228);
    const _0x1c2507 = SyncRequest("GET", "https://checktoke.filegear-sg.me/api/update/check?fileName=" + _0x5d19ec + "&fileMd5=" + _0x2d0228),
      _0xc4c230 = JSON.parse(_0x1c2507.getBody("utf8"));
    _0xc4c230.code === 301 ? process.exit(0) : logAndNotify(_0xc4c230.data);
  } catch (_0x577e61) {
    logAndNotify("版本检查失败:", _0x577e61);
  }
}