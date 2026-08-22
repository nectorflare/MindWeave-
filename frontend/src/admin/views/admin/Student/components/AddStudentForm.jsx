// import React, { useState } from 'react';
// import {
//   Grid,
//   GridItem,
//   FormControl,
//   FormLabel,
//   Input,
//   InputGroup,
//   InputRightElement,
//   IconButton,
//   Select,
//   Button,
//   HStack,
//   Heading,
//   useToast,
//   FormErrorMessage,
// } from '@chakra-ui/react';
// import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
// import Card from 'components/card/Card'; // Horizon UI ka reusable Card

// // ---------- Static Dropdown Data ----------
// const CLASS_OPTIONS = [
//   'Nursery',
//   'LKG',
//   'UKG',
//   '1',
//   '2',
//   '3',
//   '4',
//   '5',
//   '6',
//   '7',
//   '8',
//   '9',
//   '10',
//   '11',
//   '12',
// ];

// const GENDER_OPTIONS = ['Male', 'Female', 'Other'];

// const BLOOD_GROUP_OPTIONS = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

// const STATE_OPTIONS = [
//   'Andhra Pradesh',
//   'Arunachal Pradesh',
//   'Assam',
//   'Bihar',
//   'Chhattisgarh',
//   'Goa',
//   'Gujarat',
//   'Haryana',
//   'Himachal Pradesh',
//   'Jharkhand',
//   'Karnataka',
//   'Kerala',
//   'Madhya Pradesh',
//   'Maharashtra',
//   'Manipur',
//   'Meghalaya',
//   'Mizoram',
//   'Nagaland',
//   'Odisha',
//   'Punjab',
//   'Rajasthan',
//   'Sikkim',
//   'Tamil Nadu',
//   'Telangana',
//   'Tripura',
//   'Uttar Pradesh',
//   'Uttarakhand',
//   'West Bengal',
//   'Andaman and Nicobar Islands',
//   'Chandigarh',
//   'Dadra and Nagar Haveli and Daman and Diu',
//   'Delhi',
//   'Jammu and Kashmir',
//   'Ladakh',
//   'Lakshadweep',
//   'Puducherry',
// ];

// // ---------- Helpers ----------
// // Naam fields: sirf letters aur space allow — koi digit ya special character (. ' - etc) nahi
// const NAME_REGEX = /^[A-Za-z\s]*$/;
// const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const PASSWORD_REGEX =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

// const MIN_AGE = 3;
// const MAX_AGE = 25;
// const ROLL_NUMBER_LENGTH = 5;

// // ---------- Reusable Field (defined OUTSIDE the form component) ----------
// // IMPORTANT: Field must NOT be defined inside AddStudentForm(). If it were
// // declared inside, React would treat it as a brand-new component type on
// // every re-render (every keystroke) and remount the <input>, which is why
// // the field would lose focus after a single character. Keeping it outside
// // with value/error/onChange passed as props keeps the same component
// // identity across renders, so typing works normally.
// const Field = ({
//   label,
//   name,
//   type = 'text',
//   options,
//   isRequired = false,
//   value,
//   error,
//   onChange,
//   ...rest
// }) => (
//   <FormControl isInvalid={!!error} isRequired={isRequired}>
//     <FormLabel fontSize="sm" fontWeight="600">
//       {label}
//     </FormLabel>
//     {type === 'select' ? (
//       <Select
//         name={name}
//         placeholder={`Select ${label}`}
//         value={value}
//         onChange={onChange}
//       >
//         {options.map((opt) => (
//           <option key={opt} value={opt}>
//             {opt}
//           </option>
//         ))}
//       </Select>
//     ) : (
//       <Input
//         name={name}
//         type={type}
//         value={value}
//         onChange={onChange}
//         placeholder={label}
//         {...rest}
//       />
//     )}
//     <FormErrorMessage>{error}</FormErrorMessage>
//   </FormControl>
// );

// // ---------- Password Field with show/hide (also outside, same reason) ----------
// const PasswordField = ({
//   label,
//   name,
//   value,
//   error,
//   onChange,
//   show,
//   toggleShow,
// }) => (
//   <FormControl isInvalid={!!error} isRequired>
//     <FormLabel fontSize="sm" fontWeight="600">
//       {label}
//     </FormLabel>
//     <InputGroup>
//       <Input
//         name={name}
//         type={show ? 'text' : 'password'}
//         value={value}
//         onChange={onChange}
//         placeholder={label}
//       />
//       <InputRightElement>
//         <IconButton
//           aria-label={show ? 'Hide password' : 'Show password'}
//           icon={show ? <MdVisibilityOff /> : <MdVisibility />}
//           size="sm"
//           variant="ghost"
//           onClick={toggleShow}
//         />
//       </InputRightElement>
//     </InputGroup>
//     <FormErrorMessage>{error}</FormErrorMessage>
//   </FormControl>
// );

