import { capitalize } from "lodash";
import React from "react";

function CategorySelect({ categories }): JSX.Element {
     return (
          <select id="cat" name="cat">
               <option value="">All Categories</option>
               {categories &&
                    categories.map((category, idx) => (
                         <React.Fragment key={idx}>
                              {!category.parent_id && (
                                   <option value={category.id}>{category.name}</option>
                              )}
                              {category.child_id.map((id, idx) => {
                                   const child = categories.find((cat) => cat.id === id);
                                   if (child) {
                                        return (
                                             <option value={child.id} key={idx}>
                                                  - {capitalize(child.name)}
                                             </option>
                                        );
                                   } else {
                                        return <></>;
                                   }
                              })}
                         </React.Fragment>
                    ))}
          </select>
     );
}

export default CategorySelect;
