import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MagnifyingGlass from '../assets/images/Search.png';

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      keywords: '',
    };
  }

  onInputChange(e) {
    if(e.charCode === 13) {
      this.setState({ keywords: e.target.value }, () => {
        this.props.onInputChange(this.state.keywords);
      });
    }
  }

  render() {
    return (
      <div className="search-box">
        <img style={{ position: 'absolute', width: 25, top: 17 }}
          src={MagnifyingGlass}
        />
        <label className="search-label">Search all reviewed !</label>
        <input
          type="text"
          className="text-box"
          placeholder=""
          onKeyPress={e => this.onInputChange(e)}
        />
      <button className="btn-search">SEARCH</button>
      </div>
    );
  }
}

SearchBox.propTypes = {
  onInputChange: PropTypes.func,
};

export default SearchBox;
