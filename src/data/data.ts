import pic_1 from "./pictures/pic_1.jpg"
import pic_2 from "./pictures/pic_2.jpg"
import pic_3 from "./pictures/pic_3.jpg"
import pic_4 from "./pictures/pic_4.jpg"
import pic_5 from "./pictures/pic_5.jpg"
import pic_6 from "./pictures/pic_6.jpg"
import pic_7 from "./pictures/pic_7.jpg"
import pic_8 from "./pictures/pic_8.png"

import { queryToken } from "../Startpage/Searchbar/Searchbar"

export interface dataElem {
  label: string
  value: string
}

export interface linkGroup {
  title: string
  links: dataElem[]
}

export const links: linkGroup[] = [                               /* Hier werden die verschiedenen Reiter definiert ein block = ein balken auf der webseite*/
  {
    title: "Classics",
    links: [
      {
        label: "./youtube",
        value: "https://youtube.com/",
      },
      {
        label: "./reddit",
        value: "https://reddit.com/",
      },
      {
        label: "./instagram",
        value: "https://instagram.com/",
      },
      {
        label: "./monkeytype",
        value: "https://monkeytype.com/",
      },
      {
        label: "./deepl",
        value: "https://www.deepl.com/en"
      },
      {
        label: "./amazon",
        value: "https://amazon.de",
      },
      {
        label: "./prime_gaming",
        value: "https://luna.amazon.de/claims/home",
      },
      {
        label: "./humble_bundle",
        value: "https://www.humblebundle.com/membership/home?hmb_campaign=25-11-04_choice_sitewide_banner&hmb_medium=banner"
      },
    ],
  },
  {
    title: "System",
    links: [
      {
        label: "./mother_nature",
        value: "https://192.168.2.81:5001/#/signin",
      },
      {
        label: "./synology_insight",
        value: "https://insight.synology.com/login?error=login_required&error_description=The%20Authorization%20Server%20requires%20End-User%20authentication.%20Prompt%20%27none%27%20was%20requested,%20but%20no%20existing%20login%20session%20was%20found.&state=kpfszaavtetraszsqrntcpni",
      },
      {
        label: "./tailscale",
        value: "https://login.tailscale.com/admin/machines?refreshed=true",
      },
      {
        label: "./aur",
        value: "https://aur.archlinux.org/",
      },
      {
        label: "./flathub",
        value: "https://flathub.org/",
      },
      {
        label: "./github",
        value: "https://github.com/",
      },
      {
        label: "./archive.org",
        value: "https://archive.org/",
      }
    ],
  },
  {
    title: "Design",
    links: [
      {
        label: "./alpha_coders",
        value: "https://alphacoders.com/",
      },
      {
        label: "./unsplash",
        value: "https://unsplash.com/",
      },
      {
        label: "./wallpaper_flare",
        value: "https://www.wallpaperflare.com/",
      },
      {
        label: "./deviant_art",
        value: "https://www.deviantart.com/",
      },
      {
        label: "./ai_image_enlarger",
        value: "https://bigjpg.com/en",
      },
    ],
  },
  {
    title: "Music",
    links: [
      {
        label: "./jellyfin",
        value: "http://192.168.2.81:8096/web/#/home",
      },
      {
        label: "./musicbrainz",
        value: "https://musicbrainz.org/",
      },
      {
        label: "./discogs",
        value: "https://www.discogs.com/",
      },
      {
        label: "./bandcamp",
        value: "https://bandcamp.com/dazen95/feed",
      },
      {
        label: "./youtube",
        value: "https://www.youtube.com/",
      },
      {
        label: "./soundcloud",
        value: "https://soundcloud.com/discover",
      },
      {
        label: "./spotify/to/youtube",
        value: "https://spotifyreleaselist.netlify.app/",
      },
    ],
  },
  {
    title: "Raindrop.io",
    links: [
      {
        label: "./linux",
        value: "https://app.raindrop.io/my/51979736",
      },
      {
        label: "./customization",
        value: "https://app.raindrop.io/my/52155503",
      },
      {
        label: "./server",
        value: "https://app.raindrop.io/my/53305784",
      },
      {
        label: "./coden",
        value: "https://app.raindrop.io/my/53032181",
      },
      {
        label: "./music/to/download",
        value: "https://app.raindrop.io/my/52101006",
      },
    ],
  },
]

export const images: dataElem[] = [                                             /* ENDE der Blöcke */
  { label: "pic_1", value: pic_1 },
  { label: "pic_2", value: pic_2 },
  { label: "pic_3", value: pic_3 },
  { label: "pic_4", value: pic_4 },
  { label: "pic_5", value: pic_5 },
  { label: "pic_6", value: pic_6 },
  { label: "pic_7", value: pic_7 },
  { label: "pic_8", value: pic_8 },
]

export const searchEngines: dataElem[] = [
  {
    label: "DuckDuckGo",
    value: `https://duckduckgo.com/?q=${queryToken}`,
  },
  {
    label: "Google",
    value: `https://www.google.com/search?q=${queryToken}`,
  },
  {
    label: "Qwant",
    value: `https://qwant.com/?q=${queryToken}`,
  },
  {
    label: "Ecosia",
    value: `https://ecosia.org/search/?q=${queryToken}`,
  },
]

export type FastForwards = Record<string, string>

export interface Search {
  engine: string
  fastForward: FastForwards
}

