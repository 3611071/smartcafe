import { useParams } from "react-router-dom";

const HeaderTitle = () => {
    console.log(useParams);
    return ( 
        <div>1
        {useParams}
        2</div>
     );
}
 
export {HeaderTitle};