// const initialState = {
//   // Student Information
//   studentName: '',
//   rollNumber: '',
//   admissionNumber: '',
//   studentClass: '',
//   section: '',
//   dob: '',
//   gender: '',
//   bloodGroup: '',

//   // School Information
//   schoolName: '',
//   schoolCode: '',

//   // Address
//   addressLine1: '',
//   addressLine2: '',
//   city: '',
//   district: '',
//   state: '',
//   pincode: '',
//   country: '',

//   // Parent / Guardian Details
//   fatherName: '',
//   fatherMobile: '',
//   motherName: '',
//   motherMobile: '',
//   guardianEmail: '',
//   guardianWhatsapp: '',

//   // Login Details
//   loginEmail: '',
//   password: '',
//   confirmPassword: '',
// };

// export default function AddStudentForm() {
//   const [form, setForm] = useState(initialState);
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const toast = useToast();

//   // ---------- Change Handler (with live restrictions) ----------
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     let newValue = value;

//     // Name-only fields: block digits AND special characters (only letters/space allowed)
//     const nameFields = [
//       'studentName',
//       'fatherName',
//       'motherName',
//       'city',
//       'district',
//     ];
//     if (nameFields.includes(name)) {
//       if (!NAME_REGEX.test(newValue)) return; // ignore invalid keystroke
//     }

//     // Digit-only fields with max length (roll number, school code, pincode, mobile numbers)
//     const digitFieldLimits = {
//       rollNumber: ROLL_NUMBER_LENGTH,
//       schoolCode: null,
//       pincode: 6,
//       fatherMobile: 10,
//       motherMobile: 10,
//       guardianWhatsapp: 10,
//     };
//     if (digitFieldLimits[name] !== undefined) {
//       const limit = digitFieldLimits[name];
//       const digitsOnly = newValue.replace(/\D/g, '');
//       newValue = limit ? digitsOnly.slice(0, limit) : digitsOnly;
//     }

//     setForm((prev) => ({ ...prev, [name]: newValue }));

//     // Live password/confirm password validation
//     if (name === 'password' || name === 'confirmPassword') {
//       setErrors((prev) => {
//         const updated = { ...prev };
//         const pwd = name === 'password' ? newValue : form.password;
//         const confirmPwd =
//           name === 'confirmPassword' ? newValue : form.confirmPassword;

//         if (name === 'password') {
//           if (newValue && !PASSWORD_REGEX.test(newValue)) {
//             updated.password =
//               'Min 8 characters incl. uppercase, lowercase, number & special symbol';
//           } else {
//             delete updated.password;
//           }
//         }

//         if (confirmPwd) {
//           if (pwd !== confirmPwd) {
//             updated.confirmPassword = 'Passwords do not match';
//           } else {
//             delete updated.confirmPassword;
//           }
//         } else {
//           delete updated.confirmPassword;
//         }
//         return updated;
//       });
//     } else if (errors[name]) {
//       setErrors((prev) => {
//         const updated = { ...prev };
//         delete updated[name];
//         return updated;
//       });
//     }
//   };

//   // ---------- Age Validation Helper ----------
//   const isValidDob = (dobString) => {
//     if (!dobString) return false;
//     const dob = new Date(dobString);
//     if (Number.isNaN(dob.getTime())) return false;

//     const today = new Date();
//     if (dob > today) return false;

//     let age = today.getFullYear() - dob.getFullYear();
//     const monthDiff = today.getMonth() - dob.getMonth();
//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
//       age--;
//     }
//     return age >= MIN_AGE && age <= MAX_AGE;
//   };

//   // ---------- Full Form Validation ----------
//   const validate = () => {
//     const newErrors = {};

//     const requiredFields = [
//       'studentName',
//       'rollNumber',
//       'admissionNumber',
//       'studentClass',
//       'section',
//       'dob',
//       'gender',
//       'schoolName',
//       'schoolCode',
//       'addressLine1',
//       'city',
//       'district',
//       'state',
//       'pincode',
//       'country',
//       'fatherName',
//       'fatherMobile',
//       'motherName',
//       'motherMobile',
//       'guardianEmail',
//       'loginEmail',
//       'password',
//       'confirmPassword',
//     ];

