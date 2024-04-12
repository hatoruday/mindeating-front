import ContentsScreen from "@/components/contents/contentsScreenUser";

export const One = ({ topic, pageNum, wrapper }: { topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="4. 음식에 집착하던 내가 아니야!"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          식욕을 빠르게 안정화하기 위해선 <br />
          3가지 호르몬을 잘 다뤄야해. <br />
          이 3가지 호르몬은 <br />
          바로 렙틴, 코르티솔, 옥시토신이야.
        </pre>
      }
      articleImgSrc="/contentsImages/4/4-1.png"
    />
  );
};

export const Two = ({ topic, pageNum, wrapper }: { topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="4. 음식에 집착하던 내가 아니야!"
      articleHeaderString="식욕 억제 호르몬, 렙틴"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          렙틴은 포만감을 유발하고 식욕을 억제하는 호르몬이야. 렙틴의 신호가 뇌에 잘 전달되면, 포만감을 잘 느낄 수 있기에 적정량으로 식사를 마칠 수 있어.
          <br />
          <br />
          렙틴을 분비시키려면 어떻게 해야 할까?
        </pre>
      }
      articleImgSrc="/contentsImages/4/4-2.png"
      width={165}
      height={165}
    />
  );
};

export const Three = ({ topic, pageNum, wrapper }: { topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="4. 음식에 집착하던 내가 아니야!"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          바로 6-7시간 이상의 충분한 ‘수면’이야.
          <br />
          수면이 부족해지면 식욕 억제 호르몬인 렙틴의 분비는 줄어들고 식욕호르몬인 그렐린이 분비돼. 이 때문에 식욕이 증가하지. <br />
          <br />
          특히나 몽롱한 상태에서의 식사는 식사량을 잘 인지하지 못하게 만들기에 무의식적으로 식사량이 늘어나. 따라서 식욕을 감소시키기 위해서는 6-7시간 이상의 수면이 필요해.
        </pre>
      }
      articleImgSrc="/contentsImages/4/4-3.png"
      width={182}
      height={182}
    />
  );
};
export const Four = ({ topic, pageNum, wrapper }: { topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="4. 음식에 집착하던 내가 아니야!"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          추가로 알려주자면, 밤에 식사를 해도 괜찮지만 취침 3시간 전의 식사는 수면의 질을 방해해서 다음 날의 식욕에 영향을 미쳐. 그러니 밤에 배고프지 않도록 저녁을 포만감있게 먹고 밤에 운동하는 것을
          피해줘.
        </pre>
      }
      articleImgSrc="/contentsImages/4/4-4.png"
    />
  );
};

export const Five = ({ topic, pageNum, wrapper }: { topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="4. 음식에 집착하던 내가 아니야!"
      articleHeaderString="스트레스 호르몬, 코르티솔"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          코르티솔은 스트레스 호르몬으로, 신체적 & 정신적 스트레스를 받을 때 분비돼. 이때 이 코르티솔이 분비가 되면 식욕 호르몬도 증가하기 때문에 우리는 코르티솔이 최대한 분비되지 않도록 해야 돼.
          <br />
          <br />
          어떻게 하면 코르티솔의 분비를 막을 수 있을까?
        </pre>
      }
      articleImgSrc="/contentsImages/4/4-5.png"
      width={162}
      height={162}
    />
  );
};

export const Six = ({ topic, pageNum, wrapper }: { topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  // prettier-ignore
  return (
    <ContentsScreen
    wrapper = {wrapper} topic = {topic} pageNumber = {pageNum}
      headerString="4. 음식에 집착하던 내가 아니야!"
      articleString={<pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
        첫째, 운동을 가볍고 꾸준하게, 즐겁게 하기<br/><br/>

아마 그동안의 운동은 칼로리 소모를 목적으로 과도하게 해왔을 것 같아. 그러나 이런 과도한 운동은 오히려 신체적, 정신적 스트레스를 야기해서 식욕을 높이기도 하지. <br/><br/>

반대로 아예 몸을 움직이지 않는 경우도 있어. 이런 경우에는 스트레스가 해소되지 못하고 몸에 누적되기 때문에 이 역시 식욕이 증가해.
      </pre>}
      articleImgSrc="/contentsImages/4/4-6.png"
      width={167}
      height={167}
        
      
    />
  );
};
export const Seven = ({ topic, pageNum, wrapper }: { topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="4. 음식에 집착하던 내가 아니야!"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          따라서 칼로리 소모를 목적으로 하는 것이 아닌 스트레스 해소를 위해, 부족하지도 않고 과하지도 않은 적당한 선에서의 운동이 필요해.
          <br />
          <br />
          그런 의미에서 지금 자리에서 일어나 스쿼트 10개 만이라도 해볼까? 나가서 친구와 배드민턴을 치거나 대청소를 해보는 것도 좋아. 이렇게 쉽지만 꾸준히 할 수 있고, 스트레스를 해소할 수 있는 나만의
          운동루틴을 찾아보자!
        </pre>
      }
      articleImgSrc="/contentsImages/4/4-7.png"
      width={149}
      height={149}
    />
  );
};

