(function () {
  const copyTemplates = {
    summary: {
      high: [
        "현재 입력값 기준으로 보면 핵심 의도와 실행 방향이 모두 분명해, 다음 단계는 표현을 더 자연스럽게 다듬는 쪽이 적합합니다.",
        "답변의 중심이 안정적으로 잡혀 있습니다. 지금은 큰 구조를 바꾸기보다 실전에서 바로 쓰일 표현 밀도를 높이는 단계입니다.",
        "기준값과 비교했을 때 강점 신호가 뚜렷합니다. 다음 연습은 약한 지표 하나만 고정해 정밀하게 개선하는 편이 효율적입니다.",
        "현재 결과는 목표 상황에 잘 맞습니다. 같은 구조를 유지하면서 구체 예시와 톤 조절을 더하면 완성도가 올라갑니다.",
        "입력된 답변은 충분한 판단 근거를 제공합니다. 분석 결과상 가장 큰 과제는 새로운 내용을 더하기보다 안정성을 유지하는 것입니다.",
      ],
      middle: [
        "현재 입력값 기준으로 보면 방향은 맞지만, 사용자가 즉시 반응할 만한 핵심 신호가 조금 더 선명해질 필요가 있습니다.",
        "답변 자체는 기능하지만 길이, 연결, 구체성 중 하나가 약해 결과 신뢰도가 중간 수준에 머뭅니다.",
        "기본 구조는 잡혀 있으나 목표 표현이나 예시가 더해지면 실전 활용성이 크게 높아질 수 있습니다.",
        "지금은 전면 수정이 필요한 상태라기보다, 가장 낮은 지표 하나를 집중적으로 보완하는 단계입니다.",
        "입력 정보가 어느 정도 충분해 기본 판단은 가능하지만, 더 구체적인 답변이 들어오면 추천이 훨씬 정밀해집니다.",
      ],
      low: [
        "현재 입력값만으로는 세밀한 판단이 어렵기 때문에, 결과는 일반적인 개선 방향과 안전한 연습 전략 위주로 구성했습니다.",
        "핵심 의도는 일부 보이지만 답변 신호가 부족해 목표 기준과의 차이를 크게 잡아야 합니다.",
        "지금 단계에서는 자연스러운 표현보다 먼저 답변 길이와 기본 구조를 확보하는 것이 우선입니다.",
        "입력 정보가 제한적이어서 분석 신뢰도는 낮습니다. 다음에는 이유, 예시, 목표 표현 중 하나를 추가해 주세요.",
        "현재 결과는 출발점으로 보는 것이 적절합니다. 짧은 답변을 한두 문장 확장하는 것만으로도 분석 품질이 좋아집니다.",
      ],
    },
    marketingSummary: {
      high: [
        "현재 입력값 기준으로 목표, 타깃, 채널의 방향이 비교적 선명합니다. 다음 단계는 메시지와 CTA를 더 좁혀 실제 전환 지점을 검증하는 것입니다.",
        "전략의 큰 방향은 안정적입니다. 지금은 채널을 늘리기보다 가장 반응 가능성이 높은 세그먼트와 메시지를 정밀하게 테스트하는 단계입니다.",
        "업종과 목표의 연결은 좋지만, 성과를 더 안정적으로 보려면 증거 요소와 행동 버튼을 한 화면 안에서 명확히 배치해야 합니다.",
        "현재 조건에서는 실행 가능성이 충분합니다. 다만 성과 판단을 위해 1차 지표와 보조 지표를 먼저 고정하는 것이 좋습니다.",
        "입력값이 충분해 구체적인 전략 판단이 가능합니다. 우선순위는 신규 아이디어 추가보다 전환 경로의 마찰을 줄이는 쪽입니다.",
      ],
      middle: [
        "현재 입력값 기준으로 방향은 잡혀 있지만, 타깃과 메시지 중 하나가 더 구체화되어야 실행 전략의 정확도가 올라갑니다.",
        "성과를 만들 수 있는 단서는 보이지만, 채널 역할과 CTA가 더 명확해져야 테스트 결과를 해석하기 쉽습니다.",
        "지금은 전체 캠페인을 크게 바꾸기보다 가장 약한 지표 하나를 기준으로 메시지 가설을 나눠 검증하는 단계입니다.",
        "업종과 목표는 연결되어 있으나, 사용자가 즉시 행동할 만한 증거와 혜택 표현이 조금 더 필요합니다.",
        "기본 판단은 가능하지만 예산, 채널, 현재 문제의 구체성이 더해지면 추천 우선순위가 훨씬 정밀해집니다.",
      ],
      low: [
        "입력 정보가 부족해 세부 전략을 단정하기 어렵습니다. 현재 결과는 일반적인 개선 방향과 보완 질문 중심으로 해석하는 것이 적절합니다.",
        "목표와 실행 조건 사이의 정보가 충분하지 않아 신뢰도는 낮게 산정했습니다. 먼저 타깃, 예산, 현재 문제를 구체화해야 합니다.",
        "지금 단계에서는 캠페인 실행보다 분석에 필요한 기본 입력값을 채우는 것이 우선입니다.",
        "현재 입력값만으로는 채널 우선순위를 강하게 판단하기 어렵습니다. 예산과 타깃 정보를 보완하면 결과가 더 실용적으로 바뀝니다.",
        "전략 제안은 가능하지만 근거가 제한적입니다. 실제 집행 전 문제 상황과 핵심 제안을 더 구체적으로 정리해야 합니다.",
      ],
    },
    generatedCopy: {
      conversation: [
        "Not gonna lie, I think it sounds useful because it saves time.",
        "The thing is, I need one more detail before I can decide.",
        "Given the deadline, I think we should focus on the most urgent part first.",
        "Could I get a little more time to think about that?",
        "To be honest, I'm not completely sure, but I would choose the first option.",
      ],
      opic: [
        "I would say it depends on the situation, but in my case, it was a memorable experience.",
        "At first, I did not expect much. After that, something changed, and I learned a lot from it.",
        "The main reason is that it is practical and easy to do in everyday life.",
        "However, there is another side to this issue, and I think that balance is important.",
        "In the end, I felt that the experience was more meaningful than I expected.",
      ],
      business: [
        "It might be better to confirm the timeline before we share the update.",
        "Given the current situation, I suggest we prioritize the client-facing part first.",
        "Could we revisit this once we have the final numbers?",
        "The next step is to align on the scope and assign clear owners.",
        "I understand the concern, so I can prepare two options by tomorrow.",
      ],
      marketing: [
        "지금 [타깃]이 겪는 [문제]를 해결하고, [결과]까지 빠르게 확인해보세요.",
        "첫 구매 전 고민되는 부분을 3분 체크리스트로 먼저 확인하세요.",
        "무료 진단으로 현재 캠페인의 전환 누수 지점을 찾아보세요.",
        "오늘 가능한 옵션과 실제 후기를 확인하고 바로 예약하세요.",
        "혜택형, 문제형, 증거형 카피를 같은 예산으로 3일간 비교하세요.",
      ],
    },
    testIdeas: [
      "같은 답변에 because 문장 하나만 추가해 점수 변화를 비교하세요.",
      "목표 표현을 첫 문장에 넣은 버전과 마지막 문장에 넣은 버전을 비교하세요.",
      "가장 낮은 점수 항목 하나만 정해 같은 문항을 다시 답변하세요.",
      "답변 끝에 후속 질문을 붙인 버전으로 대화 지속 점수를 확인하세요.",
      "현재 답변을 20초 안에 말한 버전과 40초로 확장한 버전을 비교하세요.",
      "비즈니스 상황에서는 직접 표현과 완충 표현을 각각 써보고 톤 차이를 확인하세요.",
      "OPIc 문항에서는 4문장 버전과 7문장 버전을 만들어 목표 등급별 차이를 확인하세요.",
      "쉐도잉에서는 같은 문장을 0.75배속과 1배속으로 따라 하며 리듬을 비교하세요.",
    ],
  };

  window.FiveishCopyTemplates = copyTemplates;
})();
