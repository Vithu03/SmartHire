function ManageJobs() {
  return (
    <div className="manage-jobs">

      <h1>Manage Jobs</h1>

      <p>View and manage all job postings.</p>

      <div className="jobs-table">

        <h2>All Job Posts</h2>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Job Title</th>
              <th>Company</th>
              <th>Location</th>
              <th>Job Type</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Software Developer</td>
              <td>ABC Technologies</td>
              <td>Colombo</td>
              <td>Full Time</td>
              <td>Active</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Web Developer</td>
              <td>XYZ Solutions</td>
              <td>Jaffna</td>
              <td>Part Time</td>
              <td>Active</td>
            </tr>

            <tr>
              <td>3</td>
              <td>Data Analyst</td>
              <td>Global Analytics</td>
              <td>Kandy</td>
              <td>Full Time</td>
              <td>Active</td>
            </tr>
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ManageJobs;