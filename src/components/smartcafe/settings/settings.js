import { NavLink } from "react-router-dom";
const Settings = () => {
    return (
        <main>
            <div className="profile">
                <div className="profile_menu">
                    <NavLink to="/chPass">
                        <div className="menu_buttons menu_buttons_first_button">
                            <p>Сменить пароль</p>
                            <svg className="list" width="9" height="14" viewBox="0 0 9 14" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.90039 13L7.90039 7L1.90039 1" stroke="#7B8794" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </NavLink>
                </div>
            </div>
            <div className="main_container_settings"></div>
        </main>
    );
}
 
export default Settings;