import { useState, useRef, useEffect, type FormEvent, type DragEvent, type ChangeEvent } from 'react';
import { 
  CheckCircle2, 
  UploadCloud, 
  FileText, 
  X, 
  ArrowRight,
  User,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Building2,
  Upload,
  Calendar,
  Clock,
  Folder
} from 'lucide-react';

import { getProjectDetailById } from "../data/projectsData";
import { useSolareignData } from '../context/DataContext';
import RichTextRenderer from './RichTextRenderer';

interface PortfolioDetailsPageProps {
  projectId?: string;
  onBackToPortfolio?: () => void;
  onConsultationClick: (preset?: string) => void;
  onSelectCategoryFilter?: (category: string) => void;
}

const HARDWARE_CATEGORIES = [
  { id: 'CESC', name: 'CESC', defaultCount: 2 },
  { id: 'Deye', name: 'Deye', defaultCount: 3 },
  { id: 'Dyness', name: 'Dyness', defaultCount: 2 },
  { id: 'GenixGreen', name: 'GenixGreen', defaultCount: 3 },
  { id: 'GoodWe', name: 'GoodWe', defaultCount: 3 },
  { id: 'Pylontech', name: 'Pylontech', defaultCount: 2 },
  { id: 'SRNE', name: 'SRNE', defaultCount: 3 },
  { id: 'Solis', name: 'Solis', defaultCount: 2 }
] as const;

