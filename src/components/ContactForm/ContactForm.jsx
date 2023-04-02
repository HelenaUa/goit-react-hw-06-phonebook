// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { FormCon, Input, Btn, LabelStyle } from './ContactForm.styled';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';


const schema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`)
        .required('Required'),
    
    number: Yup.string()
        .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, `Phone number must be digits and can contain spaces, dashes, parentheses and can start with +`)
        .required('Required'),
});

const initialValues = {
    name: '',
    number: '',
};

export default function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    // const onChangeName = e => setName(e.currentTarget.value);
    // const onChangeNumber = e => setNumber(e.currentTarget.value);

    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
 
 const handleSubmit = (event) => {
    // const arrayOfContactsName = contacts.map(contact => contact.name);
     event.preventDefault();
     
     const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (contacts.some(contact => contact.name === name)) {
     alert (`${name} is already in contacts`);
      return;
     };
     dispatch(addContact(newContact));
      resetForm();
    };
  
    // const handleSubmit = (e) => {
    //     // contacts = { name: setName(e.currentTarget.value), number: setNumber(e.currentTarget.value) };
    //     // newContact.name = setName(e.currentTarget.value);
    //     // newContact.number = setNumber(e.currentTarget.value)
    //     // e.preventDefault();
    //     // const form = e.target;
    //     addContacts(newContact);
    //     resetForm();
    // };

const resetForm = () => {
    setName('');
    setNumber('');
    };
    
    
  
    
    
    
    // const addContact = (newContact) => {
  //   const arrayOfContactsName = contacts.map(contact => contact.name);

  //   if (arrayOfContactsName.includes(newContact.name)) {
  //    alert (`${newContact.name} is already in contacts`);
  //     return;
  //   }
  //   setContacts([...contacts, newContact])
  // }; 
   
    // const handleSubmit = (values, actions) => { onSubmit({ ...values, id: nanoid() }); actions.resetForm() };
    
    return (
        <Formik initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}>
            <FormCon autoComplete="off">
                <LabelStyle htmlFor="name">
                    Name
                    <Input type="text" name="name" />
                    <ErrorMessage name="name" component="div" />
                </LabelStyle>
                <LabelStyle htmlFor="number">
                    Number
                    <Input type="tel" name="number" />
                    <ErrorMessage name="number" component="div" />
                </LabelStyle>
                <Btn type="submit">Add contact</Btn>
            </FormCon>
        </Formik> 
    )
};

// ContactForm.propTypes = {
//     onSubmit: PropTypes.func,
//     contacts: PropTypes.arrayOf(PropTypes.object),
// }