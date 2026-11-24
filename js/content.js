/* =====================================================================
   ACE CONSULTING GROUP: SITE CONTENT
   This is the only file you need to edit for routine updates.

   ADD A TEAM MEMBER: copy one { ... } line in TEAM, change the details,
   and put their photo in img/team/ named firstname-lastname.webp
   (for a .jpg, write the photo name with .jpg on the end).
   group must be "md", "director" or "associate".
   program and year: e.g. program: "Accounting and Financial Management", year: "2nd year".
   linkedin: full profile URL. Leave any of these "" to hide it.

   ADD AN ALUMNI STORY: copy one { ... } block in STORIES and put it at the
   top. slug is the web address (lowercase, hyphens). Each paragraph of the
   post is its own "..." line in body. banner is optional (an image in img/).
   position is the author's role when they wrote it.
   ===================================================================== */

const SITE = {
  email: "info@aceconsultinggroup.ca",
  clientForm: "https://docs.google.com/forms/d/e/1FAIpQLSeB7t0jvC7NAgVkutJ2HfMzA49WUPlTo-IqkXVQ68EIAkku1Q/viewform",
  storyForm: "", // paste the alumni story Google Form link here once it exists
  linkedin: "https://www.linkedin.com/company/aceconsultinggroup/",
  instagram: "https://www.instagram.com/aceconsultinggroup/",
  facebook: "https://www.facebook.com/uwaceconsulting/",
  founded: 2009,
  alumniCount: 114,
  clientsCount: "100+"
};

const TEAM = [
  { name: "Aarya Desai",          group: "md",        program: "Sustainability and Financial Management", year: "3rd year", linkedin: "https://www.linkedin.com/in/aaryadesai11", photo: "aarya-desai" },
  { name: "Arista Sehgal",        group: "md",        program: "Accounting and Financial Management", year: "3rd year", linkedin: "https://www.linkedin.com/in/aristasehgal", photo: "arista-sehgal" },
  { name: "Emily Mak",            group: "md",        program: "Sustainability and Financial Management", year: "3rd year", linkedin: "https://www.linkedin.com/in/e-mak", photo: "emily-mak" },
  { name: "Shrisha Gupta",        group: "md",        program: "Accounting and Financial Management", year: "3rd year", linkedin: "https://www.linkedin.com/in/shrisha-gupta", photo: "shrisha-gupta" },
  { name: "Sivaja Sivakaran",     group: "md",        program: "Accounting and Financial Management", year: "3rd year", linkedin: "https://www.linkedin.com/in/sivaja-sivakaran", photo: "sivaja-sivakaran" },

  { name: "Casper Chensee-Wang",  group: "director",  program: "Accounting and Financial Management", year: "2nd year", linkedin: "https://www.linkedin.com/in/casper-chensee-wang", photo: "casper-chensee-wang" },
  { name: "Dhiren Motwani",       group: "director",  program: "Accounting and Financial Management", year: "2nd year", linkedin: "https://www.linkedin.com/in/motwanid/", photo: "dhiren-motwani" },
  { name: "Muhammad Ali Mamdani", group: "director",  program: "Computing and Financial Management", year: "2nd year", linkedin: "https://www.linkedin.com/in/muhammadalimamdani/", photo: "muhammad-ali-mamdani" },
  { name: "Sana Hamidzada",       group: "director",  program: "Accounting and Financial Management", year: "2nd year", linkedin: "https://www.linkedin.com/in/sana-hamidzada", photo: "sana-hamidzada" },

  { name: "Darren Yip",           group: "associate", program: "Accounting and Financial Management", year: "1st year", linkedin: "https://www.linkedin.com/in/darren-yip-finance/", photo: "darren-yip" },
  { name: "Faran Ahmad",          group: "associate", program: "Accounting and Financial Management", year: "1st year", linkedin: "https://www.linkedin.com/in/faran-a-ahmad/", photo: "faran-ahmad" },
  { name: "Jackson Vaughan",      group: "associate", program: "Accounting and Financial Management", year: "2nd year", linkedin: "https://www.linkedin.com/in/jacksonvaughan07/", photo: "jackson-vaughan" },
  { name: "Lily MacDonald",       group: "associate", program: "Accounting and Financial Management", year: "1st year", linkedin: "https://www.linkedin.com/in/lily-macdonald7", photo: "lily-macdonald" },
  { name: "Louis Zhao",           group: "associate", program: "Accounting and Financial Management", year: "1st year", linkedin: "https://www.linkedin.com/in/louiszhao-/", photo: "louis-zhao" },
  { name: "Michael Koch",         group: "associate", program: "Sustainability and Financial Management", year: "1st year", linkedin: "https://www.linkedin.com/in/michaelkoch68", photo: "michael-koch" },
  { name: "Nihal Bhangu",         group: "associate", program: "Sustainability and Financial Management", year: "1st year", linkedin: "https://www.linkedin.com/in/nihalbhangu/", photo: "nihal-bhangu" },
  { name: "Sonali Patel",         group: "associate", program: "Accounting and Financial Management", year: "1st year", linkedin: "https://www.linkedin.com/in/sonalic-patel-/", photo: "sonali-patel" }
];

/* Newest first. In body, a line starting with "## " becomes a heading (the interview question);
   every other line is a paragraph. Web addresses become links automatically. */
