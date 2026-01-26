import kslider from "@/public/images/KYRG2218.jpg"
import kslider2 from "@/public/images/KYRG2719.jpg"
import kslider3 from "@/public/images/KYRG2748.jpg"
import kslider4 from "@/public/images/KYRG2760.jpg"

type StepCardType = {
    title: string,
    duration: string,
    desc: string,
    place: string
}

const kyrgyzWeek: StepCardType[] = [
    {
        title: "Day 1: Bishkek city – Cholpon-Ata city – Karakol city",
        desc: "Departure from Bishkek. On the way, stop at Lake Issyk-Kul and take a walk along the promenade in Cholpon-Ata. Continue the drive to Karakol. Overnight stay in Karakol, preparing for the next day in the mountains.",
        duration: "200km - 5h",
        place: "Quest House"
    },
    {
        title: "Day 2: Karakol city – Altyn-Arashan gorge",
        desc: "Morning departure by old “bukhanka” van or UAZ to Altyn-Arashan.Visit the hot springs with a view of Palatka Peak (4680 m). Relax in the thermal pools and stay in mountain lodges.Overnight stay in Altyn-Arashan, enjoying the peace and mountain scenery.",
        duration: "200km - 5h",
        place: "Quest House"
    },
    {
        title: "Day 3: Altyn-Arashan gorge – Karakol city – Jeti-Oguz valley – Barskoon gorge – Skazka canyons – Bokonbaevo village",
        desc: "Descent to Karakol by “bukhanka” van or UAZ. Then drive to Jeti-Oguz for an excursion walk. Continue through Barskoon Gorge with a hike to Bowl of Manas Waterfall. Stop at Skazka Canyon to explore the rock formations. In the evening, arrive in Bokonbaevo, overnight at the base, preparing for the morning eagle hunting show.",
        duration: "200km - 5h",
        place: "Quest House"
    },
    {
        title: "Day 4: Bokonbaevo village – Kochkor village – Song-Kul lake",
        desc: "Morning — eagle hunting show. After depart to Song-Kol lake. Stop in Kochkor along the way. Then depart via Kalmak-Ashuu Pass with breathtaking views. Arrival at Song-Kul Lake, horseback rides along the shore, rest and dinner. Overnight stay at the yurt camp.",
        duration: "200km - 5h",
        place: "Quest House"
    },
    {
        title: "Day 5: Song-Kul lake – Konorchek canyons – Chong-Kemin village",
        desc: "Morning departure via Kochkor to Konorchek Canyons. Hike through the canyon to explore the rock formations. Continue the drive to Chong-Kemin. In the evening — rest at the guesthouse, dinner. Overnight stay at the Chong-Kemin guesthouse.",
        duration: "200km - 5h",
        place: "Quest House"
    },
    {
        title: "Day 6: Chong-Kemin village – Burana tower – Bishkek city",
        desc: "Morning in Chong-Kemin — horseback rides in the valley. Then depart to Bishkek via Kemin Valley. Stop in Tokmok for a visit to Burana Tower. Evening arrival in Bishkek, free time. Overnight stay in Bishkek.",
        duration: "200km - 5h",
        place: "Quest House"
    },
    {
        title: "Day 7: Bishkek city tour – Manas international airport",
        desc: "Morning city tour of Bishkek: visit Ala-Too Square, the National Museum, and Osh Bazaar for souvenir shopping. Transfer to Manas International Airport. End of the tour.",
        duration: "200km - 5h",
        place: "Quest House"
    },
]

