import React from 'react';
import './Css/SignIn.css';

function SignIn() {
    return (
        <>
        <div className="login_container">
            <h1>Instagram</h1>
            <form>
                <input type="text" placeholder="Phone number, username or email" />
                <input type="passsword" placeholder="Password" /><br />
                <button>Log In</button>
            </form>
            <div class="details"> 
                <span className="line">-------------------- OR --------------------</span><br /><br />
                <a className="log_fb" href="#"><img src="https://www.flaticon.com/svg/static/icons/svg/124/124010.svg" /> Log in with Facebook</a><br /><br />
                <a href="#" className="forgot">forgot password?</a>
            </div>

        </div>
        <div className="signup_footer">
            <p>Don't have an account? <a href="#">SIgn Up</a></p>
        </div>
        <div class="app_store">
            Get the app.
            <div className="store">
                <img src="https://www.linkcardsapp.com/image/app-store-logo.png" className="appstore"/>
                <img src="https://www.linkcardsapp.com/image/google%20play%20image.png" className="playstore" />
            </div>
        </div>
        </>
    )
}

export default SignIn
