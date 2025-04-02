import { createSignal, onCleanup, onMount } from "solid-js";

import Prism from "prismjs"; // Explicitly import Prism
import "prismjs/components/prism-typescript.min.js"; // Load Go syntax support
import "prismjs/plugins/line-numbers/prism-line-numbers"; // Enable line numbers
import "prismjs/plugins/line-numbers/prism-line-numbers.css"; // Line numbers style

import "../css/storybook.css"

import { SpaceLayout } from "solgaleo";

interface Social {
  icon: 'github' | 'linkedIn' | 'twitter' | 'email' | 'xing';
  link: string;
  title?: string;
}

const socials: Social[] = [{
  icon: 'github',
  link: 'https://github.com/devidevio',
  title: 'View GitHub Profile'
}, {
  icon: 'twitter',
  link: 'https://x.com/devidev_io',
  title: 'View Twitter Profile'
}, {
  icon: 'linkedIn',
  link: 'https://www.linkedin.com/in/dejan-vi',
  title: 'View LinkedIn Profile'
}, {
  icon: 'xing',
  link: 'https://www.xing.com/profile/Dejan_Vintonjiv',
  title: 'View Xing Profile'
}, {
  icon: 'email',
  link: 'mailto:hi@devidev.io',
  title: 'Send Email'
}];


function SocialIcon({ icon }: { icon: string }) {
  switch (icon) {
    case 'github':
      return (
        <svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      );
    case 'twitter':
      return (
        <svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      );
    case 'linkedIn':
      return (
        <svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect height="12" width="4" x="2" y="9"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      );
    case 'email':
      return (
        <svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      );
    case 'xing':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" x="0px" y="0px" width="28" height="28" viewBox="0 0 48 48"><path d="M15.337 14l3.159 5.054L13.284 28h-2.061l4.368-7.488.913-1.565-.96-1.537L13.413 14H15.337M15.892 11h-5.65c-.976 0-1.571 1.074-1.054 1.901L13 19l-5.812 9.963C6.661 29.866 7.313 31 8.358 31h5.501c.712 0 1.37-.378 1.728-.993l5.805-9.964c.374-.642.361-1.437-.032-2.067l-3.773-6.036C17.222 11.355 16.581 11 15.892 11L15.892 11zM36.968 7L26.367 26.571l-.787 1.453.808 1.442L32.849 41h-2.097l-7.343-13.01L34.786 7H36.968M39.551 4h-5.36c-.734 0-1.409.402-1.758 1.047l-11.925 22c-.328.605-.322 1.337.017 1.936l7.902 14C28.781 43.611 29.446 44 30.168 44h5.477c1.04 0 1.696-1.12 1.188-2.027L29.005 28 40.836 6.158C41.363 5.184 40.658 4 39.551 4L39.551 4z"></path></svg>
      );
    default:
      return null;
  }
}

function Socials() {
  return (
    <div class="flex flex-wrap gap-3 mt-6 justify-between">

      {socials.map(social =>
        <a
          href={social.link}
          target="_blank"
          title={social.title}
          rel="noopener noreferrer"
          class="flex items-center justify-center w-10 h-10 rounded-lg bg-black text-gray-100 transition-all duration-150 border border-gray-600 hover:bg-primary hover:-translate-y-0.5">
          <SocialIcon icon={social.icon} />
        </a>
      )}

    </div>
  )
}

const profile = {
  name: 'Dejan Vi.',
  title: 'Full Stack Developer',
  location: 'Munich, Germany',
  description: 'Passionate web developer focused on creating clean, efficient, and scalable web applications with a modern tech stack. Specialized in Angular, TypeScript, and Supabase, delivering responsive and intuitive user interfaces. Even my name includes "dev".'
};

