import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledContact } from "./StyledContact";

function Contact() {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });
  const toastOptions = {
    position: "bottom-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const InputEvent = (e) => {
    const { name, value } = e.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    const response = handleValidation();
    if (response) {
      emailjs
        .sendForm(
          "service_4les1hg",
          "template_9w8vl7h",
          e.target,
          "94j727mCouk226NNz"
        )
        .then(
          (res) => {
            console.log("SUCCESS!", res.status, res.text);
            toast.success("Your message was sent correctly.", toastOptions);
            setData({
              fullname: "",
              phone: "",
              email: "",
              message: "",
            });
          },
          (err) => {
            console.log("FAILED...", err);
            toast.error("There are conection problems.", toastOptions);
          }
        );
    }
  };
  const handleValidation = () => {
    const { fullname, phone, email, message } = data;
    if (fullname == "" || fullname == null || fullname.split(" ") == "") {
      toast.error("Your name is required.", toastOptions);
      return false;
    }
    if (phone == "" || phone == null || phone.split(" ") == "") {
      toast.error("Your phone is required.", toastOptions);
      return false;
    } else {
      const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2,6}$/im;
      if (!re.exec(phone)) {
        toast.error("This phone is invalid.", toastOptions);
        return false;
      }
    }
    if (fullname == "" || email == null || email.split(" ") == "") {
      toast.error("Your email is required.", toastOptions);
      return false;
    } else {
      const re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
      if (!re.exec(email)) {
        toast.error("This email is invalid.", toastOptions);
        return false;
      }
    }
    if (message == "" || message == null || message.split(" ") == "") {
      toast.error("Your message is required.", toastOptions);
      return false;
    }
    return true;
  };

  return (
    <>
      <form onSubmit={sendEmail}>
        <StyledContact className="container" id="contact">
          <h2 className="title-section">CONTACT</h2>

          <div className="content-contact">
            <h4>Your Name</h4>
            <input
              type="text"
              name="fullname"
              placeholder="Write your name here ..."
              value={data.fullname}
              onChange={InputEvent}
            />
            <h4>Your Phone</h4>
            <input
              type="phone"
              name="phone"
              placeholder="Write your phone here ..."
              value={data.phone}
              onChange={InputEvent}
            />
            <h4>Your Email</h4>
            <input
              type="text"
              name="email"
              placeholder="Write your email here ..."
              value={data.email}
              onChange={InputEvent}
            />
          </div>
          <div className="content-message">
            <h4>Your Message</h4>
            <textarea
              name="message"
              cols="30"
              rows="10"
              maxLength={280}
              placeholder="Write your message here ..."
              value={data.message}
              onChange={InputEvent}
            ></textarea>
            <button>
              <span>Send </span> <AiOutlineSend className="icon" />
            </button>
          </div>
        </StyledContact>
      </form>
      <ToastContainer />
    </>
  );
}

export default Contact;
