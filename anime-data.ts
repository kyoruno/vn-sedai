import type { Language } from "./src/i18n"

type AnimeItem = {
  titleEn: string
  titleJa: string
  score: number
}

type Data = {
  [key: string]: AnimeItem[]
}

const data: Data = {
  "2000": [
    {
      "titleEn": "Tsukihime",
      "titleJa": "月姫",
      "score": 81.8
    },
    {
      "titleEn": "AIR",
      "titleJa": "AIR",
      "score": 77.5
    },
    {
      "titleEn": "Bible Black - The Game",
      "titleJa": "Bible Black -La noche de walpurgis-",
      "score": 70.1
    },
    {
      "titleEn": "Never 7 - The End of Infinity",
      "titleJa": "Never7 -the end of infinity-",
      "score": 67.3
    },
    {
      "titleEn": "Phantom of Inferno",
      "titleJa": "Phantom -PHANTOM OF INFERNO-",
      "score": 79
    },
    {
      "titleEn": "Snow Drop",
      "titleJa": "Snow Drop",
      "score": 55.9
    },
    {
      "titleEn": "Men at Work! 2 ~Hunter Academy e Youkoso~",
      "titleJa": "メンアットワーク！２～ハンターアカデミーへようこそ～",
      "score": 64.2
    },
    {
      "titleEn": "Sensei 2",
      "titleJa": "せ・ん・せ・い2",
      "score": 56.6
    },
    {
      "titleEn": "Water Closet: The Forbidden Chamber",
      "titleJa": "使用中～W.C.～",
      "score": 36.2
    },
    {
      "titleEn": "Doushin - Same Heart",
      "titleJa": "同心～三姉妹のエチュード～",
      "score": 56.3
    },
    {
      "titleEn": "Gin'iro",
      "titleJa": "銀色",
      "score": 73
    },
    {
      "titleEn": "Shoin, Aruiwa Ushinawareta Yume no Monogatari.",
      "titleJa": "書淫、或いは失われた夢の物語。",
      "score": 74.5
    }
  ],
  "2001": [
    {
      "titleEn": "Phoenix Wright: Ace Attorney",
      "titleJa": "逆転裁判",
      "score": 80.6
    },
    {
      "titleEn": "Kagetsu Tooya",
      "titleJa": "歌月十夜",
      "score": 73.6
    },
    {
      "titleEn": "Tsukihime PLUS-DISC",
      "titleJa": "月姫 PLUS-DISC",
      "score": 66.3
    },
    {
      "titleEn": "Crescendo",
      "titleJa": "Crescendo ～永遠だと思っていたあの頃～",
      "score": 73.8
    },
    {
      "titleEn": "Family Project ~Kazoku Keikaku~",
      "titleJa": "家族計画",
      "score": 74
    },
    {
      "titleEn": "Sayonara o Oshiete ~Comment te Dire Adieu~",
      "titleJa": "さよならを教えて～comment te dire adieu～",
      "score": 78.6
    },
    {
      "titleEn": "Brave Soul",
      "titleJa": "Brave Soul",
      "score": 68.2
    },
    {
      "titleEn": "Do You Like Horny Bunnies?",
      "titleJa": "エッチなバニーさんは嫌い?",
      "score": 58.9
    },
    {
      "titleEn": "Come See Me Tonight",
      "titleJa": "私に今夜☆会いに来て",
      "score": 58.9
    },
    {
      "titleEn": "Suika",
      "titleJa": "水夏~SUIKA~",
      "score": 68.4
    },
    {
      "titleEn": "Private Nurse",
      "titleJa": "プライベートナース",
      "score": 64.6
    },
    {
      "titleEn": "Gibo: Stepmother's Sin",
      "titleJa": "義母",
      "score": 55.1
    }
  ],
  "2002": [
    {
      "titleEn": "Higurashi When They Cry - Question Arcs",
      "titleJa": "ひぐらしのなく頃に",
      "score": 85.8
    },
    {
      "titleEn": "Ever17 -out of infinity-",
      "titleJa": "Ever17 -the out of infinity-",
      "score": 84.5
    },
    {
      "titleEn": "Phoenix Wright: Ace Attorney - Justice for All",
      "titleJa": "逆転裁判2",
      "score": 75.8
    },
    {
      "titleEn": "Utawarerumono",
      "titleJa": "うたわれるもの",
      "score": 78.4
    },
    {
      "titleEn": "Kikokugai - The Cyber Slayer",
      "titleJa": "鬼哭街 The Cyber Slayer",
      "score": 74.3
    },
    {
      "titleEn": "Da Capo",
      "titleJa": "D.C.～ダ・カーポ～",
      "score": 68.5
    },
    {
      "titleEn": "MELTY BLOOD",
      "titleJa": "MELTY BLOOD",
      "score": 73.6
    },
    {
      "titleEn": "Discipline -The Record of a Crusade-",
      "titleJa": "DISCIPLINE -The record of a Crusade-",
      "score": 66.7
    },
    {
      "titleEn": "Rance 5D - The Lonely Girl -",
      "titleJa": "ランス５Ｄ －ひとりぼっちの女の子－",
      "score": 58.3
    },
    {
      "titleEn": "Wind -a breath of heart-",
      "titleJa": "Wind -a breath of heart-",
      "score": 66.6
    },
    {
      "titleEn": "Virgin Roster",
      "titleJa": "出血簿〜鮮赤の嗚咽〜",
      "score": 58
    },
    {
      "titleEn": "Secret Wives' Club",
      "titleJa": "人妻姫倶楽部",
      "score": 58.2
    }
  ],
  "2003": [
    {
      "titleEn": "Saya no Uta ~ The Song of Saya",
      "titleJa": "沙耶の唄",
      "score": 79.6
    },
    {
      "titleEn": "Muv-Luv",
      "titleJa": "マブラヴ",
      "score": 70.4
    },
    {
      "titleEn": "CROSS†CHANNEL",
      "titleJa": "CROSS†CHANNEL",
      "score": 78.5
    },
    {
      "titleEn": "Deus Machina Demonbane",
      "titleJa": "斬魔大聖デモンベイン",
      "score": 74.5
    },
    {
      "titleEn": "TRUE REMEMBRANCE",
      "titleJa": "TRUE REMEMBRANCE",
      "score": 75.9
    },
    {
      "titleEn": "Snow Sakura",
      "titleJa": "雪桜",
      "score": 69.8
    },
    {
      "titleEn": "The Sagara Family",
      "titleJa": "相楽さん家の悦楽ライフ♪",
      "score": 67.3
    },
    {
      "titleEn": "Aselia the Eternal",
      "titleJa": "永遠のアセリア-The Spirit of Eternity Sword-",
      "score": 76.3
    },
    {
      "titleEn": "Daibanchou -Big Bang Age-",
      "titleJa": "大番長 -Big Bang Age-",
      "score": 74.9
    },
    {
      "titleEn": "Heart de Roommate",
      "titleJa": "はぁと de ルームメイト",
      "score": 60.5
    },
    {
      "titleEn": "Let's Meow Meow!",
      "titleJa": "みんなでニャンニャン",
      "score": 57.8
    },
    {
      "titleEn": "Figures of Happiness",
      "titleJa": "しあわせのかたち",
      "score": 63.2
    }
  ],
  "2004": [
    {
      "titleEn": "Fate/stay night",
      "titleJa": "Fate/stay night",
      "score": 86.2
    },
    {
      "titleEn": "CLANNAD",
      "titleJa": "CLANNAD",
      "score": 86.9
    },
    {
      "titleEn": "planetarian ~Dream of Little Star~",
      "titleJa": "planetarian ～ちいさなほしのゆめ～",
      "score": 78.7
    },
    {
      "titleEn": "Higurashi When They Cry - Answer Arcs",
      "titleJa": "ひぐらしのなく頃に解",
      "score": 88
    },
    {
      "titleEn": "Phoenix Wright: Ace Attorney - Trials and Tribulations",
      "titleJa": "逆転裁判3",
      "score": 85.7
    },
    {
      "titleEn": "SHUFFLE!",
      "titleJa": "SHUFFLE!",
      "score": 67.4
    },
    {
      "titleEn": "Remember11 -the age of infinity-",
      "titleJa": "Remember11 -the age of infinity-",
      "score": 82.1
    },
    {
      "titleEn": "Symphonic Rain",
      "titleJa": "シンフォニック＝レイン",
      "score": 81.2
    },
    {
      "titleEn": "Rance VI - Collapse of Zeth",
      "titleJa": "RanceVI -ゼス崩壊-",
      "score": 78.9
    },
    {
      "titleEn": "Which girl should I choose?",
      "titleJa": "ひなたぼっこ",
      "score": 64.9
    },
    {
      "titleEn": "Hitomi -My Stepsister-",
      "titleJa": "義妹・仁美",
      "score": 55.5
    },
    {
      "titleEn": "Quartett!",
      "titleJa": "Quartett!",
      "score": 71.7
    }
  ],
  "2005": [
    {
      "titleEn": "Sharin no Kuni: The Girl Among the Sunflowers",
      "titleJa": "車輪の国、向日葵の少女",
      "score": 81.5
    },
    {
      "titleEn": "narcissu",
      "titleJa": "narcissu",
      "score": 74.9
    },
    {
      "titleEn": "Yume Miru Kusuri - A Drug That Makes You Dream",
      "titleJa": "ユメミルクスリ",
      "score": 73.6
    },
    {
      "titleEn": "Fate/hollow ataraxia",
      "titleJa": "Fate/hollow ataraxia",
      "score": 81.3
    },
    {
      "titleEn": "School Days",
      "titleJa": "School Days",
      "score": 65.7
    },
    {
      "titleEn": "SWAN SONG",
      "titleJa": "SWAN SONG",
      "score": 76.2
    },
    {
      "titleEn": "Cartagra ~Affliction of the Soul~",
      "titleJa": "カルタグラ～ツキ狂イノ病～",
      "score": 72.7
    },
    {
      "titleEn": "Tomoyo After ~It's a Wonderful Life~",
      "titleJa": "智代アフター ～It’s a Wonderful Life～",
      "score": 74.4
    },
    {
      "titleEn": "Hanachirasu",
      "titleJa": "刃鳴散らす",
      "score": 72.1
    },
    {
      "titleEn": "Tears to Tiara",
      "titleJa": "Tears to Tiara",
      "score": 70
    },
    {
      "titleEn": "A profile",
      "titleJa": "ア プロフィール",
      "score": 66.8
    },
    {
      "titleEn": "Togainu no Chi ~Lost Blood~",
      "titleJa": "咎狗の血",
      "score": 75.2
    }
  ],
  "2006": [
    {
      "titleEn": "Muv-Luv Alternative",
      "titleJa": "マブラヴ　オルタネイティヴ",
      "score": 90
    },
    {
      "titleEn": "Sengoku Rance",
      "titleJa": "戦国ランス",
      "score": 83.5
    },
    {
      "titleEn": "Wanko to Kurasou",
      "titleJa": "わんことくらそう",
      "score": 68.1
    },
    {
      "titleEn": "Corpse Party",
      "titleJa": "コープスパーティー ブラッドカバー",
      "score": 74.8
    },
    {
      "titleEn": "ef - a fairy tale of the two.",
      "titleJa": "ef - a fairy tale of the two.",
      "score": 80.6
    },
    {
      "titleEn": "Edelweiss",
      "titleJa": "エーデルワイス",
      "score": 71
    },
    {
      "titleEn": "PRINCESS WALTZ",
      "titleJa": "PRINCESS WALTZ",
      "score": 70.2
    },
    {
      "titleEn": "Sono Hanabira Ni Kuchiduke Wo - A Kiss for the Petals",
      "titleJa": "その花びらにくちづけを",
      "score": 65.2
    },
    {
      "titleEn": "Da Capo 2",
      "titleJa": "D.C.II ～ダ・カーポII～",
      "score": 76
    },
    {
      "titleEn": "Dra†Koi",
      "titleJa": "竜†恋",
      "score": 67.1
    },
    {
      "titleEn": "Higurashi When They Cry - Rei",
      "titleJa": "ひぐらしのなく頃に礼",
      "score": 75.3
    },
    {
      "titleEn": "Gore Screaming Show",
      "titleJa": "ゴア・スクリーミング・ショウ",
      "score": 72.9
    }
  ],
  "2007": [
    {
      "titleEn": "Umineko When They Cry - Question Arcs",
      "titleJa": "うみねこのなく頃に",
      "score": 88.6
    },
    {
      "titleEn": "Little Busters!",
      "titleJa": "リトルバスターズ！",
      "score": 86.3
    },
    {
      "titleEn": "Apollo Justice: Ace Attorney",
      "titleJa": "逆転裁判4",
      "score": 74.2
    },
    {
      "titleEn": "Kira Kira",
      "titleJa": "キラ☆キラ",
      "score": 75.6
    },
    {
      "titleEn": "narcissu -SIDE 2nd-",
      "titleJa": "narcissu -SIDE 2nd-",
      "score": 75.4
    },
    {
      "titleEn": "Koihime Musou ~A Heart-Throbbing, Maidenly Romance of the Three Kingdoms~",
      "titleJa": "恋姫†無双～ドキッ★乙女だらけの三国志演義～",
      "score": 71.6
    },
    {
      "titleEn": "Sharin no Kuni, Yuukyuu no Shounenshoujo",
      "titleJa": "車輪の国、悠久の少年少女",
      "score": 75.5
    },
    {
      "titleEn": "Sekien no Inganock - Inganock of the Brightest Flame",
      "titleJa": "赫炎のインガノック -What a beautiful people-",
      "score": 78.2
    },
    {
      "titleEn": "Himawari - The Sunflower -",
      "titleJa": "ひまわり",
      "score": 75.7
    },
    {
      "titleEn": "A Kiss For The Petals - Joined In Love With You",
      "titleJa": "その花びらにくちづけを　あなたと恋人つなぎ",
      "score": 70.8
    },
    {
      "titleEn": "The Most Forbidden Love in the World",
      "titleJa": "世界でいちばんNG（だめ）な恋",
      "score": 76.3
    },
    {
      "titleEn": "A Kiss For The Petals - My Dear Prince",
      "titleJa": "その花びらにくちづけを わたしの王子さま",
      "score": 65.5
    }
  ],
  "2008": [
    {
      "titleEn": "G-senjou no Maou - The Devil on G-String",
      "titleJa": "G線上の魔王",
      "score": 82.5
    },
    {
      "titleEn": "Kara no Shojo",
      "titleJa": "殻ノ少女",
      "score": 80.3
    },
    {
      "titleEn": "Chaos;Head",
      "titleJa": "CHAOS;HEAD",
      "score": 74
    },
    {
      "titleEn": "Yosuga no Sora",
      "titleJa": "ヨスガノソラ",
      "score": 74.4
    },
    {
      "titleEn": "428: Shibuya Scramble",
      "titleJa": "428 〜封鎖された渋谷で〜",
      "score": 83.5
    },
    {
      "titleEn": "Edelweiss Eiden Fantasia",
      "titleJa": "エーデルワイス 詠伝ファンタジア",
      "score": 69.3
    },
    {
      "titleEn": "11eyes -Tsumi to Batsu to Aganai no Shoujo-",
      "titleJa": "11eyes－罪と罰と贖いの少女－",
      "score": 73.1
    },
    {
      "titleEn": "sweet pool",
      "titleJa": "sweet pool",
      "score": 77.7
    },
    {
      "titleEn": "Hakuoki ~Demon of the Fleeting Blossom~",
      "titleJa": "薄桜鬼 新選組奇譚",
      "score": 79.5
    },
    {
      "titleEn": "Guardians of Daybreak",
      "titleJa": "暁の護衛",
      "score": 74.3
    },
    {
      "titleEn": "Shikkoku no Sharnoth - Sharnoth of the Deepest Black",
      "titleJa": "漆黒のシャルノス ～What a beautiful tomorrow～",
      "score": 75.1
    },
    {
      "titleEn": "BLAZBLUE CALAMITY TRIGGER",
      "titleJa": "BLAZBLUE CALAMITY TRIGGER",
      "score": 71.1
    }
  ],
  "2009": [
    {
      "titleEn": "Katawa Shoujo",
      "titleJa": "かたわ少女",
      "score": 78.8
    },
    {
      "titleEn": "Steins;Gate",
      "titleJa": "STEINS;GATE",
      "score": 90.1
    },
    {
      "titleEn": "Umineko When They Cry - Answer Arcs",
      "titleJa": "うみねこのなく頃に散",
      "score": 89.7
    },
    {
      "titleEn": "Majikoi! Love Me Seriously!!",
      "titleJa": "真剣で私に恋しなさい！",
      "score": 83.5
    },
    {
      "titleEn": "999: Nine Hours, Nine Persons, Nine Doors",
      "titleJa": "極限脱出 9時間9人9の扉",
      "score": 82.7
    },
    {
      "titleEn": "Hoshizora no Memoria -Wish upon a Shooting Star-",
      "titleJa": "星空のメモリア-Wish upon a shooting star-",
      "score": 77.9
    },
    {
      "titleEn": "Full Metal Daemon Muramasa",
      "titleJa": "装甲悪鬼村正",
      "score": 89.5
    },
    {
      "titleEn": "My Girlfriend is the President",
      "titleJa": "幼なじみは大統領 My girlfriend is the PRESIDENT.",
      "score": 70.4
    },
    {
      "titleEn": "eden* They were only two, on the planet.",
      "titleJa": "eden* They were only two, on the planet.",
      "score": 76
    },
    {
      "titleEn": "Dies irae ~Acta est Fabula~",
      "titleJa": "Dies irae ~Acta est Fabula~",
      "score": 81.2
    },
    {
      "titleEn": "BALDR SKY Dive1 \"Lost Memory\"",
      "titleJa": "BALDR SKY Dive1 \"Lost Memory\"",
      "score": 81.3
    },
    {
      "titleEn": "CHAOS;HEAD NOAH",
      "titleJa": "CHAOS;HEAD NOAH",
      "score": 78.7
    }
  ],
  "2010": [
    {
      "titleEn": "Danganronpa: Trigger Happy Havoc",
      "titleJa": "ダンガンロンパ 希望の学園と絶望の高校生",
      "score": 76.4
    },
    {
      "titleEn": "Wonderful Everyday ~Diskontinuierliches Dasein~",
      "titleJa": "素晴らしき日々～不連続存在～",
      "score": 87
    },
    {
      "titleEn": "WHITE ALBUM2",
      "titleJa": "WHITE ALBUM2",
      "score": 90
    },
    {
      "titleEn": "Noble ☆ Works",
      "titleJa": "のーぶる☆わーくす",
      "score": 72.7
    },
    {
      "titleEn": "Love, Elections, & Chocolate",
      "titleJa": "恋と選挙とチョコレート",
      "score": 73.3
    },
    {
      "titleEn": "EROGE! Sex and Games Make Sexy Games",
      "titleJa": "えろげー！～Hもゲームも開発三昧～",
      "score": 69.5
    },
    {
      "titleEn": "Fate/EXTRA",
      "titleJa": "フェイト/エクストラ",
      "score": 70.1
    },
    {
      "titleEn": "DEARDROPS",
      "titleJa": "DEARDROPS",
      "score": 75
    },
    {
      "titleEn": "Bunny Black",
      "titleJa": "BUNNYBLACK",
      "score": 75.2
    },
    {
      "titleEn": "Lucy -The Eternity She Wished For-",
      "titleJa": "ルーシィ ～彼女が望んでいたもの～",
      "score": 73.5
    },
    {
      "titleEn": "Boob Wars -Big Breasts vs Flat Chests",
      "titleJa": "おっぱい戦争 -巨乳VS貧乳-",
      "score": 57.1
    },
    {
      "titleEn": "RE: Alistair",
      "titleJa": "RE: Alistair",
      "score": 67
    }
  ],
  "2011": [
    {
      "titleEn": "The Fruit of Grisaia",
      "titleJa": "グリザイアの果実 -LE FRUIT DE LA GRISAIA-",
      "score": 83.6
    },
    {
      "titleEn": "Rewrite",
      "titleJa": "Rewrite",
      "score": 85.3
    },
    {
      "titleEn": "Kamidori Alchemy Meister",
      "titleJa": "神採りアルケミーマイスター",
      "score": 81.2
    },
    {
      "titleEn": "euphoria",
      "titleJa": "euphoria",
      "score": 72.8
    },
    {
      "titleEn": "Monmusu Quest! Origins: Assaulted by the Vamp",
      "titleJa": "もんむす・くえすと!前章 ～負ければ妖女に犯される～",
      "score": 76.2
    },
    {
      "titleEn": "Princess Evangile",
      "titleJa": "Princess Evangile",
      "score": 73.4
    },
    {
      "titleEn": "Monster Girl Quest - Part 2",
      "titleJa": "もんむす・くえすと!中章 ～負ければ妖女に犯される～",
      "score": 80.1
    },
    {
      "titleEn": "Aiyoku no Eustia",
      "titleJa": "穢翼のユースティア",
      "score": 84.8
    },
    {
      "titleEn": "Amnesia: Memories",
      "titleJa": "AMNESIA",
      "score": 72.1
    },
    {
      "titleEn": "Bishoujo Mangekyou: A Girl's Cursed Legend",
      "titleJa": "美少女万華鏡 -呪われし伝説の少女-",
      "score": 71.5
    },
    {
      "titleEn": "Imouto Paradise!",
      "titleJa": "妹ぱらだいす！～お兄ちゃんと5人の妹のエッチしまくりな毎日～",
      "score": 65.6
    },
    {
      "titleEn": "Hatoful Boyfriend",
      "titleJa": "はーとふる彼氏〜希望の学園と白い翼〜",
      "score": 72.7
    }
  ],
  "2012": [
    {
      "titleEn": "Danganronpa 2: Goodbye Despair",
      "titleJa": "スーパーダンガンロンパ2 さよなら絶望学園",
      "score": 81.1
    },
    {
      "titleEn": "The House in Fata Morgana",
      "titleJa": "ファタモルガーナの館",
      "score": 88.1
    },
    {
      "titleEn": "If My Heart Had Wings",
      "titleJa": "この大空に、翼をひろげて",
      "score": 76.9
    },
    {
      "titleEn": "Zero Escape: Virtue's Last Reward",
      "titleJa": "極限脱出ADV 善人シボウデス",
      "score": 82.2
    },
    {
      "titleEn": "Maji de Watashi ni Koishinasai! S",
      "titleJa": "真剣で私に恋しなさい！S",
      "score": 82
    },
    {
      "titleEn": "The Labyrinth of Grisaia",
      "titleJa": "グリザイアの迷宮 -LE LABYRINTHE DE LA GRISAIA-",
      "score": 80.5
    },
    {
      "titleEn": "Witch on the Holy Night",
      "titleJa": "魔法使いの夜",
      "score": 86.4
    },
    {
      "titleEn": "DRACU-RIOT!",
      "titleJa": "DRACU-RIOT!",
      "score": 76.8
    },
    {
      "titleEn": "DRAMAtical Murder",
      "titleJa": "DRAMAtical Murder",
      "score": 78.1
    },
    {
      "titleEn": "Root Double -Before Crime * After Days-",
      "titleJa": "ルートダブル -Before Crime * After Days-",
      "score": 78.5
    },
    {
      "titleEn": "Eiyuu Senki - The World Conquest",
      "titleJa": "英雄＊戦姫",
      "score": 74.6
    },
    {
      "titleEn": "Phenomeno",
      "titleJa": "フェノメノ 美鶴木夜石は怖がらない",
      "score": 71.9
    }
  ],
  "2013": [
    {
      "titleEn": "YOU and ME and HER: A Love Story",
      "titleJa": "君と彼女と彼女の恋。",
      "score": 80.1
    },
    {
      "titleEn": "The Eden of Grisaia",
      "titleJa": "グリザイアの楽園 -LE EDEN DE LA GRISAIA-",
      "score": 80.6
    },
    {
      "titleEn": "Everlasting Summer",
      "titleJa": "Beskonechnoe leto",
      "score": 67.7
    },
    {
      "titleEn": "Kara no Shojo - The Second Episode",
      "titleJa": "虚ノ少女",
      "score": 85
    },
    {
      "titleEn": "Fureraba ~Friend to Lover~",
      "titleJa": "フレラバ ～Friend to Lover～",
      "score": 76.1
    },
    {
      "titleEn": "Monster Girl Quest - Part 3",
      "titleJa": "もんむす・くえすと!終章 ～負ければ妖女に犯される～",
      "score": 82.1
    },
    {
      "titleEn": "Phoenix Wright: Ace Attorney - Dual Destinies",
      "titleJa": "逆転裁判5",
      "score": 71.8
    },
    {
      "titleEn": "Rance 01 - Quest for Hikari",
      "titleJa": "ランス01 光をもとめて",
      "score": 70.9
    },
    {
      "titleEn": "Maji de Watashi ni Koishinasai! A-1",
      "titleJa": "真剣で私に恋しなさい！A-1",
      "score": 80.3
    },
    {
      "titleEn": "Maji de Watashi ni Koishinasai! A-2",
      "titleJa": "真剣で私に恋しなさい！A-2",
      "score": 79.5
    },
    {
      "titleEn": "Daitoshokan no Hitsujikai",
      "titleJa": "大図書館の羊飼い",
      "score": 79.2
    },
    {
      "titleEn": "Hapymaher",
      "titleJa": "ハピメア",
      "score": 74.1
    }
  ],
  "2014": [
    {
      "titleEn": "NEKOPARA Vol. 1",
      "titleJa": "ネコぱら Vol.1 ソレイユ開店しました！",
      "score": 67.2
    },
    {
      "titleEn": "Aokana -Four Rhythms Across the Blue-",
      "titleJa": "蒼の彼方のフォーリズム",
      "score": 82.9
    },
    {
      "titleEn": "VA-11 HALL-A",
      "titleJa": "VA-11 HALL-A",
      "score": 79.9
    },
    {
      "titleEn": "CHAOS;CHILD",
      "titleJa": "CHAOS;CHILD",
      "score": 83.5
    },
    {
      "titleEn": "Hoshi Ori Yume Mirai",
      "titleJa": "星織ユメミライ",
      "score": 80.6
    },
    {
      "titleEn": "Saku Saku: Love Blooms with the Cherry Blossoms",
      "titleJa": "恋がさくころ桜どき",
      "score": 73.3
    },
    {
      "titleEn": "Koisuru Natsu no Last Resort",
      "titleJa": "恋する夏のラストリゾート",
      "score": 68.3
    },
    {
      "titleEn": "Nanairo Reincarnation",
      "titleJa": "なないろリンカネーション",
      "score": 77.2
    },
    {
      "titleEn": "Hello Lady!",
      "titleJa": "ハロー・レディ！",
      "score": 75.5
    },
    {
      "titleEn": "Flowers -Le volume sur printemps-",
      "titleJa": "FLOWERS -Le volume sur printemps-",
      "score": 74.8
    },
    {
      "titleEn": "Maji de Watashi ni Koishinasai! A-3",
      "titleJa": "真剣で私に恋しなさい！A-3",
      "score": 78.3
    },
    {
      "titleEn": "PRIMAL HEARTS",
      "titleJa": "PRIMAL×HEARTS",
      "score": 73.5
    }
  ],
  "2015": [
    {
      "titleEn": "STEINS;GATE 0",
      "titleJa": "STEINS;GATE 0",
      "score": 80.6
    },
    {
      "titleEn": "Sabbat of the Witch",
      "titleJa": "サノバウィッチ",
      "score": 78.4
    },
    {
      "titleEn": "NEKOPARA Vol. 0",
      "titleJa": "ネコぱら vol.0 水無月ネコたちの日常！",
      "score": 62.9
    },
    {
      "titleEn": "Evenicle",
      "titleJa": "イブニクル",
      "score": 76.9
    },
    {
      "titleEn": "ChronoClock",
      "titleJa": "クロノクロック",
      "score": 73.3
    },
    {
      "titleEn": "Raging Loop",
      "titleJa": "レイジングループ",
      "score": 79.7
    },
    {
      "titleEn": "Utawarerumono: Mask of Deception",
      "titleJa": "うたわれるもの 偽りの仮面",
      "score": 83.2
    },
    {
      "titleEn": "Dorei to no Seikatsu -Teaching Feeling-",
      "titleJa": "奴隷との生活 -Teaching Feeling-",
      "score": 72.4
    },
    {
      "titleEn": "The House in Fata Morgana: A Requiem for Innocence",
      "titleJa": "ファタモルガーナの館 -Another Episodes-",
      "score": 85.4
    },
    {
      "titleEn": "Sakura no Uta -Sakura no Mori no Ue o Mau-",
      "titleJa": "サクラノ詩－櫻の森の上を舞う－",
      "score": 87.4
    },
    {
      "titleEn": "The Ditzy Demons Are in Love With Me",
      "titleJa": "僕と恋するポンコツアクマ。",
      "score": 70
    },
    {
      "titleEn": "The Great Ace Attorney: Adventures",
      "titleJa": "大逆転裁判 ‐成歩堂龍ノ介の冒険‐",
      "score": 78.7
    }
  ],
  "2016": [
    {
      "titleEn": "Senren＊Banka",
      "titleJa": "千恋＊万花",
      "score": 76.9
    },
    {
      "titleEn": "NEKOPARA Vol. 2",
      "titleJa": "ネコぱら vol.2 姉妹ネコのシュクレ",
      "score": 70.4
    },
    {
      "titleEn": "WAGAMAMA HIGH SPEC",
      "titleJa": "ワガママハイスペック",
      "score": 72.5
    },
    {
      "titleEn": "Utawarerumono: Mask of Truth",
      "titleJa": "うたわれるもの 二人の白皇",
      "score": 89.4
    },
    {
      "titleEn": "Sankaku Ren'ai: Love Triangle Trouble",
      "titleJa": "スキとスキとでサンカク恋愛",
      "score": 69.9
    },
    {
      "titleEn": "ISLAND",
      "titleJa": "ISLAND",
      "score": 77.7
    },
    {
      "titleEn": "Phoenix Wright: Ace Attorney - Spirit of Justice",
      "titleJa": "逆転裁判6",
      "score": 75.4
    },
    {
      "titleEn": "Maitetsu",
      "titleJa": "まいてつ",
      "score": 76.8
    },
    {
      "titleEn": "Amatsutsumi",
      "titleJa": "アマツツミ",
      "score": 78
    },
    {
      "titleEn": "Karakara",
      "titleJa": "カラカラ",
      "score": 63.1
    },
    {
      "titleEn": "Collar x Malice",
      "titleJa": "Collar x Malice",
      "score": 82.3
    },
    {
      "titleEn": "Harmonia",
      "titleJa": "Harmonia -ハルモニア-",
      "score": 69.7
    }
  ],
  "2017": [
    {
      "titleEn": "Doki Doki Literature Club!",
      "titleJa": "ドキドキ文芸部!",
      "score": 69.4
    },
    {
      "titleEn": "Danganronpa V3: Killing Harmony",
      "titleJa": "ニューダンガンロンパV3 みんなのコロシアイ新学期",
      "score": 77.2
    },
    {
      "titleEn": "9-nine-:Episode 1",
      "titleJa": "9-nine-ここのつここのかここのいろ",
      "score": 71.2
    },
    {
      "titleEn": "Making * Lovers",
      "titleJa": "Making＊Lovers",
      "score": 77.7
    },
    {
      "titleEn": "Kinkoi: Golden Loveriche",
      "titleJa": "金色ラブリッチェ",
      "score": 81.8
    },
    {
      "titleEn": "NEKOPARA Vol. 3",
      "titleJa": "ネコぱら Vol.3 ネコたちのアロマティゼ",
      "score": 72.3
    },
    {
      "titleEn": "Aokana - EXTRA1",
      "titleJa": "蒼の彼方のフォーリズム EXTRA1",
      "score": 77.3
    },
    {
      "titleEn": "Newton and the Apple Tree",
      "titleJa": "ニュートンと林檎の樹",
      "score": 73.6
    },
    {
      "titleEn": "The Great Ace Attorney 2: Resolve",
      "titleJa": "大逆転裁判2 -成歩堂龍ノ介の覺悟-",
      "score": 87.2
    },
    {
      "titleEn": "NEKO-NIN exHeart",
      "titleJa": "猫忍えくすはーと",
      "score": 63.8
    },
    {
      "titleEn": "Marshmallow All the Way Home",
      "titleJa": "お家に帰るまでがましまろです",
      "score": 74
    },
    {
      "titleEn": "Cinderella Phenomenon",
      "titleJa": "Cinderella Phenomenon",
      "score": 76.9
    }
  ],
  "2018": [
    {
      "titleEn": "Summer Pockets",
      "titleJa": "Summer Pockets",
      "score": 84.7
    },
    {
      "titleEn": "Riddle Joker",
      "titleJa": "RIDDLE JOKER",
      "score": 75.8
    },
    {
      "titleEn": "9-nine-:Episode 2",
      "titleJa": "9-nine-そらいろそらうたそらのおと",
      "score": 78.9
    },
    {
      "titleEn": "NUKITASHI",
      "titleJa": "抜きゲーみたいな島に住んでる貧乳はどうすりゃいいですか？",
      "score": 78.5
    },
    {
      "titleEn": "IxSHE Tell",
      "titleJa": "IxSHE Tell",
      "score": 69.2
    },
    {
      "titleEn": "NEKOPARA Extra",
      "titleJa": "ネコぱらExtra  仔ネコの日の約束",
      "score": 68.5
    },
    {
      "titleEn": "Under One Wing",
      "titleJa": "ひとつ屋根の、ツバサの下で",
      "score": 70.9
    },
    {
      "titleEn": "OPPAI Academy: Big, Bouncy, Booby Babes!",
      "titleJa": "もっと！孕ませ！炎のおっぱい異世界エロ魔法学園！",
      "score": 73.4
    },
    {
      "titleEn": "I Walk Among Zombies Vol. 2",
      "titleJa": "ゾンビのあふれた世界で俺だけが襲われない vol.2",
      "score": 71.9
    },
    {
      "titleEn": "Rance X - Showdown",
      "titleJa": "Rance Ⅹ -決戦-",
      "score": 90.3
    },
    {
      "titleEn": "Onee-chan no Yuuwaku",
      "titleJa": "如月真綾の誘惑",
      "score": 73.3
    },
    {
      "titleEn": "Fatal Twelve",
      "titleJa": "Fatal Twelve",
      "score": 75.1
    }
  ],
  "2019": [
    {
      "titleEn": "AI: THE SOMNIUM FILES",
      "titleJa": "AI：ソムニウム ファイル",
      "score": 78.6
    },
    {
      "titleEn": "9-nine-:Episode 3",
      "titleJa": "9-nine-はるいろはるこいはるのかぜ",
      "score": 78.6
    },
    {
      "titleEn": "Café Stella and the Reapers' Butterflies",
      "titleJa": "喫茶ステラと死神の蝶",
      "score": 75.4
    },
    {
      "titleEn": "Koikari - Love For Hire",
      "titleJa": "恋愛、借りちゃいました",
      "score": 72.5
    },
    {
      "titleEn": "Kinkoi: Golden Time",
      "titleJa": "金色ラブリッチェ-Golden Time-",
      "score": 81.1
    },
    {
      "titleEn": "Sugar*Style",
      "titleJa": "Sugar*Style",
      "score": 74
    },
    {
      "titleEn": "Meteor World Actor",
      "titleJa": "流星ワールドアクター",
      "score": 78.1
    },
    {
      "titleEn": "Ciconia When They Cry",
      "titleJa": "キコニアのなく頃に",
      "score": 77.6
    },
    {
      "titleEn": "NUKITASHI 2",
      "titleJa": "抜きゲーみたいな島に住んでる貧乳はどうすりゃいいですか？ 2",
      "score": 83.2
    },
    {
      "titleEn": "Study § Steady",
      "titleJa": "スタディ§ステディ",
      "score": 70.3
    },
    {
      "titleEn": "Kimagure Temptation",
      "titleJa": "きまぐれテンプテーション",
      "score": 74.5
    },
    {
      "titleEn": "MUSICUS!",
      "titleJa": "MUSICUS!",
      "score": 80
    }
  ],
  "2020": [
    {
      "titleEn": "9-nine-:Episode 4",
      "titleJa": "9-nine-ゆきいろゆきはなゆきのあと",
      "score": 85.8
    },
    {
      "titleEn": "ATRI -My Dear Moments-",
      "titleJa": "ATRI -My Dear Moments-",
      "score": 78.1
    },
    {
      "titleEn": "Milk inside a bag of milk inside a bag of milk",
      "titleJa": "PMKM/Pomogi Mne Kupit' Moloko!",
      "score": 65.8
    },
    {
      "titleEn": "Dohna Dohna ~ Let's Do Bad Things Together",
      "titleJa": "ドーナドーナ いっしょにわるいことをしよう",
      "score": 78.9
    },
    {
      "titleEn": "Cyanotype Daydream -The Girl Who Dreamed the World-",
      "titleJa": "白昼夢の青写真",
      "score": 85.2
    },
    {
      "titleEn": "NEKOPARA Vol. 4",
      "titleJa": "ネコぱらvol.4～ネコとパティシエのノエル～",
      "score": 74.3
    },
    {
      "titleEn": "Renai X Royale - Love's a Battle",
      "titleJa": "恋愛×ロワイアル",
      "score": 69.4
    },
    {
      "titleEn": "Tsui no Sora Remake",
      "titleJa": "終ノ空 remake",
      "score": 79.1
    },
    {
      "titleEn": "Marco & The Galaxy Dragon",
      "titleJa": "マルコと銀河竜",
      "score": 76.1
    },
    {
      "titleEn": "The Shell Part III: Paradiso",
      "titleJa": "天ノ少女",
      "score": 84.4
    },
    {
      "titleEn": "HaremKingdom",
      "titleJa": "ハーレムキングダム",
      "score": 71.6
    },
    {
      "titleEn": "Olympia Soirée",
      "titleJa": "オランピアソワレ",
      "score": 78.7
    }
  ],
  "2021": [
    {
      "titleEn": "TSUKIHIME -A piece of blue glass moon-",
      "titleJa": "月姫 -A piece of blue glass moon-",
      "score": 88.2
    },
    {
      "titleEn": "9-nine-:NewEpisode",
      "titleJa": "9-nine- 新章",
      "score": 74.3
    },
    {
      "titleEn": "Milk outside a bag of milk outside a bag of milk",
      "titleJa": "Milk outside a bag of milk outside a bag of milk",
      "score": 71.9
    },
    {
      "titleEn": "LOOPERS",
      "titleJa": "LOOPERS",
      "score": 66.2
    },
    {
      "titleEn": "Your Turn To Die -Death Game By Majority-",
      "titleJa": "キミガシネ　―多数決デスゲーム―",
      "score": 82.3
    },
    {
      "titleEn": "Class of '09",
      "titleJa": "Class of '09",
      "score": 67.1
    },
    {
      "titleEn": "Slow Damage",
      "titleJa": "スロウ・ダメージ",
      "score": 85.6
    },
    {
      "titleEn": "Meteor World Actor: Badge & Dagger",
      "titleJa": "流星ワールドアクター Badge & Dagger",
      "score": 74.3
    },
    {
      "titleEn": "PARQUET",
      "titleJa": "PARQUET",
      "score": 70.7
    },
    {
      "titleEn": "My Klutzy Cupid",
      "titleJa": "俺の恋天使がポンコツすぎてコワ～い。",
      "score": 71
    },
    {
      "titleEn": "Saving Mrs. Hinako with My Cock!",
      "titleJa": "元ヤンキー妻 雛子 ～心身ともに完全寝取り！～",
      "score": 75.8
    },
    {
      "titleEn": "Chihiro Himukai Always Walks Away",
      "titleJa": "日向千尋は仕事が続かない",
      "score": 73.3
    }
  ],
  "2022": [
    {
      "titleEn": "NEEDY STREAMER OVERLOAD",
      "titleJa": "NEEDY GIRL OVERDOSE",
      "score": 71.7
    },
    {
      "titleEn": "Aokana - Four Rhythms Across the Blue - EXTRA2",
      "titleJa": "蒼の彼方のフォーリズム EXTRA2",
      "score": 87.3
    },
    {
      "titleEn": "AI: THE SOMNIUM FILES - nirvanA Initiative",
      "titleJa": "AI: ソムニウムファイル ニルヴァーナイニシアチブ",
      "score": 72.8
    },
    {
      "titleEn": "Stella of The End",
      "titleJa": "終のステラ",
      "score": 82.1
    },
    {
      "titleEn": "HENPRI: HENTAI PRISON",
      "titleJa": "ヘンタイ・プリズン",
      "score": 86.2
    },
    {
      "titleEn": "ANONYMOUS;CODE",
      "titleJa": "ANONYMOUS;CODE",
      "score": 75.4
    },
    {
      "titleEn": "Love, Money, Rock'n'Roll",
      "titleJa": "Ljubov', Den'gi, Rok-n-Roll",
      "score": 54.8
    },
    {
      "titleEn": "even if TEMPEST",
      "titleJa": "even if TEMPEST 宵闇にかく語りき魔女",
      "score": 82
    },
    {
      "titleEn": "Heaven Burns Red",
      "titleJa": "ヘブンバーンズレッド",
      "score": 81.5
    },
    {
      "titleEn": "Amanatsu",
      "titleJa": "アマナツ",
      "score": 75.5
    },
    {
      "titleEn": "Desperate Virgin Brother & Rebellious Little Sister",
      "titleJa": "ガマンができない童貞兄キと、スナオになれない反抗妹",
      "score": 73.4
    },
    {
      "titleEn": "AMBITIOUS MISSION",
      "titleJa": "AMBITIOUS MISSION",
      "score": 80.7
    }
  ],
  "2023": [
    {
      "titleEn": "Angelic☆Chaos RE-BOOT!",
      "titleJa": "天使☆騒々 RE-BOOT!",
      "score": 74.5
    },
    {
      "titleEn": "Slay the Princess",
      "titleJa": "Slay the Princess",
      "score": 77.4
    },
    {
      "titleEn": "PARANORMASIGHT: The Seven Mysteries of Honjo",
      "titleJa": "PARANORMASIGHT FILE23 本所七不思議",
      "score": 76
    },
    {
      "titleEn": "Sakura no Toki -Sakura no Mori no Shita o Ayumu-",
      "titleJa": "サクラノ刻－櫻の森の下を歩む－",
      "score": 86.4
    },
    {
      "titleEn": "GINKA",
      "titleJa": "GINKA",
      "score": 72.6
    },
    {
      "titleEn": "Mashiroiro Symphony HD -Sana Edition-",
      "titleJa": "ましろ色シンフォニー SANA EDITION",
      "score": 82.8
    },
    {
      "titleEn": "Class of '09: The Re-Up",
      "titleJa": "Class of '09: The Re-Up",
      "score": 73.5
    },
    {
      "titleEn": "The Murder of Sonic the Hedgehog",
      "titleJa": "The Murder of Sonic the Hedgehog",
      "score": 66.7
    },
    {
      "titleEn": "Master Detective Archives: RAIN CODE",
      "titleJa": "超探偵事件簿 レインコード",
      "score": 69.6
    },
    {
      "titleEn": "ONE.",
      "titleJa": "ONE.",
      "score": 68.4
    },
    {
      "titleEn": "Hira Hira Hihiru",
      "titleJa": "ヒラヒラヒヒル",
      "score": 80.8
    },
    {
      "titleEn": "A Date with Death",
      "titleJa": "A Date with Death",
      "score": 77
    }
  ],
  "2024": [
    {
      "titleEn": "Eternum",
      "titleJa": "Eternum",
      "score": 86.3
    },
    {
      "titleEn": "Nie No Hakoniwa - Dollhouse of Offerings",
      "titleJa": "贄の匣庭",
      "score": 64.9
    },
    {
      "titleEn": "Select Oblige",
      "titleJa": "セレクトオブリージュ",
      "score": 68.8
    },
    {
      "titleEn": "The Hungry Lamb: Traveling in the Late Ming Dynasty",
      "titleJa": "飢えた子羊",
      "score": 79.3
    },
    {
      "titleEn": "Summer Clover",
      "titleJa": "夏色クローバー",
      "score": 79.2
    },
    {
      "titleEn": "The NOexistenceN of you AND me",
      "titleJa": "存在/しないあなた、と私",
      "score": 70
    },
    {
      "titleEn": "Class of '09: The Flip Side",
      "titleJa": "Class of '09: The Flip Side",
      "score": 50.9
    },
    {
      "titleEn": "everlasting flowers",
      "titleJa": "everlasting flowers",
      "score": 70.3
    },
    {
      "titleEn": "Homicipher",
      "titleJa": "文字化化",
      "score": 81.6
    },
    {
      "titleEn": "Tomodachinbou de Midara na Shiru o Afuresaseru Haha no Ureta Mitsuana ~Kyonyuu o Yurashi Mimodaeru Kaa-san no Aegigoe wa, Tonari no Boku no Heya made Hibikiwataru~",
      "titleJa": "友達ん棒で淫らな汁を溢れさせる母の熟れた蜜穴～巨乳を揺らし身悶える母さんの喘ぎ声は、隣の僕の部屋まで響き渡る～",
      "score": 71.5
    },
    {
      "titleEn": "Unravel trigger",
      "titleJa": "アンラベル・トリガー",
      "score": 79.4
    },
    {
      "titleEn": "LipTrip ~My Boss Is My Heat Suppressant?!~",
      "titleJa": "リップ・トリップ～編集長（ボス）はわたしの解熱剤～",
      "score": 60.2
    }
  ]
}

// 添加一个辅助函数来根据语言获取动画标题
export const getAnimeTitle = (anime: AnimeItem, language: Language): string => {
  return anime[
    ("title" +
      language.charAt(0).toUpperCase() +
      language.slice(1)) as keyof AnimeItem
  ] as string
}

export default data
