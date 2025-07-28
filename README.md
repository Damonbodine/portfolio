# Damon Bodine - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, showcasing my software engineering experience and projects from Gauntlet.ai.

## 🚀 Features

- **Interactive Home Page** with personal video recording functionality
- **Projects Showcase** featuring 7 projects from Gauntlet.ai with filtering and search
- **Contact Form** with Vercel serverless function integration
- **Interactive Resume** with PDF download capability
- **About Page** with skills visualization and personal story
- **Responsive Design** that works on all devices
- **Modern UI/UX** with smooth animations and transitions
- **SEO Optimized** with proper meta tags and Open Graph support

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS with custom design system
- **Routing**: React Router DOM
- **Backend**: Vercel Serverless Functions
- **Deployment**: Vercel
- **Icons**: Heroicons (via SVG)

## 📱 Pages

### Home
- Hero section with personal introduction
- Video recording widget using MediaRecorder API
- Overview of services and skills
- Call-to-action buttons

### Projects
- Grid layout showcasing 7 Gauntlet.ai projects
- Technology filtering and search functionality
- Modal views with detailed project descriptions
- Links to demos and repositories (where available)

### Resume
- Interactive resume display
- Downloadable PDF functionality
- Skills visualization with categories
- Professional experience timeline
- Education and certifications

### About
- Personal story and journey
- Skills breakdown by category
- Interests and hobbies
- Professional background

### Contact
- Contact form with validation
- Vercel serverless function for form handling
- Social media links
- Response time information

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

## 🌐 Deployment

This project is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the framework and build settings
3. The `vercel.json` configuration handles client-side routing
4. Serverless functions in the `api/` directory are automatically deployed

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/     # Reusable React components
│   │   ├── Layout.tsx
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── pages/         # Main page components
│   │   ├── Home.tsx
│   │   ├── Projects.tsx
│   │   ├── Resume.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── types/         # TypeScript type definitions
│   └── utils/         # Helper functions
├── api/               # Vercel serverless functions
│   └── contact.ts
├── public/            # Static assets
└── vercel.json        # Vercel configuration
```

## 🎨 Design System

The project uses a custom design system built with Tailwind CSS:

- **Primary Colors**: Blue color palette (primary-50 to primary-900)
- **Typography**: Inter font family with various weights
- **Components**: Reusable classes for buttons, cards, and sections
- **Responsive**: Mobile-first approach with breakpoints
- **Animations**: Smooth transitions and hover effects

## 🔧 Customization

To customize the portfolio for your own use:

1. Update personal information in all page components
2. Replace project data in `Projects.tsx` with your own projects
3. Modify the resume content in `Resume.tsx`
4. Update social media links in `Footer.tsx` and `Contact.tsx`
5. Replace the contact form handler in `api/contact.ts` with your preferred service
6. Update SEO meta tags in `index.html`

## 📧 Contact Form Integration

The contact form is configured to send emails to `damonbodine@gmail.com` using SendGrid:

**Features:**
- ✅ Sends notification emails to your Gmail
- ✅ Sends auto-reply confirmations to form submitters  
- ✅ Professional HTML email templates
- ✅ Graceful error handling with fallback logging

**Setup Required:**
1. Create a free SendGrid account (100 emails/day free)
2. Get your API key and verify your sender email
3. Add `SENDGRID_API_KEY` environment variable in Vercel
4. Deploy and test!

📖 **See [EMAIL_SETUP.md](EMAIL_SETUP.md) for complete setup instructions**

## 🚀 Performance Features

- **Code Splitting**: Automatic code splitting with Vite
- **Lazy Loading**: Route-based code splitting
- **Optimized Images**: Proper image optimization ready
- **Fast Loading**: Minimal bundle size with tree shaking
- **Responsive Images**: Ready for image optimization

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome! Feel free to:

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

Built with ❤️ by Damon Bodine