"use client";
export default function ManagerPage() {
  return (
    <>
      <div className="dashboard">

        {/* SIDEBAR */}
        <aside className="sidebar">

          <div className="logo">
            <div className="logoIcon">▣</div>
            <div>
              <strong>INTERNAL</strong>
              <strong>REPORTING SYSTEM</strong>
            </div>
          </div>

          <div className="profile">
            <div className="avatar">R</div>

            <div>
              <strong>Robert Johnson</strong>
              <p>Manager - Sales</p>
              <span className="online">● Online</span>
            </div>
          </div>

          <nav className="navigation">

            <a className="navItem active">
              <span>⌂</span>
              Dashboard
            </a>

            <a className="navItem">
              <span>♙</span>
              Pending Reports
              <span className="badge">12</span>
            </a>

            <a className="navItem">
              <span>✓</span>
              Reviewed Reports
            </a>

            <a className="navItem">
              <span>♟</span>
              My Team
            </a>

            <a className="navItem">
              <span>▣</span>
              Reports & Statistics
            </a>

            <a className="navItem">
              <span>♧</span>
              Notifications
              <span className="badge">3</span>
            </a>

            <a className="navItem logout">
              <span>↪</span>
              Logout
            </a>

          </nav>
        </aside>


        {/* MAIN AREA */}
        <section className="mainContent">

          {/* TOP BAR */}
          <header className="topbar">

            <button className="menuButton">☰</button>

            <h2>Welcome back, Robert!</h2>

            <div className="topRight">

              <div className="notification">
                ♧
                <span>3</span>
              </div>

              <div className="user">
                <div className="smallAvatar">R</div>
                <strong>Robert Johnson</strong>
                <span>⌄</span>
              </div>

            </div>
          </header>


          {/* STATISTIC CARDS */}
          <div className="cards">

            <div className="card">
              <div className="cardIcon purple">▤</div>

              <div>
                <p>PENDING REPORTS</p>
                <h3>12</h3>
                <small>Need your review</small>
              </div>
            </div>


            <div className="card">
              <div className="cardIcon green">✓</div>

              <div>
                <p>APPROVED REPORTS</p>
                <h3>28</h3>
                <small>This month</small>
              </div>
            </div>


            <div className="card">
              <div className="cardIcon red">×</div>

              <div>
                <p>REJECTED REPORTS</p>
                <h3>4</h3>
                <small>This month</small>
              </div>
            </div>


            <div className="card">
              <div className="cardIcon blue">♟</div>

              <div>
                <p>TEAM MEMBERS</p>
                <h3>8</h3>
                <small>Total</small>
              </div>
            </div>

          </div>


          {/* BOTTOM AREA */}
          <div className="lowerSection">

            {/* PENDING REPORTS */}
            <section className="panel">

              <div className="panelHeader">
                <h3>Pending Reports</h3>
                <a>View all</a>
              </div>

              <table>

                <thead>
                  <tr>
                    <th>Report Title</th>
                    <th>Employee</th>
                    <th>Submitted On</th>
                    <th>Due Date</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>Weekly Progress Report</td>
                    <td>Maria Santos</td>
                    <td>May 19, 2024</td>
                    <td>May 24, 2024</td>
                    <td><span className="pending">Pending</span></td>
                  </tr>

                  <tr>
                    <td>Project Update Report</td>
                    <td>John Perez</td>
                    <td>May 19, 2024</td>
                    <td>May 24, 2024</td>
                    <td><span className="pending">Pending</span></td>
                  </tr>

                  <tr>
                    <td>Monthly Sales Report</td>
                    <td>Anna Garcia</td>
                    <td>May 18, 2024</td>
                    <td>May 31, 2024</td>
                    <td><span className="pending">Pending</span></td>
                  </tr>

                  <tr>
                    <td>IT Support Report</td>
                    <td>Luis Reyes</td>
                    <td>May 18, 2024</td>
                    <td>May 24, 2024</td>
                    <td><span className="pending">Pending</span></td>
                  </tr>

                  <tr>
                    <td>Weekly Progress Report</td>
                    <td>Mark Dizon</td>
                    <td>May 17, 2024</td>
                    <td>May 24, 2024</td>
                    <td><span className="pending">Pending</span></td>
                  </tr>

                </tbody>
              </table>

            </section>


            {/* REPORT STATUS */}
            <section className="panel">

              <div className="panelHeader">
                <h3>Reports Status Overview (This Month)</h3>
              </div>

              <div className="chartArea">

                <div className="donut"></div>

                <div className="legend">

                  <div>
                    <span className="legendColor approvedColor"></span>
                    Approved (28)
                  </div>

                  <div>
                    <span className="legendColor pendingColor"></span>
                    Pending (12)
                  </div>

                  <div>
                    <span className="legendColor rejectedColor"></span>
                    Rejected (4)
                  </div>

                </div>

              </div>

            </section>

          </div>

        </section>

      </div>


      {/* CSS */}
      <style jsx>{`

        * {
          box-sizing: border-box;
        }
.dashboard {
  width: 100%;
  min-height: 10vh;
  display: flex;
  background: #101111;
  color: #20234d;
  font-family: Arial, sans-serif;
  overflow-x: hidden;
}

        /* SIDEBAR */

        .sidebar {
          width: 220px;
          min-height: 100vh;
          background: linear-gradient(
            180deg,
            #211b5c,
            #18144d
          );
          color: white;
          flex-shrink: 0;
        }

        .logo {
          height: 90px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 20px;
          border-bottom: 1px solid rgba(255,255,255,0.15);
        }

        .logoIcon {
          font-size: 30px;
        }

        .logo strong {
          display: block;
          font-size: 12px;
        }


        /* PROFILE */

        .profile {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 20px;
        }

        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #ddd;
          color: #222;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }

        .profile strong {
          font-size: 12px;
        }

        .profile p {
          margin: 4px 0;
          font-size: 11px;
          color: #bdb9e8;
        }

        .online {
          font-size: 10px;
          color: #54d58a;
        }


        /* NAVIGATION */

        .navigation {
          padding: 5px 8px;
        }

        .navItem {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          margin-bottom: 5px;
          border-radius: 6px;
          color: white;
          text-decoration: none;
          font-size: 13px;
          cursor: pointer;
        }

        .navItem:hover,
        .active {
          background: #6634b7;
        }

        .navItem span:first-child {
          width: 20px;
        }

        .badge {
          margin-left: auto;
          background: #914bd4;
          border-radius: 12px;
          padding: 2px 7px;
          font-size: 10px;
        }

        .logout {
          margin-top: 30px;
        }


        /* TOP BAR */

        .mainContent {
          flex: 1;
          min-width: 0;
        }

        .topbar {
          height: 70px;
          background: white;
          border-bottom: 1px solid #e3e4ee;
          display: flex;
          align-items: center;
          padding: 0 25px;
        }

        .menuButton {
          border: none;
          background: none;
          font-size: 22px;
          color: #525574;
          cursor: pointer;
        }

        .topbar h2 {
          font-size: 14px;
          margin-left: 25px;
        }

        .topRight {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 25px;
        }

        .notification {
          position: relative;
          font-size: 20px;
        }

        .notification span {
          position: absolute;
          top: -8px;
          right: -8px;
          background: red;
          color: white;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          font-size: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .user {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
        }

        .smallAvatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #ddd;
          color: #222;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }


        /* CARDS */

        .cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          padding: 18px 20px;
        }

        .card {
          background: white;
          border: 1px solid #e8e8ef;
          border-radius: 8px;
          padding: 18px;
          display: flex;
          align-items: center;
          gap: 15px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.03);
        }

        .cardIcon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 23px;
          font-weight: bold;
        }

        .purple {
          background: #eee5ff;
          color: #7136c8;
        }

        .green {
          background: #e4f7ec;
          color: #2ca568;
        }

        .red {
          background: #ffe6e6;
          color: #ed4747;
        }

        .blue {
          background: #e5efff;
          color: #3478df;
        }

        .card p {
          margin: 0;
          font-size: 9px;
          color: #555a78;
        }

        .card h3 {
          margin: 7px 0;
          font-size: 23px;
        }

        .card small {
          font-size: 9px;
          color: #686b80;
        }


        /* LOWER SECTION */

        .lowerSection {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 15px;
          padding: 0 20px 20px;
        }

        .panel {
          background: white;
          border: 1px solid #e7e7ef;
          border-radius: 8px;
          padding: 15px;
          overflow: hidden;
        }

        .panelHeader {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .panelHeader h3 {
          margin: 0;
          font-size: 13px;
        }

        .panelHeader a {
          color: #4931d0;
          font-size: 10px;
          cursor: pointer;
        }


        /* TABLE */

        table {
          width: 100%;
          border-collapse: collapse;
          font-size: 9px;
        }

        th {
          text-align: left;
          color: #555a78;
          font-weight: bold;
          padding: 10px 5px;
          border-bottom: 1px solid #eee;
        }

        td {
          padding: 11px 5px;
          border-bottom: 1px solid #f0f0f0;
        }

        .pending {
          background: #fff0b8;
          color: #8b6b00;
          padding: 5px 9px;
          border-radius: 15px;
          font-size: 8px;
        }


        /* DONUT CHART */

        .chartArea {
          min-height: 250px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 35px;
        }

        .donut {
          width: 170px;
          height: 170px;
          border-radius: 50%;

          background: conic-gradient(
            #48b77d 0deg 225deg,
            #ffc928 225deg 315deg,
            #ef4b4b 315deg 360deg
          );

          position: relative;
        }

        .donut::after {
          content: "";
          position: absolute;
          width: 90px;
          height: 90px;
          background: white;
          border-radius: 50%;
          top: 40px;
          left: 40px;
        }

        .legend {
          display: flex;
          flex-direction: column;
          gap: 18px;
          font-size: 11px;
        }

        .legendColor {
          width: 13px;
          height: 13px;
          display: inline-block;
          border-radius: 3px;
          margin-right: 8px;
          vertical-align: middle;
        }

        .approvedColor {
          background: #48b77d;
        }

        .pendingColor {
          background: #ffc928;
        }

        .rejectedColor {
          background: #ef4b4b;
        }


        /* RESPONSIVE */

        @media (max-width: 1000px) {

          .sidebar {
            width: 190px;
          }

          .cards {
            grid-template-columns: repeat(2, 1fr);
          }

          .lowerSection {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 700px) {

          .sidebar {
            display: none;
          }

          .cards {
            grid-template-columns: 1fr;
          }

          .topbar h2 {
            margin-left: 10px;
          }

          .user strong {
            display: none;
          }
        }

      `}</style>
    </>
  );
}