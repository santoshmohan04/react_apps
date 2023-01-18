import { prodDataType } from "../model/prodDataModel";

export class prodCategoryData {
  private static prod_categories: prodDataType[] = [
    {
      id: "1",
      name: "Cameras",
      title: "Choose among the best available in the world.",
      image: "1",
    },
    {
      id: "2",
      name: "Watches",
      title: "Original watches from the best brands.",
      image: "10",
    },
    {
      id: "3",
      name: "Shirts",
      title: "Our exquisite collection of shirts at best price.",
      image: "13",
    },
    {
      id: "4",
      name: "SmartPhones",
      title: "The best Smartphones you can buy today.",
      image: "sm",
    },
  ];

  public static getProdCategories() {
    return this.prod_categories;
  }
}
