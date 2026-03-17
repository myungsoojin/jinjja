import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "지역별 보기 | 진짜",
  description: "서울, 부산, 제주 등 지역별 진짜 추천",
};

const regions = [
  {
    city: "서울",
    areas: [
      { name: "성수동", desc: "힙스터 성지. 카페만 300개.", href: "/지역/서울/성수동" },
      { name: "을지로", desc: "뉴트로 술집 골목. 밤에 가야 함.", href: "/지역/서울" },
      { name: "홍대", desc: "놀이터. 뭐든 있음.", href: "/지역/서울" },
      { name: "한남동", desc: "감성 밀집 구역.", href: "/지역/서울" },
      { name: "연남동", desc: "공원 옆 조용한 동네", href: "/지역/서울" },
      { name: "북촌", desc: "한옥. 평일 추천.", href: "/지역/서울" },
    ],
  },
  {
    city: "부산",
    areas: [
      { name: "해운대", desc: "바다 + 클럽. 여름 한정.", href: "/지역" },
      { name: "광안리", desc: "야경 미침.", href: "/지역" },
      { name: "남포동", desc: "로컬 맛집 밀집.", href: "/지역" },
    ],
  },
  {
    city: "제주",
    areas: [
      { name: "제주시", desc: "시내. 의외로 볼 거 많음.", href: "/지역" },
      { name: "서귀포", desc: "한라산 뷰. 조용함.", href: "/지역" },
      { name: "애월", desc: "카페 거리. 뷰 맛집.", href: "/지역" },
    ],
  },
];

export default function RegionsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-12">
        <p className="text-sm text-[#FF6B35] font-semibold mb-3 tracking-widest uppercase">Regions</p>
        <h1 className="text-4xl font-black mb-4">지역별 보기</h1>
        <p className="text-gray-500">어디 갈지 정해졌으면 여기서 찾아봐.</p>
      </div>

      <div className="space-y-12">
        {regions.map((region) => (
          <div key={region.city}>
            <h2 className="text-2xl font-black mb-6 pb-4 border-b border-gray-100">
              {region.city}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {region.areas.map((area) => (
                <Link
                  key={area.name}
                  href={area.href}
                  className="border border-gray-100 p-5 hover:border-[#FF6B35] transition-colors group"
                >
                  <h3 className="font-black text-lg mb-1 group-hover:text-[#FF6B35] transition-colors">{area.name}</h3>
                  <p className="text-sm text-gray-500">{area.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
