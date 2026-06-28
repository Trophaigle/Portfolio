"use client";

import React from "react";
import Highlight from "../utils/highlight";
import { useTranslations } from "next-intl";

const Goal = () => {
  const t = useTranslations("HomeHightlight");
  return (
    <div>
      <Highlight
            title={t("title")}
            description={t("description")}
            imageSrc="/images/Goal.png"
          />
    </div>
  );
};

export default Goal;