import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import usersClient from '../../api/users/usersClient';
import ButtonForm from '../../components/ButtonForm/ButtonForm';
import HeaderForm from '../../components/HeaderForm/HeaderForm';
import InputForm from '../../components/InputForm/InputForm';
import ScreenCenter from '../../layouts/ScreenCenter/ScreenCenter';
import { useQuery } from '../../utils/customHooks';

const ResetPassword = () => {
    const query = useQuery();
    const history = useHistory();
    const [errors, setErrors] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const resetPassword = async (e) => {
        e.preventDefault();
        setErrors({});
        try {
            if (password.trim() && passwordConfirmation.trim()) {
                await usersClient.resetPassword({
                    token: query.get('token'),
                    email: email,
                    password: password,
                    password_confirmation: passwordConfirmation,
                });
                history.push('/login');
            }
        } catch (error) {
            if (error.status === 422) {
                setErrors(error.errors);
            }
        }
    };

    return (
        <ScreenCenter additionalCLasses="flex-col">
            <HeaderForm title="Reset Your Password" />
            <form
                className="flex justify-center xl:w-1/3 md:w-1/2 w-full flex-col space-y-5 mx-auto px-4"
                onSubmit={resetPassword}
            >
                <InputForm
                    label="email"
                    name="email"
                    type="email"
                    value={email}
                    placeholder="test@test.com"
                    handleValue={setEmail}
                    error={errors && errors.email ? errors.email[0] : null}
                />
                <InputForm
                    label="password"
                    name="password"
                    type="password"
                    value={password}
                    handleValue={setPassword}
                    error={
                        errors && errors.password ? errors.password[0] : null
                    }
                />
                <InputForm
                    label="Password Confirmation"
                    name="password_confirmation"
                    type="password"
                    value={passwordConfirmation}
                    handleValue={setPasswordConfirmation}
                />
                <ButtonForm>
                    <span>Change Password</span>
                </ButtonForm>
            </form>
        </ScreenCenter>
    );
};

export default ResetPassword;
