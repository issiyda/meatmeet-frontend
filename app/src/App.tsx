import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

// ComponentのImport
import Home from './components/home/Home'

import './App.css';
import TimeLine from "./components/home/timeLine";
import Requirement from "./components/requirement/Requirement";

function App() {
    const AppName = 'MeatMeet？'

    // Hooks
    const [count, setCount] = useState(1)

    useEffect(() => {
        console.log('hello hooks')
    }, [count])

    return (
        <>
            <div className="App">
                <Router>
                    <header className="App-header">
                        <h2>{AppName}</h2>
                        <Link to="/" >Home</Link>
                        <Link to="/requirement" >募集</Link>
                    </header>
                    <Route exact path="/" component={Home}/>
                      <Route exact path="/requirement" component={Requirement}/>
                </Router>
            </div>
        </>
    );
}

export default App;
