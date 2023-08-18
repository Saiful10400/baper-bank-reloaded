document.getElementById("depositBtn").addEventListener("click", function () {
  let inputDeposiString = document.getElementById("inputDeposit").value;
  let inputDeposit = parseFloat(inputDeposiString);

  // deposit section number done.

  let depositMeterString = document.getElementById("depositMeter").innerText;
  let depositMeter = parseFloat(depositMeterString);

  // summetino

  let newDepositValu = depositMeter + inputDeposit;

  document.getElementById("depositMeter").innerText = newDepositValu;

  //   for balance meter.

  let balanceMeterString = document.getElementById("balanceMeter").innerText;
  let balanceMeter = parseFloat(balanceMeterString);
  let newBalanceValu = balanceMeter + inputDeposit;
  // console valu on element.
  document.getElementById("balanceMeter").innerText = newBalanceValu;
});


// this if for withdraw.
document.getElementById("withBtn").addEventListener("click",function(){
  let inputWithString=document.getElementById("inputWith").value
  let inputWith=parseFloat(inputWithString)

  // balance part.

  let balanceMeterString = document.getElementById("balanceMeter").innerText;
  let balanceMeter = parseFloat(balanceMeterString);
  

if(inputWith<=balanceMeter && inputWith>=0){
    // input field
    let withMeterString=document.getElementById("withMeter").innerText
    let withMeter=parseFloat(withMeterString)
    
    
    // sum
    let newWithValu=withMeter+inputWith
    // console valu on element.
  
    document.getElementById("withMeter").innerText=newWithValu
  
    // thid is the emmition part.
  
    let emmitionAfBal=balanceMeter-inputWith
  
    document.getElementById("balanceMeter").innerText=emmitionAfBal
    document.getElementById("inputWith").value=" "
}
else if(inputWith<0){
  alert("টাকা নিতে আইসা এত ভদ্র সাজার দরকার নাই!!!")
}
else{
  document.getElementById("inputWith").value=" "
  alert("কিরে দেখস না বাপের পকেটে টাকা কম!!!")
}



})
 
