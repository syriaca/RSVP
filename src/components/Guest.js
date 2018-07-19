import React from 'react';
import PropTypes from 'prop-types';
import GuestName from './GuestName';

const Guest = props => 
    <li>
        <GuestName 
            isEditing={props.isEditing}
            handleNameEdits={e => props.setName(e.target.value)}>
            {props.name}
        </GuestName>
        <label>
            <input 
                type="checkbox" 
                checked={props.isConfirmed} 
                onChange={props.handleConfirmation} /> {props.isConfirmed ? "Confirmed" : "Not Confimed"} 
        </label>
        <button onClick={props.handleEditing}>
            {!props.isEditing ? "edit" : "save"}
        </button>
        <button>remove</button>
    </li>

Guest.propTypes = {
    name: PropTypes.string.isRequired,
    isConfirmed: PropTypes.bool.isRequired,
    isEditing: PropTypes.bool.isRequired,
    handleConfirmation: PropTypes.func.isRequired,
    handleEditing: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired
}

export default Guest;