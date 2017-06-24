import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import Card from './Card';
import dataSearch from '../data/dataSearch.json';
import Icons from './Icons';
import SearchBox from './SearchBox';
import HamburgerMenu from './HamburgerMenu';
import GoogleServices from '../googleConfig';

class Home extends Component {

  constructor() {
    super();
    this.state = {
      data: null,
    };
  }

  getValue(v) {
    const services = new GoogleServices().service;
    const googlestatus = new GoogleServices().status;

    services.textSearch({
      query: v
    }, (places, status) => {
      (status !== googlestatus.OK) || this.setState({ data: places })
    })
  }

  generateCards(data) {
    if(data) {
      console.log(data);
      return (
        data.map((item) => {
          return (
            <Link to={`/detail/${item.place_id}`} key={item.place_id}>
              <Card
                name={item.name}
                photo={item.photos[0].raw_reference.fife_url}
                address={item.formatted_address}
              />
            </Link>
          )
        })
      )
    }
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
          {/* {this.generateCards(this.state.data)} */}
          {this.generateCards(dataSearch.results)}
        </div>
      </div>
    )
  }
}

export default Home
