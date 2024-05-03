import ContentsScreen from "@/components/contents/contentsScreenUser";

export const One = ({ topic, pageNum, wrapper, preloadedImageURL }: { preloadedImageURL: string[]; topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="5. 점점 체중이 감량되고 있어"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          식욕이 안정화 되었다면 <br />
          먹고 싶은 음식을 먹어도 <br />
          체중이 쉽게 유지가 될 거야. <br />
          자극적인 음식에 대한 갈망도 줄어들지.
          <br />
          <br />
          이렇게 입맛이 리셋되고 식사량이 조절되기 시작하는 순간은, 체중을 감량하기 적합한 시기라고 할 수 있어.
        </pre>
      }
      articleImgSrc={preloadedImageURL[0]}
      width={211}
      height={211}
    />
  );
};

export const Two = ({ topic, pageNum, wrapper, preloadedImageURL }: { preloadedImageURL: string[]; topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="5. 점점 체중이 감량되고 있어"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          그리고 우린 단순히 숫자를 줄이는 것이 <br />
          아니라 요요없는 체중감량을 하기 위해 <br />
          살이 빠지는 몸의 시스템을 만들거야.
          <br />
          <br />
          살이 빠지는 몸의 시스템은 <br />
          어떻게 만들 수 있을까?
          <br />
          <br />
          비결은 바로, 근육세포와 인슐린에 있어.
        </pre>
      }
      articleImgSrc={preloadedImageURL[1]}
    />
  );
};

export const Three = ({ topic, pageNum, wrapper, preloadedImageURL }: { preloadedImageURL: string[]; topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="5. 점점 체중이 감량되고 있어"
      articleHeaderString="근육세포"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          같은 양을 먹어도 누구는 살이 안 찌고 <br />
          누구는 살이 찌는 걸 본 적 있을 거야.
          <br />
          <br />
          이때 살이 안 찌는 경우는 높은 기초대사량으로 가만히만 있어도 에너지가 소모되기 때문이야.
        </pre>
      }
      articleImgSrc={preloadedImageURL[2]}
    />
  );
};
export const Four = ({ topic, pageNum, wrapper, preloadedImageURL }: { preloadedImageURL: string[]; topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="5. 점점 체중이 감량되고 있어"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          따라서 체중을 스트레스 없이 감량하고 유지하기 위해서는 기초대사량을 높여 살이 알아서 빠지도록 만들 필요가 있어.
          <br />
          <br />
          어떻게 높일 수 있을까?
        </pre>
      }
      articleImgSrc={preloadedImageURL[3]}
      width={185}
      height={185}
    />
  );
};

export const Five = ({ topic, pageNum, wrapper, preloadedImageURL }: { preloadedImageURL: string[]; topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="5. 점점 체중이 감량되고 있어"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          기초대사량은 단순히 몸을 많이 움직임으로써 높아질 수도 있지만 가장 효과적인 방법은 근력운동을 하는 거야.
          <br />
          <br />
          근육세포에 있는 단백질은, 과잉 섭취된 에너지가 지방으로 바뀌기 전에 열에너지로 쉽게 전환해서 소모시키기 때문이지.
        </pre>
      }
      articleImgSrc={preloadedImageURL[4]}
      width={186}
      height={186}
    />
  );
};

