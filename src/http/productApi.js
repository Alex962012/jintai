import axios from "../../axios";
// export const createType=async(type)=>{
//     const {data} =await axios.post
// }


export const fetchTypes = async () => {
    const data = await axios.get('type/getAll')
    return data

}