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

    return (
        <>  
            <div className="menu-container">  
                {menuItems.map((item, index) => (  
                    <div key={index} className="menu-item">  
                        <span className="icon">{item.icon}</span>  
                        <span className="label">{item.label}</span>  
                    </div>  
                ))}  
                <div className="arrow left">&lt;</div>  
                <div className="arrow right">&gt;</div>  
            </div>

            <div className='menu-list'>
                <div className='column'>
                    <div class="row">
                        <div className="row no-border">  
                            <div className="inner-column"><img src='./src/img/glass-cafe.jpg'></img></div>  
                            <div className="inner-column">کافی گلاسه: شیر، قهوه، شکر، بستنی وانیلی، پودر کاکائو، خامه، شکلات تکه ای</div>  
                        </div>
                        
                        <div className='addToCardButton'>
                            <button className='addCardButton'>Add</button>
                        </div>
                    </div>  
                    <div class="row">
                        <div className="row no-border">  
                            <div className="inner-column"><img src='./src/img/Mooka-cafe.jpeg'></img></div>  
                            <div className="inner-column">موکا: فوم شیر، شیر داغ، اسپرسو، سس شکلات</div>  
                        </div>
                        
                        <div className='addToCardButton'>
                            <button className='addCardButton'>Add</button>
                        </div>
                    </div>  
                    <div class="row">
                        Row 3 in Column 1
                    </div>  
                    <div class="row">
                        Row 4 in Column 1
                    </div>  
                    <div class="row">
                        Row 5 in Column 1
                    </div>  
                </div>  
                <div className='column'>
                <div class="row">
                        <div className="row no-border">  
                            <div className="inner-column"><img src='./src/img/makiato-cafe.jpeg'></img></div>  
                            <div className="inner-column">ماکیاتو: قوه اسپرسو، شیر کف داده</div>  
                        </div>  
                        
                        <div className='addToCardButton'>
                            <button className='addCardButton'>Add</button>
                        </div>
                    </div>  
                    <div class="row">
                        <div className="row no-border">  
                            <div className="inner-column"><img src='./src/img/Mooka-cafe.jpeg'></img></div>  
                            <div className="inner-column">موکا: فوم شیر، شیر داغ، اسپرسو، سس شکلات</div>  
                        </div>
                        
                        <div className='addToCardButton'>
                            <button className='addCardButton'>Add</button>
                        </div>
                    </div>  
                    <div class="row">
                        Row 3 in Column 1
                    </div>  
                    <div class="row">
                        Row 4 in Column 1
                    </div>  
                    <div class="row">
                        Row 5 in Column 1
                    </div>    
                </div>
            </div>
        </>
    );  
};

export default Menu;