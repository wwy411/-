/*//返回顶部
$(".backTop").click(function() {
	$("html,body").animate({
		"scrollTop": "0"
	}, 500);
});*/
 $(function () {
            $(window).scroll(function () {
                var top = $(window).scrollTop() + 200;
                var left = $(window).scrollLeft() + 320;
                $("#editInfo").animate({ "top": top }, 30);  //方式一  效果比较理想
                //$("#editInfo").css({ left: left + "px", top: top + "px" });  方式二 有阴影
            });
        }); 