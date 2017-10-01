import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import SearchBar from '../components/SearchBar';
import ProductTable from './ProductTable';

const styles = {
    width: '50%', 
    margin: '3% auto', 
    display: 'flex', 
    justifyContent: 'center'
}

class FilterableProductTable extends Component {
    constructor(props) {
      super(props);
      this.state = {
        filterText: '',
        inStockOnly: false
      };

      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(filterText) {
      this.setState({
        filterText: filterText
      });
    }

    handleInStockChange(inStockOnly) {
      this.setState({
        inStockOnly: inStockOnly
      })
    }

    render() {
      return (
        <Card style={styles}>
            <CardHeader>
                <SearchBar 
                  filterText={this.state.filterText}
                  inStockOnly={this.state.inStockOnly}
                  onFilterTextChange={this.handleFilterTextChange}
                  onInStockChange={this.handleInStockChange}
                />
            </CardHeader>
            <CardText>
                <ProductTable 
                  products={this.props.products}
                  filterText={this.state.filterText}
                  inStockOnly={this.state.inStockOnly}
                />
            </CardText>
        </Card>
      );
    }
  }
  
  export default FilterableProductTable;