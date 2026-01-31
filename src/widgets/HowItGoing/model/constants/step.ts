import main1 from "@/public/images/main2.webp"

type StepCardType = {
  title: string;
  duration: string;
  desc: string;
  place: string;
};

const kyrgyzWeek: StepCardType[] = [
  {
    title: "Day 1: Bishkek city – Cholpon-Ata city – Karakol city",
    desc: "Departure from Bishkek. On the way, stop at Lake Issyk-Kul and take a walk along the promenade in Cholpon-Ata. Continue the drive to Karakol. Overnight stay in Karakol, preparing for the next day in the mountains.",
    duration: "200km - 5h",
    place: "Quest House",
  },
  {
    title: "Day 2: Karakol city – Altyn-Arashan gorge",
    desc: "Morning departure by old “bukhanka” van or UAZ to Altyn-Arashan.Visit the hot springs with a view of Palatka Peak (4680 m). Relax in the thermal pools and stay in mountain lodges.Overnight stay in Altyn-Arashan, enjoying the peace and mountain scenery.",
    duration: "200km - 5h",
    place: "Quest House",
  },
  {
    title:
      "Day 3: Altyn-Arashan gorge – Karakol city – Jeti-Oguz valley – Barskoon gorge – Skazka canyons – Bokonbaevo village",
    desc: "Descent to Karakol by “bukhanka” van or UAZ. Then drive to Jeti-Oguz for an excursion walk. Continue through Barskoon Gorge with a hike to Bowl of Manas Waterfall. Stop at Skazka Canyon to explore the rock formations. In the evening, arrive in Bokonbaevo, overnight at the base, preparing for the morning eagle hunting show.",
    duration: "200km - 5h",
    place: "Quest House",
  },
  {
    title: "Day 4: Bokonbaevo village – Kochkor village – Song-Kul lake",
    desc: "Morning — eagle hunting show. After depart to Song-Kol lake. Stop in Kochkor along the way. Then depart via Kalmak-Ashuu Pass with breathtaking views. Arrival at Song-Kul Lake, horseback rides along the shore, rest and dinner. Overnight stay at the yurt camp.",
    duration: "200km - 5h",
    place: "Yurt camp at Song-Kul Lake",
  },
  {
    title: "Day 5: Song-Kul lake – Konorchek canyons – Chong-Kemin village",
    desc: "Morning departure via Kochkor to Konorchek Canyons. Hike through the canyon to explore the rock formations. Continue the drive to Chong-Kemin. In the evening — rest at the guesthouse, dinner. Overnight stay at the Chong-Kemin guesthouse.",
    duration: "200km - 5h",
    place: "Quest House",
  },
  {
    title: "Day 6: Chong-Kemin village – Burana tower – Bishkek city",
    desc: "Morning in Chong-Kemin — horseback rides in the valley. Then depart to Bishkek via Kemin Valley. Stop in Tokmok for a visit to Burana Tower. Evening arrival in Bishkek, free time. Overnight stay in Bishkek.",
    duration: "200km - 5h",
    place: "Quest House",
  },
  {
    title: "Day 7: Bishkek city tour – Manas international airport",
    desc: "Morning city tour of Bishkek: visit Ala-Too Square, the National Museum, and Osh Bazaar for souvenir shopping. Transfer to Manas International Airport. End of the tour.",
    duration: "200km - 5h",
    place: "Quest House",
  },
];

