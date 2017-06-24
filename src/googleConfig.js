import { Component } from 'react';

class googleServices extends Component {
    constructor() {
        super();
        this.service = this.initService()
    }

    initService() {
        const service = new window.google.maps.places.PlacesService(document.getElementById('map'));
        return service;
    }
}

export default googleServices;