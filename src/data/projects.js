import sicklecareCover from '../../img/sicklecare-cover.jpg';
import loopstudioCover from '../../img/loopstudio-cover.jpg';
import fyloCover from '../../img/fylo-cover.jpg';
import cliniqCover from '../../img/ClinIQ-cover.jpg';
import rotaractsCover from '../../img/Rotaracts-cover.jpg';

const projects = [
  {
    slug: 'sicklecare',
    title: 'SickleCare',
    category: 'Healthcare platform',
    industry: 'Health',
    summary:
      'A healthcare platform that helps people living with sickle cell disease find practical self-care guidance, track symptoms and connect with nearby care.',
    challenge:
      'People living with sickle cell disease need clear, approachable guidance and a faster way to find support. Health information and care options can otherwise feel scattered and difficult to act on.',
    approach:
      'Designed a responsive Next.js experience that brings symptom guidance, self-care resources and a geolocated provider finder together in one accessible platform.',
    results:
      'The finished platform gives patients a clear starting point for learning about sickle cell care, checking symptoms and finding nearby providers, with dedicated tools for both patients and doctors.',
    technologies: ['Next.js', 'React', 'JavaScript', 'CSS'],
    image: sicklecareCover,
    alt: 'SickleCare health platform homepage',
    gallery: [
      {
        image: sicklecareCover,
        alt: 'SickleCare health platform homepage',
        caption: 'SickleCare cover image',
      },
    ],
  },
  {
    slug: 'loopstudio',
    title: 'LoopStudio Landing Page',
    category: 'Marketing website',
    industry: 'Creative technology',
    summary:
      'A high-impact landing page for a creative studio, designed to introduce its immersive work through bold visuals and a responsive, polished experience.',
    challenge:
      'The landing page needed to make a strong first impression, communicate a distinctive studio identity and keep the experience easy to explore on different screen sizes.',
    approach:
      'Built a responsive frontend with bold imagery, clear content hierarchy, smooth scrolling and considered hover interactions, keeping the implementation lightweight.',
    results:
      'The result is a cohesive studio landing page that foregrounds the brand and its work while providing a smooth, responsive browsing experience.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: loopstudioCover,
    alt: 'LoopStudio immersive creative landing page',
    gallery: [
      {
        image: loopstudioCover,
        alt: 'LoopStudio immersive creative landing page',
        caption: 'LoopStudio cover image',
      },
    ],
  },
  {
    slug: 'fylo',
    title: 'Fylo Landing Page',
    category: 'Product website',
    industry: 'Cloud storage',
    summary:
      'A modern product website for a secure file-storage experience, highlighting simple access, sharing and collaboration across devices.',
    challenge:
      'The product needed to explain secure, cross-device file access in a straightforward way while keeping key benefits and next steps easy to find.',
    approach:
      'Created a responsive product page with a focused visual hierarchy, concise feature sections and clear calls to action.',
    results:
      'The finished page presents the product benefits in a simple, consistent flow and adapts the experience for desktop and mobile visitors.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: fyloCover,
    alt: 'Fylo file storage product landing page',
    gallery: [
      {
        image: fyloCover,
        alt: 'Fylo file storage product landing page',
        caption: 'Fylo cover image',
      },
    ],
  },
  {
    slug: 'cliiniq',
    title: 'ClinIQ',
    category: 'Learning platform',
    industry: 'Medical education',
    summary:
      'An adaptive study platform that helps preclinical medical students plan revision, practise with MCQs and track their progress.',
    challenge:
      'Medical students need a manageable way to turn exam preparation into consistent daily study, with useful feedback on what they have covered.',
    approach:
      'Built a React and Vite learning experience with Supabase-backed data and Anthropic API integration, bringing study planning, practice questions and progress tracking into one place.',
    results:
      'The platform combines structured revision with interactive practice and progress feedback, helping students keep their preparation organised.',
    technologies: ['React', 'Vite', 'JavaScript', 'Supabase', 'Anthropic API'],
    image: cliniqCover,
    alt: 'ClinIQ medical study and progress dashboard',
    gallery: [
      {
        image: cliniqCover,
        alt: 'ClinIQ medical study and progress dashboard',
        caption: 'ClinIQ cover image',
      },
    ],
  },
  {
    slug: 'rotaracts',
    title: 'Rotaracts Club IU',
    category: 'Community website',
    industry: 'Nonprofit',
    summary:
      'A responsive website for Rotaract Club Ring Road, built to present the club, its community impact and ways to participate.',
    challenge:
      'The club needed a clear online presence that could communicate its mission, make activities easy to explore and encourage community engagement.',
    approach:
      'Developed a component-based React and TypeScript frontend with a responsive layout and a structure that can grow with the club’s activities.',
    results:
      'The completed site gives the club a modern, accessible platform for sharing its work and connecting with its community.',
    technologies: ['React', 'TypeScript', 'Vite', 'CSS'],
    image: rotaractsCover,
    alt: 'Rotaract Club Ring Road community website',
    gallery: [
      {
        image: rotaractsCover,
        alt: 'Rotaract Club Ring Road community website',
        caption: 'Rotaract Club Ring Road cover image',
      },
    ],
  },
];

export default projects;
