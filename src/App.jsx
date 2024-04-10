import './App.css';
import ContactForm from './components/ContactFrom/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, selectContacts } from './redux/contactsSlice';
import { setNameFilter, selectNameFilter } from './redux/filtersSlice';

const App = () => {
  const inputValue = useSelector(selectNameFilter);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = (value) => {
    dispatch(setNameFilter(value));
  };

  const getFilteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <h1 className='PhoneBookTittle'>Welcome to your phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox inputValue={inputValue} handleChange={handleChange} />
      <ContactList contacts={getFilteredContacts()} onDeleteContact={handleDeleteContact} />
    </div>
  );
};

export default App;
