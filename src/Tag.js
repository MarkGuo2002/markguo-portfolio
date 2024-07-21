const Tag = ({ text, color = "white" }) => {
    const colorClasses = {
      myyellow: 'bg-myyellow',
      myblue: 'bg-myblue',
      mygreen: 'bg-mygreen',
      primary: 'bg-primary',
      white: 'bg-white',
    };
  
    return (
      <div className={`${colorClasses[color]} text-black shadow-lg px-4 py-1 rounded-xl flex justify-center items-center w-fit`}>
        <p>{text}</p>
      </div>
    );
  };

export default Tag;