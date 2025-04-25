export const Urls = {
    SeoImg: "/logos/seo.webp",
    LogoImg: "/logos/AstroShark.svg",
};

export const Soc = {
    CodeHariK: "@codeharik",
    HariKrishnan: "Hari Krishnan",

    JobTitle: "Code Developer",
    SeoTitle: "Hari Krishnan : Code Developer",
    SeoDescription: "Coding, Witch Craft and Dark Magic",

    SharkRun: "https://shark.run",
    Linkedin: "https://www.linkedin.com/in/codeharik",
    Google: "https://g.dev/codeharik",
    Twitter: "https://www.twitter.com/codeharik",
    Github: "https://www.github.com/codeharik",
    Blog: "https://blog.shark.run",
    HashNode: "https://hashnode.com/@CodeHariK",
    Discord: "https://discord.gg/2SECQVJj",
};

export const StructuredSchema = JSON.stringify({
    "@context": "http://schema.org",
    "@type": "Person",
    name: Soc.HariKrishnan,
    jobTitle: Soc.JobTitle,
    url: Soc.SharkRun,
    sameAs: [
        Soc.Linkedin,
        Soc.Twitter,
        Soc.HashNode,
        Soc.Blog,
        Soc.Github,
        Soc.Google,
    ],
});
