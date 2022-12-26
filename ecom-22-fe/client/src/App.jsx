import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import ScrollTop from '~/components/ScrollTop';
import './App.css';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { useRef } from 'react';


function App() {

    const tawkMessengerRef = useRef();

    const handleMinimize = () => {
        tawkMessengerRef.current.minimize();
    };

    const onLoad = () => {
        console.log('onLoad works!');
    };



    return (
        <Router>
            <div className="App">

         
            <TawkMessengerReact
                propertyId="61854e406bb0760a49414ea8"
                widgetId="1fjobjbkg"
                onLoad={onLoad} />
                <ScrollTop>
                    <Routes />
                </ScrollTop>
            </div>
        </Router>
    );
}

export default App;
