<template>
  <div class="flex justify-center items-center bg-gray-100 h-screen">
    <div class="container mx-auto max-w-4xl">
      <div class="flex items-center justify-center space-x-1 pb-10">
        <BuildingOffice2Icon class="h-12 w-12 text-blue-500" />
        <h1 class="text-3xl font-bold text-center">Attendanc</h1>
      </div>
      <div class="flex shadow-sm">
        <div class="basis-2/3 bg-white rounded-l-md px-8 py-12">
          <h4 class="text-2xl font-semibold pb-3">Welcome Back !</h4>
          <p class="pb-4">Enter your credentials to login into your account</p>
          <div class="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter your email address"
              class="px-4 py-3 border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-0 rounded shadow-sm"
            />
            <input
              type="password"
              placeholder="Enter your password"
              class="px-4 py-3 border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-0 rounded shadow-sm"
            />
            <div class="flex justify-end">
              <button
                class="flex items-center justify-between group px-4 py-3 w-64 rounded bg-black hover:bg-blue-800 text-white font-semibold"
              >
                <span>Login Account</span>
                <ArrowRightIcon
                  class="h-6 w-6 -ml-4 text-white transform group-hover:translate-x-2 delay-100 duration-200 ease-in-out"
                />
              </button>
            </div>
          </div>
        </div>
        <div
          class="relative overflow-hidden basis-1/2 bg-gradient-to-b rounded-r-md from-blue-200 via-cyan-200 to-transparent px-8 py-12"
        >
          <div class="pb-6">
            Manage your church attendance with powerful, simple and highly
            customizable platform.
            <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            consectetur accusamus quo vero. -->
          </div>
          <div class="absolute">
            <img
              src="images/dashboard.png"
              alt="Your Image"
              class="w-full h-full object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-b from-transparent to-white"
            ></div>
          </div>
        </div>
      </div>
      <p class="text-center text-gray-500 text-sm pt-4">
        &copy;2023 Attendanc Corp. All rights reserved.
      </p>
    </div>
  </div>
</template>
<script setup>
import { ArrowRightIcon } from "@heroicons/vue/24/solid";
import { BuildingOffice2Icon } from "@heroicons/vue/24/outline";
</script>
