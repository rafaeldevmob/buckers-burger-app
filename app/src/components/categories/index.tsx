import { FlatList } from "react-native";
import { Text } from "../Text";
import { Category } from "./styles";
import { useState } from "react";
import { CategoryType } from "../../types/Category";

 type CategoriesProps = {
  categories: CategoryType[];
}

export function Categories ({categories}: CategoriesProps){
  const [selectedCategory, setSelectedCategory] = useState<string | null>('');

  function handleSelectCategory(categoryId: string){
    const category = selectedCategory === categoryId ? '' : categoryId;
    setSelectedCategory(category)
  }

  return(
      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingRight:24}}
      data={categories}
      keyExtractor={category => category._id}
      renderItem={({item: category})=>{
        const isSelected = selectedCategory === category._id;
        return(
          <Category onPress={()=> handleSelectCategory(category._id)}>
          <Text size={14} weight="600" opacity={isSelected ? 1 : 0.5}>{category.name}</Text>
        </Category>
        );
      }}
      />
  );
}

