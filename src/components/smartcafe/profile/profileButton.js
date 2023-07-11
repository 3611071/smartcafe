import { NavLink } from "react-router-dom";
const ProfileButton = ({title, link, classB}) => {
    return (
        <NavLink to={link}>
            <div className={classB}>
                <p>{title}</p>
                <svg className="list" width="9" height="14" viewBox="0 0 9 14" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.90039 13L7.90039 7L1.90039 1" stroke="#7B8794" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </NavLink>
    );
}
 
export default ProfileButton;