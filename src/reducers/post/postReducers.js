import {
  SET_ALL_POST,
  SET_CURRENT_POST,
  SET_POST_IMG,
  SET_POST_TAGS,
  SET_POST_OLD_IMG,
  SET_POST_AUTHOR_NAME,
  SET_POST_AUTHOR_IMG,
  SET_POST_AUTHOR_EMAIL,
  SET_POST_AUTHOR_ID,
  SET_PAGINATED_POST,
  SET_POSTS_LENGTH,
  RESET_POST,
  TOGGLE_LIKE_BTN,
  SET_POST_MAIN_TEXT,
  SET_POST_HEADING,
} from "../../constants/posts/postsConst";

const initial_state = {
  all_post: [],
  current_post: {
    comments: [],
    tags: [],
    likes: [],
    author: {
      name: "",
      url: "",
    },
  },
  tags: [],
  img: "",
  old_img: "",
  heading: "",
  author_name: "",
  author_email: "",
  author_img: "",
  author_id: "",
  paginated_post: [],
  posts_length: 0,
  disable_btn: false,
  main_text: "",
};

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case SET_ALL_POST:
      return (state = { ...state, all_post: action.payload });
    case SET_CURRENT_POST:
      return (state = { ...state, current_post: action.payload });
    case SET_POST_HEADING:
      return (state = { ...state, heading: action.payload });
    case SET_POST_IMG:
      return (state = { ...state, img: action.payload });
    case SET_POST_OLD_IMG:
      return (state = { ...state, old_img: action.payload });
    case SET_POST_TAGS:
      return (state = { ...state, tags: action.payload });
    case SET_POST_AUTHOR_ID:
      return (state = { ...state, author_id: action.payload });
    case SET_POST_AUTHOR_EMAIL:
      return (state = { ...state, author_email: action.payload });
    case SET_POST_AUTHOR_NAME:
      return (state = { ...state, author_name: action.payload });
    case SET_POST_AUTHOR_IMG:
      return (state = { ...state, author_img: action.payload });
    case SET_PAGINATED_POST:
      return (state = { ...state, paginated_post: action.payload });
    case SET_POSTS_LENGTH:
      return (state = { ...state, posts_length: action.payload });
    case TOGGLE_LIKE_BTN:
      return (state = { ...state, disable_btn: action.payload });
    case SET_POST_MAIN_TEXT:
      return (state = { ...state, main_text: action.payload });
    case RESET_POST:
      return (state = {
        ...state,
        current_post: "",
        tags: [],
        img: "",
        old_img: "",
        caption: "",
        author_name: "",
        author_email: "",
        author_img: "",
        author_id: "",
        main_text: "",
        heading: "",
      });
    default:
      return state;
  }
}
