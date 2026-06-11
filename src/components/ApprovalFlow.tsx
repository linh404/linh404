"use client";

import { motion } from "framer-motion";
import { CheckCircle2, User, Building, FileSignature } from "lucide-react";
import { useI18n } from "./I18nProvider";

export function ApprovalFlow() {
  const { t } = useI18n();
  const nodeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.4,
      },
    }),
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: (i: number) => ({
      width: "100%",
      transition: {
        delay: i * 0.3 + 0.2,
        duration: 0.4,
      },
    }),
  };

  const steps = [
    { icon: User, label: t("flow_draft") },
    { icon: Building, label: t("flow_official") },
    { icon: FileSignature, label: t("flow_archived") },
  ];

  return (
    <div className="w-full py-4 overflow-hidden border border-border/50 bg-card-muted rounded mt-4 p-4">
      <div className="font-mono text-accent text-xs mb-4">{t("flow_title")}</div>
      <div className="flex items-center justify-between relative px-2">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.label} className="flex flex-col items-center gap-2 relative z-10">
              <motion.div
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={nodeVariants}
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  index === steps.length - 1 ? "bg-accent/20 border-accent text-accent" : "bg-card border-border text-muted"
                } shadow-lg`}
              >
                <Icon size={18} />
              </motion.div>
              <motion.span
                custom={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3 + 0.1 }}
                className={`text-[10px] font-mono ${index === steps.length - 1 ? "text-accent" : "text-secondary"}`}
              >
                {step.label}
              </motion.span>
            </div>
          );
        })}

        {/* Connecting lines */}
        <div className="absolute top-5 left-10 right-10 flex justify-between z-0">
          {[0, 1].map((i) => (
            <div key={i} className="h-[2px] bg-border relative flex-1 mx-2">
              <motion.div
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={lineVariants}
                className="absolute top-0 left-0 h-full bg-accent/50"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
