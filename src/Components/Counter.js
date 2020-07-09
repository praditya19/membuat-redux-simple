import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    }

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    }

    reset = () => {
        this.props.dispatch({ type: 'RESET' });
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button style={{ marginRight: 10 }} onClick={this.decrement}>-</button>
                    <span>{this.props.count}</span>
                    <button style={{ marginLeft: 10 }} onClick={this.increment}>+</button>
                    <button style={{ marginLeft: 10 }} onClick={this.reset}>Reset</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps)(Counter);