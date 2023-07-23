import React, { useState, useRef } from 'react';
import { useForm } from '@inertiajs/react';
import profileEditImg from '../../../images/profile2.jpg';
import "cropperjs/dist/cropper.css";
import ImageCropper from "../ImageCropper";

const UserProfileEdit = ({ user, userProfile }) => {

    const [show, setShow] = useState(false);
    const [image, setImage] = useState(null);
    const previewImageRef = useRef(null);
    const croppedImageRef = useRef(null);
    const inputRef = useRef(null);
    const { data, setData, patch } = useForm({
        name: user.name,
        phone: userProfile?.phone || '',
        email: user.email,
        croppedImage: userProfile?.image || '',
        address: userProfile?.address || ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        data.croppedImage = croppedImageRef.current.value;
        patch(route("user_profile.update"), data, { forceFormData: true });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "phone" && value.length > 10) {
            return;
          }
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        let reader = new FileReader();
        reader.onload = (e) => {
            setImage(e.target.result);
            setShow(true);
        };
        reader.readAsDataURL(inputRef.current.files[0]);
    };

    const setCroppedImage = (data) => {
        previewImageRef.current.setAttribute("src", data);
        croppedImageRef.current.setAttribute("value", data);
    };

    return (
        <>
            <div className="row flex-wrap-reverse">
                <div className="col-md-6">
                    <h3 className="pro_heading">Edit Profile</h3>
                    <form onSubmit={handleSubmit} className="modal_form">
                        <div className="form-group">
                            <label htmlFor="">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={data.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={data.email}
                                onChange={handleInputChange}
                                disabled
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Phone Number</label>
                            <input
                                type="number"
                                className="form-control"
                                name="phone"
                                value={data.phone || ''}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                name="address"
                                value={data.address || ''}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label className="pb-2 fw-medium">
                                        Upload Profile Image
                                    </label>
                                    <input
                                        ref={inputRef}
                                        className="form-control"
                                        id="image-file"
                                        name="image"
                                        type="file"
                                        aria-label="file example"
                                        onChange={handleImageChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <input
                            type="hidden"
                            ref={croppedImageRef}
                            name="croppedImage"
                        />
                        <div className="col-md-2 mb-2">
                            <img
                                ref={previewImageRef}
                                className=""
                                src="https://www.riobeauty.co.uk/images/product_image_not_found.gif"
                                alt="preview image"
                            />
                        </div>
                        <button type="submit" className="update_btn">
                            Update
                        </button>
                    </form>
                    {show && (
                        <ImageCropper
                            image={image}
                            setCroppedImage={setCroppedImage}
                            aspectRatio={1}
                        />
                    )}
                </div>
                <div className="col-md-6">
                    <img src={profileEditImg} className="w-100" alt="" />
                </div>
            </div>
        </>
    );
};

export default UserProfileEdit;
