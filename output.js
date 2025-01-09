//Thu Jan 09 2025 12:29:21 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x370b70 = new _0x3ebf60("smart汽车+"),
  _0x401cfb = require("https");
_0x401cfb.globalAgent.options.rejectUnauthorized = false;
let _0x43409e = "smart_car_plus",
  _0x411a73 = ["\n", "@", "&"];
const _0x17a3eb = require("fs");
let _0x50bf9b = (_0x370b70.isNode() ? process.env[_0x43409e] : _0x370b70.getdata(_0x43409e)) || "",
  _0x7d62a4 = [],
  _0x1b2611 = 0;
class _0x326765 {
  constructor(_0x50a412) {
    this.index = ++_0x1b2611;
    this.valid = false;
    try {
      if (_0x50a412?.["length"] === 2) [this.Authorization, this.token] = _0x50a412, this.Authorization = this.Authorization?.["replace"]("Bearer ", "");else {
        if (_0x50a412?.["length"] === 1) [this.refreshToken] = _0x50a412, this.refreshToken = this.refreshToken?.["replace"]("Bearer ", "");else {
          console.log("参数不完整：自己抓包 请求头里的 Id-Token");
        }
      }
    } catch (_0x5d83d7) {
      console.log("参数不完整：自己抓包 请求头里的 Id-Token");
    }
  }
  async ["taskApi"](_0x4d2217, _0x28ed8e, _0x4c3759, _0x11feac, _0x5f381f = {}) {
    let _0x5d7847 = null;
    try {
      let _0x17054f = {
        "url": _0x4c3759,
        "headers": {
          "Authorization": "Bearer " + this.Authorization,
          "Content-Type": "application/json; Charset=UTF-8",
          "id-token": this.token || "",
          ..._0x5f381f
        },
        "timeout": 60000
      };
      _0x11feac && (_0x17054f.body = _0x11feac);
      await _0xf04154(_0x28ed8e, _0x17054f).then(async _0x1021ba => {
        _0x1021ba.resp?.["statusCode"] == 200 ? _0x1021ba.resp?.["body"] ? _0x5d7847 = JSON.parse(_0x1021ba.resp.body) : console.log("账号[" + this.index + "]调用" + _0x28ed8e + "[" + _0x4d2217 + "]出错，返回为空") : console.log("账号[" + this.index + "]调用" + _0x28ed8e + "[" + _0x4d2217 + "]出错，返回状态码[" + (_0x1021ba.resp?.["statusCode"] || "") + "]", "返回结果：", _0x1021ba.resp?.["body"] || _0x1021ba?.["err"]);
      });
    } catch (_0x5202d4) {
      console.log(_0x5202d4);
    } finally {
      return Promise.resolve(_0x5d7847);
    }
  }
  async ["sign_statistics"]() {
    try {
      let _0x5a4bf0 = "sign_statistics",
        _0x199ad9 = "post",
        _0x22d22d = "https://eco-api.smart.cn/member-center/sign/toc/supplement/sign/statistics";
      const _0x40d0b9 = new Date(),
        _0x32caef = _0x40d0b9.getFullYear(),
        _0x46a822 = String(_0x40d0b9.getMonth() + 1).padStart(2, "0"),
        _0x590089 = _0x32caef + "-" + _0x46a822;
      let _0x553c1e = "{\"month\":\"" + _0x590089 + "\"}";
      await this.taskApi(_0x5a4bf0, _0x199ad9, _0x22d22d, _0x553c1e, {}).then(async _0x26070e => {
        if (_0x26070e?.["success"]) console.log("账号[" + this.index + "] 查询打卡信息成功，积分：" + (_0x26070e?.["data"]["pointsBalance"] || 0)), this.valid = true;else {
          console.log("账号[" + this.index + "] 查询打卡信息失败：" + (_0x26070e?.["msg"] || JSON.stringify(_0x26070e)));
          this.valid = false;
        }
      });
    } catch (_0x1b33a4) {
      console.log(_0x1b33a4);
    }
  }
  async ["sign_daliy"]() {
    try {
      let _0x3ca1eb = "sign_daliy",
        _0x3890b7 = "post",
        _0x177168 = "https://app-api.smart.cn/smartapp-me/signs/v2",
        _0x2d0c54 = "{}";
      await this.taskApi(_0x3ca1eb, _0x3890b7, _0x177168, _0x2d0c54, {
        "X-Auth-Token": this.token
      }).then(async _0xfc1a70 => {
        if (_0xfc1a70?.["code"] === "success") {
          console.log("账号[" + this.index + "] 签到成功，当前总积分：" + (_0xfc1a70?.["data"]["totalIntegral"] || 0) + "，已签到：" + _0xfc1a70?.["data"]["signCount"] + "次");
        } else console.log("账号[" + this.index + "] 签到失败：" + (_0xfc1a70?.["message"] || JSON.stringify(_0xfc1a70)));
      });
    } catch (_0x3ca2eb) {
      console.log(_0x3ca2eb);
    }
  }
  async ["prize_records"]() {
    try {
      let _0x2d1eeb = "prize_records",
        _0x14bc5b = "post",
        _0x55aee2 = "https://app-api.smart.cn/smartapp-me/signs/v2/prize-records",
        _0x50e81f = "{\"pageSize\":999,\"status\":1}";
      return await this.taskApi(_0x2d1eeb, _0x14bc5b, _0x55aee2, _0x50e81f, {
        "X-Auth-Token": this.token
      }).then(async _0x15ae2a => {
        if (_0x15ae2a?.["code"] === "success") {
          return console.log("账号[" + this.index + "] 查询盲盒成功，当前可开盲盒数：" + (_0x15ae2a?.["data"]?.["length"] || 0) + " 个"), _0x15ae2a?.["data"];
        } else console.log("账号[" + this.index + "] 查询盲盒失败：" + (_0x15ae2a?.["message"] || JSON.stringify(_0x15ae2a)));
      });
    } catch (_0x135989) {
      console.log(_0x135989);
    }
  }
  async ["prize_receive"](_0x562350) {
    try {
      let _0x4030e5 = "prize_receive",
        _0x481a4c = "post",
        _0x1fb771 = "https://app-api.smart.cn/smartapp-me/signs/v2/prize-receive",
        _0x3ebf33 = JSON.stringify({
          "prizeCode": _0x562350
        });
      return await this.taskApi(_0x4030e5, _0x481a4c, _0x1fb771, _0x3ebf33, {
        "X-Auth-Token": this.token
      }).then(async _0x52c40c => {
        if (_0x52c40c?.["code"] === "success") {
          return console.log("账号[" + this.index + "] 开盲盒成功，获得：" + (_0x52c40c?.["data"]["prizeType"] == 1 ? _0x52c40c?.["data"]["prizeContent"] + "积分" : JSON.stringify(_0x52c40c.data))), true;
        } else console.log("账号[" + this.index + "] 开盲盒失败：" + (_0x52c40c?.["message"] || JSON.stringify(_0x52c40c)));
      });
    } catch (_0x1f0628) {
      console.log(_0x1f0628);
    }
  }
  async ["RefreshToken"]() {
    let _0x114494,
      _0x38cc03 = _0x418368(_0x43409e + "_config", this.refreshToken);
    _0x38cc03 && typeof _0x38cc03 === "string" && JSON.parse(_0x38cc03)?.["access_token"] && (_0x114494 = JSON.parse(_0x38cc03)?.["access_token"]);
    let _0x5b7d3a = _0x114494 || this.refreshToken;
    try {
      let _0xfc0d2c = "RefreshToken",
        _0x337b82 = "get",
        _0x1b05d6 = "https://cms-api.smart.cn/api/smart/web/1.0/oauth/miniapp/getittoken?refreshToken=" + _0x5b7d3a,
        _0x44317a = "";
      await this.taskApi(_0xfc0d2c, _0x337b82, _0x1b05d6, _0x44317a, {}).then(async _0x3acb45 => {
        if (_0x3acb45?.["message"] === "success") {
          this.token = _0x3acb45?.["result"]?.["id_token"];
          try {
            const _0x26db03 = atob(this.token?.["split"](".")[1]),
              _0x197ba0 = new Date(Number(_0x26db03?.["exp"] + "000"))?.["getMonth"]() + 1 + "月" + new Date(Number(_0x26db03?.["exp"] + "000"))?.["getDate"]() + "日" + "00:00:00过期";
            console.log("账号[" + this.index + "] 刷新token成功，当前token：" + _0x197ba0);
          } catch (_0x144517) {
            console.log("账号[" + this.index + "] 刷新token成功");
          }
          this.valid = true;
          _0x5b7d3a = _0x3acb45?.["result"]?.["refresh_token"];
          _0x3f4e6c(_0x43409e + "_config", this.refreshToken, JSON.stringify({
            "access_token": _0x5b7d3a
          }));
        } else console.log("账号[" + this.index + "] 刷新token失败：" + (_0x3acb45?.["message"] || JSON.stringify(_0x3acb45))), this.valid = false;
      });
    } catch (_0x68e405) {
      console.log(_0x68e405);
    }
  }
  async ["doTask"]() {
    try {
      await this.sign_daliy();
      const _0x397cdb = await this.prize_records();
      if (_0x397cdb) {
        for (let _0x53e2bf = 0; _0x53e2bf < _0x397cdb.length; _0x53e2bf++) {
          const _0x39f8fe = _0x397cdb[_0x53e2bf];
          await this.prize_receive(_0x39f8fe?.["prizeCode"]);
          await _0x370b70.wait(Math.round() * 2000 + 3000);
        }
      }
    } catch (_0x58275e) {
      console.log(_0x58275e);
    }
  }
}
!(async () => {
  if (typeof $request !== "undefined") await _0x279251();else {
    if (!(await _0x290e9c())) return;
    console.log("\n================ 开始执行 ================\n作者：幻生（禁止倒卖）\n注册地址（非常感谢）：https://z1.ax1x.com/2023/10/17/piChdQH.png\n脚本仓库（认准更新地址）：https://github.com/Huansheng1/my-qinglong-js");
    for (let _0x5a75db of _0x7d62a4) {
      console.log("----------- 执行 第 [" + _0x5a75db.index + "] 个账号 -----------");
      await _0x5a75db.RefreshToken();
    }
    let _0x18a917 = _0x7d62a4.filter(_0x592a77 => _0x592a77.valid);
    if (_0x18a917.length > 0) {
      console.log("\n================ 任务队列构建完毕 ================");
      for (let _0x53dba1 of _0x18a917) {
        console.log("----------- 账号[" + _0x53dba1.index + "] -----------");
        await _0x53dba1.doTask();
      }
    } else console.log("\n====幻生提示：无可用账号，请检查配置============ 任务结束 ================");
    await _0x370b70.showmsg();
  }
})().catch(_0x9c2763 => console.log(_0x9c2763)).finally(() => _0x370b70.done());
async function _0x279251() {}
function _0x3f4e6c(_0x28bc50, _0x2cfd1f, _0x28e847) {
  let _0x2f0773 = {},
    _0x53c7e9 = {};
  try {
    _0x2f0773 = _0x17a3eb.readFileSync(_0x28bc50 + ".json", "utf8");
    _0x53c7e9 = JSON.parse(_0x2f0773);
  } catch (_0x1d3726) {}
  _0x53c7e9[_0x2cfd1f] = _0x28e847;
  const _0xbfc0fb = JSON.stringify(_0x53c7e9);
  try {
    _0x17a3eb.writeFileSync(_0x28bc50 + ".json", _0xbfc0fb);
  } catch (_0x2283eb) {
    _0x2283eb.code === "ENOENT" ? _0x17a3eb.writeFileSync(_0x28bc50 + ".json", _0xbfc0fb) : console.error("保存文件时发生错误：", _0x2283eb);
  }
}
function _0x418368(_0x2f0817, _0x117b9e) {
  try {
    const _0x2f554e = _0x17a3eb.readFileSync(_0x2f0817 + ".json", "utf8"),
      _0x16bdad = JSON.parse(_0x2f554e);
    return _0x16bdad[_0x117b9e];
  } catch (_0x289adc) {
    if (_0x289adc.code === "ENOENT") return undefined;else {
      console.error("读取文件时发生错误：", _0x289adc);
    }
  }
}
async function _0x290e9c() {
  if (_0x50bf9b) {
    let _0x424dfa = _0x411a73[0];
    for (let _0x5caf09 of _0x411a73) {
      if (_0x50bf9b.indexOf(_0x5caf09) > -1) {
        _0x424dfa = _0x5caf09;
        break;
      }
    }
    for (let _0x17a074 of _0x50bf9b.split(_0x424dfa)) {
      if (_0x17a074) _0x7d62a4.push(new _0x326765(_0x17a074?.["split"]("#")));
    }
    userCount = _0x7d62a4.length;
  } else {
    console.log("未找到 配置信息，请检查是否配置 变量：", _0x43409e);
    return;
  }
  return console.log("共找到" + userCount + "个账号"), true;
}
async function _0xf04154(_0x1ee580, _0x314f37) {
  return httpErr = null, httpReq = null, httpResp = null, new Promise(_0x3c8b19 => {
    _0x370b70.send(_0x1ee580, _0x314f37, async (_0x42c632, _0x2cf4c3, _0x180ea7) => {
      httpErr = _0x42c632;
      httpReq = _0x2cf4c3;
      httpResp = _0x180ea7;
      _0x3c8b19({
        "err": _0x42c632,
        "req": _0x2cf4c3,
        "resp": _0x180ea7
      });
    });
  });
}
function _0x3ebf60(_0x3fe7cd, _0x3151db) {
  return "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0), new class {
    constructor(_0x9c7a48, _0x2fdcfe) {
      this.name = _0x9c7a48;
      this.notifyStr = "";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x2fdcfe);
      console.log(this.name + " 开始运行：\n");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["getdata"](_0x3bcde5) {
      let _0x2b6866 = this.getval(_0x3bcde5);
      if (/^@/.test(_0x3bcde5)) {
        const [, _0x575c8e, _0x1d4153] = /^@(.*?)\.(.*?)$/.exec(_0x3bcde5),
          _0x564259 = _0x575c8e ? this.getval(_0x575c8e) : "";
        if (_0x564259) try {
          const _0x313f10 = JSON.parse(_0x564259);
          _0x2b6866 = _0x313f10 ? this.lodash_get(_0x313f10, _0x1d4153, "") : _0x2b6866;
        } catch (_0x5b767d) {
          _0x2b6866 = "";
        }
      }
      return _0x2b6866;
    }
    ["setdata"](_0x14be09, _0x3a550a) {
      let _0x542af8 = false;
      if (/^@/.test(_0x3a550a)) {
        const [, _0xbeed45, _0x2594cf] = /^@(.*?)\.(.*?)$/.exec(_0x3a550a),
          _0x489de4 = this.getval(_0xbeed45),
          _0x3817b6 = _0xbeed45 ? "null" === _0x489de4 ? null : _0x489de4 || "{}" : "{}";
        try {
          const _0x9c6c24 = JSON.parse(_0x3817b6);
          this.lodash_set(_0x9c6c24, _0x2594cf, _0x14be09);
          _0x542af8 = this.setval(JSON.stringify(_0x9c6c24), _0xbeed45);
        } catch (_0x578dd5) {
          const _0x1164a9 = {};
          this.lodash_set(_0x1164a9, _0x2594cf, _0x14be09);
          _0x542af8 = this.setval(JSON.stringify(_0x1164a9), _0xbeed45);
        }
      } else _0x542af8 = this.setval(_0x14be09, _0x3a550a);
      return _0x542af8;
    }
    ["getval"](_0x226d0b) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x226d0b) : this.isQuanX() ? $prefs.valueForKey(_0x226d0b) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x226d0b]) : this.data && this.data[_0x226d0b] || null;
    }
    ["setval"](_0x1bf108, _0x2b3834) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x1bf108, _0x2b3834) : this.isQuanX() ? $prefs.setValueForKey(_0x1bf108, _0x2b3834) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x2b3834] = _0x1bf108, this.writedata(), !0) : this.data && this.data[_0x2b3834] || null;
    }
    ["send"](_0xd4f511, _0x3ef7ef, _0x24aadd = () => {}) {
      if (_0xd4f511 != "get" && _0xd4f511 != "post" && _0xd4f511 != "put" && _0xd4f511 != "delete") {
        console.log("无效的http方法：" + _0xd4f511);
        return;
      }
      if (_0xd4f511 == "get" && _0x3ef7ef.headers) delete _0x3ef7ef.headers["Content-Type"], delete _0x3ef7ef.headers["Content-Length"];else {
        if (_0x3ef7ef.body && _0x3ef7ef.headers) {
          if (!_0x3ef7ef.headers["Content-Type"]) _0x3ef7ef.headers["Content-Type"] = "application/x-www-form-urlencoded";
        }
      }
      if (this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x3ef7ef.headers = _0x3ef7ef.headers || {}, Object.assign(_0x3ef7ef.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        let _0x94c002 = {
          "method": _0xd4f511,
          "url": _0x3ef7ef.url,
          "headers": _0x3ef7ef.headers,
          "timeout": _0x3ef7ef.timeout,
          "data": _0x3ef7ef.body
        };
        if (_0xd4f511 == "get") delete _0x94c002.data;
        $axios(_0x94c002).then(_0x43c64d => {
          const {
            status: _0xe531ae,
            request: _0x177e2e,
            headers: _0xfe62df,
            data: _0x390cd2
          } = _0x43c64d;
          _0x24aadd(null, _0x177e2e, {
            "statusCode": _0xe531ae,
            "headers": _0xfe62df,
            "body": _0x390cd2
          });
        }).catch(_0x43623a => console.log(_0x43623a));
      } else {
        if (this.isQuanX()) _0x3ef7ef.method = _0xd4f511.toUpperCase(), this.isNeedRewrite && (_0x3ef7ef.opts = _0x3ef7ef.opts || {}, Object.assign(_0x3ef7ef.opts, {
          "hints": !1
        })), $task.fetch(_0x3ef7ef).then(_0x135f3e => {
          const {
            statusCode: _0x3f1105,
            request: _0x3a742b,
            headers: _0xb63966,
            body: _0x59b6eb
          } = _0x135f3e;
          _0x24aadd(null, _0x3a742b, {
            "statusCode": _0x3f1105,
            "headers": _0xb63966,
            "body": _0x59b6eb
          });
        }, _0x517291 => _0x24aadd(_0x517291));else {
          if (this.isNode()) {
            this.got = this.got ? this.got : require("got");
            const {
              url: _0x790923,
              ..._0x1e6cca
            } = _0x3ef7ef;
            this.instance = this.got.extend({
              "followRedirect": false,
              "hooks": {
                "beforeRequest": [_0xdb6108 => {
                  _0xdb6108.headers = Object.assign({}, _0xdb6108.headers, {});
                }]
              }
            });
            this.instance[_0xd4f511](_0x790923, _0x1e6cca).then(_0x5a09f8 => {
              const {
                statusCode: _0x166e43,
                request: _0xad0117,
                headers: _0x12b477,
                body: _0x50ec27
              } = _0x5a09f8;
              _0x24aadd(null, _0xad0117, {
                "statusCode": _0x166e43,
                "headers": _0x12b477,
                "body": _0x50ec27
              });
            }, _0x4bac33 => {
              const {
                message: _0x4cb78d,
                request: _0x34b3cb,
                response: _0x3adaee
              } = _0x4bac33;
              _0x24aadd(_0x4cb78d, _0x34b3cb, _0x3adaee);
            });
          }
        }
      }
    }
    ["time"](_0x420a95, _0x2df5f7 = null) {
      let _0x348edd = _0x2df5f7 ? new Date(_0x2df5f7) : new Date(),
        _0x1ccfec = {
          "M+": _0x348edd.getMonth() + 1,
          "d+": _0x348edd.getDate(),
          "h+": _0x348edd.getHours(),
          "m+": _0x348edd.getMinutes(),
          "s+": _0x348edd.getSeconds(),
          "q+": Math.floor((_0x348edd.getMonth() + 3) / 3),
          "S": _0x348edd.getMilliseconds()
        };
      /(y+)/.test(_0x420a95) && (_0x420a95 = _0x420a95.replace(RegExp.$1, (_0x348edd.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x377a95 in _0x1ccfec) new RegExp("(" + _0x377a95 + ")").test(_0x420a95) && (_0x420a95 = _0x420a95.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x1ccfec[_0x377a95] : ("00" + _0x1ccfec[_0x377a95]).substr(("" + _0x1ccfec[_0x377a95]).length)));
      return _0x420a95;
    }
    async ["showmsg"]() {
      if (!this.notifyStr) return;
      let _0x58af22 = this.name + " 运行通知\n\n" + this.notifyStr;
      if (_0x370b70.isNode()) {
        var _0x4aaae9 = require("./sendNotify");
        console.log("\n============== 推送 ==============");
        await _0x4aaae9.sendNotify(this.name, _0x58af22);
      } else this.msg(_0x58af22);
    }
    ["logAndNotify"](_0x50be38) {
      console.log(_0x50be38);
      this.notifyStr += _0x50be38;
      this.notifyStr += "\n";
    }
    ["logAndNotifyWithTime"](_0x4f5e73) {
      let _0x60d2b0 = "[" + this.time("hh:mm:ss.S") + "]" + _0x4f5e73;
      console.log(_0x60d2b0);
      this.notifyStr += _0x60d2b0;
      this.notifyStr += "\n";
    }
    ["logWithTime"](_0x1922c1) {
      console.log("[" + this.time("hh:mm:ss.S") + "]" + _0x1922c1);
    }
    ["msg"](_0x16d1e0 = t, _0x4f4f56 = "", _0x42c01e = "", _0x413a3e) {
      const _0x3b378d = _0x46582e => {
        if (!_0x46582e) return _0x46582e;
        if ("string" == typeof _0x46582e) return this.isLoon() ? _0x46582e : this.isQuanX() ? {
          "open-url": _0x46582e
        } : this.isSurge() ? {
          "url": _0x46582e
        } : void 0;
        if ("object" == typeof _0x46582e) {
          if (this.isLoon()) {
            let _0x3b22cd = _0x46582e.openUrl || _0x46582e.url || _0x46582e["open-url"],
              _0x4e8957 = _0x46582e.mediaUrl || _0x46582e["media-url"];
            return {
              "openUrl": _0x3b22cd,
              "mediaUrl": _0x4e8957
            };
          }
          if (this.isQuanX()) {
            let _0x3a837a = _0x46582e["open-url"] || _0x46582e.url || _0x46582e.openUrl,
              _0x11be82 = _0x46582e["media-url"] || _0x46582e.mediaUrl;
            return {
              "open-url": _0x3a837a,
              "media-url": _0x11be82
            };
          }
          if (this.isSurge()) {
            let _0x58ef99 = _0x46582e.url || _0x46582e.openUrl || _0x46582e["open-url"];
            return {
              "url": _0x58ef99
            };
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x16d1e0, _0x4f4f56, _0x42c01e, _0x3b378d(_0x413a3e)) : this.isQuanX() && $notify(_0x16d1e0, _0x4f4f56, _0x42c01e, _0x3b378d(_0x413a3e)));
      let _0x1a2343 = ["", "============== 系统通知 =============="];
      _0x1a2343.push(_0x16d1e0);
      _0x4f4f56 && _0x1a2343.push(_0x4f4f56);
      _0x42c01e && _0x1a2343.push(_0x42c01e);
      console.log(_0x1a2343.join("\n"));
    }
    ["getMin"](_0x454b63, _0x2a5e3a) {
      return _0x454b63 < _0x2a5e3a ? _0x454b63 : _0x2a5e3a;
    }
    ["getMax"](_0x2e0bd5, _0xaa706b) {
      return _0x2e0bd5 < _0xaa706b ? _0xaa706b : _0x2e0bd5;
    }
    ["padStr"](_0xdea49a, _0x4a85b7, _0x4f0994 = "0") {
      let _0x487a75 = String(_0xdea49a),
        _0x4e930a = _0x4a85b7 > _0x487a75.length ? _0x4a85b7 - _0x487a75.length : 0,
        _0x2b2592 = "";
      for (let _0x738fee = 0; _0x738fee < _0x4e930a; _0x738fee++) {
        _0x2b2592 += _0x4f0994;
      }
      return _0x2b2592 += _0x487a75, _0x2b2592;
    }
    ["json2str"](_0x674bc, _0x593aec, _0x4dca46 = false) {
      let _0x334be3 = [];
      for (let _0x466feb of Object.keys(_0x674bc).sort()) {
        let _0x27e395 = _0x674bc[_0x466feb];
        if (_0x27e395 && _0x4dca46) _0x27e395 = encodeURIComponent(_0x27e395);
        _0x334be3.push(_0x466feb + "=" + _0x27e395);
      }
      return _0x334be3.join(_0x593aec);
    }
    ["str2json"](_0x2b65dd, _0x465b75 = false) {
      let _0x7ee18a = {};
      for (let _0x4f9c8f of _0x2b65dd.split("&")) {
        if (!_0x4f9c8f) continue;
        let _0x2a6795 = _0x4f9c8f.indexOf("=");
        if (_0x2a6795 == -1) continue;
        let _0x25d5da = _0x4f9c8f.substr(0, _0x2a6795),
          _0x2851b9 = _0x4f9c8f.substr(_0x2a6795 + 1);
        if (_0x465b75) _0x2851b9 = decodeURIComponent(_0x2851b9);
        _0x7ee18a[_0x25d5da] = _0x2851b9;
      }
      return _0x7ee18a;
    }
    ["randomString"](_0x5c2fb5, _0x14a2f5 = "abcdef0123456789") {
      let _0x1ee6bf = "";
      for (let _0x4dac8f = 0; _0x4dac8f < _0x5c2fb5; _0x4dac8f++) {
        _0x1ee6bf += _0x14a2f5.charAt(Math.floor(Math.random() * _0x14a2f5.length));
      }
      return _0x1ee6bf;
    }
    ["randomList"](_0x4622b3) {
      let _0x5bc078 = Math.floor(Math.random() * _0x4622b3.length);
      return _0x4622b3[_0x5bc078];
    }
    ["wait"](_0x5d2039) {
      return new Promise(_0x3d9a81 => setTimeout(_0x3d9a81, _0x5d2039));
    }
    ["done"](_0x126895 = {}) {
      const _0x5973f0 = new Date().getTime(),
        _0x3f2958 = (_0x5973f0 - this.startTime) / 1000;
      console.log("\n" + this.name + " 运行结束，共运行了 " + _0x3f2958 + " 秒！");
      if (this.isSurge() || this.isQuanX() || this.isLoon()) $done(_0x126895);
    }
  }(_0x3fe7cd, _0x3151db);
}