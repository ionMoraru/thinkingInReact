import React, { Component } from 'react';
import {
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

class ProductRow extends Component {
    render() {
        const product = this.props.product;
        const name = product.stocked ?
            product.name :
            <span style={{color: 'red'}}>
            {product.name}
            </span>;
        
        return (
            <TableRow>
              <TableRowColumn>{name}</TableRowColumn>
              <TableRowColumn>{product.price}</TableRowColumn>
            </TableRow>
          );
    }
}

export default ProductRow;