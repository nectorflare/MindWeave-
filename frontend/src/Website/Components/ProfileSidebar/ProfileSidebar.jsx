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
  Bell,
  KeyRound,
  LogOut,
} from "lucide-react";
import "./ProfileSidebar.css";

const navItems = [
  { icon: User, label: "My Profile", path: "/student/my-profile" },
  { icon: Award, label: "My Olympiads", path: "/student/my-olympiads" },
  { icon: ShoppingBag, label: "My Orders", path: "/student/my-orders" },
  {
    icon: FileBadge,
    label: "My Certificates",
    path: "/student/my-certificates",
  },
  { icon: Download, label: "My Downloads", path: "/student/my-downloads" },
  {
    icon: CalendarDays,
    label: "Exam Schedule",
    path: "/exam-schedule",
  },
  { icon: ListChecks, label: "Results", path: "/results" },
  {
    icon: Bell,
    label: "Notifications",
    path: "/student/notifications",
    badge: 3,
  },
  {
    icon: KeyRound,
    label: "Change Password",
    path: "/student/change-password",
  },
];

export default function ProfileSidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <aside className="psb-sidebar">
      <nav className="psb-nav">
        {navItems.map(({ icon: Icon, label, path, badge }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `psb-link${isActive ? " psb-active" : ""}`
            }
          >
            <Icon size={18} />
            <span>{label}</span>
            {badge ? <span className="psb-badge">{badge}</span> : null}
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
