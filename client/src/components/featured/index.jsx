import React from 'react';
import BlackLogo from './../../resources/images/logo.svg';
import Carrousel from './Carrousel';
import TimeUntil from './TimeUntil';

const Featured = () => {
    return (
        <div style={{
        position:'relative'

        }} >
        <Carrousel />
        <div className="co-op-name">
            <div className="wrapper">
                <img src={BlackLogo} alt="" className='black-logo'/>
            </div>
            </div>
            <TimeUntil />
        </div>
    );
}

export default Featured;
