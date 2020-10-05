import React from 'react';
import './Css/Suggestions.css';
import {Avatar} from '@material-ui/core';

function Suggestions() {
    return (
        <div className="suggestions">
            <div className="profile_info">
                <Avatar />
                <h5>Profile Name</h5>
                <span>User EMail</span>
            </div>
            <div className="profile_suggestions">
                
            </div>
        </div>
    )
}

export default Suggestions
