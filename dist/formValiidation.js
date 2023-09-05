// form validation
const form = document.getElementById('form');
const  yourName= document.getElementById('name');
const email = document.getElementById('email');
const url = document.getElementById('url');



// email
function checkEmail(input) {
  const re =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  }else{
    showError(input,'Email is not vaild');
  }
}
// check input length
function checkLength(input,min,max){
  if (input.value.length < min){
    showError(input,`${getFieldiName(input)} must  be at least ${min} charcater`);
  }else if(input.value.length > max){
    showError(input,`${getFieldiName(input)} must be less than ${max} characters`);
  }else{
    showSuccess(input);
  }
  }
// show input error message
function showError(input ,message ) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error'; 
  const small = formControl.querySelector('small');
  small.innerText = message;
}
// show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//  check requried filed
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldiName(input)} is required`);
    }else{
      showSuccess(input);
    }
  });
}
// get filedname
function  getFieldiName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


form.addEventListener('submit',function(e) {
  e.preventDefault();

  checkRequired([yourName,email,url]);

  checkLength(yourName ,5 ,15);
  checkEmail(email);

});
