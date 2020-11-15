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
import {RequirementContext} from "../../App";


function RequirementDetail(this: any) {


    const urlParam:any = useParams();
    const requirementId = urlParam.id

    const requirements = useContext(RequirementContext)
    const requirementDetailInfo = requirements[requirementId-1]

    return (
        <>
                    <div className="requirementDetail">
                        <div className="requirementDetail__timeline">
                            TimeLine
                        </div>
                        <div>
                            <div className="requirementDetail__detail">
                                募集詳細:
                                ID：　{requirementId}
                                タイトル：　{requirementDetailInfo.title}
                                募集者：　{requirementDetailInfo.name}
                                場所：　{requirementDetailInfo.place}
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