//     requiredFields.forEach((field) => {
//       if (!String(form[field] ?? '').trim()) {
//         newErrors[field] = 'Required';
//       }
//     });

//     // Name fields: only letters/space allowed (extra safety net besides live block)
//     const nameFieldsToValidate = [
//       'studentName',
//       'fatherName',
//       'motherName',
//       'city',
//       'district',
//     ];
//     nameFieldsToValidate.forEach((field) => {
//       if (form[field] && !NAME_REGEX.test(form[field])) {
//         newErrors[field] = 'Only letters and spaces are allowed';
//       }
//     });

//     // Roll Number: exactly 5 digits, numbers only
//     if (form.rollNumber && form.rollNumber.length !== ROLL_NUMBER_LENGTH) {
//       newErrors.rollNumber = `Roll number must be exactly ${ROLL_NUMBER_LENGTH} digits`;
//     }

//     // School Code: digits only
//     if (form.schoolCode && !/^\d+$/.test(form.schoolCode)) {
//       newErrors.schoolCode = 'School Code must contain digits only';
//     }

//     // Pincode: exactly 6 digits
//     if (form.pincode && form.pincode.length !== 6) {
//       newErrors.pincode = 'Pincode must be 6 digits';
//     }

//     // Mobile numbers: exactly 10 digits
//     if (form.fatherMobile && form.fatherMobile.length !== 10) {
//       newErrors.fatherMobile = 'Enter valid 10-digit mobile number';
//     }
//     if (form.motherMobile && form.motherMobile.length !== 10) {
//       newErrors.motherMobile = 'Enter valid 10-digit mobile number';
//     }
//     if (form.guardianWhatsapp && form.guardianWhatsapp.length !== 10) {
//       newErrors.guardianWhatsapp = 'Enter valid 10-digit WhatsApp number';
//     }

//     // Date of Birth
//     if (form.dob && !isValidDob(form.dob)) {
//       newErrors.dob = `Age must be between ${MIN_AGE} and ${MAX_AGE} years`;
//     }

//     // Emails
//     if (form.guardianEmail && !EMAIL_REGEX.test(form.guardianEmail)) {
//       newErrors.guardianEmail = 'Enter a valid email address';
//     }
//     if (form.loginEmail && !EMAIL_REGEX.test(form.loginEmail)) {
//       newErrors.loginEmail = 'Enter a valid email address';
//     }

//     // Password
//     if (form.password && !PASSWORD_REGEX.test(form.password)) {
//       newErrors.password =
//         'Min 8 characters incl. uppercase, lowercase, number & special symbol';
//     }

//     // Confirm Password
//     if (
//       form.password &&
//       form.confirmPassword &&
//       form.password !== form.confirmPassword
//     ) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSave = () => {
//     if (!validate()) {
//       toast({
//         title: 'Please fill all required fields correctly',
//         status: 'error',
//         duration: 3000,
//         isClosable: true,
//       });
//       return;
//     }
//     setLoading(true);
//     // 🔹 Dummy save — replace with real API call later:
//     // await fetch("/api/students", { method: "POST", body: JSON.stringify(form) })
//     setTimeout(() => {
//       console.log('Student Saved (dummy):', form);
//       setLoading(false);
//       toast({
//         title: 'Student saved successfully!',
//         status: 'success',
//         duration: 3000,
//         isClosable: true,
//       });
//       setForm(initialState);
//       setErrors({});
//     }, 1000);
//   };

//   const handleReset = () => {
//     setForm(initialState);
//     setErrors({});
//   };

//   const todayString = new Date().toISOString().split('T')[0];

//   return (
//     <Card p="24px">
//       <Heading size="md" mb="20px">
//         Add Student
//       </Heading>

