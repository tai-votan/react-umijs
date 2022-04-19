import React from "react";
import { Link } from "umi";

const NotFoundPage = () => {
  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center">
      <div>
        <img
          alt="404 image"
          className="block w-2/5 mx-auto"
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1579118927273/KkrJ9t34H.png?auto=compress&amp;w=1000"
        />
        <div className="text-center">
          <p className="text-5xl leading-tight font-black text-gray-700">404</p>
          <h2 className="text-2xl font-bold text-black mb-4">
            We can’t find the page you’re looking for!
          </h2>

          <Link
            to="/"
            className="no-underline text-blue-500 font-bold rounded-full border border-solid border-blue-500 px-4 py-2 text-base inline-block"
          >
            Take me home
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NotFoundPage;
