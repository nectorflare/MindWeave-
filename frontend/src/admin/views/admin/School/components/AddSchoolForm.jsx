// import React, { useState } from 'react';
// import {
//   Box,
//   Grid,
//   GridItem,
//   FormControl,
//   FormLabel,
//   Input,
//   Select,
//   Button,
//   HStack,
//   Heading,
//   useToast,
//   FormErrorMessage,
//   InputGroup,
//   InputRightElement,
//   IconButton,
//   Checkbox,
//   Text,
// } from '@chakra-ui/react';
// import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
// import Card from 'components/card/Card'; // Horizon UI ka reusable Card

// // ── Dropdown data ──
// const indianStates = [
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
//   'Delhi',
//   'Jammu & Kashmir',
//   'Ladakh',
// ];

// const schoolTypes = [
//   'Private',
//   'Government',
//   'Government Aided',
//   'International',
// ];
// const boards = ['CBSE', 'ICSE', 'State Board', 'IB', 'IGCSE', 'Other'];

// const initialState = {
//   schoolName: '',
//   schoolCode: '',
//   schoolType: '',
//   boardName: '',
//   affiliationNumber: '',
//   udiseCode: '',
//   establishedYear: '',
//   addressLine1: '',
//   addressLine2: '',
//   city: '',
//   district: '',
//   state: '',
//   pincode: '',
//   country: 'India',
//   principalName: '',
//   principalMobile: '',
//   principalEmail: '',
//   coordinatorName: '',
//   coordinatorDesignation: '',
//   coordinatorMobile: '',
//   coordinatorWhatsapp: '',
//   coordinatorEmail: '',
//   loginEmail: '',
//   password: '',
//   confirmPassword: '',
// };

// const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

// // Naam-type fields: sirf letters aur space allowed — koi digit ya special character nahi
// const NAME_REGEX = /^[A-Za-z\s]*$/;

// const nameFields = [
//   'schoolName',
//   'principalName',
//   'coordinatorName',
//   'coordinatorDesignation',
//   'city',
//   'district',
// ];

// const numericFields10 = [
//   'principalMobile',
//   'coordinatorMobile',
//   'coordinatorWhatsapp',
// ];

// const numericInputFields = [
//   'schoolCode',
//   'pincode',
//   'affiliationNumber',
//   'udiseCode',
//   'establishedYear',
//   ...numericFields10,
// ];

// // ---------- Reusable Field (defined OUTSIDE the form component) ----------
// // IMPORTANT: Field must NOT be defined inside AddSchoolForm(). If it were
// // declared inside, React would treat it as a brand-new component type on
// // every re-render (every keystroke), which remounts the <input> and is
// // exactly why typing was kicking you out of the field. Keeping it outside
// // with value/error/onChange passed as props keeps the same component
// // identity across renders, so focus stays put while typing.
// const Field = ({
//   label,
//   name,
//   type = 'text',
//   required,
//   options,
//   colSpan,
//   value,
//   error,
//   onChange,
//   showPass,
//   showConfirm,
//   toggleShowPass,
//   toggleShowConfirm,
// }) => (
//   <GridItem colSpan={colSpan}>
//     <FormControl isInvalid={!!error} isRequired={required}>
//       <FormLabel fontSize="sm" fontWeight="600">
//         {label}
//       </FormLabel>

//       {type === 'select' ? (
//         <Select
//           name={name}
//           placeholder={`Select ${label}`}
//           value={value}
//           onChange={onChange}
//         >
//           {options.map((opt) => (
//             <option key={opt} value={opt}>
//               {opt}
//             </option>
//           ))}
//         </Select>
//       ) : type === 'password' ? (
//         <InputGroup>
//           <Input
//             name={name}
//             type={
//               (name === 'password' && showPass) ||
//               (name === 'confirmPassword' && showConfirm)
//                 ? 'text'
//                 : 'password'
//             }
//             value={value}
//             onChange={onChange}
//             placeholder={label}
//           />
//           <InputRightElement>
//             <IconButton
//               aria-label="toggle password visibility"
//               icon={
//                 (name === 'password' ? showPass : showConfirm) ? (
//                   <MdVisibilityOff />
//                 ) : (
//                   <MdVisibility />
//                 )
//               }
//               size="sm"
//               variant="ghost"
//               onClick={name === 'password' ? toggleShowPass : toggleShowConfirm}
//             />
//           </InputRightElement>
//         </InputGroup>
//       ) : (
//         <Input
//           name={name}
//           type={type}
//           value={value}
//           onChange={onChange}
//           placeholder={label}
//           inputMode={numericInputFields.includes(name) ? 'numeric' : 'text'}
//         />
//       )}

