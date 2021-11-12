import React from 'react'
import "./Dashboard.scss"
const Dashboard = () => {
    return (
        <div>
            <div class="sidebar">
                <div class="logo_content">
                    <div class="logo">
                        <i class="fas fa-search-plus"></i>
                        <div class="logo_name">Medi4all</div>
                    </div>
                    <i class='bx bx-menu' id="btn"></i>
                </div>
                <ul class="nav_list">
                    <li>
                        <i class='bx bx-search'></i>
                        <input type="text" placeholder="Search"></input>


                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bx-grid-alt'></i>
                            <span class="links_name">Dashboard</span>
                        </a>

                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bx-user'></i>
                            <span class="links_name">User</span>
                        </a>

                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bx-history'></i>
                            <span class="links_name">My History</span>
                        </a>

                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bx-calendar'></i>
                            <span class="links_name">Appointements</span>
                        </a>

                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bx-calendar-edit'></i>
                            <span class="links_name">Consultation</span>
                        </a>

                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bx-user-check'></i>
                            <span class="links_name">My Doctors</span>
                        </a>

                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bx-notepad'></i>
                            <span class="links_name">Medical Records</span>
                        </a>

                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bx-bell'></i>
                            <span class="links_name">Notifications</span>
                        </a>

                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bx-cog'></i>
                            <span class="links_name">Settings</span>
                        </a>

                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bx-help-circle'></i>
                            <span class="links_name">Help</span>
                        </a>
                    </li>
                </ul>
                <div class="profile_content">
                    <div class="profile">
                        <div class="profile_details">
                            {/* <img src="img1.png" alt=""> */}
                            <div class="name">Shrishail Gharat</div>
                            <div class="pincode">400 709</div>
                        </div>
                    </div>
                </div>
                <div>
                    <i class='bx bx-log-out' id="log_out"></i>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
