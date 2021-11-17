import React from "react";
import { useDispatch } from "react-redux";
import { clearAppointments } from "../../../../redux/reducers/appointmentsSlice";
import { logout } from "../../../../redux/reducers/authSlice";
import { clearHistory } from "../../../../redux/reducers/medHistorySlice";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const dispatch = useDispatch();
  console.log("Active tab is: ", activeTab);

  return (
    <div class="sidebar">
      <ul class="nav-links">
        <div>
          <li
            onClick={() => {
              setActiveTab("myHistory");
            }}
          >
            <a className={activeTab === "myHistory" ? "active" : ""}>
              <i class="fas fa-history"></i>
              <span class="link_name">My History</span>
            </a>
          </li>
          <li
            onClick={() => {
              setActiveTab("appointments");
            }}
          >
            <a className={activeTab === "appointments" ? "active" : ""}>
              <i class="far fa-calendar-alt"></i>
              <span class="link_name">Appointments</span>
            </a>
          </li>
          <li
            onClick={() => {
              setActiveTab("consultations");
            }}
          >
            <a className={activeTab === "consultations" ? "active" : ""}>
              <i class="far fa-clipboard"></i>
              <span class="link_name">Consultations</span>
            </a>
          </li>
          <li
            onClick={() => {
              setActiveTab("myDoctors");
            }}
          >
            <a className={activeTab === "myDoctors" ? "active" : ""}>
              <i class="fas fa-user-md"></i>
              <span class="link_name">My Doctors</span>
            </a>
          </li>
          <li
            onClick={() => {
              setActiveTab("medicalRecords");
            }}
          >
            <a className={activeTab === "medicalRecords" ? "active" : ""}>
              <i class="fas fa-notes-medical"></i>

              <span class="link_name">Medical records</span>
            </a>
          </li>
          <li
            onClick={() => {
              setActiveTab("notifications");
            }}
          >
            <a className={activeTab === "notifications" ? "active" : ""}>
              <i class="far fa-bell"></i>
              <span class="link_name">Notifications</span>
            </a>
          </li>
        </div>
        <div>
          <li>
            <a href="#">
              <i class="fas fa-book-medical"></i>
              <span class="link_name">Health Articles</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-cog"></i>
              <span class="link_name">Settings</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="far fa-question-circle"></i>
              <span class="link_name">Help</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                dispatch(logout());
                dispatch(clearAppointments());
                dispatch(clearHistory());
              }}
            >
              <i class="fas fa-sign-out-alt"></i>
              <span class="link_name">Log out</span>
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
