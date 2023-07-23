import React, { useState } from 'react';
import { Link, useForm, usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/adminLayout';

const CategoriesCreate = ({ onClose }) => {
    const { flash } = usePage().props;
    const { data, setData, post, errors } = useForm({
        name: '',
        status: 1,
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        post(route('categories.store'), {
            onSuccess: () => {
                onClose();
            },
        });
    };


    return (
        <div className='container-fluid'>

            <h1>Create Category</h1>
            {flash.message && (
                <div className="alert">{flash.message}</div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className='py-2 fs-5' htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        className="form-control"
                    />
                    {errors.name && <div className="text-danger">{errors.name}</div>}
                </div>
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    name="status"
                                    checked={data.status === 1}
                                    onChange={(e) =>
                                        setData(
                                            "status",
                                            e.target.checked ? 1 : 0
                                        )
                                    }
                                />
                                <span className="switch-state"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary m-2">
                    Create
                </button>
                <Link href={route('categories.index')} className="btn btn-danger">
                    Cancel
                </Link>
            </form>
        </div>
    );
};

export default CategoriesCreate;

CategoriesCreate.layout = (Page) => <AdminLayout>{Page}</AdminLayout>;
