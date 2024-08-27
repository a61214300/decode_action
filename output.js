//Tue Aug 27 2024 14:50:37 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("捷达app"),
  Notify = 1,
  debug = 0;
let ckStr = process.env.jiedack,
  msg = "",
  ck = "",
  tt = randomInt(6, 27),
  tts = randomInt(5, 10),
  token = "",
  artArr = [],
  host = "wxa-tp.ezrpro.com";
async function tips(_0x42bc38) {
  DoubleLog("\n====== 共找到 " + _0x42bc38.length + " 个账号 ======");
  debugLog("【debug】 这是你的账号数组: \n " + _0x42bc38 + " ");
}
!(async () => {
  let _0xb74cf0 = await getCks(ckStr, "jiedack");
  console.log("\n 作者：Sky夜空    \n 仓库地址：https://github.com/SkyNightovo/js.git");
  await tips(_0xb74cf0);
  var _0x9a4341 = randomInt(0, 100);
  DoubleLog("\n  随机延迟 " + _0x9a4341 + " 秒开始任务");
  await wait(_0x9a4341);
  for (let _0x3d1cfc = 0; _0x3d1cfc < _0xb74cf0.length; _0x3d1cfc++) {
    _num = _0x3d1cfc + 1;
    DoubleLog("\n======【第 " + _num + " 个账号】======");
    ck = _0xb74cf0[_0x3d1cfc].split("&");
    debugLog("【debug】 这是你第 " + _num + " 账号信息: " + ck + " ");
    await start(_num);
  }
  console.log("\n =====  开始推送  =====");
  await wait(2);
  await SendMsg(msg);
})().catch(_0x2c33ff => $.logErr(_0x2c33ff)).finally(() => $.done());
async function start() {
  await wait(3);
  await user(_num);
}
async function user(_0x86cbe2) {
  let _0x16eee0 = (nno(8) + "-" + nno(4) + "-" + nno(4) + "-" + nno(4) + "-" + nno(12)).toString(),
    _0x3e444b = ts13(),
    _0x9e9bc = "user%2Fpublic%2Fv1%2Flogin_appkey%3D4318317670_nonce%3D" + _0x16eee0 + "_signTimestamp%3D" + _0x3e444b + "_999b82549a8e331b94bad3318117fe90",
    _0x4c20e6 = MD5Encrypt(_0x9e9bc),
    _0x2adf92 = _0x4c20e6.toString(),
    _0xc048ed = {
      "method": "POST",
      "url": "https://jetta-app.mosc.faw-vw.com/user/public/v1/login?appkey=4318317670&nonce=" + _0x16eee0 + "&digitalSign=" + _0x2adf92 + "&signTimestamp=" + _0x3e444b,
      "headers": {
        "Host": "jetta-app.mosc.faw-vw.com",
        "did": "" + ck[3],
        "content-type": "application/json",
        "user-agent": "okhttp/4.9.0"
      },
      "body": "{\"password\":\"" + ck[1] + "\",\"scope\":\"openid profile mbb\",\"deviceName\":\"" + ck[2] + "\",\"account\":\"" + ck[0] + "\"}"
    },
    _0x3fea6a = await httpRequest(_0xc048ed, "账号");
  if (_0x3fea6a.returnStatus == "SUCCEED") {
    DoubleLog("账号[" + _0x86cbe2 + "]:登陆成功");
    token = _0x3fea6a.data.accessToken;
    await wait(tts);
    await ok(_0x86cbe2);
  } else DoubleLog("账号[" + _0x86cbe2 + "]:账号失败,ck失效");
}
async function ok(_0xb47e3) {
  let _0x220a02 = (nno(8) + "-" + nno(4) + "-" + nno(4) + "-" + nno(4) + "-" + nno(12)).toString(),
    _0x137050 = ts13(),
    _0x114d1c = "user%2Fpublic%2Fv1%2FgetUserInfo_appkey%3D4318317670_nonce%3D" + _0x220a02 + "_signTimestamp%3D" + _0x137050 + "_999b82549a8e331b94bad3318117fe90",
    _0x44b3c1 = MD5Encrypt(_0x114d1c),
    _0x3fd1b6 = _0x44b3c1.toString(),
    _0x780c94 = {
      "method": "Get",
      "url": "https://cdpapi.faw-vw.com/user/public/v1/getUserInfo?appkey=4318317670&nonce=" + _0x220a02 + "&digitalSign=" + _0x3fd1b6 + "&signTimestamp=" + _0x137050,
      "headers": {
        "Host": "cdpapi.faw-vw.com",
        "authorization": "Bearer " + token,
        "content-type": "application/json",
        "did": "" + ck[3],
        "user-agent": "okhttp/4.9.0"
      }
    },
    _0x550c34 = await httpRequest(_0x780c94, "查询用户名");
  if (_0x550c34.returnStatus == "SUCCEED") {
    DoubleLog("账号[" + _0xb47e3 + "]:" + _0x550c34.data.mobile + " ");
    aid = _0x550c34.data.aid;
    await olds(_0xb47e3);
    await wait(tts);
    await user_sign(_0xb47e3);
    await wait(tts);
    DoubleLog("账号[" + _0xb47e3 + "]:开始分享任务");
    await article_share(_0xb47e3);
    DoubleLog("账号[" + _0xb47e3 + "]:开始领红包，18号记得取");
    await wait(tts);
    await money2(_0xb47e3);
    await wait(tts);
    await money3(_0xb47e3);
    await wait(tts);
    await score(_0xb47e3);
  } else DoubleLog("账号[" + _0xb47e3 + "]:" + _0x550c34.errorMessage);
}
async function user_sign(_0x28dd05) {
  let _0x388116 = (nno(8) + "-" + nno(4) + "-" + nno(4) + "-" + nno(4) + "-" + nno(12)).toString(),
    _0x34d0c9 = ts13(),
    _0x19bc33 = "vehicle-market%2Fpublic%2FsignIn%2FsignIn_appkey%3D4318317670_nonce%3D" + _0x388116 + "_signt%3D" + _0x34d0c9 + "_token%3DBearer+" + token + "_999b82549a8e331b94bad3318117fe90",
    _0x15ea4e = MD5Encrypt(_0x19bc33),
    _0x4c2e54 = _0x15ea4e.toString(),
    _0x38e0ba = {
      "method": "Get",
      "url": "https://mg.jconnect.faw-vw.com/vehicle-market/public/signIn/signIn?token=Bearer%20" + token + "&signt=" + _0x34d0c9 + "&sign=" + _0x4c2e54 + "&appkey=4318317670&nonce=" + _0x388116,
      "headers": {
        "Host": "mg.jconnect.faw-vw.com",
        "User-Agent": " okhttp/4.9.0"
      }
    },
    _0x575595 = await httpRequest(_0x38e0ba, "签到");
  if (_0x575595.status == "SUCCEED") {
    DoubleLog("账号[" + _0x28dd05 + "]:签到成功:" + _0x575595.data + " 分");
  } else {
    if (_0x575595.errorCode == "vehicle-market.0502") DoubleLog("账号[" + _0x28dd05 + "]:今日已签到");else _0x575595.errorCode == "4402" ? DoubleLog("账号[" + _0x28dd05 + "]:失效 " + _0x575595.errorMessage) : DoubleLog("账号[" + _0x28dd05 + "]:" + _0x575595.errorMessage);
  }
}
async function olds(_0x4a7d3e) {
  let _0x6eac23 = (nno(8) + "-" + nno(4) + "-" + nno(4) + "-" + nno(4) + "-" + nno(12)).toString(),
    _0x19b4dd = ts13(),
    _0x2189c2 = "user%2Fpublic%2Fv1%2FgetUserInfo_appkey%3D4318317670_nonce%3D" + _0x6eac23 + "_signTimestamp%3D" + _0x19b4dd + "_999b82549a8e331b94bad3318117fe90",
    _0x1d5ffa = MD5Encrypt(_0x2189c2),
    _0x39633a = _0x1d5ffa.toString(),
    _0x14253d = {
      "method": "POST",
      "url": "https://cdpapi.faw-vw.com/memberscore/inpublic/v1/getScore?appkey=4318317670&nonce=" + _0x6eac23 + "&digitalSign=" + _0x39633a + "&signTimestamp=" + _0x19b4dd,
      "headers": {
        "Host": "cdpapi.faw-vw.com",
        "authorization": "Bearer " + token,
        "content-type": "application/json",
        "content-length": "126"
      },
      "body": "{\"tenantId\":\"Jetta\",\"businessId\":\"1\",\"scoreTypeId\":\"2\",\"systemKey\":\"8816687A99F14B8FA8\",\"aId\":\"" + aid + "\",\"businessTypeId\":\"1\"}"
    },
    _0x58705e = await httpRequest(_0x14253d, "旧积分");
  _0x58705e.returnStatus == "SUCCESS" && (oldscore = _0x58705e.score[0].availablescore);
}
async function score(_0x367854) {
  let _0x37d7f2 = (nno(8) + "-" + nno(4) + "-" + nno(4) + "-" + nno(4) + "-" + nno(12)).toString(),
    _0x12c922 = ts13(),
    _0x286663 = "user%2Fpublic%2Fv1%2FgetUserInfo_appkey%3D4318317670_nonce%3D" + _0x37d7f2 + "_signTimestamp%3D" + _0x12c922 + "_999b82549a8e331b94bad3318117fe90",
    _0x3d7602 = MD5Encrypt(_0x286663),
    _0x219c58 = _0x3d7602.toString(),
    _0x40daff = {
      "method": "POST",
      "url": "https://cdpapi.faw-vw.com/memberscore/inpublic/v1/getScore?appkey=4318317670&nonce=" + _0x37d7f2 + "&digitalSign=" + _0x219c58 + "&signTimestamp=" + _0x12c922,
      "headers": {
        "Host": "cdpapi.faw-vw.com",
        "authorization": "Bearer " + token,
        "content-type": "application/json",
        "content-length": "126"
      },
      "body": "{\"tenantId\":\"Jetta\",\"businessId\":\"1\",\"scoreTypeId\":\"2\",\"systemKey\":\"8816687A99F14B8FA8\",\"aId\":\"" + aid + "\",\"businessTypeId\":\"1\"}"
    },
    _0x319ea3 = await httpRequest(_0x40daff, "积分");
  if (_0x319ea3.returnStatus == "SUCCESS") DoubleLog("账号[" + _0x367854 + "]:可用积分:" + _0x319ea3.score[0].availablescore + "分\n账号[" + _0x367854 + "]:本次运行:" + (_0x319ea3.score[0].availablescore - oldscore) + "分");else {
    DoubleLog("\n " + _0x319ea3.errorMessage);
  }
}
async function article_share(_0x569234) {
  let _0x3f5074 = (nno(8) + "-" + nno(4) + "-" + nno(4) + "-" + nno(4) + "-" + nno(12)).toString(),
    _0x2717ad = ts13(),
    _0x2c08c3 = randomInt(1, 200),
    _0x523b51 = "jetta-app%2Fgeneral%2Finpublic%2Fv1%2Fcommon%2Fquestion%2Fget_recommendation_questions_appkey%3D4318317670_nonce%3D" + _0x3f5074 + "_pageNum%3D" + _0x2c08c3 + "_pageSize%3D20" + "_signTimestamp%3D" + _0x2717ad + "_theme%3D" + "_999b82549a8e331b94bad3318117fe90",
    _0x200141 = MD5Encrypt(_0x523b51),
    _0x52d81e = _0x200141.toString(),
    _0xe50b0d = {
      "method": "Get",
      "url": "https://jetta-app.mosc.faw-vw.com/jetta-app/general/inpublic/v1/common/question/get_recommendation_questions?pageNum=" + _0x2c08c3 + "&pageSize=20&theme=&appkey=4318317670&nonce=" + _0x3f5074 + "&digitalSign=" + _0x52d81e + "&signTimestamp=" + _0x2717ad,
      "headers": {
        "Host": "jetta-app.mosc.faw-vw.com",
        "authorization": "Bearer " + token,
        "did": "" + ck[3],
        "user-agent": "okhttp/4.9.0"
      }
    },
    _0x2b4f40 = await httpRequest(_0xe50b0d, "文章页");
  if (_0x2b4f40.returnStatus == "SUCCEED") {
    console.log("账号[" + _0x569234 + "]:获取文章列表");
    for (let _0x20bfdc = 0; _0x20bfdc < _0x2b4f40.data.length; _0x20bfdc++) {
      artArr.push(_0x2b4f40.data[_0x20bfdc].bbsId);
    }
    await wait(tts);
    let _0x25008d = randomInt(0, artArr.length - 4);
    while ((await user_share(artArr[_0x25008d], _0x569234)) == 1) {
      await wait(tt);
      _0x25008d++;
    }
  } else DoubleLog("\n " + _0x2b4f40.errorMessage);
}
async function user_share(_0x18081b, _0x4fa25f) {
  let _0x50559b = (nno(8) + "-" + nno(4) + "-" + nno(4) + "-" + nno(4) + "-" + nno(12)).toString(),
    _0x10f8c8 = ts13(),
    _0x3447ad = "jbrand-api-community%2Fpublic%2Fuser%2Fforward%2FbbsForward_appkey%3D4318317670_nonce%3D" + _0x50559b + "_signt%3D" + _0x10f8c8 + "_token%3DBearer+" + token + "_999b82549a8e331b94bad3318117fe90",
    _0x30fe5a = MD5Encrypt(_0x3447ad),
    _0x1d52a0 = _0x30fe5a.toString(),
    _0x24a7ac = {
      "method": "POST",
      "url": "https://mg.jconnect.faw-vw.com/jbrand-api-community/public/user/forward/bbsForward?token=Bearer%20" + token + "&signt=" + _0x10f8c8 + "&sign=" + _0x1d52a0 + "&appkey=4318317670&nonce=" + _0x50559b,
      "headers": {
        "Host": "mg.jconnect.faw-vw.com",
        "User-Agent": " okhttp/4.9.0",
        "Content-Length": "38",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "body": "bbsId=" + _0x18081b
    },
    _0x17667b = await httpRequest(_0x24a7ac, "分享");
  if (_0x17667b.status == "SUCCEED") {
    if (_0x17667b.data.status == "SUCCEED") return console.log("账号[" + _0x4fa25f + "]:分享成功:" + _0x17667b.data.scoreValue + "分"), 1;else {
      if (_0x17667b.data.msg == "当前帖子已经转发过了") return console.log("账号[" + _0x4fa25f + "]:重复分享"), 1;else {
        if (_0x17667b.data.msg == "转发数量超出积分规则定义的数量") {
          return DoubleLog("账号[" + _0x4fa25f + "]:分享达上限"), 0;
        }
      }
    }
  } else DoubleLog("账号[" + _0x4fa25f + "]:" + _0x17667b.errorMessage);
}
async function money1(_0xe67869) {
  let _0x1e931b = {
      "method": "Get",
      "url": "https://service-yy.jconnect.faw-vw.com/redpackbankv2/prize/getPrize",
      "headers": {
        "Host": "service-yy.jconnect.faw-vw.com",
        "pragma": "no-cache",
        "cache-control": "no-cache",
        "accept": "application/json, text/plain, */*",
        "origin": "https://serviceui-yy-ui.jconnect.faw-vw.com",
        "sec-fetch-dest": "empty",
        "token": "Bearer " + token
      }
    },
    _0x16e53c = await httpRequest(_0x1e931b, "领红包");
  _0x16e53c.status == "SUCCEED" ? _0x16e53c.data != null ? DoubleLog("账号[" + _0xe67869 + "]:领积分,获得:" + _0x16e53c.data.todayPrize + "分") : DoubleLog("账号[" + _0xe67869 + "]:收取积分成功") : DoubleLog("账号[" + _0xe67869 + "]:领积分," + _0x16e53c.errorMessage);
}
async function money(_0x5efe23) {
  let _0xbe4a0d = {
      "method": "Get",
      "url": "https://service-yy.jconnect.faw-vw.com/redpackbankv2/user/getUserInfo",
      "headers": {
        "Host": "service-yy.jconnect.faw-vw.com",
        "pragma": "no-cache",
        "cache-control": "no-cache",
        "accept": "application/json, text/plain, */*",
        "origin": "https://serviceui-yy-ui.jconnect.faw-vw.com",
        "sec-fetch-dest": "empty",
        "token": "Bearer " + token
      }
    },
    _0x45b0e4 = await httpRequest(_0xbe4a0d, "红包积分");
  _0x45b0e4.status == "SUCCEED" ? DoubleLog("账号[" + _0x5efe23 + "]:积分总额:" + _0x45b0e4.data.detail.allPrize + "分") : DoubleLog("\n " + _0x45b0e4.errorMessage);
}
async function money2(_0x445e4c) {
  let _0x2b7604 = {
      "method": "Get",
      "url": "https://service-yy.jconnect.faw-vw.com/redpackbank/prize/getPrize",
      "headers": {
        "Host": "service-yy.jconnect.faw-vw.com",
        "pragma": "no-cache",
        "cache-control": "no-cache",
        "accept": "application/json, text/plain, */*",
        "origin": "https://serviceui-yy-ui.jconnect.faw-vw.com",
        "sec-fetch-dest": "empty",
        "token": "Bearer " + token
      }
    },
    _0x142af7 = await httpRequest(_0x2b7604, "领红包");
  if (_0x142af7.status == "SUCCEED") {
    if (_0x142af7.data != null) DoubleLog("账号[" + _0x445e4c + "]:领红包,获得:" + _0x142af7.data.todayPrize + "元");else {
      DoubleLog("账号[" + _0x445e4c + "]:收取红包成功");
    }
  } else DoubleLog("账号[" + _0x445e4c + "]:领红包," + _0x142af7.errorMessage);
}
async function money3(_0x1e5440) {
  let _0x38beda = {
      "method": "Get",
      "url": "https://service-yy.jconnect.faw-vw.com/redpackbank/user/getUserInfo",
      "headers": {
        "Host": "service-yy.jconnect.faw-vw.com",
        "pragma": "no-cache",
        "cache-control": "no-cache",
        "accept": "application/json, text/plain, */*",
        "origin": "https://serviceui-yy-ui.jconnect.faw-vw.com",
        "sec-fetch-dest": "empty",
        "token": "Bearer " + token
      }
    },
    _0x5014a5 = await httpRequest(_0x38beda, "红包积分");
  _0x5014a5.status == "SUCCEED" ? DoubleLog("账号[" + _0x1e5440 + "]:红包总额:" + _0x5014a5.data.detail.allPrize + "元") : DoubleLog("\n " + _0x5014a5.errorMessage);
}
async function getCks(_0x4551b9, _0x1c87a5) {
  return new Promise(_0x3967bd => {
    let _0x5ac9a4 = [];
    if (_0x4551b9) {
      if (_0x4551b9.indexOf("@") !== -1) _0x4551b9.split("@").forEach(_0x3fa585 => {
        _0x5ac9a4.push(_0x3fa585);
      });else _0x4551b9.indexOf("\n") !== -1 ? _0x4551b9.split("\n").forEach(_0x5c773f => {
        _0x5ac9a4.push(_0x5c773f);
      }) : _0x5ac9a4.push(_0x4551b9);
      _0x3967bd(_0x5ac9a4);
    } else console.log(" :未填写变量 " + _0x1c87a5);
  });
}
function nno(_0x13b6ac) {
  for (l = "abcdef0123456789", a = l.length, t = "", n = 0; n < _0x13b6ac; n++) t += l.charAt(Math.floor(Math.random() * a));
  return t.toString();
}
function DoubleLog(_0x505b70) {
  _0x505b70 && (console.log("" + _0x505b70), msg += "\n" + _0x505b70);
}
async function SendMsg(_0xd9497f) {
  if (!_0xd9497f) return;
  if (Notify > 0) {
    if ($.isNode()) {
      var _0x40221f = require("./sendNotify");
      await _0x40221f.sendNotify($.name, _0xd9497f);
    } else $.msg(_0xd9497f);
  } else {
    console.log(_0xd9497f);
  }
}
function randomString(_0x279762) {
  _0x279762 = _0x279762 || 32;
  var _0x5c6917 = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
    _0x1402e5 = _0x5c6917.length,
    _0x51bf76 = "";
  for (i = 0; i < _0x279762; i++) _0x51bf76 += _0x5c6917.charAt(Math.floor(Math.random() * _0x1402e5));
  return _0x51bf76;
}
function randomInt(_0x9abf92, _0x3c13cb) {
  return Math.round(Math.random() * (_0x3c13cb - _0x9abf92) + _0x9abf92);
}
function ts13() {
  return Math.round(new Date().getTime()).toString();
}
function ts10() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function local_hours() {
  let _0x30b0bc = new Date();
  return h = _0x30b0bc.getHours(), h;
}
function local_minutes() {
  let _0x371298 = new Date();
  return m = _0x371298.getMinutes(), m;
}
function wait(_0x5d39ce) {
  return new Promise(function (_0xde3c78) {
    setTimeout(_0xde3c78, _0x5d39ce * 1000);
  });
}
async function httpGet(_0x44d7d4, _0x1035bc, _0x242680 = 3) {
  return new Promise(_0x379171 => {
    let _0x33e4be = _0x44d7d4;
    if (!_0x1035bc) {
      let _0x4e531b = arguments.callee.toString(),
        _0x42236c = /function\s*(\w*)/i,
        _0x1bdbd6 = _0x42236c.exec(_0x4e531b);
      _0x1035bc = _0x1bdbd6[1];
    }
    debug && (console.log("\n 【debug】=============== 这是 " + _0x1035bc + " 请求 url ==============="), console.log(_0x33e4be));
    $.get(_0x33e4be, async (_0x5ea925, _0x1f0320, _0x14646d) => {
      try {
        debug && (console.log("\n\n 【debug】===============这是 " + _0x1035bc + " 返回data=============="), console.log(_0x14646d), console.log("======"), console.log(JSON.parse(_0x14646d)));
        let _0x37bccb = JSON.parse(_0x14646d);
        if (_0x37bccb == undefined) return;else _0x379171(_0x37bccb);
      } catch (_0x26905e) {
        console.log(_0x5ea925, _0x1f0320);
        console.log("\n " + _0x1035bc + " 失败了!请稍后尝试!!");
        msg += "\n " + _0x1035bc + " 失败了!请稍后尝试!!";
      } finally {
        _0x379171();
      }
    }, _0x242680);
  });
}
async function httpPost(_0x367015, _0x271869, _0x26f8de = 3) {
  return new Promise(_0xcdd7b7 => {
    let _0x597084 = _0x367015;
    if (!_0x271869) {
      let _0x1753d3 = arguments.callee.toString(),
        _0x488faa = /function\s*(\w*)/i,
        _0x1601b5 = _0x488faa.exec(_0x1753d3);
      _0x271869 = _0x1601b5[1];
    }
    debug && (console.log("\n 【debug】=============== 这是 " + _0x271869 + " 请求 url ==============="), console.log(_0x597084));
    $.post(_0x597084, async (_0x42c6a8, _0xcf4a9d, _0x673051) => {
      try {
        if (debug) {
          console.log("\n\n 【debug】===============这是 " + _0x271869 + " 返回data==============");
          console.log(_0x673051);
          console.log("======");
          console.log(JSON.parse(_0x673051));
        }
        let _0x5926bf = JSON.parse(_0x673051);
        if (_0x5926bf == undefined) return;else _0xcdd7b7(_0x5926bf);
      } catch (_0x304871) {
        console.log(_0x42c6a8, _0xcf4a9d);
        console.log("\n " + _0x271869 + " 失败了!请稍后尝试!!");
        msg += "\n " + _0x271869 + " 失败了!请稍后尝试!!";
      } finally {
        _0xcdd7b7();
      }
    }, _0x26f8de);
  });
}
async function httpRequest(_0x568bd3, _0x57ad2d, _0x7315b7 = 3) {
  return new Promise(_0x335e89 => {
    let _0x368795 = _0x568bd3,
      _0x204160 = require("request");
    if (!_0x57ad2d) {
      let _0x4b699c = arguments.callee.toString(),
        _0x13a836 = /function\s*(\w*)/i,
        _0x4e752e = _0x13a836.exec(_0x4b699c);
      _0x57ad2d = _0x4e752e[1];
    }
    debug && (console.log("\n 【debug】=============== 这是 " + _0x57ad2d + " 请求 信息 ==============="), console.log(_0x368795));
    _0x204160(_0x368795, async (_0x1a62d6, _0x3fea02, _0x489643) => {
      try {
        debug && (console.log("\n\n 【debug】===============这是 " + _0x57ad2d + " 返回数据=============="), console.log(_0x489643), console.log("\n 【debug】=============这是 " + _0x57ad2d + " json解析后数据============"), console.log(JSON.parse(_0x489643)));
        let _0x479f21 = JSON.parse(_0x489643);
        if (!_0x479f21) return;
        _0x335e89(_0x479f21);
      } catch (_0x56f6bf) {
        console.log(_0x1a62d6, _0x3fea02);
        console.log("\n " + _0x57ad2d + " 失败了!请稍后尝试!!");
        msg += "\n " + _0x57ad2d + " 失败了!请稍后尝试!!";
      } finally {
        _0x335e89();
      }
    });
    _0x7315b7;
  });
}
function MD5Encrypt(_0x10e1e2) {
  function _0x27fdfd(_0x65304b, _0x4d0ed6) {
    return _0x65304b << _0x4d0ed6 | _0x65304b >>> 32 - _0x4d0ed6;
  }
  function _0x2971af(_0xf1b174, _0x35dce9) {
    var _0x1a1a8f, _0x1c436b, _0x5b930f, _0x29d870, _0x47622e;
    return _0x5b930f = 2147483648 & _0xf1b174, _0x29d870 = 2147483648 & _0x35dce9, _0x1a1a8f = 1073741824 & _0xf1b174, _0x1c436b = 1073741824 & _0x35dce9, _0x47622e = (1073741823 & _0xf1b174) + (1073741823 & _0x35dce9), _0x1a1a8f & _0x1c436b ? 2147483648 ^ _0x47622e ^ _0x5b930f ^ _0x29d870 : _0x1a1a8f | _0x1c436b ? 1073741824 & _0x47622e ? 3221225472 ^ _0x47622e ^ _0x5b930f ^ _0x29d870 : 1073741824 ^ _0x47622e ^ _0x5b930f ^ _0x29d870 : _0x47622e ^ _0x5b930f ^ _0x29d870;
  }
  function _0x4c6a4e(_0x35fb3f, _0xb920bc, _0x3bda22) {
    return _0x35fb3f & _0xb920bc | ~_0x35fb3f & _0x3bda22;
  }
  function _0x34c3fa(_0x1029bc, _0x114cc3, _0x56a5b5) {
    return _0x1029bc & _0x56a5b5 | _0x114cc3 & ~_0x56a5b5;
  }
  function _0x5301b7(_0x32ffbb, _0x2456fa, _0x2d181e) {
    return _0x32ffbb ^ _0x2456fa ^ _0x2d181e;
  }
  function _0x40d86f(_0x38d00a, _0x3094ec, _0x4a2922) {
    return _0x3094ec ^ (_0x38d00a | ~_0x4a2922);
  }
  function _0x48f569(_0x2e36e4, _0x458880, _0x18da21, _0x24ec75, _0x48086b, _0x4f40aa, _0x50faa4) {
    return _0x2e36e4 = _0x2971af(_0x2e36e4, _0x2971af(_0x2971af(_0x4c6a4e(_0x458880, _0x18da21, _0x24ec75), _0x48086b), _0x50faa4)), _0x2971af(_0x27fdfd(_0x2e36e4, _0x4f40aa), _0x458880);
  }
  function _0x4252e3(_0x317d2b, _0x5914f8, _0x3565bb, _0xdbf012, _0x5e67fc, _0x7a05b2, _0x522dfc) {
    return _0x317d2b = _0x2971af(_0x317d2b, _0x2971af(_0x2971af(_0x34c3fa(_0x5914f8, _0x3565bb, _0xdbf012), _0x5e67fc), _0x522dfc)), _0x2971af(_0x27fdfd(_0x317d2b, _0x7a05b2), _0x5914f8);
  }
  function _0x26150a(_0x2601e2, _0x511827, _0xd0d8c7, _0x5700af, _0x41784b, _0x2bc64b, _0x280b15) {
    return _0x2601e2 = _0x2971af(_0x2601e2, _0x2971af(_0x2971af(_0x5301b7(_0x511827, _0xd0d8c7, _0x5700af), _0x41784b), _0x280b15)), _0x2971af(_0x27fdfd(_0x2601e2, _0x2bc64b), _0x511827);
  }
  function _0x57d98a(_0x29d1bc, _0x4d944d, _0x165c1b, _0x3a1adc, _0x22074c, _0x3e7462, _0x3f9370) {
    return _0x29d1bc = _0x2971af(_0x29d1bc, _0x2971af(_0x2971af(_0x40d86f(_0x4d944d, _0x165c1b, _0x3a1adc), _0x22074c), _0x3f9370)), _0x2971af(_0x27fdfd(_0x29d1bc, _0x3e7462), _0x4d944d);
  }
  function _0x5bb013(_0x2a0e93) {
    for (var _0x27a29e, _0x309046 = _0x2a0e93.length, _0x47411f = _0x309046 + 8, _0x275976 = (_0x47411f - _0x47411f % 64) / 64, _0x1d0fb0 = 16 * (_0x275976 + 1), _0x430a45 = new Array(_0x1d0fb0 - 1), _0x581baf = 0, _0x48958a = 0; _0x309046 > _0x48958a;) _0x27a29e = (_0x48958a - _0x48958a % 4) / 4, _0x581baf = _0x48958a % 4 * 8, _0x430a45[_0x27a29e] = _0x430a45[_0x27a29e] | _0x2a0e93.charCodeAt(_0x48958a) << _0x581baf, _0x48958a++;
    return _0x27a29e = (_0x48958a - _0x48958a % 4) / 4, _0x581baf = _0x48958a % 4 * 8, _0x430a45[_0x27a29e] = _0x430a45[_0x27a29e] | 128 << _0x581baf, _0x430a45[_0x1d0fb0 - 2] = _0x309046 << 3, _0x430a45[_0x1d0fb0 - 1] = _0x309046 >>> 29, _0x430a45;
  }
  function _0xf79b81(_0x27e618) {
    var _0x205cef,
      _0x1a9585,
      _0x51a8e3 = "",
      _0x138199 = "";
    for (_0x1a9585 = 0; 3 >= _0x1a9585; _0x1a9585++) _0x205cef = _0x27e618 >>> 8 * _0x1a9585 & 255, _0x138199 = "0" + _0x205cef.toString(16), _0x51a8e3 += _0x138199.substr(_0x138199.length - 2, 2);
    return _0x51a8e3;
  }
  function _0x4e568d(_0x5bc2e6) {
    _0x5bc2e6 = _0x5bc2e6.replace(/\r\n/g, "\n");
    for (var _0x47a910 = "", _0x94fa2d = 0; _0x94fa2d < _0x5bc2e6.length; _0x94fa2d++) {
      var _0x402ffa = _0x5bc2e6.charCodeAt(_0x94fa2d);
      128 > _0x402ffa ? _0x47a910 += String.fromCharCode(_0x402ffa) : _0x402ffa > 127 && 2048 > _0x402ffa ? (_0x47a910 += String.fromCharCode(_0x402ffa >> 6 | 192), _0x47a910 += String.fromCharCode(63 & _0x402ffa | 128)) : (_0x47a910 += String.fromCharCode(_0x402ffa >> 12 | 224), _0x47a910 += String.fromCharCode(_0x402ffa >> 6 & 63 | 128), _0x47a910 += String.fromCharCode(63 & _0x402ffa | 128));
    }
    return _0x47a910;
  }
  var _0x3ca047,
    _0x730e1f,
    _0x441e78,
    _0x521ecb,
    _0x35f62c,
    _0x18dbca,
    _0x3cc038,
    _0xdb193a,
    _0x3e3135,
    _0xcfdfa2 = [],
    _0x3b62d4 = 7,
    _0x3d6db9 = 12,
    _0x42f71f = 17,
    _0xf6320 = 22,
    _0x2b709c = 5,
    _0x505cca = 9,
    _0x257d28 = 14,
    _0x543df3 = 20,
    _0x1b8f30 = 4,
    _0x57f991 = 11,
    _0x5bc62d = 16,
    _0x28b03e = 23,
    _0x53ca9b = 6,
    _0x40c166 = 10,
    _0x4dbdb6 = 15,
    _0x399fb0 = 21;
  for (_0x10e1e2 = _0x4e568d(_0x10e1e2), _0xcfdfa2 = _0x5bb013(_0x10e1e2), _0x18dbca = 1732584193, _0x3cc038 = 4023233417, _0xdb193a = 2562383102, _0x3e3135 = 271733878, _0x3ca047 = 0; _0x3ca047 < _0xcfdfa2.length; _0x3ca047 += 16) _0x730e1f = _0x18dbca, _0x441e78 = _0x3cc038, _0x521ecb = _0xdb193a, _0x35f62c = _0x3e3135, _0x18dbca = _0x48f569(_0x18dbca, _0x3cc038, _0xdb193a, _0x3e3135, _0xcfdfa2[_0x3ca047 + 0], _0x3b62d4, 3614090360), _0x3e3135 = _0x48f569(_0x3e3135, _0x18dbca, _0x3cc038, _0xdb193a, _0xcfdfa2[_0x3ca047 + 1], _0x3d6db9, 3905402710), _0xdb193a = _0x48f569(_0xdb193a, _0x3e3135, _0x18dbca, _0x3cc038, _0xcfdfa2[_0x3ca047 + 2], _0x42f71f, 606105819), _0x3cc038 = _0x48f569(_0x3cc038, _0xdb193a, _0x3e3135, _0x18dbca, _0xcfdfa2[_0x3ca047 + 3], _0xf6320, 3250441966), _0x18dbca = _0x48f569(_0x18dbca, _0x3cc038, _0xdb193a, _0x3e3135, _0xcfdfa2[_0x3ca047 + 4], _0x3b62d4, 4118548399), _0x3e3135 = _0x48f569(_0x3e3135, _0x18dbca, _0x3cc038, _0xdb193a, _0xcfdfa2[_0x3ca047 + 5], _0x3d6db9, 1200080426), _0xdb193a = _0x48f569(_0xdb193a, _0x3e3135, _0x18dbca, _0x3cc038, _0xcfdfa2[_0x3ca047 + 6], _0x42f71f, 2821735955), _0x3cc038 = _0x48f569(_0x3cc038, _0xdb193a, _0x3e3135, _0x18dbca, _0xcfdfa2[_0x3ca047 + 7], _0xf6320, 4249261313), _0x18dbca = _0x48f569(_0x18dbca, _0x3cc038, _0xdb193a, _0x3e3135, _0xcfdfa2[_0x3ca047 + 8], _0x3b62d4, 1770035416), _0x3e3135 = _0x48f569(_0x3e3135, _0x18dbca, _0x3cc038, _0xdb193a, _0xcfdfa2[_0x3ca047 + 9], _0x3d6db9, 2336552879), _0xdb193a = _0x48f569(_0xdb193a, _0x3e3135, _0x18dbca, _0x3cc038, _0xcfdfa2[_0x3ca047 + 10], _0x42f71f, 4294925233), _0x3cc038 = _0x48f569(_0x3cc038, _0xdb193a, _0x3e3135, _0x18dbca, _0xcfdfa2[_0x3ca047 + 11], _0xf6320, 2304563134), _0x18dbca = _0x48f569(_0x18dbca, _0x3cc038, _0xdb193a, _0x3e3135, _0xcfdfa2[_0x3ca047 + 12], _0x3b62d4, 1804603682), _0x3e3135 = _0x48f569(_0x3e3135, _0x18dbca, _0x3cc038, _0xdb193a, _0xcfdfa2[_0x3ca047 + 13], _0x3d6db9, 4254626195), _0xdb193a = _0x48f569(_0xdb193a, _0x3e3135, _0x18dbca, _0x3cc038, _0xcfdfa2[_0x3ca047 + 14], _0x42f71f, 2792965006), _0x3cc038 = _0x48f569(_0x3cc038, _0xdb193a, _0x3e3135, _0x18dbca, _0xcfdfa2[_0x3ca047 + 15], _0xf6320, 1236535329), _0x18dbca = _0x4252e3(_0x18dbca, _0x3cc038, _0xdb193a, _0x3e3135, _0xcfdfa2[_0x3ca047 + 1], _0x2b709c, 4129170786), _0x3e3135 = _0x4252e3(_0x3e3135, _0x18dbca, _0x3cc038, _0xdb193a, _0xcfdfa2[_0x3ca047 + 6], _0x505cca, 3225465664), _0xdb193a = _0x4252e3(_0xdb193a, _0x3e3135, _0x18dbca, _0x3cc038, _0xcfdfa2[_0x3ca047 + 11], _0x257d28, 643717713), _0x3cc038 = _0x4252e3(_0x3cc038, _0xdb193a, _0x3e3135, _0x18dbca, _0xcfdfa2[_0x3ca047 + 0], _0x543df3, 3921069994), _0x18dbca = _0x4252e3(_0x18dbca, _0x3cc038, _0xdb193a, _0x3e3135, _0xcfdfa2[_0x3ca047 + 5], _0x2b709c, 3593408605), _0x3e3135 = _0x4252e3(_0x3e3135, _0x18dbca, _0x3cc038, _0xdb193a, _0xcfdfa2[_0x3ca047 + 10], _0x505cca, 38016083), _0xdb193a = _0x4252e3(_0xdb193a, _0x3e3135, _0x18dbca, _0x3cc038, _0xcfdfa2[_0x3ca047 + 15], _0x257d28, 3634488961), _0x3cc038 = _0x4252e3(_0x3cc038, _0xdb193a, _0x3e3135, _0x18dbca, _0xcfdfa2[_0x3ca047 + 4], _0x543df3, 3889429448), _0x18dbca = _0x4252e3(_0x18dbca, _0x3cc038, _0xdb193a, _0x3e3135, _0xcfdfa2[_0x3ca047 + 9], _0x2b709c, 568446438), _0x3e3135 = _0x4252e3(_0x3e3135, _0x18dbca, _0x3cc038, _0xdb193a, _0xcfdfa2[_0x3ca047 + 14], _0x505cca, 3275163606), _0xdb193a = _0x4252e3(_0xdb193a, _0x3e3135, _0x18dbca, _0x3cc038, _0xcfdfa2[_0x3ca047 + 3], _0x257d28, 4107603335), _0x3cc038 = _0x4252e3(_0x3cc038, _0xdb193a, _0x3e3135, _0x18dbca, _0xcfdfa2[_0x3ca047 + 8], _0x543df3, 1163531501), _0x18dbca = _0x4252e3(_0x18dbca, _0x3cc038, _0xdb193a, _0x3e3135, _0xcfdfa2[_0x3ca047 + 13], _0x2b709c, 2850285829), _0x3e3135 = _0x4252e3(_0x3e3135, _0x18dbca, _0x3cc038, _0xdb193a, _0xcfdfa2[_0x3ca047 + 2], _0x505cca, 4243563512), _0xdb193a = _0x4252e3(_0xdb193a, _0x3e3135, _0x18dbca, _0x3cc038, _0xcfdfa2[_0x3ca047 + 7], _0x257d28, 1735328473), _0x3cc038 = _0x4252e3(_0x3cc038, _0xdb193a, _0x3e3135, _0x18dbca, _0xcfdfa2[_0x3ca047 + 12], _0x543df3, 2368359562), _0x18dbca = _0x26150a(_0x18dbca, _0x3cc038, _0xdb193a, _0x3e3135, _0xcfdfa2[_0x3ca047 + 5], _0x1b8f30, 4294588738), _0x3e3135 = _0x26150a(_0x3e3135, _0x18dbca, _0x3cc038, _0xdb193a, _0xcfdfa2[_0x3ca047 + 8], _0x57f991, 2272392833), _0xdb193a = _0x26150a(_0xdb193a, _0x3e3135, _0x18dbca, _0x3cc038, _0xcfdfa2[_0x3ca047 + 11], _0x5bc62d, 1839030562), _0x3cc038 = _0x26150a(_0x3cc038, _0xdb193a, _0x3e3135, _0x18dbca, _0xcfdfa2[_0x3ca047 + 14], _0x28b03e, 4259657740), _0x18dbca = _0x26150a(_0x18dbca, _0x3cc038, _0xdb193a, _0x3e3135, _0xcfdfa2[_0x3ca047 + 1], _0x1b8f30, 2763975236), _0x3e3135 = _0x26150a(_0x3e3135, _0x18dbca, _0x3cc038, _0xdb193a, _0xcfdfa2[_0x3ca047 + 4], _0x57f991, 1272893353), _0xdb193a = _0x26150a(_0xdb193a, _0x3e3135, _0x18dbca, _0x3cc038, _0xcfdfa2[_0x3ca047 + 7], _0x5bc62d, 4139469664), _0x3cc038 = _0x26150a(_0x3cc038, _0xdb193a, _0x3e3135, _0x18dbca, _0xcfdfa2[_0x3ca047 + 10], _0x28b03e, 3200236656), _0x18dbca = _0x26150a(_0x18dbca, _0x3cc038, _0xdb193a, _0x3e3135, _0xcfdfa2[_0x3ca047 + 13], _0x1b8f30, 681279174), _0x3e3135 = _0x26150a(_0x3e3135, _0x18dbca, _0x3cc038, _0xdb193a, _0xcfdfa2[_0x3ca047 + 0], _0x57f991, 3936430074), _0xdb193a = _0x26150a(_0xdb193a, _0x3e3135, _0x18dbca, _0x3cc038, _0xcfdfa2[_0x3ca047 + 3], _0x5bc62d, 3572445317), _0x3cc038 = _0x26150a(_0x3cc038, _0xdb193a, _0x3e3135, _0x18dbca, _0xcfdfa2[_0x3ca047 + 6], _0x28b03e, 76029189), _0x18dbca = _0x26150a(_0x18dbca, _0x3cc038, _0xdb193a, _0x3e3135, _0xcfdfa2[_0x3ca047 + 9], _0x1b8f30, 3654602809), _0x3e3135 = _0x26150a(_0x3e3135, _0x18dbca, _0x3cc038, _0xdb193a, _0xcfdfa2[_0x3ca047 + 12], _0x57f991, 3873151461), _0xdb193a = _0x26150a(_0xdb193a, _0x3e3135, _0x18dbca, _0x3cc038, _0xcfdfa2[_0x3ca047 + 15], _0x5bc62d, 530742520), _0x3cc038 = _0x26150a(_0x3cc038, _0xdb193a, _0x3e3135, _0x18dbca, _0xcfdfa2[_0x3ca047 + 2], _0x28b03e, 3299628645), _0x18dbca = _0x57d98a(_0x18dbca, _0x3cc038, _0xdb193a, _0x3e3135, _0xcfdfa2[_0x3ca047 + 0], _0x53ca9b, 4096336452), _0x3e3135 = _0x57d98a(_0x3e3135, _0x18dbca, _0x3cc038, _0xdb193a, _0xcfdfa2[_0x3ca047 + 7], _0x40c166, 1126891415), _0xdb193a = _0x57d98a(_0xdb193a, _0x3e3135, _0x18dbca, _0x3cc038, _0xcfdfa2[_0x3ca047 + 14], _0x4dbdb6, 2878612391), _0x3cc038 = _0x57d98a(_0x3cc038, _0xdb193a, _0x3e3135, _0x18dbca, _0xcfdfa2[_0x3ca047 + 5], _0x399fb0, 4237533241), _0x18dbca = _0x57d98a(_0x18dbca, _0x3cc038, _0xdb193a, _0x3e3135, _0xcfdfa2[_0x3ca047 + 12], _0x53ca9b, 1700485571), _0x3e3135 = _0x57d98a(_0x3e3135, _0x18dbca, _0x3cc038, _0xdb193a, _0xcfdfa2[_0x3ca047 + 3], _0x40c166, 2399980690), _0xdb193a = _0x57d98a(_0xdb193a, _0x3e3135, _0x18dbca, _0x3cc038, _0xcfdfa2[_0x3ca047 + 10], _0x4dbdb6, 4293915773), _0x3cc038 = _0x57d98a(_0x3cc038, _0xdb193a, _0x3e3135, _0x18dbca, _0xcfdfa2[_0x3ca047 + 1], _0x399fb0, 2240044497), _0x18dbca = _0x57d98a(_0x18dbca, _0x3cc038, _0xdb193a, _0x3e3135, _0xcfdfa2[_0x3ca047 + 8], _0x53ca9b, 1873313359), _0x3e3135 = _0x57d98a(_0x3e3135, _0x18dbca, _0x3cc038, _0xdb193a, _0xcfdfa2[_0x3ca047 + 15], _0x40c166, 4264355552), _0xdb193a = _0x57d98a(_0xdb193a, _0x3e3135, _0x18dbca, _0x3cc038, _0xcfdfa2[_0x3ca047 + 6], _0x4dbdb6, 2734768916), _0x3cc038 = _0x57d98a(_0x3cc038, _0xdb193a, _0x3e3135, _0x18dbca, _0xcfdfa2[_0x3ca047 + 13], _0x399fb0, 1309151649), _0x18dbca = _0x57d98a(_0x18dbca, _0x3cc038, _0xdb193a, _0x3e3135, _0xcfdfa2[_0x3ca047 + 4], _0x53ca9b, 4149444226), _0x3e3135 = _0x57d98a(_0x3e3135, _0x18dbca, _0x3cc038, _0xdb193a, _0xcfdfa2[_0x3ca047 + 11], _0x40c166, 3174756917), _0xdb193a = _0x57d98a(_0xdb193a, _0x3e3135, _0x18dbca, _0x3cc038, _0xcfdfa2[_0x3ca047 + 2], _0x4dbdb6, 718787259), _0x3cc038 = _0x57d98a(_0x3cc038, _0xdb193a, _0x3e3135, _0x18dbca, _0xcfdfa2[_0x3ca047 + 9], _0x399fb0, 3951481745), _0x18dbca = _0x2971af(_0x18dbca, _0x730e1f), _0x3cc038 = _0x2971af(_0x3cc038, _0x441e78), _0xdb193a = _0x2971af(_0xdb193a, _0x521ecb), _0x3e3135 = _0x2971af(_0x3e3135, _0x35f62c);
  var _0x25eec4 = _0xf79b81(_0x18dbca) + _0xf79b81(_0x3cc038) + _0xf79b81(_0xdb193a) + _0xf79b81(_0x3e3135);
  return _0x25eec4.toLowerCase();
}
function debugLog(..._0x2b374d) {
  debug && console.log(..._0x2b374d);
}
function rotateRight(_0x1be56c, _0x52f59c) {
  return _0x52f59c >>> _0x1be56c | _0x52f59c << 32 - _0x1be56c;
}
function choice(_0xa8b162, _0x20b626, _0x19d919) {
  return _0xa8b162 & _0x20b626 ^ ~_0xa8b162 & _0x19d919;
}
function majority(_0x31f9f2, _0x29831e, _0x59b07a) {
  return _0x31f9f2 & _0x29831e ^ _0x31f9f2 & _0x59b07a ^ _0x29831e & _0x59b07a;
}
function sha256_Sigma0(_0xcac923) {
  return rotateRight(2, _0xcac923) ^ rotateRight(13, _0xcac923) ^ rotateRight(22, _0xcac923);
}
function sha256_Sigma1(_0x126b42) {
  return rotateRight(6, _0x126b42) ^ rotateRight(11, _0x126b42) ^ rotateRight(25, _0x126b42);
}
function sha256_sigma0(_0x4fa8ab) {
  return rotateRight(7, _0x4fa8ab) ^ rotateRight(18, _0x4fa8ab) ^ _0x4fa8ab >>> 3;
}
function sha256_sigma1(_0x15e78f) {
  return rotateRight(17, _0x15e78f) ^ rotateRight(19, _0x15e78f) ^ _0x15e78f >>> 10;
}
function sha256_expand(_0x57dae1, _0x4c12b1) {
  return _0x57dae1[_0x4c12b1 & 15] += sha256_sigma1(_0x57dae1[_0x4c12b1 + 14 & 15]) + _0x57dae1[_0x4c12b1 + 9 & 15] + sha256_sigma0(_0x57dae1[_0x4c12b1 + 1 & 15]);
}
var K256 = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298),
  ihash,
  count,
  buffer,
  sha256_hex_digits = "0123456789abcdef";
