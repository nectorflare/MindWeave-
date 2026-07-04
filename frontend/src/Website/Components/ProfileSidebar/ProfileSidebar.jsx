import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  User,
  Award,
  ShoppingBag,
  FileBadge,
  Download,
  CalendarDays,
  ListChecks,
  KeyRound,
  LogOut,
} from "lucide-react";
import "./ProfileSidebar.css";

export default function ProfileSidebar() {
  const navigate = useNavigate();

  // localStorage se user object nikala
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  // role ke hisaab se base path decide kiya
  const isSchool = user?.role === "SCHOOL_ADMIN";
  const basePath = isSchool ? "/school" : "/student";

  const navItems = [
    { icon: User, label: "My Profile", path: `${basePath}/my-profile` },
    { icon: Award, label: "My Olympiads", path: `${basePath}/my-olympiads` },
    { icon: ShoppingBag, label: "My Orders", path: `${basePath}/my-orders` },
    {
      icon: FileBadge,
      label: "My Certificates",
      path: `${basePath}/my-certificates`,
    },
    {
      icon: Download,
      label: "My Downloads",
      path: `${basePath}/my-downloads`,
    },
    { icon: CalendarDays, label: "Exam Schedule", path: "/exam-schedule" },
    { icon: ListChecks, label: "Results", path: "/results" },
    {
      icon: KeyRound,
      label: "Change Password",
      path: `${basePath}/change-password`,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("studentId");
    localStorage.removeItem("schoolId");
    navigate("/");
  };

  return (
    <aside className="psb-sidebar">
      <nav className="psb-nav">
        {navItems.map(({ icon: Icon, label, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `psb-link${isActive ? " psb-active" : ""}`
            }
          >
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}

        <button
          type="button"
          className="psb-link psb-logout"
          onClick={handleLogout}
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </nav>
    </aside>
  );
}
