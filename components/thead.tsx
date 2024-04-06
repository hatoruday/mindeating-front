export default function Thead({ daySelect }: { daySelect: number }) {
  return (
    <div className="w-full">
      <div className="flex relative mt-2 w-full justify-between max-h-[30px]">
        <div className="w-[40px] h-[84px] flex relative justify-center">
          <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100 absolute z-20">
            Mo
          </p>
          {daySelect === 0 && (
            <div className="absolute w-[46px] h-[84px] top-[35px] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[24.5px] z-10 bg-green3 border border-green-200" />
          )}
        </div>

        <div className="w-[40px] flex justify-center">
          <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
            Tu
          </p>
          {daySelect === 1 && (
            <div className="absolute w-[46px] h-[84px] top-[35px] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[24.5px] z-10 bg-green3 border border-green-200" />
          )}
        </div>

        <div className="w-[40px] flex justify-center">
          <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
            We
          </p>
          {daySelect === 2 && (
            <div className="absolute w-[46px] h-[84px] top-[35px] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[24.5px] z-10 bg-green3 border border-green-200" />
          )}
        </div>

        <div className="w-[40px] flex justify-center">
          <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
            Th
          </p>
          {daySelect === 3 && (
            <div className="absolute w-[46px] h-[84px] top-[35px] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[24.5px] z-10 bg-green3 border border-green-200" />
          )}
        </div>

        <div className="w-[40px] flex justify-center">
          <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
            Fr
          </p>
          {daySelect === 4 && (
            <div className="absolute w-[46px] h-[84px] top-[35px] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[24.5px] z-10 bg-green3 border border-green-200" />
          )}
        </div>

        <div className="w-[40px] flex justify-center">
          <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
            Sa
          </p>
          {daySelect === 5 && (
            <div className="absolute w-[46px] h-[84px] top-[35px] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[24.5px] z-10 bg-green3 border border-green-200" />
          )}
        </div>

        <div className="w-[40px] flex justify-center">
          <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
            Su
          </p>
          {daySelect === 6 && (
            <div className="absolute w-[46px] h-[84px] top-[35px] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[24.5px] z-10 bg-green3 border border-green-200" />
          )}
        </div>
      </div>
    </div>
  );
}
