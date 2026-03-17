import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Korean URLs → English routes
      // %EC%83%81%ED%99%A9%EB%B3%84 = 상황별
      { source: "/%EC%83%81%ED%99%A9%EB%B3%84", destination: "/situations" },
      // %EC%83%81%ED%99%A9%EB%B3%84/%EB%8D%B0%EC%9D%B4%ED%8A%B8 = 상황별/데이트
      { source: "/%EC%83%81%ED%99%A9%EB%B3%84/%EB%8D%B0%EC%9D%B4%ED%8A%B8", destination: "/situations/date" },
      // %EC%83%81%ED%99%A9%EB%B3%84/%ED%98%BC%EC%9E%90%EA%B0%88%EB%95%8C = 상황별/혼자갈때
      { source: "/%EC%83%81%ED%99%A9%EB%B3%84/%ED%98%BC%EC%9E%90%EA%B0%88%EB%95%8C", destination: "/situations/alone" },
      // %EC%83%81%ED%99%A9%EB%B3%84/%EB%B9%84%EC%98%A4%EB%8A%94%EB%82%A0 = 상황별/비오는날
      { source: "/%EC%83%81%ED%99%A9%EB%B3%84/%EB%B9%84%EC%98%A4%EB%8A%94%EB%82%A0", destination: "/situations/rainy" },
      // %EC%A7%80%EC%97%AD = 지역
      { source: "/%EC%A7%80%EC%97%AD", destination: "/regions" },
      // %EC%A7%80%EC%97%AD/%EC%84%9C%EC%9A%B8 = 지역/서울
      { source: "/%EC%A7%80%EC%97%AD/%EC%84%9C%EC%9A%B8", destination: "/regions/seoul" },
      // %EC%A7%80%EC%97%AD/%EC%84%9C%EC%9A%B8/%EC%84%B1%EC%88%98%EB%8F%99 = 지역/서울/성수동
      { source: "/%EC%A7%80%EC%97%AD/%EC%84%9C%EC%9A%B8/%EC%84%B1%EC%88%98%EB%8F%99", destination: "/regions/seoul/seongsu" },
      // %EC%86%94%EC%A7%81%EB%A6%AC%EB%B7%B0 = 솔직리뷰
      { source: "/%EC%86%94%EC%A7%81%EB%A6%AC%EB%B7%B0", destination: "/reviews" },
    ];
  },
};

export default nextConfig;
