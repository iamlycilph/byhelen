// Домашние тесты от Елены. Каждый тест — элемент массива HOMEWORK_TESTS.
// Формат теста:
//   id    — постоянный ключ (по нему хранится история попыток);
//   date  — дата задания, ГГГГ-ММ-ДД;
//   title, topics — заголовок и темы для карточки.
// Формат задания:
//   s    — предложение, пропуски помечены ___ (может быть два);
//   o    — 4 варианта; если пропусков два, части варианта разделены " / ";
//   a    — индекс правильного варианта (0..3 = A..D);
//   t    — тема задания (по ней считается статистика ошибок);
//   why  — короткое объяснение по-русски;
//   keys — слова-подсказки, подсвечиваются после ответа.
// Порядок заданий сохранён как на листе — сверять с Еленой по номерам.

window.HOMEWORK_TESTS = [
  {
    id: "test-12",
    date: "2026-07-16",
    title: "Test 12 · Elementary",
    topics: ["going to", "инфинитив цели", "предлоги", "what's … like / on"],
    tasks: [
      {
        s: "She ___ to be a ballet dancer when she ___ up.",
        o: ["go / grow", "going / grows", "goes / grows", "'s going / grows"],
        a: 3, t: "going to",
        why: "План на будущее → be going to: She's going to be. Во второй части после when — Present Simple, she → grows.",
        keys: ["when"]
      },
      {
        s: "We ___ to stay in a villa in France this summer.",
        o: ["going", "'re going", "to go", "go"],
        a: 1, t: "going to",
        why: "Намерение на лето → be going to + глагол: We're going to stay. Одного going мало — нужен глагол be (are).",
        keys: ["this summer"]
      },
      {
        s: "I ___ Peter tonight.",
        o: ["'m seeing", "see", "seeing", "to see"],
        a: 0, t: "Present Continuous",
        why: "Договорённость на сегодня вечером → Present Continuous: I'm seeing Peter.",
        keys: ["tonight"]
      },
      {
        s: "I'm going ___ Peter tonight.",
        o: ["see", "seeing", "to see", "saw"],
        a: 2, t: "going to",
        why: "be going + to + глагол: I'm going to see. После going перед глаголом всегда to.",
        keys: ["tonight"]
      },
      {
        s: "Careful! The glass is ___ fall.",
        o: ["going", "going to", "goes to", "go to"],
        a: 1, t: "going to",
        why: "Предсказание по видимым признакам (стакан уже на краю) → be going to: is going to fall.",
        keys: ["Careful!"]
      },
      {
        s: "We ___ to Paris this weekend.",
        o: ["going", "go", "'re going", "to go"],
        a: 2, t: "Present Continuous",
        why: "Поездка по договорённости → Present Continuous: We're going to Paris. Здесь to Paris — направление (куда), а не инфинитив.",
        keys: ["this weekend"]
      },
      {
        s: "Tom and Tim ___ for lunch tomorrow.",
        o: ["to come", "coming", "came", "are coming"],
        a: 3, t: "Present Continuous",
        why: "Договорённость на завтра → Present Continuous: are coming.",
        keys: ["tomorrow"]
      },
      {
        s: "I'm saving my money ___ a CD player.",
        o: ["buying", "to buy", "buy", "bought"],
        a: 1, t: "инфинитив цели",
        why: "Зачем коплю? → инфинитив цели: to buy (= чтобы купить).",
        keys: ["saving"]
      },
      {
        s: "We're going to Paris ___ a holiday.",
        o: ["to have", "have", "having", "had"],
        a: 0, t: "инфинитив цели",
        why: "Зачем едем? → инфинитив цели: to have a holiday (= чтобы отдохнуть).",
        keys: []
      },
      {
        s: "I'm going to Florida ___ a year's time.",
        o: ["at", "on", "in", "by"],
        a: 2, t: "предлоги",
        why: "in a year's time = через год. «Через какой-то срок» — всегда in.",
        keys: ["a year's time"]
      },
      {
        s: "He's interested ___ flying.",
        o: ["at", "in", "on", "with"],
        a: 1, t: "предлоги",
        why: "Устойчивая пара: interested in — интересоваться чем-то.",
        keys: ["interested"]
      },
      {
        s: "She's good ___ singing.",
        o: ["on", "at", "in", "with"],
        a: 1, t: "предлоги",
        why: "Устойчивая пара: good at — хорош в чём-то.",
        keys: ["good"]
      },
      {
        s: "She was afraid ___ cars.",
        o: ["at", "with", "in", "of"],
        a: 3, t: "предлоги",
        why: "Устойчивая пара: afraid of — бояться чего-то.",
        keys: ["afraid"]
      },
      {
        s: "What's the weather ___ today?",
        o: ["like", "with", "in", "about"],
        a: 0, t: "what's … like",
        why: "What's … like? = «какой?». What's the weather like? — какая погода?",
        keys: ["What's"]
      },
      {
        s: "What's ___ TV tonight?",
        o: ["in", "at", "on", "by"],
        a: 2, t: "предлоги",
        why: "on TV — по телевизору.",
        keys: ["TV"]
      },
      {
        s: "There's a film ___ channel 4.",
        o: ["at", "in", "by", "on"],
        a: 3, t: "предлоги",
        why: "on channel 4 — на канале (та же логика, что on TV).",
        keys: ["channel"]
      },
      {
        s: "What's ___ the cinema?",
        o: ["on", "at", "on at", "at on"],
        a: 2, t: "предлоги",
        why: "What's on at the cinema? — «что идёт в кино?»: on = «идёт, показывают», at the cinema = где.",
        keys: ["cinema"]
      },
      {
        s: "They ___ both ___ to become TV stars.",
        o: ["are / go", "are / going to", "is / going", "are / going"],
        a: 3, t: "going to",
        why: "They are both going to become: конструкция be going to, между are и going встало both. Вариант B даёт лишнее to: «going to to become».",
        keys: ["both"]
      },
      {
        s: "What's she going ___ ?",
        o: ["do", "doing", "to do", "did"],
        a: 2, t: "going to",
        why: "going to + глагол; в вопросе глагол уходит в конец: What's she going to do?",
        keys: []
      },
      {
        s: "She's going ___ home.",
        o: ["to walk", "walking", "walk", "to walking"],
        a: 0, t: "going to",
        why: "be going to + глагол: She's going to walk home.",
        keys: []
      },
      {
        s: "She wants ___ in Paris and Moscow.",
        o: ["dancing", "dance", "is dancing", "to dance"],
        a: 3, t: "инфинитив цели",
        why: "want + to + глагол: wants to dance.",
        keys: ["wants"]
      },
      {
        s: "They ___ going ___ a car this year.",
        o: ["aren't / get", "aren't / getting", "aren't / to get", "aren't / got"],
        a: 2, t: "going to",
        why: "Отрицание be going to: aren't going to get. После going — всегда to + глагол.",
        keys: ["this year"]
      }
    ]
  }
];
