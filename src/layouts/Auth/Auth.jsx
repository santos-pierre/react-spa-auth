import { useSelector } from 'react-redux';
import BannerEmailVerification from '../../components/BannerEmailVerification/BannerEmailVerification';
import FlashMessage from '../../components/FlashMessage/FlashMessage';
import { getUser } from '../../redux/users/userSelectors';
import Navbar from './../../components/Navbar/Navbar';

const Auth = ({ children }) => {
    const user = useSelector(getUser);

    return (
        <div className="h-full dark:bg-neutral-800 bg-neutral-100 dark:text-neutral-200 text-neutral-900">
            <Navbar />
            <main>
                <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">{children}</div>
                </div>
            </main>
            <BannerEmailVerification user={user} />
            <FlashMessage />
        </div>
    );
};

export default Auth;
