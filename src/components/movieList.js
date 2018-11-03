import React, {Component} from 'react';
import MovieItem from './movieItem'
import PropTypes from 'prop-types';


class MovieList extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>{
                    this.props.movies.map( elem => (
                        <MovieItem title={elem.title} vote={elem.vote_average} className='col-md-4'/>)
                    )
                }
                </div>
            </div>
        );
    }
}
MovieList.propsTypes = {
    movies: PropTypes.array
};

export default MovieList;