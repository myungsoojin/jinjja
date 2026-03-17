import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "진짜 | 진짜만 알려줌",
  description: "관광 가이드가 안 알려주는 진짜 한국. 상황별 여행/맛집/놀거리 큐레이션.",
};

const situations = [
  { emoji: "🌧️", name: "비오는날", desc: "비 맞으며 실망하지 말고", href: "/상황별/비오는날" },
  { emoji: "💑", name: "데이트", desc: "첫 만남부터 100일까지", href: "/상황별/데이트" },
  { emoji: "🚶", name: "혼자갈때", desc: "혼자라서 더 좋은 곳", href: "/상황별/혼자갈때" },
  { emoji: "👨‍👩‍👦", name: "부모님과", desc: "효도 코스, 진심으로", href: "/상황별" },
  { emoji: "💸", name: "가성비", desc: "가격 대비 진짜 잘 나온 곳", href: "/상황별" },
  { emoji: "🌙", name: "야간", desc: "밤에 가야 제맛인 곳", href: "/상황별" },
];

const regions = [
  { name: "성수동", tag: "힙스터 성지", href: "/지역/서울/성수동" },
  { name: "홍대", tag: "놀이터", href: "/지역" },
  { name: "을지로", tag: "뉴트로", href: "/지역" },
  { name: "한남동", tag: "감성 밀집", href: "/지역" },
  { name: "부산", tag: "바다+로컬", href: "/지역" },
  { name: "제주", tag: "섬 라이프", href: "/지역" },
];

const reviews = [
  {
    place: "성수 카페 A",
    region: "성수동",
    review: "인스타 보고 갔다가 실물에 실망. 근데 커피는 진짜 맛있음. 애매함.",
    rating: 3.5,
  },
  {
    place: "을지로 노포 B",
    region: "을지로",
    review: "할머니 혼자 운영하시는데 음식이 미쳤음. 웨이팅 1시간은 기본. 그래도 감.",
    rating: 4.8,
  },
  {
    place: "홍대 바 C",
    region: "홍대",
    review: "분위기로 먹고 사는 곳. 술값 비쌈. 근데 혼술하기엔 진짜 좋음.",
    rating: 3.8,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[#FF6B35] mb-4 tracking-widest uppercase">jinjja.com</p>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-none mb-6">
            진짜만<br />알려줌.
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-10">
            관광 가이드가 안 알려주는 진짜 한국.<br />
            별로면 별로, 좋으면 좋다고 씀.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/상황별"
              className="bg-black text-white px-6 py-3 font-semibold text-sm hover:bg-[#FF6B35] transition-colors"
            >
              상황별 보기
            </Link>
            <Link
              href="/지역"
              className="border border-black px-6 py-3 font-semibold text-sm hover:bg-black hover:text-white transition-colors"
            >
              지역별 보기
            </Link>
          </div>
        </div>
      </section>

      {/* Situations */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-black mb-2">상황별 큐레이션</h2>
          <p className="text-gray-500 mb-10 text-sm">지금 네 상황 골라봐</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {situations.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                className="bg-white border border-gray-100 p-5 hover:border-[#FF6B35] hover:shadow-sm transition-all group"
              >
                <div className="text-3xl mb-3">{s.emoji}</div>
                <div className="font-bold text-sm mb-1 group-hover:text-[#FF6B35] transition-colors">{s.name}</div>
                <div className="text-xs text-gray-400 leading-snug">{s.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-black mb-2">인기 지역</h2>
          <p className="text-gray-500 mb-10 text-sm">어디 갈지 모르겠으면 여기서 시작해</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {regions.map((r) => (
              <Link
                key={r.name}
                href={r.href}
                className="border-b-2 border-gray-100 pb-4 hover:border-[#FF6B35] transition-colors group"
              >
                <div className="font-black text-lg mb-1 group-hover:text-[#FF6B35] transition-colors">{r.name}</div>
                <div className="text-xs text-gray-400">{r.tag}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews preview */}
      <section className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl font-black mb-2">솔직리뷰</h2>
              <p className="text-gray-400 text-sm">포장 없이 씀. 불편하면 안 읽으면 됨.</p>
            </div>
            <Link href="/솔직리뷰" className="text-[#FF6B35] text-sm font-semibold hover:underline">
              전체 보기 →
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {reviews.map((r) => (
              <div key={r.place} className="border border-gray-800 p-6 hover:border-gray-600 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="font-bold mb-1">{r.place}</div>
                    <div className="text-xs text-gray-500">{r.region}</div>
                  </div>
                  <div className="text-[#FF6B35] font-black text-lg">{r.rating}</div>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">{r.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#FF6B35] font-semibold text-sm mb-4 tracking-widest uppercase">진짜만</p>
          <h2 className="text-4xl font-black mb-6">관광 가이드체 없음.</h2>
          <p className="text-gray-500 mb-8">별로면 별로라고 씀. 광고도 없음. 그냥 진짜임.</p>
          <Link
            href="/상황별"
            className="bg-[#FF6B35] text-white px-8 py-4 font-bold hover:bg-black transition-colors inline-block"
          >
            지금 바로 보기
          </Link>
        </div>
      </section>
    </>
  );
}
