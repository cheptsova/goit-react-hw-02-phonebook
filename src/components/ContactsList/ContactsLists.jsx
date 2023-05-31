import PropTypes from 'prop-types';
import { ContactListItem } from './ContactListItem';

export const ContactsList = ({ contactsArr, deleteContact }) => {
  return (
    <div>
      <ul>
        {contactsArr.length > 0 &&
          contactsArr.map(({ name, number, id }) => (
            <ContactListItem
              key={id}
              name={name}
              number={number}
              id={id}
              deleteContact={deleteContact}
            />
          ))}
      </ul>
    </div>
  );
};

ContactsList.propTypes = {
  contactsArr: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
