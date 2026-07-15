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
import StudentProfile from "../Website/Pages/StudentProfile/StudentProfile";
import SchoolProfile from "../Website/Pages/SchoolProfile/SchoolProfile";
import Results from "../Website/Pages/results/results";
import ExamSchedule from "../Website/Pages/ExamSchedule/ExamSchedule";
import MyOlympiads from "../Website/Pages/MyOlympiads/MyOlympiads";
import Gallery from "../Website/Pages/Gallery/Gallery";
import SyllabusList from "../Website/Pages/SyllabusList/SyllabusList";
import SyllabusDetails from "../Website/Pages/SyllabusDetails/SyllabusDetails";
import PracticePaper from "../Website/Pages/PracticePaperDetails/PracticePaperDetails";
import Class7Science from "../Website/Pages/SyllabusDetails/class7Science";
import Class4Mathematics from "../Website/Pages/SyllabusDetails/class4Mathematics";
import PracticePaperList from "../Website/Pages/PracticePaperList/PracticePaperList";
import PracticePaperDetails from "../Website/Pages/PracticePaperDetails/PracticePaperDetails";
import PracticePaperClass3Science from "../Website/Pages/PracticePaperDetails/practicepaperclass3science";
import PracticePaperClass3English from "../Website/Pages/PracticePaperDetails/Practicepaperclass3english";
import PracticePaperClass3Maths from "../Website/Pages/PracticePaperDetails/PracticePaperClass3Maths";
import PracticePaperClass4English from "../Website/Pages/PracticePaperDetails/PracticePaperClass4English";
import PracticePaperClass4Maths from "../Website/Pages/PracticePaperDetails/Practicepaperclass4maths";
import PracticePaperClass4Science from "../Website/Pages/PracticePaperDetails/Practicepaperclass4science";
import PracticePaperClass5English from "../Website/Pages/PracticePaperDetails/Practicepaperclass5english";
import PracticePaperClass5Maths from "../Website/Pages/PracticePaperDetails/Practicepaperclass5maths";
import PracticePaperClass5Science from "../Website/Pages/PracticePaperDetails/Practicepaperclass5science";
import PracticePaperClass6English from "../Website/Pages/PracticePaperDetails/Practicepaperclass6english";
import PracticePaperClass6Maths from "../Website/Pages/PracticePaperDetails/Practicepaperclass6maths";
import PracticePaperClass6Science from "../Website/Pages/PracticePaperDetails/Practicepaperclass6science";
import PracticePaperClass7English from "../Website/Pages/PracticePaperDetails/Practicepaperclass7english";
import PracticePaperClass7Maths from "../Website/Pages/PracticePaperDetails/Practicepaperclass7maths";
import PracticePaperClass7Science from "../Website/Pages/PracticePaperDetails/Practicepaperclass7science";
import PracticePaperClass8English from "../Website/Pages/PracticePaperDetails/Practicepaperclass8english";
import PracticePaperClass8Maths from "../Website/Pages/PracticePaperDetails/Practicepaperclass8maths";
import PracticePaperClass8Science from "../Website/Pages/PracticePaperDetails/Practicepaperclass8science";
import PracticePaperClass9English from "../Website/Pages/PracticePaperDetails/Practicepaperclass9english";
import PracticePaperClass9Maths from "../Website/Pages/PracticePaperDetails/Practicepaperclass9maths";
import PracticePaperClass9Science from "../Website/Pages/PracticePaperDetails/Practicepaperclass9science";
import PracticePaperClass10English from "../Website/Pages/PracticePaperDetails/Practicepaperclass10english";
import PracticePaperClass10Maths from "../Website/Pages/PracticePaperDetails/Practicepaperclass10maths";
import PracticePaperClass10Science from "../Website/Pages/PracticePaperDetails/Practicepaperclass10science";
import SchoolOlympiads from "../Website/Pages/SchoolOlympiads/SchoolOlympiads";
import Syllabus3English from "../Website/Pages/SyllabusDetails/syllabus-3-english";
import Syllabus4English from "../Website/Pages/SyllabusDetails/syllabus-4-english";
import Syllabus5English from "../Website/Pages/SyllabusDetails/syllabus-5-english";
import Syllabus6English from "../Website/Pages/SyllabusDetails/syllabus-6-english";
import Syllabus7English from "../Website/Pages/SyllabusDetails/syllabus-7-english";
import Syllabus8English from "../Website/Pages/SyllabusDetails/syllabus-8-english";
import Syllabus9English from "../Website/Pages/SyllabusDetails/syllabus-9-english";
import Syllabus10English from "../Website/Pages/SyllabusDetails/syllabus-10-english";

