import nodemailer from 'nodemailer'

// Email template generator
function generateEmailTemplate(data) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Contacting SmartCare</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #333;
                background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background: white;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
            }
            .header {
                background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
                padding: 40px;
                text-align: center;
            }
            .logo {
                width: 80px;
                height: 80px;
                margin: 0 auto 20px;
            }
            .logo img {
                width: 100%;
                height: auto;
            }
            .header h1 {
                color: white;
                font-size: 28px;
                margin-bottom: 10px;
            }
            .header p {
                color: rgba(255, 255, 255, 0.9);
                font-size: 14px;
            }
            .content {
                padding: 40px;
            }
            .greeting {
                font-size: 18px;
                color: #0f172a;
                margin-bottom: 20px;
            }
            .greeting strong {
                color: #26a6ff;
            }
            .message-box {
                background: linear-gradient(135deg, rgba(38, 166, 255, 0.1), rgba(47, 230, 200, 0.1));
                border-left: 4px solid #26a6ff;
                padding: 20px;
                margin: 25px 0;
                border-radius: 8px;
            }
            .message-box p {
                color: #555;
                margin-bottom: 10px;
            }
            .message-box .label {
                font-weight: 600;
                color: #0f172a;
                font-size: 13px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 5px;
            }
            .details {
                background: #f8f9fa;
                border-radius: 8px;
                padding: 20px;
                margin: 25px 0;
            }
            .detail-row {
                display: flex;
                padding: 12px 0;
                border-bottom: 1px solid #e0e0e0;
            }
            .detail-row:last-child {
                border-bottom: none;
            }
            .detail-label {
                font-weight: 600;
                color: #0f172a;
                width: 120px;
            }
            .detail-value {
                color: #555;
                flex: 1;
            }
            .cta-section {
                background: linear-gradient(135deg, #26a6ff 0%, #2fe6c8 100%);
                padding: 30px;
                border-radius: 8px;
                margin: 30px 0;
                text-align: center;
                color: white;
            }
            .cta-section h2 {
                font-size: 20px;
                margin-bottom: 15px;
            }
            .cta-section p {
                font-size: 14px;
                margin-bottom: 20px;
                opacity: 0.95;
            }
            .cta-button {
                display: inline-block;
                background: white;
                color: #26a6ff;
                padding: 12px 30px;
                border-radius: 6px;
                text-decoration: none;
                font-weight: 600;
                font-size: 14px;
                transition: transform 0.3s ease;
            }
            .cta-button:hover {
                transform: translateY(-2px);
            }
            .social-section {
                text-align: center;
                padding: 20px 0;
                margin-top: 30px;
                border-top: 2px solid #f0f0f0;
            }
            .social-section p {
                color: #888;
                font-size: 14px;
                margin-bottom: 15px;
            }
            .social-links {
                display: flex;
                justify-content: center;
                gap: 15px;
            }
            .social-links a {
                display: inline-block;
                width: 40px;
                height: 40px;
                background: linear-gradient(135deg, #26a6ff, #2fe6c8);
                border-radius: 50%;
                text-decoration: none;
                color: white;
                font-size: 18px;
                line-height: 40px;
                transition: transform 0.3s ease;
            }
            .social-links a:hover {
                transform: scale(1.1);
            }
            .footer {
                background: #f8f9fa;
                padding: 25px 40px;
                border-top: 1px solid #e0e0e0;
                text-align: center;
            }
            .footer p {
                color: #888;
                font-size: 12px;
                margin-bottom: 10px;
            }
            .footer-links {
                margin-top: 10px;
            }
            .footer-links a {
                color: #26a6ff;
                text-decoration: none;
                margin: 0 10px;
                font-size: 12px;
            }
            .badge {
                display: inline-block;
                background: #e8f5f7;
                color: #0f172a;
                padding: 4px 12px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-top: 10px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <!-- Header -->
            <div class="header">
                <div class="logo">
                    <img src="https://res.cloudinary.com/dqsok4hr5/image/upload/v1767665292/log_light_wk2s6e.png" alt="SmartCare Logo">
                </div>
                <h1>SmartCare</h1>
                <p>We received your message</p>
            </div>

            <!-- Content -->
            <div class="content">
                <p class="greeting">Hello <strong>${data.name}</strong>,</p>
                
                <p>Thank you for reaching out to SmartCare! We're thrilled to hear from you. Your inquiry is important to us, and we're committed to providing you with the best support possible.</p>

                <!-- Message Details -->
                <div class="details">
                    <div class="detail-row">
                        <span class="detail-label">Name</span>
                        <span class="detail-value">${data.name}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Email</span>
                        <span class="detail-value">${data.email}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Role</span>
                        <span class="detail-value">${data.role.charAt(0).toUpperCase() + data.role.slice(1)}</span>
                    </div>
                </div>

                <!-- User Message -->
                <div class="message-box">
                    <div class="label">Your Message:</div>
                    <p>${data.message.replace(/\n/g, '<br>')}</p>
                </div>

                <!-- CTA Section -->
                <div class="cta-section">
                    <h2>What Happens Next?</h2>
                    <p>Our team will review your message and get back to you within 24 hours. In the meantime, explore our product and features to learn more about how SmartCare can make a difference.</p>
                    <a href="https://smartcare.example.com" class="cta-button">Learn More About SmartCare</a>
                </div>

                <p style="color: #666; font-size: 14px; margin-top: 25px;">
                    We're dedicated to helping families and professionals understand and support children with Down Syndrome. SmartCare is an intelligent medical device designed to improve autonomy, safety, and well-being.
                </p>
            </div>

            <!-- Social Section -->
            <div class="social-section">
                <p>Connect With Us</p>
                <div class="social-links">
                    <a href="https://facebook.com/smartcare" title="Facebook">f</a>
                    <a href="https://twitter.com/smartcare" title="Twitter">𝕏</a>
                    <a href="https://linkedin.com/company/smartcare" title="LinkedIn">in</a>
                    <a href="https://instagram.com/smartcare" title="Instagram">📷</a>
                </div>
            </div>

            <!-- Footer -->
            <div class="footer">
                <p><strong>SmartCare</strong> - Improving Lives, One Step at a Time</p>
                <p>© 2026 SmartCare. All rights reserved.</p>
                <p>Contact: khlifahmed9@gmail.com</p>
                <div class="footer-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Unsubscribe</a>
                </div>
            </div>
        </div>
    </body>
    </html>
  `
}

export async function POST(request) {
  try {
    const { name, email, role, message } = await request.json()

    // Validate input
    if (!name || !email || !role || !message) {
      return new Response(
        JSON.stringify({ success: false, message: 'All fields are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Generate email HTML
    const emailHTML = generateEmailTemplate({ name, email, role, message })

    // Send email to user
    await transporter.sendMail({
      from: `"SmartCare Team" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Thank You for Contacting SmartCare - We\'ll Be In Touch',
      html: emailHTML,
    })

    // Send notification to admin
    await transporter.sendMail({
      from: `"SmartCare Contact Form" <${process.env.SMTP_USER}>`,
      to: 'khlifahmed9@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully! Check your inbox for confirmation.' 
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Email error:', error)
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Failed to send email. Please try again later.' 
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
