import AdminLayout from '@/Layouts/adminLayout';
import { router } from '@inertiajs/react';
import React, { useState } from 'react';



const CreateRole = ({ permissions }) => {
    const [name, setName] = useState('');
    const [selectedPermissions, setSelectedPermissions] = useState([]);


    const handleCheckboxChange = (val) => {

        if (!selectedPermissions.includes(val)) {
            setSelectedPermissions([...selectedPermissions, val]);
        } else {

            setSelectedPermissions(selectedPermissions.filter((permission) => permission != val));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(route('roles.store'), {
            name,
            permissions: selectedPermissions,
        });
    };

    return (
        <div className="content-wrapper">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="fw-medium" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className="fw-medium pb-3" htmlFor="permissions">
                                    Permissions
                                </label>
                                <div className="checkbox justify-content-start d-flex flex-wrap">
                                    <div className="row">
                                        {permissions.map((permission) => (
                                            <div className="col-lg-4 col-md-6" key={permission.id}>
                                                <label className="checkbox-inline mx-2 fw-medium fs-6 py-1">
                                                    <input
                                                        type="checkbox"
                                                        name="permissions"
                                                        value={permission.id}
                                                        checked={selectedPermissions.includes(permission.id)}
                                                        onChange={() => handleCheckboxChange(permission.id)}
                                                    />
                                                    {permission.name}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary m-2">
                                Create
                            </button>
                            <a
                                href={route('roles.index')}
                                className="btn btn-danger"
                                type="button"
                            >
                                Back
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

CreateRole.layout = (Page) => <AdminLayout>{Page}</AdminLayout>;
export default CreateRole;

