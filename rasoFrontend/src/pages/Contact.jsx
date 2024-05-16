import React from 'react'
import Input from '../components/Input'

function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-4 mt-2">
      <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
        <div className="mx-auto max-w-max rounded-full border bg-gray-50 p-1 px-3">
          <p className="text-center text-xs font-semibold leading-normal md:text-sm">
            Share your thoughts
          </p>
        </div>
        <p className="text-center text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
          Love to hear from you
        </p>
        <p className="mx-auto max-w-4xl text-center text-base text-gray-600 md:text-xl">
        Got a question or feedback? We're here to help! Reach out to the Raso team for assistance with orders, inquiries, or partnership opportunities. Let's connect and ensure your experience with us is nothing short of exceptional.
        </p>
      </div>
      <div className="mx-auto max-w-7xl py-12 md:py-24">
        <div className="grid items-center justify-items-center gap-x-4 gap-y-10 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <div className="px-2 md:px-12">
              <p className="text-2xl font-bold text-gray-900 md:text-4xl">
                Get in touch
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Our friendly team would love to hear from you.
              </p>
              <form action="" className="mt-8 space-y-4">
                <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                  <Input placeholder='First Name' label="First Name" />
                  <Input placeholder='Last Name' label="Last Name" />
                </div>
                <Input placeholder="Email" label="Email" type="email" />
                <Input placeholder="Phone number" label="Phone number" type='tel' />
                <div className="grid w-full  items-center gap-1.5">
                  <label
                    className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="flex h-10 w-full rounded-md font-medium placeholder:font-normal border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    id="message"
                    placeholder="Leave us a message"
                    cols="3"
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="w-full rounded-md bg-old-brick px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-old-brick/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <img
            alt="Contact us"
            className="hidden max-h-full w-full rounded-lg object-cover md:block"
            src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=687&amp;h=800&amp;q=80"
          />
        </div>
      </div>
    </div>
  )
}

export default Contact
