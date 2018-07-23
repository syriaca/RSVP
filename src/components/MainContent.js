import React from 'react';
import PropTypes from 'prop-types';
import GuestList from './GuestList';
import Counter from './Counter';

const MainContent = props => {
    return(
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input 
                type="checkbox"
                onChange={props.toggleFilter} 
                checked={props.isFiltered} /> Hide those who haven't responded
            </label>
          </div>

          <Counter 
            totalInvited={props.totalInvited}
            numberAttending={props.numberAttending}
            numberUnconfirmed={props.numberUnconfirmed}            
            />

          <GuestList 
            guests={props.guests} 
            toggleConfirmationAt={props.toggleConfirmationAt} 
            toggleEditingAt={props.toggleEditingAt} 
            setNameAt={props.setNameAt} 
            isFiltered={props.isFiltered}
            newGuestInviteeHandler = {props.newGuestInviteeHandler}
            removeGuestAt = {props.removeGuestAt}
            pendingGuest = {props.pendingGuest}            
            />
        </div>
    );
}

MainContent.propsTypes = {
    totalInvited: PropTypes.number,
    numberAttending: PropTypes.number,
    numberUnconfirmed: PropTypes.number,
    isFiltered: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
    removeGuestAt: PropTypes.func.isRequired,
    toggleConfirmationAt: PropTypes.func.isRequired,
    toggleEditingAt: PropTypes.func.isRequired,
    setNameAt: PropTypes.func.isRequired,
    newGuestInviteeHandler: PropTypes.func.isRequired,
    toggleFilter: PropTypes.func.isRequired

}

export default MainContent;