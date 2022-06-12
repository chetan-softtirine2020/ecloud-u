

export const errorMessage = (err,errorType) => {
    switch (err.response.status) {
      case 422:     
        return { type: errorType, payload: err.response.data };
      case 405:
        return { type: errorType, payload: { other_error: "Method Not Allowed" } };
      case 500:
        return {
          type: errorType,
          payload: { other_error: "The given data was invalid"},
        };
      default:
        return {  
          type: errorType,
          payload: { other_error: "Something went worng." },
        };
    }
  };