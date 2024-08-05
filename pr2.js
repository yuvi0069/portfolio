let enter=document.getElementById("f1");
enter.addEventListener("submit",async(event)=>{
event.preventDefault();
let name=document.getElementById("Name").value;
let phone=document.getElementById("Pass").value;
let email=document.getElementById("Email").value;
let message=document.getElementById("Message").value;
const a1=await fetch("/submit-form",{
    method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name:name, email:email, phone:phone,message:message })
    
})
document.getElementById('f1').reset();
if(a1){
alert("Thank you for contacting");
}
else{
    aler("please try later")
}

})