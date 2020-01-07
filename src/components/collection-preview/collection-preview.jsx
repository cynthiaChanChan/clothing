import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item';

class CollectionPreview extends React.Component {

    renderList = (items) => {
        return items.filter((item, idx) => idx < 4).map((item) => {
            return (
                <CollectionItem key={item.id} item={item} />
            );
        });
    };

    render() {
        const { title, items, routeName, match, history } = this.props;
        return (
            <div className='collection-preview'>
                <h2 className="title" onClick={() => history.push(`${match.path}/${routeName}`)}>{title}</h2>
                <div className="preview">
                    {this.renderList(items)}
                </div>
            </div>
        );
    }
}

export default withRouter(CollectionPreview);