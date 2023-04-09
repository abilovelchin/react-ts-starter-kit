import { login } from "$store/features/auth.slice";
import { AppDispatch } from "$store/index";
import { User } from "$types/user.type";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const { register, handleSubmit } = useForm<{
    username: string;
    password: string;
  }>();

  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = handleSubmit(async (values) => {
    // send login request here...
    if (values.username != "user" || values.password != "12345") {
      toast.info("Username or Password is incorrect");
      return;
    }
    const user: Partial<User> = {
      id: 1,
      name: "Elchin",
      username: values.username,
      email: "abilovelchin@gmail.com",
      website: "https://abilov.az",
      role: "USER",
    };

    dispatch(login(user));
    navigate("/");
  });

  return (
    <div className="flex flex-col items-center justify-center flex-1">
      <div className="gap-5 w-[400px] shadow-md p-10 rounded-lg">
        <h6 className="text-center text-lg font-medium text-gray-500 mb-5">
          LOGIN TO YOUR ACCOUNT
        </h6>
        <div className="flex flex-col text-gray-500 my-2 py-2 text-sm border-y">
          <p>
            <span className="font-medium">Username:</span> user
          </p>
          <p>
            <span className="font-medium">Password:</span> 12345
          </p>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col gap-5">
          {/* username */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-600 text-sm">Username</label>
            <input
              type="text"
              className="p-2 bg-gray-100 rounded"
              {...register("username")}
            />
          </div>

          {/* password */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-600 text-sm">Password</label>
            <input
              type="password"
              className="p-2 bg-gray-100 rounded"
              {...register("password")}
            />
          </div>

          {/* button */}
          <div className="flex flex-col gap-1">
            <button className="py-2 px-5 rounded bg-indigo-500 text-white">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
