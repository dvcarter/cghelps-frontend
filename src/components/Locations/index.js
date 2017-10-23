import React, {Component} from 'react'
import PropTypes from "prop-types"
import styles from './Locations.css'
//import Mapper from "./../Mapper"
import GoogleMap from 'google-map-react'

export default class Locations extends Component {
    state = {
        center: [ 42.617848, -83.317782 ],
        zoom: 15,
    };
    _onChange = ({ center, zoom}) => {
        this.setState({
            center: center,
            zoom: zoom,
       });
    }
    
    render() {
        let hat = []
         const getLocations = this.props.dataGetter.getLocations;
        return (
            <div className={styles.superHolder}> 
                <div className={styles.title}>
                    Help is never far away 
                </div>
                <div className={styles.holder}>
                {getLocations.map((locator) => (
                            <div className={styles.options} >
                                <div className={styles.topics} id={locator.hash}>
                                    <h2 className={styles.subtitle}> {locator.subtitle}</h2>
                                    <div className={styles.address}> {locator.address}</div>
                                    <div className={styles.description}> {locator.description} </div>
                                    <div className={styles.mapHolder}>
                                        <GoogleMap
                                            onChange={this._onChange}
                                            bootstrapURLKeys={{key:'AIzaSyAWRK-Yt3gy6fKVS2zBjxobe1pqN3lGKbQ'}}
                                            center={hat.concat(locator.placement.lat, locator.placement.lng)}
                                            zoom={locator.placement.zoom}>
                                                <div lat={locator.placement.lat} lng={locator.placement.lng}>
                                                        <div className={styles.pin} lat={locator.placement.lat} lng={locator.placement.lng} zoom={locator.placement.zoom}></div>
                                                        <div className={styles.pulse} lat={locator.placement.lat} lng={locator.placement.lng} zoom={locator.placement.zoom}></div>
                                                </div>
                                                {/*<div className={styles.infobox} lat={locator.placement.lat} lng={locator.placement.lng} zoom={locator.placement.zoom}>
                                                   <div className={styles.infoboxDescription}>
                                                                {locator.subtitle}
                                                                {locator.address}
                                                   </div>
                                                
                                                </div> */}
                                      </GoogleMap>
                                        
                                    </div>
                                    <div className={styles.newLine} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
           )
    }
}
Locations.propTypes = {
    getLocations: PropTypes.array.isRequired,
}

