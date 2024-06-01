import { useState } from "react";
import login from "../../../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [forgotEmail, setForgotEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const res = await response.json();
      // console.log(res);

      if (response.status === 200) {
        toast.success("Login Successfully", {
          duration: 2000,
          position: "top-center",
        });
        localStorage.setItem("printerUser", formData.email);
        localStorage.setItem("token", res.token);
        // dispatch(accountUserChange(formData.email));
        setFormData({
          email: "",
          password: "",
        });
        navigate("/batchprint");
      } else if (response.status === 401) {
        // toast.error("Your email or password not match", {
        //   position: "top-center",
        // });
        toast.error(`${res.message}`, {
          position: "top-center",
        });
        setFormData({
          ...formData,
          password: "",
        });
      } else {
        toast.error("SOmething went wrong. Please try again!", {
          position: "top-center",
        });
        setFormData({
          ...formData,
          password: "",
        });
      }
    } catch (error) {
      console.error("Error occurred:", error);
      // toast.error(error)
    }
    // Reset formData after submission
  };

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(``, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const res = await response.json();
      // console.log(res);

      if (response.status === 200) {
        toast.success(`${res.message}`, {
          duration: 2000,
          position: "top-center",
        });
        navigate("/forgotpassword");
      } else {
        toast.error(`${res.message}`, {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
    // You can perform further actions here, such as sending the email for password reset
    setForgotEmail("");
    // Close the modal if needed
    document.getElementById("my_modal_settings").close();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-[#004368] bg-opacity-5 min-h-screen py-16">
      <div className="w-[1140px] mx-auto grid grid-cols-7 shadow-lg rounded-2xl">
        <div className="col-span-3 bg-[#004368] bg-opacity-5 rounded-l-2xl">
          <div className="flex flex-col items-center justify-center py-20">
            <div className="flex flex-col items-center gap-y-7">
              <h1 className="text-[#004368] text-6xl font-bold">BEEF</h1>
              <p className="text-[#004368] text-xl font-normal">
                Register to explore our site
              </p>
            </div>
            <div>
              <img src={login} alt="Registration" width={327} height={450} />
            </div>
          </div>
        </div>
        <div className="col-span-4 bg-white flex flex-col items-center py-20 relative rounded-r-2xl">
          <h1 className="text-[#004368] text-3xl font-semibold mb-7">Log In</h1>
          <form className="w-full px-20" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-[10px]">
              <label className="form-control w-full">
                <span className="text-[#004368] text-base font-semibold">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="enter your email"
                  className="h-full w-full text-black text-opacity-55 text-[15px] font-normal leading-normal pl-3 bg-[#004368] bg-opacity-5 outline-none border py-2 rounded-lg"
                />
              </label>
            </div>
            {/* Password */}
            <div className="my-[10px]">
              <label className="form-control w-full">
                <span className="text-[#004368] text-base font-semibold">
                  Password
                </span>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="enter password"
                    className="h-full w-full text-black text-opacity-55 text-[15px] font-normal leading-normal pl-3 bg-[#004368] bg-opacity-5 outline-none border py-2 rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </label>
            </div>

            <div className="flex items-center justify-center mb-6">
              <button
                className="bg-[#004368] hover:bg-opacity-[0.30] text-white hover:text-black w-[150px] h-10 px-2 py-2 rounded-md cursor-pointer text-center mr-3 mt-6"
                type="submit"
              >
                Log In
              </button>
            </div>
          </form>
          {/* forgot password */}
          <div className="absolute top-[290px] right-20">
            <button
              className="text-[#004368] hover:text-blue-600"
              onClick={() =>
                document.getElementById("my_modal_settings").showModal()
              }
            >
              Forgot Password?
            </button>
            <dialog id="my_modal_settings" className="modal">
              <div className="bg-white w-[500px] h-[240px] rounded-md pt-10">
                <h1 className="text-center text-2xl font-bold text-[#004368]">
                  Enter your Email
                </h1>
                <div className="modal-action w-full text-center flex items-center justify-center">
                  <form method="dialog" onSubmit={handleModalSubmit}>
                    <div className="">
                      <input
                        type="email"
                        name="forgotEmail"
                        placeholder="enter your email"
                        required
                        className="input border-none w-[450px] bg-[#004368] bg-opacity-5"
                        value={forgotEmail}
                        onChange={(e) => setForgotEmail(e.target.value)}
                      />
                    </div>
                    <div className="flex justify-end">
                      <p
                        className="bg-[#004368] bg-opacity-[0.30] hover:bg-[#004368] text-black hover:text-white w-[100px] h-10 px-2 py-2 rounded-md cursor-pointer text-center mt-5 mr-3"
                        onClick={() =>
                          document.getElementById("my_modal_settings").close()
                        }
                      >
                        Close
                      </p>
                      <button
                        className="bg-[#004368] hover:bg-opacity-[0.30] text-white hover:text-black w-[100px] h-10 px-2 py-2 rounded-md cursor-pointer text-center mt-5"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
          <p className="mt-24 text-black text-opacity-60">
            Don’t Have Any Account?
            <Link to="/register" className="font-semibold text-[#004368]">
              Create Account
            </Link>
          </p>
          <Link
            to="/resetpassword"
            className="text-xs font-light text-[#004368] hover:text-black hover:font-semibold mt-2"
          >
            Reset password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
