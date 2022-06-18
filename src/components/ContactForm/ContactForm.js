import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css'

const INITIAL_STATE = {
  name: '',
  number: '',
};

const inputNameId = nanoid();
const inputPhoneId = nanoid();

export default class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  handleCahnge = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value});
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '', });
  };
  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label htmlFor={inputNameId} className={s.label}>
          {' '}
          Name
          <input
          className={s.input}
            type="text"
            name="name"
            value={this.state.name}
            id={inputNameId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleCahnge}
          />
        </label>
        <label className={s.label} htmlFor={inputPhoneId}>Number
          <input
          className={s.input}
            type="tel"
            name="number"
            value={this.state.number}
            id= {inputPhoneId}
            onChange={this.handleCahnge}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
