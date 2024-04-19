import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';

import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

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
