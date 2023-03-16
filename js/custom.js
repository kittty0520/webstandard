      //라이트 박스
      //아래 옵션은 썸네일 플러그인에 대한 옵션들
      $(".lightgallery").lightGallery({
        thembnail: true,
        autoplay: true,
        pause: 3000,
        progressBar: true
    }); 



      //윈도우 팝업
      $(".window").click(function(e){
        e.preventDefault();
        //window.open("파일명", "팝업이름", "옵션설정");
        //옵션: (위치)left,top,(크기)width,height,status,toolbar,location,menubar, scroolbars,fullscreen
        window.open("popup.html","popup01","width=800, height=580, left=50, top=50, scrollbars=0, toolbar=0, menubar=0")
      })


      //레이어 팝업
      //.layer는 column3에 있는 리스트에 부여한 class
      $("li.layer").click(function(e){
        e.preventDefault();
        //$("#layer").css("display","block");
        //$("#layer").show();
        //$("#layer").fadeIn();
        $("#layer").SlideDown();
      });
      //#layer는 wrap이 끝난 후 layer popup창에 부여한 id
      $("#layer .close").click(function(e){
        e.preventDefault();
        //$("#layer").css("display","none");
        //$("#layer").hide();
        //$("#layer").fadeOut();
        $("#layer").SlideUp();
      });

      //탭메뉴
      var $tab_list =$(".tab_menu");
      $tab_list.find("ul ul").hide();
      $tab_list.find("li.active>ul").show();

      function tabMenu(e){
        e.preventDefault();
        var $this = $(this);//버튼의 타겟이 this의 변수에 저장됨.
        $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();//클릭한 li에 속해있는 ul을 보여준다. 그 ul의 부모 li의 class에 active를 추가하고 그 자매들의 li에서는 active를 제거한다. 그리고 거기에 속해있는 ul들을 감춘다.
      }
      $tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);//tabMenu는 위 함수

      //배너
      //html 마크업 세팅->css 연동->제이쿼리 연동-->제이쿼리 연동
      $(".ban").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay:true,
        autoplaySpeed:30000,
        dots:true
      });

      //갤러리 배너
      $(".gallery_img").slick({
        fade: true,
        pauseOnHover: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 300,
        slidesToShow: 1
      });
      $(".play").click(function(){
        $(".gallery_img").slick("slickPlay");
      })
      $(".pause").click(function(){
        $(".gallery_img").slick("slickPause");
      })
      $(".prev").click(function(){
        $(".gallery_img").slick("slickPrev");
      })
      $(".next").click(function(){
        $(".gallery_img").slick("slickNext");
      })
      //버튼을 클릭하면 전체 메뉴를 보이게 하세요.
      $(".tit .btn").click(function(e){
        e.preventDefault();//버튼을 클릭했을 때 페이지가 상단으로 올라가는 것을 방지함. #이(0,0)이동하는 것을 방지
        //$("#cont_nav").css("display","block");
        // $("#cont_nav").show();
        // $("#cont_nav").fadeIn();
        // $("#cont_nav").slideDown();
        //$("cont_btn").toggle();다시 클릭했을 때 display:none으로 
        //$("cont_btn").fadeToggle(); 
        $("#cont_nav").slideToggle(200);//0.2s 
        //$(this).addClass("on");//click 했을 때 class에 on이 추가됨. 여기에 효과를 넣음
        $(this).toggleClass("on");//this는 .tit .btn을 의미함 
        });