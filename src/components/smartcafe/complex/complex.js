import ProfileButton from "../profile/profileButton";
import { CompButList } from "./compfButList";
const Complex = () => {
    return (
        
        <main>
            <div className="profile">
                <div className="profile_menu">
                    {CompButList.map((button) => {
                            return <ProfileButton title={button.title} link={button.link} classB={button.classB} />
                            })
                        }
                </div>
            </div>
            <div className="main_container_complex"></div>
        </main>

    );
}
export default Complex;





