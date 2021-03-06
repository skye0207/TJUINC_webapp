// pages/index/index.js
import * as echarts from '../../ec-canvas/echarts';

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });

  canvas.setChart(chart);

  var option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#32C5E9", "#67E0E3"],
    series: [{
      name: '业务指标',
      type: 'gauge',
      radius: '100%',
      detail: {
        formatter: '{value}'
      },
      min: 0,
      max: 10, 
      axisLine: {
        show: true,
        lineStyle: {
          width: 10,
          shadowBlur: 0,
        }
      },
      splitLine: {
        length: 10,
      },
      pointer: {
        width: 5,
      },
      data: [{
        value: 7,
      }]

    }]
  };

  chart.setOption(option);

  return chart;
}

Page({

  data: {
    ec: {
      onInit: initChart
    }
  },

  onLoad: function (options) {
    wx.login({
      success(res) {
        // 获取到code，发送到服务器用户换取用户openid;
        if (res.code) {
          console.log(res.code)
          wx.request({
            url: 'http://localhost:8081',
            data: {
              code: res.code
            }
          })
        } else {
          //TODO: 做错误反馈
          cosole.log('登陆失败' + res.errMsg);
        }
      }
    })
  },

  clickUnbindbtn: function() {
    wx.navigateTo({
      url: '/pages/login/login'
    })
  },

  clickChangepwModule: function() {
    wx.navigateTo({
      url: '/pages/changepw/changepw'
    })
  },

  clickMailModule: function () {
    wx.navigateTo({
      url: '/pages/mail/mail'
    })
  },
  clickBuypackageModule: function () {
    wx.navigateTo({
      url: '/pages/buypackage/buypackage'
    })
  },
  clickNotificationMore: function() {
    wx.navigateTo({
      url: '/pages/notification/notification'
    })
  },
  clickNotification: function(){
    
  }
})