import { BrowserRouter } from "react-router-dom";
import "./style/dark.scss";
import "./App.css";
import { AdminRoutes } from "./routes/route";
function App() {

    return (
        <div className= "app">
            <BrowserRouter>
                <AdminRoutes />
            </BrowserRouter>
        </div>
    );
}

export default App;
