import React from 'react'
import Coin from './Coin'
import Counter from './Counter'
class Flipper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg',
            totalFlips: 0,
            heads: 0,
            tails: 0
        }
        this.flipper = this.flipper.bind(this)
    }

        flipper() {
            const urls = ['https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg', 'https://s3.amazonaws.com/ngccoin-production/us-coin-explorer/3841390-030r.jpg']
            let num = Math.floor(Math.random() * urls.length)
            this.setState({url: urls[num]})
            this.counter(num)
        }

        counter(e) {
            if(e === 0) {
                this.setState(st => {
                    return {
                        heads: st.heads + 1
                    }
                })
            }else {
                this.setState(st => {
                    return {
                        tails: st.tails + 1
                    }
                })
            }
            this.setState(st => {
                return {
                    totalFlips: st.totalFlips + 1
                }
            })
        }
        
        
    render() {
        return(
            <div>
                <Coin imgSrc={this.state.url} />
                <button onClick={this.flipper}>Flip</button>
                <Counter total={this.state.totalFlips} heads={this.state.heads} tails={this.state.tails}/>
            </div>
            
        )
    }
}

export default Flipper;