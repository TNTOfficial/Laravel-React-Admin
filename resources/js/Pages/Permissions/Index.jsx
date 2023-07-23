import React from 'react';
import Swal from 'sweetalert2';
import AdminLayout from '@/Layouts/adminLayout';
import { FaEdit } from "react-icons/fa"
import { BsTrashFill } from "react-icons/bs"
import { Link } from '@inertiajs/react';

const PermissionList = ({ permissions }) => {
    const handleDelete = (event, permissionId) => {
        event.preventDefault();

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                Inertia.delete(route('permissions.destroy', permissionId));
            }
        });
    };

    return (
        <div className="container-fluid basic_table">
            <div className="row">
                <div className="col-sm-12">
                    <div className="card border-0">
                        <div className="card-header row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <h3 className="m-0 text-center text-lg-start">Permissions</h3>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="text-center text-lg-end">
                                    <Link href={route('permissions.create')} className="btn btn-success" type="button">
                                        <i className="fa-solid fa-plus"></i> Add
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive text-center">
                            <table className="table">
                                <thead>
                                    <tr className="border-bottom-primary">
                                        <th>S.No.</th>
                                        <th>Name</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {permissions.map((item, index) => (
                                        <tr className="border-bottom-secondary" key={item.id}>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>
                                                <ul className="action d-flex align-items-center list-unstyled m-0 justify-content-center">
                                                    <li className="edit">
                                                        <Link href={route('permissions.edit', item.id)}>
                                                            <FaEdit className='text-primary fs-4 me-2' />
                                                        </Link>
                                                    </li>
                                                    <form
                                                        action={route('permissions.destroy', item.id)}
                                                        onSubmit={(e) => handleDelete(e, item.id)}
                                                        method="POST"
                                                    >
                                                        <input type="hidden" name="_method" value="DELETE" />
                                                        <li className="delete d-flex align-items-center">
                                                        
                                                            <button type="submit" className="border-0 bg-transparent">
                                                                <BsTrashFill className="text-danger fs-4" />

                                                            </button>
                                                        </li>
                                                    </form>
                                                </ul>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

PermissionList.layout = (Page) => <AdminLayout>{Page}</AdminLayout>;

export default PermissionList;
