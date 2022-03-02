import React, { Component } from 'react';
import Counter from "./counter"


class Counters extends React.Component {


    render() { 
        
        const { onDelete, onIncrement, onDecrement, onReset, counters } = this.props;

        return (<div>

<button onClick = { onReset } className="btn btn-warning m-3">Reset all counters</button>

           {this.props.counters.map(counter => 
           <Counter key = { counter.id } counter = { counter } onDelete = { onDelete } onIncrement = {onIncrement} onDecrement = {onDecrement}/>
           
           )}
        </div>);
    }
}
 
export default Counters;