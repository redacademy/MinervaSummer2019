import {gql} from 'apollo-boost';

/*
 * User related queries
 */

export const ALL_USERS_QUERY = gql`
  {
    allUsers {
      id
      bio
      firstName
      lastName
      location
      school
      interests {
        id
      }
    }
  }
`;

export const USER_QUERY = gql`
  query User($id: ID!) {
    User(id: $id) {
      id
      firstName
      lastName
      photo {
        url
      }
      location
      school
      bio
      lookingFor
      waysToMeet
      interests {
        title
        id
      }
      posts {
        id
      }
    }
  }
`;

export const SUGGESTED_USERS_QUERY = gql`
  query($interest1: ID!, $interest2: ID!, $interest3: ID!) {
    allUsers(
      filter: {
        AND: [
          {interests_some: {id: $interest1}}
          {interests_some: {id: $interest2}}
          {interests_some: {id: $interest3}}
        ]
      }
      first: 5
    ) {
      firstName
      bio
      lastName
      id
      school
      location
    }
  }
`;

/*
 * Post & Interests related queries
 */

export const GET_ALL_POSTS = gql`
  query {
    allPosts(orderBy: createdAt_DESC) {
      author {
        id
        firstName
        lastName
        photo {
          url
        }
      }
      type
      id
      createdAt
      content
      likes {
        id
      }
      comments {
        id
        author {
          firstName
          lastName
          photo {
            url
          }
        }
        content
        likes {
          id
        }
      }
    }
  }
`;

export const ALL_INTERESTS = gql`
  {
    allInterests {
      id
      title
      type
    }
  }
`;

/*
 * Auth & User related mutations
 */

export const CREATE_USER_MUTATION = gql`
  mutation createUser(
    $bio: String!
    $email: String!
    $firstName: String!
    $lastName: String!
    $location: String
    $lookingFor: String!
    $password: String!
    $school: String
    $waysToMeet: [String!]
    $interestsIds: [ID!]
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      bio: $bio
      location: $location
      school: $school
      password: $password
      interestsIds: $interestsIds
      lookingFor: $lookingFor
      waysToMeet: $waysToMeet
    ) {
      email
      password
    }
  }
`;

export const AUTHENTICATE_USER_MUTATION = gql`
  mutation authenticateUser($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      id
      token
    }
  }
`;

/*
 * Post related mutations
 */

export const CREATE_POST = gql`
  mutation createPost($authorId: ID, $content: String!, $type: String!) {
    createPost(authorId: $authorId, content: $content, type: $type) {
      author {
        id
        firstName
        lastName
        photo {
          url
        }
      }
      type
      id
      createdAt
      content
      likes {
        id
      }
      comments {
        id
        author {
          firstName
          lastName
        }
        content
        likes {
          id
        }
      }
    }
  }
`;

export const DELETE_POST_MUTATION = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`;

export const LIKE_POST_MUTATION = gql`
  mutation addToPostLikes($likesPostId: ID!, $likesUserId: ID!) {
    addToPostLikes(likesPostId: $likesPostId, likesUserId: $likesUserId) {
      likesPost {
        id
      }
    }
  }
`;

export const DISLIKE_POST_MUTATION = gql`
  mutation removeFromPostLikes($likesPostId: ID!, $likesUserId: ID!) {
    removeFromPostLikes(likesPostId: $likesPostId, likesUserId: $likesUserId) {
      likesPost {
        id
      }
    }
  }
`;

/*
 * Comment related mutations
 */

export const CREATE_COMMENT = gql`
  mutation createComment($authorId: ID, $postId: ID, $content: String!) {
    createComment(authorId: $authorId, postId: $postId, content: $content) {
      id
      content
    }
  }
