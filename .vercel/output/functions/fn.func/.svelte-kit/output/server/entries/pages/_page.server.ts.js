import "../../chunks/index.js";
import "html-to-text";
import "pretty";
import nodemailer from "nodemailer";
const GMAIL_KEY = "nscnkaocveysnhdx";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "lauhard.andreas@gmail.com",
    pass: `${GMAIL_KEY}`
  }
});
const options = {
  from: "lauhard.andreas@gmail.com",
  to: "lauhard.andreas@gmail.com",
  subject: "hello world",
  text: `
    praxis@lisaloof.com
    `
};
const load = async () => {
  await transporter.sendMail(options);
  return {};
};
export {
  load
};
