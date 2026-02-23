import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full font-sans relative">
      {/* Newsletter Section */}
      <div className="bg-[#4a6cf7] rounded-t-[40px] p-8 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="max-w-xl">
          <h2 className="text-white text-4xl md:text-5xl font-bold uppercase leading-tight mb-4">
            Join our KicksPlus Club & get 15% off
          </h2>
          <p className="text-blue-100 text-lg">
            Sign up for free! Join the community.
          </p>
          <div className="flex gap-2 mt-8 max-w-md">
            <Input 
              placeholder="Email address" 
              className="bg-transparent border-white/40 text-white placeholder:text-blue-100 h-12"
            />
            <Button className="bg-[#232323] hover:bg-black text-white px-8 h-12 uppercase font-bold">
              Submit
            </Button>
          </div>
        </div>
        
        {/* Large Logo Accent */}
        <div className="text-white font-black text-8xl md:text-9xl opacity-90 tracking-tighter">
          KICKS<span className="text-orange-400 text-4xl relative -top-12">+</span>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="bg-[#232321] text-white p-8 md:p-16 rounded-b-[40px] -mt-1">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Us */}
          <div className="space-y-4">
            <h3 className="text-orange-400 text-xl font-bold">About us</h3>
            <p className="text-zinc-400 leading-relaxed">
              We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.
            </p>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-orange-400 text-xl font-bold">Categories</h3>
            <ul className="space-y-2 text-zinc-100 font-semibold">
              <li>Runners</li>
              <li>Sneakers</li>
              <li>Basketball</li>
              <li>Outdoor</li>
              <li>Golf</li>
              <li>Hiking</li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-orange-400 text-xl font-bold">Company</h3>
            <ul className="space-y-2 text-zinc-100 font-semibold">
              <li>About</li>
              <li>Contact</li>
              <li>Blogs</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="space-y-4">
            <h3 className="text-orange-400 text-xl font-bold">Follow us</h3>
            <div className="flex gap-4">
              <Facebook className="w-6 h-6 cursor-pointer" />
              <Instagram className="w-6 h-6 cursor-pointer" />
              <Twitter className="w-6 h-6 cursor-pointer" />
              <span className="font-bold text-xl leading-none">TikTok</span>
            </div>
          </div>
        </div>

        {/* Massive Background Logo */}
        <div className="mt-20 overflow-hidden">
          <Image
            src="/footer-logo.png"
            alt="Kicks Logo"
            width={800}
            height={800}
            className="w-full h-auto  object-cover"
          />

        </div>
        
      </div>
      <div className="absolute bottom-0 bg-background w-full text-center ">
                <p className="text-center text-zinc-500 m-4">© All rights reserved</p>

      </div>
    </footer>
  );
}