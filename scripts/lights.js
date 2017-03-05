
function Lights(sSelector)
{
	
	var l = this;
	l.lights=$(sSelector);
	
	
	
	
	
	l.windiv=l.lights.find('.WinDiv');
	l.windiv.css("display","none");
	l.startdiv=l.lights.find('.StartGameDiv');
	
	
	l.startgame=function()
	{
		for(j=0; j< 20; j++)
	{
	var rnd=(Math.floor(Math.random() * (16 - 0) + 0));
	console.log(rnd);
	l.logicfunction(''+rnd+'');
	}
			l.startdiv.css("display","none");
		l.windiv.css("display","none");
	};
	l.startdiv.click(l.startgame);
	l.windiv.click(l.startgame);
	for(i=0;i<16;i++)
	{
	l.lights.append('<div class="lamp " data-number="'+i+ '"></div>');//data-number служыт для определения и идентификации
	}

	l.lamps=l.lights.find('.lamp');

		var logicarray=[ 
							3,3,3,3,
							3,3,3,3,
							3,3,3,3,
							3,3,3,3
						];
	l.max=l.lamps.length;
	for(i=0;i<l.max;i++)
	{
		l.lights.find('.lamp:eq('+i+')').addClass('stage'+ logicarray[i]+'');
	}
	
	l.nextstage=function(currentlamp)
	{
		
	
		if($(currentlamp).hasClass('stage1'))
		{
			$(currentlamp).removeClass('stage1');
			$(currentlamp).addClass('stage2');
		}
		else if($(currentlamp).hasClass('stage2'))
		{
			$(currentlamp).removeClass('stage2');
			$(currentlamp).addClass('stage3');
		}
		else if($(currentlamp).hasClass('stage3'))
		{
			$(currentlamp).removeClass('stage3');
			$(currentlamp).addClass('stage1');
		}
	}
	;
/*создаем случайное поле*/
	
	l.logicfunction=function(curentNumber)
	{
		
		switch(curentNumber)
		{
			
			
			case '0':
			l.nextstage(l.lights.find('.lamp:eq(1)'));
			l.nextstage(l.lights.find('.lamp:eq(4)'));
			l.nextstage(l.lights.find('.lamp:eq(5)'));
			break;
			case '1':
			l.nextstage(l.lights.find('.lamp:eq(0)'));
			l.nextstage(l.lights.find('.lamp:eq(2)'));
			l.nextstage(l.lights.find('.lamp:eq(4)'));
			l.nextstage(l.lights.find('.lamp:eq(5)'));
			l.nextstage(l.lights.find('.lamp:eq(6)'));
			
			break;
			case '2':
			l.nextstage(l.lights.find('.lamp:eq(1)'));
			l.nextstage(l.lights.find('.lamp:eq(3)'));
			l.nextstage(l.lights.find('.lamp:eq(5)'));
			l.nextstage(l.lights.find('.lamp:eq(6)'));
			l.nextstage(l.lights.find('.lamp:eq(7)'));
			break;
			case '3':
			l.nextstage(l.lights.find('.lamp:eq(2)'));
			l.nextstage(l.lights.find('.lamp:eq(6)'));
			l.nextstage(l.lights.find('.lamp:eq(7)'));
			break;
			case '4':
			l.nextstage(l.lights.find('.lamp:eq(0)'));
			l.nextstage(l.lights.find('.lamp:eq(1)'));
			l.nextstage(l.lights.find('.lamp:eq(5)'));
			l.nextstage(l.lights.find('.lamp:eq(8)'));
			l.nextstage(l.lights.find('.lamp:eq(9)'));
			break;
			case '5':
			l.nextstage(l.lights.find('.lamp:eq(0)'));
			l.nextstage(l.lights.find('.lamp:eq(1)'));
			l.nextstage(l.lights.find('.lamp:eq(2)'));
			l.nextstage(l.lights.find('.lamp:eq(4)'));
			l.nextstage(l.lights.find('.lamp:eq(6)'));
			l.nextstage(l.lights.find('.lamp:eq(8)'));
			l.nextstage(l.lights.find('.lamp:eq(9)'));
			l.nextstage(l.lights.find('.lamp:eq(10)'));
			break;
			case '6':
			l.nextstage(l.lights.find('.lamp:eq(1)'));
			l.nextstage(l.lights.find('.lamp:eq(2)'));
			l.nextstage(l.lights.find('.lamp:eq(3)'));
			l.nextstage(l.lights.find('.lamp:eq(5)'));
			l.nextstage(l.lights.find('.lamp:eq(7)'));
			l.nextstage(l.lights.find('.lamp:eq(9)'));
			l.nextstage(l.lights.find('.lamp:eq(10)'));
			l.nextstage(l.lights.find('.lamp:eq(11)'));
			break;
				case '7':
			l.nextstage(l.lights.find('.lamp:eq(2)'));
			l.nextstage(l.lights.find('.lamp:eq(3)'));
			l.nextstage(l.lights.find('.lamp:eq(6)'));
			l.nextstage(l.lights.find('.lamp:eq(10)'));
			l.nextstage(l.lights.find('.lamp:eq(11)'));
			break;
			case '8':
			l.nextstage(l.lights.find('.lamp:eq(4)'));
			l.nextstage(l.lights.find('.lamp:eq(5)'));
			l.nextstage(l.lights.find('.lamp:eq(9)'));
			l.nextstage(l.lights.find('.lamp:eq(13)'));
			l.nextstage(l.lights.find('.lamp:eq(12)'));
			break;
			case '9':
			l.nextstage(l.lights.find('.lamp:eq(4)'));
			l.nextstage(l.lights.find('.lamp:eq(5)'));
			l.nextstage(l.lights.find('.lamp:eq(6)'));
			l.nextstage(l.lights.find('.lamp:eq(8)'));
			l.nextstage(l.lights.find('.lamp:eq(10)'));
			l.nextstage(l.lights.find('.lamp:eq(12)'));
			l.nextstage(l.lights.find('.lamp:eq(13)'));
			l.nextstage(l.lights.find('.lamp:eq(14)'));
			break;
			case '10':
			l.nextstage(l.lights.find('.lamp:eq(5)'));
			l.nextstage(l.lights.find('.lamp:eq(6)'));
			l.nextstage(l.lights.find('.lamp:eq(7)'));
			l.nextstage(l.lights.find('.lamp:eq(9)'));
			l.nextstage(l.lights.find('.lamp:eq(11)'));
			l.nextstage(l.lights.find('.lamp:eq(13)'));
			l.nextstage(l.lights.find('.lamp:eq(14)'));
			l.nextstage(l.lights.find('.lamp:eq(15)'));
			break;
				case '11':
			l.nextstage(l.lights.find('.lamp:eq(6)'));
			l.nextstage(l.lights.find('.lamp:eq(7)'));
			l.nextstage(l.lights.find('.lamp:eq(10)'));
			l.nextstage(l.lights.find('.lamp:eq(14)'));
			l.nextstage(l.lights.find('.lamp:eq(15)'));
			break;
			case '12':
			l.nextstage(l.lights.find('.lamp:eq(8)'));
			l.nextstage(l.lights.find('.lamp:eq(9)'));
			l.nextstage(l.lights.find('.lamp:eq(13)'));
			break;
			case '13':
			l.nextstage(l.lights.find('.lamp:eq(8)'));
			l.nextstage(l.lights.find('.lamp:eq(9)'));
			l.nextstage(l.lights.find('.lamp:eq(10)'));
			l.nextstage(l.lights.find('.lamp:eq(12)'));
			l.nextstage(l.lights.find('.lamp:eq(14)'));
			
			break;
			case '14':
			l.nextstage(l.lights.find('.lamp:eq(9)'));
			l.nextstage(l.lights.find('.lamp:eq(10)'));
			l.nextstage(l.lights.find('.lamp:eq(11)'));
			l.nextstage(l.lights.find('.lamp:eq(13)'));
			l.nextstage(l.lights.find('.lamp:eq(15)'));
			break;
			case '15':
			l.nextstage(l.lights.find('.lamp:eq(10)'));
			l.nextstage(l.lights.find('.lamp:eq(11)'));
			l.nextstage(l.lights.find('.lamp:eq(14)'));
			break;
			
		}
		//l.nextstage(this);
	
	
	
	
	
	
	var complite=true;
	for(i=0;i<l.max;i++)
	{
		if((l.lights.find('.lamp:eq('+i+')').hasClass('stage1'))||(l.lights.find('.lamp:eq('+i+')').hasClass('stage2')))
		{complite=false;}
			
		
	}
	if(complite==true)
	{
	l.windiv.css("display","block");
	}
	};
	
	
	l.clickfunction=function()
	{
		
		l.logicfunction($(event.target).attr('data-number'));
		
	};
	
	
	
	
	l.lamps.click(l.clickfunction);
	
	
	
	
}
