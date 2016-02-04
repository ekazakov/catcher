import React, { Component } from 'react';

export class Two extends Component {
    render() {

        return <div>
            <div>Two</div>
            {this.error()}
            <div>{this.props.children}</div>
            <div>
                {this.props.foo.jazz}
            </div>
        </div>;
    }

    error() {
        if (this.props.throw) {
            //let err = this.props.fizz.bazz;

            return <div>{}</div>
        }
        return <div>—</div>;
    }
}
