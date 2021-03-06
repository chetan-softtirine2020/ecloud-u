import { COURSE } from "../../actions/course/course_action";

export const initState = {
  details: {},
  courseList: [],
  moduleList: [],
  is_done: false,
  loading: false,
  errors: [],
  isCourseCreated:false,
  isAllCourseCreated:false,
  playCourseData:{}
};

const courseReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case COURSE.ERROR:
      return {
        ...state,
        loading: false,
        isAllCourseCreated:false,
        errors: payload
      };
    case COURSE.REQUEST:
      return {
        ...state,
        loading: true,
        is_done: false,
        isAllCourseCreated:false,
        errors: [],
      };
    case COURSE.ADD_COURSE:
      return {
        ...state,
        loading: false,
        is_done: true,
        isCourseCreated:true,
        isAllCourseCreated:false,
        errors: [],
      };
    case COURSE.LIST_COURSE:
      return {
        ...state,
        loading: false,
        errors: [],
        courseList: payload,
        is_done: false,
        isAllCourseCreated:false,
        isCourseCreated:false
      };
    case COURSE.LIST_MODULE:     
      return {
        ...state,
        loading: false,
        errors: [],
        moduleList: payload,
        isAllCourseCreated:false,
        is_done: false,
      };

    case COURSE.ADD_MODULE: 
      return {
        ...state,
        loading: false,
        is_done: true,
        isAllCourseCreated:false,        
        errors: [],
      };
      case COURSE.ADD_ALL_COURSE:
        return {
          ...state,
          loading: false,
          is_done: true,
          isAllCourseCreated:true, 
          errors: [],
        };    
        case COURSE.PLAY_COURSE: 
        return {
          ...state,
          loading: false,
          is_done: true,
          isAllCourseCreated:false,
          playCourseData:payload,  
          errors: [],
        };    
      
    default:
      return state;
  }
};

export default courseReducer;
