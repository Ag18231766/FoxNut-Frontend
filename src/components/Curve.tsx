
interface CurveProps{
    message?: string;
    className?: string; // Add className as an optional property
}


const Curve =  ({message}:CurveProps) => {
    return (
        <div className="border-2 border-gray-900 w-[100px] h-[100px] [border-radius:50%_100%/100%_50%] text-center flex items-center justify-center text-gray-800 font-normal">
            {message}
        </div>
    );
};

export default Curve;