const MyDay = ({ status, day }: { status: number; day: Date }) => {
  if (status === 1)
    return (
      <div className="flex z-20 flex-col justify-start items-center w-[38px] h-[38px] relative p-[9.375px] rounded-[66.56px] bg-[#696972] border border-[#696972]">
        <p className="flex-grow-0 flex-shrink-0 w-[18.75px] h-[18.75px] text-sm font-bold text-center text-white">{day.getDate()}</p>
      </div>
    );
  else if (status === -1)
    return (
      <div className="flex z-20 flex-col justify-center items-center w-[38px] h-[38px] relative p-[9.375px] rounded-[66px] bg-white">
        <p className="flex-grow-0 flex-shrink-0 w-[18.75px] h-[18.75px] text-sm font-medium text-center text-[#e7e7e7]">{day.getDate()}</p>
      </div>
    );
  //red
  else if (status === 4)
    return (
      <div className="flex z-20 flex-col justify-center items-center w-[38px] h-[38px] relative p-[9.375px] rounded-[66px] bg-[#ffe5ea] border border-[#ffc4cf]">
        <p className="flex-grow-0 flex-shrink-0 w-[18.75px] h-[18.75px] text-sm font-medium text-center text-[#696972]">{day.getDate()}</p>
      </div>
    );
  else if (status === 40)
    return (
      <div className="flex z-20 flex-col justify-center items-center w-[38px] h-[38px] relative p-[9.375px] rounded-[66px] bg-[#ffe5ea] bg-opacity-30 border border-opacity-30 border-[#ffc4cf]">
        <p className="flex-grow-0 flex-shrink-0 w-[18.75px] h-[18.75px] text-sm font-medium text-center text-[#e7e7e7]">{day.getDate()}</p>
      </div>
    );
  else if (status === -4)
    return (
      <div className="flex z-20 flex-col justify-center items-center w-[38px] h-[38px] relative p-[9.375px] rounded-[66px] bg-white border border-[#ffc4cf]">
        <p className="flex-grow-0 flex-shrink-0 w-[18.75px] h-[18.75px] text-sm font-medium text-center text-[#696972]">{day.getDate()}</p>
      </div>
    );
  else if (status === -40)
    return (
      <div className="flex z-20 flex-col justify-center items-center w-[38px] h-[38px] relative p-[9.375px] rounded-[66px] bg-white border bg-opacity-30 border-opacity-30 border-[#ffc4cf]">
        <p className="flex-grow-0 flex-shrink-0 w-[18.75px] h-[18.75px] text-sm font-medium text-center text-[#e7e7e7]">{day.getDate()}</p>
      </div>
    );
  //yellow
  else if (status === 3)
    return (
      <div className="flex z-20 flex-col justify-center items-center w-[38px] h-[38px] relative p-[9.375px] rounded-[66px] bg-[#fff9e5] border border-[#ffe27f]">
        <p className="flex-grow-0 flex-shrink-0 w-[18.75px] h-[18.75px] text-sm font-medium text-center text-[#696972]">{day.getDate()}</p>
      </div>
    );
  else if (status === 30)
    return (
      <div className="flex z-20 flex-col justify-center items-center w-[38px] h-[38px] relative p-[9.375px] rounded-[66px] bg-[#fff9e5] border bg-opacity-30 border-opacity-30 border-[#ffe27f]">
        <p className="flex-grow-0 flex-shrink-0 w-[18.75px] h-[18.75px] text-sm font-medium text-center text-[#e7e7e7]">{day.getDate()}</p>
      </div>
    );
  else if (status === -3)
    return (
      <div className="flex z-20 flex-col justify-center items-center w-[38px] h-[38px] relative p-[9.375px] rounded-[66px] bg-white border-[#ffe27f] border">
        <p className="flex-grow-0 flex-shrink-0 w-[18.75px] h-[18.75px] text-sm font-medium text-center text-[#696972]">{day.getDate()}</p>
      </div>
    );
  else if (status === -30)
    return (
      <div className="flex z-20 flex-col justify-center items-center w-[38px] h-[38px] relative p-[9.375px] rounded-[66px] bg-white bg-opacity-30 border-opacity-30 border-[#ffe27f] border">
        <p className="flex-grow-0 flex-shrink-0 w-[18.75px] h-[18.75px] text-sm font-medium text-center text-[#e7e7e7]">{day.getDate()}</p>
      </div>
    );
  else if (status === 2)
    return (
      <div className="flex z-20 flex-col justify-center items-center w-[38px] h-[38px] relative p-[9.375px] rounded-[66px] bg-[#d8f5fb] border-blue1 border">
        <p className="flex-grow-0 flex-shrink-0 w-[18.75px] h-[18.75px] text-sm font-medium text-center text-[#696972]">{day.getDate()}</p>
      </div>
    );
  else if (status === 20)
    return (
      <div className="flex z-20 flex-col justify-center items-center w-[38px] h-[38px] relative p-[9.375px] rounded-[66px] bg-[#d8f5fb] border-opacity-30 bg-opacity-30 border-blue1 border">
        <p className="flex-grow-0 flex-shrink-0 w-[18.75px] h-[18.75px] text-sm font-medium text-center text-[#e7e7e7]">{day.getDate()}</p>
      </div>
    );
  else if (status === -2)
    return (
      <div className="flex z-20 flex-col justify-center items-center w-[38px] h-[38px] relative p-[9.375px] rounded-[66px] border  border-blue1">
        <p className="flex-grow-0 flex-shrink-0 w-[18.75px] h-[18.75px] text-sm font-medium text-center text-[#696972]">{day.getDate()}</p>
      </div>
    );
  else if (status === -20)
    return (
      <div className="flex z-20 flex-col justify-center items-center w-[38px] h-[38px] relative p-[9.375px] rounded-[66px] border border-opacity-30 bg-opacity-30 border-blue1">
        <p className="flex-grow-0 flex-shrink-0 w-[18.75px] h-[18.75px] text-sm font-medium text-center text-[#e7e7e7]">{day.getDate()}</p>
      </div>
    );
  else
    return (
      <div className="flex z-20 flex-col justify-center items-center w-[38px] h-[38px] relative p-[9.375px] rounded-[66px] border border-[#e7e7e7]">
        <p className="flex-grow-0 flex-shrink-0 w-[18.75px] h-[18.75px] text-sm font-medium text-center text-[#696972]">{day.getDate()}</p>
      </div>
    );
};
export default MyDay;
