import AdminLayout from '@/Layouts/adminLayout';
import { Link, router } from '@inertiajs/react';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { BsPlusCircleFill, BsArrowDownShort } from "react-icons/bs"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useState } from 'react';
import SearchBar from '../SearchBar';

const Testimonial = ({ items }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleDelete = (event, id) => {
        event.preventDefault();

        confirmAlert({
            title: 'Are you sure?',
            message: "You won't be able to revert this!",
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        router.delete(route('testimonials.destroy', { id }));
                    }
                },
                {
                    label: 'No',
                    onClick: () => {

                    }
                }
            ]
        });
    };

    return (
        <div className="container-fluid basic_table">
            <div className="row">
                <div className="col-sm-12">
                    <div className="card border-0 p-3 my-2">
                        <div className="row g-3 bg-transparent d-flex align-items-center">
                            <div className="col-lg-3 col-md-12">
                                <h3 className="m-0 text-center text-lg-start">Testimonials</h3>
                            </div>
                            <div className="col-lg-6 col-md-12 card-body p-0">
                                <div className="text-center text-xl-end">
                                    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-12">
                                <div className="d-flex align-items-center justify-content-end">
                                    <button className='btn btn-success d-flex align-items-center border-0 me-2'>
                                        <BsPlusCircleFill className='fs-5' />
                                        <Link href={route('testimonials.create')} className="ms-2 text-white text-decoration-none" type="button">Add</Link>
                                    </button>
                                    <a href={route('testimonials.sort')} className="btn btn-primary d-flex align-items-center border-0 " type="button"><BsArrowDownShort className='fs-4' />Sort</a>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="table-responsive text-center">
                            <table className="table">
                                <thead>
                                    <tr className="border-bottom-primary">
                                        <th scope="col">S.No.</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Designation</th>
                                        <th scope="col">Message</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Order</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="myTable">
                                    {items.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase())).map((item, index) => (
                                        <tr key={item.id} className="border-bottom-secondary">
                                            <th scope="row">{index + 1}</th>
                                            <td className='d-flex align-items-center justify-content-center'><img className="img-60 object-fit-cover rounded" style={{ height: '100px', width: '100px' }} src={`/storage/${item.img}`} alt="profile" /></td>
                                            <td>{item.name}</td>
                                            <td>{item.designation}</td>
                                            <td>
                                                <OverlayTrigger
                                                    placement="right"
                                                    overlay={<Tooltip id={`tooltip-${item.id}`}>{item.message}</Tooltip>}
                                                >
                                                    <span>{item.shortMsg}</span>
                                                </OverlayTrigger>
                                            </td>

                                            <td>
                                                <span className={`badge ${item.status ? 'badge-success' : 'badge-danger'}`}>
                                                    {item.status ? 'Active' : 'Inactive'}
                                                </span>
                                            </td>
                                            <td>{item.order}</td>
                                            <td>
                                                <ul className="action d-flex align-items-center list-unstyled justify-content-center m-0">
                                                    <li className="edit">
                                                        <Link href={route('testimonials.edit', item.id)}>
                                                            <FontAwesomeIcon icon={faPenToSquare} className="fs-4 text-primary me-2" />
                                                        </Link>
                                                    </li>
                                                    <li className="delete">

                                                        <Link
                                                            as='button'
                                                            method="delete"
                                                            onClick={(event) => handleDelete(event, item.id)}
                                                        >
                                                            <FontAwesomeIcon icon={faTrashCan} className=' fs-4 text-danger ' />
                                                        </Link>
                                                    </li>
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

Testimonial.layout = page => <AdminLayout>{page}</AdminLayout>;

export default Testimonial;