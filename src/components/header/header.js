

const Header = (props) => {
    return (
        <header>
            {/* "javascript:history.back()" */}
            <a href="*" className="back_menu">
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.25 15L1.25 8L8.25 1" stroke="#7B8794" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </a>
            <p className="head">{props.title}</p>
            <div className="head_right_sapce"></div>
        </header>
    );
}
 
export default Header;