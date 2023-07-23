import React from 'react';
import BaseFormComponent from './BaseFormComponent';

const ElectronicsFormComponent = ({ handleSubmit }) => {
    const handleElectronicsFormSubmit = () => {
        // Handle electronics form submission
        // ...
        handleSubmit();
    };

    return (
        <BaseFormComponent handleSubmit={handleElectronicsFormSubmit}>
            {/* Render electronics-specific fields */}
            <div>
                <label>Name:</label>
                <input type="text" name="name" />
            </div>
            <div>
                <label>Image:</label>
                <input type="file" name="image" />
            </div>
            <div>
                <label>Year:</label>
                <input type="number" name="year" />
            </div>
            <div>
                <label>Price:</label>
                <input type="number" name="price" />
            </div>
            <div>
                <label>City:</label>
                <input type="text" name="city" />
            </div>
            <div>
                <label>State:</label>
                <input type="text" name="state" />
            </div>
            {/* ... */}
        </BaseFormComponent>
    );
};

export default ElectronicsFormComponent;
