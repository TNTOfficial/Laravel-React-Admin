import React from 'react'
import favicon from '../../../images/favicon.png'
const Footer = () => {
    return (
        <>
            <footer className="bg-light pt-5 mt-5">
                <div className="container pb-100">
                    <div className="row">
                        <div className="col-lg-3">
                            <a className="navbar-brand d-flex align-items-center" href="#">
                                <img src={favicon} width="66" height="66" alt="" />
                                <span className="text-black fw-bold fs-4"> TOPNTECH </span></a
                            >

                            <p className='fs-6 text-dark'>
                                To be a leading provider of transformative IT solutions that drive business growth and foster technological advancement.
                            </p>
                        </div>
                        <div className="col-lg-3">
                            <h6 className="text-lg-start text-center fw-bold">Products</h6>
                            <ul className="list-unstyled">
                                <li className="text-lg-start text-center mb-3">
                                    <a href="https://svelte.dev/" target='_blank' className="text-decoration-none fs-14 text-black">
                                        Svelte
                                    </a>
                                </li>
                                <li className="text-lg-start text-center mb-3">
                                    <a href="https://vuejs.org/" target='_blank' className="text-decoration-none fs-14 text-black">
                                        VUE
                                    </a>
                                </li>
                                <li className="text-lg-start text-center mb-3">
                                    <a href="https://angularjs.org/" target='_blank' className="text-decoration-none fs-14 text-black">
                                        Angular
                                    </a>
                                </li>
                                <li className="text-lg-start text-center mb-3">
                                    <a href="https://react.dev/" target='_blank' className="text-decoration-none fs-14 text-black">
                                        React
                                    </a>
                                </li>
                                <li className="text-lg-start text-center mb-3">
                                    <a href="https://laravel.com/" target='_blank' className="text-decoration-none fs-14 text-black">
                                        Laravel
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h6 className="text-lg-start text-center fw-bold">Usefull Links</h6>
                            <ul className="list-unstyled">
                                <li className="text-lg-start text-center mb-3">
                                    <a href="#" className="text-decoration-none fs-14 text-black">
                                        Home
                                    </a>
                                </li>
                                <li className="text-lg-start text-center mb-3">
                                    <a href="#about" className="text-decoration-none fs-14 text-black">
                                        About
                                    </a>
                                </li>

                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h6 className="text-lg-start text-center fw-bold">Contact Us</h6>
                            <ul className="list-unstyled">
                                <li className="text-lg-start text-center mb-3">
                                    <a className="text-decoration-none fs-14 text-black">
                                        <i className="fa-solid fa-house fs-18 text-dark"></i> Ambala City,
                                        Vikas Vihar, India
                                    </a>
                                </li>
                                <li className="text-lg-start text-center mb-3">
                                    <a className="text-decoration-none fs-14 text-black">
                                        <i className="fa-regular fa-envelope fs-18 text-dark"></i>
                                        topntech1@gmail.com
                                    </a>
                                </li>
                                <li className="text-lg-start text-center mb-3">
                                    <a className="text-decoration-none fs-14 text-black">
                                        <i className="fa-solid fa-phone fs-18 text-dark"></i> +91
                                        78891-31140, 98781-09281
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="m-0" />
                <div className="text-center p-4 bg-secondary-subtle">
                    © 2023 Copyright:
                    <a className="text-primary fw-bold" href="http://topntech.com/"
                    >TopNTech.com</a
                    >
                </div>
            </footer>
        </>
    )
}

export default Footer