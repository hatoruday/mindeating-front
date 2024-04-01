import Activity from "@/components/userInfoDisplay/activity/activity";
import Emotion from "@/components/userInfoDisplay/emotion/emotion";
import MindFullEating from "@/components/userInfoDisplay/mindFullEating/mindFullEating";
import Routine from "@/components/userInfoDisplay/routine/routine";
import Sleep from "@/components/userInfoDisplay/sleep/sleep";

export default function UserInfo() {
  return (
    <div className="flex flex-col gap-y-5">
      <Routine />
      <MindFullEating />
      <Activity />
      <Sleep />
      <Emotion />
    </div>
  );
}