//       <FormErrorMessage>{error}</FormErrorMessage>
//     </FormControl>
//   </GridItem>
// );

// export default function AddSchoolForm() {
//   const [form, setForm] = useState(initialState);
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [showPass, setShowPass] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);
//   const toast = useToast();

//   const validatePassword = (password) => {
//     if (!password) return 'Password is required';
//     if (password.length < 8) return 'Must be at least 8 characters long';
//     if (!/[A-Z]/.test(password)) return 'Must contain an uppercase letter';
//     if (!/[a-z]/.test(password)) return 'Must contain a lowercase letter';
//     if (!/[0-9]/.test(password)) return 'Must contain a number';
//     if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password))
//       return 'Must contain a special symbol';
//     return '';
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     // School Code: digits only
//     if (name === 'schoolCode') {
//       setForm((prev) => ({
//         ...prev,
//         schoolCode: value.replace(/\D/g, ''),
//       }));
//       return;
//     }

//     // Pincode: digits only, max 6
//     if (name === 'pincode') {
//       setForm((prev) => ({
//         ...prev,
//         pincode: value.replace(/\D/g, '').slice(0, 6),
//       }));
//       return;
//     }

//     // Affiliation number: digits only, max 7
//     if (name === 'affiliationNumber') {
//       setForm((prev) => ({
//         ...prev,
//         affiliationNumber: value.replace(/\D/g, '').slice(0, 7),
//       }));
//       return;
//     }

//     // UDISE code: digits only, max 11
//     if (name === 'udiseCode') {
//       setForm((prev) => ({
//         ...prev,
//         udiseCode: value.replace(/\D/g, '').slice(0, 11),
//       }));
//       return;
//     }

//     // Established year: digits only, max 4
//     if (name === 'establishedYear') {
//       setForm((prev) => ({
//         ...prev,
//         establishedYear: value.replace(/\D/g, '').slice(0, 4),
//       }));
//       return;
//     }

//     // Mobile / WhatsApp numbers: digits only, max 10
//     if (numericFields10.includes(name)) {
//       setForm((prev) => ({
//         ...prev,
//         [name]: value.replace(/\D/g, '').slice(0, 10),
//       }));
//       return;
//     }

//     // Name-type fields: only letters and spaces allowed (no digits, no special chars)
//     if (nameFields.includes(name)) {
//       if (!NAME_REGEX.test(value)) return; // ignore invalid keystroke
//       setForm((prev) => ({ ...prev, [name]: value }));
//       return;
//     }

//     // Password: live validation + confirm re-check
//     if (name === 'password') {
//       setForm((prev) => ({ ...prev, password: value }));
//       setErrors((prev) => ({
//         ...prev,
//         password: validatePassword(value),
//         confirmPassword:
//           form.confirmPassword && value !== form.confirmPassword
//             ? 'Passwords do not match'
//             : '',
//       }));
//       return;
//     }

//     // Confirm password: live validation
//     if (name === 'confirmPassword') {
//       setForm((prev) => ({ ...prev, confirmPassword: value }));
//       setErrors((prev) => ({
//         ...prev,
//         confirmPassword:
//           value !== form.password ? 'Passwords do not match' : '',
//       }));
//       return;
//     }

//     setForm((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const validate = () => {
//     const newErrors = {};

//     if (!form.schoolName.trim())
//       newErrors.schoolName = 'School Name is required';
//     else if (!NAME_REGEX.test(form.schoolName))
//       newErrors.schoolName = 'Only letters and spaces are allowed';

//     if (!form.schoolCode.trim())
//       newErrors.schoolCode = 'School Code is required';
//     else if (!/^\d+$/.test(form.schoolCode))
//       newErrors.schoolCode = 'School Code must contain digits only';
//     if (!form.schoolType) newErrors.schoolType = 'Please select School Type';
//     if (!form.boardName) newErrors.boardName = 'Please select Board Name';

//     if (form.affiliationNumber && form.affiliationNumber.length !== 7)
//       newErrors.affiliationNumber = 'Affiliation Number must be 7 digits';