const mountainAdventure: StepCardType[] = [
    {
        title: "Day 1: Bishkek city - Cholpon-Ata city - Karakol city",
        desc: "Departure from Bishkek. On the way, stop at Lake Issyk-Kul and take a walk along the promenade in Cholpon-Ata. Continue the drive to Karakol. Overnight stay in Karakol, preparing for the next day in the mountains.",
        duration: "200km - 5h",
        place: "Guest House"
    },
    {
        title: "Day 2: Karakol city – Altyn-Arashan gorge",
        desc: "Morning departure by old 'bukhanka' van or UAZ to Altyn-Arashan. Visit the hot springs with a view of Palatka Peak (4680 m). Relax in the thermal pools and stay in mountain lodges. Overnight stay in Altyn-Arashan, enjoying the peace and mountain scenery.",
        duration: "200km - 5h",
        place: "Guest House"
    },
    {
        title: "Day 3: Altyn-Arashan gorge – Ak-Suu village – Karakol city",
        desc: "After breakfast, begin a 15 km trek from Altyn-Arashan to Ak-Suu village along a scenic mountain trail. Upon arrival, transfer to Karakol for lunch and rest. In the evening, free time for a walk around the city and preparation for the next day. Overnight stay in Karakol.",
        duration: "15km trek",
        place: "Guest House"
    },
    {
        title: "Day 4: Karakol city – Jeti-Oguz gorge – Barskoon gorge – Skazka canyons – Bokonbaevo village",
        desc: "Morning departure from Karakol. Excursions and walks through Jeti-Oguz, Barskoon, and Skazka Canyon. In Barskoon, visit Chasha Manas Waterfall. After completing the route, arrive in Bokonbaevo for rest and overnight stay at the base.",
        duration: "220km - 6h",
        place: "Yurt Camp"
    },
    {
        title: "Day 5: Bokonbaevo village – Shatyly Panorama – Aksay Canyons – Kochkor village",
        desc: "After breakfast, enjoy an eagle hunting show in Bokonbaevo. Then hike to Shatyly Panorama, taking in views of the valleys and mountains. Continue with lunch and a trekking walk through Aksay Canyons to explore the natural formations. In the evening, transfer to Kochkor, dinner, and rest. Overnight stay in Kochkor.",
        duration: "150km - 4h",
        place: "Home Stay"
    },
    {
        title: "Day 6: Kochkor village – Song-Kul Lake",
        desc: "Morning departure to Song-Kul Lake via Kalmak-Ashuu Pass. Upon arrival, horseback riding along the lakeshore and lunch. Explore the highland scenery, enjoy the landscapes and fresh air. Evening dinner and overnight stay at a yurt camp on the lakeshore.",
        duration: "120km - 3h",
        place: "Yurt Camp"
    },
    {
        title: "Day 7: Song-Kul Lake – Naryn City",
        desc: "After breakfast, transfer to Naryn city through the '32 Parrots' Pass. On the way, stop at the waterfall on the Son-Kul river. Arrival in Naryn, rest after the drive, and free time for a short walk around the city. Overnight stay at a guesthouse in Naryn.",
        duration: "140km - 4h",
        place: "Guest House"
    },
    {
        title: "Day 8: Naryn – Kok-Kyia Valley",
        desc: "After breakfast, depart for Kok-Kyia Valley. Enjoy walks through the valley, taking in the surrounding nature, mountains, and views of Kakshal-Too. Evening dinner and rest at the guesthouse. Overnight stay in Kok-Kyia Valley.",
        duration: "180km - 5h",
        place: "Guest House"
    },
    {
        title: "Day 9: Kok-Kyia Valley – Kel-Suu lake – Kok-Kyia Valley",
        desc: "After lunch, begin trekking to Kel-Suu Lake. Stop for a picnic by the lake and enjoy the surroundings. Optional boat ride on the lake. Return to Kok-Kyia Valley for evening rest. Overnight stay at the guesthouse.",
        duration: "Trekking/Horseback",
        place: "Guest House"
    },
    {
        title: "Day 10: Kok-Kyia Valley – Bishkek City",
        desc: "Early morning departure after breakfast. Drive to Bishkek, approximately 8–9 hours. Stop in Naryn for lunch along the way. Continue the transfer through the mountains, arriving in Bishkek in the evening. End of the tour and rest after the journey.",
        duration: "450km - 9h",
        place: "End of Tour"
    }
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
        place: "tent camp at Sirota Camp"
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
        place: "tent camp at Keldike Camp"
    },
    {
        title: "Day 3. Keldike Camp – Altyn-Arashan Gorge",
        desc: `The route descends through the Keldike Gorge, passing coniferous forests and mountain
rivers, gradually leading into one of the most picturesque valleys in the region —
Altyn-Arashan. Upon arrival, the group stays in a guesthouse or yurt, with time to relax and
recover in the natural hot springs, which are especially appreciated after several days of
trekking.`,
        duration: "~9–11 km",
        place: "guesthouse or yurt in Altyn-Arashan"
    },
    {
        title: "Day 4. Altyn-Arashan Gorge – Karakol",
        desc: `After breakfast, there is free time for walks around the valley and optional visits to the hot
springs. Later, the group is transferred by 4WD vehicle back to the city of Karakol, where the
tour comes to an end.`,
        duration: "vehicle transfer",
        place: "not included"
    },
]

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
        place: "yurt camp in Kilemche Valley"
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
        place: "yurt camp at Song-Kul Lake"
    },
    {
        title: "Day 3. Song-Kul Lake – Bishkek (via Kalmak-Ashuu Pass)",
        desc: `The day begins with a peaceful morning by the lake, when the light and reflections create
especially beautiful views. After breakfast, the return journey to Bishkek starts by vehicle via
the scenic Kalmak-Ashuu Pass. The high mountain road offers breathtaking landscapes and
completes the adventure with a final panoramic drive. Arrival in Bishkek is expected in the
evening.`,
        duration: "~300 km by car",
        place: " not included"
    },
]

