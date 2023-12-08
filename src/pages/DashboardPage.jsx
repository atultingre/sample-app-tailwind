// import React from "react";
import Dashboard from "../Components/Dashboard/Dashboard.jsx";

const DashboardPage = ({ children }) => {
  return (
    <div>
      <Dashboard>{children}</Dashboard>
    </div>
  );
};

export default DashboardPage;
