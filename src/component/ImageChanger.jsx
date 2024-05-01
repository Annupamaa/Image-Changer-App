// ImageChanger.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageChanger = () => {
    const [image, setImage] = useState('');

    useEffect(() => {
        fetchImage();
    }, []);

    const fetchImage = async () => {
        try {
            const response = await axios.get('https://dog.ceo/api/breeds/image/random');
            setImage(response.data.message);
        } catch (error) {
            console.error('Error fetching image:', error);
        }
    };

    const handleChangeImage = () => {
        fetchImage();
    };

    return (
        <div>
            <h2>Images</h2>
            <button onClick={handleChangeImage}>Change Image</button>
            <br />
            {image && <img src={image} alt="Dog" style={{ maxWidth: '100%' }} />}
        </div>
    );
};

export default ImageChanger;
