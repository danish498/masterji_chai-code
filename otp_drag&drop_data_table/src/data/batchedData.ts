interface Course {
  image: string;
  title: string;
  price: string;
  startDate?: string;
  endDate?: string;
  validityExpiry: string;
  type?: "Mock test" | "Course";
  status?: "Published" | "Unpublished";
}

import image1 from "@/assets/image-1.png";
import image2 from "@/assets/image-2.png";
import image3 from "@/assets/image-3.png";
import image4 from "@/assets/image-4.png";
import image5 from "@/assets/image-5.png";

const data: Omit<Course, "image">[] = [
  {
    title: "SQL Basics To Advanced Mastery Course",
    price: "₹ 0",
    startDate: "13 Jul 2024",
    endDate: "12 Aug 2024",
    validityExpiry: "180 days",
    type: "Mock test",
    status: "Published",
  },
  {
    title: "30 Days Of Javascript Challenge",
    startDate: "13 Jul 2024",
    endDate: "12 Aug 2024",
    price: "₹ 0",
    validityExpiry: "33 days",
    status: "Unpublished",
  },
  {
    title: "Interview Preparation With Javascript 2.0",
    startDate: "02 Aug 2024",
    endDate: "15 Sep 2024",
    price: "₹ 10,000",
    validityExpiry: "365 days",
    status: "Published",
  },
  {
    title: "Python for Data Science",
    startDate: "01 Aug 2024",
    endDate: "31 Aug 2024",
    price: "₹ 5,000",
    validityExpiry: "365 days",
    status: "Published",
  },
  {
    title: "React Development Bootcamp",
    startDate: "05 Sep 2024",
    endDate: "05 Dec 2024",
    price: "₹ 8,000",
    validityExpiry: "180 days",
    status: "Published",
  },
  {
    title: "Machine Learning with Python",
    startDate: "15 Oct 2024",
    endDate: "15 Dec 2024",
    price: "₹ 12,000",
    validityExpiry: "90 days",
    status: "Unpublished",
  },
  {
    title: "Advanced CSS Techniques",
    startDate: "01 Nov 2024",
    endDate: "30 Nov 2024",
    price: "₹ 3,000",
    validityExpiry: "60 days",
    status: "Published",
  },
  {
    title: "Java Programming Fundamentals",
    startDate: "10 Sep 2024",
    endDate: "10 Oct 2024",
    price: "₹ 7,000",
    validityExpiry: "120 days",
    status: "Published",
  },
  {
    title: "Web Development with HTML, CSS & JavaScript",
    startDate: "20 Aug 2024",
    endDate: "20 Oct 2024",
    price: "₹ 9,000",
    validityExpiry: "365 days",
    status: "Unpublished",
  },
  {
    title: "Data Structures and Algorithms",
    startDate: "01 Sep 2024",
    endDate: "30 Sep 2024",
    price: "₹ 4,500",
    validityExpiry: "180 days",
    status: "Published",
  },
  {
    title: "Full-Stack Development with MERN",
    startDate: "01 Dec 2024",
    endDate: "31 Dec 2024",
    price: "₹ 11,000",
    validityExpiry: "365 days",
    status: "Published",
  },
  {
    title: "Introduction to Cybersecurity",
    startDate: "05 Oct 2024",
    endDate: "05 Nov 2024",
    price: "₹ 6,000",
    validityExpiry: "90 days",
    status: "Unpublished",
  },
  {
    title: "Cloud Computing with AWS",
    startDate: "10 Nov 2024",
    endDate: "10 Dec 2024",
    price: "₹ 13,000",
    validityExpiry: "180 days",
    status: "Published",
  },
  {
    title: "Mobile App Development with Flutter",
    startDate: "15 Dec 2024",
    endDate: "15 Jan 2025",
    price: "₹ 10,000",
    validityExpiry: "365 days",
    status: "Unpublished",
  },
  {
    title: "Blockchain Development",
    startDate: "01 Feb 2025",
    endDate: "28 Feb 2025",
    price: "₹ 15,000",
    validityExpiry: "90 days",
    status: "Published",
  },
  {
    title: "Artificial Intelligence Basics",
    startDate: "20 Jan 2025",
    endDate: "20 Feb 2025",
    price: "₹ 8,000",
    validityExpiry: "180 days",
    status: "Published",
  },
  {
    title: "UX/UI Design Principles",
    startDate: "10 Mar 2025",
    endDate: "10 Apr 2025",
    price: "₹ 5,500",
    validityExpiry: "60 days",
    status: "Published",
  },
  {
    title: "DevOps with Kubernetes",
    startDate: "01 Apr 2025",
    endDate: "01 May 2025",
    price: "₹ 9,500",
    validityExpiry: "365 days",
    status: "Unpublished",
  },
  {
    title: "Big Data Analytics with Hadoop",
    startDate: "15 Mar 2025",
    endDate: "15 Apr 2025",
    price: "₹ 14,000",
    validityExpiry: "90 days",
    status: "Published",
  },
  {
    title: "Introduction to Internet of Things",
    startDate: "20 May 2025",
    endDate: "20 Jun 2025",
    price: "₹ 7,500",
    validityExpiry: "180 days",
    status: "Unpublished",
  },
  {
    title: "Deep Learning with TensorFlow",
    startDate: "01 Jun 2025",
    endDate: "01 Jul 2025",
    price: "₹ 12,500",
    validityExpiry: "365 days",
    status: "Published",
  },
  {
    title: "Data Visualization with D3.js",
    startDate: "10 Jun 2025",
    endDate: "10 Jul 2025",
    price: "₹ 6,000",
    validityExpiry: "120 days",
    status: "Published",
  },
  {
    title: "Game Development with Unity",
    startDate: "01 Jul 2025",
    endDate: "01 Aug 2025",
    price: "₹ 9,000",
    validityExpiry: "365 days",
    status: "Published",
  },
];

const images: string[] = [image1, image2, image3, image4, image5];

// Add random image to each course
const CourseData: Course[] = data.map((course) => ({
  ...course,
  image: images[Math.floor(Math.random() * images.length)],
}));

export default CourseData;
