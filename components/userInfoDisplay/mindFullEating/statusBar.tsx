export default function StatusBar({ statusList, specificWidth }: { statusList: number[]; specificWidth?: string }) {
  //피그마 설계시 8칸의 길이를 가짐. 0 : 빨간색, 1 : 노란색, 2: 초록색, 3: 회색(미기록)
  const statusToColor = ["bg-red1", "bg-yellow1", "bg-green2", "bg-black4"];
  let sWidth = "47px";
  if (specificWidth) {
    sWidth = specificWidth;
  }
  // console.log("status" + sWidth);

  return (
    <>
      {specificWidth ? (
        <div className={`flex items-center gap-1 justify-between`}>
          {statusList.map((status, statusIndex) => {
            return <div key={statusIndex} className={`w-[${specificWidth}] mx-auto h-2 rounded-sm ${statusToColor[status]}`}></div>;
          })}
        </div>
      ) : (
        <div className={`flex items-center gap-1 justify-between`}>
          {statusList.map((status, statusIndex) => {
            return <div key={statusIndex} className={`w-[47px] mx-auto h-2 rounded-sm ${statusToColor[status]}`}></div>;
          })}
        </div>
      )}
    </>
  );
}
