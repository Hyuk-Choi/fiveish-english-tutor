const expressionPool = [
  {
    id: "im-down",
    phrase: "I'm down.",
    pronunciation: "아임 다운",
    meaning: "좋아, 나도 할래.",
    nuance: "누가 제안한 계획에 흔쾌히 동의할 때 쓰는 아주 자연스러운 캐주얼 표현이에요.",
    category: "PLANS",
    tone: "CASUAL",
    a: "We're grabbing tacos after work. Want to come?",
    b: "Yeah, I'm down.",
    translation: "응, 좋아. 나도 갈게.",
    variations: ["I'm in.", "Sounds fun.", "Count me in."],
    quizSituation: "친구의 주말 등산 제안에 참여하고 싶을 때",
    quizLead: "A hike this Saturday?",
    quizTail: "What time should we meet?",
    distractors: ["I'm off.", "I'm over it.", "I'm around."],
  },
  {
    id: "works-for-me",
    phrase: "That works for me.",
    pronunciation: "댓 웍스 포 미",
    meaning: "전 괜찮아요. 그렇게 하죠.",
    nuance: "시간이나 장소, 방법을 제안받았을 때 내 일정이나 상황에 잘 맞는다고 답하는 표현이에요.",
    category: "PLANS",
    tone: "NEUTRAL",
    a: "Can we move the meeting to three?",
    b: "That works for me.",
    translation: "저는 괜찮아요. 3시에 하죠.",
    variations: ["Works for me.", "That's fine by me.", "Three is good."],
    quizSituation: "동료가 회의 시간을 오후 3시로 바꾸자고 할 때",
    quizLead: "Three o'clock?",
    quizTail: "I'll update the calendar.",
    distractors: ["That's working me.", "It works to me.", "I work for that."],
  },
  {
    id: "no-worries",
    phrase: "No worries.",
    pronunciation: "노 워리즈",
    meaning: "괜찮아요. 신경 쓰지 마세요.",
    nuance: "가벼운 사과를 받아주거나 감사 인사에 편하게 답할 때 자주 써요.",
    category: "EVERYDAY",
    tone: "FRIENDLY",
    a: "Sorry I'm a few minutes late.",
    b: "No worries. I just got here too.",
    translation: "괜찮아. 나도 방금 왔어.",
    variations: ["All good.", "It's okay.", "Don't worry about it."],
    quizSituation: "친구가 답장이 늦었다며 미안해할 때",
    quizLead: "",
    quizTail: "I know you've been busy.",
    distractors: ["No problems?", "Not worries.", "Never mind me."],
  },
  {
    id: "rain-check",
    phrase: "I'll take a rain check.",
    pronunciation: "아일 테이크 어 레인 체크",
    meaning: "다음 기회로 미룰게요.",
    nuance: "초대를 지금은 거절하지만 다음에는 꼭 함께하고 싶다는 뜻을 부드럽게 전해요.",
    category: "PLANS",
    tone: "POLITE",
    a: "Do you want to join us for dinner tonight?",
    b: "I'll take a rain check. I have a deadline.",
    translation: "다음에 갈게. 오늘은 마감이 있어.",
    variations: ["Maybe next time.", "Can we do another day?", "Not tonight, unfortunately."],
    quizSituation: "오늘 저녁 약속은 어렵지만 다음에는 가고 싶을 때",
    quizLead: "I can't make it tonight, so",
    quizTail: "",
    distractors: ["I'll check the rain.", "I'll make it rain.", "I'll take a break."],
  },
  {
    id: "not-my-thing",
    phrase: "It's not really my thing.",
    pronunciation: "잇츠 낫 리얼리 마이 띵",
    meaning: "그건 제 취향은 아니에요.",
    nuance: "싫다고 딱 잘라 말하기보다 취향이 아니라고 부드럽게 선을 긋는 표현이에요.",
    category: "OPINIONS",
    tone: "SOFT",
    a: "Are you into horror movies?",
    b: "Not really. They're not my thing.",
    translation: "별로. 공포 영화는 내 취향이 아니야.",
    variations: ["I'm not really into it.", "It's not for me.", "Not my cup of tea."],
    quizSituation: "클럽에 가는 것을 별로 좋아하지 않는다고 말할 때",
    quizLead: "Clubbing?",
    quizTail: "I'd rather go somewhere quiet.",
    distractors: ["It's not my stuff.", "It isn't my object.", "That's not mine."],
  },
  {
    id: "all-ears",
    phrase: "I'm all ears.",
    pronunciation: "아임 올 이어즈",
    meaning: "잘 듣고 있어. 말해봐.",
    nuance: "상대가 할 이야기에 온전히 집중할 준비가 됐다는 친근한 표현이에요.",
    category: "CONVERSATION",
    tone: "FRIENDLY",
    a: "I have an idea that might solve this.",
    b: "I'm all ears. Tell me more.",
    translation: "잘 듣고 있어. 더 말해봐.",
    variations: ["Go ahead.", "I'm listening.", "Let's hear it."],
    quizSituation: "친구가 재미있는 소식이 있다고 할 때",
    quizLead: "Okay,",
    quizTail: "What happened?",
    distractors: ["I have ears.", "I'm hearing all.", "My ears are open."],
  },
  {
    id: "nailed-it",
    phrase: "You nailed it.",
    pronunciation: "유 네일드 잇",
    meaning: "완전 잘했어. 정확히 해냈어.",
    nuance: "발표, 요리, 답변처럼 어떤 일을 아주 훌륭하게 해냈을 때 칭찬하는 말이에요.",
    category: "REACTIONS",
    tone: "ENTHUSIASTIC",
    a: "How was my presentation?",
    b: "You nailed it. Everyone looked impressed.",
    translation: "완전 잘했어. 다들 감탄한 것 같던데.",
    variations: ["You crushed it.", "Spot on.", "That was perfect."],
    quizSituation: "친구가 면접을 아주 잘 봤다고 느낄 때",
    quizLead: "Honestly,",
    quizTail: "Your answers were great.",
    distractors: ["You fixed it.", "You hammered it.", "You pointed it."],
  },
  {
    id: "play-it-by-ear",
    phrase: "Let's play it by ear.",
    pronunciation: "렛츠 플레이 잇 바이 이어",
    meaning: "상황 봐서 정하자.",
    nuance: "계획을 지금 확정하지 않고 그때 상황을 보고 유연하게 결정하자는 뜻이에요.",
    category: "PLANS",
    tone: "CASUAL",
    a: "Should we eat outside or book a table?",
    b: "Let's play it by ear. It might rain.",
    translation: "상황 봐서 정하자. 비가 올 수도 있어.",
    variations: ["We'll see how it goes.", "Let's decide later.", "We'll figure it out."],
    quizSituation: "주말 계획을 날씨를 보고 정하고 싶을 때",
    quizLead: "The forecast keeps changing, so",
    quizTail: "",
    distractors: ["let's hear the music.", "let's play with ears.", "let's see by hearing."],
  },
  {
    id: "slipped-my-mind",
    phrase: "It slipped my mind.",
    pronunciation: "잇 슬립트 마이 마인드",
    meaning: "깜빡했어요.",
    nuance: "해야 할 일을 알고 있었지만 잠시 잊었다고 자연스럽게 사과할 때 써요.",
    category: "EVERYDAY",
    tone: "APOLOGETIC",
    a: "Did you send the file to Mia?",
    b: "Sorry, it slipped my mind. I'll do it now.",
    translation: "미안, 깜빡했어. 지금 보낼게.",
    variations: ["I totally forgot.", "It completely escaped me.", "I lost track."],
    quizSituation: "우유 사 오는 것을 깜빡했을 때",
    quizLead: "I'm sorry.",
    quizTail: "I'll go back out.",
    distractors: ["My mind slipped it.", "It passed my brain.", "I missed my mind."],
  },
  {
    id: "on-the-fence",
    phrase: "I'm on the fence.",
    pronunciation: "아임 온 더 펜스",
    meaning: "아직 고민 중이야.",
    nuance: "두 선택지 사이에서 아직 마음을 정하지 못한 상태를 표현해요.",
    category: "DECISIONS",
    tone: "NEUTRAL",
    a: "Are you going to accept the offer?",
    b: "I'm still on the fence.",
    translation: "아직 고민 중이야.",
    variations: ["I haven't decided yet.", "I'm torn.", "I'm not sure yet."],
    quizSituation: "새 휴대폰을 살지 아직 결정하지 못했을 때",
    quizLead: "I like it, but",
    quizTail: "It's pretty expensive.",
    distractors: ["I'm over the wall.", "I'm at the gate.", "I'm on the line."],
  },
  {
    id: "fair-enough",
    phrase: "Fair enough.",
    pronunciation: "페어 이너프",
    meaning: "그럴 만하네. 일리 있어.",
    nuance: "상대의 설명이나 의견이 완전히 같지는 않아도 납득할 수 있다는 뜻이에요.",
    category: "REACTIONS",
    tone: "NEUTRAL",
    a: "I left early because I wasn't feeling well.",
    b: "Fair enough. Hope you're better now.",
    translation: "그럴 만하네. 이제는 괜찮길 바라.",
    variations: ["That makes sense.", "I get that.", "That's reasonable."],
    quizSituation: "친구가 피곤해서 모임에 안 갔다고 설명할 때",
    quizLead: "",
    quizTail: "You had a long week.",
    distractors: ["Enough fair.", "That's just fairing.", "Good fairness."],
  },
  {
    id: "my-bad",
    phrase: "My bad.",
    pronunciation: "마이 배드",
    meaning: "내 실수야. 미안.",
    nuance: "가벼운 실수를 인정할 때 쓰는 매우 캐주얼한 사과라서 공식적인 상황에는 피하는 게 좋아요.",
    category: "EVERYDAY",
    tone: "VERY CASUAL",
    a: "You sent me the old version.",
    b: "My bad. I'll send the right one.",
    translation: "내 실수야. 제대로 된 걸 보낼게.",
    variations: ["That's on me.", "Oops, sorry.", "I messed up."],
    quizSituation: "친구의 커피 주문을 잘못 가져왔을 때",
    quizLead: "Oh,",
    quizTail: "I thought you said latte.",
    distractors: ["Mine is bad.", "My wrong.", "I'm a bad."],
  },
  {
    id: "im-beat",
    phrase: "I'm beat.",
    pronunciation: "아임 비트",
    meaning: "나 완전 지쳤어.",
    nuance: "긴 하루 끝에 몸과 마음이 몹시 피곤하다고 말하는 일상적인 표현이에요.",
    category: "FEELINGS",
    tone: "CASUAL",
    a: "Want to watch another episode?",
    b: "Maybe tomorrow. I'm beat.",
    translation: "내일 보자. 나 완전 지쳤어.",
    variations: ["I'm exhausted.", "I'm wiped out.", "I'm drained."],
    quizSituation: "야근 후 너무 피곤해서 바로 자고 싶을 때",
    quizLead: "It's been a long day.",
    quizTail: "",
    distractors: ["I'm beaten.", "I'm beating.", "I got beat."],
  },
  {
    id: "got-a-point",
    phrase: "You've got a point.",
    pronunciation: "유브 갓 어 포인트",
    meaning: "네 말도 일리가 있어.",
    nuance: "상대의 주장에 설득력 있는 부분이 있다는 것을 인정할 때 써요.",
    category: "OPINIONS",
    tone: "NEUTRAL",
    a: "We should test it with a smaller group first.",
    b: "You've got a point. That would be safer.",
    translation: "네 말도 일리가 있어. 그게 더 안전하겠다.",
    variations: ["That's a good point.", "I see what you mean.", "True."],
    quizSituation: "동료가 비용을 먼저 확인해야 한다고 말할 때",
    quizLead: "",
    quizTail: "Let's check the budget before deciding.",
    distractors: ["You've got points.", "You made a dot.", "You have the score."],
  },
  {
    id: "call-it-a-day",
    phrase: "Let's call it a day.",
    pronunciation: "렛츠 콜 잇 어 데이",
    meaning: "오늘은 여기까지 하자.",
    nuance: "일이나 활동을 충분히 했으니 이제 마무리하자고 제안할 때 쓰는 단골 표현이에요.",
    category: "WORK",
    tone: "NEUTRAL",
    a: "We've been working on this for six hours.",
    b: "Yeah, let's call it a day.",
    translation: "그래, 오늘은 여기까지 하자.",
    variations: ["Let's wrap up.", "Let's stop here.", "That's enough for today."],
    quizSituation: "팀이 늦게까지 일해 오늘 업무를 마치자고 할 때",
    quizLead: "We can finish the rest tomorrow.",
    quizTail: "",
    distractors: ["Let's name the day.", "Let's call today.", "Let's finish a date."],
  },
  {
    id: "cant-make-it",
    phrase: "I can't make it.",
    pronunciation: "아이 캔트 메이크 잇",
    meaning: "저 못 가요. 참석하기 어려워요.",
    nuance: "약속이나 행사에 참석할 수 없다고 자연스럽게 말할 때 쓰며, 무언가를 만들 수 없다는 뜻이 아니에요.",
    category: "PLANS",
    tone: "NEUTRAL",
    a: "Are you coming to the team dinner?",
    b: "Sorry, I can't make it tonight.",
    translation: "미안하지만 오늘 저녁에는 못 가.",
    variations: ["I won't be able to come.", "I can't be there.", "I have to miss it."],
    quizSituation: "가족 일정 때문에 파티에 참석할 수 없을 때",
    quizLead: "Thanks for inviting me, but",
    quizTail: "",
    distractors: ["I can't create it.", "I don't arrive it.", "I can't build it."],
  },
  {
    id: "rings-a-bell",
    phrase: "It rings a bell.",
    pronunciation: "잇 링즈 어 벨",
    meaning: "어디서 들어본 것 같아.",
    nuance: "이름이나 정보가 익숙하지만 정확히 기억나지 않을 때 쓰는 표현이에요.",
    category: "MEMORY",
    tone: "CASUAL",
    a: "Do you know someone named Alex Kim?",
    b: "The name rings a bell.",
    translation: "이름은 어디서 들어본 것 같아.",
    variations: ["That sounds familiar.", "I've heard that before.", "It seems familiar."],
    quizSituation: "식당 이름이 익숙하지만 가본 적은 확실하지 않을 때",
    quizLead: "That restaurant name",
    quizTail: "Have we talked about it before?",
    distractors: ["calls a bell.", "sounds the ring.", "hits a bell."],
  },
  {
    id: "just-browsing",
    phrase: "I'm just browsing.",
    pronunciation: "아임 저스트 브라우징",
    meaning: "그냥 구경하는 중이에요.",
    nuance: "매장에서 직원이 도움을 제안할 때 아직 살 것을 정하지 않았다고 편하게 답하는 말이에요.",
    category: "SHOPPING",
    tone: "POLITE",
    a: "Can I help you find anything?",
    b: "I'm just browsing, thanks.",
    translation: "그냥 구경 중이에요. 감사합니다.",
    variations: ["I'm just looking.", "I'm okay for now.", "I'll let you know."],
    quizSituation: "옷가게 직원에게 아직 도움은 필요 없다고 말할 때",
    quizLead: "Thanks,",
    quizTail: "I'll ask if I need anything.",
    distractors: ["I'm only seeing.", "I just watch.", "I'm windowing."],
  },
  {
    id: "go-for-it",
    phrase: "Go for it.",
    pronunciation: "고 포 잇",
    meaning: "해봐. 한번 도전해봐.",
    nuance: "상대가 망설일 때 용기를 주거나, 무언가를 해도 좋다고 허락할 때 써요.",
    category: "ENCOURAGEMENT",
    tone: "FRIENDLY",
    a: "I'm thinking of applying for that job.",
    b: "Go for it. You'd be great.",
    translation: "도전해봐. 너라면 잘할 거야.",
    variations: ["Give it a shot.", "Why not?", "You should do it."],
    quizSituation: "친구가 새 취미를 시작할지 고민할 때",
    quizLead: "It sounds exciting.",
    quizTail: "",
    distractors: ["Go to it.", "Run for that.", "Try for going."],
  },
  {
    id: "makes-sense",
    phrase: "That makes sense.",
    pronunciation: "댓 메익스 센스",
    meaning: "이해돼. 말이 되네.",
    nuance: "설명을 듣고 논리나 이유를 이해했을 때 가장 널리 쓰는 반응 중 하나예요.",
    category: "REACTIONS",
    tone: "NEUTRAL",
    a: "We moved the launch because testing took longer.",
    b: "That makes sense.",
    translation: "이해돼요. 그럴 만하네요.",
    variations: ["I see.", "Got it.", "That adds up."],
    quizSituation: "비 때문에 행사가 연기됐다는 설명을 들었을 때",
    quizLead: "Oh,",
    quizTail: "Safety comes first.",
    distractors: ["That has sense.", "It makes a meaning.", "That feels logic."],
  },
  {
    id: "dont-get-me-wrong",
    phrase: "Don't get me wrong.",
    pronunciation: "돈트 겟 미 롱",
    meaning: "오해하지는 마.",
    nuance: "비판이나 다른 의견을 말하기 전에 내 의도가 나쁘지 않다는 것을 밝혀주는 표현이에요.",
    category: "OPINIONS",
    tone: "CAREFUL",
    a: "Don't get me wrong. I like the idea.",
    b: "You just think it needs more work?",
    translation: "오해하지 마. 아이디어는 마음에 들어.",
    variations: ["I don't mean this badly.", "To be clear,", "I'm not saying that..."],
    quizSituation: "식당은 좋지만 가격이 비싸다고 조심스럽게 말할 때",
    quizLead: "",
    quizTail: "The food is great, but it's a bit pricey.",
    distractors: ["Don't make me wrong.", "Don't take my wrong.", "Don't know me badly."],
  },
  {
    id: "running-late",
    phrase: "I'm running late.",
    pronunciation: "아임 러닝 레이트",
    meaning: "나 좀 늦을 것 같아.",
    nuance: "약속 시간보다 도착이 늦어지고 있다는 것을 미리 알릴 때 가장 자연스러워요.",
    category: "PLANS",
    tone: "NEUTRAL",
    a: "Are you almost here?",
    b: "I'm running about ten minutes late.",
    translation: "10분 정도 늦을 것 같아.",
    variations: ["I'm a little behind.", "I'll be there in ten.", "Sorry, I'm delayed."],
    quizSituation: "교통 체증 때문에 약속에 10분 늦을 때",
    quizLead: "Traffic is terrible.",
    quizTail: "I'll be there soon.",
    distractors: ["I'm running lately.", "I'm going late time.", "I run behind time."],
  },
  {
    id: "up-to-you",
    phrase: "It's up to you.",
    pronunciation: "잇츠 업 투 유",
    meaning: "네가 정해. 네 선택이야.",
    nuance: "결정권을 상대에게 넘기거나 어떤 선택이든 괜찮다고 말할 때 써요.",
    category: "DECISIONS",
    tone: "NEUTRAL",
    a: "Should we order pizza or Thai food?",
    b: "It's up to you. I like both.",
    translation: "네가 정해. 난 둘 다 좋아.",
    variations: ["Your call.", "You decide.", "Either works for me."],
    quizSituation: "영화 두 편 중 친구가 고르게 하고 싶을 때",
    quizLead: "I don't mind either one.",
    quizTail: "",
    distractors: ["It's on your top.", "It goes to you.", "You're up for it."],
  },
  {
    id: "keep-you-posted",
    phrase: "I'll keep you posted.",
    pronunciation: "아일 킵 유 포스티드",
    meaning: "계속 소식 알려줄게.",
    nuance: "상황이 바뀌거나 새 정보가 생길 때마다 업데이트해주겠다는 뜻이에요.",
    category: "WORK",
    tone: "NEUTRAL",
    a: "Do we know when the client will decide?",
    b: "Not yet, but I'll keep you posted.",
    translation: "아직이지만 계속 소식 알려드릴게요.",
    variations: ["I'll let you know.", "I'll keep you updated.", "I'll follow up."],
    quizSituation: "배송 상황이 바뀌면 알려주겠다고 할 때",
    quizLead: "I don't have an update yet, but",
    quizTail: "",
    distractors: ["I'll post you.", "I'll keep your post.", "I'll notice you again."],
  },
  {
    id: "sounds-good",
    phrase: "Sounds good.",
    pronunciation: "사운즈 굿",
    meaning: "좋아요. 그렇게 해요.",
    nuance: "제안이나 계획에 자연스럽게 동의할 때 정말 자주 쓰는 짧은 대답이에요.",
    category: "REACTIONS",
    tone: "FRIENDLY",
    a: "I'll send you the details this afternoon.",
    b: "Sounds good. Thanks!",
    translation: "좋아요. 고마워요!",
    variations: ["Perfect.", "Great.", "That sounds like a plan."],
    quizSituation: "동료가 내일까지 초안을 보내겠다고 할 때",
    quizLead: "",
    quizTail: "I'll review it in the morning.",
    distractors: ["Hears good.", "Sounds well.", "It listens good."],
  },
  {
    id: "give-me-a-hand",
    phrase: "Could you give me a hand?",
    pronunciation: "쿠쥬 기브 미 어 핸드",
    meaning: "잠깐 도와줄래요?",
    nuance: "손을 달라는 직역이 아니라, 가벼운 도움을 정중하고 자연스럽게 부탁하는 표현이에요.",
    category: "REQUESTS",
    tone: "POLITE",
    a: "Could you give me a hand with these boxes?",
    b: "Sure. Where should they go?",
    translation: "이 상자들 옮기는 것 좀 도와줄래?",
    variations: ["Can you help me out?", "Could you help me with this?", "Mind helping me?"],
    quizSituation: "무거운 테이블을 옮기는 데 도움이 필요할 때",
    quizLead: "This is heavier than I thought.",
    quizTail: "",
    distractors: ["Could you hand me?", "Can I take your hand?", "Give your hand to me?"],
  },
  {
    id: "swamped",
    phrase: "I'm swamped.",
    pronunciation: "아임 스왐프트",
    meaning: "나 지금 일이 너무 많아.",
    nuance: "해야 할 일이 한꺼번에 몰려 아주 바쁜 상태를 생생하게 표현해요.",
    category: "WORK",
    tone: "CASUAL",
    a: "Can you look at this today?",
    b: "I can try, but I'm pretty swamped.",
    translation: "해볼게. 그런데 지금 일이 많이 밀렸어.",
    variations: ["I'm slammed.", "I have a lot on my plate.", "I'm buried in work."],
    quizSituation: "이번 주에 업무가 너무 많다고 말할 때",
    quizLead: "Can we talk next week?",
    quizTail: "right now.",
    distractors: ["I'm flooding.", "I'm full of work.", "I'm busying."],
  },
  {
    id: "get-back-to-you",
    phrase: "Let me get back to you.",
    pronunciation: "렛 미 겟 백 투 유",
    meaning: "확인하고 다시 알려드릴게요.",
    nuance: "당장 답하기 어려울 때 확인할 시간을 확보하면서도 책임 있게 응답하는 표현이에요.",
    category: "WORK",
    tone: "POLITE",
    a: "Can we deliver by Friday?",
    b: "Let me get back to you after I check.",
    translation: "확인한 뒤 다시 말씀드릴게요.",
    variations: ["I'll check and let you know.", "Can I confirm that first?", "I'll follow up."],
    quizSituation: "일정을 확인한 뒤 답변해야 할 때",
    quizLead: "I'm not sure yet.",
    quizTail: "this afternoon.",
    distractors: ["Let me return you.", "I'll come back you.", "Get me back later."],
  },
  {
    id: "thats-on-me",
    phrase: "That's on me.",
    pronunciation: "댓츠 온 미",
    meaning: "그건 내 책임이야. 내가 낼게.",
    nuance: "맥락에 따라 실수를 책임지겠다는 뜻도 되고, 비용을 내가 내겠다는 뜻도 돼요.",
    category: "EVERYDAY",
    tone: "CASUAL",
    a: "We missed the exit because of the directions.",
    b: "That's on me. I read the map wrong.",
    translation: "그건 내 실수야. 지도를 잘못 봤어.",
    variations: ["My mistake.", "I'll take care of it.", "This one's on me."],
    quizSituation: "예약을 깜빡한 책임이 자신에게 있다고 말할 때",
    quizLead: "I forgot to book the table.",
    quizTail: "",
    distractors: ["That's over me.", "It's by my fault.", "That stays with me."],
  },
  {
    id: "long-story-short",
    phrase: "Long story short,",
    pronunciation: "롱 스토리 쇼트",
    meaning: "간단히 말하면,",
    nuance: "긴 이야기를 핵심만 요약해서 말하려고 할 때 문장 앞에 붙여요.",
    category: "CONVERSATION",
    tone: "CASUAL",
    a: "So how did you end up missing the flight?",
    b: "Long story short, I went to the wrong terminal.",
    translation: "간단히 말하면, 터미널을 잘못 갔어.",
    variations: ["In short,", "Basically,", "To make a long story short,"],
    quizSituation: "복잡한 상황의 결론만 빠르게 말할 때",
    quizLead: "",
    quizTail: "we decided to start over.",
    distractors: ["Short story long,", "Small talk first,", "To cut the sentence,"],
  },
  {
    id: "worth-a-shot",
    phrase: "It's worth a shot.",
    pronunciation: "잇츠 워스 어 샷",
    meaning: "한번 해볼 만해.",
    nuance: "성공이 확실하지 않아도 시도해볼 가치가 있다고 격려할 때 써요.",
    category: "ENCOURAGEMENT",
    tone: "CASUAL",
    a: "Do you think they'll accept a late application?",
    b: "Maybe. It's worth a shot.",
    translation: "아마도. 한번 해볼 만해.",
    variations: ["It's worth trying.", "Give it a try.", "What have you got to lose?"],
    quizSituation: "할인 요청이 받아들여질지 몰라도 물어보라고 할 때",
    quizLead: "They might say no, but",
    quizTail: "",
    distractors: ["It costs a shot.", "It's worthy shooting.", "It has one chance."],
  },
  {
    id: "take-your-time",
    phrase: "Take your time.",
    pronunciation: "테이크 유어 타임",
    meaning: "천천히 해. 서두르지 마.",
    nuance: "상대가 부담 없이 충분히 시간을 써도 된다고 안심시키는 따뜻한 표현이에요.",
    category: "EVERYDAY",
    tone: "FRIENDLY",
    a: "Sorry, I need another minute to decide.",
    b: "Take your time. There's no rush.",
    translation: "천천히 해. 급할 것 없어.",
    variations: ["No rush.", "Whenever you're ready.", "There's no hurry."],
    quizSituation: "친구가 메뉴를 고르는 데 시간이 필요할 때",
    quizLead: "",
    quizTail: "We're not in a hurry.",
    distractors: ["Use your clock.", "Have the time.", "Take a timing."],
  },
  {
    id: "good-to-go",
    phrase: "We're good to go.",
    pronunciation: "위어 굿 투 고",
    meaning: "이제 준비 끝났어.",
    nuance: "필요한 준비나 확인이 모두 끝나 바로 시작하거나 출발할 수 있다는 뜻이에요.",
    category: "WORK",
    tone: "NEUTRAL",
    a: "Is the presentation ready?",
    b: "Yep, we're good to go.",
    translation: "응, 이제 준비 끝났어.",
    variations: ["We're all set.", "Everything's ready.", "Ready when you are."],
    quizSituation: "모든 장비 확인을 끝내고 촬영을 시작할 수 있을 때",
    quizLead: "The camera and sound are ready.",
    quizTail: "",
    distractors: ["We're well to leave.", "We're nice for going.", "We can good go."],
  },
  {
    id: "not-big-deal",
    phrase: "It's no big deal.",
    pronunciation: "잇츠 노 빅 딜",
    meaning: "별일 아니야. 대수롭지 않아.",
    nuance: "상대가 미안해하거나 걱정할 때 상황이 심각하지 않다고 안심시켜요.",
    category: "REACTIONS",
    tone: "FRIENDLY",
    a: "I'm sorry I scratched the case.",
    b: "It's no big deal. It still works.",
    translation: "별일 아니야. 여전히 잘 작동하잖아.",
    variations: ["Don't sweat it.", "It's nothing.", "No harm done."],
    quizSituation: "친구가 약속 장소를 착각해 사과할 때",
    quizLead: "Really,",
    quizTail: "We still have plenty of time.",
    distractors: ["It's not a large trade.", "No deal is big.", "It isn't great business."],
  },
  {
    id: "grab-a-bite",
    phrase: "Let's grab a bite.",
    pronunciation: "렛츠 그래브 어 바이트",
    meaning: "간단히 뭐 좀 먹자.",
    nuance: "거창한 식사보다 가볍고 빠르게 함께 먹자고 제안할 때 자연스러워요.",
    category: "PLANS",
    tone: "CASUAL",
    a: "Are you hungry?",
    b: "A little. Let's grab a bite.",
    translation: "조금. 간단히 뭐 좀 먹자.",
    variations: ["Let's get something to eat.", "Want to grab lunch?", "Let's get some food."],
    quizSituation: "영화 보기 전에 간단히 식사하자고 할 때",
    quizLead: "We have an hour before the movie.",
    quizTail: "",
    distractors: ["Let's bite something.", "Let's catch a food.", "Let's grab one eat."],
  },
  {
    id: "youre-good",
    phrase: "You're good.",
    pronunciation: "유어 굿",
    meaning: "괜찮아. 문제없어.",
    nuance: "상대가 허락을 구하거나 가볍게 사과할 때 문제없다고 안심시키는 회화 표현이에요.",
    category: "REACTIONS",
    tone: "CASUAL",
    a: "Sorry, am I in your way?",
    b: "No, you're good.",
    translation: "아니, 괜찮아.",
    variations: ["You're fine.", "All good.", "No problem."],
    quizSituation: "친구가 내 충전기를 잠깐 써도 되는지 물을 때",
    quizLead: "Yeah,",
    quizTail: "I don't need it right now.",
    distractors: ["You're well.", "You're nice.", "You do good."],
  },
  {
    id: "ill-pass",
    phrase: "I think I'll pass.",
    pronunciation: "아이 띵크 아일 패스",
    meaning: "난 이번엔 됐어.",
    nuance: "제안이나 권유를 딱딱하지 않게 거절할 때 쓰는 자연스러운 말이에요.",
    category: "PLANS",
    tone: "SOFT",
    a: "Want another slice of cake?",
    b: "I think I'll pass, but thanks.",
    translation: "난 됐어. 그래도 고마워.",
    variations: ["I'm okay, thanks.", "Not this time.", "I'll skip it."],
    quizSituation: "두 번째 커피 권유를 정중히 거절할 때",
    quizLead: "It looks good, but",
    quizTail: "Thanks, though.",
    distractors: ["I'll go pass.", "I pass away.", "I'll passing."],
  },
  {
    id: "caught-me-off-guard",
    phrase: "That caught me off guard.",
    pronunciation: "댓 콧 미 오프 가드",
    meaning: "그건 예상 못 해서 당황했어.",
    nuance: "갑작스러운 질문이나 소식 때문에 준비 없이 놀라거나 당황했을 때 써요.",
    category: "FEELINGS",
    tone: "NEUTRAL",
    a: "You seemed surprised by the question.",
    b: "Yeah, it caught me off guard.",
    translation: "응, 예상 못 한 질문이라 당황했어.",
    variations: ["I wasn't expecting that.", "That threw me.", "That surprised me."],
    quizSituation: "회의에서 갑작스러운 발표 요청을 받았을 때",
    quizLead: "I wasn't prepared.",
    quizTail: "",
    distractors: ["That caught my guard.", "It took me outside.", "That guarded me off."],
  },
  {
    id: "figure-it-out",
    phrase: "We'll figure it out.",
    pronunciation: "윌 피겨 잇 아웃",
    meaning: "우리가 방법을 찾아낼 거야.",
    nuance: "아직 답이 없어도 함께 해결책을 찾을 수 있다고 안심시키는 표현이에요.",
    category: "ENCOURAGEMENT",
    tone: "SUPPORTIVE",
    a: "I'm not sure how we'll finish on time.",
    b: "We'll figure it out. Let's take it one step at a time.",
    translation: "방법을 찾을 거야. 하나씩 해보자.",
    variations: ["We'll work something out.", "We'll find a way.", "We'll sort it out."],
    quizSituation: "여행 계획에 문제가 생겼지만 해결할 수 있다고 말할 때",
    quizLead: "Don't panic.",
    quizTail: "together.",
    distractors: ["We'll calculate it.", "We'll know it outside.", "We'll find its figure."],
  },
];

