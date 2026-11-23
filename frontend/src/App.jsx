import './App.css';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Jobs from './pages/Jobs';
import JobDetails from './pages/JobDetails';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import CompanyDashboard from './pages/CompanyDashboard';
import PostJob from './pages/PostJob';
import Applications from './pages/Applications';
import CompanyProfile from './pages/CompanyProfile';
import AdminDashboard from './pages/AdminDashboard';
import MyJobs from './pages/MyJobs';
import ManageUsers from './pages/ManageUsers';
import ManageCompanies from './pages/ManageCompanies';
import ManageJobs from './pages/ManageJobs';
import ManageApplications from './pages/ManageApplications';
import SavedJobs from './pages/SavedJobs';
import ApplyJob from './pages/ApplyJob';
import ForgotPassword from './pages/ForgotPassword';
import JobApplication from './pages/JobApplication';
import MyApplications from './pages/MyApplications';

function Home() {
  const navigate = useNavigate();
const [keyword, setKeyword] = useState('');
const [location, setLocation] = useState('');
  return (
    <div className="app">

      <nav className="navbar">
        <h2 className="logo">SmartHire</h2>

        <div className="nav-links">
          <a href="#">Home</a>
          <Link to="/jobs">Find Jobs</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/company-dashboard">Company Dashboard</Link>
         <a href="#companies">Companies</a>
          <a href="#about">About</a>
        </div>

       <Link to="/login" className="login-btn">Login</Link>
      </nav>

      <section className="hero">

        <h1>
          Find Your <span>Dream Job</span>
        </h1>

        <p>
          Discover thousands of job opportunities
          and build your future with SmartHire.
        </p>

       <div className="search-box">

  <input
    type="text"
    placeholder="Job title or keyword"
    value={keyword}
    onChange={(e) => setKeyword(e.target.value)}
  />

  <input
    type="text"
    placeholder="Location"
    value={location}
    onChange={(e) => setLocation(e.target.value)}
  />

  <button
    onClick={() =>
      navigate(
        `/jobs?search=${encodeURIComponent(keyword)}&location=${encodeURIComponent(location)}`
      )
    }
  >
    Search Jobs
  </button>

</div>

      </section>

      {/* About Section */}

<section className="about" id="about">

  <h2>About SmartHire</h2>

  <p>
    SmartHire is an online job portal designed to
    connect job seekers with companies.
    Our platform helps users discover job opportunities,
    apply for jobs, and manage their applications easily.
  </p>

  <div className="about-cards">

    <div>
      <h3>For Job Seekers</h3>
      <p>Find suitable jobs and apply online easily.</p>
    </div>

    <div>
      <h3>For Companies</h3>
      <p>Post job vacancies and find talented candidates.</p>
    </div>

  </div>

</section>

            {/* Featured Jobs Section */}

      <section className="featured-jobs">

        <h2>Featured Jobs</h2>

        <p className="section-description">
          Explore the latest job opportunities
        </p>

        <div className="job-container">

          <div className="job-card">
            <h3>Software Developer</h3>
            <p>ABC Technologies</p>
            <span>Full Time</span>
          <Link
  to="/job-details"
  state={{
    job: {
      title: 'Software Developer',
      company: 'ABC Technologies',
      location: 'Colombo',
      type: 'Full Time',
      salary: 'Rs. 60,000 - 90,000',
      category: 'IT & Software'
    }
  }}
  className="view-job-btn"
>
  View Details
</Link>
          </div>

          <div className="job-card">
            <h3>Web Developer</h3>
            <p>XYZ Solutions</p>
            <span>Part Time</span>
           <Link
  to="/job-details"
  state={{
    job: {
      title: 'Web Developer',
      company: 'XYZ Solutions',
      location: 'Colombo',
      type: 'Part Time',
      salary: 'Rs. 40,000 - 60,000',
      category: 'IT & Software'
    }
  }}
  className="view-job-btn"
>
  View Details
</Link>
          </div>

          <div className="job-card">
            <h3>UI/UX Designer</h3>
            <p>Creative Studio</p>
            <span>Remote</span>
           <Link
  to="/job-details"
  state={{
    job: {
      title: 'UI/UX Designer',
      company: 'Creative Studio',
      location: 'Remote',
      type: 'Full Time',
      salary: 'Rs. 40,000 - 60,000',
      category: 'IT & Software'
    }
  }}
  className="view-job-btn"
>
  View Details
</Link>
          </div>
<div className="job-card">
  <h3>Data Analyst</h3>
  <p>Global Analytics</p>

  <Link
    to="/job-details"
    state={{
      job: {
        title: 'Data Analyst',
        company: 'Global Analytics',
        location: 'Colombo',
        type: 'Full Time',
        salary: 'Rs. 60,000 - 90,000',
        category: 'IT & Software'
      }
    }}
    className="view-job-btn"
  >
    View Details
  </Link>
</div>

        </div>

      </section>

            {/* Job Categories Section */}

      <section className="categories">

        <h2>Explore Job Categories</h2>

        <p className="section-description">
          Find the perfect job in your favorite field
        </p>

        <div className="category-container">

          <Link to="/jobs?category=IT%20%26%20Software" className="category-card">
  <h3>💻</h3>
  <h4>IT & Software</h4>
  <p>120 Jobs Available</p>
</Link>

         <Link to="/jobs?category=Finance%20%26%20Accounting" className="category-card">
  <h3>💰</h3>
  <h4>Finance & Accounting</h4>
  <p>85 Jobs Available</p>
</Link>
          <Link to="/jobs?category=Marketing" className="category-card">
  <h3>📢</h3>
  <h4>Marketing</h4>
  <p>95 Jobs Available</p>
</Link>

         <Link to="/jobs?category=Education" className="category-card">
  <h3>📚</h3>
  <h4>Education</h4>
  <p>60 Jobs Available</p>
</Link>
          <Link to="/jobs?category=Healthcare" className="category-card">
  <h3>🏥</h3>
  <h4>Healthcare</h4>
  <p>75 Jobs Available</p>
</Link>
          <Link to="/jobs?category=Engineering" className="category-card">
  <h3>⚙️</h3>
  <h4>Engineering</h4>
  <p>110 Jobs Available</p>
</Link>

        </div>

      </section>

            {/* Top Companies Section */}

      <section className="companies" id="companies">

        <h2>Top Companies</h2>

        <p className="section-description">
          Discover great companies and explore career opportunities
        </p>

        <div className="company-container">

          <Link to="/jobs?search=Google" className="company-card">
  <h3>Google</h3>
  <p>Technology Company</p>
  <span>25 Open Jobs</span>
</Link>

          <Link to="/jobs?search=Microsoft" className="company-card">
  <h3>Microsoft</h3>
  <p>Software Company</p>
  <span>18 Open Jobs</span>
</Link>

          <Link to="/jobs?search=Amazon" className="company-card">
  <h3>Amazon</h3>
  <p>E-commerce Company</p>
  <span>30 Open Jobs</span>
</Link>
          <Link to="/jobs?search=Apple" className="company-card">
  <h3>Apple</h3>
  <p>Technology Company</p>
  <span>15 Open Jobs</span>
</Link>

        </div>

      </section>

            {/* How It Works Section */}

      <section className="how-it-works" id="how-it-works">

        <h2>How SmartHire Works</h2>

        <p className="section-description">
          Find your dream job in three simple steps
        </p>

        <div className="steps-container">
<Link to="/register" className="step-card">
  <div className="step-number">01</div>
  <h3>Create Account</h3>
  <p>
    Create your free account and build your professional profile.
  </p>
</Link>
          <Link to="/jobs" className="step-card">
  <div className="step-number">02</div>
  <h3>Find Your Job</h3>
  <p>
    Explore thousands of job opportunities that match your skills.
  </p>
</Link>

        <Link to="/jobs" className="step-card">
  <div className="step-number">03</div>
  <h3>Apply for Job</h3>
  <p>
    Apply for your favorite jobs and take the next step in your career.
  </p>
</Link>

        </div>

      </section>

            {/* Footer Section */}

      <footer className="footer">

        <div className="footer-container">

          <div className="footer-about" id="about">
            <h2>SmartHire</h2>
            <p>
              Find your dream job and build your future
              with SmartHire. Your career journey starts here.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
           <Link to="/jobs">Find Jobs</Link>
           <a href="#companies">Companies</a>
            <a href="#about">About Us</a>
          </div>

          <div className="footer-links">
            <h3>For Job Seekers</h3>
            <Link to="/jobs">Browse Jobs</Link>
            <Link to="/register">Create Account</Link>
            <a href="#how-it-works">Career Advice</a>
           <a href="mailto:support@smarthire.com">Help Center</a>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>Email: support@smarthire.com</p>
            <p>Phone: +94 77 123 4567</p>
            <p>Location: Sri Lanka</p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 SmartHire. All Rights Reserved.</p>
        </div>

      </footer>

    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/job-details" element={<JobDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/company-dashboard" element={<CompanyDashboard />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/my-jobs" element={<MyJobs />} />
        <Route path="/manage-users" element={<ManageUsers />} />
        <Route path="/manage-companies" element={<ManageCompanies />} />
        <Route path="/manage-jobs" element={<ManageJobs />} />
        <Route path="/manage-applications" element={<ManageApplications />} />
        <Route path="/saved-jobs" element={<SavedJobs />} />
        <Route path="/apply-job" element={<ApplyJob />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/job-application" element={<JobApplication />} />
        <Route path="/my-applications" element={<MyApplications />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;