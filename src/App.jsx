import { useEffect, useMemo, useRef, useState } from "react";

const videos = [
  {
    id: 1,
    platform: "TikTok",
    title: "This little gadget fixed my morning routine ☀️",
    creator: "@theeverydayedit",
    searchTerms: "أداة منزلية منتج رائج روتين الصباح gadget home product",
    views: 2840000,
    comments: 48200,
    shares: 71600,
    age: "2 days ago",
    duration: "0:38",
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=960&q=85",
    imagePosition: "center 56%",
  },
  {
    id: 2,
    platform: "YouTube",
    title: "The viral kitchen find I can't stop talking about",
    creator: "Mia's Little Things",
    searchTerms: "أدوات المطبخ مطبخ cooking kitchen tool",
    views: 1920000,
    comments: 31800,
    shares: 42900,
    age: "5 days ago",
    duration: "12:04",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=960&q=85",
    imagePosition: "center 51%",
  },
  {
    id: 3,
    platform: "Instagram",
    title: "POV: you finally found the perfect travel bag ✈️",
    creator: "@wanderwithlea",
    searchTerms: "حقيبة سفر سفر travel bag حقيبة",
    views: 1580000,
    comments: 26700,
    shares: 53400,
    age: "1 week ago",
    duration: "0:24",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=960&q=85",
    imagePosition: "center 47%",
  },
  {
    id: 4,
    platform: "Facebook",
    title: "Everyone in the comments is asking where to get this",
    creator: "Good Finds Daily",
    searchTerms: "منتجات رائجة منتجات منزلية viral products",
    views: 946000,
    comments: 19400,
    shares: 38600,
    age: "4 days ago",
    duration: "0:52",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=960&q=85",
    imagePosition: "center 57%",
  },
  {
    id: 5,
    platform: "TikTok",
    title: "An honest review after using it for 30 days",
    creator: "@testedbytay",
    searchTerms: "مراجعة المنتج تقييم review تجربة",
    views: 831000,
    comments: 12700,
    shares: 22100,
    age: "6 days ago",
    duration: "0:46",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=960&q=85",
    imagePosition: "center 48%",
  },
  {
    id: 6,
    platform: "YouTube",
    title: "Small space? These clever finds make all the difference",
    creator: "The Cozy Corner",
    searchTerms: "تنظيم المنزل مساحة صغيرة home organization منزل",
    views: 718000,
    comments: 9800,
    shares: 17400,
    age: "1 week ago",
    duration: "8:32",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=960&q=85",
    imagePosition: "center 52%",
  },
  {
    id: 7,
    platform: "Instagram",
    title: "The skincare tool that changed my nighttime routine",
    creator: "@glowwithjules",
    searchTerms: "العناية بالبشرة بشرة skincare أداة العناية",
    views: 694000,
    comments: 11500,
    shares: 14800,
    age: "8 days ago",
    duration: "0:31",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=960&q=85",
    imagePosition: "center 49%",
  },
  {
    id: 8,
    platform: "TikTok",
    title: "Things I bought because of TikTok (and actually love)",
    creator: "@thegoodlist",
    searchTerms: "منتجات تيك توك منتجات رائجة التسوق",
    views: 587000,
    comments: 8400,
    shares: 12900,
    age: "9 days ago",
    duration: "0:41",
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=960&q=85",
    imagePosition: "center 56%",
  },
  {
    id: 9,
    platform: "Facebook",
    title: "A little upgrade that makes a big difference at home",
    creator: "Simple Home Living",
    searchTerms: "ديكور المنزل تحسين المنزل home decor",
    views: 463000,
    comments: 7200,
    shares: 10600,
    age: "10 days ago",
    duration: "0:57",
    image:
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=960&q=85",
    imagePosition: "center 52%",
  },
  {
    id: 10,
    platform: "YouTube",
    title: "I tested the internet's most-loved travel essentials",
    creator: "Carry On Club",
    searchTerms: "مستلزمات السفر سفر travel essentials",
    views: 391000,
    comments: 6300,
    shares: 9200,
    age: "12 days ago",
    duration: "14:18",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=960&q=85",
    imagePosition: "center 48%",
  },
  {
    id: 11,
    platform: "Instagram",
    title: "Wait, this desk accessory is actually so useful",
    creator: "@workfromanywhere",
    searchTerms: "مكتب العمل من المنزل أدوات مكتبية desk office",
    views: 284000,
    comments: 4100,
    shares: 7800,
    age: "2 weeks ago",
    duration: "0:19",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=960&q=85",
    imagePosition: "center 50%",
  },
  {
    id: 12,
    platform: "TikTok",
    title: "My top 3 finds for anyone who loves a tidy space",
    creator: "@neatwithnicole",
    searchTerms: "ترتيب المنزل تنظيم التخزين tidy home organization",
    views: 196000,
    comments: 2800,
    shares: 5400,
    age: "2 weeks ago",
    duration: "0:35",
    image:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=960&q=85",
    imagePosition: "center 51%",
  },
];

