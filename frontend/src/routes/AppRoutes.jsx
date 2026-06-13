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
import { Routes, Route } from "react-router-dom";

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
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route path="/student-login" element={<StudentLogin />} />
      <Route path="/student-registration" element={<StudentRegistration />} />

      <Route path="/school-login" element={<SchoolLogin />} />
      <Route path="/school-registration" element={<SchoolRegistration />} />

      <Route path="/home" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />

      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/olympiads-list" element={<OlympiadsList />} />
      <Route path="/books-store" element={<BookList />} />
      <Route path="/olympiads-details" element={<OlympiadDetails />} />
      <Route path="/faq-page" element={<Faq />} />
      <Route path="/book-details" element={<BookDetails />} />
    </Routes>
  );
}

export default AppRoutes;