const naturalExpressionPool = [
  {
    id: "given-that",
    phrase: "Given that...",
    pronunciation: "기븐 댓",
    meaning: "~라는 점을 고려하면",
    nuance: "`given thing`이라고 덩어리째 말하기보다 `Given that + 문장` 또는 `Given the + 명사`로 써요. 회화와 업무 영어 모두 자연스럽습니다.",
    category: "REAL PATTERN",
    tone: "NEUTRAL",
    a: "Do you still want to walk there?",
    b: "Given that it's raining, let's take a cab.",
    translation: "비가 오는 걸 고려하면 택시를 타자.",
    variations: ["Given the weather,", "Given how late it is,", "Considering that..."],
    quizSituation: "비가 많이 온다는 점을 고려해 택시를 타자고 할 때",
    quizLead: "",
    quizTail: "it's pouring, let's get a cab.",
    distractors: ["Giving that", "Given thing", "It is given"],
  },
  {
    id: "its-a-given",
    phrase: "It's a given.",
    pronunciation: "잇츠 어 기븐",
    meaning: "그건 당연한 사실이야.",
    nuance: "`It's given`이 아니라 보통 관사 `a`를 넣은 `It's a given`이라고 해요. 이미 확실하거나 모두가 전제로 삼는 일을 뜻합니다.",
    category: "REAL PATTERN",
    tone: "NEUTRAL",
    a: "Will everyone need to help with the move?",
    b: "It's a given. There's a lot to carry.",
    translation: "당연하지. 옮길 게 많잖아.",
    variations: ["That's a given.", "It goes without saying.", "You can count on that."],
    quizSituation: "휴가철에는 길이 막히는 것이 당연하다고 할 때",
    quizLead: "Traffic during the holidays?",
    quizTail: "",
    distractors: ["It's given.", "It has given.", "That's giving."],
  },
  {
    id: "ish",
    phrase: "Six-ish?",
    pronunciation: "식시쉬",
    meaning: "6시쯤 어때?",
    nuance: "`-ish`를 시간, 색, 나이, 정도 뒤에 붙이면 '대략, 약간'이라는 편한 말투가 돼요. 단독으로 `Ish.`라고 답하면 '어느 정도는'이라는 뜻도 됩니다.",
    category: "SPOKEN ENGLISH",
    tone: "VERY CASUAL",
    a: "What time should we meet?",
    b: "Six-ish? I should be done by then.",
    translation: "6시쯤? 그때면 끝날 것 같아.",
    variations: ["Around six.", "Greenish.", "Thirty-ish.", "Ish."],
    quizSituation: "정확히 6시는 아니고 6시쯤 만나자고 할 때",
    quizLead: "Let's meet at",
    quizTail: "",
    distractors: ["six aroundish.", "six nearly.", "an ish six."],
  },
  {
    id: "the-thing-is",
    phrase: "The thing is...",
    pronunciation: "더 띵 이즈",
    meaning: "문제는 말이야. 사실은 말이야.",
    nuance: "설명이나 변명, 핵심 문제를 꺼내기 전에 원어민이 자주 쓰는 말문 열기 표현이에요.",
    category: "CONVERSATION",
    tone: "CASUAL",
    a: "Why don't you just call her?",
    b: "The thing is, I don't have her number.",
    translation: "문제는 내가 그 사람 번호가 없다는 거야.",
    variations: ["Here's the thing.", "The problem is...", "What happened was..."],
    quizSituation: "가고 싶지만 시간이 없다는 설명을 꺼낼 때",
    quizLead: "",
    quizTail: "I'd love to go, but I don't have time.",
    distractors: ["A thing is", "That thing goes", "Thing means"],
  },
  {
    id: "heres-the-thing",
    phrase: "Here's the thing.",
    pronunciation: "히어즈 더 띵",
    meaning: "중요한 건 이거야.",
    nuance: "앞의 이야기보다 더 중요하거나 솔직한 핵심을 꺼낼 때 씁니다. 뒤에 잠깐 쉬었다가 핵심 문장을 붙이면 자연스러워요.",
    category: "CONVERSATION",
    tone: "DIRECT",
    a: "Can't we finish it tomorrow?",
    b: "Here's the thing. The client needs it tonight.",
    translation: "중요한 건 고객이 오늘 밤까지 필요로 한다는 거야.",
    variations: ["The thing is...", "Here's the catch.", "What matters is..."],
    quizSituation: "상대가 놓친 중요한 조건을 말하려 할 때",
    quizLead: "",
    quizTail: "We only have one day left.",
    distractors: ["Here has a thing.", "This is thing.", "Here the thing is."],
  },
  {
    id: "kind-of",
    phrase: "I'm kind of into it.",
    pronunciation: "아임 카인다 인투 잇",
    meaning: "나 그거 좀 마음에 들어.",
    nuance: "`kind of`는 말을 부드럽게 하거나 정도를 낮춰 '좀, 약간'이라고 할 때 자주 써요. 빠르게 말하면 `kinda`처럼 들립니다.",
    category: "SOFTENERS",
    tone: "CASUAL",
    a: "What do you think of the new design?",
    b: "I'm kind of into it, actually.",
    translation: "사실 난 좀 마음에 들어.",
    variations: ["It's kind of nice.", "I'm sorta into it.", "I actually like it."],
    quizSituation: "새로운 노래가 조금 마음에 든다고 할 때",
    quizLead: "I didn't expect to like it, but",
    quizTail: "",
    distractors: ["I'm a kind into it.", "I kind it.", "I'm type of it."],
  },
  {
    id: "not-gonna-lie",
    phrase: "Not gonna lie,",
    pronunciation: "낫 거너 라이",
    meaning: "솔직히 말하면,",
    nuance: "솔직한 반응이나 약간 의외인 의견을 꺼낼 때 쓰는 매우 회화적인 시작 표현이에요. 공식 상황에는 `To be honest`가 안전합니다.",
    category: "REACTIONS",
    tone: "VERY CASUAL",
    a: "Did you like the movie?",
    b: "Not gonna lie, I almost fell asleep.",
    translation: "솔직히 거의 잠들 뻔했어.",
    variations: ["Honestly,", "To be honest,", "I won't lie,"],
    quizSituation: "솔직히 그 음식이 꽤 맛있었다고 말할 때",
    quizLead: "",
    quizTail: "that was actually pretty good.",
    distractors: ["No lying,", "I'm not lie,", "Without a lie,"],
  },
  {
    id: "its-not-like",
    phrase: "It's not like...",
    pronunciation: "잇츠 낫 라이크",
    meaning: "~인 것도 아니잖아.",
    nuance: "상황이 상대가 생각하는 만큼 심각하지 않다고 낮추거나 오해를 바로잡을 때 자연스럽습니다.",
    category: "REAL PATTERN",
    tone: "CASUAL",
    a: "Are you upset that she canceled?",
    b: "Not really. It's not like I was waiting all day.",
    translation: "별로. 하루 종일 기다린 것도 아니잖아.",
    variations: ["It's not as if...", "I mean, it's not...", "It's no big deal."],
    quizSituation: "조금 늦어도 큰일은 아니라고 말할 때",
    quizLead: "",
    quizTail: "we're in a huge rush.",
    distractors: ["It doesn't like", "That's not liking", "It is unlike that"],
  },
  {
    id: "if-anything",
    phrase: "If anything,",
    pronunciation: "이프 애니씽",
    meaning: "오히려, 굳이 말하자면",
    nuance: "앞의 예상과 반대되는 점을 덧붙일 때 쓰는 세련되지만 일상적인 연결 표현이에요.",
    category: "NUANCE",
    tone: "NEUTRAL",
    a: "Was the second test easier?",
    b: "No. If anything, it was harder.",
    translation: "아니. 오히려 더 어려웠어.",
    variations: ["Actually,", "If anything at all,", "Quite the opposite."],
    quizSituation: "새 버전이 더 빠르기는커녕 오히려 느리다고 할 때",
    quizLead: "It isn't faster.",
    quizTail: "it's a little slower.",
    distractors: ["Anything if,", "If something,", "For anything,"],
  },
  {
    id: "for-what-its-worth",
    phrase: "For what it's worth,",
    pronunciation: "포 왓 잇츠 워스",
    meaning: "도움이 될진 모르겠지만, 내 생각에는",
    nuance: "내 의견이 결정적이지 않을 수 있음을 인정하면서 조심스럽게 조언이나 생각을 보탤 때 써요.",
    category: "OPINIONS",
    tone: "SOFT",
    a: "I don't know if I should apply.",
    b: "For what it's worth, I think you'd be great.",
    translation: "도움이 될진 모르겠지만, 넌 잘할 것 같아.",
    variations: ["Just my two cents,", "If you ask me,", "Personally,"],
    quizSituation: "조심스럽게 자신의 의견을 덧붙일 때",
    quizLead: "",
    quizTail: "I think you made the right call.",
    distractors: ["For its price,", "What is it worth,", "Worth for what,"],
  },
  {
    id: "i-mean",
    phrase: "I mean,",
    pronunciation: "아이 민",
    meaning: "그러니까, 내 말은",
    nuance: "설명을 고치거나 덧붙이고, 반응을 부드럽게 이어갈 때 실제 대화에서 매우 빈번하게 나오는 담화 표현이에요.",
    category: "SPOKEN ENGLISH",
    tone: "CASUAL",
    a: "Do you think it was a bad idea?",
    b: "I mean, it could've gone better.",
    translation: "그러니까, 더 잘될 수도 있었지.",
    variations: ["What I mean is...", "I guess...", "Well,"],
    quizSituation: "앞에서 한 말을 조금 부드럽게 수정할 때",
    quizLead: "",
    quizTail: "it's not terrible, just a little plain.",
    distractors: ["I meaning,", "My mean is,", "I say mean,"],
  },
  {
    id: "it-is-what-it-is",
    phrase: "It is what it is.",
    pronunciation: "잇 이즈 왓 잇 이즈",
    meaning: "어쩔 수 없지. 현실이 그런 걸.",
    nuance: "바꾸기 어려운 상황을 받아들일 때 씁니다. 공감이 필요한 순간에 너무 빨리 말하면 무심하게 들릴 수 있어요.",
    category: "REACTIONS",
    tone: "RESIGNED",
    a: "The tickets are nonrefundable.",
    b: "Well, it is what it is.",
    translation: "뭐, 어쩔 수 없지.",
    variations: ["That's just how it is.", "What can you do?", "We'll deal with it."],
    quizSituation: "이미 바꿀 수 없는 결과를 받아들일 때",
    quizLead: "We can't change it now.",
    quizTail: "",
    distractors: ["It was what is.", "That is it what.", "It does what it is."],
  },
];

