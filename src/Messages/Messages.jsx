import React from 'react'
import style from './Messages.module.css'

const Messages = () => {
    return (
        <div className={style.messagePage}>
            <div className={style.dialogs}>
                <div className={style.dialog}>Sasha</div>
                <div className={style.dialog}>Dima</div>
                <div className={style.dialog}>Misha</div>
                <div className={style.dialog}>Sergey</div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Pochemu</div>
                <div className={style.message}>Rot</div>
                <div className={style.message}>VVVV</div>
                <div className={style.message}>Govne?</div>
            </div>
        </div>
    )
};

export default Messages;