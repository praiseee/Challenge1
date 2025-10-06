import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./accordion";

const AccordionComp: React.FC = () => {
  return (
    <Accordion type="single" collapsible className="w-full space-y-2 pb-16 lg:pb-40">
      <AccordionItem value="item-1">
        <AccordionTrigger className="flex items-center gap-2 text-base group">
          <span className="text-gray-400 group-data-[state=open]:text-orange-500 transition">01</span>
          <span className="text-white">Create the Agent</span>
        </AccordionTrigger>
        <AccordionContent className="text-gray-400">
          Choose an agent type and upload documents so your agent understands your brand, policies, and workflows.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger className="flex items-center gap-2 text-base group">
          <span className="text-gray-400 group-data-[state=open]:text-orange-500 transition">02</span>
          <span className="text-white">Define policies</span>
        </AccordionTrigger>
        <AccordionContent className="text-gray-400">
          Set rules and guardrails in plain language. Specify what’s allowed, what’s restricted, and how the agent should handle different scenarios.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger className="flex items-center gap-2 text-base group">
          <span className="text-gray-400 group-data-[state=open]:text-orange-500 transition">03</span>
          <span className="text-white">Write the flow</span>
        </AccordionTrigger>
        <AccordionContent className="text-gray-400">
          Author the conversation logic in text. Define turns, conditions, fallbacks, and escalations. Add functions, API calls, and custom code when needed.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger className="flex items-center gap-2 text-base group">
          <span className="text-gray-400 group-data-[state=open]:text-orange-500 transition">04</span>
          <span className="text-white">Test and Launch</span>
        </AccordionTrigger>
        <AccordionContent className="text-gray-400">
          Run test calls in real time, debug, and redeploy in seconds. Validate changes with traffic-split A/B experiments. Track versions and roll back safely.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger className="flex items-center gap-2 text-base group">
          <span className="text-gray-400 group-data-[state=open]:text-orange-500 transition">05</span>
          <span className="text-white">Monitor and improve</span>
        </AccordionTrigger>
        <AccordionContent className="text-gray-400">
          Replay calls, review outcomes, and turn real conversations into test suites. Use experiments to confirm improvements before release.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionComp;
