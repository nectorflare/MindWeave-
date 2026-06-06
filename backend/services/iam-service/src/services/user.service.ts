import jwt from 'jsonwebtoken';
import User from '../models/User';
import SchoolProfile from '../models/SchoolProfile';
import StudentProfile from '../models/StudentProfile';

const JWT_SECRET = process.env.JWT_SECRET || 'change-this-secret-in-env';
const JWT_EXPIRES_IN = (process.env.JWT_EXPIRES_IN || '1d') as jwt.SignOptions['expiresIn'];

interface RegisterSchoolPayload {
  schoolName: string;
  schoolCode?: string;
  schoolType: string;
  boardName: string;
  affiliationNumber: string;
  udiseCode: string;
  establishedYear: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  district: string;
  state: string;
  pincode: string;
  country: string;
  principalName: string;
  principalMobileNumber: string;
  principalEmailId: string;
  olympiadCoordinatorName: string;
  designation: string;
  mobileNumber: string;
  whatsappNumber: string;
  coordinatorEmailId: string;
  emailId: string;
  password: string;
  confirmPassword: string;
}

interface RegisterUserPayload {
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  classGrade: string;
  schoolName: string;
  city: string;
  state: string;
  fatherName: string;
  motherName: string;
  parentMobileNumber?: string;
  emailId: string;
  mobileNumber: string;
  password: string;
  confirmPassword: string;
  address: string;
  addressCity: string;
  addressState: string;
  pincode: string;
}

const requiredFields = [
  'schoolName',
  'schoolType',
  'boardName',
  'affiliationNumber',
  'udiseCode',
  'establishedYear',
  'addressLine1',
  'city',
  'district',
  'state',
  'pincode',
  'country',
  'principalName',
  'principalMobileNumber',
  'principalEmailId',
  'olympiadCoordinatorName',
  'designation',
  'mobileNumber',
  'whatsappNumber',
  'coordinatorEmailId',
  'emailId',
  'password',
  'confirmPassword'
];

const userRequiredFields = [
  'firstName',
  'lastName',
  'gender',
  'dateOfBirth',
  'classGrade',
  'schoolName',
  'city',
  'state',
  'fatherName',
  'motherName',
  'emailId',
  'mobileNumber',
  'password',
  'confirmPassword',
  'address',
  'addressCity',
  'addressState',
  'pincode'
];

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ where: { email } });

  if (!user) {
    throw new Error('User not found');
  }

  if (!user.validatePassword(password)) {
    throw new Error('Incorrect password');
  }

  await user.update({ last_login_at: new Date() });

  return jwt.sign(
    { userId: user.id, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
};

export const registerSchool = async (payload: RegisterSchoolPayload) => {
  for (const field of requiredFields) {
    const value = payload[field as keyof RegisterSchoolPayload];
    if (value === undefined || value === null || String(value).trim() === '') {
      throw new Error('Missing required fields');
    }
  }

  if (payload.password !== payload.confirmPassword) {
    throw new Error('Passwords do not match');
  }

  const existingUser = await User.findOne({ where: { email: payload.emailId } });
  if (existingUser) {
    throw new Error('Email already in use');
  }

  const user = await User.create({
    email: payload.emailId.trim(),
    password_hash: payload.password,
    role: 'SCHOOL_ADMIN',
    status: 'ACTIVE'
  });

  const schoolProfile = await SchoolProfile.create({
    user_id: user.id,
    school_name: payload.schoolName.trim(),
    school_code: payload.schoolCode?.trim() || null,
    school_type: payload.schoolType.trim(),
    board_name: payload.boardName.trim(),
    affiliation_number: payload.affiliationNumber.trim(),
    udise_code: payload.udiseCode.trim(),
    established_year: payload.establishedYear.trim(),
    address_line1: payload.addressLine1.trim(),
    address_line2: payload.addressLine2?.trim() || null,
    city: payload.city.trim(),
    district: payload.district.trim(),
    state: payload.state.trim(),
    pincode: payload.pincode.trim(),
    country: payload.country.trim(),
    principal_name: payload.principalName.trim(),
    principal_mobile_number: payload.principalMobileNumber.trim(),
    principal_email_id: payload.principalEmailId.trim(),
    olympiad_coordinator_name: payload.olympiadCoordinatorName.trim(),
    designation: payload.designation.trim(),
    mobile_number: payload.mobileNumber.trim(),
    whatsapp_number: payload.whatsappNumber.trim(),
    coordinator_email_id: payload.coordinatorEmailId.trim()
  });

  return schoolProfile.toJSON();
};

export const registerUser = async (payload: RegisterUserPayload) => {
  for (const field of userRequiredFields) {
    const value = payload[field as keyof RegisterUserPayload];
    if (value === undefined || value === null || String(value).trim() === '') {
      throw new Error('Missing required fields');
    }
  }

  if (payload.password !== payload.confirmPassword) {
    throw new Error('Passwords do not match');
  }

  const existingUser = await User.findOne({ where: { email: payload.emailId } });
  if (existingUser) {
    throw new Error('Email already in use');
  }

  const user = await User.create({
    email: payload.emailId.trim(),
    password_hash: payload.password,
    role: 'STUDENT',
    status: 'ACTIVE'
  });

  const studentProfile = await StudentProfile.create({
    user_id: user.id,
    first_name: payload.firstName.trim(),
    last_name: payload.lastName.trim(),
    gender: payload.gender.trim(),
    date_of_birth: payload.dateOfBirth,
    class_grade: payload.classGrade.trim(),
    school_name: payload.schoolName.trim(),
    city: payload.city.trim(),
    state: payload.state.trim(),
    father_name: payload.fatherName.trim(),
    mother_name: payload.motherName.trim(),
    parent_mobile_number: payload.parentMobileNumber?.trim() || null,
    email_id: payload.emailId.trim(),
    mobile_number: payload.mobileNumber.trim(),
    address: payload.address.trim(),
    address_city: payload.addressCity.trim(),
    address_state: payload.addressState.trim(),
    pincode: payload.pincode.trim()
  });

  return studentProfile.toJSON();
};
