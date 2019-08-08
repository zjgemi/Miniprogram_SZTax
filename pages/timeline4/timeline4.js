// pages/timeline4/timeline4.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    Timepoint: getApp().globalData.Timepoint,
    Dates: getApp().globalData.Week4,
    Nextweek: {
      name: "TheEnd",
      src: "/images/TheEnd.png",
      path: ""
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  navigateTo: function (e) {
    wx.navigateTo({
      //传递参数方式向get请求拼接参数一样
      url: e.currentTarget.dataset.url

    })
  },

  navigateBack: function () {
    wx.navigateBack()
  },

  returnHome: function () {
    wx.navigateBack({ delta: 4 })
  }
})
