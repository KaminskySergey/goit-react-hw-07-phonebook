import PropTypes from 'prop-types';

import { nanoid } from 'nanoid'

import {Form, FormInput, FormButton} from './ContactForm.styled';
import { useState } from 'react';


const ContactForm = ({onSubmit}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    
    const nameId = nanoid();
    const telId = nanoid()

    const handeChange = (e) => {
        const {name, value} = e.target
        switch (name) {
            case 'name':
                setName(value)
                break;
            case 'number':
                setPhone(value)
                break;
            default:
                return;
    }
}

    const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({name, phone});
    
    reset()
}

const reset = () => {
        setName('')
        setPhone('')
}

return (
            <Form onSubmit={handleSubmit}>
                <label htmlFor={nameId}></label>
                <FormInput
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                placeholder="Name:"
                onChange={handeChange}
                value={name}
                />
                <label htmlFor={telId}>
                <FormInput
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                placeholder="Tel:"
                onChange={handeChange}
                value={phone}
                />
                </label>
    
                <FormButton type='submit'>Add Contact</FormButton>
            </Form> 
        )
}

ContactForm.propTypes = {
onSubmit: PropTypes.func.isRequired
}


export default ContactForm;