function Contact() {
  return (
    <div>
      <div class="mt-6 bg-black rounded-lg p-4 border border-gray-600 text-xs">

        <div class="flex items-center mb-2">
          <span class="text-primary mr-2">$</span>
          <span class="text-gray-100">npx connect</span>
        </div>

        <div class="mt-2 text-gray-400">
          Initializing...
          <br />
          Ready to connect.
          <br />
          Waiting for contact request...
        </div>

      </div>

      <Socials />

    </div>
  )
}

function Profile() {
  return (
    <div class="flex flex-col gap-6 items-center text-center sm:items-start sm:text-left">

      <div class="flex flex-col sm:flex-row gap-4 sm:items-center">
        {/* 
        <Picture
          src={ProfilePicture}
          formats={['webp']}
          width={96}
          height={96}
          alt={'Profile picture ' + profile.name}
          title={profile.name}
          class=""
        /> */}

        <img class="w-24 h-24 rounded-xl object-cover border-2 border-primary mx-auto sm:mx-0"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJxo2NFiYcR35GzCk5T3nxA7rGlSsXvIfJwg&s" />

        <div>

          <h1 class="text-2xl font-extrabold mb-1 inline-block relative text-text-primary">
            {profile.name}
          </h1>

          <p class="text-sm mb-2 text-primary">
            {profile.title}
          </p>

          <p class="flex items-center justify-center sm:justify-start text-sm text-gray-400">
            {profile.location}
          </p>

        </div>

      </div >

      <p class="text-sm leading-relaxed mt-4 text-gray-400">
        <svg class="-mt-0.5 inline mr-2" fill="none" height="14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        {profile.description}
      </p>

    </div >
  )
}

export function Blog() {


  return (


    <SpaceLayout two contentCenter title="Blog">

      <div class="flex md:flex-row flex-col w-full max-w-full md:max-w-7xl border border-gray-600 rounded-2xl overflow-hidden shadow-2xl relative bg-black mb-12 md:mb-4">

        <div class="p-8 md:p-6 flex flex-col justify-between w-full md:w-2/5 border-b md:border-b-0 md:border-r border-gray-600">

          <Profile />

          <Contact />

        </div>

        <div class="w-full md:w-4/5 p-0">

          <div class="min-h-full h-[90vh] flex flex-col overflow-y-scroll">

            <div class="tab-controls">

              <input
                type="radio"
                id="tab1"
                name="tabs"
                class="tab-radio"
                checked
              />

              <input
                type="radio"
                id="tab2"
                name="tabs"
                class="tab-radio"
              />

              <div class="flex bg-black border-b border-gray-600 sticky top-0 z-10">

                <ContentLink
                  contentId="tab1"
                  contentName="about.ts"
                />

                <ContentLink
                  contentId="tab2"
                  contentName="projects.md"
                />

              </div>

              <div class="flex-grow overflow-y-auto bg-black">

                <div id="content1" class="tab-content">
                  <Code code={goCode} lang="ts" />
                </div>

                <div id="content2" class="tab-content">
                  <ContentProjects />
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div class="fixed md:absolute bottom-0 left-0 right-0 w-full text-center bg-black py-2">
        Built with <a href="https://astro.build" title="Astro" target="_blank" class="text-primary hover:underline">Astro</a> by <a href="https://devidev.io/" target="_blank" title="devi|dev|io" class="text-primary hover:underline">devi|dev|io</a>
      </div>
    </SpaceLayout>

  )
}

interface Project {
  name: string;
  description: string;
  link: {
    url?: string;
    target?: string;
    title?: string;
    buttonLabel?: string;
  };
};

const projects: Project[] = [{
  name: 'Papersend.io',
  description: 'Papersend is the free alternative to DocSend for secure document sharing, tracking, and Data Rooms. Customize branding, control access, and protect your documents.',
  link: {
    url: 'https://papersend.io/',
  }
}, {
  name: 'Qivi.io',
  description: 'Qivi is an all-in-one application designed to streamline business operations, enhance productivity, and maximize success. Data security is a priority.',
  link: {
    url: 'https://qivi.io/'
  }
}, {
  name: 'TECHPOINT.de',
  description: 'TECHPOINT is a local IT service provider based in the Starnberg district and the Fünfseenland region, specializing in delivering reliable and modern IT solutions.',
  link: {
    url: 'https://techpoint.de/'
  }
}];

