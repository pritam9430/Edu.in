import Common from "./Common";
// import web from '../src/images/Home.png';
import Web from '../src/images/Home.png';
const Home = (props) => {
    return (
        <>
            <Common 
            name = "Grow your Business With"
            imgsrc = {Web}
            visit = '/Survice'
            btn = "Get_Started"
            />
        </>
    )
}
export default Home;