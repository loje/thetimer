$(document).ready(function(){
	$(".thegame").height($(window).height());

	$("#entersystem").click(function(){

		if($("#gamename").val() == ""){
			alert("比赛名称不为空");
			$("#gamename").parent().addClass("warning");
			var warning = setTimeout(function(){
				$("#gamename").parent().removeClass("warning");
				clearTimeout(warning);
			},1000);
		}else if($("#leftteamname").val() == ""){
			alert("正方队伍名称不为空");
			$("#leftteamname").parent().addClass("warning");
			var warning = setTimeout(function(){
				$("#leftteamname").parent().removeClass("warning");
				clearTimeout(warning);
			},1000);
		}else if($("#rightteamname").val() == ""){
			alert("反方队伍名称不为空");
			$("#rightteamname").parent().addClass("warning");
			var warning = setTimeout(function(){
				$("#rightteamname").parent().removeClass("warning");
				clearTimeout(warning);
			},1000);
		}else if($("#lefttitle").val() == ""){
			alert("正方队伍的辩题不为空");
			$("#lefttitle").parent().addClass("warning");
			var warning = setTimeout(function(){
				$("#lefttitle").parent().removeClass("warning");
				clearTimeout(warning);
			},1000);
		}else if($("#righttitle").val() == ""){
			alert("反方队伍的辩题不为空");
			$("#righttitle").parent().addClass("warning");
			var warning = setTimeout(function(){
				$("#righttitle").parent().removeClass("warning");
				clearTimeout(warning);
			},1000);
		}else{
			$(".pass").attr("style","display:none;");
			$(".timing-system").removeClass("blur");
			$("h2").text($("#gamename").val());

			$("#leftteam").append($("#leftteamname").val());
			$("#rightteam").append($("#rightteamname").val());

			$("#thelefttitle").text($("#lefttitle").val());
			$("#therighttitle").text($("#righttitle").val());
		}
	});

	$("#step1").click(function(){
		$(".thegame .bottom").attr("style","display:none;");
		$(".thegame").removeAttr("style");
		$(".thebtn").attr("style","display:none;");
		$(".t1left").addClass("blur");
		$(".t1left").removeAttr("style");
		setTimeout(function(){
			$(".t1left").height($(window).height() - $(".thegame").height());
			//$("#oneleft_start").addClass("oneleft-start");
			$(".t1left").removeClass("blur");
		},250);

		
	})

	$(".time-item strong").height($(".time-item strong").width());



	//正方一辩立论
	var oneleft_alltime = parseInt(119);
	function oneleft_timer(oneleft_alltime){
		var oneleft = window.setInterval(function(){
			var oneleftminute=0,
				oneleftsecond=0;//时间默认值
			if(oneleft_alltime > 0){
				oneleftminute = Math.floor(oneleft_alltime / 60);
				oneleftsecond = Math.floor(oneleft_alltime) - (oneleftminute * 60);
			}
			if (oneleftminute <= 9) oneleftminute = '0' + oneleftminute;
			if (oneleftsecond <= 9) oneleftsecond = '0' + oneleftsecond;

			$('#oneleft_minute_show').html(oneleftminute);
			$('#oneleft_second_show').html(oneleftsecond);
			oneleft_alltime--;

			if(oneleft_alltime < 0){
				$("#oneleft_start").text("正方时间到！");
				$("#oneleft_next").attr("style","display:none;");
				clearInterval(oneleft);
				$(".t1left").addClass();
				setTimeout(function(){
					$(".thegame").height($(window).height());

					$(".t1left").attr("style","display:none;");
					setTimeout(function(){$(".thegame").removeAttr("style");},250);
					$(".t1right").removeAttr("style");
					$(".t1right").height($(window).height() - $(".thegame").height());
				},500)
			}

			if(oneleft_alltime == 30){
				$('.t1left').append('<embed src="media/30m.wav" autostart="true" loop="false" style="width:0px;height:0px;visibility: hidden;">'); 
			}

			$("#oneleft_next").click(function(){
				clearInterval(oneleft);
				$(".thegame").height($(window).height());

				$(".t1left").attr("style","display:none;");
				setTimeout(function(){$(".thegame").removeAttr("style");},250);
				$(".t1right").removeAttr("style");
				$(".t1right").height($(window).height() - $(".thegame").height());
			})
			//重置
			// $("#oneleft_reset").click(function(){
			// 	clearInterval(oneleft);
			// 	var oneleft_alltime = parseInt(119);
			// 	$("#oneleft_start").removeAttr("disabled");
			// 	$("#oneleft_minute_show").text("02分");
			// 	$("#oneleft_second_show").text("00分");
			// })
		},1000);
	};

	$("#oneleft_start").click(function(){
		$(this).text("正方辩论中");
		$("#oneleft_start").attr("disabled","disabled");
		oneleft_timer(oneleft_alltime);
		$("#oneleft_next").removeAttr("style");
	});




	//反方一辩立论
	var oneright_alltime = parseInt(119);
	function oneright_timer(oneright_alltime){

		var oneright = window.setInterval(function(){
			var onerightminute=0,
				onerightsecond=0;//时间默认值
			if(oneright_alltime > 0){
				onerightminute = Math.floor(oneright_alltime / 60);
				onerightsecond = Math.floor(oneright_alltime) - (onerightminute * 60);
			}
			if (onerightminute <= 9) onerightminute = '0' + onerightminute;
			if (onerightsecond <= 9) onerightsecond = '0' + onerightsecond;

			$('#oneright_minute_show').html(onerightminute);
			$('#oneright_second_show').html(onerightsecond);
			oneright_alltime--;

			if(oneright_alltime < 0){
				$("#oneright_start").text("反方时间到！");
				$("#oneright_next").attr("style","display:none;");
				clearInterval(oneright);
				setTimeout(function(){
					$(".thegame").height($(window).height());				
					$(".t1right").attr("style","display:none;");
					setTimeout(function(){$(".thegame").removeAttr("style");},250);
					
					$(".t2left,.t2right").height($(window).height() - $(".thegame").height());
					$(".t2").removeAttr("style");
				},500);
			}

			if(oneright_alltime == 30){
				$('.t1right').append('<embed src="media/30m.wav" autostart="true" loop="false" style="width:0px;height:0px;visibility: hidden;">'); 
			}


			$("#oneright_next").click(function(){
				clearInterval(oneright);
				$(".thegame").height($(window).height());

				$(".t1right").attr("style","display:none;");
				setTimeout(function(){$(".thegame").removeAttr("style");},250);
				$(".t2left").removeAttr("style");
				$(".t2left,.t2right").height($(window).height() - $(".thegame").height());
				$(".t2").removeAttr("style");
			})
			//重置
			// $("#oneright_reset").click(function(){
			// 	clearInterval(oneright);
			// 	var oneright_alltime = parseInt(119);
			// 	$("#oneright_start").removeAttr("disabled");
			// 	$("#oneright_minute_show").text("02分");
			// 	$("#oneright_second_show").text("00分");
			// })
		},1000);
	};

	$("#oneright_start").click(function(){
		$("#oneright_next").removeAttr("style");
		$(this).text("反方辩论中");
		$("#oneright_start").attr("disabled","disabled");
		oneright_timer(oneright_alltime);
	});




	//正方自由辩论
	var twoleft_alltime = parseInt(359);
	$("#t2left_m").val(twoleft_alltime);
	function twoleft_timer(twoleft_alltime){
		var twoleft_alltime = $("#t2left_m").val();

		var twoleft = window.setInterval(function(){
			var twoleftminute=0,
				twoleftsecond=0;//时间默认值
			if(twoleft_alltime > 0){
				twoleftminute = Math.floor(twoleft_alltime / 60);
				twoleftsecond = Math.floor(twoleft_alltime) - (twoleftminute * 60);
			}
			if (twoleftminute <= 9) twoleftminute = '0' + twoleftminute;
			if (twoleftsecond <= 9) twoleftsecond = '0' + twoleftsecond;

			$('#twoleft_minute_show').html(twoleftminute);
			$('#twoleft_second_show').html(twoleftsecond);
			twoleft_alltime--;

			if(twoleft_alltime < 0){
				$("#t2left_m").val(0);
				clearInterval(twoleft);
				$("#twoleft_start").attr("disabled","disabled");
				$("#twoleft_start").text("正方时间到！");
				if($("#t2right_m").val() <1){
					$(".t2").attr("style","display:none;");
				}
			}

			if($("#t2left_m").val() <1 && $("#t2right_m").val() <1){
				$("#t2").attr("style","display:none;");
				$("#two_next").attr("style","display:none;");
				$("#tworight_start").attr("style","display:none;");
				$(".thegame").height($(window).height());
				$(".t2left").attr("style","display:none;");
				$(".t2right").attr("style","display:none;");
				setTimeout(function(){$(".thegame").removeAttr("style");},250);	
				$(".t3left").removeAttr("style");
				$(".t3left").height($(window).height() - $(".thegame").height());
			}

			if(twoleft_alltime == 30){
				$('.t2left').append('<embed src="media/30m.wav" autostart="true" loop="false" style="width:0px;height:0px;visibility: hidden;">'); 
			}

			$("#two_next").click(function(){
				clearInterval(twoleft);
				$(".thegame").height($(window).height());
				$(".t2").attr("style","display:none;");
				$(".t2left").attr("style","display:none;");
				$(".t2right").attr("style","display:none;");
				setTimeout(function(){$(".thegame").removeAttr("style");},250);	
				$(".t3left").removeAttr("style");
				$(".t3left").height($(window).height() - $(".thegame").height());
			})
			//重置
			// $("#two_reset").click(function(){
			// 	clearInterval(twoleft);
			// 	//clearInterval(tworight);
			// 	var twoleft_alltime = parseInt(359);
			// 	var tworight_alltime = parseInt(359);
			// 	$("#twoleft_start").removeAttr("disabled");
			// 	$("#tworight_start").attr("disabled","disabled");
			// 	$("#twoleft_minute_show").text("02分");
			// 	$("#twoleft_second_show").text("00分");
			// 	$("#tworight_minute_show").text("02分");
			// 	$("#tworight_second_show").text("00分");
			// })
		},1000);


		//中断正方计时，切换到反方
		$("#tworight_start").click(function(){
			$(this).text("反方辩论中");
			$("#twoleft_start").text("正方开始");
			$("#tworight_start").attr("disabled","disabled");
			$("#twoleft_start").removeAttr("disabled");
			tworight_timer(tworight_alltime);

			//中断计时；
			clearInterval(twoleft);

			//储存目前剩余时间
			$("#t2left_m").val(twoleft_alltime);
		});
	};

	$("#twoleft_start").click(function(){
		$("#two_next").removeAttr("style");
		$(this).text("正方辩论中");
		$("#twoleft_start").attr("disabled","disabled");
		$("#tworight_start").removeAttr("disabled");
		twoleft_timer(twoleft_alltime);
	});


	//反方自由辩论
	var tworight_alltime = parseInt(359);
	$("#t2right_m").val(tworight_alltime);
	function tworight_timer(tworight_alltime){
		var tworight_alltime = $("#t2right_m").val();

		var tworight = window.setInterval(function(){
			var tworightminute=0,
				tworightsecond=0;//时间默认值
			if(tworight_alltime > 0){
				tworightminute = Math.floor(tworight_alltime / 60);
				tworightsecond = Math.floor(tworight_alltime) - (tworightminute * 60);
			}
			if (tworightminute <= 9) tworightminute = '0' + tworightminute;
			if (tworightsecond <= 9) tworightsecond = '0' + tworightsecond;

			$('#tworight_minute_show').html(tworightminute);
			$('#tworight_second_show').html(tworightsecond);
			tworight_alltime--;

			if(tworight_alltime < 0){
				$("#t2right_m").val(0);
				clearInterval(tworight);
				$("#tworight_start").attr("disabled","disabled");
				$("#tworight_start").text("反方时间到！");
				if($("#t2left_m").val() <1){
					$(".t2").attr("style","display:none;");
				}
			}

			if($("#t2left_m").val() <1 && $("#t2right_m").val() <1){
				$("#tworight_start").attr("style","display:none;");
				$("#t2").attr("style","display:none;");
				$(".thegame").height($(window).height());
				$(".t2left").attr("style","display:none;");
				$(".t2right").attr("style","display:none;");
				setTimeout(function(){$(".thegame").removeAttr("style");},250);	
				$(".t3left").removeAttr("style");
				$(".t3left").height($(window).height() - $(".thegame").height());
			}

			if(tworight_alltime == 30){
				$('.t2right').append('<embed src="media/30m.wav" autostart="true" loop="false" style="width:0px;height:0px;visibility: hidden;">'); 
			}

			$("#two_reset").click(function(){
				clearInterval(twoleft);
				clearInterval(tworight);
				var twoleft_alltime = parseInt(359);
				var tworight_alltime = parseInt(359);
				$("#twoleft_start").removeAttr("disabled");
				$("#tworight_start").attr("disabled","disabled");
				$("#twoleft_minute_show").text("02分");
				$("#twoleft_second_show").text("00分");
				$("#tworight_minute_show").text("02分");
				$("#tworight_second_show").text("00分");
			})
		},1000);


		//中断反方计时，切换到正方
		$("#twoleft_start").click(function(){
			$(this).text("正方辩论中");
			$("#tworight_start").text("反方开始");
			$("#twoleft_start").attr("disabled","disabled");
			$("#tworight_start").removeAttr("disabled");
			twoleft_timer(twoleft_alltime);

			//中断计时；
			clearInterval(tworight);

			//储存目前剩余时间
			$("#t2right_m").val(tworight_alltime);
		});
	};

	$("#tworight_start").click(function(){
		$(this).text("反方辩论中");
		$("#tworight_start").attr("disabled","disabled");
		$("#twoleft_start").removeAttr("disabled");
		tworight_timer(tworight_alltime);
	});


	//正方奇袭
	var threeleft_alltime = parseInt(119);
	function threeleft_timer(threeleft_alltime){
		var threeleft = window.setInterval(function(){
			var threeleftminute=0,
				threeleftsecond=0;//时间默认值
			if(threeleft_alltime > 0){
				threeleftminute = Math.floor(threeleft_alltime / 60);
				threeleftsecond = Math.floor(threeleft_alltime) - (threeleftminute * 60);
			}
			if (threeleftminute <= 9) threeleftminute = '0' + threeleftminute;
			if (threeleftsecond <= 9) threeleftsecond = '0' + threeleftsecond;

			$('#threeleft_minute_show').html(threeleftminute);
			$('#threeleft_second_show').html(threeleftsecond);
			threeleft_alltime--;

			if(threeleft_alltime < 0){
				clearInterval(threeleft);
				setTimeout(function(){
					$(".thegame").height($(window).height());
					$(".t3left").attr("style","display:none;");
					setTimeout(function(){$(".thegame").removeAttr("style");},250);
					$(".t3right").removeAttr("style");
					$(".t3right").height($(window).height() - $(".thegame").height());
				},100)
			}

			if(threeleft_alltime == 30){
				$('.t3left').append('<embed src="media/30m.wav" autostart="true" loop="false" style="width:0px;height:0px;visibility: hidden;">'); 
			}

			$("#threeleft_next").click(function(){
				clearInterval(threeleft);
				$(".thegame").height($(window).height());

				$(".t3left").attr("style","display:none;");
				setTimeout(function(){$(".thegame").removeAttr("style");},250);
				$(".t3right").removeAttr("style");
				$(".t3right").height($(window).height() - $(".thegame").height());
			})
		},1000);
	};

	$("#threeleft_start").click(function(){
		$("#threeleft_next").removeAttr("style");
		$(this).text("正方辩论中");
		$("#threeleft_start").attr("disabled","disabled");
		threeleft_timer(threeleft_alltime);
	});


	//反方奇袭
	var threeright_alltime = parseInt(119);
	function threeright_timer(threeright_alltime){
		var threeright = window.setInterval(function(){
			var threerightminute=0,
				threerightsecond=0;//时间默认值
			if(threeright_alltime > 0){
				threerightminute = Math.floor(threeright_alltime / 60);
				threerightsecond = Math.floor(threeright_alltime) - (threerightminute * 60);
			}
			if (threerightminute <= 9) threerightminute = '0' + threerightminute;
			if (threerightsecond <= 9) threerightsecond = '0' + threerightsecond;

			$('#threeright_minute_show').html(threerightminute);
			$('#threeright_second_show').html(threerightsecond);
			threeright_alltime--;

			if(threeright_alltime < 0){
				clearInterval(threeright);
				setTimeout(function(){
					$(".thegame").height($(window).height());
					$(".t3right").attr("style","display:none;");
					setTimeout(function(){$(".thegame").removeAttr("style");},250);
					$(".t4left").removeAttr("style");
					$(".t4left").height($(window).height() - $(".thegame").height());
				},100)
			}

			if(threeright_alltime == 30){
				$('.t3right').append('<embed src="media/30m.wav" autostart="true" loop="false" style="width:0px;height:0px;visibility: hidden;">'); 
			}

			$("#threeright_next").click(function(){
				clearInterval(threeright);
				$(".thegame").height($(window).height());

				$(".t3right").attr("style","display:none;");
				setTimeout(function(){$(".thegame").removeAttr("style");},250);
				$(".t4left").removeAttr("style");
				$(".t4left").height($(window).height() - $(".thegame").height());
			})
		},1000);
	};

	$("#threeright_start").click(function(){
		$("#threeright_next").removeAttr("style");
		$(this).text("反方辩论中");
		$("#threeright_start").attr("disabled","disabled");
		threeright_timer(threeright_alltime);
	});


	//反方陈词
	var fourleft_alltime = parseInt(149);
	function fourleft_timer(fourleft_alltime){
		var fourleft = window.setInterval(function(){
			var fourleftminute=0,
				fourleftsecond=0;//时间默认值
			if(fourleft_alltime > 0){
				fourleftminute = Math.floor(fourleft_alltime / 60);
				fourleftsecond = Math.floor(fourleft_alltime) - (fourleftminute * 60);
			}
			if (fourleftminute <= 9) fourleftminute = '0' + fourleftminute;
			if (fourleftsecond <= 9) fourleftsecond = '0' + fourleftsecond;

			$('#fourleft_minute_show').html(fourleftminute);
			$('#fourleft_second_show').html(fourleftsecond);
			fourleft_alltime--;

			if(fourleft_alltime < 0){
				clearInterval(fourleft);
				setTimeout(function(){
					$(".thegame").height($(window).height());
					$(".t4left").attr("style","display:none;");
					setTimeout(function(){$(".thegame").removeAttr("style");},250);
					$(".t4right").removeAttr("style");
					$(".t4right").height($(window).height() - $(".thegame").height());
				},100)
			}

			if(fourleft_alltime == 30){
				$('.t4left').append('<embed src="media/30m.wav" autostart="true" loop="false" style="width:0px;height:0px;visibility: hidden;">'); 
			}

			$("#fourleft_next").click(function(){
				clearInterval(fourleft);
				$(".thegame").height($(window).height());

				$(".t4left").attr("style","display:none;");
				setTimeout(function(){$(".thegame").removeAttr("style");},250);
				$(".t4right").removeAttr("style");
				$(".t4right").height($(window).height() - $(".thegame").height());
			})
		},1000);
	};

	$("#fourleft_start").click(function(){
		$("#fourleft_next").removeAttr("style");
		$(this).text("反方辩论中");
		$("#fourleft_start").attr("disabled","disabled");
		fourleft_timer(fourleft_alltime);
	});


	//正方陈词
	var fourright_alltime = parseInt(149);
	function fourright_timer(fourright_alltime){
		var fourright = window.setInterval(function(){
			var fourrightminute=0,
				fourrightsecond=0;//时间默认值
			if(fourright_alltime > 0){
				fourrightminute = Math.floor(fourright_alltime / 60);
				fourrightsecond = Math.floor(fourright_alltime) - (fourrightminute * 60);
			}
			if (fourrightminute <= 9) fourrightminute = '0' + fourrightminute;
			if (fourrightsecond <= 9) fourrightsecond = '0' + fourrightsecond;

			$('#fourright_minute_show').html(fourrightminute);
			$('#fourright_second_show').html(fourrightsecond);
			fourright_alltime--;

			if(fourright_alltime < 0){
				clearInterval(fourright);
				setTimeout(function(){
					//$(".t4right").attr("style","display:none;");
					//$("body").attr("style","background-color:#333;")
					
					$('body').append('<embed src="media/timesup.wav" autostart="true" loop="false" style="width:0px;height:0px;visibility: hidden;">'); 
					//alert("比赛结束！");
				},100)
			}

			if(fourright_alltime == 30){
				$('.t4right').append('<embed src="media/30m.wav" autostart="true" loop="false" style="width:0px;height:0px;visibility: hidden;">'); 
			}

			$("#fourright_next").click(function(){
				clearInterval(fourright);
				$('body').append('<embed src="media/timesup.wav" autostart="true" loop="false" style="width:0px;height:0px;visibility: hidden;">'); 
				$("#fourright_start").text("正方时间到！");
				$('#fourright_minute_show').html("00");
				$('#fourright_second_show').html("00");
				//alert("比赛结束！");

				$(".timesup").removeAttr("style");
			})
		},1000);
	};

	$("#fourright_start").click(function(){
		$("#fourright_next").removeAttr("style");
		$(this).text("正方辩论中");
		$("#fourright_start").attr("disabled","disabled");
		fourright_timer(fourright_alltime);
	});
})