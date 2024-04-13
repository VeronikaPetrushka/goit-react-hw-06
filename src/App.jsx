import './App.css';
import ContactForm from './components/ContactFrom/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

const App = () => {

  return (
    <div>
      <h1 className='PhoneBookTittle'>Welcome to your phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
