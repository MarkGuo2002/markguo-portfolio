const Tag = ({ text, color = "white", icon}) => {
    const colorClasses = {
      myyellow: 'bg-myyellow',
      myblue: 'bg-myblue',
      mygreen: 'bg-mygreen',
      primary: 'bg-primary',
      white: 'bg-white',
    };
  
    return (
      <div className={`${colorClasses[color]} text-black shadow-lg px-2 py-1 rounded-xl flex justify-center items-center w-fit gap-1`}>
        {icon}
        <p>{text}</p>
      </div>
    );
  };

export default Tag;