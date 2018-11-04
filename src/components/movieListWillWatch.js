import React, {Component} from 'react';


class MovieListWillWatch extends Component {
    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.props.featureMovies.map(
                        (elem) => {
                            return(
                                <li className="list-group-item">{`${elem.title}: ${elem.rating}`}</li>
                            )
                        }
                    )}

                </ul>
            </div>
        );
    }
}


export default MovieListWillWatch;