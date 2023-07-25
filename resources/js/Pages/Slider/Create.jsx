import React, { useState, useRef } from "react";
import { Link, useForm } from "@inertiajs/react";
import AdminLayout from "@/Layouts/adminLayout";
import "cropperjs/dist/cropper.css";
import ImageCropper from "../ImageCropper";

const SlideCreate = () => {
    const [show, setShow] = useState(false);
    const [image, setImage] = useState(null);
    const previewImageRef = useRef(null);
    const croppedImageRef = useRef(null);
    const inputRef = useRef(null);
    const { data, setData, errors, post } = useForm({
        title: "",
        sub_title: "",
        croppedImage: "",
        status: 1,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        data.croppedImage = croppedImageRef.current.value;
        post(route("slides.store"), data, { forceFormData: true, });
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
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="form theme-form">
                                <form name="createForm" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col">
                                            <div className="mb-3">
                                                <label className="pb-2 fw-medium">
                                                    Title
                                                </label>
                                                <input
                                                    className="form-control"
                                                    name="title"
                                                    id="title"
                                                    type="text"
                                                    errors={errors.title}
                                                    value={data.title}
                                                    onChange={(e) =>
                                                        setData(
                                                            "title",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="mb-3">
                                                <label className="pb-2 fw-medium">
                                                    Sub Title
                                                </label>
                                                <input
                                                    className="form-control"
                                                    name="sub_title"
                                                    id="sub_title"
                                                    type="text"
                                                    errors={errors.sub_title}
                                                    value={data.sub_title}
                                                    onChange={(e) =>
                                                        setData(
                                                            "sub_title",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="mb-3">
                                                <label className="pb-2 fw-medium">
                                                    Upload Slide file
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
                                    <div className="row">
                                        <div className="col">
                                            <div className="mb-3">
                                                <label className="switch">
                                                    <input
                                                        type="checkbox"
                                                        name="status"
                                                        checked={
                                                            data.status === 1
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                "status",
                                                                e.target.checked
                                                                    ? 1
                                                                    : 0
                                                            )
                                                        }
                                                    />
                                                    <span className="switch-state"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <input
                                        type="hidden"
                                        ref={croppedImageRef}
                                        name="croppedImage"
                                    />
                                    <div className="col-md-2 mb-2">
                                        <img ref={previewImageRef} className="" src="https://www.riobeauty.co.uk/images/product_image_not_found.gif" alt="preview image" />
                                    </div>
                                    <div className="row">
                                        <div className="col d-flex justify-content-start align-items-start">
                                            <div>
                                                <button
                                                    type="submit"
                                                    className="btn btn-success me-3"
                                                >
                                                    Add
                                                </button>
                                            </div>
                                            <Link
                                                className="btn btn-danger me-3"
                                                href={route('slides.index')}
                                            >
                                                Cancel
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {show && (
                <ImageCropper image={image} setCroppedImage={setCroppedImage} aspectRatio={16/9}></ImageCropper>
            )}
        </div>
    );
};

SlideCreate.layout = (Page) => <AdminLayout>{Page}</AdminLayout>;

export default SlideCreate;