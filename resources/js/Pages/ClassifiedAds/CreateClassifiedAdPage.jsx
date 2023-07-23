import { useForm } from '@inertiajs/react';
import React, { useState } from 'react';
import CarFormComponent from './CarFormComponent';
import ElectronicsFormComponent from './ElectronicsFormComponent';
import AdminLayout from '@/Layouts/adminLayout';

const CreateClassifiedAdPage = ({ categories }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const { data, setData, post, errors } = useForm({
        // Common fields
        // ...
        // Specific fields for each category
        // ...
    });

    const handleSubmit = () => {
        // Handle form submission
        // ...
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const renderFormComponent = () => {
        switch (selectedCategory) {
            case 'cars':
                return <CarFormComponent handleSubmit={handleSubmit} />;
            case 'electronics':
                return <ElectronicsFormComponent handleSubmit={handleSubmit} />;
            default:
                return null;
        }
    };

    return (
        <div className='container py-3 text-center'>
            <h1 className="py-4">Create Classified Ad</h1>
            <div className="container">
                <label className='fw-bold me-2 fs-5'>Select Category : </label>
                <select value={selectedCategory} onChange={handleCategoryChange} className='border w-50 rounded-3'>
                    <option className='py-3' value="" hidden disabled selected>Select a category</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            {renderFormComponent()}
        </div>
    );
};

CreateClassifiedAdPage.layout = (Page) => <AdminLayout>{Page}</AdminLayout>;
export default CreateClassifiedAdPage;