const referenceExpressionPool = [
  {
    id: "note-since-new",
    phrase: "Since you're new here,",
    pronunciation: "신스 유어 뉴 히어",
    meaning: "여기 처음 오셨으니까,",
    nuance: "상대가 처음인 상황을 이유로 설명이나 도움을 덧붙일 때 쓰는 자연스러운 문장 시작이에요.",
    category: "YOUR NOTES",
    tone: "FRIENDLY",
    a: "I don't know where anything is.",
    b: "Since you're new here, I'll show you around.",
    translation: "여기 처음 오셨으니 제가 안내해드릴게요.",
    variations: ["As you're new here,", "It's your first day, so...", "Let me show you around."],
    quizSituation: "신입 동료에게 사무실을 안내해주겠다고 할 때",
    quizLead: "",
    quizTail: "I'll give you a quick tour.",
    distractors: ["From you're new here,", "Since you new here,", "Because your new here,"],
  },
  {
    id: "note-what-a-shame",
    phrase: "What a shame.",
    pronunciation: "왓 어 쉐임",
    meaning: "아쉽다. 안타깝네.",
    nuance: "기대했던 일이 취소되거나 좋지 않은 소식을 들었을 때 가볍게 아쉬움을 표현해요.",
    category: "YOUR NOTES",
    tone: "NEUTRAL",
    a: "The outdoor concert was canceled.",
    b: "What a shame. I was looking forward to it.",
    translation: "아쉽다. 기대하고 있었는데.",
    variations: ["That's too bad.", "That's a pity.", "How disappointing."],
    quizSituation: "기대했던 행사가 취소됐을 때",
    quizLead: "",
    quizTail: "I really wanted to go.",
    distractors: ["How a shame.", "What shame is.", "Such the shame."],
  },
  {
    id: "note-be-my-guest",
    phrase: "Be my guest.",
    pronunciation: "비 마이 게스트",
    meaning: "그러세요. 얼마든지요.",
    nuance: "상대의 부탁을 흔쾌히 허락할 때 씁니다. 말투에 따라 비꼬는 느낌도 날 수 있어 표정과 억양이 중요해요.",
    category: "YOUR NOTES",
    tone: "CASUAL",
    a: "Can I use your charger?",
    b: "Be my guest. It's on the desk.",
    translation: "물론이지. 책상 위에 있어.",
    variations: ["Go ahead.", "Of course.", "Help yourself."],
    quizSituation: "친구가 충전기를 써도 되는지 물을 때",
    quizLead: "",
    quizTail: "I'm not using it.",
    distractors: ["Become my guest.", "You are a guest.", "Make yourself guest."],
  },
  {
    id: "note-my-jam",
    phrase: "That's my jam.",
    pronunciation: "댓츠 마이 잼",
    meaning: "완전 내 스타일이야.",
    nuance: "특히 좋아하는 음악에 많이 쓰지만 취미나 활동에도 쓸 수 있는 매우 캐주얼한 표현이에요.",
    category: "YOUR NOTES",
    tone: "VERY CASUAL",
    a: "They just put on an old-school R&B song.",
    b: "Oh, that's my jam!",
    translation: "오, 이거 완전 내가 좋아하는 노래야!",
    variations: ["I love this song.", "This is so my thing.", "I'm really into this."],
    quizSituation: "좋아하는 노래가 나왔을 때",
    quizLead: "Turn it up!",
    quizTail: "",
    distractors: ["That's my jelly.", "This is my music thing.", "That jam is mine."],
  },
  {
    id: "note-groceries",
    phrase: "I need to get some groceries.",
    pronunciation: "아이 니드 투 겟 썸 그로서리즈",
    meaning: "장 좀 봐야 해.",
    nuance: "`go get some groceries`도 자연스럽지만 일상에서는 `get some groceries`만으로도 충분해요.",
    category: "YOUR NOTES",
    tone: "EVERYDAY",
    a: "Are you heading home?",
    b: "Not yet. I need to get some groceries.",
    translation: "아직. 장을 좀 봐야 해.",
    variations: ["I need to go grocery shopping.", "I have to pick up some groceries.", "I need a few things from the store."],
    quizSituation: "퇴근 후 장을 봐야 한다고 할 때",
    quizLead: "Before I go home,",
    quizTail: "",
    distractors: ["I need some grocery.", "I need to shop a grocery.", "I have to get grocery things."],
  },
  {
    id: "note-appetite",
    phrase: "I don't have much of an appetite.",
    pronunciation: "아이 돈트 해브 머치 오브 언 애퍼타이트",
    meaning: "별로 입맛이 없어.",
    nuance: "배가 고프지 않거나 몸이 좋지 않아 많이 먹고 싶지 않을 때 자연스럽게 씁니다.",
    category: "YOUR NOTES",
    tone: "EVERYDAY",
    a: "You barely touched your food.",
    b: "I don't have much of an appetite today.",
    translation: "오늘은 별로 입맛이 없어.",
    variations: ["I'm not very hungry.", "I don't feel like eating.", "I've lost my appetite."],
    quizSituation: "오늘은 많이 먹고 싶지 않다고 할 때",
    quizLead: "",
    quizTail: "today, so I'll just have soup.",
    distractors: ["I don't have an appetite much.", "My appetite isn't many.", "I have little hungry."],
  },
  {
    id: "note-get-used",
    phrase: "I'll never get used to that.",
    pronunciation: "아일 네버 겟 유스트 투 댓",
    meaning: "그건 아무리 해도 적응 안 될 것 같아.",
    nuance: "`get used to + 명사/동명사`는 새로운 환경이나 반복되는 상황에 익숙해진다는 뜻이에요.",
    category: "YOUR NOTES",
    tone: "EVERYDAY",
    a: "The sun sets at four in winter here.",
    b: "I know. I'll never get used to that.",
    translation: "그러게. 그건 적응이 안 될 것 같아.",
    variations: ["I'm still not used to it.", "That takes some getting used to.", "It still feels strange."],
    quizSituation: "너무 이른 겨울 일몰에 적응이 안 된다고 할 때",
    quizLead: "It still feels strange.",
    quizTail: "",
    distractors: ["I'll never be used that.", "I never get use with it.", "I can't accustomed that."],
  },
  {
    id: "note-chores",
    phrase: "I'm doing chores.",
    pronunciation: "아임 두잉 초어즈",
    meaning: "집안일 하는 중이야.",
    nuance: "`chores`는 청소, 빨래, 설거지처럼 반복해서 해야 하는 집안일을 묶어서 말할 때 써요.",
    category: "YOUR NOTES",
    tone: "EVERYDAY",
    a: "What are you up to this morning?",
    b: "Nothing exciting. I'm doing chores.",
    translation: "별거 없어. 집안일 하는 중이야.",
    variations: ["I'm doing some housework.", "I'm cleaning up.", "I have chores to do."],
    quizSituation: "주말 오전에 집안일 중이라고 할 때",
    quizLead: "I can't go out yet.",
    quizTail: "",
    distractors: ["I'm making chores.", "I'm doing house jobs.", "I'm choreing."],
  },
  {
    id: "note-get-past",
    phrase: "Can I get past you?",
    pronunciation: "캔 아이 겟 패스트 유",
    meaning: "잠깐 지나가도 될까요?",
    nuance: "좁은 통로나 좌석에서 상대를 지나가야 할 때 씁니다. 원문의 `get around you`보다 이 상황에는 `get past you`가 자연스러워요.",
    category: "YOUR NOTES",
    tone: "POLITE",
    a: "Oh, am I blocking the aisle?",
    b: "A little. Can I get past you?",
    translation: "조금요. 잠깐 지나가도 될까요?",
    variations: ["Could I get by?", "Excuse me, can I squeeze past?", "Mind if I get through?"],
    quizSituation: "통로를 막고 있는 사람에게 지나가도 되는지 물을 때",
    quizLead: "Excuse me,",
    quizTail: "",
    distractors: ["Can I get around with you?", "Can I pass your body?", "Can I go over you?"],
  },
  {
    id: "note-copying",
    phrase: "Stop copying me.",
    pronunciation: "스탑 카피잉 미",
    meaning: "나 따라 하지 마.",
    nuance: "`mock`은 조롱하거나 흉내 내며 놀린다는 뜻이에요. 단순히 행동을 따라 하는 상황이면 `copy`가 정확합니다.",
    category: "YOUR NOTES",
    tone: "CASUAL",
    a: "Why are you doing everything I do?",
    b: "Stop copying me!",
    translation: "나 따라 하지 마!",
    variations: ["Quit copying me.", "Don't imitate me.", "Stop mocking me."],
    quizSituation: "친구가 내 행동을 계속 똑같이 따라 할 때",
    quizLead: "",
    quizTail: "Do your own thing.",
    distractors: ["Stop copy me.", "Stop to copy me.", "Don't follow my acting."],
  },
  {
    id: "note-hard-to-read",
    phrase: "You're so hard to read.",
    pronunciation: "유어 소 하드 투 리드",
    meaning: "넌 속을 정말 알기 어려워.",
    nuance: "상대의 감정이나 생각을 표정과 행동만으로 파악하기 어렵다고 말할 때 씁니다.",
    category: "YOUR NOTES",
    tone: "CASUAL",
    a: "Can you tell whether I'm nervous?",
    b: "Honestly, you're so hard to read.",
    translation: "솔직히 넌 속을 정말 알기 어려워.",
    variations: ["I can't read you.", "You don't give much away.", "I can't tell what you're thinking."],
    quizSituation: "상대가 무슨 생각을 하는지 알기 어렵다고 할 때",
    quizLead: "I never know what you're thinking.",
    quizTail: "",
    distractors: ["You're hard for reading.", "I can't read your book.", "You're difficult to reading."],
  },
  {
    id: "note-dying-to",
    phrase: "I've been dying to...",
    pronunciation: "아이브 빈 다잉 투",
    meaning: "정말 너무 ~하고 싶었어.",
    nuance: "죽는다는 직역이 아니라 오랫동안 무언가를 매우 하고 싶었다는 강한 열망을 표현해요.",
    category: "YOUR NOTES",
    tone: "CASUAL",
    a: "Want to try the new Italian place?",
    b: "Yes! I've been dying to go there.",
    translation: "응! 거기 정말 가보고 싶었어.",
    variations: ["I've really wanted to...", "I can't wait to...", "I've been wanting to..."],
    quizSituation: "새 식당에 정말 가보고 싶었다고 할 때",
    quizLead: "",
    quizTail: "try that place.",
    distractors: ["I've been dead to", "I'm dying for go", "I was death to"],
  },
  {
    id: "note-wing-it",
    phrase: "I'm gonna wing it.",
    pronunciation: "아임 거너 윙 잇",
    meaning: "그냥 즉흥적으로 해볼게.",
    nuance: "충분히 준비하지 않고 상황에 맞춰 즉석에서 해내겠다는 뜻이에요.",
    category: "YOUR NOTES",
    tone: "CASUAL",
    a: "Did you prepare notes for your speech?",
    b: "Not really. I'm gonna wing it.",
    translation: "별로. 그냥 즉흥적으로 해보려고.",
    variations: ["I'll improvise.", "I'll make it up as I go.", "I'll go with the flow."],
    quizSituation: "발표 원고 없이 즉흥적으로 하겠다고 할 때",
    quizLead: "I didn't prepare much, so",
    quizTail: "",
    distractors: ["I'm gonna fly it.", "I'll do a wing.", "I'm going to random it."],
  },
  {
    id: "note-depends-day",
    phrase: "It depends on the day.",
    pronunciation: "잇 디펜즈 온 더 데이",
    meaning: "날마다 달라.",
    nuance: "원문의 `depends on a day`보다 특정 요일이 아닌 날마다 상태가 다르다는 뜻에는 `the day`가 자연스러워요.",
    category: "YOUR NOTES",
    tone: "NEUTRAL",
    a: "Do you usually work from home?",
    b: "It depends on the day.",
    translation: "날마다 달라.",
    variations: ["It varies from day to day.", "Some days I do.", "It really depends."],
    quizSituation: "출근 여부가 날마다 다르다고 할 때",
    quizLead: "There's no fixed schedule.",
    quizTail: "",
    distractors: ["Depends on a day.", "It depends the day.", "A day is depending."],
  },
  {
    id: "note-on-fence",
    phrase: "I'm still on the fence.",
    pronunciation: "아임 스틸 온 더 펜스",
    meaning: "아직 고민 중이야.",
    nuance: "두 선택지 사이에서 결정을 내리지 못했다는 뜻이에요. `still`을 넣으면 계속 고민 중이라는 느낌이 선명해집니다.",
    category: "YOUR NOTES",
    tone: "NEUTRAL",
    a: "Are you going to accept the offer?",
    b: "I'm still on the fence.",
    translation: "아직 고민 중이야.",
    variations: ["I haven't decided yet.", "I'm torn.", "I'm undecided."],
    quizSituation: "제안을 받아들일지 아직 정하지 못했을 때",
    quizLead: "I see both sides, so",
    quizTail: "",
    distractors: ["I'm still at a fence.", "I'm over the fence.", "I'm fencing now."],
  },
  {
    id: "note-binge",
    phrase: "I've been binge-watching Netflix.",
    pronunciation: "아이브 빈 빈지 워칭 넷플릭스",
    meaning: "넷플릭스를 계속 몰아보고 있어.",
    nuance: "`binge-watch`는 여러 편을 쉬지 않고 몰아본다는 뜻입니다. 명사형으로는 `a Netflix binge`라고도 해요.",
    category: "YOUR NOTES",
    tone: "CASUAL",
    a: "What did you do all weekend?",
    b: "I've been binge-watching Netflix.",
    translation: "주말 내내 넷플릭스를 몰아봤어.",
    variations: ["I had a Netflix binge.", "I watched the whole season.", "I couldn't stop watching."],
    quizSituation: "주말 내내 드라마를 몰아봤다고 할 때",
    quizLead: "I finished two seasons.",
    quizTail: "",
    distractors: ["I've been Netflix binging it.", "I binged watch Netflix.", "I watched binge on Netflix."],
  },
  {
    id: "note-pressure",
    phrase: "I'm under a lot of pressure.",
    pronunciation: "아임 언더 어 랏 오브 프레셔",
    meaning: "나 지금 부담과 압박이 커.",
    nuance: "사람이 압박을 느낄 때는 `I'm under pressure`라고 해요. `This is under pressure`는 이 의미로는 자연스럽지 않습니다.",
    category: "YOUR NOTES",
    tone: "NEUTRAL",
    a: "You seem stressed lately.",
    b: "I am. I'm under a lot of pressure at work.",
    translation: "맞아. 요즘 회사에서 압박이 심해.",
    variations: ["I'm feeling a lot of pressure.", "I'm under a lot of stress.", "There's a lot riding on this."],
    quizSituation: "업무 때문에 큰 압박을 받고 있다고 할 때",
    quizLead: "This deadline is tough.",
    quizTail: "",
    distractors: ["This is under pressure.", "I'm below pressure.", "Pressure is on under me."],
  },
  {
    id: "note-ego",
    phrase: "My ego doesn't need to win.",
    pronunciation: "마이 이고 더즌트 니드 투 윈",
    meaning: "자존심 때문에 꼭 이겨야 하는 건 아니야.",
    nuance: "갈등이나 경쟁에서 자존심을 세우기보다 물러설 수 있다는 성숙한 뉘앙스예요.",
    category: "YOUR NOTES",
    tone: "REFLECTIVE",
    a: "Aren't you going to prove you're right?",
    b: "No. My ego doesn't need to win every argument.",
    translation: "아니. 자존심 때문에 모든 논쟁에서 이길 필요는 없어.",
    variations: ["I don't need to prove anything.", "It's not about winning.", "I can let this one go."],
    quizSituation: "모든 논쟁에서 이길 필요는 없다고 말할 때",
    quizLead: "I can let this go.",
    quizTail: "every time.",
    distractors: ["My ego needn't winning.", "My pride doesn't win me.", "Ego is not need to win."],
  },
  {
    id: "note-so-know-me",
    phrase: "You so know me.",
    pronunciation: "유 소 노우 미",
    meaning: "너 진짜 나를 너무 잘 안다.",
    nuance: "문법책식 어순은 아니지만 `so`를 동사 앞에 두어 장난스럽게 강하게 강조하는 실제 구어체예요.",
    category: "YOUR NOTES",
    tone: "PLAYFUL",
    a: "I ordered you the extra-spicy one.",
    b: "You so know me.",
    translation: "너 진짜 나를 너무 잘 안다.",
    variations: ["You know me so well.", "You get me.", "You know exactly what I like."],
    quizSituation: "친구가 내 취향을 정확히 맞혔을 때",
    quizLead: "Extra spicy? Perfect.",
    quizTail: "",
    distractors: ["You know so me.", "You very know me.", "You know me such."],
  },
  {
    id: "note-situationally",
    phrase: "Situationally, yes.",
    pronunciation: "시추에이셔널리 예스",
    meaning: "상황에 따라서는 그렇지.",
    nuance: "문법적으로 가능하지만 다소 분석적이고 재치 있게 들립니다. 평범하게는 `In some situations, yes`가 더 자연스러워요.",
    category: "YOUR NOTES",
    tone: "WITTY",
    a: "So is being stubborn always bad?",
    b: "Situationally, yes.",
    translation: "상황에 따라서는 그렇지.",
    variations: ["In some situations, yes.", "It depends on the situation.", "Sometimes, yeah."],
    quizSituation: "상황에 따라 맞는 말이라고 재치 있게 답할 때",
    quizLead: "Is that always true?",
    quizTail: "",
    distractors: ["Situation yes.", "By situational, yes.", "Situated, yes."],
  },
  {
    id: "note-bothered",
    phrase: "I couldn't be bothered to...",
    pronunciation: "아이 쿠든트 비 바더드 투",
    meaning: "귀찮아서 도저히 ~할 마음이 안 났어.",
    nuance: "특히 영국 영어에서 흔하며, 귀찮거나 가치가 없다고 느껴 어떤 행동을 하지 않았다는 뜻이에요.",
    category: "YOUR NOTES",
    tone: "CASUAL",
    a: "Why didn't you cook dinner?",
    b: "I couldn't be bothered to cook.",
    translation: "귀찮아서 요리할 마음이 안 났어.",
    variations: ["I couldn't bring myself to...", "I didn't feel like...", "I was too lazy to..."],
    quizSituation: "귀찮아서 저녁을 만들지 않았다고 할 때",
    quizLead: "",
    quizTail: "make dinner, so I ordered in.",
    distractors: ["I couldn't bother to", "I wasn't bothered for", "I didn't bother myself cook"],
  },
  {
    id: "note-doubt",
    phrase: "I doubt that...",
    pronunciation: "아이 다웃 댓",
    meaning: "~일 것 같지 않아.",
    nuance: "뒤에 긍정 형태 문장이 와도 전체 뜻은 그 내용이 사실일 가능성이 낮다고 보는 것입니다.",
    category: "YOUR NOTES",
    tone: "SKEPTICAL",
    a: "Do you think he'll finish on time?",
    b: "I doubt that he'll finish today.",
    translation: "오늘 끝낼 것 같지는 않아.",
    variations: ["I don't think...", "I'm not convinced that...", "It seems unlikely that..."],
    quizSituation: "그가 오늘 끝낼 가능성이 낮다고 할 때",
    quizLead: "",
    quizTail: "he'll finish today.",
    distractors: ["I doubt he'll not", "I'm doubt that", "I have doubt he"],
  },
  {
    id: "note-big-thing",
    phrase: "It's a big thing in Korea.",
    pronunciation: "잇츠 어 빅 띵 인 코리아",
    meaning: "그건 한국에서 크게 유행하거나 중요해.",
    nuance: "`such a thing`은 존재 여부에 가깝고, 유행하거나 인기가 많다는 뜻에는 `a big thing`이 자연스러워요.",
    category: "YOUR NOTES",
    tone: "NEUTRAL",
    a: "Are working holidays popular there?",
    b: "Yeah, they're a big thing in Korea right now.",
    translation: "응, 요즘 한국에서 워킹홀리데이가 크게 인기야.",
    variations: ["It's really popular in Korea.", "It's become a trend.", "A lot of people are into it."],
    quizSituation: "어떤 활동이 한국에서 크게 유행한다고 할 때",
    quizLead: "A lot of people are doing it.",
    quizTail: "",
    distractors: ["It's such a thing in Korea.", "It's a large stuff.", "It is big trend thing."],
  },
  {
    id: "note-meant-to-say",
    phrase: "Maybe what you meant to say was...",
    pronunciation: "메이비 왓 유 멘트 투 세이 워즈",
    meaning: "아마 이런 뜻으로 말하려던 것 아닐까요?",
    nuance: "상대의 표현을 직접 틀렸다고 하지 않고 의도를 확인하며 부드럽게 고쳐줄 때 유용해요.",
    category: "YOUR NOTES",
    tone: "DIPLOMATIC",
    a: "I think I used the wrong word.",
    b: "Maybe what you meant to say was 'reliable.'",
    translation: "아마 'reliable'이라고 말하려던 것 아닐까요?",
    variations: ["Did you mean...?", "Maybe you meant...", "I think the word you're looking for is..."],
    quizSituation: "상대가 말하려던 단어를 부드럽게 제안할 때",
    quizLead: "",
    quizTail: "'affordable,' not 'cheap.'",
    distractors: ["Maybe you mean to said", "What you wanted saying was", "Perhaps your say means"],
  },
  {
    id: "note-gym-person",
    phrase: "I've never really been a gym person.",
    pronunciation: "아이브 네버 리얼리 빈 어 짐 퍼슨",
    meaning: "난 원래 헬스장 체질은 아니야.",
    nuance: "`a + 명사 + person`은 특정 활동이나 취향을 즐기는 유형인지 말할 때 자주 쓰며 `person`은 단수예요.",
    category: "YOUR NOTES",
    tone: "CASUAL",
    a: "Do you work out often?",
    b: "Not really. I've never been a gym person.",
    translation: "별로. 난 원래 헬스장 체질은 아니야.",
    variations: ["I'm not much of a gym person.", "The gym isn't really my thing.", "I've never been into working out."],
    quizSituation: "원래 헬스장을 좋아하는 유형이 아니라고 할 때",
    quizLead: "",
    quizTail: "I prefer hiking.",
    distractors: ["I've never been a gym persons.", "I'm not gym people.", "I haven't gym personality."],
  },
  {
    id: "note-guess-could",
    phrase: "I guess I could...",
    pronunciation: "아이 게스 아이 쿠드",
    meaning: "~해도 될 것 같긴 해.",
    nuance: "완전히 내키지는 않지만 가능성을 열어두거나 조심스럽게 동의할 때 쓰는 완곡한 패턴이에요.",
    category: "YOUR NOTES",
    tone: "HESITANT",
    a: "Could you use this bottle instead?",
    b: "I guess I could use this one.",
    translation: "그냥 이걸 써도 될 것 같긴 해.",
    variations: ["I suppose I could...", "I could probably...", "That might work."],
    quizSituation: "다른 방법도 가능할 것 같다고 조심스럽게 답할 때",
    quizLead: "",
    quizTail: "try that instead.",
    distractors: ["I guess I can could", "I guessed to could", "Maybe I could guess"],
  },
  {
    id: "note-imagine-how",
    phrase: "I can imagine how that could be nice.",
    pronunciation: "아이 캔 이매진 하우 댓 쿠드 비 나이스",
    meaning: "그게 왜 좋을 수 있는지 알 것 같아.",
    nuance: "직접 경험하지 않았더라도 상대가 느끼는 장점을 이해하고 공감한다고 표현할 때 좋아요.",
    category: "YOUR NOTES",
    tone: "EMPATHETIC",
    a: "I love taking walks before everyone wakes up.",
    b: "I can imagine how that could be nice.",
    translation: "그게 왜 좋을 수 있는지 알 것 같아.",
    variations: ["I can see why you'd like that.", "That does sound nice.", "I get the appeal."],
    quizSituation: "상대가 좋아하는 이유를 이해할 것 같다고 공감할 때",
    quizLead: "It's quiet and peaceful?",
    quizTail: "",
    distractors: ["I imagine why it's goodly.", "I can image that nice.", "I know imagine how nice."],
  },
];

