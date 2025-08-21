const nodemailer = require('nodemailer');
require("dotenv").config();
let pass = process.env.SMTP_PASS;
let smtpTransport = require("nodemailer-smtp-transport");

const EmailSend = async (EmailTo, EmailText, EmailSubject) => {
    let transporter = nodemailer.createTransport(
        smtpTransport({
            service: "Gmail",
            auth: {
                user: "mobinulislammahi@gmail.com",
                pass: pass
            },
        })
    );

    let mailOptions = {
        from: '"H Mart" <mobinulislammahi@gmail.com>', // Adding "H Mart" to the sender's name
        to: EmailTo,
        subject: EmailSubject,
        text: EmailText,
        html: `
            <html>
                <head>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            color: #333;
                            line-height: 1.6;
                        }
                        .email-header {
                            background-color: #2c3e50;
                            color: white;
                            padding: 10px 20px;
                            text-align: center;
                        }
                        .email-content {
                            margin: 20px;
                            padding: 20px;
                            background-color: #ecf0f1;
                            border-radius: 8px;
                        }
                        .cta-button {
                            background-color: #3498db;
                            color: white;
                            padding: 10px 20px;
                            border-radius: 5px;
                            text-decoration: none;
                            font-weight: bold;
                        }
                        .footer {
                            font-size: 12px;
                            color: #7f8c8d;
                            text-align: center;
                            margin-top: 20px;
                        }
                    </style>
                </head>
                <body>
                    <div class="email-header">
                        <h1>Welcome to H Mart!</h1>
                        <p>Your trusted e-commerce platform for all your shopping needs</p>
                    </div>
                    <div class="email-content">
                        <h2>Dear Customer,</h2>
                        <p>Thank you for choosing H Mart. We are thrilled to have you as part of our community. At H Mart, we offer a wide range of products to meet all your needs, from the latest electronics to fashion, beauty, and home essentials.</p>
                        <p>${EmailText}</p>
                        <p>Our mission is to provide you with the best shopping experience possible. If you have any questions, concerns, or need assistance, feel free to reach out to our customer support team at any time.</p>
                        <p>Don't forget to check out our latest products and deals!</p>
                        <p>Click below to start shopping now:</p>
                        <a href="https://www.hmart.com" class="cta-button">Shop Now</a>
                    </div>
                    <div class="footer">
                        <p>&copy; ${new Date().getFullYear()} H Mart. All rights reserved.</p>
                        <p>If you no longer wish to receive emails from us, please <a href="https://www.hmart.com/unsubscribe" style="color: #7f8c8d;">unsubscribe here</a>.</p>
                    </div>
                </body>
            </html>
        `, // HTML content for better formatting
    }

    return await transporter.sendMail(mailOptions);
}

module.exports = EmailSend;
