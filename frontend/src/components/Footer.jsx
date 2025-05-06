import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">JobNest</h2>
            <p className="text-gray-600">Empowering Careers, Connecting Talent.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-gray-400" aria-label="Facebook">
              <svg className="h-6 w-6 fill-current text-blue-600" viewBox="0 0 24 24">
                <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 22.407.593 23 1.324 23h11.495v-9.33H9.748v-3.637h3.071V7.412c0-3.037 1.856-4.69 4.565-4.69 1.296 0 2.412.096 2.737.139v3.171h-1.876c-1.47 0-1.755.7-1.755 1.726v2.264h3.514l-.457 3.637h-3.057V23h5.992C23.407 23 24 22.407 24 21.676V1.324C24 .593 23.407 0 22.676 0z" />
              </svg>
            </a>
            <a href="https://twitter.com" className="hover:text-gray-400" aria-label="Twitter">
              <svg className="h-6 w-6 fill-current text-blue-400" viewBox="0 0 24 24">
                <path d="M23.954 4.569c-.885.39-1.83.654-2.825.775 1.014-.611 1.793-1.574 2.163-2.724-.951.564-2.005.974-3.127 1.195-.897-.955-2.178-1.55-3.593-1.55-2.717 0-4.92 2.203-4.92 4.919 0 .39.044.765.128 1.124-4.09-.205-7.719-2.165-10.148-5.144-.425.729-.666 1.577-.666 2.476 0 1.71.87 3.215 2.188 4.096-.807-.026-1.566-.247-2.229-.617v.063c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 0-.626-.031-.928-.088.626 1.956 2.445 3.38 4.6 3.42-1.684 1.319-3.808 2.107-6.116 2.107-.398 0-.79-.023-1.175-.068 2.182 1.397 4.768 2.214 7.557 2.214 9.056 0 14.01-7.504 14.01-14.009 0-.213-.005-.426-.015-.637.961-.695 1.795-1.56 2.457-2.548z" />
              </svg>
            </a>
            <a href="https://linkedin.com" className="hover:text-gray-400" aria-label="LinkedIn">
              <svg className="h-6 w-6 fill-current text-blue-700" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 2.12 6.1 1 7.48 1c1.38 0 2.5 1.12 2.5 2.5S8.86 6 7.48 6c-1.38 0-2.5-1.12-2.5-2.5zM1.5 23h5V8.5h-5V23zM9.5 8.5h4.79v2.14h.06c.67-1.28 2.3-2.63 4.74-2.63 5.07 0 6 3.34 6 7.69V23h-5v-7.57c0-1.81-.03-4.15-2.54-4.15s-2.93 1.99-2.93 4.04V23h-5V8.5z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} JobNest. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
