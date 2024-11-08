"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Sun, Moon } from "lucide-react";
import Link from "next/link";

export default function Component() {
  const [theme, setTheme] = useState("dark");
  // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTimeLeft(calculateTimeLeft());
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);

  // function calculateTimeLeft() {
  //   const difference = +new Date("2024-11-07") - +new Date();
  //   let timeLeft: {
  //     days?: number;
  //     hours?: number;
  //     minutes?: number;
  //     seconds?: number;
  //   } = {};

  //   if (difference > 0) {
  //     timeLeft = {
  //       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
  //       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
  //       minutes: Math.floor((difference / 1000 / 60) % 60),
  //       seconds: Math.floor((difference / 1000) % 60),
  //     };
  //   }

  //   return timeLeft;
  // }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <FileText className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">uts0</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none mb-6">
            Transforming Data Seamlessly
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl mb-8">
            uts0 helps you turn unstructured data into structured data. Powerful
            and easy to use.
          </p>
          {/* <div className="text-2xl md:text-4xl font-mono mb-8 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg inline-block">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
            {timeLeft.seconds}s
          </div> */}
          <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
            Launching soon.
          </p>
        </div>
      </main>
      <footer className="py-6 w-full text-center border-t border-gray-200 dark:border-gray-800">
        <p className="text-xs text-gray-600 dark:text-gray-400">
          © 2024 uts0. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
