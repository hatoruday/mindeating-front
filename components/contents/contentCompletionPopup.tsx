import { Dialog } from "@headlessui/react";
import Image from "next/image";

export default function ContentsCompletionPopup({ setOpen, isOpen, fetchSubmit }: { fetchSubmit: any; setOpen: any; isOpen: boolean }) {
  return (
    <Dialog as="div" className="fixed inset-0 z-20 overflow-y-auto" onClose={() => setOpen(false)} open={isOpen}>
      <div className="min-h-screen px-4 text-center flex justify-center items-center">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

        <div className="inline-block align-middle" aria-hidden="true">
          &#8203;
        </div>

        <div
          className="flex flex-col justify-center content-center items-center gap-y-5 w-[307px] h-[273px] my-8 transform overflow-hidden rounded-2xl bg-[#FCFBFF] p-6 align-middle shadow-xl transition-all"
          style={{ maxWidth: "307px" }} // maxWidth를 설정하여 화면 크기가 307px보다 작아지더라도 적절히 대응할 수 있도록 함
        >
          <Dialog.Title as="h3" className="">
            <span className="text-[18px] font-medium font-noto text-black1">미션 수행 완료!</span>
          </Dialog.Title>
          <Image src="/contentsImages/completionGood.png" alt="submitIcon" width={93} height={99} />
          <p className="text-[14px] text-black3 font-normal ">이제 기록을 하러 가볼까요?</p>
          <div className="flex gap-x-2 justify-center">
            <button
              type="button"
              className="w-[219px] h-[43px] inline-flex justify-center rounded-md border border-transparent bg-green2 px-4 py-2 text-[16px] font-bold text-black1 hover:bg-green2 focus:outline-none"
              onClick={() => {
                fetchSubmit();
                setOpen(false);
              }}
            >
              기록하러 가기
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
