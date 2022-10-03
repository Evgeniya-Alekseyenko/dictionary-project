import React, { useState } from 'react';
import axios from 'axios';
import { bounce, zoomInUp } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import './Dictionary.css';
import Results from './Results';

export default function Dictionary() {
    let [keyword, setKeyword] = useState('');
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        // console.log(response.data);
        setResults(response.data[0]);
    }

    function search(e) {
        e.preventDefault();
        //documantation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        console.log(apiUrl);
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    const Bounce = styled.div`
        animation: 4s ${keyframes`${bounce}`} infinite;
    `;
    const ZoomInUp = styled.div`
        animation: 4s ${keyframes`${zoomInUp}`};
    `;

    return (
        <div className='dictionary'>
            <div className='container shadow-lg mt-3 py-4 rounded'>
                <form onSubmit={search}>
                    <ZoomInUp>
                        {' '}
                        <h1 className='text-center m-4 head'> DICTIONARY</h1>
                    </ZoomInUp>
                    <div className='row'>
                        <div className='col-md-5 mx-auto'>
                            <Bounce>
                                {' '}
                                <div className='small fw-light'>
                                    What word do you want to look up?
                                </div>
                            </Bounce>

                            <div className='input-group'>
                                <input
                                    className='form-control border-end-0 border-dark rounded-pill'
                                    type='search'
                                    onChange={handleKeywordChange}
                                />
                                <span className='input-group-append'>
                                    <button
                                        className='btn btn-outline-primary border-dark bg-light border-bottom-1 border rounded-pill ms-n5'
                                        type='button'
                                    >
                                        <i className='fa fa-search'></i>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </form>
                <Results results={results} />
            </div>
        </div>
    );
}
