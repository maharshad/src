/*import React, { useState } from 'react';

function CandyCounter() {
  const [candyCount, setCandyCount] = useState(10);

  const addCandy = () => {
    setCandyCount(candyCount + 1);
  };

  const giveCandy = () => {
    setCandyCount(candyCount - 1);
  };

  return (
    <div>
      <h1>Candy Counter</h1>
      <p>You have {candyCount} candies.</p>
      <button onClick={addCandy}>Get Candy</button>
      <button onClick={giveCandy}>Give Candy</button>
    </div>
  );
}

export default CandyCounter;


import React, { useState, useEffect } from 'react';

function WeatherApp() {
  const [weather, setWeather] = useState('');

  useEffect(() => {
    
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      
      const response = await fetch('https://weather.com/weather/today/l/33.63,73.08?par=google');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setWeather(data.forecast);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <h1>Weather Forecast</h1>
      <p>Today's weather: {weather}</p>
    </div>
  );
}

export default WeatherApp;


import React, { useContext, createContext, useState } from 'react';


const FamilyContext = createContext();

function App() {
  return (
    <FamilyProvider>
      <div>
        <h1>Family Notice Board</h1>
        <FamilyMember name="Dad" />
        <FamilyMember name="Mom" />
        <FamilyMember name="Kid" />
      </div>
    </FamilyProvider>
  );
}

function FamilyProvider({ children }) {
  const [noticeBoard, setNoticeBoard] = useState([]);

  return (
    <FamilyContext.Provider value={{ noticeBoard, setNoticeBoard }}>
      {children}
    </FamilyContext.Provider>
  );
}

function FamilyMember({ name }) {
  const { noticeBoard, setNoticeBoard } = useContext(FamilyContext);

  const addMessage = (message) => {
    setNoticeBoard([...noticeBoard, message]);
  };

  return (
    <div>
      <h2>{name}</h2>
      <input
        type="text"
        placeholder="Write a message..."
        onChange={(e) => addMessage(`${name}: ${e.target.value}`)}
      />
      <ul>
        {noticeBoard.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;


import React, { useReducer } from 'react';


const countReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function Counter() {

  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

export default Counter;


import React, { useRef } from 'react';

function TextInput() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default TextInput;



import React, { useState, useMemo } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // Calculate the square of count using useMemo
  const squaredCount = useMemo(() => {
    return count ** 2;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Squared Count: {squaredCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default App;
*/

import React, { useState, useCallback } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // Define a function using useCallback
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment Count</button>
    </div>
  );
}

export default App;
