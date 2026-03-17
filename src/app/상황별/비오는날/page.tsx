import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "비오는날 갈 곳 | 진짜",
  description: "비 맞으며 실망하지 말고. 실내 위주로 골랐음.",
};

const places = [
  {
    name: "을지로 지하 갤러리바",
    region: "을지로",
    category: "바/갤러리",
    review: "비 오면 더 분위기 남. 지하라 비 소리 들리고 좋음. 칵테일도 괜찮음.",
    rating: 4.5,
    price: "₩₩₩",
    tag: "비오는날 픽",
  },
  {
    name: "종로 오래된 책방",
    region: "종로",
    category: "서점",
    review: "비 오는 날 여기 와서 책 고르면 시간이 사라짐. 가격도 착함.",
    rating: 4.7,
    price: "₩",
    tag: "비 = 여기",
  },
  {
    name: "성수 실내 수영장 카페",
    region: "성수동",
    category: "카페",
    review: "수영장 뷰 카페임. 비 와도 따뜻하고 좋음. 주말엔 웨이팅 각오.",
    rating: 4.0,
    price: "₩₩",
    tag: "실내 뷰맛",
  },
  {
    name: "마포 목욕탕 카페",
    region: "마포",
    category: "카페",
    review: "옛날 목욕탕을 개조함. 독특한 분위기. 비 오는 날 더 감성 폭발.",
    rating: 4.3,
    price: "₩₩",
    tag: "독특함 보장",
  },
];

export default function RainyDayPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-12">
        <p className="text-sm text-[#FF6B35] font-semibold mb-3 tracking-widest uppercase">상황별 → 비오는날</p>
        <h1 className="text-4xl font-black mb-4">
          비오는날 갈 곳<span className="text-[#FF6B35]">.</span>
        </h1>
        <p className="text-gray-500 text-lg">비 맞으며 실망하지 말고. 실내 위주로 골랐음.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {places.map((place) => (
          <div key={place.name} className="border border-gray-100 p-6 hover:shadow-md transition-all hover:border-gray-200">
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="text-xs bg-blue-600 text-white px-2 py-0.5 font-semibold mb-2 inline-block">
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
