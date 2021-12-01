import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';
import Topbar from '../../component/Topbar';
import Code from '../../component/Code';

function Demo() {
  const [dropdown, setDropdown] = useState(false);
  const abrirCerrarDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="dropFlex">
      <Topbar />
      <div className="Drop">
        <br />
        <div className="information">
          <div className="title" />
          <p className="text">
            Autocomplete Material-UI doesnt provide a high-level API for solving
            this problem. You are encouraged you to explore the solutions the
            React community has built. In the future, we will look into
            providing a simple component to solve the simple use cases: #9997.
          </p>
        </div>
        <hr />
        <Dropdown
          isOpen={dropdown}
          toggle={abrirCerrarDropdown}
          direction="end"
        >
          <DropdownToggle caret>dropdown ejemplo</DropdownToggle>

          <DropdownMenu>
            <DropdownItem> iten 1 </DropdownItem>
            <DropdownItem> iten 2 </DropdownItem>
            <DropdownItem> iten 3 </DropdownItem>
            <DropdownItem> iten 4 </DropdownItem>
            <DropdownItem> iten 5 </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Code />
    </div>
  );
}
export default Demo;
