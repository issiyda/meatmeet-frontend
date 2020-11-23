import React, { useState, useContext } from "react";
import Button from '@material-ui/core/Button';
import EventIcon from '@material-ui/icons/Event';
import TextField from '@material-ui/core/TextField';
import {Controller, useForm} from "react-hook-form";

import * as validation from "../../validations/validation"

import TimeLine from "../home/timeLine";
import {Store, StoreProvider} from '../../Store'
import {shopName} from "../../validations/validation";


import { HomeContext } from "../home/Home";
import {addRequirement} from "../../actions/requirement";
import {reducer} from "../../reducer";
import { requirementState } from '../../interface'



function Requirement() {
  const {register, handleSubmit, errors, formState, control} = useForm<requirementState>({
    defaultValues: {
      startTime: new Date(),
      endTime: new Date(),
    },
    mode: 'onChange',
    reValidateMode: 'onBlur'
  });


  const {isDirty, isValid} = formState

  const { state, dispatch} = useContext(Store)


  const formSubmit = (data: requirementState) => {
    //入力値を取得してタイムラインに追加する
    console.log(data)
    dispatch({
      type:'ADD_REQUIREMENT',
      payload: data
    })
    console.log(1)

    // DBと連携したときはAPIに投げる処理
  }


  return (
    <div className="requirement">

      <form className="requirement__form" onSubmit={handleSubmit(formSubmit)}>
        <TextField type="text" id="title" label="募集タイトル" name="title"
                   inputRef={register({required: true})}/>
        <TextField type="text" id="name" label="募集者" name="name"
                   inputRef={register(validation.name)}/>
        <TextField type="text" id="shopName" label="店名" name="shopName"
                   inputRef={register(validation.shopName)}/>
        <TextField type="datetime-local" id="startTime" label="開始時刻" name="startTime" inputRef={register({required: true})}/>
        <TextField type="datetime-local" id="endTime" label="終了時刻" name="endTime" inputRef={register({required: true})}/>
        <TextField id="place" label="開催場所" name="place" inputRef={register({required: true})}/>
        <TextField id="content" className="詳細" name="content" label="詳細" inputRef={register}/>

        <input type="submit"
               value="募集する"
               disabled={!(isDirty && isValid)}
        />
        {errors.shopName && (
          errors.shopName.message
        )}
      </form>
      <TimeLine/>
    </div>
  );
}

export default Requirement;
