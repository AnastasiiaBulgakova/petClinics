export interface UserInfoDTO {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
}

export interface CommentDTO {
  id: number;
  content: string;
  dateTime: string;
  likes: number;
  dislike: number;
  userInfoDto: UserInfoDTO;
}

export interface TopicDTO {
  id: number;
  title: string;
  content: string;
  creationDate: string;
  lastUpdateDate: string;
  topicStarter: UserInfoDTO;
  commentDtoList: CommentDTO[];
}

export interface CreateTopicDTO {
  title: string;
  content: string;
}
