import { useState } from "react";
import Head from "components/head";
import fetchApi from "helpers/fetchApi";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const res = await fetchApi("/users/contact", "POST", formData);
    alert(res.message);
    if (res.success) setFormData({ name: "", email: "", description: "" });
    setIsSubmitting(false);
  };

  return (
    <>
      <Head
        title="Contact Us - Coderhax"
        description="If you have face any issues on our website or have queries then feel free to contact us via below form"
        url="/contact-us"
        index={true}
      />
      <div className="bg-white p-[clamp(1.25rem,5vw,2rem)] space-y-[clamp(1.25rem,5vw,1.5rem)] border border-gray-200 rounded-md">
        <div className="flex flex-col justify-between items-center gap-2">
          <h1 className="text-[clamp(2rem,5vw,2.5rem)] font-black">
            Contact Us
          </h1>
          <p className="text-center text-[clamp(1rem,5vw,1.2rem)] font-normal md:px-20">
            If you have face any issues on our website or have queries then feel
            free to contact us via below form
          </p>
        </div>
        <form
          className="space-y-[clamp(1.25rem,5vw,1.5rem)] p-[1vw]"
          onSubmit={handleFormSubmit}
        >
          <div className="space-y-3">
            <label htmlFor="cu-name" className="text-lg font-medium">
              Name
            </label>
            <input
              id="cu-name"
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              className="w-full p-5 border border-gray-200 rounded-md outline-blue-500"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              pattern="^([A-Za-z\d]+\s)*[A-Za-z\d]+$"
              maxLength={40}
              required
            />
          </div>
          <div className="space-y-3">
            <label htmlFor="cu-email" className="text-lg font-medium">
              Email
            </label>
            <input
              id="cu-email"
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              className="w-full p-5 border border-gray-200 rounded-md outline-blue-500"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              pattern="^([a-z\d][\w\-\.]+[a-z\d])@([a-z\d]([a-z\d-]*[a-z\d])*)\.([a-z]+(\.[a-z]{2,6})?)$"
              maxLength={60}
              required
            />
          </div>
          <div className="space-y-3">
            <label htmlFor="cu-description" className="text-lg font-medium">
              Description
            </label>
            <textarea
              id="cu-description"
              name="description"
              value={formData.description}
              placeholder="Describe your issue"
              className="w-full min-h-[200px] p-5 leading-snug whitespace-pre-wrap border border-gray-200 rounded-md outline-blue-500 overflow-auto"
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              maxLength={2000}
              pattern="^([\w\p{P}\p{S}]+\s)*[\w\p{P}\p{S}]+$"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              className="bg-blue-500 text-white px-[clamp(.8rem,2vw,1.4rem)] py-[clamp(.4rem,2vw,.7rem)] rounded-md sm:font-medium hover:bg-blue-600 focus:bg-blue-600 focus:ring focus:ring-blue-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
