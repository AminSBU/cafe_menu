import React, { useState } from 'react';  
import './menu.css'  

const Menu = () => {  
    const menuItems = [  
        { icon: '🍹', label: 'شربت' },   
        { icon: '🫖', label: 'دم‌نوش سردنوش' },  
        { icon: '🍔', label: 'برگر ساندویچ' },  
        { icon: '🍕', label: 'پیتزا' },  
        { icon: '🍽️', label: 'غذای اصلی' },  
        { icon: '🥗', label: 'سالاد' },  
        { icon: '🍳', label: 'صبحانه' },  
    ];  
    
    // Object to keep count per item identified by keys  
    const [counts, setCounts] = useState({});  

    // Increment function for a given key  
    const incrementCount = (key) => {  
        setCounts(prev => ({  
            ...prev,  
            [key]: (prev[key] || 0) + 1  
        }));  
    };  
  
    return (  
        <>  
            <div className="menu-container">  
                {menuItems.map((item, index) => (  
                    <div key={index} className="menu-item">  
                        <span className="icon">{item.icon}</span>  
                        <span className="label">{item.label}</span>  
                    </div>  
                ))} 
            </div>  

            <div className='menu-list'>  
                <div className='column'>  
                    <div className="row">  
                        <div className="row no-border">  
                            <div className="inner-column"><img src='./src/img/glass-cafe.jpg' alt="کافی گلاسه" /></div> 
                            <div className="inner-column"><h3>کافه گلاسه</h3>شیر، قهوه، شکر، بستنی وانیلی، پودر کاکائو، خامه، شکلات تکه ای</div>  
                        </div>  
                        
                        <div className='addToCardButton'>  
                            {counts['glass-cafe'] || 0}  
                            <button className='addCardButton' onClick={() => incrementCount('glass-cafe')} >Add</button>  
                        </div>  
                    </div>  
                    <div className="row">  
                        <div className="row no-border">  
                            <div className="inner-column"><img src='./src/img/Mooka-cafe.jpeg' alt="موکا" /></div>  
                            <div className="inner-column"><h3>موکا</h3>فوم شیر، شیر داغ، اسپرسو، سس شکلات</div>  
                        </div>  
                        
                        <div className='addToCardButton'>  
                            {counts['mooka-cafe'] || 0}  
                            <button className='addCardButton' onClick={() => incrementCount('mooka-cafe')} >Add</button>  
                        </div>  
                    </div>  
                    <div className="row">  
                        Row 3 in Column 1  
                    </div>  
                    <div className="row">  
                        Row 4 in Column 1  
                    </div>  
                    <div className="row">  
                        Row 5 in Column 1  
                    </div>  
                </div>  
                <div className='column'>  
                <div className="row">  
                <div className="row no-border">
                    <div className="inner-column image-column">
                        <img src='./src/img/Mooka-cafe.jpeg' alt="موکا" />
                        </div>
                            <div className="inner-column">
                            <h3>موکا</h3>
                            <p>فوم شیر، شیر داغ، اسپرسو، سس شکلات</p>
                            <div className="price">245,000 تومان</div>
                        </div>
                    </div>  
                        
                        <div className='addToCardButton'>  
                            {counts['makiato-cafe'] || 0}  
                            <button className='addCardButton' onClick={() => incrementCount('makiato-cafe')} >Add</button>  
                        </div>  
                    </div>  
                    <div className="row">  
                        <div className="row no-border">  
                            <div className="inner-column"><img src='./src/img/Mooka-cafe.jpeg' alt="موکا" /></div>  
                            <div className="inner-column"><h3 className='hClass'>موکا</h3>فوم شیر، شیر داغ، اسپرسو، سس شکلات</div>  
                        </div>  
                        
                        <div className='addToCardButton'>  
                            {counts['mooka-cafe-2'] || 0}  
                            <button className='addCardButton' onClick={() => incrementCount('mooka-cafe-2')} >Add</button>  
                        </div>  
                    </div>  
                    <div className="row">  
                        Row 3 in Column 1  
                    </div>  
                    <div className="row">  
                        Row 4 in Column 1  
                    </div>  
                    <div className="row">  
                        Row 5 in Column 1  
                    </div>    
                </div>  
            </div>  
        </>  
    );  
};  

export default Menu;  