// ============================================================
// config.js — the only file you need to edit
// ============================================================

const CONFIG = {

  // ----------------------------------------------------------
  // PROFILE
  // ----------------------------------------------------------
  profileName:   "𝚣𝚍𝚟ø𝚗𝚒𝚡",      // name shown on the card
  nameTooltip:   "curiosity killed the cat",         // tooltip on hover over the name
  nameEffect:    "noise",         // "noise" = TV interference | "none" = plain text
  statusText:    "Access is a mindset, not a permission", // text below the name (typewriter effect)
  tabTitle:      "{ 𝚣𝚍𝚟ø𝚗𝚒𝚡 }",      // animated browser tab title
  entrySymbol:   "⍉",            // symbol shown on the entry screen

  // ----------------------------------------------------------
  // FILES — place them in assets/ with these exact names
  // ----------------------------------------------------------
  avatar:              "assets/avatar.jpg",
  backgroundVideo:     "assets/background.mp4",
  customCursor:        "assets/cursor.png",
  customCursorHotspot: "0 0",    // "0 0" = tip of the cursor (top-left corner)

  // ----------------------------------------------------------
  // AVATAR
  // ----------------------------------------------------------
  avatarSize:       "118px",
  // animated Discord-style decoration — leave "" to disable
  avatarDecoration: "",

  // ----------------------------------------------------------
  // BADGES / ROLES
  // Add, remove or reorder. "icon" = path inside assets/badges/
  // ----------------------------------------------------------
  badges: [],
  badgeSize:                "22px",
  badgeContainerBackground: "rgba(255, 255, 255, 0.00)",
  badgeContainerBorder:     "2px solid rgba(255, 255, 255, 0.00)",

  // ----------------------------------------------------------
  // DISCORD (static — no API, edit manually)
  // ----------------------------------------------------------
  discordUsername: "Zdvonix",
  discordStatus:   "Every lock is just a question waiting for the right answers",
  discordAvatar:   "assets/discord-avatar.jpg",
  discordAvatarSize:   "74px",
  discordAvatarBorder: "2px solid rgba(255, 255, 255, 0.15)",
  // status: "online" | "idle" | "dnd" | "offline"
  discordPresenceStatus: "online",

  // ----------------------------------------------------------
  // SOCIAL LINKS
  // Add, remove or reorder. "icon" = path inside assets/icons/
  // ----------------------------------------------------------
  socialLinks: [
    { name: "Steam", url: "https://steamcommunity.com/id/Zdvonix/",         icon: "assets/icons/steam.png" },
    { name: "Discord",   url: "https://discord.com/users/956929744178413632", icon: "assets/icons/discord.png"   },
    { name: "Telegram",    url: "https://t.me/zdvonix",           icon: "assets/icons/telegram.png"    },
    { name: "Github",  url: "https://github.com/zdvonix",          icon: "assets/icons/github.png"  },
,
  ],
  iconSize:         "36px",
  iconBorderRadius: "8px",
  iconGlowColor:    "#ffffff",

  // ----------------------------------------------------------
  // CARD
  // ----------------------------------------------------------
  cardMaxWidth:        "44rem",
  cardBorderRadius:    "85px",
  cardBackground:      "rgba(255, 255, 255, 0.03)",
  cardBorder:          "none",
  cardRevealDelay:     300,        // ms between entry click and card appearance
  cardTiltIntensity:   15,         // tilt degrees on mouse move (0 = disabled)
  cardTiltPerspective: "1000px",   // 3D perspective (lower = more dramatic)

  // ----------------------------------------------------------
  // DISCORD BOX (presence box inside the card)
  // ----------------------------------------------------------
  discordBoxBackground: "rgba(255, 255, 255, 0.07)",
  discordBoxRadius:     "14px",
  discordBoxBorder:     "2px solid rgba(255, 255, 255, 0.05)",

  // ----------------------------------------------------------
  // COLORS / STYLE
  // ----------------------------------------------------------
  usernameGlow: "0 0 16.5px #ffffff", // name glow ("none" to disable)

  // ----------------------------------------------------------
  // BACKGROUND PARTICLES
  // ----------------------------------------------------------
  particleColor:            "#ffffff",
  particleCount:            70,
  particleFallDuration:     15,    // seconds to cross the screen top to bottom
  particleSwayDuration:     3,     // seconds per horizontal sway cycle
  particleSwayAmount:       80,    // pixels of horizontal sway
  particleParallaxStrength: 0.08,  // mouse parallax strength (0 = disabled)

  // ----------------------------------------------------------
  // CURSOR TRAIL
  // ----------------------------------------------------------
  shootingStarColors:       ["#ffffff", "#c2c2c2", "#ebe8e8"],
  shootingStarSize:         3,
  shootingStarMaxParticles: 4,     // particles spawned per mouse movement
  shootingStarFadeFrames:   30,    // frames until each particle fades out
  shootingStarGlow:         8,     // glow intensity around each sparkle

};
