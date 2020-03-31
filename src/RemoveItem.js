import React, {Component} from 'react';
import PropTypes from 'prop-types';

class RemoveItem extends Component {

  noItemsFound = () => {
    return this.props.items.length === 0;
  };
  
  render() {
    return (
      <div>
        <button onClick={() => this.props.onDeleteItem()} disabled={this.noItemsFound()}>
          Delete Last Item
        </button>
      </div>
  	)
  }
}

RemoveItem.propTypes = {
  items: PropTypes.array.isRequired,
  onDeleteItem: PropTypes.func.isRequired
}

export default RemoveItem