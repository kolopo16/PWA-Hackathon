import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import Card from './components/Card';
import data from './dataSearch.json';

class Home extends Component {

  constructor() {
    super();
  }

  generateCards(data) {
    return (
      data.results.map((item) => {
        return (
          <Link to={`/detail/${item.place_id}`} key={item.place_id}>
            <Card name={item.name}
                photo={item.photos.photo_reference}
                address={item.formatted_address}/>
          </Link>
        )
      })
    )
  }

  render() {
    return (
      <div className="test" style={{ display: 'inline-block', marginTop: 60 }}>
        {this.generateCards(data)}
      </div>
    )
  }
}

export default Home
