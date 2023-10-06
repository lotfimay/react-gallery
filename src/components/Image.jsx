import React from "react";

const Image = ({ id, src, title, views, downloads, likes, tags }) => {
  return (
    <div className="border rounded-lg drop-shadow-lg">
      <div className="">
        <img src={src} alt="" />
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
              return (
                <p key={tag} className="py-1 px-2 bg-blue-200 rounded-lg">
                  #{tag}
                </p>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Image;
