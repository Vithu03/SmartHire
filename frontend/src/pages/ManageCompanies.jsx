function ManageCompanies() {
  return (
    <div className="manage-companies">

      <h1>Manage Companies</h1>

      <p>View and manage all registered companies.</p>

      <div className="companies-table">

        <h2>Registered Companies</h2>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Company Name</th>
              <th>Email</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>ABC Technologies</td>
              <td>abc@gmail.com</td>
              <td>Colombo</td>
              <td>Active</td>
            </tr>

            <tr>
              <td>2</td>
              <td>XYZ Solutions</td>
              <td>xyz@gmail.com</td>
              <td>Jaffna</td>
              <td>Active</td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>
  );
}

export default ManageCompanies;