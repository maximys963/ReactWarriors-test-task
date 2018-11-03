import React, { Component } from "react";
import { moviesData } from "./moviesData";
import MovieList from './components/movieList'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moviesData: [],
        }
    }

    componentDidMount() {
        this.setState({
            moviesData: moviesData
        });

    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8'><MovieList movies={this.state.moviesData}/></div>
                    <div className='col-md-4'>lorem</div>
                    {console.log(this.state.moviesData)}
                </div>
            </div>
        );
    }
}

export default App;
