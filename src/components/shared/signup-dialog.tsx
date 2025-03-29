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
const DIALOG_DISABLED_KEY = 'riguelni_signup_dialog_disabled';
const THREE_DAYS = 259200000; // 3 days in milliseconds
const TWO_MINUTES = 180000; // 3 minutes in milliseconds

export function SignupDialog() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem(DIALOG_KEY);
    const isDisabled = localStorage.getItem(DIALOG_DISABLED_KEY);
    const shouldShow = !lastShown || Date.now() - parseInt(lastShown) >= THREE_DAYS;

    if (shouldShow && !isDisabled) {
      // Always wait 2 minutes before showing the dialog
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem(DIALOG_KEY, Date.now().toString());
      }, TWO_MINUTES);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleRemindLater = () => {
    setIsOpen(false);
    localStorage.setItem(DIALOG_KEY, Date.now().toString());
  };

  const handleDontShowAgain = () => {
    setIsOpen(false);
    localStorage.setItem(DIALOG_DISABLED_KEY, 'true');
  };

  const handleCreateAccount = () => {
    setIsOpen(false);
    localStorage.setItem(DIALOG_DISABLED_KEY, 'true');
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="bg-card/95 dark:bg-zinc-900/95 backdrop-blur-sm border-border/50 max-w-[90vw] sm:max-w-xl mx-auto p-8 rounded-2xl z-50">
        <div className="flex justify-center mb-8">
          <div className="relative w-16 h-16 sm:w-24 sm:h-24">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl opacity-50" />
            <Image
              src="/logo.svg"
              alt="Riguelni Logo"
              fill
              className="object-contain p-2 sm:p-3"
              priority
            />
          </div>
        </div>
        
        <AlertDialogHeader className="text-center space-y-6">
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            <AlertDialogTitle className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
              Join Riguelni Platform
            </AlertDialogTitle>
          </div>
          <div className="space-y-4">
            <AlertDialogDescription className="text-base sm:text-lg text-muted-foreground/90 leading-relaxed text-center">
              Create your account to become a seller or buyer at Riguelni - where talent meets opportunity.
            </AlertDialogDescription>
            <ul className="text-sm sm:text-base space-y-3 text-left bg-muted/30 dark:bg-muted/10 p-6 rounded-lg">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary/30 flex-shrink-0" />
                Connect with talented freelancers
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary/30 flex-shrink-0" />
                Access exclusive projects and opportunities
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary/30 flex-shrink-0" />
                Secure payments and escrow protection
              </li>
            </ul>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-col sm:flex-row items-center gap-3 mt-8">
          <AlertDialogCancel 
            onClick={handleDontShowAgain}
            className="w-[160px] px-4 py-2 hover:bg-muted/80 text-sm font-medium rounded-full text-muted-foreground"
          >
            Don&apos;t show again
          </AlertDialogCancel>
          <AlertDialogCancel 
            onClick={handleRemindLater}
            className="w-[160px] px-4 py-2 hover:bg-muted/80 text-sm font-medium rounded-full text-muted-foreground"
          >
            Remind later
          </AlertDialogCancel>
          <Link 
            href="https://riguelni.vercel.app/signup" 
            target="_blank" 
            className="w-[160px]"
            onClick={handleCreateAccount}
          >
            <AlertDialogAction className="w-full bg-primary hover:bg-primary/90 group text-sm font-medium rounded-full">
              <span className="flex items-center justify-center gap-1.5 px-4 py-2">
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