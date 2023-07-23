import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const Schedule = () => {
    useEffect(() => {
        const ctx = document.getElementById('areaChart');

        new Chart(ctx, {
            type: 'polarArea',
            data: {
                labels: ['M', 'T', 'W', 'T'],
                datasets: [
                    {
                        data: [15, 22, 38, 27],
                        backgroundColor: ['#c1d7ef92', '#b5c7da92', '#a9b6c692', '#9ba7b292'],
                        borderWidth: 3,
                        borderColor: ['#c1d7ef', '#b5c7da', '#a9b6c6', '#9ba7b2'],
                        pointStyle: 'rectRot',
                        pointRadius: 5,
                        pointBorderColor: 'rgb(0, 0, 0)',
                    },
                ],
            },
            options: {
                scales: {
                    x: {
                        ticks: {
                            display: false,
                        },
                    },
                },
            },
        });
    }, []);
    return (
        <section className="schedule py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="schedule-card bg-white overflow-hidden rounded-4">
                            <div className="text d-flex px-3 pt-3 justify-content-between">
                                <h6>Schedule</h6>
                                <div className="buttons">
                                    <button className="rounded-pill fs-6_5 bg-secondary-subtle px-4 py-2">
                                        Today
                                    </button>
                                    <button className="rounded-pill fs-6_5 px-4 py-2 me-1">
                                        <span>Tomorrow</span>
                                    </button>
                                </div>
                            </div>

                            <div className="cart_polararea mb-5">
                                <div className="mx-auto" style={{ height: '330px', width: '340px' }}>
                                    <canvas id="areaChart" className="areaChart"></canvas>
                                </div>
                            </div>

                            <div className="task_rank">
                                <div className="row g-0">
                                    <div className="col-6">
                                        <div className="text-center py-4" style={{ background: '#f8fafc' }}>
                                            <h2 className="fw-bold">524</h2>
                                            <span className="text-black">New task</span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="text-center py-4" style={{ background: '#f8fafc' }}>
                                            <h2 className="fw-bold">119</h2>
                                            <span className="text-black">Complete task</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="schedule-card bg-white rounded-4 p-3">
                            <div className="text d-flex justify-content-between">
                                <h6>Schedule</h6>
                                <div className="buttons">
                                    <button className="rounded-pill fs-6_5 bg-secondary-subtle px-4 py-2">
                                        Today
                                    </button>
                                    <button className="rounded-pill fs-6_5 px-4 py-2 me-1">
                                        <span>Tomorrow</span>
                                    </button>
                                </div>
                            </div>
                            <ul className="px-4 list-unstyled">
                                <li className="border-bottom py-2">
                                    <div className="text-start">
                                        <h6 className="fs-6_5">Group Meeting</h6>
                                        <div className="time_local">
                                            <span className="pe-2">
                                                <a className="text-decoration-none fs-7" href="#"><i className="bi bi-clock-fill fs-6_5"></i> in 32 minutes</a>
                                            </span>
                                            <span className="ps-2">
                                                <a className="fs-7 text-decoration-none" href="#"><i className="bi bi-geo-alt-fill fs-6_5"></i> Conference room 1B</a>
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                <li className="border-bottom py-2">
                                    <div className="text-start">
                                        <h6 className="fs-6_5">Group Meeting</h6>
                                        <div className="time_local">
                                            <span className="pe-2">
                                                <a className="text-decoration-none fs-7" href="#"><i className="bi bi-clock-fill fs-6_5"></i> in 32 minutes</a>
                                            </span>
                                            <span className="ps-2">
                                                <a className="fs-7 text-decoration-none" href="#"><i className="bi bi-geo-alt-fill fs-6_5"></i> Conference room 1B</a>
                                            </span>
                                        </div>
                                    </div>
                                </li>   <li className="border-bottom py-2">
                                    <div className="text-start">
                                        <h6 className="fs-6_5">Group Meeting</h6>
                                        <div className="time_local">
                                            <span className="pe-2">
                                                <a className="text-decoration-none fs-7" href="#"><i className="bi bi-clock-fill fs-6_5"></i> in 32 minutes</a>
                                            </span>
                                            <span className="ps-2">
                                                <a className="fs-7 text-decoration-none" href="#"><i className="bi bi-geo-alt-fill fs-6_5"></i> Conference room 1B</a>
                                            </span>
                                        </div>
                                    </div>
                                </li>   <li className="border-bottom py-2">
                                    <div className="text-start">
                                        <h6 className="fs-6_5">Group Meeting</h6>
                                        <div className="time_local">
                                            <span className="pe-2">
                                                <a className="text-decoration-none fs-7" href="#"><i className="bi bi-clock-fill fs-6_5"></i> in 32 minutes</a>
                                            </span>
                                            <span className="ps-2">
                                                <a className="fs-7 text-decoration-none" href="#"><i className="bi bi-geo-alt-fill fs-6_5"></i> Conference room 1B</a>
                                            </span>
                                        </div>
                                    </div>
                                </li>   <li className="border-bottom py-2">
                                    <div className="text-start">
                                        <h6 className="fs-6_5">Group Meeting</h6>
                                        <div className="time_local">
                                            <span className="pe-2">
                                                <a className="text-decoration-none fs-7" href="#"><i className="bi bi-clock-fill fs-6_5"></i> in 32 minutes</a>
                                            </span>
                                            <span className="ps-2">
                                                <a className="fs-7 text-decoration-none" href="#"><i className="bi bi-geo-alt-fill fs-6_5"></i> Conference room 1B</a>
                                            </span>
                                        </div>
                                    </div>
                                </li>   <li className="border-bottom py-2">
                                    <div className="text-start">
                                        <h6 className="fs-6_5">Group Meeting</h6>
                                        <div className="time_local">
                                            <span className="pe-2">
                                                <a className="text-decoration-none fs-7" href="#"><i className="bi bi-clock-fill fs-6_5"></i> in 32 minutes</a>
                                            </span>
                                            <span className="ps-2">
                                                <a className="fs-7 text-decoration-none" href="#"><i className="bi bi-geo-alt-fill fs-6_5"></i> Conference room 1B</a>
                                            </span>
                                        </div>
                                    </div>
                                </li>   <li className="border-bottom py-2">
                                    <div className="text-start">
                                        <h6 className="fs-6_5">Group Meeting</h6>
                                        <div className="time_local">
                                            <span className="pe-2">
                                                <a className="text-decoration-none fs-7" href="#"><i className="bi bi-clock-fill fs-6_5"></i> in 32 minutes</a>
                                            </span>
                                            <span className="ps-2">
                                                <a className="fs-7 text-decoration-none" href="#"><i className="bi bi-geo-alt-fill fs-6_5"></i> Conference room 1B</a>
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Schedule;
