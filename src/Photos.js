import React from 'react';
import './Photos.css';

export default function Photos(props) {
    if (props.photos) {
        return (
            <div className='photos'>
                <div className='row photos'>
                    {props.photos.map(function (photo, index) {
                        return (
                            <div className='col-3 m-3 photo' key={index}>
                                <a
                                    href={photo.src.original}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <img
                                        className='img-fluid shadow-lg rounded'
                                        src={photo.src.landscape}
                                        alt={photo.alt}
                                    />
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    } else {
        return null;
    }
}
