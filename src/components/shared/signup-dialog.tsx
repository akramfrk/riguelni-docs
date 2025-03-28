"use client";

import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

const DIALOG_KEY = 'riguelni_signup_dialog_last_shown';
const THREE_DAYS = 259200000; // 3 days in milliseconds

export function SignupDialog() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem(DIALOG_KEY);
    const now = Date.now();

    // Show dialog if it hasn't been shown before or if 3 days have passed
    if (!lastShown || now - parseInt(lastShown) >= THREE_DAYS) {
      setIsOpen(true);
      localStorage.setItem(DIALOG_KEY, now.toString());
    }

    // Set up interval to check every hour
    const interval = setInterval(() => {
      const lastShown = localStorage.getItem(DIALOG_KEY);
      const now = Date.now();
      
      if (!lastShown || now - parseInt(lastShown) >= THREE_DAYS) {
        setIsOpen(true);
        localStorage.setItem(DIALOG_KEY, now.toString());
      }
    }, 3600000); // Check every hour

    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem(DIALOG_KEY, Date.now().toString());
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={handleClose}>
      <AlertDialogContent className="bg-card/95 backdrop-blur-sm border-border/50 max-w-md">
        <div className="flex justify-center mb-6">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl opacity-50" />
            <Image
              src="/logo.svg"
              alt="Riguelni Logo"
              fill
              className="object-contain p-2"
              priority
            />
          </div>
        </div>
        
        <AlertDialogHeader className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <AlertDialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
              Join Riguelni Platform
            </AlertDialogTitle>
          </div>
          <div className="space-y-3">
            <AlertDialogDescription className="text-base text-muted-foreground/90">
              Create your account to become a seller or buyer at Riguelni - where talent meets opportunity.
            </AlertDialogDescription>
            <ul className="text-sm space-y-2 text-left">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                Connect with talented freelancers
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                Access exclusive projects and opportunities
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                Secure payments and escrow protection
              </li>
            </ul>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-col sm:flex-row gap-2 mt-6">
          <AlertDialogCancel className="w-full sm:w-auto hover:bg-muted/80">
            Maybe Later
          </AlertDialogCancel>
          <Link href="https://riguelni.vercel.app/signup" target="_blank" className="w-full sm:w-auto">
            <AlertDialogAction className="w-full sm:w-auto bg-primary hover:bg-primary/90 group">
              <span className="flex items-center gap-2">
                Create Account
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </AlertDialogAction>
          </Link>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
} 