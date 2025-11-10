import { useRef, useState } from 'react';
import UploadIcon from '../../assets/images/icon-upload.svg';
import InfoIcon from '../../assets/images/icon-info.svg';
import './UploadArea.css';

export function UploadArea({ setImage }) {
  const [isBigger, setIsBigger] = useState(false);
  const [ isUploaded, setIsUploaded ] = useState(false);
  const inputElem = useRef(null);
  const uploadedImage = useRef(null);

  const uploadFile = () => {
    inputElem.current.click();
  }

  return (
    <div className="upload-image-container">
      <label htmlFor="input-upload" className="upload-avatar">Upload Avatar</label>
      <div
        className="upload-input-container"
        tabIndex="0"
      >
        <div className="upload-icon-container" onPointerUp={uploadFile}>
          <img ref={uploadedImage} src={UploadIcon} alt="upload icon" />
        </div>
        <input
          id="input-upload"
          type="file"
          accept=".jpg,.png"
          className="input-upload"
          ref={inputElem}
          onChange={(e) => {
            const imageSize = e.target.files[0].size;

            if (imageSize / 1024 <= 500) {
              const image = e.target.files[0];
              const reader = new FileReader();
              reader.onload = (event) => {
                uploadedImage.current.src = event.target.result;
                setImage(event.target.result);
              }
              reader.readAsDataURL(image);
              setIsBigger(false);
              setIsUploaded(true);

            } else {
              setIsBigger(true);
            }

          }}
        />
        <div className="drag-text">
          { !isUploaded ? 'Drag and drop or click to upload' : ''}
          { 
            isUploaded ?
            <>
              <button className="remove-btn btn" onPointerUp={() => {
                uploadedImage.current.src = UploadIcon;
                setIsUploaded(false);
              }} >Remove image</button>
              <button className="change-btn btn" onPointerUp={uploadFile}>Change image</button>
            </> :
            ''
          }
        </div>
      </div>
      <p className="info-text" style={{ color: isBigger ? 'hsla(7, 86%, 67%, 0.61)' : 'hsl(245, 15%, 58%)' }}>
        <img src={InfoIcon} alt="info icon" />
        Upload your photo &#40;JPG or PNG, max size: 500KB&#41;.
      </p>
    </div>
  );

}