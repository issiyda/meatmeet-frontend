import React, {useEffect, useState, createContext, useContext} from 'react';
import Button from '@material-ui/core/Button';
import EventIcon from '@material-ui/icons/Event';
import TextField from '@material-ui/core/TextField';

import {
  Route,
  Switch,
  useParams,
  useHistory,
  useLocation,
} from 'react-router-dom';
import {requirementState} from '../../interface'

import {Store} from "../../Store";


import '../../sass/Object/project/requirementDetail.scss'

function RequirementDetail(this: any) {


  const urlParam: any = useParams();
  const {state, dispatch} = useContext(Store)
  const requirementInfo: requirementState = state.requirementInfo[urlParam.id - 1]

  useEffect(() => {
    console.log(requirementInfo)
  })

  return (
    <>
      <div className="requirementDetail">
        <h2 className="requirementDetail__timeline">
          募集詳細
        </h2>
        <div className="requirementDetail__main">
          <div className="requirementDetail__detail">
            <div className="requirementDetail__items">
              <div className="requirementDetail__items__label">タイトル：</div>
              <div className="requirementDetail__items__content">{requirementInfo.title}</div>
            </div>
            <div className="requirementDetail__items">
              <div className="requirementDetail__items__label">募集者：</div>
              <div className="requirementDetail__items__content">{requirementInfo.name}</div>
            </div>
            <div className="requirementDetail__items">
              <div className="requirementDetail__items__label">場所；</div>
              <div className="requirementDetail__items__content">{requirementInfo.place}</div>
            </div>
          </div>
          <div className="requirementDetail__talk">
            やりとり
          </div>
        </div>
      </div>
    </>
  );
}

export default RequirementDetail;
