import { nanoid } from 'nanoid';
import { Component } from 'react';
import PropTypes from 'prop-types';
import style from './ContactForm.module.css';

export class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  onChangeInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmitForm = event => {
    event.preventDefault();
    this.props.onSubmit({
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    });

    this.reset(event);
  };

  reset = event => {
    this.setState({ name: '', number: '' });
    event.currentTarget.reset();
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.onSubmitForm}>
        <label className={style.label}>
          Name
          <input
            className={style.input}
            value={name}
            type="text"
            name="name"
            required
            onChange={this.onChangeInput}
          />
        </label>

        <label className={style.label}>
          Number
          <input
            className={style.input}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.onChangeInput}
          />
        </label>

        <button className={style.button} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}
