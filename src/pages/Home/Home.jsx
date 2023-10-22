import { SliderForHome } from "../../component/Slider/SliderForHome";
import { Contacts } from "../../component/Contacts/Contacts";
import { Advantage } from "../../component/Advantage/Advantage";
import { Whatsapp } from "../../component/whatsaap/Whatsapp";
export const Home = () => {
    return (
        <div>
            <SliderForHome></SliderForHome>
            <Advantage />
            <Contacts></Contacts>
            <Whatsapp></Whatsapp>
        </div>
    );
};
