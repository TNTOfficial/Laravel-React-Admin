import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import AdminLayout from '@/Layouts/adminLayout';
import { Link, router, usePage } from '@inertiajs/react';
import { BsTrashFill } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';



const RolesIndex = () => {
    const { roles } = usePage().props;

    const handleDelete = (event, id) => {
        event.preventDefault();

        confirmAlert({
            title: 'Are you sure?',
            message: "You won't be able to revert this!",
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        router.delete(route('roles.destroy', id));
                    },
                },
                {
                    label: 'No',
                    onClick: () => { },
                },
            ],
        });
    };

    return (
        <div className="content-wrapper">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex">
                            <h4 className="card-title m-0 fw-bold fs-4">Roles</h4>
                            <Link href={route('roles.create')} className="btn btn-primary mb-3 ms-auto">
                                Create Role
                            </Link>
                        </div>
                        <table className="table table-striped">
                            <thead>
                                <tr className="text-center">
                                    <th className="fw-bold fs-5 py-2">Name</th>
                                    <th className="fw-bold fs-5 py-2">Permissions</th>
                                    <th className="fw-bold fs-5 py-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {roles.map((role) => (
                                    <tr className="text-center" key={role.id}>
                                        <td>{role.name}</td>
                                        <td>
                                            {role.permissions.length > 0 ? (
                                                <Dropdown>
                                                    <Dropdown.Toggle className="border-0" variant="" id={`dropdown-${role.id}`}>
                                                        Permissions
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        {role.permissions.map((permission) => (
                                                            <Dropdown.Item key={permission.id}>{permission.name}</Dropdown.Item>
                                                        ))}
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            ) : (
                                                <span>No permissions</span>
                                            )}
                                        </td>
                                        <td>
                                            <div className="d-flex justify-content-center">
                                                <Link href={route('roles.edit', role.id)} className="fs-4 me-2 text-primary">
                                                    <FaEdit />
                                                </Link>

                                                <Link
                                                    as="button"
                                                    method="delete"

                                                    onClick={(event) => handleDelete(event, role.id)}
                                                    className="fs-4 text-danger"
                                                >
                                                    <BsTrashFill />
                                                </Link>

                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

RolesIndex.layout = (Page) => <AdminLayout>{Page}</AdminLayout>;

export default RolesIndex;
