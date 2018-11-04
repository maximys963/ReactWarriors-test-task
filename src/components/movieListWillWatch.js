import React, {Component} from 'react';
import '.././styles/movieListWillWatch.css'


class MovieListWillWatch extends Component {
    render() {
        return (
            <div className='movie-will-container'>
                <h4>{`Will watch: ${this.props.featureMovies.length} films`}</h4>
                <ul className="list-group">
                    {this.props.featureMovies.map(
                        (elem, index) => {
                            return(
                                <li key={index} className="list-group-item">{`${elem.title}  ${elem.rating}`}</li>
                            )
                        }
                    )}

                </ul>
            </div>
        );
    }
}


export default MovieListWillWatch;