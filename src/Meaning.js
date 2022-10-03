import React from 'react';
import './Meaning.css';

export default function Meaning(props) {
    console.log(props.meaning);
    return (
        <div className='meaning'>
            <div className='heading-meaning-box'>
                <i class='fa-solid fa-earth-americas'></i>
                <h3 className='heading-meaning'>
                    {props.meaning.partOfSpeech}
                </h3>
            </div>
            {props.meaning.definitions.map(function (definition, index) {
                return (
                    <div className='definition-list' key={index}>
                        {/* <p className='border'>{definition.synonyms}</p> */}
                        <ul>
                            <li>
                                <p className='definitions'>
                                    <span>{definition.definition}</span>
                                    <br />
                                    {definition.example ? (
                                        <div>
                                            <em className='example-head'>
                                                Example:
                                            </em>
                                            <em className='example-text'>
                                                {definition.example}
                                            </em>
                                        </div>
                                    ) : (
                                        <em className='example-text'>
                                            {definition.example}
                                        </em>
                                    )}
                                </p>
                            </li>
                        </ul>
                    </div>
                );
            })}
        </div>
    );
}
