import { ProjectsLayout } from "@/views/projects";
import React, { FC, ReactNode } from "react";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return <ProjectsLayout>{children}</ProjectsLayout>;
};

export default Layout;
