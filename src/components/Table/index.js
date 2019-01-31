import React, {Component} from 'react';
import { StickyTable, Row, Cell } from 'react-sticky-table';
import 'react-sticky-table/dist/react-sticky-table.css';
import AddRow from './AddRow';
import './style.scss';

export default class AddTable extends Component {
    render(){
        const pairOrderBook = this.props.pairOrderBook;
        return(
            <StickyTable className="order-table">
                <Row>
                    <Cell className="order-table__head">Цена</Cell>
                    <Cell className="order-table__head">Количество</Cell>
                    <Cell className="order-table__head">Сумма</Cell>
                </Row>
                {pairOrderBook.map((item, index) => {
                    return (
                        <AddRow key={index} values={item}/>
                    )
                })}
            </StickyTable>
        )
    }
}
