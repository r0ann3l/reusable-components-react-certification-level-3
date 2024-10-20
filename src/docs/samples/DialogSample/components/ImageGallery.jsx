import { useState } from "react";
import Image from "./Image";

const IMAGE_IDS = [10, 11, 12, 13, 14];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(IMAGE_IDS[0]);

  return (
    <>
      <div id="selected-image-container">
        <Image id={selectedImage} height={300} />
      </div>
      <div id="images-container">
        {
          IMAGE_IDS.map(id =>
            <Image
              id={id}
              key={id}
              onClick={() => setSelectedImage(id)}
              className="image"
            />
          )
        }
      </div>
    </>
  );
}

export default ImageGallery;