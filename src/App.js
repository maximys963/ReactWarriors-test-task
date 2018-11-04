import React, { Component } from "react";
import { moviesData } from "./moviesData";
import MovieList from './components/movieList'
import MovieListWillWatch from './components/movieListWillWatch'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moviesData: [],
            moviesWillWatch: []
        }
    }

    componentDidMount() {
        this.setState({
            moviesData: moviesData,
        });

    }
    onMovieItemClick = (e, rating, title) => {
        console.log(this.state.moviesWillWatch.some( (film) => film.title === title));
        if(!this.state.moviesWillWatch.some((film) => film.title === title)){
            e.target.classList.remove("btn-secondary");
            e.target.classList.add("btn-success");
            this.setState({
                moviesWillWatch: this.state.moviesWillWatch.concat({ rating: rating, title: title})
            });
        }else {
            e.target.classList.remove("btn-success");
            e.target.classList.add("btn-secondary");
            this.state.moviesWillWatch.forEach( (elem, index) =>{
                    if(elem.title === title){
                        console.log(index);
                        let moviesWillWatchArray = this.state.moviesWillWatch;
                        moviesWillWatchArray.splice(index, 1);
                        console.log(moviesWillWatchArray);
                       this.setState({
                           moviesWillWatch: moviesWillWatchArray
                       })
                    }
                })



        }

    };

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-10'><MovieList movies={this.state.moviesData} chooseItem={this.onMovieItemClick} /></div>
                    <div className='col-md-2'>
                        <MovieListWillWatch featureMovies={this.state.moviesWillWatch} />
                        {console.log(this.state.moviesWillWatch)}
                    </div>

                </div>
            </div>
        );
    }
}

export default App;
