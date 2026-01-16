// Login.jsx

import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { IMAGES } from "../content/theme";

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

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

                <h4 className="text-center mb-4">Sign in to your account</h4>

                {/* Email / Password Login */}
                <div className="text-center mb-3">
                  <button
                    className="btn btn-primary btn-block"
                    onClick={() =>
                      loginWithRedirect({
                        authorizationParams: {
                          prompt: "login",
                          connection: "Username-Password-Authentication",
                        },
                      })
                    }
                  >
                    Sign In with Email
                  </button>
                </div>

                {/* Google Login */}
                <div className="text-center mb-3">
                  <button
                    className="btn btn-outline-primary btn-block"
                    onClick={() =>
                      loginWithRedirect({
                        authorizationParams: {
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
                    Don’t have an account?{" "}
                    <Link className="text-primary" to="/page-register">
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
