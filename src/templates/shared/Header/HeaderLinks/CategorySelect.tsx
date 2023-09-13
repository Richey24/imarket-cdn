import { capitalize } from "lodash";

function CategorySelect({ categories }): JSX.Element {
     return (
          <select id="cat" name="cat">
               <option value="">All Categories</option>
               {categories &&
                    categories.map((category) => (
                         <>
                              {!category.parent_id && (
                                   <option value={category.id}>{category.name}</option>
                              )}
                              {category.child_id.map((id) => {
                                   const child = categories.find((cat) => cat.id === id);
                                   if (child) {
                                        return (
                                             <option value={child.id}>
                                                  - {capitalize(child.name)}
                                             </option>
                                        );
                                   } else {
                                        return <></>;
                                   }
                              })}
                         </>
                    ))}
          </select>
     );
}

export default CategorySelect;
