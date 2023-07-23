import AdminLayout from '@/Layouts/adminLayout';
import { Link, router } from '@inertiajs/react';
import { React, useState } from 'react';
import SearchBar from '../SearchBar';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { BsPlusCircleFill } from 'react-icons/bs';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFolderOpen } from "react-icons/fa"
import { Modal, Button, ModalHeader, ModalBody } from 'react-bootstrap';
import CategoriesCreate from './Create';
import CategoryEdit from './Edit';

const Index = ({ categories }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedCategory, setIsSelectedCategory] = useState(null);


    const handleDelete = (event, id) => {
        event.preventDefault();

        confirmAlert({
            title: 'Are you sure?',
            message: "You won't be able to revert this!",
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        router.delete(route('categories.destroy', { id }));
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

    const handleAddButtonClick = () => {
        setIsCreateModalOpen(true);
    }

    const handleCloseCreateModal = () => {
        setIsCreateModalOpen(false);
    }

    const handleEditButtonClick = (Category) => {
        setIsSelectedCategory(Category);
        setIsEditModalOpen(true);
    }
    const handleCloseEditModal = () => {
        setIsEditModalOpen(false);
    }
    return (
        <div className="container-fluid basic_table">
            <div className="row">
                <div className="col-sm-12">
                    <div className="card border-0 p-3 my-2">
                        <div className="row g-3 d-flex align-items-center">
                            <div className="col-lg-3 col-md-12">
                                <h3 className="m-0 text-center text-lg-start">Categories</h3>
                            </div>
                            <div className="col-lg-6 col-md-12 card-body p-0">
                                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                            </div>
                            <div className="col-lg-2 col-md-12">
                                <div className="d-flex align-items-center justify-content-end">
                                    <button
                                        className="btn btn-success d-flex align-items-center border-0 me-2"
                                        onClick={handleAddButtonClick}
                                    >
                                        <BsPlusCircleFill className="fs-5" />
                                        <span className="ms-2 text-white">Add</span>
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
                                        <th scope="col">Slug</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="myTable">
                                    {categories
                                        .filter((category) => category.name.toLowerCase().includes(searchQuery.toLowerCase()))
                                        .map((category, index) => (
                                            <tr key={category.id} className="border-bottom-secondary">
                                                <th scope="row">{index + 1}</th>
                                                <td>{category.name}</td>
                                                <td>{category.slug}</td>
                                                {/* <img className="img-60 me-2" src={`/storage/${category.image}`} alt="profile" /> */}

                                                <td>
                                                    <span className={`badge ${category.status ? 'text-success' : 'text-danger'}`}>
                                                        {category.status ? 'Active' : 'Inactive'}
                                                    </span>
                                                </td>
                                                <td>
                                                    <ul className="action d-flex align-items-center list-unstyled justify-content-center m-0">
                                                        <li className="view">
                                                            <Link href={route('sub_categories.index', category.id)}>
                                                                <FaFolderOpen className='fs-3 me-2 text-success' />
                                                            </Link>
                                                        </li>
                                                        <li className="edit">
                                                            <button
                                                                onClick={() => handleEditButtonClick(category)}
                                                            >
                                                                <FontAwesomeIcon
                                                                    icon={faPenToSquare}
                                                                    className="fs-4 me-2 text-primary"
                                                                />
                                                            </button>
                                                        </li>
                                                        <li className="delete">
                                                            <Link as="button" method="delete" onClick={(event) => handleDelete(event, category.id)}>
                                                                <FontAwesomeIcon icon={faTrashCan} className='fs-4 text-danger' />
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
            <Modal show={isCreateModalOpen} onHide={handleCloseCreateModal}>
                <ModalBody>
                    <CategoriesCreate onClose={handleCloseCreateModal} />
                </ModalBody>
            </Modal>

            <Modal show={isEditModalOpen} onHide={handleCloseEditModal}>
                <ModalBody>
                    <CategoryEdit onClose={handleCloseEditModal} category={selectedCategory} />
                </ModalBody>
            </Modal>
        </div >
    );
};



export default Index;

Index.layout = (Page) => <AdminLayout>{Page}</AdminLayout>;
