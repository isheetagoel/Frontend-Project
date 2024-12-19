function clearErrors(){
    let error=document.getElementsByClassName('formError')
    for (let item of error)
        item.innerHTML=""

}

function setErrors(id,error){
    let element = document.getElementById(id);
    element.querySelector('.formError').innerHTML=error;
}

function validateForm(){
    var returnval = true;
    clearErrors();
    var name = document.forms['myform']["name"].value;
    if (name.length<5)
    {
        setErrors("namediv","*Length of name is too short");
        returnval=false;
    }

    if (name.length==0){
        setErrors("namediv","*Length of name cannot be zero");
        returnval=false;
    }

    var email = document.forms['myform']["email"].value;
    if (email.length>15)
    {
        setErrors("email","*Length of email is too long");
        returnval=false;
    }

    var phone = document.forms['myform']["phone"].value;
    if(phone.length!=10){
        setErrors("phone","*Phone number should be of 10 digits");
        returnval=false;
    }

    var password = document.forms['myform']["pass"].value;
    if (password.length<6){
        setErrors("pass","*Password should be atleast 6 characters long");
        returnval=false;
    }

    var cpassword = document.forms['myform']["cpass"].value;
    if (cpassword!=password){
        setErrors("cpass","*Password and Confirm Password should match!");
        returnval=false;
    }
    return returnval;


}