import React from 'react';

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
        const {title, items} = this.props;
        return (
            <div className='collection-preview'>
                <h1 className="title">{title}</h1>
                <div className="preview">
                    {this.renderList(items)}
                </div>
            </div>
        );
    }
}

export default CollectionPreview;