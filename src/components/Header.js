import React from 'react';
import PropTypes from 'prop-types';
import GuestInputForm from './GuestInputForm';

const Header = props =>  {
    return(
        <header>
        <h1>RSVP</h1>
        <p>A Treehouse App</p>
        <GuestInputForm 
            newGuestInviteeHandler={props.newGuestInviteeHandler}
            handleNameInput={props.handleNameInput}
            pendingGuest={props.pendingGuest}
            getNewInviteeName={props.getNewInviteeName}
        />
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