//     if (form.udiseCode && form.udiseCode.length !== 11)
//       newErrors.udiseCode = 'UDISE Code must be exactly 11 digits';

//     if (form.establishedYear) {
//       const yr = parseInt(form.establishedYear, 10);
//       const currentYear = new Date().getFullYear();
//       if (form.establishedYear.length !== 4 || yr < 1800 || yr > currentYear) {
//         newErrors.establishedYear = `Must be between 1800 and ${currentYear}`;
//       }
//     }

//     if (!form.addressLine1.trim())
//       newErrors.addressLine1 = 'Address Line 1 is required';

//     if (!form.city.trim()) newErrors.city = 'City is required';
//     else if (!NAME_REGEX.test(form.city))
//       newErrors.city = 'Only letters and spaces are allowed';

//     if (!form.district.trim()) newErrors.district = 'District is required';
//     else if (!NAME_REGEX.test(form.district))
//       newErrors.district = 'Only letters and spaces are allowed';

//     if (!form.state) newErrors.state = 'Please select State';
//     if (form.pincode.length !== 6)
//       newErrors.pincode = 'Pincode must be exactly 6 digits';
//     if (!form.country.trim()) newErrors.country = 'Country is required';

//     if (!form.principalName.trim())
//       newErrors.principalName = 'Principal Name is required';
//     else if (!NAME_REGEX.test(form.principalName))
//       newErrors.principalName = 'Only letters and spaces are allowed';

//     if (form.principalMobile.length !== 10)
//       newErrors.principalMobile = 'Mobile number must be 10 digits';
//     if (!emailRegex.test(form.principalEmail))
//       newErrors.principalEmail = 'Enter a valid email address';

//     if (!form.coordinatorName.trim())
//       newErrors.coordinatorName = 'Coordinator Name is required';
//     else if (!NAME_REGEX.test(form.coordinatorName))
//       newErrors.coordinatorName = 'Only letters and spaces are allowed';

//     if (!form.coordinatorDesignation.trim())
//       newErrors.coordinatorDesignation = 'Designation is required';
//     else if (!NAME_REGEX.test(form.coordinatorDesignation))
//       newErrors.coordinatorDesignation = 'Only letters and spaces are allowed';

//     if (form.coordinatorMobile.length !== 10)
//       newErrors.coordinatorMobile = 'Mobile number must be 10 digits';
//     if (form.coordinatorWhatsapp && form.coordinatorWhatsapp.length !== 10)
//       newErrors.coordinatorWhatsapp = 'WhatsApp number must be 10 digits';
//     if (!emailRegex.test(form.coordinatorEmail))
//       newErrors.coordinatorEmail = 'Enter a valid email address';

//     if (!emailRegex.test(form.loginEmail))
//       newErrors.loginEmail = 'Enter a valid email address';

//     const passwordErr = validatePassword(form.password);
//     if (passwordErr) newErrors.password = passwordErr;

//     if (!form.confirmPassword)
//       newErrors.confirmPassword = 'Please confirm password';
//     else if (form.password !== form.confirmPassword)
//       newErrors.confirmPassword = 'Passwords do not match';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSave = () => {
//     if (!validate()) {
//       toast({
//         title: 'Please fix the highlighted fields',
//         status: 'error',
//         duration: 3000,
//         isClosable: true,
//       });
//       return;
//     }
//     setLoading(true);
//     // 🔹 Dummy save — replace with real API call later:
//     // await fetch("/api/schools", { method: "POST", body: JSON.stringify(form) })
//     setTimeout(() => {
//       console.log('School Saved (dummy):', form);
//       setLoading(false);
//       toast({
//         title: 'School saved successfully!',
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

