// pages/index/index.js
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex:0,
    cardRightIn:false,
    cardLeftIn:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let list=[
      {
        _id: "dvhhicWM83uNxzrby",
        tag: '秩序册',
        author: "智慧体育",
        cover: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        createtime: 1522210221679,
        time: "2018年03月28日 ",
        title: "许马体检，你必须知道的那些事儿",
        agree:false,
        agreeNum: 293,
        commentNum: 56,
        comment: [{
          logo: 'http://thirdwx.qlogo.cn/mmopen/PDS4yGhkWYlEPmXoZW82KTj7U8HTURpVP7eh5DOibW3hGgFLJK4C5YGK13vYO5JhibevicDMdeysHQce4dSEKUAcIRSAicCS06qV/132',
          name: '刘昕1',
          txt: 'good',
          fromNow: '2天前'
        }, {
          logo: 'http://thirdwx.qlogo.cn/mmopen/PDS4yGhkWYlEPmXoZW82KTj7U8HTURpVP7eh5DOibW3hGgFLJK4C5YGK13vYO5JhibevicDMdeysHQce4dSEKUAcIRSAicCS06qV/132',
          name: '刘昕2',
          txt: '待期,期,待期,期待,期待,期期待期,期待期期,待期期',
          fromNow: '3天前'
        }, {
          logo: 'http://thirdwx.qlogo.cn/mmopen/PDS4yGhkWYlEPmXoZW82KTj7U8HTURpVP7eh5DOibW3hGgFLJK4C5YGK13vYO5JhibevicDMdeysHQce4dSEKUAcIRSAicCS06qV/132',
          name: '刘昕2',
          txt: '待期,期,待期,期待,期期待期,期待期期,待期期',
          fromNow: '3天前'
        }, {
          logo: 'http://thirdwx.qlogo.cn/mmopen/PDS4yGhkWYlEPmXoZW82KTj7U8HTURpVP7eh5DOibW3hGgFLJK4C5YGK13vYO5JhibevicDMdeysHQce4dSEKUAcIRSAicCS06qV/132',
          name: '刘昕2',
          txt: '期待,待期,待期,期,待期,期待,期待,期期待期,期待期期,待期期',
          fromNow: '3天前'
        }]
      },
      {
        _id: "M8WuXptrDfvNWiDxt",
        tag: '新闻',
        author: "喜爱运动",
        cover: "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
        createtime: 1522026765222,
        time: "2018年03月26日 ",
        title: "2018“东城杯”中国许昌国际马拉松赛官方领跑员招募",
        agree: false,
        agreeNum: 525,
        commentNum: 16,
        comment: [{
          logo: 'http://thirdwx.qlogo.cn/mmopen/PDS4yGhkWYlEPmXoZW82KTj7U8HTURpVP7eh5DOibW3hGgFLJK4C5YGK13vYO5JhibevicDMdeysHQce4dSEKUAcIRSAicCS06qV/132',
          name: '刘昕2',
          txt: '期待,待期,待期,期,待期,期待,期待,期期待期,期待期期,待期期',
          fromNow: '3天前'
        }, {
          logo: 'http://thirdwx.qlogo.cn/mmopen/PDS4yGhkWYlEPmXoZW82KTj7U8HTURpVP7eh5DOibW3hGgFLJK4C5YGK13vYO5JhibevicDMdeysHQce4dSEKUAcIRSAicCS06qV/132',
          name: '刘昕2',
          txt: '期待,待期,待期,期,待期,期待,期待,期期待期,期待期期,待期期',
          fromNow: '3天前'
        }]     
      },
      {
        _id: "zHNuZ6cqq6D8XN6nT",
        tag: '日程',
        author: "智慧体育",
        cover: "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg",
        createtime: 1521872204815,
        link: "https://xidong360.com/newInfo/365fe48f923c4ba7a343448f8a4bfbd7",
        time: "2018年03月24日",
        title: "首届许昌马拉松4月29日开跑",
        agree: false,
        agreeNum: 93,
        commentNum: 0 
      }
    ]
    for(let i of list){
      i.fromNow = util.fromNow(i.createtime)
    }
    this.setData({
      list
    })
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
  toAgree:function(e){
    let id = e.currentTarget.dataset.id;
    let list = this.data.list
    for(let i of list){
      if(i._id == id){
        i.agree = !i.agree
      }
      if (i._id == id && i.agree){
        i.agreeNum = i.agreeNum + 1        
      } else if (i._id == id && !i.agree){
        i.agreeNum = i.agreeNum - 1   
      }  
      this.setData({ list })       
    }
  },
  toComment:function(){
    console.log('comment')
  },
  //手指触摸动作开始 记录起点X坐标
  touchstart: function (e) {
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY
    })
  },
  //滑动事件处理
  touchmove: function (e) {
    let idx = e.currentTarget.dataset.index;
    let startX = this.data.startX,//开始X坐标
        startY = this.data.startY,//开始Y坐标
        touchMoveX = e.changedTouches[0].clientX,//滑动变化坐标
        touchMoveY = e.changedTouches[0].clientY,//滑动变化坐标
    //获取滑动角度
    angle = this.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });

    //滑动超过45度角 return
    if (Math.abs(angle) > 45) return;

    if (touchMoveX > startX) { //右滑
      this.setData({
        currentIndex: idx == 0 ? 0 : idx-1,
        cardRightIn: false,          
        cardLeftIn: true
      })
    }else{
      this.setData({
        currentIndex: idx == this.data.list.length - 1 ? idx : idx + 1,
        cardRightIn:true,
        cardLeftIn: false
      })
    }
    wx.pageScrollTo({
      scrollTop: 0
    })
        
  },
  /**
 * 计算滑动角度
 * @param {Object} start 起点坐标
 * @param {Object} end 终点坐标
 */
  angle: function (start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI)
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
  
  }
})