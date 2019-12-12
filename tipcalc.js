// calculate tip
  function calculateTip()  {
    var billAmount = document.getElementById("billAmount").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numberOfPeople = document.getElementById("numberOfPeople").value;
  }
//validate input
  if  (billAmount === "" || serviceQual == 0)  {
    alert("please enter values");
    return;
  }

//check to see if this input is empty or less than or equal to 1
  if (numberOfPeople === "" || numberOfPeople <= 1) {
    numberOfPeople = 1;
    document.getElementById("each").style.display = "none";
  }
  else {
    document.getElementById("each").style.display = "block";
  }

    var totalTip = (billAmount * serviceQual) / numberOfPeople;
//round to two decimal places
 totalTip = Math.round(totalAmount * 100) / 100;
//next line allows us to always have 2 didgets after decimal point
totalTip = totalTip.toFixed(2);
//display the tip
document.getElementById("totalTip").style.display = "block";
 document.getElementById("tip").innerHTML = totalTip;
//hide the tip amount on load
  document.getElementById("totalTip").style.display = "none";
  document.getElementById("each").style.display = "none";
//click to call funtion
document.getElementById("calc").onclick = function() {
  calculateTip();

};
document.getElementById("totalTip").style.display = "none";
