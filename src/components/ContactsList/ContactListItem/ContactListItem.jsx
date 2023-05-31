import PropTypes from 'prop-types';
import style from './ContactsListItem.module.css';

export const ContactListItem = ({ name, number, id, deleteContact }) => {
  return (
    <li className={style.list}>
      <p>
        {name}: {number}
      </p>
      <button
        className={style.button}
        onClick={() => deleteContact(id)}
        ype="button"
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
