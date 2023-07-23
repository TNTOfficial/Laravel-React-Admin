import FrontendLayout from '@/Layouts/FrontendLayoout';
import React from 'react';
const Index = () => {
    return (
        <>
            <section class="py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="shadow rounded">
                                <div class="image">
                                    <img src="./b4.jpg" alt="" class="w-100" />
                                </div>
                                <div class="bg-white p-4">
                                    <small class="fw-medium">IDEAS</small>
                                    <h6 class="py-2">Amet Dolor Bibendum Parturient Cursus</h6>
                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
                                        nec
                                        elit. Nullam quis risus eget urna mollis ornare vel. Nulla vitae elit libero, a pharetra
                                        augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere
                                        consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Fusce
                                        dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh. Cras mattis
                                        consectetur
                                        purus.</p>
                                    <hr />
                                    <div class="d-flex align-items-center">
                                        <div class="text-muted px-2 d-flex align-items-center">
                                            <i class="bi bi-calendar2-week pe-2"></i>
                                            <p class="m-0 ">5 Jul 2022</p>
                                        </div>
                                        <div>
                                            <i class="bi bi-facebook px-1 text-muted"></i>
                                            <i class="bi bi-instagram px-1 text-muted"></i>
                                        </div>
                                        <div class="text-muted ms-auto d-flex align-items-center">
                                            <i class="bi bi-heart pe-2 pt-1"></i>
                                            <p class="m-0">3</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="shadow rounded">
                                <div class="image">
                                    <img src="./b6.jpg" alt="" class="w-100" />
                                </div>
                                <div class="bg-white p-4">
                                    <small class="fw-medium">IDEAS</small>
                                    <h6 class="py-2">Amet Dolor Bibendum Parturient Cursus</h6>
                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
                                        nec
                                        elit. Nullam quis risus eget urna mollis ornare vel. Nulla vitae elit libero, a pharetra
                                        augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere
                                        consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Fusce
                                        dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh. Cras mattis
                                        consectetur
                                        purus.</p>
                                    <hr />
                                    <div class="d-flex align-items-center">
                                        <div class="text-muted px-2 d-flex align-items-center">
                                            <i class="bi bi-calendar2-week pe-2"></i>
                                            <p class="m-0 ">5 Jul 2022</p>
                                        </div>
                                        <div>
                                            <i class="bi bi-facebook px-1 text-muted"></i>
                                            <i class="bi bi-instagram px-1 text-muted"></i>
                                        </div>
                                        <div class="text-muted ms-auto d-flex align-items-center">
                                            <i class="bi bi-heart pe-2 pt-1"></i>
                                            <p class="m-0">3</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
Index.layout = (page) => <FrontendLayout>{page}</FrontendLayout>

export default Index;
