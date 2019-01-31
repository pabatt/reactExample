import React, {Component} from 'react';
import Popup from '../Popup';
import './style.scss';

export default class Pair extends Component {

    state = {
        isOpen: false
    };

    render() {
        const pairName = this.props.pairName;
        const pairBuyPrice = +this.props.pairInfo.buy_price;
        const roundedPrice = Math.round(pairBuyPrice * 100000) / 100000;
        const priceMove = this.props.priceMove;
        const reRenderPairsList = this.props.reRender;
        const popup = this.state.isOpen && <Popup pairInfo={this.props.pairInfo} pairName={pairName} closePopup={this.openPopUp} />;
        return (
            <div className="pair-box">
                <div onClick={reRenderPairsList}>
                    <div className="pair" onClick={this.openPopUp}>
                        <div className={"pair__name pair__name" + priceMove}>{pairName}</div>
                        <div className={"pair__value pair__price-move" + priceMove}>{roundedPrice}</div>
                    </div>
                </div>
                {popup}
            </div>
        )

    }
    openPopUp = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })

    }
}