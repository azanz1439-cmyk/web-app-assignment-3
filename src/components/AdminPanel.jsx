import React, { useState } from 'react';
import { FaEdit, FaTrashAlt, FaUserCog } from 'react-icons/fa';
import EditModal from './EditModal';
import './AdminPanel.css';

function AdminPanel({ users = [], onDeleteUser, onEditUser }) {
  const [editingUser, setEditingUser] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const totalUsers = users.length;
  const adminCount = users.filter(user => user.role === 'Admin').length;
  const newsletterCount = users.filter(user => user.newsletter).length;

  const handleDelete = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      onDeleteUser(userId);
    }
  };

  const handleEditClick = (user) => {
    setEditingUser(user);
    setShowEditModal(true);
  };

  const handleSaveEdit = (updatedData) => {
    onEditUser(editingUser.id, updatedData);
    setShowEditModal(false);
    setEditingUser(null);
  };

  return (
    <div className="admin-panel-container">
      <h2>Admin Panel</h2>

      <div className="statistics-section">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p className="stat-number">{totalUsers}</p>
        </div>
        <div className="stat-card">
          <h3>Admin Users</h3>
          <p className="stat-number">{adminCount}</p>
        </div>
        <div className="stat-card">
          <h3>Newsletter Subscribers</h3>
          <p className="stat-number">{newsletterCount}</p>
        </div>
      </div>

      <div className="table-container">
        <h3>Registered Users</h3>
        {users.length === 0 ? (
          <p className="no-users">No users registered yet.</p>
        ) : (
          <table className="users-table">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Newsletter Subscribed</th>
                <th>Country</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td className="name-cell">
                    {user.role === 'Admin' && <FaUserCog className="admin-icon" title="Admin User" />}
                    {user.fullName || 'Unknown User'}
                  </td>
                  <td>{user.email}</td>
                  <td>
                    <span className={`role-badge role-${user.role.toLowerCase()}`}>
                      {user.role}
                    </span>
                  </td>
                  <td>
                    <span className={user.newsletter ? 'yes' : 'no'}>
                      {user.newsletter ? 'Yes' : 'No'}
                    </span>
                  </td>
                  <td>{user.country}</td>
                  <td className="actions-cell">
                    <button
                      className="action-button edit-button"
                      onClick={() => handleEditClick(user)}
                      title="Edit user"
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="action-button delete-button"
                      onClick={() => handleDelete(user.id)}
                      title="Delete user"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {showEditModal && editingUser && (
        <EditModal
          user={editingUser}
          onSave={handleSaveEdit}
          onClose={() => {
            setShowEditModal(false);
            setEditingUser(null);
          }}
        />
      )}
    </div>
  );
}

AdminPanel.defaultProps = {
  users: []
};

export default AdminPanel;