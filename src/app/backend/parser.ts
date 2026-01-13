import { SampleSchema } from "./models/sample-wrapper";
import sampleDataRaw from "./sample_data.json";

let sampleDataParsed;

try {
  sampleDataParsed = SampleSchema.parse(sampleDataRaw);
} catch (err) {
  console.log(err);
}

export const sampleData = sampleDataParsed;
