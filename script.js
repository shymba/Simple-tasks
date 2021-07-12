const currencyOne = document.getElementById('one');
const currencyTwo = document.getElementById('two');
const key = 'c4e8cc3b58d1075f10f26418';

function calc() {
	const currValue = 'UAH'
	fetch(`https://v6.exchangerate-api.com/v6/${key}/latest/EUR`)
		.then(res => res.json())
		.then(data => {
			const rate = data.conversion_rates[currValue];

		currencyTwo.innerHTML = (currencyOne.value * rate).toFixed(2) + ' ₴'

		})
};

currencyOne.addEventListener('input', calc);

calc();

// use npm generate-password

// let generator = require('generate-password');

// let password = generator.generate({
// 	length: 5,
// 	numbers: true
// })
// console.log(password);

function isPalindrome(str) {
    let strReverse = str.split('').reverse().join('');
    if (strReverse == str) {
      return true;
    } else {
      return false;
    }
  }

//   test = isPalindrome('tenet');
//   console.log(test);

let btnPass = document.getElementById('generate')
let passDiv = document.getElementById('password')

function pass() {
	let str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	let res ='';
	for(let i=0; i<5; i++) {
		res += str[getRan(0, str.length - 1)]
		passDiv.innerHTML = 'Password: ' + res;

		if(isPalindrome(res) == true){
			passDiv.style.color = 'red'
		} else if(res.match(/[0-9]/g)) {
			passDiv.style.color = 'green'
		} else if(res.typeOf === 'number') {
			passDiv.style.color = 'yellow'
		} else {
			passDiv.style.color = 'blue'
		}
	}
}

function getRan(min, max){
	return Math.floor(Math.random() * max - min + 1) + min;
}

btnPass.addEventListener('click', pass);

setInterval(pass, 3000);


const city = document.getElementById('myCity')

function weather() {
	const location = 'Kyiv';
	const key = 'ab1f82573e4aeaa664a1c2118a4f0b24';
	const lang = 'uk';
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${key}&lang=${lang}`)
		.then(res => res.json())
		.then(data => {

			// console.log(data)

				const celsius = data.main.temp;
				const loc = data.name;
				const wthr = data.weather[0].description;
			console.log(loc + ' ' + celsius + ' ' +wthr)
			city.innerText = (loc + ' ' + celsius + ' ' +wthr)

		})
}
weather()
