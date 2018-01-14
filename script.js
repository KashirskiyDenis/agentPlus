'use strict';

let script = () => {
	let input = document.getElementById("heightPyramid");
	let buildPyramidButton = document.getElementById("buildPyramid");
	let table = document.getElementsByTagName("table")[0];

	let checkSimple = (a) => {
		if (a == 1)
			return false;
			
		if (a == 2) 
			return true;
		
		if (a % 2 == 0)
			return false;
		
		if (a != 5 && a % 5 == 0)
			return false;
		
		let n = Math.ceil(Math.sqrt(a));

		for (let i = 3; i <= n; i+=2) {
			if (a % i == 0)
				return false;
		}

		return true;
	};


	let buildPyramid = (e) => {
		let inString = 1;
		let count = 1;
		let a = Math.pow(input.value, 2);
		let start = input.value;
		let trHTMLAll = [];
		let trHTMLOne = "<tr>";

		table.innerHTML = "";
		
		for (let i = 1; i <= a; i++) {
			let tdHTML = "<td class=\"border";

			if (count == 1 && start != 1) {
				let tdEmptyHTML = "<td colspan=\"" + (start - 1) + "\"></td>";
				trHTMLOne += tdEmptyHTML;
			}

			if (checkSimple(i)) {
				tdHTML += " simple\">";
			} else {
				tdHTML += "\">";
			}
		
			tdHTML += i + "</td>";
			trHTMLOne += tdHTML;

			if (count == inString) {
				count = 0;
				inString += 2;
				start--;
				
				trHTMLOne += "</tr>";
				trHTMLAll.push(trHTMLOne);
				trHTMLOne = "<tr>";
			}

			count++;
		}
		
		let html = trHTMLAll.join('');
		table.innerHTML = html;
	};

	buildPyramidButton.addEventListener("click", buildPyramid);
};

window.addEventListener("DOMContentLoaded", script);
