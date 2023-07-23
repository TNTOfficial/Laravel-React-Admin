import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';;


const Management = () => {
    useEffect(() => {
        const ctx = document.getElementById('barChart');
    
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [
              {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }, []);
    return (
        <section className="management">
            <div className="rounded-4 bg-white p-4 mx-3">
                <div className="manage_title d-flex justify-content-between">
                    <div className="title">
                        <h6>Github Issues Summary</h6>
                    </div>
                    <div className="weekbuttons buttons d-flex">
                        <button className="rounded-pill fs-6_5 px-4 py-2 me-1">
                            <span>Last Week</span>
                        </button>
                        <button className="rounded-pill fs-6_5 bg-secondary-subtle px-4 py-2">
                            This Week
                        </button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div>
                            <canvas id="barChart"></canvas>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="manage_cards position-relative">
                            <span className="position-absolute top-0 start-0">
                                Overview
                            </span>

                            <div className="row g-4 pt-4">
                                <div className="col-lg-6">
                                    <div className="card card_issues rounded-4">
                                        <h2>214</h2>
                                        <h6>New issues</h6>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card card_closed rounded-4">
                                        <h2>214</h2>
                                        <h6>New issues</h6>
                                    </div>
                                </div>

                                <div className="col-lg-3">
                                    <div className="card card_solved rounded-4">
                                        <h3>3</h3>
                                        <h6 className="fs-7">Fixed</h6>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="card card_solved rounded-4">
                                        <h3>4</h3>
                                        <h6 className="fs-7">Fixed</h6>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="card card_solved rounded-4">
                                        <h3>8</h3>
                                        <h6 className="fs-7">Fixed</h6>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="card card_solved rounded-4">
                                        <h3>6</h3>
                                        <h6 className="fs-7">Fixed</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Management;