const mountainAdventure: StepCardType[] = [
  {
    title: "Day 1: Bishkek city - Cholpon-Ata city - Karakol city",
    desc: "Departure from Bishkek. On the way, stop at Lake Issyk-Kul and take a walk along the promenade in Cholpon-Ata. Continue the drive to Karakol. Overnight stay in Karakol, preparing for the next day in the mountains.",
    duration: "200km - 5h",
    place: "Guest House",
  },
  {
    title: "Day 2: Karakol city – Altyn-Arashan gorge",
    desc: "Morning departure by old 'bukhanka' van or UAZ to Altyn-Arashan. Visit the hot springs with a view of Palatka Peak (4680 m). Relax in the thermal pools and stay in mountain lodges. Overnight stay in Altyn-Arashan, enjoying the peace and mountain scenery.",
    duration: "200km - 5h",
    place: "Guest House",
  },
  {
    title: "Day 3: Altyn-Arashan gorge – Ak-Suu village – Karakol city",
    desc: "After breakfast, begin a 15 km trek from Altyn-Arashan to Ak-Suu village along a scenic mountain trail. Upon arrival, transfer to Karakol for lunch and rest. In the evening, free time for a walk around the city and preparation for the next day. Overnight stay in Karakol.",
    duration: "15km trek",
    place: "Guest House",
  },
  {
    title:
      "Day 4: Karakol city – Jeti-Oguz gorge – Barskoon gorge – Skazka canyons – Bokonbaevo village",
    desc: "Morning departure from Karakol. Excursions and walks through Jeti-Oguz, Barskoon, and Skazka Canyon. In Barskoon, visit Chasha Manas Waterfall. After completing the route, arrive in Bokonbaevo for rest and overnight stay at the base.",
    duration: "220km - 6h",
    place: "Yurt Camp",
  },
  {
    title:
      "Day 5: Bokonbaevo village – Shatyly Panorama – Aksay Canyons – Kochkor village",
    desc: "After breakfast, enjoy an eagle hunting show in Bokonbaevo. Then hike to Shatyly Panorama, taking in views of the valleys and mountains. Continue with lunch and a trekking walk through Aksay Canyons to explore the natural formations. In the evening, transfer to Kochkor, dinner, and rest. Overnight stay in Kochkor.",
    duration: "150km - 4h",
    place: "Guest House",
  },
  {
    title: "Day 6: Kochkor village – Song-Kul Lake",
    desc: "Morning departure to Song-Kul Lake via Kalmak-Ashuu Pass. Upon arrival, horseback riding along the lakeshore and lunch. Explore the highland scenery, enjoy the landscapes and fresh air. Evening dinner and overnight stay at a yurt camp on the lakeshore.",
    duration: "120km - 3h",
    place: "Yurt Camp at Song-Kul Lake",
  },
  {
    title: "Day 7: Song-Kul Lake – Naryn City",
    desc: "After breakfast, transfer to Naryn city through the '32 Parrots' Pass. On the way, stop at the waterfall on the Son-Kul river. Arrival in Naryn, rest after the drive, and free time for a short walk around the city. Overnight stay at a guesthouse in Naryn.",
    duration: "140km - 4h",
    place: "Guest House",
  },
  {
    title: "Day 8: Naryn – Kok-Kyia Valley",
    desc: "After breakfast, depart for Kok-Kyia Valley. Enjoy walks through the valley, taking in the surrounding nature, mountains, and views of Kakshal-Too. Evening dinner and rest at the guesthouse. Overnight stay in Kok-Kyia Valley.",
    duration: "180km - 5h",
    place: "Guest House or yurt camp",
  },
  {
    title: "Day 9: Kok-Kyia Valley – Kel-Suu lake – Kok-Kyia Valley",
    desc: "After lunch, begin trekking to Kel-Suu Lake. Stop for a picnic by the lake and enjoy the surroundings. Optional boat ride on the lake. Return to Kok-Kyia Valley for evening rest. Overnight stay at the guesthouse.",
    duration: "Trekking/Horseback",
    place: "Guest House or yurt camp",
  },
  {
    title: "Day 10: Kok-Kyia Valley – Bishkek City",
    desc: "Early morning departure after breakfast. Drive to Bishkek, approximately 8–9 hours. Stop in Naryn for lunch along the way. Continue the transfer through the mountains, arriving in Bishkek in the evening. End of the tour and rest after the journey.",
    duration: "450km - 9h",
    place: "End of Tour",
  },
];

const altynArashan: StepCardType[] = [
  {
    title: "Day 1. Karakol – Karakol Gorge – Sirota Camp",
    desc: `The tour begins in the city of Karakol with a transfer to Karakol Gorge, where the trekking
part starts. The trail follows a mountain river through Tien Shan spruce forests and alpine
meadows, with a gradual altitude gain that makes the first day comfortable for
acclimatization. Along the way, scenic views of rocky cliffs and waterfalls open up, and by
evening the group reaches Sirot`,
    duration: " ~14 km",
    place: "tent camp at Sirota Camp",
  },
  {
    title: "Day 2. Sirota Camp – Ala-Kul Lake – Keldike Camp",
    desc: `An early start allows the group to pass the most intense and spectacular part of the route.
The ascent leads to the high-altitude Ala-Kul Lake, located at approximately 3,530 meters
above sea level, famous for its deep turquoise color that changes with the weather. After a
rest and photo break, the route continues over Ala-Kul Pass (around 3,900 m), offering
panoramic views of glaciers and mountain ridges, followed by a long descent into the
Keldike Gorge to the next campsite.`,
    duration: "~12–14 km",
    place: "tent camp at Keldike Camp",
  },
  {
    title: "Day 3. Keldike Camp – Altyn-Arashan Gorge",
    desc: `The route descends through the Keldike Gorge, passing coniferous forests and mountain
rivers, gradually leading into one of the most picturesque valleys in the region —
Altyn-Arashan. Upon arrival, the group stays in a guesthouse or yurt, with time to relax and
recover in the natural hot springs, which are especially appreciated after several days of
trekking.`,
    duration: "~9–11 km",
    place: "guesthouse or yurt in Altyn-Arashan",
  },
  {
    title: "Day 4. Altyn-Arashan Gorge – Karakol",
    desc: `After breakfast, there is free time for walks around the valley and optional visits to the hot
springs. Later, the group is transferred by 4WD vehicle back to the city of Karakol, where the
tour comes to an end.`,
    duration: "vehicle transfer",
    place: "Guest House",
  },
];

const songKul: StepCardType[] = [
  {
    title: "Day 1. Bishkek – Kyzart – Kilemche Valley (horseback riding)",
    desc: `The journey starts with a morning departure from Bishkek and a scenic drive to the village of
Kyzart, the traditional gateway to the Song-Kul region. Upon arrival, guests meet the local
horsemen, receive instructions, and are matched with horses. The horseback ride begins
through mountain pastures and rolling hills, gradually opening wide panoramic views of the
Kilemche Valley. The pace is relaxed, allowing time to enjoy the landscape and adapt to
horseback riding. By late afternoon, the group reaches Kilemche Valley, known for its vast
summer pastures and nomadic atmosphere.`,
    duration: "Horseback riding distance: ~15–18 km",
    place: "yurt camp in Kilemche Valley",
  },
  {
    title: "Day 2. Kilemche Valley – Song-Kul Lake (horseback riding)",
    desc: `After breakfast, the horseback journey continues toward Song-Kul Lake. The route follows
alpine meadows and mountain trails, gradually gaining altitude as the landscape becomes
more open and dramatic. Along the way, riders pass shepherd camps and remote pastures,
experiencing the traditional nomadic way of life. In the afternoon, the group reaches
Song-Kul Lake, a high-altitude alpine lake surrounded by wide plateaus and snow-capped
mountains, offering a true sense of space and freedom.`,
    duration: "Horseback riding distance: ~17–20 km",
    place: "yurt camp at Song-Kul Lake",
  },
  {
    title: "Day 3. Song-Kul Lake – Bishkek (via Kalmak-Ashuu Pass)",
    desc: `The day begins with a peaceful morning by the lake, when the light and reflections create
especially beautiful views. After breakfast, the return journey to Bishkek starts by vehicle via
the scenic Kalmak-Ashuu Pass. The high mountain road offers breathtaking landscapes and
completes the adventure with a final panoramic drive. Arrival in Bishkek is expected in the
evening.`,
    duration: "~300 km by car",
    place: " not included",
  },
];