const STORIES = [
  {
    "slug": "nicole-tam",
    "title": "Breaking Into Product Management",
    "author": "Nicole Tam",
    "date": "2023-07-09",
    "tags": [
      "Product",
      "Careers"
    ],
    "banner": "story-nicole-tam.webp",
    "teaser": "Why product sense and execution are the skills to build, and how upper-year mentors and a math degree led her to product management.",
    "position": "Product Manager at Lyft",
    "education": "Bachelor’s degree in Honours Mathematics at the University of Waterloo (Computing Minor and Business Specialization)",
    "aceRoles": [
      "Associate (2017-2018)",
      "Executive/Sr Director (2018-2019)"
    ],
    "body": [
      "## How has being a part of ACE impacted your professional life and/or career trajectory?",
      "ACE had a big influence on my professional life. While I gained a lot of technical knowledge from client work and learned a lot about start-up culture, the most valuable lessons I learned were about building a network and having confidence in everything that I do. ACE taught me the importance of mentorship and branching out. As a first and second year student, I didn’t feel like I knew much about the career options that were available to me. By having honest conversations with upper year mentors, I was able to discover a path for myself and grew my network which eventually led me to pursuing a career in product management. These mentors taught me what I never would have learned in my courses at school. ACE also gave me the confidence to be honest with what I wanted my career trajectory to look like, and to go for it. I was given opportunities on ACE that I never would have thought I was qualified for - leading projects, pitching to startups, and running local events. Without having this initial exposure early on in my career, I would not have had the confidence to make big bets on myself.",
      "## What is your favourite ACE-related memory?",
      "Definitely all the socials! I loved getting to know all the ACE members on a more personal level. To this day, I’m proud to call some of them my best friends. There isn’t a specific get-together that sticks out (although Christmas is always fun because of Secret Santa!) but I’m glad I took time out of my schedule to hang out. Building those interpersonal connections is so impactful and I know that even if I reach out to any of them today for anything, they would not hesitate to reply and help me. I really appreciated the effort that all of the upper years put in to organize and encourage us to go to the socials. Looking back, I felt that at times I could have prioritized school work instead of a social, but if you ask me now what I remember about my university days, it’s definitely not the extra hours I put into studying for a midterm.",
      "## How has your math background helped you when working in the fields of business, consulting and product management?",
      "Most people assume that math is a very theoretical field and doesn’t have much application, but I have found that my math background has been crucial towards succeeding in my field. As a math major, you’re constantly being introduced to new ideas and being asked to prove theories. To succeed, you have to pick things up quickly and build logical thinking skills. This translated directly in all my co-ops. In consulting, the ability to quickly ramp up and structure your thoughts is a big part of the role. As I transitioned into product management, I found that the key to solving product-centric problems relies on my ability to come up with a logical way to break down a larger problem into smaller, bite sized chunks which we can eventually tackle. As a recently graduated full-time product manager, I find myself relying on my structured way of thinking to be able to present problems more clearly and methodically find solutions. These fields (consulting, business, product management) also tend to get chaotic at times - by nature, there are a lot of moving parts in the day-to-day. Having good fundamentals such as structured and logical thinking are useful as you grow in your career.",
      "## What advice do you have for someone looking to break into the field of product management - what are the key skills involved, and how can one develop them?",
      "Having gone through the product management recruitment process and early career stages, I can shed some light on some early stage PM skills that could be useful. While every product role may look a little different, the broader skills to focus on are product sense and execution.",
      "Product sense is typically an evaluation of someone’s ability to solve a problem. Some skills to develop here would include critical thinking, creativity, and structured problem solving. Execution is an evaluation on someone’s ability to successfully deliver a product. This would include having a good understanding of the metrics that drive a product, the ability to build a tactical roadmap of what needs to be done to build this product, and potential risks and mitigations (just to name a few). Product sense can be built by doing case studies. This will build familiarity with open ended problems and how to narrow it down to more specific and tangible issues.",
      "Execution skills can be difficult to build without having experience - while there are execution focused case studies, there can be a lot of things to think about. For early career PMs, I would encourage taking the time to execute on projects even within a small team - whether this is a school group project, a project at a hackathon, or even just a totally unrelated side project. There’s no 1 way to break into product management, and I find that many PMs have varying backgrounds. A diverse set of experiences is helpful to set you apart from others, so just make it work for you!"
    ]
  },
  {
    "slug": "jacqueline-sue",
    "title": "Innovate, Inspire and Impact",
    "author": "Jacqueline Sue",
    "date": "2023-05-26",
    "tags": [
      "Entrepreneurship",
      "Finance"
    ],
    "banner": "story-jacqueline-sue.webp",
    "teaser": "Building finance and HR from scratch at a fast-growing company, and why founders should prove there's a real need before they launch.",
    "position": "Director of Finance at Palette Skills; Co-Founder, Head of Finance and Operations at &Vision",
    "education": "Bachelor’s degree in Accounting and Financial Management at the University of Waterloo (minor in Human Resources Management), Master’s degree in Accounting at the University of Waterloo, Chartered Professional Accountant (CPA) Designation",
    "aceRoles": [
      "Associate (2014-2015)",
      "Managing Director (2015-2016)",
      "President (2016-2017)",
      "Board of Directors (2017-2018)"
    ],
    "body": [
      "## What were the top three highlights of your student life at the University of Waterloo?",
      "Aside from ACE…",
      "Hack the North: I was the Director of Finance for 2 years (4B and MAcc). This was one of the very few moments where I had a chance to work with people outside of my faculty and immerse myself in thinking differently. Although I did learn a lot of finance-related tools and processes that are relevant to my work today, prior to this experience, I had never planned an event to this scale (2,000+ people) and with such international impact. This organization and its people taught me it was possible to “make it easy for anyone to dream big”, especially when you set aside the barrier of costs (we raised funding so that we can make the event free for students!). It also enabled me to get out of my comfort zone and work with cross functional teams such as logistics, marketing, front end, and back end.",
      "UW Student Venture Fund: I was a part of the founding team of the Student Venture Fund in 2017. It was an incredible experience where we not only learned about the world of venture capital, but also challenged ourselves to build the foundation of an organization from scratch. This includes syllabus creation with our professors, logo design, and investment thesis formation. It really helped me in discovering my love for starting things from scratch and building a pretty kick-ass team to implement it.",
      "## What is your favourite ACE-related memory?",
      "It’s a collection of moments, but overall it boiled down to celebrating wins and special days with each other. For instance, we would purchase a birthday cake and celebrate whose birthday was taking place in that month. As well, at the end of each in person meeting, we would each fill out a piece of paper to give a kudo out to a team member who did something great that week. For instance, “Kudos to Annu for securing a high profile client this week!” or “Kudos to Jenny for helping to organize the team social!”. Little did we know that all of these pieces of paper that had accumulated over the months were then organized by team members and sent to us personally around the Holiday season as part of our holiday “Thank You” card. There’s just something about receiving handwritten notes that made this such a memorable experience. Needless to say, the first time we received it as first year ACE students, lots of happy tears were shed and an important lesson in always recognizing efforts of those around you and celebrating wins even when times can get stressful was seen.",
      "## Would you be able to tell us more about Palette Skills and your current role? Can you describe the most rewarding and/or challenging parts of your role?",
      "I am currently the Director of Finance of Palette Skills where I lead all things finance + people and culture. Palette Skills is a leader in developing employer-led upskilling programs that result in high demand jobs in growing industries.",
      "Most rewarding part of my role: The most rewarding part of my role is being able to leverage my expertise in finance and HR to help make impactful decisions within the company. For instance, as we scaled from 10 to 50 people in 2 years, we had to make a decision on how we could attract, retain, and recruit top talent for our team. This involved doing an overhaul and restructuring of our compensation benefits. For instance, we asked ourselves questions like what is a competitive salary band, what do people value, and how did COVID-19 fundamentally impact how people viewed work from home. Given how this would impact finance, my team and I were able to come up with recommendations to our board that took into account the human element of compensation while balancing it with our financial constraints and budget.",
      "Most challenging parts of my role: As the first finance and HR hire (back when our company was less than 10 people), the most challenging part of my role was to build two departments that had both a strong foundation and could be scalable. I entered into my role in Day 1 with a finance system that lacked process and controls and a non-existent HR department. Being the only designated and trained person in these two departments required a lot of creativity and rolling up of sleeves to help set the foundation. This required many hours, days, and weeks spent networking with professionals who’ve had success with scaling, attending conferences, and eventually hiring a team under both departments to support me. I am glad to say that after two years of trial and error, we were able to scale operations from $X,XXX,XXX to $XXX,XXX,XXX, build out a team from 10 to 50 individuals, and receive accreditation as a Great Place to Work.",
      "## What inspired you to start &Vision? What is some advice you would give to new entrepreneurs?",
      "I grew up with a family of immigrant parents and am eternally grateful for the value and work ethic they had instilled in me at a young age. As a first generation Canadian, I realized early on that hard work and studying, while objectively can bring in some level of success, was not the only thing that mattered as we continued to enter into adolescence. There were, “rules of the road”, such as how to finance tuition, how to apply for a job, or navigating university applications that my parents simply could not support me on because they did not have any lived experiences. In doing more research with my co-founders, Annu and Jeff, we realized that this experience, particularly in the world of business, was prevalent not only from our eyes, but systemically as well. One high school business teacher we had spoken to in our early days had even shared that the Ontario high school business curriculum has not been updated since 2006. And guess what? Since 2006, we’ve seen at least two financial downturns, an emergence of tech, and the changing of how we conduct business internationally. But none of this is captured in the curriculum of our young people - heck, they are still learning what pagers are in their worn out textbooks.",
      "Some advice I would give to entrepreneurs before launching a venture is to (1) Understand if there is a need in the market and (2) Whether you have product-market-fit and a unique value proposition.",
      "For (1) Before launching &Vision, we had conducted a comprehensive survey where we solicited feedback from teachers, students (high school and post secondary), and graduates. We asked questions such as how confident they were to choose an education in business, what courses they were taking, and whether &Vision can help service any of their needs. Not shocking to us, we had overwhelming feedback on the need for accessible information as it came to business, education, how to apply for schools, etc which validated (2). We did round off with a pretty comprehensive competitor analysis on what initiatives or organizations catered to the need we identified and pitched it to several NPO executives. Needless to say, we found our fit and to this day have partnered with incredible organizations such as Shad Canada and Kiwanis to deliver on our accessible programming."
    ]
  },
  {
    "slug": "joey-qin",
    "title": "Creating Your Own Path",
    "author": "Joey Qin",
    "date": "2023-01-16",
    "tags": [
      "Consulting",
      "Accounting"
    ],
    "banner": "story-joey-qin.webp",
    "teaser": "Trying consulting before finishing CPA hours, and why there's no single right path through co-op.",
    "position": "Senior Consultant at EY",
    "education": "Bachelor’s degree in Mathematics at the University of Waterloo (Computer Science Minor), Master’s degree in Accounting at the University of Waterloo, Chartered Professional Accountant (CPA) Designation",
    "aceRoles": [
      "Associate (2014-2015)",
      "Executive/Sr Director (2015-2016)",
      "Board of Directors (2016-2017)"
    ],
    "body": [
      "## What were the top three highlights of your student life at the University of Waterloo?",
      "Well I am biased and I have to say ACE was one of the highlights. I guess back then, ACE was quite different from what it is now. I think we were a lot more focused on bookkeeping and accounting rather than consulting and helping businesses improve. Still, it was nice to connect with startups around KW and learn about their business, see what entrepreneurs go through, and explore what cool ideas are out there. It was also great giving them a hand in helping to run the core business aspects. ACE also offered great mentorship as the mentors were previously in our shoes – they always gave us tips, advice and resources to use, which helped us progress through the years. The friendships I made at ACE lasted throughout my university experience, and to this day, I am still very good friends with them. I am very fortunate and glad that I was a part of ACE.",
      "A second point on what was enjoyable at Waterloo was the co-op experience, where many followed the traditional path of accounting of going to a Big 4 firm, getting their hours, and fast-tracking their CPA. However, I used co-op as a learning experience to test different industries and roles to see what I enjoy or did not enjoy. I did my first two co-ops in tax and audit at a mid-size accounting firm, and the last two at an insurance company. Testing out different areas made me realize what my strengths were, what I needed to improve on, and what I could see myself doing full time. Co-op definitely led me to where I am today.",
      "The last thing I enjoyed at Waterloo was the community aspect. I loved how everyone was so close together. I lived at V1 in my first-year, and it was extremely convenient to walk a few meters to hang out with your friends. There were also many restaurants, clubs and bars around the area where you could meet new people.",
      "## How has being a part of ACE impacted your professional life and/or career trajectory?",
      "Great question! I think ACE helped me build some of my technical skills, such as bookkeeping and marketing research – these were technical skills that I was able to use later on in my co-op terms. More importantly was the soft skills I learned, such as interacting with clients, learning how to professionally communicate with them, and how to analyze and put together a deliverable. I am an introvert by nature and these opportunities were invaluable in my personal growth and transition into client-facing jobs. ACE shaped the way I looked at companies and made me realize how many different things are out there in terms of different industries and more. ACE also made me appreciate startup and tech companies, as I learned about the hardships they had to go through to get their company off the ground. In turn, that aspect led me to my consulting roles with tech and finance companies. All of these components really shaped my professional and personal journey.",
      "## What is your favourite ACE-related memory?",
      "One of my favorite memories was around my third or fourth year where we had a weekend getaway around the Collingwood area at a rented cottage. During that time, I was on the Board of Directors, so there were a lot of new and old faces. We spent the weekend playing board games, watching a lot of TV (including being forced into watching horror movies), and doing outdoor activities. That weekend was overall an amazing bonding experience, and it helped me get closer to a lot of the other ACE members.",
      "## Can you describe more about your experience being a Consulting Associate at Capco? What is one thing that you learned from this opportunity that you use in your current endeavors?",
      "Consulting is a very different path from what accountants normally take. When I thought about going into consulting, I knew it wouldn’t help me get my CPA hours, but rather be more of an alternate route to try something new and see what it was all about.",
      "Capco is a management consulting company, where they do traditional strategy consulting but also digital and technology transformation, which is what makes it stand out in the industry in comparison to other management consulting firms. I was fortunate enough to undergo many different projects at Capco, focusing more on strategy projects. For example, if our client was a bank, we would look at their process and identify any key points or issues they may have. Then, based on that, we would create a future-state idea, where we would make recommendations on how they can automate manual tasks and achieve cost savings. Ultimately, we would present that deliverable to the client or stakeholder.",
      "I also had the chance to experience some unique and rewarding projects. One of my first projects at Capco was related to cybersecurity – we looked at the banking industry and the capabilities that banks have if they were to get breached by a cyberattack. We assessed where gaps existed and what needed to be done. Since it was my first project, I was assigned to do market research for the banking system and payment system. I looked into their interconnectedness and considered what would happen if a bank goes under default – for instance, can it still process payments and meet qualifications? From there, I helped put together a resiliency assessment where banks can assess their own capabilities and determine how they can improve going forward. I also assisted in creating a white paper on how cyberattacks can impact them and potential solutions to strengthen their cybersecurity, which was shared to the banking industry.",
      "In one of my last projects at Capco, I was on the product side of things, almost like an extension of the product manager for a Canadian bank. The client was trying to implement a rewards system, so we helped them write a lot of the terms and conditions, design the gift card and the package for clients, and mapped out different scenarios for clients who wanted to obtain their respective rewards. This project was also quite unique for me, as it was a great opportunity to be on the internal side of things and see how the product is developed inside-out.",
      "Overall, I am very glad that I was able to be a part of a variety of different projects at Capco, as I know several people who were stuck on one project for two years. Having these different projects helped me expand my knowledge base into different industries, such as cybersecurity and banking. It also helped with figuring out how to manage different stakeholders – while some were more difficult than others, it was a great experience to interact with various levels of stakeholders across various projects. All of these skills have been transferable to my current role, and also brought me out of my shell. I always found public speaking and presenting quite daunting, but my experience at Capco helped me work on those abilities.",
      "## What impact do you think your background in math and computer science has on the work that you do today? Do you feel that it gave you a different perspective on the accounting and finance work that you’ve done during co-op and after graduation?",
      "Of course, I’m not using calculus or anything in my work, but I think my background in math trained my logical thinking and the problem-solving aspect – for instance, how I analyze a problem, and how I find a solution for said problem. On the other hand, my background in computer science helped build a foundation for my understanding of technology, how systems work, and how data gets transferred between systems – this was really useful when I was working at Capco, since there were many instances where we needed to communicate with developers and figure out how to consolidate a data system or create one that works efficiently. Having a technical background made it a lot easier for me to get a gist of things and understand technical components.",
      "I think of accounting as a basic, core type of knowledge and skill that is integrated with other aspects to make a bigger impact. For example, previously as a Financial Analyst at The Co-operators, we looked at financial statements, but we also projected financial statements to see where the company is going in five years. Applying basic accounting skills to model and derive benefits of the future is something I find quite interesting, but even more valuable when integrated with my background in math and computer science.",
      "## We see that after graduating, you switched from working in a consulting role to a financial analyst role. Can you tell us more about what prompted that change, and how you transitioned from one position to another?",
      "When I was doing MAcc, I got the offer for consulting – with this opportunity present, I decided to put a pause on my hours for accounting and decided to try a new industry. I always knew that I was always going to come back to accounting, finish the hours, and then obtain my CPA, but I wasn’t in a rush to do so. Thus, I spent a year and ten months at Capco. During the last few months, as I was approaching the two-year mark, I started thinking about my next steps. I started to see all my friends getting their designations and letters, and that’s when I decided it was time to transition back to accounting.",
      "However, before I started applying and looking for an accounting-related position, I decided to try submitting my consulting hours to CPA to see if they would accept it or not. I submitted my hours under the strategy and governance section, since it was a little more vague and hard to achieve. Upon submitting my report was when I got my offer as a Financial Analyst at The Co-operators through a friend referral. I was then stuck in this weird position where there was a possibility my consulting hours would be approved, meaning I wouldn’t need any more hours. At the same time though, there was also a risk that it wouldn’t be approved, and this was a risk that I didn’t want to take. Thus, I took the financial analyst position and went into it thinking that I was going to complete my hours.",
      "It turns out that my consulting hours that I had submitted to CPA ended up qualifying after a few tedious back-and-forths. However, I have no regrets about pursuing the position, as it was a good change of pace with a different company and culture, and allowed me to go more into numbers and financial analysis. Compared to consulting, this was also a position where I was able to leverage my background and technical skills. As for the position itself, there were drastically different types of responsibilities – as an FA, a lot of the responsibilities are in regards to planning and budgeting, monthly analysis for variances, and explaining said variances to business partners.",
      "At the end of the day, I took a very unorthodox pathway to obtain my CPA. I do have a lot of friends who stayed at one firm the entire time in co-op, but it’s important to remember that there isn’t a right path – it’s important to determine what you want to get out of it for yourself. Do you want to explore? Do you want to fast-track? I would encourage people to try different things to learn what they like and don’t like, while expanding their knowledge through different industries and roles."
    ]
  },
  {
    "slug": "ian-weng",
    "title": "From Ideas to Reality",
    "author": "Ian Weng",
    "date": "2022-01-24",
    "tags": [
      "Entrepreneurship"
    ],
    "banner": "story-ian-weng.webp",
    "teaser": "From co-founding ACE in 2009 to Uber Eats and his own start-ups: test the problem before you build the solution.",
    "position": "Co-Founder and CEO of SPATULA Foods",
    "education": "Bachelor of Accounting and Financial Management (UW), Masters of Accounting (UW), Masters of Business Administration (INSEAD)",
    "aceRoles": [
      "Co-Founder and CEO (2009 - 2010)"
    ],
    "body": [
      "## What were the top three highlights of your student life at the University of Waterloo?",
      "Being a part of ACE was definitely one of the top highlights of my time at Waterloo. It was an amazing experience working with some of the brightest minds of the class building a new venture together from scratch. Creating something from nothing was such an exhilarating experience, and knowing that we were making a difference in the university community gave us our drive to push forward.",
      "Professionally, I really enjoyed my 4 co-op terms at KPMG. I joined the firm’s Financial Institutions Audit practice where I worked largely on assurance engagements for large banks. I found the co-op experience invaluable for my professional and academic development as it allowed me to integrate the two worlds as I walked through my 4 years in AFM. KPMG was a great place to learn, and I’m grateful for the opportunity to start my career with great people at the firm. I was able to return to the firm as a Senior after graduation, and transferred into the firm’s Advisory practice shortly after.",
      "However, I think the most important thing that I took away from Waterloo was the lifelong friendships that I built there. Whether it was my roommates or my classmates, I met some of my best friends at Waterloo. In fact, one of my roommates was the best man at my wedding. Although the university experience is about academics and career, it is also about the personal connections and relationships you develop throughout the Waterloo journey.",
      "## How has being a part of ACE impacted your professional life and/or career trajectory?",
      "ACE had a transformational impact on my career.",
      "First, it gave me the opportunity to practice both hard and soft business skill sets early on in my university career. Of course working with clients allowed me to put accounting, budgeting, and financial analysis skills learned in the classroom into practice, but what I found more important was the soft skills that I could apply during my time at ACE. This included selling to student clubs and organizations, org design as we built out ACE’s org structure, and negotiations with campus faculty on what ACE was and what role it could play within the SAF environment.",
      "Second, it set me up well for the co-op interview process as these transferable skills were what the employers were looking for.  Interviewers were fascinated by the opportunities and experiences I took on with ACE, and helped them cement in their minds that I was the right person for the role.",
      "Third, and most importantly, building ACE from scratch gave me the confidence to build new ventures later in my career. Building an organization such as ACE at Waterloo was a fantastic way to learn how to build something from nothing within the safe environment of a university. This mock-version of business-building gave me both the skills and confidence to take on new ventures several years into my career. So far, I’ve built a start-up that helps underutilized restaurants attract customers to their establishment, and am currently building SPATULA, a chef-to-consumer frozen food marketplace.",
      "## Can you tell us more about your experience as a founder/co-founder of a start-up? What advice would you give your past self or to other start-up founders, and what was the biggest lesson you learned?",
      "After 4 years at KPMG, I decided to jump into the world of tech startups. Together with my co-founders, we built an application called ChopChop, that allowed restaurants to push promotions during off-peak hours, and for customers to digitally find the best live deals around them. We joined the Founders Institute accelerator, launched our app, and acquired thousands of early users. However, we found it difficult to retain our customers, as our application wasn’t solving a big enough problem for it to be sticky. Ultimately, we had to dissolve the company because we weren’t able to find product market fit to secure external capital. My co-founders and I had an extremely rewarding experience bringing our idea into reality, and learning along the way.",
      "The most important lesson I learned was that prior to building a company, an application, or a solution, founders should do deep diligence around the problem that they are solving to validate that it is a big enough problem that needs solving. Further, founders need to spend time testing their solution and validating your solution before they spend  time and money to actually build it. This can be done through various “hacks” and experiments, and most importantly should test a customer’s actual willingness to pay for the solution they are offering.",
      "Another important lesson I learned from building ChopChop was realizing that I still had a ton to learn in order to build a successful business in the future. As such, I spent the next 4 years at Uber Eats building the Canadian business, and another year at INSEAD to ready myself for my next venture.",
      "Now that I’m back from INSEAD, I’m building my newest venture, SPATULA, and am super pumped about it! My team and I are on a mission to reinvent frozen food for US & Canada. Spending a year in France, we were amazed by the quality of gourmet frozen food in France. We think that this is a white space in the Canadian market, and we think that there’s massive potential to bring Canadians high quality gourmet frozen meals with all the convenience that comes with it. Make sure to check us out!",
      "## How did you get involved with Uber Eats Canada? Can you elaborate on your role? What was your favourite part of the job?",
      "It’s true what people say about the power of a strong network. I was referred to Uber Eats from my friend and previous AFM Learning-Living Community mentor! Uber Eats was only about a year old globally when I joined the business. There were a ton of fascinating problems to solve, and it was an amazing place to learn how to build and scale a tech driven business.",
      "I had the pleasure of working on countless interesting projects across several functions during my time at Uber - this included Courier Operations, Marketplace Operations, Cities Operations, and most recently as Head of the Strategy & Planning team. One of my favourite projects that I worked on during my time at Eats was getting the opportunity to architect, build, launch a new process that manages marketplace supply and demand during adverse weather for all of US and Canada. This project took me to our Uber offices in Ireland, Philippines, and Singapore, and I had the opportunity to work with brilliant colleagues across our global offices.",
      "In my most recent role as Head of Strategy & Planning for Canada, I lead the Strategy, Planning, Finance, and New Verticals functions of the business. This was a particularly impactful role as I got to see the business from a bird’s eye view, and make a large impact on the growth and profitability of the Canadian business.",
      "My favourite part of the job was definitely the people I got to work with Uber. Everyone in the Canadian office brought so much energy and passion to their work that it was very contagious. Our teams had a builders’ and owners’ mindset, and I felt privileged to get to work with such amazing people day in and day out building a great product for Canadians."
    ]
  },
  {
    "slug": "shivam-dubey",
    "title": "Product Management and Career Change",
    "author": "Shivam Dubey",
    "date": "2021-11-29",
    "tags": [
      "Product",
      "Careers"
    ],
    "banner": "story-shivam-dubey.webp",
    "teaser": "How start-up clients pulled him off the conventional SAF path and into product management.",
    "position": "Growth Product Manager @ North One",
    "education": "Bachelor of Accounting and Financial Management, 2020",
    "aceRoles": [
      "Executive/Sr. Director (2016-2017)",
      "Managing Director (2017-2018)"
    ],
    "body": [
      "## What were the top three highlights of your student life at the University of Waterloo?",
      "In my third year, I went to Kingston with a team to compete at the Finals for Queens University's ICBC conference. We absolutely bombed, but it was a joy competing with and getting to know students from across Canada.",
      "In the same year, I became interested in non-profits. It was a world I knew nothing about. Around this time I had the chance to speak with Adnan, a UW Alumni who had started an education non-profit called EduGate with the mission of improving children's education in Latin America. I convinced him that ACE could help his non-profit. Our team ended up collaborating with EduGate on the design of a curriculum for a week-long education workshop for Nicaraguan middle schoolers.",
      "In my final year, I took AFM 417 with Frank Hayes. During that course, we got to work with DarwinAI, a Waterloo-based startup innovating on machine learning techniques. At the time, DarwinAI was looking at how it could use its ML product in different industries. As a project team, we got a chance to research different possibilities and provide the company with our recommendations.",
      "## How has being a part of ACE impacted your professional life and/or career trajectory?",
      "It's safe to say that if I hadn't joined ACE, I would've stuck to a more conventional SAF career path. It was critical in providing me with experiences that made me comfortable enough to try something different.",
      "As I was working with early-stage startup companies, I started wrestling with a set of questions. What can I as an AFM student do to help a startup? What kinds of financial advice do startups need? What does strategy even mean for a startup? The challenges these companies were facing were very different than the ones we had learned about in class. I was hooked.",
      "## Why did you want to become a Product Manager? What do you find most interesting about your work at NorthOne?",
      "For my fourth co-op term, I worked as a Market Research Analyst at a software scale-up called Think Research. At the time, the company had around 200 employees and had raised a bunch of money from VCs. The company had invested in creating multiple different software products, some of which were not performing well because they didn't have 'product-market fit'. In essence, the products that the company had poured millions of dollars into developing didn't effectively serve the needs of the target customers and was struggling to gain traction. I spent weeks sitting in on sales calls with customers where, despite having beautiful powerpoint slides and a polished sales pitch, we would consistently lose out on deals. It was a really painful process.",
      "My foray into product management started with me trying to find an antidote for this pain. I started talking more regularly to Product Managers both within and outside of Think Research, and began reading and trying to learn as much as possible about how successful companies find, maintain and expand their product-market fit.",
      "I'm still new to the profession, but my favourite part of the PM role thus far has been the blend between analytical and creative work. It allows me to work on projects with highly analytical professionals like software developers and data scientists, as well as very creative professionals like product designers and brand marketers.",
      "## What advice would you give to accounting and finance students looking to pursue career paths outside of accounting and finance?",
      "I’ve always been wary of generic advice as so much depends on context. So, take this with a grain of salt.",
      "One quote that always resonated with me is: \"We learn who we are in practice, not in theory.\" Don't spend too much time theorizing. Try lots of different things, and see what you like and are good at. Co-op jobs and school clubs are a great low-stakes way to do this.",
      "Find mentors in the domains you want to excel in. The ideal is to find people who already have a proven track record.",
      "Read more. There's a ton to learn from really smart people on the internet. I've linked a couple of my favourite 'career advice' articles below.",
      "Leave the consulting/professional services firm. Consulting is a decent place to start your career but there are real drawbacks if you stay too long. The biggest problem with consulting is those who are giving advice have no real way to tell if their advice actually works, the feedback loop is almost always broken. Another related problem is the business model. Consultants are primarily concerned with getting rehired by clients and often less so with solving real business problems (no one will pay millions for a quick fix, even if that’s the best solution). Eventually, you want to find a place where you have skin in the game.",
      "Articles on career advice:",
      "http://www.paulgraham.com/love.html",
      "https://fictivekin.github.io/pmarchive-jekyll//guide_to_career_planning_part0.html"
    ]
  },
  {
    "slug": "anna-jia",
    "title": "Making an Impact",
    "author": "Anna Jia",
    "date": "2021-08-27",
    "tags": [
      "Advisory",
      "Impact"
    ],
    "banner": "story-anna-jia.webp",
    "teaser": "Deloitte's rotational program, the entrepreneurial mindset ACE gave her, and a proposal to improve food security in Indigenous communities.",
    "position": "Financial Advisory Rotational Analyst @ Deloitte (Toronto)",
    "education": "Bachelor of Accounting and Financial Management, 2019; Masters of Accounting, 2020",
    "aceRoles": [
      "Analyst (2015-2016)",
      "Associate (2016-2017)",
      "President (2017-2018)"
    ],
    "body": [
      "## What were the top three highlights of your student life at the University of Waterloo?",
      "There are so many good memories! A few personal favorites of mine:",
      "The whole ACE team travelling to Toronto together where we hosted two separate client meetings. One project related to strategizing the program arc for a non-for-profit based in Colombia; the other, a pricing strategy for a Toronto-based health tech start-up.",
      "Pulling all-nighter with my best friends to complete the final project for AFM 341 – Accounting Information Systems.",
      "Hosting my last in-person peer support meeting with my SAF first year mentees the day the school announced closure in March of 2020.",
      "## How has being a part of ACE impacted your professional life and/or career trajectory?",
      "Two areas that made the most impact in my professional life:",
      "The people I met from ACE are some of the most driven, inspiring folks – the way they think and present themselves are a few things I try to learn and absorb.",
      "The entrepreneurial mindset has a huge impact on my own thinking. Asking the questions of: why are we doing something this way, is there a better way to do this, is there anything new that could be integrated and implemented, are a few examples of questions I ask myself all the time now in my professional role.",
      "## Can you tell us a little bit about your involvement with Deloitte’s Quick Start program? Can you describe the program and your experience in it?",
      "Quick Start program is a 2-year rotational program, where each analyst works in a variety of business groups within Financial Advisory. A few that I’ve been part of include: Forensics, Valuation and Modelling, M&A Advisory. The nice thing about being part of Quick Start is that we are a class of analysts, with dedicated program managers and leaders that support the growth of each individual. It has been great for personal growth, as I have the opportunity to work on projects and work in business lines that are aligned with my own goals. One example is that I’ve had the opportunity to see the M&A lifecycle from start to finish! This includes both the pre-deal due diligence work, the financial modelling work as part of the transaction, and the integrity due diligence and post deal integration. It’s nice to see how a deal works from a holistic view.",
      "## We saw that you developed a proposal to improve food security in Indigenous communities, and that this idea is going to be furthered through Thought For Food’s Food Systems Game Changers Lab. Can you tell us about the organization? What inspired you to get involved, and what kind of work will you be doing in the coming months?",
      "I’ve always been fascinated by the work IDEO does. For those that are not as familiar, they are a design consultancy firm, that focuses on human-centered systems design. They have an open challenge website where they post big problems, and accept any submission, proposal from people anywhere. And a recent open challenge was how to shape the food system for 2030.",
      "How I got involved with the Indigenous food systems specifically stemmed from the news on residential schools. I’ve been quite ignorant of the issue previously and started doing my own research on the Indigenous history here in Canada. During my research, I noticed that food and nutrition security is still a big issue within these communities – research shows over 40% of them do not have secure access to food. After quite a bit of research and readings into disparity between Indigenous foods and modern food, I drafted a proposal that outlined the idea of bringing vertical farming to Indigenous people, and building a sense of community along with the technology.",
      "The program is 12 weeks and right now a few of the folks and I, who are all tackling a similar issue meet together twice a week to build a joint solution. We will be participating in matchmaking events with different stakeholders, such as corporations, governments, NPOs to realize our solution. It’s very exciting and I’m learning a lot from my teammates!"
    ]
  },
  {
    "slug": "david-zhao",
    "title": "Consulting Around the World",
    "author": "David Zhao",
    "date": "2021-08-23",
    "tags": [
      "Consulting",
      "Global"
    ],
    "banner": "story-david-zhao.webp",
    "teaser": "Choosing ACE over a fast track to law school, and what working from Toronto to Dubai taught him about professional culture.",
    "position": "Consultant @ Oliver Wyman (Dubai)",
    "education": "Bachelor of Accounting and Financial Management, 2020",
    "aceRoles": [
      "Associate (2015-2016)",
      "Executive (2016-2017)",
      "President (2017-2018)"
    ],
    "body": [
      "## What were the top three highlights of your student life at the University of Waterloo?",
      "For someone starting their journey at UW, I cannot stress enough the importance of joining clubs, taking advantage of your co-ops, and doing your best to surround yourself with the right people. When I started AFM in the fall of 2015, I really didn’t know what I was doing. I had never taken an accounting or finance class before, and I was planning to finish my degree quickly and go straight to law school. Joining ACE in my first year was one of the most pivotal decisions I ever made in school (long story short, I’m not in law school), and I’ll discuss this in some more detail later on.",
      "I also really enjoyed and appreciated the co-op experience. As an indecisive person who rarely thinks many steps ahead, having the opportunity every few months to work in a new role or a new industry was incredibly insightful. I learned very early on that I liked working in a dynamic environment with constantly shifting responsibilities, and that realization helped guide me to the consulting role I’m in today. Had I not had the chance to work in 4 very different roles during my co-ops, I likely would not be so confident in my decision.",
      "Lastly, I’m thankful for all the people I’ve met during my time at UW. University is a difficult experience for everyone, and it’s very easy to feel trapped by the stress and pressure of school, exams, work, and expectations. The most important thing to remember is that no one is self-made. When you see individual successes, what you don’t see are the countless people that helped make it happen. To make the most of your potential, you need to surround yourself with the right people who will support you, and who you can support in return. I’ve been fortunate enough to meet some of the most amazing people, many who I consider lifelong friends, during my time here - and I’m incredibly grateful to have had the opportunity.",
      "## How has being a part of ACE impacted your professional life and/or career trajectory?",
      "ACE has helped me develop myself professionally in more ways than I count. On top of the typical things you’d expect to learn, working with clients, managing projects, developing technical skills etc., ACE develops you through the people you meet. When you join ACE, you join a group that truly cares about you and your growth, both professionally and personally. There’s no fluff or self-interest in the advice you hear from fellow ACE members. From day one, I received help and guidance in identifying a career track that was right for me. I had help with my CV and my co-op applications. But more important than all that, I had support with anything I needed. There’s a lot that you can do in life by yourself. You can learn all the content you need for school online and ace all your exams, but you miss out on a ton of intangible value you get from knowing the right people and gaining knowledge from their experiences. ACE helped me meet so many wonderful people, from the organization itself, the clients we worked with, and the community partners we’re affiliated with. These connections and experiences have helped me discover passions, find co-ops, and become a better version of myself. I could not be where I am today without ACE, and that’s why I will always be a big supporter of this organization.",
      "## What was your favourite city to work in, and why?",
      "I’ve been incredibly fortunate to have worked in many amazing cities. From Toronto to San Francisco, New York, and now Dubai, there is something special and magical about each place that makes comparison difficult. Perhaps it is a bit of recency bias, but my favourite as of right now would have to be Dubai. The city itself is quite a spectacle. A place founded in the desert yet with thriving neighborhoods beside beaches. A place that is so incredibly foreign to North America yet with all the comforts of home (e.g. Tim Hortons is a surprisingly plentiful and popular chain in Dubai). It’s a truly unique and interesting place to visit, but the thing I appreciate most about Dubai are the people. As Canadians, we pride ourselves on multiculturalism but we also love being Canadian. In Dubai, you are truly reminded of the diversity of the world. When everyone you meet has been in the country for less than two years, you end up with so many unique stories, ideas, and cultures that you would have never expected.",
      "More than anything else, meeting people from around the globe has reminded me of how similar the human experience truly is. I’ve met several people, including close friends now, who were in Beirut on the day of the explosion last year. When you hear about stories like that from real people who you know and relate to, suddenly the world feels like a smaller, more connected place. At the end of the day, no matter where we’re from, we’re all just individuals trying do our best and make it through the day. Dubai can sound intimidating to those of us from North America, but it’s truly a global hub of multiculturalism that will expose you to a lifetime’s worth of international experience.",
      "## What advice would you give someone who was planning to work in a foreign country?",
      "Don’t assume that being a professional is the same everywhere. We’ve come to associate the North American office culture with the way that things are done everywhere – and it’s not quite true. You’ll need to learn that working styles can be extremely different depending on who you are and where you’re from, and to not take things personally when something unexpected happens. For example, you’ll find that people in North America rely a lot on subtext. We tend to sugar coat things we say for the purpose of politeness and professionalism. You won’t always find that in other parts of the world. Many Europeans are some of the nicest people you can meet, but they won’t leave you guessing at what they’re saying. It can be a little intimidating at first, but you’ll quickly learn how to adapt to different working styles and forms of communication far beyond what we’re used to in North America.",
      "My second tip is to embrace being Canadian. It’s almost funny but eyes really do light up when people hear someone with an American accent say they’re from Canada. We’re extremely lucky that our country has such a great reputation around the world, and it will absolutely help break the ice when meeting new people.",
      "## We saw the articles that you wrote on Medium about the applications of machine learning in finance. Can you tell us about what sparked your interest in this subject, and how you are currently learning about it?",
      "I’ve personally always loved computers and have been fascinated with artificial intelligence and machine learning for a long time. When the lockdowns happened last year, I had quite a bit of free time on my hands, so I tried my best to learn as much as possible about it. I took a few courses on machine learning, read a few books, and started playing with my own algorithmic trading models. The thing with self-learning on the internet is that it’s incredible easy be lulled into a false sense of understanding on any topic. You can watch a couple videos, read a few articles, and come out feeling like an expert. I think my biggest takeaway is that there are no shortcuts. If it feels like it’s too easy – it probably is. After crashing and burning with my first few attempts of building an automated trading model, I decided that I would start taking things slow. I wrote a few articles for beginners in the perspective of what I would’ve loved to have known before I started. It’s not a particularly innovative insight, but you really do end up learning content better when you try to teach it. I’d encourage anyone who’s taking on these self-projects or self-learning experiments to try and write an educational article about it, it might help more than you think!"
    ]
  }
];

