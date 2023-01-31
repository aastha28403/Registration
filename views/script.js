// const form = document.getElementsByTagName('form');
// const firstname = document.getElementById('fname');
// const lastname = document.getElementById('lname');
// const email = document.getElementById('email');
// const number = document.getElementById('number');
// const username = document.getElementById('username');
// const password = document.getElementById('password');
// const cpassword = document.getElementById('cpassword');
// const button = document.getElementById('btn');
// form.background = "red";

// form.addEventListener('onclick', e =>{
//     e.preventDefault();

//     validateInputs();
// });

// const setError = (element , message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     errorDisplay.visibility = "visible";
// };

// const validateInputs = () => {
//     const firstValue = firstname.value.trim();
//     const lastValue = lastname.value.trim();
//     const emailValue = email.value.trim();
//     const numberValue = username.value.trim();
//     const usernameValue = password.value.trim();
//     const passwordValue = cpassword.value.trim();

    

//     if (firstValue == "") {
//         const first = document.getElementById('firstn');
//         setError(first.error, "Please enter your first name.");
//     } else if(firstValue.length < 3 ) {
//         const first = document.getElementById('firstn');
//         setError(first.error, "Name should be atleast 3 character long.");
//     }
    
//     console.log("hello");     
// }

function validateform(){  
    var name=document.myform.fname.value;  
    console.log(name,"dddddddddddddddddddd")
    var password=document.myform.password.value;  
  
    
    
     if (name==null || name==""){  
       alert("Name can't be blank");  
        return false;  
    }else if(password.length<6){  
           alert("Password must be at least 6 characters long.");  
         return false;  
    }  
  }  