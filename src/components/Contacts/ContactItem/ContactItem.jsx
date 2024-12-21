import React from "react";
import { useDispatch } from "react-redux";
import {deleteContact} from "../../../redux/contacts/operations";

export default function ContactItem({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <button onClick={handleDelete}>delete</button>
    </li>
  );
}
