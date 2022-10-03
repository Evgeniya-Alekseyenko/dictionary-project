import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

export default function Phonetics(props) {
    if (props.data.audio) {
        return (
            <div className='Phonetics'>
                <ReactAudioPlayer src={props.data.audio} controls />
            </div>
        );
    } else {
        return null;
    }
}
