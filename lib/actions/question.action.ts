"use server";

import { connect } from "http2";
import { connectToDatabase } from "../mongoose";

export async function createQuestion(params: any) {
  try {
    connectToDatabase();
  } catch {}
}
