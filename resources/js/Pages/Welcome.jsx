import { Head } from '@inertiajs/react';
import LandingArea from './Frontend/LandingArea';
import Footer from './Frontend/Footer';
import About from './Frontend/About';
import FrontendLayout from '@/Layouts/FrontendLayoout/Index';


export default function Welcome() {
    return (
        <>
            <FrontendLayout>
                <Head title="Welcome" />
                {/* <!-- landingarea --> */}
                <LandingArea />
                {/* <!-- \landingarea --> */}

                {/* <!-- About section --> */}
                <About />
                {/* <!-- \About section --> */}

                <Footer />
                {/* <!-- Footer --> */}
            </FrontendLayout>
        </>
    );
}