const bestOfKyrgryzstan: StepCardType[] = [
  {
    title: "Day 1. Bishkek – Burana – Konorcheck – Kochkor",
    desc: `Morning departure from Bishkek leads to Burana Tower, an ancient historical site. After lunch
in Tokmok, the group treks through the Konorcheck Canyons, marveling at dramatic rock
formations. In the late afternoon, arrival in Kochkor village (1,800 m) allows time to rest and
acclimatize to the mountain altitude, preparing for the highland journey ahead.`,
    duration: "-",
    place: "Quest House",
  },
  {
    title: "Day 2. Kochkor – Kyzart – Kilemche",
    desc: `The day begins with a drive to Kyzart, the gateway to highland pastures. From there, the
adventure continues on horseback through scenic mountain trails into Kilemche Valley.
Riders enjoy expansive alpine landscapes, grazing horses, and traditional summer pastures.
Evening brings the first experience of yurt camping, surrounded by the tranquility of remote
Kyrgyz mountains.`,
    duration: "-",
    place: "Quest House",
  },
  {
    title: "Day 3. Kilemche – Song-Kul Lake",
    desc: `After breakfast, the horseback trek climbs through the Tuz-Ashuu Pass, opening panoramic
views of mountain ridges. The route leads to the stunning Song-Kul Lake, a high-altitude
alpine plateau and traditional summer grazing area. Guests witness nomadic life in yurts,
enjoy the peaceful atmosphere, and experience the vast openness of Kyrgyzstan’s central
heartland, where mountains and lake meet in perfect harmony.`,
    duration: "-",
    place: "Yurt camp at Song-Kul Lake",
  },
  {
    title: "Day 4. Song-Kul – Bokonbaevo",
    desc: `Departure from Song-Kul takes the group through the Kalmak-Ashuu Pass toward
Bokonbaevo village, overlooking Issyk-Kul Lake. Along the route, travelers experience
dramatic mountain landscapes and wide pastures. In the afternoon, the group enjoys a
traditional eagle hunting show, witnessing the ancient Kyrgyz skill of hunting with trained
golden eagles, a practice that has been preserved for generations in the Issyk-Kul region.`,
    duration: "-",
    place: "Quest House",
  },
  {
    title: "Day 5. Bokonbaevo – Skazka – Barskoon – Jeti-Oguz – Karakol",
    desc: `The journey continues along Issyk-Kul’s southern shore, visiting Skazka Canyons, Barskoon
Gorge, and Jeti-Oguz Gorge, famous for colorful rock formations. Travelers explore the
unique landscapes, take short walks, and enjoy breathtaking panoramas. The day ends with
arrival in Karakol, the eastern hub of the Tien Shan mountains, ready for alpine trekking and
hot springs adventures in the following days.`,
    duration: "-",
    place: "Quest House",
  },
  {
    title: "Day 6. Karakol – Altyn-Arashan",
    desc: `A morning transfer from Karakol to Aksuu village begins the trekking journey into
Altyn-Arashan Gorge. The trail passes alpine meadows, mountain streams, and pine forests,
gradually ascending toward the gorge. The area is known for natural hot springs, perfect for
evening relaxation. Guests spend the night in a guesthouse surrounded by stunning
mountainous landscapes and fresh alpine air.`,
    duration: "-",
    place: "Quest House",
  },
  {
    title: "Day 7. Altyn-Arashan – Karakol – Chong-Kemin",
    desc: `The trek descends from Altyn-Arashan to Aksuu, followed by a transfer to Karakol for lunch.
The journey continues to the Chong-Kemin Valley, a picturesque area of rivers, hills, and
forests. Travelers enjoy gentle walks or optional activities, absorbing the beauty of the valley.
Evening accommodation in a guesthouse provides comfort after days of trekking and
exploration.`,
    duration: "-",
    place: "Quest House",
  },
  {
    title: "Day 8. Chong-Kemin – Bishkek",
    desc: `Optional horseback riding in the Chong-Kemin Valley offers a last chance to experience
Kyrgyz pastures and mountains. The tour concludes with a scenic transfer back to Bishkek,
arriving in the afternoon. Guests leave with memories of mountain passes, highland lakes,
yurts, and nomadic culture, completing a journey through the diverse landscapes and heart
of Kyrgyzstan.`,
    duration: "-",
    place: "Quest House",
  },
];

