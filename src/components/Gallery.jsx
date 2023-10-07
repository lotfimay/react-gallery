import React, { useState } from "react";

import Image from "./Image";
import { useEffect } from "react";
const Gallery = ({ searchText }) => {
  const [images, setImages] = useState([]);

  const getImages = (hits) => {
    const data = [];

    hits.forEach((hit) => {
      data.push({
        id: hit.id,
        src: hit.largeImageURL,
        title: `photo by @${hit.user}`,
        views: hit.views,
        likes: hit.likes,
        downloads: hit.downloads,
        tags: hit.tags.split(", "),
      });
    });

    return data;
  };

  useEffect(() => {
    const searchImages = async () => {
      let value = searchText.trim();
      if (value !== "") {
        value = value.replace(" ", "+");
        const response = await fetch(
          `https://pixabay.com/api/?key=39881990-e090a96ffc517459212bc3254&q=${value}`
        );
        const result = await response.json();
        const data = getImages(result.hits);
        setImages(data);
      }
    };
    searchImages();
  }, [searchText]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        "https://pixabay.com/api/?key=39881990-e090a96ffc517459212bc3254"
      );
      const result = await response.json();
      const data = getImages(result.hits);
      setImages(data);
    };
    fetchImages();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-y-4 gap-x-4">
      {images.map((image) => {
        return (
          <Image
            key={image.id}
            src={image.src}
            title={image.title}
            likes={image.likes}
            views={image.views}
            downloads={image.downloads}
            tags={image.tags}
          />
        );
      })}
    </div>
  );
};

export default Gallery;
