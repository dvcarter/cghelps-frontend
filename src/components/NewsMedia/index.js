import React, {Component} from "react"
import { BrowserRouter as  Router, Route, Switch } from "react-router-dom"
import VideoGroup from "../../components/MediaGroup"
import SingleVideo from "../../components/SingleMedia"

const renderMergedProps = (component, ...rest) => {
    const finalProps = Object.assign({}, ...rest);
    return (
            React.createElement(component, finalProps)
    );
}

const PropsRoute = ({ component, ...rest}) => {
    return (
            <Route {...rest} render={routeProps => {
                return renderMergedProps(component, routeProps, rest);
            }}/>
    );
}

class VideoHolder extends Component {
   render() {
       const getVideo = this.props.dataGetter.videoOpts
       return (
               <Route>
                    <Switch>
                        <PropsRoute exact path="/news-and-media" component={VideoGroup}/>
                        <PropsRoute path="/news-and-media/mcnutt" component={SingleVideo} getVideo={getVideo[3]} />
                        <PropsRoute path="/news-and-media/psa" component={SingleVideo} getVideo={getVideo[4]} />
                    </Switch>
                </Route>
        )
   }
}

export default VideoHolder
