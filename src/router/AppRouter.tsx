import { Route, Routes, useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import withStack from "../components/WithStack";
import Home22 from "../pages/Home2";
import Home33 from "../pages/Home3";

const HomePageWithStack = withStack(Home);
const HomePage2WithStack = withStack(Home22);
const HomePage3WithStack = withStack(Home33);

const AppRouter = () => {
    
    return (
          <Routes>
            <Route path="/" element={<HomePageWithStack />} />
            <Route path="/home2" element={<HomePage2WithStack />} />
            <Route path="/home2/home" element={<HomePage3WithStack />} />
         </Routes>
    )
}

export default AppRouter;