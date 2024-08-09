import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const gitData = useLoaderData();
  //   const [gitData, setGitData] = useState({});
  //   useEffect(() => {
  //     fetch(`https://api.github.com/users/ChiragJain7300`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setGitData(data);
  //       });
  //   }, []);
  return (
    <>
      <div className="w-screen text-center bg-green-400">
        <h2 className="text-3xl font-semibold text-purple-500 uppercase">
          Github followers : {gitData.followers}
        </h2>
        <img src={`${gitData.avatar_url}`} width="250px" />
      </div>
    </>
  );
}

export default Github;

export const gitInfoLoader = async () => {
  const gitData = await fetch(`https://api.github.com/users/ChiragJain7300`);
  return gitData.json();
};
