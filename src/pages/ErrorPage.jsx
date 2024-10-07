import { Link, useRouteError } from "react-router-dom";
import Navbar from "../Components/Navbar";
import NavMobail from "../Components/NavMobail";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div className="bg-black min-h-screen">
        <div className="container mx-auto">
          <div className="grid grid-cols-4">
            <Navbar />
            <NavMobail />

            <div className="xl:col-span-3 col-span-2 text-center">
              <h1 className="text-[#71767b] text-sm mt-24 mb-8">
                Hmm...this page doesn’t exist. Try searching for something else.
              </h1>

              <Link
                to="/"
                className="bg-[#1D9BF0] hover:bg-[#1A8CD8] text-white rounded-full py-2 px-4 font-bold text-base"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
