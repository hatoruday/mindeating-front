import ContentsScreen from "@/components/contents/contentsScreen";
const ArticleString = () => {
  return (
    <div className="flex font-gowun flex-col gap-y-4">
      <div>
        <div className="block">‘다들 잘 하는 다이어트..</div>
        <div className="block">왜 나만 매번 실패할까?’</div>
      </div>
      <div>
        <div className="block">’왜 다이어트만 다짐하면</div>
        <div className="block"> 음식이 더 먹고 싶지?’</div>
      </div>

      <div className="block">‘난 진짜 의지력이 부족한가봐’</div>
    </div>
  );
};
export const One = () => {
  return (
    <ContentsScreen
      headerString="1. 다이어트 실패는 의지력이 아닌 뇌에 있다?"
      articleString={ArticleString()}
      articleImgSrc="/contentsImages/1/1-1.png"
    />
  );
};

export const Two = () => {
  return (
    <ContentsScreen
      headerString="1. 다이어트 실패는 의지력이 아닌 뇌에 있다?"
      articleHeaderString="의지력이 부족해서가 아니야"
      articleString={
        <div className="font-nanum text-[18px] font-black1">
          <p>다이어트를 실패하는 이유는</p>
          <p>의지가 부족해서가 아니야</p>
          <p>
            바로 <span className="font-bold">`다이어트 사고방식`때문이지</span>
          </p>
        </div>
      }
    />
  );
};
