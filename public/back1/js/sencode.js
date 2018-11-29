/****设置二级列表 */

$(function () {
  var currentPage=1 ;
  var pageSize =5;

  //初始化渲染表单
  function rend() {
   
    //发送ajax请求
    $.ajax({
      url: '/category/querySecondCategoryPaging',
      type: 'get',
      
      data: {
        page: currentPage,
        pageSize: pageSize
      },
      success: function (info) {
        console.log(currentPage);
        console.log(info);
        var html = template('tml', info);
        $('tbody').html(html);


        //初始化分页

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
  //1.点击按钮显示模态框
  //2.发送ajax请求获取一级分类的数据
  //3.准备模板引擎，将获取到的一级分类的信息渲染在ul部分并隐藏该区域
  //4.点击选择图片，根据inupt的框的改变，获取url地址
  //5.点击添加，将所有信息提交
  $('.addBtn').click(function () {
    //显示模态框
    $('#cartModal').modal('show');
    // alert('触发');

    //发送ajax请求，获取一级菜单的内容
    $.ajax({
      url:'/category/queryTopCategoryPaging',
      data:{
        page: 1,
        pageSize:10
      },
      type:'get',
      success:function (info) {
        
        // console.log(info);
        var html = template('firest_tml',info);
        $('.dropdown-menu').html(html);
        
      }
    });
    
  });




});