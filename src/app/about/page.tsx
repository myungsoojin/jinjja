import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "소개 | 진짜",
  description: "진짜가 뭔지, 왜 만들었는지.",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-12">
        <p className="text-sm text-[#FF6B35] font-semibold mb-3 tracking-widest uppercase">About</p>
        <h1 className="text-4xl font-black mb-4">진짜가 뭔데.</h1>
      </div>

      <div className="prose prose-sm max-w-none space-y-8 text-gray-600 leading-relaxed">
        <section>
          <h2 className="text-xl font-black text-black mb-3">왜 만들었냐면</h2>
          <p>
            여행 정보 찾다가 매번 같은 곳만 나옴. 블로그 열면 광고. 유튜브 열면 협찬.
            유명 맛집 가면 기대 이하. 근데 정작 진짜 좋은 곳은 아는 사람만 앎.
          </p>
          <p className="mt-3">
            그래서 그냥 씁니다. 직접 가보고, 직접 돈 내고, 솔직하게.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-black text-black mb-3">원칙</h2>
          <ul className="space-y-2">
            <li className="flex gap-2">
              <span className="text-[#FF6B35] font-bold shrink-0">01.</span>
              <span>광고 없음. 협찬 없음. 초대 없음.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#FF6B35] font-bold shrink-0">02.</span>
              <span>별로면 별로라고 씀. 좋으면 좋다고 씀.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#FF6B35] font-bold shrink-0">03.</span>
              <span>관광 가이드체 금지. 사람처럼 씀.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#FF6B35] font-bold shrink-0">04.</span>
              <span>상황별로 알려줌. 어디나 다 좋다는 건 거짓말임.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-black text-black mb-3">연락</h2>
          <p>
            좋은 곳 알고 있으면 알려줘도 됨. 직접 가보고 괜찮으면 올라감.{" "}
            <a href="mailto:hello@jinjja.com" className="text-[#FF6B35] underline font-semibold">
              hello@jinjja.com
            </a>
          </p>
        </section>

        <div className="border-t border-gray-100 pt-8 mt-8">
          <p className="text-xs text-gray-400">
            jinjja.com — 진짜만 알려줌. 그게 전부임.
          </p>
        </div>
      </div>
    </div>
  );
}
