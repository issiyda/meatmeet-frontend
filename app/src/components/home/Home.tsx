import React, {useEffect, useState, createContext} from 'react';
import Button from '@material-ui/core/Button';
import EventIcon from '@material-ui/icons/Event';
import {BrowserRouter as Router, Link} from "react-router-dom";

import TimeLine from './timeLine'

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

export const HomeContext = createContext(requirementInfo)

function Home() {

    const [requirement, setRequirement] = useState(requirementInfo)

    return (
        <HomeContext.Provider value={{...requirement, ...requirementInfo}}>
            <div className="home">
                <img src="" alt="homeLogo"/>
                <Button
                    to="/requirement"
                    component={Link}
                    variant="contained"
                    color="secondary"
                    startIcon={<EventIcon/>}
                    className="requirement">募集する
                </Button>
                <TimeLine/>
            </div>
        </HomeContext.Provider>
    );
}

export default Home;
