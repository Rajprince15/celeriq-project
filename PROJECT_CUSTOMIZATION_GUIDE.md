# Portfolio Website - Customization Guide

Welcome to your interactive portfolio website! This guide will help you customize the content with your actual project details.

## 🎯 Quick Overview

Your portfolio features:
- ✅ Ben 10 watch animation on landing (Explore button)
- ✅ After animation, smooth scroll to project showcase
- ✅ 8 interactive project cards with hover effects
- ✅ Video plays and card doubles in size on hover
- ✅ Click to open detailed project modal
- ✅ Refresh button to replay the Ben 10 animation
- ✅ Back to top button for easy navigation
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern techy design with project-specific colors

## 📁 Files You Need to Update

### 1. Project Data & Content
**File:** `/frontend/src/data/projects.ts`

This is your main configuration file. Update for each project:

```typescript
{
  id: 1,
  title: "Your Project Title",
  description: "2-3 sentence description of your project",
  techStack: ["React", "Python", "AI/ML"], // Technologies used
  liveLink: "https://your-live-project.com", // Or "#" if not available
  videoPath: "/videos/projects/project-1.mp4", // Video filename
  thumbnail: "/placeholder.svg", // Fallback image
  category: "Category Name", // e.g., "Medical AI", "Web App"
  accentColor: "from-cyan-500 to-blue-600" // Tailwind gradient
}
```

**Currently Set:**
- Project 7 (Gee Ess Opticals): Already has live link `https://geeessopticals.netlify.app`
- All others: Placeholder data with "#" for links

### 2. Project Videos
**Location:** `/frontend/public/videos/projects/`

Add your project demo videos with these exact names:
- `project-1.mp4` - Skull Reconstruction
- `project-2.mp4` - Skin Disease Detection  
- `project-3.mp4` - Head and Neck Segmentation
- `project-4.mp4` - Owner Renter
- `project-5.mp4` - Mock Interview Platform
- `project-6.mp4` - Cancer Website
- `project-7.mp4` - Gee Ess Opticals
- `project-8.mp4` - Rajasthan Diamonds Website

**Video Specifications:**
- Format: MP4 (H.264)
- Resolution: 1920x1080 or 1280x720
- Duration: 10-30 seconds (optimal)
- File Size: Under 10MB for fast loading
- Aspect Ratio: 16:9

**Tips:**
- Use screen recording tools (OBS, Loom, QuickTime)
- Show key features in first 5 seconds
- No audio needed (plays muted)
- Compress with FFmpeg if needed

## 🎨 Customization Options

### Change Project Colors
In `/frontend/src/data/projects.ts`, update the `accentColor` field:
```typescript
accentColor: "from-blue-500 to-cyan-600" // Change these Tailwind colors
```

Available gradient combinations:
- Medical/Health: `from-cyan-500 to-blue-600`, `from-emerald-500 to-teal-600`
- Creative: `from-purple-500 to-pink-600`, `from-rose-500 to-pink-600`
- Tech: `from-indigo-500 to-blue-600`, `from-blue-500 to-cyan-600`
- E-commerce: `from-yellow-500 to-amber-600`, `from-amber-500 to-orange-600`

### Update Contact Buttons
In `/frontend/src/pages/Index.tsx`, find the "Let's Build Something Amazing" section:
```typescript
<button onClick={() => window.open('mailto:your@email.com')}>
  Get In Touch
</button>
<button onClick={() => window.open('/your-resume.pdf')}>
  View Resume
</button>
```

### Add Your Skills
In `/frontend/src/pages/Index.tsx`, find the "Technologies & Skills" section:
```typescript
{[
  "React", "TypeScript", "Python", // Add your skills here
].map((tech, idx) => (...))}
```

## 🚀 How It Works

### User Flow:
1. **Landing Page** → User sees "Discover" with Explore button
2. **Click Explore** → Ben 10 watch animation plays
3. **Animation Ends** → Auto-scrolls down to project showcase
4. **Hover Card** → Video starts playing, card scales 2x
5. **Click Card** → Modal opens with full details
6. **Modal Actions** → Play/pause video, visit live project
7. **Refresh Button** → Reloads page to replay animation
8. **Back to Top** → Smooth scroll to top of page

