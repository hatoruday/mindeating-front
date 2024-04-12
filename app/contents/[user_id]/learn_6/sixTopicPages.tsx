import ContentsScreen from "@/components/contents/contentsScreenUser";

export const One = ({ topic, pageNum, wrapper }: { topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="6. 요요없는 체중감량의 비결은 정체기?"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          기존에는 정체기를 <br />
          안 좋은 거라 생각했을 것 같아. <br />
          하지만 ‘이 개념’을 알면 요요없는 체중감량을 위해서는 인위적인 정체기가 필요하다는 걸 깨닫게 될 거야.
        </pre>
      }
      articleImgSrc="/contentsImages/6/6-1.png"
      width={184}
      height={184}
    />
  );
};

export const Two = ({ topic, pageNum, wrapper }: { topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="6. 요요없는 체중감량의 비결은 정체기?"
      articleHeaderString="핵심은 정체기야!"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          저번에 자연체중에 대해 얘기했던 거 기억나? 그것과 비슷한 개념의 또 다른 게 있어.
          <br />
          <br />
          그건 바로 ‘체중설정값’으로, 우리 뇌가 설정한 적정체중 범위나 지점이야.
        </pre>
      }
      articleImgSrc="/contentsImages/6/6-2.png"
    />
  );
};

export const Three = ({ topic, pageNum, wrapper }: { topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="6. 요요없는 체중감량의 비결은 정체기?"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          자연체중은 생활습관에 의해 쉽게 변할 수 있는 반면 체중설정값은 뇌가 ‘적응’을 한 체중이기에 자연체중에 비해 변하기 쉽지 않다는 차이점을 가지고 있어.
          <br />
          <br />
          (어렵다면 이해하지 않아도 괜찮아)
        </pre>
      }
      articleImgSrc="/contentsImages/6/6-3.png"
      width={226}
      height={226}
    />
  );
};
export const Four = ({ topic, pageNum, wrapper }: { topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="6. 요요없는 체중감량의 비결은 정체기?"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          이는 우리 몸이 항상 일정한 상태로 <br />
          유지하려는 항상성을 가지고 있기 때문으로, <br />
          <br />
          현재 체중이 체중설정값에서 벗어나면 우리 뇌는 식욕호르몬과 기초대사량을 이용해서 체중을 체중설정값으로 돌려놔.
          <br />
          <br />
          예를 들어볼게.
        </pre>
      }
      articleImgSrc="/contentsImages/6/6-4.png"
      width={185}
      height={185}
    />
  );
};

export const Five = ({ topic, pageNum, wrapper }: { topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="6. 요요없는 체중감량의 비결은 정체기?"
      articleAfterString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          <span className="text-[#2091FB] font-bold">
            체중설정값보다 <br />
            체중이 일시적으로 높아지면{" "}
          </span>
          <br />
          <br />
          뇌는 식욕 ‘억제’ 호르몬을 분비하고 <br />
          기초대사량을 높여서 원래의 체중설정값으로 체중을 돌려 놓으려 하고
        </pre>
      }
      articleImgSrc="/contentsImages/6/6-5.png"
    />
  );
};

export const Six = ({ topic, pageNum, wrapper }: { topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  // prettier-ignore
  return (
    <ContentsScreen
    wrapper={wrapper} topic = {topic} pageNumber = {pageNum}
      headerString="6. 요요없는 체중감량의 비결은 정체기?"
      articleAfterString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          <span className="text-[#FE530B] font-bold">
            체중설정값보다 <br />
            체중이 일시적으로 낮아지면{" "}
          </span>
          <br />
          <br />
          뇌는 식욕 호르몬을 분비하고 <br />
기초대사량을 낮춰서 원래의 체중설정값으로 체중을 돌려놓으려 하지.
        </pre>
      }
      articleImgSrc="/contentsImages/6/6-6.png"
    />
  );
};
export const Seven = ({ topic, pageNum, wrapper }: { topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="6. 요요없는 체중감량의 비결은 정체기?"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          그래서 진짜 체중 감량을 하려면 단순히 숫자를 줄이는 게 아니라 뇌가 인지하고 적응한 체중설정값을 바꿔야 해. <br />
          <br />
          어떻게 체중설정값을 낮출 수 있을까?
          <br />
          <br />
          정답은 바로, 정체기야.
        </pre>
      }
      articleImgSrc="/contentsImages/6/6-7.png"
      width={191}
      height={191}
    />
  );
};

export const Eight = ({ topic, pageNum, wrapper }: { topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="6. 요요없는 체중감량의 비결은 정체기?"
      articleHeaderString="정체기가 체중설정값을 낮춘다고?"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          앞서 말했듯이 체중설정값은 뇌가 적정하다고 느껴서 ‘적응’된 체중을 말해.
          <br />
          <br />
          따라서 체중설정값을 낮추기 위해서는 <br />
          감량 후 뇌가 감량된 체중에 적응하도록 <br />
          시간을 줄 필요가 있지.
        </pre>
      }
      articleImgSrc="/contentsImages/6/6-8.png"
      width={187}
      height={187}
    />
  );
};
export const Nine = ({ topic, pageNum, wrapper }: { topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="6. 요요없는 체중감량의 비결은 정체기?"
      articleImgSrc="/contentsImages/6/6-9.png"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          이것이 바로 인위적인 정체기로, <br />
          예를 들면 일주일 동안 1kg 감량하고 일주일 동안 감량된 체중을 유지하면서 몸의 대사나 호르몬을 감량된 체중에 적응시키는 것이야.
        </pre>
      }
      width={248}
      height={217}
    />
  );
};

export const Ten = ({ topic, pageNum, wrapper }: { topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="6. 요요없는 체중감량의 비결은 정체기?"
      articleImgSrc="/contentsImages/6/6-10.png"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          이 감량기와 유지기의 적합한 주기와 <br />
          감량 정도는 사람마다 다 달라. <br />
          <br />
          특히 체중이 낮아질수록, 감량기와 유지기의 주기가 길어질 수도 있지.
          <br />
          <br />
          하지만 무작정 감량만 하기보다 감량과 유지를 반복하며 몸에 적응을 시켜나간다면 요요의 빈도나 정도가 줄어들거야 :)
        </pre>
      }
      width={183}
      height={183}
    />
  );
};

export const Eleven = ({ topic, pageNum, wrapper }: { topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      isLast={true}
      headerString="6. 요요없는 체중감량의 비결은 정체기?"
      articleImgSrc="/contentsImages/6/6-11.png"
      articleHeaderString="중간에 폭식하면 어떡해?"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          체중설정값이 낮아졌다면 일시적으로 폭식을 하더라도 다시 낮아진 체중설정값으로 돌아오기에 너무 걱정하지 않아도 돼.
          <br />
          <br />
          다만 잦은 폭식에서 벗어나지 못한 상태라면 식욕을 안정화 시키고 난 후에 인위적인 정체기로 체중을 감량해줘!
        </pre>
      }
    />
  );
};