const kzAndKg: StepCardType[] = [
  {
    title: "Day 1. Almaty – Charyn Canyons – Saty",
    desc: `Morning departure from Almaty to the Charyn Canyons, one of Kazakhstan’s most
impressive natural landmarks. Walk through the canyon landscapes and enjoy time for
photos. After the visit, continue to the mountain village of Saty through scenic valleys. Check
in at the hotel and relax after the first travel day.`,
    duration: "-",
    place: "Quest House",
  },
  {
    title: "Day 2. Saty – Kaindy Lake – Kolsai Lake – Saty",
    desc: `After breakfast, travel by off-road vehicles to Kaindy Lake, famous for its submerged forest
and crystal-clear water. Walk along the lakeshore and return to Saty for lunch. In the
afternoon, visit Kolsai Lake, surrounded by pine forests and mountains. Return to Saty for
rest and overnight.`,
    duration: "-",
    place: "Quest House",
  },
  {
    title: "Day 3. Saty – Kegen – Karakol",
    desc: `Today the route crosses from Kazakhstan into Kyrgyzstan. After breakfast, depart toward
Kegen and pass the border. Continue to the town of Karakol, located at the foot of the Tien
Shan mountains. Upon arrival, check in at the hotel and enjoy a short city tour visiting the
Orthodox Church and the Dungan Mosque.`,
    duration: "-",
    place: "Quest House",
  },
  {
    title: "Day 4. Karakol – Altyn Arashan",
    desc: `In the morning, depart Karakol by classic Soviet off-road vehicles to the high-mountain Altyn
Arashan Gorge. The road follows rocky trails and mountain rivers. Upon arrival, have lunch
and walk through the alpine valley. Visit the natural hot springs with time for bathing. Dinner
and overnight in Altyn Arashan.`,
    duration: "-",
    place: "Quest House",
  },
  {
    title: "Day 5. Altyn Arashan – South Shore of Issyk-Kul – Bokonbaevo",
    desc: `Early departure from Altyn Arashan back to Karakol. Continue along the southern shore of
Issyk-Kul Lake, visiting Jeti-Oguz Gorge, Barskoon Gorge, and the Skazka (Fairy Tale)
Canyon. The day offers a variety of landscapes, from red rock formations to mountain
valleys. Evening arrival and overnight in Bokonbaevo.`,
    duration: "-",
    place: "Quest House",
  },
  {
    title: "Day 6. Bokonbaevo – Kochkor – Son-Kul",
    desc: `In the morning, experience a traditional eagle hunting demonstration, an important part of
nomadic culture. Then travel toward Kochkor with a lunch stop along the way. Continue to
the high-altitude Son-Kul Lake via the Kalmak-Ashuu Pass. Arrival at the lake,
accommodation in a yurt camp, evening walk and rest.`,
    duration: "-",
    place: "Yurt camp at Son-Kul Lake",
  },
  {
    title: "Day 7. Son-Kul – Naryn – Kok-Kiya Valley",
    desc: `Early departure from Son-Kul and drive to the town of Naryn, the regional center. After lunch,
continue toward the remote Kok-Kiya Valley in the At-Bashy area. The landscapes become
wilder and more dramatic. Upon arrival, check in at a guesthouse and enjoy a quiet evening
surrounded by mountain scenery.`,
    duration: "-",
    place: "Yurt campy",
  },
  {
    title: "Day 8. Kok-Kiya Valley – Kel-Suu Lake – Kok-Kiya Valley",
    desc: `Optional horseback riding in the Chong-Kemin Valley offers a last chance to experience
Kyrgyz pastures and mountains. The tour concludes with a scenic transfer back to Bishkek,
arriving in the afternoon. Guests leave with memories of mountain passes, highland lakes,
yurts, and nomadic culture, completing a journey through the diverse landscapes and heart
of Kyrgyzstan.`,
    duration: "-",
    place: "Yurt camp",
  },
  {
    title: "Day 9. Kok-Kiya Valley – Naryn",
    desc: `In the morning, depart from Kok-Kiya Valley and drive back to Naryn. The route passes wide
plateaus and mountain passes. Upon arrival, check in at the hotel. Free time to rest, explore
the town, or recover after the active part of the journey. Overnight in Naryn.`,
    duration: "-",
    place: "Quest House",
  },
  {
    title: "Day 10. Naryn – Bishkek – Almaty",
    desc: `Early departure from Naryn to Bishkek. Upon arrival, stop for lunch and a short break in the
capital of Kyrgyzstan. Continue the journey to Almaty, completing the cross-border
adventure through Kazakhstan and Kyrgyzstan. Arrival in Almaty in the evening. End of the
tour.`,
    duration: "-",
    place: "Quest House",
  },
];

