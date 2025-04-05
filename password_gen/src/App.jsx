import React, { useCallback, useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%&*';
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  const copyPassword = () => {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        alert('Password copied to clipboard');
      })
      .catch((err) => {
        console.error('Error copying password: ', err);
        alert('Failed to copy password');
      })
      passwordRef.current?.select();
  };

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-600 text-orange-800">
      <h1 className="text-white text-center font-bold my-3">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
        <input
          type="text"
          value={password}
          placeholder="Password"
          className="bg-white outline-none w-full py-2 px-3"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPassword}
          className="bg-blue-600 text-white px-3 py-2"
        >
          copy
        </button>
      </div>
      <div className="flex text-white text-sm gap-x-2 mb-3">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="numberAllowed"
            defaultChecked={numberAllowed}
            onChange={(e) => setNumberAllowed(e.target.checked)}
          />
          <label htmlFor="numberAllowed">Include Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="charAllowed"
            defaultChecked={charAllowed}
            onChange={(e) => setCharAllowed(e.target.checked)}
          />
          <label htmlFor="charAllowed">Include Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
