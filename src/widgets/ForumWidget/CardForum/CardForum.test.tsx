import { screen, render } from '@testing-library/react';

import CardForum from './CardForum';

import { CommentDTO, TopicDTO, UserInfoDTO } from '@/shared/services/api/user/topicDTO';

const validDate = '2023-01-01T00:00:00.000Z';

const baseUser: UserInfoDTO = {
  id: 1,
  email: 'test',
  firstname: 'test',
  lastname: 'test',
};

const baseComment: CommentDTO = {
  id: 1,
  content: 'test',
  dateTime: validDate,
  likes: 1,
  dislike: 1,
  userInfoDto: baseUser,
};

const baseTopic: TopicDTO = {
  id: 1,
  title: 'test',
  content: 'test',
  creationDate: validDate,
  lastUpdateDate: validDate,
  topicStarter: baseUser,
  commentDtoList: [baseComment],
};

describe('CardForum component', () => {
  it('render component', () => {
    render(<CardForum item={baseTopic} />);
  });

  it('alt text check', () => {
    render(<CardForum item={baseTopic} />);
    const altTextImage = screen.getByAltText('аватар профиля');
    expect(altTextImage).toBeInTheDocument();
  });

  it('check user name', () => {
    const topicWithUser = {
      ...baseTopic,
      topicStarter: { ...baseUser, firstname: 'John', lastname: 'Doe' },
    };

    render(<CardForum item={topicWithUser} />);
    const name = screen.getByText('John Doe');
    expect(name).toBeInTheDocument();
  });

  it('check tag H3', () => {
    const topicWithUser = {
      ...baseTopic,
      topicStarter: { ...baseUser, firstname: 'John', lastname: 'Doe' },
    };

    render(<CardForum item={topicWithUser} />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
  });
});