const bestOfKyrgryzstan: StepCardType[] = [
    {
        title: "Day 1. Bishkek – Burana – Konorcheck – Kochkor",
        desc: `Morning departure from Bishkek leads to Burana Tower, an ancient historical site. After lunch
in Tokmok, the group treks through the Konorcheck Canyons, marveling at dramatic rock
formations. In the late afternoon, arrival in Kochkor village (1,800 m) allows time to rest and
acclimatize to the mountain altitude, preparing for the highland journey ahead.`,
        duration: "-",
        place: "Quest House"
    },
    {
        title: "Day 2. Kochkor – Kyzart – Kilemche",
        desc: `The day begins with a drive to Kyzart, the gateway to highland pastures. From there, the
adventure continues on horseback through scenic mountain trails into Kilemche Valley.
Riders enjoy expansive alpine landscapes, grazing horses, and traditional summer pastures.
Evening brings the first experience of yurt camping, surrounded by the tranquility of remote
Kyrgyz mountains.`,
        duration: "-",
        place: "Quest House"
    }, {
        title: "Day 3. Kilemche – Song-Kul Lake",
        desc: `After breakfast, the horseback trek climbs through the Tuz-Ashuu Pass, opening panoramic
views of mountain ridges. The route leads to the stunning Song-Kul Lake, a high-altitude
alpine plateau and traditional summer grazing area. Guests witness nomadic life in yurts,
enjoy the peaceful atmosphere, and experience the vast openness of Kyrgyzstan’s central
heartland, where mountains and lake meet in perfect harmony.`,
        duration: "-",
        place: "Quest House"
    },
    {
        title: "Day 4. Song-Kul – Bokonbaevo",
        desc: `Departure from Song-Kul takes the group through the Kalmak-Ashuu Pass toward
Bokonbaevo village, overlooking Issyk-Kul Lake. Along the route, travelers experience
dramatic mountain landscapes and wide pastures. In the afternoon, the group enjoys a
traditional eagle hunting show, witnessing the ancient Kyrgyz skill of hunting with trained
golden eagles, a practice that has been preserved for generations in the Issyk-Kul region.`,
        duration: "-",
        place: "Quest House"
    },
    {
        title: "Day 5. Bokonbaevo – Skazka – Barskoon – Jeti-Oguz – Karakol",
        desc: `The journey continues along Issyk-Kul’s southern shore, visiting Skazka Canyons, Barskoon
Gorge, and Jeti-Oguz Gorge, famous for colorful rock formations. Travelers explore the
unique landscapes, take short walks, and enjoy breathtaking panoramas. The day ends with
arrival in Karakol, the eastern hub of the Tien Shan mountains, ready for alpine trekking and
hot springs adventures in the following days.`,
        duration: "-",
        place: "Quest House"
    },
    {
        title: "Day 6. Karakol – Altyn-Arashan",
        desc: `A morning transfer from Karakol to Aksuu village begins the trekking journey into
Altyn-Arashan Gorge. The trail passes alpine meadows, mountain streams, and pine forests,
gradually ascending toward the gorge. The area is known for natural hot springs, perfect for
evening relaxation. Guests spend the night in a guesthouse surrounded by stunning
mountainous landscapes and fresh alpine air.`,
        duration: "-",
        place: "Quest House"
    },
    {
        title: "Day 7. Altyn-Arashan – Karakol – Chong-Kemin",
        desc: `The trek descends from Altyn-Arashan to Aksuu, followed by a transfer to Karakol for lunch.
The journey continues to the Chong-Kemin Valley, a picturesque area of rivers, hills, and
forests. Travelers enjoy gentle walks or optional activities, absorbing the beauty of the valley.
Evening accommodation in a guesthouse provides comfort after days of trekking and
exploration.`,
        duration: "-",
        place: "Quest House"
    },
    {
        title: "Day 8. Chong-Kemin – Bishkek",
        desc: `Optional horseback riding in the Chong-Kemin Valley offers a last chance to experience
Kyrgyz pastures and mountains. The tour concludes with a scenic transfer back to Bishkek,
arriving in the afternoon. Guests leave with memories of mountain passes, highland lakes,
yurts, and nomadic culture, completing a journey through the diverse landscapes and heart
of Kyrgyzstan.`,
        duration: "-",
        place: "Quest House"
    },
]



