import PropTypes from 'prop-types';

const Contact = ({id, name, number, onDelete}) => {
    return (
    <li key={id}>
        <span>{name}: {number}</span>
        <button type="button" id={id} onClick={() => (onDelete(id))}>Delete</button>
    </li>
    )
};

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Contact;