export const searchSettings: Search = {
  engine: searchEngines[0]?.value ?? "",
  fastForward: {
    deepl: "https://deepl.com/",
    maps: "https://google.de/maps/",
    reddit: "https://reddit.com/",
    github: "https://github.com/",
    gitlab: "https://gitlab.com/",
    youtube: "https://youtube.com/",
  },
}

export interface colorsType {
  [key: string]: string
  "--bg-color": string
  "--default-color": string
  "--accent-color": string
  "--accent-color2": string
}

export interface Theme {
  name: string
  colors: colorsType
  image: string
}

export const themes: Theme[] = [
  {
    name: "Gruvbox Material",                                             /* Hier habe ich mein eigenes Gruvbox TTheme reingebaut*/
    image: pic_8,                                                         /*Viele Themes werden definiert, aber wie ich sie schnell ändere kp */
    colors: {
      "--bg-color": "#312c28",
      "--default-color": "#ddc7a1",
      "--accent-color": "#e78a4e",
      "--accent-color2": "#a9b665",
    },
  },
  {
    name: "DeathAndMilk",
    image: pic_1,
    colors: {
      "--bg-color": "#2E2E2E",
      "--default-color": "#E6E6E6",
      "--accent-color": "#FFB4E6",
      "--accent-color2": "#B4FFE6",
    },
  },
  {
    name: "Pop!OS",
    image:
      "https://oswallpapers.com/wp-content/uploads/2019/04/kate-hazen-unleash-your-robot.jpg",
    colors: {
      "--bg-color": "#333136",
      "--default-color": "#2BC5EB",
      "--accent-color": "#FCD307",
      "--accent-color2": "#2BC5EB",
    },
  },
  {
    name: "Dark Souls",
    image:
      "https://i.pinimg.com/originals/16/74/db/1674dbae45cd38f3d3b4c00dc8616bd7.gif",
    colors: {
      "--bg-color": "#32323C",
      "--default-color": "#A0A08C",
      "--accent-color": "#9A6650",
      "--accent-color2": "#461E28",
    },
  },
  {
    name: "S.E.Lain",
    image:
      "https://64.media.tumblr.com/54a945edd2641e20859d6f6537cd7423/tumblr_pwa4bogz4N1qze3hdo2_r1_500.gifv",
    colors: {
      "--bg-color": "#0a1a25",
      "--default-color": "#a6b7ab",
      "--accent-color": "#94656b",
      "--accent-color2": "#57182e",
    },
  },
  {
    name: "Kitties",
    image:
      "https://64.media.tumblr.com/5a232d5c0999d02388d78e5c1025f94f/0572516693bf4014-3d/s500x750/0306dc89b657093529aa3ce96e64b9c43572e901.gifv",
    colors: {
      "--bg-color": "#495662",
      "--default-color": "#d1f1fa",
      "--accent-color": "#80aad4",
      "--accent-color2": "#e8a9b7",
    },
  },
  {
    name: "pretty chill",
    image:
      "https://e4p7c9i3.stackpathcdn.com/wp-content/uploads/2019/05/tumblr_oymsnbT0111vjxiz1o1_1280.gif?iv=165",
    colors: {
      "--bg-color": "#397d76",
      "--default-color": "#f1daba",
      "--accent-color": "#c5bdb5",
      "--accent-color2": "#93a662",
    },
  },
  {
    name: "Tartarus",
    image:
      "https://64.media.tumblr.com/8de9e4d31a132f7617ecc05e6a0f8807/tumblr_nd048m6QFH1tqptlzo1_500.gifv",
    colors: {
      "--bg-color": "#282828",
      "--default-color": "#D4BE98",
      "--accent-color": "#7DAEA3",
      "--accent-color2": "#A9B665",
    },
  },
  {
    name: "Pastel Aesthetic",
    image: "https://i.imgur.com/bZHurZn.jpeg",
    colors: {
      "--bg-color": "#2E2E2E",
      "--default-color": "#F3C9CB",
      "--accent-color": "#6D79BF",
      "--accent-color2": "#FBECEF",
    },
  },
  {
    name: "Bohemian",
    image: "https://i.imgur.com/gcZ6fmk.jpeg",
    colors: {
      "--bg-color": "#2E2E2E",
      "--default-color": "#D6B29A",
      "--accent-color": "#B35000",
      "--accent-color2": "#FBECEF",
    },
  },
  {
    name: "Modern Boho",
    image: "https://i.imgur.com/HkEcwGl.jpeg",
    colors: {
      "--bg-color": "#2E2E2E",
      "--default-color": "#C66B3C",
      "--accent-color": "#F6BC7C",
      "--accent-color2": "#54573C",
    },
  },
  {
    name: "Gruvbox Inspired Green",
    image: "https://i.imgur.com/ISjs7cg.jpeg",
    colors: {
      "--bg-color": "#2E2E2E",
      "--default-color": "#CC9A52",
      "--accent-color": "#647D44",
      "--accent-color2": "#FCE4B4",
    },
  },
  {
    name: "Beach",
    image: "https://i.imgur.com/gcW1jul.jpeg",
    colors: {
      "--bg-color": "#2E2E2E",
      "--default-color": "#E3C9BC",
      "--accent-color": "#91C6CC",
      "--accent-color2": "#F0F8FA",
    },
  },
]
