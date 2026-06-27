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

type UpdateSchoolPayload = Partial<Omit<RegisterSchoolPayload, 'password' | 'confirmPassword'>>;
type UpdateStudentPayload = Partial<Omit<RegisterUserPayload, 'password' | 'confirmPassword'>>;

export const getAllSchools = async () => {
  const schools = await SchoolProfile.findAll();
  return schools.map(school => school.toJSON());
};

export const getAllStudents = async () => {
  const students = await StudentProfile.findAll();
  return students.map(student => student.toJSON());
};

export const getSchoolById = async (schoolId: string) => {
  const school = await SchoolProfile.findByPk(schoolId);
  if (!school) {
    throw new Error('School not found');
  }
  return school.toJSON();
};

export const getStudentById = async (studentId: string) => {
  const student = await StudentProfile.findByPk(studentId);
  if (!student) {
    throw new Error('Student not found');
  }
  return student.toJSON();
};

export const updateSchool = async (schoolId: string, payload: UpdateSchoolPayload) => {
  const school = await SchoolProfile.findByPk(schoolId);
  if (!school) {
    throw new Error('School not found');
  }

  const updateData: Partial<Record<string, any>> = {};

  if (payload.schoolName !== undefined) updateData.school_name = payload.schoolName.trim();
  if (payload.schoolCode !== undefined) updateData.school_code = payload.schoolCode?.trim() || null;
  if (payload.schoolType !== undefined) updateData.school_type = payload.schoolType.trim();
  if (payload.boardName !== undefined) updateData.board_name = payload.boardName.trim();
  if (payload.affiliationNumber !== undefined) updateData.affiliation_number = payload.affiliationNumber.trim();
  if (payload.udiseCode !== undefined) updateData.udise_code = payload.udiseCode.trim();
  if (payload.establishedYear !== undefined) updateData.established_year = payload.establishedYear.trim();
  if (payload.addressLine1 !== undefined) updateData.address_line1 = payload.addressLine1.trim();
  if (payload.addressLine2 !== undefined) updateData.address_line2 = payload.addressLine2?.trim() || null;
  if (payload.city !== undefined) updateData.city = payload.city.trim();
  if (payload.district !== undefined) updateData.district = payload.district.trim();
  if (payload.state !== undefined) updateData.state = payload.state.trim();
  if (payload.pincode !== undefined) updateData.pincode = payload.pincode.trim();
  if (payload.country !== undefined) updateData.country = payload.country.trim();
  if (payload.principalName !== undefined) updateData.principal_name = payload.principalName.trim();
  if (payload.principalMobileNumber !== undefined) updateData.principal_mobile_number = payload.principalMobileNumber.trim();
  if (payload.principalEmailId !== undefined) updateData.principal_email_id = payload.principalEmailId.trim();
  if (payload.olympiadCoordinatorName !== undefined) updateData.olympiad_coordinator_name = payload.olympiadCoordinatorName.trim();
  if (payload.designation !== undefined) updateData.designation = payload.designation.trim();
  if (payload.mobileNumber !== undefined) updateData.mobile_number = payload.mobileNumber.trim();
  if (payload.whatsappNumber !== undefined) updateData.whatsapp_number = payload.whatsappNumber.trim();
  if (payload.coordinatorEmailId !== undefined) updateData.coordinator_email_id = payload.coordinatorEmailId.trim();

  if (payload.emailId !== undefined) {
    const email = payload.emailId.trim();
    if (email !== '') {
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser && existingUser.id !== school.user_id) {
        throw new Error('Email already in use');
      }
      const user = await User.findByPk(school.user_id);
      if (user) {
        await user.update({ email });
      }
    }
  }

  await school.update(updateData);
  return school.toJSON();
};

export const updateStudent = async (studentId: string, payload: UpdateStudentPayload) => {
  const student = await StudentProfile.findByPk(studentId);
  if (!student) {
    throw new Error('Student not found');
  }

  const updateData: Partial<Record<string, any>> = {};

  if (payload.firstName !== undefined) updateData.first_name = payload.firstName.trim();
  if (payload.lastName !== undefined) updateData.last_name = payload.lastName.trim();
  if (payload.gender !== undefined) updateData.gender = payload.gender.trim();
  if (payload.dateOfBirth !== undefined) updateData.date_of_birth = payload.dateOfBirth;
  if (payload.classGrade !== undefined) updateData.class_grade = payload.classGrade.trim();
  if (payload.schoolName !== undefined) updateData.school_name = payload.schoolName.trim();
  if (payload.city !== undefined) updateData.city = payload.city.trim();
  if (payload.state !== undefined) updateData.state = payload.state.trim();
  if (payload.fatherName !== undefined) updateData.father_name = payload.fatherName.trim();
  if (payload.motherName !== undefined) updateData.mother_name = payload.motherName.trim();
  if (payload.parentMobileNumber !== undefined) updateData.parent_mobile_number = payload.parentMobileNumber?.trim() || null;
  if (payload.emailId !== undefined) updateData.email_id = payload.emailId.trim();
  if (payload.mobileNumber !== undefined) updateData.mobile_number = payload.mobileNumber.trim();
  if (payload.address !== undefined) updateData.address = payload.address.trim();
  if (payload.addressCity !== undefined) updateData.address_city = payload.addressCity.trim();
  if (payload.addressState !== undefined) updateData.address_state = payload.addressState.trim();
  if (payload.pincode !== undefined) updateData.pincode = payload.pincode.trim();

  if (payload.emailId !== undefined) {
    const email = payload.emailId.trim();
    if (email !== '') {
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser && existingUser.id !== student.user_id) {
        throw new Error('Email already in use');
      }
      const user = await User.findByPk(student.user_id);
      if (user) {
        await user.update({ email });
      }
    }
  }

  await student.update(updateData);
  return student.toJSON();
};
