// ResumeButton.jsx
import React from 'react';

const ResumeButton = () => {
  const viewResume = () => {
    // Replace 'path/to/your/resume.pdf' with the actual path to your resume PDF
    const resumePath = './assets/Rupesh_Baral resume.pdf';

    // Open the resume in a new tab/window
    window.open(resumePath, '_blank');
  };

  return (
    <div className="resume-dropdown">
      {/* Call viewResume directly without showing the dropdown */}
      <button onClick={viewResume}>
        Resume
      </button>
    </div>
  );
};

export default ResumeButton;



