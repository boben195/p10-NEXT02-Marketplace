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

    const backgroundColor = category.color || "#F5F5F5"

    return (
        <div className="fixed z-100"
            style={{
                top: position.top,
                left: position.left,
            }}
        >
            {/*Invisible bridge to maintain hover */}
            <div className="h-3 w-60" />
            <div className="w-60 text-black rounded-md overflow-hidden border">
                <p>Subcategory menu</p>
            </div>
        </div>
    )
}