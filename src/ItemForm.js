import React from 'react';
import PropTypes from 'prop-types';

function ItemForm(props) {
    return (
      <form onSubmit={props.addItem}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={props.value}
          onChange={(e) => props.handleChange(e)}
        />
        <button disabled={(e) => props.inputIsEmpty()}>Add</button>
      </form>
    )
}

ItemForm.propTypes = {
  value: PropTypes.string.isRequired,
  addItem: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  inputIsEmpty: PropTypes.func.isRequired
}

export default ItemForm