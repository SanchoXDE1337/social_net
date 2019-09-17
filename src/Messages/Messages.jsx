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
            <div className={style.message}>
                <Message message={props.message}/>
            </div>
        </div>
    )
};


const Messages = (props) => {
    return (
        <div className={style.messagePage}>
            <div className={style.dialogs}>

                {props.state.users.map(user => {
                    return <Dialog
                        name={user.name}
                        id={user.id}
                        avatarSrc={props.state.avatars[user.id - 1].src}
                        message={props.state.messages[user.id - 1].message}
                        key={user.id}
                    />
                })}

            </div>
        </div>
    )
};

export default Messages;