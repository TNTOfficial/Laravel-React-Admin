import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import "../../../css/style.css";
import { Head } from "@inertiajs/react";


const AdminLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Document</title>
        <meta name="description" content="Your page description" />
      </Head>
      {/* Bootstrap icons */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
      />

      <div id="main">
        <Sidebar />
        <div className="main-content">
          <Header />
          {/* Bio card */}
          {/* <div className="card_head py-5 bg-white border-bottom" style={{ height: "204px" }}>
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-6">
                  <div className="d-flex">
                    <img
                      src={user2}
                      alt="user pic"
                      className="rounded-circle border border-white"
                      width="60"
                      height="60"
                    />
                    <span className="ms-3">
                      <h2>Welcome back, Brian!</h2>
                      <p>
                        <span><i className="bi bi-bell-fill"></i></span> You have 2
                        new messages and 15 new tasks
                      </p>
                    </span>
                  </div>
                </div>
                <div className="col-4">
                  <div className="buttons mt-3 text-end">
                    <button className="btn rounded-pill btn-dark px-4 py-2">
                      <i className="bi bi-envelope-fill text-white fs-6 me-2"></i>
                      <span className="text-white">Messages</span>
                    </button>
                    <button className="btn rounded-pill bg-info px-4 py-2">
                      <i className="bi bi-gear-fill text-white fs-6 me-2"></i>
                      <span className="text-white">Settings</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* Tabs section */}

          <main className="">{children}</main>

        </div>
      </div>


      {/* Bootstrap js cdn link */}
      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"
        integrity="sha384-fbbOQedDUMZZ5KreZpsbe1LCZPVmfTnH7ois6mU1QK+m14rQ1l2bGBq41eYeM/fS"
        crossOrigin="anonymous"
      ></script>

    </>
  );
};

export default AdminLayout;
