const emaleValed = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const valed = document.getElementById('valed');
const btn = document.getElementById('btn');
const text = document.getElementById('text');
const sub = document.querySelector('.sub');
const submet = document.querySelector('.submet');

/*function emailValedition() {
	if (valed.value.match(emaleValed)) {
		text.textContent = 'good emil';
		return true;
	} else {
		text.textContent = 'emil not ved';
		return false;
	}
}*/

btn.addEventListener('click', function() {
	if (valed.value.match(emaleValed)) {
		text.textContent = '';
		//text.textContent = 'a valid email';
		//text.style.color = 'green';
		submet.style.background = 'green';
		sub.style.border = '2px solid green';
		return true;
	} else {
		text.textContent = 'pleas provide a valid email';
		sub.style.border = '2px solid red';
		submet.style.background = 'red';
		return false;
	}
});
