// 120 authentic-style reviews for NCR Dream Homes
// Fields: id, name, initial, location, city, propertyType, rating, date, verified, feedback, avatarGradient

const gradients = [
  'from-emerald-500 to-green-600',
  'from-teal-500 to-emerald-600',
  'from-green-500 to-lime-600',
  'from-blue-500 to-emerald-600',
  'from-orange-500 to-amber-600',
  'from-rose-500 to-pink-600',
  'from-purple-500 to-indigo-600',
  'from-cyan-500 to-blue-600',
  'from-yellow-500 to-orange-600',
  'from-sky-500 to-teal-600',
];

const names = [
  ['Rajesh', 'Kumar'], ['Priya', 'Sharma'], ['Amit', 'Verma'], ['Neha', 'Singh'], ['Vikram', 'Gupta'],
  ['Anjali', 'Mehta'], ['Sandeep', 'Yadav'], ['Pooja', 'Agarwal'], ['Manish', 'Chauhan'], ['Rekha', 'Bansal'],
  ['Suresh', 'Tiwari'], ['Kavita', 'Mishra'], ['Arjun', 'Saxena'], ['Deepak', 'Pandey'], ['Shweta', 'Kapoor'],
  ['Ravi', 'Joshi'], ['Meena', 'Dubey'], ['Ashok', 'Malhotra'], ['Sunita', 'Chopra'], ['Naveen', 'Rathi'],
  ['Geeta', 'Arora'], ['Vivek', 'Bhatia'], ['Nisha', 'Khanna'], ['Rahul', 'Goel'], ['Swati', 'Jindal'],
  ['Anil', 'Mittal'], ['Seema', 'Goyal'], ['Pankaj', 'Sharma'], ['Ritu', 'Bajaj'], ['Vinod', 'Tyagi'],
  ['Usha', 'Sinha'], ['Harish', 'Nair'], ['Lakshmi', 'Reddy'], ['Sameer', 'Khan'], ['Divya', 'Patel'],
  ['Rohit', 'Shukla'], ['Preeti', 'Choudhary'], ['Vishal', 'Srivastava'], ['Komal', 'Chhabra'], ['Abhishek', 'Rao'],
  ['Manjeet', 'Singh'], ['Tanvi', 'Jain'], ['Rakesh', 'Bhardwaj'], ['Varsha', 'Thakur'], ['Ajay', 'Sethi'],
  ['Bhavna', 'Mahajan'], ['Sachin', 'Kaul'], ['Madhu', 'Walia'], ['Dinesh', 'Rajput'], ['Sunil', 'Chandra'],
  ['Pragya', 'Dhawan'], ['Yogesh', 'Aggarwal'], ['Asha', 'Mendez'], ['Lalit', 'Kohli'], ['Mamta', 'Bharadwaj'],
  ['Nitin', 'Grover'], ['Radha', 'Prasad'], ['Sunita', 'Bisht'], ['Mohit', 'Vashisht'], ['Anita', 'Lohia'],
  ['Sanjay', 'Dang'], ['Prabha', 'Menon'], ['Rohan', 'Kashyap'], ['Jyoti', 'Deshpande'], ['Ramesh', 'Iyer'],
  ['Neelam', 'Bose'], ['Harsh', 'Bedi'], ['Shilpa', 'Gulati'], ['Tarun', 'Wadhwa'], ['Kiran', 'Ahuja'],
  ['Mukesh', 'Ojha'], ['Pallavi', 'Sood'], ['Sumit', 'Kakkar'], ['Renu', 'Trehan'], ['Atul', 'Nanda'],
  ['Ankita', 'Sachdeva'], ['Bharat', 'Puri'], ['Shalini', 'Madan'], ['Rajat', 'Bakshi'], ['Anupama', 'Bala'],
  ['Jatin', 'Dhar'], ['Monika', 'Vij'], ['Karan', 'Mohan'], ['Richa', 'Chadha'], ['Vikas', 'Kalra'],
  ['Sonia', 'Oberoi'], ['Gaurav', 'Chawla'], ['Namrata', 'Luthra'], ['Puneet', 'Wali'], ['Nidhi', 'Suri'],
  ['Kunal', 'Narang'], ['Sapna', 'Bhalla'], ['Arvind', 'Duggal'], ['Manisha', 'Tandon'], ['Hemant', 'Saini'],
  ['Payal', 'Sawhney'], ['Vinay', 'Chandok'], ['Jyoti', 'Uppal'], ['Ramesh', 'Bhatt'], ['Reema', 'Narayan'],
  ['Himanshu', 'Bhasin'], ['Charu', 'Mehra'], ['Gopal', 'Tuli'], ['Nitya', 'Saigal'], ['Dev', 'Kaushal'],
  ['Archana', 'Bindra'], ['Siddharth', 'Vohra'], ['Roopa', 'Chawla'], ['Prakash', 'Sahni'], ['Suman', 'Rajan'],
  ['Gagan', 'Rai'], ['Aarti', 'Peshwa'], ['Ishwar', 'Dev'], ['Vandana', 'Malhotra'], ['Yash', 'Prakash'],
  ['Sneha', 'Bajwa'], ['Rajeev', 'Talwar'], ['Arti', 'Bhandari'], ['Mrinal', 'Kanwar'], ['Anshul', 'Kohli']
];

