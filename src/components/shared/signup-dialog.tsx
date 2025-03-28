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
const TWO_MINUTES = 120000; // 2 minutes in milliseconds

export function SignupDialog() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem(DIALOG_KEY);
    const shouldShow = !lastShown || Date.now() - parseInt(lastShown) >= THREE_DAYS;

    if (shouldShow) {
      if (!lastShown) {
        // First time visitor - wait 2 minutes
        const timer = setTimeout(() => {
          setIsOpen(true);
          localStorage.setItem(DIALOG_KEY, Date.now().toString());
        }, TWO_MINUTES);
        return () => clearTimeout(timer);
      } else {
        // Returning visitor after 3 days - show immediately
        setIsOpen(true);
        localStorage.setItem(DIALOG_KEY, Date.now().toString());
      }
    }
  }, []);

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="bg-card/95 dark:bg-zinc-900/95 backdrop-blur-sm border-border/50 max-w-[85vw] sm:max-w-md mx-auto p-6 rounded-2xl">
        <div className="flex justify-center mb-6">
          <div className="relative w-14 h-14 sm:w-20 sm:h-20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl opacity-50" />
            <Image
              src="/logo.svg"
              alt="Riguelni Logo"
              fill
              className="object-contain p-1.5 sm:p-2"
              priority
            />
          </div>
        </div>
        
        <AlertDialogHeader className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <AlertDialogTitle className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
              Join Riguelni Platform
            </AlertDialogTitle>
          </div>
          <div className="space-y-3">
            <AlertDialogDescription className="text-sm sm:text-base text-muted-foreground/90 leading-relaxed">
              Create your account to become a seller or buyer at Riguelni - where talent meets opportunity.
            </AlertDialogDescription>
            <ul className="text-xs sm:text-sm space-y-2.5 text-left bg-muted/30 dark:bg-muted/10 p-4 rounded-lg">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/30 flex-shrink-0" />
                Connect with talented freelancers
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/30 flex-shrink-0" />
                Access exclusive projects and opportunities
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/30 flex-shrink-0" />
                Secure payments and escrow protection
              </li>
            </ul>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-col sm:flex-row gap-2 mt-6">
          <AlertDialogCancel className="w-full sm:w-auto hover:bg-muted/80 text-sm">
            Maybe Later
          </AlertDialogCancel>
          <Link href="https://riguelni.vercel.app/signup" target="_blank" className="w-full sm:w-auto">
            <AlertDialogAction className="w-full sm:w-auto bg-primary hover:bg-primary/90 group text-sm">
              <span className="flex items-center justify-center gap-2">
                Create Account
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </AlertDialogAction>
          </Link>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
} 