//your JS code here. If required.
let selectedItem = document.getElementById("colorSelect");

let btn = document.querySelector("input[type='button']");

btn.addEventListener('click', removeItem)

function removeItem() {
	let selectedOption = selectedItem.selectedOptions[0];
	selectedItem.removeChild(selectedOption);
}
