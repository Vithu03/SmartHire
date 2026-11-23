import { Link, useSearchParams } from 'react-router-dom';
import { useState } from 'react';

function Jobs() {
  const [searchParams] = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [locationFilter, setLocationFilter] = useState(searchParams.get('location') || '');
  const [jobTypeFilter, setJobTypeFilter] = useState('');
  const categoryFilter = searchParams.get('category') || '';
 const jobs = [
  {
    title: 'Frontend Developer',
    company: 'Tech Solutions',
    location: 'Colombo',
    type: 'Full Time',
    salary: 'Rs. 60,000 - 90,000',
    category: 'IT & Software'
  },
  {
    title: 'Backend Developer',
    company: 'Code Labs',
    location: 'Kandy',
    type: 'Full Time',
    salary: 'Rs. 70,000 - 100,000',
    category: 'IT & Software'
  },
  {
    title: 'UI/UX Designer',
    company: 'Creative Studio',
    location: 'Remote',
    type: 'Part Time',
    salary: 'Rs. 40,000 - 60,000',
    category: 'IT & Software'
  },
  {
    title: 'Software Engineer Intern',
    company: 'Innovate Lanka',
    location: 'Colombo',
    type: 'Internship',
    salary: 'Rs. 25,000 - 35,000',
    category: 'IT & Software'
  },
  {
    title: 'Accountant',
    company: 'Finance Solutions',
    location: 'Colombo',
    type: 'Full Time',
    salary: 'Rs. 50,000 - 75,000',
    category: 'Finance & Accounting'
  },
  {
    title: 'Finance Assistant',
    company: 'Global Finance',
    location: 'Kandy',
    type: 'Part Time',
    salary: 'Rs. 35,000 - 50,000',
    category: 'Finance & Accounting'
  },
  {
    title: 'Digital Marketing Executive',
    company: 'Creative Media',
    location: 'Colombo',
    type: 'Full Time',
    salary: 'Rs. 45,000 - 65,000',
    category: 'Marketing'
  },
  {
    title: 'Social Media Assistant',
    company: 'Media Lanka',
    location: 'Remote',
    type: 'Internship',
    salary: 'Rs. 20,000 - 30,000',
    category: 'Marketing'
  },
  {
    title: 'English Teacher',
    company: 'Bright Academy',
    location: 'Ampara',
    type: 'Full Time',
    salary: 'Rs. 40,000 - 60,000',
    category: 'Education'
  },
  {
    title: 'Teaching Assistant',
    company: 'Learning Centre',
    location: 'Colombo',
    type: 'Part Time',
    salary: 'Rs. 25,000 - 35,000',
    category: 'Education'
  },
  {
    title: 'Healthcare Assistant',
    company: 'Care Medical Centre',
    location: 'Kandy',
    type: 'Full Time',
    salary: 'Rs. 35,000 - 50,000',
    category: 'Healthcare'
  },
  {
    title: 'Medical Receptionist',
    company: 'Health Care Lanka',
    location: 'Colombo',
    type: 'Full Time',
    salary: 'Rs. 30,000 - 45,000',
    category: 'Healthcare'
  },
  {
    title: 'Civil Engineering Assistant',
    company: 'Build Lanka',
    location: 'Colombo',
    type: 'Full Time',
    salary: 'Rs. 50,000 - 70,000',
    category: 'Engineering'
  },
  {
    title: 'Mechanical Engineering Intern',
    company: 'Engineering Solutions',
    location: 'Galle',
    type: 'Internship',
    salary: 'Rs. 25,000 - 35,000',
    category: 'Engineering'
  }
];

 const filteredJobs = jobs.filter((job) => {
  const matchesTitle = job.title.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesLocation = job.location.toLowerCase().includes(locationFilter.toLowerCase());

  const matchesJobType = jobTypeFilter === '' || job.type === jobTypeFilter;

  const matchesCategory = categoryFilter === '' || job.category === categoryFilter;

  return matchesTitle && matchesLocation && matchesJobType && matchesCategory;
});

const saveJob = (job) => {
  const savedJobs = JSON.parse(
    localStorage.getItem('savedJobs') || '[]'
  );

  const alreadySaved = savedJobs.some(
    (savedJob) =>
      savedJob.title === job.title &&
      savedJob.company === job.company
  );

  if (alreadySaved) {
    alert('This job is already saved!');
    return;
  }

  savedJobs.push(job);

  localStorage.setItem(
    'savedJobs',
    JSON.stringify(savedJobs)
  );

  alert('Job saved successfully!');
};

  return (
    <div className="jobs-page">

      <nav className="navbar">
        <h2 className="logo">SmartHire</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/jobs">Find Jobs</Link>
          <Link to="/login">Login</Link>

          <select
  value={jobTypeFilter}
  onChange={(e) => setJobTypeFilter(e.target.value)}
>
  <option value="">All Job Types</option>
  <option value="Full Time">Full Time</option>
  <option value="Part Time">Part Time</option>
  <option value="Internship">Internship</option>
</select>
        </div>
      </nav>

      <section className="jobs-header">
        <h1>Find Your Dream Job</h1>
        <p>Explore opportunities and build your career with SmartHire.</p>
      </section>

      <section className="jobs-container">

        <h2>Latest Job Opportunities</h2>
        <div className="job-search">
  <input
    type="text"
    placeholder="Search job title..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />

  <input
    type="text"
    placeholder="Enter location..."
    value={locationFilter}
    onChange={(e) => setLocationFilter(e.target.value)}
  />
</div>

        <div className="jobs-grid">
          {filteredJobs.map((job, index) => (
            <div className="job-card" key={index}>

              <h3>{job.title}</h3>

              <p>🏢 {job.company}</p>
              <p>📍 {job.location}</p>
              <p>💼 {job.type}</p>
              <p>💰 {job.salary}</p>

             <div className="job-card-actions">

  <Link
    to="/job-details"
    state={{ job: job }}
    className="apply-btn"
  >
    View Details
  </Link>

  <button
    className="save-job-btn"
    onClick={() => saveJob(job)}
  >
    Save Job
  </button>

</div>

            </div>
          ))}
        </div>

      </section>

    </div>
  );
}

export default Jobs;