import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import FirebaseConfig from '../firebaseConfig';
import Card from './Card';
import dataSearch from '../data/dataSearch.json';
import Icons from './Icons';
import SearchBox from './SearchBox';
import GoogleServices from '../googleConfig';
import HomeHero from '../assets/images/filipp-romanovskij.jpg';
import FacebookLogo from '../assets/images/FacebookLogo.png';
import FacebookLogined from '../assets/images/FacebookLogined.png';

const stylesBtnFB = {
  position: 'absolute', right: 20, top: 18, width: 28, cursor: 'pointer'
}

class Home extends Component {

  constructor() {
    super();
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    const firebaseObj = new FirebaseConfig();
    const currentUser = firebaseObj.GetCurrentUser();
    currentUser.then((user) => {
      this.setState({email: user.email})
    })
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

  handleSignOut() {
    this.setState({email: ''}, () => {
      new FirebaseConfig().SignOut()
    })
  }
  handleSignIn() {
     new FirebaseConfig().FacebookAuth();
  }
  LoginWithFB() {
    if (!this.state.email) {
      return (
        <img src={FacebookLogo} style={stylesBtnFB} onClick={() => this.handleSignIn()} />
      );
    } else {
      return (
        <img src={FacebookLogined} style={stylesBtnFB} onClick={() => {this.handleSignOut()}} />
      );
    }
  }

  generateCards(data) {
    if(data) {
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
          {this.LoginWithFB()}
        </div>
        <Icons />
        <div className="home-hero" style={{ height: window.innerHeight }}>
          <img src={HomeHero} />
          <div>UrView</div>
          <div>Galll dskkx dksmxkx xsk</div>
          <div>Galll dskkx dksmxkx xskss</div>
        </div>
        <div style={{ display: 'inline-block', marginTop: 60 }}>
          {this.generateCards(dataSearch.results)}
        </div>
      </div>
    )
  }
}

export default Home
