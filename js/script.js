 
    $('#fullpage').fullpage({ 
		'css3': true, 
		'navigation': true,
		'navigationPosition': 'right', 

		'afterLoad': function(anchorLink, index){
			if(index == 4){
				$('.left-foot,.right-foot').removeClass('foot-stand');
			}
		},

		'onLeave':function(index,nextIndex,direction){

			 

			$('.man').toggleClass('fall', nextIndex == 2);
			$('.shadow').addClass('big', nextIndex == 2); 
			$('.mouth').addClass('mouth-expand', nextIndex == 2);
			$('#intro-introduce').toggleClass('intro-flash', nextIndex == 2);
			$('#intro-introduce').addClass('intro-introduce', nextIndex == 2);


			$('.left-foot,.right-foot').addClass('foot-stand', (index == 1 && direction == 'down' ) || (index == 3 && direction == 'down')); 
			 
 
              
			$('.man').toggleClass('fall-again ', nextIndex == 3); 
			$('#intro-skill').toggleClass('intro-flash', nextIndex == 3);
			$('#intro-skill').addClass('intro-skill', nextIndex == 3); 
			$('.man').toggleClass('fall-again-a', nextIndex == 4);
			$('#intro-program').toggleClass('intro-flash', nextIndex == 4);
			$('#intro-program').addClass('intro-program', nextIndex == 4);
			$('.man').toggleClass('fall-again-a-f', nextIndex == 5);

		}

    }); 


var planets = document.getElementById('planet').getElementsByTagName('div');
var programs = document.getElementsByClassName('program-introduce');
var mask = document.getElementById('mask');
var close = document.getElementsByClassName('close');

for(var i=0;i<3;i++){
    planets[i].id = i; 
	planets[i].onclick = function(){
		programs[this.id].style.display = "block";
		mask.style.display = 'block';  
	};
}

for(var j=0;j<close.length;j++){
    close[j].id = j;
    close[j].onclick = function(){
     	programs[this.id].style.display = "none";  
     	mask.style.display = 'none'; 
    };
}