import React, { Component } from 'react';

export class One extends Component {
    render() {
        return <div>
            <div>One</div>
            <div>{this.props.children}</div>
        </div>;
    }
}
