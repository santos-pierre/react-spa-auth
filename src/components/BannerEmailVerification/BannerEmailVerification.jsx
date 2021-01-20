import { Transition } from '@headlessui/react';
import { useDispatch } from 'react-redux';
import usersClient from '../../api/users/usersClient';
import { setNotification } from '../../redux/notifications/notificationActions';

const BannerEmailVerification = ({ user }) => {
    const dispatch = useDispatch();

    const sendEmailVerification = async () => {
        try {
            await usersClient.sendVerification();
            dispatch(
                setNotification({
                    message: 'Email Sent',
                    status: 'SUCCESS',
                    show: true,
                })
            );
        } catch (error) {
            dispatch(
                setNotification({
                    message: 'Something went wrong. Try again later',
                    status: 'FAIL',
                    show: true,
                })
            );
        }
    };

    return (
        <Transition
            show={!user.is_verified}
            enter="transition-opacity ease-in-out duration-500 sm:duration-700"
            enterFrom="opacity-0"
            enterTo="opacity-1"
        >
            <div>
                <div className="bg-indigo-600 fixed bottom-0 w-full">
                    <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-around">
                            <div className="w-0 flex-1 flex items-center">
                                <p className="ml-3 font-medium text-white truncate">
                                    <span>Your email is not verified</span>
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <button
                                    onClick={sendEmailVerification}
                                    className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none"
                                >
                                    Resend Email
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    );
};

export default BannerEmailVerification;
