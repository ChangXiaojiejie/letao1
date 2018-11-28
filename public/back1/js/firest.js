/**********一级导航分类js设置******* */

$(function () {

  var currentPage = 1;
  var pageSize = 2;

  function rend() {

    //发送ajax请求
    $.ajax({
      type:'get',
      url:'/category/queryTopCategoryPaging',
      data:{
        page : currentPage,
        pageSize: pageSize
      },
      success:function (info) {
        
        // console.log(info);
        //绑定模板
        var html = template('tml',info)
        // 添加html数据到tbody   
        $('tbody').html(html);

        //分页标签初始化
        $("#paginator").bootstrapPaginator({
          bootstrapMajorVersion: 3, //指定bootstrap的版本，如果是3，必须指定
          currentPage: currentPage, //指定当前页
          totalPages: Math.ceil(info.total / pageSize), //指定总页数
          onPageClicked: function (a, b, c, page) {
            console.log(page);
            
            //page指的是点击的页码,修改了当前页
            currentPage = page;
            //重新渲染
            rend();
          }
        });





      }
    });
    
    
  }
  rend();
  
  

  //注册点击事件
  $('.addCart').click(function () {
    
    //显示模态框
    $('#addCat').modal('show');

    //给添加按钮注册点击事件，发送ajax请求
    $('#add').click(function () {
      var text = $('.modal-body input').val();
      $.ajax({
        url:'/category/addTopCategory',
        data:{
          categoryName:text
        },
        type:'post',
        success:function (info) {
          
          // console.log(info);
          if(info.success){
            $('#addCat').modal('hide');
            rend();
          }
        }
        
      });

      
    });


    // alert('触发');

    
  });
  
});
