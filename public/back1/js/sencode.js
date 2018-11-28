/****设置二级列表 */

$(function () {

  function rend() {
    var currentPage ;
    var pageSize =5;


    //发送ajax请求
    $.ajax({
      url: '/category/querySecondCategoryPaging',
      type: 'get',
      data: {
        page: currentPage || 1,
        pageSize: pageSize
      },
      success: function (info) {

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


});