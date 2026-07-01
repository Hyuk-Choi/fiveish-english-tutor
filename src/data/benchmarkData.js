(function () {
  const benchmarkData = {
    conversation: {
      smalltalk: {
        label: "스몰토크 참고 기준",
        wordRange: "12~28 words",
        connectorRange: "1~3 connectors",
        targetSignal: "후속 질문 또는 개인 경험 1개",
        note: "대화 지속력 중심의 내부 기준값",
      },
      cafe: {
        label: "주문 상황 참고 기준",
        wordRange: "8~20 words",
        connectorRange: "0~2 connectors",
        targetSignal: "Could I get / I'd like / Can I have",
        note: "정중하고 짧은 요청 중심의 내부 기준값",
      },
      travel: {
        label: "여행 문제 해결 참고 기준",
        wordRange: "18~36 words",
        connectorRange: "2~4 connectors",
        targetSignal: "문제 설명 + 원하는 해결책",
        note: "문제 해결 명확도 중심의 내부 기준값",
      },
      work: {
        label: "업무 조율 참고 기준",
        wordRange: "18~42 words",
        connectorRange: "2~5 connectors",
        targetSignal: "조건 제시 + 우선순위 제안",
        note: "비즈니스 명확도와 톤 중심의 내부 기준값",
      },
    },
    opic: {
      intermediate: {
        label: "IM 목표 시뮬레이션 기준",
        wordRange: "40~60 words",
        connectorRange: "2~3 connectors",
        detailRange: "2+ concrete details",
        expectedRange: "IM1~IM2",
        note: "짧지만 완성된 답변을 우선하는 내부 루브릭",
      },
      upper: {
        label: "IH 목표 시뮬레이션 기준",
        wordRange: "70~95 words",
        connectorRange: "3~5 connectors",
        detailRange: "3+ concrete details",
        expectedRange: "IM3~IH",
        note: "경험 전개와 문제 해결력을 함께 보는 내부 루브릭",
      },
      advanced: {
        label: "AL 목표 시뮬레이션 기준",
        wordRange: "95~130 words",
        connectorRange: "4~7 connectors",
        detailRange: "4+ concrete details + discourse markers",
        expectedRange: "IH~AL",
        note: "관점, 근거, 반론 전환을 보는 내부 루브릭",
      },
    },
    marketing: {
      ecommerce: {
        label: "이커머스 참고 벤치마크",
        ctr: "1.2%~2.8%",
        cpc: "300원~900원",
        conversionRate: "1.5%~4.0%",
        note: "구매 전환형 캠페인 시뮬레이션 기준",
      },
      beauty: {
        label: "뷰티 참고 벤치마크",
        ctr: "0.8%~2.5%",
        cpc: "400원~1,200원",
        conversionRate: "1.0%~3.5%",
        note: "후기/UGC 소재 반응을 고려한 내부 기준",
      },
      education: {
        label: "교육 참고 벤치마크",
        ctr: "1.0%~3.2%",
        cpc: "500원~1,500원",
        conversionRate: "2.0%~6.0%",
        note: "상담/리드 전환형 캠페인 시뮬레이션 기준",
      },
      "b2b-saas": {
        label: "B2B SaaS 참고 벤치마크",
        ctr: "0.7%~1.8%",
        cpc: "1,200원~4,500원",
        conversionRate: "1.0%~3.0%",
        note: "자료 다운로드/데모 신청 기준의 내부 범위",
      },
      "local-service": {
        label: "로컬 서비스 참고 벤치마크",
        ctr: "1.5%~4.0%",
        cpc: "250원~1,100원",
        conversionRate: "3.0%~9.0%",
        note: "예약/방문 유도형 캠페인 시뮬레이션 기준",
      },
      "app-service": {
        label: "앱 서비스 참고 벤치마크",
        ctr: "0.9%~2.4%",
        cpc: "350원~1,600원",
        conversionRate: "8.0%~22.0% 설치 전환",
        note: "설치 후 첫 행동까지 함께 보는 내부 기준",
      },
      food: {
        label: "식음료 참고 벤치마크",
        ctr: "1.4%~3.8%",
        cpc: "250원~950원",
        conversionRate: "2.5%~7.5%",
        note: "지역/재방문 반응을 고려한 내부 기준",
      },
      healthcare: {
        label: "헬스케어 참고 벤치마크",
        ctr: "0.6%~1.8%",
        cpc: "900원~3,800원",
        conversionRate: "1.2%~4.5%",
        note: "신뢰와 규제 리스크를 반영한 보수적 기준",
      },
      finance: {
        label: "금융/핀테크 참고 벤치마크",
        ctr: "0.5%~1.6%",
        cpc: "1,500원~5,500원",
        conversionRate: "0.8%~3.2%",
        note: "고관여 리드 전환형 내부 기준",
      },
      content: {
        label: "콘텐츠 참고 벤치마크",
        ctr: "1.8%~5.0%",
        cpc: "150원~800원",
        conversionRate: "4.0%~12.0% 참여 전환",
        note: "저장/참여/팔로우 중심의 시뮬레이션 기준",
      },
    },
    scoringBands: {
      high: {
        range: "80~100",
        label: "강점 유지 구간",
        comment: "현재 신호가 목표 기준을 충분히 충족합니다.",
      },
      middle: {
        range: "55~79",
        label: "개선 여지 구간",
        comment: "핵심 방향은 맞지만 한두 가지 보완으로 점수가 안정됩니다.",
      },
      low: {
        range: "0~54",
        label: "우선 개선 구간",
        comment: "입력 정보나 답변 구조가 부족해 일반 제안 비중이 커집니다.",
      },
    },
  };

  window.FiveishBenchmarkData = benchmarkData;
})();
