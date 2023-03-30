import { buildConfig } from "payload/config";
import path from "path";
// import Examples from './collections/Examples';
import Components from "./collections/Components";
import Products from "./collections/Products";
import Users from "./collections/Users";

export default buildConfig({
  serverURL: "http://localhost:3000",
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    // Add Collections here
    Components,
    Products,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  onInit: async (payload) => {
    /**
     * Seed Data
     */

    const componentsModel = await payload.collections["components"].Model;
    const productsModel = await payload.collections["products"].Model;
    const usersModel = await payload.collections["users"].Model;

    // @ts-ignore
    await componentsModel.deleteMany({});
    await productsModel.deleteMany({});
    await usersModel.deleteMany({});

    await payload.create({
      collection: "users",
      data: {
        email: "dev@payloadcms.com",
        password: "test",
      },
    });

    /**
     * Setup Default Components
     */
    const component1 = await payload.create({
      collection: "components",
      data: {
        name: "Component 01",
      },
    });

    const component2 = await payload.create({
      collection: "components",
      data: {
        name: "Component 02",
      },
    });

    const component3 = await payload.create({
      collection: "components",
      data: {
        name: "Component 03",
      },
    });

    /**
     * Setup a test product
     */
    await payload.create({
      collection: "products",
      data: {
        name: "Product 01",
        components: [component1.id, component2.id, component3.id],
        variations: [
          { title: "Test Variation 01" },
          { title: "Test Variation 02" },
          { title: "Test Variation 03" },
        ],
      },
    });
  },
});
