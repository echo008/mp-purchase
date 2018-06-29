Page({
  data: {
    userInfo: {},
    phone: '15012851811',
    codeNo: 'ive1067054231',
    latitude: 22.538482,
    longitude: 113.944101,
    scale: 14,
    name: '深大',
    address: '广东省深圳市南山区科技南一路'
  },
  onLoad() {
    this.setData({
      userInfo: wx.getStorageSync('userInfo') || {}
    })
  },
  getUserInfo() {
    wx.getSetting({
      success: ({ authSetting }) => {
        if (authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: ({ userInfo }) => {
              this.setData({ userInfo }, () => wx.setStorageSync('userInfo', userInfo))
            }
          })
        }
      }
    })
  },
  phoneTap() {
    wx.makePhoneCall({
      phoneNumber: this.data.phone
    })
  },
  mapTap() {
    let { latitude, longitude, scale, name, address } = this.data
    wx.openLocation({
      latitude,
      longitude,
      scale,
      name,
      address
    })
  },
  codeTap() {
    let { codeNo } = this.data
    wx.setClipboardData({
      data: codeNo,
      success: () => {
        wx.$toast(`${codeNo} 微信号复制成功`)
      }
    })
  },
  longTap() {
    wx.saveImageToPhotosAlbum({
      filePath: 'images/center_qrcode_img.jpg',
      fail: () => {
        wx.$toast('图片保存失败!')
      }
    })
  },
  onShareAppMessage() {
    return {
      title: wx.$shareTitle
    }
  }
})