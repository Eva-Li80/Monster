export interface Monster {
    id: string;
    name: string;
    color: string;
    eyes: number;
    image: string;
  }
  
  export interface Comment {
    id: number;
    text: string;
    authorId: number;
  }
  
  export interface Post {
    id: number;
    title: string;
    text: string;
    authorId: number;
    comments: Comment[];
  }
  
  export interface MonsterData {
    monsters: Monster[];
    posts: Post[];
  }
  
  export type RootStackParamList = {
    Home: undefined;
    Monsters: undefined;
    Monster: { monster: { id: string; name: string; color: string; eyes: number; image: string } }
    Feed: {monster: Monster | null}
    SwithMonsterAccount: undefined;
    Posts: undefined
  };
  