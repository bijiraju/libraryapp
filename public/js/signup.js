email=document.getElementById('email');
            emailtext=document.getElementById('emailtext');
            pwd=document.getElementById('pwd');
            confirmpwd=document.getElementById('confirmpwd')
            confirmtext=document.getElementById('confirmtext');
            email.addEventListener('input',emailValidate);
            pwd.addEventListener('input',pwdValidate);
            confirmpwd.addEventListener('input',confirmValidate);

            function emailValidate(){
              let exp=/^([A-Za-z0-9\-.$_,!#%^&*:;]{3,})@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})$/;
              if(exp.test(email.value)){
                  emailtext.innerHTML="Valid Email Address";
                  emailtext.style.color="green";
                  return true;
              }
              else{
                  emailtext.innerHTML="Invalid Email Address";
                  emailtext.style.color="red";
                  return false;
              }
            }

            function pwdValidate(){
                let exp=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
                    if(exp.test(pwd.value)){
                    // console.log("Valid");
                        pwdtext.innerHTML="Valid Password";
                        pwdtext.style.color="Green";
                        return true;
                    }
                    else{
                        pwdtext.innerHTML="Minimum 8 Character and Should contain atleast a number,an uppercase and a lowercase";
                        pwdtext.style.color="red";
                        return false;
                    }
                }

            function confirmValidate(){
                    if(pwd.value==confirmpwd.value){
                    confirmtext.innerHTML="Match Found";
                    confirmtext.style.color="green";
                    return true;
                    }
                    else{
                    confirmtext.innerHTML="No Match Found";
                    confirmtext.style.color="red";
                    return false;
                    }
                }

                function Validate(){
              if(emailValidate()&&pwdValidate()&&confirmValidate()){
                
                return true;
              }
              else{
                alert("Invalid Credentials");
                return false;
              }
            }
