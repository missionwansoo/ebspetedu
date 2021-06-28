$(document).ready(function(){
	
	//로그인
	
	$("header .m_login").click(function(){
		var submenu = $("header .m_login_downbg");

            if( submenu.is(":visible") ){
                submenu.slideUp();
            }else{
                submenu.slideDown();
            }
	});
	
	$("header .m_login").hover(function(){
        $("header .m_login ul li").css("background","#8897ec");
    },function(){
        $("header .m_login ul li").css("background","#000");
	});
	
	//탭
	
	$('.m_open').click(function(){
        $('.gnb_menu').animate({left:0},200);
        $('.m_line1').addClass('open1');
        $('.m_line2').addClass('open2');
        $('.m_line3').addClass('open3');
        $('.m_close').show();
    });
	
	$('.m_close').click(function(){
        $('.gnb_menu').animate({left:-1000},200);
        $('.m_line1').removeClass('open1');
        $('.m_line2').removeClass('open2');
        $('.m_line3').removeClass('open3');
        $('.m_close').hide();
    });
	
	//탭 네비게이션
	
	$("header .gnb_menu ul.gnb>li").click(function(){
        var subm = $(this).find("ul.sub_m");
		
        if( subm.is(":visible") ){
            subm.slideUp();
        }else{
            subm.slideDown();
        }
    });
    
    //네비게이션
    
    $("header nav ul.gnb").hover(function(){
        $("header .nav_bg,header nav ul.gnb>li ul.sub>li").stop().slideDown();
    },function(){
        $("header .nav_bg,header nav ul.gnb>li ul.sub>li").stop().slideUp();
    });
    
    //메인 슬라이드
    
	$( '#example4' ).sliderPro({
		autoHeight: true,
		autoWidtht: true,
		fade: true,
		loop : true,
		autoplay : true,
	});
	
	//후기 슬라이드
	$(window).resize(function() {
		if (window.outerWidth <= 1050) {
			var swiper = new Swiper('.swiper-container', {
				slidesPerView: 2,
      			spaceBetween: 15,
      			navigation: {
        			nextEl: '.swiper-button-next',
        			prevEl: '.swiper-button-prev',
      			},
    		});
  		}else{
			var swiper = new Swiper('.swiper-container', {
				slidesPerView: 4,
      			spaceBetween: 15,
      			navigation: {
        			nextEl: '.swiper-button-next',
        			prevEl: '.swiper-button-prev',
      			},
    		});
		}
	});
	
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 4,
      	spaceBetween: 15,
      	navigation: {
        	nextEl: '.swiper-button-next',
        	prevEl: '.swiper-button-prev',
      	},
    });
	
	//새소식
	
	$("#news_intro ul.news_intro_img>li").hover(function(){
        $(this).find("span.news_solid").fadeIn(300);
    },function(){
        $(this).find("span.news_solid").hide();
	});
	
	//모바일 자격증 소개 슬라이드
	
	$('.center').slick({
		centerMode: true,
		centerPadding: '20%',
		slidesToShow: 1,
		autoplay: false,
		autoplaySpeed: 1500,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '8%',
					slidesToShow: 1
				}
			}
		]
	});
    

});//ready end