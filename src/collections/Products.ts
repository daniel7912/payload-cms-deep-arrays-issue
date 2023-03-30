import type { CollectionConfig } from "payload/types";
import ListAmountDefaults from "../fields/ListAmountDefaults/field";

const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "components",
      type: "relationship",
      relationTo: "components",
      hasMany: true,
    },
    {
      type: "ui",
      name: "listAmountDefaults",
      admin: {
        components: {
          Field: ListAmountDefaults,
        },
      },
    },
    {
      name: "variations",
      type: "array",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "listAmounts",
          type: "array",
          fields: [
            {
              name: "component",
              type: "relationship",
              relationTo: "components",
            },
            {
              name: "amountRequired",
              type: "number",
              required: true,
              defaultValue: 1,
            },
          ],
        },
      ],
    },
  ],
};

export default Products;
