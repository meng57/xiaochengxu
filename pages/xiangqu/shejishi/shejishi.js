Page({
  data: {
    src:"http://xqtopic.xiangqu.com/FhZ3MqeH8_0wJtJGt47fg9MOc3Pj?imageView2/2/w/640/q/90/format/jpg/960x645/",
    current:0,
    swiper: {
      indicatorDots: false,
      autoplay: false,
      interval: 0,
      duration: 300
    },
    li1:"http://xqtopic.xiangqu.com/FqSf5iswNNvKnWIDs43RiZXF7y6J?imageView2/2/w/320/q/90/format/jpg/480x480/",
    li2:"http://xqtopic.xiangqu.com/FmZJ41Gsgxz3E2bhB810b4e_KaEg?imageView2/2/w/320/q/90/format/jpg/480x480/",
    li3:"http://xqtopic.xiangqu.com/Fih7c0z4LbRBnThk2CiWjqXIJxWe?imageView2/2/w/320/q/90/format/jpg/480x480/",
    li4:"http://xqtopic.xiangqu.com/Fm9u-ZJfptDAMA7RjW0nL_5wjbY2?imageView2/2/w/320/q/90/format/jpg/480x480/",
    li5:"http://xqtopic.xiangqu.com/FrjGg1NX2s5dYtT2Lzrq0iiI2Efx?imageView2/2/w/320/q/90/format/jpg/480x480/",
    li6:"http://xqtopic.xiangqu.com/FtfDDx799dVPCdViELZJv482c4zk?imageView2/2/w/320/q/90/format/jpg/480x480/",
    li21:"http://xqtopic.xiangqu.com/FtDrch3a-eTYjDgkg0x1_3IRc9Ig?imageView2/2/w/320/q/90/format/jpg/480x480/",
    li22:"http://xqtopic.xiangqu.com/Fhbjzf07kv8v9mk58t7JIjzz32x1?imageView2/2/w/320/q/90/format/jpg/480x480/",
    li23:"http://xqtopic.xiangqu.com/FufKBQTKN9sJhmPi5Y6JQbaAqIs2?imageView2/2/w/320/q/90/format/jpg/480x480/",
    li24:"http://xqtopic.xiangqu.com/FhNu5i_mDOUVPv-Ym3MqyhJqO0qx?imageView2/2/w/320/q/90/format/jpg/480x480/",
    li25:"http://xqtopic.xiangqu.com/Fr2walMIxKIxwyFFqQvwQdv6gKRW?imageView2/2/w/320/q/90/format/jpg/480x480/",
    li26:"http://xqtopic.xiangqu.com/Fnn-7RVz7FoOhN50ujPR9KQESp7g?imageView2/2/w/320/q/90/format/jpg/480x480/"
  },
  onLoad: function(){

  },
  actionToupper: function () {
    // console.log(1);
  },

  actionTolower: function () {
    // console.log(2);
  },
  switchSlider: function (event) {
    this.setData({
      current: event.target.dataset.index
    })
  },
  changeSlider: function (event) {
    this.setData({
      current: event.detail.current
    });
  }
});
