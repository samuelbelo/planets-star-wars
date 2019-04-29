import React, { Component } from 'react';
import PlanetInfo from './PlanetInfo.jsx';

class List extends Component {
    render() {
        const planets = this.props.planets;
      return (
    
        <div className="">
            {
                planets.map((p) => {
                    console.log(p)
                return (
                    <div key={p.url}>
                        <h1 className="planet-name">{p.name}</h1>
                        <PlanetInfo planetInfo={p} />
                    </div>
                )
                })
            }
        </div>
        
      );
    }}

export default List;