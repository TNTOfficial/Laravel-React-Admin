import React from "react";
import { Link, useForm } from "@inertiajs/react";
import AdminLayout from "@/Layouts/adminLayout";


const CityCreate = ({ city }) => {
    const { data, setData, errors, put } = useForm({
        name: city.name,
        status: 1,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        put(route("cities.update", city.id), data, { forceFormData: true, });
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="form theme-form">
                                <form name="createForm" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col">
                                            <div className="mb-3">
                                                <label className="pb-2 fw-medium">
                                                    Name
                                                </label>
                                                <input
                                                    className="form-control"
                                                    name="name"
                                                    id="name"
                                                    type="text"
                                                    errors={errors.name}
                                                    value={data.name}
                                                    onChange={(e) =>
                                                        setData(
                                                            "name",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <div className="mb-3">
                                                <label className="switch">
                                                    <input
                                                        type="checkbox"
                                                        name="status"
                                                        checked={
                                                            data.status === 1
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                "status",
                                                                e.target.checked
                                                                    ? 1
                                                                    : 0
                                                            )
                                                        }
                                                    />
                                                    <span className="switch-state"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col d-flex justify-content-start align-items-start">
                                            <div>
                                                <button
                                                    type="submit"
                                                    className="btn btn-success me-3"
                                                >
                                                    Add
                                                </button>
                                            </div>
                                            <Link
                                                className="btn btn-danger me-3"
                                                href={route('state.cities', city.id)}
                                            >
                                                Cancel
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

CityCreate.layout = (Page) => <AdminLayout>{Page}</AdminLayout>;

export default CityCreate;