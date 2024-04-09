// prettier-ignore
import ContentsScreen from "@/components/contents/contentsScreen";
const ArticleString = () => {
  return (
    <div className="flex font-gowun flex-col gap-y-10">
      <div className="gap-y-3">
        <div className="block">‘다들 잘 하는 다이어트..</div>
        <div className="block">왜 나만 매번 실패할까?’</div>
      </div>
      <div className="gap-y-3">
        <div className="block">’왜 다이어트만 다짐하면</div>
        <div className="block"> 음식이 더 먹고 싶지?’</div>
      </div>

      <div className="block">‘난 진짜 의지력이 부족한가봐’</div>
    </div>
  );
};
export const One = ({ topic, pageNum }: { topic: string; pageNum: string }) => {
  return (
    <ContentsScreen
      topic={topic}
      pageNumber={pageNum}
      headerString="1. 다이어트 실패는 의지력이 아닌 뇌에 있다?"
      articleString={ArticleString()}
      articleImgSrc="/contentsImages/1/1-1.png"
      width={220}
      height={220}
    />
  );
};

export const Two = ({ topic, pageNum }: { topic: string; pageNum: string }) => {
  // prettier-ignore
  return (
    <ContentsScreen topic = {topic} pageNumber = {pageNum}
      headerString="1. 다이어트 실패는 의지력이 아닌 뇌에 있다?"
      articleHeaderString="의지력이 부족해서가 아니야"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          다이어트를 실패하는 이유는 
의지가 부족해서가 아니야. 
바로 <span className="font-bold">`다이어트 사고방식`</span> 때문이지.
          
        </pre>
          
          
        
      }
      articleImgSrc="/contentsImages/1/1-2.png"
      width={244}
      height={241}
    />
  );
};

export const Three = ({ topic, pageNum }: { topic: string; pageNum: string }) => {
  // prettier-ignore
  return (
    <ContentsScreen topic = {topic} pageNumber = {pageNum}
      headerString="1. 다이어트 실패는 의지력이 아닌 뇌에 있다?"
      articleHeaderString="식욕 호르몬을 분비하는 뇌"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          우리가 ‘OO을 하면 안돼’라고 생각하는 순간, 
우리의 뇌는 OO만을 생각하게 돼. 
‘먹으면 안돼&apos;라고 생각하면, 
무의식적으로 ‘먹는’ 행위를 떠올리게 되지.
        </pre>
      }
      articleImgSrc="/contentsImages/1/1-3.png"
    />
  );
};
export const Four = ({ topic, pageNum }: { topic: string; pageNum: string }) => {
  // prettier-ignore
  return (
    <ContentsScreen topic = {topic} pageNumber = {pageNum}
      headerString="1. 다이어트 실패는 의지력이 아닌 뇌에 있다?"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          이때 머릿속은 먹는 생각으로 가득찼는데, 몸은 먹질 못하면 뇌는 결핍을 느끼고 식욕 호르몬을 분비시켜. 식욕이 불안정해지고 폭식의 가능성이 높아지지.
        </pre>
      }
      articleImgSrc="/contentsImages/1/1-4.png"
    />
  );
};

export const Five = ({ topic, pageNum }: { topic: string; pageNum: string }) => {
  // prettier-ignore
  return (
    <ContentsScreen topic = {topic} pageNumber = {pageNum}
      headerString="1. 다이어트 실패는 의지력이 아닌 뇌에 있다?"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          결국 다이어트 실패는 의지력 부족이 아니라
         다이어트 사고방식에 따른 뇌의 불가피한 반응이었던 거야.</pre>
      }
      articleImgSrc="/contentsImages/1/1-5.png"
      width={252}
      height={252}
    />
  );
};

export const Six = ({ topic }: { topic: string }) => {
  // prettier-ignore
  return (
    <ContentsScreen topic = {topic}
      headerString="1. 다이어트 실패는 의지력이 아닌 뇌에 있다?"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          
          따라서 폭식없는 체중감량을 위해선
          가장 먼저, ‘먹으면 안돼’와 같은 
          다이어트 사고방식에서 벗어나야 돼.
        </pre>
      }
      articleImgSrc="/contentsImages/1/1-6.png"
    />
  );
};
