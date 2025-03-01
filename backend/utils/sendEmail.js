import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "ayushisinha@pearlorganisation.com",
    pass:  "leoq uchk hmhc orfe"
  },
});

export const sendEmail = async ({ email, message,name,phone }) => {
  const info = await transporter.sendMail({
    from: '"PearlOrganization" <pearlorganization@gmail.com>',
    to: email,
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`,
    // html: `<p>${message}</p>`,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Phone:</strong> ${phone}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  });

  console.log("Message sent:", info);
};



// import express from 'express'
// import nodemailer, { createTransport } from 'nodemailer'

 
//     const transporter  = nodemailer.createTransport({
//         host: 'smtp.gmail.com',
//         port: 465,
//         secure: true,
//         auth: {
//             user: "ayushisinha@pearlorganisation.com",
//             pass:  "leoq uchk hmhc orfe"
//         }
//     })

//     export const sendEmail = async ({ email, message, subject }) => {
//         const info =  await transporter.sendMail({
//             from: '"PearlOrganization" <earlOrganization@gmail.com>', 
//             to:email, 
//             subject: subject, 
//             text: message,
//             html: "<b>Hello world?</b>", 
//           });
//           console.log("Message sent:", info);

// }