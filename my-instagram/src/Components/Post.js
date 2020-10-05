import React from 'react';
import './Css/Post.css';
import { Avatar } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';

function Post() {
    return (
        <div className="post">
            <div className="post_card">
                <div className="post_header">
                    <div className="post_title">
                        <Avatar />
                        <span>Title_of_User</span>
                    </div>
                    <div className="more_icon">
                        <MoreHorizIcon id="more_menu"/>
                        <ul className="more_menuItems">
                            <li className="danger">Report</li>
                            <li className="danger">Unfollow</li>
                            <li>Go to Post</li>
                            <li>Share</li>
                            <li>Copy Link</li>
                            <li>Embed</li>
                            <li>Cancel</li>
                        </ul>
                    </div>
                    
                </div>
                <div className="post_body">
                    <img src="https://www.gettyimages.in/gi-resources/images/500px/983794168.jpg" alt="post" />
                </div>
                <div className="post_footer">
                    <div className="footer_left">
                        <FavoriteBorderIcon />
                        <ChatBubbleOutlineOutlinedIcon />
                        <div className="explore_menu">
                            <SendOutlinedIcon className="explore"/>
                            <ul className="explore_menuItems">
                                <strong>Share</strong>
                                <br /><br />
                                <hr />
                                <li>Share to Direct</li>
                                <li>Share to Facebook</li>
                                <li>Share to Messenger</li>
                                <li>Share via Emial</li>
                                <li>Copy Link</li>
                                <li>Cancel</li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="footer_right">
                        <BookmarkBorderOutlinedIcon />
                    </div>
                </div>
                <div className="post_info">
                    <span>123 likes</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className="post_comment">
                        <input type="text" placeholder="Add a comment.." /> Post
                        <button type="submit"></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
