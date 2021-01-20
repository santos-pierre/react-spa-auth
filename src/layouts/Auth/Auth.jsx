import { useSelector } from 'react-redux';
import FlashMessage from '../../components/FlashMessage/FlashMessage';
import BannerEmailVerification from '../../components/BannerEmailVerification/BannerEmailVerification';
import NavBar from '../../components/Navbar/Navbar';
import { getUser } from '../../redux/users/userSelectors';

const Auth = ({ children }) => {
    const user = useSelector(getUser);

    return (
        <div className="relative">
            <NavBar />
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">{children}</div>
                </div>
            </main>
            <BannerEmailVerification user={user} />
            <FlashMessage />
        </div>
    );
};

export default Auth;
