function ManageUsers() {
  return (
    <div className="manage-users">

      <h1>Manage Users</h1>

      <p>View and manage all registered users.</p>

      <div className="users-table">

        <h2>Registered Users</h2>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>John</td>
              <td>john@gmail.com</td>
              <td>Job Seeker</td>
              <td>Active</td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>
  );
}

export default ManageUsers;