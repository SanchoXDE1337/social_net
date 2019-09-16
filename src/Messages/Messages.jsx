import React from 'react'
import style from './Messages.module.css'

const Message = (props) => {
    return (
        <div>
            {props.message}
        </div>
    );
};

const Dialog = (props) => {
    return (
        <div className={style.dialog}>
            <div className={style.avatar}>
                <img src={props.avatarSrc} alt="avatar"/>
            </div>
            <div className={style.name}>
                {props.name}
            </div>
            <div>
                <Message message={props.message} className={style.message}/>
            </div>
        </div>
    )
};



const Messages = () => {
    return (
        <div className={style.messagePage}>
            <div className={style.dialogs}>
                <Dialog avatarSrc={'http://pp.userapi.com/LVQJ5Dy3z75hdb_Avp0L0EEMykrIdy_r1mOaIA/tuyWWTGi0rA.jpg?ava=1'}
                        name={'Sasha'}
                        message={'Pochemu'}
                />
                <Dialog avatarSrc={'http://cs319323.vk.me/v319323049/70e1/2gddfIt0mvc.jpg'}
                        name={'Dima'}
                        message={'Rot'}
                />
                <Dialog avatarSrc={'https://kwork.ru/pics/t3/85/109231-1.jpg'}
                        name={'Misha'}
                        message={'In'}
                />
                <Dialog avatarSrc={'https://i.ytimg.com/vi/OpC3QV7VgRQ/hqdefault.jpg'}
                        name={'Serodja'}
                        message={'Govne?'}
                />
            </div>
        </div>
    )
};

export default Messages;