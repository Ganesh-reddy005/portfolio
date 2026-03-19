"use client";

import { cn } from "@/lib/utils";
import { Sparkles, Github, ExternalLink, Calendar } from "lucide-react";
import React from "react";

export interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  status?: string;
  tags?: string[];
  github?: string;
  live?: string;
  iconClassName?: string;
  titleClassName?: string;
}

export function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-emerald-500" />,
  title = "Project",
  description = "Project description",
  date = "Just now",
  status,
  tags = [],
  github,
  live,
  iconClassName = "text-emerald-500",
  titleClassName = "text-emerald-600",
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-[20rem] w-[22rem] md:w-[28rem] -skew-y-[4deg] flex-col justify-between rounded-xl border border-slate-200 bg-white/90 backdrop-blur-sm p-6 transition-all duration-700 hover:border-emerald-300 hover:bg-white hover:shadow-xl hover:shadow-emerald-500/10 hover:z-50 [&>*]:flex [&>*]:flex-col [&>*]:gap-2 shadow-lg",
        className
      )}
    >
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-3 flex-row">
          <span className={cn("relative inline-flex items-center justify-center rounded-full bg-emerald-100 p-2", iconClassName)}>
            {icon}
          </span>
          <p className={cn("text-xl font-bold text-slate-800", titleClassName)}>{title}</p>
        </div>
        
        <div className="flex items-center gap-3 text-xs mb-4 flex-row">
          <span className="flex items-center gap-1.5 text-slate-500 font-medium">
            <Calendar className="w-4 h-4" />
            {date}
          </span>
          {status && (
            <span className={cn(
              "px-3 py-1 rounded-full font-medium flex-row",
              status === 'In Development' ? 'bg-blue-100 text-blue-600' :
              status === 'Live' ? 'bg-emerald-100 text-emerald-600' :
              status === 'Ongoing' ? 'bg-amber-100 text-amber-600' :
              'bg-slate-100 text-slate-600'
            )}>
              {status}
            </span>
          )}
        </div>

        <p className="text-slate-600 leading-relaxed mb-6">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6 flex-row">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-lg border border-slate-200">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-4 pt-4 border-t border-slate-100 flex-row items-center">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors font-medium text-sm"
          >
            <Github className="w-5 h-5" />
            Code
          </a>
        )}
        {live && live !== "#" && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-emerald-600 hover:text-emerald-500 transition-colors font-medium text-sm"
          >
            <ExternalLink className="w-5 h-5" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export interface DisplayCardsProps {
  cards: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  // Adding specific staggered positioning classes for up to 5 cards to perfectly "stack"
  // If there are more cards, it loops the classes, or we just dynamically generate them
  
  const getCardClasses = (index: number) => {
    // Mobile: layout as standard flow blocks.
    // Desktop: absolute stack that fans out on group hover.
    return cn(
      `relative md:absolute md:[grid-area:stack] transition-all duration-500 ease-out md:hover:z-[100] md:hover:scale-105`,
      index === 0 ? "z-50 md:group-hover:-translate-x-[16rem] md:group-hover:-translate-y-[4rem] lg:group-hover:-translate-x-[20rem] lg:group-hover:-translate-y-[5rem] md:group-hover:rotate-[-5deg]" :
      index === 1 ? "md:translate-x-4 md:translate-y-4 z-40 md:group-hover:-translate-x-[8rem] md:group-hover:-translate-y-[2rem] lg:group-hover:-translate-x-[10rem] lg:group-hover:-translate-y-[2.5rem] md:group-hover:rotate-[-2deg]" :
      index === 2 ? "md:translate-x-8 md:translate-y-8 z-30 md:group-hover:translate-x-0 md:group-hover:translate-y-0 md:group-hover:rotate-0" :
      index === 3 ? "md:translate-x-12 md:translate-y-12 z-20 md:group-hover:translate-x-[8rem] md:group-hover:translate-y-[2rem] lg:group-hover:translate-x-[10rem] lg:group-hover:translate-y-[2.5rem] md:group-hover:rotate-[2deg]" :
      index === 4 ? "md:translate-x-16 md:translate-y-16 z-10 md:group-hover:translate-x-[16rem] md:group-hover:translate-y-[4rem] lg:group-hover:translate-x-[20rem] lg:group-hover:translate-y-[5rem] md:group-hover:rotate-[5deg]" :
      `md:translate-x-${(index)*4} md:translate-y-${(index)*4} z-0`
    );
  };

  return (
    <div className="group flex flex-col md:grid md:[grid-template-areas:'stack'] gap-6 md:gap-0 place-items-center opacity-100 animate-in fade-in-0 duration-700 md:min-h-[600px] w-full max-w-6xl mx-auto py-10 md:py-20 lg:hover:w-[120%] lg:hover:-ml-[10%] transition-all">
      {cards.map((cardProps, index) => (
        <DisplayCard 
          key={index} 
          {...cardProps} 
          className={cn(getCardClasses(index), cardProps.className)} 
        />
      ))}
    </div>
  );
}
