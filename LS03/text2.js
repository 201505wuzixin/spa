$(function(){

  $("#perimeter").attr("disabled","false").css("background","#E0E0E0");
  $("#area").attr("disabled","false").css("background","#E0E0E0")
  $("#calc").click(function(){
      
         if($("#width").val()===""){
           $("#one").html("<br/>���벻��Ϊ�գ�");
           $("#one").css("color","red");
           $("#one").css("font-size","12px");
          
           
          }
          else if ($("#width").val()< 0) {
           $("#one").html("<br/>��ȱ��������");
           $("#one").css("color","red");
           $("#one").css("font-size","12px");
           
           }
          else if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-?\d+])?$/.test($("#width").val())){
           // console.log("111");
           $("#one").html("<br/>��ȱ�������ֵ");
           $("#one").css("color","red");
           $("#one").css("font-size","12px");
           
          }
      
          else if($("#height").val()==""){

             $("#two").html("<br/>���벻��Ϊ�գ�");
             $("#two").css("color","red");  
              $("#two").css("font-size","12px");
              $("#calc").attr("disabled",true); 
           }
            else if ($("#height").val()< 0) {
             $("#two").html("<br/>���ȱ��������");
             $("#two").css("color","red");
             $("#two").css("font-size","12px");
            
          }
          else if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-?\d+])?$/.test($("#height").val())){
           
           $("#two").html("<br/>���ȱ�������ֵ");
           $("#two").css("color","red");
           $("#two").css("font-size","12px");
           
          }
          else{
            $("#one").html("");
            $("#two").html("");
            var w = $("#width").val();
            var h = $("#height").val();
             $("#perimeter").val(w*2+h*2);
             $("#area").val(w*h);
          }
      




  });
})