import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Form, Input, Button } from '../App.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createContact({
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    });
    this.setState({
      name: '',
      number: '',
    });

    // console.log(event);
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <label htmlFor="">
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="Write a name"
          />
        </label>

        <label htmlFor="">
          Phone Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
            value={this.state.number}
            placeholder="Write a number"
          />
        </label>

        <Button type="submit">Add Contact</Button>
      </Form>
    );
  }
}
