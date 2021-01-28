// https://api.twitter.com/2/users/:id/tweets?max_results=100

const mockTimeline = {
  data: [
    {
      id: "1353887862580645888",
      text:
        "sometimes. when i am bored. i will stare at nothing. and try to convince the human. that there is a ghost",
    },
    {
      id: "1353756903512264704",
      text:
        "RT @dog_rates: This is Leia. She turned a squeaker toy into a nose flute and would like to play a few notes for you. She’s still learning s…",
    },
    {
      id: "1352698898196750336",
      text: "@dog_rates cancer should know. not to mess with pinky again",
    },
    {
      id: "1349175642751787009",
      text:
        "it appears you have loaded the dishwasher without me. do you not need my services anymore. did you lick the plates yourself. this is a disaster",
    },
    {
      id: "1348649434662330369",
      text:
        "i can tell. when the human’s heart rate goes up. it really stresses me out. so if we could all try to have a nice. boring week. that would be best. for both of us",
    },
    { id: "1346615021799763968", text: "@Skittles why. must you haunt me" },
    {
      id: "1346522708276772864",
      text:
        "the human has to work again this week. but that’s okay. i can keep myself busy. there is a skittle under the fridge. that needs constant surveillance",
    },
    {
      id: "1344819890390138881",
      text:
        "i heard there is a ball dropping later. does anybody have the details? i am interested in that",
    },
    {
      id: "1344702690148798464",
      text:
        "according to my data. cuddles were up by 147% this year. hugs up 93%. and long hugs up by nearly 700%. while these stats with the human. may be hard to maintain. i think we should try",
    },
    {
      id: "1344342682097876995",
      text: "RT @dog_rates: The Dogs of 2020 https://t.co/xVQdlkgW1T",
    },
    {
      id: "1342163501318434816",
      text:
        "this year. i got to pick the accessories for our house tree. and i think. i did a wonderful job https://t.co/9HpQTrHIXI",
    },
    {
      id: "1341428439262236672",
      text:
        "it feels pointless. to bring it up again. but if i am not allowed to bring my sticks inside. why is the human allowed a whole tree. do they not understand. that is where my sticks come from",
    },
    {
      id: "1341066181424254977",
      text:
        "@dog_rates @bestfriends @Trupanion here you go https://t.co/pJtfgR3N5a",
    },
    {
      id: "1339384835953946624",
      text:
        "we are approaching the time of year. when humans look back. and think about. what they could have done better. not me though. i was perfect",
    },
    {
      id: "1337213826786181122",
      text:
        "if you don’t want me to fall asleep. during the movie. what are we so cozy for",
    },
    {
      id: "1336055987610943488",
      text:
        "sometimes. my tongue pokes out when i sleep. i am aware of this. because the human takes a picture every time. and shows it to me. as soon as i wake up",
    },
    {
      id: "1333597439660486659",
      text: "is now. an okay time. to tell you that i love you",
    },
    {
      id: "1333495032616161280",
      text: "they are innocent https://t.co/ty6DtkD9Vv",
    },
    {
      id: "1332391245159645185",
      text:
        "i am so glad. you like my stuffed fren sebastian. he is still available. for anyone who needs him\n\nhttps://t.co/6UEgyvAXWf https://t.co/LBhIb4W3l2",
    },
    {
      id: "1331323737514205184",
      text:
        "the human just learned. they will be working from home. for the foreseeable future. this is simply a formality. i was never letting them go back anyway",
    },
    {
      id: "1329455896183918592",
      text:
        "you cannot rush me. on my walks. if i don’t sniff enough things. i could fall behind. on the neighborhood dog leaderboard",
    },
    {
      id: "1329138571253489664",
      text: "@staci1971 he is for. anybody who needs him",
    },
    { id: "1329137902199005184", text: "@2legit2dunk https://t.co/4lx6Z4wqAp" },
    {
      id: "1329137465077055488",
      text:
        "i am sure. you all know my stuffed fren sebastian. well starting today. you and your pup can have him. he is here for anybody who needs him. and i hope you love him. as much as i do\n\nhttps://t.co/6UEgyvAXWf https://t.co/MGjim29DLL",
    },
    {
      id: "1328492756319158272",
      text: "i do not “shed.” i sprinkle my glitter",
    },
    {
      id: "1327735130035634176",
      text:
        "i am sorry. for not having many thoughts lately. sometimes no thought. is a beautiful thing",
    },
    {
      id: "1325115784457281540",
      text: "my tail is blurry. and my feets. are a tippy tappin",
    },
    {
      id: "1322677869403729920",
      text:
        "i was hoping to sit on the porch. with my bucket of candy. and let all the tiny monsters come pet me. but it’s just the human and i tonight. cuddling in our costumes. and looking forward to next year",
    },
    { id: "1322563070745440256", text: "it is the spooky day" },
    {
      id: "1321462059981180930",
      text:
        "i feel chaotic today. so i am off to look for trouble. if i cannot find it. i will create it",
    },
    {
      id: "1321121998727118850",
      text:
        "MY BOOK. IS OUT NOW\nhttps://t.co/6UEgyvAXWf https://t.co/jOnPrRTVOM",
    },
    {
      id: "1320757213263056897",
      text:
        "there is a pumpkin. on the neighbor’s porch. that did not have a face yesterday. but today they have a face. that is spooky. and i will be avoiding it",
    },
    {
      id: "1319395244161388545",
      text:
        "the day is nearly done. and i have not received. anywhere near. the level of attention i deserve",
    },
    {
      id: "1318583714314547200",
      text:
        "the human is in a rush to leave. and needs me to use the bathroom. as quick as i can. but i have not trained for this. and historically. i do not perform well under pressure",
    },
    {
      id: "1316781664043855872",
      text:
        "everybody used to smile at me. when i passed them on my walks. but now i can’t tell if they are or not. i hope they still are",
    },
    {
      id: "1313647640039448576",
      text:
        "i know. there’s a lot going on right now. so i just wanted to say. i love you",
    },
    {
      id: "1311337616432717824",
      text:
        "I WROTE A BOOK. it is about all my favorite adventures. most of which you haven’t heard yet. and i cannot wait. for you to read it\n\npreorder today: https://t.co/6UEgyvAXWf https://t.co/lE28QKWXlB",
    },
    {
      id: "1310745431815589888",
      text:
        "apparently. my stuffed fren sebastian smells bad. so he will be spending the night in the spinny bath. which means the human and i. will be spending the night. next to the spinny bath. so nobody is alone",
    },
    {
      id: "1309535713843507200",
      text: "ok so. it tasted pretty spooky https://t.co/UL0jYnmD73",
    },
    {
      id: "1309534476897198080",
      text:
        "the first crunchy leaf of the season. just fell in the yard. i will go taste it. to determine how spooky. things are about to get",
    },
    {
      id: "1308122986189172736",
      text: "it is never too late. to go back to bed",
    },
    {
      id: "1305952607328894976",
      text:
        "i worked. so. hard. to get the squeaker out of that toy. and you just. threw it away",
    },
    {
      id: "1304091113267978241",
      text:
        "the human wiped away my eye booger. only to pet it back onto me. i have never experienced such betrayal",
    },
    {
      id: "1303014585675382791",
      text:
        "i made a list. of reasons you should hang out with me today\n\n4. i am fun\nc. i am soft\n2. i will listen. to your silly human problems\n8. you can pick the snacks\na. i love you",
    },
    {
      id: "1300493582822903808",
      text:
        "the human says there are two options. inside or outside. but if they would simply. elevate their mindset. they would uncover a third option: stand in the doorway. and sniff the air",
    },
    {
      id: "1298647588938293248",
      text: "personally. i think every day. should be dog day",
    },
    { id: "1298646999160385536", text: "@dog_rates https://t.co/Nmeh1aoiwd" },
    {
      id: "1296480874255572992",
      text:
        "the human had another video call today. but this time. they put me in front of the screen. gave me their headset. and walked away. it may have been a joke to them. but this is exactly the promotion. i have been waiting for",
    },
    {
      id: "1294372581013741568",
      text:
        "i actually look forward to seeing the mailman. because a long time ago. they brought me my stuffed fren sebastian. and i could never thank them enough for doing that",
    },
    { id: "1293584177808289794", text: "@Sue_Pook @AndrewsMcMeel ❤️" },
    {
      id: "1293578827004690434",
      text:
        "i made you a calendar for next year. it has one new thought every day. because that is all i’m capable of at the moment. you can preorder it below\n\nhttps://t.co/FSlntLgsi5 https://t.co/2FOMlH9YSe",
    },
    {
      id: "1293199446524624898",
      text:
        "stairs are ridiculous. you cannot just change the ground. who do you think you are",
    },
    {
      id: "1291444551215804417",
      text:
        "i made a list. of all the things i do. when you’re not home\n\n1. wait for you to get back",
    },
    {
      id: "1290630027785117696",
      text:
        "gooooob morning. i can already tell. i am going to need a lot of attention today",
    },
    {
      id: "1288591167395737600",
      text:
        "the era of doing tricks for treats. is over. starting today. i would like treats. simply for existing",
    },
    {
      id: "1287768291558137858",
      text:
        "i sneezed so they could escape. and now the human is here. helping them back outside. that did not go at all how i planned. if the ladybug is reading this. i am so sorry",
    },
    {
      id: "1287767785926352897",
      text: "I SNIFFED TOO HARD. THE LADYBUG WENT UP MY NOSE",
    },
    {
      id: "1287767452122660869",
      text:
        "a ladybug has entered the household. and i. am on my way to introduce myself",
    },
    { id: "1285746980681998336", text: "in case you forgot. i love you" },
    {
      id: "1285259367755857922",
      text:
        "the rarest sit. is the multi-level stair sit. during which my butt is on one stair. while my front feet extend to the stair below. it is a powerful combination. of comfort and style",
    },
    {
      id: "1283078333433999360",
      text:
        "there is so much going on right now. based on the human’s tiny screen scrolling. so i am on my way with cuddles. and guess what. i’m bringing my stuffed fren sebastian with me",
    },
    {
      id: "1280615916233846784",
      text:
        "i just started my shift. watching the skittle under the fridge. it is a thankless job. but if nobody does it. and the skittle moves. we are in big trouble",
    },
    {
      id: "1279922757426245633",
      text:
        "i did not get much sleep last night. because of your sky booms. to make up for this. i will be extending all snoozles. by 15 percent. for the rest of the year",
    },
    {
      id: "1279118120255254529",
      text: "@dog_rates do not lie. i know scooby doo when i see him",
    },
    {
      id: "1277665929380298752",
      text:
        "the human has made quite the sandwich for lunch. but when i placed my chin on their knee. and looked up at them softly. they only offered me. a piece of lettuce. nobody talk to me. for the rest of the day",
    },
    {
      id: "1275827601370525697",
      text:
        "i don’t know what the future holds. but i will be there with you. my 2021 planner is available now\n\nhttps://t.co/WPXVkQhgm6 https://t.co/xsnc6ICQ0e",
    },
    { id: "1275827126499831808", text: "i have an announcement" },
    {
      id: "1275235493391679488",
      text:
        "personally. i don’t think you should set off fireworks. for any reason ever",
    },
    {
      id: "1273958539350794242",
      text:
        "gooooob morning. if you think i won’t lie down. where the sun shines through the window. with these paws crossed. all day long. you are out of your mind",
    },
    {
      id: "1273412720277123072",
      text:
        "there is an easy way to tell. if i would like a hug. and it’s that no matter what. i probably do",
    },
    {
      id: "1270505972406956033",
      text:
        "it is the human’s first time trying to change the world. and they are exhausted. so while they rest for a little bit. i have stolen their sign. and will trot proudly around the house with it. until they are ready. to fight again",
    },
    {
      id: "1268952035308658688",
      text:
        "RT @dog_rates: h*ck it, thread of black-owned dog businesses that deserve a fat slice of that $100 billion we’re estimated to spend on our…",
    },
    {
      id: "1265003083492470786",
      text:
        "today was supposed to be one of those days. where the human invites a bunch of frens over. someone would eventually drop a plate of food. and it would be my time to shine. but because that can’t happen. the human has been dropping little snacks for me on purpose. all afternoon",
    },
    {
      id: "1262413196712910849",
      text:
        "@dog_rates @shopivoryella it appears my stuffed fren sebastian. has had a growth spurt",
    },
    {
      id: "1262152943761010696",
      text:
        "surround yourself. with those who would flip your ear back for you. if it ever went inside out",
    },
    { id: "1261368619230990346", text: "@miss_melisxjg @dog_rates ❤️" },
    {
      id: "1260008790520262659",
      text: "i love you. and there’s nothing you can do about it",
    },
    {
      id: "1258580402731659266",
      text:
        "recently. my only responsibility. has been convincing the human to get out of bed in the morning. so tomorrow we’re making pancakes. because who can say no to pancakes",
    },
    {
      id: "1257369045122285568",
      text:
        "if you start leaving the house again. who will be around to say. ohhh big stretch. every time i do a stretch",
    },
    {
      id: "1255520633179590656",
      text:
        "i have finally narrowed it down. to a few possible reasons. the human is home all the time now\n\n4. can’t stand being away from me\nc. loves me so much\n1. my presence is a gift",
    },
    {
      id: "1254450419767619586",
      text:
        "the human has no idea what the future holds. which is fine. i never know what’s going to happen next. i only know about right now. and right now i’m climbing into your lap. to let you play with my ears",
    },
    {
      id: "1252680106272792578",
      text:
        "the human is attempting exercise at home. and to help them with this. i will climb on top of them. making any movement almost impossible",
    },
    { id: "1252279763319881728", text: "@SWatercolour ❤️❤️❤️" },
    {
      id: "1250954266321334272",
      text:
        "hi there. this will only take a moment. i just wanted to let you know.\n\ni love you",
    },
    {
      id: "1249782185911083008",
      text:
        "my stuffed fren sebastian and i. have a meeting in a little bit. to discuss how to tell the human. that we have enough bread. there is no need to bake more",
    },
    {
      id: "1247322617545097216",
      text: "some cuddles. would go a long way right now",
    },
    {
      id: "1245501343126695939",
      text: "today. i wasn’t a very good dog\n\napril fools. i was so good",
    },
    { id: "1245397364711526400", text: "@dog_rates you scared me" },
    {
      id: "1244666680862740484",
      text:
        "there are no rules these days. i didn’t even put my collar on today. just walked around the house naked",
    },
    {
      id: "1242471845204459522",
      text:
        "i decided that today. is bring your human to work day. we stared out the window for hours. and they helped me spot the cars. it was magical",
    },
    {
      id: "1242127527910522881",
      text: "@dog_rates hi https://t.co/USKWGc67al",
    },
    { id: "1241420782204567558", text: "@AmyMcGrathKY ❤️" },
    {
      id: "1240991422611890178",
      text:
        "gooooob morning. i think today. i’ll lie on the porch. with my front paws crossed. and let the sun shine on my face through the trees. occasionally i will rollover. so it shines on my belly. nobody will stop me. because i deserve this",
    },
    {
      id: "1240337805542334464",
      text:
        "@dog_rates @NewsStatehouse i would like sarge. to also take care of me",
    },
    {
      id: "1239604596017774599",
      text:
        "the small neighbor human. is home from school today. but instead of coming over. they’re putting notes against their window. i’m not the best reader. but it seems like they miss me. and we’ll be together again soon",
    },
    { id: "1239001599176933378", text: "i just love you" },
    {
      id: "1237451266508218368",
      text:
        "the human has been working from home the last couple days. and every so often. they let me participate in the video calls. all the other humans cheer when they see me. i am the only thing holding their company together",
    },
    { id: "1235722467273887744", text: "@unbury not my problem" },
    {
      id: "1235721144872734720",
      text:
        "i know you put a pill. in my rolled up cheese slice. i’m not mad about it. i would simply appreciate. if you would be honest with me next time",
    },
    {
      id: "1234830887503704066",
      text:
        "gooooob morning. i made a list. of what i would like to accomplish today\n\n7. a big nap\n1. maybe get some rest after that\n4. sneak in a snoozle\n4b. perhaps multiple",
    },
  ],
  meta: {
    oldest_id: "1234830887503704066",
    newest_id: "1353887862580645888",
    result_count: 100,
    next_token: "7140dibdnow9c7btw3t2hkrl3wx3de21if8z2sbr6sqba",
  },
};

export default mockTimeline;
