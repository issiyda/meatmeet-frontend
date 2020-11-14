import React, {useContext, useEffect} from "react";
import Modal from '@material-ui/core/Modal';
import makeStyles from "@material-ui/core/styles/makeStyles";


import {HomeContext} from './Home'

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


function TimeLine() {

    const requirementInfo = useContext(HomeContext)
    let info = Object.entries(requirementInfo).map(([key, value]) => ({key, value}))
    console.log(info)
    info.map(info => {
        console.log(info)
    })

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            { console.log(info[0].value.name)}
            <div>募集者</div>
            {info[0].value.name}
            <div>タイトル</div>
            {info[0].value.title}
            <div>詳細</div>
            <div>場所</div>
            {info[0].value.place}
        </div>
    );


    return (
        <div className="timeLine">
            <h3>タイムライン</h3>
            {info.map(info => {
                return (
                <div className="timeLine__requirement" onClick={handleOpen}>
                    <img src="" alt="userLogo"/>
                    <div className="timeLine__name">{info.value.name}</div>
                    <div className="timeLine__content">{info.value.title}</div>
                    <div className="timeLine__area">{info.value.place}</div>
                </div>
                )
            })}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>

            )
            }

                export default TimeLine