export default function PortfolioDetailsPage({
  projectId = "proj-1",
  onBackToPortfolio,
  onConsultationClick,
  onSelectCategoryFilter
}: PortfolioDetailsPageProps) {
  const { getProjectDetail, projects } = useSolareignData();
  // Resolve active project data with centralized lookup & fallback
  const project = getProjectDetail(projectId);

  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState<number>(0);

  const rawGalleryItems = project.gallery && project.gallery.length > 0 ? project.gallery : [];
  
  // Display only the actual gallery images provided for this project
  const galleryItems = (() => {
    if (rawGalleryItems.length > 0) {
      return rawGalleryItems;
    }
    if (project.image) {
      return [{
        url: project.image,
        title: `${project.title} - Main Installation`,
        caption: `Project installation photo for ${project.title}.`
      }];
    }
    return [];
  })();

  const galleryLength = galleryItems.length;
  const hasMoreThanFour = galleryLength > 4;

  const handlePrevImage = () => {
    if (galleryLength <= 1) return;
    setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : galleryLength - 1));
  };

  const handleNextImage = () => {
    if (galleryLength <= 1) return;
    setActiveImageIndex((prev) => (prev < galleryLength - 1 ? prev + 1 : 0));
  };

  // Synchronize thumbnailStartIndex so the active thumbnail is always within the 4 visible items
  useEffect(() => {
    if (activeImageIndex >= galleryLength && galleryLength > 0) {
      setActiveImageIndex(0);
    }
  }, [activeImageIndex, galleryLength]);

  useEffect(() => {
    if (galleryLength <= 4) {
      setThumbnailStartIndex(0);
      return;
    }
    setThumbnailStartIndex((prev) => {
      if (activeImageIndex < prev) {
        return activeImageIndex;
      }
      if (activeImageIndex >= prev + 4) {
        return Math.min(galleryLength - 4, activeImageIndex - 3);
      }
      return prev;
    });
  }, [activeImageIndex, galleryLength]);

  // Calculate counts for hardware categories matching user's reference filters
  const getCategoryCount = (item: typeof HARDWARE_CATEGORIES[number]): number => {
    const target = item.name.toLowerCase();
    const matches = projects.filter((p) => {
      const b = (p.brand || '').toLowerCase();
      const c = (p.category || '').toLowerCase();
      const s = (p.segment || '').toLowerCase();
      const t = (p.title || '').toLowerCase();
      const inv = (p.inverterBrand || '').toLowerCase();
      return b === target || b.includes(target) || c.includes(target) || s.includes(target) || t.includes(target) || inv.includes(target);
    }).length;
    return matches > 0 ? matches : item.defaultCount;
  };

  return (
    <div className="bg-white text-[#0F172A] font-sans antialiased min-h-screen">
      {/* 2. CASE STUDY / PRODUCT HEADER SECTION */}
      <section id="case-study-header" className="bg-white pt-6 sm:pt-8 pb-4 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          {/* Large Bold Display Title */}
          <h1 className="text-2xl sm:text-[32px] font-black text-[#0F172A] tracking-tight uppercase leading-tight py-[2px] break-words [overflow-wrap:anywhere]">
            {project.title}
          </h1>
        </div>
      </section>

      {/* 3. KEY METADATA ROW: 3 COLUMNS WITH LEFT INDICATOR BARS */}
      <section id="key-metadata-row" className="bg-white pb-[20px] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-2">
            
            {/* Column 1: CLIENT OR MANUFACTURER */}
            <div className="flex items-start gap-3 pl-3 border-l-2 border-[#DC2626] min-w-0">
              <div className="space-y-0.5 text-left min-w-0">
                <span className="block text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                  MANUFACTURER BRAND
                </span>
                <span className="block text-[16px] font-extrabold text-[#0F172A] uppercase leading-snug break-words [overflow-wrap:anywhere]">
                  {project.client}
                </span>
              </div>
            </div>

            {/* Column 2: SECTOR OR EQUIPMENT CATEGORIZATION */}
            <div className="flex items-start gap-3 pl-3 border-l-2 border-[#DC2626] min-w-0">
              <div className="space-y-0.5 text-left min-w-0">
                <span className="block text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                  EQUIPMENT CATEGORIZATION
                </span>
                <span className="block text-[16px] font-extrabold text-[#0F172A] uppercase leading-snug break-words [overflow-wrap:anywhere]">
                  {project.sector}
                </span>
              </div>
            </div>

            {/* Column 3: LOCATION OR DISTRIBUTION */}
            <div className="flex items-start gap-3 pl-3 border-l-2 border-[#DC2626] min-w-0">
              <div className="space-y-0.5 text-left min-w-0">
                <span className="block text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                  DISTRIBUTION &amp; SUPPLY
                </span>
                <span className="block text-[16px] font-extrabold text-[#0F172A] uppercase leading-snug break-words [overflow-wrap:anywhere]">
                  {project.location}
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. MAIN TWO-COLUMN BODY SECTION */}
      <section id="main-content-layout" className="pt-[40px] pb-8 sm:pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* ========================================================================= */}
            {/* LEFT COLUMN: Main Image, 5 Thumbnails Strip, Project Scope & Details */}
            {/* (NO outer container cards - directly rendered on the page) */}
            {/* ========================================================================= */}
            <div className="lg:col-span-8 min-w-0 max-w-full w-full space-y-9 overflow-hidden">
              
              {/* Visual Gallery */}
              <div className="space-y-3.5">
                
                {/* Main Featured Photo Frame */}
                <div className="relative aspect-16/10 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950 border border-slate-200/90 shadow-sm group">
                  <img
                    src={galleryItems[activeImageIndex]?.url}
                    alt={galleryItems[activeImageIndex]?.title || project.title}
                    className="w-full h-full object-cover transition-all duration-300 ease-out"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80';
                    }}
                    referrerPolicy="no-referrer"
                  />


                  {/* Left and Right navigation symbols on main photo when images > 1 */}
                  {galleryLength > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={handlePrevImage}
                        aria-label="Previous photo"
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-950/60 hover:bg-slate-950/90 text-white flex items-center justify-center backdrop-blur-xs transition-all hover:scale-105 active:scale-95 cursor-pointer focus:outline-none z-10 border border-white/20 drop-shadow-md"
                      >
                        <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
                      </button>
                      <button
                        type="button"
                        onClick={handleNextImage}
                        aria-label="Next photo"
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-950/60 hover:bg-slate-950/90 text-white flex items-center justify-center backdrop-blur-xs transition-all hover:scale-105 active:scale-95 cursor-pointer focus:outline-none z-10 border border-white/20 drop-shadow-md"
                      >
                        <ChevronRight className="w-6 h-6 stroke-[2.5]" />
                      </button>
                    </>
                  )}
                </div>

                {/* THE IMAGE CAROUSEL: Structural flow and section placement matching reference image */}
                {/* 4 Cards in a row with Left & Right arrows directly overlaid on the carousel edges */}
                <div className="relative w-full group/carousel select-none">
                  
                  {/* Left Navigation Arrow: Overlaid on the Left Edge of the Carousel */}
                  {galleryLength > 1 && (
                    <button
                      type="button"
                      onClick={handlePrevImage}
                      aria-label="Previous carousel image"
                      className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white flex items-center justify-center backdrop-blur-xs transition-all hover:scale-110 active:scale-95 cursor-pointer focus:outline-none border border-white/25 shadow-lg"
                    >
                      <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                    </button>
                  )}

                  {/* Thumbnail Cards Grid - Spanning Full Width according to actual count */}
                  <div className={`grid gap-2.5 sm:gap-3.5 w-full ${
                    galleryLength === 1
                      ? 'grid-cols-1 max-w-[200px]'
                      : galleryLength === 2
                      ? 'grid-cols-2 max-w-[420px]'
                      : galleryLength === 3
                      ? 'grid-cols-3'
                      : 'grid-cols-4'
                  }`}>
                    {(hasMoreThanFour
                      ? galleryItems.slice(thumbnailStartIndex, thumbnailStartIndex + 4)
                      : galleryItems
                    ).map((item, sliceIdx) => {
                      const realIdx = hasMoreThanFour ? thumbnailStartIndex + sliceIdx : sliceIdx;
                      const isActive = activeImageIndex === realIdx;
                      return (
                        <button
                          key={realIdx}
                          type="button"
                          onClick={() => setActiveImageIndex(realIdx)}
                          aria-label={`View ${item.title || `Photo ${realIdx + 1}`}`}
                          className={`group aspect-4/3 rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer relative bg-slate-100 ${
                            isActive
                              ? 'border-[#FACC15] ring-2 ring-[#DC2626]/20 shadow-md scale-[1.02]'
                              : 'border-slate-200 hover:border-slate-400 opacity-85 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={item.url}
                            alt={item.title || `Photo ${realIdx + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80';
                            }}
                            referrerPolicy="no-referrer"
                          />
                        </button>
                      );
                    })}
                  </div>

                  {/* Right Navigation Arrow: Overlaid on the Right Edge of the Carousel */}
                  {galleryLength > 1 && (
                    <button
                      type="button"
                      onClick={handleNextImage}
                      aria-label="Next carousel image"
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white flex items-center justify-center backdrop-blur-xs transition-all hover:scale-110 active:scale-95 cursor-pointer focus:outline-none border border-white/25 shadow-lg"
                    >
                      <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                    </button>
                  )}
                </div>
              </div>

              {/* PROJECT SCOPE & DETAILS SECTION */}
              <div className="space-y-6 text-left pt-2 min-w-0 max-w-full w-full overflow-hidden">
                
                {/* Header with Divider */}
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight uppercase">
                    PROJECT SCOPE &amp; DETAILS
                  </h2>
                  <div className="border-b-2 border-slate-900" />
                </div>

                {/* Dynamic User Scope Details or Default Fallback Scope Sections */}
                {project.scopeDetails && project.scopeDetails.trim() ? (
                  <div className="pt-2 min-w-0 max-w-full w-full overflow-hidden break-words [overflow-wrap:anywhere] [word-break:break-word]">
                    <RichTextRenderer content={project.scopeDetails} />
                  </div>
                ) : (
                  <div className="space-y-7 min-w-0 max-w-full w-full overflow-hidden">
                    {project.scopeSections.map((section, sIdx) => (
                      <div key={sIdx} className="space-y-3 min-w-0 max-w-full w-full overflow-hidden">
                        <h3 className="text-base sm:text-lg font-black text-[#0F172A] uppercase tracking-wide">
                          {section.title}
                        </h3>
                        
                        <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 leading-relaxed pl-1 min-w-0 max-w-full w-full">
                          {section.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5 min-w-0 max-w-full">
                              <span className="text-slate-400 font-bold select-none">•</span>
                              <span className="min-w-0 break-words [overflow-wrap:anywhere]">
                                <strong className="font-bold text-[#0F172A]">{bullet.label}: </strong>
                                {bullet.text}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

              </div>

            </div>

            {/* ========================================================================= */}
            {/* RIGHT COLUMN: Managing Engineer Card & Inquire About Similar Builds Form */}
            {/* ========================================================================= */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              
              {/* CARD 1: PROJECT CONTACTS & MEDIA */}
              <div className="bg-[#fcfdfd] p-6 sm:p-7 rounded-xl border border-slate-200/90 shadow-xs space-y-5 text-left">
                
                {/* Section Header: PROJECT CONTACTS & MEDIA */}
                <div>
                  <h3 className="text-base sm:text-lg font-black text-[#0F172A] tracking-wide uppercase">
                    PROJECT CONTACTS &amp; MEDIA
                  </h3>
                  <div className="border-b border-slate-200 mt-3" />
                </div>

                {/* MANAGING ENGINEER */}
                <div className="space-y-1 pt-0.5">
                  <span className="block text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                    MANAGING ENGINEER
                  </span>
                  <div className="text-[15px] sm:text-[17px] font-black text-[#0F172A] tracking-tight uppercase leading-snug">
                    {project.managingEngineer}
                  </div>
                  <div className="text-sm text-slate-500 font-medium leading-relaxed">
                    {project.engineerRole}
                  </div>
                </div>

                <div className="border-t border-slate-200" />

                {/* COMPANY PHONE NUMBER */}
                <div className="space-y-1">
                  <span className="block text-[11px] font-mono font-bold tracking-widest text-[#DC2626] uppercase">
                    COMPANY PHONE NUMBER
                  </span>
                  <div>
                    <a
                      href="tel:09750862563"
                      className="text-[15px] sm:text-[17px] font-black text-[#0F172A] hover:text-[#DC2626] transition-colors tracking-tight leading-snug inline-block"
                    >
                      0975 086 2563
                    </a>
                  </div>
                </div>

                <div className="border-t border-slate-200" />

                {/* COMPANY EMAIL ADDRESS & DESCRIPTION */}
                <div className="space-y-2">
                  <span className="block text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                    COMPANY EMAIL ADDRESS:
                  </span>
                  <div>
                    <a
                      href={`mailto:${project.email || 'emcsolarsolution@gmail.com'}`}
                      className="inline-block text-sm sm:text-base font-bold text-[#DC2626] hover:text-[#EAB308] transition-colors underline break-all"
                    >
                      {project.email || 'emcsolarsolution@gmail.com'}
                    </a>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed pt-1">
                    Professional solar engineers coordinating PV system layouts with architectural finishes, structural load capacities, and electrical/interconnection plans.
                  </p>
                </div>

              </div>

              {/* CARD 2: PRODUCT CATEGORY / HARDWARE FILTERS */}
              <div className="bg-[#fcfdfd] p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-xs text-left">
                
                {/* Header: Exact structural flow requested by user */}
                <div className="mb-4">
                  <h3 className="text-lg sm:text-xl font-black text-[#DC2626] tracking-wide uppercase">
                    PRODUCT CATEGORY
                  </h3>
                  <p className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase mt-0.5">
                    HARDWARE FILTERS
                  </p>
                  <div className="border-b border-slate-200 mt-3.5" />
                </div>

                {/* Filter Items List matching user reference image */}
                <div className="divide-y divide-slate-100">
                  {HARDWARE_CATEGORIES.map((cat) => {
                    const count = getCategoryCount(cat);
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => {
                          if (onSelectCategoryFilter) {
                            onSelectCategoryFilter(cat.name);
                          } else if (onBackToPortfolio) {
                            onBackToPortfolio();
                          }
                        }}
                        className="w-full flex items-center justify-between py-2.5 px-2 rounded-lg text-left transition-colors duration-150 hover:bg-slate-50 group cursor-pointer"
                        title={`Filter by ${cat.name}`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <Folder className="w-4 h-4 text-slate-400 group-hover:text-[#DC2626] transition-colors shrink-0 stroke-[1.6]" />
                          <span className="text-sm font-semibold text-slate-800 group-hover:text-[#DC2626] transition-colors truncate">
                            {cat.name}
                          </span>
                        </div>
                        <span className="text-xs font-normal text-slate-400 shrink-0 ml-2 group-hover:text-slate-600 transition-colors">
                          ({count})
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
