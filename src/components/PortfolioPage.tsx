import { useState, useMemo, useEffect } from 'react';
import { 
  Search,
  Filter,
  ArrowUpDown,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CheckCircle2, 
  X, 
  MapPin, 
  Zap, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Activity, 
  ArrowRight,
  Cpu,
  Package
} from 'lucide-react';
import { ProjectItem } from '../data/projectsData';
import { useSolareignData } from '../context/DataContext';

export type { ProjectItem };

interface PortfolioPageProps {
  onConsultationClick: (preset?: string) => void;
  onSelectProject?: (projectId: string) => void;
  initialCategory?: string;
}

const PRODUCT_CATEGORIES = [
  'ALL PRODUCTS',
  'CESC',
  'DEYE',
  'DYNESS',
  'GENIXGREEN',
  'GOODWE',
  'PYLONTECH',
  'SRNE',
  'SOLIS'
] as const;

const SORT_OPTIONS = [
  { label: 'LATEST', value: 'Latest' },
  { label: 'A-Z', value: 'A-Z' },
  { label: 'Z-A', value: 'Z-A' }
] as const;

export default function PortfolioPage({ onConsultationClick, onSelectProject, initialCategory }: PortfolioPageProps) {
  const { projects } = useSolareignData();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>(() => {
    return initialCategory ? initialCategory.toUpperCase() : 'ALL PRODUCTS';
  });
  const [sortBy, setSortBy] = useState<string>('Latest');
  const [selectedProduct, setSelectedProduct] = useState<ProjectItem | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const ITEMS_PER_PAGE = 9; // 3 columns x 3 rows = 9 items per page (3x3 container)

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory.toUpperCase());
    }
  }, [initialCategory]);

  // Filter and sort products based on search query, category, and sorting selection
  const filteredAndSortedProjects = useMemo(() => {
    return projects
      .filter((item) => {
        // Category / Brand filter
        if (selectedCategory !== 'ALL PRODUCTS') {
          const target = selectedCategory.toUpperCase();
          const brand = (item.brand || '').toUpperCase();
          const segment = (item.segment || '').toUpperCase();
          const category = (item.category || '').toUpperCase();
          const invBrand = (item.inverterBrand || '').toUpperCase();
          const title = (item.title || '').toUpperCase();

          const matches =
            brand === target ||
            segment === target ||
            invBrand.includes(target) ||
            title.includes(target) ||
            category.includes(target);

          if (!matches) return false;
        }

        // Search query filter
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase().trim();
        return (
          (item.title || '').toLowerCase().includes(q) ||
          (item.brand || '').toLowerCase().includes(q) ||
          (item.category || '').toLowerCase().includes(q) ||
          (item.segment || '').toLowerCase().includes(q) ||
          (item.details || '').toLowerCase().includes(q) ||
          (item.capacity || '').toLowerCase().includes(q) ||
          (item.inverterBrand || '').toLowerCase().includes(q) ||
          (item.summary || '').toLowerCase().includes(q)
        );
      })
      .sort((a, b) => {
        if (sortBy === 'A-Z') {
          return (a.title || '').localeCompare(b.title || '');
        }
        if (sortBy === 'Z-A') {
          return (b.title || '').localeCompare(a.title || '');
        }
        // Default: 'Latest' (newest published date first)
        const getTime = (p: ProjectItem): number => {
          if (p.publishedDate) {
            const t = new Date(p.publishedDate).getTime();
            if (!isNaN(t)) return t;
          }
          if (p.year) {
            const y = parseInt(p.year, 10);
            if (!isNaN(y)) return new Date(`${y}-01-01`).getTime();
          }
          return 0;
        };
        return getTime(b) - getTime(a);
      });
  }, [projects, searchQuery, selectedCategory, sortBy]);

  // Reset to page 1 whenever filters or search change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, sortBy]);

  // Pagination calculations
  const totalProjects = filteredAndSortedProjects.length;
  const totalPages = Math.max(1, Math.ceil(totalProjects / ITEMS_PER_PAGE));
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProjects = useMemo(() => {
    return filteredAndSortedProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredAndSortedProjects, startIndex]);
  const displayStart = totalProjects === 0 ? 0 : startIndex + 1;
  const displayEnd = Math.min(startIndex + ITEMS_PER_PAGE, totalProjects);

  const resolveItemBrand = (item: ProjectItem): string => {
    if (item.brand) return item.brand.toUpperCase();
    for (const b of PRODUCT_CATEGORIES) {
      if (b === 'ALL PRODUCTS') continue;
      if (
        (item.inverterBrand && item.inverterBrand.toUpperCase().includes(b)) ||
        (item.title && item.title.toUpperCase().includes(b)) ||
        (item.segment && item.segment.toUpperCase().includes(b))
      ) {
        return b;
      }
    }
    return item.segment ? item.segment.toUpperCase() : 'TIER-1';
  };

  // Helper to generalize category names into concise, standard terms (e.g., "Hybrid Inverter")
  const getGeneralizedCategory = (item: ProjectItem): string => {
    const combined = `${item.category || ''} ${item.title || ''} ${item.details || ''}`.toLowerCase();

    if (combined.includes('hybrid')) {
      return 'Hybrid Inverter';
    }
    if (
      combined.includes('battery') ||
      combined.includes('storage') ||
      combined.includes('lifepo4') ||
      combined.includes('lfp') ||
      combined.includes('ess')
    ) {
      return 'Battery Storage';
    }
    if (combined.includes('grid-tied') || combined.includes('grid tied') || combined.includes('on-grid') || combined.includes('on grid')) {
      return 'Grid-Tied Inverter';
    }
    if (combined.includes('off-grid') || combined.includes('off grid')) {
      return 'Off-Grid Inverter';
    }
    if (combined.includes('charge controller') || combined.includes('mppt') || combined.includes('regulator')) {
      return 'Charge Controller';
    }
    if (combined.includes('inverter')) {
      return 'Solar Inverter';
    }
    if (combined.includes('commercial')) {
      return 'Commercial Solar';
    }
    if (combined.includes('industrial')) {
      return 'Industrial Solar';
    }
    if (combined.includes('residential')) {
      return 'Residential Solar';
    }
    return item.category ? item.category.replace(/system|installation|package/gi, '').trim() : 'Solar Equipment';
  };

  // Helper to generalize brand names to concise manufacturer labels (e.g., "DEYE", "SRNE", "GOODWE")
  const getGeneralizedBrand = (item: ProjectItem): string => {
    const brand = resolveItemBrand(item);
    return brand.replace(/\s*(Power Supply|Solar Co\.|Co\., Ltd\.|Technology|Energy|Smart|Inverter|Series|Group).*/i, '').trim().toUpperCase();
  };

  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] font-sans antialiased">
      {/* 1. Page Hero Banner: OUR PRODUCTS */}
      <section
        id="products-hero"
        className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-gradient-to-r from-[#0F172A] via-[#111827] to-[#090D14] text-left text-white border-b border-[#DC2626]/30"
      >
        {/* Atmospheric Background with Dual-Tone Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1800&q=80"
            alt="Tier-1 solar equipment and high-efficiency systems"
            className="w-full h-full object-cover opacity-25 mix-blend-luminosity scale-105"
            loading="eager"
            referrerPolicy="no-referrer"
          />
          {/* Dark Charcoal Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#111827]/90 to-[#DC2626]/30" />
          <div className="absolute inset-0 bg-radial-at-c from-slate-900/40 via-[#0F172A]/60 to-[#0F172A]" />

          {/* Ambient Lighting Orbs */}
          <div
            aria-hidden="true"
            className="absolute -top-20 -right-20 w-96 h-96 bg-sky-500/18 rounded-full blur-3xl pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#FACC15]/15 rounded-full blur-3xl pointer-events-none"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Main Display Headline: OUR PRODUCTS */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-tight">
              OUR PRODUCTS
            </h1>
          </div>
        </div>
      </section>

      {/* SECTION 2: Filter, Search & Product Grid Showcase */}
      <section id="products-showcase" className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Filter, Search & Sort Toolbar */}
          <div className="flex flex-col md:flex-row items-stretch gap-3 sm:gap-4 mb-10 lg:mb-12">
            
            {/* 1. SEARCH INPUT */}
            <div className="relative flex-1 flex items-center bg-white border border-slate-300/90 rounded-lg px-4 py-3.5 focus-within:border-[#DC2626] focus-within:ring-2 focus-within:ring-[#DC2626]/20 transition-all shadow-xs">
              <Search className="w-4 h-4 text-slate-400 shrink-0 mr-3 pointer-events-none" />
              <input
                id="products-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, models, capacity..."
                className="w-full bg-transparent text-sm text-[#0F172A] placeholder:text-slate-400 focus:outline-none font-medium"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="p-1 text-slate-400 hover:text-slate-600 rounded-md transition-colors shrink-0 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* 2. CATEGORY FILTER DROPDOWN: The list of products (SRNE, GOODWE, DEYE, SOLIS, DYNESS, PYLONTECH, CESC, GENIXGREEN) */}
            <div className="relative min-w-[210px] lg:min-w-[240px] flex items-center justify-between bg-white border border-slate-300/90 rounded-lg px-4 py-3.5 hover:border-slate-400 focus-within:border-[#DC2626] focus-within:ring-2 focus-within:ring-[#DC2626]/20 transition-all cursor-pointer shadow-xs">
              <div className="flex items-center gap-2.5 truncate mr-3">
                <Filter className="w-4 h-4 text-slate-600 shrink-0" />
                <span className="font-bold text-xs sm:text-sm tracking-wider uppercase text-[#0F172A] truncate">
                  {selectedCategory}
                </span>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 pointer-events-none" />
              <select
                id="products-category-select"
                aria-label="Filter products by brand or category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              >
                {PRODUCT_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* 3. SORT DROPDOWN: Latest, A-Z, Z-A */}
            <div className="relative min-w-[200px] lg:min-w-[220px] flex items-center justify-between bg-white border border-slate-300/90 rounded-lg px-4 py-3.5 hover:border-slate-400 focus-within:border-[#DC2626] focus-within:ring-2 focus-within:ring-[#DC2626]/20 transition-all cursor-pointer shadow-xs">
              <div className="flex items-center gap-2.5 truncate mr-3">
                <ArrowUpDown className="w-4 h-4 text-slate-600 shrink-0" />
                <span className="font-bold text-xs sm:text-sm tracking-wider uppercase text-[#0F172A] truncate">
                  {sortBy.toUpperCase()}
                </span>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 pointer-events-none" />
              <select
                id="products-sort-select"
                aria-label="Sort products display"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* 3x3 Grid Layout (3 Columns x 3 Rows = 9 Cards Per Page) */}
          <div id="products-grid-top" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 scroll-mt-24">
            {paginatedProjects.map((item) => {
              const brandLabel = resolveItemBrand(item);
              return (
                <div
                  key={item.id}
                  id={`product-card-${item.id}`}
                  onClick={() => {
                    if (onSelectProject) {
                      onSelectProject(item.id);
                    } else {
                      setSelectedProduct(item);
                    }
                  }}
                  className="group relative bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer flex flex-col justify-between"
                >
                  {/* Featured Product Image Frame */}
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={`${item.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Subtle vignette gradient fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Card Information Body */}
                  <div className="p-5 text-left flex flex-col justify-between gap-3 flex-grow">
                    {/* Eyebrow: Brand & Category */}
                    <div className="flex items-center flex-wrap gap-2 text-xs">
                      <span className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#DC2626]">
                        <Cpu className="w-3.5 h-3.5 text-[#DC2626] shrink-0" />
                        <span>{getGeneralizedCategory(item)}</span>
                      </span>

                      <span className="text-slate-300 font-normal">•</span>

                      <span className="inline-flex items-center gap-1.5 font-semibold uppercase tracking-wider text-slate-700">
                        <ShieldCheck className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span>{getGeneralizedBrand(item)}</span>
                      </span>
                    </div>

                    {/* Title & Arrow Action Button Row */}
                    <div className="flex items-start justify-between gap-3 pt-1 min-w-0">
                      <h3 
                        className="text-lg sm:text-xl font-black text-[#0F172A] group-hover:text-[#DC2626] transition-colors tracking-tight leading-snug flex-grow min-w-0 line-clamp-2 break-words"
                        title={item.title}
                      >
                        {item.title}
                      </h3>

                      <div 
                        className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 mt-0.5 rounded-lg border border-slate-300 bg-white flex items-center justify-center text-slate-800 group-hover:bg-[#DC2626] group-hover:text-white group-hover:border-[#DC2626] transition-all shadow-2xs"
                        title="View Product Specifications"
                      >
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Section */}
          {totalProjects > 0 && (
            <div className="border-t border-slate-200/90 mt-10 sm:mt-12 pt-6 sm:pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Left Side: SHOWING X-Y OF Z PRODUCTS */}
              <div className="text-xs sm:text-sm font-mono tracking-wider text-slate-500 uppercase">
                SHOWING <span className="font-bold text-slate-900">{displayStart}-{displayEnd}</span> OF{' '}
                <span className="font-bold text-slate-900">{totalProjects}</span> PRODUCTS
              </div>

              {/* Right Side: PREV, Page Number Buttons, NEXT */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {/* PREV Button */}
                <button
                  type="button"
                  id="products-prev-page-btn"
                  onClick={() => {
                    setCurrentPage((prev) => Math.max(prev - 1, 1));
                    const el = document.getElementById('products-grid-top');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  disabled={currentPage === 1}
                  className="inline-flex items-center gap-1 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg border border-slate-300 bg-white text-slate-700 hover:text-[#DC2626] hover:border-[#DC2626] font-bold text-xs uppercase tracking-wider transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-slate-300 disabled:hover:text-slate-700 shadow-2xs cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>PREV</span>
                </button>

                {/* Page Number Buttons */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      type="button"
                      id={`products-page-btn-${pageNum}`}
                      onClick={() => {
                        setCurrentPage(pageNum);
                        const el = document.getElementById('products-grid-top');
                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }}
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                        currentPage === pageNum
                          ? 'bg-[#DC2626] text-white shadow-xs'
                          : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-[#DC2626]'
                      }`}
                    >
                      {pageNum}
                    </button>
                  ))}
                </div>

                {/* NEXT Button */}
                <button
                  type="button"
                  id="products-next-page-btn"
                  onClick={() => {
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                    const el = document.getElementById('products-grid-top');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  disabled={currentPage === totalPages}
                  className="inline-flex items-center gap-1 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg border border-slate-300 bg-white text-slate-700 hover:text-[#DC2626] hover:border-[#DC2626] font-bold text-xs uppercase tracking-wider transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-slate-300 disabled:hover:text-slate-700 shadow-2xs cursor-pointer"
                >
                  <span>NEXT</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Empty State if no search matches */}
          {filteredAndSortedProjects.length === 0 && (
            <div className="py-16 text-center bg-white rounded-3xl border border-slate-200 p-8 space-y-4">
              <p className="text-slate-500 text-base font-medium">
                No products found matching &ldquo;{searchQuery}&rdquo; in {selectedCategory}.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('ALL PRODUCTS');
                  setSortBy('Latest');
                }}
                className="px-5 py-2.5 rounded-xl bg-[#DC2626] text-white font-bold text-sm hover:bg-[#B91C1C] transition-colors duration-150 cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Modal / Lightbox Effect: Technical Specifications and Product Dossier */}
      {selectedProduct && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 bg-[#111827] text-white border-b border-slate-800">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FACC15] uppercase">
                  <span>PRODUCT SPECIFICATION: {resolveItemBrand(selectedProduct)}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {selectedProduct.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
              {/* Photo Gallery Strip */}
              {selectedProduct.galleryImages && selectedProduct.galleryImages.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                    Product Imagery &amp; Engineering Layout
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {selectedProduct.galleryImages.map((imgUrl, i) => (
                      <div key={i} className="aspect-16/10 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                        <img
                          src={imgUrl}
                          alt={`${selectedProduct.title} view ${i + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Specifications Grid */}
              <div className="space-y-3">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#DC2626]">
                  Technical Specifications &amp; Electrical Architecture
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-semibold text-slate-400 block mb-1">Capacity / Output</span>
                    <span className="text-base font-black text-[#DC2626] flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-[#FACC15]" />
                      {selectedProduct.capacity}
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-semibold text-slate-400 block mb-1">Manufacturer Brand</span>
                    <span className="text-base font-black text-slate-800 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#DC2626]" />
                      {resolveItemBrand(selectedProduct)}
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-semibold text-slate-400 block mb-1">Equipment Category</span>
                    <span className="text-base font-black text-slate-800 flex items-center gap-1.5">
                      <Cpu className="w-4 h-4 text-[#DC2626]" />
                      {selectedProduct.category}
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 sm:col-span-2 lg:col-span-1">
                    <span className="text-xs font-semibold text-slate-400 block mb-1">Warranty Coverage</span>
                    <span className="text-base font-black text-[#DC2626] flex items-center gap-1.5">
                      <Activity className="w-4 h-4 text-[#FACC15]" />
                      {selectedProduct.warranty || '5-10 Years Manufacturer'}
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 sm:col-span-2">
                    <span className="text-xs font-semibold text-slate-400 block mb-1">Model &amp; Series</span>
                    <span className="text-sm font-bold text-slate-800">
                      {selectedProduct.inverterBrand}
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 sm:col-span-3">
                    <span className="text-xs font-semibold text-slate-400 block mb-1">Hardware Specification &amp; Compatibility</span>
                    <span className="text-sm font-bold text-slate-800">
                      {selectedProduct.panelWattage || selectedProduct.annualGeneration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Product Summary & Highlights */}
              <div className="space-y-2">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                  Engineering Overview
                </p>
                <p className="text-sm text-slate-600 leading-relaxed bg-[#F8FAFC] p-4 rounded-xl border border-slate-200">
                  {selectedProduct.summary}
                </p>
                
                <div className="pt-2 space-y-2">
                  {selectedProduct.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#FACC15] flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <Package className="w-4 h-4 text-[#DC2626]" />
                <span>Authorized Philippine Supply &amp; Professional Installation</span>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const title = selectedProduct.title;
                    setSelectedProduct(null);
                    onConsultationClick(`Inquiry regarding Product: ${title}`);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold text-xs transition-colors duration-150 cursor-pointer"
                >
                  <span>Request Product Quotation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
