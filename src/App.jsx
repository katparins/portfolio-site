import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUpRight, 
  X, 
  Sparkles,
  Star,
  Heart,
  Coffee,
  Music,
  Flower,
  Code,
  Cpu,
  Palette,
  Zap,
  GitBranch,
  Terminal,
  ExternalLink,
  PlayCircle,
  BookOpen,
  CheckCircle2,
  Lightbulb,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  FileText,
  Menu 
} from 'lucide-react';

// --- ASSETS ---
// NOTE: To ensure this runs in both the preview and your local environment (without import errors),
// please ensure 'kw-logo.png' and 'graphic-kat.png' are placed in your 'public/' folder.
const logoKw = "kw-logo.png";
const avatarKat = "graphic-kat.png";

const LogoKw = ({ className = "h-12 w-auto" }) => (
  <img 
    src={logoKw} 
    alt="Kat Wongsrisoontorn" 
    className={`${className} object-contain transition-transform duration-300 hover:rotate-6 hover:scale-110`}
  />
);

const AvatarKat = ({ className = "w-64 h-64" }) => (
  <div className={`relative ${className}`}>
     {/* Warm Vanilla/Gold Glow Background */}
    <div className="absolute inset-0 bg-[#EBE0D0] rounded-full blur-3xl opacity-60 animate-pulse"></div>
    <img 
      src={avatarKat} 
      alt="Kat Avatar" 
      className="relative z-10 w-full h-full object-contain animate-float drop-shadow-xl"
    />
  </div>
);

// --- DATA ---

