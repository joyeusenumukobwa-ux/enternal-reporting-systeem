 "use client";

import { useState } from "react";

export default function EmployeePage() {
  const [activePage, setActivePage] = useState("Dashboard");

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        backgroundColor: "#f5f7fb",
        fontFamily: "Arial, sans-serif",
        color: "#1f2937",
      }}
    >
      {/* SIDEBAR */}
      <aside
        style={{
          width: "250px",
          minHeight: "100vh",
          backgroundColor: "#ffffff",
          borderRight: "1px solid #e5e7eb",
          padding: "25px 18px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            marginBottom: "35px",
            paddingLeft: "10px",
          }}
        >
          Internal Reporting
        </div>

        <p
          style={{
            fontSize: "12px",
            color: "#9ca3af",
            marginLeft: "10px",
            textTransform: "uppercase",
          }}
        >
          Employee Menu
        </p>

        {/* Dashboard */}
        <button
          onClick={() => setActivePage("Dashboard")}
          style={{
            width: "100%",
            padding: "13px 15px",
            marginBottom: "7px",
            border: "none",
            borderRadius: "8px",
            backgroundColor:
              activePage === "Dashboard" ? "#e8f0fe" : "transparent",
            color: activePage === "Dashboard" ? "#2563eb" : "#4b5563",
            fontWeight: activePage === "Dashboard" ? "bold" : "normal",
            textAlign: "left",
            cursor: "pointer",
            fontSize: "15px",
          }}
        >
          Dashboard
        </button>

        {/* My Reports */}
        <button
          onClick={() => setActivePage("My Reports")}
          style={{
            width: "100%",
            padding: "13px 15px",
            marginBottom: "7px",
            border: "none",
            borderRadius: "8px",
            backgroundColor:
              activePage === "My Reports" ? "#e8f0fe" : "transparent",
            color: activePage === "My Reports" ? "#2563eb" : "#4b5563",
            fontWeight: activePage === "My Reports" ? "bold" : "normal",
            textAlign: "left",
            cursor: "pointer",
            fontSize: "15px",
          }}
        >
          My Reports
        </button>

        {/* Submit Report */}
        <button
          onClick={() => setActivePage("Submit Report")}
          style={{
            width: "100%",
            padding: "13px 15px",
            marginBottom: "7px",
            border: "none",
            borderRadius: "8px",
            backgroundColor:
              activePage === "Submit Report" ? "#e8f0fe" : "transparent",
            color:
              activePage === "Submit Report" ? "#2563eb" : "#4b5563",
            fontWeight:
              activePage === "Submit Report" ? "bold" : "normal",
            textAlign: "left",
            cursor: "pointer",
            fontSize: "15px",
          }}
        >
          Submit Report
        </button>

        {/* Notifications */}
        <button
          onClick={() => setActivePage("Notifications")}
          style={{
            width: "100%",
            padding: "13px 15px",
            marginBottom: "7px",
            border: "none",
            borderRadius: "8px",
            backgroundColor:
              activePage === "Notifications" ? "#e8f0fe" : "transparent",
            color:
              activePage === "Notifications" ? "#2563eb" : "#4b5563",
            fontWeight:
              activePage === "Notifications" ? "bold" : "normal",
            textAlign: "left",
            cursor: "pointer",
            fontSize: "15px",
          }}
        >
          Notifications
        </button>

        {/* Profile */}
        <button
          onClick={() => setActivePage("Profile")}
          style={{
            width: "100%",
            padding: "13px 15px",
            marginBottom: "7px",
            border: "none",
            borderRadius: "8px",
            backgroundColor:
              activePage === "Profile" ? "#e8f0fe" : "transparent",
            color: activePage === "Profile" ? "#2563eb" : "#4b5563",
            fontWeight: activePage === "Profile" ? "bold" : "normal",
            textAlign: "left",
            cursor: "pointer",
            fontSize: "15px",
          }}
        >
          Profile
        </button>

        {/* Logout */}
        <button
          style={{
            marginTop: "auto",
            width: "100%",
            padding: "12px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#fee2e2",
            color: "#dc2626",
            cursor: "pointer",
            fontSize: "15px",
          }}
        >
          Logout
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main
        style={{
          flex: 1,
          padding: "25px 35px",
        }}
      >
        {/* TOP BAR */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "28px",
            }}
          >
            {activePage}
          </h1>

          {/* Employee Profile */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              backgroundColor: "#ffffff",
              padding: "10px 15px",
              borderRadius: "10px",
              border: "1px solid #e5e7eb",
            }}
          >
            <div
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                backgroundColor: "#2563eb",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
              }}
            >
              E
            </div>

            <span>Employee</span>
          </div>
        </div>

        {/* WELCOME */}
        <section
          style={{
            backgroundColor: "#ffffff",
            padding: "25px",
            borderRadius: "12px",
            marginBottom: "25px",
            border: "1px solid #e5e7eb",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Welcome, Employee</h2>

          <p style={{ color: "#6b7280" }}>
            Manage your reports and stay updated with your work activities.
          </p>
        </section>

        {/* CARDS */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          {/* Submitted Reports */}
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "22px",
              borderRadius: "12px",
              border: "1px solid #e5e7eb",
            }}
          >
            <p style={{ color: "#6b7280" }}>Submitted Reports</p>

            <h2 style={{ fontSize: "30px" }}>12</h2>

            <p style={{ color: "#9ca3af" }}>
              Reports you have submitted
            </p>
          </div>

          {/* Pending Reports */}
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "22px",
              borderRadius: "12px",
              border: "1px solid #e5e7eb",
            }}
          >
            <p style={{ color: "#6b7280" }}>Pending Reports</p>

            <h2 style={{ fontSize: "30px" }}>3</h2>

            <p style={{ color: "#9ca3af" }}>
              Reports waiting for review
            </p>
          </div>

          {/* Notifications */}
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "22px",
              borderRadius: "12px",
              border: "1px solid #e5e7eb",
            }}
          >
            <p style={{ color: "#6b7280" }}>Notifications</p>

            <h2 style={{ fontSize: "30px" }}>5</h2>

            <p style={{ color: "#9ca3af" }}>
              New notifications
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section
          style={{
            backgroundColor: "#ffffff",
            padding: "25px",
            borderRadius: "12px",
            border: "1px solid #e5e7eb",
          }}
        >
          {activePage === "Dashboard" && (
            <>
              <h2>Employee Dashboard</h2>

              <p>
                From here you can submit your reports, view your report
                history and check notifications from your manager.
              </p>

              <button
                style={{
                  padding: "12px 20px",
                  border: "none",
                  borderRadius: "7px",
                  backgroundColor: "#2563eb",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Submit New Report
              </button>
            </>
          )}

          {activePage === "My Reports" && (
            <>
              <h2>My Reports</h2>

              <p>
                Here you will see all the reports that you have submitted.
              </p>
            </>
          )}

          {activePage === "Submit Report" && (
            <>
              <h2>Submit Report</h2>

              <p>
                Create and submit your periodic report here.
              </p>

              <button
                style={{
                  padding: "12px 20px",
                  border: "none",
                  borderRadius: "7px",
                  backgroundColor: "#2563eb",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Create Report
              </button>
            </>
          )}

          {activePage === "Notifications" && (
            <>
              <h2>Notifications</h2>

              <p>
                You currently have 5 notifications.
              </p>
            </>
          )}

          {activePage === "Profile" && (
            <>
              <h2>My Profile</h2>

              <p>
                View and manage your employee profile information.
              </p>
            </>
          )}
        </section>
      </main>
    </div>
  );
}