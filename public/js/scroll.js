$(document).ready(function(){
  var menu=$(".menu");
  var topMenu=$($(".menu-cell .menu").get().reverse());
  menu.on('click',function(){
    var name=$(this).attr('name');
    var msp=30;
    if($("#"+name).length===0){
      var nowTop=$(window).scrollTop();
      topMenu.each(function(){
        var name=$(this).attr('name');
        if($("#"+name).length!==0){
          var top=$("#"+name).offset().top;
          if(top>nowTop&&(nowTop-top)<-msp){
            $('html,body').stop().animate({scrollTop:top-msp},600,'swing');
            return false;
          }
        }
      });
    }else{
      var top=$("#"+name).offset().top;
      $('html,body').stop().animate({scrollTop:top-msp},600,'swing');
    }
  });
  var scrollFlg=false;
  $(window).on('scroll',function(){
      if($(window).scrollTop() != 0 && scrollFlg == false){
        $("#top-container").css({'height':'60px' , 'background':'#0C1845'});
        $("#logo-space").css({'lineHeight':'45px'});
        $(".menu-cell>.menu").css({'paddingTop':'12px','height':'40px','paddingLeft':'10px','paddingRight':'10px'});
        scrollFlg=true;
      }else if($(window).scrollTop() == 0 && scrollFlg == true){
        scrollFlg=false;
        $("#top-container").css({'height':'90px', 'background':'transparent'});
        $("#logo-space").css({'lineHeight':'82px'});
        $(".menu-cell>.menu").css({'paddingTop':'32px','height':'58px','paddingLeft':'15px','paddingRight':'15px'});
      }
  });
});