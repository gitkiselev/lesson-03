import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';


const App = () => {
    
    
    let data = [
        1,
        undefined,
        NaN,
        ['dfdf', 1],
        null,
        {label: 'Going to learn React', important: true, id: 'qwefg'},
        {label: 'That is so good', important: false, id: 'ghnbg'},
        {label: 'I need a break...', important: false, id: 'hjhgf'}
    ];
    
    data = data.filter(item => typeof item === "object" && !Array.isArray(item) && item !== null);
    return (
        <div className="app">
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    ) 
}

export default App;