### Component Structure:
```
Index.tsx (Main Page)
├── HeroVideo.tsx (Ben 10 animation)
├── ProjectCard.tsx (Interactive cards)
├── ProjectModal.tsx (Detail popup)
└── BackToTop.tsx (Navigation buttons)
```

## 📱 Responsive Design

The layout automatically adjusts:
- **Desktop (1200px+):** 4 columns grid
- **Laptop (1024px):** 3 columns grid
- **Tablet (768px):** 2 columns grid
- **Mobile (<768px):** 1 column grid

Hover effects are disabled on touch devices for better UX.

## 🎬 Animation Features

### Hover Effect:
- Video plays automatically
- Card smoothly scales to 2x size
- Card moves to front (z-index)
- Shows full description
- Displays all tech stack tags

### Click Effect:
- Modal slides in with fade
- Video player with play/pause controls
- Live link button (if available)
- Detailed project information
- Smooth close animation

### Scroll Effects:
- Fade-in animations on scroll
- Parallax video background
- Smooth scroll behavior
- Custom scrollbar styling

## 🛠️ Technical Details

### Tech Stack:
- **Frontend:** React 18 + TypeScript
- **Styling:** Tailwind CSS + Custom animations
- **UI Components:** Radix UI (shadcn/ui)
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Hot Reload:** Enabled for instant updates

### File Structure:
```
frontend/
├── src/
│   ├── data/
│   │   └── projects.ts          # ← Update project data here
│   ├── components/
│   │   ├── ProjectCard.tsx      # Hover card component
│   │   ├── ProjectModal.tsx     # Detail popup
│   │   ├── BackToTop.tsx        # Navigation buttons
│   │   └── HeroVideo.tsx        # Ben 10 animation
│   ├── pages/
│   │   └── Index.tsx            # Main page layout
│   └── index.css                # Global styles & animations
└── public/
    └── videos/
        ├── hero-video.mp4       # Ben 10 watch animation
        └── projects/            # ← Add project videos here
            ├── project-1.mp4
            ├── project-2.mp4
            └── ...
```

## 🐛 Troubleshooting

### Videos not playing?
- Check file names match exactly (case-sensitive)
- Ensure MP4 format with H.264 codec
- Keep file sizes under 10MB
- Check browser console for errors

### Hover effect not working?
- Hover disabled on mobile/touch devices (by design)
- Check if video file exists
- Verify video loads in browser

### Modal not opening?
- Check browser console for errors
- Ensure onClick handler is working
- Test with different browsers

### Styling issues?
- Clear browser cache
- Check Tailwind classes are correct
- Verify gradient colors exist in Tailwind

## 📝 Next Steps

1. **Update Project Data:**
   - Edit `/frontend/src/data/projects.ts`
   - Add descriptions, tech stacks, and links

2. **Add Project Videos:**
   - Record or gather demo videos
   - Name them `project-1.mp4` through `project-8.mp4`
   - Place in `/frontend/public/videos/projects/`

3. **Customize Colors:**
   - Match accent colors to project themes
   - Update gradient combinations

4. **Add Contact Info:**
   - Update contact buttons with your email
   - Add resume link
   - Optionally add social media links

5. **Test Everything:**
   - Test on desktop, tablet, and mobile
   - Check all hover effects
   - Verify modal functionality
   - Test live links

## 💡 Pro Tips

- **Video Quality:** Higher quality = bigger file size. Find the balance!
- **First Impression:** Make sure first 3-5 seconds of videos are impressive
- **Loading Speed:** Keep total video size under 50MB for all 8 projects
- **Accessibility:** Add descriptive text for screen readers
- **SEO:** Update meta tags in `index.html` for better search ranking

## 🆘 Need Help?

Common issues and solutions:
1. **Service not running:** `sudo supervisorctl restart frontend`
2. **Changes not showing:** Hard refresh browser (Ctrl+Shift+R)
3. **TypeScript errors:** Check imports and types match
4. **Styling broken:** Verify Tailwind config and classes

## 🎉 You're All Set!

Your interactive portfolio is ready to showcase your amazing projects. Just add your content and videos, and you'll have a professional, engaging portfolio that stands out!

Happy coding! 🚀
