import React from "react";

const Image = ({ src, title, views, downloads, likes, tags }) => {
  console.log(tags);
  return (
    <div>
      <div className="w[480px] h-[300px]">
        <div className="bg-blue-500 w-full h-full"></div>
      </div>
      <div className="p-2">
        <div className="">
          <h1 className="font-semibold text-purple-600 text-xl">{title}</h1>
        </div>
        <div>
          <p>
            <span className="font-bold">Views</span> : {views}
          </p>
          <p>
            {" "}
            <span className="font-bold">Downloads</span> : {downloads}
          </p>
          <p>
            <span className="font-bold">Likes</span> : {likes}
          </p>
        </div>
        {tags && (
          <div className="mt-8 flex items-center justify-start gap-2 font-mono">
            {tags.map((tag) => {
              return <p className="py-1 px-2 bg-blue-200 rounded-lg">#{tag}</p>;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Image;
