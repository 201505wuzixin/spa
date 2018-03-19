var calc=document.getElementById('calc');
  	var width=document.getElementById('rectangle-width');
  	var height=document.getElementById('rectangle-height');
  	var perimeter=document.getElementById('rectangle-perimeter');
  	var area=document.getElementById('rectangle-area');
  	calc.onclick=function(){
  		var wv=parseInt(width.value);
  		var hv=parseInt(height.value);
  		perimeter.value=(wv+hv)*2;
  		area.value=wv*hv;
  	}
  	function tips(){
  		if(width.value==""){
  			document.getElementById('wtips').innerHTML="<font color='red' size='2'>不能为空</font>";
  			document.getElementById("sp1").style.color="red"; 
  		}else{ 
  			document.getElementById("sp1").style.color="#000"; 
  		}
  		if(height.value==""){
  			document.getElementById('htips').innerHTML="<font color='red' size='2'>不能为空</font>";
  			document.getElementById("sp2").style.color="red"; 
  		}else{
  			document.getElementById("sp2").style.color="#000"; 
  		}
  		var reg=/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;  
        if(reg.test(width.value)){  
        	width.value='';
            document.getElementById('wtips').innerHTML="<font color='red' size='2'>必须为数值</font>";
            document.getElementById("sp1").style.color="red"; 
            width.focus();
            return false;  
        }else{
        	document.getElementById("wtips").style.display="none"; 
        }
        if(reg.test(height.value)){  
        	width.value='';
            document.getElementById('htips').innerHTML="<font color='red' size='2'>必须为数值</font>";
            document.getElementById("sp2").style.color="red"; 
            width.focus();
            return false;  
        }else{
        	document.getElementById("whips").style.display="none"; 
        }
  	}