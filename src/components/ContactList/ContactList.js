import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

export default function ContactList({ contacts, handleDelete }) {
  return (
    <ul className={s.ul}>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className={s.item}>
            <span>{contact.name}:</span>
            <span>{contact.number}</span>
            <button type="button" onClick={() => handleDelete(contact.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