export const Eight = ({ topic, pageNum, wrapper }: { topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="4. 음식에 집착하던 내가 아니야!"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          둘째, 주변 환경 항상 정돈하기
          <br />
          <br />
          우리는 환경으로부터 영향을 많이 받아. 이때 우리 주변이 지저분하면 우리 뇌는 무의식 중에 스트레스를 받게 되지. 이로 인해 코르티솔이 분비되고 식욕호르몬이 증가되면서 폭식할 가능성이 높아져.
          <br />
          <br />
          따라서 항상 주변 환경을 정돈해야 폭식의 위험으로부터 멀어질 수 있어.
        </pre>
      }
      articleImgSrc="/contentsImages/4/4-8.png"
      width={151}
      height={151}
    />
  );
};
export const Nine = ({ topic, pageNum, wrapper }: { topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="4. 음식에 집착하던 내가 아니야!"
      articleImgSrc="/contentsImages/4/4-9.png"
      articleHeaderString="행복한 호르몬, 옥시토신"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          옥시토신은 사랑 호르몬이야.
          <br />
          <br />
          체중 감량에 웬 사랑 호르몬인가 싶겠지만 이미 많은 연구에서 옥시토신이 분비되면 식욕이 줄어든다고 증명해냈어.
          <br />
          <br />그 이유가 뭘까?
        </pre>
      }
      width={190}
      height={190}
    />
  );
};

export const Ten = ({ topic, pageNum, wrapper }: { topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="4. 음식에 집착하던 내가 아니야!"
      articleImgSrc="/contentsImages/4/4-10.png"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          우리가 사랑을 할 때 분비되는 옥시토신은 <br />
          식욕을 유발하는 ‘스트레스’와 ‘불안’을 <br />
          사라지게 하고 심리적 허기를 채워줘.
          <br />
          <br />
          <br />이 때문에 배고프지 않아도 계속 음식을 찾게 되는 ‘감정적 폭식’을 하지 않을 수 있지.
        </pre>
      }
    />
  );
};

export const Eleven = ({ topic, pageNum, wrapper }: { topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="4. 음식에 집착하던 내가 아니야!"
      articleImgSrc="/contentsImages/4/4-11.png"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          강아지도 좋고 취미생활, 업무도 좋아. 내가 진심으로 사랑하는 것들을 찾아가다보면 식욕을 감소시킬 수 있을거야.
          <br />
          <br />
          이외에도 포옹, 기분 좋은 신체 접촉, 긍정적인 사회 활동은 옥시토신 분비를 촉진시키니 집에 혼자 있는 경우가 많다면 얼른 나와서 사람들과 어울려보자~
        </pre>
      }
      width={209}
      height={209}
    />
  );
};
export const Twelve = ({ topic, pageNum, wrapper }: { topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      isLast={true}
      topic={topic}
      pageNumber={pageNum}
      headerString="4. 음식에 집착하던 내가 아니야!"
      articleImgSrc="/contentsImages/4/4-12.png"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          정리하면, 식욕안정화의 속도를 높이기 위해서는 충분한 잠과 적당한 운동, 그리고 내가 사랑하는 것들로 내 일상을 채워야 해.
          <br />
          <br />
          다이어트로 방치해두었던 우리의 일상을 풍요롭게 하다보면 어느새 긍정적으로 달라지고 있는 자신을 발견하게 될 거야.
        </pre>
      }
      width={209}
      height={209}
    />
  );
};
