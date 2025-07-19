import { FeatureTag } from "@/app/core/feature/feature-tags";
import { ElementsSetup } from "@/app/setups/elements/elements.setup";
import { TypoFeature } from "../../core/feature/feature";
import { inject } from "inversify";

export class ConfirmBeforeClearFeature extends TypoFeature {
  @inject(ElementsSetup) private readonly _elementsSetup!: ElementsSetup;

  public readonly name = "Confirm Before Clear";
  public readonly description =
    "Confirms that you want to actually clear the canvas before clearing it";
  public readonly tags = [FeatureTag.DRAWING, FeatureTag.GAMEPLAY, FeatureTag.INTERFACE];
  public readonly featureId = 49;

  protected override async onActivate() {
    const elements = await this._elementsSetup.complete();
    const fillTool = elements.skribblActions.querySelector("[data-tooltip='Clear']");
    if (fillTool) fillTool.classList.add("ask-first");
    else this._logger.error("couldn't get fill tool?");
  }
  
  protected override async onDestroy() {
    const elements = await this._elementsSetup.complete();
    const fillTool = elements.skribblActions.querySelector("[data-tooltip='Clear']");
    if (fillTool) fillTool.classList.remove("ask-first");
    else this._logger.error("couldn't get fill tool?");
  }
}
