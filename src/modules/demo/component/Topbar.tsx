import React from 'react';
import './topbar.css';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo"> Drop Down</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NavigateBefore />
            <span className="topIconBadge" />
          </div>
          <div className="topbarIconContainer">
            <NavigateNext />
            <span className="topIconBadge" />
          </div>
        </div>
      </div>
    </div>
  );
}
