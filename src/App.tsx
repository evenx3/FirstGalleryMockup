import { useMemo, useState } from "react"

type IconName =
  | "arrow"
  | "back"
  | "camera"
  | "check"
  | "download"
  | "heart"
  | "search"
  | "share"
  | "sparkle"

type Photo = {
  id: number
  src: string
  alt: string
  rotation: string
  size?: "wide" | "tall"
}

const photos: Photo[] = [
  {
    id: 23,
    src: "https://images.unsplash.com/photo-1763651961246-c9b480fb95f0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=900",
    alt: "Four friends posing together at the club",
    rotation: "-rotate-2",
    size: "wide",
  },
  {
    id: 18,
    src: "https://images.unsplash.com/photo-1764510376019-39d305752e9d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=700",
    alt: "Friends smiling and holding drinks",
    rotation: "rotate-3",
    size: "tall",
  },
  {
    id: 19,
    src: "https://images.unsplash.com/photo-1763655395450-b070fc4f119b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=700",
    alt: "Two friends posing at a party",
    rotation: "-rotate-3",
  },
  {
    id: 20,
    src: "https://images.unsplash.com/photo-1758394235934-6df562beab58?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=700",
    alt: "Friends dancing under colorful lights",
    rotation: "rotate-2",
  },
  {
    id: 21,
    src: "https://images.unsplash.com/photo-1766336086214-50049d946823?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=700",
    alt: "Partygoers beneath a disco ball",
    rotation: "-rotate-1",
    size: "tall",
  },
  {
    id: 22,
    src: "https://images.unsplash.com/photo-1762237783718-8fd9cf659404?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=700",
    alt: "People dancing in a smoky nightclub",
    rotation: "rotate-3",
  },
  {
    id: 24,
    src: "https://images.unsplash.com/photo-1765383835979-d7679b4428df?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=700",
    alt: "Friends dancing together",
    rotation: "-rotate-2",
  },
  {
    id: 25,
    src: "https://images.unsplash.com/photo-1766650577263-cb851cae4b01?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=700",
    alt: "A lively party under red lights",
    rotation: "rotate-1",
    size: "wide",
  },
]

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  }

  if (name === "download")
    return (
      <svg {...common}>
        <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 20h14" />
      </svg>
    )
  if (name === "share")
    return (
      <svg {...common}>
        <circle cx="18" cy="5" r="2.5" />
        <circle cx="6" cy="12" r="2.5" />
        <circle cx="18" cy="19" r="2.5" />
        <path d="m8.2 10.8 7.6-4.5M8.2 13.2l7.6 4.5" />
      </svg>
    )
  if (name === "search")
    return (
      <svg {...common}>
        <circle cx="11" cy="11" r="6.5" />
        <path d="m16 16 4 4" />
      </svg>
    )
  if (name === "camera")
    return (
      <svg {...common}>
        <path d="M4 7.5h3l1.5-2h7l1.5 2h3v11H4z" />
        <circle cx="12" cy="13" r="3.5" />
      </svg>
    )
  if (name === "heart")
    return (
      <svg {...common}>
        <path d="M20.8 5.9c-1.8-1.8-4.7-1.8-6.5 0L12 8.2 9.7 5.9a4.6 4.6 0 0 0-6.5 6.5L12 21l8.8-8.6a4.6 4.6 0 0 0 0-6.5Z" />
      </svg>
    )
  if (name === "sparkle")
    return (
      <svg {...common}>
        <path d="M12 2c.8 5.8 2.2 7.2 8 8-5.8.8-7.2 2.2-8 8-.8-5.8-2.2-7.2-8-8 5.8-.8 7.2-2.2 8-8Z" />
      </svg>
    )
  if (name === "check")
    return (
      <svg {...common}>
        <path d="m5 12 4.2 4.2L19 6.5" />
      </svg>
    )
  if (name === "back")
    return (
      <svg {...common}>
        <path d="m15 18-6-6 6-6" />
      </svg>
    )
  return (
    <svg {...common}>
      <path d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  )
}

