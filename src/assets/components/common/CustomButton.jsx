
export const CustomButton = ({ children, ...props }) => {
    return (
        <button
            className="bg-Orange text-white font-bold p-4 w-full rounded-md hover:opacity-50"
            {...props}
        >
            {children}
        </button>
    );
};

