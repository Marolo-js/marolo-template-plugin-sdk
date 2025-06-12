import { IExampleTemplate } from "interfaces/IExampleTemplate";
import { TemplatePlugin } from "marolo.js";

export class ExampleTemplate extends TemplatePlugin {
  private template: IExampleTemplate;
  public baseDir: string;

  constructor(template: IExampleTemplate, baseDir: string) {
    super(template, baseDir);
    this.template = template;
    this.baseDir = baseDir;
  }

  resolve(): IExampleTemplate {
    return this.template;
  }
}
