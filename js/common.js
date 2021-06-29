$(document).ready(function(){
    var $gnbMenu = $('#header').find('.gnb_menu'),
        $headerMenu = $('#header').find('.header_menu'),
        $gnb = $gnbMenu.find('.gnb')
    
    
    $('.hambtn').click(openWeb)    
        function openWeb(){
            $gnbMenu.show().animate({left:0},400);
            
            $('.line1').addClass('open1');
            $('.line2').addClass('open2');
            $('.line3').addClass('open3');
            $('.close').show()
        }
    
    $('.close').click(closeWeb)
    
    function closeWeb(){
            $gnbMenu.show().animate({left:-1000},400);
            $('.line1').removeClass('open1');
            $('.line2').removeClass('open2');
            $('.line3').removeClass('open3');
            $('.close').hide();
        }
    
    $('.m_hambtn').click(openMobile)    
        function openMobile(){
            $gnbMenu.show().animate({left:0},400);
            
            $('.m_line1').addClass('open1');
            $('.m_line2').addClass('open2');
            $('.m_line3').addClass('open3');
            $('.m_close').show();
        }
    
    $('.m_close').click(closeMobile)
    
    function closeMobile(){
            $gnbMenu.show().animate({left:-1000},400);
            $('.m_line1').removeClass('open1');
            $('.m_line2').removeClass('open2');
            $('.m_line3').removeClass('open3');
            $('.m_close').hide();
        }
    
    
    $('.hambtn').mouseenter(function(){
        $('.line').css("background-color","#00e701");
        $('.line1').css("width","31px");
        $('.line2').css("width","31px");
        $('.line3').css("width","31px");
    })
    $('.hambtn').mouseleave(function(){
        $('.line').css("background-color","#22408f");
        $('.line1').css("width","31px");
        $('.line2').css("width","25px");
        $('.line3').css("width","19px");
    })
    $('.close').mouseenter(function(){
        $('.line').css("background-color","#00e701");
        $('.line1').css("width","31px");
        $('.line3').css("width","31px");
    })
    $('.close').mouseleave(function(){
        $('.line').css("background-color","#22408f");
        $('.line1').css("width","31px");
        $('.line3').css("width","31px");
    })
     
})