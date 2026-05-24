import { Linkedin, Mail, Phone, MessageCircle } from "lucide-react";

export function getIconComponent(iconName: string, className = "h-5 w-5") {
  switch (iconName) {
    case "whatsapp":
      return <MessageCircle className={className} />;
    case "linkedin":
      return <Linkedin className={className} />;
    case "mail":
      return <Mail className={className} />;
    case "phone":
      return <Phone className={className} />;
    case "instagram":
      return (
        <div className={`flex items-center justify-center ${className}`}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </div>
      );
    default:
      return null;
  }
}
