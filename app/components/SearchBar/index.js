import React, { Component } from 'react';
import styles from './index.css';

class SearchBar extends Component {
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    const searchBar = `col-md-10 col-md-offset-1 ${styles.searchBar}`;
    return (
      <form onSubmit={this.handleSubmit} className={searchBar}>
        <input placeholder="#sounddesign"autoFocus type="text" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchBar;
