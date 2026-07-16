import React, { useState, useEffect } from 'react';
import { Star, ArrowUpRight, Quote } from 'lucide-react';

interface Review {
  id: string | number;
  name: string;
  role: string;
  rating: number;
  text: string;
  avatarColor: string;
  initials: string;
}

const defaultReviews: Review[] = [

  {
    id: 1,
    name: "Mathi Sankar",
    role: "GOOGLE REVIEW • 6 MONTHS AGO",
    rating: 5,
    text: "This journey was one of the best experiences we've had, and the adventure was completely new and exciting for all our friends. The guide was warm, friendly, and very supportive. The trip was absolutely worth the cost. Choose Best Travellers D2R Private Limited for a fantastic travel experience.",
    avatarColor: "#4285F4",
    initials: "MS"
  },
  {
    id: 2,
    name: "Lakkiya Selvakumar",
    role: "GOOGLE REVIEW • 6 MONTHS AGO",
    rating: 5,
    text: "Great experience, well planned, frendly and supportive, truly made the journey enjoy a well",
    avatarColor: "#34A853",
    initials: "LS"
  },
  {
    id: 3,
    name: "Vaishali Balaji",
    role: "GOOGLE REVIEW • 2 MONTHS AGO",
    rating: 5,
    text: "Thanks to D2R Holidays for giving us a wonderful experience. Truly a great trip, we have covered so many places and activities within 3 days.",
    avatarColor: "#EA4335",
    initials: "VB"
  },
  {
    id: 4,
    name: "Danisha",
    role: "GOOGLE REVIEW • 2 MONTHS AGO",
    rating: 5,
    text: "The trip we had was so good and the guide (Bala Anna) we had was such a friendly one who matched with our vibe and had lots of fun there. Overall food, resort, adventures and travels all are worth the price!!",
    avatarColor: "#FBBC05",
    initials: "D"
  },
  {
    id: 5,
    name: "Divya Prabha B.B",
    role: "GOOGLE REVIEW • 6 MONTHS AGO",
    rating: 5,
    text: "The bus arrangements, crackers, and cake cutting were very good. The guidelines provided were also clear and helpful. The adventure park and food were nice. We also had access to the swimming pool, and there was a separate property arranged for us. Mr. Bala helped us a lot throughout the trip. Overall, it was a very good experience.",
    avatarColor: "#9C27B0",
    initials: "DP"
  },
  {
    id: 6,
    name: "S L T",
    role: "GOOGLE REVIEW • 6 MONTHS AGO",
    rating: 5,
    text: "Our trip was well organised by D2R Holidays, they provided a proper itinerary and were open to changes based on our constraints. They took care of almost everything — accommodation and travel was comfortable. Food exceeded our expectations. Overall this was a really nice experience.",
    avatarColor: "#00BCD4",
    initials: "SLT"
  },
  {
    id: 7,
    name: "Mithra Kumar",
    role: "GOOGLE REVIEW • A WEEK AGO",
    rating: 5,
    text: "It was really a good experience. A well planned trip with good food.",
    avatarColor: "#FF5722",
    initials: "MK"
  },
  {
    id: 8,
    name: "Indrajith K.U",
    role: "GOOGLE REVIEW",
    rating: 5,
    text: "They assisted me properly with my trip. Every thing was properly pre-planned and executed properly. Worth the wait for my trip.",
    avatarColor: "#607D8B",
    initials: "IK"
  },
  {
    id: 9,
    name: "Keerthana Chandrasekar",
    role: "GOOGLE REVIEW • 2 MONTHS AGO",
    rating: 5,
    text: "The trip service was honestly such a delightful experience! Everything felt so smooth and well-organized, from the booking process to the actual journey. They were super friendly and made sure we were comfortable at every step, which made the whole trip feel extra special. It wasn’t just about reaching the destination—it was about enjoying every little moment along the way. Definitely one of those experiences that leaves you smiling even after it’s over .",
    avatarColor: "#E91E63",
    initials: "KC"
  },
  {
    id: 10,
    name: "mohammed hathim",
    role: "GOOGLE REVIEW • 6 MONTHS AGO",
    rating: 5,
    text: "Best trip planner so far we went as a group 💥💥👹",
    avatarColor: "#3F51B5",
    initials: "MH"
  },
  {
    id: 11,
    name: "Sarika T",
    role: "GOOGLE REVIEW • 2 MONTHS AGO",
    rating: 5,
    text: "Had an amazing trip to Gokarna with D2R Dare2Roam Holidays. Everything was perfectly organized, and we really enjoyed the whole experience. The guide(Bala Bro) was super friendly and helpful, which made the trip even more fun. Would definitely recommend!",
    avatarColor: "#009688",
    initials: "ST"
  },
  {
    id: 12,
    name: "vajjala vishwak narayan",
    role: "GOOGLE REVIEW • 6 MONTHS AGO",
    rating: 5,
    text: "I had a really great experience in this trip. The planning was well organized, the itinerary was smooth, and everything was managed on time. The team was friendly, supportive, and made sure the trip was enjoyable and stress-free. Overall, it was a memorable journey and I would definitely recommend them to others. 😊",
    avatarColor: "#8BC34A",
    initials: "VV"
  },
  {
    id: 13,
    name: "iva Ranjani",
    role: "GOOGLE REVIEW • 2 MONTHS AGO",
    rating: 5,
    text: "Had a very good trip with friends. They organized our trip very good and we made a lot of good memories.",
    avatarColor: "#FFC107",
    initials: "IR"
  },
  {
    id: 14,
    name: "Iyyappan lovely",
    role: "GOOGLE REVIEW • 7 MONTHS AGO",
    rating: 5,
    text: "The trip experience was amazing. well co-ordination Mr.Bala. All arrangements like hotel and car and itinerary was superb. My family was so happy. Jeep Safari in Gir was amazing. Overall good.Thanks to D2RHolidays",
    avatarColor: "#FF9800",
    initials: "IL"
  },
  {
    id: 15,
    name: "sanjeeth",
    role: "GOOGLE REVIEW • 6 MONTHS AGO",
    rating: 5,
    text: "The trip turned out to be a wonderful experience and a memorable adventure for our entire group. The guide was very kind, cooperative, and made us feel comfortable at all times. Truly worth every penny",
    avatarColor: "#795548",
    initials: "S"
  },
  {
    id: 16,
    name: "Mona",
    role: "GOOGLE REVIEW • A WEEK AGO",
    rating: 5,
    text: "Well planned trip with friendly team and good food",
    avatarColor: "#673AB7",
    initials: "M"
  },
  {
    id: 17,
    name: "Santhosh A",
    role: "GOOGLE REVIEW • A WEEK AGO",
    rating: 5,
    text: "The best agency. D2r agency took care of everything from start to end and provided us a very good experience.Loved it!!",
    avatarColor: "#F44336",
    initials: "SA"
  },
  {
    id: 18,
    name: "kishor Official",
    role: "GOOGLE REVIEW • A WEEK AGO",
    rating: 5,
    text: "Good Travel...✨",
    avatarColor: "#4285F4",
    initials: "KO"
  }
,
  {
    id: 19,
    name: "Srivatsan Palanisamy",
    role: "GOOGLE REVIEW • A WEEK AGO",
    rating: 5,
    text: "@d2rholidays,\"A memorable journey filled with fun, adventure, and happiness.\"",
    avatarColor: "#EA4335",
    initials: "SP"
  },
  {
    id: 20,
    name: "Ajaikumar G",
    role: "GOOGLE REVIEW • A WEEK AGO",
    rating: 5,
    text: "Exciting trip",
    avatarColor: "#FBBC05",
    initials: "AG"
  },
  {
    id: 21,
    name: "TN BEAST GAMING-27",
    role: "GOOGLE REVIEW • A WEEK AGO",
    rating: 5,
    text: "D2R Holidays we'll had a wonderful IV days and we are completely fullfilled with their package and best foods are provided for timings and it'll not disappoint you it's really worth it in each place ✨- Jai Abinav T",
    avatarColor: "#9C27B0",
    initials: "TG"
  },
  {
    id: 22,
    name: "Nithis Karthik",
    role: "GOOGLE REVIEW • A WEEK AGO",
    rating: 5,
    text: "Wonderful experience",
    avatarColor: "#00BCD4",
    initials: "NK"
  },
  {
    id: 23,
    name: "SWETHA P",
    role: "GOOGLE REVIEW • A WEEK AGO",
    rating: 5,
    text: "A veryy nice experience..loved the trip❤️",
    avatarColor: "#FF5722",
    initials: "SP"
  },
  {
    id: 24,
    name: "SHARAN ESHWAR",
    role: "GOOGLE REVIEW • A WEEK AGO",
    rating: 5,
    text: "Wonderful experience",
    avatarColor: "#607D8B",
    initials: "SE"
  },
  {
    id: 25,
    name: "Ragu Sakthivel",
    role: "GOOGLE REVIEW • A WEEK AGO",
    rating: 5,
    text: "Organization was awesome",
    avatarColor: "#E91E63",
    initials: "RS"
  },
  {
    id: 26,
    name: "Atchaya K",
    role: "GOOGLE REVIEW • A WEEK AGO",
    rating: 5,
    text: "The trip was budget friendly.. And it's worth for the given money.... Dj vibe is very nice..we enjoyed a lot... And the guide was very kind... Gives good experience then we expect... Thank you so much",
    avatarColor: "#3F51B5",
    initials: "AK"
  },
  {
    id: 27,
    name: "Diksa",
    role: "GOOGLE REVIEW • A WEEK AGO",
    rating: 5,
    text: "We had a wonderful experience visiting this place. The guide was friendly and helpful, making us feel comfortable throughout our visit. Overall, it was an memorable experience, and we would definitely recommend others to visit.",
    avatarColor: "#009688",
    initials: "DI"
  },
  {
    id: 28,
    name: "A- DANASUSIHA M G",
    role: "GOOGLE REVIEW • A WEEK AGO",
    rating: 5,
    text: "We enjoyed lots..superrrrr...❤️💃🏾",
    avatarColor: "#8BC34A",
    initials: "AG"
  },
  {
    id: 29,
    name: "KAVIYA K",
    role: "GOOGLE REVIEW • A WEEK AGO",
    rating: 5,
    text: "we enjoyed lotss in the trip❤️nicee",
    avatarColor: "#FFC107",
    initials: "KK"
  },
  {
    id: 30,
    name: "Viviyana Viviyana",
    role: "GOOGLE REVIEW • A WEEK AGO",
    rating: 5,
    text: "Good experience..",
    avatarColor: "#FF9800",
    initials: "VV"
  },
  {
    id: 31,
    name: "Kavi Kavi",
    role: "GOOGLE REVIEW • 7 MONTHS AGO",
    rating: 5,
    text: "EXCELLENT CUSTOMER SELLING",
    avatarColor: "#795548",
    initials: "KK"
  },
  {
    id: 32,
    name: "Abishek Abishek",
    role: "GOOGLE REVIEW • 7 MONTHS AGO",
    rating: 5,
    text: "Excellent customer service",
    avatarColor: "#673AB7",
    initials: "AA"
  },
  {
    id: 33,
    name: "kaleem .k",
    role: "GOOGLE REVIEW • 7 MONTHS AGO",
    rating: 5,
    text: "Thank ☺. Bro i am happy",
    avatarColor: "#F44336",
    initials: "K."
  },
  {
    id: 34,
    name: "Suthasri M",
    role: "GOOGLE REVIEW • 7 MONTHS AGO",
    rating: 5,
    text: "Good experience",
    avatarColor: "#4285F4",
    initials: "SM"
  },
  {
    id: 35,
    name: "Harshan jothi",
    role: "GOOGLE REVIEW • 6 MONTHS AGO",
    rating: 5,
    text: "Overall a good experience along with D2R.",
    avatarColor: "#34A853",
    initials: "HJ"
  },
  {
    id: 36,
    name: "Kit27.bme39",
    role: "GOOGLE REVIEW • 7 MONTHS AGO",
    rating: 5,
    text: "Awesome trip Worth for money ⛰️🎊",
    avatarColor: "#EA4335",
    initials: "KI"
  },
  {
    id: 37,
    name: "Dinesh Kumar",
    role: "GOOGLE REVIEW • 7 MONTHS AGO",
    rating: 5,
    text: "This travel agency is one of best travel agency for mee.... Very safe and secure to travel Best memorable and enjoyable travel...",
    avatarColor: "#FBBC05",
    initials: "DK"
  },
  {
    id: 38,
    name: "Perumal M",
    role: "GOOGLE REVIEW • 7 MONTHS AGO",
    rating: 5,
    text: "Super guide ,safe ride, good foods ,fully enjoyment and satisfaction 😁",
    avatarColor: "#9C27B0",
    initials: "PM"
  },
  {
    id: 39,
    name: "Harshavardhan Elan",
    role: "GOOGLE REVIEW • 6 MONTHS AGO",
    rating: 5,
    text: "It was a good experience.I do recommend this agency for further plannings.",
    avatarColor: "#00BCD4",
    initials: "HE"
  },
  {
    id: 40,
    name: "Arun Prasadh",
    role: "GOOGLE REVIEW • 7 MONTHS AGO",
    rating: 5,
    text: "Hii I am Arun we planned a honeymoon package to Switzerland by D2R holidays the planning and their services was superb their resorts and cab was excellent so I suggest the D2R holidays to everyone, thank you",
    avatarColor: "#FF5722",
    initials: "AP"
  },
  {
    id: 41,
    name: "Rizwana Banu",
    role: "GOOGLE REVIEW • 7 MONTHS AGO",
    rating: 5,
    text: "“Enjoyed the trip a lot! Clean places, good service, and a refreshing experience.”",
    avatarColor: "#607D8B",
    initials: "RB"
  },
  {
    id: 42,
    name: "Karthikeyan V",
    role: "GOOGLE REVIEW • 7 MONTHS AGO",
    rating: 5,
    text: "We had a great 7-day trip to Bali organized .The agent, quickly answered all our questions. The flights and hotels were all booked perfectly. Our driver, John, was always on time and friendly. Sarah even suggested a quiet beach we loved. Everything went smoothly. Highly recommend!\"",
    avatarColor: "#E91E63",
    initials: "KV"
  },
  {
    id: 43,
    name: "kesavan kutty",
    role: "GOOGLE REVIEW • 7 MONTHS AGO",
    rating: 5,
    text: "Super wonderful experience, holidays enjoyment",
    avatarColor: "#3F51B5",
    initials: "KK"
  },
  {
    id: 44,
    name: "Suriya Kcn",
    role: "GOOGLE REVIEW • 7 MONTHS AGO",
    rating: 5,
    text: "Best to explore the new place with them.... Good prefer there.. Welfare... And good to visit them to explore... The place.... Try.. To get new exploringe memories 🤍🍃",
    avatarColor: "#009688",
    initials: "SK"
  },
  {
    id: 45,
    name: "BILLA SURESH BILLA SURESH",
    role: "GOOGLE REVIEW • 7 MONTHS AGO",
    rating: 5,
    text: "We had absolutely wonderful experience with Dare2roam Good service and quick response Overall we enjoyed the whole trip,it was a memorable trip will definitely use Dare2roam travels service in future.....☺️",
    avatarColor: "#8BC34A",
    initials: "BS"
  },
  {
    id: 46,
    name: "Gowsik E",
    role: "GOOGLE REVIEW • 7 MONTHS AGO",
    rating: 5,
    text: "Hii to everyone we are the group of 35 students from coimbatore, we planned an 5 days trip to andhamam island for diwali their services was good and they given us guide too which helps us to coordinate with us , their resort was good they provide us food too thanks to D2R Holidays",
    avatarColor: "#FFC107",
    initials: "GE"
  },
  {
    id: 47,
    name: "Jai Visal",
    role: "GOOGLE REVIEW • 6 MONTHS AGO",
    rating: 5,
    text: "It was a great and amazing experience .2 days was thriller experience",
    avatarColor: "#FF9800",
    initials: "JV"
  },
  {
    id: 48,
    name: "Arun Bharath",
    role: "GOOGLE REVIEW • 7 MONTHS AGO",
    rating: 5,
    text: "My kerala trip experience. If you are new or the first time i would recommend you blindly to avail their services. Mr Bala and team were professionally doing his business with good quality services. He guided our itinerary in proper sequence. Must Go with them blindly their cost is less than in the market.Thanks to the team D2RHOLIDAYS.",
    avatarColor: "#795548",
    initials: "AB"
  },
  {
    id: 49,
    name: "L S Roshini",
    role: "GOOGLE REVIEW • 6 MONTHS AGO",
    rating: 5,
    text: "Well organised trip, an amazing experience overall.",
    avatarColor: "#673AB7",
    initials: "LR"
  },
  {
    id: 50,
    name: "Sara Kim",
    role: "GOOGLE REVIEW • 2 MONTHS AGO",
    rating: 5,
    text: "A good and fun journey with friends. Happy with the organization.",
    avatarColor: "#F44336",
    initials: "SK"
  },
  {
    id: 51,
    name: "Pavithra Pavi",
    role: "GOOGLE REVIEW • 7 MONTHS AGO",
    rating: 5,
    text: "This is my 2nd holiday booking with D2RHOLIDAYS and my trust in them has also increased 2x now. Everything was flawless right from suggestions, to bookings, to actual holiday experience. More power to the D2RHOLIDAYS team for providing the best always. Special mention of bala is being patient and accomodating all our requests. Breathtaking view of the Munnar Valley from hotel room at Tea Village, Munnar; Sighting Nilgiri Tahr from a very close distance at the Eravikualm National Park; photo sessions at the 2nd mile photo point and tea estates; boat ride at the Vembanad lake (Kumarakom backwaters); Elephant ride and Kathakali show at Thekaddy, amazing local cuisine especially sea food and plenty of photographs. Kerala trip has been amazing for us, better than what we imagined. Thank you team D2HOLIDAYS :)",
    avatarColor: "#4285F4",
    initials: "PP"
  },
  {
    id: 52,
    name: "Dhenesh Dhenesh",
    role: "GOOGLE REVIEW • 7 MONTHS AGO",
    rating: 5,
    text: "1. D2R Holidays (Dare2Roam) is one of the most reliable travel agencies in Coimbatore. [1][2] 2. Avanga trips fully well-organised, from travel to stay and sightseeing everything planned neatly. [3][4] 3. Students, friends group, family – ella category-kuvum affordable and value-for-money packages kudukkuraanga. [5][6] 4. Especially college tours and industrial visits arrange pannradula avanga romba experienced. [7][8] 5. Customer service super – calls, WhatsApp, queries ellame quick-a respond panraanga. [2][9] 6. Safety and comfort-ku romba importance kudukkuraanga, cab, rooms, food ellame nalla select panraanga. [3][4] 7. Itinerary flexible-a irukkum, namma preferences and budget-ku adjust panniduvaanga. [5][6] 8. Hidden charges illa, starting-la sollara amount-ku mela later surprise expense varathu. [2] 9. Local sightseeing spots, offbeat places, photo points ellam nalla cover pannuvanga. [3][10] 10. Reviews-la kudha many customers D2R team coordination and care-a romba praise pannirukkaanga. [1][2] 11. Group-la ponaalum, solo-a ponaalum, tension illaama travel panra maari arrangements pannuvanga. [4][6] 12. Trip mood, enjoyment, memories-ku romba focus pannura friendly team. [11][9] 13. Time management nalla irukkum – delay, confusion, miscommunication nu irukkara maari feel aagathu. [1][2] 14. First-time travellers-ku kooda process simple-a, easy-a explain panniduvaanga. [5] 15. Overall-a, safe, budget-friendly, well-planned and enjoyable trips kudukkuraanga, so 5-star rating definitely deserve pannuvaanga. [1][2]",
    avatarColor: "#34A853",
    initials: "DD"
  },
  {
    id: 53,
    name: "Ragavi R",
    role: "GOOGLE REVIEW • 7 MONTHS AGO",
    rating: 5,
    text: "Local Guide·6 reviews You made our holiday truly special.From the beginning to the end, the arrangements were smooth and professional. The itinerary was thoughtfully prepared, the hotels provided were comfortable, and the local guides were excellent. What impressed us most was the constant support from the team—they checked in often and ensured we were comfortable. Thank you for giving us a stress-free and memorable travel experience. We will definitely choose your services again.",
    avatarColor: "#EA4335",
    initials: "RR"
  },
  {
    id: 54,
    name: "Riyas Mohamed",
    role: "GOOGLE REVIEW • 2 MONTHS AGO",
    rating: 5,
    text: "Had a great experience thanks to d2r holidays and bala anna ❤️",
    avatarColor: "#FBBC05",
    initials: "RM"
  },
  {
    id: 55,
    name: "Dharshini Senthilkumar",
    role: "GOOGLE REVIEW • 6 MONTHS AGO",
    rating: 5,
    text: "Had a wonderful 1N/2D trip to Varkala and Vagamon with Dare2Roam Holidays. The trip was well organized, the food was very good, and the resort arranged was excellent. Smooth travel and overall a refreshing, enjoyable getaway.",
    avatarColor: "#9C27B0",
    initials: "DS"
  },
  {
    id: 56,
    name: "Arunthathi",
    role: "GOOGLE REVIEW • 2 MONTHS AGO",
    rating: 5,
    text: "Three days trip to dandeli, gokarna was superb their resort and water activities was great and good 😊",
    avatarColor: "#00BCD4",
    initials: "AR"
  },
  {
    id: 57,
    name: "Daksha Lakshmanan",
    role: "GOOGLE REVIEW • 6 MONTHS AGO",
    rating: 5,
    text: "Had a very nice Vagamon–Varkala trip with Dare2Roam Holidays. Everything was well organized, the places were beautiful, and the experience was fun and smooth. Stay, food, and travel were so good. Overall, a great trip and worth it!",
    avatarColor: "#FF5722",
    initials: "DL"
  },
  {
    id: 58,
    name: "COMMON MAN",
    role: "GOOGLE REVIEW • 2 MONTHS AGO",
    rating: 5,
    text: "We are the students of 40 fromsri Krishna college had a tour to north karnataka for 3 days which the tour was awesome, food , resort and bus was superb thanks to d2R holidays",
    avatarColor: "#607D8B",
    initials: "CM"
  },
  {
    id: 59,
    name: "Dharnish_ 3787",
    role: "GOOGLE REVIEW • 7 MONTHS AGO",
    rating: 5,
    text: "We planned 5 days package to delhi and manali for group of 7 members, the planning, service, their hotels and their cab driver was good and they provide us 4 star property which was good and well planned package thanks to D2R holidays",
    avatarColor: "#E91E63",
    initials: "D3"
  },
  {
    id: 60,
    name: "Madhan",
    role: "GOOGLE REVIEW • 7 MONTHS AGO",
    rating: 5,
    text: "My trip to Vagamon was wonderfully organised! The itinerary was smooth, the stay and travel arrangements were comfortable, and the organiser handled everything professionally. The sightseeing spots, viewpoints, and activities were well planned, making the trip peaceful and memorable. Highly recommended for a hassle-free travel experience!",
    avatarColor: "#3F51B5",
    initials: "MA"
  },
  {
    id: 61,
    name: "Harshitha V",
    role: "GOOGLE REVIEW • 6 MONTHS AGO",
    rating: 5,
    text: "They delivered more than what was expected and made our holiday truly enjoyable. Everything was well planned, smooth, and stress-free. From bookings to support, the entire experience was seamless. Would definitely recommend them for a hassle-free and memorable vacation.",
    avatarColor: "#009688",
    initials: "HV"
  },
  {
    id: 62,
    name: "Avanthika Hariharan",
    role: "GOOGLE REVIEW • 6 MONTHS AGO",
    rating: 5,
    text: "Excellent planning and execution. The trip followed the schedule perfectly, and both travel and food arrangements were well managed. Very satisfied with the services provided.",
    avatarColor: "#8BC34A",
    initials: "AH"
  },
  {
    id: 63,
    name: "Siva Ragav",
    role: "GOOGLE REVIEW • 2 MONTHS AGO",
    rating: 5,
    text: "Local Guide·3 reviews·1 photo Good experience, food and accommodation are superb and the guide bala anna was awesome 😎💯",
    avatarColor: "#FFC107",
    initials: "SR"
  },
  {
    id: 64,
    name: "Surya Muthu",
    role: "GOOGLE REVIEW • 2 MONTHS AGO",
    rating: 5,
    text: "Wonderful experience ❤️No words to express about the journey 💌 Bala Anna 🫂",
    avatarColor: "#FF9800",
    initials: "SM"
  },
  {
    id: 65,
    name: "Hemachandran Mohandas",
    role: "GOOGLE REVIEW • EDITED 2 MONTHS AGO",
    rating: 5,
    text: "well organized trip ever went! all because of them ❤️🔥 special thanks to our guide bala bro!😎",
    avatarColor: "#795548",
    initials: "HM"
  },
  {
    id: 66,
    name: "Shiva Ranjani",
    role: "GOOGLE REVIEW • 2 MONTHS AGO",
    rating: 5,
    text: "Had a very good trip with friends. They organized our trip very good and we made a lot of good memories.",
    avatarColor: "#673AB7",
    initials: "SR"
  },
  {
    id: 67,
    name: "DIVYA PRABHA.B.B",
    role: "GOOGLE REVIEW • 6 MONTHS AGO",
    rating: 5,
    text: "The bus arrangements, crackers, and cake cutting were very good. The guidelines provided were also clear and helpful. The adventure park and food were nice. We also had access to the swimming pool, and there was a separate property arranged for us. Mr. Bala helped us a lot throughout the trip.Overall, it was a very good experience.",
    avatarColor: "#F44336",
    initials: "DP"
  },
  {
    id: 68,
    name: "THIRU MURUGAN",
    role: "GOOGLE REVIEW • A WEEK AGO",
    rating: 5,
    text: "D2R holidays best travel agency,good exposure and light effects ,calm and composed explanation ,friendly vibe ,jeep ride and bus speed is the best experience level ,investing money is worth for it ,food is best but sometimes maybe different due to taste of different places and hotels",
    avatarColor: "#4285F4",
    initials: "TM"
  },
  {
    id: 69,
    name: "Dhanyasakthi S",
    role: "GOOGLE REVIEW • A WEEK AGO",
    rating: 5,
    text: "Really amazing experience. In 2 days we covered more places and I have enjoyed the dj music and jeep safari in our package 😍😍😍🤩🤩",
    avatarColor: "#34A853",
    initials: "DS"
  }
];

