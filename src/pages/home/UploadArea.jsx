import { useRef } from 'react';
import UploadIcon from '../../assets/images/icon-upload.svg';
import InfoIcon from '../../assets/images/icon-info.svg';
import './UploadArea.css';

export function UploadArea() {

  const inputElem = useRef(null);

  const uploadFile = () => {
    inputElem.current.click();
    // console.log(event);
  }

  return (
    <div className="upload-image-container">
      <label htmlFor="input-upload" className="upload-avatar">Upload Avatar</label>
      <div 
        className="upload-input-container" 
        onPointerUp={uploadFile}
        // onDragEnter={(event) => console.log(event)}
        onDrop={(event) => console.log(event.src)}
        tabIndex="0"
      >
        <div className="upload-icon-container">
          <img src={UploadIcon} alt="upload icon"/>
        </div>
        <input 
          id="input-upload"
          type="file"
          required
          accept=".jpg,.png"
          className="input-upload"
          ref={inputElem}
        />
        <p className="drag-text">Drag and drop or click to upload</p>
      </div>
      <p className="info-text">
        <img src={InfoIcon} alt="info icon" />
        Upload your photo &#40;JPG or PNG, max size: 500KB&#41;.
      </p>
    </div>
  );

}