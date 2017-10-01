import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import FilterableProductTable from './containers/FilterableProductTable';
import registerServiceWorker from './registerServiceWorker';
import products from './data/products';

const App = () => (
    <MuiThemeProvider>
        <FilterableProductTable products={products} />
    </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

