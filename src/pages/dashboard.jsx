import React from 'react'

function dashboard() {
  return (
<div class="flex h-screen">

  
    <div class="flex-1 flex flex-col">
      
      <header class="bg-white shadow px-4 py-4 flex justify-between items-center">
        <div class="text-lg font-semibold">Welcome to the dashboard</div>
        <div>
          <button class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            Log Out
          </button>
        </div>
      </header>

      
      <main class="flex-1 p-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold">Total Users</h2>
            <p class="text-2xl font-bold text-blue-500">1,234</p>
          </div>

         
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold">Sales</h2>
            <p class="text-2xl font-bold text-green-500">$12,345</p>
          </div>

          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold">Pending</h2>
            <p class="text-2xl font-bold text-red-500">87</p>
          </div>
        </div>
      </main>
    </div>
  </div>
  )
}

export default dashboard;