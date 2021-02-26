// https://api.twitter.com/2/tweets/search/recent?query=nyc&max_results=50

const mockFeed = {
  data: [
    {
      created_at: "2021-02-28T18:36:15.000Z",
      possibly_sensitive: false,
      id: "1366094883233136642",
      author_id: "1158556297891057664",
      text:
        "@saturnsentme it’s the closest we ever gon get to a krabby patty expensive asl tho",
    },
    {
      created_at: "2021-02-28T18:26:46.000Z",
      possibly_sensitive: false,
      id: "1366092494878949380",
      author_id: "707936629",
      text: "@zziak22 It's like eating a krabby patty @ 3am",
    },
    {
      created_at: "2021-02-28T18:20:23.000Z",
      possibly_sensitive: false,
      id: "1366090888020185090",
      author_id: "1324003161946861568",
      text: "@luciferis1onely KRABBY PATTY",
    },
    {
      created_at: "2021-02-28T18:18:33.000Z",
      possibly_sensitive: false,
      id: "1366090428597075973",
      author_id: "2349527574",
      text:
        "What might be the Krabby Patty’s secret formula? Well, make your own and invite others to have an ultimate burger party. Hamburgers are easy to make. Work on your patty, cook them well, and put them in a bun along with other ingredients you like. #krabbyPatty #bun #comfortfood https://t.co/5XNdg0zXt5",
    },
    {
      created_at: "2021-02-28T18:15:17.000Z",
      possibly_sensitive: false,
      id: "1366089608287707137",
      author_id: "433049545",
      text: "@malibufaces Shit we missed our 3am krabby patty",
    },
    {
      created_at: "2021-02-28T18:14:38.000Z",
      possibly_sensitive: false,
      id: "1366089443069865984",
      author_id: "2343956513",
      text:
        "RT @carleesuh: Ayo Niggas be holding onto shit like it’s the krabby patty formula",
    },
    {
      created_at: "2021-02-28T18:12:36.000Z",
      possibly_sensitive: false,
      id: "1366088932090331145",
      author_id: "1115070527817879552",
      text:
        "You know how good a first kiss feels? That tingly feeling, those butterflies, that excitement? Eating a Krabby Patty is the same thing.",
    },
    {
      created_at: "2021-02-28T18:03:46.000Z",
      possibly_sensitive: false,
      id: "1366086708501090304",
      author_id: "445845197",
      text:
        "Excited as hell because my mom would finally let me get the spongebob krabby patty gummies as a treat https://t.co/KLnPb3O9lx",
    },
    {
      created_at: "2021-02-28T18:01:50.000Z",
      possibly_sensitive: false,
      id: "1366086220392980482",
      author_id: "3845196748",
      text:
        "RT @JurassicAust: I see Godzilla gets into the Krabby Patty vault in Godzilla Singular Point https://t.co/7aDc7vK0Lz",
    },
    {
      created_at: "2021-02-28T18:00:17.000Z",
      possibly_sensitive: false,
      id: "1366085832738623488",
      author_id: "374979180",
      text: "When will they offer a krabby patty? https://t.co/Bs3aoaPZwx",
    },
    {
      created_at: "2021-02-28T17:57:22.000Z",
      possibly_sensitive: false,
      id: "1366085098827747330",
      author_id: "177681327",
      text:
        "@EdWJames if you meant Krabby Patty with that first one, that is it: Krabby Patty",
    },
    {
      created_at: "2021-02-28T17:41:14.000Z",
      possibly_sensitive: false,
      id: "1366081036388601865",
      author_id: "989952742385954816",
      text:
        "RT @CallMeWhyteGurl: Mfs be like “dm me”... Bitch I did not ask you for the krabby patty formula, just say it. https://t.co/jPPR8ceFWH",
    },
    {
      created_at: "2021-02-28T17:40:46.000Z",
      possibly_sensitive: false,
      id: "1366080919359139845",
      author_id: "64544617",
      text:
        "RT @CallMeWhyteGurl: Mfs be like “dm me”... Bitch I did not ask you for the krabby patty formula, just say it.",
    },
    {
      created_at: "2021-02-28T17:23:11.000Z",
      possibly_sensitive: false,
      id: "1366076493198155780",
      author_id: "1354610551863783427",
      text:
        "RT @squidward_hoe: u know i beat the pussy up until mrs pearl is happy\n\nput the dick between her buns just like a krabby patty",
    },
    {
      created_at: "2021-02-28T17:23:10.000Z",
      possibly_sensitive: false,
      id: "1366076490081841154",
      author_id: "1244615312215080961",
      text:
        '@_TheTops_ @PhishCaek @DarthSateus "In case you\'re wonder: yes, I am still a krabby patty"',
    },
    {
      created_at: "2021-02-28T17:12:59.000Z",
      possibly_sensitive: false,
      id: "1366073928616202242",
      author_id: "499300963",
      text:
        "Little Ve’ got the Krabby Patty Formula, tacos were gas 🤣 https://t.co/tISV1zEPsm",
    },
    {
      created_at: "2021-02-28T17:10:26.000Z",
      possibly_sensitive: false,
      id: "1366073284526301189",
      author_id: "757775012921217024",
      text:
        "RT @JurassicAust: I see Godzilla gets into the Krabby Patty vault in Godzilla Singular Point https://t.co/7aDc7vK0Lz",
    },
    {
      created_at: "2021-02-28T17:09:20.000Z",
      possibly_sensitive: false,
      id: "1366073009249861633",
      author_id: "891849506488299522",
      text:
        "RT @squidward_hoe: u know i beat the pussy up until mrs pearl is happy\n\nput the dick between her buns just like a krabby patty",
    },
    {
      created_at: "2021-02-28T17:01:00.000Z",
      possibly_sensitive: false,
      id: "1366070910449561608",
      author_id: "833551870404784133",
      text:
        "something I’ve wanted more than a Krabby Patty lmaoo https://t.co/cw0fTaxXS6",
    },
    {
      created_at: "2021-02-28T17:00:59.000Z",
      possibly_sensitive: false,
      id: "1366070906603397129",
      author_id: "1033341720233238528",
      text:
        "RT @Kingsleytwt: Find someone who adores you the way Spongebob adores the Krabby patty...",
    },
    {
      created_at: "2021-02-28T16:56:45.000Z",
      possibly_sensitive: false,
      id: "1366069842265202688",
      author_id: "2196650822",
      text:
        "RT @okinbda: Mfs treating the honey mustard like the  krabby patty formula",
    },
    {
      created_at: "2021-02-28T16:41:41.000Z",
      possibly_sensitive: false,
      id: "1366066052019281920",
      author_id: "1184495441968152576",
      text:
        "RT @Nthn2K_: all these nudes leaking but the krusty crab krabby patty formula still safe",
    },
    {
      created_at: "2021-02-28T16:40:10.000Z",
      possibly_sensitive: false,
      id: "1366065671247904769",
      author_id: "716720177",
      text:
        "RT @okinbda: Mfs treating the honey mustard like the  krabby patty formula",
    },
    {
      created_at: "2021-02-28T16:39:05.000Z",
      possibly_sensitive: false,
      id: "1366065398240735234",
      author_id: "1410299508",
      text:
        "RT @undergroundbihh: @chancexclip “He ate, omg he ate that shit up tho.” Bitch ate the nasty ass krabby patty, shut yall ass up he left all…",
    },
    {
      created_at: "2021-02-28T16:38:42.000Z",
      possibly_sensitive: false,
      id: "1366065299145940996",
      author_id: "701369460246999040",
      text:
        "RT @Nthn2K_: all these nudes leaking but the krusty crab krabby patty formula still safe",
    },
    {
      created_at: "2021-02-28T16:37:34.000Z",
      possibly_sensitive: false,
      id: "1366065014566658048",
      author_id: "1311610185819910144",
      text: "@heypattt Babay krabby patty 😢",
    },
    {
      created_at: "2021-02-28T16:37:15.000Z",
      possibly_sensitive: false,
      id: "1366064936254910468",
      author_id: "972489421751758849",
      text: "RT @iimmjaayy_: i want a krabby patty😭 them mf’s look good",
    },
    {
      created_at: "2021-02-28T16:37:00.000Z",
      possibly_sensitive: false,
      id: "1366064872341966851",
      author_id: "1337078286191525889",
      text: "feels like im in the great krabby patty famine episode",
    },
    {
      created_at: "2021-02-28T16:31:21.000Z",
      possibly_sensitive: false,
      id: "1366063449269231618",
      author_id: "1352011658537934849",
      text:
        "@Spsquarepants i think it’s made out of crab meat that’s why it’s a secret bc mr. krabs is a crab and it’s called a krabby patty so it makes sense if you think ab it lmaoo",
    },
    {
      created_at: "2021-02-28T16:30:08.000Z",
      possibly_sensitive: false,
      id: "1366063146218254348",
      author_id: "2222448906",
      text:
        "RT @Nthn2K_: all these nudes leaking but the krusty crab krabby patty formula still safe",
    },
    {
      created_at: "2021-02-28T16:28:13.000Z",
      possibly_sensitive: false,
      id: "1366062662619181060",
      author_id: "1229890640651210754",
      text:
        "RT @Nthn2K_: all these nudes leaking but the krusty crab krabby patty formula still safe",
    },
    {
      created_at: "2021-02-28T16:25:25.000Z",
      possibly_sensitive: false,
      id: "1366061957900627969",
      author_id: "1295808487201689602",
      text:
        "RT @Nthn2K_: all these nudes leaking but the krusty crab krabby patty formula still safe",
    },
    {
      created_at: "2021-02-28T16:24:02.000Z",
      possibly_sensitive: false,
      id: "1366061609932627973",
      author_id: "1296633511021932544",
      text:
        "all these nudes leaking but the krusty crab krabby patty formula still safe",
    },
    {
      created_at: "2021-02-28T16:21:17.000Z",
      possibly_sensitive: false,
      id: "1366060916404592642",
      author_id: "3302833387",
      text:
        "RT @Spsquarepants: Who ever can guess the krabby patty secret formula gets a follow",
    },
    {
      created_at: "2021-02-28T16:17:05.000Z",
      possibly_sensitive: false,
      id: "1366059862187204615",
      author_id: "1353761489128194049",
      text:
        "@Cann__03 lol I know but that’s not what it’s called👀\nIt’s krabby patty",
    },
    {
      created_at: "2021-02-28T16:12:24.000Z",
      possibly_sensitive: false,
      id: "1366058681490694145",
      author_id: "1353761489128194049",
      text: "@Cann__03 Definitely krabby patty for my baby",
    },
    {
      created_at: "2021-02-28T16:10:20.000Z",
      possibly_sensitive: false,
      id: "1366058159488565252",
      author_id: "3025649224",
      text:
        "@thegoosemen can I get a Geuben, a Charizard, and a Krabby Patty by the Border please! Thanks",
    },
    {
      created_at: "2021-02-28T16:02:25.000Z",
      possibly_sensitive: false,
      id: "1366056170318819331",
      author_id: "1329709932728385537",
      text:
        "@yejiehwg waduhh maaf baru bukaa:(\nanw krabby patty nya udah abis🤣🤣",
    },
    {
      created_at: "2021-02-28T16:00:38.000Z",
      possibly_sensitive: false,
      id: "1366055719917641735",
      author_id: "1050533931483783168",
      text:
        "RT @JurassicAust: I see Godzilla gets into the Krabby Patty vault in Godzilla Singular Point https://t.co/7aDc7vK0Lz",
    },
    {
      created_at: "2021-02-28T15:56:20.000Z",
      possibly_sensitive: false,
      id: "1366054636659081217",
      author_id: "276679258",
      text:
        "I see Godzilla gets into the Krabby Patty vault in Godzilla Singular Point https://t.co/7aDc7vK0Lz",
    },
    {
      created_at: "2021-02-28T15:44:34.000Z",
      possibly_sensitive: false,
      id: "1366051677887946756",
      author_id: "766373836422017024",
      text:
        "Ayo Niggas be holding onto shit like it’s the krabby patty formula",
    },
    {
      created_at: "2021-02-28T15:36:38.000Z",
      possibly_sensitive: false,
      id: "1366049679029510150",
      author_id: "1263314721345765382",
      text: "i want a krabby patty😭 them mf’s look good",
    },
    {
      created_at: "2021-02-28T15:31:48.000Z",
      possibly_sensitive: false,
      id: "1366048464682029062",
      author_id: "876618521928761344",
      text:
        "RT @Spsquarepants: Who ever can guess the krabby patty secret formula gets a follow",
    },
    {
      created_at: "2021-02-28T15:15:29.000Z",
      possibly_sensitive: false,
      id: "1366044358622011396",
      author_id: "1179791901416972294",
      text:
        "RT @Spsquarepants: Who ever can guess the krabby patty secret formula gets a follow",
    },
    {
      created_at: "2021-02-28T15:14:32.000Z",
      possibly_sensitive: false,
      id: "1366044117155926023",
      author_id: "3364756229",
      text:
        "RT @Spsquarepants: Who ever can guess the krabby patty secret formula gets a follow",
    },
    {
      created_at: "2021-02-28T15:12:40.000Z",
      possibly_sensitive: false,
      id: "1366043648996040711",
      author_id: "1115070527817879552",
      text:
        "Ive decided to reveal the Krabby Patty secret formula. Out with it, its finally time for all of you to know, The Krabby Patty Formula is...t",
    },
    {
      created_at: "2021-02-28T14:51:37.000Z",
      possibly_sensitive: false,
      id: "1366038352265433089",
      author_id: "1043588820",
      text:
        "RT @Blameitontati: My son just bursted in my room talking about “mommy plankton stole the krabby Patty formula and we need to get it back”😭…",
    },
    {
      created_at: "2021-02-28T14:47:54.000Z",
      possibly_sensitive: false,
      id: "1366037417434648580",
      author_id: "1276664904",
      text:
        "RT @3428566O: I've been thinking about a new fictitious episode: Plankton accidentally eats a krabby patty and the delicious sandwich break…",
    },
    {
      created_at: "2021-02-28T14:46:22.000Z",
      possibly_sensitive: false,
      id: "1366037029159591941",
      author_id: "1195016597007667200",
      text:
        "RT @3428566O: I've been thinking about a new fictitious episode: Plankton accidentally eats a krabby patty and the delicious sandwich break…",
    },
    {
      created_at: "2021-02-28T14:34:11.000Z",
      possibly_sensitive: false,
      id: "1366033963752415233",
      author_id: "1263364131236839424",
      text:
        "RT @Blameitontati: My son just bursted in my room talking about “mommy plankton stole the krabby Patty formula and we need to get it back”😭…",
    },
    {
      created_at: "2021-02-28T14:34:03.000Z",
      possibly_sensitive: false,
      id: "1366033931309436938",
      author_id: "329819205",
      text:
        "The spongebob krabby patty restaurant game is what y’all had to be there for !",
    },
    {
      created_at: "2021-02-28T14:28:57.000Z",
      possibly_sensitive: false,
      id: "1366032649416962050",
      author_id: "1305215175444684800",
      text:
        "RT @mexicanarabella: not me making fun of julian casablancas for being greasy when i can probably cook a krabby patty on my face",
    },
    {
      created_at: "2021-02-28T14:22:41.000Z",
      possibly_sensitive: false,
      id: "1366031070454456325",
      author_id: "1013624034385260545",
      text:
        "@hadidqiqi_ sponge cuci piring gw besok pagi disuru bikin krabby patty",
    },
    {
      created_at: "2021-02-28T14:22:04.000Z",
      possibly_sensitive: false,
      id: "1366030913986002952",
      author_id: "1309137772968652802",
      text:
        "RT @undergroundbihh: @chancexclip “He ate, omg he ate that shit up tho.” Bitch ate the nasty ass krabby patty, shut yall ass up he left all…",
    },
    {
      created_at: "2021-02-28T14:19:02.000Z",
      possibly_sensitive: false,
      id: "1366030152354959360",
      author_id: "778711240780636161",
      text:
        "RT @okinbda: Mfs treating the honey mustard like the  krabby patty formula",
    },
    {
      created_at: "2021-02-28T14:10:04.000Z",
      possibly_sensitive: false,
      id: "1366027895798390790",
      author_id: "1138531930302033922",
      text:
        "@effizzzyy @king_koddy Yeah I think he tried to be a musician before he settled for the Krabby Patty job",
    },
    {
      created_at: "2021-02-28T14:09:05.000Z",
      possibly_sensitive: false,
      id: "1366027647130742784",
      author_id: "1257130605445369858",
      text:
        "RT @Spsquarepants: Who ever can guess the krabby patty secret formula gets a follow",
    },
    {
      created_at: "2021-02-28T14:07:02.000Z",
      possibly_sensitive: false,
      id: "1366027130107138048",
      author_id: "596143046",
      text:
        "@MerryRiana Di saat kamu ingin menyerah, tolong ingat perjuangan plankton untuk mendapatkan resep krabby patty 👍",
    },
    {
      created_at: "2021-02-28T14:03:44.000Z",
      possibly_sensitive: false,
      id: "1366026302483030020",
      author_id: "1359768647665909768",
      text:
        "I just remembered that the krabby patty secret formula is crab meat....",
    },
    {
      created_at: "2021-02-28T13:45:33.000Z",
      possibly_sensitive: false,
      id: "1366021725264240640",
      author_id: "770449846679592960",
      text:
        "RT @okinbda: Mfs treating the honey mustard like the  krabby patty formula",
    },
    {
      created_at: "2021-02-28T13:11:54.000Z",
      possibly_sensitive: false,
      id: "1366013258633777152",
      author_id: "1075816185663578112",
      text: "Krabby Patty Training Video",
    },
    {
      created_at: "2021-02-28T13:11:17.000Z",
      possibly_sensitive: false,
      id: "1366013100554547204",
      author_id: "2341439982",
      text:
        "Woi , apa aku harus menyerang bumi bareng Adu Du dan harus mencuri resep rahasia krabby patty dulu, baru kamu sadar bahwa aku ini  nyata yang kau anggap halusinasi",
    },
    {
      created_at: "2021-02-28T13:01:57.000Z",
      possibly_sensitive: false,
      id: "1366010755359899648",
      author_id: "826125972474908672",
      text:
        "RT @Spsquarepants: Who ever can guess the krabby patty secret formula gets a follow",
    },
    {
      created_at: "2021-02-28T12:59:02.000Z",
      possibly_sensitive: false,
      id: "1366010020010295298",
      author_id: "1318822681580621825",
      text:
        "h&amp;m is always doing this shit. just put a krabby patty on the back not this weird shit https://t.co/5syBcLkYMF",
    },
    {
      created_at: "2021-02-28T12:53:00.000Z",
      possibly_sensitive: false,
      id: "1366008501227642880",
      author_id: "4057500795",
      text:
        "Damn, she got them you like krabby patty’s don’t you squidwards https://t.co/uhFRfS5v1Y",
    },
  ],
  meta: {
    newest_id: "1366094883233136642",
    oldest_id: "1366008501227642880",
    result_count: 65,
    next_token: "b26v89c19zqg8o3fosntrb2zrad13skd01a1jvwm2xu2l",
  },
};

export default mockFeed;