const Testimonials = () => {
  const [reviews, setReviews] = useState<Review[]>(defaultReviews);
  const googleReviewUrl = "https://search.google.com/local/writereview?placeid=ChIJKzhygqQzqTsRjO4w1pXkGyo";

  // Removed the live API fetch to ensure ONLY the hardcoded authentic reviews are shown
  // without being mixed with or overwritten by the external feed.

  return (
    <section className="py-24 bg-white text-slate-800 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Column (Span 5) - Title and Moss photo card */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left gap-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 px-4 py-2 rounded-full text-rose-500 text-xs font-black uppercase tracking-widest mb-4">
                📖 Traveler Diaries
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
                Stories from Our
                <br />
                <span className="bg-gradient-to-r from-rose-500 to-orange-400 bg-clip-text text-transparent">Travelers</span>
              </h2>
              <p className="text-slate-500 text-base mt-4 max-w-md font-light">
                Don't just take our word for it. Read the real, unscripted tales of wonder from travelers who trusted us to author their dream escapes.
              </p>
            </div>
            
            {/* Visual moss card */}
            <div className="relative w-full h-[320px] rounded-3xl overflow-hidden shadow-2xl flex-grow group">
              <img 
                src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80" 
                alt="Happy Travelers in Italy" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 right-6 text-white text-right max-w-[240px]">
                <span className="block text-3xl font-black tracking-tight leading-tight font-sans drop-shadow-lg">
                  Loved by Travelers
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/90 block mt-2 drop-shadow-md font-sans">
                  5-Star Reviews
                </span>
              </div>

              
              {/* Floating Google badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur rounded-2xl px-4 py-2 shadow-lg flex items-center gap-2">
                <span className="text-xl">⭐</span>
                <div>
                  <span className="block text-[10px] font-bold text-slate-500 uppercase">Google Rating</span>
                  <span className="block text-sm font-black text-slate-900">5.0/5.0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Span 7) - SCROLLING TESTIMONIALS: shows 3 at a time, loops all reviews */}
          <div className="lg:col-span-7 flex flex-col relative overflow-hidden rounded-[2rem] bg-white border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)]" style={{ height: '660px' }}>
            
            {/* Top Fade Mask */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />

            {/* Infinite Marquee — renders 2 copies so -50% seamlessly loops */}
            <div className="absolute inset-0 flex justify-center items-start w-full px-3 md:px-6 overflow-hidden pt-8">
              <div className="flex flex-col animate-slide-down-continuous hover:[animation-play-state:paused] w-full h-max">
                {/* Copy 1 */}
                <div className="flex flex-col gap-5 pb-5">
                  {reviews.map((rev) => (
                    <TestimonialCard key={`loop1-${rev.id}`} rev={rev} googleReviewUrl={googleReviewUrl} />
                  ))}
                </div>
                {/* Copy 2 — identical, makes the loop seamless */}
                <div className="flex flex-col gap-5 pb-5">
                  {reviews.map((rev) => (
                    <TestimonialCard key={`loop2-${rev.id}`} rev={rev} googleReviewUrl={googleReviewUrl} />
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Fade Mask */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

          </div>

        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ rev, googleReviewUrl }: { rev: Review; googleReviewUrl: string }) => {
  const starsArray = [...Array(5)];
  return (
    <div className="relative p-6 sm:p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between w-full bg-slate-50 border border-slate-100 hover:shadow-xl hover:bg-white group">
      
      {/* Decorative Quote Icon */}
      <div className="absolute top-6 right-6 text-slate-200 group-hover:text-amber-100 transition-colors">
        <Quote className="h-12 w-12 rotate-180" />
      </div>

      <div>
        {/* Rating Stars and Google Logo */}
        <div className="flex items-center justify-between mb-6 relative z-10">
          <div className="flex gap-1">
            {starsArray.map((_, idx) => (
              <Star 
                key={idx} 
                className={`h-4 w-4 ${
                  idx < rev.rating 
                    ? 'text-amber-400 fill-amber-400' 
                    : 'text-slate-200'
                }`} 
              />
            ))}
          </div>
          <div className="flex items-center px-3 py-1.5 rounded-full border border-slate-200 bg-white shadow-sm">
            <svg className="h-[14px] w-[14px] mr-1.5 flex-shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.58c-.28 1.48-1.12 2.74-2.38 3.58v2.98h3.84c2.25-2.07 3.7-5.12 3.7-8.41z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.84-2.98c-1.08.72-2.45 1.16-4.09 1.16-3.15 0-5.81-2.13-6.76-5.01H1.4v3.08C3.37 20.3 7.38 24 12 24z"/>
              <path fill="#FBBC05" d="M5.24 14.26c-.25-.72-.39-1.5-.39-2.3s.14-1.58.39-2.3V6.58H1.4C.51 8.2.01 10.04.01 12s.5 3.8 1.39 5.42l3.84-3.16z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.93 1.19 15.22 0 12 0 7.38 0 3.37 3.7 1.4 5.62l3.84 3.08c.95-2.88 3.61-5.01 6.76-5.01z"/>
            </svg>
            <span className="text-[10px] font-black text-slate-500 tracking-wider">GOOGLE</span>
          </div>
        </div>

        {/* Review text */}
        <p className="font-sans text-[15px] sm:text-base leading-relaxed text-slate-600 mb-8 italic relative z-10">
          "{rev.text}"
        </p>
      </div>

      {/* Profile and Google Review Arrow Trigger */}
      <div className="flex justify-between items-center border-t border-slate-200 pt-5 relative z-10">
        <div className="flex items-center gap-4">
          {/* Google-style initial avatar */}
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-white shadow-sm shrink-0 select-none"
            style={{ backgroundColor: rev.avatarColor }}
          >
            <span className="text-white font-bold text-sm tracking-wide">{rev.initials}</span>
          </div>
          <div className="text-left">
            <span className="block text-[15px] font-black text-slate-900 leading-tight">{rev.name}</span>
            <span className="block text-[10px] font-bold tracking-widest text-slate-400 mt-1">
              {rev.role.split(' • ')[0]}
            </span>
          </div>
        </div>

        <a 
          href={googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-slate-400 hover:text-blue-600 hover:bg-blue-50 border border-slate-200 transition-all active:scale-95 shadow-sm"
          title="Write a Google Review"
        >
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

    </div>
  );
};

export default Testimonials;
