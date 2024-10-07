import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signin() {
  const [errorMess, setErrorMess] = useState(
    "focus:border-[#1A89D4] focus-within:border-[#1A89D4] focus:placeholder:text-[#1A89D4] border-[#333639]"
  );
  const [mess, setMess] = useState([]);

  const [sign, setSign] = useState([]);
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://66f02a49f2a8bce81be52e94.mockapi.io/users")
      .then(function (response) {
        setSign(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const submit = () => {
    if (userName === "" || pass === "") {
      errorLog("Please fill in all fields!");
      return;
    }

    const user = sign.find((data) => data.user === userName);
    if (!user) {
      errorLog("Username is not found!");
      return;
    }

    if (user.pass !== pass) {
      errorLog("The password is wrong!");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ user: user.user }));

    navigate("/");
  };

  const errorLog = (text) => {
    const errorMessage =
      errorMess ===
      "focus:border-[#1A89D4] focus-within:border-[#1A89D4] focus:placeholder:text-[#1A89D4] border-[#333639]"
        ? "input-error focus-within:outline-none focus:outline-none"
        : "input-error focus-within:outline-none focus:outline-none";
    setErrorMess(errorMessage);
    setMess(text);
  };

  return (
    <div>
      <div className="bg-[#242D34] h-screen w-screen flex justify-center items-center roboto_serif">
        <div className="bg-black lg:h-[80%] lg:w-[35%] w-full h-full rounded-2xl p-4 flex flex-col items-center gap-8 input-error">
          <div className="">
            <svg
              viewBox="0 0 24 24"
              aria-label="X"
              role="img"
              fill="#E7E9EA"
              height="30px"
            >
              <g>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </g>
            </svg>
          </div>

          <div className="lg:w-3/5 w-full text-white flex flex-col gap-4 h-full">
            <h1 className="font-semibold text-3xl text-[#E7E9EA] mb-4">
              Sign in to X
            </h1>
            <div className="flex flex-col justify-between h-full items-center">
              <div className="flex flex-col gap-4 w-full">
                <input
                  type="text"
                  placeholder="username"
                  className={`p-2 bg-transparent border w-full h-12 rounded ${errorMess} placeholder:font-light outline-none focus:border-[2px]`}
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />

                <input
                  type="password"
                  placeholder="Password"
                  className={`p-2 bg-transparent border w-full h-12 rounded ${errorMess} placeholder:font-light outline-none focus:border-[2px]`}
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />

                <p className="text-error">{mess}</p>
              </div>

              <div className="w-full">
                <button
                  onClick={submit}
                  className="w-full bg-white text-black rounded-full p-3 hover:bg-[#E7E9EA] font-medium"
                >
                  Log in
                </button>

                <p className="text-center mt-2 text-sm text-[#71767B]">
                  Don't have an account?{" "}
                  <Link
                    className="text-[#1A89D4] hover:underline"
                    to="/createaccount"
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
  );
}

export default Signin;
