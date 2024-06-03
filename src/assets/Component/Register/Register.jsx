import { useState } from "react";
import register from "../../../assets/registration.png";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    shopName: "",
    city: "",
    region: "",
    province: "",
    district: "",
    area: "",
    postalCode: "",
    image: null,
    verificationCode: "",
    status: true,
  });
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({
        ...formData,
        image: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatchError(true);
      return;
    }

    // Prepare the registration data
    const registrationData = {
      fullName: formData.fullName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      password: formData.password,
      shopName: formData.shopName,
      city: formData.city,
      region: formData.region,
      province: formData.province,
      district: formData.district,
      area: formData.area,
      postalCode: formData.postalCode,
      image: formData.image,
    };

    try {
      // Make API call to register user
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData),
      });

      const res = await response.json();
      // console.log(res);

      // Check if registration was successful
      if (res.status === 400) {
        toast.error(`${res.message}`, {
          duration: 3000,
          position: "top-center",
        });
      } else if (res.status === 201) {
        // toast.success(
        //   "Your Shop Register Successfully. Please check your email spam",
        //   { duration: 3000, position: "top-center" }
        // );
        toast.success(`${res.message}`, {
          duration: 3000,
          position: "top-center",
        });
        navigate("/login");
      }

      // Reset form data
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        shopName: "",
        city: "",
        region: "",
        province: "",
        district: "",
        area: "",
        postalCode: "",
        image: null,
      });
      // Reset password match error
      setPasswordMatchError(false);
    } catch (error) {
      // Handle registration error
      console.error("Registration Error:", error);
      // Display error message to the user
      toast.error(`Registration Failed: ${error}`, {
        position: "top-center",
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="bg-[#004368] bg-opacity-5 min-h-screen py-8">
      <div className="w-[1140px] mx-auto grid grid-cols-6 shadow-lg rounded-2xl">
        <div className="col-span-2 bg-[#004368] bg-opacity-5 py-20 rounded-l-2xl">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-y-7">
              <h1 className="text-[#004368] text-6xl font-bold">Grozziie</h1>
              <p className="text-[#004368] text-xl font-normal">
                Register to explore our site
              </p>
            </div>
            <div className="mt-10">
              <img src={register} alt="Registration" width={327} height={450} />
            </div>
          </div>
        </div>
        <div className="col-span-4 bg-white flex flex-col items-center py-8 rounded-r-2xl">
          <h1 className="text-[#004368] text-3xl font-semibold mb-7">
            Register
          </h1>
          <form onSubmit={handleSubmit} className="w-full px-10">
            {/* full name */}
            <div className="mb-[10px]">
              <label className="form-control w-full">
                <span className="text-[#004368] text-base font-semibold">
                  Full Name
                </span>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="h-full w-full text-black text-opacity-55 text-[15px] font-normal leading-normal pl-3 bg-[#004368] bg-opacity-5 outline-none border py-2 rounded-lg"
                />
              </label>
            </div>
            {/* middle email */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {/* email */}
              <div className="">
                <label className="form-control w-full">
                  <span className="text-[#004368] text-base font-semibold">
                    E-Mail Address
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
              {/* phone */}
              <div className="">
                <label className="form-control w-full">
                  <span className="text-[#004368] text-base font-semibold">
                    Phone Number
                  </span>
                  <input
                    type="text"
                    name="phoneNumber"
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="+88017 2145 2552"
                    className="h-full w-full text-black text-opacity-55 text-[15px] font-normal leading-normal pl-3 bg-[#004368] bg-opacity-5 outline-none border py-2 rounded-lg"
                  />
                </label>
              </div>
              {/* password */}
              <div className="">
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
                      placeholder="enter your password"
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
                <p className="text-xs pt-1 text-red-500">
                  Password must be 8 characters and include at least one
                  uppercase letter, one lowercase letter, one number, and one
                  special character.
                </p>
              </div>

              {/* confirm password */}
              <div className="">
                <label className="form-control w-full">
                  <span className="text-[#004368] text-base font-semibold">
                    Confirm Password
                  </span>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      required
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="confirm your password"
                      className="h-full w-full text-black text-opacity-55 text-[15px] font-normal leading-normal pl-3 bg-[#004368] bg-opacity-5 outline-none border py-2 rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={toggleConfirmPasswordVisibility}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                </label>
                {passwordMatchError && (
                  <p className="text-red-500 text-xs mt-1">
                    Passwords do not match
                  </p>
                )}
              </div>
            </div>
            {/* shop name */}
            <div className="my-[10px]">
              <label className="form-control w-full">
                <span className="text-[#004368] text-base font-semibold">
                  Address
                </span>
                <input
                  type="text"
                  name="shopName"
                  required
                  value={formData.shopName}
                  onChange={handleChange}
                  placeholder="Address"
                  className="h-full w-full text-black text-opacity-55 text-[15px] font-normal leading-normal pl-3 bg-[#004368] bg-opacity-5 outline-none border py-2 rounded-lg"
                />
              </label>
            </div>
            {/* image */}
            <div className="mt-4">
              <label className="form-control w-full">
                <span className="text-[#004368] text-base font-semibold mb-[2px]">
                  Add Image
                </span>
                <input
                  type="file"
                  required
                  onChange={handleImageChange}
                  className="file-input file-input-bordered file-input-sm w-full"
                />
              </label>
            </div>
            {/* button */}
            <div className="flex items-center justify-center mb-5">
              <button
                className="bg-[#004368] bg-opacity-30 hover:bg-opacity-100 text-black hover:text-white w-[100px] h-10 px-2 py-2 rounded-md cursor-pointer text-center mr-3 mt-5"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
          <p className="text-black text-opacity-60">
            Already have an account?
            <Link to="/login" className="font-semibold text-[#004368]">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
