import { Link } from 'react-router-dom';
import { useState } from 'react';

function Profile() {

  const [savedProfile, setSavedProfile] = useState(() => {
  return JSON.parse(
    localStorage.getItem('smarthireProfile') || '{}'
  );
});

  const profileFields = [
  'fullName',
  'email',
  'phone',
  'address',
  'education',
  'skills'
];

const completedFields = profileFields.filter(
  (field) => savedProfile[field]?.trim()
).length;

const completionPercentage = Math.round(
  (completedFields / profileFields.length) * 100
);

  return (
    <div className="profile-page">

      <nav className="navbar">
        <h2 className="logo">SmartHire</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/jobs">Find Jobs</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/login">Logout</Link>
        </div>
      </nav>

      <div className="profile-container">

     <div className="profile-header">

  <div className="profile-photo-section">

    <div className="profile-avatar">
      <img
        src={
          savedProfile.profilePicture ||
          "https://placehold.co/100x100?text=Profile"
        }
        alt="Profile"
      />
    </div>

    <input
      type="file"
      accept="image/*"
      onChange={(e) => {
        const file = e.target.files[0];

        if (file) {
          const reader = new FileReader();

          reader.onloadend = () => {
            const updatedProfile = {
              ...savedProfile,
              profilePicture: reader.result
            };

            localStorage.setItem(
              'smarthireProfile',
              JSON.stringify(updatedProfile)
            );

            setSavedProfile(updatedProfile);
          };

          reader.readAsDataURL(file);
        }
      }}
    />

  </div>

  <div className="profile-header-info">
    <h1>My Profile</h1>
    <p>Manage your personal information and career details.</p>
    <span>Job Seeker Account</span>
  </div>

</div>

<div className="profile-completion">

  <h3>Profile Completion</h3>

  <div className="completion-bar">
   <div
  className="completion-progress"
  style={{ width: `${completionPercentage}%` }}
></div>
  </div>

 <p>
  {completionPercentage}% Profile Completed
</p>
</div>

<div className="profile-actions">

  <button
    type="button"
    onClick={() => {
      document.querySelector('.profile-card').scrollIntoView({
        behavior: 'smooth'
      });
    }}
  >
    Edit Profile
  </button>

</div>

        <div className="profile-card">

         <form onSubmit={async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const profileData = Object.fromEntries(formData.entries());

 const resumeFile = formData.get('resume');

delete profileData.resume;

if (resumeFile && resumeFile.size > 0) {
  profileData.resumeName = resumeFile.name;
  profileData.resumeData = await new Promise((resolve) => {
  const reader = new FileReader();
  reader.onload = () => resolve(reader.result);
  reader.readAsDataURL(resumeFile);
});
  
}

  const updatedProfile = {
    ...savedProfile,
    ...profileData
  };

  localStorage.setItem(
    'smarthireProfile',
    JSON.stringify(updatedProfile)
  );

  setSavedProfile(updatedProfile);

  alert("Profile Saved Successfully!");
}}>
  <label>Full Name</label>
 <input
  type="text"
  name="fullName"
  placeholder="Enter your full name"
  defaultValue={savedProfile.fullName || ''}
  required
/>
  <label>Email Address</label>
  <input
  type="email"
  name="email"
  placeholder="Enter your email"
  defaultValue={savedProfile.email || ''}
  required
/>

  <label>Phone Number</label>
  <input
  type="tel"
  name="phone"
  placeholder="Enter your phone number"
  defaultValue={savedProfile.phone || ''}
/>

  <label>Address</label>
 <input
  type="text"
  name="address"
  placeholder="Enter your address"
  defaultValue={savedProfile.address || ''}
/>

  <label>Education</label>
  <input
  type="text"
  name="education"
  placeholder="Enter your education"
  defaultValue={savedProfile.education || ''}
/>

  <label>Skills</label>
  <textarea
  name="skills"
  placeholder="Enter your skills"
  defaultValue={savedProfile.skills || ''}
/>
<label>Upload Resume (CV)</label>
<input
  type="file"
  accept=".pdf,.doc,.docx"
  name="resume"
/>

{savedProfile.resumeName && (
  <div className="resume-name">

    <p>
      Uploaded CV: {savedProfile.resumeName}
    </p>

    <a
      href={savedProfile.resumeData}
      target="_blank"
      rel="noopener noreferrer"
    >
      View Resume
    </a>

  </div>
)}
  <button type="submit">Save Changes</button>

</form>
        </div>
      </div>

    </div>
  );
}

export default Profile;