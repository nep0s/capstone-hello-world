export interface Article {
  story_id: string;
  created_at: Date | string;
  deleted_at: null | Date | string;
  story_title: string;
  url: string;
  author: string;
}
