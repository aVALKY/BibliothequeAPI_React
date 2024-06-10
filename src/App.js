import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccueilPage from "./Pages/AccueilPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import ConnexionPage from "./Pages/ConnexionPage";
import InscriptionPage from "./Pages/InscriptionPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DetailsPage from "./Pages/DetailsPage";

function App() {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AccueilPage />}/>
                <Route path="/connexion" element={<ConnexionPage />}/>
                <Route path="/inscription" element={<InscriptionPage />}/>
                <Route path="/detailspage/:id" element={<DetailsPage />}/>
            </Routes>
            <ToastContainer/>
        </BrowserRouter>
    </>
}

export default App;