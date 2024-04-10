import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, selectContacts } from '../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.ContactList}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDeleteContact={handleDeleteContact}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
