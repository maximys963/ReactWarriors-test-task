import React, {Component} from 'react';

class MovieItem extends Component {
    render() {
        return (
            <div className="card" style={{width: '13rem'}}>
                <img className="card-img-top" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">Rating: {this.props.vote}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        );
    }
}

export default MovieItem;