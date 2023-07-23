import { useForm } from '@inertiajs/react';
import React  from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
;

const UserRoleForm = ({ roles, user, id }) => {
  const { data, setData, post, processing, errors } = useForm({
    roles: user.roles.map((rol) => rol.id),
    user_id: id,
  });



  const handleCheckboxChange = (val) => {
    if (!data.roles.some(i => i == val.id)) {
      setData((prevData) => ({
        ...prevData,
        roles: [...prevData.roles, val.id],
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        roles: prevData.roles.filter((id) => id !== val.id),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('userRoles.save'), {
      data
    });
  };

  return (
    <div className="content-wrapper">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title fs-3 fw-bold">Roles</h4>
              <table className="table">
                <thead>
                  <tr>
                    <th className="py-3 fw-bold w-100">Name</th>
                  </tr>
                </thead>
                <tbody>
                  {roles.map((role) => (
                    <tr key={role.id}>
                      <td className="py-3 fw-bold">{role.name}</td>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="roles"
                            value={role.id}
                            checked={data.roles.some((rol) => role.id === rol)}
                            onChange={() => handleCheckboxChange(role)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`role${role.id}`}
                          ></label>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <input type="hidden" name="_token" value={window.csrf_token} />
              <input type="hidden" name="user_id" value={id} />
              <div className="text-end">
                <button
                  type="submit"
                  className="btn btn-primary mx-2"
                  disabled={processing}
                >
                  {processing ? 'Submitting...' : 'Submit'}
                </button>
                <a className="btn btn-danger me-3" href={route('users.index')}>
                  Cancel
                </a>
              </div>
              {errors.roles && (
                <div className="text-danger">{errors.roles}</div>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

UserRoleForm.layout = (page) => <AdminLayout>{page}</AdminLayout>;

export default UserRoleForm;
