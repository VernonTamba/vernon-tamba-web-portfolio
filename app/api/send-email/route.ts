import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const getEmailTemplate = (name: string, email: string, message: string) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Message</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f4;">
        <table role="presentation" style="width: 100%; border-collapse: collapse;">
          <tr>
            <td align="center" style="padding: 40px 0;">
              <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                
                <!-- Header -->
                <tr>
                  <td style="padding: 40px 40px 20px 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                    <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: bold;">
                      📬 New Contact Form Message
                    </h1>
                  </td>
                </tr>

                <!-- Content -->
                <tr>
                  <td style="padding: 40px;">
                    
                    <!-- From Section -->
                    <div style="margin-bottom: 24px;">
                      <p style="margin: 0 0 8px 0; color: #666666; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                        From
                      </p>
                      <p style="margin: 0; color: #333333; font-size: 18px; font-weight: 500;">
                        ${name}
                      </p>
                    </div>

                    <!-- Email Section -->
                    <div style="margin-bottom: 24px;">
                      <p style="margin: 0 0 8px 0; color: #666666; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                        Email Address
                      </p>
                      <p style="margin: 0;">
                        <a href="mailto:${email}" style="color: #667eea; font-size: 16px; text-decoration: none;">
                          ${email}
                        </a>
                      </p>
                    </div>

                    <!-- Divider -->
                    <hr style="border: none; border-top: 2px solid #e0e0e0; margin: 32px 0;">

                    <!-- Message Section -->
                    <div style="margin-bottom: 24px;">
                      <p style="margin: 0 0 12px 0; color: #666666; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                        Message
                      </p>
                      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea;">
                        <p style="margin: 0; color: #333333; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">
                          ${message}
                        </p>
                      </div>
                    </div>

                    <!-- Reply Button -->
                    <div style="margin-top: 32px; text-align: center;">
                      <a href="mailto:${email}" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">
                        Reply to ${name}
                      </a>
                    </div>

                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding: 24px 40px; background-color: #f8f9fa; border-top: 1px solid #e0e0e0;">
                    <p style="margin: 0; color: #999999; font-size: 12px; text-align: center;">
                      This message was sent from your portfolio contact form
                    </p>
                    <p style="margin: 8px 0 0 0; color: #999999; font-size: 12px; text-align: center;">
                      ${new Date().toLocaleString("en-US", {
                        dateStyle: "long",
                        timeStyle: "short",
                      })}
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
};

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "tambavernon@gmail.com",
      subject: `New message from ${name}`,
      html: getEmailTemplate(name, email, message),
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
