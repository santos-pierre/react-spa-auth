import PasswordChangeForm from '../../../components/PasswordChangeForm/PasswordChangeForm';
import ProfileInfoForm from '../../../components/ProfileInfoForm/ProfileInfoForm';
import Auth from '../../../layouts/Auth/Auth';

const UserProfile = () => {
    return (
        <Auth>
            <ProfileInfoForm />
            <PasswordChangeForm />
        </Auth>
    );
};

export default UserProfile;
