import React from 'react'

function admin() {
  return (
    <div>
      <form action="">
        <div className="container">
        <h2 className='mb-6 mr-16 text-3xl font-bold text-center text-gray-800'>Login</h2>
        <div className='text-center '>
          <label for="email" class=" mb-5 text-lg font-medium text-gray-600"><span className='mr-[165px]'>Email</span></label> <br />
          <input
            type="email"
            id="email"
            name="email"
            class="w-52 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter email"
            required></input>
        </div>

        <div className='text-center'>
          <label for="password" class="block mb-2 text-lg font-medium text-gray-600"><span className='mr-32 '>Password</span></label>
          <input
            type="password"
            id="password"
            name='password'
            class="w-52 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
            placeholder='Enter password'
            required
          />
        </div>
          <div className='mt-5 text-center'>
            <button className='px-12 py-2 bg-green-500 rounded-xl' type='submit'>Login</button>
          </div>
      <div class="mt-4 text-center">
        <p class="text-sm text-gray-600">Don't have an account? <a href="#" class="text-blue-500 hover:underline-none">Sign up</a></p>
      </div>
      </div>
      </form>
    </div>
  )
}

export default admin;