const unique: StepCardType[] = [
  {
    title: "Day 1. Bishkek – Chon-Kemin",
    desc: `The journey begins by leaving the city and entering a space of calm. The road leads into the
green valley of Chon-Kemin, where the mountains naturally slow the rhythm of life. After
settling in, a horseback ride follows quiet nature trails. Meditation takes place in motion,
allowing connection with the horse, the mountains, and one’s inner balance.`,
    duration: "-",
    place: "Quest House",
  },
  {
    title: "Day 2. Chon-Kemin – Karakol",
    desc: `An early departure follows the shoreline of Issyk-Kul Lake. A stop in Cholpon-Ata offers time
to explore ancient petroglyphs, silent messages left by humans thousands of years ago. This
moment invites reflection and presence. By evening, arrival in Karakol, a calm mountain
town that prepares the mind and body for deeper immersion into nature.`,
    duration: "-",
    place: "Quest House",
  },
  {
    title: "Day 3. Karakol – Altyn-Arashan",
    desc: `The drive into Altyn-Arashan Gorge in a classic Soviet off-road vehicle enhances the feeling
of true travel. Upon arrival, natural hot springs help release physical tension. After lunch,
gentle yoga and meditation are practiced outdoors, surrounded by mountains. The
landscape creates a sense of protection and grounding, allowing the day to end in deep
relaxation.`,
    duration: "-",
    place: "Quest House",
  },
  {
    title: "Day 4. Altyn-Arashan – Jeti-Oguz – Barskoon – Skazka – Bokonbaevo",
    desc: `Descending from the mountains, the journey flows through changing landscapes and
emotions. Panoramic views of Jeti-Oguz, a walk to the Barskoon waterfall, and the surreal
Skazka canyons reveal nature’s many forms. In the evening, meditation and yoga take place
on the shore of Issyk-Kul, followed by a traditional folk music performance.`,
    duration: "-",
    place: "Quest House",
  },
  {
    title: "Day 5. Bokonbaevo – Kyzart – Kilemche",
    desc: `The road leads to the village of Kyzart, where a horseback journey into the Kilemche Valley
begins. Movement slows, allowing awareness to deepen. Wide alpine pastures, fresh air,
and open space create a sense of freedom and simplicity. Overnight stay in a summer yurt
camp offers a close connection to the land and traditional nomadic life.`,
    duration: "-",
    place: "Quest House",
  },
  {
    title: "Day 6. Kilemche – Song-Kul",
    desc: `The journey continues toward the high-altitude lake Song-Kul, passing vast mountain
plateaus. Along the way, there is an opportunity to observe the life of shepherds and their
yurts, shaped by rhythm and nature. Song-Kul welcomes travelers with silence and wind.
The evening is dedicated to stillness, reflection, and the expansive mountain sky.`,
    duration: "-",
    place: "Yurt camp at Song-Kul Lake",
  },
  {
    title: "Day 7. Song-Kul – Kochkor – Bishkek",
    desc: `Morning at Song-Kul brings quiet gratitude and a gentle farewell. The drive to Kochkor
carries a feeling of return, but with a transformed inner state. A visit to a felt-making
workshop reveals the meditative process of creating traditional shyrdaks. In the evening,
arrival in Bishkek marks the end of the tour, while the inner journey continues.`,
    duration: "-",
    place: "Quest House",
  },
];

const fourXFour: StepCardType[] = [
  {
    title: "Day 1. Bishkek – Kochkor – Kol-Ukok",
    desc: `Early departure from Bishkek towards Kochkor. Along the way, landscapes gradually change
from open plains to mountainous terrain. Lunch in a guesthouse in Kochkor. After lunch,
off-road drive to Kol-Ukok gorge. Short walk through the valley and introduction to the
surrounding nature. Accommodation in traditional yurts. Dinner and overnight stay in the
mountains.`,
    duration: "-",
    place: "Yurt camp at Kol-Ukok",
  },
  {
    title: "Day 2. Kol-Ukok – Kochkor",
    desc: `After breakfast, trekking begins towards the alpine lake Kol-Tor. The route passes through
mountain meadows and rocky trails with scenic panoramic views. Time for rest and a light
picnic near the lake. Return along the same path to the camp, followed by transfer back to
Kochkor. Accommodation and overnight stay in a guesthouse.`,
    duration: "-",
    place: "Quest House",
  },
  {
    title: "Day 3. Kochkor – Song-Kul",
    desc: `Morning departure towards Song-Kul Lake. The road goes through the Kalmak-Ashuu
mountain pass, offering wide open landscapes and summer pastures. Upon arrival,
accommodation in a yurt camp. After lunch, horseback riding along the lakeshore. Free time
for walks and photography. Dinner and overnight stay in yurts near the lake.`,
    duration: "-",
    place: "Yurt camp at Song-Kul Lake",
  },
  {
    title: "Day 4. Song-Kul – Naryn",
    desc: `The morning begins with a relaxed breakfast and free time by Song-Kul Lake. After lunch,
departure towards the town of Naryn. The route passes a winding mountain road known as
the “32 Parrots” pass, famous for its dramatic views. Arrival in Naryn in the evening.
Accommodation and rest after a full day on the road.`,
    duration: "-",
    place: "Quest House",
  },
  {
    title: "Day 5. Naryn – Kok-Kyia",
    desc: `This day is dedicated to a long transfer into one of the most remote regions of the itinerary.
The road crosses high-altitude valleys, wide pastures, and sparsely populated areas.
Several stops are made for rest and photography. By evening, arrival in the Kok-Kyia area.
Accommodation in a guesthouse, dinner, and overnight rest.`,
    duration: "-",
    place: "Yurt camp at Kok-Kyia",
  },
  {
    title: "Day 6. Kok-Kyia – Kel-Suu – Kok-Kyia",
    desc: `Early departure towards the border zone and the start of the trek to Kel-Suu Lake. The hiking
route follows a narrow gorge with steep rock walls. Time for rest and a picnic near the lake.
Boat rides are possible depending on weather conditions. Return along the same trail.
Evening accommodation and overnight stay in a yurt camp.`,
    duration: "-",
    place: "Yurt camp at Kok-Kyia",
  },
  {
    title: "Day 7. Kok-Kyia – Naryn – Bokonbaevo",
    desc: `Early morning departure from Kok-Kyia towards Naryn. Upon arrival, lunch and a short rest
in the town. Afterward, the journey continues to the southern shore of Issyk-Kul Lake, to the
village of Bokonbaevo. Landscapes gradually change from high mountains to semi-desert
scenery. Evening accommodation in a guesthouse.`,
    duration: "-",
    place: "Quest House",
  },
  {
    title: "Day 8. Bokonbaevo – Skazka – Barskoon – Jeti-Oguz – Karakol",
    desc: `In the morning, visit a traditional eagle hunting demonstration. Continue to the Skazka
canyons for a walk among colorful rock formations. Later, hike to a waterfall in Barskoon
Gorge. On the way, stop at a panoramic viewpoint overlooking the Jeti-Oguz rocks. Evening
arrival in Karakol and accommodation at a hotel.`,
    duration: "-",
    place: "Quest House",
  },
  {
    title: "Day 9. Karakol – Altyn-Arashan",
    desc: `In the morning, transfer to off-road vehicles and departure towards Altyn-Arashan Gorge.
The journey takes about two hours and follows a rough mountain track. Upon arrival,
accommodation in a guesthouse. Free time to explore the gorge and relax in natural hot
springs. Dinner and overnight stay surrounded by alpine scenery.`,
    duration: "-",
    place: "Quest House",
  },
  {
    title: "Day 10. Altyn-Arashan – Karakol – Bishkek",
    desc: `After breakfast, departure back to Karakol by off-road vehicles. Upon arrival, transfer to a
comfortable vehicle for the direct drive to Bishkek. The route passes along Issyk-Kul Lake
and through mountain passes. Arrival in Bishkek in the evening. End of the tour and transfer
to accommodation or the airport.`,
    duration: "-",
    place: "Quest House",
  },
];

