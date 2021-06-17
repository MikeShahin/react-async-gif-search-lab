import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends Component {

    state = {
        gifs: []
    }

    getGifs = (q) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${q}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(({data}) => {
            console.log(data)
            this.setState({
                gifs: data.map(gif => ({url: gif.images.original.url}))
            })
        })
    }

    componentDidMount() {
        this.getGifs()
    }

    render() {
        return(
            <div>
                <GifSearch getGifs={this.getGifs} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}

export default GifListContainer