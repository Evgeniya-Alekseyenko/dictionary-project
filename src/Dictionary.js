import React, { useState } from 'react';
import axios from 'axios';
import './Dictionary.css';
import Results from './Results';

export default function Dictionary() {
    let [keyword, setKeyword] = useState('');
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        console.log(response.data);
        setResults(response.data[0]);
    }

    function search(e) {
        e.preventDefault();
        // alert(`Searching for ${keyword} definition`);

        //documantation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        console.log(apiUrl);
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className='dictionary'>
            <div className='container shadow mt-3 py-4'>
                <form onSubmit={search}>
                    <h1 className='text-center m-4'> DICTIONARY</h1>
                    <div className='row'>
                        <div className='col-md-5 mx-auto'>
                            <div className='small fw-light'>
                                What word do you want to look up?
                            </div>
                            <div className='input-group'>
                                <input
                                    className='form-control border-end-0 border rounded-pill'
                                    type='search'
                                    onChange={handleKeywordChange}
                                />
                                <span className='input-group-append'>
                                    <button
                                        className='btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-n5'
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
