var kelvin = document.getElementById('kel').value;
const fixa = 273;

function converterF(){
	let result = (((kelvin - fixa) * 1.8) + 32);
	document.getElementById('fah').value = result;
}
function converterC(){
	let result = kelvin - fixa;
	document.getElementById('cel').value = result;
}