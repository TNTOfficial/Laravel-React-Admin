import React from 'react';
import { usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/adminLayout';
import UserProfileEdit from './UserProfileEdit';
import UserPasswordChange from './UserPasswordChange';
import show from '../../../images/profile1.png'


const UserProfileShow = ({ user, userProfile }) => {

  const { auth } = usePage().props


  return (
    <section className='container mt-5'>
      <div className="row gy-3">
        <div className="col-xxl-3 col-md-3">
          <div className="profile_head">
            <div
              className="profile_img card rounded-0 border-0 bg-dark text-white"
            >
              <img
                className="card-img "
                id="output02" src={`/storage/images/${userProfile?.img}`}
                alt="Title"
              />
              <div className="card-img-overlay bottom-0" style={{ top: 'auto' }}>
                <h4 className="card-title">
                  <i className="fa-regular fa-circle-user"></i>{auth.user.name}
                </h4>
                <p className="card-text mailto:text-white">{auth.user.email}</p>
              </div>
            </div>
            <div
              className="nav flex-column nav-pills p-3 profile_tabs"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                className="nav-link active"
                id="v-pills-01-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-01"
                type="button"
                role="tab"
                aria-controls="v-pills-01"
                aria-selected="true"
              >
                <span><i className="bi bi-person-fill"></i></span> Profile
              </button>
              <button
                className="nav-link"
                id="v-pills-02-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-02"
                type="button"
                role="tab"
                aria-controls="v-pills-02"
                aria-selected="false"
                tabIndex="-1"
              >
                <span><i className="bi bi-pencil-square"></i></span> Edit
                Profile
              </button>
              <button
                className="nav-link"
                id="v-pills-03-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-03"
                type="button"
                role="tab"
                aria-controls="v-pills-03"
                aria-selected="false"
                tabIndex="-1"
              >
                <span><i className="bi bi-lock-fill"></i></span> Change Password
              </button>
            </div>
          </div>
        </div>
        <div className="col-xxl-9 col-md-9">
          <div className="tab-content porfile_body" id="v-pills-tabContent">
            <div
              className="tab-pane fade active bg-white show"
              id="v-pills-01"
              role="tabpanel"
              aria-labelledby="v-pills-01-tab"
              tabIndex="0"
            >
              <div className="row g-3">
                <h3 className="pro_heading">Profile</h3>
                <div className="col-lg-6 mt-5">
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0 fw-bold text-dark fs-5">Name</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{userProfile?.name}</p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0 fw-bold text-dark fs-5">Email</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{userProfile?.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0 fw-bold text-dark fs-5">Phone</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{userProfile?.phone}</p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0 fw-bold text-dark fs-5">Address</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{userProfile?.address}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <img
                    src={show}
                    className="w-100"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade  bg-white"
              id="v-pills-02"
              role="tabpanel"
              aria-labelledby="v-pills-02-tab"
              tabIndex="0"
            >

              <UserProfileEdit user={user} userProfile={userProfile} />
            </div>
            <div
              className="tab-pane fade  bg-white"
              id="v-pills-03"
              role="tabpanel"
              aria-labelledby="v-pills-03-tab"
              tabIndex="0"
            >
              <UserPasswordChange />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

UserProfileShow.layout = (page) => <AdminLayout>{page}</AdminLayout>
export default UserProfileShow;