const allNaturalExpressions = [
  ...naturalExpressionPool,
  ...referenceExpressionPool,
];

const difficultyExpressionIds = {
  beginner: [
    "ish",
    "kind-of",
    "i-mean",
    "it-is-what-it-is",
    "note-since-new",
    "note-what-a-shame",
    "note-be-my-guest",
    "note-my-jam",
    "note-groceries",
    "note-appetite",
    "note-get-used",
    "note-chores",
    "note-get-past",
    "note-copying",
  ],
  intermediate: [
    "given-that",
    "its-a-given",
    "the-thing-is",
    "heres-the-thing",
    "not-gonna-lie",
    "its-not-like",
    "note-hard-to-read",
    "note-dying-to",
    "note-wing-it",
    "note-depends-day",
    "note-on-fence",
    "note-binge",
    "note-pressure",
  ],
  advanced: [
    "if-anything",
    "for-what-its-worth",
    "note-ego",
    "note-so-know-me",
    "note-situationally",
    "note-bothered",
    "note-doubt",
    "note-big-thing",
    "note-meant-to-say",
    "note-gym-person",
    "note-guess-could",
    "note-imagine-how",
  ],
};

const businessExpressionPool = [
  {
    id: "biz-circle-back",
    phrase: "Let's circle back.",
    pronunciation: "렛츠 서클 백",
    meaning: "이 주제는 나중에 다시 논의하죠.",
    nuance: "지금 결론 내리기 어렵거나 다른 정보가 필요할 때 쓰는 대표적인 업무 표현입니다. 시점을 붙이면 더 명확해요.",
    category: "MEETINGS",
    tone: "PROFESSIONAL",
    a: "Do we need to decide on the vendor today?",
    b: "Let's circle back after we review the quotes.",
    translation: "견적을 검토한 뒤 다시 논의하죠.",
    variations: ["Let's revisit this.", "Let's come back to this.", "Can we discuss this later?"],
    quizSituation: "자료를 검토한 뒤 다시 이야기하자고 할 때",
    quizLead: "",
    quizTail: "once we have the final numbers.",
    distractors: ["Let's turn backward.", "Let's round again.", "Let's return circle."],
  },
  {
    id: "biz-loop",
    phrase: "Keep me in the loop.",
    pronunciation: "킵 미 인 더 루프",
    meaning: "진행 상황을 계속 공유해주세요.",
    nuance: "프로젝트의 변경이나 결정 사항을 계속 알려달라는 뜻입니다. 상사와 동료 모두에게 무난하게 쓸 수 있어요.",
    category: "COLLABORATION",
    tone: "NEUTRAL",
    a: "The client may change the launch date.",
    b: "Okay. Please keep me in the loop.",
    translation: "알겠습니다. 계속 상황 공유해주세요.",
    variations: ["Keep me posted.", "Please keep me updated.", "Let me know how it goes."],
    quizSituation: "고객과의 논의 결과를 계속 공유해달라고 할 때",
    quizLead: "As you talk to the client, please",
    quizTail: "",
    distractors: ["put me in the circle.", "keep my looping.", "send me the round."],
  },
  {
    id: "biz-flag",
    phrase: "I'd like to flag something.",
    pronunciation: "아이드 라이크 투 플래그 썸띵",
    meaning: "한 가지 짚고 넘어가고 싶습니다.",
    nuance: "`flag`는 업무에서 문제, 위험, 중요한 포인트를 상대의 주의 대상으로 올린다는 뜻으로 매우 자주 씁니다.",
    category: "MEETINGS",
    tone: "POLITE",
    a: "Before we approve the timeline, any concerns?",
    b: "I'd like to flag something about the testing phase.",
    translation: "테스트 단계와 관련해 한 가지 짚고 싶습니다.",
    variations: ["I want to highlight...", "One concern is...", "Just a heads-up..."],
    quizSituation: "일정상의 위험 요소를 정중히 제기할 때",
    quizLead: "Before we move on,",
    quizTail: "about the deadline.",
    distractors: ["I'd like a flag.", "I want to sign it.", "Let me wave something."],
  },
  {
    id: "biz-bandwidth",
    phrase: "I don't have the bandwidth.",
    pronunciation: "아이 돈트 해브 더 밴드위드",
    meaning: "지금 그 일을 맡을 여력이 없습니다.",
    nuance: "인터넷 속도가 아니라 시간과 정신적 여유, 업무 처리 능력을 뜻합니다. 너무 자주 쓰면 회피처럼 들릴 수 있어 이유나 대안을 덧붙이세요.",
    category: "WORKLOAD",
    tone: "NEUTRAL",
    a: "Can you take on one more report this week?",
    b: "I don't have the bandwidth this week, but I can help Monday.",
    translation: "이번 주는 여력이 없지만 월요일에는 도울 수 있어요.",
    variations: ["I'm at capacity.", "My plate is full.", "I can take this on next week."],
    quizSituation: "이번 주에는 추가 업무를 맡을 여력이 없을 때",
    quizLead: "I'd like to help, but",
    quizTail: "right now.",
    distractors: ["I have no internet width.", "My band is busy.", "I lack the frequency."],
  },
  {
    id: "biz-same-page",
    phrase: "Are we on the same page?",
    pronunciation: "아 위 온 더 세임 페이지",
    meaning: "우리 모두 같은 내용을 이해하고 있나요?",
    nuance: "합의 여부나 공통 이해를 확인하는 표현입니다. 상대를 시험하는 느낌이 들지 않게 `Just to make sure`와 함께 쓰면 좋아요.",
    category: "ALIGNMENT",
    tone: "NEUTRAL",
    a: "So the first draft is due Thursday, correct?",
    b: "Yes. Are we on the same page about the scope?",
    translation: "네. 업무 범위도 서로 같게 이해하고 있나요?",
    variations: ["Are we aligned?", "Do we agree on this?", "Just to confirm..."],
    quizSituation: "프로젝트 범위를 모두 똑같이 이해하는지 확인할 때",
    quizLead: "Before we wrap up,",
    quizTail: "on the deliverables?",
    distractors: ["are we in one paper", "do we see a page", "are pages the same"],
  },
  {
    id: "biz-walk-through",
    phrase: "Let me walk you through it.",
    pronunciation: "렛 미 워크 유 쓰루 잇",
    meaning: "제가 순서대로 설명해드릴게요.",
    nuance: "자료, 절차, 제품 기능을 단계별로 안내할 때 자연스럽습니다. 발표와 온보딩에서 특히 많이 써요.",
    category: "PRESENTATIONS",
    tone: "PROFESSIONAL",
    a: "I'm not sure how the new dashboard works.",
    b: "Let me walk you through it.",
    translation: "제가 차근차근 설명해드릴게요.",
    variations: ["Let me show you how it works.", "I'll take you through it.", "Here's how it works."],
    quizSituation: "새로운 보고서 구조를 단계별로 설명하려 할 때",
    quizLead: "",
    quizTail: "step by step.",
    distractors: ["Let me walk with it.", "I'll pass you through.", "Let me explain you it."],
  },
  {
    id: "biz-take-offline",
    phrase: "Let's take this offline.",
    pronunciation: "렛츠 테이크 디스 오프라인",
    meaning: "이건 회의 후 따로 이야기하죠.",
    nuance: "전체 참석자에게 필요 없는 세부 논의를 별도 대화로 옮기자는 뜻입니다. 온라인 회의에서도 그대로 씁니다.",
    category: "MEETINGS",
    tone: "PROFESSIONAL",
    a: "Should we discuss every technical detail now?",
    b: "Let's take this offline and follow up after the meeting.",
    translation: "이건 회의 후 별도로 이야기하죠.",
    variations: ["Let's discuss this separately.", "Let's follow up after this.", "Can we connect afterward?"],
    quizSituation: "세부 기술 문제를 회의 후 별도로 논의하자고 할 때",
    quizLead: "This may take a while.",
    quizTail: "",
    distractors: ["Let's turn off the line.", "Let's make it no internet.", "Let's leave online."],
  },
  {
    id: "biz-moving-forward",
    phrase: "Moving forward,",
    pronunciation: "무빙 포워드",
    meaning: "앞으로는, 향후에는",
    nuance: "앞으로 바뀔 방식이나 계획을 소개할 때 씁니다. 지나치게 반복하면 관료적으로 들릴 수 있어 `From now on`도 함께 알아두세요.",
    category: "PLANNING",
    tone: "PROFESSIONAL",
    a: "How will we avoid this issue next time?",
    b: "Moving forward, we'll review every request twice.",
    translation: "앞으로는 모든 요청을 두 번 검토하겠습니다.",
    variations: ["Going forward,", "From now on,", "In the future,"],
    quizSituation: "향후에는 매주 진행 상황을 공유하겠다고 할 때",
    quizLead: "",
    quizTail: "we'll send a weekly update.",
    distractors: ["Move to forward,", "Forward moving,", "In moving front,"],
  },
  {
    id: "biz-look-into",
    phrase: "I'll look into it.",
    pronunciation: "아일 룩 인투 잇",
    meaning: "확인해보고 알아보겠습니다.",
    nuance: "문제의 원인이나 정보를 조사한 뒤 답하겠다는 뜻입니다. 답변 시점을 함께 약속하면 더 책임감 있게 들려요.",
    category: "FOLLOW-UP",
    tone: "NEUTRAL",
    a: "The invoice total doesn't look right.",
    b: "I'll look into it and get back to you today.",
    translation: "확인해서 오늘 중으로 다시 알려드리겠습니다.",
    variations: ["I'll check on that.", "I'll investigate.", "Let me find out."],
    quizSituation: "청구서 오류를 확인한 뒤 답하겠다고 할 때",
    quizLead: "",
    quizTail: "and get back to you by noon.",
    distractors: ["I'll see inside it.", "I'll watch into that.", "I'll look it inward."],
  },
  {
    id: "biz-action-items",
    phrase: "Let's confirm the action items.",
    pronunciation: "렛츠 컨펌 디 액션 아이템즈",
    meaning: "실행할 업무를 확인하죠.",
    nuance: "`action items`는 회의 후 누가 무엇을 언제까지 할지 정리한 구체적인 후속 업무를 말합니다.",
    category: "MEETINGS",
    tone: "PROFESSIONAL",
    a: "Is there anything else before we end?",
    b: "Let's confirm the action items and owners.",
    translation: "실행 업무와 담당자를 확인하죠.",
    variations: ["Let's recap the next steps.", "Who owns each task?", "Let's summarize the follow-ups."],
    quizSituation: "회의를 끝내기 전에 후속 업무를 정리할 때",
    quizLead: "Before we wrap up,",
    quizTail: "",
    distractors: ["let's check acting things.", "let's confirm action goods.", "let's make working objects."],
  },
  {
    id: "biz-align",
    phrase: "We need to align on this.",
    pronunciation: "위 니드 투 얼라인 온 디스",
    meaning: "이 사안에 대해 합의가 필요합니다.",
    nuance: "`align on`은 방향, 목표, 일정에 대해 같은 이해와 합의를 만든다는 뜻의 현대 업무 영어입니다.",
    category: "ALIGNMENT",
    tone: "PROFESSIONAL",
    a: "Marketing and sales have different launch dates.",
    b: "We need to align on this before Friday.",
    translation: "금요일 전에 이 사안에 합의해야 합니다.",
    variations: ["We need to agree on this.", "Let's get aligned.", "Let's make sure we're consistent."],
    quizSituation: "두 팀이 일정에 대해 합의해야 할 때",
    quizLead: "Before we announce the date,",
    quizTail: "",
    distractors: ["we need a line on this.", "we should line this.", "we need to arrange on."],
  },
  {
    id: "biz-follow-up",
    phrase: "I'll follow up.",
    pronunciation: "아일 팔로우 업",
    meaning: "후속 확인 후 다시 연락드리겠습니다.",
    nuance: "정보 요청, 진행 확인, 다음 연락 등 업무상 후속 행동 전반에 씁니다. `with 사람`, `on 주제`를 붙일 수 있어요.",
    category: "EMAIL",
    tone: "NEUTRAL",
    a: "We still haven't received legal approval.",
    b: "I'll follow up with the legal team today.",
    translation: "오늘 법무팀에 후속 확인하겠습니다.",
    variations: ["I'll check in with them.", "I'll get an update.", "I'll get back to you."],
    quizSituation: "관련 팀에 진행 상황을 확인하겠다고 할 때",
    quizLead: "",
    quizTail: "with the team this afternoon.",
    distractors: ["I'll follow them upward.", "I'll chase up me.", "I'll after-check."],
  },
];

