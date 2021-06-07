import { Avatar } from '@material-ui/core';
import { AccountCircleOutlined, ChatBubbleOutline, ExpandMoreOutlined, NearMe, ThumbUp } from '@material-ui/icons';
import React, { useState } from 'react';
import './Post.css';
import {
    FacebookShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
  } from "react-share";
  import {
    FacebookIcon,
    LinkedinIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon
  } from "react-share"

const Post = ({profilePic, image, username, timestamp, massage}) => {
    const [openShare, setOpenShare] = useState(false)

    const share = ()=>{
        setOpenShare(!openShare)
    }
    return (
        <div className={`post ${openShare ? "open-share" : ""}`}>
            <div className="post-top">
                <Avatar src={profilePic} className="post-avatar" />
                <div className="post-top-info">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div className="post-bottom">
                <p>{massage}</p>
            </div>

            <div className="post-image">
                <img src={image} alt="" className="post-img"/>
            </div>

            <div className="post-options">
                <div className="post-option">
                     <ThumbUp />
                     <p>Like</p>
                </div>
                <div className="post-option">
                     <ChatBubbleOutline />
                     <p>Comment</p>
                </div>
                <div className="post-option" onClick={share}>
                     <NearMe/>
                     <p>Share</p>
                </div>
                <div className="post-option">
                    <AccountCircleOutlined />
                    <ExpandMoreOutlined/>
                </div>
            </div>
            <div className="share-body">
                <ul class="share-item">
                    <li class="share-list">
                        <FacebookShareButton title={username} quote={massage}url={image}>
                            <FacebookIcon size={28} round={true}/>
                        </FacebookShareButton>
                    </li>
                    <li class="share-list">
                        <WhatsappShareButton title={username} quote={massage}url={image}>
                            <WhatsappIcon size={28} round={true}/>
                        </WhatsappShareButton>
                    </li>
                    <li class="share-list">
                        <LinkedinShareButton title={username} quote={massage}url={image}>
                            <LinkedinIcon size={28} round={true}/>
                        </LinkedinShareButton>
                    </li>
                    <li class="share-list">
                        <TwitterShareButton title={username} quote={massage} url={image} via={username} hashtags={`#${username}`}>
                            <TwitterIcon size={28} round={true}/>
                        </TwitterShareButton>
                    </li>
                    <li class="share-list">
                        <TelegramShareButton title={username} quote={massage}url={image}>
                            <TelegramIcon size={28} round={true}/>
                        </TelegramShareButton>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Post;
