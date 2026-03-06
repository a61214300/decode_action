//Fri Mar 06 2026 02:58:07 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const _0x47eb7a = function () {
  let _0x10e445 = true;
  return function (_0x4464b, _0x382963) {
    {
      const _0x4db217 = _0x10e445 ? function () {
        {
          if (_0x382963) {
            {
              const _0x43f847 = _0x382963.apply(_0x4464b, arguments);
              _0x382963 = null;
              return _0x43f847;
            }
          }
        }
      } : function () {};
      _0x10e445 = false;
      return _0x4db217;
    }
  };
}();
const _0x40ce9c = _0x47eb7a(this, function () {
  const _0x473af6 = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const _0x3aa578 = function () {
    {
      const _0x17fac0 = new _0x473af6.RegExp("^([^ ]+( +[^ ]+)+)+[^ ]}");
      return !_0x17fac0.test(_0x40ce9c);
    }
  };
  return _0x3aa578();
});
_0x40ce9c();
const _0x1c8651 = require("crypto");
let _0xde8217;
let _0x39e255;
let _0x43973a;
let _0x5f40c = ($.isNode() ? process.env.axjjb : $.getdata("axjjb")) || "";
const {
  machineId: _0x124c3b,
  machineIdSync: _0x55e1ac
} = require("node-machine-id");
_0x124c3b().then(_0x2609db => {});
let _0x55f57e = _0x55e1ac();
let _0x2854d4 = ($.isNode() ? process.env.cgkeyID : $.getdata("cgkeyID")) || "";
let _0xe981f5 = [];
let _0x324948 = 0;
let _0x26c69e = 0;
class _0x27afd5 {
  constructor(_0x5b3f4f) {
    this.index = ++_0x324948;
    this.name = this.index;
    this.valid = false;
    this.canRead = false;
    try {
      this.param = $.str2json(_0x5b3f4f);
      this.ckValid = true;
    } catch (_0x3464d2) {
      {
        this.ckValid = false;
        $.logAndNotify("账号[" + this.index + "]CK格式错误");
      }
    }
  }
  async my() {
    try {
      {
        let _0x31c257 = _0x1dff78();
        let _0x36b998 = _0x1dff78();
        let _0x393141 = Math.floor((new Date() - 0) / 1000);
        let _0x24e22b = _0x1c8651.createHash("sha1").update(_0x393141 + "&" + _0x31c257 + "&" + _0x36b998 + "&Gcy9zywM9PJ8JaGCviMTdgjLd73xexjm").digest("hex");
        let _0x3ce579 = "https://market-gateway.julanling.com/activity-third-account/api/cash/draw/drawIndex?os=ANDROID&appVersion=" + appVersion + "&appChannel=QQyingyongbao&deviceToken=" + this.param.did;
        let _0x1982f6 = "";
        let _0x5910cb = this.param.token;
        let _0x30255b = _0x383f6b(_0x3ce579, _0x31c257, _0x36b998, _0x5910cb, _0x24e22b, _0x393141, _0x1982f6);
        await _0x47cc27("get", _0x30255b);
        let _0x36b198 = _0xde8217;
        if (!_0x36b198) {
          return;
        }
        _0x36b198.errorCode == 0 ? (this.valid = true, this.canRead = true, $.logAndNotify("账号[" + this.name + "]金币:" + _0x36b198.results.balanceAmount + " 余额≈:" + _0x36b198.results.aboutAmount)) : $.logAndNotify("账号[" + this.name + "]获取个人信息失败,可能ck格式错误或已失效");
      }
    } catch (_0x3e6dc7) {
      console.log(_0x3e6dc7);
    } finally {
      return Promise.resolve(1);
    }
  }
  async signIn() {
    try {
      {
        let _0x2b7e87 = _0x1dff78();
        let _0x139cdf = _0x1dff78();
        let _0x36c0e0 = Math.floor((new Date() - 0) / 1000);
        let _0x242bdd = _0x1c8651.createHash("sha1").update(_0x36c0e0 + "&" + _0x2b7e87 + "&" + _0x139cdf + "&Gcy9zywM9PJ8JaGCviMTdgjLd73xexjm").digest("hex");
        let _0x54d3e0 = "https://market-gateway.julanling.com/market-center/api2/signIn/signIn";
        let _0x24ea40 = "{\"os\":\"ANDROID\",\"appVersion\":\"" + appVersion + "\",\"appChannel\":\"QQyingyongbao\",\"deviceToken\":\"" + this.param.did + "\"}";
        let _0x10e934 = this.param.token;
        let _0x4b7003 = _0x383f6b(_0x54d3e0, _0x2b7e87, _0x139cdf, _0x10e934, _0x242bdd, _0x36c0e0, _0x24ea40);
        await _0x47cc27("post", _0x4b7003);
        let _0x4fa1f4 = _0xde8217;
        if (!_0x4fa1f4) {
          return;
        }
        _0x4fa1f4.results?.["amount"] ? $.logAndNotify("账号[" + this.name + "]签到获得: 获得" + _0x4fa1f4.results.amount + "金币") : ($.logAndNotify("账号[" + this.name + "]签到: " + _0x4fa1f4.errorStr), await $.wait(1000));
      }
    } catch (_0x3ebf3c) {
      {
        console.log(_0x3ebf3c);
      }
    } finally {
      {
        return Promise.resolve(1);
      }
    }
  }
  async video() {
    try {
      {
        let _0x2e29e6 = _0x1dff78();
        let _0x42b4ec = _0x1dff78();
        let _0x576d3c = Math.floor((new Date() - 0) / 1000);
        let _0x4b4d64 = _0x1c8651.createHash("sha1").update(_0x576d3c + "&" + _0x2e29e6 + "&" + _0x42b4ec + "&Gcy9zywM9PJ8JaGCviMTdgjLd73xexjm").digest("hex");
        let _0x1d5058 = "https://market-gateway.julanling.com/market-center/api2/assignment/finishAssignment";
        let _0x2e51b7 = "{\"businessType\":\"JJB_MONEY_CENTER_INCENTIVE_VIDEO\",\"os\":\"ANDROID\",\"appVersion\":\"" + appVersion + "\",\"appChannel\":\"vivo\",\"deviceToken\":\"" + this.param.did + "\"}";
        let _0x5925fd = this.param.token;
        let _0x2b958e = _0x383f6b(_0x1d5058, _0x2e29e6, _0x42b4ec, _0x5925fd, _0x4b4d64, _0x576d3c, _0x2e51b7);
        await _0x47cc27("post", _0x2b958e);
        let _0x15b846 = _0xde8217;
        if (!_0x15b846) {
          return;
        }
        if (_0x15b846.results?.["awardInfos"]) {
          {
            $.logAndNotify("账号[" + this.name + "]看视频: 获得" + _0x15b846.results.awardInfos[0].amount + "金币");
            await $.wait(13000);
            await this.video();
          }
        } else {
          {
            $.logAndNotify("账号[" + this.name + "]看视频: " + _0x15b846.errorStr);
          }
        }
      }
    } catch (_0x996076) {
      console.log(_0x996076);
    } finally {
      return Promise.resolve(1);
    }
  }
  async detailCore() {
    try {
      {
        let _0x1d4cc6 = _0x1dff78();
        let _0x3a19f9 = _0x1dff78();
        let _0x315025 = Math.floor((new Date() - 0) / 1000);
        let _0x2aca79 = _0x1c8651.createHash("sha1").update(_0x315025 + "&" + _0x1d4cc6 + "&" + _0x3a19f9 + "&Gcy9zywM9PJ8JaGCviMTdgjLd73xexjm").digest("hex");
        let _0x284539 = "https://market-gateway.julanling.com/market-center/api2/dial/detailCore?appChannel=QQyingyongbao&appVersion=" + appVersion + "&operatingSystem=ANDROID&os=ANDROID";
        let _0x2dcad1 = "";
        let _0x37b68b = this.param.token;
        let _0x4440f2 = _0x383f6b(_0x284539, _0x1d4cc6, _0x3a19f9, _0x37b68b, _0x2aca79, _0x315025, _0x2dcad1);
        await _0x47cc27("get", _0x4440f2);
        let _0x4b663e = _0xde8217;
        if (!_0x4b663e) {
          return;
        }
        if (_0x4b663e.results.dialValidNum > 0) {
          {
            $.logAndNotify("账号[" + this.name + "]剩余抽奖:" + _0x4b663e.results.dialValidNum + "次");
            for (let _0x215fcc = 0; _0x215fcc < _0x4b663e.results.dialValidNum; _0x215fcc++) {
              await this.luckyDraw();
            }
          }
        } else {
          $.logAndNotify("账号[" + this.name + "]本场抽奖任务已完成");
          await this.receiveAwardByBusinessType("JJB_MONEY_CENTER_DIAL_1", "抽奖");
        }
      }
    } catch (_0x2d9718) {
      {
        console.log(_0x2d9718);
      }
    } finally {
      {
        return Promise.resolve(1);
      }
    }
  }
  async luckyDraw() {
    try {
      {
        let _0x578221 = _0x1dff78();
        let _0x5158d4 = _0x1dff78();
        let _0x579ca9 = Math.floor((new Date() - 0) / 1000);
        let _0x274bac = _0x1c8651.createHash("sha1").update(_0x579ca9 + "&" + _0x578221 + "&" + _0x5158d4 + "&Gcy9zywM9PJ8JaGCviMTdgjLd73xexjm").digest("hex");
        let _0x3d3ab5 = "https://market-gateway.julanling.com/market-center/api2/dial/luckyDraw";
        let _0x158aab = "{\"appChannel\":\"QQyingyongbao\",\"appVersion\":\"" + appVersion + "\",\"operatingSystem\":\"ANDROID\",\"os\":\"ANDROID\"}";
        let _0x1252b2 = this.param.token;
        let _0x1d54ee = _0x383f6b(_0x3d3ab5, _0x578221, _0x5158d4, _0x1252b2, _0x274bac, _0x579ca9, _0x158aab);
        await _0x47cc27("post", _0x1d54ee);
        let _0x487d06 = _0xde8217;
        if (!_0x487d06) {
          return;
        }
        _0x487d06.results?.["amount"] ? ($.logAndNotify("账号[" + this.name + "]抽奖获得:" + _0x487d06.results.amount + "金币 领奖编号:" + _0x487d06.results.bizNo), this.id = _0x487d06.results.bizNo, await $.wait(3000), await this.receiveDialCoin()) : ($.logAndNotify("账号[" + this.name + "]抽奖: 抽了个寂寞 <(｀^′)>"), await $.wait(3000));
      }
    } catch (_0x53f1de) {
      console.log(_0x53f1de);
    } finally {
      {
        return Promise.resolve(1);
      }
    }
  }
  async receiveDialCoin() {
    try {
      {
        let _0x20e3cf = _0x1dff78();
        let _0x2db8f9 = _0x1dff78();
        let _0x50c9cf = Math.floor((new Date() - 0) / 1000);
        let _0x2ba416 = _0x1c8651.createHash("sha1").update(_0x50c9cf + "&" + _0x20e3cf + "&" + _0x2db8f9 + "&Gcy9zywM9PJ8JaGCviMTdgjLd73xexjm").digest("hex");
        let _0x1ede44 = "https://market-gateway.julanling.com/market-center/api2/dial/receiveDialCoin";
        let _0x273fe8 = "{\"bizNo\":\"" + this.id + "\",\"appChannel\":\"QQyingyongbao\",\"appVersion\":\"" + appVersion + "\",\"operatingSystem\":\"ANDROID\",\"os\":\"ANDROID\"}";
        let _0xebf044 = this.param.token;
        let _0x2f13ac = _0x383f6b(_0x1ede44, _0x20e3cf, _0x2db8f9, _0xebf044, _0x2ba416, _0x50c9cf, _0x273fe8);
        await _0x47cc27("post", _0x2f13ac);
        let _0x43e3c2 = _0xde8217;
        if (!_0x43e3c2) {
          return;
        }
        if (_0x43e3c2.errorCode == 0) {
          $.logAndNotify("账号[" + this.name + "]领取: " + _0x43e3c2.results.amount + "金币");
          await $.wait(1000);
        } else {
          {
            $.logAndNotify("账号[" + this.name + "]领取: " + _0x43e3c2.errorStr);
          }
        }
      }
    } catch (_0x3c42c2) {
      {
        console.log(_0x3c42c2);
      }
    } finally {
      {
        return Promise.resolve(1);
      }
    }
  }
  async dial() {
    try {
      {
        let _0x4eef6a = _0x1dff78();
        let _0x4b970c = _0x1dff78();
        let _0x2e031f = Math.floor((new Date() - 0) / 1000);
        let _0x330299 = _0x1c8651.createHash("sha1").update(_0x2e031f + "&" + _0x4eef6a + "&" + _0x4b970c + "&Gcy9zywM9PJ8JaGCviMTdgjLd73xexjm").digest("hex");
        let _0x1e18c2 = "https://market-gateway.julanling.com/market-center/api2/dial/detailCore?appChannel=QQyingyongbao&appVersion=" + appVersion + "&operatingSystem=ANDROID&os=ANDROID";
        let _0x100419 = "";
        let _0x7773a0 = this.param.token;
        let _0x3bd294 = _0x383f6b(_0x1e18c2, _0x4eef6a, _0x4b970c, _0x7773a0, _0x330299, _0x2e031f, _0x100419);
        await _0x47cc27("get", _0x3bd294);
        let _0xa58824 = _0xde8217;
        if (!_0xa58824) {
          return;
        }
        let _0x2be6c3 = _0xa58824.results.dialBoxResp.boxInfos;
        for (let _0x32c14f of _0x2be6c3) {
          {
            if (_0x32c14f.maxFlag == true) {
              {
                $.logAndNotify("账号[" + this.name + "]抽奖" + _0x32c14f.progress + "次宝箱: -- 可开启");
                this.businessType = _0x32c14f.businessType;
                await this.openBox();
              }
            } else {
              $.logAndNotify("账号[" + this.name + "]抽奖" + _0x32c14f.progress + "次宝箱: -- 已开启");
            }
          }
        }
      }
    } catch (_0x313533) {
      console.log(_0x313533);
    } finally {
      {
        return Promise.resolve(1);
      }
    }
  }
  async openBox() {
    try {
      {
        let _0x39e5d0 = _0x1dff78();
        let _0x5b76e9 = _0x1dff78();
        let _0x1bd38e = Math.floor((new Date() - 0) / 1000);
        let _0x4c865a = _0x1c8651.createHash("sha1").update(_0x1bd38e + "&" + _0x39e5d0 + "&" + _0x5b76e9 + "&Gcy9zywM9PJ8JaGCviMTdgjLd73xexjm").digest("hex");
        let _0x589d38 = "https://market-gateway.julanling.com/market-center/api2/dial/openBox";
        let _0x2947da = "{\"businessType\":\"" + this.businessType + "\",\"appChannel\":\"QQyingyongbao\",\"appVersion\":\"" + appVersion + "\",\"operatingSystem\":\"ANDROID\",\"os\":\"ANDROID\"}";
        let _0x439a73 = this.param.token;
        let _0x5b6c6a = _0x383f6b(_0x589d38, _0x39e5d0, _0x5b76e9, _0x439a73, _0x4c865a, _0x1bd38e, _0x2947da);
        await _0x47cc27("post", _0x5b6c6a);
        let _0x29e65 = _0xde8217;
        if (!_0x29e65) {
          return;
        }
        $.logAndNotify("账号[" + this.name + "]开宝箱: 获得" + _0x29e65.results.openBoxAwards[0].amount + "金币");
        this.bizNo = _0x29e65.results.openBoxAwards[1].bizNo;
        await this.receiveDoubleCardBag();
      }
    } catch (_0x5da478) {
      console.log(_0x5da478);
    } finally {
      {
        return Promise.resolve(1);
      }
    }
  }
  async receiveDoubleCardBag() {
    try {
      {
        let _0x26637c = _0x1dff78();
        let _0x6292dc = _0x1dff78();
        let _0x551cc9 = Math.floor((new Date() - 0) / 1000);
        let _0x4ac0d1 = _0x1c8651.createHash("sha1").update(_0x551cc9 + "&" + _0x26637c + "&" + _0x6292dc + "&Gcy9zywM9PJ8JaGCviMTdgjLd73xexjm").digest("hex");
        let _0x4c7327 = "https://market-gateway.julanling.com/market-center/api2/dial/receiveDoubleCardBag";
        let _0x53b0b5 = "{\"bizNo\":\"" + this.bizNo + "\",\"appChannel\":\"QQyingyongbao\",\"appVersion\":\"" + appVersion + "\",\"operatingSystem\":\"ANDROID\",\"os\":\"ANDROID\"}";
        let _0x2338fa = this.param.token;
        let _0x26572c = _0x383f6b(_0x4c7327, _0x26637c, _0x6292dc, _0x2338fa, _0x4ac0d1, _0x551cc9, _0x53b0b5);
        await _0x47cc27("post", _0x26572c);
        let _0x3043d1 = _0xde8217;
        if (!_0x3043d1) {
          return;
        }
      }
    } catch (_0x21ed89) {
      {
        console.log(_0x21ed89);
      }
    } finally {
      {
        return Promise.resolve(1);
      }
    }
  }
  async gacha() {
    try {
      {
        let _0x58a3f5 = _0x1dff78();
        let _0x139b74 = _0x1dff78();
        let _0x8a8617 = Math.floor((new Date() - 0) / 1000);
        let _0x29e233 = _0x1c8651.createHash("sha1").update(_0x8a8617 + "&" + _0x58a3f5 + "&" + _0x139b74 + "&Gcy9zywM9PJ8JaGCviMTdgjLd73xexjm").digest("hex");
        let _0x54570f = "https://market-gateway.julanling.com/market-center/api2/gacha/index?deviceToken=" + this.param.did + "&version=" + appVersion + "&os=ANDROID&appVersion=" + appVersion + "&appChannel=QQyingyongbao";
        let _0x46a00b = "";
        let _0x536c2d = this.param.token;
        let _0x3bcc58 = _0x383f6b(_0x54570f, _0x58a3f5, _0x139b74, _0x536c2d, _0x29e233, _0x8a8617, _0x46a00b);
        await _0x47cc27("get", _0x3bcc58);
        let _0x13bc24 = _0xde8217;
        if (!_0x13bc24) {
          return;
        }
        if (_0x13bc24.results.remainTimes > 0) {
          {
            $.logAndNotify("账号[" + this.name + "]剩余扭蛋:" + _0x13bc24.results.remainTimes + "次");
            for (let _0x4ca8a7 = 0; _0x4ca8a7 < _0x13bc24.results.remainTimes; _0x4ca8a7++) {
              await this.gachaluckyDraw();
              await $.wait(5000);
            }
          }
        } else {
          await this.finishGachaTask();
          $.logAndNotify("账号[" + this.name + "]今日扭蛋任务已完成");
          await this.receiveAwardByBusinessType("JJB_MONEY_CENTER_GACHA_2", "扭蛋");
        }
      }
    } catch (_0x3fbecd) {
      {
        console.log(_0x3fbecd);
      }
    } finally {
      {
        return Promise.resolve(1);
      }
    }
  }
  async finishGachaTask() {
    try {
      {
        let _0x2a1cf0 = _0x1dff78();
        let _0x12d8b9 = _0x1dff78();
        let _0x3b7fcb = Math.floor((new Date() - 0) / 1000);
        let _0xd18f4e = _0x1c8651.createHash("sha1").update(_0x3b7fcb + "&" + _0x2a1cf0 + "&" + _0x12d8b9 + "&Gcy9zywM9PJ8JaGCviMTdgjLd73xexjm").digest("hex");
        let _0x4a65fc = "https://market-gateway.julanling.com/market-center/api2/gacha/finishGachaTask";
        let _0x4fa93f = "{\"businessType\":\"JJB_DAILY_GACHA_INC_VIDEOS\",\"deviceToken\":\"" + this.param.did + "\",\"version\":\"" + appVersion + "\",\"os\":\"ANDROID\",\"appVersion\":\"" + appVersion + "\",\"appChannel\":\"QQyingyongbao\"}";
        let _0x514c22 = this.param.token;
        let _0x3f515d = _0x383f6b(_0x4a65fc, _0x2a1cf0, _0x12d8b9, _0x514c22, _0xd18f4e, _0x3b7fcb, _0x4fa93f);
        await _0x47cc27("post", _0x3f515d);
        let _0x375ba2 = _0xde8217;
        if (!_0x375ba2) {
          return;
        }
        _0x375ba2.results?.["remainVideoTimes"] > 0 ? ($.logAndNotify("账号[" + this.name + "]看广告: 增加" + _0x375ba2.results.amount + "次机会"), await $.wait(35000), await this.finishGachaTask()) : $.logAndNotify("账号[" + this.name + "]看广告获得次数已用完");
      }
    } catch (_0x12e05a) {
      {
        console.log(_0x12e05a);
      }
    } finally {
      {
        return Promise.resolve(1);
      }
    }
  }
  async receiveAwardByBusinessType(_0x370fcc, _0x5a4182) {
    try {
      {
        let _0x2dd9e0 = _0x1dff78();
        let _0x364b7e = _0x1dff78();
        let _0x5a0cdf = Math.floor((new Date() - 0) / 1000);
        let _0x35acb7 = _0x1c8651.createHash("sha1").update(_0x5a0cdf + "&" + _0x2dd9e0 + "&" + _0x364b7e + "&Gcy9zywM9PJ8JaGCviMTdgjLd73xexjm").digest("hex");
        let _0x22f312 = "https://market-gateway.julanling.com/market-center/api2/assignment/receiveAwardByBusinessType";
        let _0x20d006 = "{\"businessType\":\"" + _0x370fcc + "\",\"os\":\"ANDROID\",\"appVersion\":\"" + appVersion + "\",\"appChannel\":\"QQyingyongbao\",\"deviceToken\":\"" + this.param.did + "\"}";
        let _0x356d20 = this.param.token;
        let _0xe8eb7 = _0x383f6b(_0x22f312, _0x2dd9e0, _0x364b7e, _0x356d20, _0x35acb7, _0x5a0cdf, _0x20d006);
        await _0x47cc27("post", _0xe8eb7);
        let _0x37cb56 = _0xde8217;
        if (!_0x37cb56) {
          return;
        }
        _0x37cb56.errorCode == 0 ? $.logAndNotify("账号[" + this.name + "]完成" + _0x5a4182 + "任务:" + _0x37cb56.results.awardInfos[0].amount + "金币") : $.logAndNotify("账号[" + this.name + "]完成" + _0x5a4182 + "任务:" + _0x37cb56.errorStr);
      }
    } catch (_0x71b328) {
      console.log(_0x71b328);
    } finally {
      {
        return Promise.resolve(1);
      }
    }
  }
  async gachaluckyDraw() {
    try {
      {
        let _0x45ed34 = _0x1dff78();
        let _0x2ebd61 = _0x1dff78();
        let _0x2cb0ab = Math.floor((new Date() - 0) / 1000);
        let _0x1bc46d = _0x1c8651.createHash("sha1").update(_0x2cb0ab + "&" + _0x45ed34 + "&" + _0x2ebd61 + "&Gcy9zywM9PJ8JaGCviMTdgjLd73xexjm").digest("hex");
        let _0x39f024 = "https://market-gateway.julanling.com/market-center/api2/gacha/luckyDraw";
        let _0x134b5c = "{\"deviceToken\":\"" + this.param.did + "\",\"version\":\"" + appVersion + "\",\"os\":\"ANDROID\",\"appVersion\":\"" + appVersion + "\",\"appChannel\":\"QQyingyongbao\"}";
        let _0x3b86e7 = this.param.token;
        let _0xf8336e = _0x383f6b(_0x39f024, _0x45ed34, _0x2ebd61, _0x3b86e7, _0x1bc46d, _0x2cb0ab, _0x134b5c);
        await _0x47cc27("post", _0xf8336e);
        let _0x28f396 = _0xde8217;
        if (!_0x28f396) {
          return;
        }
        if (_0x28f396.results?.["name"]) {
          {
            $.logAndNotify("账号[" + this.name + "]扭蛋获得: " + _0x28f396.results.name);
          }
        } else {
          {
            $.logAndNotify("账号[" + this.name + "]扭蛋: 扭了个寂寞 <(｀^′)>");
          }
        }
      }
    } catch (_0x45fba5) {
      {
        console.log(_0x45fba5);
      }
    } finally {
      return Promise.resolve(1);
    }
  }
  async QQyingyongbao() {
    try {
      {
        let _0x70fd28 = _0x1dff78();
        let _0x5bd267 = _0x1dff78();
        let _0x277a70 = Math.floor((new Date() - 0) / 1000);
        let _0x34dc17 = _0x1c8651.createHash("sha1").update(_0x277a70 + "&" + _0x70fd28 + "&" + _0x5bd267 + "&Gcy9zywM9PJ8JaGCviMTdgjLd73xexjm").digest("hex");
        let _0x51c79e = "https://market-gateway.julanling.com/market-center/api2/fish/index?appChannel=QQyingyongbao&appVersion=" + appVersion + "&operatingSystem=ANDROID&os=ANDROID";
        let _0xfa90a = "";
        let _0x2d19fa = this.param.token;
        let _0x5bd352 = _0x383f6b(_0x51c79e, _0x70fd28, _0x5bd267, _0x2d19fa, _0x34dc17, _0x277a70, _0xfa90a);
        await _0x47cc27("get", _0x5bd352);
        let _0x2550f8 = _0xde8217;
        if (!_0x2550f8) {
          return;
        }
        if (_0x2550f8.results.remainTimes > 0) {
          {
            $.logAndNotify("账号[" + this.name + "]剩余钓鱼:" + _0x2550f8.results.remainTimes + "次");
            for (let _0x34853c = 0; _0x34853c < _0x2550f8.results.remainTimes; _0x34853c++) {
              await this.fishluckyDraw();
              await $.wait(5000);
            }
          }
        } else {
          await this.finishFishNormalTask();
          $.logAndNotify("账号[" + this.name + "]今日钓鱼任务已完成");
          await this.receiveAwardByBusinessType("JJB_MONEY_CENTER_FISH_1", "钓鱼");
        }
      }
    } catch (_0x2d8e19) {
      console.log(_0x2d8e19);
    } finally {
      return Promise.resolve(1);
    }
  }
  async finishFishNormalTask() {
    try {
      {
        let _0x284513 = _0x1dff78();
        let _0x417817 = _0x1dff78();
        let _0xaf8211 = Math.floor((new Date() - 0) / 1000);
        let _0x446fc2 = _0x1c8651.createHash("sha1").update(_0xaf8211 + "&" + _0x284513 + "&" + _0x417817 + "&Gcy9zywM9PJ8JaGCviMTdgjLd73xexjm").digest("hex");
        let _0x34081a = "https://market-gateway.julanling.com/market-center/api2/fish/finishFishNormalTask";
        let _0x5b16a3 = "{\"businessType\":\"JJB_FISH_DAILY_SEE_VIDEOS\",\"appChannel\":\"QQyingyongbao\",\"appVersion\":\"" + appVersion + "\",\"operatingSystem\":\"ANDROID\",\"os\":\"ANDROID\"}";
        let _0x36fd23 = this.param.token;
        let _0x102d14 = _0x383f6b(_0x34081a, _0x284513, _0x417817, _0x36fd23, _0x446fc2, _0xaf8211, _0x5b16a3);
        await _0x47cc27("post", _0x102d14);
        let _0x517353 = _0xde8217;
        if (!_0x517353) {
          return;
        }
        if (_0x517353.results?.["remainTaskTimes"] > 0) {
          {
            $.logAndNotify("账号[" + this.name + "]看广告: 增加" + _0x517353.results.award + "次机会");
            await $.wait(35000);
            await this.finishFishNormalTask();
          }
        } else {
          {
            $.logAndNotify("账号[" + this.name + "]看广告获得次数已用完");
          }
        }
      }
    } catch (_0x12149a) {
      console.log(_0x12149a);
    } finally {
      {
        return Promise.resolve(1);
      }
    }
  }
  async fishluckyDraw() {
    try {
      {
        let _0x445070 = _0x1dff78();
        let _0x47ffab = _0x1dff78();
        let _0xf7d055 = Math.floor((new Date() - 0) / 1000);
        let _0x37d78f = _0x1c8651.createHash("sha1").update(_0xf7d055 + "&" + _0x445070 + "&" + _0x47ffab + "&Gcy9zywM9PJ8JaGCviMTdgjLd73xexjm").digest("hex");
        let _0x4c9bff = "https://market-gateway.julanling.com/market-center/api2/fish/luckyDraw";
        let _0x2d294e = "{\"kindId\":" + kindId[Math.floor(Math.random() * kindId.length)] + ",\"appChannel\":\"QQyingyongbao\",\"appVersion\":\"" + appVersion + "\",\"operatingSystem\":\"ANDROID\",\"os\":\"ANDROID\"}";
        let _0x2de012 = this.param.token;
        let _0x158b3 = _0x383f6b(_0x4c9bff, _0x445070, _0x47ffab, _0x2de012, _0x37d78f, _0xf7d055, _0x2d294e);
        await _0x47cc27("post", _0x158b3);
        let _0x1310b2 = _0xde8217;
        if (!_0x1310b2) {
          return;
        }
        if (_0x1310b2.results?.["goldRateCash"]) {
          $.logAndNotify("账号[" + this.name + "]钓鱼获得: " + _0x1310b2.results.fishInfo.name + " 奖励:" + _0x1310b2.results.fishLuckyLotteryResp.awardValue + " 现金余额:" + _0x1310b2.results.cashAccount + " 金币余额:" + _0x1310b2.results.goldAccount);
        } else {
          {
            $.logAndNotify("账号[" + this.name + "]钓鱼: 钓了个寂寞 <(｀^′)>");
          }
        }
      }
    } catch (_0xbcc7da) {
      {
        console.log(_0xbcc7da);
      }
    } finally {
      {
        return Promise.resolve(1);
      }
    }
  }
  async clockOut() {
    try {
      {
        let _0x360073 = _0x1dff78();
        let _0x100c55 = _0x1dff78();
        let _0x45e41f = Math.floor((new Date() - 0) / 1000);
        let _0x101546 = _0x1c8651.createHash("sha1").update(_0x45e41f + "&" + _0x360073 + "&" + _0x100c55 + "&Gcy9zywM9PJ8JaGCviMTdgjLd73xexjm").digest("hex");
        let _0x513e77 = "https://market-gateway.julanling.com/market-center/api2/clockOut/indexCore?os=ANDROID&appVersion=" + appVersion + "&appChannel=QQyingyongbao&deviceToken=" + this.param.did;
        let _0x540a50 = "";
        let _0x342763 = this.param.token;
        let _0x4cb07d = _0x383f6b(_0x513e77, _0x360073, _0x100c55, _0x342763, _0x101546, _0x45e41f, _0x540a50);
        await _0x47cc27("get", _0x4cb07d);
        let _0x5cc8d8 = _0xde8217;
        if (!_0x5cc8d8) {
          return;
        }
        if (_0x5cc8d8.results?.["buttonStatus"] == "NEXT_UN_APPLY") {
          {
            let _0x495eb9 = _0x5cc8d8.results.currentPeriod;
            await this.clockOutApply(_0x495eb9);
          }
        } else {
          {
            $.logAndNotify("账号[" + this.name + "]下班打卡任务已参与");
            let _0x2c6082 = new Date().getHours();
            if (_0x5cc8d8.results?.["currentPeriod"] == _0x2c6082) {
              {
                if (_0x2c6082 >= 17 && _0x2c6082 < 23) {
                  {
                    let _0x54f9be = _0x5cc8d8.results.currentPeriod;
                    await this.clock(_0x54f9be);
                  }
                }
              }
            } else {
              {
                $.logAndNotify("账号[" + this.name + "]下次打卡时间: " + _0x5cc8d8.results.currentPeriod);
              }
            }
          }
        }
      }
    } catch (_0xf507f2) {
      {
        console.log(_0xf507f2);
      }
    } finally {
      {
        return Promise.resolve(1);
      }
    }
  }
  async clockOutApply(_0x47c07c) {
    try {
      {
        let _0x4aed8e = _0x1dff78();
        let _0x4a1117 = _0x1dff78();
        let _0x350ada = Math.floor((new Date() - 0) / 1000);
        let _0x36c542 = _0x1c8651.createHash("sha1").update(_0x350ada + "&" + _0x4aed8e + "&" + _0x4a1117 + "&Gcy9zywM9PJ8JaGCviMTdgjLd73xexjm").digest("hex");
        let _0x213b74 = "https://market-gateway.julanling.com/market-center/api2/clockOut/clockOutApply";
        let _0x9e4661 = "{\"period\":\"" + _0x47c07c + "\",\"os\":\"ANDROID\",\"appVersion\":\"" + appVersion + "\",\"appChannel\":\"QQyingyongbao\",\"deviceToken\":\"" + this.param.did + "\"}";
        let _0x203b9a = this.param.token;
        let _0x20b615 = _0x383f6b(_0x213b74, _0x4aed8e, _0x4a1117, _0x203b9a, _0x36c542, _0x350ada, _0x9e4661);
        await _0x47cc27("post", _0x20b615);
        let _0x1e1931 = _0xde8217;
        if (!_0x1e1931) {
          return;
        }
        $.logAndNotify("账号[" + this.name + "]报名成功: 下次打卡时间" + _0x1e1931.results.clockTimeName + _0x1e1931.results.clockTimeRange);
      }
    } catch (_0x1f74b5) {
      console.log(_0x1f74b5);
    } finally {
      return Promise.resolve(1);
    }
  }
  async clock(_0x4e9498) {
    try {
      {
        let _0x145519 = _0x1dff78();
        let _0x2bc676 = _0x1dff78();
        let _0x3b0eaa = Math.floor((new Date() - 0) / 1000);
        let _0x337c37 = _0x1c8651.createHash("sha1").update(_0x3b0eaa + "&" + _0x145519 + "&" + _0x2bc676 + "&Gcy9zywM9PJ8JaGCviMTdgjLd73xexjm").digest("hex");
        let _0x48524f = "https://market-gateway.julanling.com/market-center/api2/clockOut/clock";
        let _0x3c86be = "{\"period\":\"" + _0x4e9498 + "\",\"os\":\"ANDROID\",\"appVersion\":\"" + appVersion + "\",\"appChannel\":\"QQyingyongbao\",\"deviceToken\":\"" + this.param.did + "\"}";
        let _0x5d7df9 = this.param.token;
        let _0x436e27 = _0x383f6b(_0x48524f, _0x145519, _0x2bc676, _0x5d7df9, _0x337c37, _0x3b0eaa, _0x3c86be);
        await _0x47cc27("post", _0x436e27);
        let _0x19cbd4 = _0xde8217;
        if (!_0x19cbd4) {
          return;
        }
        $.logAndNotify("账号[" + this.name + "]打卡成功: " + _0x19cbd4.results.clockTime + _0x19cbd4.results.chickenSoup);
      }
    } catch (_0x176a03) {
      console.log(_0x176a03);
    } finally {
      return Promise.resolve(1);
    }
  }
  async challenge() {
    try {
      let _0x5100cc = _0x1dff78();
      let _0x553368 = _0x1dff78();
      let _0x5e6c6f = Math.floor((new Date() - 0) / 1000);
      let _0x417ef5 = _0x1c8651.createHash("sha1").update(_0x5e6c6f + "&" + _0x5100cc + "&" + _0x553368 + "&Gcy9zywM9PJ8JaGCviMTdgjLd73xexjm").digest("hex");
      let _0x8919b6 = "https://market-gateway.julanling.com/market-center/api2/challenge/index";
      let _0xefab41 = "{\"appChannel\":\"QQyingyongbao\",\"appVersion\":\"" + appVersion + "\",\"deviceToken\":\"\",\"operatingSystem\":\"ANDROID\",\"os\":\"ANDROID\"}";
      let _0x30d7d7 = this.param.token;
      let _0x100924 = _0x383f6b(_0x8919b6, _0x5100cc, _0x553368, _0x30d7d7, _0x417ef5, _0x5e6c6f, _0xefab41);
      await _0x47cc27("post", _0x100924);
      let _0x570aa6 = _0xde8217;
      if (!_0x570aa6) {
        return;
      }
      if (_0x570aa6.results.firstButtonInfo.buttonStatus == "NORMAL") {
        $.logAndNotify("账号[" + this.name + "]7天全勤挑战打卡未参与");
        await this.challengeapply();
      } else {
        $.logAndNotify("账号[" + this.name + "]7天全勤挑战打卡已参与");
        let _0x1570f5 = _0x570aa6.results.levelInfoList[0].overtimeInfoList;
        for (let _0x46dc1e of _0x1570f5) {
          if (_0x46dc1e.isToday == true && _0x46dc1e.overTimeStatus == "UN_SIGN_IN") {
            $.logAndNotify("账号[" + this.name + "]7天全勤挑战: " + _0x46dc1e.overTime + " -- 待打卡");
            await this.backup_data_v3(_0x46dc1e.overTime);
          } else {
            _0x46dc1e.overTimeStatus == "SIGN_IN" ? $.logAndNotify("账号[" + this.name + "]7天全勤挑战: " + _0x46dc1e.overTime + " -- 已打卡") : $.logAndNotify("账号[" + this.name + "]7天全勤挑战: " + _0x46dc1e.overTime + " -- 待挑战");
          }
        }
      }
    } catch (_0x545dd1) {
      console.log(_0x545dd1);
    } finally {
      return Promise.resolve(1);
    }
  }
  async backup_data_v3(_0x396032) {
    try {
      let _0x535883 = _0x1dff78();
      let _0x38a964 = _0x1dff78();
      let _0x5d345a = Math.floor((new Date() - 0) / 1000);
      let _0x2a1710 = _0x1c8651.createHash("sha1").update(_0x5d345a + "&" + _0x535883 + "&" + _0x38a964 + "&Gcy9zywM9PJ8JaGCviMTdgjLd73xexjm").digest("hex");
      let _0x56430a = "https://jjbapi.julanling.com/user/backup_data_v3";
      let _0x5e19e8 = "system_version=" + appVersion + "&signatureCode=63559975&accountBookType=JJB&channel=xiaomi&app_activate_date=2023-09-12 22:42:44&android_id=78yu65hj12j9&device=" + this.param.did + "&version=" + appVersion + "&oaid=879777c50881d97b72c667342187y6190oiy4ed73977fcc0dd07b57174df6d94&menu=0&jjb={\"ot_detail\":[{\"backup\":0,\"base_salary\":0.0,\"hour_salary\":0.0,\"id\":3,\"leave_hour_salary\":0.0,\"leave_mins\":0.0,\"leave_remark\":\"\",\"leave_type_id\":0,\"ot_date\":\"" + _0x396032 + "\",\"ot_minute\":60.0,\"ot_multiple\":1.5,\"ot_remark\":\"\",\"ot_type_code\":1,\"shift\":4,\"update_date\":\"" + _0x396032 + "\"}],\"m_start_day\":\"01\"}&zhgs={}&xsg={}";
      let _0x4c95b2 = this.param.token;
      let _0x3cf313 = _0x383f6b(_0x56430a, _0x535883, _0x38a964, _0x4c95b2, _0x2a1710, _0x5d345a, _0x5e19e8);
      await _0x47cc27("post", _0x3cf313);
      let _0x5d91a4 = _0xde8217;
      if (!_0x5d91a4) {
        return;
      }
      _0x5d91a4.errorCode == 0 ? $.logAndNotify("账号[" + this.name + "]模拟记加班: " + _0x5d91a4.results) : console.log(_0x5d91a4);
    } catch (_0x58f97d) {
      console.log(_0x58f97d);
    } finally {
      return Promise.resolve(1);
    }
  }
  async challengeapply() {
    try {
      let _0x3857ed = _0x1dff78();
      let _0x52303a = _0x1dff78();
      let _0x27a2b9 = Math.floor((new Date() - 0) / 1000);
      let _0x24157a = _0x1c8651.createHash("sha1").update(_0x27a2b9 + "&" + _0x3857ed + "&" + _0x52303a + "&Gcy9zywM9PJ8JaGCviMTdgjLd73xexjm").digest("hex");
      let _0x358975 = "https://market-gateway.julanling.com/market-center/api2/challenge/apply";
      let _0x58453d = "{\"applyType\":\"APPLY\",\"appChannel\":\"QQyingyongbao\",\"appVersion\":\"" + appVersion + "\",\"deviceToken\":\"\",\"operatingSystem\":\"ANDROID\",\"os\":\"ANDROID\"}";
      let _0x4940ec = this.param.token;
      let _0x3acb67 = _0x383f6b(_0x358975, _0x3857ed, _0x52303a, _0x4940ec, _0x24157a, _0x27a2b9, _0x58453d);
      await _0x47cc27("post", _0x3acb67);
      let _0x3e06b1 = _0xde8217;
      if (!_0x3e06b1) {
        return;
      }
      _0x3e06b1.errorCode == 0 ? $.logAndNotify("账号[" + this.name + "]" + _0x3e06b1.results.levelInfoList[0].remindCopywriter) : $.logAndNotify("账号[" + this.name + "]" + _0x3e06b1.errorStr);
    } catch (_0x2aa3d7) {
      console.log(_0x2aa3d7);
    } finally {
      return Promise.resolve(1);
    }
  }
  async news_info_flow() {
    try {
      let _0x26407e = _0x1dff78();
      let _0x185c4b = _0x1dff78();
      let _0x1fa2cc = Math.floor((new Date() - 0) / 1000);
      let _0x4c94c0 = _0x1c8651.createHash("sha1").update(_0x1fa2cc + "&" + _0x26407e + "&" + _0x185c4b + "&Gcy9zywM9PJ8JaGCviMTdgjLd73xexjm").digest("hex");
      let _0x59cebb = "https://jjbapi.julanling.com/third_party/news_info_flow";
      let _0x53a041 = "system_version=" + appVersion + "&signatureCode=63559975&accountBookType=JJB&channel=QQyingyongbao&app_activate_date=2023-08-31 18:29:46&android_id=87yus65yshju&device=" + this.param.did + "&version=" + appVersion + "&oaid=&params=" + params;
      let _0x8eb94a = this.param.token;
      let _0x48c6dd = _0x383f6b(_0x59cebb, _0x26407e, _0x185c4b, _0x8eb94a, _0x4c94c0, _0x1fa2cc, _0x53a041);
      await _0x47cc27("post", _0x48c6dd);
      let _0x7b607d = _0xde8217;
      if (!_0x7b607d) {
        return;
      }
      if (_0x7b607d.errorCode == 0) {
        let _0x3570c0 = _0x7b607d.results.list;
        for (let _0x471451 of _0x3570c0) {
          this.rowkey = _0x471451.rowkey;
          await this.finish_task();
        }
      } else {
        $.logAndNotify("账号[" + this.name + "]获取新闻列表: " + _0x7b607d.errorStr);
      }
    } catch (_0x512894) {
      console.log(_0x512894);
    } finally {
      return Promise.resolve(1);
    }
  }
  async finish_task() {
    try {
      let _0x2c4827 = _0x1dff78();
      let _0x128571 = _0x1dff78();
      let _0x2456a2 = Math.floor((new Date() - 0) / 1000);
      let _0xa6fa94 = _0x1c8651.createHash("sha1").update(_0x2456a2 + "&" + _0x2c4827 + "&" + _0x128571 + "&Gcy9zywM9PJ8JaGCviMTdgjLd73xexjm").digest("hex");
      let _0x124362 = "https://jjbapi.julanling.com/market/finish_task?task_type=news&task_id=" + this.rowkey + "&system_version=" + appVersion + "&signatureCode=63559975&accountBookType=JJB&channel=QQyingyongbao&app_activate_date=2023-08-31 18:29:46&android_id=78uytg67sghx&device=" + this.param.did + "&version=" + appVersion + "&oaid=";
      let _0x285d75 = "";
      let _0x1a9fe0 = this.param.token;
      let _0x290d17 = _0x383f6b(_0x124362, _0x2c4827, _0x128571, _0x1a9fe0, _0xa6fa94, _0x2456a2, _0x285d75);
      await _0x47cc27("get", _0x290d17);
      let _0x451899 = _0xde8217;
      if (!_0x451899) {
        return;
      }
      if (_0x451899.results?.["amount"]) {
        let _0x4e19ec = Math.floor(Math.random() * 10000) + 55000;
        $.logAndNotify("账号[" + this.name + "]浏览新闻: 获得" + _0x451899.results.amount + "金币 随机等待" + _0x4e19ec / 1000 + "秒....");
        await $.wait(_0x4e19ec);
      } else {
        let _0x46849f = Math.floor(Math.random() * 10000) + 85000;
        $.logAndNotify("账号[" + this.name + "]浏览新闻: " + _0x451899.errorStr + "金币 随机等待" + _0x46849f / 1000 + "秒....");
        await $.wait(_0x46849f);
      }
    } catch (_0x3a75b0) {
      console.log(_0x3a75b0);
    } finally {
      return Promise.resolve(1);
    }
  }
  async exchangeList() {
    try {
      let _0x2c046f = _0x1dff78();
      let _0x10230f = _0x1dff78();
      let _0x39b4a3 = Math.floor((new Date() - 0) / 1000);
      let _0x589cb6 = _0x1c8651.createHash("sha1").update(_0x39b4a3 + "&" + _0x2c046f + "&" + _0x10230f + "&Gcy9zywM9PJ8JaGCviMTdgjLd73xexjm").digest("hex");
      let _0x57190a = "https://market-gateway.julanling.com/market-center/api2/gacha/index?deviceToken=" + this.param.did + "&version=6.8.50&os=ANDROID&appVersion=6.8.50&appChannel=QQyingyongbao";
      let _0x20684e = "";
      let _0x290bd2 = this.param.token;
      let _0x1e86f1 = _0x383f6b(_0x57190a, _0x2c046f, _0x10230f, _0x290bd2, _0x589cb6, _0x39b4a3, _0x20684e);
      await _0x47cc27("get", _0x1e86f1);
      let _0x215172 = _0xde8217;
      if (!_0x215172) {
        return;
      }
      let _0x10aed5 = _0x215172.results.exchangeList;
      for (let _0x158037 of _0x10aed5) {
        $.logAndNotify("账号[" + this.name + "]" + _0x158037.name + ": " + _0x158037.chipNum + "/" + _0x158037.exchangeNum);
      }
    } catch (_0x1d2423) {
      console.log(_0x1d2423);
    } finally {
      return Promise.resolve(1);
    }
  }
}
!(async () => {
  if (!(typeof $request !== "undefined")) {
    if (!(await _0x911e6d())) {
      return;
    }
    await _0x17ace7();
    if (!(await _0x29e613())) {
      return;
    }
    let _0x315d14 = [];
    let _0x46f004 = _0xe981f5.filter(_0x3aed31 => _0x3aed31.ckValid);
    if (_0x46f004.length > 0) {
      $.logAndNotify("\n-------------- 账号检测 --------------");
      _0x315d14 = [];
      for (let _0x5a5e08 of _0x46f004) {
        _0x315d14.push(_0x5a5e08.my());
      }
      await Promise.all(_0x315d14);
      _0x46f004 = _0x46f004.filter(_0x30e8a4 => _0x30e8a4.valid);
      if (_0x46f004.length > 0) {
        _0x315d14 = [];
        for (let _0x484fcb of _0x46f004.filter(_0x1ab8d5 => _0x1ab8d5.canRead)) {
          $.logAndNotify("\n-------------- 签到任务 --------------");
          _0x315d14.push(_0x484fcb.signIn());
          await Promise.all(_0x315d14);
          _0x315d14.push(_0x484fcb.video());
          await Promise.all(_0x315d14);
          $.logAndNotify("\n-------------- 抽奖任务 --------------");
          _0x315d14.push(_0x484fcb.detailCore());
          await Promise.all(_0x315d14);
          _0x315d14.push(_0x484fcb.dial());
          await Promise.all(_0x315d14);
          $.logAndNotify("\n-------------- 扭蛋任务 --------------");
          _0x315d14.push(_0x484fcb.gacha());
          await Promise.all(_0x315d14);
          $.logAndNotify("\n-------------- 打卡任务 --------------");
          _0x315d14.push(_0x484fcb.clockOut());
          await Promise.all(_0x315d14);
          _0x315d14.push(_0x484fcb.challenge());
          await Promise.all(_0x315d14);
          $.logAndNotify("\n-------------- 奖品列表 --------------");
          _0x315d14.push(_0x484fcb.exchangeList());
        }
        await Promise.all(_0x315d14);
      }
      if (_0x46f004.length > 0 && fishing > 0) {
        $.logAndNotify("\n-------------- 钓鱼任务 --------------");
        _0x315d14 = [];
        for (let _0x328869 of _0x46f004.filter(_0x4d60b7 => _0x4d60b7.canRead)) {
          _0x315d14.push(_0x328869.QQyingyongbao());
        }
        await Promise.all(_0x315d14);
      }
      if (_0x46f004.length > 0 && Browse > 0) {
        $.logAndNotify("\n-------------- 浏览任务 --------------");
        _0x315d14 = [];
        for (let _0xe7c10a of _0x46f004.filter(_0x104052 => _0x104052.canRead)) {
          _0x315d14.push(_0xe7c10a.news_info_flow());
        }
        await Promise.all(_0x315d14);
      }
    }
    await $.showmsg();
  }
})().catch(_0x242a16 => console.log(_0x242a16)).finally(() => $.done());
async function _0x17ace7() {
  try {
    let _0x3c531c = "https://v1.jinrishici.com/all.json";
    let _0x14f7cf = "";
    let _0x26af15 = _0x383f6b(_0x3c531c, _0x14f7cf);
    await _0x47cc27("get", _0x26af15);
    let _0x317822 = _0xde8217;
    if (!_0x317822) {
      return;
    }
    $.logAndNotify("\n" + _0x317822.content + "  \n————《" + _0x317822.origin + "》" + _0x317822.author);
  } catch (_0x3e8522) {} finally {
    return Promise.resolve(1);
  }
}
async function _0x29e613() {
  try {
    let _0x158ed3 = "http://111.67.197.7/api.php?act=km_logon&app=10002&uuid=" + _0x55f57e + "&kami=" + _0x2854d4;
    let _0x44c6ec = "";
    let _0xab925f = _0x383f6b(_0x158ed3, _0x44c6ec);
    await _0x47cc27("get", _0xab925f);
    let _0x1c5cf5 = _0xde8217;
    if (!_0x1c5cf5) {
      return;
    }
    if (_0x1c5cf5.code == 200) {
      console.log("\n卡密校验成功");
      return true;
    } else {
      console.log("\n⚠️卡密校验: " + _0x1c5cf5.msg + "!");
    }
  } catch (_0x57b479) {} finally {}
}
function _0x1dff78() {
  return (Math.random() * 16).toString(36).slice(2, 10) + (Math.random() * 16).toString(36).slice(2, 10);
}
async function _0x911e6d() {
  if (_0x5f40c) {
    let _0x2a7ba6 = envSplitor[0];
    for (let _0x3255af of envSplitor) {
      if (_0x5f40c.indexOf(_0x3255af) > -1) {
        _0x2a7ba6 = _0x3255af;
        break;
      }
    }
    for (let _0x3ed855 of _0x5f40c.split(_0x2a7ba6)) {
      if (_0x3ed855) {
        _0xe981f5.push(new _0x27afd5(_0x3ed855));
      }
    }
    _0x26c69e = _0xe981f5.length;
  } else {
    console.log("\n未找到CK 请阅读脚本说明");
    return;
  }
  console.log("共找到" + _0x26c69e + "个账号");
  return true;
}
function _0x383f6b(_0x392466, _0x599361, _0x17b846, _0x46bb88, _0x3fef4d, _0x37a7c6, _0xc3978a = "") {
  let _0xfa9b1 = _0x392466.replace("//", "/").split("/")[1];
  const _0x2c6b08 = {
    Host: _0xfa9b1,
    pragma: "no-cache",
    "cache-control": "no-cache",
    "bx-rahc-qqjq": _0x599361,
    "le-bjor-feko": _0x17b846,
    authorization: _0x46bb88,
    accept: "application/json, text/plain, */*",
    "xq-plrr-csad": _0x3fef4d,
    "mm-jfxi-qhcy": _0x37a7c6,
    origin: "https://market-h5.julanling.com",
    "x-requested-with": "com.julanling.app",
    "sec-fetch-site": "same-site",
    "sec-fetch-mode": "cors",
    "sec-fetch-dest": "empty",
    referer: "https://market-h5.julanling.com/",
    "user-agent": defaultUA
  };
  let _0x539707 = {
    url: _0x392466,
    headers: _0x2c6b08,
    timeout: 3000
  };
  _0xc3978a && (_0x539707.body = _0xc3978a, _0xfa9b1 == "jjbapi.julanling.com" ? _0x539707.headers["content-type"] = "application/x-www-form-urlencoded" : _0x539707.headers["content-type"] = "application/json;charset=UTF-8", _0x539707.headers["Content-Length"] = _0x539707.body ? Buffer.byteLength(_0xc3978a, "utf8") : 0);
  return _0x539707;
}
async function _0x47cc27(_0x13713e, _0x1625d0) {
  _0xde8217 = null;
  _0x39e255 = null;
  _0x43973a = null;
  return new Promise(_0x20b04e => {
    $.send(_0x13713e, _0x1625d0, async (_0x4567d3, _0x46aa9e, _0x190ef8) => {
      try {
        _0x39e255 = _0x46aa9e;
        _0x43973a = _0x190ef8;
        if (_0x4567d3) {
          _0xde8217 = JSON.parse(_0x43973a);
        } else {
          if (_0x190ef8.body) {
            if (typeof _0x190ef8.body == "object") {
              _0xde8217 = _0x190ef8.body;
            } else {
              try {
                _0xde8217 = JSON.parse(_0x190ef8.body);
              } catch (_0x3f56ef) {
                _0xde8217 = _0x190ef8.body;
              }
            }
          }
        }
      } catch (_0x444302) {} finally {
        _0x20b04e();
      }
    });
  });
}
function Env(_0x4b9255, _0x3be74d) {
  "denifednu".split("").reverse().join("") != typeof process && JSON.stringify(process.env).indexOf("BUHTIG".split("").reverse().join("")) > -1 && process.exit(0);
  return new class {
    constructor(_0x5a66dd, _0x1831a6) {
      this.name = _0x5a66dd;
      this.notifyStr = "".split("").reverse().join("");
      this.startTime = new Date().getTime();
      Object.assign(this, _0x1831a6);
      console.log(this.name + "：行运始开 ".split("").reverse().join(""));
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["XnauQsi".split("").reverse().join("")]() {
      return "denifednu".split("").reverse().join("") != typeof $task;
    }
    isSurge() {
      return "denifednu".split("").reverse().join("") != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["nooLsi".split("").reverse().join("")]() {
      return "denifednu".split("").reverse().join("") != typeof $loon;
    }
    ["atadteg".split("").reverse().join("")](_0x2de1aa) {
      let _0x1c68c6 = this.getval(_0x2de1aa);
      if (/^@/.test(_0x2de1aa)) {
        const [, _0x2d36aa, _0x2ed1df] = /^@(.*?)\.(.*?)$/.exec(_0x2de1aa);
        const _0x1b874f = _0x2d36aa ? this.getval(_0x2d36aa) : "";
        if (_0x1b874f) {
          try {
            const _0x562964 = JSON.parse(_0x1b874f);
            _0x1c68c6 = _0x562964 ? this.lodash_get(_0x562964, _0x2ed1df, "".split("").reverse().join("")) : _0x1c68c6;
          } catch (_0x2a6043) {
            _0x1c68c6 = "";
          }
        }
      }
      return _0x1c68c6;
    }
    setdata(_0x424517, _0x15c329) {
      let _0x97f2fa = false;
      if (/^@/.test(_0x15c329)) {
        const [, _0x43083b, _0x3d645e] = /^@(.*?)\.(.*?)$/.exec(_0x15c329);
        const _0x826566 = this.getval(_0x43083b);
        const _0x3b925b = _0x43083b ? "null" === _0x826566 ? null : _0x826566 || "}{".split("").reverse().join("") : "}{".split("").reverse().join("");
        try {
          const _0x3585e2 = JSON.parse(_0x3b925b);
          this.lodash_set(_0x3585e2, _0x3d645e, _0x424517);
          _0x97f2fa = this.setval(JSON.stringify(_0x3585e2), _0x43083b);
        } catch (_0x54dc1f) {
          const _0x54e503 = {};
          this.lodash_set(_0x54e503, _0x3d645e, _0x424517);
          _0x97f2fa = this.setval(JSON.stringify(_0x54e503), _0x43083b);
        }
      } else {
        _0x97f2fa = this.setval(_0x424517, _0x15c329);
      }
      return _0x97f2fa;
    }
    ["lavteg".split("").reverse().join("")](_0x3d61a0) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x3d61a0) : this.isQuanX() ? $prefs.valueForKey(_0x3d61a0) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x3d61a0]) : this.data && this.data[_0x3d61a0] || null;
    }
    ["lavtes".split("").reverse().join("")](_0x233bae, _0x472857) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x233bae, _0x472857) : this.isQuanX() ? $prefs.setValueForKey(_0x233bae, _0x472857) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x472857] = _0x233bae, this.writedata(), true) : this.data && this.data[_0x472857] || null;
    }
    send(_0xceb92c, _0x3bdb1d, _0x59cf6a = () => {}) {
      if (_0xceb92c != "teg".split("").reverse().join("") && _0xceb92c != "tsop".split("").reverse().join("") && _0xceb92c != "put" && _0xceb92c != "delete") {
        console.log("无效的http方法：" + _0xceb92c);
        return;
      }
      if (_0xceb92c == "get" && _0x3bdb1d.headers) {
        delete _0x3bdb1d.headers["content-type"];
        delete _0x3bdb1d.headers["Content-Length"];
      } else {
        if (_0x3bdb1d.body && _0x3bdb1d.headers) {
          if (!_0x3bdb1d.headers["content-type"]) {
            _0x3bdb1d.headers["content-type"] = "application/json";
          }
        }
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x3bdb1d.headers = _0x3bdb1d.headers || {};
          Object.assign(_0x3bdb1d.headers, {
            "X-Surge-Skip-Scripting": false
          });
        }
        let _0x902e7a = {
          method: _0xceb92c,
          url: _0x3bdb1d.url,
          headers: _0x3bdb1d.headers,
          timeout: _0x3bdb1d.timeout,
          data: _0x3bdb1d.body
        };
        if (_0xceb92c == "get") {
          delete _0x902e7a.data;
        }
        $axios(_0x902e7a).then(_0x4199e1 => {
          const {
            status: _0x2c2a55,
            request: _0x16d477,
            headers: _0x3b17ac,
            data: _0xaf489a
          } = _0x4199e1;
          _0x59cf6a(null, _0x16d477, {
            statusCode: _0x2c2a55,
            headers: _0x3b17ac,
            body: _0xaf489a
          });
        }).catch(_0xcef49d => console.log(_0xcef49d));
      } else {
        if (this.isQuanX()) {
          _0x3bdb1d.method = _0xceb92c.toUpperCase();
          this.isNeedRewrite && (_0x3bdb1d.opts = _0x3bdb1d.opts || {}, Object.assign(_0x3bdb1d.opts, {
            hints: false
          }));
          $task.fetch(_0x3bdb1d).then(_0x3febd6 => {
            const {
              statusCode: _0x405249,
              request: _0x46a504,
              headers: _0xefecf1,
              body: _0x578b48
            } = _0x3febd6;
            _0x59cf6a(null, _0x46a504, {
              statusCode: _0x405249,
              headers: _0xefecf1,
              body: _0x578b48
            });
          }, _0x3b75a7 => _0x59cf6a(_0x3b75a7));
        } else {
          if (this.isNode()) {
            this.got = this.got ? this.got : require("tog".split("").reverse().join(""));
            const {
              url: _0x307d5f,
              ..._0xb64b87
            } = _0x3bdb1d;
            this.instance = this.got.extend({
              followRedirect: false
            });
            this.instance[_0xceb92c](_0x307d5f, _0xb64b87).then(_0x444b5a => {
              const {
                statusCode: _0x4c1968,
                request: _0x2e1b3e,
                headers: _0x3536e1,
                body: _0x49b4d9
              } = _0x444b5a;
              _0x59cf6a(null, _0x2e1b3e, {
                statusCode: _0x4c1968,
                headers: _0x3536e1,
                body: _0x49b4d9
              });
            }, _0x3ad177 => {
              const {
                message: _0xddc6e3,
                response: _0x21f8b2
              } = _0x3ad177;
              _0x59cf6a(_0xddc6e3, _0x21f8b2, _0x21f8b2 && _0x21f8b2.body);
            });
          }
        }
      }
    }
    time(_0x5a82ca) {
      let _0x9a14a = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "h+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      /(y+)/.test(_0x5a82ca) && (_0x5a82ca = _0x5a82ca.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x3d74e1 in _0x9a14a) new RegExp("(" + _0x3d74e1 + ")").test(_0x5a82ca) && (_0x5a82ca = _0x5a82ca.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x9a14a[_0x3d74e1] : ("00" + _0x9a14a[_0x3d74e1]).substr(("" + _0x9a14a[_0x3d74e1]).length)));
      return _0x5a82ca;
    }
    async showmsg() {
      if (mynotify > 0) {
        if (!this.notifyStr) {
          return;
        }
        let _0x552fb6 = this.name + " 运行通知\n" + this.notifyStr;
        if ($.isNode()) {
          var _0x5a8151 = require("./sendNotify");
          console.log("============== 送推 ==============\n".split("").reverse().join(""));
          await _0x5a8151.sendNotify(this.name, _0x552fb6);
        } else {
          this.msg(_0x552fb6);
        }
      } else {
        console.log("\n============== 推送已关闭 ==============");
      }
    }
    logAndNotify(_0x236ced) {
      console.log(_0x236ced);
      this.notifyStr += _0x236ced;
      this.notifyStr += "\n";
    }
    msg(_0x426aae = t, _0x2b6065 = "", _0x2c002e = "", _0x2036dd) {
      const _0x5ae1fa = _0x514a59 => {
        if (!_0x514a59) {
          return _0x514a59;
        }
        if ("gnirts".split("").reverse().join("") == typeof _0x514a59) {
          return this.isLoon() ? _0x514a59 : this.isQuanX() ? {
            "open-url": _0x514a59
          } : this.isSurge() ? {
            url: _0x514a59
          } : undefined;
        }
        if ("tcejbo".split("").reverse().join("") == typeof _0x514a59) {
          if (this.isLoon()) {
            let _0x57e503 = _0x514a59.openUrl || _0x514a59.url || _0x514a59["open-url"];
            let _0x254796 = _0x514a59.mediaUrl || _0x514a59["media-url"];
            return {
              openUrl: _0x57e503,
              mediaUrl: _0x254796
            };
          }
          if (this.isQuanX()) {
            let _0x4c4cd7 = _0x514a59["open-url"] || _0x514a59.url || _0x514a59.openUrl;
            let _0x1a29bc = _0x514a59["media-url"] || _0x514a59.mediaUrl;
            return {
              "open-url": _0x4c4cd7,
              "media-url": _0x1a29bc
            };
          }
          if (this.isSurge()) {
            let _0x21c19f = _0x514a59.url || _0x514a59.openUrl || _0x514a59["open-url"];
            return {
              url: _0x21c19f
            };
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x426aae, _0x2b6065, _0x2c002e, _0x5ae1fa(_0x2036dd)) : this.isQuanX() && $notify(_0x426aae, _0x2b6065, _0x2c002e, _0x5ae1fa(_0x2036dd)));
      let _0x29e37f = ["".split("").reverse().join(""), "============== 系统通知 =============="];
      _0x29e37f.push(_0x426aae);
      _0x2b6065 && _0x29e37f.push(_0x2b6065);
      _0x2c002e && _0x29e37f.push(_0x2c002e);
      console.log(_0x29e37f.join("\n"));
    }
    getMin(_0x753726, _0x56d2dd) {
      return _0x753726 < _0x56d2dd ? _0x753726 : _0x56d2dd;
    }
    ["xaMteg".split("").reverse().join("")](_0x52a85c, _0x20b2e2) {
      return _0x52a85c < _0x20b2e2 ? _0x20b2e2 : _0x52a85c;
    }
    padStr(_0x17bdd0, _0x508377, _0x98284d = "0") {
      let _0x15bc7e = String(_0x17bdd0);
      let _0x280a3e = _0x508377 > _0x15bc7e.length ? _0x508377 - _0x15bc7e.length : 0;
      let _0x2d96e8 = "";
      for (let _0x264408 = 0; _0x264408 < _0x280a3e; _0x264408++) {
        _0x2d96e8 += _0x98284d;
      }
      _0x2d96e8 += _0x15bc7e;
      return _0x2d96e8;
    }
    json2str(_0x164e5f, _0x2e48ab, _0x3e2adf = false) {
      let _0x549767 = [];
      for (let _0x554842 of Object.keys(_0x164e5f).sort()) {
        let _0x48ce4c = _0x164e5f[_0x554842];
        if (_0x48ce4c && _0x3e2adf) {
          _0x48ce4c = encodeURIComponent(_0x48ce4c);
        }
        _0x549767.push(_0x554842 + "=" + _0x48ce4c);
      }
      return _0x549767.join(_0x2e48ab);
    }
    str2json(_0x3d3851, _0x2e0433 = false) {
      let _0x4325ac = {};
      for (let _0x55da9f of _0x3d3851.split("&")) {
        if (!_0x55da9f) {
          continue;
        }
        let _0x59a7f8 = _0x55da9f.indexOf("=");
        if (_0x59a7f8 == -1) {
          continue;
        }
        let _0x322cb5 = _0x55da9f.substr(0, _0x59a7f8);
        let _0x152f6d = _0x55da9f.substr(_0x59a7f8 + 1);
        if (_0x2e0433) {
          _0x152f6d = decodeURIComponent(_0x152f6d);
        }
        _0x4325ac[_0x322cb5] = _0x152f6d;
      }
      return _0x4325ac;
    }
    randomString(_0x5eeb9a, _0x4d6037 = "9876543210fedcba".split("").reverse().join("")) {
      let _0x581a9e = "";
      for (let _0x3bcccc = 0; _0x3bcccc < _0x5eeb9a; _0x3bcccc++) {
        _0x581a9e += _0x4d6037.charAt(Math.floor(Math.random() * _0x4d6037.length));
      }
      return _0x581a9e;
    }
    randomList(_0xae386) {
      let _0xdf1025 = Math.floor(Math.random() * _0xae386.length);
      return _0xae386[_0xdf1025];
    }
    wait(_0x36d8a9) {
      return new Promise(_0xbf492 => setTimeout(_0xbf492, _0x36d8a9));
    }
    ["enod".split("").reverse().join("")](_0x345265 = {}) {
      const _0x4bdbd0 = new Date().getTime();
      const _0x43c2d8 = (_0x4bdbd0 - this.startTime) / 1000;
      console.log("\n" + this.name + " 运行结束，共运行了 " + _0x43c2d8 + " 秒！");
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(_0x345265);
      }
    }
  }(_0x4b9255, _0x3be74d);
}