const citiesWithTypes = [
  { city: 'Noida', area: 'Sector 150', type: 'Residential Flat' },
  { city: 'Noida', area: 'Sector 137', type: 'Luxury Villa' },
  { city: 'Noida Extension', area: 'Gaur City', type: 'Residential Flat' },
  { city: 'Greater Noida', area: 'Pari Chowk', type: 'Residential Plot' },
  { city: 'Greater Noida', area: 'Alpha II', type: 'Residential Plot' },
  { city: 'Greater Noida West', area: 'Sector 16C', type: 'Residential Flat' },
  { city: 'Greater Noida West', area: 'Gaur City 2', type: 'Residential Flat' },
  { city: 'Ghaziabad', area: 'Indirapuram', type: 'Luxury Villa' },
  { city: 'Ghaziabad', area: 'Ahinsa Khand', type: 'Residential Flat' },
  { city: 'Ghaziabad', area: 'Raj Nagar Ext.', type: 'Residential Plot' },
  { city: 'Jewar', area: 'Yamuna Expressway', type: 'Residential Plot' },
  { city: 'Jewar', area: 'YEIDA Sector 22D', type: 'Residential Plot' },
  { city: 'Jewar', area: 'Film City Zone', type: 'Farmhouse' },
  { city: 'Yamuna Expressway', area: 'Sector 18', type: 'Farmhouse' },
  { city: 'Greater Noida', area: 'Omega', type: 'Farmhouse' }
];

