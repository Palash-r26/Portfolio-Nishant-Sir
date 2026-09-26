/**
 * VERIFIED PROFILE CONTENT
 * Source: the MITS Gwalior faculty profile details supplied by the site owner.
 * TODO: Add verified profile URLs, courses, students, grants, news, CV, and headshot when available.
 */
export const profile = {
  name: "Dr. Nishant Jain",
  initials: "NJ",
  title: "Assistant Professor",
  department: "Department of Computer Science and Design",
  university: "Madhav Institute of Technology & Science, Gwalior",
  tagline: "Developing explainable, rigorous ensemble-learning methods for classification and regression.",
  shortBio:
    "Dr. Nishant Jain is a computer scientist and educator whose work focuses on explainable ensemble machine learning and tree-based ensemble algorithms. He earned his Ph.D. in Computer Science and Engineering from IIT (ISM) Dhanbad, where his research addressed advanced ensemble methods for classification and regression and the explainability of black-box models.",
  email: "nishantjain@mitsgwalior.in",
  phone: "+91 70005 25970",
  address: "Madhav Institute of Technology & Science, Gola ka Mandir, Gwalior 474005, Madhya Pradesh, India",
};

export const stats = [
  { value: "Ph.D.", label: "IIT (ISM) Dhanbad" },
  { value: "5×", label: "GATE qualified" },
  { value: "3", label: "Journal articles" },
  { value: "3", label: "Conference papers" },
];

export const education = [
  { degree: "Ph.D. in Computer Science & Engineering", institution: "Indian Institute of Technology (ISM), Dhanbad", note: "Research in tree-based ensemble algorithms and explainable machine learning", year: "Doctorate" },
  { degree: "M.Tech. in Computer Science & IT", institution: "School of Computer Science & IT, Devi Ahilya Vishwavidyalaya, Indore", note: "Awarded First Division with Distinction", year: "Postgraduate" },
  { degree: "B.E. in Computer Science & Engineering", institution: "Oriental Institute of Science & Technology, Bhopal", note: "Awarded First Division with Distinction · Govt. of MP Merit-based Fee Waiver", year: "Undergraduate" },
];

export const qualifications = [
  {
    degree: "Doctor of Philosophy (Ph.D.) in CSE",
    institution: "IIT (ISM) Dhanbad",
    badge: "Doctorate",
    icon: "GraduationCap",
    details: "Specialized in Explainable Machine Learning (XAI) and Tree-based Ensemble Algorithms. Formulated novel LRF & XRRF methods.",
    highlight: "Recipient of prestigious MHRD Doctoral Fellowship",
  },
  {
    degree: "GATE Qualified in 5 Consecutive Years",
    institution: "National Benchmark Examination (IITs & IISc)",
    badge: "5× All-India Benchmark",
    icon: "Award",
    details: "Qualified the Graduate Aptitude Test in Engineering (GATE CSE) across 5 consecutive attempts (2013, 2014, 2015, 2016, 2017).",
    highlight: "Sustained high national ranking in Computer Science",
  },
  {
    degree: "M.Tech. in Computer Science & IT",
    institution: "Devi Ahilya Vishwavidyalaya, Indore",
    badge: "First Division with Distinction",
    icon: "BookOpen",
    details: "Advanced postgraduate specialization in algorithmic foundations, computation, and intelligence.",
    highlight: "Graduated with highest institutional academic honors",
  },
  {
    degree: "B.E. in Computer Science & Engineering",
    institution: "OIST Bhopal",
    badge: "First Division with Distinction",
    icon: "Code",
    details: "Foundational engineering training in computer systems, data structures, and computational theory.",
    highlight: "Awarded Government Merit Fee Waiver for outstanding rank",
  },
];

export const experience = [
  { period: "Jul 2024 - Present", role: "Assistant Professor", institution: "Madhav Institute of Technology & Science, Gwalior" },
  { period: "Jan 2023 - Jun 2024", role: "Assistant Professor", institution: "Department of Computer Science & Engineering, Manipal University Jaipur" },
  { period: "Aug 2017 - Jan 2023", role: "Teaching Assistant", institution: "Department of Computer Science & Engineering, IIT (ISM) Dhanbad" },
];