const dayTrips: StepCardType[] = [
  {
    title: "ALA-ARCHA TOUR",
    desc: `- Morning departure from Bishkek to Ala-Archa National Park, located just 40 minutes from
the city.
- Upon arrival, enjoy a relaxed walk through alpine forests, feeding squirrels and birds
along the trail.
- Continue with a light hike to a panoramic viewpoint overlooking snow-capped peaks and
the Ala-Archa valley.
- Optional cable car ride for wider mountain views.
- Free time for photos and rest before returning to Bishkek in the late afternoon.`,
    duration: "Road drive - 100km",
    place: "-",
  },
  {
    title: "CHUNKURCHACK TOUR",
    desc: `Bishkek — Chunkurchak Gorge — Bishkek
- After breakfast, drive from Bishkek to Chunkurchak Gorge, a scenic mountain area known
for open valleys and rock formations.
- Enjoy an easy walk through the gorge, crossing suspension bridge and stopping at sky
resort to ride cable car and zipline. Opportunity to ride a horse in special hills
- Plenty of time for photos, fresh mountain air, and short explorations of the surrounding
landscapes.
- Lunch break in nature or at a local restaurant . In the afternoon, return to Bishkek, arriving
before evening.`,
    duration: "Road drive - 90km",
    place: "-",
  },
  {
    title: "HIKE TOUR",
    desc: `Bishkek — Alamedin Gorge — Bishkek
- Morning departure to Alamedin Gorge, one of the greenest gorges near Bishkek.
- Begin with a hike through forested trails leading to a mountain waterfall, surrounded by
fresh air and river sounds.
- After the hike, relax and recover at natural hot springs on the way back.
- Time to unwind and enjoy the contrast between cool mountain air and warm mineral water.
- Return to Bishkek in the evening.`,
    duration: "Toad drive - 90km , Hiking distance- 7-8km",
    place: "-",
  },
  {
    title: "KOK-MOINOK CANYON TOUR",
    desc: `Bishkek — Kegeti — Burana Tower — Kok-Moinok Canyons — Bishkek
- Depart Bishkek in the morning toward Kegeti Gorge for an easy walk to a scenic waterfall.
- - - Continue to Burana Tower, exploring this ancient Silk Road monument and its
surrounding balbals.
- After lunch, head to the colorful Kok-Moinok Canyons, walking through dramatic rock
formations and viewpoints.
- A balanced day of nature, history, and landscapes before returning to Bishkek by evening.`,
    duration: "Road driving - 250km",
    place: "-",
  },
  {
    title: "HORSEBACK RIDE X ISSYK-KUL",
    desc: `Bishkek — Chon-Kemin Valley — Issyk-Kul Lake — Bishkek
- Early departure from Bishkek to the Chon-Kemin Valley.
- Enjoy a horseback ride through open meadows and mountain scenery, accompanied by
an experienced horse handler.
- After the ride, continue toward Issyk-Kul Lake, the pearl of Kyrgyzstan.
- Time for a walk along the shore, photos, and relaxation by the water. In the late afternoon,
begin the return drive to Bishkek.`,
    duration: "Road driving - 280km",
    place: "-",
  }
];


const kyrgyzWeekSLider = [
  {
    item: main1, 
    title: "Kyrgyz Week",
  },
];

const kgAndKzKSLider = [
  {
    item: main1,
    title: "Kyrgyzstan & Kazakhstan trip",
  },
];

const mountainAdventureSLider = [
  {
    item: main1,
    title: "Mountain Adventure",
  },
];

const bestOfKyrgryzstankSLider = [
  {
    item: main1,
    title: "Best of Kyrgyzstan",
  },
];

const songKulSLider = [
  {
    item: main1,
    title: "Song-Kul Lake — the Heart of Kyrgyzstan",
  },
];

const altynArashanSLider = [
  {
    item: main1,
    title: "Altyn-Arashan - Ala-kul tour",
  },
];

const uniqueSLider = [
  {
    item: main1,
    title: "Unique Experience Tour ",
  },
];

const fourXFourSlider = [
  {
    item: main1,
    title: "4x4 OFF-ROAD ADVENTURE TOUR",
  },
];

const dayTripsSlider = [
  {
    item: main1,
    title: "Day Trips from Bishkek",
  },
];

