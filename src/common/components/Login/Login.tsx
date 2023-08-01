import { Link } from "react-router-dom";
import CSS from "./Login.module.css";
import logo from "../../../assets/Home/LogoWhite.svg";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import img from "../../../assets/Login_Page.svg";
import { IoMdArrowRoundBack } from "react-icons/io";

import logo1 from "../../../assets/apple-logo.svg";
import logo2 from "../../../assets/google 1.svg";
import logo3 from "../../../assets/linkedin.svg";
import logo4 from "../../../assets/yahoo.svg";

import social1 from "../../../assets/Insta.svg";
import social2 from "../../../assets/Facebook.svg";
import social3 from "../../../assets/Twitter.svg";

type InputType = {
  Username?: string;
  Password?: string;
};

const Login = () => {
  const [state, setState] = useState<number>(0);
  const [showImage, setShowImage] = useState<boolean>(false);
  const [windowSize, setWindowSize] = useState<number>(getCurrentWidth());
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    setError,
  } = useForm<InputType>({ mode: "onChange" });

  const onSubmit = (data: InputType) => console.log(data);

  function getCurrentWidth() {
    let width = window.innerWidth;
    return width;
  }

  useEffect(() => {
    const updateDimension = () => {
      setWindowSize(getCurrentWidth());
    };
    window.addEventListener("resize", updateDimension);
    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [windowSize]);

  useEffect(() => {
    if (windowSize > 767) {
      setShowImage(true);
    } else setShowImage(false);
  }, [window.innerWidth]);

  return (
    <div className={CSS.mainContainer}>
      <div className={CSS.backToHome}>
        <Link to={"/home"}>
          <img src={logo} width={"30px"} height={"30px"} alt=""></img>
        </Link>
      </div>
      <div className={CSS.subContainer}>
        <div className={`${CSS.loginContainer} ${CSS.row}`}>
          <div className={`${CSS.display}`}>
            <div className={CSS.typo}>
              <p>Greetings</p>
              <h3>Sign In</h3>
              <p>to access Mobile Collection Store</p>
            </div>
            <div className={CSS.formContainer}>
              <form onSubmit={handleSubmit(onSubmit)}>
                {state === 0 && (
                  <input
                    className={CSS.inputField}
                    type="text"
                    autoComplete="on"
                    placeholder="Email or Username"
                    onClick={() => {
                      trigger();
                    }}
                    {...register("Username", {
                      required: {
                        value: true,
                        message: "! Please Enter the Username",
                      },
                      minLength: {
                        value: 3,
                        message: "! Username Should be atleast 3 characters",
                      },
                    })}
                  />
                )}
                {errors.Username && (
                  <p className={CSS.error}>{errors.Username.message}</p>
                )}
                {state === 0 && (
                  <button
                    onClick={() => {
                      !errors.Username && setState(1);
                    }}
                    type="button"
                    className={CSS.Button}
                  >
                    Next
                  </button>
                )}
                {state === 1 && (
                  <input
                    className={CSS.inputField}
                    type="password"
                    autoComplete="on"
                    placeholder="Password"
                    onFocus={() => {
                      trigger();
                    }}
                    {...register("Password", {
                      required: {
                        value: true,
                        message: "Please Enter the password",
                      },
                      minLength: {
                        value: 8,
                        message:
                          "Password should be atleast 8 characters long.",
                      },
                    })}
                  />
                )}
                {errors.Password && (
                  <p className={CSS.error}>{errors.Password.message}</p>
                )}
                {state === 1 && <input type="submit" className={CSS.Button} />}
              </form>
            </div>
          </div>
          {state === 1 && (
            <button
              onClick={() => {
                setState(0);
                setError("Password", {
                  type: "manual",
                  message: "",
                });
              }}
              className={CSS.backButton}
            >
              <IoMdArrowRoundBack style={{ color: "#fff", fontSize: "25px" }} />
            </button>
          )}
          <div className={CSS.display}>
            <Link to="">
              <p className={CSS.txt}>Forgot Password?</p>
            </Link>
            <div className={CSS.divider}>
              <p className={CSS.dividertxt}>or</p>
            </div>
            <div className={CSS.auth0}>
              <p className={CSS.txt}>Sign in Using</p>
              <div className={CSS.authContainer}>
                <Link to="">
                  <div className={CSS.authIcons}>
                    <img
                      src={logo1}
                      width="26px"
                      height="26px"
                      alt="Apple Icon"
                    />
                  </div>
                </Link>
                <Link to="">
                  <div className={CSS.authIcons}>
                    <img
                      src={logo2}
                      width="26px"
                      height="26px"
                      alt="Google Icon"
                    />
                  </div>
                </Link>
                <Link to="">
                  <div className={CSS.authIcons}>
                    <img
                      src={logo3}
                      width="26px"
                      height="26px"
                      alt="LinkedIn Icon"
                    />
                  </div>
                </Link>
                <Link to="">
                  <div className={CSS.authIcons}>
                    <img
                      src={logo4}
                      width="26px"
                      height="26px"
                      alt="Yahoo Icon"
                    />
                  </div>
                </Link>
              </div>
              <div>
                <p className={`${CSS.txt} ${CSS.size}`}>
                  Don’t have a Mobile Collection account?
                  <br />
                  <Link
                    to=""
                    className={`${CSS.txt} ${CSS.size}`}
                    style={{ textDecoration: "underline" }}
                  >
                    Sign Up Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={CSS.image}>
          {showImage && <img src={img} alt="Mobile Image" />}
        </div>
      </div>
      <div className={CSS.footer}>
        {showImage && (
          <div className={CSS.socials}>
            <Link to="">
              <img src={social1} alt="" />
            </Link>
            <Link to="">
              <img src={social2} alt="" />
            </Link>
            <Link to="">
              <img src={social3} alt="" />
            </Link>
          </div>
        )}
        <p className={`${CSS.txt} ${CSS.sizeSS}`}>
          Designed and Developed by Code Centric
        </p>
        <p className={`${CSS.txt} ${CSS.sizeSS}`}>
          All Rights Reserved © Mobile Collections
        </p>
      </div>
    </div>
  );
};

export default Login;
