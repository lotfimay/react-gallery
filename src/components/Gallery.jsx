import React from "react";

import Image from "./Image";

const Gallery = () => {
  return (
    <div className="grid grid-cols-3 gap-y-4 gap-x-4">
      <Image
        src="shuut"
        title="Cute cat picture taken by @alfred"
        downloads={120}
        likes={2045}
        views={7600}
        tags={["animals", "cute", "nature"]}
      />
      <Image
        src="shuut"
        title="Cute cat picture taken by @alfred"
        downloads={120}
        likes={2045}
        views={7600}
        tags={["animals", "cute", "nature"]}
      />
      <Image
        src="shuut"
        title="Cute cat picture taken by @alfred"
        downloads={120}
        likes={2045}
        views={7600}
        tags={["animals", "cute", "nature"]}
      />
      <Image
        src="shuut"
        title="Cute cat picture taken by @alfred"
        downloads={120}
        likes={2045}
        views={7600}
        tags={["animals", "cute", "nature"]}
      />
      <Image
        src="shuut"
        title="Cute cat picture taken by @alfred"
        downloads={120}
        likes={2045}
        views={7600}
        tags={["animals", "cute", "nature"]}
      />
      <Image
        src="shuut"
        title="Cute cat picture taken by @alfred"
        downloads={120}
        likes={2045}
        views={7600}
        tags={["animals", "cute", "nature"]}
      />
    </div>
  );
};

export default Gallery;
