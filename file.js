function login(){
    var name=document.getElementById("name").value;
    var password=document.getElementById("pass").value;
    if((name=="Admin" && password=="Admin")||(name=="User" && password=="User"))
    {
        alert("login successfully");
        return true;
    }
    else if(name!="Admin" || name=="")
    {
        alert("Enter Usernmae or Incorrect Username");
        return false;
    }
    else if(password!="Admin" || password=="")
    {
        alert("Enter Password or Incorrect Password");
        return false;
    }
    else{
        
    }
}
