import Container from './Container';
import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';

function PageBase() {
    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </>
    )
}

export default PageBase;