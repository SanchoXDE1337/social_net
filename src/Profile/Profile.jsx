import React from 'react'
import style from './Profile.module.css'

const WallPost = (props) => {
    return (
        <div className={style.post}>
            <img src="https://kwork.ru/pics/t3/85/109231-1.jpg" alt="PostAva"/>
            <div>
                {props.postMessage}
            </div>
            <div className={style.likes}>
                <p>likes: {props.likesCount}</p>
            </div>
        </div>
    )
};

const Profile = (props) => {
    let posts = props.state.profilePage.posts;
    let newPostElement = React.createRef();

    let addPost = () => {
        let textareaValue = newPostElement.current.value;
        props.addPost(textareaValue);
        newPostElement.current.value = '';
    };

    return (
        <div className={style.profile}>
            <div>
                <div className={style.avatar}>
                    <img src="https://kwork.ru/pics/t3/85/109231-1.jpg" alt="AdminLogo"/>
                </div>
                <div className={style.name}>
                    <h1>SanchoXD</h1>
                </div>
            </div>
            <div>
                <h2>My posts</h2>
                <div className={style.addPost}>
                    <textarea name="shitposting" id="dick" cols="50" rows="4"
                              placeholder="ShitPost something, only 100 chars" ref={newPostElement} maxLength="100"></textarea>
                    <button onClick={addPost}>Post!</button>
                </div>
                <div>
                    {posts
                        .map((post, index) =>
                            <WallPost
                                postMessage={posts[index].postMessage}
                                likesCount={posts[index].likesCount}
                                key={index}
                            />)}
                </div>
            </div>
        </div>
    )
};

export default Profile;