import { env } from "$env/dynamic/private";
import Airtable from "airtable";

export default (new Airtable({ apiKey: env.AIRTABLE_TOKEN })).base(env.AIRTABLE_BASE)(env.AIRTABLE_TABLE);