import React from 'react'

class Counter extends React.Component {
    render() {
        return(
            <div>
                <p>Out of {this.props.total} flips, there have been {this.props.heads} head and {this.props.tails} tails.</p>
            </div>
        )
    }
}

export default Counter;