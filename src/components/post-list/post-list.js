import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';
let uuid = require('react-native-uuid');
const PostList = ({posts, onDelete, onToggleItemProperty}) => {
    
    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={uuid.v4()} className="list-group-item">
                <PostListItem
                     {...itemProps}
                     onDelete={() => onDelete(id)}
                     onToggleImportant={() => onToggleItemProperty(id, 'important')}
                     onToggleLiked={() => onToggleItemProperty(id, 'like')}
                     />
            </li>
        )
    });
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;