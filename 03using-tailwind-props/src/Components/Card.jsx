// import React from "react";

// eslint-disable-next-line react/prop-types
export default function Card({ cardHead, btnText = "Visit Me" }) {
  return (
    <div className="w-[300px] rounded-md border m-auto mb-4">
      <img
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4 bg-white">
        <h1 className="text-lg text-black font-semibold">{cardHead}</h1>
        <p className="mt-3 text-sm text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <button
          type="button"
          className="mt-4 rounded-md bg-black px-2.5 py-1 text-[16px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black w-3/4"
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}
