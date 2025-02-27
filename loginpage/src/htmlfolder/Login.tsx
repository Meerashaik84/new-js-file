//import React from 'react'
import '../cssfolder/Login.css/'

export default function Login() {
  return (
    <div>
      <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Login Form 1</h3>
                    
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your Email *" value="" /><br/><br/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Your Password *" value="" /><br/><br/>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btnSubmit" value="Login" />
                        </div>
                        <div className="form-group">
                            <a href="#" className="btnForgetPwd">Forget Password?</a>
                        </div>
                    
                </div>
                <div className="col-md-6 login-form-2">
                    <div className="login-logo">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                    </div>
                    <h3>Login Form 2</h3>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your Email *" value="" /><br/><br/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Your Password *" value="" /><br/><br/>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btnSubmit" value="Login" />
                        </div>
                        <div className="form-group">

                            <a href="#" className="btnForgetPwd" >Forget Password?</a>
                        </div>
                    
                </div>
            </div>
        </div>
      
    </div>
  )
}
