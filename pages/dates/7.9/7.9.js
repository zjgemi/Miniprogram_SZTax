// pages/dates/7.9/7.9.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    Images: getApp().globalData.Images79 
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

  saveImg: function (e) {
    wx.showActionSheet({
      itemList: ["保存图片"],
      success(res){
        if(res.tapIndex === 0){
          wx.getImageInfo({
            src: e.currentTarget.dataset.url,
            success: function (ret) {
              var path = ret.path;
              wx.saveImageToPhotosAlbum({
                filePath: path,
                success(result) {
                  console.log(result);
                  wx.showToast({
                    title: '保存成功',
                    icon: 'success',
                    duration: 1000
                  })
                }
              })
            }
          })
        }
      }
    })
  }
})
