'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function GreenModernButtonInline() {
  return (
    <Button
  className="group relative overflow-hidden bg-white text-green-600 border border-gray-300 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base font-normal transition-all duration-300 ease-out hover:text-white hover:shadow-md">
  <span className="relative z-10">Know More</span>
  <span
    className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
  <ArrowRight
    className="inline-block ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
</Button>

  );
}
