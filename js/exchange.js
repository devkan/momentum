/*
한국은 아래 링크 한국수출입은행에서 api 신청하면 됨(무료) 
https://www.koreaexim.go.kr/ir/HPHKIR020M01?apino=2&viewtype=C&searchselect=&searchword=
히지만 현재 return 값이 null임, 그래서 openexchangerates로 교체함


https://openexchangerates.org/signup/free 에서 무료 버전 신청하면 됨. (1,000 requests/month까지)

*/


const input_currency = document.querySelector('#input_currency'); // krw, usd, eur, gbp, cny, jpy, aud
const input_amount = document.querySelector('#input_amount');
const output_currency = document.querySelector('#output_currency');
const output_amount = document.querySelector('#output_amount');
const exchange_rate = localStorage.getItem('exchange_rate'); // 환율 정보 저장

const apiKey = 'xxxxxxxxx';
const apiUrl = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;
let rates = '';

function getTodayDate() {
	const today = new Date();
	const year = today.getFullYear();
	const month = String(today.getMonth() + 1).padStart(2, '0');
	const day = String(today.getDate()).padStart(2, '0');
	return `${year}${month}${day}`;
}

// 숫자에 천 단위로 콤마를 추가하는 함수
function numberWithCommas(x) {
	if (isNaN(x)) return ''; // 입력이 숫자가 아닌 경우 빈 문자열 반환

	const parts = x.toString().split('.');
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ','); // 천 단위마다 콤마 추가
	if (parts[1]) {
		parts[1] = parts[1].substring(0, 2); // 소수점 둘째 자리까지만 유지
	}

	return parts.join('.'); // 콤마가 추가된 문자열 반환
}

// 화폐 변환 함수
function convertCurrency(inputAmount, inputCurrency, outputCurrency) {
	const rateToUSD = inputCurrency === 'USD' ? 1 : rates[inputCurrency];
	const rateFromUSDToOutput = outputCurrency === 'USD' ? 1 : rates[outputCurrency];
	const amountInUSD = inputAmount / rateToUSD;
	return amountInUSD * rateFromUSDToOutput;
}


function saveRates() {
	if (exchange_rate === null) {
		fetchExchangeRates();
	} else {
		const parsedRates = JSON.parse(exchange_rate);

		if (parsedRates.date !== getTodayDate()) {
			fetchExchangeRates();
			console.log('exchange rates updated');
		} else {
			rates = parsedRates.rates;
		}
	}	
}


function handleInputAmount(event) {
	saveRates()

	const inputAmountNoComma = parseFloat(input_amount.value.replace(/,/g, '')); // 콤마 제거

	if (!isNaN(inputAmountNoComma)) {
		const convertedAmount = convertCurrency(
			inputAmountNoComma,
			input_currency.value.toUpperCase(),
			output_currency.value.toUpperCase()
		);
		output_amount.value = numberWithCommas(convertedAmount.toFixed(2)); // 소수점 둘째 자리까지 출력
	} else {
		output_amount.value = '';
	}
}


function handleOutputAmount(event) {
	saveRates()

	const inputAmountNoComma = parseFloat(output_amount.value.replace(/,/g, '')); // 콤마 제거

	if (!isNaN(inputAmountNoComma)) {
		const convertedAmount = convertCurrency(
			inputAmountNoComma,
			output_currency.value.toUpperCase(),
			input_currency.value.toUpperCase()
		);
		input_amount.value = numberWithCommas(convertedAmount.toFixed(2)); // 소수점 둘째 자리까지 출력
	} else {
		input_amount.value = '';
	}
}


function fetchExchangeRates() {
	return new Promise((resolve, reject) => {
		fetch(apiUrl)
			.then((response) => response.json())
			.then((data) => {
				rates = data.rates;

				const ratesObj = {
					date: getTodayDate(),
					rates: data.rates,
				};

				localStorage.setItem('exchange_rate', JSON.stringify(ratesObj));
				resolve();
			})
			.catch((error) => {
				console.error('Error fetching exchange rates:', error);
				reject(error);
			});
	});
}

input_amount.addEventListener('input', handleInputAmount);
output_amount.addEventListener('input', handleOutputAmount);

input_currency.addEventListener('change', handleOutputAmount);
output_currency.addEventListener('change', handleInputAmount);


// input_amount와 output_amount에 콤마 추가
document.querySelectorAll('#input_amount, #output_amount').forEach((item) => {
	item.addEventListener('input', function (e) {
		const value = this.value.replace(/,/g, '');
		this.value = numberWithCommas(value);
	});
});
// 함수 호출
