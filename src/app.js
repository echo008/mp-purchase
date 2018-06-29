const data = require('./data.js')
App({
  onLaunch: function () {
    wx.$toast = this.toast
    wx.$data = data
    wx.$shareTitle = '最好的商品都在这里'
  },
  toast(title) {
    wx.showToast({
      title,
      icon: 'none',
      duration: 2000
    })
  }
})