import AdminLayout from '@/Layouts/adminLayout';
import { Link, router } from '@inertiajs/react';
import React, { useState } from 'react';

const EditRoleForm = ({ role, permissions }) => {
    const [name, setName] = useState(role.name);
    const [selectedPermissions, setSelectedPermissions] = useState(role.permissions);

    const handleCheckboxChange = (val) => {

        if (!selectedPermissions.some(permission => permission.id == val.id)) {
            setSelectedPermissions([...selectedPermissions, val]);
        } else {

            setSelectedPermissions(selectedPermissions.filter((permission) => permission.id != val.id));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(selectedPermissions);
        router.put(route('roles.update', role.id), {
            name,
            permissions: selectedPermissions.map((per)=> per.id),
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
                                                        checked={selectedPermissions.some(per => permission.id == per.id)}
                                                        onChange={() => handleCheckboxChange(permission)}

                                                    />
                                                    {permission.name}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary m-2">
                                Update
                            </button>
                            <Link href={route('roles.index')} className="btn btn-danger" type="button">
                                Back
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

EditRoleForm.layout = (Page) => <AdminLayout>{Page}</AdminLayout>;
export default EditRoleForm;
