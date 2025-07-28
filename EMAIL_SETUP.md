# Email Setup Guide for Portfolio Contact Form

This guide will help you set up email functionality for your portfolio contact form using SendGrid.

## 🚀 Quick Setup

### 1. Create a SendGrid Account

1. Go to [SendGrid.com](https://sendgrid.com) and create a free account
2. Free tier includes 100 emails per day (perfect for a portfolio)
3. Verify your email address

### 2. Get Your API Key

1. In SendGrid dashboard, go to **Settings** → **API Keys**
2. Click **Create API Key**
3. Name it something like "Portfolio Contact Form"
4. Choose **Restricted Access** and give it **Mail Send** permissions
5. Copy the API key (you won't see it again!)

### 3. Configure Sender Authentication

**Option A: Single Sender Verification (Easiest)**
1. Go to **Settings** → **Sender Authentication**
2. Click **Verify a Single Sender**
3. Use your email: `damonbodine@gmail.com`
4. Fill out the form and verify via email
5. Update the contact function to use your verified email as the `from` address

**Option B: Domain Authentication (More Professional)**
1. Go to **Settings** → **Sender Authentication**
2. Click **Authenticate Your Domain**
3. Enter your domain (e.g., `damonbodine.dev`)
4. Add the DNS records to your domain provider
5. Use `noreply@yourdomain.com` as the `from` address

### 4. Update the Contact Function

If you use **Single Sender Verification**, update the `from` addresses in `/api/contact.ts`:

```typescript
// Change these lines:
from: 'noreply@damonbodine.dev'

// To:
from: 'damonbodine@gmail.com'
```

### 5. Add Environment Variable to Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new variable:
   - **Name**: `SENDGRID_API_KEY`
   - **Value**: Your SendGrid API key (starts with `SG.`)
   - **Environment**: All (Production, Preview, Development)
4. Click **Save**

### 6. Deploy and Test

1. Deploy your changes to Vercel
2. Test the contact form on your live site
3. Check your Gmail for the notification email
4. The sender should receive an auto-reply confirmation

## 📧 What Happens When Someone Contacts You

1. **You receive** a nicely formatted email at `damonbodine@gmail.com` with:
   - Sender's name and email
   - Subject line
   - Full message content
   - Timestamp

2. **The sender receives** an auto-reply confirmation email with:
   - Thank you message
   - Copy of their original message
   - Your professional signature

## 🔧 Alternative: Gmail SMTP (Less Reliable)

If you prefer to use Gmail SMTP instead of SendGrid:

1. Install nodemailer: `npm install nodemailer @types/nodemailer`
2. Enable 2-factor authentication on your Gmail
3. Create an App Password in Gmail settings
4. Use the app password in your environment variables

However, SendGrid is recommended because:
- More reliable delivery
- Better deliverability rates
- Professional email templates
- Free tier is generous

## 🐛 Troubleshooting

**Email not sending?**
- Check Vercel function logs for errors
- Verify your SendGrid API key is correct
- Make sure your sender email is verified in SendGrid
- Check SendGrid activity logs for delivery issues

**Emails going to spam?**
- Use proper sender authentication (domain or single sender)
- Avoid spam-triggering words in email content
- SendGrid's reputation helps with deliverability

**Need to test locally?**
1. Create a `.env.local` file in your project root
2. Add: `SENDGRID_API_KEY=your_api_key_here`
3. Run `npm run dev` and test the form

## ✅ Current Configuration

The contact form is already configured to:
- Send notifications to `damonbodine@gmail.com`
- Send auto-replies to form submitters
- Handle errors gracefully
- Work without configuration (logs messages instead)

Just follow the setup steps above to enable email functionality!