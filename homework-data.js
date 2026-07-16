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
  },
  {
    id: "unit1-phrases",
    date: "2026-07-16",
    title: "Unit 1 · Связки глагол+слово",
    topics: ["have a meeting, take a break…"],
    tasks: [
      { type:"bank", s:"___ your email.", o:["take","check","watch","chat","go","meet","play","do"], a:1, t:"глагольные связки",
        why:"check your email — проверить почту.", keys:[] },
      { type:"bank", s:"___ out with friends.", o:["take","check","watch","chat","go","meet","play","do"], a:4, t:"глагольные связки",
        why:"go out — выбраться куда-то, «выйти в люди»: go out with friends.", keys:[] },
      { type:"bank", s:"___ some sport.", o:["take","check","watch","chat","go","meet","play","do"], a:7, t:"глагольные связки",
        why:"do some sport — заниматься спортом. Спорт «делают»; play — только про конкретные игры (play football).", keys:[] },
      { type:"bank", s:"___ a colleague.", o:["take","check","watch","chat","go","meet","play","do"], a:5, t:"глагольные связки",
        why:"meet a colleague — встретиться с коллегой.", keys:[] },
      { type:"bank", s:"___ some work.", o:["take","check","watch","chat","go","meet","play","do"], a:7, t:"глагольные связки",
        why:"do some work — поработать. Работу тоже «делают».", keys:[] },
      { type:"bank", s:"___ on the internet.", o:["take","check","watch","chat","go","meet","play","do"], a:3, t:"глагольные связки",
        why:"chat on the internet — болтать/переписываться в сети.", keys:[] },
      { type:"bank", s:"___ a break.", o:["take","check","watch","chat","go","meet","play","do"], a:0, t:"глагольные связки",
        why:"take a break — сделать перерыв. Перерыв «берут».", keys:[] },
      { type:"bank", s:"___ a DVD.", o:["take","check","watch","chat","go","meet","play","do"], a:2, t:"глагольные связки",
        why:"watch a DVD — смотреть (фильм, запись).", keys:[] },
      { type:"bank", s:"___ some music.", o:["take","check","watch","chat","go","meet","play","do"], a:6, t:"глагольные связки",
        why:"play some music — включить, поставить музыку.", keys:[] }
    ]
  },
  {
    id: "unit1-errors",
    date: "2026-07-16",
    title: "Unit 1 · Исправь ошибку",
    topics: ["10 типичных ошибок, каждая своей категории"],
    tasks: [
      { type:"fix", s:"She likes listening music.", t:"типичные ошибки",
        o:["She likes listen music.","She is likes listening music.","She likes listening to music.","She likes listening at music."], a:2,
        why:"Пропущен предлог: listen TO music. Категория: предлоги.", keys:["to"] },
      { type:"fix", s:"I am architect.", t:"типичные ошибки",
        o:["I am an architect.","I am the architect.","I architect.","I am a architect."], a:0,
        why:"Профессия в единственном числе требует артикль, перед гласным звуком — an: an architect. Категория: артикли.", keys:["an"] },
      { type:"fix", s:"Are you feeling allright?", t:"типичные ошибки",
        o:["Are you feel all right?","Are you feeling all right?","Are you feeling allrite?","Are you feelling allright?"], a:1,
        why:"Слова allright нет — пишется all right (разговорное alright). Категория: орфография.", keys:["all right"] },
      { type:"fix", s:"When I can visit your house?", t:"типичные ошибки",
        o:["When can I visit your house?","When I can to visit your house?","When can visit I your house?","When I visit can your house?"], a:0,
        why:"В вопросе модальный глагол встаёт перед подлежащим: When can I…? Категория: порядок слов.", keys:["can I"] },
      { type:"fix", s:"Let's discuss about this tomorrow.", t:"типичные ошибки",
        o:["Let's to discuss this tomorrow.","Let's discussing this tomorrow.","Let's discuss about it tomorrow.","Let's discuss this tomorrow."], a:3,
        why:"discuss не берёт about, лишнее слово: discuss something. Категория: лишние слова.", keys:["discuss this"] },
      { type:"fix", s:"He don't come here often.", t:"типичные ошибки",
        o:["He don't comes here often.","He doesn't come here often.","He isn't come here often.","He not come here often."], a:1,
        why:"he/she/it → doesn't. Категория: согласование глагола с подлежащим.", keys:["doesn't"] },
      { type:"fix", s:"We come from germany.", t:"типичные ошибки",
        o:["We come from germany!","We came from germany.","We come from Germany.","We come From Germany."], a:2,
        why:"Названия стран — с заглавной: Germany. Категория: заглавные буквы.", keys:["Germany"] },
      { type:"fix", s:"Where you go yesterday?", t:"типичные ошибки",
        o:["Where did you go yesterday?","Where you went yesterday?","Where do you go yesterday?","Where was you go yesterday?"], a:0,
        why:"Вопрос о прошлом требует did: Where did you go…? (went без did — частая ловушка). Категория: пропущенный вспомогательный глагол.", keys:["did"] },
      { type:"fix", s:"I live in this town all my life.", t:"типичные ошибки",
        o:["I am living in this town all my life.","I lived in this town all my life.","I have live in this town all my life.","I have lived in this town all my life."], a:3,
        why:"«Всю жизнь и до сих пор» → Present Perfect: have lived. Категория: время глагола.", keys:["have lived"] },
      { type:"fix", s:"My wife is a really good cooker.", t:"типичные ошибки",
        o:["My wife is a really good cooking.","My wife is a really good cook.","My wife is really good cooker.","My wife is a really well cook."], a:1,
        why:"Человек — cook; cooker — кухонная плита. Категория: словарь.", keys:["cook"] }
    ]
  },
  {
    id: "unit1-order",
    date: "2026-07-16",
    title: "Unit 1 · Собери вопрос",
    topics: ["порядок слов: собери вопрос из карточек"],
    tasks: [
      { type:"order", w:["do","every","you","day","study"], target:"Do you study every day?", t:"порядок слов в вопросе",
        why:"Общий вопрос: Do + you + глагол + остальное." },
      { type:"order", w:["your","any","did","languages","teach","parents","you","other"], target:"Did your parents teach you any other languages?", t:"порядок слов в вопросе",
        why:"Did + подлежащее (your parents) + глагол (teach) + кому (you) + что (any other languages)." },
      { type:"order", w:["is","learner","who","the","best","you","language","know"], target:"Who is the best language learner you know?", t:"порядок слов в вопросе",
        why:"Who is + the best… + хвост you know («которого ты знаешь») без who/that." },
      { type:"order", w:["was","teacher","your","English","first","who"], target:"Who was your first English teacher?", t:"порядок слов в вопросе",
        why:"Who was + your first English teacher — вопрос к имени, без вспомогательного did." },
      { type:"order", w:["do","do","you","remember","what","English","to","words","in"], target:"What do you do to remember words in English?", t:"порядок слов в вопросе",
        why:"What do you do — «что ты делаешь», второе do — смысловой глагол; to remember — зачем; words in English — что именно." },
      { type:"order", w:["languages","you","what","do","to","like","listening"], target:"What languages do you like listening to?", t:"порядок слов в вопросе",
        why:"Предлог to остаётся в конце: listening to." },
      { type:"order", w:["do","what","watch","you","English","in","TV","programmes"], target:"What TV programmes do you watch in English?", t:"порядок слов в вопросе",
        why:"What + существительное (TV programmes) + do you watch + in English." },
      { type:"order", w:["foreign","did","speak","first","when","language","a","you"], target:"When did you first speak a foreign language?", t:"порядок слов в вопросе",
        why:"When did you + first + глагол: first встаёт между you и speak." }
    ]
  }
];
