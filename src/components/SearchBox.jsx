import React, { Component } from 'react';

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      keywords: ''
    }
  }
  onInputChange(e) {
    this.setState({ keywords: e.target.value });
  }

  render() {
    return (
      <div className="search-box">
        <input
          type="text"
          className="text-box"
          placeholder="SEARCH ..."
          onChange={(e) => this.onInputChange(e)}
          />
      </div>
    );
  }
}

export default SearchBox;
