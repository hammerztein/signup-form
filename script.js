const inputFields = document.querySelectorAll('input:not([type="checkbox"');

function addValidateClass(e) {
	const node = e.target;
	node.classList.add('validate');
}

inputFields.forEach((input) => {
	input.addEventListener('blur', addValidateClass);
});
