import Wind from "./wind.jpg";
import Fire from "./fire.jpg";
import Water from "./water.jpg";
import Sun from "./sun.jpg";
import Sea from "./sea.jpg";
import Star from "./star.jpg";
import Tree from "./tree.jpg";
import Sky from "./sky.jpg";
import Ground from "./ground.jpg";

const FlashCardData = () =>  { 

    let WindCard = {selected: false, source: Wind};
    let FireCard = {selected: false, source: Fire};
    let WaterCard = {selected: false, source: Water};
    let SunCard = {selected: false, source: Sun};
    let SkyCard = {selected: false, source: Sky};
    let SeaCard = {selected: false, source: Sea};
    let TreeCard = {selected: false, source: Tree};
    let StarCard = {selected: false, source: Star};
    let GroundCard = {selected: false, source: Ground};

    const flashCards = [ WindCard, FireCard, WaterCard, SunCard, SkyCard, SeaCard, TreeCard, StarCard, GroundCard];
return flashCards;

}

export default FlashCardData;