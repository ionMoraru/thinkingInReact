import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockChange(e) {
        this.props.onInStockChange(e.target.checked);
    }

    render() {
        const { filterText, inStockOnly } = this.props;
        
        return (
            <form>
                <input 
                    type="text" 
                    placeholder="Search..."
                    onChange={this.handleFilterTextChange}
                    value={filterText} 
                />
                <br />
                <input 
                    type="checkbox" 
                    checked={inStockOnly}
                    onChange={this.handleInStockChange}
                />
                {' '}
                Only show products in stock
            </form>
        );
    }
}

export default SearchBar;