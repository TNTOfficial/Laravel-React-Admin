import React from 'react';
import secondbanner from '../../../images/secondbanner.jpg'

const About = () => {
    return (
        <section className="about py-5 my-5" id="about">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-6 col-lg-6 col-md-8 col-11">
                        <div className="text">
                            <h5 className="text-white bg-primary fw-bold shadow px-3 py-3 mb-5 rounded-3 fs-4">
                                About TopNTech
                            </h5>
                            <h2 className="display-5 mb-5 border-0 border-start border-primary ps-3">
                                TopnTech Solutions
                            </h2>
                            <p className="fs-bold fs-3 text-dark">
                                <i>
                                    At TopnTech, we are driven by a passion for technology and a commitment to providing innovative solutions that empower businesses to thrive in the digital age. With a team of highly skilled professionals and cutting-edge technologies at our disposal, we offer a comprehensive range of IT services tailored to meet the diverse needs of our clients.
                                </i>
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-8 col-11">
                        <div className="image rounded-4 shadow">
                            <img
                                src={secondbanner}
                                className="w-100 rounded-4"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
