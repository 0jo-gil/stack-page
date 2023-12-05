import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
        <div>HOME</div>
        <button onClick={() => {
            navigate('/home2')
        }}>CLICK</button>
        </>
    )
}

export default Home;