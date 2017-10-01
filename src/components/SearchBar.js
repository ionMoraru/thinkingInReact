import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

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
            <form >
                <TextField
                    id="text-field-default"
                    type="text" 
                    placeholder="Search..."
                    value={filterText}
                    onChange={this.handleFilterTextChange}
                    fullWidth={true}
                />
                <Checkbox
                    label="Only show products in stock"
                    checked={inStockOnly}
                    onCheck={this.handleInStockChange}
                />                
            </form>
        );
    }
}

export default SearchBar;