`;

export const LIKE_COMMENT_MUTATION = gql`
  mutation addToCommentLikes($commentLikesCommentId: ID!, $likesUserId: ID!) {
    addToCommentLikes(
      commentLikesCommentId: $commentLikesCommentId
      likesUserId: $likesUserId
    ) {
      commentLikesComment {
        _likesMeta {
          count
        }
      }
    }
  }
`;

export const DISLIKE_COMMENT_MUTATION = gql`
  mutation removeFromCommentLikes(
    $commentLikesCommentId: ID!
    $likesUserId: ID!
  ) {
    removeFromCommentLikes(
      commentLikesCommentId: $commentLikesCommentId
      likesUserId: $likesUserId
    ) {
      commentLikesComment {
        _likesMeta {
          count
        }
      }
    }
  }
`;

//update user profile.
export const UPDATE_PROFILE = gql`
  mutation updateUser(
    $id: ID!
    $firstName: String
    $lastName: String
    $location: String
    $school: String
    $bio: String
    $lookingFor: String
    $waysToMeet: [String!]
    $interestsIds: [ID!]
  ) {
    updateUser(
      id: $id
      firstName: $firstName
      lastName: $lastName
      location: $location
      school: $school
      bio: $bio
      lookingFor: $lookingFor
      waysToMeet: $waysToMeet
      interestsIds: $interestsIds
    ) {
      id
      firstName
      lastName
      photo {
        url
      }
      location
      school
      bio
      lookingFor
      waysToMeet
      interests {
        title
        id
      }
      posts {
        id
      }
    }
  }
`;

export const DELETE_CHAT = gql`
  mutation deleteConversation($id: ID!) {
    deleteConversation(id: $id) {
      id
    }
  }
`;

export const GET_USERS = gql`
  query($id: ID!) {
    allUsers(filter: {id_not: $id}) {
      id
      firstName
      lastName
      photo {
        url
      }
    }
  }
`;
export const GET_USERS_NOT_IN_CHAT = gql`
  query($ids: [ID!]!) {
    allUsers(filter: {id_not_in: $ids}) {
      id
      firstName
      lastName
      photo {
        url
      }
    }
  }
`;

export const CREATE_CHAT = gql`
  mutation createConversation($id1: ID!, $id2: ID!) {
    createConversation(membersIds: [$id1, $id2]) {
      id
      members {
        id
        firstName
        lastName
        photo {
          url
        }
      }
      messages {
        content
        author {
          id
        }
        sentAt
      }
    }
  }
`;

export const GET_USER_CHATS = gql`
  query($id: ID!) {
    allConversations(filter: {members_some: {id: $id}}) {
      id
      members {
        lastName
        firstName
        id
        photo {
          url
        }
      }
      messages {
        id
        content
        sentAt
        author {
          id
          firstName
          lastName
        }
      }
    }
  }
`;

export const CREATE_MESSAGE = gql`
  mutation createMessage(
    $conversationId: ID!
    $authorId: ID!
    $content: String
    $sentAt: DateTime!
  ) {
    createMessage(
      conversationId: $conversationId
      authorId: $authorId
      content: $content
      sentAt: $sentAt
    ) {
      id
    }
  }
`;

export const CHAT_SUBSCRIPTION = gql`
  subscription($id: ID!) {
    Message(filter: {node: {conversation: {id: $id}}}) {
      node {
        id
        sentAt
        content
        author {
          id
          firstName
          lastName
          photo {
            url
          }
        }
      }
    }
  }
`;

export const GET_CHAT = gql`
  query($id: ID!) {
    Conversation(id: $id) {
      members {
        id
      }
      messages {
        id
        sentAt
        content
        author {
          id
          firstName
          lastName
          photo {
            url
          }
        }
      }
    }
  }
`;

export const ADD_USER_TO_CHAT = gql`
  mutation addToUserConversation($chatId: ID!, $userId: ID!) {
    addToUserConversation(
      conversationConversationId: $chatId
      membersUserId: $userId
    ) {
      membersUser {
        id
      }
    }
  }
`;
