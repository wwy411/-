//登陆弹窗
$(document).ready(function(){
	//隐藏弹窗
	$(".dlu1").hide();
	//显示弹窗
	$(".dlu").click(function(){
		$(".dlu1").show();
		$(".wrap").css({"background-color":"gainsboro","opacity":"0.9"})
	});
	$(".dlu1_right_x").click(function(){
		$(".dlu1").hide();
	})
	//登录界面账户输入框失去焦点
		$(".account").blur(function() {
			accountReg = /^[1][3,4,5,7,8][0-9]{9}$/;
			if($(this).val() == "" || $(this).val() == "请输入您的账号（即手机号）") {
				$(this).addClass("errorInput");
				$(this).next().css("display", "block").html("账号不能为空！");
				console.log("账号不能为空");
				return;
			} else if(!accountReg.test($(".account").val())) {
				$(this).addClass("errorInput");
				$(this).next().css("display", "block").html("账号不存在!");
			} else {
				$(this).addClass("correctInput");
				$(this).removeClass("errorInput");
				$(this).next().empty();
				alert("账号成功");
			}
		});
		// 登录界面密码输入框失去焦点
		$(".password").blur(function() {
			reg = /^[A-Za-z0-9]{6}$/
			if($(this).val() == "") {
				$(this).addClass("errorInput");
				$(this).next().css("display", "block").html("密码不能为空！");
			} else if(!reg.test($(".password").val())) {
				$(this).addClass("errorInput");
				$(this).next().css("display", "block").html("请输入6位包含数字或字母的密码！");
			} else {
				$(this).addClass("correctInput");
				$(this).removeClass("errorInput");
				$(this).next().empty();
				alert("密码正确");
			}
		});
});