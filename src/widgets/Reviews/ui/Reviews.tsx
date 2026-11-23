import { Star } from "@phosphor-icons/react/dist/ssr/Star";
import styles from "../Reviews.module.scss";

const REVIEWS = [
  {
    name: "Melanie",
    place: "United Arab Emirates",
    date: "28 Jul 2023",
    title: "Best Experience in Kyrgyzstan",
    text: "We want to share out great thanks to Jack for your outstanding guiding tour. Your competence was perceived as extremely professional. Your services are highly recommendable. Rest assured that we will refer to your services once we plan our next visit.",
  },
  {
    name: "Shaalan31",
    place: "Cairo, Egypt",
    date: "15 Aug 2023",
    title: "Exceptional Trip",
    text: "This was one of my best trips, the hospitality was excellent. Jack also does his best to ensure you get what you're looking for, we got to trek to Ala-Kul Lake, 2 days of horse riding, and eat all the possible local and traditional dishes. One day we had a change in plans due to road closures but Jack still figured out on the spot another plan which ended up being supreme. Jack is also very friendly and light to be around, already looking forward to join him on another trip.",
  },
  {
    name: "Alfa O",
    place: "",
    date: "20 Jan 2024",
    title: "My unforgettable trip to Kyrgyzstan",
    text: "One of the best trips I ever had. In some way Kyrgyzstan captures my heart. The stunning views of nature up there, the friendly people, the amazing traditions and cultures that they have, and of course the delicious foods out there. In addition my tour guides Baya (Jack's friend) and the driver were very accommodating and yeah it's very safe. I would highly recommend your service.",
  },
  {
    name: "Lobna G",
    place: "",
    date: "2 Aug 2023",
    title: "Trekking with Jack",
    text: "We went to Arshan with Jack for a 2 days hiking/trekking trip to reach Ala-Kul lake. We were a group of 10 and Jack was our leader. It was one of the best hikes I did in my life.",
  },
  {
    name: "Paradise24754036393",
    place: "",
    date: "29 Jul 2023",
    title: "One of the best trips I ever be on",
    text: "This was one of the best tour guided trip I ever did. Jack and Baha was super in all ways, informative, extremely flexible with all of our requests and itinerary changes. They really knew so breathtaking place and some amazing things you can do in their country. If you are looking for true untouched nature or once in lifetime adventure, Kyrgyzstan is where you need to be. We were completely overwhelmed by the stunning mountain landscapes. This trip was incredible and we would love to be back again in a different part of beautiful Kyrgyzstan.",
  },
  {
    name: "Shiela Rose Mae B",
    place: "",
    date: "9 Aug 2023",
    title: "KG Experience!",
    text: "All I can say is that we had a wonderful experience especially me having my first time to experience snow. Kyrgyzstan is such a beautiful place and so many scenic views that will make you come back and try their other seasons. Kyrgyz people are so kind and sweet. Thank you to our energetic and informative tour guide, Jack, and our driver Kuban for showing us the beauty of Kyrgyzstan and making our tour a winter-ful one. Thank you for making our 3 days trip all worth it and full of fun. Your tour package is budget friendly and will surely recommend you to our friends.",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className={styles.reviews} aria-labelledby="reviews-title">
      <div className="container">
        <header className={styles.header}>
          <h2 id="reviews-title" className={styles.title}>
            Reviews
          </h2>
        </header>
      </div>
      <div className={styles.main}>
        {REVIEWS.map((review) => (
          <article key={review.name} className={styles.card}>
            <div className={styles.cardTop}>
              <p className={styles.name}>{review.name}</p>
              <p className={styles.meta}>
                {review.place ? `${review.place} · ` : ""}
                {review.date}
              </p>
              <p className={styles.stars} aria-label="5 stars">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} size={16} weight="fill" aria-hidden="true" />
                ))}
              </p>
            </div>
            <h3 className={styles.cardTitle}>{review.title}</h3>
            <p className={styles.text}>{review.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
