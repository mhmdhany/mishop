import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneSharpIcon from "@mui/icons-material/PhoneSharp";
import PersonIcon from "@mui/icons-material/Person";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import styles from "../components/Modules/styles.module.css";
import ImgOne from '../assets/img-01.jpg'
import ImgTwo from '../assets/img-02.jpg'
import ImgThree from '../assets/img-03.jpg'
import ImgFour from '../assets/img-04.jpg'
import SeasonOne from '../assets/season-img1.jpg'
import SeasonTwo from '../assets/season-img2.jpg'
import SeasonThree from '../assets/season-img3.jpg'



// Social Links
export const SocialIcons = [
  {
    id: 1,
    icon: TwitterIcon,
  },
  {
    id: 2,

    icon: InstagramIcon,
  },
  {
    id: 3,
    icon: AllInclusiveIcon,
  },
  {
    id: 4,
    icon: PinterestIcon,
  },
];

// Useful Links
export const UsefulLinks = [
  {
    id: 1,
    icon: ArrowForwardIosIcon,
    title: "Home",
  },
  {
    id: 2,
    icon: ArrowForwardIosIcon,
    title: "About us",
  },
  {
    id: 3,
    icon: ArrowForwardIosIcon,
    title: "Shop",
  },
  {
    id: 4,
    icon: ArrowForwardIosIcon,
    title: "Contact us",
  },
  {
    id: 5,
    icon: ArrowForwardIosIcon,
    title: "Privacy Policy",
  },
  {
    id: 6,
    icon: ArrowForwardIosIcon,
    title: "Terms Condition",
  },
];

// Footer Information
export const Information = [
  {
    id: 1,
    icon: ArrowForwardIosIcon,
    title: "Look Book",
  },
  {
    id: 2,
    icon: ArrowForwardIosIcon,
    title: "Information",
  },
  {
    id: 3,
    icon: ArrowForwardIosIcon,
    title: "Instagram Wall",
  },
  {
    id: 4,
    icon: ArrowForwardIosIcon,
    title: "Typography",
  },
  {
    id: 5,
    icon: ArrowForwardIosIcon,
    title: "Parallax Presentation",
  },
  {
    id: 6,
    icon: ArrowForwardIosIcon,
    title: "Modern Process",
  },
  {
    id: 7,
    icon: ArrowForwardIosIcon,
    title: "Warranty And Services",
  },
];

// Contact Information
export const ContactInfo = [
  {
    id: 1,
    icon: LocationOnIcon,
    context: "1635 Franklin Street Montgomery, Near Sherwood Mall. AL 36104",
  },
  {
    id: 2,
    icon: EmailIcon,
    context: "support@mishop.com",
  },
  {
    id: 3,
    icon: PhoneSharpIcon,
    context: "126-632-2345",
  },
];

// Checkout Data
export const CheckoutData = [
  {
    id: 1,
    title: "First name *",
    type: "text",
    placeHolder: "Alice",
  },
  {
    id: 2,
    title: "Last name *",
    type: "text",
    placeHolder: "Nader",
  },
  {
    id: 3,
    title: "Company name (optional)",
    type: "text",
    placeHolder: "mishop",
  },
  {
    id: 4,
    title: "Country",
    type: "text",
    placeHolder: "United States",
  },
  {
    id: 5,
    title: "Street address *",
    type: "text",
    placeHolder: "4402 Worthington Drive",
  },
  {
    id: 6,
    title: "Town / City *",
    type: "text",
    placeHolder: "Cairo",
  },
  {
    id: 7,
    title: "Postcode / ZIP *",
    type: "number",
    placeHolder: "361046",
  },
  {
    id: 8,
    title: "Phone *",
    type: "number",
    placeHolder: "5685486123",
  },
  {
    id: 9,
    title: "Email address",
    type: "email",
    placeHolder: "support@mishop.com",
  },
];

// Latest Posts Data
export const LatestPostData = [
  {
    id: 1,
    img: ImgOne,
    firstIcon: PersonIcon,
    sndIcon: FolderOpenIcon,
    titleone: "mishop",
    titleTwo: "fashion",
    headTitle: "Blog Post With Image",
    context:
      "I truly believe Augustine’s words are true and if you look at history you...",
    read: " Read More...",
  },
  {
    id: 2,
    img: ImgTwo,
    firstIcon: PersonIcon,
    sndIcon: FolderOpenIcon,
    titleone: "mishop",
    titleTwo: "clothing",
    headTitle: "Blog Post With Image",
    context:
      "I truly believe Augustine’s words are true and if you look at history you...",
    read: " Read More...",
  },
  {
    id: 3,
    img: ImgThree,
    firstIcon: PersonIcon,
    sndIcon: FolderOpenIcon,
    titleone: "mishop",
    titleTwo: "Fashion",
    headTitle: "Blog Post With Image",
    context:
      "I truly believe Augustine’s words are true and if you look at history you...",
    read: " Read More...",
  },
  {
    id: 4,
    img: ImgFour,
    firstIcon: PersonIcon,
    sndIcon: FolderOpenIcon,
    titleone: "mishop",
    titleTwo: "clothing",
    headTitle: "Blog Post With Image",
    context:
      "I truly believe Augustine’s words are true and if you look at history you...",
    read: " Read More...",
  },
];

// Article Data
export const ArticleData = [
  {
    id: 1,
    img: SeasonOne,
    title: "Women’s",
    titleColor: "text-white",
    titleStyle: `${styles["border-space"]} ${styles["border-space-light"]}`,
  },
  {
    id: 2,
    img: SeasonTwo,
    title: "Kids",
    titleColor: "text-black",
    titleStyle: `${styles["border-space"]}`,
  },
  {
    id: 3,
    img: SeasonThree,
    title: "Men",
    titleColor: "text-black",
    titleStyle: `${styles["border-space"]}`,
  },
];

// Filter Categories Names
export const FilterCategories = [
  {
    id: 1,
    fetchName: "men's clothing",
    title: "Men",
  },
  {
    id: 2,
    fetchName: "women's clothing",
    title: "Women",
  },
  {
    id: 3,
    fetchName: "jewelery",
    title: "Jewelery",
  },
  {
    id: 4,
    fetchName: "electronics",
    title: "Electronics",
  },
];
