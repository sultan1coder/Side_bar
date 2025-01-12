import React from 'react';

const Home = () => {
  return (
    <main class="container mx-auto p-6">
    <section class="text-center py-12">
        <h2 class="text-4xl font-bold mb-4">Welcome to Tiigsi Technology</h2>
        <p class="text-gray-700 text-lg">tiigsi platform is the best platform of e-learning platforms</p>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div class="bg-white p-6 rounded shadow">
            <h3 class="text-xl font-bold mb-2">Feature One</h3>
            <p class="text-gray-600">Description of feature one.</p>
        </div>
        <div class="bg-white p-6 rounded shadow">
            <h3 class="text-xl font-bold mb-2">Feature Two</h3>
            <p class="text-gray-600">Description of feature two.</p>
        </div>
        <div class="bg-white p-6 rounded shadow">
            <h3 class="text-xl font-bold mb-2">Feature Three</h3>
            <p class="text-gray-600">Description of feature three.</p>
        </div>
    </section>
</main>
  );
};

export default Home;