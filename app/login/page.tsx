import React from "react";
import Link from "next/link";
import "@/css/login-signup.css";
import google from "@/public/svg/google.png";
import Image from "next/image";

function Login() {
  return (
    <div className="login-signup-container top-0 left-0 fixed w-full h-full grid items-center justify-center">
      <div className="login-signup-form flex flex-col p-4 gap-4 items-center self-center justify-self-center">
        <form className="flex flex-col gap-4 items-center" action="">
          <h2>Login</h2>
          <div className="input-group">
            <input type="text" placeholder="Your Email" />
          </div>

          <div className="input-group">
            <input type="password" placeholder="Password" />
          </div>

          <button className="cta">Login</button>
          <a href="" className="cta-2">
            <Image src={google} alt="Google logo" height={200} width={200} />
            Continue with Google
          </a>

          <span>
            Don{"'"}t have an account? <Link className="primary-text" href="/signup">Sign up</Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
