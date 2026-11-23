import { Link } from 'react-router-dom';
import { useState } from 'react';

function CompanyProfile() {
  const [company, setCompany] = useState(() => {
  const savedCompany = localStorage.getItem('companyProfile');

  return savedCompany
    ? JSON.parse(savedCompany)
    : {
        name: '',
        email: '',
        phone: '',
        website: '',
        address: '',
        industry: '',
        about: ''
      };
});
const handleSave = (e) => {
  e.preventDefault();

  localStorage.setItem('companyProfile', JSON.stringify(company));

  alert('Company Profile Saved Successfully!');
};
  return (
    <div className="company-profile-page">

      <nav className="navbar">
        <h2 className="logo">SmartHire</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/jobs">Find Jobs</Link>
          <Link to="/company-dashboard">Dashboard</Link>
        </div>
      </nav>

      <div className="company-profile-container">

        <h1>Company Profile</h1>
        <p>Manage your company information.</p>

        <div className="company-profile-card">

          <form onSubmit={handleSave}>
            <label>Company Name</label>
            <input
  type="text"
  placeholder="Enter company name"
  value={company.name}
  onChange={(e) =>
    setCompany({ ...company, name: e.target.value })
  }
/>

            <label>Email Address</label>
            <input
  type="email"
  placeholder="Enter company email"
  value={company.email}
  onChange={(e) =>
    setCompany({ ...company, email: e.target.value })
  }
/>

            <label>Phone Number</label>
            <input
  type="tel"
  placeholder="Enter phone number"
  value={company.phone}
  onChange={(e) =>
    setCompany({ ...company, phone: e.target.value })
  }
/>

            <label>Company Website</label>
           <input
  type="url"
  placeholder="Enter website URL"
  value={company.website}
  onChange={(e) =>
    setCompany({ ...company, website: e.target.value })
  }
/>
            <label>Company Address</label>
            <input
  type="text"
  placeholder="Enter company address"
  value={company.address}
  onChange={(e) =>
    setCompany({ ...company, address: e.target.value })
  }
/>

            <label>Industry</label>
            <input
  type="text"
  placeholder="Enter industry"
  value={company.industry}
  onChange={(e) =>
    setCompany({ ...company, industry: e.target.value })
  }
/>

            <label>About Company</label>
            <textarea placeholder="Write about your company"></textarea>

            <button type="submit">Save Changes</button>
          </form>

        </div>
      </div>

    </div>
  );
}

export default CompanyProfile;