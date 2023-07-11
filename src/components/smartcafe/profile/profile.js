import ProfileButton from "./profileButton";
import { ProfButList } from "./profButList";
const Profile = () => {
    return (
        <main>
            <div className="profile">
                <div className="profile_info">
                    <svg className="rectangle1" width="112" height="115" viewBox="0 0 112 115" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M27.9404 47.9236C35.1034 14.699 76.3674 56.9554 76.3674 56.9554L75.4028 65.4896C75.4028 65.4896 25.7488 97.4709 26.1816 63.4857C26.2586 57.4359 26.6653 53.838 27.9404 47.9236Z"
                            fill="#F0B526" fillOpacity="0.59" />
                    </svg>
                    <svg className="rectangle2" width="123" height="114" viewBox="0 0 123 114" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M32.9894 55.4194C21.2675 17.9657 88.0605 36.2093 88.0605 36.2093L91.9731 45.3191C91.9731 45.3191 59.2152 106.32 40.1241 72.0311C36.7256 65.9272 35.0761 62.0867 32.9894 55.4194Z"
                            fill="#FF6C4A" fillOpacity="0.64" />
                    </svg>
                    <div className="profile_photo" id="profile_photo"></div>
                    <div className="profile_name">
                        <h4 id="nameP" name="nameP">Школа 215 "Созвездие"</h4>
                        <h5 id="className" name="className"></h5>
                    </div>
                </div>
                <div className="profile_menu">

                    {ProfButList.map((button) => {
                        return <ProfileButton title={button.title} link={button.link} classB={button.classB} key={button.index}/>
                        })
                    }
                    {/*onclick="quit()"}*/}
                    <a href="#" >
                        <div className="menu_buttons menu_buttons_exit">
                            <p>Выйти</p>
                            <svg className="list" width="9" height="14" viewBox="0 0 9 14" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.90039 13L7.90039 7L1.90039 1" stroke="#7B8794" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
            <div className="main_container_index"></div>
        </main>
    );
}
 
export default Profile;