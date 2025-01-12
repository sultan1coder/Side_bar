import React from 'react';

const Contact = () => {
  return (
    <div class="space-y-6">
      <div class="flex items-center">
        <div class="bg-blue-600 text-white p-4 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h3m4 0h4m4 0h3M3 16h3m4 0h4m4 0h3M3 4h3m4 0h4m4 0h3" />
          </svg>
        </div>
        <div class="ml-4">
          <h4 class="font-bold text-lg">Our Address</h4>
          <p>123 Main Street, Suite 500<br />Hargeisa, Somaliland</p>
        </div>
      </div>

      <div class="flex items-center">
        <div class="bg-blue-600 text-white p-4 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7 5-7 5V8zm11 0l7 5-7 5V8z" />
          </svg>
        </div>
        <div class="ml-4">
          <h4 class="font-bold text-lg">Email Us</h4>
          <p>ashrafsultan@gmail.com</p>
        </div>
      </div>

      <div class="flex items-center">
        <div class="bg-blue-600 text-white p-4 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2 12h20M2 5h20M2 19h20" />
          </svg>
        </div>
        <div class="ml-4">
          <h4 class="font-bold text-lg">Call Us</h4>
          <p>+25263-4196545</p>
        </div>
      </div>

    </div>

  );
};

export default Contact;