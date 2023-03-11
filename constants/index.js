import {
  BsFilm,
  BsStar,
  BsCalendar2Event,
  BsCompass,
  BsEmojiLaughing,
  BsCameraReels,
  BsMagic,
  BsHeart,
} from "react-icons/bs";
import { TbAccessPoint, TbSwords } from "react-icons/tb";
import { GiPunch, GiPistolGun, GiDrippingKnife } from "react-icons/gi";
import { GoGistSecret } from "react-icons/go";
import { RiMickeyLine, RiTimeLine, RiGhostLine } from "react-icons/ri";
import { FaRegSadCry, FaHatCowboy } from "react-icons/fa";
import {
  MdOutlineFamilyRestroom,
  MdOutlineScience,
  MdOutlineMonitor,
} from "react-icons/md";
import { IoMusicalNoteOutline } from "react-icons/io5";

const categories = [
  {
    id: "now_playing",
    title: "Now Playing",
    icon: <TbAccessPoint />,
  },
  {
    id: "popular",
    title: "Popular",
    icon: <BsFilm />,
  },
  {
    id: "top_rated",
    title: "Top Rating",
    icon: <BsStar />,
  },
  {
    id: "upcoming",
    title: "Upcoming",
    icon: <BsCalendar2Event />,
  },
];

const genres = [
  {
    id: 28,
    title: "Action",
    icon: <GiPunch />,
  },
  {
    id: 12,
    title: "Adventure",
    icon: <BsCompass />,
  },
  {
    id: 16,
    title: "Animation",
    icon: <RiMickeyLine />,
  },
  {
    id: 35,
    title: "Comedy",
    icon: <BsEmojiLaughing />,
  },
  {
    id: 80,
    title: "Crime",
    icon: <GiPistolGun />,
  },
  {
    id: 99,
    title: "Documentary",
    icon: <BsCameraReels />,
  },
  {
    id: 18,
    title: "Drama",
    icon: <FaRegSadCry />,
  },
  {
    id: 10751,
    title: "Family",
    icon: <MdOutlineFamilyRestroom />,
  },
  {
    id: 14,
    title: "Fantasy",
    icon: <BsMagic />,
  },
  {
    id: 36,
    title: "History",
    icon: <RiTimeLine />,
  },
  {
    id: 27,
    title: "horor",
    icon: <RiGhostLine />,
  },
  {
    id: 10402,
    title: "Music",
    icon: <IoMusicalNoteOutline />,
  },
  {
    id: 9648,
    title: "Mystery",
    icon: <GoGistSecret />,
  },
  {
    id: 10749,
    title: "Romance",
    icon: <BsHeart />,
  },
  {
    id: 878,
    title: "Science Fiction",
    icon: <MdOutlineScience />,
  },
  {
    id: 10770,
    title: "TV Movie",
    icon: <MdOutlineMonitor />,
  },
  {
    id: 53,
    title: "Thriller",
    icon: <GiDrippingKnife />,
  },
  {
    id: 10752,
    title: "War",
    icon: <TbSwords />,
  },
  {
    id: 37,
    title: "Western",
    icon: <FaHatCowboy />,
  },
];

export { categories, genres };
