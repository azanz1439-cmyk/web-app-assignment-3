import React, { useState } from 'react';
import './RegistrationForm.css';

function RegistrationForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'Student',
    newsletter: false,
    country: ''
  });

  const [errors, setErrors] = useState({});

  const validateName = (name) => {
    if (!name.trim()) return 'Full Name is required';
    if (name.trim().length < 3) return 'Full Name must be at least 3 characters';
    return '';
  };

  const validateEmail = (email) => {
    if (!email.trim()) return 'Email is required';
    if (!email.includes('@') || !email.includes('.')) {
      return 'Email must contain @ and .';
    }
    return '';
  };

  const validatePassword = (password) => {
    if (!password) return 'Password is required';
    if (password.length < 6) return 'Password must be at least 6 characters';
    return '';
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    if (!confirmPassword) return 'Confirm Password is required';
    if (password !== confirmPassword) return 'Passwords must match';
    return '';
  };

  const validateCountry = (country) => {
    if (!country) return 'Country is required';
    return '';
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue
    });

    let error = '';
    if (name === 'fullName') {
      error = validateName(value);
    } else if (name === 'email') {
      error = validateEmail(value);
    } else if (name === 'password') {
      error = validatePassword(value);
    } else if (name === 'confirmPassword') {
      error = validateConfirmPassword(formData.password, value);
    } else if (name === 'country') {
      error = validateCountry(value);
    }

    setErrors({
      ...errors,
      [name]: error
    });
  };

  const validateForm = () => {
    const newErrors = {};

    newErrors.fullName = validateName(formData.fullName);
    newErrors.email = validateEmail(formData.email);
    newErrors.password = validatePassword(formData.password);
    newErrors.confirmPassword = validateConfirmPassword(formData.password, formData.confirmPassword);
    newErrors.country = validateCountry(formData.country);

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const isFormValid = () => {
    return (
      formData.fullName.trim().length >= 3 &&
      formData.email.includes('@') &&
      formData.email.includes('.') &&
      formData.password.length >= 6 &&
      formData.password === formData.confirmPassword &&
      formData.country !== ''
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    alert(
      `Registration Successful!\n\nFull Name: ${formData.fullName}\nEmail: ${formData.email}\nRole: ${formData.role}\nNewsletter Subscription: ${formData.newsletter ? 'Yes' : 'No'}\nCountry: ${formData.country}`
    );

    onSubmit(formData);

    setFormData({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 'Student',
      newsletter: false,
      country: ''
    });
    setErrors({});
  };

  return (
    <div className="registration-form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name *</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className={errors.fullName ? 'input-error' : ''}
          />
          {errors.fullName && <span className="error-message">{errors.fullName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className={errors.password ? 'input-error' : ''}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password *</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            className={errors.confirmPassword ? 'input-error' : ''}
          />
          {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
        </div>

        <div className="form-group">
          <label>Role *</label>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="role"
                value="Student"
                checked={formData.role === 'Student'}
                onChange={handleChange}
              />
              Student
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="role"
                value="Teacher"
                checked={formData.role === 'Teacher'}
                onChange={handleChange}
              />
              Teacher
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="role"
                value="Admin"
                checked={formData.role === 'Admin'}
                onChange={handleChange}
              />
              Admin
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="country">Country *</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={errors.country ? 'input-error' : ''}
          >
            <option value="">Select a country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
            <option value="Other">Other</option>
          </select>
          {errors.country && <span className="error-message">{errors.country}</span>}
        </div>

        <div className="form-group checkbox-group">
          <label htmlFor="newsletter" className="checkbox-label">
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
            />
            Subscribe to Newsletter
          </label>
        </div>

        <button
          type="submit"
          disabled={!isFormValid()}
          className="submit-button"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;