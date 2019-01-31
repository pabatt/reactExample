import React, {Component} from 'react';
import {createPortal, unmountComponentAtNode} from 'react-dom';
import {priceCompare} from '../priceCompare';
import { CSSTransition, transit } from "react-css-transition";
import './style.scss';
import Popup from "./Popup";

export default class Index extends Component{

    state = {
        isLoaded:false,
        showAnimation: false,
        pairOrderBook: []

    };

    rootSelector = document.getElementById("popup-container");
    container = document.createElement("div");

    fetchData() {
        const pairName = this.props.pairName;
        fetch("https://api.exmo.com/v1/order_book/?pair=" + pairName + "&limit=50")
            .then(response => response.json())
            .then(
                (response) => {
                    this.setState({
                        isLoaded: true,
                        showAnimation: true,
                        pairOrderBook: response
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    componentDidMount(){
        this.fetchData()
        this.rootSelector.appendChild(this.container);
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            priceMove: priceCompare(this.props.pairInfo.buy_price, nextProps.pairInfo.buy_price)
        })
    }

    render(){
        CSSTransition.childContextTypes = {
        };

        const styleProps = {
            defaultStyle: {
                opacity: 0,
            },
            enterStyle: {
                opacity: transit(1.0, 500, 'ease-in-out'),
            },
            activeStyle: {
                opacity: 1,
            },
            leaveStyle: {
                opacity: transit(0, 500, 'ease-in-out'),
            },

        }
        const { error, isLoaded, pairOrderBook } = this.state;
        const pairName = this.props.pairName;


        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="loader"></div>;
        } else {
            return (
                createPortal(
                    <CSSTransition {...styleProps} active={this.state.showAnimation} onTransitionComplete = {this.closePopup} transitionAppear>
                    <Popup
                        pairName = {pairName}
                        closePopup = {this.showAnimation}
                        pairOrderBook = {pairOrderBook[pairName]}
                        pairInfo = {this.props.pairInfo}
                        priceMove = {this.state.priceMove}
                    />
                    </CSSTransition>,
                    this.container
                )
            )
        }
    }

    showAnimation = () => {
        this.setState({
            showAnimation: !this.state.showAnimation
        })


    }

    closePopup = () => {
        !this.state.showAnimation && this.rootSelector.removeChild(this.container);
    }
}