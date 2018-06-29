Page({
  data: {
    codeNo: 'ive1067054231',
    goods: {}
  },
  onLoad({ id = 1 }) {
    this.setData({
      id,
      goods: wx.$data.goods[id]
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
  onShareAppMessage() {
    return {
      title: wx.$shareTitle,
      path: `pages/detail/detail?id=${this.data.id}`
    }
  }
})