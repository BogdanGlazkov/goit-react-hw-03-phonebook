import PropTypes from 'prop-types';
import ContactsItem from 'components/Contacts-item';
import s from './Contacts-list.module.css';

export default function ContactsList({ contacts, onDeleteBtn }) {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem
          key={id}
          name={name}
          number={number}
          deleteHandler={() => onDeleteBtn(id)}
        />
      ))}
    </ul>
  );
}

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }).isRequired).isRequired
}
