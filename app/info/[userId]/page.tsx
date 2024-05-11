import PostSpecificFetch, { getInfo, getUserName } from "@/api/postFetch";
import HomePage from "@/components/userInfoDisplay/homePage";

interface IParams {
  params: { userId: string };
}
export const revalidate = 0;
export default async function UserInfo({ params: { userId } }: IParams) {
  // const fetchingData = {
  //   user_id: userId,
  // };

  // const JSONdata = JSON.stringify(fetchingData);
  // const userInfo = await PostSpecificFetch(JSONdata, "record/get-user");
  const userData = await getUserName(userId);
  // console.log(userData);
  return (
    <div className="flex flex-col px-6 ">
      <HomePage userId={userId} userData={userData} />
    </div>
  );
}
