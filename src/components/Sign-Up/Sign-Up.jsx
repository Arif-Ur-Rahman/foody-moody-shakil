import React, { useState } from "react";
import "./Sign-Up.css";
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const [captchaValue, setCaptchaValue] = useState(null);

  const onSubmit = async (data) => {
    if (!captchaValue) {
      toast.error("Please complete the CAPTCHA");
      return;
    }

    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_API_URL}/api/auth/register/`,
        formData
      );
      toast.success("Registration successfully");
      navigate("/login");
      reset();
    } catch (error) {
      console.error(error);
      toast.error(error);
    }
  };

  const handleCaptchaChange = (value) => {
    console.log("Captcha value:", value);
    setCaptchaValue(value);
  };

  const validatePassword = (value) => {
    return value === watch("password") || "Passwords do not match";
  };

  return (
    <div className="login-container">
      <ToastContainer />
      <div className="background-design">
        <div className="login-form">
          <h2>Create Account</h2>
          <form onSubmit={handleSubmit(onSubmit)} method="post">
            <div className="form-group">
              <input
                type="text"
                id="username"
                placeholder="UserName"
                {...register("username", {
                  required: "UserName is required",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/,
                    message: "Invalid UserName",
                  },
                })}
              />
              {errors.username && (
                <span className="text-danger">{errors.username.message}</span>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                id="name"
                placeholder="Name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="text-danger">{errors.name.message}</span>
              )}
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-danger">{errors.email.message}</span>
              )}
            </div>
            <div className="input-with-icon-div form-group">
              <input
                className="custom-input"
                type="password"
                id="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 4,
                    message: "Password must be more than 4 characters",
                  },
                  maxLength: {
                    value: 12,
                    message: "Password cannot exceed 12 characters",
                  },
                })}
              />
              {errors.password && (
                <span className="text-danger">{errors.password.message}</span>
              )}
            </div>
            <div className="input-with-icon-div form-group">
              <input
                type="password"
                id="confirm_password"
                placeholder="Confirm Password"
                {...register("confirm_password", {
                  required: "Confirm password is required",
                  validate: validatePassword,
                })}
              />
              {errors.confirm_password && (
                <span className="text-danger">
                  {errors.confirm_password.message}
                </span>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                id="phone"
                placeholder="Phone"
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && (
                <span className="text-danger">{errors.phone.message}</span>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                id="address"
                placeholder="Address"
                {...register("address", { required: "Address is required" })}
              />
              {errors.address && (
                <span className="text-danger">{errors.address.message}</span>
              )}
            </div>
            <div className="form-group">
              <input
                type="file"
                name="photo"
                id="photo"
                accept="image/*"
                {...register("photo")}
              />
            </div>

            <ReCAPTCHA
              sitekey="6LeZAKApAAAAADIDKMBS_b0nhKqsNWLQB04fgP9a"
              onChange={handleCaptchaChange}
            />
            <button type="submit" className="login-btn">
              Sign Up
            </button>
          </form>
          <h5>Already Have An Account?</h5>
          <h5>
            Click To{" "}
            <span>
              <Link to="/login" className="login-link-color">
                Login
              </Link>
            </span>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
