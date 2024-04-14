import ContentsScreenQR from "@/components/contents/contentsScreenQR";

export const One = ({ topic, pageNum }: { topic: string; pageNum: string }) => {
  return (
    <ContentsScreenQR
      topic={topic}
      pageNumber={pageNum}
      headerString="7. 토끼보다 빨랐던 거북이"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          마지막 에피소드는
          <br />
          이런 걱정을 하는 이들을 위해 준비했어.
        </pre>
      }
      articleImgSrc="/contentsImages/7/7-1.png"
    />
  );
};

export const Two = ({ topic, pageNum }: { topic: string; pageNum: string }) => {
  return (
    <ContentsScreenQR
      topic={topic}
      pageNumber={pageNum}
      headerString="7. 토끼보다 빨랐던 거북이"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          혹시 거북이와 토끼의 달리가 기억나?
          <br />
          <br />
          다들 토끼가 이길 거라 예상했지만 <br />
          거북이가 이긴 이야기지.
          <br />
          <br />왜 토끼가 지고 거북이가 이겼을까?
        </pre>
      }
      articleImgSrc="/contentsImages/7/7-2.png"
    />
  );
};

export const Three = ({ topic, pageNum }: { topic: string; pageNum: string }) => {
  return (
    <ContentsScreenQR
      topic={topic}
      pageNumber={pageNum}
      headerString="7. 토끼보다 빨랐던 거북이"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          이유는 바로, 지속성이야.
          <br />
          <br />
          토끼와 거북이의 방식을 살펴보면, 토끼는 빠르게 가다가 지쳐서 오랫동안 쉬었고 거북이는 자신의 속도로 꾸준하고 일정하게 나아갔어.
          <br />
          <br />
          토끼의 방식은 지속적이지 못했고
          <br />
          거북이의 방식은 지속 가능했지.
        </pre>
      }
      articleImgSrc="/contentsImages/7/7-3.png"
      width={226}
      height={226}
    />
  );
};
export const Four = ({ topic, pageNum }: { topic: string; pageNum: string }) => {
  return (
    <ContentsScreenQR
      topic={topic}
      pageNumber={pageNum}
      headerString="7. 토끼보다 빨랐던 거북이"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          우리의 체중감량도 마찬가지라고 생각해.
          <br />
          <br />
          무작정 숫자만 빠르게 줄이기 위한 토끼의 방식은, 지속 가능하지 못할 뿐더러 오히려 식욕을 올려서 다이어트를 반복하게 만들어. 체중감량 기간이 길어지게 하지.
          <br />
          <br />
          반대로 거북이처럼 지속가능한 방식으로 일정하게 나아가다 보면, 식욕 고장 없이 한 번에 체중 감량할 수 있어. 장기적으로 봤을 땐 체중감량 기간이 토끼보다 짧지.
        </pre>
      }
      articleImgSrc="/contentsImages/7/7-4.png"
      width={139}
      height={139}
    />
  );
};

export const Five = ({ topic, pageNum }: { topic: string; pageNum: string }) => {
  return (
    <ContentsScreenQR
      topic={topic}
      pageNumber={pageNum}
      headerString="7. 토끼보다 빨랐던 거북이"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          그러니 지금 가지고 있는 조급함을 내려놓으면 좋겠어.
          <br />
          <br />
          어쩌면 지금이 우리의 인생을 바꿀 큰 변화일지 모르거든. 왜냐하면 이 과정은 우리의 식욕을 안정화시켜서, 더 건강한 입맛을 갖게 하고, 지속 가능한 체중감량을 위한 기반을 다지는 것이기 때문이야.{" "}
          <br />
          <br />
          살이 찌지 않는 평생의 시스템을 만들어가는 것이라고 할 수 있어.
        </pre>
      }
      articleImgSrc="/contentsImages/7/7-5.png"
    />
  );
};

export const Six = ({ topic, pageNum }: { topic: string; pageNum: string }) => {
  return (
    <ContentsScreenQR
      topic={topic}
      pageNumber={pageNum}
      headerString="7. 토끼보다 빨랐던 거북이"
      articleAfterString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          어쩌면 위의 단계를 모두 거치는 데에, 다소 시간이 걸릴 수 있어. 탈다이어트 단계에서 오래 머물 수도 있고, 식욕안정화 단계에서 오래 머물 수도 있지.
        </pre>
      }
      articleImgSrc="/contentsImages/7/7-6.png"
    />
  );
};

export const Seven = ({ topic, pageNum }: { topic: string; pageNum: string }) => {
  return (
    <ContentsScreenQR
      topic={topic}
      pageNumber={pageNum}
      isLast={true}
      headerString="7. 토끼보다 빨랐던 거북이"
      articleImgSrc="/contentsImages/7/7-7.png"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          다만 이 프로그램이 이끄는 방향으로 계속 실천하고, 스스로를 꾸준히 다독여준다면 분명 해낼 거야.
          <br />
          <br />
          힘들 때나 포기하고 싶을 때, 꼭 찾아줘. <br />
          다이어트가 아닌 인생에서 더 가치있는 것들을 찾아가는 그날까지 함께할게 :)
        </pre>
      }
    />
  );
};