const platforms = [
  { name: "YouTube", color: "youtube" },
  { name: "Instagram", color: "instagram" },
  { name: "Facebook", color: "facebook" },
  { name: "TikTok", color: "tiktok" },
];

function Icon({ name, size = 18, className = "" }) {
  const paths = {
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></>,
    message: <><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" /></>,
    share: <><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.7 10.7 6.6-4.4m-6.6 9 6.6 4.4" /></>,
    chevron: <path d="m9 18 6-6-6-6" />,
    down: <path d="m7 10 5 5 5-5" />,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 11h18" /></>,
    sort: <><path d="M4 6h16M7 12h10m-7 6h4" /><path d="m18 15 3 3-3 3" /></>,
    play: <path d="m9 6 10 6-10 6V6Z" />,
    close: <><path d="m18 6-12 12M6 6l12 12" /></>,
    filter: <><path d="M4 7h16M7 12h10m-7 5h4" /><circle cx="8" cy="7" r="2" /><circle cx="16" cy="12" r="2" /></>,
  };
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

function formatNumber(value) {
  if (value >= 1000000) return `${(value / 1000000).toFixed(value >= 10000000 ? 0 : 1).replace(/\.0$/, "")}M`;
  if (value >= 1000) return `${(value / 1000).toFixed(value >= 100000 ? 0 : 1).replace(/\.0$/, "")}K`;
  return value.toLocaleString();
}

function normalizeSearchText(value) {
  return value
    .normalize("NFKC")
    .replace(/[\u064B-\u065F\u0670\u0640]/g, "")
    .toLocaleLowerCase();
}

function getPlatformCount(platform) {
  return videos.filter((video) => video.platform === platform).length;
}

function VideoCard({ video }) {
  const handleShare = async () => {
    const shareData = { title: video.title, text: `${video.title} — ${video.creator}` };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(`${shareData.text}\nhttps://example.com/videos/${video.id}`);
        window.alert("Video details copied to your clipboard.");
      } else {
        window.alert("Sharing isn't available in this browser.");
      }
    } catch (error) {
      if (error?.name !== "AbortError") {
        window.alert("Couldn't share this video. Please try again.");
      }
    }
  };

  return (
    <article className="video-card group">
      <a
        className="thumbnail-wrap"
        href={`https://example.com/videos/${video.id}`}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${video.title}`}
      >
        <img
          className="thumbnail"
          src={video.image}
          alt=""
          loading="lazy"
          style={{ objectPosition: video.imagePosition }}
        />
        <span className="thumbnail-shade" />
        <span className="platform-badge">
          <span className={`platform-dot ${video.platform.toLowerCase()}`} />
          {video.platform}
        </span>
        <span className="duration">{video.duration}</span>
        <span className="play-button"><Icon name="play" size={18} /></span>
        <span className="image-age">{video.age}</span>
      </a>
      <div className="video-content">
        <h3 className="video-title" title={video.title}>{video.title}</h3>
        <p className="video-creator">{video.creator}</p>
        <div className="video-metrics" aria-label="Video engagement metrics">
          <span><Icon name="eye" size={15} />{formatNumber(video.views)}</span>
          <span><Icon name="message" size={15} />{formatNumber(video.comments)}</span>
          <span><Icon name="share" size={15} />{formatNumber(video.shares)}</span>
        </div>
        <div className="card-actions">
          <a
            className="open-link"
            href={`https://example.com/videos/${video.id}`}
            target="_blank"
            rel="noreferrer"
          >
            Open link <Icon name="chevron" size={14} />
          </a>
          <button className="share-button" onClick={handleShare} aria-label={`Share ${video.title}`}>
            <Icon name="share" size={15} />
            <span>Share</span>
          </button>
        </div>
      </div>
    </article>
  );
}

