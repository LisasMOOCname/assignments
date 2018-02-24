import React from "react";
import "./CategoriesNav.css";

function CategoriesNav(props) {
    return (
        <div className="categoriesSection">
            <ul className="categoriesList">
                <li className="categoriesLink"><a className="categoriesLink" href="http://dummylink.com">HTML</a></li>
                    <ul className="subcategoriesList">
                        <li className="subcategoriesLink"><a className="categoriesLink" href="http://dummylink.com">Tags</a></li>
                        <li className="subcategoriesLink"><a className="categoriesLink" href="http://dummylink.com">Attributes</a></li>
                    </ul>
                <li className="categoriesLink"><a className="categoriesLink" href="http://dummylink.com">CSS</a></li>
                    <ul className="subcategoriesList">
                        <li className="subcategoriesLink"><a className="subcategoriesLink" href="http://dummylink.com">Selectors</a></li>
                        <li className="subcategoriesLink"><a className="subcategoriesLink" href="http://dummylink.com">Properties: Values</a></li>
                        <li className="subcategoriesLink"><a className="subcategoriesLink" href="http://dummylink.com">Positioning</a></li>
                    </ul>
                <li className="categoriesLink"><a className="categoriesLink" href="http://dummylink.com">Javascript</a></li>
                    <ul className="subcategoriesList">
                        <li className="subcategoriesLink"><a className="subcategoriesLink" href="http://dummylink.com">Syntax</a></li>
                        <li className="subcategoriesLink"><a className="subcategoriesLink" href="http://dummylink.com">Functions</a></li>
                        <li className="subcategoriesLink"><a className="subcategoriesLink" href="http://dummylink.com">Form Controls</a></li>
                    </ul>
            </ul>
        </div>
    )
}

export default CategoriesNav;