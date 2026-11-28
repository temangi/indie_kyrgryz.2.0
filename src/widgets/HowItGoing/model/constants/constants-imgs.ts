import type { StaticImageData } from "next/image";
import oof1 from "@/public/images/tours/off/p1.webp";
import oof2 from "@/public/images/tours/off/p2.webp";
import oof3 from "@/public/images/tours/off/p3.webp";
import oof4 from "@/public/images/tours/off/p4.webp";
import oof5 from "@/public/images/tours/off/p5.webp";
import day1 from "@/public/images/tours/day/p1.webp";
import day2 from "@/public/images/tours/day/p2.webp";
import day3 from "@/public/images/tours/day/p3.webp";
import day4 from "@/public/images/tours/day/p4.webp";
import day5 from "@/public/images/tours/day/p5.webp";
import moun1 from "@/public/images/tours/mountain/p1.webp";
import moun2 from "@/public/images/tours/mountain/p2.webp";
import moun3 from "@/public/images/tours/mountain/p3.webp";
import moun4 from "@/public/images/tours/mountain/p4.webp";
import moun5 from "@/public/images/tours/mountain/p5.webp";
import moun6 from "@/public/images/tours/mountain/p6.webp";
import song from "@/public/images/tours/song-kul/p1.webp";
import song2 from "@/public/images/tours/song-kul/p2.webp";
import song3 from "@/public/images/tours/song-kul/p3.webp";
import song4 from "@/public/images/tours/song-kul/p4.webp";
import song5 from "@/public/images/tours/song-kul/p5.webp";
import kg from "@/public/images/tours/kzAndKg/p1.webp";
import kg1 from "@/public/images/tours/kzAndKg/p2.webp";
import kg2 from "@/public/images/tours/kzAndKg/p3.webp";
import kg3 from "@/public/images/tours/kzAndKg/p4.webp";
import kg4 from "@/public/images/tours/kzAndKg/p5.webp";
import altyn from "@/public/images/tours/altyn/p1.webp";
import altyn2 from "@/public/images/tours/altyn/p2.webp";
import altyn3 from "@/public/images/tours/altyn/p3.webp";
import altyn4 from "@/public/images/tours/altyn/p4.webp";
import altyn5 from "@/public/images/tours/altyn/p5.webp";
import kyr from "@/public/images/tours/kyrgyz/p1.webp";
import kyr2 from "@/public/images/tours/kyrgyz/p2.webp";
import kyr3 from "@/public/images/tours/kyrgyz/p3.webp";
import kyr4 from "@/public/images/tours/kyrgyz/p4.webp";
import kyr5 from "@/public/images/tours/kyrgyz/p5.webp";
import kyr6 from "@/public/images/tours/kyrgyz/p6.webp";

export type GalleryPhoto = {
  image: StaticImageData;
  alt: string;
};

function photo(image: StaticImageData, alt: string): GalleryPhoto {
  return { image, alt };
}

export const offTourImgs: GalleryPhoto[] = [
  photo(oof1, "A dog sits beside a felt yurt on a green mountain slope"),
  photo(oof2, "A white SUV parked on a dry bank above a braided river"),
  photo(oof3, "Kel-Suu, a turquoise lake between steep grey cliffs"),
  photo(
    oof4,
    "A person sits inside a yurt under the wooden roof ring, with a table set for a meal"
  ),
  photo(oof5, "A hiker sits on a rock above a valley of yurts and lodges"),
];

export const dayTourImgs: GalleryPhoto[] = [
  photo(day1, "A traveler stands in front of a frozen waterfall"),
  photo(day2, "Five travelers pose beside a white car, with mountains behind them"),
  photo(day3, "A tall red rock spire rises in a canyon"),
  photo(day4, "Two people stand on a boulder beside a partly frozen waterfall"),
  photo(day5, "A rider on a rearing white horse in a green field"),
];

export const altynTourImgs: GalleryPhoto[] = [
  photo(altyn, "A river runs through a spruce forest toward a green mountain peak"),
  photo(altyn2, "Yurts and a wooden lodge in a green mountain valley"),
  photo(altyn3, "Hikers in rain gear cross a rocky slope above a green valley"),
  photo(altyn4, "A turquoise alpine lake under dark clouds, seen from a rocky slope"),
  photo(altyn5, "A turquoise lake and snowy peaks, seen from a rocky mountainside"),
];

export const kgTourImgs: GalleryPhoto[] = [
  photo(
    kg,
    "A mountain lake below spruce slopes and a snowy peak, with a green roof in the foreground"
  ),
  photo(
    kg1,
    "Bare tree trunks stand in a mountain lake, with people on a small pier"
  ),
  photo(kg2, "A rider on a white horse in front of a line of yurts"),
  photo(kg3, "A group of travelers in a red rock canyon"),
  photo(kg4, "A traveler looks over a switchback road in folded mountains"),
];

export const mountainTourImgs: GalleryPhoto[] = [
  photo(moun1, "A hiker on a rocky trail above a spruce forest"),
  photo(moun2, "A traveler looks over a switchback road in folded mountains"),
  photo(moun3, "A rider on a white horse in front of a line of yurts"),
  photo(moun4, "Travelers watch a waterfall in a rocky gorge"),
  photo(moun5, "A group sits around a campfire at night"),
  photo(moun6, "A group of travelers on red rock above a wide blue lake"),
];

export const songTourImgs: GalleryPhoto[] = [
  photo(
    song,
    "Three people ride horses across a green mountain pasture toward snowy ridges"
  ),
  photo(
    song2,
    "A musician in a white kalpak plays bagpipes beside yurts on a highland pasture"
  ),
  photo(song3, "A horse grazes in front of yurts in a green mountain valley"),
  photo(song4, "Two horses stand at the shore of a high lake at sunset"),
  photo(song5, "A horse grazes beside a high lake at dusk, with ridges across the water"),
];

export const kyrTourImgs: GalleryPhoto[] = [
  photo(kyr, "A rider holds a golden eagle with spread wings while seated on a dark horse"),
  photo(
    kyr2,
    "A musician in a white kalpak plays bagpipes beside yurts on a highland pasture"
  ),
  photo(kyr3, "Two hikers look over layered red canyon walls"),
  photo(kyr4, "A white van parked by a dark guesthouse in a mountain valley at dusk"),
  photo(kyr5, "A group sits around a campfire at night"),
  photo(kyr6, "A hiker stands in front of a waterfall in a rocky gorge"),
];