function Button({
  children,
  className = "",
  onClick,
  ariaLabel,
  type = "button",
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  ariaLabel?: string
  type?: "button" | "submit"
}) {
  return (
    <button
      type={type}
      className={`button ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}

function Brand() {
  return (
    <div className="brand" aria-label="Snapshot and Halcyon">
      <div className="snapshot-mark">
        <Icon name="camera" size={17} />
        <span>SNAPSHOT</span>
      </div>
      <span className="brand-x">×</span>
      <div className="club-mark">
        HALCYON
        <small>night club</small>
      </div>
    </div>
  )
}

function Doodles() {
  return (
    <div className="doodles" aria-hidden="true">
      <span className="doodle doodle-star">✦</span>
      <span className="doodle doodle-moon">☾</span>
      <span className="doodle doodle-heart">♡</span>
      <span className="doodle doodle-sun">☼</span>
      <span className="doodle doodle-spark">✧</span>
      <span className="doodle doodle-firework">✺</span>
      <span className="doodle doodle-heart-two">♥</span>
      <span className="doodle doodle-moon-two">☽</span>
      <span className="doodle doodle-burst">※</span>
      <span className="doodle doodle-stars">✦ ✧</span>
      <span className="doodle doodle-sun-two">☼</span>
      <span className="doodle doodle-spark-two">✣</span>
      <span className="doodle doodle-title-heart">♡</span>
      <span className="doodle doodle-title-burst">✺</span>
      <span className="doodle doodle-title-moon">☾</span>
      <span className="doodle doodle-title-star">✦</span>
      <span className="doodle doodle-edge-spark">✧</span>
      <span className="doodle doodle-edge-sun">☼</span>
      <span className="doodle doodle-edge-heart">♥</span>
      <span className="doodle doodle-edge-burst">※</span>
      <span className="doodle doodle-extra-one">✦</span>
      <span className="doodle doodle-extra-two">♡</span>
      <span className="doodle doodle-extra-three">☼</span>
      <span className="doodle doodle-extra-four">✧</span>
      <span className="doodle doodle-extra-five">☾</span>
      <span className="doodle doodle-extra-six">✺</span>
      <span className="doodle doodle-extra-seven">♥</span>
      <span className="doodle doodle-extra-eight">※</span>
      <span className="doodle doodle-final-moon">☾</span>
      <span className="doodle doodle-final-heart">♡</span>
    </div>
  )
}

function FairyLights() {
  const lights = [
    [70, 24],
    [170, 28],
    [280, 31],
    [390, 33],
    [500, 34],
    [610, 33],
    [720, 31],
    [820, 28],
    [910, 25],
    [980, 21],
  ]

  return (
    <div className="fairy-lights" aria-hidden="true">
      <svg className="light-svg" viewBox="0 0 1000 72" preserveAspectRatio="none">
        <path className="light-wire" d="M0 20 Q500 48 1000 20" />
        {lights.map(([x, y]) => (
          <g key={x}>
            <line className="light-stem" x1={x} y1={y} x2={x} y2={y + 9} />
            <ellipse className="light-bulb" cx={x} cy={y + 15} rx="5" ry="7" />
          </g>
        ))}
      </svg>
    </div>
  )
}

function Polaroid({
  photo,
  hero = false,
  highlighted = false,
  onClick,
}: {
  photo: Photo
  hero?: boolean
  highlighted?: boolean
  onClick?: () => void
}) {
  return (
    <Button
      className={`polaroid ${photo.rotation} ${hero ? "polaroid-hero" : ""} ${
        photo.size ? `polaroid-${photo.size}` : ""
      } ${highlighted ? "is-highlighted" : ""}`}
      onClick={onClick}
      ariaLabel={`Open photo ${photo.id.toString().padStart(3, "0")}`}
    >
      <div className="photo-frame">
        <img src={photo.src} alt={photo.alt} />
        {highlighted && (
          <span className="found-badge">
            <Icon name="sparkle" size={14} /> Found it!
          </span>
        )}
      </div>
      <span className="photo-number">#{photo.id.toString().padStart(3, "0")}</span>
    </Button>
  )
}

export default function App() {
  const [screen, setScreen] = useState<"photo" | "collage">("photo")
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [search, setSearch] = useState("")
  const [saved, setSaved] = useState(false)
  const [note, setNote] = useState("")

  const targetId = useMemo(() => {
    const parsed = Number(search.replace(/\D/g, ""))
    return search && Number.isFinite(parsed) ? parsed : null
  }, [search])

  const savePhoto = () => setSaved(true)

  if (saved) {
    return (
      <main className="app-shell confirmation-screen">
        <div className="confirmation-card">
          <div className="success-icon">
            <Icon name="check" size={32} />
          </div>
          <p className="eyebrow">SAFE & SOUND</p>
          <h1>Memory saved!</h1>
          <p className="confirmation-copy">
            Photo #023 is now in your camera roll. The night is yours to keep.
          </p>
          <Doodles />
          <Polaroid photo={photos[0]} hero />
          <label className="note-field">
            <span>Leave a little note for tonight</span>
            <textarea
              value={note}
              onChange={(event) => setNote(event.target.value)}
              placeholder="Best night ever..."
              maxLength={72}
            />
          </label>
          <div className="confirmation-actions">
            <Button className="primary-button" onClick={() => setSaved(false)}>
              Back to my photo <Icon name="arrow" />
            </Button>
            <Button
              className="text-button"
              onClick={() => {
                setSaved(false)
                setScreen("collage")
              }}
            >
              Explore the collage
            </Button>
          </div>
        </div>
      </main>
    )
  }

  if (selectedPhoto) {
    return (
      <main className="app-shell viewer-screen">
        <header className="viewer-header">
          <Button className="icon-button" onClick={() => setSelectedPhoto(null)} ariaLabel="Back to collage">
            <Icon name="back" />
          </Button>
          <Brand />
          <span className="header-spacer" />
        </header>
        <section className="viewer-content">
          <p className="eyebrow">HALCYON · 14.06.25</p>
          <h1>Photo #{selectedPhoto.id.toString().padStart(3, "0")}</h1>
          <Doodles />
          <div className="viewer-photo-wrap">
            <img src={selectedPhoto.src} alt={selectedPhoto.alt} />
            <span className="tape tape-left" />
            <span className="tape tape-right" />
          </div>
          <div className="viewer-actions">
            <Button className="primary-button" onClick={savePhoto}>
              <Icon name="download" /> Download
            </Button>
            <Button
              className="secondary-button"
              onClick={() =>
                navigator.share?.({
                  title: "Snapshot at Halcyon",
                  text: `Photo #${selectedPhoto.id.toString().padStart(3, "0")}`,
                  url: window.location.href,
                })
              }
            >
              <Icon name="share" /> Share
            </Button>
          </div>
          <Button className="text-button" onClick={() => setSelectedPhoto(null)}>
            Back to collage
          </Button>
        </section>
      </main>
    )
  }

  if (screen === "photo") {
    return (
      <main className="app-shell your-photo-screen">
        <FairyLights />
        <header className="topbar">
          <Brand />
          <span className="event-pill">14 JUN '25</span>
        </header>
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">FRESH FROM THE BOOTH</p>
            <h1>
              This one’s
              <br />
              <em>yours.</em>
            </h1>
            <p className="subcopy">Halcyon Summer Solstice · Room 02</p>
          </div>
          <Doodles />
          <div className="hero-photo-stage">
            <span className="tape tape-left" />
            <Polaroid photo={photos[0]} hero />
          </div>
          <div className="hero-actions">
            <Button className="primary-button" onClick={savePhoto}>
              <Icon name="download" /> Download photo
            </Button>
            <Button className="secondary-button" onClick={() => setScreen("collage")}>
              View event collage <Icon name="arrow" />
            </Button>
          </div>
          <p className="privacy-note">
            <Icon name="heart" size={14} /> Only guests from this event can see these memories.
          </p>
        </section>
      </main>
    )
  }

  return (
    <main className="app-shell collage-screen">
      <FairyLights />
      <header className="topbar collage-topbar">
        <Brand />
        <Button className="my-photo-button" onClick={() => setScreen("photo")}>
          My photo <span>#023</span>
        </Button>
      </header>

      <section className="collage-intro">
        <p className="eyebrow">14 JUNE 2025 · ROOM 02</p>
        <h1>
          Summer Solstice
          <em> at Halcyon</em>
        </h1>
        <p>One night, 86 memories.</p>
      </section>
      <Doodles />

      <form
        className="search-card"
        onSubmit={(event) => {
          event.preventDefault()
          const node = document.querySelector(".is-highlighted")
          node?.scrollIntoView({ behavior: "smooth", block: "center" })
        }}
      >
        <label htmlFor="photo-search">Find your photo</label>
        <div className="search-row">
          <span className="search-hash">#</span>
          <input
            id="photo-search"
            inputMode="numeric"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Enter photo number"
            aria-describedby="search-help"
          />
          <Button type="submit" className="search-button" ariaLabel="Find photo">
            <Icon name="search" />
          </Button>
        </div>
        <small id="search-help">
          Try 3, 003, or the number printed beneath your photo.
        </small>
        {targetId !== null && !photos.some((photo) => photo.id === targetId) && (
          <p className="search-error">No photo #{targetId.toString().padStart(3, "0")} in this event yet.</p>
        )}
      </form>

      <section className="memory-wall" aria-label="Event photo collage">
        <div className="wall-heading">
          <span>86 memories</span>
          <span>tap to open</span>
        </div>
        <div className="photo-grid">
          {photos.map((photo) => (
            <Polaroid
              key={photo.id}
              photo={photo}
              highlighted={targetId === photo.id}
              onClick={() => setSelectedPhoto(photo)}
            />
          ))}
        </div>
        <p className="end-note">you made it a night to remember ♡</p>
      </section>
    </main>
  )
}
