import React, {useContext, useEffect} from "react";
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {BrowserRouter as Router, Route, Link, Switch, BrowserRouter} from "react-router-dom";
import {withRouter} from 'react-router-dom';
import { useHistory } from 'react-router';


import {HomeContext} from './Home'
import Requirement from "../requirement/Requirement";
import RequirementDetail from "../requirement-detail/RequirementDetail";



function TimeLine(this: any) {

    const requirementInfo = useContext(HomeContext)
    let info = Object.entries(requirementInfo).map(([key, value]) => ({key, value}))
    console.log(info)
    info.map(info => {
        console.log(info)
    })

    const history = useHistory();

    const handleOnclickDetail = (number: number) => (events: any) =>{
        history.push('/requirement/detail/'+number,)
    }

    return (
        <div className="timeLine">
            <h3>タイムライン</h3>
            <Router>
                {info.map((info,index) => {
                    const resetIndex = index+1
                    return (
                        <div className="timeLine__requirement">
                            <img src="" alt="userLogo"/>
                            <div>{resetIndex}</div>
                            <div className="timeLine__name">イベントNo.{info.value.name}</div>
                            <div className="timeLine__content">{info.value.title}</div>
                            <div className="timeLine__area">{info.value.place}</div>
                            <Button onClick={handleOnclickDetail(resetIndex)}>{resetIndex}へ</Button>
                        </div>
                    )
                })}
            </Router>
        </div>

    )
}

export default withRouter(TimeLine)
