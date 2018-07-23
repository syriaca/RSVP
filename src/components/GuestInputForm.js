import React from 'react';

const GuestInputForm = props =>  {
    return(
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
  );
}

export default GuestInputForm;