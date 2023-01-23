import express from "express";
import route from "./routes/index.route";

class App {
  public app: express.Application;
  public port: number;
  appRoutes = route;

  constructor(port: number) {
    this.app = express();
    this.port = port;

    this.initialiseMiddlewares();
    this.initialiseRoutes(this.appRoutes);
  }

  private initialiseMiddlewares() {
    this.app.use(express.json());
  }

  private initialiseRoutes(router: any) {
    router.forEach((route: any) => {
      this.app.use("/api/v1", route);
    });
  }

  //server listens on this method
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`server running on port ${this.port}`);
    });
  }
}

export default App;
