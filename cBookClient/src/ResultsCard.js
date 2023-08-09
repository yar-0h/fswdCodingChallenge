import React from 'react';
import './ResultsCard.css';


export default function ResultsCard(props) {

    const noResult = (
        <div className='info'>
        </div>
    )
    
    const failedResult = (
        <div className='info'>
            <div className='noEntry'>title:  n / a</div>
            <div className='noEntry'>author:  n / a</div>
            <div className='noEntry'>price:  n / a</div>
        </div>
    )

    const result = (
        <div className='info'>
            <div className='infoEntry'>title:  {props.title}</div>
            <div className='infoEntry'>author:  {props.author}</div>
            <div className='infoEntry'>price:  ${props.price}</div>
        </div>
    )

    var cardView;

    if (props.errorCode === "") 
    {
        cardView = noResult;
    }
    
    else if (props.errorCode != "1") 
    {
        cardView = failedResult;
    }

    else 
    {
        cardView = result;
    }

    
    return (
        <div className='container'>
            <div className='spacer'></div>
            <div className='topLabel'>{props.sku}</div>
            {cardView}
        </div>
    );
}


