
# Currency Converter

A simple currency converter web application built using HTML, CSS, and JavaScript. This application allows users to convert amounts between different currencies using real-time exchange rates fetched from the ExchangeRate-API.

## Features

- Convert amounts between various currencies.
- Swap between selected currencies.
- Real-time exchange rates fetched from ExchangeRate-API.
- User-friendly interface with error handling for invalid inputs.

## Prerequisites

To run this project, you need to have:

- A valid API key from [ExchangeRate-API](https://www.exchangerate-api.com/).
- Basic understanding of HTML, CSS, and JavaScript.

## Getting Started

1. **Clone the repository:**

    ```bash
    git clone https://github.com/SulagnaMahato/currency-converter.git
    cd currency-converter
    ```

2. **Install Dependencies:**

    No additional dependencies are required. Simply ensure that your `currencyCodes.js` file is correctly set up.

3. **Setup API Key:**

    Open the `currencyCodes.js` file and add your API key:

    ```javascript
    export const api = 'YOUR_API_KEY_HERE';
    ```

4. **Add Currency Codes:**

    The `currency_list` in `currencyCodes.js` should contain the currency codes and their respective country names. Example:

    ```javascript
    export const currency_list = [
        ['USD', 'United States Dollar'],
        ['INR', 'Indian Rupee'],
        // Add more currency codes and country names as needed
    ];
    ```

5. **Run the Application:**

    Simply open the `index.html` file in your browser to start using the currency converter.

## Usage

1. Enter the amount you want to convert in the input field.
2. Select the currencies from the dropdown menus.
3. Click on the "Convert" button to see the converted amount.
4. Use the "Switch Currency" button to swap the selected currencies.

## Error Handling

- If the user inputs a value less than 1 or a non-numeric value, the application will show an error message in red.
- If the API call fails, the error message will be displayed in the result area.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request with improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- ExchangeRate-API for providing the currency conversion data.

---

Replace the placeholders such as `YOUR_API_KEY_HERE` and the repository URL with your actual values, and this README should be good to go!
