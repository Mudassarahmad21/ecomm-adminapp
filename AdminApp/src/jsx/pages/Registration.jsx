// Register.jsx

import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { IMAGES } from "../content/theme";

const Register = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="fix-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-6">
            <div className="card mb-0 h-auto">
              <div className="card-body">
                <div className="text-center mb-3">
                  <Link to="/">
                    <img
                      className="logo-auth"
                      src={IMAGES.logofull}
                      alt="logo"
                    />
                  </Link>
                </div>

                <h4 className="text-center mb-4">Create your account</h4>

                {/* Email / Password Signup */}
                <div className="text-center mb-3">
                  <button
                    className="btn btn-primary btn-block"
                    onClick={() =>
                      loginWithRedirect({
                        authorizationParams: {
                          screen_hint: "signup",
                          connection: "Username-Password-Authentication",
                        },
                      })
                    }
                  >
                    Sign Up with Email
                  </button>
                </div>

                {/* Google Signup */}
                <div className="text-center mb-3">
                  <button
                    className="btn btn-outline-primary btn-block"
                    onClick={() =>
                      loginWithRedirect({
                        authorizationParams: {
                          screen_hint: "signup",
                          connection: "google-oauth2",
                        },
                      })
                    }
                  >
                    Continue with Google
                  </button>
                </div>

                <div className="new-account mt-3 text-center">
                  <p>
                    Already have an account?{" "}
                    <Link className="text-primary" to="/page-login">
                      Sign in
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

export default Register;
