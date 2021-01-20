import { useState } from 'react';
import { useDispatch } from 'react-redux';
import usersClient from '../../api/users/usersClient';
import { setNotification } from '../../redux/notifications/notificationActions';
import InputForm from '../InputForm/InputForm';

const PasswordChangeForm = () => {
    const dispatch = useDispatch();

    const [currentPassword, setCurrentPassword] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [errors, setErrors] = useState({});

    const updatePassword = async (e) => {
        setErrors({});
        e.preventDefault();
        try {
            await usersClient.updatePassword({
                current_password: currentPassword,
                password: password,
                password_confirmation: passwordConfirmation,
            });
            dispatch(
                setNotification({
                    message: 'Password Changed',
                    status: 'SUCCESS',
                    show: true,
                })
            );
            setCurrentPassword('');
            setPassword('');
            setPasswordConfirmation('');
        } catch (error) {
            if (error.status === 422) {
                setErrors(error.errors);
            } else {
                dispatch(
                    setNotification({
                        message: 'Something went wrong try again later',
                        status: 'FAIL',
                        show: true,
                    })
                );
            }
        }
    };

    return (
        <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9 mt-5">
            <section aria-labelledby="payment_details_heading">
                <form onSubmit={updatePassword}>
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="bg-white py-6 px-4 sm:p-6">
                            <div>
                                <h2
                                    id="payment_details_heading"
                                    className="text-lg leading-6 font-medium text-gray-900"
                                >
                                    Update Password
                                </h2>
                            </div>
                            <div className="mt-6 grid grid-cols-4 gap-6">
                                <InputForm
                                    name="current_password"
                                    label="Current Password"
                                    type="password"
                                    value={currentPassword}
                                    handleValue={setCurrentPassword}
                                    wrapperStyle="col-span-4 sm:col-span-12"
                                    error={
                                        errors && errors.current_password
                                            ? errors.current_password[0]
                                            : null
                                    }
                                />
                                <div className="hidden sm:col-span-2"></div>
                                <InputForm
                                    name="password"
                                    label="new password"
                                    type="password"
                                    value={password}
                                    handleValue={setPassword}
                                    wrapperStyle="col-span-4 sm:col-span-12"
                                    error={
                                        errors && errors.password
                                            ? errors.password[0]
                                            : null
                                    }
                                />
                                <InputForm
                                    name="password"
                                    label="password confirmation"
                                    type="password"
                                    value={passwordConfirmation}
                                    handleValue={setPasswordConfirmation}
                                    wrapperStyle="col-span-4 sm:col-span-12"
                                />
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button
                                type="submit"
                                className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default PasswordChangeForm;
