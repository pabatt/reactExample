import React from 'react';
import './style.scss';
import PairsList from "../PairsList";

export default function App() {
    return (
        <div className="container">
            <p className="title">Сам себе трейдер</p>
            <p className="paragraph">Валютные пары</p>
            <div className="pair-container">
                <PairsList />
            </div>
        </div>
    )
}