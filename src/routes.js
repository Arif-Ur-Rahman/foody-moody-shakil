import {
    createBrowserRouter,
} from "react-router-dom";
import About from "./pages/about";
import Shef from "./pages/shef";
import Feature from "./components/Feature/Feature";
import Subacriptions from "./components/Subscription/Subacriptions";
import Menu from "./components/Menu/Menu";
import IndianFood from "./components/IndianMenu/Indian-Menu";
import BanglaFood from "./components/BanglaFood/BanglaFood";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login.jsx"
import Home from "./components/Home/index.js";
import Payment from "./components/Payment/Payment.jsx";
import Cashback from "./components/Cashback/Cashback.jsx";
import Gift from "./components/Feature/Gift/Gift.jsx";
import SevenOrder from "./components/Feature/SevenOrder/SevenOrder.jsx";
import Deal from "./components/Deal/Deal.jsx";
import SevenDay from "./components/SevenDay/SevenDay.jsx";
import NetherlandsFood from "./components/Natherland_Menu/Netherlands.jsx"
import JapaneseMenu from "./components/JapaneseMenu/JapaneseMenu.jsx";
import ThaiFood from "./components/ThaiFood/ThaiFood.jsx";
import ChaineseFood from "./components/ChaineseFood/ChaineseFood.jsx";
import SignUp from "./components/Sign-Up/Sign-Up.jsx";
import UserProfile from "./components/User/UserProfile/UserProfile.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "about",
        element: <About/>,
    },
    {
        path: "shef",
        element: <Shef/>,
    },
    {
        path: "Feature",
        element: <Feature />,
    },
    {
        path: "Menu",
        element: <Menu />,
    },
    {
        path: "Subscription",
        element: <Subacriptions />,
    },
    {
        path: "indian-Menu",
        element: <IndianFood />,
    },
    {
        path: "Netherlands-Food",
        element: <NetherlandsFood />,
    },
    {
        path: "JapaneseMenu",
        element: <JapaneseMenu />,
    },
    {
        path: "ThaiFood",
        element: <ThaiFood />,
    },
    {
        path: "ChaineseFood",
        element: <ChaineseFood />,
    },
    {
        path: "BanglaFood",
        element: <BanglaFood />,
    },
    {
        path: "Cart",
        element: <Cart />
    },
    {
        path: "Login",
        element: <Login />
    },
    {
        path: "SignUp",
        element: <SignUp />
    },
    {
        path: "UserProfile",
        element: <UserProfile />
    },
    {
        path: "Payment",
        element: <Payment />
    },
    {
        path: "Cashback",
        element: <Cashback />
    },
    {
        path: "Gift",
        element: <Gift />
    },
    
    {
        path: "SevenOrder",
        element: <SevenOrder />
    },
    
    {
        path: "Deal",
        element: <Deal />
    },
    
    {
        path: "SevenDay",
        element: <SevenDay />
    }
]);

export default router;