import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';
import styled from 'styled-components';
let uuid = require('react-native-uuid');

const AppBlock = styled.div`
    margin: 0 auto;
    margin-top: 20px;
    max-width: 800px;
`

export default class App extends Component {
    constructor(props) {
        super();
        this.state = {
            data:[
                
                {label: 'Going to learn React', important: true, id: uuid.v4(), like: false},
                {label: 'That is so good', important: false, id: uuid.v4(), like: false},
                {label: 'I need a break...', important: false, id: uuid.v4(), like: false}
            ],
            term: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleItemProperty = this.onToggleItemProperty.bind(this);
        //this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        //this.maxId = 4;
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        });
    }

    onToggleItemProperty(id, property) {
        this.setState(({data})=> {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old};
            newItem[property] = !old[property];
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArr = [...before, newItem, ...after];

            return {
                data: newArr
            }
        })
    }

    

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: uuid.v4()
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }
    
    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items;
        }
    }
    
    onUpdateSearch(term) {
        this.setState({term})
    }

    onFilterSelect(filter) {
        this.setState({filter})
    }
    
    //data = data.filter(item => typeof item === "object" && !Array.isArray(item) && item !== null);
    render() {
        const {data, term, filter} = this.state;

        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);
        return (
            <AppBlock>
                <AppHeader
                liked={liked}
                allPosts={allPosts} />
                <div className="search-panel d-flex">
                    <SearchPanel
                    onUpdateSearch={this.onUpdateSearch} />
                    <PostStatusFilter
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList 
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleItemProperty={this.onToggleItemProperty}
                    
                    />
                    
                <PostAddForm
                    onAdd={this.addItem}/>
            </AppBlock>
        ) 
    }
    
}

 