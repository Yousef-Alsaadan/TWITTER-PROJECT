import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import NavMobail from "../Components/NavMobail";
import Sidebar from "../Components/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import TwitteCard from "../Components/TwitteCard";
import axios from "axios";

function Profile() {
  const [twitts, setTwitts] = useState([]);
  const [changeBar, setChangeBar] = useState("flex");
  const [changeBar2, setChangeBar2] = useState("hidden");
  const [bold, setBold] = useState("font-bold text-white");
  const [bold2, setBold2] = useState("font-normal text-[#6C7075]");

  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!userData) {
      navigate("/signin");
    }
  }, []);

  useEffect(() => {
    axios
      .get("https://670239e1bd7c8c1ccd3e3b91.mockapi.io/twitte")
      .then(function (response) {
        setTwitts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [twitts]);

  return (
    <div>
      <div className="bg-black min-h-screen ">
        <div className="container mx-auto">
          <div className="md:grid md:grid-cols-4">
            <Navbar />
            <NavMobail />

            <div className="md:col-span-3 xl:col-span-2 border-x border-[#333639] xl:ml-0 md:ml-20 ml-0 flex flex-col md:block min-h-screen">
              <div className="flex items-center h-14 md:sticky md:top-0 w-full bg-black z-10 px-2 gap-4 fixed top-0">
                <div className="hover:bg-[#181919] rounded-full p-2 cursor-pointer">
                  <Link to="/">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      fill="#e7e9ea"
                      height="20px"
                    >
                      <g>
                        <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path>
                      </g>
                    </svg>
                  </Link>
                </div>

                <div className="">
                  <div className="text-white flex items-center justify-between w-full">
                    <div className="">
                      <h1>{userData.user}</h1>
                      <p className="text-[#71767b] text-sm">
                        {twitts.filter((i) => i.user === userData.user).length}{" "}
                        posts
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="">
                <img
                  src="https://i.pinimg.com/736x/80/7b/0d/807b0d00ea3aab1bdf89012248e9d97a.jpg"
                  className="h-[200px] w-full object-cover"
                />
              </div>

              <div className="rounded-full cursor-pointer border-[5px] border-black w-fit absolute md:-translate-y-[50%] translate-y-[80%] ml-4">
                <div className="rounded-full">
                  <img
                    className="h-[145px] w-[145px] rounded-full"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>

              <div className="flex justify-end mr-4 my-4">
                <button className="text-[#E7E9EA] border rounded-full px-4 py-1 hover:bg-[#181919]">
                  Edit profile
                </button>
              </div>

              <div className="text-white mt-10 px-6 mb-4">
                <h1 className="text-xl">{userData.user}</h1>
                <p className="text-[#71767b] text-sm">@{userData.user}</p>
              </div>

              <div className="border-b border-[#333639] flex items-center h-14  w-full bg-black z-10">
                <div
                  className="w-full flex justify-center items-center cursor-pointer hover:bg-[#181818] bg-black h-full"
                  onClick={() => {
                    setChangeBar("flex");
                    setChangeBar2("hidden");
                    setBold("font-bold text-white");
                    setBold2("font-normal text-[#6C7075]");
                  }}
                >
                  <h1 className={`text-base ${bold}`}>Posts</h1>
                  <div
                    className={`${changeBar} absolute rounded-full h-1 w-14 mt-[3.2rem] bg-[#1D9BF0]`}
                  ></div>
                </div>

                <div className="w-full flex justify-center items-center cursor-pointer hover:bg-[#181818] h-full">
                  <h1 className="text-base text-[#6C7075] font-normal">
                    Replies
                  </h1>
                </div>

                <div className="w-full flex justify-center items-center cursor-pointer hover:bg-[#181818] bg-black h-full">
                  <h1 className="text-base text-[#6C7075] font-normal">
                    Highlights
                  </h1>
                </div>

                <div className="w-full flex justify-center items-center cursor-pointer hover:bg-[#181818] h-full">
                  <h1 className="text-base text-[#6C7075] font-normal">
                    Articles
                  </h1>
                </div>

                <div className="w-full flex justify-center items-center cursor-pointer hover:bg-[#181818] bg-black h-full">
                  <h1 className="text-base text-[#6C7075] font-normal">
                    Media
                  </h1>
                </div>

                <div
                  className="w-full flex justify-center items-center cursor-pointer hover:bg-[#181818] h-full"
                  onClick={() => {
                    setChangeBar("hidden");
                    setChangeBar2("flex");
                    setBold("font-normal text-[#6C7075]");
                    setBold2("font-bold text-white");
                  }}
                >
                  <h1 className={`text-base ${bold2}`}>Likes</h1>
                  <div
                    className={`${changeBar2} absolute rounded-full h-1 w-14 mt-[3.2rem] bg-[#1D9BF0]`}
                  ></div>
                </div>
              </div>

              <div className={`${changeBar} flex-col-reverse`}>
                {twitts.map((i, index) => {
                  return twitts != [] ? (
                    i.user === userData.user ? (
                      <TwitteCard
                        key={index}
                        user={i.user}
                        twitte={i.twitt}
                        id={i.id}
                        like={i.like}
                      />
                    ) : (
                      ""
                    )
                  ) : (
                    ""
                  );
                })}
              </div>

              <div className={`${changeBar2} flex-col-reverse`}>
                {twitts.map((i, index) => {
                  return twitts != [] ? (
                    i.liked.includes(userData.user) ? (
                      <TwitteCard
                        key={index}
                        user={i.user}
                        twitte={i.twitt}
                        id={i.id}
                        like={i.like}
                      />
                    ) : (
                      ""
                    )
                  ) : (
                    ""
                  );
                })}
              </div>
            </div>

            <div className="md:block hidden">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
