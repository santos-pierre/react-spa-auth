const ScreenCenter = ({ children, additionalCLasses }) => {
    return (
        <div
            className={`min-h-screen flex justify-center items-center ${additionalCLasses}`}
        >
            {children}
        </div>
    );
};

export default ScreenCenter;
