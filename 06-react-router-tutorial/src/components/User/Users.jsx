import React from "react";
import { useParams } from "react-router-dom";

function user() {
  const { id } = useParams();
  return (
    <h1 className="text-3xl text-red-500 font-semibold text-center">
      User : {id}
    </h1>
  );
}

export default user;
