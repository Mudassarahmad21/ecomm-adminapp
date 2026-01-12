import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IMAGES } from "../content/theme";

const Login = () => {
   const [loginData, setLoginData] = useState({});
   const handleBlur = (e) => {
      const newLoginData = { ...loginData };
      newLoginData[e.target.name] = e.target.value;
      setLoginData(newLoginData);
   };
   const nav = useNavigate();
   const submitHandler = (e) => {
      e.preventDefault();
      nav('/');
   };
   const [openEye, setOpenEye] = useState(true);
   return (
      <div className="fix-wrapper">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-5 col-md-6">
                  <div className="card mb-0 h-auto">
                     <div className="card-body">
                        <div className="text-center mb-3">
                           <Link to={'/'}><img className="logo-auth" src={IMAGES.logofull} alt="logo" /></Link>
                        </div>
                        <h4 className="text-center mb-3">Sign in your account</h4>
                        <form  onSubmit={(e) => submitHandler(e)}>
                           <div className="form-group mb-4">
                              <label className="form-label">Email</label>
                              <input type="email" className="form-control" defaultValue="hello@example.com" name="Email"
                                 onChange={handleBlur}
                              />
                           </div>
                           <div className="form-group  mb-3 mb-sm-4">
                              <label className="form-label">Password</label>
                              <div className="position-relative">
                                 <input type={openEye ? 'password' : ''}  id="dz-password" className="form-control" value="Password" onChange={handleBlur}/>
                                 <span className={`show-pass eye ${openEye ? '': 'active'}`}
                                    onClick={()=>setOpenEye(!openEye)}
                                 >
                                    <i className="fa fa-eye-slash"/>
                                    <i className="fa fa-eye"/>
                                 </span>
                              </div>                            
                           </div>
                           <div className="form-row d-flex flex-wrap justify-content-between align-items-baseline mb-2">
                              <div className="form-group mb-sm-4 mb-1">
                                 <div className="form-check custom-checkbox ms-1">
                                    <input
                                       type="checkbox"
                                       className="form-check-input"
                                       id="basic_checkbox_1"
                                    />
                                    <label
                                       className="form-check-label"
                                       htmlFor="basic_checkbox_1"
                                    >
                                       Remember my preference
                                    </label>
                                 </div>
                              </div>
                              <div className="form-group">
                                 <Link to="/page-forgot-password">
                                    Forgot Password?
                                 </Link>
                              </div>
                           </div>
                           <div className="text-center">
                                 <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                           </div>
                        </form>
                        <div className="new-account mt-3">
                           <p>
                              Don't have an account?{" "}
                              <Link
                                 className="text-primary"
                                 to="/page-register"
                              >
                                 Sign up
                              </Link>
                           </p>
                        </div>
                     </div>                           
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