//   return (
//     <Card p="24px">
//       <Heading size="md" mb="20px">
//         Add School
//       </Heading>

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
//           required
//           value={form.schoolName}
//           error={errors.schoolName}
//           onChange={handleChange}
//         />
//         <Field
//           label="School Code"
//           name="schoolCode"
//           required
//           value={form.schoolCode}
//           error={errors.schoolCode}
//           onChange={handleChange}
//         />
//         <Field
//           label="School Type"
//           name="schoolType"
//           type="select"
//           required
//           options={schoolTypes}
//           value={form.schoolType}
//           error={errors.schoolType}
//           onChange={handleChange}
//         />
//         <Field
//           label="Board Name"
//           name="boardName"
//           type="select"
//           required
//           options={boards}
//           value={form.boardName}
//           error={errors.boardName}
//           onChange={handleChange}
//         />
//         <Field
//           label="Affiliation Number (7 digits)"
//           name="affiliationNumber"
//           value={form.affiliationNumber}
//           error={errors.affiliationNumber}
//           onChange={handleChange}
//         />
//         <Field
//           label="UDISE Code (11 digits)"
//           name="udiseCode"
//           value={form.udiseCode}
//           error={errors.udiseCode}
//           onChange={handleChange}
//         />
//         <Field
//           label="Established Year"
//           name="establishedYear"
//           value={form.establishedYear}
//           error={errors.establishedYear}
//           onChange={handleChange}
//         />
//       </Grid>

//       {/* School Address */}
//       <Heading size="sm" mb="12px" color="brand.500">
//         School Address
//       </Heading>
//       <Grid
//         templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
//         gap="16px"
//         mb="24px"
//       >
//         <Field
//           label="Address Line 1"
//           name="addressLine1"
//           required
//           colSpan={{ md: 2 }}
//           value={form.addressLine1}
//           error={errors.addressLine1}
//           onChange={handleChange}
//         />
//         <Field
//           label="Address Line 2"
//           name="addressLine2"
//           value={form.addressLine2}
//           error={errors.addressLine2}
//           onChange={handleChange}
//         />
//         <Field
//           label="City"
//           name="city"
//           required
//           value={form.city}
//           error={errors.city}
//           onChange={handleChange}
//         />
//         <Field
//           label="District"
//           name="district"
//           required
//           value={form.district}
//           error={errors.district}
//           onChange={handleChange}
//         />
//         <Field
//           label="State"
//           name="state"
//           type="select"
//           required
//           options={indianStates}
//           value={form.state}
//           error={errors.state}
//           onChange={handleChange}
//         />
//         <Field
//           label="Pincode (6 digits)"
//           name="pincode"
//           required
//           value={form.pincode}
//           error={errors.pincode}
//           onChange={handleChange}
//         />
//         <Field
//           label="Country"
//           name="country"
//           required
//           value={form.country}
//           error={errors.country}
//           onChange={handleChange}
//         />
//       </Grid>

//       {/* Principal Details */}
//       <Heading size="sm" mb="12px" color="brand.500">
//         Principal Details
//       </Heading>
//       <Grid
//         templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
//         gap="16px"
//         mb="24px"
//       >
//         <Field
//           label="Principal Name"
//           name="principalName"
//           required
//           value={form.principalName}
//           error={errors.principalName}
//           onChange={handleChange}
//         />
//         <Field
//           label="Principal Mobile Number (10 digits)"
//           name="principalMobile"
//           required
//           value={form.principalMobile}
//           error={errors.principalMobile}
//           onChange={handleChange}
//         />
//         <Field
//           label="Principal Email ID"
//           name="principalEmail"
//           type="email"
//           required
//           value={form.principalEmail}
//           error={errors.principalEmail}
//           onChange={handleChange}
//         />
//       </Grid>

//       {/* Coordinator Details */}
//       <Heading size="sm" mb="12px" color="brand.500">
//         Olympiad Coordinator Details
//       </Heading>
//       <Grid
//         templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
//         gap="16px"
//         mb="24px"
//       >
//         <Field
//           label="Coordinator Name"
//           name="coordinatorName"
//           required
//           value={form.coordinatorName}
//           error={errors.coordinatorName}
//           onChange={handleChange}
//         />
//         <Field
//           label="Designation"
//           name="coordinatorDesignation"
//           required
//           value={form.coordinatorDesignation}
//           error={errors.coordinatorDesignation}
//           onChange={handleChange}
//         />
//         <Field
//           label="Mobile Number (10 digits)"
//           name="coordinatorMobile"
//           required
//           value={form.coordinatorMobile}
//           error={errors.coordinatorMobile}
//           onChange={handleChange}
//         />
//         <Field
//           label="WhatsApp Number (optional, 10 digits)"
//           name="coordinatorWhatsapp"
//           value={form.coordinatorWhatsapp}
//           error={errors.coordinatorWhatsapp}
//           onChange={handleChange}
//         />
//         <Field
//           label="Coordinator Email ID"
//           name="coordinatorEmail"
//           type="email"
//           required
//           value={form.coordinatorEmail}
//           error={errors.coordinatorEmail}
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
//         mb="8px"
//       >
//         <Field
//           label="Email ID"
//           name="loginEmail"
//           type="email"
//           required
//           value={form.loginEmail}
//           error={errors.loginEmail}
//           onChange={handleChange}
//         />
//         <Field
//           label="Password"
//           name="password"
//           type="password"
//           required
//           value={form.password}
//           error={errors.password}
//           onChange={handleChange}
//           showPass={showPass}
//           toggleShowPass={() => setShowPass((v) => !v)}
//         />
//         <Field
//           label="Confirm Password"
//           name="confirmPassword"
//           type="password"
//           required
//           value={form.confirmPassword}
//           error={errors.confirmPassword}
//           onChange={handleChange}
//           showConfirm={showConfirm}
//           toggleShowConfirm={() => setShowConfirm((v) => !v)}
//         />
//       </Grid>
//       <Text fontSize="xs" color="gray.500" mb="24px">
//         Password must be at least 8 characters and include an uppercase letter,
//         a lowercase letter, a number, and a special symbol.
//       </Text>

