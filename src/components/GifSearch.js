import React, {Component} from 'react'

class GifSearch extends Component {
    state = {
        q: ""
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.getGifs(this.state.q)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.q} onChange={e => this.setState({q: e.target.value})} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }

}

export default GifSearch