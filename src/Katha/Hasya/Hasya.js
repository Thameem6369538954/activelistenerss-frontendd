import React, { useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const Hasyaa = () => {
  const [image, setImage] = useState(null);
  const cropperRef = useRef(null);

  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const cropImage = () => {
    const cropper = cropperRef.current.cropper;
    const croppedImage = cropper.getCroppedCanvas().toDataURL();
    console.log(croppedImage); // You can send this to your server or display it in the UI
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={onChange} />
      {image && (
        <Cropper
          src={image}
          style={{ height: 400, width: "100%" }}
          initialAspectRatio={1}
          aspectRatio={1}
          guides={false}
          ref={cropperRef}
        />
      )}
      <button onClick={cropImage}>Crop</button>
    </div>
  );
};

export default Hasyaa;
