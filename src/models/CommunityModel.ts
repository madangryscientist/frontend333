export interface CommunityDbModel {
  id?: string;
  question: string;
  active: boolean;
  count: number;
  comment: CommunityCommentDbModel[];
}
export interface CommunityCommentDbModel {
 
  communityId: number;
  comment: string;
}
