import configPromise from "@payload-config"
import { getPayload } from "payload"
import {Category} from "@payload-types"

import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { SearchFilters } from "./search-filters";

interface Props {
    children: React.ReactNode;
}


const Layout = async ({ children }: Props) => {
    const payload = await getPayload({
        config: configPromise,
    });
    
    const data = await payload.find({
        collection: "categories",
        depth: 1,  //Populate subcategory
        pagination: false,
        where: {
            parent: {
                exists: false,  // In first load parent in second subcategory!!!
            },
        },
    });

    const formattedData = data.docs.map((doc) => ({
        ...doc,
        subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
            //Becouse og depth: 1 we  are confident "doc" will be type of "Category"
            ...(doc as Category),
            subcategories: undefined,
        }))
    }))


    console.log({data, formattedData});
    


    


    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <SearchFilters data={ formattedData} />
            <div className="flex-1 bg-[#F4F4F0]">
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout;