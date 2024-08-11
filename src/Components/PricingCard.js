import React from 'react'
import './Pricing.css'

const PricingCard = (props) => {
    const listItems1 = props.array1.map((item, index) => (
        <li key={index} className='plistitem'>
            {item}
        </li>
    ));
    const listItems2 = props.array2.map((item, index) => (
        <li key={index} className='plistitem'>
            {item}
        </li>
    ));


    return (
        <div className='pcard'>
            <div className="phead">
                <h1>{props.phead}</h1>
                <h4 style={{ color: "#717171" }}>{props.pheadp}</h4>
            </div>
            <div>
                <h1 className='phead1'>{props.plan}</h1>
                <p>{props.planp}</p>
            </div>
            <button className="pbtn" style={{ backgroundColor: props.btnstyle ? '#ed00eb' : '' }} >
                {props.btn}
            </button>
            <div className="pprop">
                <h3>Tutotube Creation</h3>
                <ul className='plist'>
                    {listItems1}
                </ul>
                <h3>AI Compute Credits</h3>
                <ul className='plist'>
                    {listItems2}
                </ul>
            </div>
        </div>
    )
}

export default PricingCard