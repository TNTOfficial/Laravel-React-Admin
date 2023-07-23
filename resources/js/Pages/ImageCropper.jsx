import React, { useRef, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useEffect } from 'react';
import Cropper from 'cropperjs';

const ImageCropper = (props) => {
    const [show, setShow] = useState(true);
    const imageRef = useRef();
    var cropper;
    useEffect(() => {

        cropper = new Cropper(imageRef.current, {
            aspectRatio: props.aspectRatio,
            viewMode: 3,
            preview: '.preview'
        });
    }, []);
    const cropImage = () => {
        cropper.getCroppedCanvas().toBlob((blob) => {
            var reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = function () {
                props.setCroppedImage(reader.result);
                handleClose();
            }
        });
    }
    const handleClose = () => setShow(false);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <div className="col-md-12">
                        <img
                            id="imageId"
                            className="w-100"
                            src={props.image}
                            ref={imageRef}
                            alt="preview"
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={cropImage}>
                        Crop
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ImageCropper
