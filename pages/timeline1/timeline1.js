// pages/timeline1/timeline1.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    Timepoint: getApp().globalData.Timepoint,
    Dates: getApp().globalData.Week1,
    Nextweek: getApp().globalData.Homepage.Timeline2
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

  abc: function () {
    wx.navigateTo({
      //传递参数方式向get请求拼接参数一样
      url: "/pages/index/index"

    })
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

  returnHome: function() {
    let pages = getCurrentPages();
    wx.navigateBack({delta: 4})
  }
})
