# SmartCare Contact Form - Email Service Setup

## Overview
The SmartCare contact form is now integrated with a professional email service that sends beautifully designed confirmation emails to users when they submit the contact form.

## Features
✅ Responsive HTML email template with SmartCare branding
✅ Automatic confirmation email sent to user
✅ Admin notification email sent to khlifahmed9@gmail.com
✅ Form validation and error handling
✅ Loading state on submit button
✅ Success/error notifications

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Gmail SMTP

#### Option A: Using Gmail (Recommended for Development)

1. **Enable 2-Factor Authentication**
   - Go to https://myaccount.google.com/security
   - Enable 2-Step Verification

2. **Generate App Password**
   - Visit https://myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer" (or your device)
   - Google will generate a 16-character password
   - Copy this password

3. **Create `.env.local` file** in project root:
```
SMTP_USER=khlifahmed9@gmail.com
SMTP_PASSWORD=your_16_character_password_here
```

#### Option B: Using SendGrid (Recommended for Production)

1. **Create SendGrid Account**: https://sendgrid.com
2. **Generate API Key**
3. **Update `.env.local`**:
```
SMTP_USER=apikey
SMTP_PASSWORD=your_sendgrid_api_key
```

4. **Update `app/api/contact/route.js`**:
```javascript
const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user: 'apikey',
    pass: process.env.SMTP_PASSWORD,
  },
})
```

#### Option C: Using AWS SES
1. Verify email in AWS SES
2. Generate SMTP credentials
3. Update configuration accordingly

### 3. Test the Integration

1. **Start Development Server**
```bash
npm run dev
```

2. **Visit Contact Form**
- Go to http://localhost:3000#contact

3. **Fill Out Form**
- Name: John Doe
- Email: your-email@example.com
- Role: parent
- Message: Test message

4. **Submit and Verify**
- Check your email for confirmation message
- Check admin email (khlifahmed9@gmail.com) for notification

## Email Template Features

### User Confirmation Email
- Logo and branding
- Personalized greeting with user name
- Submitted details summary
- Call-to-action section
- Social media links
- Footer with contact info

### Admin Notification Email
- Clean format with submitted information
- Quick access to user details
- Easy to forward or archive

## Customization

### Change Admin Email
Edit `app/api/contact/route.js`, line with admin email:
```javascript
to: 'your-email@example.com',
```

### Update Email Template
The HTML template is in `app/api/contact/route.js` in the `generateEmailTemplate()` function. You can:
- Change colors to match your brand
- Update social media links
- Modify the call-to-action button
- Add your own custom sections

### Update Company Information
Search for:
- `khlifahmed9@gmail.com` - Email address
- `SmartCare` - Company name
- `https://smartcare.example.com` - Website URL
- Social media links

## Troubleshooting

### Email Not Sending
1. **Check SMTP credentials**
   - Verify `.env.local` file exists
   - Ensure correct email and password
   
2. **Gmail Specific**
   - Ensure 2FA is enabled
   - App Password is 16 characters
   - Check "Less secure app access" is off

3. **Check Logs**
   - Look at terminal output for error messages
   - Check browser console for network errors

### Email Not Received
1. Check spam/junk folder
2. Verify email address in form
3. Check SMTP service status
4. Try with different email provider

## Security Best Practices

✅ Keep `.env.local` in `.gitignore` (already configured)
✅ Use app-specific passwords for Gmail
✅ Enable 2FA on email account
✅ Regularly rotate credentials
✅ Monitor email logs

## Performance Notes

- Emails are sent asynchronously (doesn't block user)
- Form submits even if email fails (fail-safe)
- Timeout: 10 seconds per email request
- Retry logic can be added if needed

## Future Enhancements

- Add reCAPTCHA for form spam protection
- Implement email queue system for reliability
- Add template variables and dynamic content
- Create admin dashboard for message management
- Add email scheduling capabilities
- Implement multi-language email templates

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review email service documentation
3. Contact: khlifahmed9@gmail.com
