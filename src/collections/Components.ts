import type { CollectionConfig } from "payload/types";

const Components: CollectionConfig = {
  slug: "components",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
  ],
};

export default Components;