export const researchAreas = [
  { number: "01", title: "Explainable Ensemble Learning", description: "Methods that make the predictions of black-box ensemble models more transparent and interpretable." },
  { number: "02", title: "Tree-based Ensemble Algorithms", description: "New random-forest variants for reliable classification and regression across complex datasets." },
  { number: "03", title: "Applied Machine Learning", description: "Data-driven approaches to practical problems including employee churn, fake-news detection, and health prediction." },
];

export type Publication = {
  year: number;
  type: "Journal" | "Conference" | "Under Review";
  authors: string;
  title: string;
  venue: string;
  doi?: string;
  featured?: boolean;
};

export const publications: Publication[] = [
  { year: 2022, type: "Journal", authors: "Nishant Jain and Prasanta K. Jana", title: "LRF: A logically randomized forest algorithm for classification and regression problems", venue: "Expert Systems with Applications, 213(C), 119225", doi: "https://doi.org/10.1016/j.eswa.2022.119225", featured: true },
  { year: 2022, type: "Journal", authors: "Nishant Jain and Prasanta K. Jana", title: "XRRF: An eXplainable Reasonably Randomised Forest algorithm for classification and regression problems", venue: "Information Sciences, 613, 139–160", doi: "https://doi.org/10.1016/j.ins.2022.09.040", featured: true },
  { year: 2021, type: "Journal", authors: "Nishant Jain, Abhinav Tomar, and Prasanta K. Jana", title: "A novel scheme for employee churn problem using multi-attribute decision making approach and machine learning", venue: "Journal of Intelligent Information Systems, 56, 279–302", doi: "https://doi.org/10.1007/s10844-020-00614-9", featured: true },
  { year: 2024, type: "Conference", authors: "Kanav Gupta, Chirag Paul, and Nishant Jain", title: "Early Autism Spectrum Disorder Prediction using Fine-Tuned Bernoulli’s Naive Bayes Algorithm", venue: "International Conference on Computation of Artificial Intelligence & Machine Learning (ICCAIML), Springer" },
  { year: 2023, type: "Conference", authors: "Nishant Jain and Shipra Shukla", title: "SHAPRFs: SHapely Additive eXplanations based Random Forests algorithm for classification problems", venue: "International Conference on Frontiers in Computing and Systems (COMSYS), Springer" },
  { year: 2018, type: "Conference", authors: "Nishant Jain, Abhinav Tomar, and Prasanta K. Jana", title: "Novel Framework for Performance Prediction of Small and Medium Scale Enterprises: A Machine Learning Approach", venue: "IEEE ICACCI, 42–47", doi: "https://doi.org/10.1109/ICACCI.2018.8554747" },
  { year: 2024, type: "Under Review", authors: "Nishant Jain and Prasanta K. Jana", title: "DeRF: A Diversity-enriched Random Forest Algorithm", venue: "IEEE Transactions on Neural Networks and Learning Systems" },
  { year: 2024, type: "Under Review", authors: "Mayank Kumar Jain, Dinesh Gopalani, Yogesh Kumar Meena, and Nishant Jain", title: "Implementation of a Novel Divide and Conquer approach-based Fake News Detector for News Sources", venue: "Neural Computing and Applications" },
];

export const recognition = [
  { year: "Ph.D.", title: "MHRD Doctoral Fellowship", organization: "IIT (ISM) Dhanbad", kind: "Fellowship" },
  { year: "2013–17", title: "Graduate Aptitude Test in Engineering", organization: "Qualified in 2013, 2014, 2015, 2016, and 2017", kind: "Qualification" },
  { year: "B.E.", title: "Merit-based Fee Waiver", organization: "Government of Madhya Pradesh", kind: "Recognition" },
];

export const development = [
  { year: "2023", title: "AI Evolution: From Foundations to Generative AI", organization: "Microsoft, SAP, AICTE · Tech Saksham" },
  { year: "2023", title: "Recent Industry Trends and Technology in Cloud Computing", organization: "Manipal University Jaipur and MUJ-TEC" },
  { year: "2020", title: "Statistics and Artificial Intelligence for Data Science", organization: "Indian Statistical Institute, Kolkata" },
  { year: "2018", title: "Recent Trends in Machine Learning and Soft Computing", organization: "NIT Durgapur · TEQIP-III" },
  { year: "2018", title: "Multi-objective Optimization Using Metaheuristics", organization: "IIT Kanpur · GIAN" },
  { year: "2017", title: "Coding Theory and Cryptography", organization: "IIT (ISM) Dhanbad" },
];