const defaultTranscript = `[00:00] Your voice is a tool you use every day. | 목소리는 우리가 매일 사용하는 도구입니다.
[00:18] The way we speak changes how people respond. | 말하는 방식은 상대의 반응을 바꿉니다.
[00:42] Good communication starts with intention. | 좋은 소통은 분명한 의도에서 시작합니다.
[01:04] Some speaking habits make listeners tune out. | 몇몇 말버릇은 듣는 사람의 집중을 흐립니다.
[01:31] Honest words are easier to trust. | 솔직한 말은 더 쉽게 신뢰를 얻습니다.
[01:57] Match your words with what you really mean. | 말과 진짜 의도를 일치시키세요.
[02:23] Respect makes a message easier to hear. | 존중은 메시지를 더 잘 들리게 합니다.
[02:49] Warmth can be as important as accuracy. | 따뜻함은 정확성만큼 중요할 수 있습니다.
[03:16] Slow down and give important words some space. | 속도를 늦추고 중요한 단어에 여백을 주세요.
[03:44] A lower, relaxed voice can sound more grounded. | 낮고 편안한 목소리는 더 안정적으로 들릴 수 있습니다.
[04:12] Pace and volume help shape your meaning. | 속도와 음량은 의미 전달을 돕습니다.
[04:39] Silence can make the next sentence stronger. | 침묵은 다음 문장을 더 강하게 만들 수 있습니다.
[05:06] Practice makes your delivery feel natural. | 연습은 말하기를 자연스럽게 만듭니다.
[05:33] Speak so your listener feels included. | 듣는 사람이 함께한다고 느끼도록 말하세요.`;

const conversationScenarios = {
  smalltalk: {
    target: "Not gonna lie, ...",
    targetTip: "솔직한 의견을 자연스럽게 꺼내보세요.",
    opening:
      "Hey! I don't think we've met before. I'm Mia. What brings you here today?",
    prompts: [
      "That sounds nice. What do you usually like to do on weekends?",
      "Oh, really? How did you get into that?",
      "Not gonna lie, that sounds fun. What do you like most about it?",
      "I'd love to try that sometime. What would you recommend for a beginner?",
    ],
  },
  cafe: {
    target: "Could I get ...?",
    targetTip: "주문과 변경 요청을 정중하고 짧게 말해보세요.",
    opening:
      "Hi there! Welcome in. What can I get started for you today?",
    prompts: [
      "Sure thing. What size would you like?",
      "Would you like that hot or iced?",
      "We're out of regular milk today. Would oat milk be okay?",
      "Great. Would you like anything else with that?",
    ],
  },
  travel: {
    target: "The thing is, ...",
    targetTip: "문제를 설명한 뒤 원하는 해결책을 덧붙여보세요.",
    opening:
      "Good evening. Welcome to the Riverside Hotel. How can I help you?",
    prompts: [
      "I'm sorry about that. Could you tell me exactly what happened?",
      "Let me look into it. What would be the best solution for you?",
      "I can offer another room, but it won't be ready until 8. Would that work?",
      "Is there anything else I can do to make your stay more comfortable?",
    ],
  },
  work: {
    target: "Given that ...,",
    targetTip: "상황을 근거로 제안하거나 우선순위를 조율해보세요.",
    opening:
      "Hey, do you have a minute? We need to decide how to handle the project delay.",
    prompts: [
      "What do you think is causing the biggest problem right now?",
      "Given the deadline, what should we prioritize first?",
      "That makes sense. How should we explain the change to the client?",
      "Great. Could you summarize the next steps for me?",
    ],
  },
};

const opicTopicBanks = {
  home: {
    label: "집과 동네",
    questions: [
      {
        type: "DESCRIPTION",
        prompt:
          "Please describe the home you live in. Tell me what it looks like and what your favorite space is.",
        hint: "전체 모습 → 좋아하는 공간 → 그 공간을 좋아하는 이유",
        keywords: ["home", "room", "live", "favorite", "because"],
      },
      {
        type: "PAST EXPERIENCE",
        prompt:
          "Tell me about a memorable change you made to your home. What did you change, and how did it turn out?",
        hint: "바꾸기 전 → 무엇을 했는지 → 결과와 느낌",
        keywords: ["changed", "before", "after", "felt", "turned"],
      },
    ],
  },
  movies: {
    label: "영화",
    questions: [
      {
        type: "ROUTINE",
        prompt:
          "Tell me about how you usually watch movies. Where do you watch them, and who do you watch them with?",
        hint: "언제·어디서 → 누구와 → 보통 고르는 장르",
        keywords: ["usually", "watch", "with", "movie", "because"],
      },
      {
        type: "MEMORABLE EXPERIENCE",
        prompt:
          "Tell me about a movie that left a strong impression on you. What happened in it, and why do you remember it?",
        hint: "영화 소개 → 인상 깊은 장면 → 기억하는 이유",
        keywords: ["movie", "story", "remember", "because", "felt"],
      },
    ],
  },
  music: {
    label: "음악",
    questions: [
      {
        type: "DESCRIPTION",
        prompt:
          "What kind of music do you enjoy? Describe when you listen to it and how it makes you feel.",
        hint: "음악 종류 → 듣는 상황 → 기분에 미치는 영향",
        keywords: ["music", "listen", "feel", "when", "favorite"],
      },
      {
        type: "PAST EXPERIENCE",
        prompt:
          "Tell me about a memorable live performance or concert you attended.",
        hint: "언제·누구와 → 현장 분위기 → 특별했던 순간",
        keywords: ["concert", "performance", "went", "crowd", "remember"],
      },
    ],
  },
  travel: {
    label: "여행",
    questions: [
      {
        type: "PAST EXPERIENCE",
        prompt:
          "Tell me about a trip you remember well. Where did you go, what did you do, and why was it memorable?",
        hint: "여행지 → 주요 활동 → 기억에 남은 이유",
        keywords: ["trip", "went", "visited", "because", "remember"],
      },
      {
        type: "COMPARISON",
        prompt:
          "How has the way you travel changed compared with the past?",
        hint: "과거 방식 → 지금 방식 → 달라진 이유",
        keywords: ["before", "now", "used to", "different", "changed"],
      },
    ],
  },
  cafes: {
    label: "카페",
    questions: [
      {
        type: "DESCRIPTION",
        prompt:
          "Describe a cafe you often visit. What is it like, and what do you usually do there?",
        hint: "위치와 분위기 → 자주 주문하는 것 → 그곳에서 하는 일",
        keywords: ["cafe", "usually", "coffee", "atmosphere", "visit"],
      },
      {
        type: "PROBLEM",
        prompt:
          "Tell me about a time when something went wrong at a cafe. How did you handle it?",
        hint: "문제 발생 → 직원과 대화 → 해결 결과",
        keywords: ["problem", "ordered", "staff", "asked", "solved"],
      },
    ],
  },
  exercise: {
    label: "운동",
    questions: [
      {
        type: "ROUTINE",
        prompt:
          "Tell me about your exercise routine. What do you do, where do you do it, and how often?",
        hint: "운동 종류 → 장소와 빈도 → 계속하는 이유",
        keywords: ["exercise", "usually", "week", "gym", "because"],
      },
      {
        type: "PAST EXPERIENCE",
        prompt:
          "Tell me about a time when you tried a new kind of exercise. What was challenging about it?",
        hint: "시도한 계기 → 어려웠던 점 → 이후의 변화",
        keywords: ["tried", "first", "difficult", "learned", "after"],
      },
    ],
  },
  work: {
    label: "직장",
    questions: [
      {
        type: "ROUTINE",
        prompt:
          "Walk me through a typical workday. What are your main responsibilities?",
        hint: "출근 후 → 주요 업무 → 하루 마무리",
        keywords: ["work", "usually", "responsible", "team", "day"],
      },
      {
        type: "PROBLEM SOLVING",
        prompt:
          "Tell me about a difficult problem at work and explain how you solved it.",
        hint: "문제 → 취한 행동 → 결과와 배운 점",
        keywords: ["problem", "team", "decided", "solved", "learned"],
      },
    ],
  },
  technology: {
    label: "기술",
    questions: [
      {
        type: "DESCRIPTION",
        prompt:
          "Tell me about a piece of technology you use every day. How do you use it?",
        hint: "기기나 서비스 → 쓰는 상황 → 편리한 점",
        keywords: ["use", "every day", "help", "usually", "because"],
      },
      {
        type: "COMPARISON",
        prompt:
          "How has technology changed the way people communicate compared with the past?",
        hint: "과거 소통 → 현재 소통 → 장점과 단점",
        keywords: ["past", "now", "communicate", "easier", "however"],
      },
    ],
  },
};

const STORAGE = {
  progress: "fiveish-progress",
  businessProgress: "fiveish-business-progress",
  saved: "fiveish-saved",
  studyDates: "fiveish-study-dates",
  transcript: "fiveish-transcript",
  difficulty: "fiveish-difficulty",
  opicHistory: "fiveish-opic-history",
};

const state = {
  todayKey: localDateKey(),
  dailyExpressions: [],
  activeIndex: 0,
  completed: new Set(),
  difficulty: localStorage.getItem(STORAGE.difficulty) || "intermediate",
  saved: new Set(JSON.parse(localStorage.getItem(STORAGE.saved) || "[]")),
  transcript: [],
  transcriptRaw: localStorage.getItem(STORAGE.transcript) || defaultTranscript,
  activeTranscriptIndex: -1,
  loopActive: false,
  playerReady: false,
  currentVideoId: "eIho2S0ZahI",
};

const businessState = {
  dailyExpressions: [],
  activeIndex: 0,
  completed: new Set(),
};

const conversationState = {
  scenario: "smalltalk",
  turn: 0,
  recognition: null,
  listening: false,
};

const opicState = {
  questions: [],
  currentIndex: 0,
  answers: [],
  level: "intermediate",
  coaching: true,
  secondsLeft: 40 * 60,
  timer: null,
  answerTimer: null,
  answerSeconds: 0,
  questionStartedAt: 0,
  replayCount: 0,
  recognition: null,
  listening: false,
};

const allExpressions = [
  ...allNaturalExpressions,
  ...businessExpressionPool,
  ...expressionPool,
];

let player = null;
let transcriptTimer = null;
let toastTimer = null;
let deferredInstallPrompt = null;
let dailyRefreshTimer = null;

function localDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function dateSeed(dateKey) {
  return dateKey.split("-").reduce((seed, part) => seed * 31 + Number(part), 17);
}

function seededRandom(seed) {
  let value = seed >>> 0;
  return () => {
    value += 0x6d2b79f5;
    let result = value;
    result = Math.imul(result ^ (result >>> 15), result | 1);
    result ^= result + Math.imul(result ^ (result >>> 7), result | 61);
    return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
  };
}

function seededShuffle(items, seed) {
  const copy = [...items];
  const random = seededRandom(seed);
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const target = Math.floor(random() * (index + 1));
    [copy[index], copy[target]] = [copy[target], copy[index]];
  }
  return copy;
}

function dayNumber(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return Math.floor(Date.UTC(year, month - 1, day) / 86400000);
}

function alternatingPool(items, dateKey) {
  const parity = dayNumber(dateKey) % 2;
  return items.filter((_, index) => index % 2 === parity);
}

function getDailyExpressions(dateKey = state.todayKey) {
  const seed = dateSeed(dateKey);
  const allowedIds = new Set(difficultyExpressionIds[state.difficulty]);
  const difficultyPool = allNaturalExpressions.filter((expression) =>
    allowedIds.has(expression.id),
  );
  const pool = alternatingPool(difficultyPool, dateKey);
  const featuredCandidates = pool.filter((expression) =>
    ["given-that", "its-a-given", "ish"].includes(expression.id),
  );
  const featured = featuredCandidates.length
    ? featuredCandidates[seed % featuredCandidates.length]
    : seededShuffle(pool, seed)[0];
  const remaining = pool.filter((expression) => expression.id !== featured.id);
  return [featured, ...seededShuffle(remaining, seed).slice(0, 4)];
}

function getDailyBusinessExpressions(dateKey = state.todayKey) {
  const pool = alternatingPool(businessExpressionPool, dateKey);
  return seededShuffle(pool, dateSeed(dateKey) + 2026).slice(0, 5);
}

function getProgressStore() {
  return JSON.parse(localStorage.getItem(STORAGE.progress) || "{}");
}

function dailyProgressKey(dateKey = state.todayKey) {
  return `${dateKey}:${state.difficulty}`;
}

function saveProgress() {
  const store = getProgressStore();
  store[dailyProgressKey()] = [...state.completed];
  localStorage.setItem(STORAGE.progress, JSON.stringify(store));
}

function loadTodayProgress(dateKey = state.todayKey) {
  const store = getProgressStore();
  state.completed = new Set(store[dailyProgressKey(dateKey)] || []);
}

function renderIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function setDateHeading(dateKey = state.todayKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  const dateText = new Intl.DateTimeFormat("ko-KR", {
    month: "long",
    day: "numeric",
    weekday: "long",
  }).format(new Date(year, month - 1, day));
  document.querySelector("#today-date").textContent = dateText.toUpperCase();
}

function msUntilNextLocalDay(now = new Date()) {
  const nextDay = new Date(now);
  nextDay.setHours(24, 0, 2, 0);
  return Math.max(nextDay.getTime() - now.getTime(), 1000);
}

function refreshDailyContent({ announce = false } = {}) {
  const currentKey = localDateKey();
  if (currentKey === state.todayKey) return false;

  state.todayKey = currentKey;
  state.activeIndex = 0;
  businessState.activeIndex = 0;
  state.dailyExpressions = getDailyExpressions(currentKey);
  businessState.dailyExpressions = getDailyBusinessExpressions(currentKey);
  loadTodayProgress(currentKey);
  loadBusinessProgress(currentKey);

  setDateHeading(currentKey);
  renderCurrentLesson();
  renderBusinessLesson();
  renderProgress();
  renderStreak();
  renderWeek();
  if (document.querySelector("#saved-view")?.classList.contains("active")) {
    renderSaved();
  }
  renderIcons();

  if (announce) {
    showToast("날짜가 바뀌어 오늘의 표현 5개를 새로 업데이트했어요.");
  }
  return true;
}

function scheduleDailyRefresh() {
  clearTimeout(dailyRefreshTimer);
  dailyRefreshTimer = window.setTimeout(() => {
    refreshDailyContent({ announce: true });
    scheduleDailyRefresh();
  }, msUntilNextLocalDay());
}

function setupDailyContentUpdates() {
  scheduleDailyRefresh();
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) refreshDailyContent({ announce: true });
  });
  window.addEventListener("focus", () => refreshDailyContent({ announce: true }));
}

function renderLessonList() {
  const list = document.querySelector("#lesson-list");
  list.innerHTML = state.dailyExpressions
    .map(
      (expression, index) => `
        <button class="lesson-item ${index === state.activeIndex ? "active" : ""} ${
          state.completed.has(expression.id) ? "completed" : ""
        }" data-lesson-index="${index}">
          <span class="lesson-item-number">${String(index + 1).padStart(2, "0")}</span>
          <span class="lesson-item-text">
            <strong>${expression.phrase}</strong>
            <small>${expression.meaning}</small>
          </span>
          <i data-lucide="chevron-right"></i>
        </button>
      `,
    )
    .join("");

  list.querySelectorAll("[data-lesson-index]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeIndex = Number(button.dataset.lessonIndex);
      renderCurrentLesson();
    });
  });
  renderIcons();
}

function renderCurrentLesson() {
  const expression = state.dailyExpressions[state.activeIndex];
  if (!expression) return;

  document.querySelector("#phrase-category").textContent = expression.category;
  document.querySelector("#phrase-tone").textContent = expression.tone;
  document.querySelector("#lesson-number").textContent =
    `EXPRESSION ${String(state.activeIndex + 1).padStart(2, "0")}`;
  document.querySelector("#phrase-text").textContent = expression.phrase;
  document.querySelector("#phrase-pronunciation").textContent = expression.pronunciation;
  document.querySelector("#phrase-meaning").textContent = expression.meaning;
  document.querySelector("#phrase-nuance").textContent = expression.nuance;
  document.querySelector("#example-a").textContent = expression.a;
  document.querySelector("#example-b").textContent = expression.b;
  document.querySelector("#example-translation").textContent = expression.translation;
  document.querySelector("#variation-chips").innerHTML = expression.variations
    .map((variation) => `<span>${variation}</span>`)
    .join("");

  const bookmarkButton = document.querySelector("#bookmark-button");
  bookmarkButton.classList.toggle("saved", state.saved.has(expression.id));
  bookmarkButton.setAttribute("aria-label", state.saved.has(expression.id) ? "저장 취소" : "표현 저장");

  const completeButton = document.querySelector("#complete-lesson");
  const isComplete = state.completed.has(expression.id);
  completeButton.classList.toggle("completed", isComplete);
  completeButton.innerHTML = isComplete
    ? '<i data-lucide="check-circle-2"></i> 학습 완료'
    : '이해했어요 <i data-lucide="check"></i>';

  document.querySelector("#prev-lesson").disabled = state.activeIndex === 0;
  document.querySelector("#next-lesson").disabled =
    state.activeIndex === state.dailyExpressions.length - 1;

  renderLessonList();
  renderQuiz(expression);
  renderIcons();
}

