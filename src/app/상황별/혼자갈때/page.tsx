import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "혼자 갈 때 | 진짜",
  description: "혼자라서 오히려 더 좋은 곳. 뻘쭘함 없음.",
};

const places = [
  {
    name: "을지로 오래된 다방",
    region: "을지로",
    category: "카페",
    review: "혼자 앉아서 책 읽기 딱 좋음. 주인 할머니가 말 안 걸음. 평화로움.",
    rating: 4.6,
    price: "₩",
    tag: "혼자 최적",
  },
  {
    name: "성수 싱글테이블 레스토랑",
    region: "성수동",
    category: "레스토랑",
    review: "1인 테이블만 있음. 혼자 밥 먹어도 안 불쌍해 보임. 음식도 맛있음.",
    rating: 4.3,
    price: "₩₩",
    tag: "1인 전문",
  },
  {
    name: "홍대 공방 카페",
    region: "홍대",
    category: "카페/공방",
    review: "뭔가 만들면서 시간 보내기 좋음. 말 안 해도 됨. 혼자 가도 어색 안 함.",
    rating: 4.1,
    price: "₩₩",
    tag: "시간 때우기",
  },
  {
    name: "마포 독립서점",
    region: "마포",
    category: "서점/카페",
    review: "큐레이션이 진짜. 모르던 책 발견하는 재미 있음. 조용하고 좋음.",
    rating: 4.8,
    price: "₩",
    tag: "책 좋아하면",
  },
  {
    name: "종로 혼술 선술집",
    region: "종로",
    category: "술집",
    review: "혼자 오는 사람들이 더 많음. 카운터 자리에서 마시면 사장님이랑 대화도 됨.",
    rating: 4.2,
    price: "₩₩",
    tag: "혼술 성지",
  },
];

export default function AlonePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-12">
        <p className="text-sm text-[#FF6B35] font-semibold mb-3 tracking-widest uppercase">상황별 → 혼자갈때</p>
        <h1 className="text-4xl font-black mb-4">
          혼자 갈 때<span className="text-[#FF6B35]">.</span>
        </h1>
        <p className="text-gray-500 text-lg">혼자라서 오히려 더 좋은 곳. 뻘쭘함 없음.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {places.map((place) => (
          <div key={place.name} className="border border-gray-100 p-6 hover:shadow-md transition-all hover:border-gray-200">
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="text-xs bg-black text-white px-2 py-0.5 font-semibold mb-2 inline-block">
                  {place.tag}
                </span>
                <h2 className="font-black text-lg leading-tight">{place.name}</h2>
              </div>
              <div className="text-right ml-3 shrink-0">
                <div className="font-black text-xl text-[#FF6B35]">{place.rating}</div>
                <div className="text-xs text-gray-400">/5</div>
              </div>
            </div>

            <div className="flex gap-2 mb-4">
              <span className="text-xs border border-gray-200 px-2 py-1 text-gray-500">{place.region}</span>
              <span className="text-xs border border-gray-200 px-2 py-1 text-gray-500">{place.category}</span>
              <span className="text-xs border border-gray-200 px-2 py-1 text-gray-500">{place.price}</span>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">{place.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
