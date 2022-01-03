import { getQuote } from "../api/api";

const SET_QUOTE = "SET_QUOTE";

const initialState = {
  text: "",
  author: "",
};

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUOTE: {
      return { ...state, text: action.text, author: action.author };
    }
    default: {
      return state;
    }
  }
};

const setQuoteAC = (text, author) => {
  return { type: SET_QUOTE, text, author };
};

export const getQuoteThC = () => async (dispatch) => {
  let quotes = await getQuote();
  dispatch(setQuoteAC(quotes[0].text, quotes[0].author));
};

export default quoteReducer;
