const ProgressBar = ({ text, progress }) => {
    return (
        <div className="progress-bar flex items-center justify-center">
            <div className=" font-semibold progress-text w-5/12">{text}</div>
            <div className="progress-meter w-7/12 relative">
                <div
                    className="meter z-10 bg-primary h-1 absolute"
                    style={{ width: `${progress}%` }} // Inline style for dynamic width
                ></div>
                <div className="meter z-0 w-full bg-darkgray h-1 absolute"></div>
            </div>
        </div>
    );
};

export default ProgressBar;
