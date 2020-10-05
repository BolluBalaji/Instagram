import React from 'react';
import './Css/SignUp.css';
import FacebookIcon from '@material-ui/icons/Facebook';

function SignUp() {
    return (
        <>
        <div className="signup_container">
            <h1>Instagram</h1>
            <h6>Sign up to see photos and videos from your friends.</h6>
            <button className="log_fb"><FacebookIcon  />Log in with Facebook</button><br />
            <span className="line">-------------------- OR --------------------</span>
            <form>
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="Username" />
                <input type="passsword" placeholder="Password" /><br />
                <button>Sign Up</button>
            </form>
            <p className="terms">By signing up, you agree to our <span>Terms , Data Policy and Cookies Policy</span> .</p>
        </div>
        <div className="signup_footer">
            <p>Have an account? <a href="#">Log in</a></p>
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

export default SignUp
