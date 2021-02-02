import { useEffect } from 'react';
import PasswordChangeForm from '../../../components/PasswordChangeForm/PasswordChangeForm';
import ProfileInfoForm from '../../../components/ProfileInfoForm/ProfileInfoForm';
import Auth from '../../../layouts/Auth/Auth';

const UserProfile = () => {
    useEffect(() => {
        document.title = 'Laravel React SPA - User Profile';
    }, []);

    return (
        <Auth>
            <ProfileInfoForm />
            <PasswordChangeForm />
        </Auth>
    );
};

export default UserProfile;
