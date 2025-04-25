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
    );  
};

export default Menu;