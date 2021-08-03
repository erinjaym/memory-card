import Old from "./images/old.svg";
import Bright from "./images/bright.svg";
import Chant from "./images/chant.svg";
import Companion from "./images/companion.svg";
import Goods from "./images/goods.svg";
import Sparkle from "./images/sparkle.svg";
import Prosperous from "./images/prosperous.svg";
import RisingSun from "./images/rising-sun.svg";
import Spine from "./images/spine.svg";
import Stomach from "./images/stomach.svg";
import Generation from "./images/generation.svg";
import Early from "./images/early.svg";
import Nightbreak from "./images/nightbreak.svg";

const FlashCardData = () =>  { 

    let OldCard = {selected: false, source: Old};
    let BrightCard = {selected: false, source: Bright};
    let ChantCard = {selected: false, source: Chant};
    let CompanionCard = {selected: false, source: Companion};
    let GoodsCard = {selected: false, source: Goods};
    let SparkleCard = {selected: false, source: Sparkle};
    let ProsperousCard = {selected: false, source: Prosperous};
    let RisingSunCard = {selected: false, source: RisingSun};
    let SpineCard = {selected: false, source: Spine};
    let StomachCard = {selected: false, source: Stomach};
    let GenerationCard = {selected: false, source: Generation};
    let EarlyCard = {selected: false, source: Early};
    let NightbreakCard = {selected: false, source: Nightbreak};

    const flashCards = [OldCard, BrightCard, ChantCard, CompanionCard, GoodsCard, SparkleCard, ProsperousCard, 
    RisingSunCard, SpineCard, StomachCard, GenerationCard, EarlyCard, NightbreakCard];
return flashCards;

}

export default FlashCardData;