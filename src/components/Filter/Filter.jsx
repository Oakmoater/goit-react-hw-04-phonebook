import PropTypes from 'prop-types';

const Filter = ({addFilter}) => {
    return (
    <input type="text" onChange={addFilter} />
    )
};

Filter.propTypes = {
    addFilter: PropTypes.func.isRequired
}

export default Filter;