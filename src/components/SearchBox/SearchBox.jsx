import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.name);

  return (
    <>
      <h3 className={css.title}>Contacts</h3>
      <form className={css.filter}>
        <label>Filter contacts by name: </label>
        <input
          className={css.filterInput}
          type="text"
          value={filter}
          onChange={e => {
            dispatch(changeFilter(e.target.value));
          }}
        />
      </form>
    </>
  );
};

export default SearchBox;