//       {/* Actions */}
//       <HStack justify="flex-end" spacing="12px">
//         <Button variant="outline" onClick={handleReset}>
//           Reset Form
//         </Button>
//         <Button colorScheme="brand" isLoading={loading} onClick={handleSave}>
//           Save School
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
  Select,
  Button,
  HStack,
  Heading,
  useToast,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  IconButton,
  Text,
} from '@chakra-ui/react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import Card from 'components/card/Card'; // Horizon UI ka reusable Card

// ── Dropdown data ──
const indianStates = [
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
  'Delhi',
  'Jammu & Kashmir',
  'Ladakh',
];

const schoolTypes = [
  'Private',
  'Government',
  'Government Aided',
  'International',
];
const boards = ['CBSE', 'ICSE', 'State Board', 'IB', 'IGCSE', 'Other'];

const initialState = {
  schoolName: '',
  schoolCode: '',
  schoolType: '',
  boardName: '',
  affiliationNumber: '',
  udiseCode: '',
  establishedYear: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  district: '',
  state: '',
  pincode: '',
  country: 'India',
  principalName: '',
  principalMobile: '',
  principalEmail: '',
  coordinatorName: '',
  coordinatorDesignation: '',
  coordinatorMobile: '',
  coordinatorWhatsapp: '',
  coordinatorEmail: '',
  loginEmail: '',
  password: '',
  confirmPassword: '',
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

// Naam-type fields: sirf letters aur space allowed — koi digit ya special character nahi
const NAME_REGEX = /^[A-Za-z\s]*$/;

const nameFields = [
  'schoolName',
  'principalName',
  'coordinatorName',
  'coordinatorDesignation',
  'city',
  'district',
];

const numericFields10 = [
  'principalMobile',
  'coordinatorMobile',
  'coordinatorWhatsapp',
];

const numericInputFields = [
  'schoolCode',
  'pincode',
  'affiliationNumber',
  'udiseCode',
  'establishedYear',
  ...numericFields10,
];

// ---------- Reusable Field (defined OUTSIDE the form component) ----------
// IMPORTANT: Field must NOT be defined inside AddSchoolForm(). If it were
// declared inside, React would treat it as a brand-new component type on
// every re-render (every keystroke), which remounts the <input> and is
// exactly why typing was kicking you out of the field. Keeping it outside
// with value/error/onChange passed as props keeps the same component
// identity across renders, so focus stays put while typing.
const Field = ({
  label,
  name,
  type = 'text',
  required,
  options,
  colSpan,
  value,
  error,
  onChange,
  showPass,
  showConfirm,
  toggleShowPass,
  toggleShowConfirm,
}) => (
  <GridItem colSpan={colSpan}>
    <FormControl isInvalid={!!error} isRequired={required}>
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
      ) : type === 'password' ? (
        <InputGroup>
          <Input
            name={name}
            type={
              (name === 'password' && showPass) ||
              (name === 'confirmPassword' && showConfirm)
                ? 'text'
                : 'password'
            }
            value={value}
            onChange={onChange}
            placeholder={label}
          />
          <InputRightElement>
            <IconButton
              aria-label="toggle password visibility"
              icon={
                (name === 'password' ? showPass : showConfirm) ? (
                  <MdVisibilityOff />
                ) : (
                  <MdVisibility />
                )
              }
              size="sm"
              variant="ghost"
              onClick={name === 'password' ? toggleShowPass : toggleShowConfirm}
            />
          </InputRightElement>
        </InputGroup>
      ) : (
        <Input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={label}
          inputMode={numericInputFields.includes(name) ? 'numeric' : 'text'}
        />
      )}

      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  </GridItem>
);

