import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "성수동 | 진짜",
  description: "성수동 진짜 추천. 힙스터 성지의 진짜배기만 골라놨음.",
};

const places = [
  {
    name: "대림창고",
    category: "카페",
    review: "창고 개조한 곳. 여긴 진짜 분위기 됨. 오리지널이라 다른 데랑 다름.",
    rating: 4.4,
    price: "₩₩",
    tag: "성수 원조",
    tip: "오전 11시 전에 가면 한산함",
  },
  {
    name: "성수연방",
    category: "복합공간",
    review: "공장 개조 복합공간. 여러 브랜드 팝업 항상 있음. 뭔가 항상 바뀜.",
    rating: 4.1,
    price: "₩",
    tag: "구경 필수",
    tip: "인스타 팔로우하고 팝업 일정 확인 추천",
  },
  {
    name: "서울숲 카페거리",
    category: "카페거리",
    review: "서울숲 옆이라 공원 산책 후 카페 가기 딱 좋음. 카페 퀄리티 편차 심함.",
    rating: 3.9,
    price: "₩₩",
    tag: "산책 후 픽",
    tip: "계절마다 분위기 다름",
  },
  {
    name: "어니언 성수",
    category: "베이커리 카페",
    review: "빵 진짜 맛있음. 줄 서도 먹을 만함. 공간도 독특함. 사진 잘 나옴.",
    rating: 4.6,
    price: "₩₩",
    tag: "줄 서도 됨",
    tip: "오픈 직후 or 마감 1시간 전이 그나마 줄 짧음",
  },
  {
    name: "성수 뚝도시장",
    category: "시장",
    review: "진짜 로컬 시장. 관광지 아님. 저렴하고 맛있음. 현지인들이 가는 곳.",
    rating: 4.3,
    price: "₩",
    tag: "로컬 only",
    tip: "오전에만 열림. 주말에도 영업",
  },
];

export default function SeongsuPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-12">
        <p className="text-sm text-[#FF6B35] font-semibold mb-3 tracking-widest uppercase">지역 → 서울 → 성수동</p>
        <h1 className="text-4xl font-black mb-4">
          성수동<span className="text-[#FF6B35]">.</span>
        </h1>
        <p className="text-gray-500 text-lg mb-4">
          힙스터 성지. 카페만 300개 있는데 진짜 갈 만한 곳만 골랐음.
        </p>
        <div className="flex gap-3 text-sm">
          <span className="border border-gray-200 px-3 py-1 text-gray-500">카페 최다</span>
          <span className="border border-gray-200 px-3 py-1 text-gray-500">주말 = 혼잡</span>
          <span className="border border-gray-200 px-3 py-1 text-gray-500">서울숲 인근</span>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {places.map((place) => (
          <div key={place.name} className="border border-gray-100 p-6 hover:shadow-md transition-all">
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="text-xs bg-[#FF6B35] text-white px-2 py-0.5 font-semibold mb-2 inline-block">
                  {place.tag}
                </span>
                <h2 className="font-black text-xl">{place.name}</h2>
              </div>
              <div className="text-right ml-3 shrink-0">
                <div className="font-black text-2xl text-[#FF6B35]">{place.rating}</div>
                <div className="text-xs text-gray-400">/5</div>
              </div>
            </div>

            <div className="flex gap-2 mb-4">
              <span className="text-xs border border-gray-200 px-2 py-1 text-gray-500">{place.category}</span>
              <span className="text-xs border border-gray-200 px-2 py-1 text-gray-500">{place.price}</span>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mb-4">{place.review}</p>

            {place.tip && (
              <div className="bg-gray-50 px-4 py-3 text-xs text-gray-500">
                <strong className="text-black">꿀팁:</strong> {place.tip}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
