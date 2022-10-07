import React, { useState } from 'react';
import axios from 'axios';
import { bounce, zoomInUp } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import './Dictionary.css';
import Results from './Results';
import Photos from './Photos';

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
        //documantation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelsApiKey =
            '563492ad6f91700001000001ae987596fc374e74929fdc9411fc6b5f';
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}` };
        axios
            .get(pexelsApiUrl, { headers: headers })
            .then(handlePexelsResponse);
    }

    function handleSubmit(e) {
        e.preventDefault();
        search();
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

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className='dictionary'>
                <div className='container shadow-lg mt-3 py-4 rounded'>
                    <form onSubmit={handleSubmit}>
                        <ZoomInUp>
                            {' '}
                            <h1 className='text-center m-4 head'>
                                {' '}
                                DICTIONARY
                            </h1>
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
                    <Photos photos={photos} />
                </div>
            </div>
        );
    } else {
        load();
        return 'Loading';
    }
}
