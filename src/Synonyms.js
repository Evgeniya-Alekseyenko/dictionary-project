import React from 'react';
import './Synonyms.css';

export default function Synonyms(props) {
    if (props.synonyms) {
        return (
            <div className='synonyms'>
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
