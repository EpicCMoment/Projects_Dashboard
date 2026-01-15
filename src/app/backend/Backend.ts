import * as z from "zod";
import { SampleSchema } from "./models/sample-wrapper";
import sampleDataRaw from "./sample_data.json";

// because SampleSchema is an object, we need to infer its type
type SampleDataType = z.infer<typeof SampleSchema>;

let sampleDataParsed: SampleDataType;

try {
  sampleDataParsed = SampleSchema.parse(sampleDataRaw);
} catch (err) {
  console.log(err);
}

export function GetSampleData() {
  return sampleDataParsed;
}
