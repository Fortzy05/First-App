import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const images = props.image.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div>{images}</div>;
};

export default ImageList;
