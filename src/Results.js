import React from 'react';
import './Results.css';
import Meaning from './Meaning';
import Phonetics from './Phonetics';

export default function Results(props) {
    console.log('results is ', props.results);
    if (props.results) {
        return (
            <div className='results'>
                <div className='heading-box'>
                    <i className='fa-solid fa-feather'></i>
                    <h2 className='heading'>{props.results.word}</h2>
                </div>
                <section className='phonetic-box'>
                    <div className='phonetic-heading'>
                        <i className='fa-solid fa-music'></i>
                        <h2 className='word'>{props.results.word}</h2>
                    </div>
                    {props.results.phonetics.map((el, index) => {
                        return (
                            <div className='phonetic' key={index}>
                                <Phonetics data={el} />
                                <span>{el.text}</span>
                            </div>
                        );
                    })}
                </section>
                {props.results.meanings.map(function (meaning, index) {
                    // return meaning.definitions[0].definition;
                    return (
                        <div key={index}>
                            <Meaning meaning={meaning} />
                        </div>
                    );
                })}
            </div>
        );
    } else {
        return null;
    }
}
