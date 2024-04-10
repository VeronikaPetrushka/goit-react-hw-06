import { useId } from 'react';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setNameFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const inputValue = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const SearchBoxId = useId();

  const handleInputChange = (evt) => {
    dispatch(setNameFilter(evt.target.value.toLowerCase()));
  };

  return (
    <div className={css.SearchBox}>
      <label htmlFor={SearchBoxId} className={css.SearchBoxLabel}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="searchBar"
        className={css.SearchBoxInput}
        id={SearchBoxId}
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBox;
