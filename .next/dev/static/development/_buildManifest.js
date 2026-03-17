self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/%EC%83%81%ED%99%A9%EB%B3%84",
        "destination": "/situations"
      },
      {
        "source": "/%EC%83%81%ED%99%A9%EB%B3%84/%EB%8D%B0%EC%9D%B4%ED%8A%B8",
        "destination": "/situations/date"
      },
      {
        "source": "/%EC%83%81%ED%99%A9%EB%B3%84/%ED%98%BC%EC%9E%90%EA%B0%88%EB%95%8C",
        "destination": "/situations/alone"
      },
      {
        "source": "/%EC%83%81%ED%99%A9%EB%B3%84/%EB%B9%84%EC%98%A4%EB%8A%94%EB%82%A0",
        "destination": "/situations/rainy"
      },
      {
        "source": "/%EC%A7%80%EC%97%AD",
        "destination": "/regions"
      },
      {
        "source": "/%EC%A7%80%EC%97%AD/%EC%84%9C%EC%9A%B8",
        "destination": "/regions/seoul"
      },
      {
        "source": "/%EC%A7%80%EC%97%AD/%EC%84%9C%EC%9A%B8/%EC%84%B1%EC%88%98%EB%8F%99",
        "destination": "/regions/seoul/seongsu"
      },
      {
        "source": "/%EC%86%94%EC%A7%81%EB%A6%AC%EB%B7%B0",
        "destination": "/reviews"
      }
    ],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()