export interface CommunityDbModel {
  id: number;
  question: string;
  active: boolean;
  count: number;
  comment: CommunityCommentDbModel[];
}
export interface CommunityCommentDbModel {
  id: number;
  communityId: number;
  comment: string;
}
