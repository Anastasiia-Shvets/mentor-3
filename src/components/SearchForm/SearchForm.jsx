import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('')
  const handleChange = e => {
    setQuery(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <select
        aria-label="select"
        className={styles.select}
        name="region"
        required
        defaultValue="default"
        onChange={handleChange}
      >
        <option disabled value="default">
          Select a region
        </option>
        {regions.map({ id, name, value }) => (<option key={id} value="america">America</option>)}

      </select>
    </form>
  );
};
