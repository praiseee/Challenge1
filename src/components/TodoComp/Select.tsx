"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon } from "lucide-react";
import { cn } from "../../lib/utils";

// Root
function Select({ ...props }: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root {...props} />;
}

// Trigger
function SelectTrigger({
    className,
    selectedColor,
    ...props
  }: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
    selectedColor?: string;
  }) {
    return (
      <SelectPrimitive.Trigger
        className={cn(
          "rounded-sm w-8 h-8 p-0 flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        style={{
          backgroundColor: selectedColor || "transparent",
        }}
        {...props}/>
    );
  }  

// Content
function SelectContent({
  className,
  children,
  position = "popper",
  align = "center",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        className={cn(
          "bg-popover text-popover-foreground rounded-md border shadow-md overflow-auto min-w-[4rem]",
          className
        )}
        position={position}
        align={align}
        {...props}>

        {children}
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

// Item
function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      className={cn(
        "relative flex items-center justify-center w-8 h-8 cursor-pointer rounded-sm outline-none select-none",
        className
      )}
      {...props}>

      <SelectPrimitive.ItemIndicator className="absolute right-1 top-1">
        <CheckIcon className="w-3 h-3 text-white" />
      </SelectPrimitive.ItemIndicator>
      {children}
    </SelectPrimitive.Item>
  );
}

export { Select, SelectTrigger, SelectContent, SelectItem };
