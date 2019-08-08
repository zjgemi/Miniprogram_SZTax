//index.js
//获取应用实例
const app = getApp()

Page({
  data: getApp().globalData.Homepage,

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {

    wx.request({
      url: 'https://www.shzlgzs.com:64401/label/Test',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        name: 'zjgemi'
      },
      success: function (res) {
        console.log(res)
      }
    })

  },

  onReady: function () {

  },

  onShow: function () {
    // 页面显示
    var animation = wx.createAnimation({
      duration: 1000
    })

    this.animation = animation

    animation.opacity(1).step().rotateX(0).step({duration: 3000}).opacity(0).step()

    this.setData({
      animation1: animation.export()
    })

    setTimeout(function () {
      this.setData({
        hidden: true
      })
    }.bind(this), 5000)

    var animation = wx.createAnimation({
      duration: 1000,
      delay: 5000
    })

    this.animation = animation

    animation.opacity(1).step()

    this.setData({
      animation2: animation.export()
    })

    var animation = wx.createAnimation({
      duration: 1000,
      delay: 6000
    })

    this.animation = animation

    animation.opacity(1).step()

    this.setData({
      animation3: animation.export()
    })

    var animation = wx.createAnimation({
      duration: 1000,
      delay: 7000
    })

    this.animation = animation

    animation.opacity(1).step()

    this.setData({
      animation4: animation.export()
    })

    var animation = wx.createAnimation({
      duration: 1000,
      delay: 8000
    })

    this.animation = animation

    animation.opacity(1).step()

    this.setData({
      animation5: animation.export()
    })

    var animation = wx.createAnimation({
      duration: 1000,
      delay: 9000
    })

    this.animation = animation

    animation.opacity(1).step()

    this.setData({
      animation6: animation.export()
    })

    // setTimeout(function () {
    //   this.setData({
    //     animation2: animation.export()
    //   })
    // }.bind(this), 1000)
  },

  navigateTo: function (e) {
    wx.navigateTo({
      //传递参数方式向get请求拼接参数一样
      url: e.currentTarget.dataset.url

    })
  },

  navigateBack: function () {
    wx.navigateBack()
  }

})
