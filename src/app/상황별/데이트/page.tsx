import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "데이트 갈 만한 곳 | 진짜",
  description: "첫 데이트부터 100일까지, 상황별로 골라놨음.",
};

const places = [
  {
    name: "성수동 루프탑 카페",
    region: "성수동",
    category: "카페",
    review: "여기 분위기로 먹고 사는 곳. 음식은 그냥 그럼. 사진은 잘 나옴.",
    rating: 3.8,
    price: "₩₩",
    tag: "분위기 맛집",
  },
  {
    name: "을지로 이자카야",
    region: "을지로",
    category: "술집",
    review: "웨이팅 30분인데 비 오는 날 가면 바로 들어감. 꿀팁임. 안주 진짜 맛있음.",
    rating: 4.5,
    price: "₩₩₩",
    tag: "꿀팁 있음",
  },
  {
    name: "한남동 갤러리 카페",
    region: "한남동",
    category: "카페",
    review: "사진 찍기 좋은데 실물은 좀 다름. 그래도 데이트로는 합격. 조용함.",
    rating: 3.9,
    price: "₩₩",
    tag: "첫 데이트 추천",
  },
  {
    name: "홍대 분위기 레스토랑",
    region: "홍대",
    category: "레스토랑",
    review: "가격 좀 나가는데 아깝지 않음. 코스 요리 퀄이 진짜. 기념일 추천.",
    rating: 4.7,
    price: "₩₩₩₩",
    tag: "기념일 픽",
  },
  {
    name: "연남동 빈티지 바",
    region: "연남동",
    category: "바",
    review: "칵테일 맛있음. 2차로 딱 좋음. 너무 시끄럽지 않아서 대화 가능.",
    rating: 4.2,
    price: "₩₩₩",
    tag: "2차 추천",
  },
  {
    name: "북촌 한옥 카페",
    region: "북촌",
    category: "카페",
    review: "한복 입고 가면 더 좋음. 주말엔 사람 너무 많음. 평일 오전 추천.",
    rating: 4.0,
    price: "₩₩",
    tag: "인생샷 보장",
  },
  {
    name: "마포 와인바",
    region: "마포",
    category: "바",
    review: "와인 리스트 괜찮음. 사장님이 설명 잘 해줌. 혼자 가도 안 뻘쭘함.",
    rating: 4.4,
    price: "₩₩₩",
    tag: "대화하기 좋음",
  },
];

export default function DatePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-12">
        <p className="text-sm text-[#FF6B35] font-semibold mb-3 tracking-widest uppercase">상황별 → 데이트</p>
        <h1 className="text-4xl font-black mb-4">
          데이트 갈 만한 곳<span className="text-[#FF6B35]">.</span>
        </h1>
        <p className="text-gray-500 text-lg">첫 데이트부터 100일까지, 상황별로 골라놨음.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {places.map((place) => (
          <div
            key={place.name}
            className="border border-gray-100 p-6 hover:shadow-md transition-all hover:border-gray-200"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="text-xs bg-[#FF6B35] text-white px-2 py-0.5 font-semibold mb-2 inline-block">
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

      <div className="mt-12 p-6 bg-gray-50 border-l-4 border-[#FF6B35]">
        <p className="text-sm text-gray-600">
          <strong className="text-black">진짜 주의:</strong> 리뷰는 직접 가보고 씁니다. 광고 없음, 협찬 없음.
          좋은 거만 알려주진 않음.
        </p>
      </div>
    </div>
  );
}
