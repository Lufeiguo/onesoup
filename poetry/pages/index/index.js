// index.js
// 获取应用实例
const app = getApp()
const jinrishici = require('../../utils/jinrishici.js');

Page({
  data: {
    hiddentranslate: true,
    motto: '',
    origin: '',
    author: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad()
  {
    var that = this;
    this.getMotto(that);
  },
  getMotto(that) {
    jinrishici.load(result => {
      // 下面是处理逻辑示例
      console.log(result);
      if (result.status == "success")
      {
        that.setData({
          title: result.data.origin.title,
          dynasty: result.data.origin.dynasty,
          author: result.data.origin.author,
          content: result.data.origin.content,
          translate: result.data.origin.translate == null ? "" : result.data.origin.translate,
          hiddentranslate:result.data.origin.translate == null ? true : false,
        })
      }
      else
      {
        that.setData({
          title: "服务异常",
        })
      }
    })
  },

  again(e){
    this.getMotto(this)
  }
})
