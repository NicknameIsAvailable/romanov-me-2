import {Client, Databases} from 'appwrite';
import {APP_WRITE_ID, APP_WRITE_URL} from "@/shared/contants";
const client = new Client();

client
    .setEndpoint(APP_WRITE_URL)
    .setProject(APP_WRITE_ID);

const db = new Databases(client)

export {client, db}
