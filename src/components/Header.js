import React from 'react';
import PropTypes from 'prop-types';

const Header = props =>  {
    return(
        <header>
        <h1>RSVP</h1>
        <p>A Treehouse App</p>
        <form onSubmit={props.newGuestInviteeHandler}>
            <input 
            type="text"
            onChange = {props.handleNameInput}
            value = {props.pendingGuest}
            placeholder="Invite Someone" />
            <button 
            type="submit" 
            name="submit" 
            onChange = {props.getNewInviteeName}                
            value="submit"> Submit </button>
        </form>
    </header>
  );
}

Header.propTypes = {
    newGuestInviteeHandler: PropTypes.func.isRequired,
    handleNameInput: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
    getNewInviteeName: PropTypes.func.isRequired
}

export default Header;