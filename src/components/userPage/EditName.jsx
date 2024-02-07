import React, { useState } from 'react';
import PropTypes from 'prop-types';

function EditName({ firstName, lastName, onSave, onCancel }) {
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);

  return (
    <div className='editMenu'>
      <div className='editData'>
        <input
          type="text"
          placeholder="First Name"
          value={newFirstName}
          onChange={(e) => setNewFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={newLastName}
          onChange={(e) => setNewLastName(e.target.value)}
        />
      </div>
      <div className='editActions'>
        <button onClick={() => onSave(newFirstName, newLastName)}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

EditName.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};


export default EditName;
