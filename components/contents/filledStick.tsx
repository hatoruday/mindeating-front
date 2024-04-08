export default function FilledStick({ isFilled }: { isFilled: boolean }) {
  return (
    <div
      className={`${
        isFilled
          ? "w-0.5 h-full bg-black3 rounded-sm"
          : "w-0.5 h-full bg-black4 rounded-sm opacity-65"
      }`}
    />
  );
}
