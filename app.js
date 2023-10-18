const form =document.querySelector('#form')
const UserName =document.querySelector('#UserName');
const Email =document.querySelector('#Email');
const Password =document.querySelector('#Passsword');
const ConfirmPassword =document.querySelector('#Cpassword');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
})
function validateInputs(){
    const UserNameval = UserName.value.trim()
    const Emailval = Email.value.trim();
    const Passwordval = Password.value.trim();
    const confirmPassword = Cpassword.value.trim();
    

    if(UserNameval===''){
        seterror(UserName,'username is required');
    }
    else{
    setsuccess(UserName);
}

    if(Emailval===''){
        seterror(Email,'Email is required');
    }
    else if(!validateEmail(Emailval)){
    seterror(Email,'please enter a valid email');
}
    else{
        setsuccess(Email);
    }

    if(Passwordval===''){
        seterror(Password,'Password is required');
    }
    else if(Passwordval.length<8){
    seterror(Password,'Password must be alteast 8 character');
    }
    else{
        setsuccess(Password);
    }

    if(ConfirmPasswordval ===''){
        seterror(cpassword,'Confirm password is required');
    }
    else if(cpasswordval!==Passwordval){
        seterror(cpassword,'password does not match');
    }
    else{
        setsuccess(cpassword);
    }
}
function seterror(element,message){
    const inputgroup = element.parentelement;
    const errorelement = inputgroup.querySelector('.error')
    errorelement.innerText = message;
    inputgroup.classlist.add('error')
    inputgroup.classlist.remove('success')
}

function setsuccess(element,message){
    const inputgroup = element.parentelement;
    const errorelement = inputgroup.querySelector('.error')
    errorelement.innerText = '';
    inputgroup.classlist.add('success')
    inputgroup.classlist.remove('error')
}
const validateEmail = (Email) =>{
    return String(Email)
    .toLowerCase()
    .match((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/));
}