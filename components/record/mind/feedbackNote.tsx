export default function FeedbackNote({ note, setNote, specificPlaceholder }: { note: string; setNote: (note: string) => void; specificPlaceholder?: string }) {
  return (
    <div className="flex relative h-full min-h-[159px] px-2 py-4 rounded-lg border border-black4">
      <textarea
        className="flex-grow min-h-[159px] w-full h-full px-3 text-start text-[14px] placeholder-black3 resize-none focus:outline-none focus:ring-0"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder={specificPlaceholder ? specificPlaceholder : `식사를 돌이켜보고 \n잘한 점과 아쉬운 점을 적어요 (선택)`}
      />
      <div className="text-[12px] text-black3 absolute bottom-2 right-5">{note.length}/500</div>
    </div>
  );
}
