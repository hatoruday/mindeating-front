import { MdCircle } from "react-icons/md";

export default function SubmitPopUpScreen() {
  return (
    <div>
      <div className="background"></div>
      <form>
        <input></input>
        <button type="submit">
          <MdCircle />
        </button>
      </form>
    </div>
  );
}
