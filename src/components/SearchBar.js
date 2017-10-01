import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        const { filterText, inStockOnly } = this.props;
        
        return (
            <form>
                <input 
                    type="text" 
                    placeholder="Search..."
                    value={filterText} 
                />
                <br />
                <input 
                    type="checkbox" 
                    checked={inStockOnly}
                />
                {' '}
                Only show products in stock
            </form>
        );
    }
}

export default SearchBar;