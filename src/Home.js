import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Player from './Player';
export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            videos: []
        };
    }
    async componentDidMount() {
        try {
            const response = await fetch('http://192.168.31.174:3000/videos');
            const data = await response.json();
            this.setState({ videos: [...data] });
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <div className="App App-header">
                    <div className="row">
                        {this.state.videos.map(video =>
                        <div className="col-md-4" key={video.id}>
                            <Link to={`/player/${video.id}`}>
                                <div className="card border-0">
                                    <img src={`http://192.168.31.174:3000${video.poster}`} alt={video.name} />
                                    <div className="card-body">
                                        <p>{video.name}</p>
                                        <p>{video.duration}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        )}
                    </div>
                
            </div>
        )
    }
}