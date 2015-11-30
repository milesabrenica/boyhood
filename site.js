// setInterval(time)(function ever (x amount of time))
// 
// search for the ACTIVE cllasss
// on active element do a .fadeOut (milleseconds)($this=element being faded out)
// use $this to do oa .next().fadeIn(500,function)
// after fadeout is done - execute call back function (fucntion that gets excuted after function is completes)
// 
// ctive element
// .fadeOut
// when .fadeOUt is complete. in call back function you do two things using $this
// 1 - REMOVE THE CLASS ACTIVE
// 2 - SEARCH FOR THE NEXT ELEMENT SIBLING $this.next().fadeIn
// .fadeIn(500, call back function);
// 


$(document).ready(function() {
	setInterval(function(){
		$("#quotes img.active").fadeOut(800,function(){
			
			
			if($("#quotes img:last").hasClass("active")){
				$("#quotes img:first").addClass("active");
				
			}else{                 
				$(this).next().fadeIn(500,function(){
					$(this).addClass("active");
				});
			}
			
			$(this).removeClass("active");
		});
	},500);
	
});
// .fadeIn(500, function(){
// 	SECOND PARAMETER
// });
// //
// 
// 
// //JAVASCRIPT NAMELESS FUNCTION = 
// function(){}
// //or 
// function(){
// 	asjdlk;fj;als
// }
