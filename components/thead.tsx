export default function Thead({
  daySelect,
  isFadeOut,
}: {
  daySelect: Date;
  isFadeOut: boolean;
}) {
  const day = daySelect.getDay();
  return (
    <div className="w-full">
      <div className="flex relative mt-2 w-full justify-between max-h-[30px]">
        <div className="w-[40px] h-[84px] flex relative justify-center">
          <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100 absolute z-20">
            Mo
          </p>
          {day === 1 && isFadeOut && (
            <div className="absolute w-[46px] h-[84px] top-[35px] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[24.5px] z-10 bg-green3 border border-green-200" />
          )}
        </div>

        <div className="w-[40px] flex justify-center">
          <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100 z-20">
            Tu
          </p>
          {day === 2 && isFadeOut && (
            <div className="absolute w-[46px] h-[84px] top-[35px] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[24.5px] z-10 bg-green3 border border-green-200" />
          )}
        </div>

        <div className="w-[40px] flex justify-center">
          <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100 z-20">
            We
          </p>
          {day === 3 && isFadeOut && (
            <div className="absolute w-[46px] h-[84px] top-[35px] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[24.5px] z-10 bg-green3 border border-green-200" />
          )}
        </div>

        <div className="w-[40px] flex justify-center">
          <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100 z-20">
            Th
          </p>
          {day === 4 && isFadeOut && (
            <div className="absolute w-[46px] h-[84px] top-[35px] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[24.5px] z-10 bg-green3 border border-green-200" />
          )}
        </div>

        <div className="w-[40px] flex justify-center">
          <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100 z-20">
            Fr
          </p>
          {day === 5 && isFadeOut && (
            <div className="absolute w-[46px] h-[84px] top-[35px] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[24.5px] z-10 bg-green3 border border-green-200" />
          )}
        </div>

        <div className="w-[40px] flex justify-center">
          <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100 z-20">
            Sa
          </p>
          {day === 6 && isFadeOut && (
            <div className="absolute w-[46px] h-[84px] top-[35px] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[24.5px] z-10 bg-green3 border border-green-200" />
          )}
        </div>

        <div className="w-[40px] flex justify-center">
          <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100 z-20">
            Su
          </p>
          {day === 0 && isFadeOut && (
            <div className="absolute w-[46px] h-[84px] top-[35px] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[24.5px] z-10 bg-green3 border border-green-200" />
          )}
        </div>
      </div>
    </div>
  );
}
