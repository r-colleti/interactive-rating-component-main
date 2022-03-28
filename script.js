function dispChange() {
	document.querySelector('.displayForm').style.display = "none";
	document.querySelector('.displayCongrat').style.display = "flex";
};

function setValue(x) {
	rateNumber = x;

	document.querySelector('.yRate').innerHTML = 'You selected ' + rateNumber + ' out of 5';
};