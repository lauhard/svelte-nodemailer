import "../../chunks/index.js";
import "html-to-text";
import "pretty";
import nodemailer from "nodemailer";
const GMAIL_KEY = "nscnkaocveysnhdx";
nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "lauhard.andreas@gmail.com",
    pass: `${GMAIL_KEY}`
  }
});
const load = async () => {
  return {};
};
export {
  load
};
