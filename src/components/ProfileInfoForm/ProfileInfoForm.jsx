import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import usersClient from '../../api/users/usersClient';
import { setNotification } from '../../redux/notifications/notificationActions';
import { setCurrentUser } from '../../redux/users/userActions';
import { getUser } from '../../redux/users/userSelectors';
import InputForm from '../InputForm/InputForm';

const ProfileInfoForm = () => {
    const user = useSelector(getUser);
    const dispatch = useDispatch();
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [errors, setErrors] = useState({});

    const updateProfile = async (e) => {
        setErrors({});
        e.preventDefault();
        try {
            if (user.name !== name || user.email !== email) {
                await usersClient.updateUser({ name: name, email: email });
                dispatch(
                    setNotification({
                        message: 'Profile Saved',
                        status: 'SUCCESS',
                        show: true,
                    })
                );
                dispatch(
                    setCurrentUser({
                        email: email,
                        name: name,
                        is_verified: false,
                    })
                );
            }
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
        <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
            <section aria-labelledby="payment_details_heading">
                <form onSubmit={updateProfile}>
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="bg-white py-6 px-4 sm:p-6">
                            <div>
                                <h2
                                    id="payment_details_heading"
                                    className="text-lg leading-6 font-medium text-gray-900"
                                >
                                    Profile Info
                                </h2>
                            </div>
                            <div className="mt-6 grid grid-cols-4 gap-6">
                                <InputForm
                                    name="name"
                                    label="name"
                                    value={name}
                                    handleValue={setName}
                                    wrapperStyle="col-span-4 sm:col-span-2"
                                    error={
                                        errors && errors.name
                                            ? errors.name[0]
                                            : null
                                    }
                                />
                                <InputForm
                                    name="email"
                                    label="email"
                                    value={email}
                                    handleValue={setEmail}
                                    wrapperStyle="col-span-4 sm:col-span-2"
                                    error={
                                        errors && errors.email
                                            ? errors.email[0]
                                            : null
                                    }
                                />
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button
                                disabled={
                                    !(
                                        user.name !== name ||
                                        user.email !== email
                                    )
                                }
                                type="submit"
                                className={`bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 ${
                                    !(
                                        user.name !== name ||
                                        user.email !== email
                                    ) && 'cursor-not-allowed'
                                }`}
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

export default ProfileInfoForm;
