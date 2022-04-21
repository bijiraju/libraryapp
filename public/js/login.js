// email=document.getElementById("email");
//             pwd=document.getElementById("pwd");
//             emailtext=document.getElementById("emailtext");

//             email.addEventListener('input',emailValidate);
//             pwd.addEventListener('input',pwdValidate);

//             function emailValidate(){
                
//                 let exp=/^([A-Za-z0-9\-.$_,!#%^&*:;]{3,})@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})$/;
//                         if(exp.test(email.value)){
//                             emailtext.innerHTML="Valid Email";
//                             emailtext.style.color="green"; 
//                             return true  
//                         }
//                         else{
//                             emailtext.innerHTML="Invalid Email";
//                             emailtext.style.color="red";  
//                             return false;  
//                         }
//                         }
//             function pwdValidate(){
//                 let exp=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
//                     if(exp.test(pwd.value)){
//                         pwdtext.innerHTML="Valid Password";
//                         pwdtext.style.color="Green";
//                         return true;
//                     }
//                     else{
//                         pwdtext.innerHTML="Minimum 8 characters,at least 1 uppercase,1 lower case and 1 number";
//                         pwdtext.style.color="red";
//                         return false;
//                     }
//                 }
            
//             function Validate(){
//               if(emailValidate()&&pwdValidate()){
                
//                 return true;
               
//               }
//               else{ 
//                 alert("Invalid Entry");
//                 return false;
//               }
//             }