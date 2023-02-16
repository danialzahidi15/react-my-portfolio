import {createClient} from 'next-sanity'

export default createClient({
  projectId: "ia2cxzc3",
  dataset: "production",
  apiVersion: "2022-08-12",
  useCdn: true,
});
