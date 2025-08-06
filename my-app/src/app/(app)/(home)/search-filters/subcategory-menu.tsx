import {Category} from "@payload-types"


interface Props {
    category: Category;
    isOpen: boolean;
    position: { top: number, left: number };
}


export const SubcategoryMenu = ({
    category,
    isOpen,
    position,
}: Props) => {
    if (!isOpen || !category.subcategories || category.subcategories.length === 0) {
        return null
    }
}