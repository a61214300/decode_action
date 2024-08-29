//Thu Aug 29 2024 16:10:38 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("哪吒"),
  CK_NAME = "nezha",
  Notify = 1,
  tgLogFlag = 1;
let msg = "";
async function main(_0x164095) {
  await _0x164095.refresh();
}
class UserInfo {
  constructor(_0x5d3b47, _0x217cf6) {
    this.user_log = $.name + "\n";
    this.index = _0x5d3b47 + 1;
    if (tgLogFlag) try {
      this.mopenid = _0x217cf6.split("##")[0];
      this.chatId = _0x217cf6.split("##")[1];
      this.ck = _0x217cf6.split("#");
      this.time = $.ts(13);
    } catch (_0x1a07a7) {
      console.log(_0x1a07a7);
    }
  }
  async ["refresh"]() {
    let _0x386244 = "更新token",
      _0x1df37f = {
        "method": "post",
        "url": "https://appapi-pki.chehezhi.cn/customer/account/info/refreshApiToken",
        "headers": {
          "timestamp": "" + this.time,
          "Content-Type": "application/x-www-form-urlencoded",
          "Host": "appapi-pki.chehezhi.cn:18443"
        },
        "body": "refreshToken=" + this.ck
      },
      _0x2ceb2a = await httpRequest(_0x1df37f);
    if (_0x2ceb2a.code == 20000) {
      this.token = _0x2ceb2a.data.access_token;
      await this.sign();
      await this.selectTurntableList();
      for (var _0x933667 = 0; _0x933667 < 3; _0x933667++) {
        await this.forwarArticle();
      }
      await this.reward();
    } else this.cusLog("账号[" + this.nick_name + "]  " + _0x386244 + " 失败 ❌ 了呢"), console.log(_0x2ceb2a);
  }
  async ["sign"]() {
    let _0x43a4be = "签到",
      _0x5687aa = {
        "method": "get",
        "url": "https://appapi-pki.chehezhi.cn/hznz/customer/sign",
        "headers": {
          "Host": "appapi-pki.chehezhi.cn:18443",
          "timestamp": "" + this.time,
          "Authorization": "Bearer " + this.token,
          "accept": "application/json",
          "Content-Type": "application/json; charset=UTF-8"
        },
        "body": ""
      },
      _0x32c3c3 = await httpRequest(_0x5687aa);
    if (_0x32c3c3.code == 200) this.cusLog("账号 [" + this.index + " ] " + _0x43a4be + ": " + _0x32c3c3.message + "   ");else {
      if (_0x32c3c3.code == 417) this.cusLog("账号 [" + this.index + " ] " + _0x43a4be + ": " + _0x32c3c3.message + "   ");else this.cusLog("账号[" + this.index + "]  " + _0x43a4be + " 失败 ❌ 了呢"), console.log(_0x32c3c3);
    }
  }
  async ["forwarArticle"]() {
    let _0x3ddc52 = Math.floor(Math.random() * 100000) + 1,
      _0x3e6c1f = "转发",
      _0x49d59d = {
        "method": "put",
        "url": "https://appapi-pki.chehezhi.cn/hznz/app_article/forwarArticle",
        "headers": {
          "Host": "appapi-pki.chehezhi.cn:18443",
          "timestamp": "" + this.time,
          "Authorization": "Bearer " + this.token,
          "accept": "application/json",
          "Content-Type": "application/json; charset=UTF-8"
        },
        "body": "{\"articleId\":\"" + _0x3ddc52 + "\",\"forwardTo\":\"" + _0x3ddc52 + "\"}"
      },
      _0x441c83 = await httpRequest(_0x49d59d);
    if (_0x441c83.code == 200) this.cusLog("账号 [" + this.index + " ] " + _0x3e6c1f + ": " + _0x441c83.message + "   ");else {
      if (_0x441c83.code == 417) {
        this.cusLog("账号 [" + this.index + " ] " + _0x3e6c1f + ": " + _0x441c83.message + "   ");
      } else this.cusLog("账号[" + this.index + "]  " + _0x3e6c1f + " 失败 ❌ 了呢"), console.log(_0x441c83);
    }
  }
  async ["reward"]() {
    let _0x1abc99 = "",
      _0x4f7475 = {
        "method": "get",
        "url": "https://appapi-pki.chehezhi.cn/hznz/customer/getCustomer",
        "headers": {
          "Host": "appapi-pki.chehezhi.cn:18443",
          "timestamp": "" + this.time,
          "Authorization": "Bearer " + this.token,
          "accept": "application/json",
          "Content-Type": "application/json; charset=UTF-8"
        },
        "body": ""
      },
      _0x209468 = await httpRequest(_0x4f7475);
    if (_0x209468.code == 200) this.phone = _0x209468.data.phone, this.cusLog("账号[" + $.phoneNum(this.phone) + "]   总积分 : " + _0x209468.data.creditScore + "  ");else this.cusLog("账号[" + this.index + "]  " + _0x1abc99 + " 失败 ❌ 了呢"), console.log(_0x209468);
  }
  async ["selectTurntableList"]() {
    let _0x5aa695 = "",
      _0x27490c = {
        "method": "get",
        "url": "https://api.chehezhi.cn/hznz/app_new_year/selectTurntableList?turntableId=39",
        "headers": {
          "Host": "api.chehezhi.cn",
          "timestamp": "" + this.time,
          "Authorization": "Bearer " + this.token,
          "accept": "application/json",
          "Content-Type": "application/json; charset=UTF-8"
        },
        "body": ""
      },
      _0x55a182 = await httpRequest(_0x27490c);
    if (_0x55a182.code == 200) this.uuid = _0x55a182.data.infoId, this.password = _0x55a182.data[0].password, this.cusLog("账号[" + this.index + "]   活动 : " + _0x55a182.data[0].turntableName + "  结束时间 " + _0x55a182.data[0].endOn + "   "), await this.Num();else this.cusLog("账号[" + this.index + "]  " + _0x5aa695 + " 失败 ❌ 了呢"), console.log(_0x55a182);
  }
  async ["Num"]() {
    let _0x3de2a4 = {
        "method": "post",
        "url": "https://api.chehezhi.cn/hznz/app_new_year/getLuckyNum?turntableId=39",
        "headers": {
          "Host": "api.chehezhi.cn",
          "timestamp": "" + this.time,
          "Authorization": "Bearer " + this.token,
          "accept": "application/json",
          "Content-Type": "application/json; charset=UTF-8"
        },
        "body": "{\"password\":\"" + this.password + "\",\"score\":99,\"turntableId\":39,\"uuid\":\"" + this.uuid + "\"}"
      },
      _0x4ba018 = await httpRequest(_0x3de2a4);
    console.log(_0x4ba018);
    if (_0x4ba018.code == 417) this.cusLog("账号[" + this.index + "]    : " + _0x4ba018.message + "  ");else _0x4ba018.code == 200 && this.cusLog("账号[" + this.index + "]    获得 : " + _0x4ba018.data[0].prizeName + "   ");
  }
  async ["Sendtg_bot"]() {
    const _0xe19cd3 = require("node-telegram-bot-api"),
      _0x197d67 = process.env.tg_token;
    let _0x254b48 = new _0xe19cd3(_0x197d67),
      _0x29bdb3 = this.user_log;
    await _0x254b48.sendMessage(this.chatId, _0x29bdb3);
  }
  ["cusLog"](_0x3ab815) {
    tgLogFlag ? (console.log("    " + _0x3ab815), msg += "\n " + _0x3ab815, this.user_log += "\n " + _0x3ab815) : (console.log("    " + _0x3ab815), msg += "\n    " + _0x3ab815);
  }
}
!(async () => {
  let _0x16cdcd = await getUsers(CK_NAME, async (_0x2f4459, _0x4c000b) => {
    let _0x2354cf = new UserInfo(_0x2f4459, _0x4c000b);
    return _0x2354cf;
  });
  list = [];
  _0x16cdcd.forEach(async _0x4daa63 => {
    list.push(main(_0x4daa63));
  });
  await Promise.all(list);
})().catch(_0x398838 => console.log(_0x398838)).finally(() => $.done());
async function getUsers(_0x101d00, _0x236e5a) {
  let _0x2dfd50 = [],
    _0xf43924 = process.env[_0x101d00],
    _0x283c15 = ["@", "\n", "&"],
    _0x335fe6 = 0;
  if (_0xf43924) {
    let _0x4d377c = _0x283c15[0];
    for (let _0x59c269 of _0x283c15) if (_0xf43924.indexOf(_0x59c269) > -1) {
      _0x4d377c = _0x59c269;
      break;
    }
    let _0x230838 = _0xf43924.split(_0x4d377c);
    for (let _0x44328d = 0; _0x44328d < _0x230838.length; _0x44328d++) {
      const _0x24bdc2 = _0x230838[_0x44328d];
      _0x24bdc2 && _0x2dfd50.push(await _0x236e5a(_0x44328d, _0x24bdc2));
    }
    _0x335fe6 = _0x2dfd50.length;
  } else console.log("未找到CK");
  return console.log("共找到" + _0x335fe6 + "个账号"), !0, _0x2dfd50;
}
async function httpRequest(_0x2f541a, _0x287ea8 = false) {
  return new Promise(_0xe741cf => {
    try {
      $.send(_0x2f541a, async (_0x516cbd, _0x373c74, _0x2525b4, _0x235db5) => {
        if (_0x516cbd) {
          console.log("错误, 检查点--2");
          return;
        }
        !_0x287ea8 && _0xe741cf(_0x373c74);
        _0xe741cf(_0x2525b4);
      });
    } catch (_0x411ef7) {
      console.log(_0x411ef7);
    }
  });
}
function Env(_0x3f2f7e, _0x1ed4c2) {
  return "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0), new class {
    constructor(_0x56d7c8, _0x469952) {
      this.name = _0x56d7c8;
      this.notifyStr = "";
      this.notifyFlag = false;
      this.startTime = new Date().getTime();
      Object.assign(this, _0x469952);
      console.log(this.name + " 开始运行: \n");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["send"](_0x32acc7, _0x30e40d = () => {}) {
      let _0x3ceb67 = _0x32acc7.method.toLowerCase(),
        _0x3f2736 = _0x32acc7;
      if (_0x3ceb67 != "get" && _0x3ceb67 != "post" && _0x3ceb67 != "put" && _0x3ceb67 != "delete") {
        console.log("无效的http方法: " + _0x3ceb67);
        return;
      }
      if (_0x3ceb67 == "get" && _0x3f2736.headers) delete _0x3f2736.headers["Content-Length"];else {
        if (_0x3f2736.body && _0x3f2736.headers) {
          if (_0x3f2736.headers["content-type"]) {
            let _0x572dfa = _0x3f2736.headers["content-type"];
            delete _0x3f2736.headers["content-type"];
            _0x3f2736.headers["Content-Type"] = _0x572dfa;
          } else {
            if (_0x3f2736.body && _0x3f2736.headers) {
              if (!_0x3f2736.headers["Content-Type"]) _0x3f2736.headers["Content-Type"] = "application/x-www-form-urlencoded";
            }
          }
        }
      }
      this.isNode() && (this.request = this.request ? this.request : require("request"), this.request(_0x32acc7, function (_0x20f92f, _0x28fdc4) {
        if (_0x20f92f) throw new Error(_0x20f92f);
        let _0x103f61 = _0x28fdc4.body,
          _0x5685e4 = _0x28fdc4;
        try {
          if (typeof _0x103f61 == "string") {
            if ($.isJsonStr(_0x103f61)) {
              _0x103f61 = JSON.parse(_0x103f61);
              let _0x467958 = $.formatJson(_0x28fdc4.body);
              _0x30e40d(null, _0x103f61, _0x467958, _0x5685e4);
            } else _0x30e40d(null, _0x103f61, res_format, _0x5685e4);
          } else _0x30e40d(null, _0x103f61, res_format, _0x5685e4);
        } catch (_0x2e0cf7) {
          console.log(_0x2e0cf7);
          let _0xd51152 = "ENV -- request 请求错误, 检查点1\n" + _0x2e0cf7;
          _0x30e40d(_0xd51152, null, null, null);
        }
      }));
    }
    ["isJsonStr"](_0x48e82a) {
      if (typeof _0x48e82a == "string") {
        try {
          if (typeof JSON.parse(_0x48e82a) == "object") {
            return true;
          }
        } catch (_0x53ff6a) {
          return false;
        }
      }
      return false;
    }
    ["formatJson"](_0x526742) {
      var _0x5afe29 = _0x526742,
        _0x1f69c0 = 0,
        _0x434d38 = 0,
        _0x32d622 = "    ",
        _0x1714fa = "",
        _0x471007 = 0,
        _0x16b2bd = false,
        _0x1126eb = null;
      for (_0x1f69c0 = 0, _0x434d38 = _0x5afe29.length; _0x1f69c0 < _0x434d38; _0x1f69c0 += 1) {
        _0x1126eb = _0x5afe29.charAt(_0x1f69c0);
        switch (_0x1126eb) {
          case "{":
          case "[":
            if (!_0x16b2bd) {
              _0x1714fa += _0x1126eb + "\n" + _0x56e934(_0x32d622, _0x471007 + 1);
              _0x471007 += 1;
            } else {
              _0x1714fa += _0x1126eb;
            }
            break;
          case "}":
          case "]":
            !_0x16b2bd ? (_0x471007 -= 1, _0x1714fa += "\n" + _0x56e934(_0x32d622, _0x471007) + _0x1126eb) : _0x1714fa += _0x1126eb;
            break;
          case ",":
            if (!_0x16b2bd) _0x1714fa += ",\n" + _0x56e934(_0x32d622, _0x471007);else {
              _0x1714fa += _0x1126eb;
            }
            break;
          case ":":
            !_0x16b2bd ? _0x1714fa += ": " : _0x1714fa += _0x1126eb;
            break;
          case " ":
          case "\n":
          case "\t":
            _0x16b2bd && (_0x1714fa += _0x1126eb);
            break;
          case "\"":
            _0x1f69c0 > 0 && _0x5afe29.charAt(_0x1f69c0 - 1) !== "\\" && (_0x16b2bd = !_0x16b2bd);
            _0x1714fa += _0x1126eb;
            break;
          default:
            _0x1714fa += _0x1126eb;
            break;
        }
      }
      function _0x56e934(_0x57f4ee, _0x11ba5e) {
        return new Array(_0x11ba5e + 1).join(_0x57f4ee);
      }
      function _0x56e934(_0x43a57a, _0x53f8bb) {
        return new Array(_0x53f8bb + 1).join(_0x43a57a);
      }
      return _0x1714fa;
    }
    ["type"](_0x431c79) {
      if (this.strCode(_0x431c79) > 20) return console.log("数据类型是: " + typeof _0x431c79);
      return console.log(_0x431c79 + "数据类型是: " + typeof _0x431c79);
    }
    ["strCode"](_0x2f5c37) {
      var _0x54828d = 0;
      if (_0x2f5c37) {
        let _0x42a67c = _0x2f5c37.length;
        for (var _0x1ee27f = 0; _0x1ee27f < _0x42a67c; _0x1ee27f++) {
          _0x2f5c37.charCodeAt(_0x1ee27f) > 255 ? _0x54828d += 2 : _0x54828d++;
        }
        return _0x54828d;
      } else return 0;
    }
    async ["SendMsg"](_0x4aa2fb) {
      if (!_0x4aa2fb) return;
      if (Notify > 0) {
        if ($.isNode()) {
          var _0x51ce04 = require("./sendNotify");
          await _0x51ce04.sendNotify($.name, _0x4aa2fb);
        } else {
          console.log($.name, "", _0x4aa2fb);
        }
      } else console.log(_0x4aa2fb);
    }
    ["getMin"](_0x13872a, _0x621fc2) {
      return _0x13872a < _0x621fc2 ? _0x13872a : _0x621fc2;
    }
    ["getMax"](_0x3ce47e, _0x578f52) {
      return _0x3ce47e < _0x578f52 ? _0x578f52 : _0x3ce47e;
    }
    ["json2str"](_0x4358ce, _0x127f57, _0x2f7578 = false) {
      let _0x28790c = [];
      for (let _0x230ebc of Object.keys(_0x4358ce).sort()) {
        let _0x5e1bc7 = _0x4358ce[_0x230ebc];
        if (_0x5e1bc7 && _0x2f7578) _0x5e1bc7 = encodeURIComponent(_0x5e1bc7);
        _0x28790c.push(_0x230ebc + "=" + _0x5e1bc7);
      }
      return _0x28790c.join(_0x127f57);
    }
    ["str2json"](_0x2e9ec6, _0x32fc69 = false) {
      let _0x4b3c34 = {};
      for (let _0x14001d of _0x2e9ec6.split("&")) {
        if (!_0x14001d) continue;
        let _0x5b3b55 = _0x14001d.indexOf("=");
        if (_0x5b3b55 == -1) continue;
        let _0x58d905 = _0x14001d.substr(0, _0x5b3b55),
          _0x4942b4 = _0x14001d.substr(_0x5b3b55 + 1);
        if (_0x32fc69) _0x4942b4 = decodeURIComponent(_0x4942b4);
        _0x4b3c34[_0x58d905] = _0x4942b4;
      }
      return _0x4b3c34;
    }
    ["randomStr"](_0x85c974, _0xecffdd = false, _0x399701 = "abcdef0123456789") {
      let _0x2cc170 = "";
      for (let _0x3cce5c = 0; _0x3cce5c < _0x85c974; _0x3cce5c++) {
        _0x2cc170 += _0x399701.charAt(Math.floor(Math.random() * _0x399701.length));
      }
      if (!_0xecffdd) return _0x2cc170;
      return _0x2cc170.toUpperCase();
    }
    ["phoneNum"](_0xbc7c38) {
      if (_0xbc7c38.length == 11) {
        let _0x38fb08 = _0xbc7c38.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
        return _0x38fb08;
      } else return _0xbc7c38;
    }
    ["randomInt"](_0x9ed2f4, _0x9b3a68) {
      return Math.round(Math.random() * (_0x9b3a68 - _0x9ed2f4) + _0x9ed2f4);
    }
    async ["yiyan"]() {
      return this.request = this.request ? this.request : require("request"), new Promise(_0x17a08b => {
        var _0x5c228b = {
          "method": "GET",
          "url": "https://v1.hitokoto.cn/",
          "headers": {}
        };
        this.request(_0x5c228b, function (_0x540461, _0x29d73f) {
          let _0x1d5276 = JSON.parse(_0x29d73f.body),
            _0x524276 = "[一言]: " + _0x1d5276.hitokoto + "  by--" + _0x1d5276.from;
          _0x17a08b(_0x524276);
        });
      });
    }
    ["wait"](_0x3efea9) {
      return new Promise(_0x25a80e => setTimeout(_0x25a80e, _0x3efea9 * 1000));
    }
    ["ts"](_0x514759 = false, _0x390ad8 = "") {
      let _0x2316ab = new Date(),
        _0xa911bb = "";
      switch (_0x514759) {
        case 10:
          _0xa911bb = Math.round(new Date().getTime() / 1000).toString();
          break;
        case 13:
          _0xa911bb = Math.round(new Date().getTime()).toString();
          break;
        case "h":
          _0xa911bb = _0x2316ab.getHours();
          break;
        case "m":
          _0xa911bb = _0x2316ab.getMinutes();
          break;
        case "y":
          _0xa911bb = _0x2316ab.getFullYear();
          break;
        case "h":
          _0xa911bb = _0x2316ab.getHours();
          break;
        case "mo":
          _0xa911bb = _0x2316ab.getMonth();
          break;
        case "d":
          _0xa911bb = _0x2316ab.getDate();
          break;
        case "ts2Data":
          if (_0x390ad8 != "") {
            time = _0x390ad8;
            if (time.toString().length == 13) {
              let _0x1e8aee = new Date(time + 8 * 3600 * 1000);
              _0xa911bb = _0x1e8aee.toJSON().substr(0, 19).replace("T", " ");
            } else {
              if (time.toString().length == 10) {
                time = time * 1000;
                let _0xbe2fa5 = new Date(time + 8 * 3600 * 1000);
                _0xa911bb = _0xbe2fa5.toJSON().substr(0, 19).replace("T", " ");
              }
            }
          }
          break;
        default:
          _0xa911bb = "未知错误,请检查";
          break;
      }
      return _0xa911bb;
    }
    ["doubleLog"](_0x11be61) {
      console.log("    " + _0x11be61);
      msg += "\n    " + _0x11be61;
    }
    async ["done"](_0x1d86db = {}) {
      await $.SendMsg(msg);
      const _0x2de7b9 = new Date().getTime(),
        _0x56f6f4 = (_0x2de7b9 - this.startTime) / 1000;
      console.log("\n" + this.name + " 运行结束，共运行了 " + _0x56f6f4 + " 秒！");
    }
  }(_0x3f2f7e, _0x1ed4c2);
}