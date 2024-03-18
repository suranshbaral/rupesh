// ResumeButton.jsx
import React from 'react';

const ResumeButton = () => {
  const viewResume = () => {
    // Replace 'path/to/your/resume.pdf' with the actual path to your resume PDF
    const resumePath = 'https://drive.google.com/file/d/1SuUAR2xYJbgGJa1K0hEOWai84fbgBD0I/view?usp=sharing';

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



