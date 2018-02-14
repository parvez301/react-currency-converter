import React, { Component } from 'react';
import './Converter.css';
import Service from '../APIService/Service';

class Converter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: 1.23,
            from: '',
            to: '',
            converted: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeFrom = this.handleChangeFrom.bind(this);
        this.handleChangeTo = this.handleChangeTo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleChangeFrom(event) {
        this.setState({from: event.target.value});
    }
    
    handleChangeTo(event) {
        this.setState({to: event.target.value});
    }
    
    handleSubmit(event) {

        var v = this.state.value;
        var f = this.state.from;
        var t = this.state.to;

        if (f === '' || t === ''){
            alert('Choose a currency.');
            event.preventDefault();
            return;
        }
        

        if (f === t){
            alert('Currencies shall be differents.');
            event.preventDefault();
            return;
        }

        Service.convert(v, f, t).then(items => this.setState({ converted: 'is $' + items.value + ' ' + this.state.to}));

        event.preventDefault();
    }
    

    render() {
        return (
            <div>
                
                <br /><br />
                <h3>Convert</h3>
                <form onSubmit={this.handleSubmit} class="form">
                    <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                        <div class="input-group-addon">Value: C$</div>
                        <input class="form-control" step="0.01" type='number' value={this.state.value} onChange={this.handleChange} />
                    </div>

                    <hr />

                    <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                    <div class="input-group-addon">from</div>
                        <select class="custom-select form-control" onChange={this.handleChangeFrom}>
                            <option>C$</option>
                        {this.props.currencies.map(currency => {
                            return (
                            <option key={currency}>{currency}</option>
                            );
                        })}
                        </select>
                    </div>

                    <hr />
                    
                    <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                        <div class="input-group-addon">to</div>
                        <select class="custom-select form-control" onChange={this.handleChangeTo}>
                            <option>C$</option>
                        {this.props.currencies.map(currency => {
                            return (
                            <option key={currency}>{currency}</option>
                            );
                        })}
                        </select>
                    </div>

                    <hr />
                    
                    <input class="Button-convert btn btn-primary btn-flat" type="submit" value="Convert" />
                </form>

                        <br /><br />

                {this.state.converted ?
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    {this.state.converted}
                </div>
                : ''
                }
            </div>
        );
    }
}

export default Converter;