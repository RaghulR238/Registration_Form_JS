const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const c_password=document.getElementById("confirm_password");
let count=0;
form.addEventListener("submit",function(e)
{
    
    checkRequired([username,email,password,c_password]);
    checkLength(username);
    checkMail(email);
    checkPassword(password);
    checkCPassword(c_password,password);
    
    if(count==0)
    {
        console.log(count);
        finish();
    }
    else
    {
        console.log(count);
        e.preventDefault();
    }
})
function finish()
{
    form.innerHTML="Success";
}


function checkRequired(input)
{
    input.forEach(inputs=>
        {
            if(inputs.value.trim()==="")
            {
                count++;
                errorInput(inputs,`${getName(inputs)} is required`);
            }
            else
            {
               
                successInput(inputs);
            }
        });
}

function checkLength(username)
{
    if((username.value).length>5&&(username.value).length<15)
    {
        successInput(username);
    }
    else{
        count++;
        errorInput(username,"Length must be between 5 to 15");
    }
}

function checkMail(email)
{
    console.log("cs");
    if((email.value).substring(((email.value).length-10),(email.value).length)==="@kce.ac.in")
    {
        successInput(email);
    }
    else{
        count++;
        errorInput(email,"Enter KCE Mail Id");
    }
}

function checkPassword(password)
{
    if((password.value).length>5)
    {
        let c1=0,c2=0,c3=0,c4=0;
        for(let i=0;i<(password.value).length;i++)
        {
            if((password.value).charAt(i)>='1'&&(password.value).charAt(i)<='9')
            {
                c1++;
            }
            else if((password.value).charAt(i)>='A'&&(password.value).charAt(i)<='Z')
            {
                c2++;
            }
            else if((password.value).charAt(i)>='a'&&(password.value).charAt(i)<='z')
            {
                c3++;
            }
            else
            {
                c4++;
            }
        }
        if(c1>0&&c2>0&&c3>0&&c4>0)
        {
            successInput(password);
        }
        else{
            count++;
            errorInput(password,"Enter a valid password");
        }
    }
    else{
        count++;
        errorInput(password,"Enter a valid password");
    }
}


function checkCPassword(c_password)
{
    if(c_password.value===password.value)
    {
        successInput(c_password);

    }
    else{
        count++;
        errorInput(c_password,"Confirm Password should be same as password");
    }
}
function errorInput(input,message)
{
    const formGroup=input.parentElement;
    formGroup.className="form_content error";
    const p=formGroup.querySelector("p");
    p.innerHTML=message;
}


function successInput(input)
{
    const formGroup=input.parentElement;
    formGroup.className="form_content success";
    const p=formGroup.querySelector("p");
    p.innerHTML="";
}


 function getName(input)
 {
    return input.id;
 }
