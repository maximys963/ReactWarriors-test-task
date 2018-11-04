import React, { Component } from "react";
import { moviesData } from "./moviesData";
import MovieList from './components/movieList'
import MovieListWillWatch from './components/movieListWillWatch'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moviesData: [],
            moviesWillWatch: [],
        }
    }

    componentDidMount() {
        this.setState({
            moviesData: moviesData
        });

    }
    onMovieItemClick = (e) => {
        let rating = e.target.parentNode.parentNode.childNodes[0].innerHTML;
        this.setState({
            moviesWillWatch: rating
        });
    };

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-10'><MovieList movies={this.state.moviesData} chooseItem={this.onMovieItemClick} /></div>
                    <div className='col-md-2'>
                        <MovieListWillWatch />
                    </div>
                    {console.log(this.state.moviesWillWatch)}

                </div>
            </div>
        );
    }
}

export default App;
