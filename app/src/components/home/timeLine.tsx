import React, {useContext, useEffect} from "react";
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router, Route, Link, Switch, BrowserRouter} from "react-router-dom";
import {withRouter} from 'react-router-dom';
import {useHistory} from 'react-router';

import {HomeContext} from './Home'
import {Store} from '../../Store'
import {requirementState} from "../../interface";

import '../../sass/Object/project/timeline.scss'

function TimeLine(this: any) {

  const {state, dispatch} = useContext(Store)
  const requirementInfo = state.requirementInfo

  let info = Object.entries(requirementInfo).map(([key, value]) => ({key, value}))
  console.log(info)
  info.map(info => {
    console.log(info)
  })

  const history = useHistory();

  const handleOnclickDetail = (number: number) => (events: any) => {
    history.push('/requirement/detail/' + number,)
  }

  return (
    <div className="timeLine">
      <h3>タイムライン</h3>
      <Router>
        <div className="timeLine__requirements">
          {info.map((info: any, index: number) => {
              const resetIndex = index + 1
              return (
                <div className="timeLine__requirement">
                  <div>{resetIndex}</div>
                  <div className="timeLine__content">{info.value.title}</div>
                  <div className="timeLine__area">{info.value.place}</div>
                  <Button onClick={handleOnclickDetail(resetIndex)}>{resetIndex}へ</Button>
                </div>
              )
            }
          )}
        </div>
      </Router>
    </div>

  )
}

export default withRouter(TimeLine)
