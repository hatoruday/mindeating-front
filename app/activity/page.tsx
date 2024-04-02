'use client';

import Image from 'next/image';

import { useState } from 'react';

export default function MindFullEating() {
    /**
     * 서버에 보낼 상태를 관리한다.
     */

    const [type, setType] = useState<string[]>([]);
    const [time, setTime] = useState<string>('');
    const [timeAmount, setTimeAmount] = useState<string>(''); //not required
    const [intensity, setIntensity] = useState<number>();
    const [satisfaction, setSatisfaction] = useState<string>(''); //not required
    const [note, setNote] = useState<string>(''); //not required

    const date = new Date();

    /**

* 어떤 활동을 하셨나요?의 상태를 관리한다.

*/

    const typeList = [
        '휴식',
        '걷기',
        '달리기',
        '계단 오르기',
        '필라테스 & 요가',
        '웨이트 근력',
        '홈트레이닝',
        '수영',
        '구기종목',
        '등산',
        '기타',
    ];

    //typeList의 각 요소의 index에 대해 1: 클릭됨 0: 클릭안됨

    const [selectedType, setSelectedType] = useState<number[]>([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]);

    return (
        <div className="flex flex-col">
            <header className="flex relative w-full py-3 justify-center">
                <Image
                    src="/leftChevron.svg"
                    width={8}
                    height={17}
                    alt="leftChevron"
                    className="absolute top-1/2 left-4 transform -translate-y-1/2"
                />

                <div className="flex gap-2">
                    <span className="font-semibold text-[16px]">활동</span>
                </div>
            </header>

            <section className="flex flex-col gap-y-2 py-4">
                <header className="flex px-3 gap-x-3">
                    <Image
                        src="/bookIcon.svg"
                        width={18}
                        height={16}
                        alt="bookIcon"
                    />

                    <span className="font-medium text-black2 text-[14px]">
                        어떤 활동을 하셨나요?
                    </span>
                </header>

                <article className="grid grid-flow-row-dense grid-row-3 grid-col-4">
                    {typeList.map((type, index) => {
                        return (
                            <button
                                key={index}
                                onClick={() => {
                                    let newSelectedType = [...selectedType];

                                    newSelectedType[index] =
                                        1 - newSelectedType[index];

                                    setSelectedType(newSelectedType);
                                }}
                                className={`flex justify-center items-center h-9 relative gap-2.5 px-4 py-2.5 rounded-[56px] border ${
                                    selectedType[index] == 1
                                        ? 'border-green2 bg-green3'
                                        : 'border-black4'
                                }`}
                            >
                                <p className="flex text-sm font-medium text-left text-[#2c2c30]">
                                    {type}
                                </p>
                            </button>
                        );
                    })}

                    <div className="flex justify-center items-center h-9 relative gap-2.5 px-4 py-2.5 rounded-[56px] border border-[#e7e7e7]">
                        <p className="flex text-sm font-medium text-left text-[#2c2c30]">
                            간식류
                        </p>
                    </div>

                    <div className="flex justify-center items-center h-9 relative gap-2.5 px-4 py-2.5 rounded-[56px] border border-[#e7e7e7]">
                        <p className="flex text-sm font-medium text-left text-[#2c2c30]">
                            음료류
                        </p>
                    </div>
                </article>
            </section>
        </div>
    );
}
