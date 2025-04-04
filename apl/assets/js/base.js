/*リンク画像のマウスオーバー透過処理*/
$(function() {
	$("a img").not(".imgover,.none").hover(
	  function () {
		  $(this).stop().fadeTo("fast", 0.6);
		  return false;
	  },
	  function () {
		  $(this).stop().fadeTo("fast", 1);
	  });
		  return false;
});

/*imgoverクラス設定時のマウスオーバー処理*/
$(function($) {
	var postfix = '_o';
	$('img.imgover,input.imgover').not('[src*="'+ postfix +'."]').each(function() {
		var img = $(this);
		var src = img.attr('src');
		var src_o = src.substr(0, src.lastIndexOf('.'))
		           + postfix
		           + src.substring(src.lastIndexOf('.'));
		$('<img>').attr('src', src_o);
		img.hover(function() {
			img.attr('src', src_o);
		}, function() {
			img.attr('src', src);
		});
	});
});

/*ページスクロール処理*/
$(document).ready(function(){
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });
});


/*ページトップ固定出現処理*/
$(window).on('load', function(){

	$("#topback").hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#topback').fadeIn();
		} else {
			$('#topback').fadeOut();
		}
	});

	$('#topback').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

});

/*スマホナビゲーションボタン*/
$(window).on('load', function(){
	$("#spBtn").bind("click",function(){
			$("nav ul").stop().slideToggle()
	});
});

/*スマフォの場合の問い合わせURL切替*/
$(window).on('load scroll resize', function(){
    //windowの幅をxに代入
    var x = $(window).width();
    //windowの分岐幅をyに代入
    var y = 767;
    if (x <= y) {
    	$("a[href = 'https://www.apl21.com/inspection/input_rsv.asp?pc=6&shop=75&rsv=1']").addClass('urlChange');
    	$(".urlChange").attr("href", "https://www.apl21.com/sp/inspection/input_rsv.asp?pc=6&shop=75&rsv=1'");

    } else {
    	$(".urlChange").attr("href", "https://www.apl21.com/inspection/input_rsv.asp?pc=6&shop=75&rsv=1'");

    }
});


$(window).on('load scroll resize', function(){
    //windowの幅をxに代入
    var x = $(window).width();
    //windowの分岐幅をyに代入
    var y = 767;
    if (x <= y) {
    	$("a[href = 'https://www.apl21.com/inquiry/?id=75']").attr("href", "https://www.apl21.com/sp/inquiry/?id=75");
    } else {
    }
});
