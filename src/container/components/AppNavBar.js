import React from "react";
import profleIco from "../../images/female-profile.png";

const AppNavBar = () => {
  return (
    <div>
      <div class="middle-sidebar-header bg-navbar">
        <button class="header-menu"></button>
        <form action="#" class="float-left header-search">
          <div class="form-group mb-0 icon-input">
            <i class="feather-search font-lg text-grey-400"></i>
            <input
              type="text"
              placeholder="Start typing to search.."
              class="border-0 lh-32 pt-2 pb-2 pl-5 pr-3 font-xsss fw-500 rounded-xl w350"
            />
          </div>
        </form>
        <ul class="d-flex ml-auto right-menu-icon">  
          <li>
            <a href="">
              <img
                src={profleIco}
                alt="user"
                class="w40 rounded-circle mt--1"
              />
            </a>
          </li>
          <li>
            <a href="#" class="menu-search-icon">
              <i class="feather-search text-grey-900 font-lg"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppNavBar;