function ContentProjects() {
  return (

    <div>

      {/* <h2 class="text-2xl font-bold text-white mb-4">Latest Projects</h2> */}

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

        {projects.map(project =>

          <div class="flex flex-col justify-center items-start border border-gray-700 rounded-lg p-4 bg-black">

            <h3 class="text-xl font-semibold text-white mb-2">
              {project.name}
            </h3>

            <p class="text-gray-400">
              {project.description}
            </p>

            {
              project.link?.url ?
                <a
                  href={project.link.url}
                  title={project.link.title || project.name}
                  target={project.link.target || '_blank'}
                  class="
                            w-full px-4 py-2.5 mt-4 text-center

                            border border-gray-600 rounded-lg

                            hover:text-primary
                            hover:border-primary
                        ">
                  {project.link.buttonLabel || 'Open Project Website'}
                </a>
                : null
            }

          </div>

        )}

      </div>

    </div>

  )
}

function ContentLink({ contentId, contentName }: { contentId: string, contentName: string }) {
  return (
    <label
      for={contentId}
      class={[
        "tab-link",

        "flex items-center gap-2 py-2 px-4 text-xs cursor-pointer",

        "bg-black",
        "text-gray-100",
        "hover:text-primary",

        "!border-r",
        "!border-r-gray-600"
      ].join(" ")}
    >
      <svg fill="none" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
      <h2>{contentName}</h2>
    </label >
  )
}

export function Code({ code, lang }: { code: string; lang: string }) {
  let codeRef: HTMLPreElement | undefined;
  const [highlightedCode, setHighlightedCode] = createSignal(code);

  const highlight = () => {
    requestAnimationFrame(() => {
      if (codeRef) {
        Prism.highlightElement(codeRef.querySelector("code") as HTMLElement);
      }
    });
  };

  onMount(highlight);
  onCleanup(() => {
    if (codeRef) codeRef.innerHTML = "";
  });

  return (
    <pre ref={codeRef} class="line-numbers">
      <code class={`language-${lang}`} innerHTML={highlightedCode()}></code>
    </pre>
  );
}

const goCode = `interface Developer {
    name: string;
    skills: string[];
    interests: string[];
};

interface TechStack {
    devOps: string[];
    backend: string[];
    frontend: string[];
};

type ContactType = 'github' | 'twitter' | 'linkedIn' | 'xing' | 'email';

const techStack: TechStack = {
    devOps: [
        'GitLab',
        'GitHub',
        'Cloudflare',
        'Docker'
    ],
    frontend: [
        'Angular',
        'JavaScript',
        'TypeScript',
        'TailwindCSS',
        'PrimeNG',
        'Astro',
        'Ionic',
        'Stencil',
        'Capacitor',
        'SCSS',
        'Markdown',
        'WordPress'
    ],
    backend: [
        'Supabase',
        'Node.js',
        'Bun',
        'Deno',
        'PostgreSQL',
        'MySQL',
        'S3 Storage',
        'Resend'
    ]
};

// Developer profile
const me: Developer = {
    name: 'Dejan Vi.',
    skills: [
        ...techStack.devOps,
        ...techStack.backend,
        ...techStack.frontend
    ],
    interests: [
        'Open Source',
        'Security',
        'Privacy',
        'Performance',
        'Self-Hosting',
        'Networking'
    ]
};

// Contact function
const contact = (type: ContactType): string => {
    switch (type) {
        case 'github':
            return 'https://github.com/devidevio';
        case 'twitter':
            return 'https://x.com/devidev_io';
        case 'linkedIn':
            return 'https://www.linkedin.com/in/dejan-vi';
        case 'xing':
            return 'https://www.xing.com/profile/Dejan_Vintonjiv';
        case 'email':
            return 'hi@devidev.io';
        default:
            return 'Send fax.';
    }
};
  `;
