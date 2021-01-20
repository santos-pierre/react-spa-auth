import { Link } from 'react-router-dom';

const HeaderForm = ({ title, subTitle = null, link = null }) => {
    return (
        <div className="sm:mx-auto sm:w-full sm:max-w-md mb-5">
            <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 capitalize">
                {title}
            </h2>
            {subTitle && (
                <p className="mt-2 text-center text-sm text-gray-600 max-w capitalize">
                    Or
                    {link ? (
                        <Link
                            to={link}
                            className="font-medium text-indigo-600 hover:text-indigo-500 ml-1"
                        >
                            {subTitle}
                        </Link>
                    ) : (
                        <span className="font-medium text-indigo-600 hover:text-indigo-500 ml-1">
                            {subTitle}
                        </span>
                    )}
                </p>
            )}
        </div>
    );
};

export default HeaderForm;
