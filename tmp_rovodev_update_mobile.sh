#!/bin/bash
# Update all service link classes for mobile responsiveness
perl -i -pe 's/service-link flex items-center justify-between px-5 py-4/service-link flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4/g' index.html
perl -i -pe 's/flex items-center gap-3/flex items-center gap-2 sm:gap-3/g' index.html
perl -i -pe 's/material-symbols-outlined text-lg text-gray-400/material-symbols-outlined text-base sm:text-lg text-gray-400/g' index.html
perl -i -pe 's/material-symbols-outlined text-gray-300 text-lg group-hover/material-symbols-outlined text-gray-300 text-lg group-hover\/link:text-blue-500 group-hover\/link:translate-x-1 transition-transform flex-shrink-0">arrow_forward<\/span>\n(.+)group-hover\/link:text-orange-500 group-hover\/link:translate-x-1 transition-transform">arrow_forward/material-symbols-outlined text-gray-300 text-lg group-hover\/link:text-blue-500 group-hover\/link:translate-x-1 transition-transform flex-shrink-0">arrow_forward<\/span>\n$1group-hover\/link:text-orange-500 group-hover\/link:translate-x-1 transition-transform flex-shrink-0">arrow_forward/g' index.html
