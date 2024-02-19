import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the EditName functional component with destructured props
function EditName({ firstName, lastName, onSave, onCancel }) {
  // useState hooks to manage local state for first name and last name inputs
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const [error, setError] = useState('');

  // Function to handle saving updated user information
  const handleSave = () => {
    // Check if either first name or last name is empty
    if (!newFirstName.trim() || !newLastName.trim()) {
      setError('First name and last name are required.');
      return;
    }

    onSave(newFirstName, newLastName);
    setError(''); // Reset error state
  };

  return (
    <div className="editMenu">
      <div className="editData">
        {/* Input for editing the first name */}
        <input
          type="text"
          placeholder="First Name"
          value={newFirstName} // Bind input value to newFirstName state
          onChange={(e) => {
            setNewFirstName(e.target.value);
            setError(''); // Reset error state on input change
          }}
        />
        {/* Input for editing the last name */}
        <input
          type="text"
          placeholder="Last Name"
          value={newLastName}
          onChange={(e) => {
            setNewLastName(e.target.value);
            setError(''); // Reset error state on input change
          }}
        />
      </div>
      {error && <div className="errorMessage">{error}</div>} {/* Print error message if needed */}
      <div className="editActions">
        <button onClick={handleSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

EditName.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default EditName;
