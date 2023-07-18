import React from "react";
import type { NextPage } from "next";
import matter, { GrayMatterFile } from "gray-matter";
import PrivacyPolicy from "../../components/Legal";
import styles from "../../styles/legal.module.scss";

import { fetchMarkdownFile } from "@/api/legal.api";

const PrivacyPolicyPage = async () => {
     // const { content, data: metaData } = privacyPolicyData;
     // const [data, setData] = React.useState("");

     const data = await fetchMarkdownFile();

     return (
          <div className={styles.legalDocs}>
               {/* <h1 className="text-3xl font-bold">{metaData.title}</h1> */}
               <PrivacyPolicy content={data} />
          </div>
     );
};
export default PrivacyPolicyPage;
