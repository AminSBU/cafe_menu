import React, { useState } from 'react';  
import './ImageUpload.css'; // Include your CSS here  

const ImageUpload = () => {  
    const [images, setImages] = useState([]);  // State to hold uploaded images  

    const handleImageUpload = (event) => {  
        const files = Array.from(event.target.files).map(file => URL.createObjectURL(file));  
        setImages(prevImages => [...prevImages, ...files]); // Update state with new images  
        event.target.value = '';  // Clear the input value  
    };  

    return (  
        <>  
            <div className="upload-container">  
                <input type="file" accept="image/*" onChange={handleImageUpload} multiple />  
                <button onClick={() => document.querySelector('input[type=file]').click()}>  
                    Upload Image  
                </button>  
            </div>  

            <div className="image-list">  
                {images.map((image, index) => (  
                    <div key={index} className="image-item">  
                        <img src={image} alt={`Uploaded ${index}`} className="uploaded-image" />  
                    </div>  
                ))}  
            </div>  
        </>  
    );  
};  

export default ImageUpload;  