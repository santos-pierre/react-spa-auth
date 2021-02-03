import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PasswordChangeForm from '../../../components/PasswordChangeForm/PasswordChangeForm';
import ProfileInfoForm from '../../../components/ProfileInfoForm/ProfileInfoForm';
import Auth from '../../../layouts/Auth/Auth';
import { getUser } from '../../../redux/users/userSelectors';
import { getRoute } from '../../../routes/routes';

const UserProfile = () => {
    const user = useSelector(getUser);

    useEffect(() => {
        document.title = 'Laravel React SPA - User Profile';
    }, []);

    return (
        <Auth>
            {!user.is_github_account ? (
                <>
                    <ProfileInfoForm />
                    <PasswordChangeForm />
                </>
            ) : (
                <Redirect to={getRoute('home').path} />
            )}
        </Auth>
    );
};

export default UserProfile;
