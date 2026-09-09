export interface Coffee {
  id: number;
  name: string;
  origin: string;
  notes: string;
  price: number;
  emoji: string;
  badge?: string; //why a question mark?=optional property
}
