import React from 'react'
import ContactsForm from "../../components/Contacts/ContactsForm/ContactsForm"
import ContactsList from "../../components/Contacts/ContactsList/ContactList"

export default function index() {
  return (
    <div>
      <ContactsForm/>
      <ContactsList/>
    </div>
  )
}
