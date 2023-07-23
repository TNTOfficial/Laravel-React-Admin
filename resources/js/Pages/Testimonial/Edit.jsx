import React, { useState, useRef } from "react";
import { Link, useForm } from "@inertiajs/react";
import AdminLayout from "@/Layouts/adminLayout";
import ImageCropper from "../ImageCropper";
import "cropperjs/dist/cropper.css";
import { Editor } from '@tinymce/tinymce-react';


const TestimonialEdit = ({ item }) => {
    const [show, setShow] = useState(false);
    const [image, setImage] = useState(null);
    const previewImageRef = useRef(null);
    const croppedImageRef = useRef(null);
    const inputRef = useRef(null);
    const { data, setData, errors, put } = useForm({
        name: item.name,
        designation: item.designation,
        message: item.message,
        croppedImage: "",
        status: 1,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        data.croppedImage = croppedImageRef.current.value;
        put(route("testimonials.update", item.id), data, { forceFormData: true, });
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
                                                    Name
                                                </label>
                                                <input
                                                    className="form-control"
                                                    name="Name"
                                                    id="name"
                                                    type="text"
                                                    errors={errors.name}
                                                    value={data.name}
                                                    onChange={(e) =>
                                                        setData(
                                                            "name",
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
                                                    Designation
                                                </label>
                                                <input
                                                    className="form-control"
                                                    name="designation"
                                                    id="designation"
                                                    type="text"
                                                    errors={errors.designation}
                                                    value={data.designation}
                                                    onChange={(e) =>
                                                        setData(
                                                            "designation",
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
                                                <label className="pb-2 fw-medium">Message</label>
                                                <Editor
                                                    apiKey="4i0p55sb1m4fhrp0y07qkm9ejyei5jjzvjdniyownfx6t2lu"
                                                    value={data.message}
                                                    onEditorChange={(content) => setData('message', content)}
                                                    init={{
                                                        height: 300,
                                                        menubar: false,
                                                        plugins: [
                                                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                                            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                                                        ],
                                                        toolbar: 'undo redo | blocks | ' +
                                                            'bold italic forecolor | alignleft aligncenter ' +
                                                            'alignright alignjustify | bullist numlist outdent indent | ' +
                                                            'removeformat | help',
                                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="mb-3">
                                                <label className="pb-2 fw-medium">
                                                    Upload Testimonial file
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
                                                href={route('testimonials.index')}
                                            >
                                                Cancel
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-12 mb-2">
                                <img ref={previewImageRef} className="preview-img" src="https://www.riobeauty.co.uk/images/product_image_not_found.gif" alt="preview image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {show && (
                <ImageCropper image={image} setCroppedImage={setCroppedImage} aspectRatio={1}></ImageCropper>
            )}
        </div>
    );
};

TestimonialEdit.layout = (Page) => <AdminLayout>{Page}</AdminLayout>;

export default TestimonialEdit;
