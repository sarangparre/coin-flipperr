import React from 'react'
import './Coin.css'
class Coin extends React.Component {
    render() {
        return(
            <div>
                <img src={this.props.imgSrc} alt="coin"/>
            </div>
        )
    }
}

export default Coin;