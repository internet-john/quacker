// https://api.twitter.com/2/tweets/search/recent?query=nyc&max_results=50

const mockFeed = {
  data: [
    {
      possibly_sensitive: false,
      author_id: "1301529384067555329",
      text: "@coffee_koshi ほたてでしたーー",
      id: "1362464085451833346",
      created_at: "2021-02-18T18:08:45.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "67441481",
      text:
        "RT @heirmeg: nyc the only place you’ll see a 8 year old order a butter roll wit a coffee light &amp; sweet before school",
      id: "1362464085309337602",
      created_at: "2021-02-18T18:08:45.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "1358269254009647106",
      text:
        "trilla was right when she introduced me into becoming an inquisitor. they have better coffee than the rebel base",
      id: "1362464080632578049",
      created_at: "2021-02-18T18:08:44.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "1354969362487148548",
      text:
        "RT @babiegulf: mewgulf promoting beaker and bitter— a coffee shop owned by a gay couple 😭🏳️‍🌈 https://t.co/9Oyempgsjt",
      id: "1362464079965614080",
      created_at: "2021-02-18T18:08:44.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "1300132685755510784",
      text: "RT @MAISONSTLAURENT: coffee to go please https://t.co/xzcJbhlGqk",
      id: "1362464078883651585",
      created_at: "2021-02-18T18:08:44.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "737179363",
      text:
        'RT @nolh1402: "وأنّ قَلْبِيَ لا يَقْواكَ مُنْفَرِدًا ؟."\n Pause Coffee Roasters\nالتصنيف : عائلات | افراد\n• الجلسات: داخليه\n• البارتش❎• المو…',
      id: "1362464076383870977",
      created_at: "2021-02-18T18:08:43.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "1288068248324288513",
      text:
        "RT @JujutsuVisuals: I asked them for the strongest coffee they had https://t.co/h6KB6MgpsJ",
      id: "1362464073703587851",
      created_at: "2021-02-18T18:08:43.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "1361661191676960776",
      text:
        "I just searched frog on google. Someone please explain to me why these are the results-\nNo because apparently italians search more coffee machines named frog than frogs??? 😭 https://t.co/LS2ntMfaFt",
      id: "1362464071807873028",
      created_at: "2021-02-18T18:08:42.000Z",
    },
    {
      possibly_sensitive: true,
      author_id: "1184528800790519808",
      text:
        "RT @thebasedmassiah: average coffee addict vs average tea sipper https://t.co/zNZffMq67b",
      id: "1362464068175618051",
      created_at: "2021-02-18T18:08:41.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "2936692491",
      text:
        "my parents got a coffee machine the other day and i might actually like hot coffee now?? who am i",
      id: "1362464067013795850",
      created_at: "2021-02-18T18:08:41.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "825023433893310464",
      text: "be my coffee every morning? https://t.co/hPmERFwNLe",
      id: "1362464066585784322",
      created_at: "2021-02-18T18:08:41.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "1319283717215375368",
      text:
        "i didn't drink coffee this morning so i got a headache https://t.co/72H9z9Bord",
      id: "1362464065868738562",
      created_at: "2021-02-18T18:08:41.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "717722083216719872",
      text:
        "@AlexWilsonV1 WHAT IF I WANT TO PLUG MYSELF INTO THE CAFFEINE MATRIX ALEX. WHAT IF I WANT TO PRESS COFFEE BEANS INTO MY EYES. Ahem, I mean...that's good to know",
      id: "1362464064732069894",
      created_at: "2021-02-18T18:08:41.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "2651240916",
      text:
        "RT @EssexPR: I don’t think it’s normal to have to show a health passport 5 or 6 times a day just to be allowed to use a service, shop or en…",
      id: "1362464064602071050",
      created_at: "2021-02-18T18:08:41.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "117939711",
      text:
        "@janestreet The glue failed, clearly.  You could glue it back yourself or contact the installer.  However, I am concerned about how closer your coffee appliance is the your sink.  Be safe.❤️",
      id: "1362464063951835136",
      created_at: "2021-02-18T18:08:40.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "351256720",
      text:
        "Morning coffee spot. #maine #androscogginriver https://t.co/wqM192xdeh https://t.co/EGr2uvpdfZ",
      id: "1362464063096250370",
      created_at: "2021-02-18T18:08:40.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "4895121434",
      text:
        "RT @LucasWYH_: neo_coffee Instagram update with #LUCAS \n\n🦁💛 https://t.co/A7igwprf13",
      id: "1362464055810609158",
      created_at: "2021-02-18T18:08:38.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "326643619",
      text:
        "RT @GiggukAZ: Japan: You want Coffee.\n\nMe: I don't want Coffee.\n\nJapan: It has Anime girls on it.\n\nMe: I want coffee. https://t.co/50F8Z7co…",
      id: "1362464055785525248",
      created_at: "2021-02-18T18:08:38.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "347441797",
      text:
        "Less than an hour away... we hold space every 3rd Thursday for educators to come together and discuss important #Edchat topics. Tune in. Share what’s on your mind. #strongertogether #BlackHistoryMonth  https://t.co/Z60UPrJ2w4 https://t.co/IdnUb1mwK6",
      id: "1362464049234083843",
      created_at: "2021-02-18T18:08:37.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "610992512",
      text:
        "RT @heirmeg: nyc the only place you’ll see a 8 year old order a butter roll wit a coffee light &amp; sweet before school",
      id: "1362464043718557696",
      created_at: "2021-02-18T18:08:36.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "284789237",
      text: "@DocumentingBTC Well. The coffee was mostly worth it?",
      id: "1362464042984607745",
      created_at: "2021-02-18T18:08:35.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "7431672",
      text:
        "Mayonnaise is just gross, it's food lube.\nCoconut gives me headaches.\nNever got a taste for oysters, liver or coffee, so I tend to pass on those.\n\nBut, if you're refusing to eat around half of these, you're seriously missing out on a lot of good flavors. https://t.co/wCkfzYjLYu",
      id: "1362464041780736000",
      created_at: "2021-02-18T18:08:35.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "2778618896",
      text:
        "Solomun - Black Coffee - Jeremy Olander ◆ Novocaine For Soul (Electro Ju... https://t.co/MNSMdqcoUv via @YouTube",
      id: "1362464039167815682",
      created_at: "2021-02-18T18:08:34.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "3059730522",
      text:
        "RT @JujutsuVisuals: I asked them for the strongest coffee they had https://t.co/h6KB6MgpsJ",
      id: "1362464033278894080",
      created_at: "2021-02-18T18:08:33.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "250791419",
      text:
        "RT @bostondialect: drinking my Coheed and Cambria The Beast Coffee Roasters out of my Coheed and Cambria The Beast Orb Insulated Travel Bot…",
      id: "1362464032633020420",
      created_at: "2021-02-18T18:08:33.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "1452954962",
      text:
        "RT @heirmeg: nyc the only place you’ll see a 8 year old order a butter roll wit a coffee light &amp; sweet before school",
      id: "1362464023019724800",
      created_at: "2021-02-18T18:08:31.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "887435576277741568",
      text: "@MysterySolvent A coffee filter.",
      id: "1362464018946875395",
      created_at: "2021-02-18T18:08:30.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "47329571",
      text:
        "RT @EyeLyftBitches: Why did the coffee call the police?\n\nBecause it got mugged https://t.co/q8ggmLRjHj",
      id: "1362464018548617217",
      created_at: "2021-02-18T18:08:30.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "554476301",
      text:
        "RT @thebasedmassiah: average coffee addict vs average tea sipper https://t.co/zNZffMq67b",
      id: "1362464017424515073",
      created_at: "2021-02-18T18:08:29.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "17952272",
      text:
        'RT @Cleavon_MD: Hero!🏅 “Mattress Mack" opened his Gallery Furniture Store to hundreds of people without power and heat in Houston as warmin…',
      id: "1362464017290248194",
      created_at: "2021-02-18T18:08:29.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "1354134980939501569",
      text:
        "Morning findom! I need an energy boost. Send for coffee ⭐️ \n\nfemdom findom finsub cuck paypig",
      id: "1362464017164378114",
      created_at: "2021-02-18T18:08:29.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "886769249020203008",
      text: "RT @Wynter_Nomad: Iced coffee is the gasoline of life.",
      id: "1362464015696359425",
      created_at: "2021-02-18T18:08:29.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "805578416187654144",
      text:
        "I’m at the airport, waiting to board and I’m around 3 different couples and I’m here stuffing my face and drinking a large coffee lmao",
      id: "1362464014954070017",
      created_at: "2021-02-18T18:08:29.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "292467100",
      text: "RT @MensHumor: pours beer into coffee cup https://t.co/LjQktcHVOo",
      id: "1362464014513676288",
      created_at: "2021-02-18T18:08:29.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "182160038",
      text:
        "RT @devisridhar: Happy Thursday!☀️Twitter can be intense -&gt; people flinging insults, making personal attacks &amp; overreacting. Let's all take…",
      id: "1362464012169080834",
      created_at: "2021-02-18T18:08:28.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "99617410",
      text:
        "I didn’t buy coffee before the snow storm and my eyes are burning looking at this computer screen. Save me.",
      id: "1362464011158228995",
      created_at: "2021-02-18T18:08:28.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "1422831529",
      text:
        "RT @rouxotte: 🍰Give Away \n🐿️ Happy j-hope day\n📍20.02.21: 09.30-11.00น.Coffee&amp;cake \n    เที่ยง: เทอมินอล Btsอโศก บ่าย: สยาม,ลิโด้\n    21.02.…",
      id: "1362464007295168515",
      created_at: "2021-02-18T18:08:27.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "984520894486900736",
      text:
        "RT @thebasedmassiah: average coffee addict vs average tea sipper https://t.co/zNZffMq67b",
      id: "1362464004514398217",
      created_at: "2021-02-18T18:08:26.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "334775906",
      text: "@theJperspective cold coffee is the worst",
      id: "1362464003574796288",
      created_at: "2021-02-18T18:08:26.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "1300950889247670278",
      text:
        "@Ps5Ireland Thanks so much mate I saw your message and because of that I was able to order, I’ll get ya a coffee 😉",
      id: "1362463998835359745",
      created_at: "2021-02-18T18:08:25.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "836037590",
      text:
        "@TG22110 If only I knew coffee back when I was in middle school. Pretty sure that may have been my answer to my history test 😅🤣",
      id: "1362463995484078084",
      created_at: "2021-02-18T18:08:24.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "1361714272049520642",
      text:
        "@kay_jepson “Eh, I only argue when I find it necessary, most of the time it isn’t worth the trouble.”\n\nHe finished his hot chocolate and sat the mug down on the coffee table in front of the couch.",
      id: "1362463988701949953",
      created_at: "2021-02-18T18:08:22.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "1210981361709768704",
      text:
        "@coffee_with_san @AteezLegendsss @ATEEZofficial ATEEZ FIREWORKS\n#STANWORLD #ATEEZ @ATEEZofficial \n#애이티즈",
      id: "1362463988232163330",
      created_at: "2021-02-18T18:08:22.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "855510184680194048",
      text:
        "RT @EssexPR: I don’t think it’s normal to have to show a health passport 5 or 6 times a day just to be allowed to use a service, shop or en…",
      id: "1362463987141640193",
      created_at: "2021-02-18T18:08:22.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "1279770852188393472",
      text:
        "RT @JujutsuVisuals: I asked them for the strongest coffee they had https://t.co/h6KB6MgpsJ",
      id: "1362463985858203648",
      created_at: "2021-02-18T18:08:22.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "1284319513073328129",
      text:
        "RT @thebasedmassiah: average coffee addict vs average tea sipper https://t.co/zNZffMq67b",
      id: "1362463984524419073",
      created_at: "2021-02-18T18:08:21.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "347995853",
      text: "drinking coffee bc i’m bored",
      id: "1362463981466746885",
      created_at: "2021-02-18T18:08:21.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "1156311367441440782",
      text: "People who enjoy Keurig coffee have trash dick.",
      id: "1362463980011343873",
      created_at: "2021-02-18T18:08:20.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "1187516309682163713",
      text:
        "RT @thebasedmassiah: average coffee addict vs average tea sipper https://t.co/zNZffMq67b",
      id: "1362463979675729924",
      created_at: "2021-02-18T18:08:20.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "952418460771823623",
      text: "indomie + Coffee + Sad Song + Rains",
      id: "1362463964169297924",
      created_at: "2021-02-18T18:08:17.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "771667004239425537",
      text:
        "RT @GiggukAZ: Japan: You want Coffee.\n\nMe: I don't want Coffee.\n\nJapan: It has Anime girls on it.\n\nMe: I want coffee. https://t.co/50F8Z7co…",
      id: "1362463956661592064",
      created_at: "2021-02-18T18:08:15.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "1906951",
      text:
        "New York Times Calls For Banning Coffee Shops After Learning People Can Have Uncensored Conversations There https://t.co/7YkXLCzBNT via @TheBabylonBee @nytimes",
      id: "1362463950256803845",
      created_at: "2021-02-18T18:08:13.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "206975976",
      text:
        "Coffee in bed is so luxe, I wonder why I don't do this more often.\n\nThen I spill hot coffee on my nipple and my sheets,\n\nAh.",
      id: "1362463949891903488",
      created_at: "2021-02-18T18:08:13.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "1225236847137132544",
      text:
        "RT @lilDrummerBCorb: @saylahachey Im still addicted to coffee tho but Im usually good with just one large to go mug in the morning and I do…",
      id: "1362463947756998656",
      created_at: "2021-02-18T18:08:13.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "1357078382668881920",
      text:
        "RT @JujutsuVisuals: I asked them for the strongest coffee they had https://t.co/h6KB6MgpsJ",
      id: "1362463947543220230",
      created_at: "2021-02-18T18:08:13.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "16471590",
      text:
        '@seanhannity SIGH!! This is what they insist belongs in the Oval Office. Whoever "they" is better wake up &amp; smell the coffee. Hes using the Executive Order to enact his bucket list.',
      id: "1362463947282997248",
      created_at: "2021-02-18T18:08:13.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "103957983",
      text:
        "RT @sims_mss: Are there specific manuscripts from Penn's collections that you'd like to see featured during Coffee with a Codex, Mondays at…",
      id: "1362463945831948292",
      created_at: "2021-02-18T18:08:12.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "2504547810",
      text:
        '@divinebarrelclt "Pilsner" \n"The Universe is a Donut" #imperial #stout w/ #doughnuts #coffee #cocoanibs &amp; #vanilla\n"Cherry Connick, Jr." #berinerweisse w/ #cherry &amp; #vanilla now in stock! #beer #craftbeer https://t.co/1ixGfll9od',
      id: "1362463945752158208",
      created_at: "2021-02-18T18:08:12.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "880632193961213956",
      text:
        "RT @_shailynnamber: iced coffee ... that’s it , that’s the tweet .",
      id: "1362463939485782021",
      created_at: "2021-02-18T18:08:11.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "1294867127296458752",
      text: "https://t.co/AGTdwZHJHN",
      id: "1362463939339186182",
      created_at: "2021-02-18T18:08:11.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "338830397",
      text:
        'RT @Cleavon_MD: Hero!🏅 “Mattress Mack" opened his Gallery Furniture Store to hundreds of people without power and heat in Houston as warmin…',
      id: "1362463938869354496",
      created_at: "2021-02-18T18:08:11.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "475392360",
      text:
        "@Faungirl123 Here's your pager.. Coffee in the lobby.. We validate parking",
      id: "1362463936776437762",
      created_at: "2021-02-18T18:08:10.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "1160240978801938433",
      text:
        "Walking \nMusic\nSunshine\nGardening \nCoffee \nCats \nCigarettes \nHugs \n\nHappy &amp; Chilled \n\nPlease brain let me keep it 🙏",
      id: "1362463935862038531",
      created_at: "2021-02-18T18:08:10.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "990553932123566080",
      text: "@ergodic_coffee Yoo what if we make a huge scientific discovery",
      id: "1362463932926070784",
      created_at: "2021-02-18T18:08:09.000Z",
    },
    {
      possibly_sensitive: false,
      author_id: "1097174590336323585",
      text:
        "after two months of not drinking coffee, sorry dok urgent :) https://t.co/sueyJDVOvY",
      id: "1362463932477108225",
      created_at: "2021-02-18T18:08:09.000Z",
    },
  ],
  meta: {
    newest_id: "1362464085451833346",
    oldest_id: "1362463932477108225",
    result_count: 65,
    next_token: "b26v89c19zqg8o3fosns2x7x7e77y2v768oksof11e1rx",
  },
};

export default mockFeed;
