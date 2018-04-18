import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Grid.css';




export class Grid extends PureComponent {
    constructor(props) {
        super(props);
        this.renderChildren = this.renderChildren.bind(this);
    }

    renderChildren() {
        const elts = React.Children.map(this.props.children, x => {
            return (
                <div className="col">{x}</div>
            );  
        });
        let rows = [];
        while(elts.length > 0) {
            const rowElements = elts.splice(0, this.props.numberOfColumns);
            rows.push(<div className="row">{rowElements}</div>);
        };
        return (<div className="row-container">{rows}</div>);  
    }

    render(){

        return(
            <div class="container">
                {this.renderChildren()}
            </div>
        );

    }

}

Grid.propTypes = {
    numberOfColumns: PropTypes.number.isRequired
};