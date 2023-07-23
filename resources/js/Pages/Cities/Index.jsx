import AdminLayout from '@/Layouts/adminLayout';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { Link, router } from '@inertiajs/react';
import React, { useState } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import SearchBar from '../Searchbar';

const Cities = ({ cities }) => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="container-fluid basic_table">
            <div className="row">
                <div className="col-sm-12">
                    <div className="card border-0 p-3 my-2">
                        <div className="row g-3 d-flex align-items-center">
                            <div className="col-lg-3 col-md-12">
                                <h3 className="m-0 text-center text-lg-start">Cities</h3>
                            </div>
                            <div className="col-lg-6 col-md-12 card-body p-0">
                                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                            </div>
                            <div className="col-lg-2 col-md-12">
                                <div className="d-flex align-items-center justify-content-end">
                                    <button className="btn btn-success d-flex align-items-center border-0 me-2">
                                        <BsPlusCircleFill className="fs-5" />
                                        <Link
                                            href={route('cities.create')}
                                            className="ms-2 text-white text-decoration-none"
                                            type="button"
                                        >
                                            Add
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="table-responsive text-center">
                            <table className="table">
                                <thead>
                                    <tr className="border-bottom-primary">
                                        <th scope="col">S.No.</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody id="myTable">
                                    {cities
                                        .filter((city) =>
                                            city.name.toLowerCase().includes(searchQuery.toLowerCase())
                                        )
                                        .map((city, index) => (
                                            <tr key={city.id} className="border-bottom-secondary">
                                                <th scope="row">{index + 1}</th>
                                                <td>{city.name}</td>
                                                <td>
                                                    <span
                                                        className={`badge ${city.status ? 'text-success' : 'text-danger'
                                                            }`}
                                                    >
                                                        {city.status ? 'Active' : 'Inactive'}
                                                    </span>
                                                </td>
                                                <td>
                                                    <ul className="action d-flex align-items-center list-unstyled justify-content-center m-0">
                                                        <li className="edit">
                                                            <a href={route('cities.edit', city.id)}>
                                                                <FontAwesomeIcon
                                                                    icon={faPenToSquare}
                                                                    className="fs-4 me-2 text-primary"
                                                                />
                                                            </a>
                                                        </li>
                                                        <li className="delete">
                                                            <Link as="button" method="delete">
                                                                <FontAwesomeIcon icon={faTrashCan} className="fs-4 text-danger"/>
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

Cities.layout = (page) => <AdminLayout>{page}</AdminLayout>;

export default Cities;
