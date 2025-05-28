export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  hoverColor: string;
}

export const socialLinks: SocialLink[] = [
  {
    platform: "Instagram",
    url: "https://www.instagram.com/magnifiko.officiel/",
    icon: "RiInstagramFill",
    hoverColor: "hover:text-[#e1306c]",
  },
  {
    platform: "Facebook",
    url: "https://www.facebook.com/share/12KvdWaqLtC/",
    icon: "RiFacebookCircleFill",
    hoverColor: "hover:text-[#4267B2]",
  },
  {
    platform: "TikTok",
    url: "https://www.tiktok.com/@magnifikoofficiel",
    icon: "RiTiktokFill",
    hoverColor: "hover:text-red-500",
  },
]; 