const kyrgyzWeekSLider = [
    {
        item: kslider,
        title: "Kyrgyz Week"
    },
    {
        item: kslider2,
        title: "Kyrgyz Week"
    },
    {
        item: kslider3,
        title: "Kyrgyz Week"
    },
    {
        item: kslider4,
        title: "Kyrgyz Week"
    },

]
const kgAndKzKSLider = [
    {
        item: kslider,
        title: "Kyrgyzstan & Kazakhstan trip"
    },
    {
        item: kslider2,
        title: "Kyrgyzstan & Kazakhstan trip"
    },
    {
        item: kslider3,
        title: "Kyrgyzstan & Kazakhstan trip"
    },
    {
        item: kslider4,
        title: "Kyrgyzstan & Kazakhstan trip"
    },

]
const mountainAdventureSLider = [
    {
        item: kslider,
        title: "Mountain Adventure"
    },
    {
        item: kslider2,
        title: "Mountain Adventure"
    },
    {
        item: kslider3,
        title: "Mountain Adventure"
    },
    {
        item: kslider4,
        title: "Mountain Adventure"
    },

]
const bestOfKyrgryzstankSLider = [
    {
        item: kslider,
        title: "Best of Kyrgyzstan"
    },
    {
        item: kslider2,
        title: "Best of Kyrgyzstan"
    },
    {
        item: kslider3,
        title: "Best of Kyrgyzstan"
    },
    {
        item: kslider4,
        title: "Best of Kyrgyzstan"
    },

]
const songKulSLider = [
    {
        item: kslider,
        title: "Song-Kul Lake — the Heart of Kyrgyzstan"
    },
    {
        item: kslider2,
        title: "Song-Kul Lake — the Heart of Kyrgyzstan"
    },
    {
        item: kslider3,
        title: "Song-Kul Lake — the Heart of Kyrgyzstan"
    },
    {
        item: kslider4,
        title: "Song-Kul Lake — the Heart of Kyrgyzstan"
    },

]
const altynArashanSLider = [
    {
        item: kslider,
        title: "Altyn-Arashan - Ala-kul tour"
    },
    {
        item: kslider2,
        title: "Altyn-Arashan - Ala-kul tour"
    },
    {
        item: kslider3,
        title: "Altyn-Arashan - Ala-kul tour"
    },
    {
        item: kslider4,
        title: "Altyn-Arashan - Ala-kul tour"
    },

]

