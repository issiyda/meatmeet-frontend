import React, {createContext, useEffect, useState} from 'react';
import {BrowserRouter as Router, Link, Route, useParams} from 'react-router-dom';

// ComponentのImport
import Home from './components/home/Home'

import './App.css';
import TimeLine from "./components/home/timeLine";
import Requirement from "./components/requirement/Requirement";
import RequirementDetail from "./components/requirement-detail/RequirementDetail";

const requirementInfo =
    [
        {
            'name': '石田',
            'title': '新宿で焼肉会',
            'place': '新宿'
        },
        {
            'name': '石田',
            'title': '新宿で焼肉会',
            'place': '新宿'
        },
        {
            'name': '石田',
            'title': '新宿で焼肉会',
            'place': '新宿'
        }
    ]

export const RequirementContext = createContext(requirementInfo)


function App() {
    const AppName = 'MeatMeet？'

    // Hooks
    const [requirement, setRequirement] = useState(requirementInfo)

    const [count, setCount] = useState(0)

    console.log('render start')

    useEffect(() => {
        console.log('render finished')
    },[count])

    return (
        <>
            <div className="App">
                <RequirementContext.Provider value={requirement}>
                <Router>
                    <header className="App-header">
                        <h2>{AppName}</h2>
                        <Link to="/">Home</Link>
                        <Link to="/requirement">募集</Link>
                    </header>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/requirement" component={Requirement}/>
                    <Route exact path="/requirement/detail/:id" component={RequirementDetail}/>

                    <button onClick={():void => setCount(count => count+1)}>+1</button>
                    {count}
                </Router>
                </RequirementContext.Provider>
            </div>
        </>
    );
}

export default App;