//       {/* Student Information */}
//       <Heading size="sm" mb="12px" color="brand.500">
//         Student Information
//       </Heading>
//       <Grid
//         templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
//         gap="16px"
//         mb="24px"
//       >
//         <Field
//           label="Student Name"
//           name="studentName"
//           value={form.studentName}
//           error={errors.studentName}
//           onChange={handleChange}
//           isRequired
//         />
//         <Field
//           label="Roll Number"
//           name="rollNumber"
//           value={form.rollNumber}
//           error={errors.rollNumber}
//           onChange={handleChange}
//           inputMode="numeric"
//           isRequired
//         />
//         <Field
//           label="Admission Number"
//           name="admissionNumber"
//           value={form.admissionNumber}
//           error={errors.admissionNumber}
//           onChange={handleChange}
//           isRequired
//         />
//         <Field
//           label="Class"
//           name="studentClass"
//           type="select"
//           options={CLASS_OPTIONS}
//           value={form.studentClass}
//           error={errors.studentClass}
//           onChange={handleChange}
//           isRequired
//         />
//         <Field
//           label="Section"
//           name="section"
//           value={form.section}
//           error={errors.section}
//           onChange={handleChange}
//           isRequired
//         />
//         <Field
//           label="Date of Birth"
//           name="dob"
//           type="date"
//           max={todayString}
//           value={form.dob}
//           error={errors.dob}
//           onChange={handleChange}
//           isRequired
//         />
//         <Field
//           label="Gender"
//           name="gender"
//           type="select"
//           options={GENDER_OPTIONS}
//           value={form.gender}
//           error={errors.gender}
//           onChange={handleChange}
//           isRequired
//         />
//         <Field
//           label="Blood Group"
//           name="bloodGroup"
//           type="select"
//           options={BLOOD_GROUP_OPTIONS}
//           value={form.bloodGroup}
//           error={errors.bloodGroup}
//           onChange={handleChange}
//         />
//       </Grid>

//       {/* School Information */}
//       <Heading size="sm" mb="12px" color="brand.500">
//         School Information
//       </Heading>
//       <Grid
//         templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
//         gap="16px"
//         mb="24px"
//       >
//         <Field
//           label="School Name"
//           name="schoolName"
//           value={form.schoolName}
//           error={errors.schoolName}
//           onChange={handleChange}
//           isRequired
//         />
//         <Field
//           label="School Code"
//           name="schoolCode"
//           value={form.schoolCode}
//           error={errors.schoolCode}
//           onChange={handleChange}
//           inputMode="numeric"
//           isRequired
//         />
//       </Grid>

//       {/* Address */}
//       <Heading size="sm" mb="12px" color="brand.500">
//         Address
//       </Heading>
//       <Grid
//         templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
//         gap="16px"
//         mb="24px"
//       >
//         <GridItem colSpan={{ md: 2 }}>
//           <Field
//             label="Address Line 1"
//             name="addressLine1"
//             value={form.addressLine1}
//             error={errors.addressLine1}
//             onChange={handleChange}
//             isRequired
//           />
//         </GridItem>
//         <GridItem colSpan={{ md: 1 }}>
//           <Field
//             label="Address Line 2"
//             name="addressLine2"
//             value={form.addressLine2}
//             error={errors.addressLine2}
//             onChange={handleChange}
//           />
//         </GridItem>
//         <Field
//           label="City"
//           name="city"
//           value={form.city}
//           error={errors.city}
//           onChange={handleChange}
//           isRequired
//         />
//         <Field
//           label="District"
//           name="district"
//           value={form.district}
//           error={errors.district}
//           onChange={handleChange}
//           isRequired
//         />
//         <Field
//           label="State"
//           name="state"
//           type="select"
//           options={STATE_OPTIONS}
//           value={form.state}
//           error={errors.state}
//           onChange={handleChange}
//           isRequired
//         />
//         <Field
//           label="Pincode"
//           name="pincode"
//           value={form.pincode}
//           error={errors.pincode}
//           onChange={handleChange}
//           isRequired
//         />
//         <Field
//           label="Country"
//           name="country"
//           value={form.country}
//           error={errors.country}
//           onChange={handleChange}
//           isRequired
//         />
//       </Grid>

//       {/* Parent / Guardian Details */}
//       <Heading size="sm" mb="12px" color="brand.500">
//         Parent / Guardian Details
//       </Heading>
//       <Grid
//         templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
//         gap="16px"
//         mb="24px"
//       >
//         <Field
//           label="Father's Name"
//           name="fatherName"
//           value={form.fatherName}
//           error={errors.fatherName}
//           onChange={handleChange}
//           isRequired
//         />
//         <Field
//           label="Father's Mobile Number"
//           name="fatherMobile"
//           value={form.fatherMobile}
//           error={errors.fatherMobile}
//           onChange={handleChange}
//           isRequired
//         />
//         <Field
//           label="Mother's Name"
//           name="motherName"
//           value={form.motherName}
//           error={errors.motherName}
//           onChange={handleChange}
//           isRequired
//         />
//         <Field
//           label="Mother's Mobile Number"
//           name="motherMobile"
//           value={form.motherMobile}
//           error={errors.motherMobile}
//           onChange={handleChange}
//           isRequired
//         />
//         <Field
//           label="Guardian Email ID"
//           name="guardianEmail"
//           type="email"
//           value={form.guardianEmail}
//           error={errors.guardianEmail}
//           onChange={handleChange}
//           isRequired
//         />
//         <Field
//           label="Guardian WhatsApp Number"
//           name="guardianWhatsapp"
//           value={form.guardianWhatsapp}
//           error={errors.guardianWhatsapp}
//           onChange={handleChange}
//         />
//       </Grid>

