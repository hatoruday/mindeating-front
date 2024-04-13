import { MdCircle } from "react-icons/md";

export default function SubmitPopUpScreen({ onInsertToggle }: { onInsertToggle: any }) {
  return (
    <div>
      <div className="background" onClick={onInsertToggle}></div>
      <form>
        <input></input>
        <button type="submit">
          <MdCircle />
        </button>
      </form>
    </div>
  );
}
