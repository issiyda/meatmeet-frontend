import React, {useEffect, useState, createContext} from 'react';
import Button from '@material-ui/core/Button';
import EventIcon from '@material-ui/icons/Event';
import TextField from '@material-ui/core/TextField';

import TimeLine from "../home/timeLine";


function Requirement() {


    return (
            <div className="requirement">

                <form className="requirement__form" action="">
                <TextField id="shopName" label="店名"/>
                <TextField id="startTime" label="開始時刻"/>
                <TextField id="endTime" label="終了時刻"/>
                <TextField id="place" label="開催場所"/>
                <TextField id="place"　className="詳細" label="詳細"/>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<EventIcon/>}
                    className="requirement">肉会を開く</Button>
                </form>
                <TimeLine/>
            </div>
    );
}

export default Requirement;
