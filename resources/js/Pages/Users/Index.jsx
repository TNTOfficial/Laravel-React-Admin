import React from 'react';
import AdminLayout from '@/Layouts/adminLayout';

import { CiMenuKebab } from 'react-icons/ci';
import { Link } from '@inertiajs/react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const Index = ({ users }) => {
    const downloadPDF = () => {
        const doc = new jsPDF();
        const table = document.querySelector('.admin_table');

        const headers = [...table.querySelectorAll('.table_header th')]
            .filter((header) => header.innerText !== 'Actions')
            .map((header) => header.innerText);

        const rows = users.map((user, index) => [index + 1, user.name, user.email]);

        doc.autoTable({
            head: [headers],
            body: rows,
            styles: {
                cellPadding: 5,
                fontSize: 10,
                valign: 'middle',
                halign: 'center',
            },
            headerStyles: {
                fillColor: [52, 73, 94],
                textColor: 255,
                fontSize: 12,
                fontStyle: 'bold',
            },
            alternateRowStyles: {
                fillColor: [240, 240, 240],
            },
            startY: 20,
        });

        doc.save('user_details.pdf');
    };

    return (
        <div className="container-fluid">
            <div className="responsive-table">
                <table className="admin_table table">
                    <thead className="table_header">
                        <tr>
                            <th>Sr. No</th>
                            <th>
                                <div className="d-flex align-items-end justify-content-start">
                                    Name
                                    <span className="d-inline-flex flex-column up_down_icon">
                                        <i className="fa-solid fa-caret-up"></i>
                                        <i className="fa-solid fa-caret-down"></i>
                                    </span>
                                </div>
                            </th>
                            <th>
                                <div className="d-flex align-items-end justify-content-start">
                                    Email
                                    <span className="d-inline-flex flex-column up_down_icon">
                                        <i className="fa-solid fa-caret-up"></i>
                                        <i className="fa-solid fa-caret-down"></i>
                                    </span>
                                </div>
                            </th>
                            <th>
                                <div className="d-flex align-items-end justify-content-start">
                                    Actions
                                    <span className="d-inline-flex flex-column up_down_icon">
                                        <i className="fa-solid fa-caret-up"></i>
                                        <i className="fa-solid fa-caret-down"></i>
                                    </span>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="table_body">
                        <tr className='text-center text-md-end'>
                            <td colSpan="4" style={{paddingTop:"25px"}}>
                                <button className="btn btn-primary mb-3" onClick={downloadPDF}>
                                    Download PDF
                                </button>
                            </td>
                        </tr>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <td data-label="Sr. No">{index + 1}</td>
                                <td data-label="name">{user.name}</td>
                                <td data-label="email">{user.email}</td>
                                <td data-label="Membership" style={{paddingRight:"17%"}}>
                                    <div className="btn-group t_dropdown">
                                        <CiMenuKebab
                                            className="text-dark"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        />
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a href="customer-id.html" className="dropdown-item">
                                                    View Detail
                                                </a>
                                            </li>
                                            <li class="edit">
                                                <a className="dropdown-item" href={route('users.roles', user.id)}>
                                                    Roles
                                                </a>
                                            </li>
                                            <li>
                                                <Link
                                                    as="button"
                                                    href={route('users.destroy', user.id)}
                                                    className="dropdown-item"
                                                    method="delete"
                                                >
                                                    Delete
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Index.layout = (page) => <AdminLayout>{page}</AdminLayout>;

export default Index;
