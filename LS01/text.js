var calc=document.getElementById('calc');
var width=document.getElementById('rectangle__width');
var height=document.getElementById('rectangle__height');
var perimeter=document.getElementById('rectangle__perimeter');
var area=document.getElementById('rectangle__area');
calc.onclick=function(){
  var wv=parseInt(width.value);
  var hv=parseInt(height.value);
  perimeter.value=(wv+hv)*2;
  area.value=wv*hv;
}
function tips(){
  if(width.value==""){
    document.getElementById('wtips').innerHTML="<font color='red' size='2'>不能为空</font>";
    document.getElementById('sp1').style.color='red';
  }else{
    document.getElementById('wtips').style.display="none";
    document.getElementById('sp1').style.color="#000";
  }
  if(height.value==""){
    document.getElementById('htips').innerHTML="<font color='red' size='2'>不能为空</font>";
    document.getElementById('sp2').style.color='red';
  }else{
    document.getElementById('htips').style.display="none";
    document.getElementById('sp2').style.color="#000";
  }
}
