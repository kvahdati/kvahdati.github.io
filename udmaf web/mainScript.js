// JavaScript Document
			$(function(){
				$("#photo").click(function(e){
					e.preventDefault();
					$("#photography").scrollintoview({ duration: 300});
				});
				$("#photo").click(function(e){
					e.preventDefault();
					$("#photography").scrollintoview({ duration: 600});
				});
				$("#stop").click(function(e){
					e.preventDefault();
					$("#stopMotion").scrollintoview({ duration: 900});
				});
				$("#noise").click(function(e){
					e.preventDefault();
					$("#audio").scrollintoview({ duration: 1200});
				});
				$("#graphics").click(function(e){
					e.preventDefault();
					$("#ThreeDgraphics").scrollintoview({ duration: 1500});
				});
				$("#web").click(function(e){
					e.preventDefault();
					$("#webDesign").scrollintoview({ duration: 1800});
				});
				$("#game").click(function(e){
					e.preventDefault();
					$("#gameDesign").scrollintoview({ duration: 2100});
				});
				
			});