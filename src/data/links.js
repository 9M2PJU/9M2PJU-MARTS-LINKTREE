import {
    Instagram,
    Facebook,
    Linkedin,
    Globe,
    MessageCircle,
    Mail,
    Radio,
    BookOpen,
    FileText,
    Users,
    Search,
    Video,
    Database
} from 'lucide-react';

export const profile = {
    name: "MARTS",
    description: "National Amateur Radio Society of Malaysia",
    tagline: "Connect • Communicate • Serve",
    image: "/marts-logo.png",
};

export const socials = [
    { icon: Facebook, url: "https://www.facebook.com/profile.php?id=61561482712448", label: "Facebook Page" },
    { icon: Facebook, url: "https://www.facebook.com/groups/MARTS.MALAYSIA", label: "Facebook Group" },
    { icon: Instagram, url: "https://www.instagram.com/marts.my/", label: "Instagram" },
    { icon: Video, url: "https://www.tiktok.com/@marts.malaysia.25", label: "TikTok" }, // Lucide doesn't have TikTok, using Video as placeholder or will use SVG custom
];

export const links = [
    {
        title: "Panduan Lesen Radio Amatur Malaysia (MCMC)",
        url: "https://getlicensed.tiiny.site",
        icon: BookOpen,
        description: "Guide to obtaining an Amateur Radio License"
    },
    {
        title: "Ask me, MARTS AI Chatbot",
        url: "https://gemini.google.com/gem/1jspyiOPZ1mh-RPOcW0OH9X-rsWMPpMcO?usp=sharing",
        icon: MessageCircle,
        featured: true
    },
    {
        title: "MARTS Website",
        url: "https://marts.org.my/ver2/",
        icon: Globe
    },
    {
        title: "MARTS Membership Portal",
        url: "https://ahli.marts.org.my/",
        icon: Users
    },
    {
        title: "MARTS Membership Renewal",
        url: "https://renew.marts.org.my",
        icon: Users
    },
    {
        title: "Register New Membership",
        url: "https://register.marts.org.my/",
        icon: Users
    },
    {
        title: "Update Member Details",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSeLdNCOb7h1YPemJEZeKUb2djNv3vza7sXy4xyo1shHM2t5fg/viewform",
        icon: FileText
    },
    {
        title: "MY-Callbook Directory",
        url: "https://callbook.hamradio.my",
        icon: Search
    },
    {
        title: "Check Callsign Availability",
        url: "https://xlx.lucifernet.com/dashboard/pgs/checkcallsign.php",
        icon: Search
    },
    {
        title: "Repeater List (West Malaysia)",
        url: "https://marts.org.my/ver2/repeaters/west-malaysia/",
        icon: Radio
    },
    {
        title: "MARTS HF WebSDR",
        url: "http://eshail.marts.org.my:8072/",
        icon: Radio
    },
    {
        title: "WhatsApp to MARTS",
        url: "http://marts.wasap.my",
        icon: MessageCircle
    },
    {
        title: "Email Secretary",
        url: "mailto:secretary@marts.org.my",
        icon: Mail
    },
    {
        title: "MDECC Facebook",
        url: "https://www.facebook.com/mdecc_marts",
        icon: Facebook
    },
    {
        title: "MDECC Linktree",
        url: "http://linktr.ee/mdecc",
        icon: Globe
    },
    {
        title: "MCMC AA Holder Registers",
        url: "https://www.mcmc.gov.my/en/legal/registers/register-of-apparatus-assignments-search?type=AARadio",
        icon: Database
    },
    {
        title: "MCMC Amateur Radio Info",
        url: "https://www.mcmc.gov.my/en/amateur-radio-operator-certification",
        icon: BookOpen
    },
    {
        title: "MCMC Exam Schedule",
        url: "https://sems.mcmc.gov.my/sems/contents/examschedule",
        icon: FileText
    },
    {
        title: "MCMC eSPECTRA Guide",
        url: "https://drive.google.com/drive/folders/1lBHoKa_K2PNBN9yT6az0khHCzmNgq4C9?usp=drive_link",
        icon: FileText
    },
    {
        title: "General Spectrum FAQ",
        url: "https://mcmc.gov.my/en/spectrum/faq/spectrum-use/general",
        icon: BookOpen
    },
    {
        title: "Malaysia Band Plan (2017)",
        url: "https://www.mcmc.gov.my/skmmgovmy/media/General/pdf/Spectrum-Plan-2017i.pdf",
        icon: FileText
    }
];
