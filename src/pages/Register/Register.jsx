import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import usersClient from '../../api/users/usersClient';
import ButtonForm from '../../components/ButtonForm/ButtonForm';
import HeaderForm from '../../components/HeaderForm/HeaderForm';
import InputForm from '../../components/InputForm/InputForm';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [errors, setErrors] = useState({});
    const history = useHistory();

    const register = async (e) => {
        e.preventDefault();
        setErrors({});
        try {
            if (email.trim() && password.trim() && name.trim()) {
                await usersClient.registerUser({
                    name: name,
                    email: email,
                    password: password,
                    password_confirmation: passwordConfirmation,
                });
                history.push('/');
            }
        } catch (error) {
            if (error.status === 422) {
                setErrors(error.errors);
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <HeaderForm
                title="Create your account"
                subTitle="Log in with an existing account"
                link="/login"
            />
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form onSubmit={register} className="space-y-6">
                        <InputForm
                            label="name"
                            name="name"
                            type="text"
                            value={name}
                            placeholder="John Doe"
                            handleValue={setName}
                            error={
                                errors && errors.name ? errors.name[0] : null
                            }
                        />
                        <InputForm
                            label="email"
                            name="email"
                            type="email"
                            value={email}
                            placeholder="test@test.com"
                            handleValue={setEmail}
                            error={
                                errors && errors.email ? errors.email[0] : null
                            }
                        />
                        <InputForm
                            label="password"
                            name="password"
                            type="password"
                            value={password}
                            handleValue={setPassword}
                            error={
                                errors && errors.password
                                    ? errors.password[0]
                                    : null
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
                            <span>Register</span>
                        </ButtonForm>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
