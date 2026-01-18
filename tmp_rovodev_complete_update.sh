#!/bin/bash
sed -i 's/service-link flex items-center justify-between px-5 py-4 hover:bg-orange-50/service-link flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 hover:bg-orange-50/g' index.html
sed -i 's/service-link flex items-center justify-between px-5 py-4 hover:bg-green-50/service-link flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 hover:bg-green-50/g' index.html
sed -i 's/hover:bg-orange-50 dark:hover:bg-gray-700\/50 text-sm font-medium/hover:bg-orange-50 dark:hover:bg-gray-700\/50 text-xs sm:text-sm font-medium/g' index.html
sed -i 's/hover:bg-green-50 dark:hover:bg-gray-700\/50 text-sm font-medium/hover:bg-green-50 dark:hover:bg-gray-700\/50 text-xs sm:text-sm font-medium/g' index.html
sed -i 's/<span class="flex items-center gap-3">/<span class="flex items-center gap-2 sm:gap-3">/g' index.html
sed -i 's/material-symbols-outlined text-lg text-gray-400 group-hover\/link:text-orange-500">/material-symbols-outlined text-base sm:text-lg text-gray-400 group-hover\/link:text-orange-500">/g' index.html
sed -i 's/material-symbols-outlined text-lg text-gray-400 group-hover\/link:text-green-500">/material-symbols-outlined text-base sm:text-lg text-gray-400 group-hover\/link:text-green-500">/g' index.html
