function checkform(){
  //验证用户名
  if($("email").value == ""){
    $("n_msg").innerHTML ="邮箱不能为空";
    $("email").select();
    $("email").focus();
    return false;
  }
  //验证密码
  if($("password").value == ""){
    $("p_msg").innerHTML ="密码不能为空";
    $("password").select();
    $("password").focus();
    return false;
  }
  return false;
}
function $(id){
  return document.getElementById(id);
} 
