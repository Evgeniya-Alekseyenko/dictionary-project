import React from 'react';
import './Synonyms.css';

export default function Synonyms(props) {
    console.log('synonym:', props.synonyms);
    if (props.synonyms.length > 0) {
        return (
            <div className='synonyms'>
                <div className='synonym-title'>Synonyms:</div>
                {props.synonyms.map(function (synonym, index) {
                    return (
                        <div className='synonym' key={index}>
                            {synonym}
                        </div>
                    );
                })}
            </div>
        );
    } else {
        return null;
    }
}
