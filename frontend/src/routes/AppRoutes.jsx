// import { Routes, Route } from "react-router-dom";

// import Home from "../Website/Pages/Landing/Landing";

// import StudentLogin from "../Auth/Student/StudentLogin";
// import StudentRegistration from "../Auth/Student/StudentRegistration";

// import SchoolLogin from "../Auth/School/SchoolLogin";
// import SchoolRegistration from "../Auth/School/SchoolRegistration";

// function AppRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />

//       <Route path="/student-login" element={<StudentLogin />} />

//       <Route path="/student-registration" element={<StudentRegistration />} />

//       <Route path="/school-login" element={<SchoolLogin />} />

//       <Route path="/school-registration" element={<SchoolRegistration />} />
//     </Routes>
//   );
// }

// export default AppRoutes;
import { Navigate, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Landing from "../Website/Pages/Landing/Landing";
import Home from "../Website/Pages/Home/Home";
import AboutUs from "../Website/Pages/AboutUs/AboutUs";
import StudentLogin from "../Auth/Student/StudentLogin";
import StudentRegistration from "../Auth/Student/StudentRegistration";
import SchoolLogin from "../Auth/School/SchoolLogin";
import SchoolRegistration from "../Auth/School/SchoolRegistration";
import PrivacyPolicy from "../Website/Pages/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "../Website/Pages/TermsConditions/TermsConditions";
import ContactUs from "../Website/Pages/ContactUs/ContactUs";
import OlympiadsList from "../Website/Pages/OlympiadsList/OlympiadsList";
import BookList from "../Website/Pages/BookStore/BookList";
import OlympiadDetails from "../Website/Pages/OlympiadDetails/OlympiadDetails";
import Faq from "../Website/Pages/Faq/Faq";
import BookDetails from "../Website/Pages/BookDetails/BookDetails";
import ProtectedRoute from "./ProtectedRoute";
import StatusPage from "../Website/Pages/StatusPage";
const Gallery=lazy(()=>import("../Website/Pages/Portal/LiveGallery"));const ExamSchedule=lazy(()=>import("../Website/Pages/Portal/LiveExamSchedule"));const MyOlympiads=lazy(()=>import("../Website/Pages/MyOlympiads/MyOlympiads"));const SchoolOlympiads=lazy(()=>import("../Website/Pages/Portal/LiveSchoolOlympiads"));const Results=lazy(()=>import("../Website/Pages/Portal/LiveResults"));const SyllabusList=lazy(()=>import("../Website/Pages/SyllabusList/SyllabusList"));const SyllabusDetails=lazy(()=>import("../Website/Pages/SyllabusDetails/SyllabusDetails"));const PracticePaperList=lazy(()=>import("../Website/Pages/PracticePaperList/PracticePaperList"));const PracticePaperDetails=lazy(()=>import("../Website/Pages/PracticePaperDetails/PracticePaperDetails"));const ResourcePage=lazy(()=>import("../Website/Pages/Portal/ResourcePage"));const AccountProfile=lazy(()=>import("../Website/Pages/Portal/AccountProfile"));const ChangePassword=lazy(()=>import("../Website/Pages/Portal/ChangePassword"));const CartPage=lazy(()=>import("../Website/Pages/Portal/CartPage"));const LiveExam=lazy(()=>import("../Website/Pages/Portal/LiveExam"));const AdminLogin=lazy(()=>import("../Website/Pages/Portal/AdminLogin"));const AdminDashboard=lazy(()=>import("../Website/Pages/Portal/AdminDashboard"));const AdminResource=lazy(()=>import("../Website/Pages/Portal/AdminResource"));const PasswordReset=lazy(()=>import("../Website/Pages/Portal/PasswordReset"));
const QuizPage=lazy(()=>import("../Website/Pages/Portal/QuizPage"));
const OurTeam=lazy(()=>import("../Website/Pages/OurTeam/OurTeam"));
const OnlineTestUpload=lazy(()=>import("../Website/Pages/Portal/OnlineTestUpload"));
const OnlineTestManager=lazy(()=>import("../Website/Pages/Portal/OnlineTestManager"));

function AppRoutes() {
  return (
    <Suspense fallback={<main style={{padding:32}}>Loading…</main>}><Routes>
      <Route path="/" element={<Landing />} />

      <Route path="/student-login" element={<StudentLogin />} />
      <Route path="/student-registration" element={<StudentRegistration />} />

      <Route path="/school-login" element={<SchoolLogin />} />
      <Route path="/school-registration" element={<SchoolRegistration />} />

      <Route path="/home" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/our-team" element={<OurTeam />} />

      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/olympiads-list" element={<OlympiadsList />} />
      <Route path="/books-store" element={<BookList />} />
      <Route path="/olympiads-details" element={<Navigate to="/olympiads-list" replace />} />
      <Route path="/olympiads/:examId" element={<OlympiadDetails />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/book-details" element={<Navigate to="/books-store" replace />} />
      <Route path="/books/:bookId" element={<BookDetails />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/exam-schedule" element={<ExamSchedule />} />
      <Route path="/syllabus" element={<SyllabusList />} />
      <Route path="/syllabus-details" element={<Navigate to="/syllabus" replace />} />
      <Route path="/syllabus-details/:subjectId" element={<SyllabusDetails />} />
      <Route path="/practice-papers" element={<PracticePaperList />} />
      <Route path="/quizzes" element={<QuizPage />} />
      <Route path="/online-tests" element={<QuizPage />} />
      <Route path="/practice-paper-details" element={<Navigate to="/practice-papers" replace />} />
      <Route path="/practice-paper-details/:paperId" element={<PracticePaperDetails />} />
      <Route path="/results" element={<ProtectedRoute><Results /></ProtectedRoute>} />
      <Route path="/student/my-olympiads" element={<ProtectedRoute roles={["STUDENT"]}><MyOlympiads /></ProtectedRoute>} />
      <Route path="/school/my-olympiads" element={<ProtectedRoute roles={["SCHOOL_ADMIN"]}><SchoolOlympiads /></ProtectedRoute>} />
      <Route path="/student/my-profile" element={<ProtectedRoute roles={["STUDENT"]}><AccountProfile type="student" /></ProtectedRoute>} />
      <Route path="/school/my-profile" element={<ProtectedRoute roles={["SCHOOL_ADMIN"]}><AccountProfile type="school" /></ProtectedRoute>} />
      <Route path="/student/my-orders" element={<ProtectedRoute roles={["STUDENT"]}><ResourcePage title="My orders" endpoint="/api/v1/students/me/orders/books" /></ProtectedRoute>} />
      <Route path="/student/my-certificates" element={<ProtectedRoute roles={["STUDENT"]}><ResourcePage title="My certificates" endpoint="/api/v1/students/me/certificates" /></ProtectedRoute>} />
      <Route path="/student/my-downloads" element={<ProtectedRoute roles={["STUDENT"]}><ResourcePage title="Digital library" endpoint="/api/v1/students/me/library" /></ProtectedRoute>} />
      <Route path="/student/admit-cards" element={<ProtectedRoute roles={["STUDENT"]}><ResourcePage title="Admit cards" endpoint="/api/v1/students/me/admit-cards" /></ProtectedRoute>} />
      <Route path="/notifications" element={<ProtectedRoute><ResourcePage title="Notifications" endpoint="/api/v1/notifications" /></ProtectedRoute>} />
      <Route path="/student/change-password" element={<ProtectedRoute roles={["STUDENT"]}><ChangePassword /></ProtectedRoute>} />
      <Route path="/school/change-password" element={<ProtectedRoute roles={["SCHOOL_ADMIN"]}><ChangePassword /></ProtectedRoute>} />
      <Route path="/school/my-orders" element={<ProtectedRoute roles={["SCHOOL_ADMIN"]}><ResourcePage title="School orders" endpoint="/api/v1/schools/me/orders/books" /></ProtectedRoute>} />
      <Route path="/school/my-certificates" element={<ProtectedRoute roles={["SCHOOL_ADMIN"]}><ResourcePage title="School admit cards" endpoint="/api/v1/schools/me/admit-cards" /></ProtectedRoute>} />
      <Route path="/school/my-downloads" element={<ProtectedRoute roles={["SCHOOL_ADMIN"]}><ResourcePage title="School reports" endpoint="/api/v1/schools/me/reports" /></ProtectedRoute>} />
      <Route path="/dashboard" element={<ProtectedRoute><RoleHome /></ProtectedRoute>} />
      <Route path="/terms-and-conditions" element={<TermsConditions />} />
      <Route path="/unauthorized" element={<StatusPage title="Access denied" message="Your account does not have access to this page." />} />
      <Route path="/cart" element={<ProtectedRoute roles={["STUDENT","SCHOOL_ADMIN"]}><CartPage /></ProtectedRoute>} />
      <Route path="/checkout" element={<ProtectedRoute roles={["STUDENT","SCHOOL_ADMIN"]}><CartPage /></ProtectedRoute>} />
      <Route path="/exam/:examId" element={<ProtectedRoute roles={["STUDENT"]}><LiveExam /></ProtectedRoute>} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<ProtectedRoute roles={["ADMIN_STAFF"]}><AdminDashboard /></ProtectedRoute>} />
      <Route path="/admin/resource/:resource" element={<ProtectedRoute roles={["ADMIN_STAFF"]}><AdminResource /></ProtectedRoute>} />
      <Route path="/admin/online-tests/upload" element={<ProtectedRoute roles={["ADMIN_STAFF"]}><OnlineTestUpload /></ProtectedRoute>} />
      <Route path="/admin/online-tests/manage" element={<ProtectedRoute roles={["ADMIN_STAFF"]}><OnlineTestManager /></ProtectedRoute>} />
      <Route path="/forgot-password" element={<PasswordReset />} />
      <Route path="*" element={<StatusPage />} />
    </Routes></Suspense>
  );
}

function RoleHome() {
  const role = JSON.parse(localStorage.getItem("user") || "{}").role;
  return <AccountProfile type={role === "SCHOOL_ADMIN" ? "school" : "student"} />;
}

export default AppRoutes;
