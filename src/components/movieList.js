import React, {Component} from 'react';
import MovieItem from './movieItem'
import PropTypes from 'prop-types';


class MovieList extends Component {
    constructor(props){
        super(props)
    }


    render() {
        return (
            <div className='container'>
                <div className='row'>{
                    this.props.movies.map( (elem, index) => (
                        <MovieItem key={index} title={elem.title} vote={elem.vote_average} image={elem.poster_path} chooseItem={this.props.chooseItem} className='col-md-4'/>)
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