function renderQuiz(expression) {
  const blank = "<strong>______</strong>";
  document.querySelector("#quiz-situation").textContent = expression.quizSituation;
  document.querySelector("#quiz-sentence").innerHTML = [
    expression.quizLead,
    blank,
    expression.quizTail,
  ]
    .filter(Boolean)
    .join(" ");

  const options = seededShuffle(
    [expression.phrase, ...expression.distractors],
    dateSeed(state.todayKey) + state.activeIndex * 101,
  );
  const optionsWrap = document.querySelector("#quiz-options");
  optionsWrap.innerHTML = options
    .map((option) => `<button class="quiz-option" data-answer="${encodeURIComponent(option)}">${option}</button>`)
    .join("");

  const feedback = document.querySelector("#quiz-feedback");
  feedback.textContent = "";
  feedback.className = "quiz-feedback";

  optionsWrap.querySelectorAll(".quiz-option").forEach((button) => {
    button.addEventListener("click", () => {
      const selected = decodeURIComponent(button.dataset.answer);
      const correct = selected === expression.phrase;
      optionsWrap.querySelectorAll(".quiz-option").forEach((optionButton) => {
        optionButton.disabled = true;
        const answer = decodeURIComponent(optionButton.dataset.answer);
        if (answer === expression.phrase) optionButton.classList.add("correct");
      });
      if (!correct) button.classList.add("wrong");
      feedback.className = `quiz-feedback ${correct ? "correct" : "wrong"}`;
      feedback.textContent = correct
        ? "정답이에요. 문장 전체를 소리 내어 한 번 말해보세요."
        : `조금 아쉬워요. 가장 자연스러운 답은 "${expression.phrase}"예요.`;
    });
  });
}

function renderProgress() {
  const count = state.dailyExpressions.filter((expression) =>
    state.completed.has(expression.id),
  ).length;
  document.querySelector("#completed-count").textContent = count;
  document.querySelector("#progress-bar").style.width = `${(count / 5) * 100}%`;
  const messages = [
    "첫 표현부터 가볍게 시작해볼까요?",
    "좋은 시작이에요. 한 문장 더 가볼까요?",
    "벌써 리듬을 탔어요.",
    "절반을 넘었어요. 오늘 표현이 입에 붙고 있어요.",
    "마지막 한 문장만 남았어요.",
    "오늘의 5문장을 모두 익혔어요. 멋진 루틴이에요.",
  ];
  document.querySelector("#progress-message").textContent = messages[count];
}

function getBusinessProgressStore() {
  return JSON.parse(localStorage.getItem(STORAGE.businessProgress) || "{}");
}

function loadBusinessProgress(dateKey = state.todayKey) {
  const store = getBusinessProgressStore();
  businessState.completed = new Set(store[dateKey] || []);
}

function saveBusinessProgress() {
  const store = getBusinessProgressStore();
  store[state.todayKey] = [...businessState.completed];
  localStorage.setItem(STORAGE.businessProgress, JSON.stringify(store));
}

function renderBusinessProgress() {
  document.querySelector("#business-completed-count").textContent =
    businessState.completed.size;
}

function renderBusinessLessonList() {
  const list = document.querySelector("#business-lesson-list");
  list.innerHTML = businessState.dailyExpressions
    .map(
      (expression, index) => `
        <button class="lesson-item ${index === businessState.activeIndex ? "active" : ""} ${
          businessState.completed.has(expression.id) ? "completed" : ""
        }" data-business-lesson-index="${index}">
          <span class="lesson-item-number">${String(index + 1).padStart(2, "0")}</span>
          <span class="lesson-item-text">
            <strong>${expression.phrase}</strong>
            <small>${expression.meaning}</small>
          </span>
          <i data-lucide="chevron-right"></i>
        </button>
      `,
    )
    .join("");

  list.querySelectorAll("[data-business-lesson-index]").forEach((button) => {
    button.addEventListener("click", () => {
      businessState.activeIndex = Number(button.dataset.businessLessonIndex);
      renderBusinessLesson();
    });
  });
}

function renderBusinessQuiz(expression) {
  const blank = "<strong>______</strong>";
  document.querySelector("#business-quiz-situation").textContent =
    expression.quizSituation;
  document.querySelector("#business-quiz-sentence").innerHTML = [
    expression.quizLead,
    blank,
    expression.quizTail,
  ]
    .filter(Boolean)
    .join(" ");

  const options = seededShuffle(
    [expression.phrase, ...expression.distractors],
    dateSeed(state.todayKey) + businessState.activeIndex * 211,
  );
  const optionsWrap = document.querySelector("#business-quiz-options");
  optionsWrap.innerHTML = options
    .map(
      (option) =>
        `<button class="quiz-option" data-business-answer="${encodeURIComponent(option)}">${option}</button>`,
    )
    .join("");

  const feedback = document.querySelector("#business-quiz-feedback");
  feedback.textContent = "";
  feedback.className = "quiz-feedback";

  optionsWrap.querySelectorAll(".quiz-option").forEach((button) => {
    button.addEventListener("click", () => {
      const selected = decodeURIComponent(button.dataset.businessAnswer);
      const correct = selected === expression.phrase;
      optionsWrap.querySelectorAll(".quiz-option").forEach((optionButton) => {
        optionButton.disabled = true;
        if (
          decodeURIComponent(optionButton.dataset.businessAnswer) === expression.phrase
        ) {
          optionButton.classList.add("correct");
        }
      });
      if (!correct) button.classList.add("wrong");
      feedback.className = `quiz-feedback ${correct ? "correct" : "wrong"}`;
      feedback.textContent = correct
        ? "정답입니다. 실제 회의에서 말하듯 문장 전체를 읽어보세요."
        : `업무 상황에서는 "${expression.phrase}"가 가장 자연스러워요.`;
    });
  });
}

function renderBusinessLesson() {
  const expression = businessState.dailyExpressions[businessState.activeIndex];
  if (!expression) return;

  document.querySelector("#business-phrase-category").textContent =
    expression.category;
  document.querySelector("#business-phrase-tone").textContent = expression.tone;
  document.querySelector("#business-lesson-number").textContent =
    `BUSINESS ${String(businessState.activeIndex + 1).padStart(2, "0")}`;
  document.querySelector("#business-phrase-text").textContent = expression.phrase;
  document.querySelector("#business-phrase-pronunciation").textContent =
    expression.pronunciation;
  document.querySelector("#business-phrase-meaning").textContent =
    expression.meaning;
  document.querySelector("#business-phrase-nuance").textContent =
    expression.nuance;
  document.querySelector("#business-example-a").textContent = expression.a;
  document.querySelector("#business-example-b").textContent = expression.b;
  document.querySelector("#business-example-translation").textContent =
    expression.translation;
  document.querySelector("#business-variation-chips").innerHTML =
    expression.variations.map((variation) => `<span>${variation}</span>`).join("");

  const bookmarkButton = document.querySelector("#business-bookmark-button");
  bookmarkButton.classList.toggle("saved", state.saved.has(expression.id));

  const completeButton = document.querySelector("#business-complete-lesson");
  const isComplete = businessState.completed.has(expression.id);
  completeButton.classList.toggle("completed", isComplete);
  completeButton.innerHTML = isComplete
    ? '<i data-lucide="check-circle-2"></i> 학습 완료'
    : '학습 완료 <i data-lucide="check"></i>';

  document.querySelector("#business-prev-lesson").disabled =
    businessState.activeIndex === 0;
  document.querySelector("#business-next-lesson").disabled =
    businessState.activeIndex === businessState.dailyExpressions.length - 1;

  renderBusinessLessonList();
  renderBusinessQuiz(expression);
  renderBusinessProgress();
  renderIcons();
}

function toggleBusinessBookmark() {
  const expression = businessState.dailyExpressions[businessState.activeIndex];
  if (state.saved.has(expression.id)) {
    state.saved.delete(expression.id);
    showToast("저장한 표현에서 삭제했어요.");
  } else {
    state.saved.add(expression.id);
    showToast("비즈니스 표현을 저장했어요.");
  }
  localStorage.setItem(STORAGE.saved, JSON.stringify([...state.saved]));
  renderBusinessLesson();
  renderSaved();
}

function markStudyDate() {
  const dates = new Set(JSON.parse(localStorage.getItem(STORAGE.studyDates) || "[]"));
  dates.add(state.todayKey);
  localStorage.setItem(STORAGE.studyDates, JSON.stringify([...dates]));
  renderStreak();
  renderWeek();
}

function calculateStreak() {
  const dates = new Set(JSON.parse(localStorage.getItem(STORAGE.studyDates) || "[]"));
  if (!dates.size) return 0;

  let cursor = new Date();
  if (!dates.has(localDateKey(cursor))) {
    cursor.setDate(cursor.getDate() - 1);
  }

  let count = 0;
  while (dates.has(localDateKey(cursor))) {
    count += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return count;
}

function renderStreak() {
  document.querySelector("#streak-number").textContent = Math.max(calculateStreak(), 1);
}

function startOfWeek(date) {
  const result = new Date(date);
  const day = result.getDay();
  const distance = day === 0 ? -6 : 1 - day;
  result.setDate(result.getDate() + distance);
  result.setHours(0, 0, 0, 0);
  return result;
}

function renderWeek() {
  const dates = new Set(JSON.parse(localStorage.getItem(STORAGE.studyDates) || "[]"));
  const labels = ["월", "화", "수", "목", "금", "토", "일"];
  const monday = startOfWeek(new Date());
  let weekCount = 0;

  document.querySelector("#week-dots").innerHTML = labels
    .map((label, index) => {
      const date = new Date(monday);
      date.setDate(monday.getDate() + index);
      const done = dates.has(localDateKey(date));
      if (done) weekCount += 1;
      return `
        <span class="week-day ${done ? "done" : ""} ${
          localDateKey(date) === localDateKey() ? "today" : ""
        }">
          <i></i>
          ${label}
        </span>
      `;
    })
    .join("");
  document.querySelector("#weekly-count").textContent = `${weekCount}/7`;
}

function speak(text) {
  if (!("speechSynthesis" in window)) {
    showToast("이 브라우저에서는 음성 재생을 지원하지 않아요.");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = {
    beginner: 0.72,
    intermediate: 0.82,
    advanced: 0.92,
  }[state.difficulty];
  utterance.pitch = 1;
  const englishVoice = window.speechSynthesis
    .getVoices()
    .find((voice) => voice.lang.startsWith("en-US"));
  if (englishVoice) utterance.voice = englishVoice;
  window.speechSynthesis.speak(utterance);
}

function toggleBookmark() {
  const expression = state.dailyExpressions[state.activeIndex];
  if (state.saved.has(expression.id)) {
    state.saved.delete(expression.id);
    showToast("저장한 표현에서 삭제했어요.");
  } else {
    state.saved.add(expression.id);
    showToast("표현을 저장했어요.");
  }
  localStorage.setItem(STORAGE.saved, JSON.stringify([...state.saved]));
  renderCurrentLesson();
  renderSaved();
}

function renderSaved() {
  const savedExpressions = allExpressions.filter((expression) => state.saved.has(expression.id));
  const grid = document.querySelector("#saved-grid");
  const empty = document.querySelector("#saved-empty");
  empty.classList.toggle("hidden", savedExpressions.length > 0);

  grid.innerHTML = savedExpressions
    .map(
      (expression) => `
        <article class="saved-card">
          <div class="saved-card-top">
            <span>${expression.category}</span>
            <button class="icon-button saved" data-remove-saved="${expression.id}" aria-label="저장 취소">
              <i data-lucide="bookmark-x"></i>
            </button>
          </div>
          <h2>${expression.phrase}</h2>
          <p>${expression.meaning}</p>
          <button class="listen-button" data-speak-saved="${expression.id}">
            <i data-lucide="volume-2"></i>
            발음 듣기
          </button>
        </article>
      `,
    )
    .join("");

  grid.querySelectorAll("[data-remove-saved]").forEach((button) => {
    button.addEventListener("click", () => {
      state.saved.delete(button.dataset.removeSaved);
      localStorage.setItem(STORAGE.saved, JSON.stringify([...state.saved]));
      renderSaved();
      renderCurrentLesson();
      renderBusinessLesson();
      showToast("저장한 표현에서 삭제했어요.");
    });
  });

  grid.querySelectorAll("[data-speak-saved]").forEach((button) => {
    button.addEventListener("click", () => {
      const expression = allExpressions.find((item) => item.id === button.dataset.speakSaved);
      if (expression) speak(expression.phrase);
    });
  });
  renderIcons();
}

function switchView(viewName) {
  refreshDailyContent({ announce: true });
  if (viewName !== "conversation") stopConversationRecognition();
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
  document.querySelector(`#${viewName}-view`)?.classList.add("active");
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewName);
  });
  if (viewName === "saved") renderSaved();
  if (viewName === "business") renderBusinessLesson();
  if (viewName === "conversation" && !document.querySelector("#live-chat-log").children.length) {
    resetConversation();
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
  renderIcons();
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.querySelector("span").textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function renderDifficulty() {
  const labels = {
    beginner: { korean: "초급", english: "Beginner" },
    intermediate: { korean: "중급", english: "Intermediate" },
    advanced: { korean: "고급", english: "Advanced" },
  };
  const current = labels[state.difficulty];
  document.querySelector("#difficulty-label").textContent = current.korean;
  document.querySelector("#profile-level").textContent = current.english;
  document.querySelectorAll("[data-difficulty]").forEach((button) => {
    button.classList.toggle("active", button.dataset.difficulty === state.difficulty);
  });
}

function setDifficulty(level) {
  refreshDailyContent({ announce: true });
  if (!difficultyExpressionIds[level] || level === state.difficulty) return;
  state.difficulty = level;
  localStorage.setItem(STORAGE.difficulty, level);
  state.activeIndex = 0;
  state.dailyExpressions = getDailyExpressions(state.todayKey);
  loadTodayProgress(state.todayKey);
  renderDifficulty();
  renderCurrentLesson();
  renderProgress();
  const label = document.querySelector("#difficulty-label").textContent;
  showToast(`${label} 난이도로 학습 표현을 바꿨어요.`);
}

function isStandaloneApp() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  );
}

function isIosDevice() {
  return /iphone|ipad|ipod/i.test(window.navigator.userAgent);
}

function renderInstallInstructions() {
  const instructions = document.querySelector("#install-instructions");
  const confirmButton = document.querySelector("#install-confirm-button");

  if (isStandaloneApp()) {
    instructions.innerHTML = `
      <div class="install-step">
        <span><i data-lucide="check"></i></span>
        <p>Fiveish가 이미 이 기기에 설치되어 있습니다.</p>
      </div>
    `;
    confirmButton.hidden = true;
  } else if (isIosDevice()) {
    instructions.innerHTML = `
      <div class="install-step"><span>1</span><p>Safari 하단의 <strong>공유</strong> 버튼을 누르세요.</p></div>
      <div class="install-step"><span>2</span><p><strong>홈 화면에 추가</strong>를 선택하세요.</p></div>
      <div class="install-step"><span>3</span><p>오른쪽 위의 <strong>추가</strong>를 누르면 설치됩니다.</p></div>
    `;
    confirmButton.hidden = true;
  } else if (deferredInstallPrompt) {
    instructions.innerHTML = `
      <div class="install-step">
        <span><i data-lucide="smartphone"></i></span>
        <p>설치하면 브라우저 주소창 없이 독립 앱처럼 실행되고 홈 화면에서 바로 열 수 있어요.</p>
      </div>
    `;
    confirmButton.hidden = false;
  } else {
    instructions.innerHTML = `
      <div class="install-step"><span>1</span><p>브라우저 메뉴에서 <strong>앱 설치</strong> 또는 <strong>홈 화면에 추가</strong>를 선택하세요.</p></div>
      <div class="install-step"><span>2</span><p>공개 HTTPS 주소나 localhost에서 설치할 수 있습니다.</p></div>
    `;
    confirmButton.hidden = true;
  }
  renderIcons();
}

function openInstallModal() {
  const modal = document.querySelector("#install-modal");
  renderInstallInstructions();
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeInstallModal() {
  const modal = document.querySelector("#install-modal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

async function promptInstall() {
  if (!deferredInstallPrompt) {
    renderInstallInstructions();
    return;
  }
  deferredInstallPrompt.prompt();
  const choice = await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  closeInstallModal();
  showToast(
    choice.outcome === "accepted"
      ? "Fiveish 설치를 시작했어요."
      : "설치를 취소했어요.",
  );
}

function setupInstallExperience() {
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    renderInstallInstructions();
  });
  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    document.querySelector("#install-app-button").classList.add("installed");
    closeInstallModal();
    showToast("Fiveish가 이 기기에 설치됐어요.");
  });

  document.querySelector("#install-app-button").addEventListener("click", openInstallModal);
  document.querySelector("#mobile-stats").addEventListener("click", openInstallModal);
  document.querySelector("#close-install-modal").addEventListener("click", closeInstallModal);
  document.querySelector("#install-confirm-button").addEventListener("click", promptInstall);
  document.querySelector("#install-modal").addEventListener("click", (event) => {
    if (event.target.id === "install-modal") closeInstallModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeInstallModal();
  });

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {
      console.warn("Fiveish service worker registration failed.");
    });
  }
}

function parseTimestamp(timestamp) {
  const parts = timestamp.split(":").map(Number);
  if (parts.some(Number.isNaN)) return null;
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  return null;
}

function formatTimestamp(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remaining = Math.floor(seconds % 60);
  return `${String(minutes).padStart(2, "0")}:${String(remaining).padStart(2, "0")}`;
}

function parseTranscript(raw) {
  return raw
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const match = line.match(/^\[(\d{1,2}:\d{2}(?::\d{2})?)\]\s*(.*)$/);
      if (!match) return null;
      const time = parseTimestamp(match[1]);
      const [english, korean = ""] = match[2].split("|").map((part) => part.trim());
      if (time === null || !english) return null;
      return { time, english, korean };
    })
    .filter(Boolean)
    .sort((a, b) => a.time - b.time);
}

function renderTranscript() {
  state.transcript = parseTranscript(state.transcriptRaw);
  const list = document.querySelector("#transcript-list");
  list.innerHTML = state.transcript.length
    ? state.transcript
        .map(
          (line, index) => `
            <button class="transcript-line ${
              index === state.activeTranscriptIndex ? "active" : ""
            }" data-transcript-index="${index}">
              <span class="transcript-time">${formatTimestamp(line.time)}</span>
              <span class="transcript-copy">
                <strong>${line.english}</strong>
                <small>${line.korean || "뜻을 추가해보세요."}</small>
              </span>
              <i data-lucide="play"></i>
            </button>
          `,
        )
        .join("")
    : `
      <div class="empty-state">
        <span><i data-lucide="file-question"></i></span>
        <h2>올바른 스크립트가 없어요</h2>
        <p>[00:12] English sentence | 한국어 뜻 형식을 확인해주세요.</p>
      </div>
    `;

  list.querySelectorAll("[data-transcript-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.transcriptIndex);
      state.activeTranscriptIndex = index;
      seekToTranscript(index);
      updateActiveTranscript(index, false);
    });
  });
  renderIcons();
}

