import './Auth.css'

import {Header} from '../../components/Header/Header'
import {Footer} from '../../components/Footer/Footer'

import {Preloader} from '../../utils/Preloader/Preloader'
import {BackToTopButton} from '../../utils/BackToTopButton/BackToTopButton'

export function Auth() {
    return (
        <>
            <Header />
            <main id="accounts" className="container-fluid flex-grow">

            </main>
            <Footer />
            <Preloader />
            <BackToTopButton />
        </>
    );
}
