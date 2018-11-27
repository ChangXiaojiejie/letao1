 /** 
    * 4.开启进度条
   */

   //如果有ajax请求，开始
   $(document).ajaxStart(function () {
    NProgress.start();
  });

  $(document).ajaxStop(function () {
    setTimeout(function () {
      NProgress.done();
    },500);
    
  });
