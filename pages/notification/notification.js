// pages/notification/notification.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: true,
    notificationList: [{
      title: "关于校园网上网套餐调整的通知",
      time: "2018-12-21 11:50:55"
    }, {
      title: "关于卫津路校区部分楼宇校园网络调整的通知（五）",
      time: "2018-04-08 16:45:28"
    }, {
      title: "关于卫津路校区部分楼宇校园网络调整的通知（四)",
      time: "2018-04-02 15:57:51"
    }, {
      title: "关于校园网上网套餐调整的通知",
      time: "2018-12-21 11:50:55"
    }, {
      title: "关于卫津路校区部分楼宇校园网络调整的通知（五）",
      time: "2018-04-08 16:45:28"
    }, {
      title: "关于卫津路校区部分楼宇校园网络调整的通知（四)",
      time: "2018-04-02 15:57:51"
    }, {
      title: "关于校园网上网套餐调整的通知",
      time: "2018-12-21 11:50:55"
    }, {
      title: "关于卫津路校区部分楼宇校园网络调整的通知（五）",
      time: "2018-04-08 16:45:28"
    }, {
      title: "关于卫津路校区部分楼宇校园网络调整的通知（四)",
      time: "2018-04-02 15:57:51"
    }, {
      title: "关于校园网上网套餐调整的通知",
      time: "2018-12-21 11:50:55"
    }, {
      title: "关于卫津路校区部分楼宇校园网络调整的通知（五）",
      time: "2018-04-08 16:45:28"
    }, {
      title: "关于卫津路校区部分楼宇校园网络调整的通知（四)",
      time: "2018-04-02 15:57:51"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this
    setTimeout(function() {
      that.setData({
        loading: false
      })
    }, 3000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log("bottom")
    this.setData({
      "notificationList": this.data.notificationList.concat(this.data.notificationList)
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})