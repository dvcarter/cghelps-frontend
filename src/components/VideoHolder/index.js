import React, {Component} from "react"
import { BrowserRouter as  Router, Route, Switch } from "react-router-dom"
import VideoGroup from "../../components/VideoGroup"
import SingleVideo from "../../components/SingleVideo"

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
                        <PropsRoute exact path="/success-stories" component={VideoGroup}/>
                        <PropsRoute path="/success-stories/grupido" component={SingleVideo} getVideo={getVideo[0]} />
                        <PropsRoute path="/success-stories/lyons" component={SingleVideo} getVideo={getVideo[1]} />
                        <PropsRoute path="/success-stories/terri" component={SingleVideo} getVideo={getVideo[2]} />
                    </Switch>
                </Route>
        )
   }
}

export default VideoHolder
