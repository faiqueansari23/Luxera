import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Define the validation schema using Yup
const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .matches(/(?=.*[!@#$%^&*(),.?":{}|<>])/, 'Password must contain at least one special character')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
  dateOfBirth: Yup.object({
    day: Yup.number().min(1).max(31).required('Day is required'),
    month: Yup.string().required('Month is required'),
    year: Yup.number().min(1900).max(new Date().getFullYear()).required('Year is required'),
  }),
  gender: Yup.string().required('Gender is required'),
});

const SignUp = () => {
  // Get today's date
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonthIndex = today.getMonth(); // Months are 0-based
  const currentYear = today.getFullYear();

  // Generate options for day, month, and year
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    { value: '', label: 'Month' },
    { value: 'January', label: 'January' },
    { value: 'February', label: 'February' },
    { value: 'March', label: 'March' },
    { value: 'April', label: 'April' },
    { value: 'May', label: 'May' },
    { value: 'June', label: 'June' },
    { value: 'July', label: 'July' },
    { value: 'August', label: 'August' },
    { value: 'September', label: 'September' },
    { value: 'October', label: 'October' },
    { value: 'November', label: 'November' },
    { value: 'December', label: 'December' },
  ];
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  // Get current month value for the dropdown
  const currentMonth = months[currentMonthIndex + 1].value;

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-center text-2xl font-bold mb-1 text-gray-800">Create a new account</h2>
        <p className="text-center text-sm text-gray-600 mb-4">It's quick and easy.</p>
        <hr className='mb-4' />
        <Formik
          initialValues={{ 
            firstName: '', 
            lastName: '', 
            email: '', 
            password: '', 
            confirmPassword: '', 
            dateOfBirth: { 
              day: currentDay, 
              month: currentMonth, 
              year: currentYear 
            }, 
            gender: '' 
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log('Form data', values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, setFieldValue, values }) => (
            <Form className="space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                  />
                  <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div>
                  <Field
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                  />
                  <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
                </div>
              </div>

              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
                <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <div className="flex space-x-4 mt-2">
                  <div className="flex-1">
                    <Field
                      as="select"
                      name="dateOfBirth.day"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    >
                      <option value="">Day</option>
                      {days.map(day => (
                        <option key={day} value={day}>{day}</option>
                      ))}
                    </Field>
                    <ErrorMessage name="dateOfBirth.day" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div className="flex-1">
                    <Field
                      as="select"
                      name="dateOfBirth.month"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    >
                      {months.map(month => (
                        <option key={month.value} value={month.value}>{month.label}</option>
                      ))}
                    </Field>
                    <ErrorMessage name="dateOfBirth.month" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div className="flex-1">
                    <Field
                      as="select"
                      name="dateOfBirth.year"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    >
                      <option value="">Year</option>
                      {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </Field>
                    <ErrorMessage name="dateOfBirth.year" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <fieldset>
                  <legend className="block text-sm font-medium text-gray-700">Gender</legend>
                  <div className="flex space-x-4 mt-2">
                    <label className="flex-1 border border-gray-300 rounded-md shadow-sm p-2 flex items-center h-10">
                      <span className="flex-1 text-sm text-gray-600">Male</span>
                      <Field type="radio" name="gender" value="male" className="form-radio text-orange-500 peer ml-auto" />
                    </label>
                    <label className="flex-1 border border-gray-300 rounded-md shadow-sm p-2 flex items-center h-10">
                      <span className="flex-1 text-sm text-gray-600">Female</span>
                      <Field type="radio" name="gender" value="female" className="form-radio text-orange-500 peer ml-auto" />
                    </label>
                    <label className="flex-1 border border-gray-300 rounded-md shadow-sm p-2 flex items-center h-10">
                      <span className="flex-1 text-sm text-gray-600">Other</span>
                      <Field type="radio" name="gender" value="other" className="form-radio text-orange-500 peer ml-auto" />
                    </label>
                    <ErrorMessage name="gender" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </fieldset>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 px-4 bg-orange-700 text-white font-medium rounded-md shadow-sm hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                {isSubmitting ? 'Submitting...' : 'Sign Up'}
              </button>
            </Form>
          )}
        </Formik>
        <p className="mt-4 text-sm text-gray-600 text-center">
          Already have an account? <a href="/login" className="text-orange-700 hover:underline">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
