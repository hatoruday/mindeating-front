import ContentsScreenQR from "@/components/contents/contentsScreenQR";

export const One = ({ topic, pageNum }: { topic: string; pageNum: string }) => {
  return (
    <ContentsScreenQR
      topic={topic}
      pageNumber={pageNum}
      headerString="3. 일반식을 먹었다가 살이 찌면 어쩌지?"
      articleHeaderString="그건 일시적인 변화일 뿐이야!"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          자연체중이란 게 있어.
          <br />
          <br />
          이는 다이어트나 운동 등 등 인위적인 조절을 하지 않았을 때 자연스럽게 유지되는 체중을 말하지.
        </pre>
      }
    />
  );
};

export const Two = ({ topic, pageNum }: { topic: string; pageNum: string }) => {
  return (
    <ContentsScreenQR
      topic={topic}
      pageNumber={pageNum}
      headerString="3. 일반식을 먹었다가 살이 찌면 어쩌지?"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          만약 현재 체중이 다이어트나 운동으로 인해 자연체중보다 낮은 상태라면 일반식을 먹을 때 자연체중으로 돌아오면서 살이 찔 수 있어.
        </pre>
      }
      articleImgSrc="/contentsImages/3/3-2.png"
      width={239}
      height={239}
    />
  );
};

export const Three = ({ topic, pageNum }: { topic: string; pageNum: string }) => {
  return (
    <ContentsScreenQR
      topic={topic}
      pageNumber={pageNum}
      headerString="3. 일반식을 먹었다가 살이 찌면 어쩌지?"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          하지만 걱정하지 않아도 돼! <br />
          그건 일시적인 변화이기 때문이지. <br />
          <br />
          자연체중은 변하는 것이라, 식욕이 안정화 되어서 식사량을 조절하는 습관이 만들어지면 알아서 자연체중도 줄어들거든.
        </pre>
      }
      articleImgSrc="/contentsImages/3/3-3.png"
      width={203}
      height={203}
    />
  );
};
export const Four = ({ topic, pageNum }: { topic: string; pageNum: string }) => {
  // prettier-ignore
  return (
    <ContentsScreenQR topic = {topic} pageNumber = {pageNum}
      headerString="3. 일반식을 먹었다가 살이 찌면 어쩌지?"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          따라서 지금은 숫자에 집착하기 보다 다이어트 강박에서 벗어나 식욕 안정화에 집중하는 게 필요해. <br/><br/>

(식욕이 너무 불안정한 사람이라면 체중계를 버리는 걸 추천할게)
        </pre>
      }
      articleImgSrc="/contentsImages/3/3-4.png"
      width={289}
      height={289}
    />
  );
};

export const Five = ({ topic, pageNum }: { topic: string; pageNum: string }) => {
  // prettier-ignore
  return (
    <ContentsScreenQR topic = {topic} pageNumber = {pageNum}
      headerString="3. 일반식을 먹었다가 살이 찌면 어쩌지?"
      articleHeaderString="자연체중은 얼마만에 줄어들까?"
      articleString={
        <pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
          이건 가지고 있던 다이어트 강박의 정도나 식욕의 상태, 대사량과 같은 몸의 특성에 따라 다 다를 수 있어. <br/><br/>

강박이 낮고 식욕이 안정화된 사람이라면 쉽게 체중이 감량될 수 있는 반면, <br/><br/>

강박이 높고 식욕이 불안정한 사람이라면 식욕을 안정화시키는 데 시간이 걸리기에 체중감량까지 시간이 걸릴 수 있거든.</pre>
      }
      articleImgSrc="/contentsImages/3/3-5.png"
      width={120}
      height={120}
    />
  );
};

export const Six = ({ topic, pageNum }: { topic: string; pageNum: string }) => {
  // prettier-ignore
  return (
    <ContentsScreenQR topic = {topic}
      isLast = {true}
    pageNumber={pageNum}
      headerString="3. 일반식을 먹었다가 살이 찌면 어쩌지?"
      articleString={<pre className="font-nanum text-[18px] leading-10 font-black1 whitespace-pre-wrap">
        하지만 그렇다고 다시 다이어트로 돌아가면 결국 악순환은 더 심해질거야.<br/><br/>

그러니 조급한 마음을 내려두고 식욕을 빠르게 안정화시키는 쪽으로 내 라이프 스타일을 바꿔보자!
      </pre>}
      articleImgSrc="/contentsImages/3/3-6.png"
      
        
      
    />
  );
};
