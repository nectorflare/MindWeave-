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

import StudentLogin from "../Auth/Student/StudentLogin";
import StudentRegistration from "../Auth/Student/StudentRegistration";

import SchoolLogin from "../Auth/School/SchoolLogin";
import SchoolRegistration from "../Auth/School/SchoolRegistration";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route path="/student-login" element={<StudentLogin />} />
      <Route path="/student-registration" element={<StudentRegistration />} />

      <Route path="/school-login" element={<SchoolLogin />} />
      <Route path="/school-registration" element={<SchoolRegistration />} />

      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;