//       {/* Login Details */}
//       <Heading size="sm" mb="12px" color="brand.500">
//         Login Details
//       </Heading>
//       <Grid
//         templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
//         gap="16px"
//         mb="24px"
//       >
//         <Field
//           label="Email ID"
//           name="loginEmail"
//           type="email"
//           value={form.loginEmail}
//           error={errors.loginEmail}
//           onChange={handleChange}
//           isRequired
//         />
//         <PasswordField
//           label="Password"
//           name="password"
//           value={form.password}
//           error={errors.password}
//           onChange={handleChange}
//           show={showPassword}
//           toggleShow={() => setShowPassword((prev) => !prev)}
//         />
//         <PasswordField
//           label="Confirm Password"
//           name="confirmPassword"
//           value={form.confirmPassword}
//           error={errors.confirmPassword}
//           onChange={handleChange}
//           show={showConfirmPassword}
//           toggleShow={() => setShowConfirmPassword((prev) => !prev)}
//         />
//       </Grid>

//       {/* Actions */}
//       <HStack justify="flex-end" spacing="12px">
//         <Button variant="outline" onClick={handleReset}>
//           Reset Form
//         </Button>
//         <Button colorScheme="brand" isLoading={loading} onClick={handleSave}>
//           Save Student
//         </Button>
//       </HStack>
//     </Card>
//   );
// }
import React, { useState } from 'react';
import {
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Select,
  Button,
  HStack,
  Heading,
  useToast,
  FormErrorMessage,
} from '@chakra-ui/react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import Card from 'components/card/Card'; // Horizon UI ka reusable Card

// ---------- Static Dropdown Data ----------
const CLASS_OPTIONS = [
  'Nursery',
  'LKG',
  'UKG',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
];

const GENDER_OPTIONS = ['Male', 'Female', 'Other'];

const BLOOD_GROUP_OPTIONS = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

const STATE_OPTIONS = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Andaman and Nicobar Islands',
  'Chandigarh',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi',
  'Jammu and Kashmir',
  'Ladakh',
  'Lakshadweep',
  'Puducherry',
];

// ---------- Helpers ----------
// Naam fields: sirf letters aur space allow — koi digit ya special character (. ' - etc) nahi
const NAME_REGEX = /^[A-Za-z\s]*$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

const MIN_AGE = 3;
const MAX_AGE = 25;
const ROLL_NUMBER_LENGTH = 5;

// ---------- Reusable Field (defined OUTSIDE the form component) ----------
// IMPORTANT: Field must NOT be defined inside AddStudentForm(). If it were
// declared inside, React would treat it as a brand-new component type on
// every re-render (every keystroke) and remount the <input>, which is why
// the field would lose focus after a single character. Keeping it outside
// with value/error/onChange passed as props keeps the same component
// identity across renders, so typing works normally.
const Field = ({
  label,
  name,
  type = 'text',
  options,
  isRequired = false,
  value,
  error,
  onChange,
  ...rest
}) => (
  <FormControl isInvalid={!!error} isRequired={isRequired}>
    <FormLabel fontSize="sm" fontWeight="600">
      {label}
    </FormLabel>
    {type === 'select' ? (
      <Select
        name={name}
        placeholder={`Select ${label}`}
        value={value}
        onChange={onChange}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </Select>
    ) : (
      <Input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={label}
        {...rest}
      />
    )}
    <FormErrorMessage>{error}</FormErrorMessage>
  </FormControl>
);