function updateActiveTranscript(index, shouldScroll = true) {
  if (index === state.activeTranscriptIndex && shouldScroll) return;
  state.activeTranscriptIndex = index;
  const lines = document.querySelectorAll(".transcript-line");
  lines.forEach((line, lineIndex) => line.classList.toggle("active", lineIndex === index));
  if (shouldScroll && index >= 0) {
    lines[index]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function seekToTranscript(index) {
  const line = state.transcript[index];
  if (!line || !state.playerReady || !player) {
    if (!state.playerReady) showToast("영상이 준비되면 해당 문장부터 재생할게요.");
    return;
  }
  player.seekTo(line.time, true);
  player.playVideo();
}

function monitorTranscript() {
  clearInterval(transcriptTimer);
  transcriptTimer = setInterval(() => {
    if (!state.playerReady || !player || !state.transcript.length) return;
    const currentTime = player.getCurrentTime();

    if (state.loopActive && state.activeTranscriptIndex >= 0) {
      const start = state.transcript[state.activeTranscriptIndex].time;
      const nextLine = state.transcript[state.activeTranscriptIndex + 1];
      const end = nextLine ? nextLine.time : start + 8;
      if (currentTime >= end - 0.08 || currentTime < start - 0.5) {
        player.seekTo(start, true);
      }
      return;
    }

    let activeIndex = -1;
    for (let index = 0; index < state.transcript.length; index += 1) {
      if (currentTime >= state.transcript[index].time) activeIndex = index;
      else break;
    }
    if (activeIndex !== state.activeTranscriptIndex) {
      updateActiveTranscript(activeIndex);
    }
  }, 250);
}

function extractYouTubeId(urlValue) {
  const value = urlValue.trim();
  if (/^[\w-]{11}$/.test(value)) return value;
  try {
    const url = new URL(value);
    if (url.hostname.includes("youtu.be")) return url.pathname.split("/").filter(Boolean)[0] || null;
    if (url.pathname.startsWith("/shorts/") || url.pathname.startsWith("/embed/")) {
      return url.pathname.split("/")[2] || null;
    }
    return url.searchParams.get("v");
  } catch {
    return null;
  }
}

function updatePlayButton(isPlaying) {
  const button = document.querySelector("#toggle-play");
  button.innerHTML = `<i data-lucide="${isPlaying ? "pause" : "play"}"></i>`;
  button.setAttribute("aria-label", isPlaying ? "일시정지" : "재생");
  renderIcons();
}

function createYouTubePlayer() {
  if (!window.YT?.Player || player) return;
  player = new window.YT.Player("youtube-player", {
    videoId: state.currentVideoId,
    playerVars: {
      playsinline: 1,
      rel: 0,
      modestbranding: 1,
    },
    events: {
      onReady: () => {
        state.playerReady = true;
        document.querySelector("#video-placeholder").classList.add("hidden");
        monitorTranscript();
      },
      onStateChange: (event) => {
        updatePlayButton(event.data === window.YT.PlayerState.PLAYING);
      },
      onError: () => {
        showToast("영상을 불러오지 못했어요. 공개 YouTube URL인지 확인해주세요.");
      },
    },
  });
}

window.onYouTubeIframeAPIReady = createYouTubePlayer;

function loadVideoFromInput() {
  const value = document.querySelector("#youtube-url").value;
  const videoId = extractYouTubeId(value);
  if (!videoId) {
    showToast("올바른 YouTube URL을 입력해주세요.");
    return;
  }
  state.currentVideoId = videoId;
  if (state.playerReady && player) {
    player.cueVideoById(videoId);
    document.querySelector("#video-placeholder").classList.add("hidden");
  } else {
    createYouTubePlayer();
  }
  document.querySelector("#video-title").textContent = "나의 YouTube 쉐도잉 영상";
  state.activeTranscriptIndex = -1;
  updateActiveTranscript(-1, false);
  showToast("영상을 불러왔어요. 스크립트를 맞춰보세요.");
}

function setupShadowingControls() {
  document.querySelector("#load-video").addEventListener("click", loadVideoFromInput);
  document.querySelector("#youtube-url").addEventListener("keydown", (event) => {
    if (event.key === "Enter") loadVideoFromInput();
  });

  document.querySelector("#toggle-play").addEventListener("click", () => {
    if (!state.playerReady || !player) return;
    const isPlaying = player.getPlayerState() === window.YT.PlayerState.PLAYING;
    if (isPlaying) player.pauseVideo();
    else player.playVideo();
  });

  document.querySelector("#back-five").addEventListener("click", () => {
    if (state.playerReady && player) player.seekTo(Math.max(0, player.getCurrentTime() - 5), true);
  });

  document.querySelector("#forward-five").addEventListener("click", () => {
    if (state.playerReady && player) player.seekTo(player.getCurrentTime() + 5, true);
  });

  document.querySelectorAll("[data-speed]").forEach((button) => {
    button.addEventListener("click", () => {
      if (state.playerReady && player) player.setPlaybackRate(Number(button.dataset.speed));
      document
        .querySelectorAll("[data-speed]")
        .forEach((speedButton) => speedButton.classList.toggle("active", speedButton === button));
    });
  });

  document.querySelector("#loop-toggle").addEventListener("click", () => {
    state.loopActive = !state.loopActive;
    const button = document.querySelector("#loop-toggle");
    button.classList.toggle("active", state.loopActive);
    button.setAttribute("aria-pressed", String(state.loopActive));
    if (state.loopActive && state.activeTranscriptIndex < 0 && state.transcript.length) {
      state.activeTranscriptIndex = 0;
      seekToTranscript(0);
      updateActiveTranscript(0, false);
    }
    showToast(state.loopActive ? "현재 문장을 반복 재생해요." : "문장 반복을 해제했어요.");
  });

  document.querySelector("#open-youtube").addEventListener("click", () => {
    window.open(`https://www.youtube.com/watch?v=${state.currentVideoId}`, "_blank", "noopener");
  });
}

function setupScriptEditor() {
  const modal = document.querySelector("#script-modal");
  const editor = document.querySelector("#script-editor");
  editor.value = state.transcriptRaw;

  const openModal = () => {
    editor.value = state.transcriptRaw;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    setTimeout(() => editor.focus(), 50);
  };

  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  };

  document.querySelector("#open-script-editor").addEventListener("click", openModal);
  document.querySelector("#close-script-editor").addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) closeModal();
  });

  document.querySelector("#restore-script").addEventListener("click", () => {
    editor.value = defaultTranscript;
  });

  document.querySelector("#save-script").addEventListener("click", () => {
    const parsed = parseTranscript(editor.value);
    if (!parsed.length) {
      showToast("타임코드 형식을 확인해주세요.");
      return;
    }
    state.transcriptRaw = editor.value.trim();
    localStorage.setItem(STORAGE.transcript, state.transcriptRaw);
    state.activeTranscriptIndex = -1;
    renderTranscript();
    closeModal();
    showToast(`${parsed.length}개 문장을 스크립트에 적용했어요.`);
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function countEnglishWords(value) {
  return (value.trim().match(/[A-Za-z]+(?:['’-][A-Za-z]+)*/g) || []).length;
}

function getSpeechRecognition() {
  return window.SpeechRecognition || window.webkitSpeechRecognition || null;
}

function appendConversationMessage(role, text) {
  const log = document.querySelector("#live-chat-log");
  const label = role === "tutor" ? "MIA" : "YOU";
  const avatar = role === "tutor" ? "M" : "Y";
  log.insertAdjacentHTML(
    "beforeend",
    `
      <div class="live-message ${role}">
        <span class="live-message-avatar">${avatar}</span>
        <div>
          <small>${label}</small>
          <p>${escapeHtml(text)}</p>
          ${
            role === "tutor"
              ? `<button class="message-listen" data-conversation-speak="${encodeURIComponent(text)}" aria-label="튜터 문장 듣기"><i data-lucide="volume-2"></i></button>`
              : ""
          }
        </div>
      </div>
    `,
  );
  log.querySelectorAll("[data-conversation-speak]").forEach((button) => {
    if (button.dataset.bound === "true") return;
    button.dataset.bound = "true";
    button.addEventListener("click", () => {
      speak(decodeURIComponent(button.dataset.conversationSpeak));
    });
  });
  log.scrollTop = log.scrollHeight;
  renderIcons();
}

function resetConversation(shouldSpeak = false) {
  const scenario = conversationScenarios[conversationState.scenario];
  conversationState.turn = 0;
  document.querySelector("#conversation-target").textContent = scenario.target;
  document.querySelector("#conversation-target-tip").textContent = scenario.targetTip;
  document.querySelector("#live-chat-log").innerHTML = "";
  document.querySelector("#conversation-input").value = "";
  document.querySelector("#turn-coaching").innerHTML = `
    <div class="coaching-empty">
      <span><i data-lucide="sparkles"></i></span>
      <p>영어로 답하면 자연스러움, 길이, 이어 말하기를 바로 확인해 드려요.</p>
    </div>
  `;
  appendConversationMessage("tutor", scenario.opening);
  if (shouldSpeak) speak(scenario.opening);
  renderIcons();
}

function analyzeConversationAnswer(answer) {
  const words = countEnglishWords(answer);
  const lower = answer.toLowerCase();
  const connectors = [
    "because",
    "so",
    "but",
    "actually",
    "though",
    "when",
    "if",
    "and",
  ].filter((word) => new RegExp(`\\b${word}\\b`).test(lower));
  const naturalMarkers = [
    "i'm",
    "i've",
    "i'd",
    "don't",
    "can't",
    "not gonna lie",
    "the thing is",
    "given that",
    "kind of",
    "pretty",
  ].filter((phrase) => lower.includes(phrase));
  const target = conversationScenarios[conversationState.scenario].target
    .replaceAll(".", "")
    .replaceAll(",", "")
    .trim()
    .toLowerCase();
  const targetUsed =
    lower.includes(target) ||
    (conversationState.scenario === "cafe" && /could i get|i'd like|can i have/.test(lower));
  const score = Math.min(
    100,
    42 + Math.min(words, 24) * 2 + connectors.length * 5 + naturalMarkers.length * 4,
  );

  let grammarTip = "";
  if (/\bi am go\b/i.test(answer)) {
    grammarTip = '"I am go" 대신 "I am going" 또는 "I go"가 자연스러워요.';
  } else if (/\bi very like\b/i.test(answer)) {
    grammarTip = '"I very like" 대신 "I really like"를 써보세요.';
  } else if (/\bdiscuss about\b/i.test(answer)) {
    grammarTip = '"discuss" 뒤에는 about 없이 목적어를 바로 붙여요.';
  } else if (words < 7) {
    grammarTip = "이유를 붙여 한 문장만 더 이어가면 대화가 훨씬 자연스러워져요.";
  } else {
    grammarTip = "문장 흐름이 좋아요. 다음에는 구체적인 예시 하나를 덧붙여보세요.";
  }

  return {
    words,
    score,
    targetUsed,
    grammarTip,
    connectorText: connectors.length
      ? `${connectors.slice(0, 3).join(", ")}로 문장을 잘 연결했어요.`
      : 'because, so, but 중 하나로 이유나 반전을 연결해보세요.',
  };
}

function renderConversationFeedback(feedback) {
  const coaching = document.querySelector("#turn-coaching");
  coaching.innerHTML = `
    <div class="turn-score">
      <strong>${feedback.score}</strong>
      <small>FLOW</small>
    </div>
    <div class="turn-feedback-copy">
      <span>${feedback.targetUsed ? "목표 표현 사용 성공" : "한 단계 더 자연스럽게"}</span>
      <strong>${feedback.grammarTip}</strong>
      <p>${feedback.connectorText} · ${feedback.words} words</p>
    </div>
  `;
}

function getConversationReply(answer) {
  const scenario = conversationScenarios[conversationState.scenario];
  const promptIndex = Math.min(conversationState.turn, scenario.prompts.length - 1);
  const lower = answer.toLowerCase();
  let acknowledgment = "That makes sense.";

  if (/\b(love|great|amazing|fun|enjoy)\b/.test(lower)) {
    acknowledgment = "I can see why you enjoy that.";
  } else if (/\b(problem|difficult|hard|delay|wrong)\b/.test(lower)) {
    acknowledgment = "I see. That does sound frustrating.";
  } else if (/\bmaybe|not sure|i think\b/.test(lower)) {
    acknowledgment = "Yeah, I get what you mean.";
  } else if (answer.trim().endsWith("?")) {
    acknowledgment = "Good question. I'd probably say yes.";
  }

  return `${acknowledgment} ${scenario.prompts[promptIndex]}`;
}

function sendConversationAnswer() {
  const input = document.querySelector("#conversation-input");
  const answer = input.value.trim();
  if (!answer) {
    showToast("영어 답변을 말하거나 입력해 주세요.");
    return;
  }

  appendConversationMessage("user", answer);
  const feedback = analyzeConversationAnswer(answer);
  renderConversationFeedback(feedback);
  input.value = "";
  const reply = getConversationReply(answer);
  conversationState.turn += 1;

  window.setTimeout(() => {
    appendConversationMessage("tutor", reply);
    speak(reply);
  }, 350);
}

function stopConversationRecognition() {
  if (conversationState.recognition && conversationState.listening) {
    conversationState.recognition.stop();
  }
}

function toggleConversationRecognition() {
  if (conversationState.listening) {
    stopConversationRecognition();
    return;
  }

  const Recognition = getSpeechRecognition();
  if (!Recognition) {
    document.querySelector("#conversation-input").focus();
    showToast("이 브라우저는 음성 인식을 지원하지 않아 직접 입력 모드로 전환했어요.");
    return;
  }

  const input = document.querySelector("#conversation-input");
  const button = document.querySelector("#conversation-mic");
  const status = document.querySelector("#conversation-mic-status");
  let finalText = "";
  const recognition = new Recognition();
  recognition.lang = "en-US";
  recognition.interimResults = true;
  recognition.continuous = false;

  recognition.onstart = () => {
    conversationState.listening = true;
    button.classList.add("recording");
    status.textContent = "듣고 있어요. 영어로 자연스럽게 말해보세요.";
  };
  recognition.onresult = (event) => {
    let interimText = "";
    for (let index = event.resultIndex; index < event.results.length; index += 1) {
      const transcript = event.results[index][0].transcript;
      if (event.results[index].isFinal) finalText += transcript;
      else interimText += transcript;
    }
    input.value = `${finalText}${interimText}`.trim();
  };
  recognition.onerror = (event) => {
    const message =
      event.error === "not-allowed"
        ? "마이크 권한이 필요합니다. 브라우저 설정에서 허용해 주세요."
        : "음성을 인식하지 못했어요. 다시 말하거나 직접 입력해 주세요.";
    showToast(message);
  };
  recognition.onend = () => {
    conversationState.listening = false;
    button.classList.remove("recording");
    status.textContent = "마이크를 누르면 말한 내용이 입력돼요.";
    if (finalText.trim()) sendConversationAnswer();
  };

  conversationState.recognition = recognition;
  recognition.start();
}

function getSelectedOpicTopics() {
  return [...document.querySelectorAll("#opic-topics input:checked")].map(
    (input) => input.value,
  );
}

function buildOpicQuestions(topicIds, level) {
  const selectedBanks = topicIds.flatMap((topicId) => opicTopicBanks[topicId].questions);
  const shuffled = seededShuffle(
    selectedBanks,
    dateSeed(localDateKey()) + topicIds.join("").length + level.length,
  );
  const supplemental = seededShuffle(
    Object.values(opicTopicBanks)
      .flatMap((bank) => bank.questions)
      .filter(
        (question) =>
          !selectedBanks.some((selected) => selected.prompt === question.prompt),
      ),
    dateSeed(localDateKey()) + 404,
  );
  const personalizedQuestions = [...shuffled, ...supplemental].slice(0, 7);
  const mainTopic = opicTopicBanks[topicIds[0]];
  const secondTopic = opicTopicBanks[topicIds[1]];
  const questions = [
    {
      type: "WARM-UP",
      prompt: "Let's start the interview now. Tell me something about yourself.",
      hint: "현재 하는 일 → 성격이나 관심사 → 요즘 즐기는 활동",
      keywords: ["name", "work", "live", "enjoy", "these days"],
    },
    ...personalizedQuestions,
    {
      type: "ROLE PLAY · ASK QUESTIONS",
      prompt: `Imagine that your friend knows a lot about ${mainTopic.label}. Call your friend and ask three or four questions to learn more about it.`,
      hint: "통화 목적 → 서로 다른 질문 3개 → 감사 인사",
      keywords: ["could", "what", "when", "where", "recommend"],
    },
    {
      type: "ROLE PLAY · PROBLEM",
      prompt: `There is a problem with a plan related to ${secondTopic.label}. Call the person involved, explain the problem, and offer two possible solutions.`,
      hint: "문제 설명 → 사과나 공감 → 해결책 두 가지",
      keywords: ["problem", "sorry", "could", "instead", "another"],
    },
    {
      type: "RELATED EXPERIENCE",
      prompt:
        "Tell me about a time when a plan suddenly changed. What was the situation, and how did you deal with it?",
      hint: "원래 계획 → 갑작스러운 변화 → 대처와 결과",
      keywords: ["planned", "suddenly", "so", "decided", "finally"],
    },
    level === "advanced"
      ? {
          type: "SOCIAL ISSUE",
          prompt:
            "Many people rely heavily on technology in their daily lives. What are the benefits and drawbacks, and what is your opinion?",
          hint: "현상 설명 → 장점 → 단점 → 나의 입장과 근거",
          keywords: ["benefit", "however", "problem", "opinion", "because"],
        }
      : {
          type: "COMPARISON",
          prompt: `Compare how people enjoy ${mainTopic.label} now with how they enjoyed it in the past.`,
          hint: "과거 → 현재 → 가장 큰 차이와 내 생각",
          keywords: ["past", "now", "used to", "different", "because"],
        },
  ];
  return questions.slice(0, 12);
}

function updateOpicTimer() {
  const minutes = Math.floor(opicState.secondsLeft / 60);
  const seconds = opicState.secondsLeft % 60;
  const timer = document.querySelector("#opic-timer");
  timer.querySelector("strong").textContent =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  timer.classList.toggle("urgent", opicState.secondsLeft <= 300);
}

function startOpicTimers() {
  clearInterval(opicState.timer);
  clearInterval(opicState.answerTimer);
  opicState.timer = window.setInterval(() => {
    opicState.secondsLeft -= 1;
    updateOpicTimer();
    if (opicState.secondsLeft <= 0) finishOpicTest();
  }, 1000);
  opicState.answerTimer = window.setInterval(() => {
    opicState.answerSeconds += 1;
    const minutes = Math.floor(opicState.answerSeconds / 60);
    const seconds = opicState.answerSeconds % 60;
    document.querySelector("#opic-record-status b").textContent =
      `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }, 1000);
}

function startOpicTest() {
  const topics = getSelectedOpicTopics();
  if (topics.length < 3) {
    showToast("배경 설문에서 경험 있는 주제를 3개 이상 선택해 주세요.");
    return;
  }
  opicState.level =
    document.querySelector('input[name="opic-level"]:checked')?.value || "intermediate";
  opicState.coaching = document.querySelector("#opic-coaching-mode").checked;
  opicState.questions = buildOpicQuestions(topics, opicState.level);
  opicState.currentIndex = 0;
  opicState.answers = [];
  opicState.secondsLeft = 40 * 60;
  document.querySelector("#opic-setup").classList.add("hidden");
  document.querySelector("#opic-result").classList.add("hidden");
  document.querySelector("#opic-test").classList.remove("hidden");
  document.querySelector("#opic-question-total").textContent = opicState.questions.length;
  updateOpicTimer();
  renderOpicQuestion();
  startOpicTimers();
  document.querySelector("#opic-test").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderOpicQuestion() {
  const question = opicState.questions[opicState.currentIndex];
  if (!question) {
    finishOpicTest();
    return;
  }
  opicState.replayCount = 0;
  opicState.answerSeconds = 0;
  opicState.questionStartedAt = Date.now();
  document.querySelector("#opic-question-number").textContent = opicState.currentIndex + 1;
  document.querySelector("#opic-progress-bar").style.width =
    `${((opicState.currentIndex + 1) / opicState.questions.length) * 100}%`;
  document.querySelector("#opic-question-type").textContent = question.type;
  document.querySelector("#opic-question-text").textContent = question.prompt;
  document.querySelector("#opic-hint").textContent = question.hint;
  document.querySelector("#opic-hint").classList.add("hidden");
  document.querySelector("#opic-hint-toggle").classList.remove("active");
  document.querySelector("#opic-replay-count").textContent = "0/2";
  document.querySelector("#replay-opic-question").disabled = false;
  document.querySelector("#opic-answer").value = "";
  document.querySelector("#opic-word-count").textContent = "0";
  document.querySelector("#opic-record-status b").textContent = "00:00";
  document.querySelector("#opic-submit-answer").disabled = false;
  document.querySelector("#opic-question-feedback").classList.add("hidden");
  document.querySelector("#opic-question-feedback").innerHTML = "";
  speak(question.prompt);
}

function evaluateOpicAnswer(answer, question, duration) {
  const words = countEnglishWords(answer);
  const lower = answer.toLowerCase();
  const targetWords = {
    intermediate: 45,
    upper: 75,
    advanced: 100,
  }[opicState.level];
  const keywordHits = question.keywords.filter((keyword) => lower.includes(keyword)).length;
  const connectors = [
    "because",
    "so",
    "but",
    "first",
    "then",
    "after",
    "however",
    "actually",
    "while",
    "when",
    "for example",
    "in the past",
    "these days",
  ].filter((phrase) => lower.includes(phrase));
  const details = (answer.match(/\b\d+\b/g) || []).length +
    (answer.match(/\b(when|where|who|which|that)\b/gi) || []).length;
  const task = Math.min(100, 36 + keywordHits * 11 + Math.min(words / targetWords, 1) * 30);
  const structure = Math.min(100, 40 + connectors.length * 9 + (words >= 35 ? 15 : 0));
  const detail = Math.min(100, 34 + details * 6 + Math.min(words / targetWords, 1) * 42);
  const naturalness = Math.min(
    100,
    44 +
      (answer.match(/\b(I've|I'm|I'd|don't|didn't|can't|it's|that's)\b/gi) || []).length * 5 +
      Math.min(duration, 90) / 3,
  );
  const total = Math.round(task * 0.32 + structure * 0.26 + detail * 0.24 + naturalness * 0.18);

  let grammarTip = "시제와 주어를 안정적으로 유지했어요.";
  if (/\bi am go\b/i.test(answer)) {
    grammarTip = '"I am go"는 "I am going" 또는 "I go"로 고쳐보세요.';
  } else if (/\bi very like\b/i.test(answer)) {
    grammarTip = '"I really like"가 자연스러운 어순이에요.';
  } else if (/\bpeople is\b/i.test(answer)) {
    grammarTip = '복수 주어 "people" 뒤에는 "are"를 써요.';
  } else if (!/\b(was|were|did|went|had|used to)\b/i.test(answer) && /PAST|EXPERIENCE/.test(question.type)) {
    grammarTip = "과거 경험 문항에서는 과거 시제를 더 분명하게 표시해보세요.";
  }

  const strength =
    words >= targetWords
      ? "충분한 길이로 답변을 확장했어요."
      : keywordHits >= 3
        ? "질문의 핵심 과업을 놓치지 않았어요."
        : "답변을 멈추지 않고 완성한 점이 좋아요.";
  const next =
    connectors.length < 2
      ? "because, after that, however 같은 연결어를 2개 이상 넣어보세요."
      : words < targetWords
        ? `구체적인 장면과 느낌을 더해 ${targetWords}단어 안팎까지 늘려보세요.`
        : "결론에서 그 경험이 나에게 준 변화나 의견을 한 문장으로 정리해보세요.";

  return {
    answer,
    duration,
    words,
    total,
    metrics: {
      task: Math.round(task),
      structure: Math.round(structure),
      detail: Math.round(detail),
      naturalness: Math.round(naturalness),
    },
    strength,
    next,
    grammarTip,
  };
}

function renderOpicQuestionFeedback(result) {
  const feedback = document.querySelector("#opic-question-feedback");
  feedback.classList.remove("hidden");
  feedback.innerHTML = `
    <div class="opic-feedback-score">
      <strong>${result.total}</strong>
      <small>PRACTICE SCORE</small>
    </div>
    <div class="opic-feedback-body">
      <span class="section-kicker">INSTANT FEEDBACK</span>
      <h3>${result.strength}</h3>
      <div class="opic-feedback-points">
        <p><i data-lucide="wand-sparkles"></i><span><strong>더 자연스럽게</strong>${result.grammarTip}</span></p>
        <p><i data-lucide="arrow-up-right"></i><span><strong>다음 답변 목표</strong>${result.next}</span></p>
      </div>
    </div>
    <button class="primary-button" id="opic-next-question">
      ${opicState.currentIndex === opicState.questions.length - 1 ? "결과 보기" : "다음 문항"}
      <i data-lucide="arrow-right"></i>
    </button>
  `;
  renderIcons();
  document.querySelector("#opic-next-question").addEventListener("click", moveToNextOpicQuestion);
  feedback.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function submitOpicAnswer() {
  const answer = document.querySelector("#opic-answer").value.trim();
  if (countEnglishWords(answer) < 3) {
    showToast("평가할 수 있도록 영어로 조금 더 길게 답해 주세요.");
    return;
  }
  stopOpicRecognition();
  const question = opicState.questions[opicState.currentIndex];
  const result = evaluateOpicAnswer(answer, question, opicState.answerSeconds);
  opicState.answers.push({ ...result, question });
  document.querySelector("#opic-submit-answer").disabled = true;

  if (opicState.coaching) {
    renderOpicQuestionFeedback(result);
  } else {
    moveToNextOpicQuestion();
  }
}

function moveToNextOpicQuestion() {
  opicState.currentIndex += 1;
  if (opicState.currentIndex >= opicState.questions.length) {
    finishOpicTest();
  } else {
    renderOpicQuestion();
    document.querySelector("#opic-test").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function getOpicRange(score) {
  if (score >= 84) return "AL 가능성";
  if (score >= 73) return "IH ~ AL";
  if (score >= 61) return "IM ~ IH";
  if (score >= 49) return "IL ~ IM";
  return "NL ~ IL";
}

function finishOpicTest() {
  clearInterval(opicState.timer);
  clearInterval(opicState.answerTimer);
  stopOpicRecognition();
  window.speechSynthesis?.cancel();
  const answers = opicState.answers;
  const average = answers.length
    ? Math.round(answers.reduce((sum, answer) => sum + answer.total, 0) / answers.length)
    : 0;
  const metricNames = ["task", "structure", "detail", "naturalness"];
  const metricAverages = Object.fromEntries(
    metricNames.map((name) => [
      name,
      answers.length
        ? Math.round(
            answers.reduce((sum, answer) => sum + answer.metrics[name], 0) / answers.length,
          )
        : 0,
    ]),
  );
  const range = getOpicRange(average);
  const history = JSON.parse(localStorage.getItem(STORAGE.opicHistory) || "[]");
  history.unshift({
    date: localDateKey(),
    average,
    range,
    answered: answers.length,
  });
  localStorage.setItem(STORAGE.opicHistory, JSON.stringify(history.slice(0, 5)));

  document.querySelector("#opic-test").classList.add("hidden");
  const result = document.querySelector("#opic-result");
  result.classList.remove("hidden");
  result.innerHTML = `
    <div class="opic-result-hero">
      <div class="result-score-ring">
        <strong>${average}</strong>
        <small>OVERALL</small>
      </div>
      <div>
        <span class="section-kicker">MOCK TEST COMPLETE</span>
        <h2>예상 연습 범위: <em>${range}</em></h2>
        <p>${answers.length}개 답변을 바탕으로 분석했어요. 공식 등급이 아닌 학습 방향을 잡기 위한 참고 결과입니다.</p>
      </div>
    </div>
    <div class="opic-result-metrics">
      ${[
        ["task", "과업 수행"],
        ["structure", "문장 연결"],
        ["detail", "구체성"],
        ["naturalness", "자연스러움"],
      ]
        .map(
          ([key, label]) => `
            <div>
              <span><b>${label}</b><strong>${metricAverages[key]}</strong></span>
              <i><em style="width:${metricAverages[key]}%"></em></i>
            </div>
          `,
        )
        .join("")}
    </div>
    <div class="opic-result-summary">
      <h3>다음 연습에서 집중할 것</h3>
      <div class="result-advice-grid">
        <article><span>01</span><strong>답변 구조</strong><p>핵심 답변 → 구체적 장면 → 느낌이나 결론의 3단계로 말하세요.</p></article>
        <article><span>02</span><strong>시제 유지</strong><p>경험 문항은 과거, 루틴 문항은 현재 시제를 처음부터 분명히 잡으세요.</p></article>
        <article><span>03</span><strong>연결어</strong><p>because, after that, however를 이용해 짧은 문장을 하나의 이야기로 묶으세요.</p></article>
      </div>
    </div>
    <div class="opic-result-actions">
      <button class="secondary-button" id="review-opic-answers"><i data-lucide="list-checks"></i>답변별 피드백</button>
      <button class="primary-button" id="restart-opic-test"><i data-lucide="rotate-ccw"></i>다시 응시하기</button>
    </div>
    <div class="opic-answer-review hidden" id="opic-answer-review">
      ${answers
        .map(
          (answer, index) => `
            <article>
              <span>Q${String(index + 1).padStart(2, "0")} · ${escapeHtml(answer.question.type)}</span>
              <h4>${escapeHtml(answer.question.prompt)}</h4>
              <p>${escapeHtml(answer.answer)}</p>
              <div><strong>${answer.total}점</strong><small>${escapeHtml(answer.next)}</small></div>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
  renderIcons();
  document.querySelector("#restart-opic-test").addEventListener("click", resetOpicTest);
  document.querySelector("#review-opic-answers").addEventListener("click", () => {
    document.querySelector("#opic-answer-review").classList.toggle("hidden");
  });
  result.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetOpicTest() {
  clearInterval(opicState.timer);
  clearInterval(opicState.answerTimer);
  stopOpicRecognition();
  document.querySelector("#opic-test").classList.add("hidden");
  document.querySelector("#opic-result").classList.add("hidden");
  document.querySelector("#opic-setup").classList.remove("hidden");
  document.querySelector("#opic-setup").scrollIntoView({ behavior: "smooth", block: "start" });
}

function replayOpicQuestion() {
  if (opicState.replayCount >= 2) return;
  opicState.replayCount += 1;
  document.querySelector("#opic-replay-count").textContent = `${opicState.replayCount}/2`;
  document.querySelector("#replay-opic-question").disabled = opicState.replayCount >= 2;
  speak(opicState.questions[opicState.currentIndex].prompt);
}

function stopOpicRecognition() {
  if (opicState.recognition && opicState.listening) {
    opicState.recognition.stop();
  }
}

function toggleOpicRecognition() {
  if (opicState.listening) {
    stopOpicRecognition();
    return;
  }
  const Recognition = getSpeechRecognition();
  if (!Recognition) {
    document.querySelector("#opic-answer").focus();
    showToast("이 브라우저는 음성 인식을 지원하지 않아 직접 입력 모드로 전환했어요.");
    return;
  }

  const answer = document.querySelector("#opic-answer");
  const button = document.querySelector("#opic-record-button");
  const label = button.querySelector("span");
  let finalText = answer.value.trim();
  const recognition = new Recognition();
  recognition.lang = "en-US";
  recognition.interimResults = true;
  recognition.continuous = true;
  recognition.onstart = () => {
    opicState.listening = true;
    button.classList.add("recording");
    label.textContent = "녹음 중지";
  };
  recognition.onresult = (event) => {
    let interimText = "";
    for (let index = event.resultIndex; index < event.results.length; index += 1) {
      const transcript = event.results[index][0].transcript;
      if (event.results[index].isFinal) {
        finalText = `${finalText} ${transcript}`.trim();
      } else {
        interimText += transcript;
      }
    }
    answer.value = `${finalText} ${interimText}`.trim();
    document.querySelector("#opic-word-count").textContent = countEnglishWords(answer.value);
  };
  recognition.onerror = (event) => {
    showToast(
      event.error === "not-allowed"
        ? "마이크 권한이 필요합니다. 브라우저 설정에서 허용해 주세요."
        : "음성 인식이 잠시 멈췄어요. 다시 시도하거나 직접 입력해 주세요.",
    );
  };
  recognition.onend = () => {
    opicState.listening = false;
    button.classList.remove("recording");
    label.textContent = "답변 녹음 시작";
  };
  opicState.recognition = recognition;
  recognition.start();
}

function bindEvents() {
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.view));
  });
  document.querySelectorAll("[data-go-today]").forEach((button) => {
    button.addEventListener("click", () => switchView("today"));
  });
  document.querySelectorAll("[data-difficulty]").forEach((button) => {
    button.addEventListener("click", () => setDifficulty(button.dataset.difficulty));
  });
  document.querySelectorAll("[data-conversation-scenario]").forEach((button) => {
    button.addEventListener("click", () => {
      stopConversationRecognition();
      conversationState.scenario = button.dataset.conversationScenario;
      document.querySelectorAll("[data-conversation-scenario]").forEach((item) => {
        item.classList.toggle("active", item === button);
      });
      resetConversation(true);
    });
  });
  document.querySelector("#reset-conversation").addEventListener("click", () => {
    stopConversationRecognition();
    resetConversation(true);
  });
  document.querySelector("#conversation-mic").addEventListener("click", toggleConversationRecognition);
  document.querySelector("#send-conversation").addEventListener("click", sendConversationAnswer);
  document.querySelector("#conversation-input").addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendConversationAnswer();
    }
  });
  document.querySelector("#start-opic-test").addEventListener("click", startOpicTest);
  document.querySelector("#exit-opic-test").addEventListener("click", () => {
    if (window.confirm("진행 중인 모의고사를 종료하고 설정 화면으로 돌아갈까요?")) {
      resetOpicTest();
    }
  });
  document.querySelector("#replay-opic-question").addEventListener("click", replayOpicQuestion);
  document.querySelector("#opic-hint-toggle").addEventListener("click", () => {
    document.querySelector("#opic-hint").classList.toggle("hidden");
    document.querySelector("#opic-hint-toggle").classList.toggle("active");
  });
  document.querySelector("#opic-answer").addEventListener("input", (event) => {
    document.querySelector("#opic-word-count").textContent = countEnglishWords(event.target.value);
  });
  document.querySelector("#opic-record-button").addEventListener("click", toggleOpicRecognition);
  document.querySelector("#opic-submit-answer").addEventListener("click", submitOpicAnswer);
  document.querySelector("#start-speaking").addEventListener("click", () => {
    document
      .querySelector("#lesson-card")
      .scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(
      () => speak(state.dailyExpressions[state.activeIndex].phrase),
      350,
    );
  });

  document.querySelector("#listen-button").addEventListener("click", () => {
    speak(state.dailyExpressions[state.activeIndex].phrase);
  });
  document.querySelector("#bookmark-button").addEventListener("click", toggleBookmark);
  document
    .querySelector("#business-bookmark-button")
    .addEventListener("click", toggleBusinessBookmark);
  document.querySelector("#business-listen-button").addEventListener("click", () => {
    speak(businessState.dailyExpressions[businessState.activeIndex].phrase);
  });

  document.querySelector("#complete-lesson").addEventListener("click", () => {
    const expression = state.dailyExpressions[state.activeIndex];
    if (state.completed.has(expression.id)) {
      state.completed.delete(expression.id);
    } else {
      state.completed.add(expression.id);
      markStudyDate();
      showToast("오늘의 표현 하나를 익혔어요.");
    }
    saveProgress();
    renderProgress();
    renderCurrentLesson();
  });

  document.querySelector("#prev-lesson").addEventListener("click", () => {
    if (state.activeIndex > 0) {
      state.activeIndex -= 1;
      renderCurrentLesson();
      document.querySelector("#lesson-card").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  document.querySelector("#next-lesson").addEventListener("click", () => {
    if (state.activeIndex < state.dailyExpressions.length - 1) {
      state.activeIndex += 1;
      renderCurrentLesson();
      document.querySelector("#lesson-card").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  document.querySelector("#reset-progress").addEventListener("click", () => {
    if (!window.confirm("오늘의 학습 진도를 초기화할까요?")) return;
    state.completed.clear();
    saveProgress();
    renderProgress();
    renderCurrentLesson();
    showToast("오늘의 진도를 초기화했어요.");
  });

  document.querySelector("#business-complete-lesson").addEventListener("click", () => {
    const expression = businessState.dailyExpressions[businessState.activeIndex];
    if (businessState.completed.has(expression.id)) {
      businessState.completed.delete(expression.id);
    } else {
      businessState.completed.add(expression.id);
      markStudyDate();
      showToast("오늘의 비즈니스 표현을 익혔어요.");
    }
    saveBusinessProgress();
    renderBusinessLesson();
  });

  document.querySelector("#business-prev-lesson").addEventListener("click", () => {
    if (businessState.activeIndex > 0) {
      businessState.activeIndex -= 1;
      renderBusinessLesson();
      document
        .querySelector("#business-lesson-card")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  document.querySelector("#business-next-lesson").addEventListener("click", () => {
    if (businessState.activeIndex < businessState.dailyExpressions.length - 1) {
      businessState.activeIndex += 1;
      renderBusinessLesson();
      document
        .querySelector("#business-lesson-card")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

function init() {
  state.todayKey = localDateKey();
  state.dailyExpressions = getDailyExpressions(state.todayKey);
  businessState.dailyExpressions = getDailyBusinessExpressions(state.todayKey);
  loadTodayProgress(state.todayKey);
  loadBusinessProgress(state.todayKey);
  setDateHeading(state.todayKey);
  renderDifficulty();
  renderCurrentLesson();
  renderBusinessLesson();
  renderProgress();
  renderStreak();
  renderWeek();
  renderSaved();
  renderTranscript();
  setupShadowingControls();
  setupScriptEditor();
  setupInstallExperience();
  bindEvents();
  setupDailyContentUpdates();
  resetConversation();
  renderIcons();

  if (window.YT?.Player) createYouTubePlayer();

  const requestedView = new URLSearchParams(window.location.search).get("view");
  if (
    ["today", "business", "shadowing", "conversation", "opic", "saved"].includes(
      requestedView,
    )
  ) {
    switchView(requestedView);
  }
}

document.addEventListener("DOMContentLoaded", init);
