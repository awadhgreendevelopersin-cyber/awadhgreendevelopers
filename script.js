function calc(){
let b=Number(document.getElementById('bill').value||0);
let kw=Math.max(1,Math.round(b/1000));
document.getElementById('result').innerText=
'Recommended System: '+kw+' kW';
}