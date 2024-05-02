import { Dialog } from "@headlessui/react";
import Image from "next/image";

export default function ContentPopUpScreen({ setOpen, isOpen, fetchSubmit }: { fetchSubmit: any; setOpen: any; isOpen: boolean }) {
  return (
    <Dialog
      as="div"
      className="fixed inset-0 z-20 overflow-y-auto"
      onClose={() => {
        setOpen(false);
        fetchSubmit();
      }}
      open={isOpen}
    >
      <div className="min-h-screen px-4 text-center flex justify-center items-center">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

        <div className="inline-block align-middle" aria-hidden="true">
          &#8203;
        </div>

        <div
          className="flex flex-col justify-center content-center items-center gap-y-5 w-[307px] my-8 transform overflow-hidden rounded-2xl bg-opacity-100 p-6 align-middle  transition-all"
          style={{ maxWidth: "307px" }} // maxWidth를 설정하여 화면 크기가 307px보다 작아지더라도 적절히 대응할 수 있도록 함
        >
          <Dialog.Title as="h3" className="text-[28px] font-semibold leading-6 text-white mb-10">
            참 잘했어요!
          </Dialog.Title>
          <Image src="/contentsImages/clap.png" alt="submitIcon" width={170} height={170} />

          <div className="flex gap-x-2 justify-center mt-4">
            {/* <button
              type="button"
              className="w-[94px] h-[40px] inline-flex justify-center rounded-md border border-transparent bg-black4 px-4 py-2 text-[14px] font-medium text-black1 hover:bg-black4 focus:outline-none"
              onClick={() => setOpen(false)}
            >
              취소하기
            </button> */}
            {/* <button
              type="button"
              className="w-[94px] h-[40px] inline-flex justify-center rounded-md border border-transparent bg-green2 px-4 py-2 text-[14px] font-medium text-black1 hover:bg-blue-200 focus:outline-none"
              onClick={() => {
                fetchSubmit();
                setOpen(false);
              }}
            >
              제출하기
            </button> */}
          </div>
        </div>
      </div>
    </Dialog>
  );
}
