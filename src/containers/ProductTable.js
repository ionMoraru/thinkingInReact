import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
  } from 'material-ui/Table';

class ProductTable extends Component {
    render() {
        const rows = [];
        let lastCategory = null;
        const { filterText, inStockOnly, products } = this.props;
        
        products.forEach((product) => {
            let filterRegText = new RegExp(filterText, 'i');
            if (product.name.search(filterRegText) === -1) {
              return;
            }
            if (inStockOnly && !product.stocked) {
              return;
            }
            if (product.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow
                        category={product.category}
                        key={product.category} />
                );
            }
            rows.push(
                <ProductRow 
                    product={product}
                    key={product.name} />
            );
            lastCategory = product.category; 
        });

        return (
            <Table fixedHeader={true} height={'300px'}>
                <TableHeader displaySelectAll={false}>
                    <TableRow>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn>Price</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}> 
                    {rows}
                </TableBody>
            </Table>
          );
    }
}

export default ProductTable;