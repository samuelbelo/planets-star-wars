import React, { Component } from 'react';

class PlanetInfo extends Component {
    constructor(props){
        super(props);

        this.state = {
            expanded: false,
        }
        this.open = this.open.bind(this)
        this.closed = this.closed.bind(this)
    }


    open() {
        this.setState( { expanded: !this.state.expanded } )
    }
    
    closed() {
        this.setState( { expanded: !this.state.expanded } )
    }
    render() {
        const info = this.props.planetInfo;
        if(!this.state.expanded) {
            return <p className="btn btn-info" onClick={this.open}>Show info</p>
        }

        return (
            <div>
                <p onClick={this.close}>Hide info</p>
                <ul>
                    <li><h2>Population: {info.population}</h2></li>
                    <li><h2>Climate: {info.climate}</h2></li>
                    <li><h2>Terrain: {info.terrain}</h2></li>
                </ul>
            </div>
        )

        
    }
}

export default PlanetInfo;