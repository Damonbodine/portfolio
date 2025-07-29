# EmailJS Setup Instructions

Your contact form now uses EmailJS instead of SendGrid. Here's how to set it up:

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)

## 2. Set up Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service" 
3. Choose your email provider (Gmail recommended for personal use)
4. Follow the setup wizard to connect your email account

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

**Subject:** New Contact from {{from_name}} - {{subject}}

**Body:**
```
You have a new message from your portfolio website!

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

## 4. Get Your Credentials
After setup, you'll need three values:
- **Service ID**: Found in Email Services (starts with "service_")
- **Template ID**: Found in Email Templates (starts with "template_")  
- **Public Key**: Found in Account > API Keys

## 5. Update the Code
Replace these placeholders in `/src/pages/Contact.tsx`:
```javascript
const serviceId = 'service_YOUR_SERVICE_ID';     // Replace with your service ID
const templateId = 'template_YOUR_TEMPLATE_ID';  // Replace with your template ID  
const publicKey = 'YOUR_PUBLIC_KEY';             // Replace with your public key
```

## 6. Test the Form
1. Deploy your changes
2. Fill out the contact form on your website
3. Check your email to confirm it's working

## Alternative: Environment Variables (Recommended)
Instead of hardcoding the values, you can use environment variables:

1. Create a `.env.local` file in your project root:
```
VITE_EMAILJS_SERVICE_ID=service_your_actual_id
VITE_EMAILJS_TEMPLATE_ID=template_your_actual_id  
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

2. Update the Contact.tsx file:
```javascript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

3. Add these environment variables to your deployment platform (Vercel, Netlify, etc.)

## Benefits of EmailJS
- ✅ Completely free (200 emails/month)
- ✅ No backend code needed
- ✅ Works with any email provider
- ✅ Simple setup
- ✅ Reliable delivery
- ✅ No API keys to manage on server

Your contact form is now ready to use EmailJS!