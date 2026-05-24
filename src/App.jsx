import React, { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import AdminPanel from './components/AdminPanel';
import './App.css';

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      fullName: 'John Smith',
      email: 'john.smith@example.com',
      role: 'Student',
      newsletter: true,
      country: 'USA'
    },
    {
      id: 2,
      fullName: 'Sarah Johnson',
      email: 'sarah.johnson@example.com',
      role: 'Teacher',
      newsletter: false,
      country: 'Canada'
    },
    {
      id: 3,
      fullName: 'Admin User',
      email: 'admin@example.com',
      role: 'Admin',
      newsletter: true,
      country: 'UK'
    }
  ]);

  const [currentView, setCurrentView] = useState('register');
  const [nextId, setNextId] = useState(4);

  const handleAddUser = (newUser) => {
    const userWithId = {
      ...newUser,
      id: nextId
    };
    setUsers([...users, userWithId]);
    setNextId(nextId + 1);
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleEditUser = (userId, updatedData) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, ...updatedData } : user
    ));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>User Management System</h1>
        <div className="button-group">
          <button 
            className={`nav-button ${currentView === 'register' ? 'active' : ''}`}
            onClick={() => setCurrentView('register')}
          >
            Register New User
          </button>
          <button 
            className={`nav-button ${currentView === 'admin' ? 'active' : ''}`}
            onClick={() => setCurrentView('admin')}
          >
            View Admin Panel
          </button>
        </div>
      </header>

      <main className="app-main">
        {currentView === 'register' ? (
          <RegistrationForm onSubmit={handleAddUser} />
        ) : (
          <AdminPanel 
            users={users} 
            onDeleteUser={handleDeleteUser}
            onEditUser={handleEditUser}
          />
        )}
      </main>
    </div>
  );
}

export default App;