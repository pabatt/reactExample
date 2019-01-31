import React, {Component} from 'react';
import { StickyTable, Row, Cell } from 'react-sticky-table';
import 'react-sticky-table/dist/react-sticky-table.css';

export default class AddRow extends Component{
    render() {
        const price = this.props.values[0];
        const quanity = this.props.values[1];
        const amount = this.props.values[2];

        return (
            <Row>
                <Cell className="order-table__col order-table__col--border">{price}</Cell>
                <Cell className="order-table__col order-table__col--border">{quanity}</Cell>
                <Cell className="order-table__col">{amount}</Cell>
            </Row>
        )
    }

}