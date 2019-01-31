import React from 'react';
import AddTable from '../Table';


export default function Popup(props) {
    const pairPrice = props.pairInfo.buy_price;
    const pairAvg = props.pairInfo.avg;
    const pairHigh = props.pairInfo.high;
    const pairLow = props.pairInfo.low;
    const pairVol = props.pairInfo.vol;
    const pairVolCurr  = props.pairInfo.vol_curr;
    return (
        <div className="popup-container">
            <div className="mask" onClick={props.closePopup}></div>
            <div className="popup">
                <div className="popup__header">
                    <div className="popup__name">{props.pairName}</div>
                    <div className={"popup__value popup__price-move" + props.priceMove}>{pairPrice}</div>
                    <div className="popup__close-btn" onClick={props.closePopup}></div>
                </div>
                <div className="popup__statistics">
                    <p className="popup__statistics-header">Статистика за 24 часа:</p>
                    <div className="popup__statistics-block">
                        <p>Объем торгов:</p>
                        <p>Сумма сделок:</p>
                    </div>
                    <div className="popup__statistics-block">
                        <p>{pairVol}</p>
                        <p>{pairVolCurr}</p>
                    </div>
                    <div className="popup__statistics-block">
                        <p>Средняя цена сделки:</p>
                        <p>Максимльная цена сделки:</p>
                        <p>Минимальная цена сделки:</p>
                    </div>
                    <div className="popup__statistics-block">
                        <p>{pairAvg}</p>
                        <p>{pairHigh}</p>
                        <p>{pairLow}</p>
                    </div>
                </div>
                <div className="popup__tables">
                    <div className="popup__table-block">
                        <div className="popup__table-name">Покупка</div>
                        <AddTable pairOrderBook={props.pairOrderBook.bid}/>
                    </div>
                    <div className="popup__table-block">
                        <div className="popup__table-name">Продажа</div>
                        <AddTable pairOrderBook={props.pairOrderBook.ask}/>
                    </div>
                </div>
            </div>
        </div>
    )
}