import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('blue');

  // function changeColor(color) {
  //   setColor(color);
  // }
  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-blue-600"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap items-center justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor('blue')}
            className="px-4 py-2 bg-blue-600 text-white rounded-3xl"
          >
            blue
          </button>
          <button
            onClick={() => setColor('red')}
            className="px-4 py-2 bg-red-600 text-white rounded-3xl"
          >
            red
          </button>
          <button
            onClick={() => setColor('green')}
            className="px-4 py-2 bg-green-600 text-white rounded-3xl"
          >
            green
          </button>
          <button
            onClick={() => setColor('yellow')}
            className="px-4 py-2 bg-yellow-400 text-white rounded-3xl"
          >
            yellow
          </button>
          <button
            onClick={() => setColor('purple')}
            className="px-4 py-2 bg-purple-600 text-white rounded-3xl"
          >
            purple
          </button>
          <button
            onClick={() => setColor('black')}
            className="px-4 py-2 bg-black text-white rounded-3xl"
          >
            black
          </button>
          <button
            onClick={() => setColor('orange')}
            className="px-4 py-2 bg-orange-500 text-black rounded-3xl"
          >
            orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
