import axios from "axios";
import React, { useEffect, useState } from "react";
import Alirt from "./Alirt";

function TwitteCard(props) {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [characterToDelete, setCharacterToDelete] = useState(null);
  const [twitts, setTwitts] = useState([]);
  const [likeCount, setLikeCount] = useState(props.like);
  const [liked, setLiked] = useState("text-[#71767b]");

  const userData = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios
      .get("https://670239e1bd7c8c1ccd3e3b91.mockapi.io/twitte")
      .then(function (response) {
        setTwitts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const twitte = twitts.find((data) => data.id === props.id);

  function delet(id) {
    setCharacterToDelete(id);
    setDialogOpen(true);
  }

  const handleConfirmDelete = async () => {
    if (props.user === userData.user) {
      try {
        await axios.delete(
          `https://670239e1bd7c8c1ccd3e3b91.mockapi.io/twitte/${characterToDelete}`
        );
        setDialogOpen(false);
      } catch (error) {
        console.error("Error deleting tweet:", error);
      }
    } else {
      console.log("You do not have permission to delete this tweet.");
    }
  };

  const like = async (id) => {
    if (!twitte.liked.includes(userData.user)) {
      try {
        setLiked("text-[#f91880]");
        setLikeCount(likeCount + 1);

        const updatedLiked = [...twitte.liked, userData.user];

        await axios.put(
          `https://670239e1bd7c8c1ccd3e3b91.mockapi.io/twitte/${id}`,
          {
            like: likeCount + 1,
            liked: updatedLiked,
          }
        );

        console.log(twitte);
      } catch (error) {
        console.error("Error liking the post:", error);
      }
    } else {
      const updatedLiked = twitte.liked.filter(
        (user) => user !== userData.user
      );
      await axios.put(
        `https://670239e1bd7c8c1ccd3e3b91.mockapi.io/twitte/${id}`,
        {
          like: likeCount - 1,
          liked: updatedLiked,
        }
      );
    }
  };

  return (
    <div>
      <Alirt
        isOpen={isDialogOpen}
        onClose={() => setDialogOpen(false)}
        onConfirm={handleConfirmDelete}
      />

      <div className="border-y border-[#333639] p-4 ">
        <div className="flex gap-2">
          <div className="">
            <div className="avatar cursor-pointer">
              <div className="w-10 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </div>

          <div className="md:w-full w-[90%]">
            <div className="flex items-center justify-between max-w-[100%]">
              <div className="flex items-center gap-2 cursor-pointer">
                <h1 className="text-white">{props.user}</h1>
                <p className="text-[#71767b] text-sm">@{props.user}</p>
              </div>

              <div className="cursor-pointer dropdown dropdown-left">
                <div className="" tabIndex={0} role="button">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    fill="#71767b"
                    height="20px"
                  >
                    <g>
                      <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                    </g>
                  </svg>
                </div>

                <ul
                  tabIndex={0}
                  className={
                    props.user === userData.user
                      ? "menu text-[#f4212e] menu-sm dropdown-content bg-black box_shadow rounded-box z-[1] my-3 w-56 px-0 py-3 ml-8"
                      : "hidden"
                  }
                >
                  <li
                    className="hover:bg-[#16181C] px-2"
                    onClick={() => {
                      delet(props.id);
                    }}
                  >
                    <div className="cursor-pointer font-semibold text-lg">
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        fill="#f4212e"
                        height="20px"
                      >
                        <g>
                          <path d="M16 6V4.5C16 3.12 14.88 2 13.5 2h-3C9.11 2 8 3.12 8 4.5V6H3v2h1.06l.81 11.21C4.98 20.78 6.28 22 7.86 22h8.27c1.58 0 2.88-1.22 3-2.79L19.93 8H21V6h-5zm-6-1.5c0-.28.22-.5.5-.5h3c.27 0 .5.22.5.5V6h-4V4.5zm7.13 14.57c-.04.52-.47.93-1 .93H7.86c-.53 0-.96-.41-1-.93L6.07 8h11.85l-.79 11.07zM9 17v-6h2v6H9zm4 0v-6h2v6h-2z"></path>
                        </g>
                      </svg>
                      <span>Delete</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-[#e7e9ea] break-words max-w-[90%]">
              <p>{props.twitte}</p>
            </div>

            <div className="w-[90%] mt-4">
              {/* <img
                src="https://i.pinimg.com/236x/63/ee/c0/63eec086a5932081dd75f32e9f1c42c8.jpg"
                className="w-full max-h-[390px] object-cover rounded-2xl"
              /> */}
            </div>

            <div className="flex justify-between w-[90%] mt-4">
              <div className="cursor-pointer hover:text-[#1D9BF0] text-[#71767b] ">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  height="20px"
                  className="hover:fill-[#1D9BF0] rounded-full fill-[#71767b]"
                >
                  <g>
                    <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                  </g>
                </svg>
              </div>

              <div className="cursor-pointer hover:text-[#1D9BF0] text-[#71767b] ">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  height="20px"
                  className="hover:fill-[#1D9BF0] rounded-full fill-[#71767b]"
                >
                  <g>
                    <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                  </g>
                </svg>
              </div>

              <div
                className={`cursor-pointer hover:text-[#f91880] ${liked} flex gap-2 items-center`}
                onClick={() => {
                  like(props.id);
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  height="20px"
                  fill="currentColor"
                >
                  <g>
                    <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                  </g>
                </svg>

                <p className="text-xs">{props.like}</p>
              </div>

              <div className="cursor-pointer hover:text-[#1D9BF0] text-[#71767b] ">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  height="20px"
                  className="hover:fill-[#1D9BF0] rounded-full fill-[#71767b]"
                >
                  <g>
                    <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                  </g>
                </svg>
              </div>

              <div className="cursor-pointer hover:text-[#1D9BF0] text-[#71767b] flex gap-4">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  height="20px"
                  className="hover:fill-[#1D9BF0] rounded-full fill-[#71767b]"
                >
                  <g>
                    <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path>
                  </g>
                </svg>

                <div className="cursor-pointer hover:text-[#1D9BF0] text-[#71767b] ">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    height="20px"
                    className="hover:fill-[#1D9BF0] rounded-full fill-[#71767b]"
                  >
                    <g>
                      <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TwitteCard;
