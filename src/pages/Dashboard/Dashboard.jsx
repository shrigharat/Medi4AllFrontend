import React from 'react'
import "./Dashboard.scss"
const Dashboard = () => {
    return (
        <div class="container">
      <div class="sidebar">
        <ul class="nav-links">
          <div>
            <li>
              <a href="#">
                <i class="fas fa-history"></i>
                <span class="link_name">My History</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="far fa-calendar-alt"></i>
                <span class="link_name">Appointments</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="far fa-clipboard"></i>
                <span class="link_name">Consultation</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-user-md"></i>
                <span class="link_name">My Doctors</span>
              </a>
            </li>
            <li>
              <a href="#" class="active">
                <i class="fas fa-notes-medical"></i>

                <span class="link_name">Medical records</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="far fa-bell"></i>
                <span class="link_name">Notification</span>
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
              <a href="#">
                <i class="fas fa-sign-out-alt"></i>
                <span class="link_name">Log out</span>
              </a>
            </li>
          </div>
        </ul>
      </div>
    
      <div class="main_container">
        <section class="header">
          <nav>
            <div class="sidebar-button">
              <i class="fas fa-search-plus"></i>
              <span class="dashboard">Medi4all</span>
            </div>
            <div class="profile-details">
              <img src="Prajakta.jpg" width="40px" height="40px" alt="" />
              <span class="admin_name">User</span>
            </div>
          </nav>
        </section>

        <section class="cards">
          <article class="info_card">
            <div class="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
              corporis commodi omnis sunt quibusdam laudantium ut. Cupiditate,
              velit quia! Error labore ut asperiores eius culpa?
            </div>
          </article>
          <article class="info_card">
            <div class="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
              corporis commodi omnis sunt quibusdam laudantium ut. Cupiditate,
              velit quia! Error labore ut asperiores eius culpa?
            </div>
          </article>
          <article class="info_card">
            <div class="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
              corporis commodi omnis sunt quibusdam laudantium ut. Cupiditate,
              velit quia! Error labore ut asperiores eius culpa?
            </div>
          </article>
          <article class="info_card">
            <div class="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
              corporis commodi omnis sunt quibusdam laudantium ut. Cupiditate,
              velit quia! Error labore ut asperiores eius culpa?
            </div>
          </article>
        </section>
      </div>
    </div>
    )
}

export default Dashboard
