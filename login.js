document.getElementById("loginBtn").addEventListener("click",function(){
    let userEmail=document.getElementById("userEmail").value
    let userPassword=document.getElementById("userPassword").value
    
    if(userEmail == "test@gmail.com" && userPassword == "admin"){
        window.location.href="https://saiful10400.github.io/bank-part-of-baper-bank./"
    }
    else{
        alert("Invalid email or password.")
    }
})