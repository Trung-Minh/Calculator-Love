const numbers = document.querySelectorAll(".numbers");
const result = document.querySelector(".result span");
const signs = document.querySelectorAll(".sign");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const negative = document.querySelector(".negative");
const percent = document.querySelector(".percent");
const comma = document.querySelector(".comma");

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

for (let i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener("click", (e) => {
		let atr = e.target.getAttribute("value");
		if (isFirstValue === false) {
			getFirstValue(atr);
		}
		if (isSecondValue === false) {
			getSecondValue(atr);
		}
	});
}

function getFirstValue(el) {
	result.innerHTML = "";
	firstValue = firstValue.toString() + el;
	result.innerHTML = (+firstValue.replace(/,/g, "")).toLocaleString("en-US");
}

function getSecondValue(el) {
	if (firstValue != "" && sign != "") {
		secondValue = secondValue.toString() + el;
		result.innerHTML = (+secondValue.replace(/,/g, "")).toLocaleString(
			"en-US"
		);
	}
}

function getSign() {
	for (let i = 0; i < signs.length; i++) {
		signs[i].addEventListener("click", (e) => {
			sign = e.target.getAttribute("value");
			isFirstValue = true;
		});
	}
}

getSign();

equals.addEventListener("click", () => {
	result.innerHTML = "";
	firstValue = +firstValue.toString().replace(/,/g, "");
	secondValue = +secondValue.toString().replace(/,/g, "");

	if (sign === "+") {
		resultValue = firstValue + secondValue;
	} else if (sign === "-") {
		resultValue = firstValue - secondValue;
	} else if (sign === "x") {
		resultValue = firstValue * secondValue;
	} else if (sign === "/") {
		resultValue = firstValue / secondValue;
	}

	if (firstValue == "5211314" || resultValue == "5211314") {
		resultValue = `&#10084;<span class="textLove">I Love You</span>&#10084;`;
		result.innerHTML = `<span class="love-message">${resultValue}</span>`;
		return;
	}

	resultValue = resultValue.toLocaleString("en-US");
	result.innerHTML = resultValue;

	firstValue = resultValue;
	secondValue = "";

	checkResultLength();
});

function checkResultLength() {
	resultValue = JSON.stringify(resultValue);

	if (resultValue.length >= 8) {
		resultValue = JSON.parse(resultValue);
		result.innerHTML = resultValue.toFixed(5);
	}
}

negative.addEventListener("click", () => {
	result.innerHTML = "";
	firstValue = +firstValue.toString().replace(/,/g, "");
	secondValue = +secondValue.toString().replace(/,/g, "");

	if (firstValue != "") {
		resultValue = -firstValue;
		firstValue = resultValue;
	}

	if (firstValue != "" && secondValue != "" && sign != "") {
		resultValue = -resultValue;
	}
	result.innerHTML = resultValue;
});

percent.addEventListener("click", () => {
	result.innerHTML = "";
	firstValue = +firstValue.toString().replace(/,/g, "");
	secondValue = +secondValue.toString().replace(/,/g, "");

	if (firstValue != "") {
		resultValue = firstValue / 100;
		firstValue = resultValue;
	}

	if (firstValue != "" && secondValue != "" && sign != "") {
		resultValue = resultValue / 100;
	}
	result.innerHTML = resultValue;
});

clear.addEventListener("click", () => {
	result.innerHTML = 0;
	firstValue = "";
	isFirstValue = false;
	secondValue = "";
	isSecondValue = false;
	sign = "";
	resultValue = 0;
});
