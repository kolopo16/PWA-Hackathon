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
    this.setState({ keywords: e.target.value })
    if (e.charCode === 13) {
      this.props.onInputChange(this.state.keywords);
    }
  }

  onClickSearch(keyword) {
    this.setState({ keywords: keyword }, () => {
      this.props.onInputChange(this.state.keywords);
    });
  }

  render() {
    return (
      <div className="search-box">
        <img style={{ position: 'absolute', width: 25, top: 17 }}
          src={MagnifyingGlass}
        />
        <label className="search-label">Search all reviewes !</label>
        <input
          type="text"
          className="text-box"
          placeholder=""
          onKeyPress={e => this.onInputChange(e)}
        />
        <button className="btn-search" onClick={() => this.onClickSearch(this.state.keywords)}>SEARCH</button>
      </div>
    );
  }
}

SearchBox.propTypes = {
  onInputChange: PropTypes.func,
};

export default SearchBox;
