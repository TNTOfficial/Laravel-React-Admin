import React, { useState } from 'react';
import { Link, router, usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/adminLayout';
import SearchBar from '../SearchBar';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { BsPlusCircleFill } from 'react-icons/bs';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, Button } from 'react-bootstrap';
import SubCategoriesCreate from './Create';
import SubCategoriesEdit from './Edit';

const Index = ({ subCategories, category }) => {
    const { flash } = usePage().props;
    const [searchQuery, setSearchQuery] = useState('');
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);

    const handleDelete = (event, id) => {
        event.preventDefault();

        confirmAlert({
            title: 'Are you sure?',
            message: "You won't be able to revert this!",
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        router.delete(route('sub_categories.destroy', { id }));
                    },
                },
                {
                    label: 'No',
                    onClick: () => { },
                },
            ],
        });
    };

    const handleAddButtonClick = () => {
        setIsCreateModalOpen(true);
    };

    const handleEditButtonClick = (subCategory) => {
        setSelectedSubCategory(subCategory);
        setIsEditModalOpen(true);
    };

    const handleCloseCreateModal = () => {
        setIsCreateModalOpen(false);
    };

    const handleCloseEditModal = () => {
        setIsEditModalOpen(false);
    };

    const handleSubCategoryCreated = () => {
        handleCloseCreateModal();
    };

    const handleSubCategoryUpdated = () => {
        handleCloseEditModal();
    };

    return (
        <div className="container-fluid basic_table">
            {flash.message && <div className="alert">{flash.message}</div>}
            <div className="row">
                <div className="col-sm-12">
                    <div className="card border-0 p-3 my-2">
                        <div className="row g-3 d-flex align-items-center">
                            <div className="col-lg-3 col-md-12">
                                <h5 className="m-0 text-center text-lg-start">
                                    {category.name}-: Sub Categories
                                </h5>
                            </div>
                            <div className="col-lg-6 col-md-12 card-body p-0">
                                <SearchBar
                                    searchQuery={searchQuery}
                                    setSearchQuery={setSearchQuery}
                                />
                            </div>
                            <div className="col-lg-2 col-md-12">
                                <div className="d-flex align-items-center justify-content-end">
                                    <button
                                        className="btn btn-success d-flex align-items-center border-0 me-2"
                                        onClick={handleAddButtonClick}
                                    >
                                        <BsPlusCircleFill className="fs-5" />
                                        <span className="ms-2">Add</span>
                                    </button>
                                    <Link as='button' className='btn btn-primary' href={route('categories.index')}>
                                        <span>Back</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="table-responsive text-center">
                            <table className="table">
                                {/* Table header */}
                                <thead>
                                    <tr className="border-bottom-primary">
                                        <th scope="col">S.No.</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Slug</th>
                                        <th scope="col">Parent Category</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                {/* Table body */}
                                <tbody id="myTable">
                                    {subCategories
                                        .filter((cat) =>
                                            cat.name.toLowerCase().includes(searchQuery.toLowerCase())
                                        )
                                        .map((cat, index) => (
                                            <tr key={cat.id} className="border-bottom-secondary">
                                                <th scope="row">{index + 1}</th>
                                                <td>{cat.name}</td>
                                                <td>{cat.slug}</td>
                                                <td>{cat.category.name}</td>
                                                <td>
                                                    <span
                                                        className={`badge ${cat.status ? 'text-success' : 'text-danger'
                                                            }`}
                                                    >
                                                        {cat.status ? 'Active' : 'Inactive'}
                                                    </span>
                                                </td>
                                                <td>
                                                    <ul className="action d-flex align-items-center list-unstyled justify-content-center m-0">
                                                        <li className="edit">
                                                            <button
                                                                onClick={() => handleEditButtonClick(cat)}
                                                            >
                                                                <FontAwesomeIcon
                                                                    icon={faPenToSquare}
                                                                    className="fa-lg text-danger"
                                                                />
                                                            </button>
                                                        </li>
                                                        <li className="delete">
                                                            <Link
                                                                as="button"
                                                                method="delete"
                                                                onClick={(event) => handleDelete(event, cat.id)}
                                                            >
                                                                <FontAwesomeIcon icon={faTrashCan} />
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

            {/* Create Subcategory Modal */}
            <Modal show={isCreateModalOpen} onHide={handleCloseCreateModal}>
                <Modal.Body>
                    <SubCategoriesCreate
                        category={category}
                        onClose={handleSubCategoryCreated}
                    />
                </Modal.Body>
            </Modal>

            {/* Edit Subcategory Modal */}
            {
                selectedSubCategory && (
                    <Modal show={isEditModalOpen} onHide={handleCloseEditModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Subcategory</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <SubCategoriesEdit
                                subCategory={selectedSubCategory}
                                onClose={handleSubCategoryUpdated}
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseEditModal}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                )
            }
        </div >
    );
};

export default Index;

Index.layout = (Page) => <AdminLayout>{Page}</AdminLayout>;
