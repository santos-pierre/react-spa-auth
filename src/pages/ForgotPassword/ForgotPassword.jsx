import { Transition } from '@headlessui/react';
import { useState } from 'react';
import usersClient from '../../api/users/usersClient';
import ButtonForm from '../../components/ButtonForm/ButtonForm';
import HeaderForm from '../../components/HeaderForm/HeaderForm';
import InputForm from '../../components/InputForm/InputForm';
import ScreenCenter from '../../layouts/ScreenCenter/ScreenCenter';

const ForgotPassword = () => {
    const [errors, setErrors] = useState({});
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const sendEmailReset = async (e) => {
        e.preventDefault();
        try {
            if (email.trim()) {
                await usersClient.forgotPassword({ email: email });
                setSuccess(true);
            }
        } catch ({ errors, status }) {
            if (status === 422) {
                setErrors(errors);
            }
        }
    };

    return (
        <ScreenCenter additionalCLasses="flex-col">
            <HeaderForm title="Reset Password Link" />
            <Transition
                show={!success}
                leave="transition ease-in duration-75"
                leaveFrom="opacity-1"
                leaveTo="opacity-0"
                as="form"
                onSubmit={sendEmailReset}
                className="flex justify-center xl:w-1/3 md:w-1/2 w-full flex-col space-y-5 mx-auto px-4"
            >
                <InputForm
                    label="email"
                    name="email"
                    type="email"
                    value={email}
                    placeholder="yourmail@test.com"
                    handleValue={setEmail}
                    error={errors && errors.email ? errors.email[0] : null}
                />
                <ButtonForm>
                    <span>Send Reset Link</span>
                </ButtonForm>
            </Transition>
            <Transition
                show={success}
                leave="transition ease-out duration-75 delay-100"
                enterTo="opacity-0"
                enterFrom="opacity-1"
            >
                <div className="flex flex-col space-y-4 items-center justify-center">
                    <svg
                        className="h-24 w-24 text-green-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span className="font-bold text-2xl">Email Sent!</span>
                </div>
            </Transition>
        </ScreenCenter>
    );
};

export default ForgotPassword;
