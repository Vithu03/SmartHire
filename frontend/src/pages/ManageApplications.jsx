function ManageApplications() {
  return (
    <div className="manage-applications">

      <h1>Manage Applications</h1>

      <p>View all job applications submitted by candidates.</p>

      <div className="applications-table">

        <h2>All Applications</h2>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Applicant Name</th>
              <th>Job Title</th>
              <th>Company</th>
              <th>Applied Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>John</td>
              <td>Software Developer</td>
              <td>ABC Technologies</td>
              <td>2026-11-15</td>
              <td>Pending</td>
            </tr>

            <tr>
              <td>2</td>
              <td>David</td>
              <td>Web Developer</td>
              <td>XYZ Solutions</td>
              <td>2026-11-16</td>
              <td>Approved</td>
            </tr>

            <tr>
              <td>3</td>
              <td>Sarah</td>
              <td>Data Analyst</td>
              <td>Global Analytics</td>
              <td>2026-11-17</td>
              <td>Rejected</td>
            </tr>
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ManageApplications;