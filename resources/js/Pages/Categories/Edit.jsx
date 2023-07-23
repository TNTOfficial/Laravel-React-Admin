import React, { useState } from 'react';
import { Link, useForm, usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/adminLayout';

const CategoryEdit = ({ category, onClose }) => {
    const { flash } = usePage().props;
    const { data, setData, put, errors } = useForm({
        name: category.name,
        status: 1,
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        put(route('categories.update', category.id), {
            onSuccess: () => {
                onClose();
            },
        });
    };

    return (
        <div>
            <h1>Edit Category</h1>
            {flash.message && (
                <div className="alert">{flash.message}</div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" className='fw-bold py-2'>Name</label>
                    <input
                        id="name"
                        type="text"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        className="form-control"
                    />
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
                    Update
                </button>
                <Link href={route('categories.index')} className="btn btn-danger">
                    Cancel
                </Link>
            </form>
        </div>
    );
};

CategoryEdit.layout = (Page) => <AdminLayout>{Page}</AdminLayout>;

export default CategoryEdit;
