import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the EditName functional component with destructured props
function EditName({ firstName, lastName, onSave, onCancel }) {
  // useState hooks to manage local state for first name and last name inputs
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);

  return (
    <div className="editMenu">
      <div className="editData">
        {/* Input for editing the first name */}
        <input
          type="text"
          placeholder="First Name"
          value={newFirstName} // Bind input value to newFirstName state
          onChange={(e) => setNewFirstName(e.target.value)} // Update state on input change
        />
        {/* Input for editing the last name */}
        <input
          type="text"
          placeholder="Last Name"
          value={newLastName} // Bind input value to newLastName state
          onChange={(e) => setNewLastName(e.target.value)} // Update state on input change
        />
      </div>
      <div className="editActions">
        {/* Save button - calls onSave prop function with new names as arguments */}
        <button onClick={() => onSave(newFirstName, newLastName)}>Save</button>
        {/* Cancel button - calls onCancel prop function */}
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
