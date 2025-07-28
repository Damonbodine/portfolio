import type { VercelRequest, VercelResponse } from '@vercel/node';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  // Check if SendGrid is configured
  if (!process.env.SENDGRID_API_KEY) {
    console.error('SENDGRID_API_KEY is not configured');
    // For development/demo purposes, just log the message
    console.log('Contact form submission (email not configured):', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });
    
    return res.status(200).json({ 
      message: 'Message received! Since this is a demo, the email system is not fully configured yet, but your message has been logged.' 
    });
  }

  try {
    // Email to you (notification)
    const notificationEmail = {
      to: 'damonbodine@gmail.com',
      from: 'noreply@damonbodine.dev', // This needs to be a verified sender in SendGrid
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Message</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #2563eb; margin: 20px 0;">
            <h3>Message:</h3>
            <p style="line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
          
          <p style="color: #64748b; font-size: 14px;">
            This message was sent from your portfolio contact form at ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    };

    // Auto-reply email to the sender
    const autoReplyEmail = {
      to: email,
      from: 'noreply@damonbodine.dev', // This needs to be a verified sender in SendGrid
      subject: 'Thanks for reaching out!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thanks for your message, ${name}!</h2>
          
          <p style="line-height: 1.6;">
            Hi ${name},
          </p>
          
          <p style="line-height: 1.6;">
            Thank you for reaching out through my portfolio website. I've received your message about "${subject}" and will get back to you as soon as possible, usually within 24 hours.
          </p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Your message:</h3>
            <p style="line-height: 1.6; color: #4b5563;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <p style="line-height: 1.6;">
            In the meantime, feel free to check out my projects and experience on my portfolio, or connect with me on LinkedIn.
          </p>
          
          <p style="line-height: 1.6;">
            Best regards,<br>
            <strong>Damon Bodine</strong><br>
            Software Engineer
          </p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
          
          <p style="color: #64748b; font-size: 14px;">
            This is an automated response from damonbodine.dev
          </p>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      sgMail.send(notificationEmail),
      sgMail.send(autoReplyEmail)
    ]);

    return res.status(200).json({ 
      message: 'Message sent successfully! I\'ll get back to you soon.' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    
    // Fallback: log the message if email fails
    console.log('Contact form submission (email failed):', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : 'Unknown error'
    });

    // Still return success to user but with a note
    return res.status(200).json({ 
      message: 'Message received! There was an issue with the email service, but your message has been logged and I\'ll follow up soon.' 
    });
  }
}