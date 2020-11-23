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
import { requirementState } from '../interface'

import {Store} from "../Store";


function RequirementDetail(this: any) {


  useEffect( () => {
    console.log('talkRendered')
  })

  return (
    <>
      <div>
        //投稿者のメッセージ

        //投稿者以外のメッセージ
      </div>
    </>
);
}

export default RequirementDetail;
