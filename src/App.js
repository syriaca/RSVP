import React, { Component } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';


import './App.css';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: [
      {
        name: 'Marjolaine',
        isConfirmed: false,
        isEditing: false
      },
      {
        name: 'Jean-Yves',
        isConfirmed: true,
        isEditing: false
      },
      {
        name: 'Zack',
        isConfirmed: false,
        isEditing: true
      }
    ]
  }
  
  toggleGuestPropertyAt = (property, indexToChange) =>
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            [property]: !guest[property]
          }
        }
        return guest;
      })
    });

  toggleConfirmationAt = index =>
    this.toggleGuestPropertyAt("isConfirmed", index);

  removeGuestAt = index =>
    this.setState({
      guests: [
        ...this.state.guests.slice(0, index),
        ...this.state.guests.slice(index + 1)
      ]
    });

  toggleEditingAt = index =>
    this.toggleGuestPropertyAt("isEditing", index);

    setNameAt = (name, indexToChange) =>
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            name
          }
        }
        return guest;
      })
    });

    toggleFilter = () => 
      this.setState({isFiltered: !this.state.isFiltered});

    handleNameInput = e =>
      this.setState({pendingGuest: e.target.value});

    newGuestInviteeHandler = e => {
      e.preventDefault();
      this.setState({
        guests: [
          {
            name: this.state.pendingGuest,
            isFiltered: false,
            isEditing: false
          },
          ...this.state.guests
        ],
        pendingGuest: ""
      })

    }
  getTotalInvited = () => this.state.guests.length;
  getAttendingGuest = () => 
    this.state.guests.reduce((total, guest) => 
      guest.isConfirmed ? total + 1 : total, 0
  );

  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuest();
    const numberUnconfirmed = totalInvited - numberAttending;

    return (
      <div className="App">
        <Header 
          newGuestInviteeHandler={this.newGuestInviteeHandler}
          handleNameInput={this.handleNameInput}
          pendingGuest = {this.state.pendingGuest}
          getNewInviteeName={this.getNewInviteeName}
          />

        <MainContent
          totalInvited={totalInvited}
          numberAttending={numberAttending}
          numberUnconfirmed={numberUnconfirmed}
          isFiltered= {this.state.isFiltered}
          guests={this.state.guests}
          pendingGuest = {this.state.pendingGuest}
          removeGuestAt = {this.removeGuestAt}
          toggleConfirmationAt={this.toggleConfirmationAt} 
          toggleEditingAt={this.toggleEditingAt}
          setNameAt={this.setNameAt}
          newGuestInviteeHandler = {this.newGuestInviteeHandler}
          toggleFilter={this.toggleFilter}
          />
      </div>
    );
  }
}

export default App;
