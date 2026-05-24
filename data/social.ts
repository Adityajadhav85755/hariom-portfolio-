export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/__hariom_10_/?hl=en",
    icon: "instagram",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    url: "https://wa.me/919967623254",
    icon: "whatsapp",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://linkedin.com/in/hariom-upadhyay",
    icon: "linkedin",
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:hariomup231@gmail.com",
    icon: "mail",
  },
  {
    id: "phone",
    name: "Phone",
    url: "tel:+919967623254",
    icon: "phone",
  },
];
