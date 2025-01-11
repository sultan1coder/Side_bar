import React from 'react'

function users() {
  return (
    <div>
      <main>
        <div className=' flex justify-around mt-10'>
        <div class="bg-white w-52 h-32 p-4 rounded-lg shadow-lg">
            <h3 class="text-2xl font-semibold text-center">Active Users</h3>
            <p class="text-xl font-semibold mt-4 text-center">1,024</p>
          </div>

          <div class="bg-white w-52 h-32 p-4 rounded-lg shadow-lg">
            <h3 class="text-2xl font-semibold text-center">Pending Users</h3>
            <p class="text-xl font-semibold mt-4 text-red-600 text-center">45</p>
          </div>

          <div class="bg-white w-52 h-32 p-4 rounded-lg shadow-lg">
            <h3 class="text-2xl font-semibold text-center">Revenue</h3>
            <p class="text-xl font-semibold mt-4 text-center text-green-600 ">$12,345</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default users;