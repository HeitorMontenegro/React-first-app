import React, { Component } from 'react';

class Counter extends React.Component {
    render() { 
        return     (<div>
            <span className = {this.getBadgesClasses()}>{this.formatCount()}</span>

            <button onClick={() =>{ this.props.onIncrement(this.props.counter) }}
            className = "btn btn-secondary btn-de text-uppercase m-2 p-2">Add</button>

            <button onClick={() =>{ this.props.onDecrement(this.props.counter) }} 
            className = "btn btn-secondary btn-sm text-uppercase m-2 p-2">Remove</button>

            <button onClick={() => this.props.onDelete(this.props.counter.id)} 
            className = "btn btn-danger btn-sm text-uppercase m-2">Delete</button>

                    </div>);
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }

    getBadgesClasses() {
        let classes = "badge m-2 bg-";
        classes += this.props.counter === 0 ? "warning" : "primary";
        return classes;
    }
}

export default Counter; 