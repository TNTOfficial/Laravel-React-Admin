import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { Link, usePage } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";


export default function Sidebar() {
  const { auth, userProfileImage } = usePage().props

  return (
    <div className="sidebar h-100 pt-3">
      <div className="px-4" style={{ maxWidth: "100%" }}>
        <div className="profile text-center mb-5 position-relative">
          <div className="logo position-absolute top-0 start-0">
            <i className="bi bi-fire text-white fs-3"></i>
          </div>


          <Link href={route("user_profile.show")}> <img
            src={`/storage/images/${userProfileImage}`}
            alt="user"
            className="rounded-circle mx-auto border border-white"
            width="100"
            height="102"
          /></Link>

          <div className="edit_icon position-absolute">
            <i className="bi bi-camera text-white fs-5"></i>
          </div>
          <div className="profile_text mt-4">
            <span className="d-block fs-6 mb-0">{auth.user.name}</span>
            <span className="d-block fs-7">{auth.user.email}</span>
          </div>
        </div>
        <div className="ps-3">
          <NavLink style={{ borderBottom: 'none', }}
            href={route('dashboard')} active={route().current('dashboard')}
          >
            <span className="text-info fs-4">
              DASHBOARD</span>
          </NavLink>
        </div>
        <div className="sidebarnav">
          <ul className="list-unstyled text-white mt-3">
            <li>
              <NavLink
                href={route('users.index')} active={route().current('users.index')}
                className="rounded-3 py-2 px-3 mb-1 d-flex text-decoration-none text-white"
              >
                <i className="bi bi-kanban fs-5"></i>
                <span className="text-white mt-1">Users</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                href={route('slides.index')} active={route().current('slides.index')}
                className="rounded-3 py-2 px-3 mb-1 d-flex text-decoration-none text-white"
              >
                <i className="bi bi-kanban fs-5"></i>
                <span className="text-white mt-1">Slider Management</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                href={route('settings.index')} active={route().current('settings.index')}
                className="rounded-3 py-2 px-3 mb-1 d-flex text-decoration-none text-white"
              >
                <i className="bi bi-kanban fs-5"></i>
                <span className="text-white mt-1">Settings</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                href={route('testimonials.index')} active={route().current('testimonials.index')}
                className="rounded-3 py-2 px-3 mb-1 d-flex text-decoration-none text-white"
              >
                <i className="bi bi-kanban fs-5"></i>
                <span className="text-white mt-1">Testimonial Management</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                href={route('sponsors.index')} active={route().current('sponsors.index') || route().current('sponsors.edit') || route().current('sponsors.create')}
                className="rounded-3 py-2 px-3 mb-1 d-flex text-decoration-none text-white"
              >
                <i className="bi bi-kanban fs-5"></i>
                <span className="text-white mt-1">Sponsors</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                href={route('roles.index')} active={route().current('roles.index')}
                className="rounded-3 py-2 px-3 mb-1 d-flex text-decoration-none text-white"
              >
                <i className="bi bi-kanban fs-5"></i>
                <span className="text-white mt-1">Roles</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                href={route('permissions.index')} active={route().current('permissions.index')}
                className="rounded-3 py-2 px-3 mb-1 d-flex text-decoration-none text-white"
              >
                <i className="bi bi-kanban fs-5"></i>
                <span className="text-white mt-1">Permissions</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                href={route('cities.index')} active={route().current('cities.index')}
                className="rounded-3 py-2 px-3 mb-1 d-flex text-decoration-none text-white"
              >
                <i className="bi bi-kanban fs-5"></i>
                <span className="text-white mt-1">Cities</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                href={route('states.index')} active={route().current('states.index')}
                className="rounded-3 py-2 px-3 mb-1 d-flex text-decoration-none text-white"
              >
                <i className="bi bi-kanban fs-5"></i>
                <span className="text-white mt-1">States</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                href={route('categories.index')} active={route().current('categories.index')}
                className="rounded-3 py-2 px-3 mb-1 d-flex text-decoration-none text-white"
              >
                <i className="bi bi-kanban fs-5"></i>
                <span className="text-white mt-1">Categories Management</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

  );
}
