"use client";

import ReactMarkdown from "react-markdown";
import { useState } from "react";
import type { Components } from "react-markdown";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function OverviewPage() {
  const components: Partial<Components> = {
    h1: ({ children }) => {
      return (
        <h1 className="scroll-mt-[50vh] mb-8">
          {children}
        </h1>
      );
    },
    h2: ({ children }) => {
      const id = children?.toString().toLowerCase().replace(/\s+/g, '-');
      return (
        <h2 id={id} className="scroll-mt-[50vh] mt-8 mb-4">
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      return (
        <h3 className="scroll-mt-[50vh] mt-6 mb-3">
          {children}
        </h3>
      );
    },
  };

  const [markdownContent] = useState(`# Introduction

Welcome to the Project Management section of the RIGUELNI documentation. Here, we'll explore how our platform helps teams work together effectively, manage their projects efficiently, and deliver high-quality results.

## Overview of Our Approach

At RIGUELNI, we believe that successful project management is about creating an environment where teams can work together seamlessly. Our platform combines powerful tools with intuitive design to help you:

- Streamline your workflow
- Keep everyone on the same page
- Track progress effectively
- Deliver results on time

### Efficient Workflow

We focus on making your work process smooth and efficient. Our tools help you:

- Automate repetitive tasks
- Reduce manual work
- Speed up decision-making
- Keep everything organized

### Collaborative Environment

Teamwork is at the heart of what we do. Our platform makes it easy to:

- Work together in real-time
- Share ideas and feedback
- Keep everyone informed
- Build strong team relationships

## Core Objectives

Our project management tools are designed to help you achieve three main goals:

### Transparency

- Clear visibility into project status
- Easy access to important information
- Open communication channels
- Real-time updates

### Efficiency

- Streamlined processes
- Automated workflows
- Quick access to tools
- Time-saving features

### Quality

- High standards for deliverables
- Built-in quality checks
- Performance monitoring
- Continuous improvement

## Key Components of Our Project Management

Our platform includes several key features to help you manage projects effectively:

### Version Control

- Track changes easily
- Manage different versions
- Keep history organized
- Revert when needed

### Team Collaboration

- Work together smoothly
- Share resources
- Coordinate efforts
- Stay connected

### Project Planning

- Set clear goals
- Create timelines
- Allocate resources
- Monitor progress

## Why Project Management Matters

Effective project management is crucial for success because it:

- Helps teams work better together
- Keeps projects on track
- Ensures quality results
- Saves time and resources

By using our project management tools, you can create a more organized, efficient, and successful work environment for your team.`);

  return (
    <div className="min-h-screen bg-background">
      <main className="flex-1 max-w-3xl mx-auto pb-16 pt-16">
        <div className="min-h-[200px] prose prose-lg dark:prose-invert prose-primary">
          <ReactMarkdown components={components}>{markdownContent}</ReactMarkdown>
        </div>

        <div className="flex items-center justify-end mt-20 pt-8 border-t border-border/40">
          <Link
            href="/docs/project-management/content/version-control/git-github-code-hosting"
            className="group flex items-center gap-4 px-5 py-3 rounded-lg hover:bg-accent/60 hover:shadow-sm transition-all duration-300 relative overflow-hidden no-underline"
          >
            <div className="flex flex-col items-end relative z-10">
              <span className="text-xs font-medium text-muted-foreground/60 mb-1.5 group-hover:text-muted-foreground/80 transition-colors duration-200">
                Next
              </span>
              <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground group-hover:translate-x-0.5 transition-all duration-300">
                Git & GitHub for Code Hosting
              </span>
            </div>
            <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
              <ChevronRight className="h-4 w-4 text-primary group-hover:text-primary group-hover:translate-x-0.5 transition-transform duration-300" />
            </div>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent to-accent/0 group-hover:to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
        </div>
      </main>
    </div>
  );
} 