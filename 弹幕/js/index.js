
var num = 0;
var ds = document.getElementById('ds');
var tt = document.getElementById('tt');
var input = tt.getElementsByTagName('input');

//登录按钮点击之后实现登录框的自动居中
$('#dl').click(function()
	{
		tt.style.display = "block";
		back.style.display = "block";
		var tim = null;
		tim = setInterval(function() {
			var look = document.documentElement.clientWidth;
			var oh = document.documentElement.clientHeight;
			var tw = tt.offsetWidth;
			var th = tt.offsetHeight;
			var top = (oh - th) / 2;
			var left = (look - tw) / 2;
			tt.style.top = top + 'px';
			tt.style.left = left + 'px';
		}, 10)
	})
	
//注册按钮点击之后实现登录框的自动居中
$('#zc').click(function() 
	{
		tt.style.display = "block";
		back.style.display = "block";
		var tim = null;
		tim = setInterval(function() {
			var look = document.documentElement.clientWidth;
			var oh = document.documentElement.clientHeight;
			var tw = tt.offsetWidth;
			var th = tt.offsetHeight;
			var top = (oh - th) / 2;
			var left = (look - tw) / 2;
			tt.style.top = top + 'px';
			tt.style.left = left + 'px';
		}, 10)
	})

//登陆判断账号、密码和验证码的输入
input[4].onclick=function(){
        if(input[0].value==""&&input[1].value=="")
        {
        	alert('请输入账号和密码');
        }
        else if(input[0].value!=''&&input[1].value=="")
        {
        	alert('请输入密码');
        }
         else if(input[0].value==""&&input[1].value!='')
        {
        	alert('请输入账号');
        }
        else if(input[2].value=="")
        {
          alert('验证码不能为空');
        }
        else if(input[2].value!=input[3].value)
        {
           alert('验证码不正确，请重新输入');
        }
        else if(input[2].value==input[3].value)
        {
        	tt.style.display="none";
		    back.style.display="none";
		    $('#xs').get(0).style.display="none";
            $('#yc').get(0).style.display="block";
        }
    }

//注册判断账号、密码和验证码的输入
    input[5].onclick=function(){
        if(input[0].value==""&&input[1].value=="")
        {
        	alert('请输入账号和密码');
        }
        else if(input[0].value!=''&&input[1].value=="")
        {
        	alert('请输入密码');
        }
         else if(input[0].value==""&&input[1].value!='')
        {
        	alert('请输入账号');
        }
        else if(input[2].value=="")
        {
          alert('验证码不能为空');
        }
        else if(input[2].value!=input[3].value)
        {
           alert('验证码不正确，请重新输入');
        }
        else if(input[2].value==input[3].value)
        {
        	tt.style.display="none";
		    back.style.display="none";
		    $('#xs').get(0).style.display="none";
            $('#yc').get(0).style.display="block";
        }
    }
   
//点击叉号关闭登陆框
 $('#wrong').click(function(){
		tt.style.display="none";
		back.style.display="none";
	})
 
//随机产生五位验证码
    function yanZhengMa()
    {
      var yan=$('#yan').get(0)
      var co=''
      var colen=5;
      var arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0'];
      for(var i=0;i<colen;i++)
      {
        var s=Math.floor(Math.random()*36);
        yan.style.color='rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')';
        co+=arr[s];
        yan.value=co;
      }
    }
    yanZhengMa()

//点击更换验证码
$('#yan').click(function(){
	yanZhengMa()
})

//控制弹幕的颜色、字体、位置的随机生成
function mu(){
	var dd=document.createElement('div');
	dd.innerHTML=$('#dm').get(0).value;
	$('#dm').get(0).value='';
	ds.appendChild(dd);
	dd.style.color='rgb('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')';
	dd.style.fontSize=Math.floor(Math.random()*25+12)+'px';
	dd.style.position='absolute';
	dd.style.left=Math.floor(Math.random()*900)+'px';
	dd.style.top=Math.floor(Math.random()*620)+'px';
	var l=dd.offsetLeft
	var timer=null;
	timer=setInterval(function(){
	       l--;
	       if(l<=(0-dd.offsetWidth))
	       {
	       	clearInterval(timer);
	       	$('#ds').get(0).removeChild(dd);
	       }
	       dd.style.left=l+'px';
		},30)
}

//发送弹幕（只能发送25字以内）
$('#st').click(function(){
	   
	   if($('#dm').get(0).value!=''&&$('#dm').get(0).value.length<=25){
			mu();
		}  
		
	})

//控制弹幕的显示和隐藏
$('#rr').click(function(){
	num++
	if (num%2==0) {
		$('#ds').get(0).style.display='block';
		$('#rr').get(0).style.backgroundColor='lightgray'
		num=0
	} else{
		$('#ds').get(0).style.display='none';
		$('#rr').get(0).style.backgroundColor='deepskyblue'
	}
})

//按下enter键发送弹幕
window.onkeydown=function(e){
	if (e.keyCode==13) {
		mu()
	}
}
