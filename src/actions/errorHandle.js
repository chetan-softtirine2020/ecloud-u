

export const errorMessage = (err,errorType) => {
    switch (err.response.status) {
      case 422:     
        return { type: errorType, payload: err.response.data };
      case 405:
        return { type: errorType, payload: { other_error: "Method Not Allowed" } };
      case 500:
        return {
          type: errorType,
          payload: { other_error: "Internal Serve Error."},
        };
        case 403:
          return {
            type: errorType,
            payload: { other_error: err.response.data.message },
          };
      default:
        return {  
          type: errorType,
          payload: { other_error: "Something went worng." },
        };
    }
  };