import React from 'react';

const BaseFormComponent = ({ handleSubmit }) => {
    const handleSubmitForm = (e) => {
        e.preventDefault();
        handleSubmit();
    };

    return (
        <form onSubmit={handleSubmitForm}>
            {/* Render common fields */}
            {/* ... */}
        </form>
    );
};

export default BaseFormComponent;
