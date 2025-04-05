import React, { useState } from 'react';
import './App.css';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import InputBox from './components/inputBox';

function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('usd');
  const [toCurrency, setToCurrency] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(fromCurrency);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[toCurrency]);
  };
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 ">
          <h1 className="text-3xl font-bold mb-4">Currency Converter</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-2">
              <InputBox
                label="From"
                amount={amount}
                onAmountChange={(amount) => {
                  setAmount(amount);
                }}
                onCurrencyChange={(currency) => {
                  setFromCurrency(currency);
                }}
                currencyOptions={options}
                selectedCurrency={fromCurrency}
                amountDisabled={false}
                currencyDisabled={false}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-blue-600 border-2 border-white rounded-md px-2 py-1"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                onCurrencyChange={(currency) => {
                  setToCurrency(currency);
                }}
                currencyOptions={options}
                selectedCurrency={toCurrency}
                amountDisabled={true}
                currencyDisabled={false}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg"
            >
              Convert {fromCurrency.toLocaleUpperCase()} to{' '}
              {toCurrency.toLocaleUpperCase()}{' '}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