import Syllabus3Math from "../Website/Pages/SyllabusDetails/syllabus-3-math";
import Syllabus4Math from "../Website/Pages/SyllabusDetails/syllabus-4-math";
import Syllabus5Math from "../Website/Pages/SyllabusDetails/syllabus-5-math";
import Syllabus6Math from "../Website/Pages/SyllabusDetails/syllabus-6-math";
import Syllabus7Math from "../Website/Pages/SyllabusDetails/syllabus-7-math";
import Syllabus8Math from "../Website/Pages/SyllabusDetails/syllabus-8-math";
import Syllabus9Math from "../Website/Pages/SyllabusDetails/syllabus-9-math";
import Syllabus10Math from "../Website/Pages/SyllabusDetails/syllabus-10-math";

import Syllabus3Science from "../Website/Pages/SyllabusDetails/syllabus-3-Science";
import Syllabus4Science from "../Website/Pages/SyllabusDetails/syllabus-4-Science";
import Syllabus5Science from "../Website/Pages/SyllabusDetails/syllabus-5-Science";
import Syllabus6Science from "../Website/Pages/SyllabusDetails/syllabus-6-Science";
import Syllabus7Science from "../Website/Pages/SyllabusDetails/syllabus-7-Science";
import Syllabus8Science from "../Website/Pages/SyllabusDetails/syllabus-8-Science";
import Syllabus9Science from "../Website/Pages/SyllabusDetails/syllabus-9-Science";
import Syllabus10Science from "../Website/Pages/SyllabusDetails/syllabus-10-Science";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

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
      <Route path="/faq" element={<Faq />} />
      <Route path="/book-details" element={<BookDetails />} />
      <Route path="/student/my-profile" element={<StudentProfile />} />
      <Route path="/school/my-profile" element={<SchoolProfile />} />
      <Route path="/results" element={<Results />} />
      <Route path="/exam-schedule" element={<ExamSchedule />} />
      <Route path="/student/my-olympiads" element={<MyOlympiads />} />
      <Route path="/school/my-olympiads" element={<SchoolOlympiads />} />
      <Route path="/syllabus-list" element={<SyllabusList />} />
      <Route path="/syllabus-details" element={<SyllabusDetails />} />
      <Route path="/practice-paper-list" element={<PracticePaperList />} />
      <Route
        path="/practice-paper-details"
        element={<PracticePaperDetails />}
      />
      <Route path="/gallery" element={<Gallery />} />
      {/* <Route
        path="/syllabus/:classSegment/:subject"
        element={<SyllabusDetails />}
      /> */}
      <Route path="/syllabus/class-7-science" element={<Class7Science />} />
      <Route
        path="/practice-paper/class-3-science"
        element={<PracticePaperClass3Science />}
      />
      <Route
        path="/practice-paper/class-3-english"
        element={<PracticePaperClass3English />}
      />

      <Route
        path="/syllabus/class-4-mathematics"
        element={<Class4Mathematics />}
      />
      <Route
        path="/practice-paper/class-3-maths"
        element={<PracticePaperClass3Maths />}
      />
      <Route
        path="/practice-paper/class-4-english"
        element={<PracticePaperClass4English />}
      />
      <Route
        path="/practice-paper/class-4-maths"
        element={<PracticePaperClass4Maths />}
      />
      <Route
        path="/practice-paper/class-4-science"
        element={<PracticePaperClass4Science />}
      />
      <Route
        path="/practice-paper/class-5-english"
        element={<PracticePaperClass5English />}
      />
      <Route
        path="/practice-paper/class-5-maths"
        element={<PracticePaperClass5Maths />}
      />
      <Route
        path="/practice-paper/class-5-science"
        element={<PracticePaperClass5Science />}
      />
      <Route
        path="/practice-paper/class-6-english"
        element={<PracticePaperClass6English />}
      />
      <Route
        path="/practice-paper/class-6-maths"
        element={<PracticePaperClass6Maths />}
      />
      <Route
        path="/practice-paper/class-6-science"
        element={<PracticePaperClass6Science />}
      />
      <Route
        path="/practice-paper/class-7-english"
        element={<PracticePaperClass7English />}
      />
      <Route
        path="/practice-paper/class-7-maths"
        element={<PracticePaperClass7Maths />}
      />
      <Route
        path="/practice-paper/class-7-science"
        element={<PracticePaperClass7Science />}
      />
      <Route
        path="/practice-paper/class-8-english"
        element={<PracticePaperClass8English />}
      />
      <Route
        path="/practice-paper/class-8-maths"
        element={<PracticePaperClass8Maths />}
      />
      <Route
        path="/practice-paper/class-8-science"
        element={<PracticePaperClass8Science />}
      />
      <Route
        path="/practice-paper/class-9-english"
        element={<PracticePaperClass9English />}
      />
      <Route
        path="/practice-paper/class-9-maths"
        element={<PracticePaperClass9Maths />}
      />
      <Route
        path="/practice-paper/class-9-science"
        element={<PracticePaperClass9Science />}
      />
      <Route
        path="/practice-paper/class-10-english"
        element={<PracticePaperClass10English />}
      />
      <Route
        path="/practice-paper/class-10-maths"
        element={<PracticePaperClass10Maths />}
      />
      <Route
        path="/practice-paper/class-10-science"
        element={<PracticePaperClass10Science />}
      />
      <Route path="/syllabus" element={<SyllabusList />} />

      <Route path="/syllabus-details" element={<SyllabusDetails />} />

      <Route path="/syllabus-3-english" element={<Syllabus3English />} />
      <Route path="/syllabus-4-english" element={<Syllabus4English />} />
      <Route path="/syllabus-5-english" element={<Syllabus5English />} />
      <Route path="/syllabus-6-english" element={<Syllabus6English />} />
      <Route path="/syllabus-7-english" element={<Syllabus7English />} />
      <Route path="/syllabus-8-english" element={<Syllabus8English />} />
      <Route path="/syllabus-9-english" element={<Syllabus9English />} />
      <Route path="/syllabus-10-english" element={<Syllabus10English />} />

      <Route path="/syllabus-3-math" element={<Syllabus3Math />} />
      <Route path="/syllabus-4-math" element={<Syllabus4Math />} />
      <Route path="/syllabus-5-math" element={<Syllabus5Math />} />
      <Route path="/syllabus-6-math" element={<Syllabus6Math />} />
      <Route path="/syllabus-7-math" element={<Syllabus7Math />} />
      <Route path="/syllabus-8-math" element={<Syllabus8Math />} />
      <Route path="/syllabus-9-math" element={<Syllabus9Math />} />
      <Route path="/syllabus-10-math" element={<Syllabus10Math />} />

      <Route path="/syllabus-3-science" element={<Syllabus3Science />} />
      <Route path="/syllabus-4-science" element={<Syllabus4Science />} />
      <Route path="/syllabus-5-science" element={<Syllabus5Science />} />
      <Route path="/syllabus-6-science" element={<Syllabus6Science />} />
      <Route path="/syllabus-7-science" element={<Syllabus7Science />} />
      <Route path="/syllabus-8-science" element={<Syllabus8Science />} />
      <Route path="/syllabus-9-science" element={<Syllabus9Science />} />
      <Route path="/syllabus-10-science" element={<Syllabus10Science />} />
    </Routes>
  );
}

export default AppRoutes;
