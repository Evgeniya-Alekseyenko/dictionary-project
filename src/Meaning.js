import React from 'react';
import './Meaning.css';
import Synonyms from './Synonyms';

export default function Meaning(props) {
    console.log(props.meaning);
    return (
        <div className='meaning'>
            <div className='heading-meaning-box'>
                <i className='fa-solid fa-earth-americas'></i>
                <h3 className='heading-meaning'>
                    {props.meaning.partOfSpeech}
                </h3>
            </div>
            {props.meaning.definitions.map(function (definition, index) {
                return (
                    <div className='definition-list' key={index}>
                        <div>
                            <Synonyms synonyms={definition.synonyms} />{' '}
                        </div>
                        <ul>
                            <li>
                                <div className='definitions'>
                                    <div className='definitions-text'>
                                        <span className='definition-title'>
                                            Definition:
                                        </span>
                                        {definition.definition}
                                    </div>
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
                                </div>
                            </li>
                        </ul>
                    </div>
                );
            })}
        </div>
    );
}