export default function AddSchoolForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const toast = useToast();

  const validatePassword = (password) => {
    if (!password) return 'Password is required';
    if (password.length < 8) return 'Must be at least 8 characters long';
    if (!/[A-Z]/.test(password)) return 'Must contain an uppercase letter';
    if (!/[a-z]/.test(password)) return 'Must contain a lowercase letter';
    if (!/[0-9]/.test(password)) return 'Must contain a number';
    if (!/[!@#$%^&*()_+\-={}[\];':"\\|,.<>/?]/.test(password))
      return 'Must contain a special symbol';
    return '';
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // School Code: digits only
    if (name === 'schoolCode') {
      setForm((prev) => ({
        ...prev,
        schoolCode: value.replace(/\D/g, ''),
      }));
      return;
    }

    // Pincode: digits only, max 6
    if (name === 'pincode') {
      setForm((prev) => ({
        ...prev,
        pincode: value.replace(/\D/g, '').slice(0, 6),
      }));
      return;
    }

    // Affiliation number: digits only, max 7
    if (name === 'affiliationNumber') {
      setForm((prev) => ({
        ...prev,
        affiliationNumber: value.replace(/\D/g, '').slice(0, 7),
      }));
      return;
    }

    // UDISE code: digits only, max 11
    if (name === 'udiseCode') {
      setForm((prev) => ({
        ...prev,
        udiseCode: value.replace(/\D/g, '').slice(0, 11),
      }));
      return;
    }

    // Established year: digits only, max 4
    if (name === 'establishedYear') {
      setForm((prev) => ({
        ...prev,
        establishedYear: value.replace(/\D/g, '').slice(0, 4),
      }));
      return;
    }

    // Mobile / WhatsApp numbers: digits only, max 10
    if (numericFields10.includes(name)) {
      setForm((prev) => ({
        ...prev,
        [name]: value.replace(/\D/g, '').slice(0, 10),
      }));
      return;
    }

    // Name-type fields: only letters and spaces allowed (no digits, no special chars)
    if (nameFields.includes(name)) {
      if (!NAME_REGEX.test(value)) return; // ignore invalid keystroke
      setForm((prev) => ({ ...prev, [name]: value }));
      return;
    }

    // Password: live validation + confirm re-check
    if (name === 'password') {
      setForm((prev) => ({ ...prev, password: value }));
      setErrors((prev) => ({
        ...prev,
        password: validatePassword(value),
        confirmPassword:
          form.confirmPassword && value !== form.confirmPassword
            ? 'Passwords do not match'
            : '',
      }));
      return;
    }

    // Confirm password: live validation
    if (name === 'confirmPassword') {
      setForm((prev) => ({ ...prev, confirmPassword: value }));
      setErrors((prev) => ({
        ...prev,
        confirmPassword:
          value !== form.password ? 'Passwords do not match' : '',
      }));
      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.schoolName.trim())
      newErrors.schoolName = 'School Name is required';
    else if (!NAME_REGEX.test(form.schoolName))
      newErrors.schoolName = 'Only letters and spaces are allowed';

    if (!form.schoolCode.trim())
      newErrors.schoolCode = 'School Code is required';
    else if (!/^\d+$/.test(form.schoolCode))
      newErrors.schoolCode = 'School Code must contain digits only';
    if (!form.schoolType) newErrors.schoolType = 'Please select School Type';
    if (!form.boardName) newErrors.boardName = 'Please select Board Name';

    if (form.affiliationNumber && form.affiliationNumber.length !== 7)
      newErrors.affiliationNumber = 'Affiliation Number must be 7 digits';

    if (form.udiseCode && form.udiseCode.length !== 11)
      newErrors.udiseCode = 'UDISE Code must be exactly 11 digits';

    if (form.establishedYear) {
      const yr = parseInt(form.establishedYear, 10);
      const currentYear = new Date().getFullYear();
      if (form.establishedYear.length !== 4 || yr < 1800 || yr > currentYear) {
        newErrors.establishedYear = `Must be between 1800 and ${currentYear}`;
      }
    }

    if (!form.addressLine1.trim())
      newErrors.addressLine1 = 'Address Line 1 is required';

    if (!form.city.trim()) newErrors.city = 'City is required';
    else if (!NAME_REGEX.test(form.city))
      newErrors.city = 'Only letters and spaces are allowed';

    if (!form.district.trim()) newErrors.district = 'District is required';
    else if (!NAME_REGEX.test(form.district))
      newErrors.district = 'Only letters and spaces are allowed';

    if (!form.state) newErrors.state = 'Please select State';
    if (form.pincode.length !== 6)
      newErrors.pincode = 'Pincode must be exactly 6 digits';
    if (!form.country.trim()) newErrors.country = 'Country is required';

    if (!form.principalName.trim())
      newErrors.principalName = 'Principal Name is required';
    else if (!NAME_REGEX.test(form.principalName))
      newErrors.principalName = 'Only letters and spaces are allowed';

    if (form.principalMobile.length !== 10)
      newErrors.principalMobile = 'Mobile number must be 10 digits';
    if (!emailRegex.test(form.principalEmail))
      newErrors.principalEmail = 'Enter a valid email address';

    if (!form.coordinatorName.trim())
      newErrors.coordinatorName = 'Coordinator Name is required';
    else if (!NAME_REGEX.test(form.coordinatorName))
      newErrors.coordinatorName = 'Only letters and spaces are allowed';

    if (!form.coordinatorDesignation.trim())
      newErrors.coordinatorDesignation = 'Designation is required';
    else if (!NAME_REGEX.test(form.coordinatorDesignation))
      newErrors.coordinatorDesignation = 'Only letters and spaces are allowed';

    if (form.coordinatorMobile.length !== 10)
      newErrors.coordinatorMobile = 'Mobile number must be 10 digits';
    if (form.coordinatorWhatsapp && form.coordinatorWhatsapp.length !== 10)
      newErrors.coordinatorWhatsapp = 'WhatsApp number must be 10 digits';
    if (!emailRegex.test(form.coordinatorEmail))
      newErrors.coordinatorEmail = 'Enter a valid email address';

    if (!emailRegex.test(form.loginEmail))
      newErrors.loginEmail = 'Enter a valid email address';

    const passwordErr = validatePassword(form.password);
    if (passwordErr) newErrors.password = passwordErr;

    if (!form.confirmPassword)
      newErrors.confirmPassword = 'Please confirm password';
    else if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ---------- SAVE — ab yahan asli API call ho rahi hai ----------
  const handleSave = async () => {
    if (!validate()) {
      toast({
        title: 'Please fix the highlighted fields',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/v1/auth/school/register`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      toast({
        title: 'School saved successfully!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      setForm(initialState);
      setErrors({});
    } catch (err) {
      toast({
        title: 'Failed to save school',
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

  return (
    <Card p="24px">
      <Heading size="md" mb="20px">
        Add School
      </Heading>

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
          required
          value={form.schoolName}
          error={errors.schoolName}
          onChange={handleChange}
        />
        <Field
          label="School Code"
          name="schoolCode"
          required
          value={form.schoolCode}
          error={errors.schoolCode}
          onChange={handleChange}
        />
        <Field
          label="School Type"
          name="schoolType"
          type="select"
          required
          options={schoolTypes}
          value={form.schoolType}
          error={errors.schoolType}
          onChange={handleChange}
        />
        <Field
          label="Board Name"
          name="boardName"
          type="select"
          required
          options={boards}
          value={form.boardName}
          error={errors.boardName}
          onChange={handleChange}
        />
        <Field
          label="Affiliation Number (7 digits)"
          name="affiliationNumber"
          value={form.affiliationNumber}
          error={errors.affiliationNumber}
          onChange={handleChange}
        />
        <Field
          label="UDISE Code (11 digits)"
          name="udiseCode"
          value={form.udiseCode}
          error={errors.udiseCode}
          onChange={handleChange}
        />
        <Field
          label="Established Year"
          name="establishedYear"
          value={form.establishedYear}
          error={errors.establishedYear}
          onChange={handleChange}
        />
      </Grid>

      {/* School Address */}
      <Heading size="sm" mb="12px" color="brand.500">
        School Address
      </Heading>
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
        gap="16px"
        mb="24px"
      >
        <Field
          label="Address Line 1"
          name="addressLine1"
          required
          colSpan={{ md: 2 }}
          value={form.addressLine1}
          error={errors.addressLine1}
          onChange={handleChange}
        />
        <Field
          label="Address Line 2"
          name="addressLine2"
          value={form.addressLine2}
          error={errors.addressLine2}
          onChange={handleChange}
        />
        <Field
          label="City"
          name="city"
          required
          value={form.city}
          error={errors.city}
          onChange={handleChange}
        />
        <Field
          label="District"
          name="district"
          required
          value={form.district}
          error={errors.district}
          onChange={handleChange}
        />
        <Field
          label="State"
          name="state"
          type="select"
          required
          options={indianStates}
          value={form.state}
          error={errors.state}
          onChange={handleChange}
        />
        <Field
          label="Pincode (6 digits)"
          name="pincode"
          required
          value={form.pincode}
          error={errors.pincode}
          onChange={handleChange}
        />
        <Field
          label="Country"
          name="country"
          required
          value={form.country}
          error={errors.country}
          onChange={handleChange}
        />
      </Grid>

      {/* Principal Details */}
      <Heading size="sm" mb="12px" color="brand.500">
        Principal Details
      </Heading>
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
        gap="16px"
        mb="24px"
      >
        <Field
          label="Principal Name"
          name="principalName"
          required
          value={form.principalName}
          error={errors.principalName}
          onChange={handleChange}
        />
        <Field
          label="Principal Mobile Number (10 digits)"
          name="principalMobile"
          required
          value={form.principalMobile}
          error={errors.principalMobile}
          onChange={handleChange}
        />
        <Field
          label="Principal Email ID"
          name="principalEmail"
          type="email"
          required
          value={form.principalEmail}
          error={errors.principalEmail}
          onChange={handleChange}
        />
      </Grid>

      {/* Coordinator Details */}
      <Heading size="sm" mb="12px" color="brand.500">
        Olympiad Coordinator Details
      </Heading>
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
        gap="16px"
        mb="24px"
      >
        <Field
          label="Coordinator Name"
          name="coordinatorName"
          required
          value={form.coordinatorName}
          error={errors.coordinatorName}
          onChange={handleChange}
        />
        <Field
          label="Designation"
          name="coordinatorDesignation"
          required
          value={form.coordinatorDesignation}
          error={errors.coordinatorDesignation}
          onChange={handleChange}
        />
        <Field
          label="Mobile Number (10 digits)"
          name="coordinatorMobile"
          required
          value={form.coordinatorMobile}
          error={errors.coordinatorMobile}
          onChange={handleChange}
        />
        <Field
          label="WhatsApp Number (optional, 10 digits)"
          name="coordinatorWhatsapp"
          value={form.coordinatorWhatsapp}
          error={errors.coordinatorWhatsapp}
          onChange={handleChange}
        />
        <Field
          label="Coordinator Email ID"
          name="coordinatorEmail"
          type="email"
          required
          value={form.coordinatorEmail}
          error={errors.coordinatorEmail}
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
        mb="8px"
      >
        <Field
          label="Email ID"
          name="loginEmail"
          type="email"
          required
          value={form.loginEmail}
          error={errors.loginEmail}
          onChange={handleChange}
        />
        <Field
          label="Password"
          name="password"
          type="password"
          required
          value={form.password}
          error={errors.password}
          onChange={handleChange}
          showPass={showPass}
          toggleShowPass={() => setShowPass((v) => !v)}
        />
        <Field
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          required
          value={form.confirmPassword}
          error={errors.confirmPassword}
          onChange={handleChange}
          showConfirm={showConfirm}
          toggleShowConfirm={() => setShowConfirm((v) => !v)}
        />
      </Grid>
      <Text fontSize="xs" color="gray.500" mb="24px">
        Password must be at least 8 characters and include an uppercase letter,
        a lowercase letter, a number, and a special symbol.
      </Text>

      {/* Actions */}
      <HStack justify="flex-end" spacing="12px">
        <Button variant="outline" onClick={handleReset}>
          Reset Form
        </Button>
        <Button colorScheme="brand" isLoading={loading} onClick={handleSave}>
          Save School
        </Button>
      </HStack>
    </Card>
  );
}