function safe_add(_0xd839a2, _0x25a61e) {
  var _0x35c812 = (_0xd839a2 & 65535) + (_0x25a61e & 65535),
    _0x3c994b = (_0xd839a2 >> 16) + (_0x25a61e >> 16) + (_0x35c812 >> 16);
  return _0x3c994b << 16 | _0x35c812 & 65535;
}
function sha256_init() {
  ihash = new Array(8);
  count = new Array(2);
  buffer = new Array(64);
  count[0] = count[1] = 0;
  ihash[0] = 1779033703;
  ihash[1] = 3144134277;
  ihash[2] = 1013904242;
  ihash[3] = 2773480762;
  ihash[4] = 1359893119;
  ihash[5] = 2600822924;
  ihash[6] = 528734635;
  ihash[7] = 1541459225;
}
function sha256_transform() {
  var _0x3ef1fb,
    _0x366783,
    _0x54758c,
    _0x5c05ad,
    _0x469001,
    _0x9cbf90,
    _0x44a38a,
    _0x130334,
    _0x13680a,
    _0x747eb8,
    _0x5586b3 = new Array(16);
  _0x3ef1fb = ihash[0];
  _0x366783 = ihash[1];
  _0x54758c = ihash[2];
  _0x5c05ad = ihash[3];
  _0x469001 = ihash[4];
  _0x9cbf90 = ihash[5];
  _0x44a38a = ihash[6];
  _0x130334 = ihash[7];
  for (var _0x30924a = 0; _0x30924a < 16; _0x30924a++) _0x5586b3[_0x30924a] = buffer[(_0x30924a << 2) + 3] | buffer[(_0x30924a << 2) + 2] << 8 | buffer[(_0x30924a << 2) + 1] << 16 | buffer[_0x30924a << 2] << 24;
  for (var _0x1ecb4f = 0; _0x1ecb4f < 64; _0x1ecb4f++) {
    _0x13680a = _0x130334 + sha256_Sigma1(_0x469001) + choice(_0x469001, _0x9cbf90, _0x44a38a) + K256[_0x1ecb4f];
    if (_0x1ecb4f < 16) _0x13680a += _0x5586b3[_0x1ecb4f];else _0x13680a += sha256_expand(_0x5586b3, _0x1ecb4f);
    _0x747eb8 = sha256_Sigma0(_0x3ef1fb) + majority(_0x3ef1fb, _0x366783, _0x54758c);
    _0x130334 = _0x44a38a;
    _0x44a38a = _0x9cbf90;
    _0x9cbf90 = _0x469001;
    _0x469001 = safe_add(_0x5c05ad, _0x13680a);
    _0x5c05ad = _0x54758c;
    _0x54758c = _0x366783;
    _0x366783 = _0x3ef1fb;
    _0x3ef1fb = safe_add(_0x13680a, _0x747eb8);
  }
  ihash[0] += _0x3ef1fb;
  ihash[1] += _0x366783;
  ihash[2] += _0x54758c;
  ihash[3] += _0x5c05ad;
  ihash[4] += _0x469001;
  ihash[5] += _0x9cbf90;
  ihash[6] += _0x44a38a;
  ihash[7] += _0x130334;
}
function sha256_update(_0x2357b5, _0x59071a) {
  var _0xbb99f1,
    _0x3bf537,
    _0x31d2dd = 0;
  _0x3bf537 = count[0] >> 3 & 63;
  var _0x17048a = _0x59071a & 63;
  if ((count[0] += _0x59071a << 3) < _0x59071a << 3) count[1]++;
  count[1] += _0x59071a >> 29;
  for (_0xbb99f1 = 0; _0xbb99f1 + 63 < _0x59071a; _0xbb99f1 += 64) {
    for (var _0x218851 = _0x3bf537; _0x218851 < 64; _0x218851++) buffer[_0x218851] = _0x2357b5.charCodeAt(_0x31d2dd++);
    sha256_transform();
    _0x3bf537 = 0;
  }
  for (var _0x218851 = 0; _0x218851 < _0x17048a; _0x218851++) buffer[_0x218851] = _0x2357b5.charCodeAt(_0x31d2dd++);
}
function sha256_final() {
  var _0x3a08ab = count[0] >> 3 & 63;
  buffer[_0x3a08ab++] = 128;
  if (_0x3a08ab <= 56) {
    for (var _0x4feadd = _0x3a08ab; _0x4feadd < 56; _0x4feadd++) buffer[_0x4feadd] = 0;
  } else {
    for (var _0x4feadd = _0x3a08ab; _0x4feadd < 64; _0x4feadd++) buffer[_0x4feadd] = 0;
    sha256_transform();
    for (var _0x4feadd = 0; _0x4feadd < 56; _0x4feadd++) buffer[_0x4feadd] = 0;
  }
  buffer[56] = count[1] >>> 24 & 255;
  buffer[57] = count[1] >>> 16 & 255;
  buffer[58] = count[1] >>> 8 & 255;
  buffer[59] = count[1] & 255;
  buffer[60] = count[0] >>> 24 & 255;
  buffer[61] = count[0] >>> 16 & 255;
  buffer[62] = count[0] >>> 8 & 255;
  buffer[63] = count[0] & 255;
  sha256_transform();
}
function sha256_encode_bytes() {
  var _0x29fb6e = 0,
    _0x4cd308 = new Array(32);
  for (var _0x147d4d = 0; _0x147d4d < 8; _0x147d4d++) {
    _0x4cd308[_0x29fb6e++] = ihash[_0x147d4d] >>> 24 & 255;
    _0x4cd308[_0x29fb6e++] = ihash[_0x147d4d] >>> 16 & 255;
    _0x4cd308[_0x29fb6e++] = ihash[_0x147d4d] >>> 8 & 255;
    _0x4cd308[_0x29fb6e++] = ihash[_0x147d4d] & 255;
  }
  return _0x4cd308;
}
function sha256_encode_hex() {
  var _0x8e084 = new String();
  for (var _0x3d7574 = 0; _0x3d7574 < 8; _0x3d7574++) {
    for (var _0x3e66e9 = 28; _0x3e66e9 >= 0; _0x3e66e9 -= 4) _0x8e084 += sha256_hex_digits.charAt(ihash[_0x3d7574] >>> _0x3e66e9 & 15);
  }
  return _0x8e084;
}
function sha256_Encrypt(_0x2ff28c) {
  return sha256_init(), sha256_update(_0x2ff28c, _0x2ff28c.length), sha256_final(), sha256_encode_hex();
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
      return "POST" === e && (s = this.post), new Promise((e, i) => {
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
      this.log("", `🔔 ${this.name} ,开始:`);
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
      if (i) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
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
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
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
      for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
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
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
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
      } else s = this.setval(t, e);
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
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      });else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
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
      }, t => e(t));else if (this.isNode()) {
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
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
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