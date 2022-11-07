import fs from "fs";

export default class Properties {
  private content: string;
  private object: { [key: string]: string };

  constructor() {
    this.content = "";
    this.object = {};
  }

  init(src: string) {
    this.content = fs.readFileSync(src, "utf-8");
    const properties = this.content.split("\n").filter(v=>v);
    properties.forEach(property => {
      const key = property.split("=")[0].trim();
      const value = property.split("=").slice(1).join("=").trim();

      this.object[key] = value;
    });

    return this;
  }

  get(propertyName: string) {
    return this.object[propertyName] ?? undefined;
  }
}