import React, { useState } from 'react'
import InputBox from './components/Input.jsx'
import useCurrencyInfo from './hooks/useCurrencyInfo.js';

function useCurrencyApp() {
    const BackgroundImage = `https://images.pexels.com/photos/2091399/pexels-photo-2091399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`;
    const[from,setFrom] = useState("usd");
    const[to,setTo] = useState("inr");
    const[amount,setAmout] = useState(0);
    const[convertedamout,setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from)

    const options = Object.keys(currencyInfo);

    const swap = ()=>{
      setFrom(to)
      setTo(from)
      setAmout(convertedamout)
      setConvertedAmount(amount)
    }

    const convert = ()=>{
      setConvertedAmount(amount * currencyInfo[to]);
    }

  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('${BackgroundImage}')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convert();
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount= {amount}
                              currencyOption = {options}
                              onCurrencyChange={(currency)=>
                                setFrom(currency)}
                              selectCurrency={from}
                              onAmountChange={(amount)=>setAmout(amount)}
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-slate-400 rounded-md bg-blue-600 active:bg-blue-800
                               text-white px-2 py-0.5"
                              onClick={swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertedamout}
                              currencyOption={options}
                              onCurrencyChange={(currency)=>
                                setTo(currency)}
                              selectCurrency={to}
                              amountDisable
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg active:bg-blue-800">
                          Convert {from.toUpperCase()} to {to.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  )};


export default useCurrencyApp