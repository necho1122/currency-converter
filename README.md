#Currency Converter

This project is a robust currency converter application developed using React and TypeScript. It provides the functionality to convert between various types of currencies, including fiat to fiat, fiat to crypto, and crypto to crypto conversions.

##Features

* **Currency Conversion:** Convert between various types of currencies including fiat to fiat, fiat to crypto, and crypto to crypto.

* **Real-time Rates:** The application fetches real-time currency rates from an API to provide the most accurate conversions.

* **User-friendly Interface:** The application provides a simple and intuitive interface for easy currency conversion.

* **Notes:** this aplication is designed to be used with the free version of the API, which has a limit of 300 requests per month. If you want to use it more frequently, you can sign up for a premium plan. I used the free version of the API for this project, due to thad I used a json file with the latest conversion rates. You can use de API with my API_KEY from the link below: 

```http
https://api.currencyapi.com/v3/latest?apikey=cur_live_rhyyKYobLkanUGI6wTIpI9IwPD2o8rLWWbc9vpbO
```

##Technologies Used

* **React:** A JavaScript library for building user interfaces.

* **TypeScript:** A statically typed superset of JavaScript that adds types to the language.

* **Fetch API:** Used for making HTTP requests to fetch real-time currency rates.

##Images

![Currency Converter](https://lh3.googleusercontent.com/pw/AP1GczNh7axHZZh_lRG4939rShUys6R6DvIeQwgM_jnF7bjFaeTTN4G6R9Hhnp2kiHQQu1l79EeWdX5qhS5o6scOE4mEJeMOl5k4nj_xl0_9jcjzM2FEU13RUtcA1xqafmWJqkU9VyxBZ6q4heb66r64UsvcZ0TCcD2L1RRouVxjBW_4MIrlJIrJTMAtikiS5rfXyHZ-0gl9c_hYO3fltYszjP7L9Kbk9VAI9fhyOFXnNZcpP5GTT4JZMjW1f4josGV-T6XH6vmOq4L1McWtQmfElnpqtwTW5y_Aw2-Gd2d3AvEuRjmnKgGs2WMlVRmduobHVHFDMJJhjEfIQtWrra6h3_IC8e_iZcEE_dYhxfNFfI6YX25uSJXyMwfflCRiI9kAaH7q2hzEWZNQADkulaK1CCXutBbO8ZGnN6NcEYbMfMsIKUxpZXSmVU6Uyz8h6Se6GAoD_Ewbi-HeyhBwynNCI_A8d7eJmkmqKEtyM9pLLZRLOUvgJ5IWx_ZN8xsffkyW9p7IF24CgVfQ3qZlvpC1Ktjb90i1CqxQWh07e_P8qXKm6jdGHOvykTcW3bp5fY247wv4h9kDVyGwH0vqV1PZyE-gLQY_UqlViYaM6yVrcbcpvAFGLkLoTPW6WZcaBjo9ZcAA-jEkHEX_UrCVzrpv700gzIId38yPzC_FCiL-vkJ-FWkuP7KrymwBaQflA7i8B8d464bTBXn-gkxOn5ln0HRIGNox8dXMMcrAe9SHxiSYmrI8Ag3FIpB8FTFydhQ8e7vGgEHGQBlkKeNz3xvdhGZvHYxMbDubYKW0D3m_lxrTi_370-7utsq0Z-KEhF1LZVwe6osJwf9lGtjHE7oAINEb7kSWT-V9AhlKX_IhCpGLasmLyyEfpZeDXtOquVdgRCArchC-nTbSTEYyJgbwfxlCsa2xB_1wLxli78XxLpcC3vwa605F6bi_yKSHcR7w0tsvy4LDSCHL7G6qsa8YkDnMZsj6=w492-h615-s-no-gm?authuser=1)

![Currency Converter](https://lh3.googleusercontent.com/pw/AP1GczOkXEZY3tSmhlzeOSm-tL6L3DsL3q0jvJUnrHxd2ZfpRhzUlTdGxVppX2YBNaxcLvBuENBWi4GF_UmEt4AVudZ__HC9LkjIphh9mfmnrHu3MkOu_1o0WLjnKnoHHW2HPV9A6Ys9DE3mM4WiR5Mb84LgvdY-vwgWo4Ynrnmu78XhPX6Itv-5dq4ikKCbBx92mV2-c3xm7ar2amOODuU1lz3JfNPI61g3lDaSoTakwxp5QANQ1CDxjyblu7eGbQWT29KLz6ZRxPrkKZF6LAuY4C4rBXYpnl8Q3WJ96RvOvN_gcn3YzhLolyE0y1wZS5P4Ir2WmLJp_CAjL-LLeEWI3A8jIdPzml4BtBbElYHsSB_HCxHNdag_a2kQLyxohaQ_lNtRz3EKAeZa7Dh2g7JegwjNl6KmnOumCPVraYzp8sVH41MQmIjYwGitJ9sADPH_rCNWagqKtsFzqyaHkua5cCzB3iUGd8WXu3pyj-nQbVQt4_uDH6vYRyyfH8OG2q-_-2gWCQZZcdRPawsZYjLj_UqDijxljqAUXhm2vcnkuMANizB_Ms13ne9BzGPjMsU1OPYWpHIQm7WH9UtYwl0D0DYYjExmistFiLDPaXX11aPvsfU-Ba4un1dIQT13pUkq8fasMBIaertgqWrGnGnq1x05qOb1-dsM-LktZ0WJamggr5gicNvF0-FHzGhIWMqm3-FwJRzPQ0jxxW5C_yiowk-f35XdY1fKSJyoqBY_H6CiaCWOI1DxiqrE1BdMVlO90TljrbMdF0o5862KWhBOj-yVcbZAoULJe8CWOfs68XIjvCgpwf4CM4eFLNaKZW3Q8qZBB1TvhOXmIMT0Du1LhQydEL8kLWRwntcmFChmmOuHW5K5RL4iIq1RsjL6ER1zb_WPmloqCP-ERya7BGHzaOLwFMyqbuJm1H0bw9gJ0GL2jY2b9UATLWgXW9W7XOm6UlM__wlcKLeqGXZcVxxhHPT0HoDh=w492-h615-s-no-gm?authuser=1)

##Installation

To run this project, you need to have Node.js and npm installed on your machine.

1. Clone the repository:
  
  ```bash
git clone https://github.com/necho1122/currency-converter.git
```

2. Navigate into the project directory:

```bash
cd currency-converter
```

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

The application will be available at http://localhost:3000.

##Usage

Select the type of currency you want to convert from and to. Enter the amount you want to convert, and the application will display the converted amount based on the latest conversion rates.

##Contact

If you want to contact me you can reach me at:

* Email: nelsonubac90@gmail.com
* github: https://github.com/necho1122
* twitter: @nelsonubac
* linkedin: https://www.linkedin.com/in/nelson-enrique-ubac-jimenez-6b1996118/
* whatsApp: +55(95)981156815


##Contributing

Contributions are welcome. For major changes, please open an issue first to discuss what you would like to change.

##License
This project is licensed under the MIT License.