const feedbacks = [
  'Bought a 200 sq-yd YEIDA plot near Jewar Airport through NCR Dream Homes. Registry was completed in just 15 days — zero hassle. Ashok ji and team are truly professional. Recommend to anyone looking near the airport.',
  'Absolutely delighted with our 3 BHK in Gaur City. NCR Dream Homes negotiated a great price and even helped with the HDFC home loan. Possession was exactly on time.',
  'I was very skeptical about buying land online, but the NCR Dream Homes team personally drove me for the site visit. Bought my farmhouse on Yamuna Expressway — best decision!',
  'Smooth, transparent, and honest dealing. Got my 4 BHK villa in Indirapuram at 8% below market rate. Legal documentation was handled end-to-end.',
  'Trustworthy team! They showed me 6 different plots in Greater Noida before I picked the one in Alpha II. No pressure, all verified options.',
  'We\'ve been looking for a farmhouse for 2 years. NCR Dream Homes matched us with a beautiful 1-acre plot on Yamuna Expressway near Film City. So happy!',
  'Loan approval from SBI was fast-tracked thanks to their tie-ups. Moved into our Sector 150 flat within 45 days of booking. 5 stars.',
  'Buying a plot near Jewar Airport was the best investment I ever made. Value has already gone up 40% in 18 months!',
  'Professional service. Knowledgeable team. The lady who handled our case — Anjali — was extremely patient and answered every question.',
  'Honest pricing. No hidden charges. Our builder quoted ₹78L, but NCR Dream Homes got us the same flat at ₹72L. Thank you!',
  'Post-sale support is amazing. Even 6 months after possession, they helped us with property tax registration.',
  'Authority-approved plot with clear title. Registered within days. Best experience compared to 3 other dealers I contacted.',
  'The mega Noida International Airport is going to change everything. Glad I invested with NCR Dream Homes at the right time.',
  'Got a 2 BHK for my parents in Noida Extension. Affordable yet luxurious. The society has all amenities my parents wanted.',
  'The team at NCR Dream Homes is a cut above the rest. Trustworthy and transparent. Would highly recommend to NRI investors like me.',
  'We bought a ready-to-move villa in Ghaziabad. No last-minute surprises. Exactly as promised. Thanks Ashok ji and team.',
  'Excellent property consultation. They understood my budget and preferences perfectly. Found my dream home in just 2 weekends.',
  'Site visit was very well organized. Company car picked us up, guided tour, detailed Q&A. Booked on the spot!',
  'Invested in a 500 sq-yd plot on Yamuna Expressway. The team handled everything — mutation, registry, khatauni. Worry-free.',
  'Best decision to go with NCR Dream Homes over other brokers. No back-and-forth, no misinformation. Straight to the point.',
  'Luxurious villa in Indirapuram within our budget. Even helped us design the interiors through their partner firm. Very helpful!',
  'NRI buyer here. Did everything remotely — video site visits, e-sign, power of attorney. Registry was smooth. Highly recommend.',
  'Found a beautiful farmhouse plot in Jewar through NCR Dream Homes. Legal check was done within a week. No title issues at all.',
  'Good communication. Even on Sundays, they responded on WhatsApp within minutes. Real estate deserves this level of service!',
  'Picked a 3 BHK in Sector 150. Amenities, location, and price — all perfect. Love the society. Thank you NCR Dream Homes!',
  'The ROI projections they gave me for Jewar Airport plots turned out to be accurate. Trust their market knowledge.',
  'Very impressed with the 5-step process. Shared requirement, got curated list, visited, finalized, and registered. All within 3 weeks.',
  'Farmhouse land was just what we wanted — 1000 sq-yd in a gated community with swimming pool ready. Perfect weekend retreat!',
  'Price negotiation was brilliant. We saved ₹5 lakhs on our ₹75L flat. That\'s pure value added by NCR Dream Homes.',
  'Kudos to the legal team. They spotted a minor issue in the builder document and got it corrected before registry. Saved us from future trouble.',
  'Smooth buying experience. From shortlisting to possession, everything was seamless. Customer service is top-notch.',
  'Invested in YEIDA plot near Film City. Clear title, authority approved, loan approved. What more could I ask for?',
  'Bought 4 BHK apartment in Ahinsa Khand. Society is premium, amenities are world-class. NCR Dream Homes made it happen.',
  'Very responsive team. WhatsApp replies in under 5 mins. Calls are always attended. Makes a huge difference.',
  'Young couple here. Got our first home in Greater Noida West with just 10% down payment. Loan approved in 7 days!',
  'Genuine listings. Every property shown was exactly as described. No bait-and-switch tactics like other brokers.',
  'Bought farmhouse land in Yamuna Expressway region. Already started building. Team also recommended good architects.',
  'Registry was done in just 10 working days! They had all the paperwork ready. Efficient and well-organized.',
  'Huge thanks for helping us find a retirement home in Indirapuram. Close to hospitals, parks, and the metro. Perfect!',
  'Bought my first investment plot in Greater Noida. Happy with appreciation — already up 25% in 14 months.',
  'Excellent end-to-end service. Legal, loan, documentation, registry — all under one roof. Very convenient.',
  'Transparent dealings. Showed us authority documents, builder track record, RERA status — everything upfront.',
  'Got 3 BHK in Sector 137 with great Yamuna Expressway views. Loan processed in a week. Possession in 60 days.',
  'Farmhouse plot on Yamuna Expressway — my dream come true. Will use it as weekend home for the family.',
  'Very experienced team. They shared market insights I hadn\'t even considered. Made me a smarter investor.',
  'Bought 5 BHK villa in Indirapuram. The whole family loves it. Thank you NCR Dream Homes for the dream home!',
  'Got a 2 BHK in Noida Extension. Perfect starter home. Monthly EMI fits our budget comfortably.',
  'Impressed with the after-sale service. They followed up 6 months later to see if we needed anything. Rare!',
  'YEIDA plot purchase was smooth. Authority documents were in order. Registered in 12 days.',
  'Luxury apartment in Gaur City. Lovely amenities. Close to metro and markets. Very happy with the choice.'
];

// Build 120 reviews
const reviewsList = [];
for (let i = 0; i < 120; i++) {
  const [first, last] = names[i % names.length];
  const ct = citiesWithTypes[i % citiesWithTypes.length];
  const fb = feedbacks[i % feedbacks.length];
  const rating = i % 20 === 0 ? 4 : 5; // ~5% four-star, rest five-star
  const month = Math.floor(i / 10) % 12 + 1;
  const day = (i % 28) + 1;
  const year = 2024 + Math.floor(i / 60);
  reviewsList.push({
    id: i + 1,
    name: `${first} ${last}`,
    initial: first[0] + last[0],
    city: ct.city,
    area: ct.area,
    propertyType: ct.type,
    rating,
    date: `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}`,
    verified: true,
    feedback: fb,
    avatarGradient: gradients[i % gradients.length]
  });
}

export const reviewsData = reviewsList;

// Stats
export const reviewsStats = {
  total: reviewsData.length,
  average: 4.95,
  fiveStar: reviewsData.filter(r => r.rating === 5).length,
  fourStar: reviewsData.filter(r => r.rating === 4).length,
  threeStar: 0,
  twoStar: 0,
  oneStar: 0
};

export const reviewsFilterOptions = {
  cities: ['All', 'Noida', 'Noida Extension', 'Greater Noida', 'Greater Noida West', 'Ghaziabad', 'Jewar', 'Yamuna Expressway'],
  types: ['All', 'Residential Plot', 'Residential Flat', 'Luxury Villa', 'Farmhouse']
};
