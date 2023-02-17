const PassValidation=()=>
{
    
    var pwd=document.getElementById("Password");
    var cpwd=document.getElementById("confirmPassword");
    if(pwd.value!=cpwd.value)
    {
        alert("Password and Confirm Password are not same");
    }
    else 
    {
        alert("valid");
    }
}










//part2


var btnvalidate=document.getElementById("btnvalidate").addEventListener("click",(e)=>
{
    e.preventDefault();
const nom=document.getElementById("nom");
const prenom=document.getElementById("prenom");
const Password=document.getElementById("Password");
const confirmPassword=document.getElementById("confirmPassword");
const phone=document.getElementById("phone");
const adresse=document.getElementById("adresse");


var error="<p style='color:green;'>valid</p>";
if(nom.value.length<3)
{
    error="<p style='color:red;'>Minimum 3 characters</p>";
    document.getElementById("lastnerror").innerHTML=error;
    // e.preventDefault();
}
else 
{
    error="<p style='color:green;'>valid</p>";
    document.getElementById("lastnerror").innerHTML=error;
}
if(prenom.value.length<4)
{
    error="<p style='color:red;'>Minimum 4 characters</p>";
    document.getElementById("firstnerror").innerHTML=error;
    // e.preventDefault();
}
else if(prenom.value.length>=4)
{
    error="<p style='color:green;'>valid</p>";
    document.getElementById("firstnerror").innerHTML=error;
}
if(!phone.value.match( /[0-9]/g) )

{
    error="<p style='color:red;'>the phone number containts caracters </p>";
    document.getElementById("phoneerror").innerHTML=error;
    //  e.preventDefault();
}
else 
{
    error="<p style='color:green;'>valid</p>";
    document.getElementById("phoneerror").innerHTML=error;
}

if (Password.value.match( /[0-9]/g) && 
 Password.value.match( /[A-Z]/g) && 
 Password.value.match(/[a-z]/g) && 
 Password.value.length >= 10) 
{
    error = "<p style='color:green'>Mot de passe valid.</p>"; 
    document.getElementById("pwderror").innerHTML= error;
    // e.preventDefault();
}
else 
{ 
    error = "<p style='color:red;'>Mot de passe invalid.</p>";
    document.getElementById("pwderror").innerHTML= error;
    // e.preventDefault(); 
}
     
    
if(confirmPassword.value!=Password.value)
{ error = "<p style='color:red;'>Mot de passe non confirmé.</p>";
document.getElementById("cpwderror").innerHTML= error;
    // e.preventDefault();
}
else 
{ error = "<p style='color:green;'>Mot de passe confirmé.</p>";
document.getElementById("cpwderror").innerHTML= error;
}


if (phone.value=="" || Password.value=="" || confirmPassword.value=="" || prenom.value=="" || nom.value=="" || adresse.value=="")

{
    error="<p style='color:red;'>please Fill all the fields</p>";
    document.getElementById("notnull").innerHTML= error;
    // e.preventDefault();
}
else 
{
    error="<p style='color:green;'> done </p>";
    document.getElementById("notnull").innerHTML= error; 
}


});
//part 3
const nameValidation=()=>
{
    
var error="<p style='color:green;'>valid</p>";
const prenom=document.getElementById("prenom");

    var regex = /^[a-zA-Z]{3,}$/;
    if(regex.test(prenom.value))
    {
        error="<p style='color:green;'> Correct </p>";
    } 
    else 
    {
        error="<p style='color:red;'> Incorrect </p>";
    }

   document.getElementById("correctdyna").innerHTML= error;


}


