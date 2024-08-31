
Currency Converter
A simple currency converter web application built using HTML, CSS, and JavaScript. This application allows users to convert amounts between different currencies using real-time exchange rates fetched from the ExchangeRate-API.

Features
Convert amounts between various currencies.
Swap between selected currencies.
Real-time exchange rates fetched from ExchangeRate-API.
User-friendly interface with error handling for invalid inputs.
Prerequisites
To run this project, you need to have:

A valid API key from ExchangeRate-API.
Basic understanding of HTML, CSS, and JavaScript.
Getting Started
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/currency-converter.git
cd currency-converter
Install Dependencies:

No additional dependencies are required. Simply ensure that your currencyCodes.js file is correctly set up.

Setup API Key:

Open the currencyCodes.js file and add your API key:

javascript
Copy code
export const api = `https://v6.exchangerate-api.com/v6/87e5741f31d1f449a19b2261/latest/${fromCurrency.value}`;
Add Currency Codes:

The currency_list in currencyCodes.js should contain the currency codes and their respective country names. Example:

javascript
Copy code
export const currency_list = [
    ['USD', 'United States Dollar'],
    ['INR', 'Indian Rupee'],
    // Add more currency codes and country names as needed
];
Run the Application:

Simply open the index.html file in your browser to start using the currency converter.

Usage
Enter the amount you want to convert in the input field.
Select the currencies from the dropdown menus.
Click on the "Convert" button to see the converted amount.
Use the "Switch Currency" button to swap the selected currencies.
Error Handling
If the user inputs a value less than 1 or a non-numeric value, the application will show an error message in red.
If the API call fails, the error message will be displayed in the result area.
Contributing
Contributions are welcome! Please feel free to submit a Pull Request with improvements or bug fixes.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
ExchangeRate-API for providing the currency conversion data.
