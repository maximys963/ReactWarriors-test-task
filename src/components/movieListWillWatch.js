import React, {Component} from 'react';


class MovieListWillWatch extends Component {
    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.props.featureMovies.map(
                        (elem, index) => {
                            return(
                                <li key={index} className="list-group-item">{`${elem.title}: ${elem.rating}`}</li>
                            )
                        }
                    )}

                </ul>
            </div>
        );
    }
}


export default MovieListWillWatch;