import ContentsScreen from "@/components/contents/contentsScreenUser";

export const One = ({ topic, pageNum, wrapper }: { topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="2. 금지를 금지한다. 내 몸의 소리에 집중할래"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          우리는 이제 <br />
          먹고 싶은 음식을 적당히 먹는, <br />
          평생의 습관을 들일 거야.
          <br />
          <br />
          이를 도와주는 직관적 식사 & 마인드풀이팅을 알아볼게.
        </pre>
      }
      articleImgSrc="/contentsImages/2/2-1.png"
      width={220}
      height={220}
    />
  );
};

export const Two = ({ topic, pageNum, wrapper }: { topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="2. 금지를 금지한다. 내 몸의 소리에 집중할래"
      articleHeaderString="직관적 식사 & 마인드풀이팅이란?"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          쉽게 말해 배고픔이 느껴질때, 먹고 싶은 음식으로 식사를 시작하고, 배부를 때 멈추는 것이야.
          <br />
          <br />
          어떤 음식을, 몇 시에, 얼만큼 먹을 건지 미리 정하고 제한하는 다이어트와 다르지.
        </pre>
      }
      articleImgSrc="/contentsImages/2/2-2.png"
      width={185}
      height={185}
    />
  );
};

export const Three = ({ topic, pageNum, wrapper }: { topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="2. 금지를 금지한다. 내 몸의 소리에 집중할래"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          치킨이 먹고 싶다면 치킨을 먹고, 배고픔이 느껴진다면 밤에 먹어도 괜찮아. 배고프지 않으면 먹지 않아도 괜찮지.
        </pre>
      }
      articleImgSrc="/contentsImages/2/2-3.png"
    />
  );
};
export const Four = ({ topic, pageNum, wrapper }: { topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  // prettier-ignore
  return (
    <ContentsScreen
    wrapper = {wrapper} topic = {topic} pageNumber = {pageNum}
      headerString="2. 금지를 금지한다. 내 몸의 소리에 집중할래"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          중요한 건, <br/>
배부름이 느껴질 때 멈춘다는 것이야.<br/><br/>

여기서 배부름이란, 배가 고프지 않는 상태를 말해. 불편하게 꽉 찼다는 느낌이 아니라 적당하고 편안한 포만감이 느껴질 때를 뜻하지.
        </pre>
      }
      articleImgSrc="/contentsImages/2/2-4.png"
    />
  );
};

export const Five = ({ topic, pageNum, wrapper }: { topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  // prettier-ignore
  return (
    <ContentsScreen
    wrapper = {wrapper} topic = {topic} pageNumber = {pageNum}
      headerString="2. 금지를 금지한다. 내 몸의 소리에 집중할래"
      articleHeaderString="편안한 포만감에서 멈추는 8가지 방법"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          아마 지금은 불안정한 식욕으로 편안한 포만감일 때 멈추기 어려울 거야. 편안한 포만감에서 멈추는 8가지 방법을 알려줄게!</pre>
      }
      articleImgSrc="/contentsImages/2/2-5.png"
      
    />
  );
};

