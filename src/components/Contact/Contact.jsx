import PropTypes from 'prop-types';

const Contact = ({id, name, number, deleter}) => {
    return (
    <li key={id}>
        <span>{name}: {number}</span>
        <button type="button" id={id} onClick={() => (deleter(id))}>Delete</button>
    </li>
    )
};

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleter: PropTypes.func.isRequired
}

export default Contact;