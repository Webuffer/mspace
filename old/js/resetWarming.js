function checkform(){
 
  //验证密码
  if($("password").value == ""){
    $("p_msg").innerHTML ="密码不能为空";
    $("password").select();
    $("password").focus();
    return false;
  }

  //用户重复密码验证
  if($("password_confirm").value == ""){
    $("p_confirm").innerHTML ="输入密码不为空";
    $("password_confirm").select();
    $("password_confirm").focus();
    return false;
  }else{
    if($("password_confirm").value!= $("password").value){
      $("p_confirm").innerHTML = "输入密码错误";
      $("password_confirm").select();
      $("password_confirm").focus();
      return false;
    }
  }
  return true;
}

function $(id){
  return document.getElementById(id);
} 