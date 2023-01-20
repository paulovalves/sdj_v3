import { createServer, Model } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      ente: Model,
    },

    seeds(server) {
      server.create("ente", { id: '1', cnpj: "00000000000" })
      server.create("ente", { id: '2', cnpj: "11111111111" })
    },

    routes() {
      this.namespace = "api"

      this.get("/users", (schema) => {
        return schema.users.all();
      })
    },
  })

  return server
}
