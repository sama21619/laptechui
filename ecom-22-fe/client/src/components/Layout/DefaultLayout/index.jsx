import Header from '../../Header';
import Footer from '../../Footer';
function DefaultLayout({ children }) {
    return (
        <>
            
            <Header />
            <main role="main" className="wrapper">
                <div className="content">{children}</div>
            </main>
            <Footer />
        </>
    );
}

export default DefaultLayout;