const SERVICES = [
  { id: "strategy", name: "Strategy",
    text: "Short- and long-term plans that get your product in front of as much of its market as possible. We use research and a fresh perspective to find what makes you different, then turn it into clear recommendations." },
  { id: "research", name: "Market research",
    text: "We gather and analyse information on your market so you know who your customers are, who you are competing with, and where the industry is heading." },
  { id: "operations", name: "Operational advisory",
    text: "We map how your business runs today, find the pain points, and design fixes that make you faster and more productive. Then we help you put them in place." }
];

const CASES = [
  { industry: "Biotechnology and healthcare", services: "Strategy, market research",
    challenge: "A start-up with a novel cryopreservation product needed the most profitable way to bring it to market.",
    approach: "Mapped the cryopreservation landscape, competing technologies and competitors to see where the product fit.",
    outcome: "A go-to-market strategy chosen through cost/benefit analysis, with action items and tips for implementation." },
  { industry: "Virtual reality", services: "Strategy, market research",
    challenge: "A VR company wanted new markets and revenue streams but didn't know which were viable.",
    approach: "Analysed economic drivers, growth risks, competitors and outlook in each feasible market.",
    outcome: "Short- and long-term strategies naming which segments to target, why, and how to win clients there." },
  { industry: "Not-for-profit healthcare", services: "Strategy, market research",
    challenge: "A non-profit building data systems for care providers in conflict zones needed steadier revenue.",
    approach: "Studied the health-data market, its players and segments, then use cases, risks and pricing.",
    outcome: "The segments most likely to value its data, the value proposition for each, and pricing approaches." },
  { industry: "Major League Baseball", services: "Market research",
    challenge: "A company with early MLB traction faced deep uncertainty when the pandemic suspended play.",
    approach: "Studied past stoppages, sports in countries further into reopening, and team-level financial losses.",
    outcome: "Historical, geographic and financial insight the client used to adapt and stay on track." },
  { industry: "Tech recruiting", services: "Market research, brand awareness",
    challenge: "A platform linking tech companies with STEM students wanted to know which roles and clients to pursue.",
    approach: "Researched student demand, sectors facing talent shortages, SEO keywords and peer growth tactics.",
    outcome: "Target segments for a wider range of roles, plus an SEO and social media plan." },
  { industry: "Specialty food delivery", services: "Strategy, market research",
    challenge: "A delivery service wanted to validate its market, know its competitors and grow its customer base.",
    approach: "Researched successful delivery models, ranked locations by revenue and tested new segments.",
    outcome: "The location traits most likely to succeed and specific stores to target in new segments." }
];