export const Six = ({ topic, pageNum, wrapper, preloadedImageURL }: { preloadedImageURL: string[]; topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  // prettier-ignore
  return (
    <ContentsScreen
    wrapper={wrapper} topic = {topic} pageNumber = {pageNum}
      headerString="5. 점점 체중이 감량되고 있어"
      articleString={<pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
        따라서 그동안은 즉각적인 칼로리 연소에만 초점을 맞춰 유산소 운동만 했다면 이제는 근력운동에 집중해보는 걸 추천할게! <br/><br/>

다만 주의사항이 있어.<br/>
이미 근력 운동을 하고 있는데 식사량 조절이 안되는 상황이라면, 운동 강박이 식욕 증가에 영향을 미치고 있을 수 있어. 그래서 이때는 운동을 아예 쉬고 일상 활동을 늘려주면서 온전히 식사량을 줄이는데만 집중하는 게 좋아.
      </pre>}
      articleImgSrc={preloadedImageURL[5]}
      width={141}
      height={141}
        
      
    />
  );
};
export const Seven = ({ topic, pageNum, wrapper, preloadedImageURL }: { preloadedImageURL: string[]; topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="5. 점점 체중이 감량되고 있어"
      articleHeaderString="인슐린"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          인슐린은 우리 몸의 혈당 수치를 조절하는 호르몬이야.
          <br />
          <br />
          당이 높은 음식을 먹을 때 몸의 혈당 수치가 너무 높아지지 않도록 조절하는 역할을 하지.
          <br />
          <br />
          그러나 당이 높은 음식을 자주 먹게 되면 인슐린은 고장이 나기 시작해.
        </pre>
      }
      articleImgSrc={preloadedImageURL[6]}
      width={158}
      height={158}
    />
  );
};

export const Eight = ({ topic, pageNum, wrapper, preloadedImageURL }: { preloadedImageURL: string[]; topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="5. 점점 체중이 감량되고 있어"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          이걸 인슐린 저항성이라고 하는데, 인슐린 저항성이 높아지면 우리 몸은 당뇨 상태로 이어지고, 고장난 인슐린은 여분의 당을 지방으로 전환시켜 체중 증가를 야기해.
          <br />
          <br />
          특히 인슐린 저항성은 그 자체로 식욕을 높이기에 당폭식을 야기할 수 있어.
        </pre>
      }
      articleImgSrc={preloadedImageURL[7]}
      width={194}
      height={194}
    />
  );
};
export const Nine = ({ topic, pageNum, wrapper, preloadedImageURL }: { preloadedImageURL: string[]; topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="5. 점점 체중이 감량되고 있어"
      articleImgSrc={preloadedImageURL[8]}
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          따라서, 체중 & 식욕 증가를 막기 위해서는 설탕, 밀, 옥수수, 과당 등이 들어간 인슐린 농도가 높은 음식들을 자연식품으로 대체해서 먹는 것을 습관화해야 해.
          <br />
          <br />
          당이 덜 들어간 자연식품은 <br />
          식욕 호르몬을 분비하지 않거든.
        </pre>
      }
    />
  );
};

export const Ten = ({ topic, pageNum, wrapper, preloadedImageURL }: { preloadedImageURL: string[]; topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      topic={topic}
      pageNumber={pageNum}
      headerString="5. 점점 체중이 감량되고 있어"
      articleImgSrc={preloadedImageURL[9]}
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          식욕이 안정화되어 먹고 싶은 음식이 딱히 없다면, 자연식으로 식사하는 비중을 늘리고 <br />
          <br />
          식욕이 아직 불안정하다면 먹고 싶은 걸 먹되 자연식을 곁들여 먹는 걸 추천할게!
        </pre>
      }
    />
  );
};

export const Eleven = ({ topic, pageNum, wrapper, preloadedImageURL }: { preloadedImageURL: string[]; topic: string; pageNum: string; wrapper: (topic: string) => Promise<void> }) => {
  return (
    <ContentsScreen
      wrapper={wrapper}
      isLast={true}
      topic={topic}
      pageNumber={pageNum}
      headerString="5. 점점 체중이 감량되고 있어"
      articleImgSrc={preloadedImageURL[10]}
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          정리하면, 음식에 대한 욕구를 통제하지 않아도 알아서 살이 빠지는 시스템을 만들기 위해선 근력운동으로 기초대사량을 높이고 식욕을 높이지 않는 자연식품을 섭취하는 비중을 늘려야 돼.
        </pre>
      }
    />
  );
};
