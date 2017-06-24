import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import Card from './components/Card';
import data from './dataSearch.json';
import Icons from './components/Icons';
import SearchBox from './components/SearchBox';
import HamburgerMenu from './components/HamburgerMenu';

class Home extends Component {
  getValue(v) {
    console.log(v, 'value');
  }
  generateCards(data) {
    return (
      data.results.map((item) => {
        return (
          <Link to={`/detail/${item.place_id}`} key={item.place_id}>
            <Card
              name={item.name}
              photo={item.photos.photo_reference}
              address={item.formatted_address}
            />
          </Link>
        )
      })
    )
  }

  render() {
    return (
      <div>
        <div className="topbar">
          <SearchBox onInputChange={v => this.getValue(v)}/>
          <HamburgerMenu />
        </div>
        <Icons />
        <div style={{ display: 'inline-block', marginTop: 60 }}>
          {this.generateCards(data)}
        </div>
      </div>
    )
  }
}

export default Home
