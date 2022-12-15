import { Writable, writable } from "svelte/store";

export type StoreEntry = {
  id: number;
  rating: number;
  text: string;
};

export type Store = Writable<Array<StoreEntry>>;
export const FeedbackStore: Store = writable([
  {
    id: 1,
    rating: 10,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
  },
  {
    id: 2,
    rating: 9,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
  },
  {
    id: 3,
    rating: 8,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
  },
]);
