import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: "John Doe",
          email: "johndoe@gmail.com",
          phone: "222-222-2222"
        },
        {
          id: 2,
          name: "Sara Williams",
          email: "sara@gmail.com",
          phone: "333-333-3333"
        },
        {
          id: 3,
          name: "Jake Paul",
          email: "pauljake@gmail.com",
          phone: "777-777-7777"
        }
      ]
    };
  }

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;