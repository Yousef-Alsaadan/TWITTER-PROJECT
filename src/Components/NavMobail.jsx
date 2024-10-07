import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavMobail() {
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("user"));

  function Logout() {
    localStorage.clear("user");
    navigate("/signin");
  }

  return (
    <div className="md:hidden block">
      <div className="text-[#E7E9EA] flex justify-between pb-2 w-screen pl-0 md:pl-4 items-center text-xl">
        <div className="dropdown dropdown-bottom">
          <div
            className="hover:bg-[#181919] rounded-full p-3 w-full flex items-center justify-between cursor-pointer"
            tabIndex={0}
            role="button"
          >
            <div className="flex gap-3 items-end">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
            </div>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black box_shadow rounded-box z-20 my-3 w-56 px-0 py-3 ml-8"
          >
            <li className="hover:bg-[#16181C] px-2">
              <Link to="/profile" className="cursor-pointer font-semibold text-lg">
                Profile
              </Link>
            </li>

            <li className="hover:bg-[#16181C] px-2">
              <p
                className="cursor-pointer font-semibold text-lg"
                onClick={Logout}
              >
                Log out @{userData.user}
              </p>
            </li>
          </ul>
        </div>

        <Link to="/">
          <div className="hover:bg-[#181919] rounded-full p-3 w-fit">
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
        </Link>

        <div className="pr-3">
          <h1 className="text-[#1D9BF0] font-bold text-sm">Get Premium</h1>
        </div>
      </div>

      <div className="fixed bottom-20 right-4 cursor-pointer">
        <div>
          <div className="bg-[#1D9BF0] hover:bg-[#1A8CD8] rounded-full p-3 text-center font-bold text-lg w-4/5 mt-2 xl:block hidden">
            Post
          </div>

          <div className="bg-[#1D9BF0] hover:bg-[#1A8CD8] rounded-full p-3 w-fit  xl:hidden block">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="white"
              height="30px"
            >
              <g>
                <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div className="text-[#E7E9EA] z-10 flex gap-4 justify-between pb-2 w-screen items-center text-xl fixed bottom-0 border-t bg-black border-[#333639]">
        <Link to="/">
          <div className="hover:bg-[#181919] rounded-full p-3 w-fit flex items-center gap-4">
            {/* <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="#E7E9EA"
              height="30px"
            >
              <g>
                <path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z"></path>
              </g>
            </svg> */}

            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="#E7E9EA"
              height="30px"
            >
              <g>
                <path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913h6.638c.511 0 .929-.41.929-.913v-7.075h3.008v7.075c0 .502.418.913.929.913h6.639c.51 0 .928-.41.928-.913V7.904c0-.301-.158-.584-.408-.758zM20 20l-4.5.01.011-7.097c0-.502-.418-.913-.928-.913H9.44c-.511 0-.929.41-.929.913L8.5 20H4V8.773l8.011-5.342L20 8.764z"></path>
              </g>
            </svg>

            <h1 className="pr-2 xl:block hidden">Home</h1>
          </div>
        </Link>

        <div className="hover:bg-[#181919] rounded-full p-3 w-fit flex items-center gap-4 cursor-pointer">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="#E7E9EA"
            height="30px"
          >
            <g>
              <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
            </g>
          </svg>

          <h1 className="pr-2 xl:block hidden">Explore</h1>
        </div>

        <div className="hover:bg-[#181919] rounded-full p-3 w-fit flex items-center gap-4 cursor-pointer">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="#E7E9EA"
            height="30px"
          >
            <g>
              <g clipPath="url(#3-clip0_2592_269)" clipRule="evenodd">
                <path d="M18 4.1H6c-1.05 0-1.9.85-1.9 1.9v12c0 1.05.85 1.9 1.9 1.9h12c1.05 0 1.9-.85 1.9-1.9V6c0-1.05-.85-1.9-1.9-1.9zM6 2h12c2.21 0 4 1.79 4 4v12c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4V6c0-2.21 1.79-4 4-4z"></path>
                <path d="M6.68 17.8l8.108-11.58h2.532L9.21 17.8H6.68z"></path>
              </g>
              <defs>
                <clipPath id="3-clip0_2592_269">
                  <rect height="20" rx="1" width="20" x="2" y="2"></rect>
                </clipPath>
              </defs>
            </g>
          </svg>

          <h1 className="pr-2 xl:block hidden">Grok</h1>
        </div>

        <div className="hover:bg-[#181919] rounded-full p-3 w-fit flex items-center gap-4 cursor-pointer">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="#E7E9EA"
            height="30px"
          >
            <g>
              <path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"></path>
            </g>
          </svg>

          <h1 className="pr-2 xl:block hidden">Notifications</h1>
        </div>

        <div className="hover:bg-[#181919] rounded-full p-3 w-fit flex items-center gap-4 cursor-pointer">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="#E7E9EA"
            height="30px"
          >
            <g>
              <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path>
            </g>
          </svg>

          <h1 className="pr-2 xl:block hidden">Messages</h1>
        </div>

        <div className="hover:bg-[#181919] rounded-full p-3 w-fit flex items-center gap-4 cursor-pointer">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="#E7E9EA"
            height="30px"
          >
            <g>
              <path d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9c-.799 0-1.527-.279-2.116-.73-.836-.64-1.384-1.638-1.384-2.77 0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z"></path>
            </g>
          </svg>

          <h1 className="pr-2 xl:block hidden">Communities</h1>
        </div>
      </div>
    </div>
  );
}

export default NavMobail;
