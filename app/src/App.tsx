import React, {createContext, useEffect, useReducer, useState} from 'react';
import {BrowserRouter as Router, Link, Route, useParams} from 'react-router-dom';

// ComponentのImport
import Home from './components/home/Home'

import './sass/Object/project/app.scss';
import TimeLine from "./components/home/timeLine";
import Requirement from "./components/requirement/Requirement";
import RequirementDetail from "./components/requirement-detail/RequirementDetail";
import { StoreProvider } from './Store'
import { Store } from './Store'

// CSS
import './sass/Foundation/foundations.scss'

function App() {
    const AppName = 'Shall We Meat？'

    // Hooks


    console.log('render start')

    useEffect(() => {
        console.log('render finished')
    },[])

    return (
        <StoreProvider>
            <div className="App">
                {/*<RequirementContext.Provider value={requirement}>*/}
                <Router>
                    <header className="App-header">
                        <h2>{AppName}</h2>
                        <Link to="/">Home</Link>
                        <Link to="/requirement">募集</Link>
                    </header>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/requirement" component={Requirement}/>
                    <Route exact path="/requirement/detail/:id" component={RequirementDetail}/>
                </Router>
                {/*</RequirementContext.Provider>*/}
            </div>
        </StoreProvider>
    );
}

export default App;
