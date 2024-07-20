const Tag = ({ text, color="bg-white" }) => {
    return(
        <div className={`${color} text-black shadow-lg px-4 py-1 rounded-xl flex justify-center items-center w-fit`}>
            <p>{text}</p>
        </div>
    )
}
export default Tag;