export const Six = ({ topic, pageNum, wrapper }: { topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  // prettier-ignore
  return (
    <ContentsScreen
    wrapper = {wrapper} topic = {topic} pageNumber = {pageNum}
      headerString="2. 금지를 금지한다. 내 몸의 소리에 집중할래"
      
      articleImgSrc="/contentsImages/2/2-6.png"
      greyBlockHeader="적당한 배고픔 상태에서 식사 시작하기"
      greyBlockContent={<pre className="font-nanum text-[15px] leading-8 font-black1 whitespace-pre-wrap">
        극심한 배고픔일 때 식사를 시작하면 조급한 마음에 급하게 먹게 돼. 식사를 급하게 하면 식사량과 포만감을 인지하기 쉽지 않지.<br/><br/>

반대로 배가 고프지 않은 상태에서 식사를 시작하면 과식, 폭식으로 이어질 가능성이 높아져. 체중 감량에 방해가 되지.<br/><br/>

따라서 편안한 포만감에서 멈추도록 하기 위해서는 식사량을 잘 인지하게 하는 ‘적당한 배고픔’ 상태일 때 식사를 시작하는 게 좋아.<br/><br/>

만약 식사 시간이 정해져 있는 직장인, 학생이고 식사 전에 극심한 배고픔이 느껴진다면 가벼운 간식이나 물을 섭취하는 걸 추천할게.<br/><br/>
      </pre>}
        
      width={291}
      height={108}  
    />
  );
};
export const Seven = ({ topic, pageNum, wrapper }: { topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="2. 금지를 금지한다. 내 몸의 소리에 집중할래"
      articleImgSrc="/contentsImages/2/2-7.png"
      greyBlockHeader="식전, 식후 물 한 잔하기"
      greyBlockContent={
        <pre className="font-nanum text-[15px] leading-8 font-black1 whitespace-pre-wrap">
          식전 물 한 컵은 배고픔을 누그려뜨리고 식사에 대해 차분한 마음을 가지도록 도와줘. 천천히 식사할 수 있게 되지. <br />
          <br />
          식후 물 한 컵은 뇌에 식사 끝을 인지시켜주면서 포만감을 극대화 시켜주기에 과식, 폭식을 방지할 수 있어.
          <br />
          <br />
          따라서 식전, 식후 물 한 컵을 마시는 습관을 들이면 조급하게 먹는 습관을 개선하고 식사량을 쉽게 줄일 수 있게 될 거야.
          <br />
          <br />
        </pre>
      }
      width={122}
      height={122}
    />
  );
};

export const Eight = ({ topic, pageNum, wrapper }: { topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="2. 금지를 금지한다. 내 몸의 소리에 집중할래"
      articleImgSrc="/contentsImages/2/2-8.png"
      greyBlockHeader="빵, 요거트 같은 간식류 보다 `밥`먹기"
      greyBlockContent={
        <pre className="font-nanum text-[15px] leading-8 font-black1 whitespace-pre-wrap">
          다이어트 사고방식에서 벗어나지 못한 이들은 보통 살찔까봐 밥을 섭취하는 것에 거부감을 가지는 것 같아.
          <br />
          <br />
          그래서 요거트, 빵 등 가벼운 음식으로 배를 채우려고 하지. <br />
          <br />
          하지만 이런 가벼운 음식들은 포만감이 길게 유지되도록 하지 못해. 자꾸 아쉬운 느낌이 들고 음식 생각이 나며 금방 배가 고파지는 것도 바로 이런 이유 때문이야.
          <br />
          <br />
          특히 밥을 먹지 않으면 몸은 나쁜 당들을 원하게 돼. 다이어트 이전보다 빵을 더 좋아하게 되는 것도 바로 이러한 원리 때문이지. 쨌든, 탄수화물 부족으로 나쁜 당을 섭취하게 되면 식욕이 증가하면서 당
          폭식으로 이어지기 쉬워. <br />
          <br />
          그래서 밥으로 구성된 영양가 있는 식사를 해야 해. 이런 식사는 포만감이 오래가도록 돕기에 음식 생각을 덜 나게 하고 배가 금방 고파지지도 않지. 또한 탄수화물을 섭취하기에 당 폭식으로 이어지지도
          않아.
          <br />
          <br />
          그러니 폭식에서 벗어나 체중 감량하고 싶다면 탄수화물, 단백질, 지방 등의 영양소가 골고루 갖춰진 일반식을 섭취해줘. (집밥 추천!)
          <br />
          <br />
          만약 간식이 먹고 싶다면 밥을 먼저 먹고 이후에 섭취해줘! 포만감이 어느정도 채워진 다음에 먹어야 당 폭식에서 벗어날 수 있어.
          <br />
          <br />
        </pre>
      }
      width={122}
      height={122}
    />
  );
};
export const Nine = ({ topic, pageNum, wrapper }: { topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="2. 금지를 금지한다. 내 몸의 소리에 집중할래"
      articleImgSrc="/contentsImages/2/2-9.png"
      greyBlockHeader="맛과 식감을 느끼며 온전히 식사에 집중하기"
      greyBlockContent={
        <pre className="font-nanum text-[15px] leading-8 font-black1 whitespace-pre-wrap">
          영상을 보거나 업무를 하면서 식사를 하면 포만감을 인지하기 쉽지 않기 때문에 무의식중에 식사량이 늘어나.
          <br />
          <br />
          그래서 식사에만 온전히 집중하는 게 필요하지.
          <br />
          <br />
          이때 식사에 온전히 집중하는 방법은, 내가 지금 먹고 있는 음식의 맛과 식감을 천천히 느끼는 거야.
          <br />
          <br />
          음식이 달달한지, 단백한지, 딱딱한지, 부드러운지 느끼면서 먹다보면 뇌는 적은 양을 먹더라도 식사가 풍족했다고 느끼고 식욕 억제 호르몬을 분비하기 때문이야. 그러니 식사를 할 때 어떤 재료가
          들어갔고 그 재료에서는 어떤 맛이 나는 지 집중해서 먹어보자!
          <br />
          <br />
        </pre>
      }
      width={148}
      height={148}
    />
  );
};
export const Ten = ({ topic, pageNum, wrapper }: { topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="2. 금지를 금지한다. 내 몸의 소리에 집중할래"
      articleImgSrc="/contentsImages/2/2-10.png"
      greyBlockHeader="한 끼에 너무 다양한 메뉴 섭취하지 않기"
      greyBlockContent={
        <pre className="font-nanum text-[15px] leading-8 font-black1 whitespace-pre-wrap">
          한 번 먹을 때 너무 다양한 메뉴를 먹게 되면 뇌는 계속 새로운 자극을 느끼게 돼.
          <br />
          <br />
          이 때문에 우리는 음식이 쉽게 질리지 않게 되고 더 많은 음식을 섭취하게 되지.
          <br />
          <br />
          따라서 음식 섭취 욕구를 줄이기 위해서는 먹고 싶은 음식을 1-2가지 메뉴로 한정해서 맛을 느끼는데 집중하는 것이 좋아.
          <br />
          <br />
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
      headerString="2. 금지를 금지한다. 내 몸의 소리에 집중할래"
      articleImgSrc="/contentsImages/2/2-11.png"
      greyBlockHeader="식사 중간에 멈추고 포만감 체크하기"
      greyBlockContent={
        <pre className="font-nanum text-[15px] leading-8 font-black1 whitespace-pre-wrap">
          식사를 했을 때는 몰랐는데 지나고보니 엄청 배불렀던 적이 있을 거야. <br />
          <br />
          그 이유는 뇌가 포만감 호르몬(=식욕억제호르몬)을 분비하기까지 시간이 걸리기 때문이야.
          <br />
          <br />
          그래서 과식, 폭식을 방지하기 위해서는 식사 중간에 포만감을 체크해볼 필요가 있어.
          <br />
          <br />
          체크했을 때 ‘배가 고프지 않은 상태가 되었다’ 싶으면 숟가락을 내려놓는 걸 추천할게!
          <br />
          <br />
          배가 고프지 않은 상태에서 10-20분이 지나면 포만감이 더 크게 느껴질 거거든.
        </pre>
      }
      width={139}
      height={139}
    />
  );
};
export const Twelve = ({ topic, pageNum, wrapper }: { topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="2. 금지를 금지한다. 내 몸의 소리에 집중할래"
      articleImgSrc="/contentsImages/2/2-12.png"
      greyBlockHeader="“다음에 또 먹을 수 있다” 되뇌이기"
      greyBlockContent={
        <pre className="font-nanum text-[15px] leading-8 font-black1 whitespace-pre-wrap">
          “이번까지만 먹고 다음부터 먹지 않겠다”라고 생각한 적이 많을 것 같아. <br />
          <br />
          그러나 사실 이런 마인드가 식사를 멈추기 어렵게 만드는 핵심 요인이야.
          <br />
          <br />
          언제 또 먹을 수 있을지 모르니까 지금 먹어둬야 된다는 생각에 뇌는 식욕 호르몬을 증가시키거든.
          <br />
          <br />
          따라서 뇌가 결핍을 느껴서 식욕을 올리지 않도록 하기 위해서는 뇌에게 “언제든지, 다음에 또 먹을 수 있다”고 얘기를 해줘야 해.
          <br />
          <br />
          그리고 실제로 이제 우리는 배가 고프면 언제든지 또 먹을 수 있어. 그러니 식사 전, 중 ,후로 항상 나에게 말해줘. 다음에 또 먹을 수 있다고
          <br />
          <br />
          그러면 음식에 대한 욕구와 그에 따른 식사량이 줄어들거야.
        </pre>
      }
    />
  );
};
export const Thirteen = ({ topic, pageNum, wrapper }: { topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="2. 금지를 금지한다. 내 몸의 소리에 집중할래"
      articleImgSrc="/contentsImages/2/2-13.png"
      greyBlockHeader="식사 후 식사 자리 바로 정리하기(+식후루틴)"
      greyBlockContent={
        <pre className="font-nanum text-[15px] leading-8 font-black1 whitespace-pre-wrap">
          포만감이 느껴질 때 식사를 멈추기 위해서는 환경을 바꾸는 것도 중요해. 배는 부르나 앞에 음식이 있으면 먹게 될 수 밖에 없거든.
          <br />
          <br />
          이때 중요한 건 적당한 배부름일 때 치워야 한다는 것이야. 배가 과하게 부르면 몸이 무거워져서 더더욱 치우기 어렵고 앞에 음식이 있으니까 더 먹게 되고…악순환이 반복되거든.
          <br />
          <br />
          그러니 배가 어느정도 찼다 싶으면 자리를 정리하고 양치를 하거나 산책을 해서 음식으로부터 주의를 돌리는 게 필요해.
          <br />
          <br />
        </pre>
      }
      width={193}
      height={193}
    />
  );
};
export const Fourteen = ({ topic, pageNum, wrapper }: { topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      isLast={true}
      pageNumber={pageNum}
      topic={topic}
      headerString="2. 금지를 금지한다. 내 몸의 소리에 집중할래"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          총 8가지 방법을 모두 살펴보았어.
          <br />
          이 방법들은 당장 외우지 않아도 괜찮아.
          <br />
          기록일지로 실천하게끔 도와줄거거든.
          <br />
          그러니 기록일지를 작성하며 습관화해보자!
        </pre>
      }
      articleImgSrc="/contentsImages/2/2-14.png"
      width={196}
      height={196}
    />
  );
};