export const stepsTours = [
    {
        arr: kyrgyzWeek,
        slider: kyrgyzWeekSLider,
        chapter: "Kyrgyz week",
        desc: "Bishkek , Kockkor , Bishkek",
        title:
            "This 7-day journey across Kyrgyzstan is a deep immersion into the country’s most iconic landscapes, nomadic traditions, and mountain life.This tour is perfect for travelers who want to see the real Kyrgyzstan — not just from the window of a car, but through short hikes, horseback riding, local experiences, and nights in yurts and mountain lodges. No special physical training is required, but a basic level of activity and curiosity is welcome.Along the route, you will visit Issyk-Kul Lake, the pearl of Central Asia, explore the red rock informations of Skazka Canyon, walk through the dramatic valleys of Jeti-Oguz and Barskoon, and relax in the natural hot springs of Altyn-Arashan with views of snow-covered peaks. You will experience authentic nomadic culture at Song-Kul Lake, ride horses along alpine meadows, and stay in a traditional yurt camp under a star-filled sky. The journey also includes cultural highlights such as an eagle hunting demonstration in Bokonbaevo, the ancient Burana Tower, and a guided city tour of Bishkek, offering a balanced mix of nature, history, and local life. This tour is ideal for: • First-time visitors to Kyrgyzstan •Nature and mountain lovers •Travelers looking for an active but comfortable adventure"
    },
    {
        arr: mountainAdventure,
        slider: mountainAdventureSLider,
        chapter: "Mountain Adventure",
        desc: "Bishkek , Kockkor , Bishkek",
        title: "This 10-day Mountain Adventure tour is designed for travelers who want to go beyond classic routes and experience the wild, mountainous heart of Kyrgyzstan. The journey combines trekking, high-altitude lakes, remote valleys, and authentic nomadic life, offering a balanced mix of physical activity, cultural immersion, and untouched nature. The tour starts in Bishkek and leads you along the shores of Issyk-Kul Lake to Karakol, followed by a scenic two-day trek to Altyn-Arashan Gorge with overnight stay in the mountains and relaxation in natural hot springs beneath towering alpine peaks. From colorful canyons and legendary waterfalls to eagle hunting traditions and panoramic viewpoints, each day reveals a new landscape and atmosphere. A major highlight of the tour is Song-Kul Lake, located high in the Tien Shan Mountains, where you will stay in a traditional yurt camp, ride horses along the lakeshore, and experience the calm rhythm of nomadic life. The route then continues deeper into the country to Naryn region, one of the most remote and authentic parts of Kyrgyzstan, leading to Kok-Kyia Valley and the stunning alpine Kel-Suu Lake, surrounded by dramatic cliffs near the Chinese border."
    },
    {
        arr: kyrgyzWeek,
        slider: kgAndKzKSLider,
        chapter: "Kyrgyzstan & Kazakhstan trip",
        desc: "Bishkek , Kockkor , Bishkek",
        title:
            "This 7-day journey across Kyrgyzstan is a deep immersion into the country’s most iconic landscapes, nomadic traditions, and mountain life.This tour is perfect for travelers who want to see the real Kyrgyzstan — not just from the window of a car, but through short hikes, horseback riding, local experiences, and nights in yurts and mountain lodges. No special physical training is required, but a basic level of activity and curiosity is welcome.Along the route, you will visit Issyk-Kul Lake, the pearl of Central Asia, explore the red rock informations of Skazka Canyon, walk through the dramatic valleys of Jeti-Oguz and Barskoon, and relax in the natural hot springs of Altyn-Arashan with views of snow-covered peaks. You will experience authentic nomadic culture at Song-Kul Lake, ride horses along alpine meadows, and stay in a traditional yurt camp under a star-filled sky. The journey also includes cultural highlights such as an eagle hunting demonstration in Bokonbaevo, the ancient Burana Tower, and a guided city tour of Bishkek, offering a balanced mix of nature, history, and local life. This tour is ideal for: • First-time visitors to Kyrgyzstan •Nature and mountain lovers •Travelers looking for an active but comfortable adventure"
    },
    {
        arr: bestOfKyrgryzstan,
        slider: bestOfKyrgryzstankSLider,
        chapter: "Best of Kyrgyzstan",
        desc: "Bishkek , Burana , Konorcheck ,Kyzart ,Kilemche , Song-Kul Lake , Bokonbaevo ,Karakol",
        title : "-"
    },
    {
        arr: songKul,
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
continuing a way of life that has changed little over generations.`
    },
    {
        arr: altynArashan,
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
trekking routes in the Issyk-Kul region.`
    }

]

