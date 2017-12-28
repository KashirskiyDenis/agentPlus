'use strict';

let script = () => {
	let input = document.getElementById("heightPyramid");
	let buildPyramidButton = document.getElementById("buildPyramid");
	let table = document.getElementsByTagName("table")[0];

	let checkSimple = (a) => {
		for (let i = 2; i < a; i++) {
			if (a % i == 0) {
				return false;
			}
		}
		return true;
	};


	let buildPyramid = (e) => {
		table.innerHTML = "";
		let inString = 1;
		let count = 1;
		let a = Math.pow(input.value, 2);
		let start = input.value;
		let tr = document.createElement("tr");

		for (let i = 1; i <= a; i++) {
			let td = document.createElement("td");
			td.classList.add("border");

			if (count == 1 && start != 1) {
				let tdEmpty = document.createElement("td");
				tdEmpty.setAttribute("colspan", start - 1);
				tr.appendChild(tdEmpty);
			}

			if (checkSimple(i) && i != 1) {
				td.classList.add("simple");
			}

			td.innerHTML = i;
			tr.appendChild(td);

			if (count == inString) {
				count = 0;
				inString += 2;
				start--;
				table.appendChild(tr);
				tr = document.createElement("tr");
			}

			count++;
		}
	};

	buildPyramidButton.addEventListener("click", buildPyramid);
};

window.addEventListener("DOMContentLoaded", script);
