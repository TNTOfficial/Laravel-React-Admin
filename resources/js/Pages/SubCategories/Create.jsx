import React, { useState, useEffect } from 'react';
import { Link, useForm, usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/adminLayout';

const SubCategoriesCreate = ({ category, onClose }) => {
    const { flash } = usePage().props;
    const { data, setData, post, errors } = useForm({
        name: '',
        category_id: category.id, 
        status: 1,
    });
    const [showFlash, setShowFlash] = useState(true);

    useEffect(() => {
        if (flash.message) {
            setShowFlash(true);
            const timer = setTimeout(() => {
                setShowFlash(false);
            }, 5000); 

            return () => clearTimeout(timer);
        }
    }, [flash]);

    const handleSubmit = (event) => {
        event.preventDefault();
        post(route('sub_categories.store'), {
            onSuccess: () => {
                onClose();
            },
        });
    };

    return (
        <div>
            <h1>Create Sub Category</h1>
            {showFlash && flash.message && <div className="alert">{flash.message}</div>}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        className="form-control"
                    />
                    {errors.name && <div className="text-danger">{errors.name}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="category_id">Parent Category</label>
                    <select
                        id="category_id"
                        value={data.category_id}
                        onChange={(e) => setData('category_id', e.target.value)}
                        className="form-control"
                    >
                        <option value={category.id}>{category.name}</option>
                    </select>
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
                                        setData('status', e.target.checked ? 1 : 0)
                                    }
                                />
                                <span className="switch-state"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">
                    Create
                </button>
                <Link href={route('categories.index')} className="btn btn-danger">
                    Cancel
                </Link>
            </form>
        </div>
    );
};

export default SubCategoriesCreate;

SubCategoriesCreate.layout = (Page) => <AdminLayout>{Page}</AdminLayout>;
