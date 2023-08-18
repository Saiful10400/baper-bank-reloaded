document.getElementById("loginBtn").addEventListener("click",function(){
    let userEmail=document.getElementById("userEmail").value
    let userPassword=document.getElementById("userPassword").value
    
    if(userEmail == "test@gmail.com" && userPassword == "admin"){
        window.location.href="..baper-bank-reloaded/html/index.html"
    }
    else{
        alert("Invalid email or password.")
    }
})