// JavaScript Document
			$(function(){
				$("#scroll").click(function(e){
					e.preventDefault();
					$("#photography").scrollintoview({ duration: 400});
				})
				$("#home").click(function(e){
					e.preventDefault();
					$("#introContent").scrollintoview({ duration: 400});
				});
				$("#photo").click(function(e){
					e.preventDefault();
					$("#photography").scrollintoview({ duration: 400});
				});
				$("#stop").click(function(e){
					e.preventDefault();
					$("#stopMotion").scrollintoview({ duration: 400});
				});
				$("#noise").click(function(e){
					e.preventDefault();
					$("#audio").scrollintoview({ duration: 400});
				});
				$("#graphics").click(function(e){
					e.preventDefault();
					$("#ThreeDgraphics").scrollintoview({ duration: 400});
				});
				$("#web").click(function(e){
					e.preventDefault();
					$("#webDesign").scrollintoview({ duration: 400});
				});
				$("#game").click(function(e){
					e.preventDefault();
					$("#gameDesign").scrollintoview({ duration: 400});
				});
				
			});