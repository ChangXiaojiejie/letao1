!(function () {
 
  //区域滚动初始化
  mui('.mui-scroll-wrapper').scroll({

    // scrollY: true, //是否竖向滚动
    // scrollX: false, //是否横向滚动
    // startX: 0, //初始化时滚动至x
    // startY: 0, //初始化时滚动至y
    indicators: false, //是否显示滚动条
    deceleration:0.0006, //阻尼系数,系数越小滑动越灵敏
    bounce: true //是否启用回弹

  });



  function carousel() {

    //获得slider插件对象
    var gallery = mui('.mui-slider');
    gallery.slider({
      interval:500//自动轮播周期，若为0则不自动播放，默认为0；
    });
  }
  carousel()
  
})();

  //获取搜索关键字
  function getSearStr() {

    //获取地址栏中的地址
    var str = location.search;

    //转码
    str = decodeURI(str);

    //去掉问号
    str = str.slice(1);

    //转为数组
    var arr = str.split('=');

    console.log(arr);

    return arr;
  }

