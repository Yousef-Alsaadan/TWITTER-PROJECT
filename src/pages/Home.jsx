import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import NavMobail from "../Components/NavMobail";
import Post from "../Components/Post";
import TwitteCard from "../Components/TwitteCard";
import Sidebar from "../Components/Sidebar";
import axios from "axios";

function Home() {
  const [twitts, setTwitts] = useState([]);

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
      <div className="bg-black min-h-screen">
        <div className="container mx-auto">
          <div className="md:grid md:grid-cols-4">
            <Navbar />
            <NavMobail />

            <div className="md:col-span-3 xl:col-span-2 border-x border-[#333639] xl:ml-0 md:ml-20 ml-0 flex flex-col md:block min-h-screen">
              <div className="border-b border-[#333639] flex items-center h-14 md:sticky md:top-0 w-full bg-black z-10">
                <div className="w-full flex justify-center items-center cursor-pointer hover:bg-[#181818] bg-black h-full">
                  <h1 className="text-base text-white font-bold">For you</h1>
                  <div className="absolute rounded-full h-1 w-14 mt-[3.2rem] bg-[#1D9BF0]"></div>
                </div>

                <div className="w-full flex justify-center items-center cursor-pointer hover:bg-[#181818] h-full">
                  <h1 className="text-base text-[#6C7075] font-normal">
                    Following
                  </h1>
                </div>
              </div>

              <Post />

              <div className="flex flex-col-reverse">
                {twitts.map((i, index) => {
                  return twitts != [] ? (
                    <TwitteCard
                      key={index}
                      user={i.user}
                      twitte={i.twitt}
                      id={i.id}
                      like={i.like}
                    />
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

export default Home;