const PROJECTS = [
  {
    id: "jarvis",
    title: "Jarvis Assistant",
    role: "Data Engineering",
    shortDesc: "An AI-powered tool that automatically generates clear, structured descriptions for BigQuery tables and columns using LLMs.",
    tags: ["AI", "GCP", "LangChain"],
    color: "bg-[#F5F0E6]", // Cream/Almond
    textColor: "text-[#5D4037]",
    rotation: "hover:rotate-1",
    type: "Engineering",
    image: "jarvis-workflow.png", // Main cover image updated
    // Updated documentation link
    docUrl: "SCBX-presentation.pdf", 
    gallery: [
       "jarvis-workflow.png",
       "jarvis-tools.png",
       "jarvis-decision.png",
       "jarvis-output.png"
    ],
    liveUrl: "", 
    demoUrl: "", 
    detail: {
      overview: "An AI-powered tool that automatically generates clear, structured descriptions for BigQuery tables and columns. It uses large language models to turn complex metadata into readable documentation that helps teams understand unfamiliar datasets quickly.",
      
      background: "I built this project during my internship at SCBX ABACUS Digital as part of the Data Engineering team.\n\n**The Problem**\nInternal metadata was often incomplete or unclear, which made it difficult for engineers and analysts to interpret unfamiliar tables and queries.\n\n**The Solution**\nI wanted to automate that process with language models to turn complex data into something people could understand. The name “Jarvis” came from the AI assistant in Iron Man, since it was designed to act as a smart system that supports the team.",
      
      processText: "I built a LangChain agent that generates both column-level and table-level metadata descriptions. The system retrieves schema information, references internal documentation, and processes everything through a ReAct-based agent that selects the right tools for each task.\n\n**Tools & Implementation**\nI created tools such as `query_from_bigquery_chunked` and `fetch_confluence_chunked` to pull data and internal documentation before generating structured descriptions.\n\n**Challenges**\nOne of the main challenges was handling large queries, rate limits, and inconsistent outputs. Some responses failed due to token limits, invalid SQL, or broken JSON. I solved this by:\n• Adding a chunking and summarization function.\n• Creating a recursive try-catch loop to retry failed outputs.\n• Refining the prompt logic to produce more stable and consistent results.\n\nFinally, it formats the results and exports them as JSON files for easy integration into data pipelines.",
      
      outcome: "**Impact**\nJarvis automated the process of writing metadata, saving time and ensuring clarity across hundreds of datasets. It improved internal understanding of data assets and provided a scalable system for future features such as automatic tagging and data quality summaries.\n\n**Growth**\nThe project expanded my understanding of prompt engineering, data pipeline architecture, and how AI can transform the way teams interact with data.",
      
      stack: ["LangChain", "OpenAI", "Google Cloud Platform", "Confluence API", "Python"]
    }
  },
  {
    id: "report-gen",
    title: "Report Generator",
    role: "Software Engineering",
    shortDesc: "A Python-based report automation tool that processes high-volume data with Pandas and improves reporting workflows by over 900 percent.",
    tags: ["Data", "Automation", "Python"],
    color: "bg-[#EBE0D0]", // Latte/Beige
    textColor: "text-[#3E2723]",
    rotation: "hover:-rotate-1",
    type: "Engineering",
    image: "ptt-output.png", // Main cover image updated
    docUrl: "PTT-presentation.pdf",
    gallery: [
      "ptt-output.png", 
      "ptt-summary.png"
    ],
    liveUrl: "",
    demoUrl: "",
    detail: {
      overview: "A Python-based internal tool that automatically generates data reports from raw input files. It organizes, calculates, and formats results into clear summaries that teams can review easily. The system replaces a slow manual reporting process, reducing repetitive work and improving accuracy and efficiency for the operations team.",
      
      background: "I developed this tool during my software engineering internship at PTT Group as part of the On-ion EV Charger operations team.\n\n**The Problem**\nThe team’s reporting workflow required manually compiling and analyzing data from thousands of records, which often took days to finish.\n\n**The Solution**\nI wanted to simplify that process by building an automated solution that could generate structured reports in seconds. The goal was to make data review faster, more consistent, and easier to share across teams.",
      
      processText: "**Automated Workflow**\nI built a Python script that automates the reporting workflow for the operations team. The program reads booking data, cleans and filters invalid entries, calculates payment amounts, and generates summarized reports automatically.\n\n**Data Processing**\nIt removes irrelevant data, computes total and refund-adjusted values for each transaction, and adds a summary section to highlight key metrics. The goal was to ensure that every report contains accurate and usable information and reduce manual effort in the process.",
      
      outcome: "**Impact**\nThe tool automated a manual reporting process and increased efficiency by over 900%. It helped the operations team save hours of repetitive work, reduced human errors, and was later integrated into the backend system of the EV charging app.\n\n**Growth**\nThe project expanded my understanding of data automation, error handling, and how internal tools can create meaningful impact in real workflows.",
      
      stack: ["Python", "Pandas", "NumPy", "Microsoft Excel"]
    }
  },
  {
    id: "alien-dating",
    title: "Alien Dating App",
    role: "Creative Coding",
    shortDesc: "An interactive simulation of a futuristic online dating platform with a chatbot and video call features, built using p5.js.",
    tags: ["p5.js", "Art", "Design"],
    color: "bg-[#E6DCCA]", // Warm Sand
    textColor: "text-[#5D4037]",
    rotation: "hover:-rotate-2",
    type: "Creative",
    image: "alien-home.jpg", // Main cover image updated
    // Updated links
    githubUrl: "https://github.com/katparins/alien-dating",
    liveUrl: "https://editor.p5js.org/pw2313/full/VdRf5RFUm", 
    demoUrl: "https://youtu.be/xujbxAD08Ts", // Serves as Video Documentation
    gallery: [
      "alien-home.jpg",
      "alien-profile.jpg",
      "alien-chat.jpg",
      "alien-call.jpg"
    ],
    detail: {
      overview: "A simulated dating app set in a distant future where humans face extinction from climate change and resource depletion. As new planets are discovered and interspecies relationships begin to form, the app connects creatures from across the galaxy. It explores love beyond planetary boundaries and how technology and emotion come together in the search for connection across the universe.",
      
      background: "**The Context**\nI created this project during my first semester at NYU as my first coding experiment. During the ideation process, I used card sorting to group different words and themes.\n\n**The Concept**\nI explored five directions, but the combination of digital, technology, romance, queer, and aliens stood out the most. From there, the concept grew into a dating app that imagines what connection might look like in a world where species boundaries no longer exist.",
      
      processText: "**Design & Narrative**\nI designed the interface to resemble a futuristic dating platform for aliens. Each species has unique traits and personalities, with subtle animations and small narrative details.\n\n**Implementation**\nI used several p5.js functions, including webcam features to simulate video calls, and added chat bots that let users interact with 11 alien characters. My goal was to make the experience feel immersive and playful, with simple and visually engaging interactions.",
      
      outcome: "**Reflection**\nThe project became more than a creative coding exercise. It showed me how storytelling and interface design can come together to create something that feels engaging and alive.\n\n**Growth**\nIt also grew my interest in using creativity and technology to design experiences that help people connect in new and meaningful ways.",
      
      stack: ["p5.js", "JavaScript", "Canva"]
    }
  },
  {
    id: "24-solver",
    title: "24 Game Solver",
    role: "Algorithm Design",
    shortDesc: "A Python web app that solves the 24 Game puzzle using backtracking to compute valid expressions and handles edge cases with accuracy.",
    tags: ["Algo", "Python", "Web"],
    color: "bg-[#FFFDF5]", // Soft White
    textColor: "text-[#8D6E63]",
    rotation: "hover:rotate-1",
    type: "Creative",
    image: "24game-home.jpg", // Main cover image updated
    gallery: [
      "24game-home.jpg",
      "24game-output.jpg"
    ],
    // Updated: Added non-empty strings to enable the buttons
    liveUrl: "https://24gamesolver.streamlit.app/", 
    githubUrl: "https://github.com/katparins/24gamesolver",
    demoUrl: "",
    detail: {
      overview: "A web app that finds every possible way to make 24 from four numbers. It explores all combinations, covers edge cases, and avoids floating point errors.",
      
      background: "**The Inspiration**\nI started this project during my Intro to Programming class. Around that time, I played the 24 Game a lot to distract myself from heartbreak, and I would get frustrated whenever I couldn’t solve it. That mix of curiosity and emotion turned into an idea to build my own solver.\n\n**The Journey**\nThe first version ended up being over 4,000 lines of nested loops that somehow worked. After learning more about algorithms and recursion, I refactored everything into around 300 clean lines. The old version still lives in the “trial and error” folder as a reminder of how it all started.",
      
      processText: "**Recursion & Logic**\nThe solver uses recursion to test every possible order of numbers and operators while filtering out duplicates and invalid expressions.\nI focused on handling small details like rounding errors and clean output formatting so the app feels accurate and easy to use.",
      
      outcome: "**Performance**\nThe solver runs smoothly and consistently finds all valid results, even in cases that other online solvers cannot handle.\n\n**Growth**\nIt became more than just a coding exercise. It is proof of how much I have grown as a programmer and how creativity can come from genuine curiosity and persistence.",
      
      stack: ["Python", "Streamlit"]
    }
  }
];

