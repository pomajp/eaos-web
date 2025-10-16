# EAOS - Executive Administrator Operating System

Everything you need on one page, every morning.

## 🚀 Live Site

**http://localhost:3010**

## 📸 Adding Your Content

### Screenshots (Static Images)
Add PNG/JPG files to `/public/screenshots/`:
- `dossier-morning.png` - Morning dossier view
- `meeting-prep.png` - Meeting preparation screen
- `person-profile.png` - Relationship profile view

Then they'll appear in the iPhone mockups on the site.

### GIFs (Animated Demos)
Add GIF files to `/public/demos/`:
- `voice-memo-flow.gif` - Voice memo recording and transcription
- `person-profile-tap.gif` - Tapping through a person's history
- `dossier-navigation.gif` - Navigating the daily dossier

### Logos
Add SVG/PNG logos to `/public/logos/`:
- `reflect.svg` - Reflect Notes logo
- `granola.svg` - Granola AI logo
- `clay.svg` - Clay CRM logo
- `chatgpt.svg` - ChatGPT logo

## 🎨 Design System

- **Black cards** = EA-focused content
- **White cards** = Executive-focused content
- **Side-by-side layout** = Shows dual value proposition
- **Geist font** = Clean, modern typography
- **Tailwind 4.0** = Latest styling framework

## ✨ Key Features

1. **Dual audience approach** - Executive (white) and EA (black) content throughout
2. **iPhone mockups** - Three variants (default, floating, tilted) ready for your media
3. **Interactive FAQ** - Accordion with comprehensive answers
4. **Case studies** - Parallax sections with gradient backgrounds
5. **Clean testimonials** - Both executive and EA perspectives

## 🛠 Development

```bash
# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Content Organization

```
public/
├── screenshots/     # Static iPhone screenshots (.png, .jpg)
│   ├── dossier-morning.png
│   ├── meeting-prep.png
│   └── person-profile.png
├── demos/           # Animated GIFs (.gif)
│   ├── voice-memo-flow.gif
│   ├── person-profile-tap.gif
│   └── dossier-navigation.gif
└── logos/           # Partner/tool logos (.svg, .png)
    ├── reflect.svg
    ├── granola.svg
    ├── clay.svg
    └── chatgpt.svg
```

## 💡 Next Steps

1. Add actual screenshots of your daily dossier
2. Record GIF demos of key workflows
3. Include partner logos for tech stack
4. Consider adding more testimonials
5. Add Loom video embeds for detailed walkthroughs

## 🎯 Visual Treatment

**White cards (Executives):**
- Clean, professional
- Focus on outcomes and time savings
- "Stay in flow" messaging

**Black cards (EAs):**
- Bold, empowering
- Focus on professional growth and capability
- "Become indispensable" messaging

This dual treatment shows EAOS serves both sides of the partnership equally.

---

Built with Next.js 15, TypeScript, Tailwind CSS 4.0, and Geist font.# EAOS v0.1
