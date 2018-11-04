import React, {Component} from 'react';
import '.././styles/movieItem.css'

class MovieItem extends Component {



    render() {
        return (
            <div className="card" >
                <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${this.props.image}`} alt="Card image cap"/>
               <h5 className="card-title ">{this.props.title}</h5>
                <div className="card-body row">
                        <p className="card-text col-md-6 align-self-center">Rating: {this.props.vote}</p>
                    <div className="col-md-6 align-self-center" > <a href="#" className="btn btn-secondary" onClick={(e) => {this.props.chooseItem(e, this.props.vote, this.props.title)}}>Will watch</a></div>
                </div>
            </div>
        );
    }
}

export default MovieItem;