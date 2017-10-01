import React, { Component } from 'react';
import {
    TableHeaderColumn,
    TableRow
  } from 'material-ui/Table';

class ProductCategoryRow extends Component {
    render() {
        const category = this.props.category;
        return (
            <TableRow>
                <TableHeaderColumn colSpan="2">
                 {category}
                </TableHeaderColumn>
            </TableRow>
        );
    }
}

export default ProductCategoryRow;