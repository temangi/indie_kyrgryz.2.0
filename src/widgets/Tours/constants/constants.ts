import { StaticImageData } from "next/image";
import s1 from "@/public/images/slide14.webp"
import s2 from "@/public/images/slide10.webp"
import s3 from "@/public/images/slide5.webp"
import s4 from "@/public/images/slide7.webp"
import s5 from "@/public/images/slide6.webp"
import s6 from "@/public/images/slide8.webp"
import s7 from "@/public/images/slide9.webp"
import s8 from "@/public/images/slide11.webp"
import s9 from "@/public/images/slide4.webp"

export interface ITour {
    title: string;
    day: string;
    id : number
    img : StaticImageData
  }
  


export const tours: ITour[] = [
    {
      id : 4,
      title: " Best of Kyrgyzstan",
      day: "8 days",
      img : s1
    },
    {
      id : 5,
      title: "Song-kul horsebackriding",
      day: "3 days",
      img : s2
    },
    {
      id : 6,
      title: "Altyn-Arashan & Ala-Kul trip",
      day: "4 days",
      img : s3
    },
    {
      id : 3,
      title: "Kyrgyzstan & Kazakhstan trip",
      day: "11 days",
      img : s4
    },
    {
      id : 1,
      title: "Kyrgyz week",
      day: "7 days", img : s5
    },
    {
      id : 2,
      title: "Mountain Adventure",
      day: "10 days" , img : s6
    },
    {
      id : 7,
      title: "Unique Experience Tour",
      day: "8 Days" , img : s7
    },
    {
      id : 8,
      title: "4x4 OFF-ROAD ADVENTURE TOUR",
      day: "10 days" , img : s8
    },
    {
      id : 9,
      title: "Day Trips from Bishkek",
      day: "1 day" , img : s9
    },
  ]