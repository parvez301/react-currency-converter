import {Component} from 'react';

class Service extends Component {

    /**
     * return a Promise within API info
     */
    static getLatest() {        
        return fetch("<api-end-point>").then(result => result.json());
    }

    /**
     * Convert a value from one currency to another. Value should be in double format (eg: 123.45). From and To should be one currency of the list.
     * 
     * @param {string} value - value to be converted
     * @param {string} from - origin currency
     * @param {string} to - another currency
     */
    static convert(value, from, to) {
        return fetch("<api-end-point>?value="+ value +"&from="+ from +"&to="+ to).then(result => result.json());
    }

}

export default Service;