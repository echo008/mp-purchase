Page({
  data: {
    imgs: [],
    goods: []
  },
  onLoad() {
    this.setData(wx.$data)
  },
  goDetail(e) {
    wx.navigateTo({
      url: `../detail/detail?id=${e.currentTarget.dataset.id}`
    })
  },
  onShareAppMessage() {
    return {
      title: wx.$shareTitle
    }
  }
})