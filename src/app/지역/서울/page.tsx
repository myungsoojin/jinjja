import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "서울 | 진짜",
  description: "서울 진짜 추천. 성수동, 홍대, 을지로, 한남동 등",
};

const areas = [
  { name: "성수동", desc: "힙스터 성지. 카페만 300개. 주말엔 사람 미침.", href: "/지역/서울/성수동", count: 24 },
  { name: "을지로", desc: "뉴트로 술집 골목. 밤에 가야 진짜.", href: "/지역/서울", count: 18 },
  { name: "홍대", desc: "놀이터. 뭐든 있는데 뭘 가야 할지 모르면 여기 봐.", href: "/지역/서울", count: 31 },
  { name: "한남동", desc: "감성 밀집. 갤러리, 카페, 레스토랑 다 있음.", href: "/지역/서울", count: 20 },
  { name: "연남동", desc: "경의선 공원 옆. 주말 산책 코스.", href: "/지역/서울", count: 15 },
  { name: "북촌", desc: "한옥 카페. 평일 오전 추천. 주말엔 사람 너무 많음.", href: "/지역/서울", count: 12 },
];

export default function SeoulPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-12">
        <p className="text-sm text-[#FF6B35] font-semibold mb-3 tracking-widest uppercase">지역 → 서울</p>
        <h1 className="text-4xl font-black mb-4">서울</h1>
        <p className="text-gray-500">가장 많이 갔고 가장 잘 앎. 동네별로 정리해놨음.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {areas.map((area) => (
          <Link
            key={area.name}
            href={area.href}
            className="border border-gray-100 p-6 hover:border-[#FF6B35] hover:shadow-sm transition-all group"
          >
            <div className="flex items-start justify-between mb-3">
              <h2 className="font-black text-xl group-hover:text-[#FF6B35] transition-colors">{area.name}</h2>
              <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1">{area.count}곳</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">{area.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
