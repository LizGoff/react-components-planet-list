import React, { Component } from 'react';

class NewStar extends Component {

    render() {
        return (
            <div>
                <p>
                    New star is {this.props.currentStar.name} and has a diameter os {this.props.currentStar.diameter}
                </p>
            </div>
        );
    }
}

export default NewStar;
