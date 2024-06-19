"use client"

import React from 'react';
import {client, db} from "@/shared/app-write";
import {COLLECTION_PROJECTS, DB_ID} from "@/shared/contants";

const Page = async () => {
    const data = await db.listDocuments(DB_ID, COLLECTION_PROJECTS);

    console.log(data);

    return (
        <div>

        </div>
    );
};

export default Page;
