function calculateSolar(){

let bill = Number(document.getElementById("bill").value);

if(bill<=0){

alert("Please enter a valid bill.");

return;

}

let kw = Math.ceil(bill/1200);

let cost = kw*65000;

let subsidy = 0;

if(kw<=2){

subsidy = kw*30000;

}

else if(kw==3){

subsidy = 78000;

}

else{

subsidy = 78000;

}

let saving = Math.round(bill*0.9);

document.getElementById("kw").innerHTML = kw+" kW";

document.getElementById("cost").innerHTML = cost.toLocaleString();

document.getElementById("subsidy").innerHTML = subsidy.toLocaleString();

document.getElementById("saving").innerHTML = saving.toLocaleString();

}
