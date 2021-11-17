import React, { useState } from "react";
import "./Dashboard.scss";

import Appointment from "../../forms/appointment/Appointment";
import { useDisclosure } from "@chakra-ui/hooks";
import MedicalInfoForm from "../../forms/medicalInfo/MedicalInfo";
import { useSelector } from "react-redux";
import Sidebar from "./components/sidebar/Sidebar";
import DashboardHeader from "./components/header/DashboardHeader";
import AppointmentsList from "./components/cardslist/AppointmentsList";
import MedHistoryList from "./components/cardslist/MedHistoryList";
import userTypes from "../../utils/userTypes";

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeTab, setActiveTab] = useState("appointments");
  const { user, userType } = useSelector((state) => state.authReducer);
  console.log("Active tab is: ", activeTab);

  return (
    <div class="container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div class="main_container">
        <DashboardHeader />

        {userType === userTypes.patient && (
          <button className="bookAppointment" onClick={onOpen}>
            Book Appointment
          </button>
        )}

        {activeTab !== "medicalRecords" && <AppointmentsList />}
        {/* <AppointmentsList /> */}

        {activeTab === "medicalRecords" && <MedHistoryList />}

        <Appointment onClose={onClose} isOpen={isOpen} />
        {/* <MedicalInfoForm onClose={onClose} isOpen={isOpen} /> */}
      </div>
    </div>
  );
};

export default Dashboard;
