export interface ProductReview {
  id: string;
  author: string;
  location: string;
  rating: 1 | 2 | 3 | 4 | 5;
  title: string;
  body: string;
  date: string;
  verified: boolean;
}

/**
 * Demo customer reviews for the storefront. These are illustrative sample
 * content and should be replaced with real, moderated reviews before launch.
 */
export const PRODUCT_REVIEWS: Record<string, ProductReview[]> = {
  proteios: [
    {
      id: "proteios-1",
      author: "Ayesha R.",
      location: "Lahore",
      rating: 5,
      title: "Mixes clean with no aftertaste",
      body: "I stir it into my morning oats and it disappears completely. Being unflavoured means I can use it in daal, smoothies, or just water without getting bored of one taste. No bloating either, which I used to get with flavoured powders.",
      date: "Sep 28, 2026",
      verified: true,
    },
    {
      id: "proteios-2",
      author: "Hamza T.",
      location: "Rawalpindi",
      rating: 5,
      title: "Recovery has been noticeably better",
      body: "I train four days a week and started adding one scoop after sessions. My soreness clears up faster and I am not as drained the next day. The scoop is easy to level and the tub seals properly.",
      date: "Sep 11, 2026",
      verified: true,
    },
    {
      id: "proteios-3",
      author: "Sana K.",
      location: "Islamabad",
      rating: 4,
      title: "Does the job, better in a blender",
      body: "My doctor suggested extra protein while I recovered from surgery. It dissolves well in a blender but can leave a few small clumps in a shaker if I add it too fast. Mixing it with milk first solved that completely.",
      date: "Aug 23, 2026",
      verified: true,
    },
    {
      id: "proteios-4",
      author: "Bilal H.",
      location: "Karachi",
      rating: 5,
      title: "My mother is finishing her tub",
      body: "We started this for my mother after her appetite dropped. She takes it in warm milk every evening and has kept her strength up. The unflavoured version was the right call because she does not like sweet drinks.",
      date: "Jul 30, 2026",
      verified: true,
    },
    {
      id: "proteios-5",
      author: "Usman A.",
      location: "Multan",
      rating: 4,
      title: "Good value, wish the tub was larger",
      body: "Quality is solid and it does not upset my stomach. Delivery to Multan took two days and the packaging was intact. My only feedback is that a bigger tub option would be handy for daily use.",
      date: "Jul 06, 2026",
      verified: true,
    },
  ],
  "ada-glu": [
    {
      id: "ada-glu-1",
      author: "Fatima N.",
      location: "Faisalabad",
      rating: 5,
      title: "Steadier mornings with my diet plan",
      body: "My dietitian asked me to include this with breakfast and my readings have been more consistent since. I still monitor daily and follow my meal plan, but this has made the routine easier to stick to.",
      date: "Oct 02, 2026",
      verified: true,
    },
    {
      id: "ada-glu-2",
      author: "Zainab S.",
      location: "Peshawar",
      rating: 4,
      title: "Mild taste and easy on the stomach",
      body: "I mix it with warm water before my evening meal. The taste is mild and not overly sweet, which I prefer. It took a few days to get used to the texture, but now it is part of my routine.",
      date: "Sep 19, 2026",
      verified: true,
    },
    {
      id: "ada-glu-3",
      author: "Danish M.",
      location: "Sialkot",
      rating: 5,
      title: "Recommended by our family doctor",
      body: "My father is managing type 2 diabetes and his doctor approved this as part of his diet. We measure his glucose regularly and keep the doctor informed. It has helped him stop skipping meals during the day.",
      date: "Aug 27, 2026",
      verified: true,
    },
    {
      id: "ada-glu-4",
      author: "Hira J.",
      location: "Lahore",
      rating: 4,
      title: "Useful, but not a meal replacement",
      body: "It works well alongside proper meals, not instead of them. The measuring scoop makes the serving easy to control and the tub is compact enough for my kitchen shelf. I would like a chocolate option for variety.",
      date: "Aug 04, 2026",
      verified: true,
    },
    {
      id: "ada-glu-5",
      author: "Rashid Q.",
      location: "Hyderabad",
      rating: 5,
      title: "Finally fits into my day without fuss",
      body: "I have struggled to keep my meal timing consistent because of shift work. One serving with breakfast has become the easiest part of my plan. Delivery and cash on delivery were straightforward.",
      date: "Jun 21, 2026",
      verified: true,
    },
  ],
  subset: [
    {
      id: "subset-1",
      author: "Mariam A.",
      location: "Lahore",
      rating: 5,
      title: "My go-to breakfast on busy days",
      body: "One glass in the morning keeps me full until lunch, and I have stopped skipping breakfast during school runs. The mix is smooth and the sweetness is balanced, not artificial. It has earned a permanent spot in my pantry.",
      date: "Sep 30, 2026",
      verified: true,
    },
    {
      id: "subset-2",
      author: "Hassan R.",
      location: "Islamabad",
      rating: 5,
      title: "Helped me through a low-appetite phase",
      body: "After a long illness I had very little appetite. My doctor suggested a balanced supplement, so I tried SUBSET with milk in the evenings. It was gentle on my stomach and helped me get back into regular meals.",
      date: "Sep 07, 2026",
      verified: true,
    },
    {
      id: "subset-3",
      author: "Nadia F.",
      location: "Karachi",
      rating: 4,
      title: "Complete and convenient, a little sweet",
      body: "The vitamin and mineral blend is what convinced me to try it. It is convenient when I cannot prepare a proper lunch. I find it slightly sweeter than I would like, so I use a little extra water.",
      date: "Aug 16, 2026",
      verified: true,
    },
    {
      id: "subset-4",
      author: "Imran S.",
      location: "Gujranwala",
      rating: 5,
      title: "Good option for my elderly mother",
      body: "My mother is 68 and often eats very little at lunch. Half a serving in milk has become her afternoon routine. She likes the taste and I like that the label lists the vitamins and minerals clearly.",
      date: "Jul 25, 2026",
      verified: true,
    },
    {
      id: "subset-5",
      author: "Komal V.",
      location: "Multan",
      rating: 4,
      title: "Pricey but genuinely useful",
      body: "I use it three or four times a week when work gets hectic. The scoop amount is clear on the label and one tub lasts me about a month. It costs more than a simple shake, but the balanced nutrition is worth it for me.",
      date: "Jun 12, 2026",
      verified: true,
    },
  ],
};

export function getProductReviews(slug: string): ProductReview[] {
  return PRODUCT_REVIEWS[slug] ?? [];
}

export function getReviewSummary(reviews: ProductReview[]) {
  if (reviews.length === 0) {
    return { average: 0, total: 0, distribution: [] as { stars: number; count: number; percent: number }[] };
  }

  const average = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const distribution = [5, 4, 3, 2, 1].map((stars) => {
    const count = reviews.filter((review) => review.rating === stars).length;
    return { stars, count, percent: Math.round((count / reviews.length) * 100) };
  });

  return { average, total: reviews.length, distribution };
}
