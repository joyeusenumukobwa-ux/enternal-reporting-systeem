"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <aside className={`sidebar ${menuOpen ? "show" : ""}`}>

        <div className="logo">
          <div className="logo-icon">📄</div>
          <div>
            <strong>INTERNAL</strong>
            <strong>REPORTING SYSTEM</strong>
          </div>
        </div>

        <div className="user-profile">
          <div className="avatar">👤</div>
          <div>
            <strong>Juan Dela Cruz</strong>
            <small>Administrator</small>
          </div>
        </div>

        <nav>

          <a className="active">
            🏠 <span>Dashboard</span>
          </a>

          <a>
            👥 <span>Users</span>
          </a>

          <a>
            🏢 <span>Departments</span>
          </a>

          <a>
            👨‍👩‍👧 <span>Teams</span>
          </a>

          <a>
            📅 <span>Schedules</span>
          </a>

          <a>
            📄 <span>Reports</span>
          </a>

          <a>
            🔍 <span>Reviews</span>
          </a>

          <a>
            🔔 <span>Notifications</span>
          </a>

          <a>
            📊 <span>Reports & Statistics</span>
          </a>

          <a>
            ⚙️ <span>Settings</span>
          </a>

          <a>
            🚪 <span>Logout</span>
          </a>

        </nav>
      </aside>


      {/* MAIN AREA */}
      <main className="main">

        {/* TOP BAR */}
        <header className="topbar">

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <h3>Welcome back, Administrator!</h3>

          <div className="top-right">
            <span className="notification">🔔</span>

            <div className="small-avatar">👤</div>

            <span>Juan Dela Cruz</span>

            <span>⌄</span>
          </div>

        </header>


        {/* DASHBOARD CONTENT */}
        <section className="content">

          {/* STATISTICS CARDS */}
          <div className="cards">

            <div className="card">
              <div className="card-icon blue">👥</div>

              <div>
                <p>Total Employees</p>
                <h2>120</h2>
                <a>View all employees</a>
              </div>
            </div>


            <div className="card">
              <div className="card-icon yellow">📄</div>

              <div>
                <p>Pending Reports</p>
                <h2>18</h2>
                <small>For review</small>
              </div>
            </div>


            <div className="card">
              <div className="card-icon green">☑️</div>

              <div>
                <p>Approved Reports</p>
                <h2>65</h2>
                <small>This month</small>
              </div>
            </div>


            <div className="card">
              <div className="card-icon red">❌</div>

              <div>
                <p>Rejected Reports</p>
                <h2>7</h2>
                <small>This month</small>
              </div>
            </div>

          </div>


          {/* LOWER SECTION */}
          <div className="dashboard-grid">

            {/* RECENT REPORTS */}
            <section className="panel">

              <div className="panel-header">
                <h3>Recent Reports</h3>
                <a>View all</a>
              </div>

              <div className="table-container">

                <table>

                  <thead>
                    <tr>
                      <th>Report Title</th>
                      <th>Employee</th>
                      <th>Submitted On</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>

                    <tr>
                      <td>Weekly Progress Report</td>
                      <td>Maria Santos</td>
                      <td>May 19, 2024</td>
                      <td>
                        <span className="status pending">
                          Pending
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>Project Update Report</td>
                      <td>John Perez</td>
                      <td>May 19, 2024</td>
                      <td>
                        <span className="status approved">
                          Approved
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>Monthly Sales Report</td>
                      <td>Anna Garcia</td>
                      <td>May 18, 2024</td>
                      <td>
                        <span className="status approved">
                          Approved
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>IT Support Report</td>
                      <td>Luis Reyes</td>
                      <td>May 18, 2024</td>
                      <td>
                        <span className="status rejected">
                          Rejected
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>Weekly Progress Report</td>
                      <td>Mark Dizon</td>
                      <td>May 17, 2024</td>
                      <td>
                        <span className="status pending">
                          Pending
                        </span>
                      </td>
                    </tr>

                  </tbody>

                </table>

              </div>

            </section>


            {/* REPORT SUMMARY */}
            <section className="panel summary">

              <h3>Reports Summary (This Month)</h3>

              <div className="chart-area">

                <div className="donut">
                  <div className="donut-center">
                    90
                    <small>Total</small>
                  </div>
                </div>

                <div className="legend">

                  <div>
                    <span className="dot pending-dot"></span>
                    Pending (18)
                  </div>

                  <div>
                    <span className="dot approved-dot"></span>
                    Approved (65)
                  </div>

                  <div>
                    <span className="dot rejected-dot"></span>
                    Rejected (7)
                  </div>

                </div>

              </div>

            </section>

          </div>

        </section>

      </main>

    </div>
  );
}