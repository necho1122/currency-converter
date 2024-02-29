import "./App.css";
import { useEffect, useState } from "react";
import dataFetch from "./data.json";
import exchangeIcon from "../src/assets/exchange-svgrepo-com.png";

function App() {
	const [currencyOptions, setCurrencyOptions] = useState<string[]>([]);
	const [fromCurrency, setFromCurrency] = useState<string>("");
	const [toCurrency, setToCurrency] = useState<string>("");
	const [fromValue, setFromValue] = useState<string>("0");
	const [toValue, setToValue] = useState<string>("0");

	useEffect(() => {
		const currencyCodes = Object.keys(dataFetch.data).map(
			(key) => dataFetch.data[key as keyof typeof dataFetch.data].code,
		);
		setCurrencyOptions(currencyCodes);
		if (currencyCodes.length > 0) {
			setFromCurrency(currencyCodes[0]);
			setToCurrency(
				currencyCodes.length > 1 ? currencyCodes[1] : currencyCodes[0],
			);
		}
	}, []);

	const handleFromCurrencyChange = (
		e: React.ChangeEvent<HTMLSelectElement>,
	) => {
		const newFromCurrency = e.target.value;
		setFromCurrency(newFromCurrency);
		if (toCurrency && newFromCurrency) {
			const fromRate =
				dataFetch.data[newFromCurrency as keyof typeof dataFetch.data]?.value;
			const toRate =
				dataFetch.data[toCurrency as keyof typeof dataFetch.data]?.value;
			if (fromRate && toRate) {
				setFromValue((parseFloat(toValue) * (toRate / fromRate)).toFixed(2));
			}
		}
	};

	const handleToCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const newToCurrency = e.target.value;
		setToCurrency(newToCurrency);
		if (fromCurrency && newToCurrency) {
			const fromRate =
				dataFetch.data[fromCurrency as keyof typeof dataFetch.data]?.value;
			const toRate =
				dataFetch.data[newToCurrency as keyof typeof dataFetch.data]?.value;
			if (fromRate && toRate) {
				setToValue((parseFloat(fromValue) * (fromRate / toRate)).toFixed(2));
			}
		}
	};

	const handleFromValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setFromValue(value);
		if (fromCurrency && toCurrency) {
			const fromRate =
				dataFetch.data[fromCurrency as keyof typeof dataFetch.data]?.value;
			const toRate =
				dataFetch.data[toCurrency as keyof typeof dataFetch.data]?.value;
			if (fromRate && toRate) {
				setToValue((parseFloat(value) * (toRate / fromRate)).toFixed(2));
			}
		}
	};

	const handleToValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setToValue(value);
		if (fromCurrency && toCurrency) {
			const fromRate =
				dataFetch.data[fromCurrency as keyof typeof dataFetch.data]?.value;
			const toRate =
				dataFetch.data[toCurrency as keyof typeof dataFetch.data]?.value;
			if (fromRate && toRate) {
				setFromValue((parseFloat(value) * (fromRate / toRate)).toFixed(2));
			}
		}
	};

	return (
		<>
			<div className="converter-container">
				<h2>Currency converter</h2>
				<span>From: </span>
				<select onChange={handleFromCurrencyChange} value={fromCurrency}>
					{currencyOptions.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
				<div className="currency">
					<input
						type="number"
						value={fromValue}
						onChange={handleFromValueChange}
					/>
				</div>
				<div className="conversion-icon">
					<img src={exchangeIcon} alt="exchange icon" />
				</div>
				<span>To: </span>
				<select onChange={handleToCurrencyChange} value={toCurrency}>
					{currencyOptions.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
				<div className="currency">
					<input type="number" value={toValue} onChange={handleToValueChange} />
				</div>
			</div>
		</>
	);
}

export default App;