// --- COMPONENTS ---

const TiltCard = ({ children, className, rotation }) => {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    setCoords({ x: xPct, y: yPct });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setCoords({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      className={`transform transition-all duration-200 ease-out ${className} ${!isHovering ? rotation : ''}`}
      style={{
        transform: isHovering
          ? `perspective(1000px) rotateX(${coords.y * -10}deg) rotateY(${coords.x * 10}deg) scale(1.02)`
          : `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`
      }}
    >
      {children}
    </div>
  );
};

// NEW COMPONENT: ProjectCard to handle image slideshow logic
const ProjectCard = ({ project, onClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];

  useEffect(() => {
    // Only set up interval if there's more than one image AND we are hovering
    if (images.length <= 1 || !isHovering) {
        setCurrentImageIndex(0); // Reset to first image (cover) when not hovering
        return;
    }

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 500); // 0.5 seconds delay

    return () => clearInterval(interval);
  }, [images.length, isHovering]);

  return (
    <TiltCard 
      className={`group cursor-pointer ${project.size === 'large' ? 'md:col-span-2' : ''}`}
      rotation={project.rotation}
    >
      <div 
        onClick={onClick}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="bg-white rounded-[2.5rem] p-3 shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-[#EBE0D0]"
      >
        <div className={`rounded-[2rem] overflow-hidden relative ${project.color} transition-colors duration-500 flex flex-col h-full`}>
           
           {/* IMAGE SECTION - Stacks on Top */}
           <div className="h-56 w-full relative overflow-hidden bg-white/20 shrink-0">
              {images.length > 0 ? (
                <img 
                  key={currentImageIndex} // Key change triggers animation
                  src={images[currentImageIndex]} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-1000 animate-in fade-in group-hover:scale-105" 
                />
              ) : (
                /* DEFAULT PLACEHOLDER ART */
                <div className="w-full h-full opacity-60 relative flex items-center justify-center">
                   <div className="absolute inset-0 flex items-center justify-center text-[#3E2723] opacity-20 transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12">
                      {project.type === 'Engineering' ? <Cpu size={140} /> : <Palette size={140} />}
                   </div>
                   {/* Pattern Overlay */}
                   <div className="absolute inset-0 bg-[radial-gradient(#3E2723_1px,transparent_1px)] [background-size:20px_20px] opacity-5"></div>
                </div>
              )}
              
              {/* Optional: Indicator Dots to show slideshow is active */}
              {images.length > 1 && isHovering && (
                <div className="absolute bottom-3 right-3 flex gap-1.5 z-10 animate-in fade-in duration-300">
                  {images.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${idx === currentImageIndex ? 'bg-white w-3' : 'bg-white/50'}`}
                    />
                  ))}
                </div>
              )}
           </div>

           {/* CONTENT SECTION - Stacks Below */}
           <div className="p-8 md:p-10 bg-white/60 backdrop-blur-xl w-full transition-all duration-500 group-hover:bg-white/95 border-t border-white/20 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-2 flex-wrap">
                    {/* Role Badge */}
                    <span className="bg-[#FFF] px-3 py-1 rounded-lg text-[10px] uppercase tracking-widest font-bold text-[#5D4037] shadow-sm border border-[#EBE0D0]">
                      {project.role}
                    </span>
                  </div>
                  <div className="bg-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 shadow-md">
                    <ArrowUpRight size={20} className="text-[#3E2723]" />
                  </div>
                </div>

                <h3 className="text-3xl font-serif font-bold text-[#3E2723] mb-2 group-hover:translate-x-1 transition-transform">
                  {project.title}
                </h3>
                <p className="text-[#5D4037] text-sm md:text-base font-medium opacity-80">
                  {project.shortDesc}
                </p>
              </div>
           </div>
        </div>
      </div>
    </TiltCard>
  );
};

const Sticker = ({ icon, label, color, rotate }) => (
  <div className={`group relative aspect-square rounded-3xl ${color} flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl hover:-translate-y-2 ${rotate}`}>
    <div className="text-[#5D4037] opacity-70 transition-transform duration-300 group-hover:animate-wiggle">{icon}</div>
    <span className="font-serif text-[#3E2723] font-medium">{label}</span>
    {/* Shine effect */}
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
  </div>
);

const ProjectModal = ({ project, onClose }) => {
  // NEW: State for the lightbox expanded image index (null when closed)
  const [expandedIndex, setExpandedIndex] = useState(null);

  if (!project) return null;
  
  // Destructure detail. If overview exists, we use the new layout.
  const isRichContent = !!project.detail.overview;

  const handleNext = (e) => {
    e.stopPropagation();
    if (expandedIndex !== null && project.gallery && expandedIndex < project.gallery.length - 1) {
      setExpandedIndex(expandedIndex + 1);
    }
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (expandedIndex !== null && expandedIndex > 0) {
      setExpandedIndex(expandedIndex - 1);
    }
  };

  // Helper function to render bold text
  const parseBold = (text) => {
    if (!text) return null;
    // Splits by **text** pattern
    return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        // Return bolded element
        return <strong key={index} className="font-semibold text-[#3E2723]">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 backdrop-blur-md bg-[#3E2723]/10">
      
      {/* Lightbox Overlay */}
      {expandedIndex !== null && project.gallery && (
        <div 
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 p-4 animate-in fade-in duration-200"
          onClick={() => setExpandedIndex(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50 backdrop-blur-sm"
            onClick={() => setExpandedIndex(null)}
          >
            <X size={28} />
          </button>

          {/* Prev Button */}
          {expandedIndex > 0 && (
            <button
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50 backdrop-blur-sm"
                onClick={handlePrev}
            >
                <ChevronLeft size={40} />
            </button>
          )}

          {/* Next Button */}
          {expandedIndex < project.gallery.length - 1 && (
            <button
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50 backdrop-blur-sm"
                onClick={handleNext}
            >
                <ChevronRight size={40} />
            </button>
          )}

          {/* Current Image */}
          <img 
            src={project.gallery[expandedIndex]} 
            alt="Expanded view" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl scale-in-95 animate-in duration-300"
            onClick={(e) => e.stopPropagation()} 
          />
          
          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 bg-black/50 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
            {expandedIndex + 1} / {project.gallery.length}
          </div>
        </div>
      )}

      <div 
        className="absolute inset-0" 
        onClick={onClose} 
      />
      <div className="bg-[#FDFBF7] w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-[2.5rem] shadow-2xl relative animate-in fade-in zoom-in duration-300 border-4 border-white ring-1 ring-[#EBE0D0]">
        
        {/* Header */}
        <div className={`p-10 ${project.color} relative overflow-hidden`}>
           <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/30 rounded-full blur-2xl"></div>
           <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/40 to-transparent"></div>
           
           {/* PROJECT IMAGE IN HEADER REMOVED HERE */}

           <button onClick={onClose} className="absolute top-6 right-6 p-2 bg-white/50 hover:bg-white rounded-full transition-all hover:rotate-90 text-[#5D4037] shadow-sm z-10">
            <X size={20} />
           </button>
          
          <div className="relative z-10">
            <span className={`inline-block px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md text-xs font-bold uppercase tracking-wider mb-4 ${project.textColor} shadow-sm`}>
              {project.role}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#3E2723] mb-4">
              {project.title}
            </h2>
            
            {/* NEW: LIVE / DEMO BUTTONS */}
            <div className="flex flex-wrap gap-3 mt-6">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-[#3E2723] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#5D4037] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Visit Live Site <ExternalLink size={16} />
                </a>
              )}
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-white text-[#3E2723] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#FAF9F6] transition-all shadow-sm border border-[#EBE0D0] hover:border-[#3E2723] hover:shadow-md transform hover:-translate-y-0.5"
                >
                  GitHub <Github size={16} />
                </a>
              )}
              {project.demoUrl && (
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-[#E8DAC8] text-[#3E2723] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#F3E9DD] transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                >
                  Watch Demo <PlayCircle size={16} />
                </a>
              )}
              {project.docUrl && (
                <a 
                  href={project.docUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-[#EBE0D0] text-[#3E2723] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#E6DCCA] transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                >
                  Documentation <FileText size={16} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-8 md:p-10 space-y-6">
          
          {isRichContent ? (
            /* --- NEW RICH CONTENT LAYOUT (Jarvis & Report Gen) --- */
            <>
              {/* Overview */}
              <div>
                <h3 className="font-serif text-2xl mb-4 flex items-center gap-3 text-[#3E2723]">
                  <Sparkles size={24} className="text-[#D7CCC8]" /> Overview
                </h3>
                <p className="text-[#5D4037] text-lg leading-relaxed font-light border-l-2 border-[#EBE0D0] pl-6">
                  {parseBold(project.detail.overview)}
                </p>
              </div>

              {/* Background */}
              <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-[#EBE0D0]">
                 <h3 className="font-serif text-xl mb-3 flex items-center gap-2 text-[#3E2723]">
                   <BookOpen size={20} className="text-[#D7CCC8]" /> Background
                 </h3>
                 <p className="text-[#5D4037] leading-relaxed opacity-90 text-sm md:text-base whitespace-pre-line">
                   {parseBold(project.detail.background)}
                 </p>
              </div>

              {/* Image Gallery - Updated with Expand Logic */}
              {project.gallery && (
                <div>
                   <h3 className="font-serif text-xl mb-4 text-[#3E2723] opacity-80">Snapshots</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {project.gallery.map((img, i) => (
                       <div 
                         key={i} 
                         onClick={() => setExpandedIndex(i)}
                         className="aspect-video bg-[#F5F0E6] rounded-xl overflow-hidden border border-[#EBE0D0] shadow-sm relative group cursor-zoom-in"
                       >
                          <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                          
                          {/* Hover Overlay Visual Cue */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
                             <div className="bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all shadow-md text-[#3E2723]">
                               <Maximize2 size={20} />
                             </div>
                          </div>
                       </div>
                     ))}
                   </div>
                </div>
              )}

              {/* Process Text */}
              <div>
                 <h3 className="font-serif text-2xl mb-4 flex items-center gap-3 text-[#3E2723]">
                   <GitBranch size={24} className="text-[#D7CCC8]" /> The Process
                 </h3>
                 <p className="text-[#5D4037] leading-relaxed whitespace-pre-line text-lg font-light">
                   {parseBold(project.detail.processText)}
                 </p>
              </div>

              {/* Outcome */}
              <div className="bg-[#F5F0E6] p-6 rounded-2xl border border-[#EBE0D0]">
                 <h3 className="font-serif text-xl mb-3 flex items-center gap-2 text-[#3E2723]">
                   <CheckCircle2 size={20} className="text-[#D7CCC8]" /> Outcome
                 </h3>
                 <p className="text-[#5D4037] leading-relaxed opacity-90 text-sm md:text-base whitespace-pre-line">
                   {parseBold(project.detail.outcome)}
                 </p>
              </div>
            </>
          ) : (
            /* --- ORIGINAL LAYOUT (Legacy projects) --- */
            <>
              <div>
                <h3 className="font-serif text-2xl mb-4 flex items-center gap-3 text-[#3E2723]">
                  <Sparkles size={24} className="text-[#D7CCC8]" /> The Story
                </h3>
                <p className="text-[#5D4037] text-lg leading-relaxed opacity-90 font-light border-l-2 border-[#EBE0D0] pl-6">
                  {project.detail.challenge}
                </p>
              </div>
              
              <div>
                 <h3 className="font-serif text-2xl mb-6 flex items-center gap-3 text-[#3E2723]">
                  <GitBranch size={24} className="text-[#D7CCC8]" /> The Process
                </h3>
                <div className="space-y-6">
                  {project.detail.process.map((step, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-[#F5F0E6] flex items-center justify-center text-[#8D6E63] font-bold text-sm border border-[#EBE0D0] group-hover:bg-[#3E2723] group-hover:text-white transition-colors">
                          {i + 1}
                        </div>
                        {i !== project.detail.process.length - 1 && (
                          <div className="w-px h-full bg-[#EBE0D0] my-2"></div>
                        )}
                      </div>
                      <div className="pb-2">
                        <h4 className="font-serif text-lg text-[#3E2723] font-bold mb-1">{step.title}</h4>
                        <p className="text-[#5D4037] text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Footer - Tech Stack (Shared) */}
          <div className="pt-8 border-t border-dashed border-[#EBE0D0]">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#8D6E63] mb-4 flex items-center gap-2">
              <Terminal size={14} /> Technologies Used
            </h4>
            <div className="flex flex-wrap gap-3">
              {project.detail.stack.map(tech => (
                <span key={tech} className="px-4 py-2 bg-[#F5F0E6] rounded-xl text-sm font-medium text-[#5D4037] border border-[#EBE0D0] hover:bg-[#EBE0D0] transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#3E2723] font-sans selection:bg-[#D7CCC8] selection:text-[#3E2723] overflow-x-hidden">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500&display=swap');
        
        html { scroll-behavior: smooth; }
        body { font-family: 'Inter', sans-serif; }
        h1, h2, h3, h4 { font-family: 'Playfair Display', serif; }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        .group-hover\\:animate-wiggle:hover {
          animation: wiggle 0.5s ease-in-out infinite;
        }

        .custom-underline {
          background-image: linear-gradient(120deg, #EBE0D0 0%, #EBE0D0 100%);
          background-repeat: no-repeat;
          background-size: 100% 0.2em;
          background-position: 0 88%;
          transition: background-size 0.25s ease-in;
        }
        .custom-underline:hover {
          background-size: 100% 88%;
        }
        
        /* Coffee/Beige Scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: #FDFBF7; 
        }
        ::-webkit-scrollbar-thumb {
          background: #D7CCC8; 
          border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #8D6E63; 
        }
      `}</style>

      {/* --- BACKGROUND DECORATION --- */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-20 left-[10%] text-[#EBE0D0] opacity-50 animate-float" style={{ animationDelay: '0s' }}><Star size={24} /></div>
        {/* Deleted Sparkle Here */}
        <div className="absolute bottom-32 left-[20%] text-[#EBE0D0] opacity-50 animate-float" style={{ animationDelay: '4s' }}><Heart size={20} /></div>
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#EBE0D0] shadow-sm transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center relative">
           <div className="flex items-center gap-4">
             {/* Adjusted size for the bar layout */}
             <a href="#" aria-label="Home">
                <LogoKw className="h-16 w-auto" />
             </a>
             {/* --- UPDATED ROLE: "Creative Engineer" --- */}
             <span className="font-serif italic text-lg md:text-xl text-[#5D4037]">Software Engineer</span>
           </div>
           
           {/* Desktop Nav */}
           <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5D4037] bg-white px-8 py-4 rounded-full border border-[#EBE0D0] shadow-sm">
             {['Work', 'About', 'Resume'].map((item) => (
               <a 
                 key={item} 
                 href={item === 'Resume' ? "Kat_Wongsrisoontorn_Resume.pdf" : `#${item.toLowerCase()}`} 
                 target={item === 'Resume' ? "_blank" : "_self"}
                 rel={item === 'Resume' ? "noopener noreferrer" : ""}
                 className="hover:text-[#3E2723] transition-colors relative group"
               >
                 {item}
                 <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#D7CCC8] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
               </a>
             ))}
           </div>

           {/* Mobile Menu Toggle */}
           <button 
             className="md:hidden p-2 text-[#5D4037] hover:bg-[#F5F0E6] rounded-full transition-colors"
             onClick={() => setIsMenuOpen(!isMenuOpen)}
             aria-label="Toggle menu"
           >
             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
           </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-[#EBE0D0] shadow-lg py-4 px-6 flex flex-col gap-2 animate-in slide-in-from-top-2">
            {['Work', 'About', 'Resume'].map((item) => (
               <a 
                 key={item} 
                 href={item === 'Resume' ? "Kat_Wongsrisoontorn_Resume.pdf" : `#${item.toLowerCase()}`} 
                 target={item === 'Resume' ? "_blank" : "_self"}
                 rel={item === 'Resume' ? "noopener noreferrer" : ""}
                 className="block text-[#5D4037] font-medium py-3 px-4 hover:bg-[#F5F0E6] rounded-xl transition-colors"
                 onClick={() => setIsMenuOpen(false)}
               >
                 {item}
               </a>
             ))}
          </div>
        )}
      </nav>

      {/* --- HERO --- */}
      <header className="max-w-6xl mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* Left Text */}
          <div className="text-center md:text-left flex-1">
            
            <h1 className="text-5xl md:text-7xl font-serif font-medium mb-8 leading-[1.1] text-[#3E2723]">
              Hello, I'm <span className="italic relative inline-block text-[#8D6E63]">
                Kat.
                <svg className="absolute w-full h-4 -bottom-2 left-0 text-[#EBE0D0] -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#5D4037] leading-relaxed max-w-2xl mb-10 font-light">
              I’m a <span className="font-medium text-[#3E2723]">software engineer</span> who builds digital experiences shaped by <span className="font-medium text-[#6D4C41]">creativity, engineering, and data</span>, with a focus on human-centered design and tools that support better work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#work" className="bg-[#3E2723] text-[#FDFBF7] px-8 py-4 rounded-full hover:bg-[#5D4037] transition-all hover:-translate-y-1 hover:shadow-lg shadow-[#3E2723]/20 font-medium flex items-center justify-center gap-2">
                See my work <ArrowUpRight size={18} />
              </a>
              <div className="flex gap-2 bg-white px-6 py-4 rounded-full border border-[#EBE0D0] shadow-sm items-center justify-center">
                <a href="https://github.com/katparins" className="hover:text-[#8D6E63] transition-colors transform hover:scale-110"><Github size={22} strokeWidth={1.5} /></a>
                <div className="w-px h-5 bg-[#EBE0D0]"></div>
                <a href="https://linkedin.com/in/katwongs" className="hover:text-[#8D6E63] transition-colors transform hover:scale-110"><Linkedin size={22} strokeWidth={1.5} /></a>
              </div>
            </div>
          </div>

          {/* Right Image (Interactive Avatar) */}
          <div className="flex-1 flex justify-center md:justify-end relative">
             <AvatarKat className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96" />
             
             {/* Floating Stickers around Avatar */}
             <div className="absolute top-10 right-10 bg-white p-3 rounded-2xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
               <Code className="text-[#D7CCC8]" />
             </div>
             <div className="absolute bottom-10 left-10 bg-white p-3 rounded-2xl shadow-lg animate-float" style={{ animationDelay: '2.5s' }}>
               <Palette className="text-[#D7CCC8]" />
             </div>
          </div>

        </div>
      </header>

      {/* --- SELECTED WORKS (INTERACTIVE CARDS) --- */}
      <section id="work" className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-4xl font-serif italic text-[#3E2723]">Selected Works</h2>
          <div className="h-px bg-[#EBE0D0] flex-grow rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {PROJECTS.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </section>

      {/* --- ABOUT (STICKER BOARD) --- */}
      <section id="about" className="bg-[#FAF9F6] py-32 border-t border-dashed border-[#EBE0D0] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
             <div className="inline-flex items-center justify-center p-3 bg-white rounded-full border border-[#EBE0D0] mb-6 shadow-sm animate-bounce" style={{ animationDuration: '3s' }}>
               <Heart className="text-[#D7CCC8] fill-[#D7CCC8]" size={20} />
             </div>
             <h2 className="text-4xl md:text-5xl font-serif mb-8 text-[#3E2723]">A Little About Me</h2>
             <p className="text-[#5D4037] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
               I’m <span className="font-medium text-[#3E2723]">Kat Wongsrisoontorn</span>, a Software Engineer who blends <span className="custom-underline font-medium text-[#3E2723]">creativity and code</span> to build intuitive, human centered systems. When I’m not coding, you’ll probably find me with jasmine green tea, updating my Miffy collection, or looking for new food spots to try.
             </p>
          </div>

          {/* Sticker Grid - Updated Colors */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Sticker 
              icon={<Cpu size={32} />} 
              label="Engineer" 
              color="bg-[#F5F0E6]" // Almond
              rotate="rotate-2" 
            />
            <Sticker 
              icon={<Palette size={32} />} 
              label="Designer" 
              color="bg-[#EBE0D0]" // Sand
              rotate="-rotate-1" 
            />
            <Sticker 
              icon={<Flower size={32} />} 
              label="Miffy Lover" 
              color="bg-[#F0EAE0]" // Bone
              rotate="rotate-3" 
            />
            <Sticker 
              icon={<Coffee size={32} />} 
              label="Tea Drinker" 
              color="bg-[#E6DCCA]" // Latte
              rotate="-rotate-2" 
            />
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 text-center px-6 bg-[#FDFBF7]">
        <div className="max-w-2xl mx-auto">
           <div className="mb-8">
             <Zap className="mx-auto text-[#D7CCC8] mb-4" size={32} />
             <h2 className="text-3xl font-serif mb-8 text-[#3E2723]">Let's create something cute.</h2>
             <a href="mailto:katwong.work@gmail.com" className="inline-block bg-[#3E2723] text-[#FDFBF7] px-8 py-4 rounded-full font-medium hover:bg-[#5D4037] transition-all hover:shadow-lg transform hover:-translate-y-1">
               Say Hello 🤍
             </a>
           </div>
           
           <div className="flex justify-center gap-8 text-sm text-[#8D6E63] font-medium tracking-wide uppercase mb-12">
              <a href="Kat_Wongsrisoontorn_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[#3E2723] transition-colors border-b border-transparent hover:border-[#3E2723]">Resume</a>
              <a href="https://linkedin.com/in/katwongs" className="hover:text-[#3E2723] transition-colors border-b border-transparent hover:border-[#3E2723]">LinkedIn</a>
              <a href="https://github.com/katparins" className="hover:text-[#3E2723] transition-colors border-b border-transparent hover:border-[#3E2723]">GitHub</a>
           </div>
           
           <p className="text-xs text-[#D7CCC8]">
             © 2025 Kat W. • Built with React, Tailwind & Jasmine Tea.
           </p>
        </div>
      </footer>

      {/* MODAL */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

    </div>
  );
};

export default App;