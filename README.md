# User Management System - Web Application Assignment 3

A React application with two main views – a Registration Form and an Admin Panel – that work together for managing user registrations.

## Features

### Part A: Registration Form
- **Form Fields** (all controlled):
  - Full Name (text input) – required, minimum 3 characters
  - Email (email input) – required, must contain '@' and '.'
  - Password (password input) – required, minimum 6 characters
  - Confirm Password (password input) – must match password
  - Role (radio buttons) – Student, Teacher, Admin
  - Newsletter Subscription (checkbox) – boolean value
  - Country (select dropdown) – USA, Canada, UK, Australia, Other

- **Real-time Validation**: Display validation errors under each field as the user types
- **Smart Submit Button**: Disabled until all required fields are valid
- **Success Feedback**: Shows a success alert summarizing all form data
- **Form Reset**: Automatically resets to initial empty state after submission

### Part B: Admin Panel
- **Users Table** displaying:
  - Full Name
  - Email
  - Role (with badge styling)
  - Newsletter Subscription status
  - Country
  - Action icons (Edit & Delete)

- **Admin Icons**: Uses `react-icons/fa` for:
  - `FaEdit` - Edit user information
  - `FaTrashAlt` - Delete user with confirmation
  - `FaUserCog` - Admin indicator next to Admin users

- **Delete Functionality**:
  - Confirmation dialog before deletion
  - Removes user from the list on confirmation

- **Edit Functionality**:
  - Modal dialog to edit user role and newsletter subscription
  - Changes are saved and reflected in the table

- **Admin Statistics**:
  - Total number of registered users
  - Number of Admin users
  - Number of Newsletter subscribers

### Part C: Layout & Routing
- **Main App Component** with:
  - State management for user list (starts with 3 default users)
  - Toggle buttons to switch between Registration Form and Admin Panel
  - Props passing for child components

## Project Structure

```
src/
├── App.jsx                          # Main application component
├── App.css                          # Main styles
├── index.jsx                        # Entry point
├── index.css                        # Global styles
├── components/
│   ├── RegistrationForm.jsx         # Registration form component
│   ├── RegistrationForm.css         # Registration form styles
│   ├── AdminPanel.jsx               # Admin panel component
│   ├── AdminPanel.css               # Admin panel styles
│   ├── EditModal.jsx                # Edit user modal component
│   └── EditModal.css                # Edit modal styles
public/
├── index.html                       # HTML template
package.json                         # Project dependencies
README.md                           # This file
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/azanz1439-cmyk/web-app-assignment-3.git
cd web-app-assignment-3
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## Technologies Used

- **React 18.2.0** - UI library
- **React Icons 5.0.1** - Icon library for action buttons
- **React Scripts 5.0.1** - Build and development tools
- **CSS3** - Styling with responsive design

## Default Users

The application starts with 3 default users:

1. **John Smith** - Student - USA - Newsletter: Yes
2. **Sarah Johnson** - Teacher - Canada - Newsletter: No
3. **Admin User** - Admin - UK - Newsletter: Yes

## Validation Rules

### Full Name
- Not empty
- Minimum 3 characters

### Email
- Required
- Must contain '@' and '.'

### Password
- Required
- Minimum 6 characters

### Confirm Password
- Required
- Must match password exactly

### Country
- Required
- Must select from dropdown

## How to Use

### Register a New User
1. Click "Register New User" button
2. Fill in all form fields
3. Form validation will show errors in real-time
4. Submit button activates once all fields are valid
5. Upon successful submission, a success alert appears
6. Form resets automatically

### Manage Users (Admin Panel)
1. Click "View Admin Panel" button
2. View statistics at the top (Total Users, Admin Users, Newsletter Subscribers)
3. See all registered users in the table
4. **Edit User**: Click the edit icon to modify role and newsletter status
5. **Delete User**: Click the delete icon, confirm deletion when prompted
6. Changes are immediately reflected in the table and statistics

## Responsive Design

The application is fully responsive and works on:
- Desktop (1024px and above)
- Tablet (768px to 1023px)
- Mobile (below 768px)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Assignment Requirements Met

✅ All form fields implemented with real-time validation
✅ Submit button disabled until form is valid
✅ Success alert with form summary on submission
✅ Admin panel displays all users with required columns
✅ Edit and Delete functionality with confirmation
✅ Admin statistics displayed
✅ React Icons integrated (FaEdit, FaTrashAlt, FaUserCog)
✅ App component with state management and routing
✅ Responsive CSS styling
✅ defaultProps for fallback values

## Notes

- All form inputs are controlled components
- Validation happens in real-time as user types
- Default role is set to "Student"
- Newsletter subscription is optional
- Admin users are marked with a special icon
- All styling is custom CSS with no external UI libraries