import React, { Component } from 'react';
import {One} from './One';
import {Two} from './Two';

export default class App extends Component {
    constructor(...args) {
        super(...args);
        this.state = {throw: false, arr: ['a', 'b']};
    }

    trigger() {
        this.setState({throw: true});
    }

    render() {
        return (
            <div>
                <div><button onClick={this.trigger.bind(this)}>Trigger</button></div>
                <h1>Hello, world!!</h1>
                <One one="hello">
                    <Two arr={this.state.arr} throw={this.state.throw}>
                        Hello from Two
                    </Two>
                </One>
                <One >
                    Another text

                </One>
            </div>
        );
    }

    renderErr() {
        //return new Error('sdf');
    }
}
