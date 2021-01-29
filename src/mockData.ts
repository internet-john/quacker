// https://api.twitter.com/2/users/:id/tweets?max_results=100

const mockTimeline = {
  data: [
    {
      conversation_id: "1355181286588088323",
      text:
        "@chefkatarina Nothing better than cowboy coffee from a percolator!! Own three myself!",
      created_at: "2021-01-29T20:23:43.000Z",
      id: "1355250292082827271",
      possibly_sensitive: false,
      author_id: "41212709",
    },
    {
      conversation_id: "1355250291008884736",
      text:
        "RT @scarnicolexx: Drinking coffee while naked is underrated ☕️ https://t.co/7oszpaZipy",
      created_at: "2021-01-29T20:23:43.000Z",
      id: "1355250291008884736",
      possibly_sensitive: false,
      author_id: "1321618115642322944",
    },
    {
      conversation_id: "1355250290656747528",
      text:
        "For the first 12 hours of the day I am composed of 3 cups of coffee, a bottle of kombucha and my weed pen. I can’t live like this.",
      created_at: "2021-01-29T20:23:43.000Z",
      id: "1355250290656747528",
      possibly_sensitive: false,
      author_id: "259402749",
    },
    {
      conversation_id: "1355250286856609793",
      text:
        "She'd have to find him first. Corvi has been having a hard time with that. But the next time she's in Galar and their paths cross he'll buy her a coffee from afar.\n\nPerhaps a scone to go with it. https://t.co/xYRpumcKti",
      created_at: "2021-01-29T20:23:42.000Z",
      id: "1355250286856609793",
      possibly_sensitive: false,
      author_id: "1307783426028662784",
    },
    {
      conversation_id: "1355209126268325894",
      text: "@ThreeFates Do you drink coffee?",
      created_at: "2021-01-29T20:23:41.000Z",
      id: "1355250283190902791",
      possibly_sensitive: false,
      author_id: "2676673165",
    },
    {
      conversation_id: "1355011047116124169",
      text:
        "@Bryan_Robinson_ @HunterALott @KennyJakobsen @CharleyMoss1 @AliBalibeeC @MattHaworth @JessieLynnJL @DuyvenbodeUSV Yes we eat that when we drink Coffee at 4\uD83E\uDD23\uD83D\uDE1D. Or in the evening with Coffee",
      created_at: "2021-01-29T20:23:41.000Z",
      id: "1355250282763005958",
      possibly_sensitive: false,
      author_id: "1872764503",
    },
    {
      conversation_id: "1355250275066458113",
      text:
        "RT @Seren_dipityiee: Zlatan probably thought he was going to be having coffee with Otedola after turning down payment for the colabo, just…",
      created_at: "2021-01-29T20:23:39.000Z",
      id: "1355250275066458113",
      possibly_sensitive: false,
      author_id: "1352326969627705349",
    },
    {
      conversation_id: "1355250266321334276",
      text:
        "RT @noufmuhmd: if you bring me coffee without having to ask, then i love you",
      created_at: "2021-01-29T20:23:37.000Z",
      id: "1355250266321334276",
      possibly_sensitive: false,
      author_id: "841846367781826560",
    },
    {
      conversation_id: "1355241872294178817",
      text:
        "@strawbunnylol Order some foood, have snacks ready  and a coffee thats not half drank before stream starts \uD83D\uDE07",
      created_at: "2021-01-29T20:23:36.000Z",
      id: "1355250261942358016",
      possibly_sensitive: false,
      author_id: "1334810211014479873",
    },
    {
      conversation_id: "1355250258167656455",
      text:
        "RT @TownTattle: My friend @CarmenChloie has started a newsletter. I haven’t seen her in over a year but this first entry made me feel like…",
      created_at: "2021-01-29T20:23:35.000Z",
      id: "1355250258167656455",
      possibly_sensitive: false,
      author_id: "119429359",
    },
    {
      conversation_id: "1355250254858346502",
      text:
        "RT @RobTiffany: IoT Coffee Talk – #YouTube Episode 7: Smart Home \nWelcome to IoT Coffee Talk where we have a chat about all things #IoT #II…",
      created_at: "2021-01-29T20:23:34.000Z",
      id: "1355250254858346502",
      possibly_sensitive: false,
      author_id: "1040351960757686274",
    },
    {
      conversation_id: "1355233512173957121",
      text:
        "@han_peiji it’s a coffee that kind of  make people sleep \uD83D\uDE34",
      created_at: "2021-01-29T20:23:34.000Z",
      id: "1355250252903632899",
      possibly_sensitive: false,
      author_id: "1340202849267957761",
    },
    {
      conversation_id: "1355202029509955584",
      text:
        "@slurpsmadrips to me a double double is a coffee. (Two creams, two sugars.)",
      created_at: "2021-01-29T20:23:33.000Z",
      id: "1355250251507003393",
      possibly_sensitive: false,
      author_id: "108631018",
    },
    {
      conversation_id: "1355250250986840064",
      text:
        "Europe during the Middle Ages: ah yes, wheatcakes for supper again. i can’t read and live in squalor\n\nMiddle East during the Middle Ages: boy i sure love coffee and seasoned food. today i think i will invent mathematics and astronomy",
      created_at: "2021-01-29T20:23:33.000Z",
      id: "1355250250986840064",
      possibly_sensitive: false,
      author_id: "754869594674769920",
    },
    {
      conversation_id: "1355250248164069376",
      text:
        "Some coffee bean hot chocolate sounds DELICIOUS right now \uD83E\uDD24",
      created_at: "2021-01-29T20:23:33.000Z",
      id: "1355250248164069376",
      possibly_sensitive: false,
      author_id: "2407770288",
    },
    {
      conversation_id: "1355250244418564096",
      text:
        "Who is ready to sell books coffee and bikes in a culturally safe space",
      created_at: "2021-01-29T20:23:32.000Z",
      id: "1355250244418564096",
      possibly_sensitive: false,
      author_id: "777514556201373696",
    },
    {
      conversation_id: "1355250242451599362",
      text:
        "is it weird that i love pictures of celebrities drinking coffee \uD83D\uDC80",
      created_at: "2021-01-29T20:23:31.000Z",
      id: "1355250242451599362",
      possibly_sensitive: false,
      author_id: "1020094692837519360",
    },
    {
      conversation_id: "1355250237921656834",
      text:
        "RT @6135478068Eh: @RosieBarton That 2% brought in the British variant and the South African variant while I am under stay home regulations…",
      created_at: "2021-01-29T20:23:30.000Z",
      id: "1355250237921656834",
      possibly_sensitive: false,
      author_id: "1942265899",
    },
    {
      conversation_id: "1355250235476500481",
      text:
        "RT @nxtswidow: good night besties !! tonight i offer u nat and wanda drinking coffee &lt;33 https://t.co/Qt8OQXHxca",
      created_at: "2021-01-29T20:23:30.000Z",
      id: "1355250235476500481",
      possibly_sensitive: false,
      author_id: "1281646573714374657",
    },
    {
      conversation_id: "1355248757496016898",
      text:
        "@n10x11 @yo_coffee_sa @samar88k @tag_pic1 @Azizahalm_ @1kenner1 @nolh1402 @RammRiyadh @KSA_Restaurants @iili__17 @Mohmd_AlFahad تستاهل الطيب ،، من ذوقك ♥️\uD83C\uDF39",
      created_at: "2021-01-29T20:23:29.000Z",
      id: "1355250233438064641",
      possibly_sensitive: false,
      author_id: "453207219",
    },
    {
      conversation_id: "1355250230049058817",
      text: "Made some Coffee https://t.co/GrBa3yc0iE",
      created_at: "2021-01-29T20:23:28.000Z",
      id: "1355250230049058817",
      possibly_sensitive: false,
      author_id: "710626899228286976",
    },
    {
      conversation_id: "1355246265286725632",
      text: "@spideyytimmy I ALMOST CHOKED ON MY COFFEE",
      created_at: "2021-01-29T20:23:27.000Z",
      id: "1355250225116557314",
      possibly_sensitive: false,
      author_id: "904875538115944448",
    },
    {
      conversation_id: "1355250221739958272",
      text:
        "RT @Cinvilll: I just found out Starbucks donates to planned parenthood, idk abt y’all but I’m craving some coffee right now",
      created_at: "2021-01-29T20:23:26.000Z",
      id: "1355250221739958272",
      possibly_sensitive: false,
      author_id: "1285022075711676417",
    },
    {
      conversation_id: "1355250221077262338",
      text:
        "Only mid night coffee ey make you caffeineD :-D (28) https://t.co/uB0ddNucb3 https://t.co/ioUTaWiRCS",
      created_at: "2021-01-29T20:23:26.000Z",
      id: "1355250221077262338",
      possibly_sensitive: false,
      author_id: "837687124207915008",
    },
    {
      conversation_id: "1355250218090987525",
      text:
        "RT @makaylajedward: becoming addicted to iced coffee was the most expensive decision i’ve ever made",
      created_at: "2021-01-29T20:23:25.000Z",
      id: "1355250218090987525",
      possibly_sensitive: false,
      author_id: "601598728",
    },
    {
      conversation_id: "1355229879059574790",
      text:
        "@Justin73NL @MemorialU MI is welcoming back employees with coffee/tea, muffins and cookies in their cafeteria. Does this not seem like the absolute wrong thing to do in a pandemic?",
      created_at: "2021-01-29T20:23:25.000Z",
      id: "1355250218028175372",
      possibly_sensitive: false,
      author_id: "75634049",
    },
    {
      conversation_id: "1355250213334740993",
      text: "Coffee ❤️ https://t.co/bDJ0xIimI6",
      created_at: "2021-01-29T20:23:24.000Z",
      id: "1355250213334740993",
      possibly_sensitive: true,
      author_id: "1146523347414638602",
    },
    {
      conversation_id: "1355250210025312256",
      text:
        "I'm craving coffee but I shouldn't drink any since it usually makes me nauseous and I get the shakes \uD83D\uDE1E",
      created_at: "2021-01-29T20:23:24.000Z",
      id: "1355250210025312256",
      possibly_sensitive: false,
      author_id: "41760838",
    },
    {
      conversation_id: "1355250209954144256",
      text:
        "RT @margielamiuse: gothic architecture, history books, black coffee &amp; art museums https://t.co/mJNk3fdr1T",
      created_at: "2021-01-29T20:23:24.000Z",
      id: "1355250209954144256",
      possibly_sensitive: false,
      author_id: "2573210858",
    },
    {
      conversation_id: "1355250209761189889",
      text:
        "Her day starts with a coffee ☕️ and ends with a wine \uD83C\uDF77 https://t.co/pwICIIO6ZI",
      created_at: "2021-01-29T20:23:23.000Z",
      id: "1355250209761189889",
      possibly_sensitive: false,
      author_id: "981297023629455360",
    },
    {
      conversation_id: "1355250207613706240",
      text:
        "TEJpJf9vVJ8L4Gquik9zH8bec2tdiMLUtG - buy me a cup of coffee ☕, thanks \uD83D\uDE0A #TronNetwork #tronscan #TRX #goodwill",
      created_at: "2021-01-29T20:23:23.000Z",
      id: "1355250207613706240",
      possibly_sensitive: false,
      author_id: "1315750519856660481",
    },
    {
      conversation_id: "1355250207538245632",
      text:
        "Jeremy Galton (b. 1949). Soft-boiled Egg and Coffee. https://t.co/LIUU9ctzvo",
      created_at: "2021-01-29T20:23:23.000Z",
      id: "1355250207538245632",
      possibly_sensitive: false,
      author_id: "4704912476",
    },
    {
      conversation_id: "1355250207034724353",
      text:
        "Maybe I should stop buying coffee cards for ppl who do the bare minimum but like",
      created_at: "2021-01-29T20:23:23.000Z",
      id: "1355250207034724353",
      possibly_sensitive: false,
      author_id: "288072870",
    },
    {
      conversation_id: "1355235836640583684",
      text:
        "@Manpree31938145 DOGECOIN TO THE MOON!! \uD83D\uDE80 \uD83D\uDE80 \n\nRemind yourself every morning with a dogecoin mug! $doge #dogecoin\n\nhttps://t.co/R7Lxm15EPv",
      created_at: "2021-01-29T20:23:22.000Z",
      id: "1355250204140822531",
      possibly_sensitive: false,
      author_id: "1286138095302332423",
    },
    {
      conversation_id: "1355250203104784385",
      text:
        "RT @dubunours: \uD835\uDC2D\uD835\uDC21\uD835\uDC2B\uD835\uDC1E\uD835\uDC1A\uD835\uDC1D; \n\n          ✨\uD835\uDD38\uD835\uDD41\uD835\uDD4C \uD835\uDD54\uD835\uDD60\uD835\uDD5F\uD835\uDD54\uD835\uDD56\uD835\uDD61\uD835\uDD65 \uD835\uDD64\uD835\uDD65\uD835\uDD60\uD835\uDD63\uD835\uDD56✨\n\nJ’aimerais vous parler du projet de Mali&amp;Léo, deux jeunes qui bossent actuellement…",
      created_at: "2021-01-29T20:23:22.000Z",
      id: "1355250203104784385",
      possibly_sensitive: false,
      author_id: "933794114860175361",
    },
    {
      conversation_id: "1355214410059452416",
      text:
        "@FLOWSOMUCH Here’s the problem with me. I can drink black coffee. I need creamer in that bih \uD83D\uDE02\uD83D\uDE02\uD83D\uDE02\uD83D\uDE02\uD83D\uDE02\uD83E\uDD26\uD83C\uDFFD‍♂️",
      created_at: "2021-01-29T20:23:22.000Z",
      id: "1355250201536069632",
      possibly_sensitive: false,
      author_id: "30174742",
    },
    {
      conversation_id: "1354896424736083969",
      text:
        "@Vixitty @EddieBear58 I have a hot plate xD \nBut my room stays cold enough that the top of the coffee goes cold \uD83E\uDD23",
      created_at: "2021-01-29T20:23:21.000Z",
      id: "1355250199489372162",
      possibly_sensitive: false,
      author_id: "1101384796184416256",
    },
    {
      conversation_id: "1355250197610328064",
      text:
        "RT @anasthyfirst: bitches who drink their coffee black think they’re different",
      created_at: "2021-01-29T20:23:21.000Z",
      id: "1355250197610328064",
      possibly_sensitive: false,
      author_id: "1306609765569699842",
    },
    {
      conversation_id: "1355250193982128129",
      text: "Just Woke Up. \ndrink coffee and work✊✊✊",
      created_at: "2021-01-29T20:23:20.000Z",
      id: "1355250193982128129",
      possibly_sensitive: false,
      author_id: "1339565034754560011",
    },
    {
      conversation_id: "1355250193772507136",
      text:
        "RT @dinojong: key's \uD83E\uDDFC favourite nespresso coffee flavour is Vertuo Vanilla im assumming its the capsule coffee flavour??? https://t.co/bqmT…",
      created_at: "2021-01-29T20:23:20.000Z",
      id: "1355250193772507136",
      possibly_sensitive: false,
      author_id: "611838502",
    },
    {
      conversation_id: "1355250190890926080",
      text:
        "Waiting in the parking lot at the vet (she's fine), I miss being able to kill time at a coffee shop or shopping, sigh",
      created_at: "2021-01-29T20:23:19.000Z",
      id: "1355250190890926080",
      possibly_sensitive: false,
      author_id: "228265795",
    },
    {
      conversation_id: "1355223817107496960",
      text:
        "@VoidConscious Slowly walking for 2-4 hours in the winter forest, turning every rock, discussing nature and sharing about our life, then going to a cafe to get a coffee, get warm and cozy after a long walk outside",
      created_at: "2021-01-29T20:23:18.000Z",
      id: "1355250187569156098",
      possibly_sensitive: false,
      author_id: "914036696446062594",
    },
    {
      conversation_id: "1355250177205039104",
      text:
        "RT @hourlyleejuyeon: juyeon is not a fan of his self made dalgona coffee\n#주연 https://t.co/ZWocXDdUGZ",
      created_at: "2021-01-29T20:23:16.000Z",
      id: "1355250177205039104",
      possibly_sensitive: false,
      author_id: "1298489577620078593",
    },
    {
      conversation_id: "1355249169519300608",
      text: "@Coffee__AB الله يسعدك",
      created_at: "2021-01-29T20:23:16.000Z",
      id: "1355250177179873286",
      possibly_sensitive: false,
      author_id: "2837741690",
    },
    {
      conversation_id: "1355250176248561665",
      text:
        "RT @Cinvilll: I just found out Starbucks donates to planned parenthood, idk abt y’all but I’m craving some coffee right now",
      created_at: "2021-01-29T20:23:16.000Z",
      id: "1355250176248561665",
      possibly_sensitive: false,
      author_id: "717460028563718144",
    },
    {
      conversation_id: "1355250172121509890",
      text:
        "RT @DrOlufunmilayo: If you have had stomach ulcer:\n\nCut down coffee\nCut down on alcohol\nReduce energy drinks\nAvoid excess pepper in food\nNe…",
      created_at: "2021-01-29T20:23:15.000Z",
      id: "1355250172121509890",
      possibly_sensitive: false,
      author_id: "988338429191745536",
    },
    {
      conversation_id: "1355250172012457992",
      text:
        "For when you want your hair to feel like it’s just had a cup of coffee and a cigarette. https://t.co/IV7YtVlXbT",
      created_at: "2021-01-29T20:23:14.000Z",
      id: "1355250172012457992",
      possibly_sensitive: false,
      author_id: "15689031",
    },
    {
      conversation_id: "1355250163841982467",
      text:
        "As A 21 Year Old Multi Millionaire That Owns An Escalado, I Needed A Driver, So I Got Maself This Sweet 23 Year Old High School Girl. So Right Now We Heading To Grab Some Coffee. #FortunateTeens \n\n#WeLieForALiving #LieWithMeBaby \n.\n.\n#Trending #SinghuBorder\n@Realtundeednut1 https://t.co/YJZQX1tZLq",
      created_at: "2021-01-29T20:23:13.000Z",
      id: "1355250163841982467",
      possibly_sensitive: false,
      author_id: "1243700173370535938",
    },
    {
      conversation_id: "1355250161505730560",
      text:
        "Can someoone goggle how much is that sneaker like how urll do for black coffee \uD83D\uDE0E\uD83D\uDE02\uD83D\uDE02 https://t.co/g9RAe7wluj",
      created_at: "2021-01-29T20:23:12.000Z",
      id: "1355250161505730560",
      possibly_sensitive: false,
      author_id: "1058286119794757637",
    },
    {
      conversation_id: "1355250159089819650",
      text:
        "RT @dogmerch2020: Funny design of a #puppy in a #coffee cup on a #Pillowtalk , #totebag and #facemask. A lovely design for people who love…",
      created_at: "2021-01-29T20:23:11.000Z",
      id: "1355250159089819650",
      possibly_sensitive: false,
      author_id: "1343947447912067074",
    },
    {
      conversation_id: "1355211836212310026",
      text:
        "@HuskyToon Coffee is the best!!  Especially when sleepy \uD83D\uDC99\uD83D\uDC99\uD83D\uDC99✨✨",
      created_at: "2021-01-29T20:23:11.000Z",
      id: "1355250155650482180",
      possibly_sensitive: false,
      author_id: "858958855",
    },
    {
      conversation_id: "1355250155050557440",
      text:
        "RT @RuPaulsDragRace: When someone asks why I'm drinking iced coffee in the winter... ❄️\uD83D\uDC85 @joeyjayisgay #DragRace https://t.co/yoOe5iynhC",
      created_at: "2021-01-29T20:23:10.000Z",
      id: "1355250155050557440",
      possibly_sensitive: false,
      author_id: "1591949988",
    },
    {
      conversation_id: "1355250154698399747",
      text:
        "RT @uyuy2907: FRONT OR BACK? RT for BOTH.\nChristmas is my fav time of the year. \uD83C\uDF32I'm preparing for December now \uD83C\uDF32\n\nBut don't forget my sexy…",
      created_at: "2021-01-29T20:23:10.000Z",
      id: "1355250154698399747",
      possibly_sensitive: false,
      author_id: "1298912480429654016",
    },
    {
      conversation_id: "1355248952426151936",
      text:
        "17 years ago I had a a symptomatic bladder infection. I got extremely sick, probably the closest I have ever come to dying. It left me with scar tissue in my urethra. I had to stop drinking coffee.",
      created_at: "2021-01-29T20:23:10.000Z",
      id: "1355250151313567754",
      possibly_sensitive: false,
      author_id: "818518441644658690",
    },
    {
      conversation_id: "1355250148524363782",
      text:
        "Yes I ❤️ @DeathWishCoffee I assure you that I do #coffee #Goforbold https://t.co/YYWqVOdXjc",
      created_at: "2021-01-29T20:23:09.000Z",
      id: "1355250148524363782",
      possibly_sensitive: false,
      author_id: "15018422",
    },
    {
      conversation_id: "1355250148247367681",
      text:
        "RT @belatweets2u: jerry seinfeld when hes taking a comedian to get coffee https://t.co/chd9GAjwOa",
      created_at: "2021-01-29T20:23:09.000Z",
      id: "1355250148247367681",
      possibly_sensitive: false,
      author_id: "3288156812",
    },
    {
      conversation_id: "1355250147026997249",
      text:
        "how much coffee do you drink darling? @tooyounglouie https://t.co/RZZP79mSJD",
      created_at: "2021-01-29T20:23:09.000Z",
      id: "1355250147026997249",
      possibly_sensitive: false,
      author_id: "2682815015",
    },
    {
      conversation_id: "1355250140873957381",
      text:
        "The Engineers' Curse happens with good designs, too!\n\nWhere is this Mr. Coffee designer / engineer? \n\nSomeone please send this person to me so I can get them on https://t.co/GVOG3GZwRA providing engineering guidance to others.  !! https://t.co/UtErKlwyqi",
      created_at: "2021-01-29T20:23:07.000Z",
      id: "1355250140873957381",
      possibly_sensitive: false,
      author_id: "232426244",
    },
    {
      conversation_id: "1355250139472879618",
      text:
        "i have rain, coffee, tron legacy, and freelance work in my pajamas and things are kinda ok today",
      created_at: "2021-01-29T20:23:07.000Z",
      id: "1355250139472879618",
      possibly_sensitive: false,
      author_id: "2993765221",
    },
    {
      conversation_id: "1355247790478286849",
      text:
        "@drskyskull \uD83D\uDE06\uD83D\uDE06 Live scenes from when I wake up these days and the coffee has run out!!",
      created_at: "2021-01-29T20:23:07.000Z",
      id: "1355250138516762625",
      possibly_sensitive: false,
      author_id: "836485682285588480",
    },
    {
      conversation_id: "1355188576292507651",
      text: "@chass @JoeCamp13 No coffee but love tea. https://t.co/3i5GKwhNjt",
      created_at: "2021-01-29T20:23:06.000Z",
      id: "1355250138231545856",
      possibly_sensitive: false,
      author_id: "18182830",
    },
    {
      conversation_id: "1355019514690285569",
      text: "@Rei_Guy try the coffee creamer \uD83D\uDE0E",
      created_at: "2021-01-29T20:23:06.000Z",
      id: "1355250136931250191",
      possibly_sensitive: false,
      author_id: "1876133342",
    },
    {
      conversation_id: "1355245090005020675",
      text:
        "@AmiesPhilip @Matt_Greenwings I drink c 3 cups of strong coffee (its too much, I know) during the morning and take brief Twitter-breaks while I'm drinking my coffee.",
      created_at: "2021-01-29T20:23:06.000Z",
      id: "1355250134947409922",
      possibly_sensitive: false,
      author_id: "1169342396921987074",
    },
    {
      conversation_id: "1355250133177393154",
      text: "Bsgst1 Coffee : 26506e65-f05c-4fea-9428-18efc8c0f0b7",
      created_at: "2021-01-29T20:23:05.000Z",
      id: "1355250133177393154",
      possibly_sensitive: false,
      author_id: "2669983818",
    },
    {
      conversation_id: "1355250132858634243",
      text: "Peat Coffee : 37149591-414b-4d05-87c5-b8727e1517a1",
      created_at: "2021-01-29T20:23:05.000Z",
      id: "1355250132858634243",
      possibly_sensitive: false,
      author_id: "2669983818",
    },
    {
      conversation_id: "1355250126894362625",
      text:
        "#Coffee twitter- what is the physics behind a cafetière? Like why does pushing it down make a difference?",
      created_at: "2021-01-29T20:23:04.000Z",
      id: "1355250126894362625",
      possibly_sensitive: false,
      author_id: "1254127094893772801",
    },
    {
      conversation_id: "1355250126541914112",
      text:
        "RT @Cinvilll: I just found out Starbucks donates to planned parenthood, idk abt y’all but I’m craving some coffee right now",
      created_at: "2021-01-29T20:23:04.000Z",
      id: "1355250126541914112",
      possibly_sensitive: false,
      author_id: "1068041359418810374",
    },
    {
      conversation_id: "1355250121307422720",
      text:
        "RT @makaylajedward: becoming addicted to iced coffee was the most expensive decision i’ve ever made",
      created_at: "2021-01-29T20:23:02.000Z",
      id: "1355250121307422720",
      possibly_sensitive: false,
      author_id: "4735881558",
    },
    {
      conversation_id: "1355250121169129473",
      text:
        "RT @stan_sdcollins: This is Bonne Bay. The days are getting longer now and I no longer have to drive down for my morning coffee in the dark…",
      created_at: "2021-01-29T20:23:02.000Z",
      id: "1355250121169129473",
      possibly_sensitive: false,
      author_id: "19540359",
    },
    {
      conversation_id: "1355250118878875648",
      text:
        "RT @Cinvilll: I just found out Starbucks donates to planned parenthood, idk abt y’all but I’m craving some coffee right now",
      created_at: "2021-01-29T20:23:02.000Z",
      id: "1355250118878875648",
      possibly_sensitive: false,
      author_id: "3153590720",
    },
    {
      conversation_id: "1354910636115849216",
      text:
        "@duddersj I love this coffee o’clock presidency, it only makes me playfully wish I was dead",
      created_at: "2021-01-29T20:23:01.000Z",
      id: "1355250117427789829",
      possibly_sensitive: false,
      author_id: "22024950",
    },
    {
      conversation_id: "1355119266626994180",
      text:
        "@astrophiIa I think that’s what it’s called?? It’s like VA-11 HALL-A but in a coffee shop and with fantasy stuff rather than sci-fi",
      created_at: "2021-01-29T20:23:00.000Z",
      id: "1355250112088264705",
      possibly_sensitive: false,
      author_id: "744416118517837824",
    },
    {
      conversation_id: "1355250111459319817",
      text: "RT @AlphawolfCr: Coffee please? https://t.co/w6SguHQsKq",
      created_at: "2021-01-29T20:23:00.000Z",
      id: "1355250111459319817",
      possibly_sensitive: true,
      author_id: "1053621511062503425",
    },
    {
      conversation_id: "1355250111253774336",
      text:
        "RT @uyuy2907: Sound ON. Did you hear something \uD83E\uDD14\n\nDon't miss this November HD photoset with many clips - selfies - gifs include, join to ge…",
      created_at: "2021-01-29T20:23:00.000Z",
      id: "1355250111253774336",
      possibly_sensitive: false,
      author_id: "1298912480429654016",
    },
    {
      conversation_id: "1355250109471215617",
      text:
        "Neuherbs Green Coffee Beans Your Natural Immunity Booster And Weight Loss Partner: 400 G https://t.co/GbyoxJhsA9",
      created_at: "2021-01-29T20:23:00.000Z",
      id: "1355250109471215617",
      possibly_sensitive: false,
      author_id: "1104765326959423489",
    },
    {
      conversation_id: "1355250108456026112",
      text:
        "RT @PRADAXBBY: i’ve got an obsession with iced coffee https://t.co/v0h3ln7f3t",
      created_at: "2021-01-29T20:22:59.000Z",
      id: "1355250108456026112",
      possibly_sensitive: false,
      author_id: "983653760",
    },
    {
      conversation_id: "1355250107017474050",
      text: "Drink ur coffee and dont wirry about",
      created_at: "2021-01-29T20:22:59.000Z",
      id: "1355250107017474050",
      possibly_sensitive: false,
      author_id: "2975651299",
    },
    {
      conversation_id: "1355250099438432259",
      text:
        "RT @tribdinosaur: I turn into a werewolf under a Full Sun \uD83C\uDF38\n\n\uD83D\uDC3A Daily doodles 028\n☕️ buy the Full Sun Werewolf a theobromine-free coffee? ht…",
      created_at: "2021-01-29T20:22:57.000Z",
      id: "1355250099438432259",
      possibly_sensitive: false,
      author_id: "1105675321469222918",
    },
    {
      conversation_id: "1355233807624933377",
      text: "@pattonoswalt Did you remember to put Bailey's in the coffee?",
      created_at: "2021-01-29T20:22:57.000Z",
      id: "1355250099115319296",
      possibly_sensitive: false,
      author_id: "81031418",
    },
    {
      conversation_id: "1355250098993651713",
      text:
        "RT @daddylola77: that first sip of coffee in the morning https://t.co/2T6LpRVsPA",
      created_at: "2021-01-29T20:22:57.000Z",
      id: "1355250098993651713",
      possibly_sensitive: false,
      author_id: "830346101148446724",
    },
    {
      conversation_id: "1348186953758470146",
      text:
        "@Amigos_coffee \n\nDon't miss what happens next \uD83D\uDCA5 The fourth episode of Marvel Studios' #WandaVision is now streaming on @DisneyPlus.\n\n Reply #stop to unsubscribe. https://t.co/yweq51zfrG",
      created_at: "2021-01-29T20:22:57.000Z",
      id: "1355250098045857792",
      possibly_sensitive: false,
      author_id: "1010209426869870592",
    },
    {
      conversation_id: "1355250097563418624",
      text:
        "RT @Cinvilll: I just found out Starbucks donates to planned parenthood, idk abt y’all but I’m craving some coffee right now",
      created_at: "2021-01-29T20:22:57.000Z",
      id: "1355250097563418624",
      possibly_sensitive: false,
      author_id: "1251565848273145856",
    },
    {
      conversation_id: "1355248757496016898",
      text:
        "@LeehSakt @yo_coffee_sa @samar88k @tag_pic1 @Azizahalm_ @1kenner1 @nolh1402 @RammRiyadh @KSA_Restaurants @iili__17 @Mohmd_AlFahad تستاهل كل خير \uD83D\uDC4C\uD83C\uDFFD",
      created_at: "2021-01-29T20:22:56.000Z",
      id: "1355250095877464064",
      possibly_sensitive: false,
      author_id: "519328608",
    },
    {
      conversation_id: "1355146118749970437",
      text: "@AekoShep Coffee @.@",
      created_at: "2021-01-29T20:22:56.000Z",
      id: "1355250093239246848",
      possibly_sensitive: false,
      author_id: "405274856",
    },
    {
      conversation_id: "1355250091813175297",
      text:
        "RT @panerabread: When we say enjoy unlimited premium coffee, we mean it. \n\nFreshly brewed cups on cups on cups of coffee, free for three mo…",
      created_at: "2021-01-29T20:22:55.000Z",
      id: "1355250091813175297",
      possibly_sensitive: false,
      author_id: "1313811821476933633",
    },
    {
      conversation_id: "1355250090030616587",
      text:
        "Toast\uD83E\uDD14\nCoffee\uD83D\uDE0C\nMidalasini\uD83D\uDE0B https://t.co/6LDNgyD33B",
      created_at: "2021-01-29T20:22:55.000Z",
      id: "1355250090030616587",
      possibly_sensitive: false,
      author_id: "1317909920268898304",
    },
    {
      conversation_id: "1355250088474501122",
      text:
        "RT @ssofiagoncalves: if he doesn’t look at you the way little sof looks at coffee, dump his ass https://t.co/1kiQ2h09Bh",
      created_at: "2021-01-29T20:22:55.000Z",
      id: "1355250088474501122",
      possibly_sensitive: true,
      author_id: "1008521103239798784",
    },
    {
      conversation_id: "1355250087958634502",
      text:
        "RT @vettelpretzel: Me arriving to class late with my iced coffee: https://t.co/XS1CunkuFz",
      created_at: "2021-01-29T20:22:54.000Z",
      id: "1355250087958634502",
      possibly_sensitive: false,
      author_id: "1331915695622414336",
    },
    {
      conversation_id: "1355248554457980928",
      text:
        "@coffee_stays Just watch, Jensen’s gonna use SPNFamily on his posts about The Boys and the same people mad at jared for doing it, are gonna praise him.",
      created_at: "2021-01-29T20:22:54.000Z",
      id: "1355250086083776512",
      possibly_sensitive: false,
      author_id: "3050461146",
    },
    {
      conversation_id: "1355250083965652992",
      text:
        "RT @uyuy2907: Front or Back? RT for Both!\nMama #Raikou has special outfit for this cleaning job.\n\nIf you are team butt, don't miss this set…",
      created_at: "2021-01-29T20:22:54.000Z",
      id: "1355250083965652992",
      possibly_sensitive: false,
      author_id: "1298912480429654016",
    },
    {
      conversation_id: "1355250077242183684",
      text:
        "RT @ReduxVernon: Some #TGIF morning piano today. Improv on some classics. Have a great weekend. #music #piano #classics #improv #coffee   h…",
      created_at: "2021-01-29T20:22:52.000Z",
      id: "1355250077242183684",
      possibly_sensitive: false,
      author_id: "709973837",
    },
    {
      conversation_id: "1355250076294270979",
      text:
        "RT @quotablesq: emma: *hugs regina from behind*\n\nemma: *gently puts her head on her shoulder*\n\nemma: *softly plays with her hair*\n\nemma: *w…",
      created_at: "2021-01-29T20:22:52.000Z",
      id: "1355250076294270979",
      possibly_sensitive: false,
      author_id: "2767258766",
    },
    {
      conversation_id: "1355250074381479938",
      text:
        "I haven’t had my fave raven follow me from the coffee shop in awhile. Hope they’re doing ok. Lol.",
      created_at: "2021-01-29T20:22:51.000Z",
      id: "1355250074381479938",
      possibly_sensitive: false,
      author_id: "1122699793686380545",
    },
    {
      conversation_id: "1355230676371566592",
      text: "@ScoupsLane Coffee = happiness it’s a proven fact",
      created_at: "2021-01-29T20:22:50.000Z",
      id: "1355250069847461892",
      possibly_sensitive: false,
      author_id: "1148107700338737152",
    },
    {
      conversation_id: "1355250065493921795",
      text:
        "Coffee no longer upsets my stomach when I drink it. It’s only getting better from here boys",
      created_at: "2021-01-29T20:22:49.000Z",
      id: "1355250065493921795",
      possibly_sensitive: false,
      author_id: "1310706231284240391",
    },
    {
      conversation_id: "1355250064042713098",
      text:
        'RT @peggyleemusic: Out today! @Vinyl_Lives (Acoustic Sounds) reissue of "Black Coffee!" https://t.co/giom4t6iO5 Don\'t forget to watch the f…',
      created_at: "2021-01-29T20:22:49.000Z",
      id: "1355250064042713098",
      possibly_sensitive: false,
      author_id: "74599758",
    },
    {
      conversation_id: "1355250061085696000",
      text:
        "I still have instant coffee in my cabinet from that time when we all made that nasty whipped coffee.",
      created_at: "2021-01-29T20:22:48.000Z",
      id: "1355250061085696000",
      possibly_sensitive: false,
      author_id: "19319332",
    },
    {
      conversation_id: "1355250059848392704",
      text:
        "Mt. K leaders: You've neglected us!\nUK: How now?\nMt. K Leaders: Yada yada tea blah blah coffee..\nUK: Cut the BS! What is it?\nMt. K Leaders: OK sawa, Ni Raira. Hatumtaki!\nUK: We shall revisit!",
      created_at: "2021-01-29T20:22:48.000Z",
      id: "1355250059848392704",
      possibly_sensitive: false,
      author_id: "385341461",
    },
    {
      conversation_id: "1355250058887888900",
      text: "RT @Annabllebitch: Horny, but like for iced coffee",
      created_at: "2021-01-29T20:22:48.000Z",
      id: "1355250058887888900",
      possibly_sensitive: false,
      author_id: "1202653523055456257",
    },
    {
      conversation_id: "1355250055016493059",
      text:
        "When will you be releasing more limited edition or new flavours coffee @JoffreysCoffee ? \uD83D\uDE0A",
      created_at: "2021-01-29T20:22:47.000Z",
      id: "1355250055016493059",
      possibly_sensitive: false,
      author_id: "714508372113035264",
    },
  ],
  meta: {
    newest_id: "1355250292082827271",
    oldest_id: "1355250055016493059",
    result_count: 100,
    next_token: "b26v89c19zqg8o3fosktkdqsona56htgqszk3cpzc9egt",
  },
};

export default mockTimeline;
