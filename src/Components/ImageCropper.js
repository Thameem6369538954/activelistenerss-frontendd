import React, { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import Modal from "react-responsive-modal";

const ImageCropper = ({ open, onClose, src, onCropComplete }) => {
  const [crop, setCrop] = useState({ aspect: 1 / 1 }); // Aspect ratio 1:1

  const handleCropChange = (newCrop) => {
    setCrop(newCrop);
  };

  const handleCropComplete = () => {
    onCropComplete(crop);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} center>
      <ReactCrop
        src={src}
        crop={crop}
        onChange={handleCropChange}
        ruleOfThirds
      />
      <button onClick={handleCropComplete}>Crop Image</button>
    </Modal>
  );
};

export default ImageCropper;
