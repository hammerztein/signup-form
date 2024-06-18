const submitBtn = document.querySelector('form button[type="submit"]');
const inputFields = document.querySelectorAll('input:not([type="checkbox"');

// Function to add validate class
function addValidateClass(e) {
	const node = e.target;
	node.classList.add('validate');
}

// Input field event listener
inputFields.forEach((input) => {
	input.addEventListener('blur', addValidateClass);
});

// Button event listener
submitBtn.addEventListener('click', () => {
	inputFields.forEach((input) => input.classList.add('validate'));
});
