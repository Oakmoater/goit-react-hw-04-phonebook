import PropTypes from 'prop-types';
import Contact from '../Contact/Contact'

const ContactList = ({ contacts, filter, deleter }) => {
    const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
    )

    return (
    <ul className="contact-list">
        {filteredContacts.map((contact) => (
        <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
            deleter={deleter}
        />
        ))}
    </ul>
    )
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired
        })
    ).isRequired,
    filter: PropTypes.string.isRequired,
    deleter: PropTypes.func.isRequired
}

export default ContactList;