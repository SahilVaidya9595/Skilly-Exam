import React from 'react'
import './student_login_style.css';
import { Link } from "react-router-dom";
export default function StudentLogin() {
    return (
        <div className="container-std-login-box">
            <div className="form-box">
                <div className="header-form">
                    <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i></h4>
                    <div className="image">
                    </div>
                </div>
                <div className="body-form">
                    <form>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i class="fa fa-user"></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder="Username" />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i class="fa fa-lock"></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder="Password" />
                        </div>
                        <button type="button" className="btn-design">LOGIN</button>
                        <div className="message">
                            <div className='remember-design'><input type="checkbox" /> Remember ME</div>
                            <div className='pass-design'><a href="#">Forgot your password</a></div>
                            <div className='acc-design'>Don't have an account ?<Link to = "/studentregistration"> Sign Up </Link></div>
                        </div>
                    </form>
                    <div className="social">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter-square"></i></a>
                        <a href="#"><i className="fab fa-google"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

