const dropList = document.querySelectorAll("form select"), 
  fromCurrency = document.querySelector(".from select"), 
  toCurrency = document.querySelector(".to select"), 
  getButton = document.querySelector("form button"),
  exchangeIcon = document.querySelector("form .icon"),
  amountInput = document.querySelector("form input"),
  exchangeRateTxt = document.querySelector("form .exchange-rate");

// Ensure country_list is defined properly
const country_list = {
  INR: 'in',
  USD: 'us',
  // Add other currencies as needed
};

// Populate select options
dropList.forEach((select, index) => {
  for (let currency_code in country_list) {
    let selected = (index === 0 && currency_code === "INR") || (index !== 0 && currency_code === "USD") ? "selected" : "";
    let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
    select.insertAdjacentHTML("beforeend", optionTag);
  }
  select.addEventListener("change", (e) => loadFlag(e.target));
});

// Load flag image
function loadFlag(element) {
  let imgTag = element.parentElement.querySelector("img");
  if (imgTag) {
    imgTag.src = `https://flagcdn.com/48x36/${country_list[element.value].toLowerCase()}.png`;
  }
}

// Exchange rate button click
getButton.addEventListener("click", (e) => {
  e.preventDefault();
  getExchangeRate();
});

// Exchange currencies
exchangeIcon.addEventListener("click", () => {
  let tempCode = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = tempCode;
  loadFlag(fromCurrency);
  loadFlag(toCurrency);
  getExchangeRate();
});

// Fetch exchange rate
function getExchangeRate() {
  let amountVal = amountInput.value || 1;
  amountInput.value = amountVal; // Set default if empty
  exchangeRateTxt.innerText = "Getting exchange rate";

  let url = `https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/${fromCurrency.value}`;

  fetch(url)
    .then(response => response.json())
    .then(result => {
      let exchangeRate = result.conversion_rates[toCurrency.value];
      let totalExRate = (amountVal * exchangeRate).toFixed(2);
      exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExRate} ${toCurrency.value}`;
    })
    .catch(error => {
      console.error("Error fetching exchange rate:", error);
      exchangeRateTxt.innerText = "Oops, something went wrong.";
    });
}

// Initial load
window.addEventListener("load", () => {
  loadFlag(fromCurrency);
  loadFlag(toCurrency);
  getExchangeRate();
});
