"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheck } from "react-icons/fa"
import { GoCopy } from "react-icons/go";
import { motion } from "framer-motion";
import { SelectGroup } from "@radix-ui/react-select";
import { useState } from "react";

import { toast } from "react-toastify";
import Image from "next/image";
import { InfinitySpin } from "react-loader-spinner";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "+254 799 957 459" },
  { icon: <FaEnvelope />, title: "Email", description: "tmuli974@gmail.com" },
  { icon: <FaMapMarkerAlt />, title: "Address", description: "Nairobi" },
]

const Contact = () => {
  const [copiedItems, setCopiedItems] = useState<{ [key: string]: boolean }>({});
  const [formData, setFormData] = useState<{
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    service?: string;
    text?: string;
  }>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    text: ""
  });
  
  const [validationErrors, setValidationErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  })
  const [loading, setLoading] = useState(false)

  const handleFormChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const copyToClipBooard = (title: string, text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedItems((prev: any) => ({ ...prev, [title]: true }));
      setTimeout(() => {
        setCopiedItems((prev :any) => ({ ...prev, [title]: false }))
      }, 2000);
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    })
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let hasErrors = false;
    let newValidationErrors = { ...validationErrors };
    let key: keyof typeof formData;

    for (key in formData) {
      if (formData[key] === "") {
        newValidationErrors[key] = "This field is required";
        hasErrors = true;
      } else {
        newValidationErrors[key] = "";
      }
    }

    setValidationErrors(newValidationErrors);

    if (hasErrors) return;
    setLoading(true);
    const response = await fetch('/api/sendEmail', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    setLoading(false);
  
    if (response.ok) {
      toast.success("Email sent successfully!");
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        text: ""
      });
    } else {
      toast.error("Email not sent!")
  };
}

  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/** form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent text-center">Let's work together</h3>
              <p className="text-md text-white/70 text-center">Kindly enter your contact information below.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input type="text" name="firstname" placeholder="Firstname" required value={formData.firstname} onChange={(e) => handleFormChange(e)} />
                  {validationErrors.firstname && <p className="text-red-600">{validationErrors.firstname}</p>}
                </div>
                <div>
                  <Input type="text" name="lastname" placeholder="Lastname" required value={formData.lastname} onChange={(e) => handleFormChange(e)}/>
                  {validationErrors.lastname && <p className="text-red-600">{validationErrors.lastname}</p>}
                </div>
                <div>
                  <Input type="email" name="email" placeholder="Email  address" required value={formData.email} onChange={(e) => handleFormChange(e)}/>
                  {validationErrors.email && <p className="text-red-600">{validationErrors.email}</p>}
                </div>
                <div>
                  <Input type="phone" name="phone" placeholder="Phone number" required value={formData.phone} onChange={(e) => handleFormChange(e)}/>
                  {validationErrors.phone && <p className="text-red-600">{validationErrors.phone}</p>}
                </div>
              </div>
              {/** select */}
              <Select defaultValue={formData.service} required onValueChange={value => setFormData({ ...formData, service: value })}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="ui/ux">UI/UX Design</SelectItem>
                    <SelectItem value="logo">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/** text area */}
              <Textarea className="h-[200px]" name="text" required value={formData.text} onChange={(e) => handleFormChange(e)} placeholder="Type your message" />
              <div className="flex justify-center items-center">
                {!loading ? (
                  <Button 
                    size="md" className="max-w-40" 
                    onClick={handleSubmit}
                  >
                      Send message
                  </Button>
                ) : (
                  <InfinitySpin
                    visible={true}
                    width="200"
                    color="#4fa94d"
                    ariaLabel="infinity-spin-loading"
                  />
                )}
              </div>
            </form>
          </div>
          {/** info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[44px] h-[44] lg:w-[72px] lg:h-[72px] p-2 bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                    <div className="relative group">
                      {!copiedItems[item.title] ? (
                        <>
                        {item.title !== "Address" && (
                          <>
                            <div className="text-white/60 cursor-pointer" onClick={() => copyToClipBooard(item.title, item.description)}><GoCopy /></div>
                            <div className="absolute opacity-0 group-hover:opacity-100 text-xs transition-all duration-500">Copy to clipboard</div>
                          </>
                        )}
                        </>
                      ) : (
                        <>
                          <div key={index} className="absolute flex text-xs gap-2"><FaCheck className="text-accent h-2 w-2 mt-1" /> <span className="text-xs">copied!</span></div>
                        </>
                      )}
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;