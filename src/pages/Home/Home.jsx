import { SliderForHome } from "../../component/Slider/SliderForHome";
import { Contacts } from "../../component/Contacts/Contacts";
import { Advantage } from "../../component/Advantage/Advantage";
export const Home = () => {
    return (
        <div>
            <SliderForHome></SliderForHome>
            <Advantage />
            <Contacts></Contacts>
        </div>
    );
};
