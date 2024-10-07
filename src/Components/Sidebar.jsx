import React from "react";

function Sidebar() {
  return (
    <div className="xl:pl-4 ">
      <div className="sticky top-0 pb-4 pt-2 bg-black z-10">
        <div className="bg-[#202327] rounded-full">
          <label className="input input-bordered flex items-center gap-2 bg-transparent text-[#71767B] focus:text-[#1D9BF0] focus-within:text-[#1D9BF0] focus:border-[#1D9BF0] focus:border focus-within:border-[#1D9BF0] focus-within:border focus:rounded-full focus-within:rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              className="grow placeholder:text-[#71767B] text-white"
              placeholder="Search"
            />
          </label>
        </div>
      </div>

      <div className="">
        <div className="border border-[#333639] rounded-2xl p-2 px-4 mb-4">
          <h1 className="font-bold text-xl text-[#E7E9EA] mb-2">
            Subscribe to Premium
          </h1>
          <p className=" text-[#E7E9EA] text-sm mb-2">
            Subscribe to unlock new features and if eligible, receive a share of
            ads revenue.
          </p>
          <button className="cursor-pointer text-white bg-[#1D9BF0] hover:bg-[#1A8CD8] px-4 py-2 font-medium rounded-full">
            Subscribe
          </button>
        </div>

        <div className="border border-[#333639] rounded-2xl p-2 px-4 mb-4">
          <h1 className="font-bold text-xl text-[#E7E9EA] mb-4">
            What’s happening
          </h1>

          <p className="cursor-pointer text-[#71767b] text-sm">
            Trending in Saudi Arabia
          </p>
          <p className="cursor-pointer text-[#E7E9EA] mb-2 font-semibold">
            #Hashtag
          </p>

          <p className="cursor-pointer text-[#71767b] text-sm">
            Only on X · Trending
          </p>
          <p className="cursor-pointer text-[#E7E9EA] mb-2 font-semibold">
            #Hashtag
          </p>

          <p className="cursor-pointer text-[#1C92E2]">Show more</p>
        </div>

        <div className="border border-[#333639] rounded-2xl p-2 px-4 mb-4">
          <h1 className="font-bold text-xl text-[#E7E9EA] mb-4">
            Who to follow
          </h1>

          <div className="mb-2 flex gap-2">
            <div className="avatar cursor-pointer">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>

            <div className="text-white flex items-center justify-between w-full">
              <div className="">
                <h1>User</h1>
                <p className="text-[#71767b] text-sm">@user</p>
              </div>

              <button className="cursor-pointer text-black bg-white hover:bg-[#D7DBDC] px-4 py-1 font-medium rounded-full">
                Follow
              </button>
            </div>
          </div>

          <div className="mb-2 flex gap-2">
            <div className="avatar cursor-pointer">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>

            <div className="text-white flex items-center justify-between w-full">
              <div className="">
                <h1>User</h1>
                <p className="text-[#71767b] text-sm">@user</p>
              </div>

              <button className="cursor-pointer text-black bg-white hover:bg-[#D7DBDC] px-4 py-1 font-medium rounded-full">
                Follow
              </button>
            </div>
          </div>

          <div className="mb-2 flex gap-2">
            <div className="avatar cursor-pointer">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>

            <div className="text-white flex items-center justify-between w-full">
              <div className="">
                <h1>User</h1>
                <p className="text-[#71767b] text-sm">@user</p>
              </div>

              <button className="cursor-pointer text-black bg-white hover:bg-[#D7DBDC] px-4 py-1 font-medium rounded-full">
                Follow
              </button>
            </div>
          </div>

          <p className="cursor-pointer text-[#1C92E2]">Show more</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
