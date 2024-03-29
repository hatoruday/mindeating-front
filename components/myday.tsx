const MyDay = ({ status, day }: { status: number; day: Date }) => {
  if (status === 1)
    return (
      <div className="flex flex-col justify-start items-center w-[38px] h-[38px] relative p-[9.375px] rounded-[66.56px] bg-[#696972] border border-[#696972]">
        <p className="flex-grow-0 flex-shrink-0 w-[18.75px] h-[18.75px] text-sm font-bold text-center text-white">
          {day.getDate()}
        </p>
      </div>
    );
  else if (status === -1)
    return (
      <div className="flex flex-col justify-center items-center w-[38px] h-[38px] relative p-[9.375px] rounded-[66px] bg-white">
        <p className="flex-grow-0 flex-shrink-0 w-[18.75px] h-[18.75px] text-sm font-medium text-center text-[#e7e7e7]">
          {day.getDate()}
        </p>
      </div>
    );
  //red
  else if (status === 2)
    return (
      <div className="flex flex-col justify-center items-center w-[38px] h-[38px] relative p-[9.375px] rounded-[66px] bg-[#ffe5ea] border-[#ffc4cf]">
        <p className="flex-grow-0 flex-shrink-0 w-[18.75px] h-[18.75px] text-sm font-medium text-center text-[#696972]">
          {day.getDate()}
        </p>
      </div>
    );
  //yellow
  else if (status === 3)
    return (
      <div className="flex flex-col justify-center items-center w-[38px] h-[38px] relative p-[9.375px] rounded-[66px] bg-[#fff9e5] border-[#ffe27f]">
        <p className="flex-grow-0 flex-shrink-0 w-[18.75px] h-[18.75px] text-sm font-medium text-center text-[#696972]">
          {day.getDate()}
        </p>
      </div>
    );
  else if (status === 4)
    return (
      <div className="flex flex-col justify-center items-center w-[38px] h-[38px] relative p-[9.375px] rounded-[66px] bg-[#d8f5fb] border-[#7bddf2]">
        <p className="flex-grow-0 flex-shrink-0 w-[18.75px] h-[18.75px] text-sm font-medium text-center text-[#696972]">
          {day.getDate()}
        </p>
      </div>
    );
  else
    return (
      <div className="flex flex-col justify-center items-center w-[38px] h-[38px] relative p-[9.375px] rounded-[66px] border border-[#e7e7e7]">
        <p className="flex-grow-0 flex-shrink-0 w-[18.75px] h-[18.75px] text-sm font-medium text-center text-[#696972]">
          {day.getDate()}
        </p>
      </div>
    );
};
export default MyDay;
