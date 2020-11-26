var username = document.getElementById("user");
var password = document.getElementById("password");
function validate()
{
    
  
    function reject(){
      console.log("rejected");
      
      alert("Wrong Username or Password");
  }
  
  function approved(){
    console.log("approved");
   document.write(""); 
    setTimeout(function(){window.location = "list.html";}, 100); 
  }
  function check(a,b,done){
    if(user=="admin" && pwd=="12345"){
     
      done();
      }
    else
      reject();
  }
  
  var user = username.value;
  var pwd= password.value;
  check(user,pwd,approved);
  

  }

