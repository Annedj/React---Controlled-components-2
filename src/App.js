import React from 'react';
import logo from './logo.svg';
import './App.css';
import ItemsList from './ItemList'
import RemoveItem from './RemoveItem'
import ItemForm from './ItemForm'

class App extends React.Component {
  state = {
    value: '',
    items: []
  };

  addItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, this.state.value],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  
  inputIsEmpty = () => {
    return this.state.value === '';
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
    	<ItemForm addItem={this.addItem} handleChange={this.handleChange} inputIsEmpty={this.inputIsEmpty} value={this.state.value} />

		<RemoveItem items={this.state.items} onDeleteItem={this.deleteLastItem} />
        
		<ItemsList items={this.state.items}/>
      </div>
    );
  }
}

export default App;