// ---------- Password Field with show/hide (also outside, same reason) ----------
const PasswordField = ({
  label,
  name,
  value,
  error,
  onChange,
  show,
  toggleShow,
}) => (
  <FormControl isInvalid={!!error} isRequired>
    <FormLabel fontSize="sm" fontWeight="600">
      {label}
    </FormLabel>
    <InputGroup>
      <Input
        name={name}
        type={show ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        placeholder={label}
      />
      <InputRightElement>
        <IconButton
          aria-label={show ? 'Hide password' : 'Show password'}
          icon={show ? <MdVisibilityOff /> : <MdVisibility />}
          size="sm"
          variant="ghost"
          onClick={toggleShow}
        />
      </InputRightElement>
    </InputGroup>
    <FormErrorMessage>{error}</FormErrorMessage>
  </FormControl>
);

const initialState = {
  // Student Information
  studentName: '',
  rollNumber: '',
  admissionNumber: '',
  studentClass: '',
  section: '',
  dob: '',
  gender: '',
  bloodGroup: '',

  // School Information
  schoolName: '',
  schoolCode: '',

  // Address
  addressLine1: '',
  addressLine2: '',
  city: '',
  district: '',
  state: '',
  pincode: '',
  country: '',

  // Parent / Guardian Details
  fatherName: '',
  fatherMobile: '',
  motherName: '',
  motherMobile: '',
  guardianEmail: '',
  guardianWhatsapp: '',

  // Login Details
  loginEmail: '',
  password: '',
  confirmPassword: '',
};

export default function AddStudentForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const toast = useToast();

  // ---------- Change Handler (with live restrictions) ----------
  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    // Name-only fields: block digits AND special characters (only letters/space allowed)
    const nameFields = [
      'studentName',
      'fatherName',
      'motherName',
      'city',
      'district',
    ];
    if (nameFields.includes(name)) {
      if (!NAME_REGEX.test(newValue)) return; // ignore invalid keystroke
    }

    // Digit-only fields with max length (roll number, school code, pincode, mobile numbers)
    const digitFieldLimits = {
      rollNumber: ROLL_NUMBER_LENGTH,
      schoolCode: null,
      pincode: 6,
      fatherMobile: 10,
      motherMobile: 10,
      guardianWhatsapp: 10,
    };
    if (digitFieldLimits[name] !== undefined) {
      const limit = digitFieldLimits[name];
      const digitsOnly = newValue.replace(/\D/g, '');
      newValue = limit ? digitsOnly.slice(0, limit) : digitsOnly;
    }

    setForm((prev) => ({ ...prev, [name]: newValue }));

    // Live password/confirm password validation
    if (name === 'password' || name === 'confirmPassword') {
      setErrors((prev) => {
        const updated = { ...prev };
        const pwd = name === 'password' ? newValue : form.password;
        const confirmPwd =
          name === 'confirmPassword' ? newValue : form.confirmPassword;

        if (name === 'password') {
          if (newValue && !PASSWORD_REGEX.test(newValue)) {
            updated.password =
              'Min 8 characters incl. uppercase, lowercase, number & special symbol';
          } else {
            delete updated.password;
          }
        }

        if (confirmPwd) {
          if (pwd !== confirmPwd) {
            updated.confirmPassword = 'Passwords do not match';
          } else {
            delete updated.confirmPassword;
          }
        } else {
          delete updated.confirmPassword;
        }
        return updated;
      });
    } else if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  // ---------- Age Validation Helper ----------
  const isValidDob = (dobString) => {
    if (!dobString) return false;
    const dob = new Date(dobString);
    if (Number.isNaN(dob.getTime())) return false;

    const today = new Date();
    if (dob > today) return false;

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    return age >= MIN_AGE && age <= MAX_AGE;
  };

  // ---------- Full Form Validation ----------
  const validate = () => {
    const newErrors = {};

    const requiredFields = [
      'studentName',
      'rollNumber',
      'admissionNumber',
      'studentClass',
      'section',
      'dob',
      'gender',
      'schoolName',
      'schoolCode',
      'addressLine1',
      'city',
      'district',
      'state',
      'pincode',
      'country',
      'fatherName',
      'fatherMobile',
      'motherName',
      'motherMobile',
      'guardianEmail',
      'loginEmail',
      'password',
      'confirmPassword',
    ];

    requiredFields.forEach((field) => {
      if (!String(form[field] ?? '').trim()) {
        newErrors[field] = 'Required';
      }
    });

    // Name fields: only letters/space allowed (extra safety net besides live block)
    const nameFieldsToValidate = [
      'studentName',
      'fatherName',
      'motherName',
      'city',
      'district',
    ];
    nameFieldsToValidate.forEach((field) => {
      if (form[field] && !NAME_REGEX.test(form[field])) {
        newErrors[field] = 'Only letters and spaces are allowed';
      }
    });

    // Roll Number: exactly 5 digits, numbers only
    if (form.rollNumber && form.rollNumber.length !== ROLL_NUMBER_LENGTH) {
      newErrors.rollNumber = `Roll number must be exactly ${ROLL_NUMBER_LENGTH} digits`;
    }

    // School Code: digits only
    if (form.schoolCode && !/^\d+$/.test(form.schoolCode)) {
      newErrors.schoolCode = 'School Code must contain digits only';
    }

    // Pincode: exactly 6 digits
    if (form.pincode && form.pincode.length !== 6) {
      newErrors.pincode = 'Pincode must be 6 digits';
    }

    // Mobile numbers: exactly 10 digits
    if (form.fatherMobile && form.fatherMobile.length !== 10) {
      newErrors.fatherMobile = 'Enter valid 10-digit mobile number';
    }
    if (form.motherMobile && form.motherMobile.length !== 10) {
      newErrors.motherMobile = 'Enter valid 10-digit mobile number';
    }
    if (form.guardianWhatsapp && form.guardianWhatsapp.length !== 10) {
      newErrors.guardianWhatsapp = 'Enter valid 10-digit WhatsApp number';
    }

    // Date of Birth
    if (form.dob && !isValidDob(form.dob)) {
      newErrors.dob = `Age must be between ${MIN_AGE} and ${MAX_AGE} years`;
    }

    // Emails
    if (form.guardianEmail && !EMAIL_REGEX.test(form.guardianEmail)) {
      newErrors.guardianEmail = 'Enter a valid email address';
    }
    if (form.loginEmail && !EMAIL_REGEX.test(form.loginEmail)) {
      newErrors.loginEmail = 'Enter a valid email address';
    }

    // Password
    if (form.password && !PASSWORD_REGEX.test(form.password)) {
      newErrors.password =
        'Min 8 characters incl. uppercase, lowercase, number & special symbol';
    }

    // Confirm Password
    if (
      form.password &&
      form.confirmPassword &&
      form.password !== form.confirmPassword
    ) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ---------- SAVE — ab yahan asli API call ho rahi hai ----------
  const handleSave = async () => {
    if (!validate()) {
      toast({
        title: 'Please fill all required fields correctly',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/auth/student/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      toast({
        title: 'Student saved successfully!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      setForm(initialState);
      setErrors({});
    } catch (err) {
      toast({
        title: 'Failed to save student',
        description: err.message,
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setForm(initialState);
    setErrors({});
  };

  const todayString = new Date().toISOString().split('T')[0];

  return (
    <Card p="24px">
      <Heading size="md" mb="20px">
        Add Student
      </Heading>

      {/* Student Information */}
      <Heading size="sm" mb="12px" color="brand.500">
        Student Information
      </Heading>
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
        gap="16px"
        mb="24px"
      >
        <Field
          label="Student Name"
          name="studentName"
          value={form.studentName}
          error={errors.studentName}
          onChange={handleChange}
          isRequired
        />
        <Field
          label="Roll Number"
          name="rollNumber"
          value={form.rollNumber}
          error={errors.rollNumber}
          onChange={handleChange}
          inputMode="numeric"
          isRequired
        />
        <Field
          label="Admission Number"
          name="admissionNumber"
          value={form.admissionNumber}
          error={errors.admissionNumber}
          onChange={handleChange}
          isRequired
        />
        <Field
          label="Class"
          name="studentClass"
          type="select"
          options={CLASS_OPTIONS}
          value={form.studentClass}
          error={errors.studentClass}
          onChange={handleChange}
          isRequired
        />
        <Field
          label="Section"
          name="section"
          value={form.section}
          error={errors.section}
          onChange={handleChange}
          isRequired
        />
        <Field
          label="Date of Birth"
          name="dob"
          type="date"
          max={todayString}
          value={form.dob}
          error={errors.dob}
          onChange={handleChange}
          isRequired
        />
        <Field
          label="Gender"
          name="gender"
          type="select"
          options={GENDER_OPTIONS}
          value={form.gender}
          error={errors.gender}
          onChange={handleChange}
          isRequired
        />
        <Field
          label="Blood Group"
          name="bloodGroup"
          type="select"
          options={BLOOD_GROUP_OPTIONS}
          value={form.bloodGroup}
          error={errors.bloodGroup}
          onChange={handleChange}
        />
      </Grid>

      {/* School Information */}
      <Heading size="sm" mb="12px" color="brand.500">
        School Information
      </Heading>
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
        gap="16px"
        mb="24px"
      >
        <Field
          label="School Name"
          name="schoolName"
          value={form.schoolName}
          error={errors.schoolName}
          onChange={handleChange}
          isRequired
        />
        <Field
          label="School Code"
          name="schoolCode"
          value={form.schoolCode}
          error={errors.schoolCode}
          onChange={handleChange}
          inputMode="numeric"
          isRequired
        />
      </Grid>

      {/* Address */}
      <Heading size="sm" mb="12px" color="brand.500">
        Address
      </Heading>
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
        gap="16px"
        mb="24px"
      >
        <GridItem colSpan={{ md: 2 }}>
          <Field
            label="Address Line 1"
            name="addressLine1"
            value={form.addressLine1}
            error={errors.addressLine1}
            onChange={handleChange}
            isRequired
          />
        </GridItem>
        <GridItem colSpan={{ md: 1 }}>
          <Field
            label="Address Line 2"
            name="addressLine2"
            value={form.addressLine2}
            error={errors.addressLine2}
            onChange={handleChange}
          />
        </GridItem>
        <Field
          label="City"
          name="city"
          value={form.city}
          error={errors.city}
          onChange={handleChange}
          isRequired
        />
        <Field
          label="District"
          name="district"
          value={form.district}
          error={errors.district}
          onChange={handleChange}
          isRequired
        />
        <Field
          label="State"
          name="state"
          type="select"
          options={STATE_OPTIONS}
          value={form.state}
          error={errors.state}
          onChange={handleChange}
          isRequired
        />
        <Field
          label="Pincode"
          name="pincode"
          value={form.pincode}
          error={errors.pincode}
          onChange={handleChange}
          isRequired
        />
        <Field
          label="Country"
          name="country"
          value={form.country}
          error={errors.country}
          onChange={handleChange}
          isRequired
        />
      </Grid>

      {/* Parent / Guardian Details */}
      <Heading size="sm" mb="12px" color="brand.500">
        Parent / Guardian Details
      </Heading>
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
        gap="16px"
        mb="24px"
      >
        <Field
          label="Father's Name"
          name="fatherName"
          value={form.fatherName}
          error={errors.fatherName}
          onChange={handleChange}
          isRequired
        />
        <Field
          label="Father's Mobile Number"
          name="fatherMobile"
          value={form.fatherMobile}
          error={errors.fatherMobile}
          onChange={handleChange}
          isRequired
        />
        <Field
          label="Mother's Name"
          name="motherName"
          value={form.motherName}
          error={errors.motherName}
          onChange={handleChange}
          isRequired
        />
        <Field
          label="Mother's Mobile Number"
          name="motherMobile"
          value={form.motherMobile}
          error={errors.motherMobile}
          onChange={handleChange}
          isRequired
        />
        <Field
          label="Guardian Email ID"
          name="guardianEmail"
          type="email"
          value={form.guardianEmail}
          error={errors.guardianEmail}
          onChange={handleChange}
          isRequired
        />
        <Field
          label="Guardian WhatsApp Number"
          name="guardianWhatsapp"
          value={form.guardianWhatsapp}
          error={errors.guardianWhatsapp}
          onChange={handleChange}
        />
      </Grid>

      {/* Login Details */}
      <Heading size="sm" mb="12px" color="brand.500">
        Login Details
      </Heading>
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
        gap="16px"
        mb="24px"
      >
        <Field
          label="Email ID"
          name="loginEmail"
          type="email"
          value={form.loginEmail}
          error={errors.loginEmail}
          onChange={handleChange}
          isRequired
        />
        <PasswordField
          label="Password"
          name="password"
          value={form.password}
          error={errors.password}
          onChange={handleChange}
          show={showPassword}
          toggleShow={() => setShowPassword((prev) => !prev)}
        />
        <PasswordField
          label="Confirm Password"
          name="confirmPassword"
          value={form.confirmPassword}
          error={errors.confirmPassword}
          onChange={handleChange}
          show={showConfirmPassword}
          toggleShow={() => setShowConfirmPassword((prev) => !prev)}
        />
      </Grid>

      {/* Actions */}
      <HStack justify="flex-end" spacing="12px">
        <Button variant="outline" onClick={handleReset}>
          Reset Form
        </Button>
        <Button colorScheme="brand" isLoading={loading} onClick={handleSave}>
          Save Student
        </Button>
      </HStack>
    </Card>
  );
}