function App() {
  const [query, setQuery] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [sortBy, setSortBy] = useState("views");
  const [page, setPage] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const searchInputRef = useRef(null);
  const pageSize = 6;

  useEffect(() => {
    const handleShortcut = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  const filteredVideos = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    return videos
      .filter((video) => (
        (!selectedPlatforms.length || selectedPlatforms.includes(video.platform)) &&
        (!normalizedQuery || normalizeSearchText(
          `${video.title} ${video.creator} ${video.platform} ${video.searchTerms}`,
        ).includes(normalizeSearchText(normalizedQuery)))
      ))
      .sort((a, b) => sortBy === "views" ? b.views - a.views : b.comments - a.comments);
  }, [query, selectedPlatforms, sortBy]);

  const pageCount = Math.ceil(filteredVideos.length / pageSize);
  const visibleVideos = filteredVideos.slice((page - 1) * pageSize, page * pageSize);
  const totalViews = filteredVideos.reduce((sum, video) => sum + video.views, 0);
  const totalComments = filteredVideos.reduce((sum, video) => sum + video.comments, 0);
  const averageViews = filteredVideos.length ? Math.round(totalViews / filteredVideos.length) : 0;
  const averageComments = filteredVideos.length ? Math.round(totalComments / filteredVideos.length) : 0;
  const formattedQuery = query.trim() || "all products";

  const togglePlatform = (platform) => {
    setPage(1);
    setSelectedPlatforms((current) => (
      current.includes(platform)
        ? current.filter((item) => item !== platform)
        : [...current, platform]
    ));
  };

  const resetFilters = () => {
    setSelectedPlatforms([]);
    setQuery("");
    setPage(1);
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#" aria-label="Minea home">
          <span className="brand-mark"><span /><span /><span /><span /></span>
          <span className="brand-name">minea</span>
        </a>
        <div className="topbar-divider" />
        <div className="workspace-label">
          <span className="workspace-icon"><Icon name="search" size={15} /></span>
          <span>Product research</span>
        </div>
        <div className="topbar-right">
          <span className="live-indicator"><i /> Live data</span>
          <button className="avatar" aria-label="Account menu">S</button>
        </div>
      </header>

      <main className="page-main">
        <section className="page-heading">
          <div className="heading-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> PRODUCT INTELLIGENCE</div>
            <h1>Product <span>Research</span></h1>
            <p dir={query.trim() ? "auto" : undefined}>
              {query.trim()
                ? <>Showing trending videos for <b dir="auto">“{query.trim()}”</b>.</>
                : "Find your next winning product, backed by what’s trending."}
            </p>
          </div>
          <div className="heading-note">
            <span className="sparkle">✳</span>
            <span>Fresh inspiration,<br /><b>every single day.</b></span>
          </div>
        </section>

        <section className="search-panel" aria-label="Search videos">
          <div className="search-input-wrap">
            <Icon name="search" size={19} className="search-icon" />
            <input
              type="search"
              ref={searchInputRef}
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setPage(1);
              }}
              placeholder="Search products, keywords... (e.g. skincare, أدوات المطبخ)"
              aria-label="Search products and videos in English or Arabic"
              dir="auto"
            />
            {query && (
              <button className="clear-search" onClick={() => { setQuery(""); setPage(1); }} aria-label="Clear search">
                <Icon name="close" size={16} />
              </button>
            )}
          </div>
          <span className="search-shortcut">⌘ K</span>
          <button className="search-button" onClick={() => setPage(1)}>Search <Icon name="chevron" size={16} /></button>
        </section>

        <section className="stats-grid" aria-label="Search statistics">
          <div className="stat-card">
            <span className="stat-icon orange"><Icon name="play" size={17} /></span>
            <div><span className="stat-label">Total videos</span><strong>{filteredVideos.length.toLocaleString()}</strong></div>
            <span className="stat-footnote">matching results</span>
          </div>
          <div className="stat-card">
            <span className="stat-icon purple"><Icon name="eye" size={18} /></span>
            <div><span className="stat-label">Avg. views</span><strong>{formatNumber(averageViews)}</strong></div>
            <span className="stat-footnote">per video</span>
          </div>
          <div className="stat-card">
            <span className="stat-icon blue"><Icon name="message" size={17} /></span>
            <div><span className="stat-label">Avg. comments</span><strong>{formatNumber(averageComments)}</strong></div>
            <span className="stat-footnote">per video</span>
          </div>
        </section>

        <div className="results-toolbar">
          <div className="results-label">
            <h2>Trending videos</h2>
            <span className="results-count">{filteredVideos.length} results</span>
          </div>
          <div className="toolbar-controls">
            <button
              className={`mobile-filter-toggle ${filtersOpen ? "active" : ""}`}
              onClick={() => setFiltersOpen((open) => !open)}
              aria-expanded={filtersOpen}
            >
              <Icon name="filter" size={16} /> Filters
              {selectedPlatforms.length > 0 && <span className="filter-count">{selectedPlatforms.length}</span>}
            </button>
            <label className="sort-control">
              <Icon name="sort" size={16} />
              <span>Sort by</span>
              <select value={sortBy} onChange={(event) => { setSortBy(event.target.value); setPage(1); }}>
                <option value="views">Most views</option>
                <option value="comments">Most comments</option>
              </select>
              <Icon name="down" size={14} />
            </label>
          </div>
        </div>

        <div className="results-layout">
          <aside className={`filter-sidebar ${filtersOpen ? "filters-open" : ""}`}>
            <div className="filter-header">
              <div><Icon name="filter" size={16} /><span>Filters</span></div>
              <button onClick={resetFilters}>Reset</button>
            </div>

            <div className="filter-section">
              <div className="filter-section-title"><span>Platform</span><span className="section-chevron">−</span></div>
              <div className="platform-options">
                {platforms.map(({ name, color }) => (
                  <label className="platform-option" key={name}>
                    <input
                      type="checkbox"
                      checked={selectedPlatforms.includes(name)}
                      onChange={() => togglePlatform(name)}
                    />
                    <span className={`custom-checkbox ${selectedPlatforms.includes(name) ? "checked" : ""}`} />
                    <span className={`platform-mark ${color}`}>{name === "YouTube" ? "▶" : name === "Instagram" ? "◎" : name === "Facebook" ? "f" : "♪"}</span>
                    <span className="platform-name">{name}</span>
                    <span className="platform-count">{getPlatformCount(name)}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-section date-section">
              <div className="filter-section-title"><span>Date range</span><span className="section-chevron">−</span></div>
              <button className="date-select">
                <Icon name="calendar" size={15} />
                <span>Last 30 days</span>
                <Icon name="down" size={14} />
              </button>
              <div className="date-caption"><span className="date-dot" /> Data from the last 30 days</div>
            </div>

            <div className="sidebar-tip">
              <span className="tip-glow">✳</span>
              <p><b>Pro tip</b><br />Look for products with high shares and growing engagement.</p>
            </div>
          </aside>

          <section className="video-results" aria-label={`Video results for ${formattedQuery}`}>
            {visibleVideos.length ? (
              <div className="video-grid">
                {visibleVideos.map((video) => <VideoCard key={video.id} video={video} />)}
              </div>
            ) : (
              <div className="empty-state">
                <span className="empty-icon"><Icon name="search" size={22} /></span>
                <h3>No videos found</h3>
                <p>Try a different search term or adjust your filters.</p>
                <button onClick={resetFilters}>Clear search &amp; filters</button>
              </div>
            )}

            {pageCount > 1 && (
              <nav className="pagination" aria-label="Pagination">
                <span className="page-summary">
                  Showing <b>{(page - 1) * pageSize + 1}–{Math.min(page * pageSize, filteredVideos.length)}</b> of <b>{filteredVideos.length}</b>
                </span>
                <div className="page-buttons">
                  <button
                    className="page-arrow"
                    onClick={() => setPage((current) => Math.max(1, current - 1))}
                    disabled={page === 1}
                    aria-label="Previous page"
                  >‹</button>
                  {Array.from({ length: pageCount }, (_, index) => (
                    <button
                      key={index + 1}
                      className={`page-number ${page === index + 1 ? "current" : ""}`}
                      onClick={() => setPage(index + 1)}
                      aria-current={page === index + 1 ? "page" : undefined}
                    >{index + 1}</button>
                  ))}
                  <button
                    className="page-arrow"
                    onClick={() => setPage((current) => Math.min(pageCount, current + 1))}
                    disabled={page === pageCount}
                    aria-label="Next page"
                  >›</button>
                </div>
              </nav>
            )}
          </section>
        </div>
        <footer className="page-footer"><span>Showing trends that matter.</span><span>Made for curious minds <i>✳</i></span></footer>
      </main>
    </div>
  );
}

export default App;
