$(document).ready(function(){

		//用户名正则表达式
		var ret_txt=/^[A-Za-z0-9]{3}$/;
        //密码框正则表达式
        var ret_password=/^[A-Za-z0-9]{10}$/;

		//用户名获取焦点
       $('.txt').focus(function(){
       	$(this).siblings("p").show(500);
       })
       //用户名失去焦点
       $('.txt').blur(function(){
       	 if(this.value==0){
           $(this).siblings('p').html('!不能为空');
       	}else 
       	{
       		$(this).siblings("p").html('请输入3位数的用户名，以数字，字母组成');
       		var str=$(".txt").val();
       		if(ret_txt.test(str)){
            $('.txt').siblings("p").hide();
            }
            else
       	    {
            $(this).siblings("p").show();
            }
       	}
       	 })
       	
        //密码框获取焦点
       $('.password').focus(function(){
       	$(this).siblings("p").show();
       })
       	 //密码框失去焦点
       	$('.password').blur(function(){
       		var password_txt=$(this).val();
       		if(ret_password.test(password_txt))
       			{
       				 $(this).siblings('p').hide();
       			}else
       		   {
                     $(this).siblings("p").show();
       		    }
        
       	})


       //密码框2框获取焦点
       $('.password2').focus(function(){
       	$(this).siblings("p").show();
       })
       //密码框2失去焦点
       	$('.password2').blur(function(){
       		if($(this).val()==$('.password').val())
       		{
       			$(this).siblings('p').hide();
       		}
            
       	})

        //验证码
        var count=60;
        var timer;
        $('#send').click(function(){
          
          console.log(count);
          timer=setInterval(function()
          {
            if(count>1){
              count--;
            $('#send').val(count+"秒后可重发");
            $("#send").attr('disabled',true);
            }else
            {
               clearInterval(timer);
               $('#send').val("重新发送");
	       $("#send").attr('disabled',false);
            }
            
          },1000)
          })
        //生成验证码
        // $('#change').click(function(){
        //   $(".number").val(parseInt(Math.random()*10000));
        // })
        function change()
        {
          var arrys=new Array(
            '1','2','3','4','5','6','7','8','9','0',
            'a','b','c','d','e','f','g','h','i','j', 
            'k','l','m','n','o','p','q','r','s','t', 
            'u','v','w','x','y','z', 
            'A','B','C','D','E','F','G','H','I','J', 
            'K','L','M','N','O','P','Q','R','S','T', 
            'U','V','W','X','Y','Z'        
            );

          var code=$('#change');
          codes="";

            for(var i=0;i<4;i++){
            var r=parseInt(Math.random()*arrys.length)
            codes+=arrys[r];
            }
          code.val(codes);
          }

        change();
        $('#change').click(change);

         //提交表单
         $('.btn').click(function(){
          var codes2=$('#change').val().toUpperCase();
          if($(".number").val()=='')
          {
              alert('验证码不能为空');
          }
          else if($(".number").val().toUpperCase()==codes2)
          {
              alert('正确');
          }else
          {
             alert('不正确');
             $('number').val="";
          }

         })
           

	})
