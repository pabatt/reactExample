import React, {Component} from 'react';
import Pair from './Pair';
import {priceCompare} from './priceCompare';

export default class PairsList extends Component {

    state = {
        error: null,
        isLoaded: false,
        pairs: [],
    };

    fetchData() {
        fetch("https://api.exmo.com/v1/ticker/")
            .then(response => response.json())
            .then(
                (response) => {
                    this.setState({
                        pairs: response,
                        isLoaded: true
                    })
                },
                (error) => {
                    this.setState({
                        error,
                        isLoaded: true
                    })
                })
    }

    componentDidMount(){
        this.fetchData();
    }


    render(){
        const { error, isLoaded, pairs } = this.state;
        let oldPairsData = [];

        if (localStorage.getItem('OldPairsData')) {
            oldPairsData = JSON.parse(localStorage.getItem('OldPairsData'));
        } else {
            this.setLocalStorage(pairs);
        }


        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            this.setLocalStorage(pairs);
            return (
                Object.keys(pairs).map((pair) => {
                    let priceMove = priceCompare(oldPairsData[pair].buy_price, pairs[pair].buy_price);

                    return (
                        <Pair key={pair} pairName={pair} pairInfo={pairs[pair]} priceMove={priceMove} reRender={this.reRender}/>
                    );
                })

            );
        }
    }

    setLocalStorage(pairs) {
        localStorage.setItem('OldPairsData', JSON.stringify(pairs));
    }

    reRender = () => {
        this.fetchData()
    }
}