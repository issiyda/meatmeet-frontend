import React, {useEffect, useState} from 'react';

// ComponentのImport
import Home from './components/home/Home'

import './App.css';
import TimeLine from "./components/home/timeLine";

function App() {
    const AppName = 'MeatMeet？'

    // Hooks
    const [count, setCount] = useState(1)

    useEffect(() => {
        console.log('hello hooks')
    },[count])

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h2>{AppName}</h2>
                    <button onClick={() => setCount(count + 1)}>increment</button>
                    <p>{count}</p>
                </header>
                <Home></Home>
                <TimeLine/>
            </div>
        </>
    );
}

export default App;
