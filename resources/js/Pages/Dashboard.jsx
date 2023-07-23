import AdminLayout from '@/Layouts/adminLayout';
import Management from '@/Layouts/adminLayout/management';
import Schedule from '@/Layouts/adminLayout/schedule';

export default function Dashboard({ auth }) {
    return (
        <AdminLayout>
            <section className="py-5 widgets">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="card p-4 rounded rounded-4">
                                <div className="card-title d-flex justify-content-between">
                                    <h4>Summary</h4>
                                    <div className="dropdown">
                                        <button
                                            className="dropdown-toggle"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <i className="bi bi-three-dots-vertical"></i>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li>
                                                <a className="dropdown-item" href="#">Another action</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <span className="fw-bold mb-0" style={{ color: "#3b82f6" }}>21</span>
                                    <h6 className="mt-0" style={{ color: "#3b82f6" }}>Due Tasks</h6>

                                    <h5 className="fw-light fs-7">Completed: <span>13</span></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card p-4 rounded rounded-4">
                                <div className="card-title d-flex justify-content-between">
                                    <h4>Summary</h4>
                                    <div className="dropdown">
                                        <button
                                            className="dropdown-toggle"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <i className="bi bi-three-dots-vertical"></i>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li>
                                                <a className="dropdown-item" href="#">Another action</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <span className="fw-bold mb-0" style={{ color: "#ef4444" }}>17</span>
                                    <h6 className="mt-0" style={{ color: "#ef4444" }}>Tasks</h6>

                                    <h5 className="fw-light fs-7">Completed: <span>9</span></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card p-4 rounded rounded-4">
                                <div className="card-title d-flex justify-content-between">
                                    <h4>Summary</h4>
                                    <div className="dropdown">
                                        <button
                                            className="dropdown-toggle"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <i className="bi bi-three-dots-vertical"></i>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li>
                                                <a className="dropdown-item" href="#">Another action</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <span className="fw-bold mb-0" style={{ color: "#f59e0b" }}>24</span>
                                    <h6 className="mt-0" style={{ color: "#f59e0b" }}>Open</h6>

                                    <h5 className="fw-light fs-7">Completed: <span>19</span></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card p-4 rounded rounded-4">
                                <div className="card-title d-flex justify-content-between">
                                    <h4>Summary</h4>
                                    <div className="dropdown">
                                        <button
                                            className="dropdown-toggle"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <i className="bi bi-three-dots-vertical"></i>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li>
                                                <a className="dropdown-item" href="#">Another action</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <span className="fw-bold mb-0" style={{ color: "#22c55e" }}>38</span>
                                    <h6 className="mt-0" style={{ color: "#22c55e" }}>Proposals</h6>

                                    <h5 className="fw-light fs-7">Completed: <span>16</span></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Management section */}

            <Management />
            {/* Schedule section */}
            <Schedule />
        </AdminLayout>
    );
}
