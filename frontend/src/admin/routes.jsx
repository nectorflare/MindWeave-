import React from "react";
import GallerySettings from "views/admin/GallerySettings";
import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdContactPhone,
  MdPhotoLibrary,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import Student from "views/admin/Student";
import School from "views/admin/School";
import Profile from "views/admin/profile";
import RTL from "views/admin/rtl";
import ContactUsSettings from "views/admin/ContactUsSettings";

// Auth Imports
import SignInCentered from "views/auth/signIn";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },
  {
    name: "Student",
    layout: "/admin",
    path: "/student",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: <Student />,
    secondary: true,
  },
  {
    name: "School",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: "/school",
    component: <School />,
  },
  {
    name: "Contact Us",
    layout: "/admin",
    path: "/contact-us",
    icon: (
      <Icon as={MdContactPhone} width="20px" height="20px" color="inherit" />
    ),
    component: <ContactUsSettings />,
  },
  {
    name: "Gallery",
    layout: "/admin",
    path: "/gallery",
    icon: (
      <Icon as={MdPhotoLibrary} width="20px" height="20px" color="inherit" />
    ),
    component: <GallerySettings />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: <Profile />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: <SignInCentered />,
  },
  {
    name: "RTL Admin",
    layout: "/rtl",
    path: "/rtl-default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <RTL />,
  },
];

export default routes;
