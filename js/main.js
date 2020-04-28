$(".nav-item .nav-link").click(
    function(){
        $(".nav-item .nav-link").removeClass("active");
        $(this).addClass("active");
    }
);

$("#all").click(
    function(){
        $(".all").show();
    }
);

$("#design").click(
    function(){
       $(".design").show();
       $(".photo").hide();
       $(".logo").hide();
       $(".branding").hide();
       $(".ui").hide();
    }
);

$("#photo").click(
    function(){
        $(".photo").show();
        $(".design").hide();
        $(".logo").hide();
        $(".branding").hide();
        $(".ui").hide();
    }
);


$("#logo").click(
    function(){
        $(".logo").show();
        $(".design").hide();
        $(".photo").hide();
        $(".branding").hide();
        $(".ui").hide();
    }
);
$("#branding").click(
    function(){
        $(".branding").show();
        $(".design").hide();
        $(".photo").hide();
        $(".logo").hide();
        $(".ui").hide();
    }
);
$("#ui").click(
    function(){
        $(".ui").show();
        $(".design").hide();
        $(".photo").hide();
        $(".logo").hide();
        $(".branding").hide();
    }
);


