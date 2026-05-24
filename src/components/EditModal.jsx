import React, { useState } from 'react';
import './EditModal.css';

function EditModal({ user, onSave, onClose }) {
  const [formData, setFormData] = useState({
    role: user.role,
    newsletter: user.newsletter
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Edit User: {user.fullName}</h3>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <div className="modal-body">
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
              <option value="Admin">Admin</option>
            </select>
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
        </div>

        <div className="modal-footer">
          <button className="button button-cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="button button-save" onClick={handleSave}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;