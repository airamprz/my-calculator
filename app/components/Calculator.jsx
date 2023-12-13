'use client';
import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="max-w-md mx-auto my-16 p-4 bg-gray-800 rounded-md shadow-md">
      <div className="mb-4">
        <input
          className="w-full p-2 text-right text-white bg-gray-700 rounded-md"
          type="text"
          value={input}
          readOnly
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[7, 8, 9, '/'].map((value) => (
          <button
            key={value}
            onClick={() => handleButtonClick(value.toString())}
            className="btn"
          >
            {value}
          </button>
        ))}
        {[4, 5, 6, '*'].map((value) => (
          <button
            key={value}
            onClick={() => handleButtonClick(value.toString())}
            className="btn"
          >
            {value}
          </button>
        ))}
        {[1, 2, 3, '-'].map((value) => (
          <button
            key={value}
            onClick={() => handleButtonClick(value.toString())}
            className="btn"
          >
            {value}
          </button>
        ))}
        {['0', '.', '=', '+'].map((value) => (
          <button
            key={value}
            onClick={
              value === '='
                ? handleCalculate
                : () => handleButtonClick(value)
            }
            className={`btn ${value === '=' ? 'col-span-2' : ''}`}
          >
            {value}
          </button>
        ))}
        <button onClick={handleClear} className="btn">
          C
        </button>
      </div>
      <div className="mt-4">
        <p className="text-white">Resultado: {result}</p>
      </div>
    </div>
  );
};

export default Calculator;
