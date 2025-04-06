// src/pages/FacultyHome.jsx
import BaseHome from "./BaseHome";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const FacultyHome = () => {
  const facultyApiEndpoints = {
    classSchedules: `http://${BASE_URL}/faculty/class_schedules`,
    pendingCorrections: `http://${BASE_URL}/faculty/pending_corrections`,
    attendanceSummary: `http://${BASE_URL}/faculty/attendance_summary`
  };

  return (
    <BaseHome 
      apiEndpoints={facultyApiEndpoints}
      pageTitle="Faculty Dashboard"
      role="faculty"
    />
  );
};

export default FacultyHome;