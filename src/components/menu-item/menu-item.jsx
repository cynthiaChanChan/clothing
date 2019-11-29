import React from 'react';
import {withRouter} from 'react-router-dom';


class MenuItem extends React.Component {

    render() {
        const {title, imageUrl, size, linkUrl, history, match} = this.props;
        return (
            <div 
                className={`menu-item ${size}`} 
                onClick={() => history.push(`${match.url}${linkUrl}`)}>
                <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}/>
                <div className="content">
                    <h1 className="title">{title}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
        );
    }
}

export default withRouter(MenuItem);