export const stepsTours = [
  {
    arr: kyrgyzWeek,
    route : "1300 km",
    price : "from 760$",
    duration : "7 days",
    slider: kyrgyzWeekSLider,
    chapter: "Kyrgyz week",
    desc: "Bishkek , Kockkor , Bishkek",
    title:
      "This 7-day journey across Kyrgyzstan is a deep immersion into the country’s most iconic landscapes, nomadic traditions, and mountain life.This tour is perfect for travelers who want to see the real Kyrgyzstan — not just from the window of a car, but through short hikes, horseback riding, local experiences, and nights in yurts and mountain lodges. No special physical training is required, but a basic level of activity and curiosity is welcome.Along the route, you will visit Issyk-Kul Lake, the pearl of Central Asia, explore the red rock informations of Skazka Canyon, walk through the dramatic valleys of Jeti-Oguz and Barskoon, and relax in the natural hot springs of Altyn-Arashan with views of snow-covered peaks. You will experience authentic nomadic culture at Song-Kul Lake, ride horses along alpine meadows, and stay in a traditional yurt camp under a star-filled sky. The journey also includes cultural highlights such as an eagle hunting demonstration in Bokonbaevo, the ancient Burana Tower, and a guided city tour of Bishkek, offering a balanced mix of nature, history, and local life. This tour is ideal for: • First-time visitors to Kyrgyzstan •Nature and mountain lovers •Travelers looking for an active but comfortable adventure",
  },
  {
    arr: mountainAdventure,
    route : "1900 km",
    price : "from 1090$",
    duration : "10 days",
    slider: mountainAdventureSLider,
    chapter: "Mountain Adventure",
    desc: "Bishkek , Kockkor , Bishkek",
    title:
      "This 10-day Mountain Adventure tour is designed for travelers who want to go beyond classic routes and experience the wild, mountainous heart of Kyrgyzstan. The journey combines trekking, high-altitude lakes, remote valleys, and authentic nomadic life, offering a balanced mix of physical activity, cultural immersion, and untouched nature. The tour starts in Bishkek and leads you along the shores of Issyk-Kul Lake to Karakol, followed by a scenic two-day trek to Altyn-Arashan Gorge with overnight stay in the mountains and relaxation in natural hot springs beneath towering alpine peaks. From colorful canyons and legendary waterfalls to eagle hunting traditions and panoramic viewpoints, each day reveals a new landscape and atmosphere. A major highlight of the tour is Song-Kul Lake, located high in the Tien Shan Mountains, where you will stay in a traditional yurt camp, ride horses along the lakeshore, and experience the calm rhythm of nomadic life. The route then continues deeper into the country to Naryn region, one of the most remote and authentic parts of Kyrgyzstan, leading to Kok-Kyia Valley and the stunning alpine Kel-Suu Lake, surrounded by dramatic cliffs near the Chinese border.",
  },
  {
    arr: kzAndKg,
    route : "2100 km",
    price : "from 1190$",
    duration : "10 days",
    slider: kgAndKzKSLider,
    chapter: "Kyrgyzstan & Kazakhstan trip",
    desc: "Almaty ,Bishkek , Naryn, Son-Kul, Karakol, Kockkor , Bishkek",
    title: `Tour Highlights & Introduction
This journey is designed for travelers who want to experience Central Asia in depth,
moving far beyond classic routes and tourist centers. In just ten days, the tour
connects two countries — Kazakhstan and Kyrgyzstan — revealing dramatic
landscapes, remote mountain regions, and authentic nomadic culture, all within one
continuous and well-balanced route.
The adventure begins in Almaty, heading into the vast natural amphitheater of the
Charyn Canyons, where towering rock formations rise above the valley floor. From
here, the route climbs into the mountains of southeastern Kazakhstan, reaching the
alpine village of Saty and the legendary lakes Kaindy and Kolsai, located at altitudes
of around 1,800–2,000 meters, surrounded by pine forests and snow-capped peaks of
the Kungey Alatau range.
Crossing the border at Kegen, the journey enters Kyrgyzstan and continues to
Karakol, set between the Terskey Ala-Too Mountains and the immense waters of
Issyk-Kul Lake, one of the world’s largest high-altitude lakes at 1,607 meters above
sea level. From here, the route follows the southern shore of Issyk-Kul, exploring
iconic locations such as Jeti-Oguz Gorge, Barskoon waterfalls, and the colorful
formations of Skazka Canyon.
As the journey deepens, travelers move into the heart of Kyrgyzstan, ascending to
Son-Kul Lake at over 3,000 meters, crossing the Kalmak-Ashuu Pass, and entering the
remote At-Bashy region. The final highlight is the dramatic Kel-Suu Lake, hidden
among sheer cliffs near the Chinese border, accessible only by trekking through the
wild Kok-Kiya Valley.
Throughout the tour, guests experience a powerful balance of adventure and comfort:
off-road drives, alpine valleys, hot springs, high-mountain lakes, and quiet evenings
in yurts and guesthouses. This is a journey for those who seek space, scale, and a
sense of true exploration, connecting landscapes, cultures, and emotions into one
unforgettable expedition across Central Asia.`,
  },
  {
    arr: bestOfKyrgryzstan,
    route : "1500 km",
    price : "from 830$",
    duration : "8 days",
    slider: bestOfKyrgryzstankSLider,
    chapter: "Best of Kyrgyzstan",
    desc: "Bishkek , Burana , Konorcheck ,Kyzart ,Kilemche , Song-Kul Lake , Bokonbaevo ,Karakol",
    title: "-",
  },
  {
    arr: songKul,
    route : "600 km",
    price : "from 270$",
    duration : "3 days",
    slider: songKulSLider,
    chapter: "Song-Kul Lake — the Heart of Kyrgyzstan",
    desc: "Bishkek , Kockkor , Bishkek",
    title: `Song-Kul Lake is a high-altitude alpine lake located in the very center of Kyrgyzstan, which
is why it is often called the heart of the country. The lake lies at an elevation of about 3,016
meters above sea level, surrounded by vast plateaus and mountain ridges that create a
sense of openness, silence, and untouched wilderness.
Geographically, Song-Kul is part of the Inner Tien Shan mountain system. It is enclosed by
several ridges, including the Song-Kul Too and the Moldo Too ranges, which protect the
basin and shape its unique highland climate. Due to its elevation, the lake remains cold
throughout the year and is covered with ice for much of the winter, while summers are short
but vibrant, turning the surrounding pastures into rich green jailoo (summer grazing lands).
Song-Kul is the second-largest natural lake in Kyrgyzstan, after Issyk-Kul, and plays an
important ecological and cultural role. The wide pastures around the lake have for centuries
served as summer grazing grounds for nomadic herders. During the warm months, local
families move here with their livestock — horses, sheep, and yaks — setting up yurts and
continuing a way of life that has changed little over generations.`,
  },
  {
    arr: altynArashan,
    route : "50 km",
    price : "from 740$",
    duration : "4 days",
    slider: altynArashanSLider,
    chapter: "Altyn-Arashan - Ala-kul tour",
    desc: "Bishkek , Kockkor , Bishkek",
    title: `This 4-day trekking adventure takes you through some of the most scenic mountain
landscapes of eastern Kyrgyzstan, combining alpine lakes, high mountain passes, deep
gorges, and natural hot springs. Starting and ending in Karakol, the route leads through
Karakol Gorge to the famous Ala-Kul Lake, crosses a high-altitude mountain pass, and
finishes in the green valley of Altyn-Arashan.
The trek is designed for active travelers who want to experience the raw beauty of the Tien
Shan Mountains, enjoy several days of hiking in remote nature, and recover in hot mineral
springs after challenging mountain days. This journey offers a balanced mix of physical
activity, dramatic scenery, and authentic mountain atmosphere, making it one of the classic
trekking routes in the Issyk-Kul region.`,
  },
  {
    arr: unique,
    route : "1300 km",
    price : "from 1090$",
    duration : "7 days",
    slider: uniqueSLider,
    chapter: "Unique Experience Tour",
    desc: "Bishkek , Karakol, Altyn-Arashan , Song-Kul ,Kockkor , Skazka ,  Bishkek",
    title: `This Unique Experience Tour is designed for travelers who seek a deeper connection with
nature and themselves. Rather than rushing from one landmark to another, the journey
follows a natural rhythm, allowing space for silence, movement, and reflection. Mountains,
lakes, valleys, and wide pastures become not only scenery, but living environments that
gently shape one’s inner state.
Throughout the tour, travel is balanced with moments of stillness. Horseback riding, trekking,
hot springs, and simple walks are combined with meditation, yoga, and mindful observation
of the surrounding landscape. The program encourages participants to slow down, listen to
their bodies, and reconnect with a sense of presence often lost in everyday life.
Traditional yurts, remote valleys, and high-altitude lakes offer a return to simplicity and
authenticity. Encounters with local culture, music, and crafts reveal a way of life deeply
rooted in nature and continuity. Each location is chosen not only for its beauty, but for the
atmosphere it creates and the feelings it evokes.
This tour is not about physical challenge or constant activity. It is a gentle journey inward,
supported by powerful natural settings. Participants return with more than memories and
photographs — they leave with clarity, grounding, and a renewed sense of balance.`,
  },
    {
    arr: fourXFour,
    route : "1900 km",
    price : "from 1160$",
    duration : "10 days",
    slider: fourXFourSlider,
    chapter: "4x4 OFF-ROAD ADVENTURE TOUR",
    desc: "Bishkek , Karakol, Altyn-Arashan , Song-Kul ,Kockkor , Skazka ,  Bishkek",
    title: `The itinerary covers central and eastern Kyrgyzstan, crossing diverse natural zones and
mountain systems. Key regions include Kochkor, Song-Kul, Naryn, Kok-Kyia, Kel-Suu,
Issyk-Kul, and Karakol. The route traverses high mountain passes such as Kalmak-Ashuu
and remote valleys near the Chinese border, offering dramatic changes in landscapes
throughout the journey
    This expedition-style tour blends adventure and comfort, combining 4x4 travel with hiking,
horseback riding, and cultural encounters. Guests stay in traditional yurts, remote
guesthouses, and mountain valleys far from urban areas. The program is well balanced, with
active days followed by rest, allowing travelers to experience Kyrgyzstan’s raw nature
without extreme physical demands.`,
  },
  {
    arr: dayTrips,
    route : "- km",
    price : "from -",
    duration : "1 day",
    slider: dayTripsSlider,
    chapter: "Day Trips from Bishkek",
    desc: `If you find yourself in Bishkek with a free day or even just half a day, we can help you make
the most of your time. The mountains, gorges, lakes, and historical sites around the city are
easily accessible and perfect for short trips. These day tours are designed for travelers who
want to experience nature, culture, and fresh mountain air without long journeys or overnight
stays. Each route is carefully planned to be comfortable, scenic, and flexible, allowing you to
explore Kyrgyzstan’s highlights in a single day and return to Bishkek by evening`,
  },

];
